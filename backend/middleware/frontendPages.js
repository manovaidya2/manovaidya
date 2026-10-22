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

export function createPageMiddleware({ distDir }) {
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
    return sendNotFound(req, res, root);
  };
}
