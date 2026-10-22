import { createHash } from 'node:crypto';

// Keep the original image bytes; only move their transport out of the HTML.
export function extractInlineImages(content) {
  const assets = new Map();
  const extensions = { jpeg: 'jpg', png: 'png', gif: 'gif', webp: 'webp', avif: 'avif', 'svg+xml': 'svg' };
  const visit = (value) => {
    if (typeof value === 'string') {
      return value.replace(/data:image\/(jpeg|png|gif|webp|avif|svg\+xml);base64,([A-Za-z0-9+/]+={0,2})/gi, (original, type, encoded) => {
        const bytes = Buffer.from(encoded, 'base64');
        if (bytes.toString('base64') !== encoded) return original;
        const name = `cms-${createHash('sha256').update(bytes).digest('hex')}.${extensions[type.toLowerCase()]}`;
        assets.set(name, bytes);
        return `/assets/${name}`;
      });
    }
    if (Array.isArray(value)) return value.map(visit);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item)]));
    return value;
  };
  return { content: visit(content), assets };
}
