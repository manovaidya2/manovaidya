import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';
import { render } from '../dist-ssr/entry-server.js';
import { applyPrerender, getRouteData } from './prerender.mjs';
import { readContentSnapshot } from './seo-content.mjs';
import { getCanonicalUrl } from '../src/utils/canonical.js';
import { parseFragment } from 'parse5';
import { processBlogContent } from '../src/utils/blogContent.js';
import { sendNotFound } from './serve-pages.mjs';

const textOf = (node) => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(textOf).join('');
const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

const content = await readContentSnapshot();
assert.ok(content.blogs.length >= 3, 'At least three published blogs are required for this check');
// Fixtures exercise case-study rendering when production has fewer than three records.
const studies = content.caseStudies.length >= 3 ? content.caseStudies.slice(0, 3) : Array.from({ length: 3 }, (_, i) => ({
  slug: `regression-care-${i + 1}`, title: `Care journey ${i + 1}`, summary: `Unique care summary ${i + 1}`,
  content: `<h2 id="care">Care &amp; support ${i + 1}</h2><p>Unique clinical journey ${i + 1}.</p><a href="/blog">Articles</a>`,
  image: content.blogs[0].image, status: 'published', authorName: 'Care team', createdAt: '2026-01-01T00:00:00Z',
}));
const template = (await fs.readFile('dist/index.html', 'utf8'))
  .replace(/<div id="root">[\s\S]*<\/div>\s*<script>window\.__MANOVAIDYA_PRERENDER_DATA__=[\s\S]*?;<\/script>/, '<div id="root"></div>');
const fixturePages = new Map();
for (const study of studies) {
  const routePath = `/case-studies/${study.slug}`;
  const data = { caseStudiesBySlug: { [study.slug]: study } };
  const { html, helmet } = render(`${routePath}/`, data);
  const page = applyPrerender(template, { routePath, canonicalUrl: getCanonicalUrl(routePath), appHtml: html, helmet, data });
  assert.ok(page.includes(study.title) && page.includes(study.summary), 'Fixture must contain its own case study');
  fixturePages.set(`${routePath}/`, page);
}
assert.throws(() => getRouteData('/blog/missing', { blogs: [], blogsBySlug: {} }), /Missing published/);
assert.throws(() => getRouteData('/case-studies/missing', { caseStudiesBySlug: {} }), /Missing published/);

const server = http.createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (fixturePages.has(pathname)) {
      response.setHeader('Content-Type', 'text/html');
      return response.end(fixturePages.get(pathname));
    }
    const file = path.resolve('dist', `.${decodeURIComponent(pathname)}`, pathname.endsWith('/') ? 'index.html' : '');
    if (!file.startsWith(`${path.resolve('dist')}${path.sep}`)) throw new Error('Invalid path');
    const body = await fs.readFile(file);
    response.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : file.endsWith('.png') ? 'image/png' : 'application/octet-stream');
    response.end(body);
  } catch {
    await sendNotFound(request, response, path.resolve('dist'));
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
let checked = 0;
try {
  browser = await chromium.launch();
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (/hydration|did not match|server rendered/i.test(message.text())) errors.push(message.text());
    });
    let detailApiRequests = 0;
    await context.route('**/api/**', (route) => {
      if (/\/(blogs|case-studies)\/slug\//.test(route.request().url())) detailApiRequests++;
      return route.fulfill({ status: 503, contentType: 'application/json', body: '{"success":false}' });
    });
    for (const route of ['/', '/blog/', '/case-studies/']) {
      assert.equal((await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded' })).status(), 200);
      await page.waitForFunction(() => document.querySelector('link[data-seo-canonical]'));
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), getCanonicalUrl(route));
      checked++;
    }
    for (const [prefix, items] of [['blog', content.blogs.slice(0, 3)], ['case-studies', studies]]) {
      for (const item of items) {
        const route = `/${prefix}/${item.slug}/`;
        assert.equal((await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded' })).status(), 200);
        await page.waitForFunction(() => document.querySelector('link[data-seo-canonical]'));
        await page.waitForTimeout(300);
        assert.equal(await page.locator('h1').innerText(), item.title);
        assert.equal(await page.title(), item.metaTitle || (prefix === 'blog' ? item.title : `${item.title} | Case Study | Manovaidya`));
        assert.equal(await page.locator('meta[name="description"]').getAttribute('content'), item.metaDescription || item.shortDescription || item.summary);
        assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
        assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), getCanonicalUrl(route));
        const expectedContent = prefix === 'blog' ? processBlogContent(item.content).html : item.content;
        assert.ok(normalizeText(await page.locator('.prose-blog').textContent()) === normalizeText(textOf(parseFragment(expectedContent))), 'Hydration must preserve the full article text');
        if (item.image) {
          await page.waitForFunction((image) => [...document.querySelectorAll('main img')].some((img) => img.src.endsWith(image) && img.complete && img.naturalWidth > 0), item.image);
        }
        const cmsImages = await page.locator('main img[src^="/assets/cms-"]').evaluateAll((images) => [...new Set(images.map((image) => image.src))]);
        for (const source of cmsImages) {
          assert.ok(await page.evaluate((src) => new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(image.naturalWidth > 0);
            image.onerror = () => resolve(false);
            image.src = src;
          }), source), `Extracted article image must load: ${source}`);
        }
        assert.ok(await page.locator('main script[type="application/ld+json"], head script[type="application/ld+json"]').count());
        assert.equal(await page.locator('main').evaluate((main, slug) => window.__MANOVAIDYA_PRERENDER_DATA__[slug.startsWith('blog:') ? 'blogsBySlug' : 'caseStudiesBySlug'][slug.split(':')[1]].content.length > 0, `${prefix === 'blog' ? 'blog' : 'study'}:${item.slug}`), true);
        checked++;
      }
    }
    await fs.mkdir('.cache', { recursive: true });
    await page.screenshot({ path: `.cache/seo-regression-${viewport.width}.png`, fullPage: true });
    assert.equal(detailApiRequests, 0, 'Hydrated details must retain the published build snapshot');
    // Navigate between two slugs without a document reload; the second API is deliberately stale.
    const [first, second] = content.blogs;
    await page.goto(`${origin}/blog/${first.slug}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelector('link[data-seo-canonical]'));
    await context.route(`**/api/blogs/slug/${second.slug}`, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true, data: first }) }));
    await page.locator(`a[href="/blog/${second.slug}/"]`).first().click();
    await page.waitForURL(`**/blog/${second.slug}/`);
    await page.getByRole('heading', { name: second.title, exact: true, level: 1 }).waitFor();
    assert.equal(await page.locator('h1').count(), 1, 'A stale API record must never appear at a different slug; reload the real published page');
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), getCanonicalUrl(`/blog/${second.slug}/`));
    assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /^index/);
    await context.route(`**/api/blogs/slug/${second.slug}`, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true, data: second }) }));
    await page.goto(`${origin}/blog/${first.slug}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelector('link[data-seo-canonical]'));
    await page.locator(`a[href="/blog/${second.slug}/"]`).first().click();
    await page.waitForURL(`**/blog/${second.slug}/`);
    await page.getByRole('heading', { name: second.title, exact: true, level: 1 }).waitFor();
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), getCanonicalUrl(`/blog/${second.slug}/`));
    assert.equal(await page.title(), second.metaTitle || second.title);
    for (const prefix of ['blog', 'case-studies']) {
      assert.equal((await page.goto(`${origin}/${prefix}/missing-regression-slug/`, { waitUntil: 'domcontentloaded' })).status(), 404);
      assert.equal(await page.locator('h1').innerText(), 'Page Not Found');
      checked++;
    }
    assert.deepEqual(errors, [], 'No browser runtime or hydration errors');
    await context.close();
  }
  console.log(`Passed ${checked} desktop/mobile route checks, snapshot hydration, stale cross-slug API rejection and missing-route 404s. Case-study source: ${content.caseStudies.length >= 3 ? 'published records' : 'three isolated fixtures (not deployed)'}.`);
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
