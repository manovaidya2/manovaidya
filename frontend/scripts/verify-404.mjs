import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';
import { createPageMiddleware } from './serve-pages.mjs';
import { render } from '../dist-ssr/entry-server.js';

const middleware = createPageMiddleware({ distDir: path.resolve('dist') });
const server = http.createServer((req, res) => middleware(req, res, (error) => { res.statusCode = error ? 500 : 404; res.end('Not found'); }));
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`; let browser; let checked = 0;
const missing = ['/does-not-exist/', '/blog/missing-regression-slug/', '/case-studies/missing-regression-slug/', '/404/', '/404.html', '/unavailable.html', '/missing?source=test'];
try {
  for (const route of missing) {
    const rendered = render(route);
    assert.equal(rendered.status, 404);
    assert.ok(rendered.html.includes('Page Not Found'));
    for (const method of ['GET', 'HEAD']) {
      const response = await fetch(`${origin}${route}`, { method, redirect: 'manual' });
      assert.equal(response.status, 404, route); assert.equal(response.headers.get('location'), null);
      assert.match(response.headers.get('x-robots-tag'), /noindex/);
      const body = await response.text();
      if (method === 'GET') { assert.ok(body.includes('Page Not Found')); assert.ok(body.includes('does not exist or has been moved')); }
      else assert.equal(body, '');
      checked++;
    }
  }
  for (const route of ['/', '/about/doctor/', '/blog/']) { assert.equal((await fetch(`${origin}${route}`)).status, 200); checked++; }
  const redirect = await fetch(`${origin}/about/doctor?source=test`, { redirect: 'manual' });
  assert.equal(redirect.status, 301); assert.equal(redirect.headers.get('location'), '/about/doctor/?source=test'); checked++;
  browser = await chromium.launch();
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport }); const page = await context.newPage(); const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await context.route('**/api/**', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: '{"success":false}' }));
    for (const route of missing.slice(0, 3)) {
      assert.equal((await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded' })).status(), 404);
      await page.getByRole('heading', { name: 'Page Not Found', exact: true }).waitFor();
      assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /noindex/);
      assert.equal(new URL(page.url()).pathname, route); checked++;
    }
    // React navigation to an unknown route must obtain a real document 404 too.
    await page.goto(`${origin}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelector('link[data-seo-canonical]'));
    const navigation = page.waitForResponse((response) => response.request().isNavigationRequest() && response.url().endsWith('/missing-spa-route/'));
    await page.evaluate(() => {
      window.history.pushState({ key: 'missing-regression', idx: 1 }, '', '/missing-spa-route/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    assert.equal((await navigation).status(), 404);
    await page.getByRole('heading', { name: 'Page Not Found', exact: true }).waitFor(); checked++;
    assert.deepEqual(errors, []);
    await fs.mkdir('.cache', { recursive: true }); await page.screenshot({ path: `.cache/404-${viewport.width}.png` });
    await context.close();
  }
  console.log(`Passed ${checked} HTTP/SSR/browser 404 checks: custom body, GET/HEAD status, noindex, unchanged URL, SPA navigation and valid-page/redirect regressions.`);
} finally { await browser?.close(); await new Promise((resolve) => server.close(resolve)); }
