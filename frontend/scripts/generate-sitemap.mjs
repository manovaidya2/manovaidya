import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://manovaidya.org";
const API_ORIGIN = process.env.VITE_API_ORIGIN || process.env.SITEMAP_API_ORIGIN || "https://api.manovaidya.org";
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

const fetchJson = async (url) => {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
};

const readStaticUrls = async () => {
  const staticXml = await fs.readFile(staticSitemapPath, "utf8");
  return [...staticXml.matchAll(/<url>[\s\S]*?<\/url>/g)].map((match) => match[0]);
};

const buildDynamicUrl = ({ loc, lastmod, priority = "0.7" }) =>
  `  <url><loc>${escapeXml(loc)}</loc><lastmod>${formatDate(lastmod)}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;

const getDynamicUrls = async () => {
  const [blogsResult, caseStudiesResult] = await Promise.allSettled([
    fetchJson(`${API_ORIGIN.replace(/\/$/, "")}/api/blogs?status=published`),
    fetchJson(`${API_ORIGIN.replace(/\/$/, "")}/api/case-studies?status=published`),
  ]);

  const blogs = blogsResult.status === "fulfilled" && blogsResult.value?.success ? blogsResult.value.data || [] : [];
  const caseStudies = caseStudiesResult.status === "fulfilled" && caseStudiesResult.value?.success ? caseStudiesResult.value.data || [] : [];

  if (blogsResult.status === "rejected") {
    console.warn(`Blog sitemap fetch failed: ${blogsResult.reason.message}`);
  }
  if (caseStudiesResult.status === "rejected") {
    console.warn(`Case-study sitemap fetch failed: ${caseStudiesResult.reason.message}`);
  }

  const blogUrls = blogs
    .filter((blog) => blog?.slug)
    .filter((blog) => !String(blog.robots || "").startsWith("noindex"))
    .filter((blog) => blog.showOnFrontend !== false)
    .map((blog) =>
      buildDynamicUrl({
        loc: `${SITE_URL}/blog/${blog.slug}`,
        lastmod: getFirstDate(blog.updatedAt, blog.createdAt, blog.date),
      })
    );

  const caseStudyUrls = caseStudies
    .filter((study) => study?.slug)
    .filter((study) => !String(study.robots || "").startsWith("noindex"))
    .map((study) =>
      buildDynamicUrl({
        loc: `${SITE_URL}/case-studies/${study.slug}`,
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
