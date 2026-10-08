const DEFAULT_SITE_URL = 'https://manovaidya.org';

export const getPublicPageUrl = (pathname) => {
  const site = new URL(process.env.PUBLIC_SITE_URL || DEFAULT_SITE_URL);
  if (/^(www\.)?manovaidya\.(org|com)$/.test(site.hostname)) {
    site.protocol = 'https:';
    site.hostname = 'manovaidya.org';
    site.port = '';
  }
  const url = new URL(pathname, site.origin);
  return `${site.origin}${url.pathname.replace(/\/+$/, '')}/`;
};
