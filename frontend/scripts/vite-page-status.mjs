import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { isStaticPublicPath, getPublicDetail } from '../src/utils/publicRoutes.js';
import { getCanonicalUrl } from '../src/utils/canonical.js';
import { isPublicBlog, isPublicCaseStudy } from '../src/utils/publicContent.js';
import { applyPrerender } from './prerender.mjs';
import { createPageMiddleware } from './serve-pages.mjs';

export function pageStatusPlugin() {
  const require = createRequire(import.meta.url);
  return {
    name: 'manovaidya-page-status',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      // Router 7's "node" export selects CJS in Vite 5 dev SSR. Resolve its
      // published ESM sibling so named imports work in the live SSR loader.
      if (options?.ssr && ['react-router-dom', 'react-router', 'react-router/dom'].includes(source)) {
        const esm = require.resolve(source).replace(/\.js$/, '.mjs');
        await fs.access(esm);
        return esm;
      }
    },
    configurePreviewServer(server) {
      server.middlewares.use(createPageMiddleware({ distDir: path.resolve(server.config.root, server.config.build.outDir) }));
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!['GET', 'HEAD'].includes(req.method)) return next();
        const url = new URL(req.url, 'http://localhost'); const pathname = url.pathname;
        if (/^\/(?:@|src\/|node_modules\/|api\/|assets\/)/.test(pathname) || (path.extname(pathname) && !/\.html?$/i.test(pathname))) return next();
        const candidate = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
        if (isStaticPublicPath(candidate)) {
          const target = new URL(getCanonicalUrl(candidate)).pathname;
          if (pathname === target) return next();
          res.statusCode = 301; res.setHeader('Location', `${target}${url.search}`); return res.end();
        }
        try {
          const detail = getPublicDetail(candidate);
          if (detail) {
            // Read the existing build snapshot first; an uncached slug is verified
            // against the public API, never assumed to exist from its URL.
            let item;
            try {
              const snapshot = JSON.parse(await fs.readFile(path.resolve(server.config.root, '.cache/seo-content.json'), 'utf8'));
              item = (detail.type === 'blog' ? snapshot.blogs : snapshot.caseStudies).find((entry) => entry.slug === detail.slug);
            } catch { /* No build yet. Verify via API below. */ }
            if (!item) {
              const origin = process.env.VITE_API_ORIGIN || process.env.SITEMAP_API_ORIGIN || 'https://api.manovaidya.org';
              const response = await fetch(`${origin.replace(/\/$/, '')}/api/${detail.type === 'blog' ? 'blogs' : 'case-studies'}/slug/${encodeURIComponent(detail.slug)}`, { signal: AbortSignal.timeout(10000) });
              if (response.ok) item = (await response.json()).data;
              else if (response.status !== 404) throw new Error('Unable to verify this article right now.');
            }
            if (item?.slug === detail.slug && (detail.type === 'blog' ? isPublicBlog(item) : isPublicCaseStudy(item))) {
              const target = new URL(getCanonicalUrl(candidate)).pathname;
              if (pathname === target) return next();
              res.statusCode = 301; res.setHeader('Location', `${target}${url.search}`); return res.end();
            }
          }
          const template = await server.transformIndexHtml(pathname, await fs.readFile(path.resolve(server.config.root, 'index.html'), 'utf8'));
          const entry = await server.ssrLoadModule('/src/entry-server.jsx');
          const rendered = entry.render(pathname, { httpStatus: 404, notFoundPath: pathname });
          const html = applyPrerender(template, { routePath: pathname, canonicalUrl: getCanonicalUrl('/404/'), appHtml: rendered.html, helmet: rendered.helmet, data: rendered.data });
          res.statusCode = 404; res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-Robots-Tag', 'noindex, nofollow'); res.setHeader('Cache-Control', 'no-store');
          res.end(req.method === 'HEAD' ? undefined : html);
        } catch (error) { next(error); }
      });
    }
  };
}
