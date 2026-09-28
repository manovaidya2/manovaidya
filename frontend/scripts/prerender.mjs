import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  SITE_URL,
  canonicalPathAliases,
  canonicalPaths,
  getCanonicalUrl,
  normalizePath,
} from "../src/utils/canonical.js";

const distDir = path.resolve("dist");
const mainHtmlPath = path.join(distDir, "index.html");
const sitemapPath = path.resolve("public", "sitemap.xml");
const API_ORIGIN = (process.env.VITE_API_ORIGIN || process.env.SITEMAP_API_ORIGIN || "https://api.manovaidya.org").replace(/\/$/, "");
const API_BASE_URL = `${API_ORIGIN}/api`;

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeScriptJson = (value) =>
  JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const fetchJson = async (url) => {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
};

const fetchCollection = async (endpoint) => {
  try {
    const data = await fetchJson(`${API_BASE_URL}${endpoint}`);
    return data?.success && Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.warn(`Prerender fetch failed for ${endpoint}: ${error.message}`);
    return [];
  }
};

const publicTestContentPattern = /(?:\btesting\s+blog\b|\btest\s+blog\b|\bdummy\b|\bdemo\b|lorem\s+ipsum)/i;

const hasPublicTestContent = (blog) =>
  publicTestContentPattern.test(
    [
      blog?.title,
      blog?.slug,
      blog?.shortDescription,
      blog?.metaTitle,
      blog?.metaDescription,
      blog?.content,
    ]
      .filter(Boolean)
      .join(" "),
  );

const readSitemapPaths = async () => {
  try {
    const sitemap = await fs.readFile(sitemapPath, "utf8");
    return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map(([, loc]) => new URL(loc).pathname)
      .filter(Boolean);
  } catch {
    return [];
  }
};

const getRoutes = async () => {
  const routes = new Map();
  canonicalPaths.forEach((routePath) => routes.set(normalizePath(routePath), getCanonicalUrl(routePath)));
  Object.keys(canonicalPathAliases).forEach((routePath) =>
    routes.set(normalizePath(routePath), getCanonicalUrl(routePath)),
  );

  const sitemapPaths = await readSitemapPaths();
  sitemapPaths.forEach((routePath) => {
    const normalizedPath = normalizePath(routePath);
    if (!routes.has(normalizedPath)) routes.set(normalizedPath, `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`);
  });

  return [...routes].sort(([a], [b]) => a.localeCompare(b));
};

const pathToOutputFiles = (routePath) => {
  const segments = new URL(routePath, SITE_URL).pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  if (segments.some((segment) => segment === "." || segment === "..")) {
    throw new Error(`Unsafe route path: ${routePath}`);
  }

  if (!segments.length) return [mainHtmlPath];

  const routeBase = path.join(distDir, ...segments);
  return [`${routeBase}.html`, path.join(routeBase, "index.html")];
};

const stripDefaultSeo = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/<meta\s+name=["'](?:description|keywords|robots|twitter:card|twitter:title|twitter:description|twitter:image)["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["'](?:og:title|og:description|og:url|og:type|og:site_name|og:image)["'][^>]*>\s*/gi, "")
    .replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, "");

const extractReactHead = (appHtml, canonicalUrl) => {
  const headTags = [];
  const patterns = [
    /<title[\s\S]*?<\/title>/gi,
    /<meta\s+(?:name|property)=["'](?:description|keywords|robots|twitter:card|twitter:title|twitter:description|twitter:image|og:title|og:description|og:url|og:type|og:site_name|og:image)["'][^>]*\/?>/gi,
    /<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi,
  ];

  let html = appHtml;
  patterns.forEach((pattern) => {
    html = html.replace(pattern, (match) => {
      headTags.push(match);
      return "";
    });
  });

  headTags.push(`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`);

  return {
    appHtml: html,
    head: headTags.join("\n    "),
  };
};

const fallbackHead = (routePath, canonicalUrl) => {
  const title = "Manovaidya | Child Development & Mental Health Clinic in Noida";
  const description =
    "Manovaidya is a child development and mental wellness clinic in Noida offering structured support for Autism, ADHD, speech delay, anxiety, depression, OCD and related concerns.";

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl || getCanonicalUrl(routePath))}" />`,
  ].join("\n    ");
};

const applyPrerender = (template, { routePath, canonicalUrl, appHtml, helmet, data }) => {
  const extracted = extractReactHead(appHtml, canonicalUrl);
  const helmetHead = [
    helmet?.title?.toString() || "",
    helmet?.priority?.toString() || "",
    helmet?.meta?.toString() || "",
    helmet?.link?.toString() || "",
    helmet?.script?.toString() || "",
  ]
    .filter(Boolean)
    .join("\n    ");

  const dataScript = `<script>window.__MANOVAIDYA_PRERENDER_DATA__=${escapeScriptJson(data)};</script>`;
  const cleanTemplate = stripDefaultSeo(template);
  const withHead = cleanTemplate.replace(
    "</head>",
    `    ${extracted.head || helmetHead || fallbackHead(routePath, canonicalUrl)}\n  </head>`,
  );

  return withHead.replace(
    '<div id="root"></div>',
    `<div id="root">${extracted.appHtml}</div>\n    ${dataScript}`,
  );
};

const toSlugMap = (items) =>
  items.reduce((map, item) => {
    if (item?.slug) map[item.slug] = item;
    return map;
  }, {});

const getRouteData = (routePath, { blogs, caseStudies, videos, blogsBySlug, caseStudiesBySlug }) => {
  if (routePath === "/") return { blogs: blogs.slice(0, 6) };
  if (routePath === "/blog") return { blogs };
  if (routePath.startsWith("/blog/")) {
    const slug = routePath.split("/").filter(Boolean).at(-1);
    return { blogs: blogs.slice(0, 4), blogsBySlug: { [slug]: blogsBySlug[slug] } };
  }
  if (routePath === "/case-studies") return { caseStudies };
  if (routePath.startsWith("/case-studies/")) {
    const slug = routePath.split("/").filter(Boolean).at(-1);
    return { caseStudiesBySlug: { [slug]: caseStudiesBySlug[slug] } };
  }
  if (routePath === "/video-library") return { videos };
  return {};
};

const main = async () => {
  const [template, routes, serverEntry, rawBlogs, caseStudies, videos] = await Promise.all([
    fs.readFile(mainHtmlPath, "utf8"),
    getRoutes(),
    import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href),
    fetchCollection("/blogs?status=published"),
    fetchCollection("/case-studies?status=published"),
    fetchCollection("/videos?status=published"),
  ]);

  const blogs = rawBlogs.filter((blog) => !hasPublicTestContent(blog));
  const blogsBySlug = toSlugMap(blogs);
  const caseStudiesBySlug = toSlugMap(caseStudies);

  await Promise.all(
    routes.map(async ([routePath, canonicalUrl]) => {
      const data = getRouteData(routePath, { blogs, caseStudies, videos, blogsBySlug, caseStudiesBySlug });
      const { html: appHtml, helmet } = serverEntry.render(routePath, data);
      const routeHtml = applyPrerender(template, { routePath, canonicalUrl, appHtml, helmet, data });

      await Promise.all(
        pathToOutputFiles(routePath).map(async (outputFile) => {
          await fs.mkdir(path.dirname(outputFile), { recursive: true });
          await fs.writeFile(outputFile, routeHtml, "utf8");
        }),
      );
    }),
  );

  console.log(`Prerendered ${routes.length} routes with SEO HTML.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
