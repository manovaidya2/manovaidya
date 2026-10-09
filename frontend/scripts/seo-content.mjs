import fs from "node:fs/promises";
import { SITE_URL, canonicalPaths, canonicalPathAliases, getCanonicalUrl, normalizePath } from "../src/utils/canonical.js";
import { isPublicBlog, isPublicCaseStudy } from "../src/utils/publicContent.js";
export { isPublicBlog, isPublicCaseStudy, isIndexable } from "../src/utils/publicContent.js";

export const contentSnapshotPath = ".cache/seo-content.json";
const API_ORIGIN = (process.env.VITE_API_ORIGIN || process.env.SITEMAP_API_ORIGIN || "https://api.manovaidya.org").replace(/\/$/, "");

export const getLegacyAliases = (content) => {
  const items = [
    ...content.blogs.map((item) => ({ item, route: `/blog/${item.slug}` })),
    ...content.caseStudies.map((item) => ({ item, route: `/case-studies/${item.slug}` })),
  ];
  const occupied = new Set([...canonicalPaths, ...Object.keys(canonicalPathAliases), ...items.map(({ route }) => route)].map(normalizePath));
  const aliases = new Map();
  for (const { item, route } of items) {
    if (!item.canonicalUrl) continue;
    let url;
    try { url = new URL(item.canonicalUrl, SITE_URL); } catch { continue; }
    if (!/^https?:$/.test(url.protocol) || !/^(www\.)?manovaidya\.org$/.test(url.hostname)) continue;
    const alias = normalizePath(url.pathname);
    if (alias === "/" || occupied.has(alias)) continue;
    const destination = getCanonicalUrl(route);
    if (aliases.has(alias) && aliases.get(alias) !== destination) throw new Error(`Conflicting legacy article URL: ${alias}`);
    aliases.set(alias, destination);
  }
  return aliases;
};

export const fetchPublishedContent = async () => {
  const fetchCollection = async (endpoint) => {
    const items = [];
    const seen = new Set();
    for (let page = 1; page <= 10000; page++) {
      const response = await fetch(`${API_ORIGIN}/api/${endpoint}?status=published&page=${page}&limit=100`, {
        headers: { Accept: "application/json" }, signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error(`${endpoint} API returned ${response.status}; refusing to build an incomplete sitemap`);
      const data = await response.json();
      if (!data?.success || !Array.isArray(data.data)) throw new Error(`Invalid ${endpoint} collection; refusing to build an incomplete sitemap`);
      for (const item of data.data) {
        if (seen.has(item.slug)) throw new Error(`${endpoint}: duplicate slug ${item.slug}; pagination may be stuck`);
        seen.add(item.slug);
        items.push(item);
      }
      const pagination = data.pagination || data;
      const totalPages = pagination.totalPages;
      const total = pagination.total;
      if (totalPages !== undefined && (!Number.isInteger(totalPages) || totalPages < 0)) throw new Error(`${endpoint}: invalid totalPages`);
      if (total !== undefined && (!Number.isInteger(total) || total < 0)) throw new Error(`${endpoint}: invalid total`);
      const more = totalPages !== undefined ? page < totalPages : total !== undefined ? items.length < total : pagination.hasNextPage === true;
      if (!more) {
        if (total !== undefined && items.length !== total) throw new Error(`${endpoint}: incomplete collection (${items.length}/${total})`);
        return items;
      }
      if (!data.data.length) throw new Error(`${endpoint}: empty page before end of collection`);
    }
    throw new Error(`${endpoint}: pagination exceeded safety limit`);
  };
  const [blogs, caseStudies] = await Promise.all([fetchCollection("blogs"), fetchCollection("case-studies")]);
  const content = {
    blogs: blogs.filter(isPublicBlog),
    caseStudies: caseStudies.filter(isPublicCaseStudy),
  };
  for (const [collection, items] of Object.entries(content)) {
    for (const item of items) {
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(item.slug) || !item.title?.trim() || !item.content?.trim()) {
        throw new Error(`${collection}: invalid slug or missing title/content for ${item.slug}; refusing to build incomplete detail HTML`);
      }
      if (item.schemaMarkup) {
        try { JSON.parse(item.schemaMarkup); }
        catch { throw new Error(`${collection}: invalid schema JSON for ${item.slug}`); }
      }
    }
  }
  return content;
};

export const saveContentSnapshot = async (content) => {
  await fs.mkdir(".cache", { recursive: true });
  await fs.writeFile(contentSnapshotPath, JSON.stringify(content), "utf8");
};

export const readContentSnapshot = async () => JSON.parse(await fs.readFile(contentSnapshotPath, "utf8"));
