import { createHash, randomUUID } from 'crypto';

export const SEO_AUDIT_VERSION = 1;

const SITE_URL = (process.env.PUBLIC_SITE_URL || 'https://manovaidya.org').replace(/\/$/, '');
const FETCH_TIMEOUT_MS = Number(process.env.SEO_AUDIT_FETCH_TIMEOUT_MS || 12000);
const USER_AGENT = 'ManovaidyaSeoAudit/1.0 (+https://manovaidya.org)';
const STATUS = {
  PASS: 'PASS',
  FAIL: 'FAIL',
  UNVERIFIED: 'UNVERIFIED'
};

const cache = new Map();

const CHECK_WEIGHTS = [
  ['title', 10],
  ['metaDescription', 10],
  ['canonical', 10],
  ['h1', 10],
  ['headings', 5],
  ['internalLinks', 8],
  ['imagesAlt', 8],
  ['jsonLd', 10],
  ['openGraph', 8],
  ['robotsMeta', 6],
  ['robotsTxt', 5],
  ['sitemap', 10]
];

const weightedCheckIds = CHECK_WEIGHTS.map(([id]) => id);
const weightsById = Object.fromEntries(CHECK_WEIGHTS);

const escapeRegExp = (value = '') => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const decodeHtml = (value = '') =>
  String(value)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');

const stripTags = (value = '') =>
  decodeHtml(String(value).replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

const getAttributes = (tag = '') => {
  const attributes = {};
  for (const match of tag.matchAll(/([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    const [, name, doubleQuoted, singleQuoted, unquoted] = match;
    if (!name || name.toLowerCase() === tag.split(/\s/, 1)[0].replace(/[</]/g, '').toLowerCase()) continue;
    attributes[name.toLowerCase()] = decodeHtml(doubleQuoted ?? singleQuoted ?? unquoted ?? '');
  }
  return attributes;
};

const findTags = (html, tagName) => html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || [];

const findTagContents = (html, tagName) => {
  const contents = [];
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  for (const match of html.matchAll(pattern)) {
    contents.push({ tag: match[0], content: match[1], attributes: getAttributes(match[0]) });
  }
  return contents;
};

const getMetaContent = (html, key, attribute = 'name') => {
  const normalizedKey = key.toLowerCase();
  for (const tag of findTags(html, 'meta')) {
    const attributes = getAttributes(tag);
    if ((attributes[attribute] || '').toLowerCase() === normalizedKey) return (attributes.content || '').trim();
  }
  return '';
};

const getCanonicalHref = (html) => {
  for (const tag of findTags(html, 'link')) {
    const attributes = getAttributes(tag);
    const rels = String(attributes.rel || '').toLowerCase().split(/\s+/);
    if (rels.includes('canonical')) return (attributes.href || '').trim();
  }
  return '';
};

const normalizeUrl = (value, base = SITE_URL) => {
  try {
    const url = new URL(value || '/', base);
    url.hash = '';
    const removableParams = [/^utm_/i, /^fbclid$/i, /^gclid$/i, /^msclkid$/i];
    [...url.searchParams.keys()].forEach((key) => {
      if (removableParams.some((pattern) => pattern.test(key))) url.searchParams.delete(key);
    });
    url.searchParams.sort();
    url.hostname = url.hostname.toLowerCase();
    url.protocol = url.protocol.toLowerCase();
    const pathname = url.pathname.replace(/\/{2,}/g, '/');
    url.pathname = pathname !== '/' ? pathname.replace(/\/$/, '') : '/';
    return url.toString();
  } catch {
    return '';
  }
};

const sameLogicalUrl = (left, right, base) => {
  const normalizedLeft = normalizeUrl(left, base);
  const normalizedRight = normalizeUrl(right, base);
  return Boolean(normalizedLeft && normalizedRight && normalizedLeft === normalizedRight);
};

const normalizeHtmlForHash = (html = '') =>
  String(html)
    .replace(/\r\n?/g, '\n')
    .replace(/\sdata-reactroot="[^"]*"/gi, '')
    .replace(/\snonce=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();

const sha256 = (value) => createHash('sha256').update(value).digest('hex');

const fetchText = async (url) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const startedAt = new Date();

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5',
        'Accept-Language': 'en-IN,en;q=0.9',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'User-Agent': USER_AGENT
      }
    });
    const text = await response.text();
    const completedAt = new Date();
    return {
      ok: response.ok,
      requestedUrl: url,
      finalUrl: response.url,
      statusCode: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type') || '',
      contentLength: text.length,
      responseTimeMs: completedAt.getTime() - startedAt.getTime(),
      startedAt: startedAt.toISOString(),
      completedAt: completedAt.toISOString(),
      userAgent: USER_AGENT,
      text
    };
  } catch (error) {
    const completedAt = new Date();
    return {
      ok: false,
      requestedUrl: url,
      finalUrl: '',
      statusCode: 0,
      statusText: error.name === 'AbortError' ? 'Timeout' : error.message,
      contentType: '',
      contentLength: 0,
      responseTimeMs: completedAt.getTime() - startedAt.getTime(),
      startedAt: startedAt.toISOString(),
      completedAt: completedAt.toISOString(),
      userAgent: USER_AGENT,
      text: '',
      error: error.name === 'AbortError' ? `Request timed out after ${FETCH_TIMEOUT_MS}ms` : error.message
    };
  } finally {
    clearTimeout(timeout);
  }
};

const makeCheck = (id, status, reason, evidence = {}) => ({
  id,
  label: id
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase()),
  status,
  points: status === STATUS.PASS ? weightsById[id] : 0,
  maxPoints: weightsById[id],
  reason,
  evidence
});

const parseHtmlEvidence = (html, baseUrl) => {
  const title = stripTags(findTagContents(html, 'title')[0]?.content || '');
  const description = getMetaContent(html, 'description');
  const robotsMeta = getMetaContent(html, 'robots');
  const canonical = getCanonicalHref(html);
  const h1s = findTagContents(html, 'h1').map((item) => stripTags(item.content)).filter(Boolean);
  const h2h3 = [...findTagContents(html, 'h2'), ...findTagContents(html, 'h3')]
    .map((item) => stripTags(item.content))
    .filter(Boolean);
  const anchors = findTags(html, 'a').map(getAttributes).map((attributes) => attributes.href).filter(Boolean);
  const images = findTags(html, 'img').map(getAttributes);
  const origin = new URL(baseUrl).origin;
  const internalLinks = [...new Set(anchors
    .map((href) => normalizeUrl(href, baseUrl))
    .filter((href) => href && new URL(href).origin === origin))];
  const og = {
    title: getMetaContent(html, 'og:title', 'property'),
    description: getMetaContent(html, 'og:description', 'property'),
    url: getMetaContent(html, 'og:url', 'property'),
    image: getMetaContent(html, 'og:image', 'property')
  };
  const jsonLdBlocks = findTagContents(html, 'script')
    .filter(({ attributes }) => String(attributes.type || '').toLowerCase() === 'application/ld+json')
    .map(({ content }) => content.trim())
    .filter(Boolean);
  const jsonLdErrors = [];
  const parsedJsonLd = [];
  jsonLdBlocks.forEach((block, index) => {
    try {
      parsedJsonLd.push(JSON.parse(block));
    } catch (error) {
      jsonLdErrors.push({ index, message: error.message });
    }
  });

  return {
    title,
    description,
    robotsMeta,
    canonical,
    h1s,
    h2h3,
    anchors,
    internalLinks,
    images,
    og,
    jsonLdBlocks,
    jsonLdErrors,
    parsedJsonLd
  };
};

const parseRobots = (robotsText, pageUrl) => {
  const path = new URL(pageUrl).pathname || '/';
  const groups = [];
  let current = null;

  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, '').trim();
    if (!line.includes(':')) continue;
    const [rawField, ...rest] = line.split(':');
    const field = rawField.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (field === 'user-agent') {
      current = { agents: [value.toLowerCase()], rules: [] };
      groups.push(current);
    } else if (current && ['allow', 'disallow'].includes(field)) {
      current.rules.push({ type: field, value });
    }
  }

  const matchingRules = groups
    .filter((group) => group.agents.includes('*') || group.agents.some((agent) => USER_AGENT.toLowerCase().includes(agent)))
    .flatMap((group) => group.rules)
    .filter((rule) => rule.value && path.startsWith(rule.value.replace(/\*.*$/, '')))
    .sort((a, b) => b.value.length - a.value.length);

  return matchingRules[0]?.type !== 'disallow';
};

const parseSitemapUrls = (xml) =>
  [...String(xml).matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)]
    .map((match) => decodeHtml(match[1]).trim())
    .filter(Boolean);

const buildHtmlChecks = (evidence, finalUrl) => {
  const checks = [];
  checks.push(makeCheck(
    'title',
    evidence.title && evidence.title.length <= 70 ? STATUS.PASS : STATUS.FAIL,
    evidence.title ? `Title found (${evidence.title.length} chars).` : 'No title tag found in fetched HTML.',
    { title: evidence.title, length: evidence.title.length }
  ));
  checks.push(makeCheck(
    'metaDescription',
    evidence.description && evidence.description.length <= 170 ? STATUS.PASS : STATUS.FAIL,
    evidence.description ? `Meta description found (${evidence.description.length} chars).` : 'No meta description found in fetched HTML.',
    { description: evidence.description, length: evidence.description.length }
  ));
  checks.push(makeCheck(
    'canonical',
    evidence.canonical && sameLogicalUrl(evidence.canonical, finalUrl, finalUrl) ? STATUS.PASS : STATUS.FAIL,
    evidence.canonical ? 'Canonical URL was normalized and compared with the final URL.' : 'No canonical link tag found in fetched HTML.',
    { canonical: evidence.canonical, finalUrl, normalizedCanonical: normalizeUrl(evidence.canonical, finalUrl), normalizedFinalUrl: normalizeUrl(finalUrl, finalUrl) }
  ));
  checks.push(makeCheck(
    'h1',
    evidence.h1s.length === 1 ? STATUS.PASS : STATUS.FAIL,
    evidence.h1s.length === 1 ? 'Exactly one H1 found.' : `${evidence.h1s.length} H1 tags found; expected exactly one.`,
    { count: evidence.h1s.length, h1s: evidence.h1s }
  ));
  checks.push(makeCheck(
    'headings',
    evidence.h2h3.length > 0 ? STATUS.PASS : STATUS.FAIL,
    evidence.h2h3.length > 0 ? `${evidence.h2h3.length} H2/H3 headings found.` : 'No H2/H3 heading structure found.',
    { count: evidence.h2h3.length }
  ));
  checks.push(makeCheck(
    'internalLinks',
    evidence.internalLinks.length > 0 ? STATUS.PASS : STATUS.FAIL,
    evidence.internalLinks.length > 0 ? `${evidence.internalLinks.length} normalized internal links found.` : 'No internal links found in fetched HTML.',
    { count: evidence.internalLinks.length, links: evidence.internalLinks.slice(0, 20) }
  ));
  const imagesMissingAlt = evidence.images.filter((image) => !String(image.alt || '').trim());
  checks.push(makeCheck(
    'imagesAlt',
    evidence.images.length === 0 || imagesMissingAlt.length === 0 ? STATUS.PASS : STATUS.FAIL,
    imagesMissingAlt.length === 0 ? 'All HTML images have alt text, or no images were present.' : `${imagesMissingAlt.length} image(s) missing alt text.`,
    { imageCount: evidence.images.length, missingAltCount: imagesMissingAlt.length }
  ));
  checks.push(makeCheck(
    'jsonLd',
    evidence.jsonLdBlocks.length > 0 && evidence.jsonLdErrors.length === 0 ? STATUS.PASS : STATUS.FAIL,
    evidence.jsonLdBlocks.length === 0 ? 'No JSON-LD block found.' : evidence.jsonLdErrors.length ? 'At least one JSON-LD block is invalid JSON.' : `${evidence.jsonLdBlocks.length} valid JSON-LD block(s) found.`,
    { blockCount: evidence.jsonLdBlocks.length, errors: evidence.jsonLdErrors }
  ));
  const missingOg = Object.entries(evidence.og).filter(([, value]) => !value).map(([key]) => key);
  checks.push(makeCheck(
    'openGraph',
    missingOg.length === 0 ? STATUS.PASS : STATUS.FAIL,
    missingOg.length === 0 ? 'Required Open Graph tags found.' : `Missing Open Graph fields: ${missingOg.join(', ')}.`,
    evidence.og
  ));
  const robotsContent = evidence.robotsMeta.toLowerCase();
  checks.push(makeCheck(
    'robotsMeta',
    !robotsContent.includes('noindex') ? STATUS.PASS : STATUS.FAIL,
    robotsContent.includes('noindex') ? 'Robots meta contains noindex.' : 'Robots meta does not block indexing.',
    { robotsMeta: evidence.robotsMeta || '(not present)' }
  ));
  return checks;
};

const buildUnavailableChecks = (reason) =>
  weightedCheckIds.map((id) => makeCheck(id, STATUS.UNVERIFIED, reason, {}));

const scoreChecks = (checks) => {
  const verifiedChecks = checks.filter((check) => check.status !== STATUS.UNVERIFIED);
  const verifiedMaxPoints = verifiedChecks.reduce((total, check) => total + check.maxPoints, 0);
  const earnedPoints = verifiedChecks.reduce((total, check) => total + check.points, 0);
  return {
    earnedPoints,
    verifiedMaxPoints,
    totalMaxPoints: checks.reduce((total, check) => total + check.maxPoints, 0),
    score: verifiedMaxPoints ? Math.round((earnedPoints / verifiedMaxPoints) * 100) : null,
    passCount: checks.filter((check) => check.status === STATUS.PASS).length,
    failCount: checks.filter((check) => check.status === STATUS.FAIL).length,
    unverifiedCount: checks.filter((check) => check.status === STATUS.UNVERIFIED).length,
    formula: 'score = verified PASS points / verified available points * 100; UNVERIFIED checks are excluded from denominator'
  };
};

const firstDivergentCheck = (leftChecks, rightChecks) => {
  for (const id of weightedCheckIds) {
    const left = leftChecks.find((check) => check.id === id);
    const right = rightChecks.find((check) => check.id === id);
    if (JSON.stringify(left) !== JSON.stringify(right)) return id;
  }
  return null;
};

export const runSpecialSeoAudit = async (inputUrl) => {
  const auditId = randomUUID();
  const startedAt = new Date().toISOString();
  const requestedUrl = normalizeUrl(inputUrl || SITE_URL);

  if (!requestedUrl) {
    const checks = buildUnavailableChecks('URL could not be parsed.');
    return {
      auditId,
      auditVersion: SEO_AUDIT_VERSION,
      requestedUrl: inputUrl,
      normalizedUrl: '',
      startedAt,
      completedAt: new Date().toISOString(),
      fetch: null,
      pageHash: null,
      checks,
      scoring: scoreChecks(checks),
      cached: false
    };
  }

  const fetchResult = await fetchText(requestedUrl);
  let checks;
  let pageHash = null;
  let normalizedHtml = '';
  let cacheKey = '';

  if (!fetchResult.ok || !/text\/html|application\/xhtml\+xml/i.test(fetchResult.contentType)) {
    const reason = fetchResult.ok
      ? `Fetched content type was ${fetchResult.contentType || 'unknown'}, not HTML.`
      : `Target page could not be fetched: ${fetchResult.statusText || fetchResult.error || 'request failed'}.`;
    checks = buildUnavailableChecks(reason);
  } else {
    normalizedHtml = normalizeHtmlForHash(fetchResult.text);
    pageHash = sha256(normalizedHtml);
    cacheKey = `${SEO_AUDIT_VERSION}:${normalizeUrl(fetchResult.finalUrl || requestedUrl)}:${pageHash}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return {
        ...cached,
        auditId,
        startedAt,
        completedAt: new Date().toISOString(),
        fetch: { ...fetchResult, text: undefined },
        cached: true
      };
    }

    const evidence = parseHtmlEvidence(fetchResult.text, fetchResult.finalUrl || requestedUrl);
    checks = buildHtmlChecks(evidence, fetchResult.finalUrl || requestedUrl);

    const origin = new URL(fetchResult.finalUrl || requestedUrl).origin;
    const [robotsResult, sitemapResult] = await Promise.all([
      fetchText(`${origin}/robots.txt`),
      fetchText(`${origin}/sitemap.xml`)
    ]);

    checks.push(robotsResult.ok
      ? makeCheck(
        'robotsTxt',
        parseRobots(robotsResult.text, fetchResult.finalUrl || requestedUrl) ? STATUS.PASS : STATUS.FAIL,
        parseRobots(robotsResult.text, fetchResult.finalUrl || requestedUrl) ? 'robots.txt is reachable and does not disallow this page.' : 'robots.txt disallows this page.',
        { requestedUrl: robotsResult.requestedUrl, statusCode: robotsResult.statusCode }
      )
      : makeCheck('robotsTxt', STATUS.UNVERIFIED, `robots.txt could not be fetched: ${robotsResult.statusText || robotsResult.error}.`, { requestedUrl: robotsResult.requestedUrl })
    );

    if (sitemapResult.ok) {
      const sitemapUrls = parseSitemapUrls(sitemapResult.text).map((url) => normalizeUrl(url, origin));
      const normalizedPageUrl = normalizeUrl(fetchResult.finalUrl || requestedUrl, origin);
      checks.push(makeCheck(
        'sitemap',
        sitemapUrls.includes(normalizedPageUrl) ? STATUS.PASS : STATUS.FAIL,
        sitemapUrls.includes(normalizedPageUrl) ? 'Page URL is present in sitemap.xml.' : 'Page URL was not found in sitemap.xml.',
        { requestedUrl: sitemapResult.requestedUrl, statusCode: sitemapResult.statusCode, urlCount: sitemapUrls.length, normalizedPageUrl }
      ));
    } else {
      checks.push(makeCheck('sitemap', STATUS.UNVERIFIED, `sitemap.xml could not be fetched: ${sitemapResult.statusText || sitemapResult.error}.`, { requestedUrl: sitemapResult.requestedUrl }));
    }
  }

  const result = {
    auditId,
    auditVersion: SEO_AUDIT_VERSION,
    requestedUrl: inputUrl,
    normalizedUrl: requestedUrl,
    finalUrl: fetchResult.finalUrl || '',
    startedAt,
    completedAt: new Date().toISOString(),
    fetch: { ...fetchResult, text: undefined },
    pageHash,
    checks,
    scoring: scoreChecks(checks),
    cached: false
  };

  if (cacheKey) cache.set(cacheKey, { ...result, fetch: undefined, startedAt: undefined, completedAt: undefined, auditId: undefined });
  return result;
};

export const runSpecialSeoDeterminismTest = async (url, runs = 10) => {
  const safeRuns = Math.min(10, Math.max(2, Number(runs) || 10));
  const results = [];
  for (let index = 0; index < safeRuns; index += 1) {
    results.push(await runSpecialSeoAudit(url));
  }

  const baseline = results[0];
  const runsSummary = results.map((result, index) => ({
    run: index + 1,
    auditId: result.auditId,
    pageHash: result.pageHash,
    score: result.scoring.score,
    differentChecks: index === 0
      ? []
      : weightedCheckIds.filter((id) => {
        const left = baseline.checks.find((check) => check.id === id);
        const right = result.checks.find((check) => check.id === id);
        return JSON.stringify(left) !== JSON.stringify(right);
      }),
    firstDivergentCheck: index === 0 ? null : firstDivergentCheck(baseline.checks, result.checks)
  }));

  return {
    deterministic: runsSummary.every((run) => run.pageHash === baseline.pageHash && run.score === baseline.scoring.score && run.differentChecks.length === 0),
    auditVersion: SEO_AUDIT_VERSION,
    requestedUrl: url,
    runs: runsSummary,
    baselineChecks: baseline.checks
  };
};

export const auditTestInternals = {
  normalizeUrl,
  normalizeHtmlForHash,
  parseHtmlEvidence,
  buildHtmlChecks,
  scoreChecks
};
