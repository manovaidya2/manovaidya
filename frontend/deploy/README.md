# Production Redirect Fix

Every public page uses HTTPS, the non-www host, and a trailing slash. The root is
`https://manovaidya.org/`. Old aliases, slashless paths, and HTML variants redirect
directly to the final page. Assets, robots.txt, and sitemap.xml keep their filenames.

1. Run `npm ci` and `npm run build` in `frontend`. Deploy the complete `dist`
   directory, including each route's `index.html`, and the `deploy` directory.
   Deploy the backend changes as well: its dynamic sitemaps and Search Console
   queries must use the same final URLs as the frontend.
2. Back up the existing Nginx site config. Merge `manovaidya.nginx.conf` into the
   existing frontend vhost, adapting root, include, and certificate paths. Replace
   competing redirect rules; do not enable duplicate vhosts for these domains.
   Preserve any existing API proxy, ACME challenge, security, and logging settings.
   The certificate must cover both `manovaidya.org` and `www.manovaidya.org`.
3. Run `sudo nginx -t`, then `sudo systemctl reload nginx` only after it passes.
4. If Cloudflare is enabled, use Full (strict) SSL. Remove conflicting slash,
   host, or HTTPS redirect rules and purge cached HTML/redirects after deployment.
   Flexible SSL can loop when Nginx redirects HTTP to HTTPS. To keep every variant
   to one hop, let Nginx handle normalization, or make the edge rule send each
   variant straight to its final canonical URL.
   Merge `map_hash_bucket_size 256` with any existing directive in the http context.
5. Run `npm run verify:seo:live` against production. It checks every sitemap
   page with browser and smartphone Googlebot user agents, then all HTTP/www/slash
   variants, HTML variants, query strings, aliases, redirect destinations, and
   frontend/API sitemaps. A failing exit code means deployment still needs repair.
6. Submit `https://manovaidya.org/sitemap.xml` in Search Console. Test the final
   slash URLs with Test Live URL, request indexing, and validate the redirect issue.
   Old redirect URLs are expected to be excluded; Google decides when to recrawl
   and index the destination. Do not request indexing of a redirecting variant.

The sample returns 404 for pages that have not been prerendered. Rebuild/redeploy
after publishing a blog or case study, so its content exists before sitemap submission.
The build fetches public blogs/case studies once and uses the same local snapshot
for sitemap, redirects, and prerendering. API failures stop the build instead of
silently removing dynamic pages. Public noindex articles are rendered but excluded
from the sitemap. Run `npm run generate:sitemap` before regenerating redirects
or prerendering independently. The `.cache` snapshot is a local build input and
does not need to be served or deployed.
CMS article links are normalized at render time, and the build checks every
internal page destination for generated HTML. Broken links or missing article
content stop the build. Equivalent legacy URLs have redirects; concerns without
a dedicated page link to an existing assessment/support section instead.
This repository cannot change production Nginx, Cloudflare, or Search Console
without access to those services.

To test the redirect rules locally against a real Nginx binary, set `NGINX_BINARY`
to its executable path (or have `nginx` on PATH), then run `npm run verify:nginx`.
This starts temporary HTTP listeners on loopback, checks every static route and
alias, and shuts them down. Production TLS certificates still require server validation.
