import { SITE, publicUrl, extractPage, parseRobots } from './aiKnowledgeContent.js';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function fetchWebsite(url, { fetcher = fetch, maxBytes = 8_000_000, allowed = () => true } = {}) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      let current = url;
      for (let hop = 0; hop < 5; hop++) {
        if (new URL(current).origin !== SITE) throw new Error('UNSAFE_REDIRECT');
        if (!allowed(current)) throw new Error('ROBOTS_EXCLUDED');
        const response = await fetcher(current, { redirect: 'manual', headers: { 'User-Agent': 'ManovaidyaKnowledge/1.0', Accept: 'text/html,application/xml,text/plain' }, signal: AbortSignal.timeout(15000) });
        if ([301, 302, 303, 307, 308].includes(response.status)) {
          current = new URL(response.headers.get('location'), current).href;
          await response.body?.cancel(); continue;
        }
        if ([429, 500, 502, 503, 504].includes(response.status)) { await response.body?.cancel(); throw new Error(`HTTP_${response.status}`); }
        if (!response.ok) { await response.body?.cancel(); return { status: response.status, url: current, text: '' }; }
        let size = 0; const buffers = [];
        for await (const value of response.body) { size += value.length; if (size > maxBytes) throw new Error('PAGE_TOO_LARGE'); buffers.push(value); }
        return { status: response.status, url: current, text: Buffer.concat(buffers).toString('utf8'), robots: response.headers.get('x-robots-tag') || '' };
      }
      throw new Error('TOO_MANY_REDIRECTS');
    } catch (error) {
      if (attempt === 2 || /UNSAFE|TOO_LARGE/.test(error.message)) throw error;
      await wait(250 * 2 ** attempt);
    }
  }
}

export async function crawlWebsite({ fetcher = fetch, maxPages = 180, onPage = async () => {} } = {}) {
  const fetchPage = (url) => fetchWebsite(url, { fetcher });
  const robots = await fetchPage(`${SITE}/robots.txt`);
  if (![200, 404].includes(robots.status)) throw new Error('ROBOTS_UNAVAILABLE');
  const allowed = parseRobots(robots.text);
  const sitemapUrls = new Set(); const sitemapSeen = new Set();
  const readSitemap = async (url) => {
    if (new URL(url).origin !== SITE || sitemapSeen.size >= 20 || sitemapSeen.has(url)) throw new Error('INVALID_SITEMAP_TREE');
    sitemapSeen.add(url);
    const response = await fetchPage(url);
    if (response.status !== 200 || !/<(?:urlset|sitemapindex)\b/.test(response.text)) throw new Error('SITEMAP_UNAVAILABLE');
    const locations = [...response.text.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((match) => match[1].replace(/&amp;/g, '&'));
    if (/<sitemapindex\b/.test(response.text)) { for (const child of locations) await readSitemap(child); }
    else for (const value of locations) { const clean = publicUrl(value); if (clean) sitemapUrls.add(clean); }
  };
  await readSitemap(`${SITE}/sitemap.xml`);
  if (!sitemapUrls.size) throw new Error('EMPTY_SITEMAP');
  const queue = [...new Set([`${SITE}/`, ...sitemapUrls])]; const seen = new Set(queue);
  const pages = []; const failures = []; const excluded = []; let visited = 0;
  const worker = async () => {
    while (queue.length && visited < maxPages) {
      const url = queue.shift(); visited++;
      if (!allowed(url)) { excluded.push({ url, reason: 'robots' }); continue; }
      try {
        const result = await fetchWebsite(url, { fetcher, allowed });
        const finalUrl = publicUrl(result.url);
        const page = result.status === 200 && finalUrl && allowed(finalUrl) && !/noindex/i.test(result.robots) ? extractPage(result.text, finalUrl) : null;
        if (page) {
          if (finalUrl !== url) excluded.push({ url, reason: 'redirected to canonical URL' });
          seen.add(finalUrl);
          if (!pages.some((entry) => entry.url === page.url)) { pages.push(page); await onPage(page); }
          for (const link of page.links) if (!seen.has(link) && allowed(link)) { seen.add(link); queue.push(link); }
        } else if (result.status !== 200) failures.push({ url, status: result.status, error: [404, 410].includes(result.status) ? 'REMOVED' : `HTTP_${result.status}` });
        else excluded.push({ url, reason: 'noindex, noncanonical, or missing meaningful main content' });
      } catch (error) { failures.push({ url, error: error.message }); }
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));
  return { pages, failures, excluded, discovered: [...seen], truncated: queue.length > 0, visited };
}
