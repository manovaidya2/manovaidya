import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';
import sitemapRoutes from '../routes/sitemapRoutes.js';
import { getBlogPageUrl } from '../services/searchConsoleService.js';
import { getPublicPageUrl } from '../utils/publicPageUrl.js';

test('all dynamic sitemap endpoints and Search Console use the final frontend URLs', async (t) => {
  const query = (items) => ({ select() { return this; }, sort() { return this; }, lean: async () => items });
  t.mock.method(Blog, 'find', () => query([
    { slug: 'published-blog', canonicalUrl: 'http://www.manovaidya.org/blog/obsolete?tracking=1' },
    { slug: 'excluded-blog', robots: ' NOINDEX,follow' },
    { slug: 'hidden-blog', showOnFrontend: false },
    { slug: 'dummy-article', content: 'Dummy article content' },
  ]));
  t.mock.method(CaseStudy, 'find', () => query([
    { slug: 'published-study', canonicalUrl: 'https://another-site.example/study' },
    { slug: 'excluded-study', robots: 'follow, noindex' },
  ]));
  const app = express();
  app.use(sitemapRoutes);
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  try {
    for (const [endpoint, expected] of [
      ['/sitemap-blog.xml', ['https://manovaidya.org/blog/published-blog/']],
      ['/sitemap-case-studies.xml', ['https://manovaidya.org/case-studies/published-study/']],
      ['/sitemap.xml', ['https://manovaidya.org/blog/published-blog/', 'https://manovaidya.org/case-studies/published-study/']],
    ]) {
      const response = await fetch(`http://127.0.0.1:${server.address().port}${endpoint}`);
      assert.equal(response.status, 200);
      const xml = await response.text();
      assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url), expected);
    }
    assert.equal(getBlogPageUrl({ slug: 'published-blog', canonicalUrl: 'http://www.manovaidya.com/wrong' }),
      'https://manovaidya.org/blog/published-blog/');
    assert.equal(getBlogPageUrl({}), null);
    assert.equal(getPublicPageUrl('/blog/published-blog/?tracking=1#section'), 'https://manovaidya.org/blog/published-blog/');
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});
