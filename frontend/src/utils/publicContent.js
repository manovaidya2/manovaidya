const publicTestContentPattern = /(?:\btesting\b|\btest(?:ing)?\s+(?:blog|data|case|case\s*stud(?:y|ies))\b|\bdummy\b|\bdemo\b|lorem\s+ipsum)/i;

export const isPublicBlog = (blog) =>
  Boolean(blog?.slug) && blog.showOnFrontend !== false && (!blog.status || blog.status === "published") &&
  !publicTestContentPattern.test([blog.title, blog.slug, blog.shortDescription, blog.metaTitle, blog.metaDescription, blog.content].filter(Boolean).join(" "));

export const isPublicCaseStudy = (study) =>
  Boolean(study?.slug) && study.showOnFrontend !== false && (!study.status || study.status === "published") &&
  !publicTestContentPattern.test([study.title, study.slug, study.summary, study.metaTitle, study.metaDescription, study.content].filter(Boolean).join(" "));

export const isIndexable = (item) => !/\bnoindex\b/i.test(item.robots || "");
