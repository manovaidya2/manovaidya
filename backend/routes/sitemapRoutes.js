import express from 'express';
import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';

const router = express.Router();
const SITE_URL = (process.env.PUBLIC_SITE_URL || 'https://manovaidya.org').replace(/\/$/, '');

const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
};

const normalizeUrl = (fallbackPath, canonicalUrl) => {
  if (/^https?:\/\//i.test(canonicalUrl || '')) return canonicalUrl;
  return `${SITE_URL}${fallbackPath.startsWith('/') ? fallbackPath : `/${fallbackPath}`}`;
};

const buildUrl = ({ loc, lastmod, priority = '0.8', changefreq = 'weekly' }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${formatDate(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const buildUrlset = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

const sendXml = (res, xml) => {
  res.header('Content-Type', 'application/xml; charset=utf-8');
  res.send(xml);
};

const getPublishedBlogs = () =>
  Blog.find({ status: 'published', showOnFrontend: { $ne: false }, robots: { $ne: 'noindex,nofollow' } })
    .select('slug canonicalUrl updatedAt createdAt robots')
    .sort({ updatedAt: -1 })
    .lean();

const getPublishedCaseStudies = () =>
  CaseStudy.find({ status: 'published', robots: { $ne: 'noindex,nofollow' } })
    .select('slug canonicalUrl updatedAt createdAt robots')
    .sort({ updatedAt: -1 })
    .lean();

const mapBlogUrls = (blogs) =>
  blogs
    .filter((blog) => blog.slug && !String(blog.robots || '').startsWith('noindex'))
    .map((blog) => buildUrl({
      loc: normalizeUrl(`/blog/${blog.slug}`, blog.canonicalUrl),
      lastmod: blog.updatedAt || blog.createdAt,
      priority: '0.7',
    }));

const mapCaseStudyUrls = (caseStudies) =>
  caseStudies
    .filter((study) => study.slug && !String(study.robots || '').startsWith('noindex'))
    .map((study) => buildUrl({
      loc: normalizeUrl(`/case-studies/${study.slug}`, study.canonicalUrl),
      lastmod: study.updatedAt || study.createdAt,
      priority: '0.7',
    }));

router.get('/sitemap-blog.xml', async (req, res) => {
  try {
    const blogs = await getPublishedBlogs();
    sendXml(res, buildUrlset(mapBlogUrls(blogs)));
  } catch (error) {
    console.error('Blog sitemap error:', error);
    res.status(500).type('text/plain').send('Unable to generate blog sitemap');
  }
});

router.get('/sitemap-case-studies.xml', async (req, res) => {
  try {
    const caseStudies = await getPublishedCaseStudies();
    sendXml(res, buildUrlset(mapCaseStudyUrls(caseStudies)));
  } catch (error) {
    console.error('Case study sitemap error:', error);
    res.status(500).type('text/plain').send('Unable to generate case study sitemap');
  }
});

router.get('/sitemap.xml', async (req, res) => {
  try {
    const [blogs, caseStudies] = await Promise.all([
      getPublishedBlogs(),
      getPublishedCaseStudies(),
    ]);

    sendXml(res, buildUrlset([
      ...mapBlogUrls(blogs),
      ...mapCaseStudyUrls(caseStudies),
    ]));
  } catch (error) {
    console.error('Dynamic sitemap error:', error);
    res.status(500).type('text/plain').send('Unable to generate sitemap');
  }
});

export default router;
