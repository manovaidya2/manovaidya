import Blog from '../models/Blog.js';
import CaseStudy from '../models/CaseStudy.js';
import { isPublicBlog, isPublicCaseStudy } from '../utils/publicContent.js';
import { getPublicPageUrl } from '../utils/publicPageUrl.js';

// Blogs and case studies published after the last static build have no prerendered
// HTML yet. Nginx sends those URLs here; this returns the head tags and page data
// the app shell needs, or null so the request ends in the normal 404 page.
// Head tags mirror frontend/src/components/Seo.jsx.

const DEFAULT_DESCRIPTION =
  'Manovaidya is a child development and mental wellness clinic in Noida offering structured support for Autism, ADHD, speech delay, anxiety, depression, OCD and related concerns.';
const ASSET_ORIGIN = (process.env.PUBLIC_ASSET_ORIGIN || 'https://api.manovaidya.org').replace(/\/+$/, '');
const publicFilter = { showOnFrontend: { $ne: false } };

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const imageUrl = (value) => {
  const site = new URL(getPublicPageUrl('/')).origin;
  if (!value || value.startsWith('data:')) return `${site}/favicon%20(4).png`;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith('/assets/')) return `${site}${value}`;
  return `${ASSET_ORIGIN}${value.startsWith('/') ? '' : '/'}${value}`;
};

const renderHead = ({ title, description, keywords, canonical, image, noindex }) => {
  const mark = 'data-prerender-seo="true"';
  const meta = (attr, key, value) => `<meta ${mark} ${attr}="${key}" content="${escapeHtml(value)}" />`;
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  return [
    `<title ${mark}>${escapeHtml(title)}</title>`,
    meta('name', 'description', resolvedDescription),
    keywords ? meta('name', 'keywords', keywords) : '',
    meta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow'),
    meta('property', 'og:type', 'article'),
    meta('property', 'og:site_name', 'Manovaidya'),
    meta('property', 'og:title', title),
    meta('property', 'og:description', resolvedDescription),
    meta('property', 'og:url', canonical),
    meta('property', 'og:image', image),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', resolvedDescription),
    meta('name', 'twitter:image', image),
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
  ].filter(Boolean).join('\n    ');
};

const isNoindex = (item) => /\bnoindex\b/i.test(item.robots || '');

export async function findFreshDetail(type, slug) {
  if (type === 'blog') {
    const blog = await Blog.findOne({ slug, status: 'published', ...publicFilter }).lean();
    if (!isPublicBlog(blog)) return null;
    // Sidebar links only; article bodies are not needed.
    const recent = await Blog.find({ status: 'published', ...publicFilter, slug: { $ne: blog.slug } })
      .select('-content')
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();
    return {
      head: renderHead({
        title: blog.metaTitle || blog.title || 'Blog Details - Manovaidya',
        description: blog.metaDescription || blog.shortDescription,
        keywords: blog.metaKeywords || blog.focusKeyword,
        canonical: getPublicPageUrl(`/blog/${blog.slug}/`),
        image: imageUrl(blog.image || blog.ogImage),
        noindex: isNoindex(blog),
      }),
      data: {
        blogs: recent.filter(isPublicBlog).slice(0, 4),
        blogsBySlug: { [blog.slug]: blog },
      },
    };
  }

  if (type === 'case-studies') {
    const study = await CaseStudy.findOne({ slug, ...publicFilter }).lean();
    if (!isPublicCaseStudy(study)) return null;
    return {
      head: renderHead({
        title: study.metaTitle || `${study.title} | Case Study | Manovaidya`,
        description: study.metaDescription || study.summary,
        keywords: study.metaKeywords || study.focusKeyword,
        canonical: getPublicPageUrl(`/case-studies/${study.slug}/`),
        image: imageUrl(study.image || study.ogImage),
        noindex: isNoindex(study),
      }),
      data: { caseStudiesBySlug: { [study.slug]: study } },
    };
  }

  return null;
}
