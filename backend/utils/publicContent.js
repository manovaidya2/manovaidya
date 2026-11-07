// Keep in sync with frontend/src/utils/publicContent.js so sitemaps only list prerendered pages.
// Only identity fields are checked: article bodies legitimately cite things like
// "Clinical Testing and Diagnosis", which must not hide a real published article.
const publicTestContentPattern = /(?:\btest(?:ing)?[\s_-]+(?:blog|data|case|case[\s_-]*stud(?:y|ies))\b|\bdummy\b|\bdemo\b|lorem\s+ipsum)/i;
const placeholderBodyPattern = /lorem\s+ipsum/i;

const isTestContent = (fields, content) =>
  publicTestContentPattern.test(fields.filter(Boolean).join(' ')) || placeholderBodyPattern.test(content || '');

export const isPublicBlog = (blog) =>
  Boolean(blog?.slug) && blog.showOnFrontend !== false && (!blog.status || blog.status === 'published') &&
  !isTestContent([blog.title, blog.slug, blog.shortDescription, blog.metaTitle, blog.metaDescription], blog.content);

export const isPublicCaseStudy = (study) =>
  Boolean(study?.slug) && study.showOnFrontend !== false && (!study.status || study.status === 'published') &&
  !isTestContent([study.title, study.slug, study.summary, study.metaTitle, study.metaDescription], study.content);
