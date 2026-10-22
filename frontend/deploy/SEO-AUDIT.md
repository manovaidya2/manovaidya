# Dynamic SEO and redirect verification

For the 2026-10-22 payload and indexing audit, see [INDEXING-FIX.md](INDEXING-FIX.md).
The October 11 observations below are retained as historical context.

Verified again on 2026-10-11. Local changes pass; production still fails. No deployment,
commit, server configuration change, or Search Console action was performed.

## Root causes and fixes

- Collection fetching assumed a single complete response. The current backend does
  return complete collections, but the build now also follows explicit pagination
  metadata and rejects incomplete/repeated pages, unsafe slugs, missing content,
  duplicate slugs, API failures, and invalid schema JSON.
- Detail refreshes could replace build content, and React reused state between
  slugs. Details keep the exact build snapshot; slug navigation remounts state,
  validates publication and response identity, and rejects stale cross-route data.
- A failed related-blog request could hide a successfully fetched article during
  client navigation. Related content failure no longer fails the article.
- Browser DOMParser and SSR string processing produced different article markup.
  Both now use parse5 with stable heading IDs, decoded text, and UTC display dates.
- React 19 duplicated static metadata during hydration. Static head tags are
  explicitly handed over to React; JSON-LD remains in the rendered tree. Detail
  components no longer manually compete with Seo for metadata ownership.
- CMS schema included an obsolete speech-delay blog URL. Article schema now uses
  the actual slug URL and featured image, preserving custom FAQ/non-article nodes.
  Missing schema gets a BlogPosting/Article fallback. Social image tags prioritize
  the featured image rather than CMS fields containing social-profile URLs.
- Dummy case-study content had entered sitemap/redirect generation in the earlier
  worktree. The existing public-content filter is shared with the listing/build.
- Production does not match the supplied redirect/404 configuration. The existing
  map and Nginx configuration already implement the desired slash format; actual
  local Nginx tests prove this. The prerender now emits only canonical directory
  `index.html` files, so replacing the whole old `dist` tree also removes stale
  duplicate `.html` artifacts from prior releases.

## Validation

| Check | Result |
| --- | --- |
| `npm run test:seo` | 12/12 passed |
| `npm run build` | Passed client build, SSR, prerender, and SEO validation |
| Generated HTML | 92 routes; 5 blog details; 0 eligible case-study details |
| `verify:seo` (also part of build) | 69 sitemap pages, all 5 details, 69 internal destinations |
| `npm run verify:hydration` | 22 desktop/mobile route checks passed, plus stale API rejection and successful SPA navigation |
| `npm run verify:nginx` | 1,201 responses passed using real Nginx 1.28.0 |
| Local `curl -I` and `curl -IL` | Five representative redirects ended at 200 with exactly one redirect |
| `npm run verify:seo:live` | Failed on 2026-10-11: 1,441 responses checked; 1,553 reported issues |
| Additional live missing-slug HEAD probes | Both incorrectly returned 200 |
| `git diff --check` | Passed |

Hydration tests check exact title, description, H1, canonical, full article text,
loaded featured images, schema presence, and absence of runtime/hydration errors
with API failures injected. They exercise three real blogs and three isolated
case-study fixtures at 1440x900 and 390x844. There are no eligible published case
studies available to test three real production details; fixtures are not deployed
or written into dist. Screenshots are in `.cache/seo-regression-1440.png` and
`.cache/seo-regression-390.png`.

Successfully generated blog detail slugs:

- `why-does-my-child-struggle-to-make-friends-could-it-be-autism`
- `autism-vs-speech-delay-what-are-the-early-signs-of-autism-in-children`
- `can-a-child-have-autism-and-adhd-together-what-parents-should-know`
- `does-my-child-have-adhd-early-signs-of-adhd-in-children`
- `how-to-discipline-a-child-with-autism-a-gentle-parent-guide`

## Observed responses versus verified local behavior

The local column uses the supplied production config with temporary loopback HTTP
listeners; TLS/host redirects are adapted for local testing. It is not a claim
that production has changed.

| URL | Current production response | Verified local result |
| --- | --- | --- |
| `/blog` | 301 to `/blog/`, then 200; one hop | Same |
| `/index.html` | 200; zero redirects | 301 to `/`, then 200; one hop |
| `/dr-ankush-garg` | 301 to `/dr-ankush-garg/`, then 200 | 301 to `/about/doctor/`, then 200; one hop |
| Published blog without slash | See per-URL live report | 301 to its own slash URL, then 200; one hop |
| `/case-studies` | See per-URL live report | 301 to `/case-studies/`, then 200; one hop |
| `/blog/missing-regression-slug/` | 200, same length/ETag as homepage HTML | 404 |
| `/case-studies/missing-regression-slug/` | 200, same length/ETag as homepage HTML | 404 |

The full live results are in `frontend/seo-live-report.json` (ignored generated
report). The supplied crawl description did not include a URL-by-URL report file;
validation instead covers all current sitemap destinations and configured aliases.

## Changed files

This list includes the earlier uncommitted SEO fixes retained and extended in the
current worktree; it does not claim all files were first changed in this request.

- `.github/workflows/seo-build.yml`
- `frontend/deploy/README.md`
- `frontend/deploy/SEO-AUDIT.md`
- `frontend/deploy/canonical-redirects.map` (generated)
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/public/sitemap.xml` (generated)
- `frontend/scripts/prerender.mjs`
- `frontend/scripts/seo-content.mjs`
- `frontend/scripts/seo-content.test.mjs`
- `frontend/scripts/verify-hydration.mjs`
- `frontend/scripts/verify-nginx.mjs`
- `frontend/scripts/verify-seo.mjs`
- `frontend/src/App.jsx`
- `frontend/src/main.jsx`
- `frontend/src/components/Seo.jsx`
- `frontend/src/blog/BlogListingSection.jsx`
- `frontend/src/homepage/InsightsFaqSection.jsx`
- `frontend/src/pages/BlogDetails.jsx`
- `frontend/src/pages/CaseStudiesPage.jsx`
- `frontend/src/pages/CaseStudyDetails.jsx`
- `frontend/src/pages/VideoLibraryPage.jsx`
- `frontend/src/utils/articleSchema.js`
- `frontend/src/utils/blogContent.js`
- `frontend/src/utils/publicContent.js`

## Release requirements and remaining failures

The new scheduled/manual GitHub workflow produces a validated release artifact,
including HTML and the matching redirect map. It must be committed to the default
branch with Actions enabled before scheduling operates. It does not deploy.
An authorized operator must publish the complete release, replace obsolete HTML
and stale `.html` duplicates, apply the documented Nginx config, check syntax,
reload, and rerun live verification.
CMS edits, publication changes, deletion, or slug changes require that release;
scheduled builds alone do not update the served site. See README.md for the process.

Production redirects, legacy aliases, and missing-route responses remain failing.
Three real published case-study details could not be verified because none are
eligible. Production hydration, Google Search Console indexing, and production TLS
configuration were not established by the local browser/Nginx tests. Vite reports
existing ignored `use client` directives and a large bundle, but completes.
