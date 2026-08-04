import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://manovaidya.org";
export const DEFAULT_TITLE = "Manovaidya | Child Development & Mental Health Clinic in Noida";
export const DEFAULT_DESCRIPTION =
  "Manovaidya is a child development and mental wellness clinic in Noida offering structured support for Autism, ADHD, speech delay, anxiety, depression, OCD and related concerns.";
const DEFAULT_IMAGE = `${SITE_URL}/favicon%20(4).png`;

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
};

function Seo({ title, description, path, image, noindex = false, keywords, schema }) {
  const location = useLocation();
  const resolvedTitle = title || DEFAULT_TITLE;
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${normalizePath(path || location.pathname)}`;
  const resolvedImage = image || DEFAULT_IMAGE;

  return (
    <React.Fragment>
      <Helmet>
        <title>{resolvedTitle}</title>
        <meta name="description" content={resolvedDescription} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Manovaidya" />
        <meta property="og:title" content={resolvedTitle} />
        <meta property="og:description" content={resolvedDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={resolvedImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={resolvedTitle} />
        <meta name="twitter:description" content={resolvedDescription} />
        <meta name="twitter:image" content={resolvedImage} />
        
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
    </React.Fragment>
  );
}

export default Seo;
