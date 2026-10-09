import { getCanonicalUrl } from "./canonical.js";

export const getArticleSchema = (item, prefix, image) => {
  const url = getCanonicalUrl(`/${prefix}/${item.slug}/`);
  const date = (value) => value && !Number.isNaN(new Date(value).getTime()) ? new Date(value).toISOString() : undefined;
  const article = {
    "@context": "https://schema.org",
    "@type": prefix === "blog" ? "BlogPosting" : "Article",
    headline: item.title,
    description: item.metaDescription || item.shortDescription || item.summary,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: image || undefined,
    datePublished: date(item.date || item.createdAt),
    dateModified: date(item.updatedAt),
    author: item.authorName ? { "@type": "Person", name: item.authorName } : { "@type": "Organization", name: "Manovaidya" },
    publisher: { "@type": "Organization", name: "Manovaidya", url: "https://manovaidya.org/" },
  };
  if (!item.schemaMarkup) return article;
  let custom;
  try { custom = JSON.parse(item.schemaMarkup); }
  catch { return article; }
  const nodes = Array.isArray(custom) ? custom : Array.isArray(custom?.['@graph']) ? custom['@graph'] : [custom];
  let found = false;
  const graph = nodes.filter((node) => node && typeof node === 'object').map((node) => {
    const types = [].concat(node['@type'] || []);
    if (!types.some((type) => ['Article', 'BlogPosting', 'NewsArticle', 'MedicalScholarlyArticle'].includes(type))) return node;
    found = true;
    return { ...article, ...node, url, mainEntityOfPage: article.mainEntityOfPage, image: article.image };
  });
  if (!found) graph.push(article);
  return { '@context': 'https://schema.org', '@graph': graph };
};
