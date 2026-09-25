import fs from "node:fs/promises";
import path from "node:path";
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

const replaceCanonical = (html, canonicalUrl) => {
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
  if (/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, canonicalTag);
  }
  return html.replace("</head>", `    ${canonicalTag}\n  </head>`);
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

const main = async () => {
  const appShell = await fs.readFile(mainHtmlPath, "utf8");
  const sitemapPaths = await readSitemapPaths();
  const routes = new Map();

  canonicalPaths.forEach((routePath) =>
    routes.set(normalizePath(routePath), getCanonicalUrl(routePath)),
  );
  Object.keys(canonicalPathAliases).forEach((routePath) =>
    routes.set(normalizePath(routePath), getCanonicalUrl(routePath)),
  );
  sitemapPaths.forEach((routePath) => {
    const normalizedPath = normalizePath(routePath);
    if (!routes.has(normalizedPath)) routes.set(normalizedPath, `${SITE_URL}${routePath}`);
  });

  await Promise.all(
    [...routes].map(async ([routePath, canonicalUrl]) => {
      const outputFiles = pathToOutputFiles(routePath);
      const routeHtml = replaceCanonical(appShell, canonicalUrl);

      await Promise.all(
        outputFiles.map(async (outputFile) => {
          await fs.mkdir(path.dirname(outputFile), { recursive: true });
          await fs.writeFile(outputFile, routeHtml, "utf8");
        }),
      );
    }),
  );

  console.log(`Generated canonical HTML for ${routes.size} routes.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
