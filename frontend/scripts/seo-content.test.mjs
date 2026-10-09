import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { fetchPublishedContent, isIndexable, isPublicCaseStudy, getLegacyAliases } from "./seo-content.mjs";
import { normalizeArticleLinks } from "../src/utils/articleLinks.js";
import { processBlogContent } from "../src/utils/blogContent.js";
import { getArticleSchema } from "../src/utils/articleSchema.js";

test("robots exclusions are case insensitive and independent of directive order", () => {
  for (const robots of ["noindex,nofollow", " NOINDEX,follow", "follow, noindex"]) assert.equal(isIndexable({ robots }), false);
  assert.equal(isIndexable({ robots: "index,follow" }), true);
  assert.equal(isIndexable({}), true);
});

test("published content retains noindex pages for rendering and excludes hidden/draft/test blogs", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => ({
    ok: true,
    json: async () => ({ success: true, data: (url.includes("/blogs?") ? [
      { slug: "real-article", status: "published" },
      { slug: "noindex-article", robots: "noindex" },
      { slug: "hidden", showOnFrontend: false },
      { slug: "draft", status: "draft" },
      { slug: "dummy-article" },
    ] : [
      { slug: "real-study", status: "published" },
      { slug: "test-case-study", title: "test data for casestudies", status: "published" },
      { slug: "draft-study", status: "draft" },
    ]).map((item) => ({ title: 'Care journey', content: '<p>Real article content.</p>', ...item })) }),
  }));
  const content = await fetchPublishedContent();
  assert.deepEqual(content.blogs.map((item) => item.slug), ["real-article", "noindex-article"]);
  assert.deepEqual(content.caseStudies.map((item) => item.slug), ["real-study"]);
});

test("case study public filter excludes dummy content using the same production rules", () => {
  assert.equal(isPublicCaseStudy({ slug: "real-study", title: "Family care journey", status: "published" }), true);
  assert.equal(isPublicCaseStudy({ slug: "test-study", title: "test data for csestudies", status: "published" }), false);
  assert.equal(isPublicCaseStudy({ slug: "hidden-study", showOnFrontend: false, status: "published" }), false);
});

test("hydration refresh failures do not replace prerendered route content", async () => {
  const files = [
    ["src/homepage/InsightsFaqSection.jsx", /catch\s*\{[\s\S]*if\s*\(isMounted && !initialBlogs\.length\)/],
    ["src/blog/BlogListingSection.jsx", /catch\s*\(err\)\s*\{[\s\S]*if\s*\(isMounted && !initialBlogs\.length\)/],
    ["src/pages/BlogDetails.jsx", /catch\s*\(err\)\s*\{[\s\S]*if\s*\(isMounted && !initialBlog\)/],
    ["src/pages/CaseStudyDetails.jsx", /if\s*\(!initialStudy\)\s*setLoading\(true\)[\s\S]*if\s*\(isMounted && !initialStudy\)\s*setError/],
    ["src/pages/CaseStudiesPage.jsx", /catch\s*\(err\)\s*\{[\s\S]*if\s*\(isMounted && !initialCaseStudies\.length\)/],
    ["src/pages/VideoLibraryPage.jsx", /catch\s*\(err\)\s*\{[\s\S]*if\s*\(isMounted && !initialVideos\.length\)/],
  ];

  for (const [file, pattern] of files) {
    const source = await fs.readFile(file, "utf8");
    assert.match(source, pattern, `${file} should preserve prerendered content when refresh APIs fail`);
  }
});

test("API failures and invalid collection responses stop incomplete builds", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({ ok: false, status: 503 }));
  await assert.rejects(fetchPublishedContent(), /refusing to build an incomplete sitemap/);
  globalThis.fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => ({ success: false, data: [] }) }));
  await assert.rejects(fetchPublishedContent(), /Invalid .* collection/);
});

test("all pagination pages are fetched and incomplete or repeated pages fail", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => {
    const page = Number(new URL(url).searchParams.get('page'));
    return { ok: true, json: async () => ({ success: true, data: [{ slug: `care-${page}`, title: `Care ${page}`, content: '<p>Care content</p>' }], pagination: { totalPages: 3, total: 3 } }) };
  });
  const content = await fetchPublishedContent();
  assert.equal(content.blogs.length, 3);
  assert.equal(content.caseStudies.length, 3);
  globalThis.fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => ({ success: true, data: [], pagination: { total: 3 } }) }));
  await assert.rejects(fetchPublishedContent(), /empty page/);
  globalThis.fetch.mock.mockImplementation(async () => ({ ok: true, json: async () => ({ success: true, data: [{ slug: 'repeated' }], pagination: { totalPages: 3 } }) }));
  await assert.rejects(fetchPublishedContent(), /duplicate slug/);
});

test("missing content, unsafe slugs and invalid schema stop the build", async (t) => {
  for (const item of [{ slug: '../escape' }, { slug: 'care' }, { slug: 'care', title: 'Care', content: '<p>Care</p>', schemaMarkup: '{' }]) {
    t.mock.method(globalThis, 'fetch', async () => ({ ok: true, json: async () => ({ success: true, data: [item] }) }));
    await assert.rejects(fetchPublishedContent(), /invalid slug|invalid schema/i);
    t.mock.restoreAll();
  }
});

test("article processing preserves decoded headings and makes unique stable IDs", () => {
  const content = '<h2 id="care">Care &amp; support</h2><h2>Care</h2><p style="background-color: white">Text</p>';
  const result = processBlogContent(content);
  assert.deepEqual(result.toc.map((heading) => heading.id), ['care', 'care-2']);
  assert.equal(result.toc[0].text, 'Care & support');
  assert.match(result.html, /background-color: transparent/);
  assert.deepEqual(processBlogContent(result.html), result);
});

test("CMS article schema keeps FAQ data but uses the actual article identity and image", () => {
  const schema = getArticleSchema({ slug: 'actual-slug', title: 'Care', schemaMarkup: JSON.stringify({ '@graph': [
    { '@type': 'BlogPosting', mainEntityOfPage: { '@id': 'https://manovaidya.org/old-slug/' } },
    { '@type': 'FAQPage', mainEntity: [] },
  ] }) }, 'blog', 'https://api.manovaidya.org/uploads/care.jpg');
  assert.equal(schema['@graph'][0].mainEntityOfPage['@id'], 'https://manovaidya.org/blog/actual-slug/');
  assert.equal(schema['@graph'][0].image, 'https://api.manovaidya.org/uploads/care.jpg');
  assert.equal(schema['@graph'][1]['@type'], 'FAQPage');
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
