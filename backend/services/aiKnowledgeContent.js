import { createHash } from 'node:crypto';
import { parse } from 'parse5';

export const SITE = 'https://manovaidya.org';
export const hashText = (text) => createHash('sha256').update(text).digest('hex');
export const cleanText = (value) => String(value || '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (node, name) => node.attrs?.find((entry) => entry.name === name)?.value;
const children = (node) => node.childNodes || [];
const find = (node, predicate) => predicate(node) ? node : children(node).map((child) => find(child, predicate)).find(Boolean);
const excluded = new Set(['script', 'style', 'noscript', 'template', 'nav', 'header', 'footer', 'aside', 'form', 'button', 'svg']);
const ignored = (node) => excluded.has(node.tagName) || attr(node, 'hidden') !== undefined || attr(node, 'aria-hidden') === 'true' || /cookie|chatbot|newsletter|breadcrumb/i.test(`${attr(node, 'id') || ''} ${attr(node, 'class') || ''}`);
const text = (node) => ignored(node) ? '' : node.nodeName === '#text' ? node.value : children(node).map(text).join(' ');

export function publicUrl(value, base = SITE) {
  try {
    const url = new URL(value, base);
    if (url.origin !== SITE || url.username || url.password) return null;
    if (/\.(?!html?$)[a-z0-9]{1,8}$/i.test(url.pathname) || /^\/(api|admin|uploads|assets)(\/|$)/i.test(url.pathname)) return null;
    url.hash = ''; url.search = '';
    return url.href;
  } catch { return null; }
}

export function extractPage(html, url) {
  const doc = parse(html);
  const canonical = find(doc, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
  const declared = canonical && publicUrl(attr(canonical, 'href'), url);
  const robots = find(doc, (node) => node.tagName === 'meta' && /^(robots|googlebot)$/i.test(attr(node, 'name') || '') && /noindex/i.test(attr(node, 'content') || ''));
  if (robots || (declared && declared !== url)) return null; // Reject SPA soft-404s and aliases.
  const main = find(doc, (node) => node.tagName === 'main' || attr(node, 'role') === 'main');
  if (!main) return null;
  const title = cleanText(text(find(doc, (node) => node.tagName === 'title') || main)).slice(0, 250);
  const blocks = []; const links = new Set(); const seen = new Set(); let section = title;
  const walk = (node) => {
    if (ignored(node)) return;
    if (node.tagName === 'a') {
      const href = publicUrl(attr(node, 'href'), url);
      if (href) links.add(href);
    }
    if (/^h[1-6]$/.test(node.tagName)) { section = cleanText(text(node)); return; }
    if (/^(p|li|dt|dd|tr|summary)$/.test(node.tagName)) {
      const value = cleanText(text(node));
      if (value.length > 12 && !seen.has(value)) {
        seen.add(value); blocks.push({ section, text: value });
      }
      // Still discover links within paragraphs/list items without duplicating text.
      const collectLinks = (child) => {
        if (ignored(child)) return;
        if (child.tagName === 'a') { const href = publicUrl(attr(child, 'href'), url); if (href) links.add(href); }
        children(child).forEach(collectLinks);
      };
      children(node).forEach(collectLinks);
      return;
    }
    children(node).forEach(walk);
  };
  walk(main);
  // Header links aid discovery, but never enter knowledge text.
  const discover = (node) => {
    if (node.tagName === 'a') { const href = publicUrl(attr(node, 'href'), url); if (href) links.add(href); }
    if (!['script', 'style', 'template'].includes(node.tagName)) children(node).forEach(discover);
  };
  discover(doc);
  if (blocks.map((block) => block.text).join(' ').length < 100) return null;
  return { url, title, contentType: url.includes('/blog/') ? 'blog' : url.includes('/case-studies/') ? 'case-study' : 'page', blocks, links: [...links] };
}

export function chunkPage(page, { size = 1800, overlap = 220 } = {}) {
  const chunks = []; let buffer = ''; let currentSection = page.title;
  const emit = () => { if (buffer.trim().length > 50) chunks.push({ url: page.url, title: page.title, section: currentSection, contentType: /faq|question/i.test(currentSection) ? 'faq' : page.contentType, text: buffer.trim() }); };
  for (const block of page.blocks) {
    if (buffer && (block.section !== currentSection || buffer.length + block.text.length > size)) {
      emit(); buffer = block.section === currentSection ? buffer.slice(-overlap) + '\n' : '';
    }
    currentSection = block.section;
    // Split unusually long CMS paragraphs too, with bounded overlap.
    let remaining = block.text;
    while (remaining.length > size) {
      if (buffer) { emit(); buffer = ''; }
      buffer = remaining.slice(0, size); emit(); buffer = '';
      remaining = remaining.slice(size - overlap);
    }
    buffer += `${buffer ? '\n' : ''}${remaining}`;
  }
  emit();
  return chunks.map((chunk, position) => ({ ...chunk, position, contentHash: hashText(`${chunk.section}\n${chunk.text}`) }));
}

export function parseRobots(source) {
  const groups = []; let group = null;
  for (const line of source.split(/\r?\n/)) {
    const match = line.replace(/#.*/, '').trim().match(/^([^:]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1].toLowerCase(); const value = match[2].trim();
    if (key === 'user-agent') {
      if (!group || group.rules.length) { group = { agents: [], rules: [] }; groups.push(group); }
      group.agents.push(value.toLowerCase());
    } else if (group && /^(allow|disallow)$/.test(key) && value) group.rules.push({ allow: key === 'allow', value });
  }
  const specific = groups.filter((entry) => entry.agents.some((agent) => agent.includes('manovaidyaknowledge')));
  const rules = (specific.length ? specific : groups.filter((entry) => entry.agents.includes('*'))).flatMap((entry) => entry.rules);
  return (url) => {
    const target = new URL(url).pathname;
    const matched = rules.filter((rule) => new RegExp('^' + rule.value.split('*').map((part) => part.replace(/[.+?^{}()|[\]\\]/g, '\\$&')).join('.*').replace(/\\\$$/, '$')).test(target)).sort((a, b) => b.value.length - a.value.length || Number(b.allow) - Number(a.allow));
    return matched[0]?.allow ?? true;
  };
}
