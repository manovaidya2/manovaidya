import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import express from 'express';
import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';
import { createPageMiddleware } from '../middleware/frontendPages.js';
import { findFreshDetail } from '../services/freshDetailPages.js';

const shell = '<!doctype html><html><head><meta charset="UTF-8" />\n  </head><body><div id="root"></div><script type="module" src="/assets/app.js"></script></body></html>';
const chain = (items) => ({ select() { return this; }, sort() { return this; }, limit() { return this; }, lean: async () => items });

const withServer = async (app, run) => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  try {
    await run(`http://127.0.0.1:${server.address().port}`);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
};

test('pages published after the build are served from the app shell; unknown slugs stay 404', async (t) => {
  const dist = await fs.mkdtemp(path.join(os.tmpdir(), 'fresh-detail-'));
  t.after(() => fs.rm(dist, { recursive: true, force: true }));
  await fs.writeFile(path.join(dist, 'app-shell.html'), shell);
  await fs.writeFile(path.join(dist, '404.html'), '<h1>Page Not Found</h1>');
  await fs.writeFile(path.join(dist, 'routes-manifest.json'), JSON.stringify({ pages: {} }));

  const lookups = [];
  const findDetail = async (type, slug) => {
    lookups.push(`${type}:${slug}`);
    return type === 'blog' && slug === 'new-post'
      ? { head: '<title data-prerender-seo="true">New $& post</title>', data: { blogsBySlug: { 'new-post': { slug: 'new-post', content: '<p>a</script>$\' b</p>' } } } }
      : null;
  };
  const app = express();
  app.use(createPageMiddleware({ distDir: dist, findDetail }));

  await withServer(app, async (origin) => {
    const page = await fetch(`${origin}/blog/new-post/`);
    assert.equal(page.status, 200);
    assert.equal(page.headers.get('cache-control'), 'no-cache');
    const html = await page.text();
    assert.match(html, /<title data-prerender-seo="true">New \$& post<\/title>\n  <\/head>/);
    assert.match(html, /<div id="root"><\/div>\n    <script>window.__MANOVAIDYA_PRERENDER_DATA__=\{"blogsBySlug"/);
    assert.ok(html.includes('\\u003c/script\\u003e$\' b'), 'record JSON is inlined safely and verbatim');

    const head = await fetch(`${origin}/blog/new-post/`, { method: 'HEAD' });
    assert.equal(head.status, 200);

    const slashless = await fetch(`${origin}/blog/new-post?x=1`, { redirect: 'manual' });
    assert.equal(slashless.status, 301);
    assert.equal(slashless.headers.get('location'), '/blog/new-post/?x=1');

    for (const missing of ['/blog/unknown-post/', '/case-studies/unknown-study/']) {
      const response = await fetch(`${origin}${missing}`);
      assert.equal(response.status, 404);
      assert.match(await response.text(), /Page Not Found/);
    }
    assert.equal((await fetch(`${origin}/about/unknown/`)).status, 404);
  });
  assert.deepEqual(lookups, ['blog:new-post', 'blog:new-post', 'blog:new-post', 'blog:unknown-post', 'case-studies:unknown-study']);
});

test('fresh blog detail has its own SEO head, full record and public related links', async (t) => {
  const blog = {
    slug: 'new-post', status: 'published', title: 'New "Post" <b>', metaTitle: '', metaDescription: 'Desc & more',
    image: '/uploads/new.jpg', content: '<p>Body</p>', robots: 'index, follow',
  };
  t.mock.method(Blog, 'findOne', (query) => ({ lean: async () => (query.slug === 'new-post' ? blog : null) }));
  t.mock.method(Blog, 'find', () => chain([
    { slug: 'older', status: 'published', title: 'Older' },
    { slug: 'dummy-post', status: 'published', title: 'Dummy post' },
  ]));

  const page = await findFreshDetail('blog', 'new-post');
  assert.match(page.head, /<title data-prerender-seo="true">New &quot;Post&quot; &lt;b&gt;<\/title>/);
  assert.match(page.head, /<meta data-prerender-seo="true" name="description" content="Desc &amp; more" \/>/);
  assert.match(page.head, /<meta data-prerender-seo="true" name="robots" content="index, follow" \/>/);
  assert.match(page.head, /<link rel="canonical" href="https:\/\/manovaidya.org\/blog\/new-post\/" \/>/);
  assert.match(page.head, /og:image" content="https:\/\/api.manovaidya.org\/uploads\/new.jpg"/);
  assert.equal(page.data.blogsBySlug['new-post'], blog);
  assert.deepEqual(page.data.blogs, [{ slug: 'older', status: 'published', title: 'Older' }]);

  assert.equal(await findFreshDetail('blog', 'missing'), null);
  blog.title = 'Dummy article';
  assert.equal(await findFreshDetail('blog', 'new-post'), null, 'test content is never published');
});

test('fresh case-study detail respects visibility', async (t) => {
  const study = { slug: 'study', title: 'Study', summary: 'Summary', content: '<p>Story</p>' };
  t.mock.method(CaseStudy, 'findOne', () => ({ lean: async () => study }));
  const page = await findFreshDetail('case-studies', 'study');
  assert.match(page.head, /<title data-prerender-seo="true">Study \| Case Study \| Manovaidya<\/title>/);
  assert.match(page.head, /name="description" content="Summary"/);
  assert.deepEqual(Object.keys(page.data), ['caseStudiesBySlug']);
  study.robots = 'noindex';
  assert.match((await findFreshDetail('case-studies', 'study')).head, /name="robots" content="noindex, nofollow"/);
  study.status = 'draft';
  assert.equal(await findFreshDetail('case-studies', 'study'), null);
});
