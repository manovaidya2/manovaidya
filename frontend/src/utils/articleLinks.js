import { parseFragment } from "parse5";
import { SITE_URL, canonicalPaths, getCanonicalUrl } from "./canonical.js";

const canonicalPages = new Set(canonicalPaths);
const escapeAttribute = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const normalizeArticleLinks = (html = "") => {
  if (!html) return "";
  const fragment = parseFragment(html, { sourceCodeLocationInfo: true });
  const nodes = [...fragment.childNodes];
  const edits = [];
  while (nodes.length) {
    const node = nodes.pop();
    nodes.push(...(node.childNodes || []), ...(node.content?.childNodes || []));
    if (node.tagName !== "a") continue;
    const href = node.attrs.find((attribute) => attribute.name === "href" && !attribute.prefix)?.value;
    const location = node.sourceCodeLocation?.attrs?.href;
    if (!href || !location || href.startsWith("#")) continue;
    let target;
    try { target = new URL(href, SITE_URL); } catch { continue; }
    if (!/^https?:$/.test(target.protocol) || !/^(www\.)?manovaidya\.(org|com)$/.test(target.hostname)) continue;
    const canonical = new URL(getCanonicalUrl(target.pathname));
    if (!canonicalPages.has(canonical.pathname) && !/^\/(blog|case-studies)\/[^/]+\/$/.test(canonical.pathname)) continue;
    const normalized = `${canonical.href}${target.search}${target.hash}`;
    if (normalized !== target.href) edits.push({ ...location, replacement: `href="${escapeAttribute(normalized)}"` });
  }
  // Source offsets let us change only href attributes, preserving the CMS markup.
  for (const { startOffset, endOffset, replacement } of edits.sort((a, b) => b.startOffset - a.startOffset)) {
    html = html.slice(0, startOffset) + replacement + html.slice(endOffset);
  }
  return html;
};
