const publicTestContentPattern = /(?:\btesting\s+blog\b|\btest\s+blog\b|\bdummy\b|\bdemo\b|lorem\s+ipsum)/i;

export const isPublicBlog = (blog) =>
  Boolean(blog?.slug) && blog.showOnFrontend !== false && (!blog.status || blog.status === 'published') &&
  !publicTestContentPattern.test([blog.title, blog.slug, blog.shortDescription, blog.metaTitle, blog.metaDescription, blog.content].filter(Boolean).join(' '));
