import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
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
