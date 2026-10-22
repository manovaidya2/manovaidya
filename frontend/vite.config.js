import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { pageStatusPlugin } from './scripts/vite-page-status.mjs'

export default defineConfig({
  plugins: [
    tailwindcss(),
    pageStatusPlugin(),
  ],
  ssr: {
    noExternal: ['react-router-dom', 'react-router', 'react-helmet-async'],
  },
  build: {
    rollupOptions: {
      output: {
        // Keep each script below Google's per-resource fetch limit.
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/');
          if (normalized.includes('/node_modules/')) return 'vendor';
          const section = normalized.match(/\/src\/([^/]+)\/.*\.[jt]sx?$/)?.[1];
          if (section) return `section-${section}`;
        },
      },
    },
  },
})
