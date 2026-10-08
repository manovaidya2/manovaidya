import fs from "node:fs/promises";
import path from "node:path";
import { getCanonicalUrl } from "../src/utils/canonical.js";
import { fetchPublishedContent, isIndexable, saveContentSnapshot } from "./seo-content.mjs";

const publicDir = path.resolve("public");
const staticSitemapPath = path.join(publicDir, "sitemap-static.xml");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const escapeXml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
};

const getFirstDate = (...values) => values.find((value) => value && String(value).trim()) || null;

const readStaticUrls = async () => {
  const staticXml = await fs.readFile(staticSitemapPath, "utf8");
  const seen = new Set();
  return [...staticXml.matchAll(/<url>[\s\S]*?<\/url>/g)].flatMap(([entry]) => {
    const loc = entry.match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!loc) throw new Error("Static sitemap entry is missing loc");
    const canonical = getCanonicalUrl(new URL(loc).pathname);
    if (seen.has(canonical)) return [];
    seen.add(canonical);
    return [entry.replace(/<loc>.*?<\/loc>/, `<loc>${escapeXml(canonical)}</loc>`)];
  });
};

const buildDynamicUrl = ({ loc, lastmod, priority = "0.7" }) =>
  `  <url><loc>${escapeXml(loc)}</loc><lastmod>${formatDate(lastmod)}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;

const getDynamicUrls = async () => {
  const content = await fetchPublishedContent();
  await saveContentSnapshot(content);
  const { blogs, caseStudies } = content;

  const blogUrls = blogs
    .filter(isIndexable)
    .map((blog) =>
      buildDynamicUrl({
        loc: getCanonicalUrl(`/blog/${blog.slug}`),
        lastmod: getFirstDate(blog.updatedAt, blog.createdAt, blog.date),
      })
    );

  const caseStudyUrls = caseStudies
    .filter(isIndexable)
    .map((study) =>
      buildDynamicUrl({
        loc: getCanonicalUrl(`/case-studies/${study.slug}`),
        lastmod: getFirstDate(study.updatedAt, study.createdAt),
      })
    );

  return [...blogUrls, ...caseStudyUrls].sort();
};

const main = async () => {
  const staticUrls = await readStaticUrls();
  const dynamicUrls = await getDynamicUrls();
  const allUrls = [...staticUrls, ...dynamicUrls];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allUrls,
    "</urlset>",
  ].join("\n");

  await fs.writeFile(sitemapPath, `${xml}\n`, "utf8");
  console.log(`Generated sitemap.xml with ${staticUrls.length} static URLs and ${dynamicUrls.length} dynamic URLs.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
