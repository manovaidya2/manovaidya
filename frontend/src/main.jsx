import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { PrerenderDataProvider, getBrowserPrerenderData } from './prerenderData.jsx'

const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <PrerenderDataProvider data={getBrowserPrerenderData()}>
        <App />
      </PrerenderDataProvider>
    </HelmetProvider>
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
  // React 19 owns hoisted metadata after hydration; remove the static copies first.
  document.head.querySelectorAll('[data-prerender-seo]').forEach((tag) => tag.remove())
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
