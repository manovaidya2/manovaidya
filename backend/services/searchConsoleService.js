import { google } from 'googleapis';

const SEARCH_CONSOLE_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

const parseServiceAccountCredentials = () => {
  const encodedCredentials = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
  const rawCredentials = encodedCredentials
    ? Buffer.from(encodedCredentials, 'base64').toString('utf8')
    : process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (!rawCredentials) return undefined;

  try {
    const credentials = JSON.parse(rawCredentials);
    if (credentials.private_key) credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    return credentials;
  } catch {
    const error = new Error('Google service account credentials are not valid JSON.');
    error.code = 'GOOGLE_CREDENTIALS_INVALID';
    throw error;
  }
};

const formatDate = (date) => date.toISOString().slice(0, 10);

const getDateRange = (days) => {
  const safeDays = Math.min(90, Math.max(7, Number(days) || 28));
  const endDate = new Date();
  endDate.setUTCDate(endDate.getUTCDate() - 3);
  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - (safeDays - 1));
  return { startDate: formatDate(startDate), endDate: formatDate(endDate), days: safeDays };
};

const createSearchConsoleClient = async () => {
  const credentials = parseServiceAccountCredentials();
  const auth = new google.auth.GoogleAuth({
    ...(credentials ? { credentials } : {}),
    scopes: [SEARCH_CONSOLE_SCOPE]
  });

  const authClient = await auth.getClient();
  return google.searchconsole({ version: 'v1', auth: authClient });
};

export const getSearchConsoleConfigStatus = () => ({
  siteConfigured: Boolean(process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL),
  credentialsConfigured: Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON
    || process.env.GOOGLE_SERVICE_ACCOUNT_BASE64
    || process.env.GOOGLE_APPLICATION_CREDENTIALS
  ),
  siteUrl: process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || null
});

export const getBlogPageUrl = (blog) => {
  if (blog.canonicalUrl) return blog.canonicalUrl;
  const publicSiteUrl = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  return publicSiteUrl && blog.slug ? `${publicSiteUrl}/blog/${blog.slug}` : null;
};

export const getSearchConsoleMetrics = async (blog, requestedDays = 28) => {
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL;
  if (!siteUrl) {
    const error = new Error('GOOGLE_SEARCH_CONSOLE_SITE_URL is not configured.');
    error.code = 'SEARCH_CONSOLE_NOT_CONFIGURED';
    throw error;
  }

  const pageUrl = getBlogPageUrl(blog);
  if (!pageUrl) {
    const error = new Error('Blog canonical URL or PUBLIC_SITE_URL is required for Search Console matching.');
    error.code = 'BLOG_URL_MISSING';
    throw error;
  }

  const { startDate, endDate, days } = getDateRange(requestedDays);
  const searchConsole = await createSearchConsoleClient();
  const pageFilter = [{
    filters: [{ dimension: 'page', operator: 'equals', expression: pageUrl }]
  }];

  const [summaryResponse, queriesResponse] = await Promise.all([
    searchConsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        type: 'web',
        dataState: 'final',
        aggregationType: 'byPage',
        dimensionFilterGroups: pageFilter,
        rowLimit: 1
      }
    }),
    searchConsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        type: 'web',
        dataState: 'final',
        dimensions: ['query'],
        dimensionFilterGroups: pageFilter,
        rowLimit: 10
      }
    })
  ]);

  const summary = summaryResponse.data.rows?.[0] || {};
  const topQueries = (queriesResponse.data.rows || []).map((row) => ({
    query: row.keys?.[0] || '',
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: Number(((row.ctr || 0) * 100).toFixed(2)),
    position: Number((row.position || 0).toFixed(2))
  }));

  return {
    pageUrl,
    siteUrl,
    startDate,
    endDate,
    days,
    clicks: summary.clicks || 0,
    impressions: summary.impressions || 0,
    ctr: Number(((summary.ctr || 0) * 100).toFixed(2)),
    position: summary.position ? Number(summary.position.toFixed(2)) : null,
    topQueries,
    hasData: Boolean(summaryResponse.data.rows?.length)
  };
};
