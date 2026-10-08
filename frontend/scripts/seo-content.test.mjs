import test from "node:test";
import assert from "node:assert/strict";
import { fetchPublishedContent, isIndexable, getLegacyAliases } from "./seo-content.mjs";
import { normalizeArticleLinks } from "../src/utils/articleLinks.js";

test("robots exclusions are case insensitive and independent of directive order", () => {
  for (const robots of ["noindex,nofollow", " NOINDEX,follow", "follow, noindex"]) assert.equal(isIndexable({ robots }), false);
  assert.equal(isIndexable({ robots: "index,follow" }), true);
  assert.equal(isIndexable({}), true);
});

test("published content retains noindex pages for rendering and excludes hidden/draft/test blogs", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => ({
    ok: true,
    json: async () => ({ success: true, data: url.includes("/blogs?") ? [
      { slug: "real-article", status: "published" },
      { slug: "noindex-article", robots: "noindex" },
      { slug: "hidden", showOnFrontend: false },
      { slug: "draft", status: "draft" },
      { slug: "dummy-article" },
    ] : [{ slug: "real-study", status: "published" }, { slug: "draft-study", status: "draft" }] }),
  }));
  const content = await fetchPublishedContent();
  assert.deepEqual(content.blogs.map((item) => item.slug), ["real-article", "noindex-article"]);
  assert.deepEqual(content.caseStudies.map((item) => item.slug), ["real-study"]);
});

test("API failures and invalid collection responses stop incomplete builds", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({ ok: false, status: 503 }));
  await assert.rejects(fetchPublishedContent(), /refusing to build an incomplete sitemap/);
  globalThis.fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => ({ success: false, data: [] }) }));
  await assert.rejects(fetchPublishedContent(), /Invalid .* collection/);
});

test("legacy article aliases preserve current routes and cannot target two articles", () => {
  const content = { blogs: [
    { slug: "new-article", canonicalUrl: "http://www.manovaidya.org/old-article?tracking=1" },
    { slug: "another-article", canonicalUrl: "https://manovaidya.org/autism-treatment-india/" },
    { slug: "external-article", canonicalUrl: "https://external.example/page" },
  ], caseStudies: [] };
  assert.deepEqual([...getLegacyAliases(content)], [["/old-article", "https://manovaidya.org/blog/new-article/"]]);
  content.blogs.push({ slug: "conflicting-article", canonicalUrl: "https://manovaidya.org/old-article/" });
  assert.throws(() => getLegacyAliases(content), /Conflicting legacy article URL/);
});

test("CMS links normalize hosts and aliases while preserving article markup, queries and fragments", () => {
  const html = `<p class='intro'>Read <a title='Doctor' HREF='http://www.manovaidya.org/dr-ankush-garg?x=1&amp;y=2#profile'>Dr. Garg</a>.</p>`;
  assert.equal(normalizeArticleLinks(html), `<p class='intro'>Read <a title='Doctor' href="https://manovaidya.org/about/doctor/?x=1&amp;y=2#profile">Dr. Garg</a>.</p>`);
  assert.equal(normalizeArticleLinks('<a href=/blog/published-article>Read article</a>'), '<a href="https://manovaidya.org/blog/published-article/">Read article</a>');
});

test("CMS link normalization leaves external links, downloads, anchors, and article text unchanged", () => {
  const html = `<p>https://manovaidya.org/about/doctor <a href="https://example.org/about">Source</a> <a href="#section">Section</a> <a href="/guide.pdf">Download</a> <a href="mailto:test@example.org">Email</a></p>`;
  assert.equal(normalizeArticleLinks(html), html);
});
