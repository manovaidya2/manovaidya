import fs from 'node:fs/promises';
import path from 'node:path';

const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const fallback = '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="robots" content="noindex,nofollow"><title>404 — Page Not Found | Manovaidya</title></head><body><main><h1>404</h1><h2>Page Not Found</h2><p>Sorry, the page you are looking for does not exist or has been moved.</p><a href="/">Back to Home</a></main></body></html>';

export async function sendNotFound(req, res, distDir) {
  let html;
  try { html = await fs.readFile(path.join(distDir, '404.html'), 'utf8'); } catch { html = fallback; }
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-store');
  res.end(req.method === 'HEAD' ? undefined : html);
}

const escapeScriptJson = (value) =>
  JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replaceAll(String.fromCharCode(0x2028), '\\u2028')
    .replaceAll(String.fromCharCode(0x2029), '\\u2029');

const detailPath = /^\/(blog|case-studies)\/([a-zA-Z0-9][a-zA-Z0-9_-]*)(\/?)$/;

// A detail page published after the last build: serve the app shell (built by
// scripts/prerender.mjs) with its SEO head and record inlined, so it renders
// immediately and returns 200. Returns false when there is nothing to serve.
async function sendFreshDetail(req, res, root, url, match, findDetail) {
  const [, type, slug, slash] = match;
  const page = await findDetail(type, slug);
  if (!page) return false;
  if (!slash) {
    res.statusCode = 301; res.setHeader('Location', `${url.pathname}/${url.search}`); res.end();
    return true;
  }
  let shell;
  try { shell = await fs.readFile(path.join(root, 'app-shell.html'), 'utf8'); } catch { return false; }
  const html = shell
    .replace('</head>', () => `    ${page.head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root"></div>\n    <script>window.__MANOVAIDYA_PRERENDER_DATA__=${escapeScriptJson(page.data)};</script>`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // The next static release replaces this response with prerendered HTML.
  res.setHeader('Cache-Control', 'no-cache');
  res.end(req.method === 'HEAD' ? undefined : html);
  return true;
}

export function createPageMiddleware({ distDir, findDetail }) {
  const root = path.resolve(distDir);
  return async (req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) return next();
    const url = new URL(req.originalUrl || req.url, 'http://localhost');
    if (/^\/(api|uploads)(\/|$)/.test(url.pathname)) return next();
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { return sendNotFound(req, res, root); }
    if (pathname.includes('\0')) return sendNotFound(req, res, root);
    try {
      const manifest = JSON.parse(await fs.readFile(path.join(root, 'routes-manifest.json'), 'utf8'));
      const target = Object.hasOwn(manifest.pages, pathname) ? manifest.pages[pathname] : null;
      if (target && pathname !== target) {
        // Check that the destination is really in this release before redirecting.
        await fs.access(path.join(root, ...target.split('/').filter(Boolean), 'index.html'));
        res.statusCode = 301; res.setHeader('Location', `${target}${url.search}`); return res.end();
      }
      const asset = path.extname(pathname) && !/\.html?$/i.test(pathname);
      if (target || asset) {
        const file = path.resolve(root, `.${pathname}`, target ? 'index.html' : '');
        const resolved = await fs.realpath(file);
        if (!resolved.startsWith(`${await fs.realpath(root)}${path.sep}`)) return sendNotFound(req, res, root);
        const body = await fs.readFile(resolved);
        res.statusCode = 200; res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
        return res.end(req.method === 'HEAD' ? undefined : body);
      }
    } catch (error) {
      if (!['ENOENT', 'ENOTDIR'].includes(error.code)) return next(error);
    }
    const detail = findDetail && pathname.match(detailPath);
    if (detail) {
      try {
        if (await sendFreshDetail(req, res, root, url, detail, findDetail)) return;
      } catch (error) {
        return next(error);
      }
    }
    return sendNotFound(req, res, root);
  };
}
