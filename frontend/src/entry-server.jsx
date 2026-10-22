import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";
import { PrerenderDataProvider } from "./prerenderData.jsx";
import { isStaticPublicPath, getPublicDetail } from './utils/publicRoutes.js';
import { isPublicBlog, isPublicCaseStudy } from './utils/publicContent.js';

export function render(url, prerenderData = {}) {
  const pathname = new URL(url, 'https://manovaidya.org').pathname;
  const detail = getPublicDetail(pathname);
  const record = detail && (detail.type === 'blog' ? prerenderData.blogsBySlug : prerenderData.caseStudiesBySlug)?.[detail.slug];
  const validDetail = record?.slug === detail?.slug && record && (detail.type === 'blog' ? isPublicBlog(record) : isPublicCaseStudy(record));
  const status = isStaticPublicPath(pathname) || validDetail ? 200 : 404;
  const data = status === 404 ? { ...prerenderData, httpStatus: 404, notFoundPath: pathname } : prerenderData;
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <PrerenderDataProvider data={data}>
        <App Router={MemoryRouter} routerProps={{ initialEntries: [url] }} />
      </PrerenderDataProvider>
    </HelmetProvider>,
  );

  return {
    status,
    data,
    html,
    helmet: helmetContext.helmet,
  };
}
