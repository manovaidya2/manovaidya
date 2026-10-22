// Share the same HTTP behavior in Express, Vite preview and integration checks.
export { createPageMiddleware, sendNotFound } from '../../backend/middleware/frontendPages.js';
