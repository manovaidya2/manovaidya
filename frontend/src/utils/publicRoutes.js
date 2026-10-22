import { canonicalPaths, canonicalPathAliases, normalizePath } from './canonical.js';

const staticPaths = new Set([...canonicalPaths, ...Object.keys(canonicalPathAliases)].map(normalizePath));
export const isStaticPublicPath = (pathname) => staticPaths.has(normalizePath(pathname));
export const getPublicDetail = (pathname) => {
  const match = normalizePath(pathname).match(/^\/(blog|case-studies)\/([a-zA-Z0-9][a-zA-Z0-9_-]*)$/);
  return match ? { type: match[1], slug: match[2] } : null;
};
