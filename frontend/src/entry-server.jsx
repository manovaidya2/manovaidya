import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";
import { PrerenderDataProvider } from "./prerenderData.jsx";

export function render(url, prerenderData = {}) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <PrerenderDataProvider data={prerenderData}>
        <App Router={MemoryRouter} routerProps={{ initialEntries: [url] }} />
      </PrerenderDataProvider>
    </HelmetProvider>,
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
