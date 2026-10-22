# Indexing verification — 2026-10-22

UI components, page copy, layouts, and image quality have not been changed by
this payload fix. Existing uncommitted SEO/404 work was preserved.

## Confirmed technical issues

- Seven of 69 production sitemap pages contain 4.16–6.01 MB of uncompressed HTML.
  Inline base64 article images are duplicated in article bodies and hydration
  data. Googlebot currently fetches only the first 2 MB of HTML and each script
  or stylesheet. Truncation can cut off hydration data and JavaScript resources;
  it does not establish Google's specific exclusion reason for each URL.
- The previous client bundle was 4.43 MB. The new largest client script is 0.67 MB.
- Three nonexistent page probes return homepage HTML and status 200 instead of
  404. The existing supplied Nginx config fixes this when applied to production.
- The connected Search Console tool exposes no properties for this account, so
  Google-reported indexing coverage and selected canonicals could not be inspected.

Reference: [Google's crawler fetch-limit explanation](https://developers.google.com/search/blog/2026/03/crawler-blog-post).

## Implementation and checks

- Extract embedded CMS images to deduplicated content-hashed assets; preserve the
  original bytes. Build snapshots, SSR and browser hydration share the same URLs.
- Split client scripts by source section and dependencies without changing routes.
- Fail SEO validation if HTML/JS/CSS reaches 1.9 MB or a CMS image is missing.
- Build passes: 92 generated routes, 69 sitemap destinations, five published blog
  details and 69 internal page destinations. Maximum HTML size: 817,157 bytes.
- All five API article bodies exactly match after replacing asset references with
  the original inline image bytes. Eight unique image files replace repeated data.
- SEO unit tests: 13 passed.
- Browser verification: 22 desktop/mobile route checks, API-failure hydration,
  stale-response rejection, SPA navigation and missing-route 404s passed. Three
  isolated case-study fixtures are used because no eligible published studies exist.
- Real local Nginx: 1,201 responses passed, including canonical pages, one-hop
  redirects, aliases, query strings, HTML variants and missing-resource 404s.
- Read-only production check: 73 URLs (69 sitemap pages and four missing resources).
  All sitemap pages return 200; seven exceed the fetch budget. Three nonexistent
  pages return 200; the missing JavaScript correctly returns 404. No noindex meta
  was found on the sitemap pages. Local raw results: `.cache/indexing-production-check.json`.

## Required production steps

1. Deploy the complete new `frontend/dist` tree, including extracted image assets,
   and the matching redirect map. Replace the old release rather than overlaying it.
2. Apply the supplied `manovaidya.nginx.conf` to the actual frontend vhost, adapting
   server paths and keeping existing operational settings. Its route fallback is
   `try_files $uri $uri/ =404;`. Validate Nginx syntax before reloading.
3. Purge cached HTML and redirects if a CDN is used; run `npm run verify:seo:live`.
4. Submit `https://manovaidya.org/sitemap.xml` in the verified Search Console
   property. Use Test Live URL and Request Indexing for priority canonical URLs.
   Validate the relevant Page Indexing issues after successful deployment.
5. Rebuild and deploy after CMS article publication, deletion, content or slug
   changes. The existing scheduled workflow produces artifacts; it does not deploy.

No production server or Search Console account was changed. Live fixes require
deployment access. Google controls crawl timing and indexing; technical validation
cannot guarantee inclusion of every page.
