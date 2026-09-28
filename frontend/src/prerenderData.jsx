import React from "react";

const PrerenderDataContext = React.createContext({});

export function PrerenderDataProvider({ data = {}, children }) {
  return (
    <PrerenderDataContext.Provider value={data}>
      {children}
    </PrerenderDataContext.Provider>
  );
}

export function usePrerenderData() {
  return React.useContext(PrerenderDataContext);
}

export function getBrowserPrerenderData() {
  if (typeof window === "undefined") return {};
  return window.__MANOVAIDYA_PRERENDER_DATA__ || {};
}
