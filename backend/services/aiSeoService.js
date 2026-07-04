import { GoogleGenAI } from '@google/genai';

const seoReviewSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    overallScore: { type: 'integer', minimum: 0, maximum: 100 },
    scoreLabel: { type: 'string', enum: ['excellent', 'good', 'needs-work', 'weak'] },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
    scoreRationale: { type: 'string' },
    summary: { type: 'string' },
    suggestedMetaTitle: { type: 'string' },
    suggestedMetaDescription: { type: 'string' },
    suggestedFocusKeyword: { type: 'string' },
    suggestedMetaKeywords: { type: 'array', items: { type: 'string' } },
    suggestedSlug: { type: 'string' },
    categoryScores: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          category: { type: 'string' },
          score: { type: 'integer', minimum: 0 },
          maxScore: { type: 'integer', minimum: 1 },
          verdict: { type: 'string' },
          evidence: { type: 'array', items: { type: 'string' } },
          actions: { type: 'array', items: { type: 'string' } }
        },
        required: ['category', 'score', 'maxScore', 'verdict', 'evidence', 'actions']
      }
    },
    analysisBasis: {
      type: 'object',
      additionalProperties: false,
      properties: {
        searchConsoleIncluded: { type: 'boolean' },
        liveGoogleRankingAvailable: { type: 'boolean' },
        limitations: { type: 'array', items: { type: 'string' } }
      },
      required: ['searchConsoleIncluded', 'liveGoogleRankingAvailable', 'limitations']
    },
    searchIntent: {
      type: 'object',
      additionalProperties: false,
      properties: {
        primaryIntent: { type: 'string' },
        targetAudience: { type: 'string' },
        matchScore: { type: 'integer', minimum: 0, maximum: 100 },
        likelySearchQueries: { type: 'array', items: { type: 'string' } },
        missingSubtopics: { type: 'array', items: { type: 'string' } },
        recommendedAngle: { type: 'string' }
      },
      required: ['primaryIntent', 'targetAudience', 'matchScore', 'likelySearchQueries', 'missingSubtopics', 'recommendedAngle']
    },
    keywordStrategy: {
      type: 'object',
      additionalProperties: false,
      properties: {
        primaryKeyword: { type: 'string' },
        secondaryKeywords: { type: 'array', items: { type: 'string' } },
        semanticTerms: { type: 'array', items: { type: 'string' } },
        placementAssessment: { type: 'string' },
        stuffingRisk: { type: 'string', enum: ['low', 'medium', 'high'] }
      },
      required: ['primaryKeyword', 'secondaryKeywords', 'semanticTerms', 'placementAssessment', 'stuffingRisk']
    },
    metadataAudit: {
      type: 'object',
      additionalProperties: false,
      properties: {
        titleScore: { type: 'integer', minimum: 0, maximum: 100 },
        descriptionScore: { type: 'integer', minimum: 0, maximum: 100 },
        titleIssues: { type: 'array', items: { type: 'string' } },
        descriptionIssues: { type: 'array', items: { type: 'string' } },
        serpPreviewTitle: { type: 'string' },
        serpPreviewDescription: { type: 'string' }
      },
      required: ['titleScore', 'descriptionScore', 'titleIssues', 'descriptionIssues', 'serpPreviewTitle', 'serpPreviewDescription']
    },
    rankingPotential: {
      type: 'object',
      additionalProperties: false,
      properties: {
        score: { type: 'integer', minimum: 0, maximum: 100 },
        level: { type: 'string', enum: ['high', 'medium', 'low'] },
        strengths: { type: 'array', items: { type: 'string' } },
        blockers: { type: 'array', items: { type: 'string' } },
        quickWins: { type: 'array', items: { type: 'string' } }
      },
      required: ['score', 'level', 'strengths', 'blockers', 'quickWins']
    },
    priorityActions: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          priority: { type: 'string', enum: ['high', 'medium', 'low'] },
          title: { type: 'string' },
          reason: { type: 'string' },
          issueLocation: { type: 'string' },
          currentIssue: { type: 'string' },
          recommendedReplacement: { type: 'string' },
          howToUse: { type: 'string' },
          exactRecommendation: { type: 'string' }
        },
        required: ['priority', 'title', 'reason', 'issueLocation', 'currentIssue', 'recommendedReplacement', 'howToUse', 'exactRecommendation']
      }
    },
    auditIssues: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['Critical', 'High', 'Medium', 'Low'] },
          location: { type: 'string' },
          problematicText: { type: 'string' },
          problem: { type: 'string' },
          whyItMatters: { type: 'string' },
          category: { type: 'string' },
          seoImpact: { type: 'string' },
          userImpact: { type: 'string' },
          suggestedFix: { type: 'string' },
          whyReplacementIsBetter: { type: 'string' }
        },
        required: ['severity', 'location', 'problematicText', 'problem', 'whyItMatters', 'category', 'seoImpact', 'userImpact', 'suggestedFix', 'whyReplacementIsBetter']
      }
    },
    sentenceCorrections: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          location: { type: 'string' },
          original: { type: 'string' },
          improved: { type: 'string' },
          reason: { type: 'string' }
        },
        required: ['location', 'original', 'improved', 'reason']
      }
    },
    missingContentSuggestions: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          section: { type: 'string' },
          whyNeeded: { type: 'string' },
          readyToPasteText: { type: 'string' }
        },
        required: ['section', 'whyNeeded', 'readyToPasteText']
      }
    },
    seoRecommendations: {
      type: 'object',
      additionalProperties: false,
      properties: {
        metaTitle: { type: 'string' },
        metaDescription: { type: 'string' },
        urlSlug: { type: 'string' },
        focusKeyword: { type: 'string' },
        secondaryKeywords: { type: 'array', items: { type: 'string' } },
        imageAltText: { type: 'array', items: { type: 'string' } },
        ogTitle: { type: 'string' },
        ogDescription: { type: 'string' },
        twitterTitle: { type: 'string' },
        twitterDescription: { type: 'string' }
      },
      required: ['metaTitle', 'metaDescription', 'urlSlug', 'focusKeyword', 'secondaryKeywords', 'imageAltText', 'ogTitle', 'ogDescription', 'twitterTitle', 'twitterDescription']
    },
    schemaSuggestions: { type: 'array', items: { type: 'string' } },
    featuredSnippetSuggestions: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          targetQuery: { type: 'string' },
          readyToPasteAnswer: { type: 'string' }
        },
        required: ['targetQuery', 'readyToPasteAnswer']
      }
    },
    seoFaqs: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          question: { type: 'string' },
          answer: { type: 'string' }
        },
        required: ['question', 'answer']
      }
    },
    finalChecklist: { type: 'array', items: { type: 'string' } },
    estimatedImpact: {
      type: 'object',
      additionalProperties: false,
      properties: {
        seo: { type: 'string' },
        userTrust: { type: 'string' },
        readability: { type: 'string' },
        engagement: { type: 'string' },
        conversion: { type: 'string' },
        medicalCompliance: { type: 'string' },
        overallQuality: { type: 'string' }
      },
      required: ['seo', 'userTrust', 'readability', 'engagement', 'conversion', 'medicalCompliance', 'overallQuality']
    },
    contentGaps: { type: 'array', items: { type: 'string' } },
    suggestedHeadings: { type: 'array', items: { type: 'string' } },
    internalLinkIdeas: { type: 'array', items: { type: 'string' } },
    faqIdeas: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          question: { type: 'string' },
          answerDirection: { type: 'string' }
        },
        required: ['question', 'answerDirection']
      }
    },
    eeatRecommendations: { type: 'array', items: { type: 'string' } },
    riskFlags: { type: 'array', items: { type: 'string' } }
  },
  required: [
    'overallScore',
    'scoreLabel',
    'confidence',
    'scoreRationale',
    'summary',
    'suggestedMetaTitle',
    'suggestedMetaDescription',
    'suggestedFocusKeyword',
    'suggestedMetaKeywords',
    'suggestedSlug',
    'categoryScores',
    'analysisBasis',
    'searchIntent',
    'keywordStrategy',
    'metadataAudit',
    'rankingPotential',
    'priorityActions',
    'auditIssues',
    'sentenceCorrections',
    'missingContentSuggestions',
    'seoRecommendations',
    'schemaSuggestions',
    'featuredSnippetSuggestions',
    'seoFaqs',
    'finalChecklist',
    'estimatedImpact',
    'contentGaps',
    'suggestedHeadings',
    'internalLinkIdeas',
    'faqIdeas',
    'eeatRecommendations',
    'riskFlags'
  ]
};

const stripHtml = (html = '') => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const countMatches = (value, pattern) => (String(value || '').match(pattern) || []).length;

const getContentSignals = (blog) => {
  const html = blog.content || '';
  const text = stripHtml(html);
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const keyword = blog.focusKeyword?.trim().toLowerCase() || '';
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const keywordOccurrences = escapedKeyword
    ? countMatches(text.toLowerCase(), new RegExp(`\\b${escapedKeyword.replace(/\s+/g, '\\s+')}\\b`, 'g'))
    : 0;
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  const linkTags = html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) || [];
  const canonicalOrigin = (() => {
    try { return new URL(blog.canonicalUrl).origin; } catch { return ''; }
  })();
  const hrefs = linkTags.map((tag) => tag.match(/href=["']([^"']+)["']/i)?.[1] || '');
  let schemaValid = false;
  if (blog.schemaMarkup?.trim()) {
    try { JSON.parse(blog.schemaMarkup); schemaValid = true; } catch { schemaValid = false; }
  }

  return {
    wordCount: words.length,
    titleLength: (blog.metaTitle || blog.title || '').trim().length,
    metaDescriptionLength: (blog.metaDescription || '').trim().length,
    shortDescriptionLength: (blog.shortDescription || '').trim().length,
    h2Count: countMatches(html, /<h2\b/gi),
    h3Count: countMatches(html, /<h3\b/gi),
    paragraphCount: countMatches(html, /<p\b/gi),
    listCount: countMatches(html, /<(ul|ol)\b/gi),
    imageCount: imageTags.length + (blog.image ? 1 : 0),
    imagesMissingAlt: imageTags.filter((tag) => !/\balt=["'][^"']+["']/i.test(tag)).length + (blog.image && !blog.imageAlt?.trim() ? 1 : 0),
    internalLinkCount: hrefs.filter((href) => href.startsWith('/') || (canonicalOrigin && href.startsWith(canonicalOrigin))).length,
    externalLinkCount: hrefs.filter((href) => /^https?:\/\//i.test(href) && (!canonicalOrigin || !href.startsWith(canonicalOrigin))).length,
    faqCount: blog.faq?.length || 0,
    keywordOccurrences,
    keywordDensityPercent: words.length ? Number(((keywordOccurrences / words.length) * 100).toFixed(2)) : 0,
    keywordInTitle: Boolean(keyword && (blog.metaTitle || blog.title || '').toLowerCase().includes(keyword)),
    keywordInSlug: Boolean(keyword && (blog.slug || '').toLowerCase().includes(keyword.replace(/\s+/g, '-'))),
    keywordInIntroduction: Boolean(keyword && `${blog.shortDescription || ''} ${text.slice(0, 500)}`.toLowerCase().includes(keyword)),
    canonicalValid: /^https?:\/\//i.test(blog.canonicalUrl || ''),
    schemaPresent: Boolean(blog.schemaMarkup?.trim()),
    schemaValid,
    openGraphComplete: Boolean(blog.ogTitle && blog.ogDescription && (blog.ogImage || blog.image)),
    twitterCardComplete: Boolean(blog.twitterTitle && blog.twitterDescription && (blog.twitterImage || blog.ogImage || blog.image)),
    indexable: blog.robots === 'index,follow'
  };
};

export const getGeminiConfigStatus = () => ({
  configured: Boolean(process.env.GEMINI_API_KEY),
  model: process.env.GEMINI_SEO_MODEL || 'gemini-3-flash-preview',
  fallbackModel: process.env.GEMINI_SEO_FALLBACK_MODEL || 'gemini-3.1-flash-lite'
});

const isTemporaryModelError = (error) => {
  const details = `${error?.code || ''} ${error?.status || ''} ${error?.message || ''}`;
  return error instanceof SyntaxError || /429|503|RESOURCE_EXHAUSTED|UNAVAILABLE|high demand|no SEO review/i.test(details);
};

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const truncateAtWord = (value, maxLength) => {
  const text = String(value || '').trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength + 1).replace(/\s+\S*$/, '').trim();
};

const normalizeReview = (review, searchMetrics) => {
  const categoryScores = (review.categoryScores || []).map((category) => ({
    ...category,
    score: Math.max(0, Math.min(Number(category.maxScore) || 0, Number(category.score) || 0))
  }));
  const overallScore = Math.max(0, Math.min(100, categoryScores.reduce((total, category) => total + category.score, 0)));
  const scoreLabel = overallScore >= 85 ? 'excellent' : overallScore >= 70 ? 'good' : overallScore >= 50 ? 'needs-work' : 'weak';

  return {
    ...review,
    overallScore,
    scoreLabel,
    suggestedMetaTitle: truncateAtWord(review.suggestedMetaTitle, 60),
    suggestedMetaDescription: truncateAtWord(review.suggestedMetaDescription, 160),
    categoryScores,
    analysisBasis: {
      ...review.analysisBasis,
      searchConsoleIncluded: Boolean(searchMetrics),
      liveGoogleRankingAvailable: Boolean(searchMetrics?.hasData && searchMetrics?.position)
    }
  };
};

export const analyzeBlogSeo = async (blog, searchMetrics = null) => {
  if (!process.env.GEMINI_API_KEY) {
    const error = new Error('GEMINI_API_KEY is not configured.');
    error.code = 'GEMINI_NOT_CONFIGURED';
    throw error;
  }

  const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const primaryModel = process.env.GEMINI_SEO_MODEL || 'gemini-3-flash-preview';
  const fallbackModel = process.env.GEMINI_SEO_FALLBACK_MODEL || 'gemini-3.1-flash-lite';
  const models = [...new Set([primaryModel, fallbackModel].filter(Boolean))];
  const contentText = stripHtml(blog.content).slice(0, 30000);
  const contentSignals = getContentSignals(blog);
  const input = JSON.stringify({
    title: blog.title,
    slug: blog.slug,
    category: blog.category,
    shortDescription: blog.shortDescription,
    content: contentText,
    focusKeyword: blog.focusKeyword,
    metaTitle: blog.metaTitle,
    metaDescription: blog.metaDescription,
    metaKeywords: blog.metaKeywords,
    canonicalUrl: blog.canonicalUrl,
    imageAlt: blog.imageAlt,
    ogTitle: blog.ogTitle,
    ogDescription: blog.ogDescription,
    twitterTitle: blog.twitterTitle,
    twitterDescription: blog.twitterDescription,
    robots: blog.robots,
    schemaMarkup: blog.schemaMarkup,
    faq: blog.faq,
    contentSignals,
    searchConsole: searchMetrics
  });

  let lastError;

  for (const [modelIndex, model] of models.entries()) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const response = await client.models.generateContent({
          model,
          contents: input,
          config: {
            systemInstruction: [
              'You are a senior SEO content strategist for a mental-health and wellness website.',
              'You are also a medical content reviewer, E-E-A-T specialist, technical editor, UX writer, accessibility reviewer, and senior copy editor.',
              'Perform a complete line-by-line audit using only the supplied blog, calculated contentSignals, and optional Search Console data.',
              'Do not summarize or skip important headings/sentences. Review headings, intro, body, FAQs, metadata, schema, image fields, and CTA opportunities.',
              'Never invent Google rankings, search volume, competitors, traffic, medical evidence, credentials, or links.',
              'The overallScore must equal the sum of exactly six category scores: Search intent 20, Content quality 20, On-page SEO 20, Metadata and SERP 15, E-E-A-T and safety 15, Technical and social 10.',
              'Use those exact category names and max scores. Penalize missing or weak evidence; do not award points merely because a field exists.',
              'Give precise diagnoses and directly usable edits for search intent coverage, metadata, headings, readability, E-E-A-T, internal linking, schema, image alt text, and medically responsible wording.',
              'Every priority action must explain why it helps SEO or ranking readiness, name the exact field or content section to edit, and include a concrete replacement or example when metadata, heading, slug, FAQ, or intro copy is weak.',
              'For each priority action, fill issueLocation with the exact field or section name, currentIssue with what is wrong now, recommendedReplacement with ready-to-paste replacement text or a concrete example, and howToUse with where/how to apply it in the admin editor.',
              'If the supplied content does not include the exact old sentence, say which field is missing or weak instead of inventing a quote. For recommendedReplacement, provide usable text, heading, FAQ, link suggestion, schema fix, alt text, or snippet copy.',
              'For auditIssues, include every meaningful issue you find across grammar, spelling, readability, SEO, E-E-A-T, medical compliance, AI-like writing, structure, UX writing, accessibility, duplicate content, tone, factual consistency, formatting, conversion, schema, internal links, images, featured snippets, and FAQ opportunities.',
              'For each auditIssues item, provide exact problematicText when present, why it is wrong, severity, category, SEO impact, user impact, better suggestedFix, and why the replacement is better.',
              'For sentenceCorrections, include exact original sentences/headings that should be rewritten and improved ready-to-paste versions. Include as many as are materially useful, prioritizing high impact lines if the content is long.',
              'For missingContentSuggestions, provide ready-to-paste sections such as intro, conclusion, disclaimer, author/reviewer note, source note, CTA, FAQ block, comparison table intro, or child/parent guidance where missing.',
              'For seoRecommendations, provide final ready-to-use meta title, meta description, URL slug, focus keyword, secondary keywords, image alt text suggestions, OG title/description, and Twitter title/description.',
              'For featuredSnippetSuggestions, provide concise answer paragraphs that could target position-zero style snippets without claiming guaranteed ranking.',
              'For seoFaqs, generate at least 10 SEO-friendly FAQs with concise medically safe answers.',
              'For finalChecklist, return actionable checkbox-style tasks such as Fix grammar, Replace awkward sentence, Add internal link, Add FAQ, Add schema, Improve CTA, Improve heading, Add image alt, Add conclusion, Reduce repetition, Improve E-E-A-T, Improve compliance, Improve readability, Optimize keyword usage, Optimize featured snippet.',
              'Separate true ranking evidence from SEO readiness. If Search Console data is absent, say that ranking cannot be verified yet and focus on actions that improve crawlability, relevance, snippet quality, topical coverage, trust, and internal linking.',
              'For mental-health content, strongly evaluate E-E-A-T: author/doctor attribution, review date, safe wording, no guaranteed outcomes, clear disclaimers, and source/reference needs.',
              'Prioritize fixes by likely SEO impact: title/meta and intent first, then content gaps/headings, E-E-A-T safety, internal links, schema/social/technical cleanup.',
              'Likely search queries and semantic terms are editorial hypotheses, not verified search-volume data. State limitations accordingly.',
              'Keep the suggested meta title at 60 characters or fewer and the meta description at 160 characters or fewer.',
              'Keep the suggested slug short, lowercase, hyphenated, and aligned with the primary keyword.',
              'Flag unsupported medical claims, diagnosis promises, guaranteed outcomes, keyword stuffing, and missing source/author signals.',
              'If Search Console data is absent, set liveGoogleRankingAvailable false and score from content only rather than inferring live performance.',
              'rankingPotential is an editorial readiness estimate, never a promise of ranking.',
              'Keep the response comprehensive but usable: maximum 8 priority actions, maximum 30 auditIssues, maximum 30 sentenceCorrections, exactly 10-14 seoFaqs, and maximum 8 items in each supporting recommendation list.'
            ].join(' '),
            responseMimeType: 'application/json',
            responseJsonSchema: seoReviewSchema,
            temperature: 0,
            topP: 0.1,
            maxOutputTokens: 16384,
            thinkingConfig: { thinkingLevel: 'LOW' }
          }
        });

        if (!response.text) {
          const error = new Error('Gemini returned no SEO review.');
          error.code = 'GEMINI_EMPTY_RESPONSE';
          throw error;
        }

        return {
          model,
          review: normalizeReview(JSON.parse(response.text), searchMetrics)
        };
      } catch (error) {
        lastError = error;
        if (!isTemporaryModelError(error)) throw error;

        const canRetryModel = attempt === 0;
        if (canRetryModel) {
          await wait(1200);
          continue;
        }

        const hasFallback = modelIndex < models.length - 1;
        if (!hasFallback) throw error;
      }
    }
  }

  throw lastError;
};
