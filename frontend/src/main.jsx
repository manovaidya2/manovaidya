import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { PrerenderDataProvider, getBrowserPrerenderData } from './prerenderData.jsx'

const rootElement = document.getElementById('root')
const prerenderData = getBrowserPrerenderData()
if (prerenderData.httpStatus === 404) prerenderData.notFoundPath = window.location.pathname
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <PrerenderDataProvider data={prerenderData}>
        <App />
      </PrerenderDataProvider>
    </HelmetProvider>
  </React.StrictMode>
)

// React owns the page metadata once it renders; remove the static copies first
// (prerendered pages and the backend's fresh-page shell both include them).
document.head.querySelectorAll('[data-prerender-seo]').forEach((tag) => tag.remove())

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
