import Blog from '../models/Blog.js';
import { analyzeBlogSeo, getGeminiConfigStatus } from '../services/aiSeoService.js';
import { getSearchConsoleConfigStatus, getSearchConsoleMetrics } from '../services/searchConsoleService.js';

const getBlog = async (id) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    const error = new Error('Blog not found');
    error.code = 'BLOG_NOT_FOUND';
    throw error;
  }
  return blog;
};

const getErrorStatus = (error) => {
  if (error.code === 'BLOG_NOT_FOUND') return 404;
  if (['SEARCH_CONSOLE_NOT_CONFIGURED', 'GOOGLE_CREDENTIALS_INVALID', 'BLOG_URL_MISSING', 'GEMINI_NOT_CONFIGURED'].includes(error.code)) return 503;
  if ([401, 403].includes(error.code)) return error.code;
  return 500;
};

export const getSeoIntegrationStatus = (req, res) => {
  res.json({
    success: true,
    data: {
      searchConsole: getSearchConsoleConfigStatus(),
      gemini: getGeminiConfigStatus()
    }
  });
};

export const getBlogSearchPerformance = async (req, res) => {
  try {
    const blog = await getBlog(req.params.id);
    const metrics = await getSearchConsoleMetrics(blog, req.query.days);
    res.json({ success: true, data: metrics });
  } catch (error) {
    console.error('Search Console error:', error.message);
    res.status(getErrorStatus(error)).json({ success: false, message: error.message, code: error.code || 'SEARCH_CONSOLE_ERROR' });
  }
};

export const getBlogGeminiSeoReview = async (req, res) => {
  try {
    const blog = await getBlog(req.params.id);
    const forceRefresh = req.query.force === 'true' || req.body?.force === true;

    if (!forceRefresh && blog.aiSeoAudit && Number.isFinite(blog.aiSeoScore)) {
      return res.json({
        success: true,
        data: {
          model: blog.aiSeoModel,
          review: blog.aiSeoAudit,
          analyzedAt: blog.aiSeoAnalyzedAt,
          searchMetricsIncluded: Boolean(blog.aiSeoAudit.analysisBasis?.searchConsoleIncluded),
          cached: true
        }
      });
    }

    let searchMetrics = null;
    try {
      searchMetrics = await getSearchConsoleMetrics(blog, 28);
    } catch (error) {
      if (!['SEARCH_CONSOLE_NOT_CONFIGURED', 'GOOGLE_CREDENTIALS_INVALID', 'BLOG_URL_MISSING'].includes(error.code)) {
        console.warn('Gemini review continuing without Search Console data:', error.message);
      }
    }
    const result = await analyzeBlogSeo(blog, searchMetrics);
    blog.aiSeoScore = result.review.overallScore;
    blog.aiSeoAudit = result.review;
    blog.aiSeoModel = result.model;
    blog.aiSeoAnalyzedAt = new Date();
    await blog.save();

    res.json({
      success: true,
      data: {
        ...result,
        analyzedAt: blog.aiSeoAnalyzedAt,
        searchMetricsIncluded: Boolean(searchMetrics),
        cached: false
      }
    });
  } catch (error) {
    console.error('Gemini SEO review error:', error.message);
    res.status(getErrorStatus(error)).json({ success: false, message: error.message, code: error.code || 'GEMINI_SEO_ERROR' });
  }
};
