import fs from "node:fs/promises";
import { SITE_URL, canonicalPaths, canonicalPathAliases, getCanonicalUrl, normalizePath } from "../src/utils/canonical.js";
import { isPublicBlog } from "../src/utils/publicContent.js";
export { isPublicBlog, isIndexable } from "../src/utils/publicContent.js";

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
    const response = await fetch(`${API_ORIGIN}/api/${endpoint}?status=published`, {
      headers: { Accept: "application/json" }, signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) throw new Error(`${endpoint} API returned ${response.status}; refusing to build an incomplete sitemap`);
    const data = await response.json();
    if (!data?.success || !Array.isArray(data.data)) throw new Error(`Invalid ${endpoint} collection; refusing to build an incomplete sitemap`);
    return data.data;
  };
  const [blogs, caseStudies] = await Promise.all([fetchCollection("blogs"), fetchCollection("case-studies")]);
  return {
    blogs: blogs.filter(isPublicBlog),
    caseStudies: caseStudies.filter((study) => study?.slug && (!study.status || study.status === "published")),
  };
};

export const saveContentSnapshot = async (content) => {
  await fs.mkdir(".cache", { recursive: true });
  await fs.writeFile(contentSnapshotPath, JSON.stringify(content), "utf8");
};

export const readContentSnapshot = async () => JSON.parse(await fs.readFile(contentSnapshotPath, "utf8"));
