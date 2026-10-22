import fs from "node:fs/promises";
import path from "node:path";
import { parse, parseFragment } from "parse5";
import { SITE_URL, canonicalPaths, canonicalPathAliases, getCanonicalUrl } from "../src/utils/canonical.js";
import { readContentSnapshot, isIndexable, getLegacyAliases } from "./seo-content.mjs";

const failures = [];
const internalPageLinks = new Set();
const check = (condition, message) => { if (!condition) failures.push(message); };
const textOf = (node) => !node ? '' : node.nodeName === '#text' ? node.value : (node.childNodes || []).map(textOf).join(' ');
const find = (node, predicate) => !node ? undefined : predicate(node) ? node : (node.childNodes || []).map((child) => find(child, predicate)).find(Boolean);
const attr = (node, name) => node?.attrs?.find((entry) => entry.name === name)?.value;
const cleanText = (value) => value.replace(/\s+/g, ' ').trim();
const sitemap = await fs.readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => loc);
const missingHtml = await fs.readFile('dist/404.html', 'utf8');
check(missingHtml.includes('Page Not Found') && missingHtml.includes('Sorry, the page you are looking for does not exist or has been moved.'), 'Missing server-rendered 404 page');
check(/<meta\b[^>]*name="robots"[^>]*content="noindex, nofollow"/i.test(missingHtml), '404 page must be noindex');
check(!urls.some((url) => /\/404(?:\/|\.html)?$/.test(url)), '404 page must not be in the sitemap');
check(urls.length > 0, "Sitemap is empty");
check(new Set(urls).size === urls.length, "Sitemap contains duplicate URLs");
for (const route of canonicalPaths) {
  check(urls.includes(getCanonicalUrl(route)), `Missing canonical page in sitemap: ${route}`);
}

const inspectHtml = (html, url, label, indexable = true) => {
  check(Buffer.byteLength(html, 'utf8') < 1_900_000, `${label}: HTML exceeds the safe Googlebot fetch budget`);
  const canonicals = [...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi)];
  check(canonicals.length === 1, `${label}: expected exactly one canonical`);
  check(canonicals[0]?.[0].includes(`href="${url}"`), `${label}: canonical must be ${url}`);
  if (indexable) {
    check(/<meta\b[^>]*name=["']robots["'][^>]*content=["']index,\s*follow["']/i.test(html), `${label}: missing index, follow`);
    check(!/<meta\b[^>]*noindex/i.test(html), `${label}: noindex present`);
  } else {
    check(/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html), `${label}: noindex directive was lost`);
  }
  check(!/<meta\b[^>]*http-equiv=["']refresh["']/i.test(html), `${label}: meta refresh present`);
  check(/<div id="root">[\s\S]+?<\/div>/.test(html), `${label}: missing rendered page content`);
  check(/<main\b/i.test(html), `${label}: missing page body`);
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"<>]+)"/gi)) {
    if (!href.startsWith("/") && !/^https?:\/\/(www\.)?manovaidya\.(org|com)(?:\/|$)/i.test(href)) continue;
    const target = new URL(href.replace(/&amp;/g, "&"), SITE_URL);
    if (!/^(www\.)?manovaidya\.(org|com)$/.test(target.hostname)) continue;
    const route = target.pathname;
    if (!path.extname(route.replace(/\/$/, ""))) internalPageLinks.add(route);
    const isPage = canonicalPaths.includes(getCanonicalUrl(route).slice(SITE_URL.length)) || /^\/(blog|case-studies)\/[^/]+\/?$/.test(route);
    if (isPage) check(`${target.origin}${route}` === getCanonicalUrl(route), `${label}: noncanonical internal link ${href}`);
  }
};

for (const url of urls) {
  const pathname = new URL(url).pathname;
  check(url === getCanonicalUrl(pathname), `Noncanonical sitemap URL: ${url}`);
  const file = path.join("dist", ...pathname.split("/").filter(Boolean), "index.html");
  try {
    inspectHtml(await fs.readFile(file, "utf8"), url, pathname);
  } catch (error) {
    failures.push(`${pathname}: cannot read prerendered HTML (${error.message})`);
  }
}
console.log(`Checked ${urls.length} sitemap pages: canonical URLs, rendered HTML, robots, and internal links.`);
const content = await readContentSnapshot();
let dynamicCount = 0;
for (const [prefix, items] of [["blog", content.blogs], ["case-studies", content.caseStudies]]) {
  for (const item of items) {
    const url = getCanonicalUrl(`/${prefix}/${item.slug}`);
    const indexable = isIndexable(item);
    check(urls.includes(url) === indexable, `${url}: sitemap does not match the publication/robots setting`);
    try {
      const file = path.join("dist", prefix, item.slug, "index.html");
      const html = await fs.readFile(file, "utf8");
      inspectHtml(html, url, `DYNAMIC ${url}`, indexable);
      check(/<h1\b/i.test(html), `${url}: dynamic page is missing rendered article content`);
      const document = parse(html);
      const main = find(document, (node) => node.tagName === 'main');
      const h1 = find(main, (node) => node.tagName === 'h1');
      check(cleanText(textOf(h1)) === item.title.trim(), `${url}: H1 belongs to another record`);
      const title = find(document, (node) => node.tagName === 'title');
      const expectedTitle = item.metaTitle || (prefix === 'blog' ? item.title : `${item.title} | Case Study | Manovaidya`);
      check(textOf(title) === expectedTitle, `${url}: wrong title`);
      const description = find(document, (node) => node.tagName === 'meta' && attr(node, 'name') === 'description');
      check(attr(description, 'content') === (item.metaDescription || item.shortDescription || item.summary), `${url}: wrong description`);
      const bodyText = cleanText(textOf(main));
      const articleText = cleanText(textOf(parseFragment(item.content)));
      check(articleText.length > 0 && bodyText.includes(articleText), `${url}: real article text is missing or replaced`);
      if (item.image) check(Boolean(find(main, (node) => node.tagName === 'img' && (attr(node, 'src') || '').endsWith(item.image))), `${url}: featured image missing`);
      const data = JSON.parse(html.match(/window\.__MANOVAIDYA_PRERENDER_DATA__=([\s\S]*?);<\/script>/)?.[1] || '{}');
      const record = (prefix === 'blog' ? data.blogsBySlug : data.caseStudiesBySlug)?.[item.slug];
      check(record?.slug === item.slug && record?.content === item.content, `${url}: hydration data does not match article`);
      const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(([, json]) => JSON.parse(json));
      check(schemas.length > 0, `${url}: missing structured data`);
      const articles = schemas.flatMap((schema) => schema['@graph'] || [schema]).filter((node) => [].concat(node['@type'] || []).some((type) => /Article|BlogPosting/.test(type)));
      check(articles.length > 0 && articles.every((article) => article.url === url && article.mainEntityOfPage?.['@id'] === url), `${url}: structured data has a stale article identity`);
    } catch (error) {
      failures.push(`${url}: missing dynamic page HTML (${error.message})`);
    }
    dynamicCount++;
  }
}
console.log(`Checked sitemap coverage and article HTML for all ${dynamicCount} public dynamic pages, including noindex pages.`);
for (const route of internalPageLinks) {
  try {
    await fs.access(path.join("dist", ...route.split("/").filter(Boolean).map(decodeURIComponent), "index.html"));
  } catch {
    failures.push(`Internal link points to a page that was not generated: ${route}`);
  }
}
console.log(`Checked ${internalPageLinks.size} internal page destinations for missing HTML.`);
for (const name of await fs.readdir('dist/assets')) {
  if (/\.(js|css)$/.test(name)) {
    const stat = await fs.stat(path.join('dist/assets', name));
    check(stat.size < 1_900_000, `${name}: script/style exceeds the safe Googlebot fetch budget`);
  }
}
for (const name of content.assetFiles || []) {
  try {
    check((await fs.stat(path.join('dist/assets', name))).size > 0, `Empty extracted CMS image: ${name}`);
  } catch {
    failures.push(`Missing extracted CMS image: ${name}`);
  }
}

if (process.argv.includes("--live")) {
  const report = [];
  const agents = [
    "Mozilla/5.0 SEO validation",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  ];
  const tasks = [];
  for (const route of [
    "/does-not-exist-seo-check/",
    "/blog/missing-regression-slug/",
    "/case-studies/missing-regression-slug/",
    "/assets/missing-seo-check.js",
  ]) {
    for (const agent of agents) {
      tasks.push({ url: `${SITE_URL}${route}`, agent, expectedStatus: 404 });
    }
  }
  for (const url of urls) {
    for (const agent of agents) tasks.push({ url, expected: url, agent, canonical: true });
    const pathname = new URL(url).pathname;
    const base = pathname === "/" ? "" : pathname.slice(0, -1);
    const paths = new Set(pathname === "/" ? ["/", "/index.html"] : [pathname, base, `${base}.html`, `${base}/index.html`]);
    tasks.push({ url: `${url}?utm_source=seo-check&x=1`, expected: url, agent: agents[1], canonical: true });
    for (const scheme of ["http", "https"]) {
      for (const host of ["manovaidya.org", "www.manovaidya.org"]) {
        for (const route of paths) {
          const variant = `${scheme}://${host}${route}`;
          if (variant !== url) tasks.push({ url: variant, expected: url, agent: agents[1] });
        }
      }
    }
  }
  const aliases = new Map([
    ...Object.keys(canonicalPathAliases).map((alias) => [alias, getCanonicalUrl(alias)]),
    ...getLegacyAliases(content),
  ]);
  for (const [alias, destination] of aliases) {
    for (const route of [alias, `${alias}/`]) {
      for (const scheme of ["http", "https"]) {
        for (const host of ["manovaidya.org", "www.manovaidya.org"]) {
          tasks.push({ url: `${scheme}://${host}${route}`, expected: destination, agent: agents[1] });
        }
      }
    }
  }
  const worker = async () => {
    while (tasks.length) {
      const task = tasks.shift();
      try {
        const response = await fetch(task.url, {
          redirect: "manual", method: "GET",
          headers: { "User-Agent": task.agent }, signal: AbortSignal.timeout(20000),
        });
        const location = response.headers.get("location");
        const result = { url: task.url, status: response.status, location, googlebot: task.agent === agents[1] };
        report.push(result);
        if (task.expectedStatus === 404) {
          check(response.status === 404, `${task.url}: missing resource must return 404, got ${response.status}`);
          check(!location, `${task.url}: missing resource must not redirect to ${location}`);
          await response.body?.cancel();
        } else if (task.canonical) {
          check(response.status === 200, `${task.url}: canonical returned ${response.status}`);
          check(!location, `${task.url}: canonical redirects to ${location}`);
          check(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), `${task.url}: X-Robots-Tag blocks indexing`);
          inspectHtml(await response.text(), task.expected, `LIVE ${task.url}`);
        } else {
          check([301, 308].includes(response.status) && location === task.expected,
            `${task.url}: expected one permanent redirect to ${task.expected}, got ${response.status} ${location || ""}`);
          await response.body?.cancel();
          if (location && [301, 302, 303, 307, 308].includes(response.status)) {
            const finalResponse = await fetch(new URL(location, task.url), {
              redirect: "follow", headers: { "User-Agent": task.agent }, signal: AbortSignal.timeout(20000),
            });
            result.finalUrl = finalResponse.url;
            result.finalStatus = finalResponse.status;
            check(finalResponse.status === 200 && finalResponse.url === task.expected,
              `${task.url}: redirect chain ends at ${finalResponse.status} ${finalResponse.url}`);
            await finalResponse.body?.cancel();
          }
        }
      } catch (error) {
        failures.push(`${task.url}: ${error.message}${error.cause?.message ? `: ${error.cause.message}` : ""}`);
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  const apiOrigin = (process.env.VITE_API_ORIGIN || process.env.SITEMAP_API_ORIGIN || "https://api.manovaidya.org").replace(/\/$/, "");
  for (const source of [`${SITE_URL}/sitemap.xml`, `${apiOrigin}/sitemap.xml`, `${apiOrigin}/sitemap-blog.xml`, `${apiOrigin}/sitemap-case-studies.xml`]) {
    try {
      const response = await fetch(source, { redirect: "manual", signal: AbortSignal.timeout(20000) });
      check(response.status === 200, `${source}: sitemap returned ${response.status}`);
      const xml = await response.text();
      const liveUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => loc);
      check(liveUrls.length > 0 || source !== `${SITE_URL}/sitemap.xml`, `${source}: empty sitemap`);
      for (const url of liveUrls) {
        check(url === getCanonicalUrl(url), `${source}: noncanonical sitemap entry ${url}`);
        check(urls.includes(url), `${source}: sitemap entry does not match the current build ${url}`);
      }
      if (source === `${SITE_URL}/sitemap.xml`) {
        for (const url of urls) check(liveUrls.includes(url), `${source}: missing current page ${url}`);
      }
    } catch (error) {
      failures.push(`${source}: ${error.message}`);
    }
  }
  await fs.writeFile("seo-live-report.json", JSON.stringify({ checkedAt: new Date().toISOString(), report, failures: [...new Set(failures)] }, null, 2));
  console.log(`Checked ${report.length} live responses. Report: seo-live-report.json`);
}

const uniqueFailures = [...new Set(failures)];
if (uniqueFailures.length) {
  console.error(uniqueFailures.slice(0, 30).join("\n"));
  console.error(`SEO validation failed with ${uniqueFailures.length} issues.`);
  process.exitCode = 1;
} else {
  console.log("SEO validation passed.");
}
