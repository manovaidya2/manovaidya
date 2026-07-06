import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Edit2,
  ExternalLink,
  FileSearch,
  FileText,
  Gauge,
  Image as ImageIcon,
  Info,
  Layers,
  Newspaper,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  User,
  X,
  Zap
} from 'lucide-react';
import BlogForm from '../components/blogs/BlogForm';
import api, { getAssetUrl } from '../api/axiosInstance';
import { ADMIN_SETTINGS_EVENT, getAdminQuickOptions } from '../utils/adminSettings';

const getScoreTone = (score) => {
  if (score >= 85) return { label: 'Excellent', text: 'text-emerald-700', background: 'bg-emerald-50', border: 'border-emerald-200', color: '#10b981' };
  if (score >= 70) return { label: 'Good', text: 'text-blue-700', background: 'bg-blue-50', border: 'border-blue-200', color: '#3b82f6' };
  if (score >= 50) return { label: 'Needs work', text: 'text-amber-700', background: 'bg-amber-50', border: 'border-amber-200', color: '#f59e0b' };
  return { label: 'Weak', text: 'text-red-700', background: 'bg-red-50', border: 'border-red-200', color: '#ef4444' };
};

const calculateSeoScore = (blog) => {
  const parser = new DOMParser();
  const documentNode = parser.parseFromString(blog.content || '', 'text/html');
  const textContent = documentNode.body.textContent?.replace(/\s+/g, ' ').trim() || '';
  const words = textContent ? textContent.split(' ').filter(Boolean) : [];
  const keyword = blog.focusKeyword?.trim().toLowerCase() || '';
  const title = (blog.metaTitle || blog.title || '').trim();
  const description = (blog.metaDescription || '').trim();
  const links = [...documentNode.querySelectorAll('a[href]')];
  const contentImages = [...documentNode.querySelectorAll('img')];
  const canonicalOrigin = (() => {
    try { return new URL(blog.canonicalUrl).origin; } catch { return ''; }
  })();
  const internalLinks = links.filter((link) => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('/') || (canonicalOrigin && href.startsWith(canonicalOrigin));
  });
  const externalLinks = links.filter((link) => /^https?:\/\//i.test(link.getAttribute('href') || '') && (!canonicalOrigin || !link.getAttribute('href').startsWith(canonicalOrigin)));
  const allImagesHaveAlt = (!blog.image || Boolean(blog.imageAlt?.trim())) && contentImages.every((image) => Boolean(image.getAttribute('alt')?.trim()));
  let schemaIsValid = false;
  if (blog.schemaMarkup?.trim()) {
    try { JSON.parse(blog.schemaMarkup); schemaIsValid = true; } catch { schemaIsValid = false; }
  }

  const checks = [];
  const addCheck = (label, points, maxPoints, recommendation) => {
    checks.push({ label, points, maxPoints, recommendation, status: points === maxPoints ? 'pass' : points > 0 ? 'partial' : 'fail' });
  };

  addCheck('Meta title added', title ? 8 : 0, 8, 'Add a unique meta title.');
  addCheck('Meta title length', title.length >= 45 && title.length <= 60 ? 4 : title.length >= 30 && title.length <= 65 ? 2 : 0, 4, 'Keep meta title around 45-60 characters.');
  addCheck('Meta description added', description ? 8 : 0, 8, 'Add a search-result ready meta description.');
  addCheck('Meta description length', description.length >= 120 && description.length <= 160 ? 4 : description.length >= 80 && description.length <= 170 ? 2 : 0, 4, 'Keep meta description around 120-160 characters.');
  addCheck('Focus keyword selected', keyword ? 6 : 0, 6, 'Select one clear focus keyword.');
  addCheck('Keyword in title', keyword && title.toLowerCase().includes(keyword) ? 5 : 0, 5, 'Use the focus keyword naturally in the title.');
  addCheck('Keyword in URL slug', keyword && (blog.slug || '').toLowerCase().includes(keyword.replace(/\s+/g, '-')) ? 4 : 0, 4, 'Use the focus keyword in a short URL slug.');
  addCheck('Keyword in introduction', keyword && (blog.shortDescription || '').toLowerCase().includes(keyword) ? 4 : 0, 4, 'Use the focus keyword naturally near the introduction.');
  addCheck('Keyword in content', keyword && textContent.toLowerCase().includes(keyword) ? 3 : 0, 3, 'Use the keyword naturally in the content without stuffing.');
  addCheck(`Content depth (${words.length} words)`, words.length >= 1000 ? 12 : words.length >= 600 ? 8 : words.length >= 300 ? 4 : 0, 12, 'Build a more detailed article with useful depth.');
  addCheck('H2/H3 heading structure', documentNode.querySelectorAll('h2, h3').length >= 2 ? 6 : documentNode.querySelectorAll('h2, h3').length ? 3 : 0, 6, 'Structure the content with descriptive H2/H3 headings.');
  addCheck('Internal links', internalLinks.length >= 2 ? 5 : internalLinks.length ? 3 : 0, 5, 'Add at least 2 relevant internal links.');
  addCheck('Useful external source', externalLinks.length ? 3 : 0, 3, 'Add one credible external reference where useful.');
  addCheck('Relevant image', blog.image || contentImages.length ? 3 : 0, 3, 'Add a relevant cover or content image.');
  addCheck('Image alt text', allImagesHaveAlt && (blog.image || contentImages.length) ? 4 : 0, 4, 'Add descriptive alt text to every image.');
  addCheck('Canonical URL', /^https?:\/\//i.test(blog.canonicalUrl || '') ? 5 : 0, 5, 'Set a correct absolute canonical URL.');
  addCheck('Valid JSON-LD schema', schemaIsValid ? 5 : 0, 5, 'Add valid BlogPosting JSON-LD schema.');
  addCheck('Helpful FAQs', (blog.faq?.length || 0) >= 2 ? 3 : blog.faq?.length ? 2 : 0, 3, 'Add 2 or more helpful FAQs.');
  addCheck('Open Graph sharing', blog.ogTitle && blog.ogDescription && (blog.ogImage || blog.image) ? 4 : blog.ogTitle || blog.ogDescription ? 2 : 0, 4, 'Add OG title, description, and share image.');
  addCheck('Indexable robots setting', blog.robots === 'index,follow' ? 2 : 0, 2, 'Use index,follow for ranking pages.');
  addCheck('Twitter/X card', blog.twitterTitle && blog.twitterDescription && (blog.twitterImage || blog.ogImage || blog.image) ? 2 : 0, 2, 'Add Twitter title, description, and image.');

  const score = Math.min(100, checks.reduce((total, check) => total + check.points, 0));
  return {
    score,
    tone: getScoreTone(score),
    checks,
    wordCount: words.length,
    passed: checks.filter((check) => check.status === 'pass').length,
    improvements: checks.filter((check) => check.status !== 'pass').sort((a, b) => (b.maxPoints - b.points) - (a.maxPoints - a.points))
  };
};

const getDisplayedSeo = (blog, localAnalysis) => {
  const hasAiScore = Number.isFinite(blog.aiSeoScore);
  const score = hasAiScore ? blog.aiSeoScore : localAnalysis.score;
  return {
    score,
    tone: getScoreTone(score),
    source: hasAiScore ? 'Saved Gemini audit' : 'Local SEO audit'
  };
};

const GeminiMark = () => (
  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4285F4] via-[#A142F4] to-[#34A853] text-sm font-black text-white shadow-sm">
    G
  </span>
);

const ScoreRing = ({ score, tone, size = 'h-12 w-12' }) => (
  <span
    className={`relative flex shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-800 ${size}`}
    style={{ background: `conic-gradient(${tone.color} ${score * 3.6}deg, #e2e8f0 0deg)` }}
  >
    <span className="flex h-[78%] w-[78%] items-center justify-center rounded-full bg-white">{score}</span>
  </span>
);

const ModalShell = ({ children, maxWidth = 'max-w-5xl', onClose }) => (
  <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
    <div className={`admin-modal-panel max-h-[92vh] w-full ${maxWidth} overflow-hidden rounded-2xl bg-white shadow-2xl`}>
      {children}
    </div>
    <button type="button" aria-label="Close modal" className="sr-only" onClick={onClose} />
  </div>
);

export default function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [localSeoDetails, setLocalSeoDetails] = useState(null);
  const [geminiDetails, setGeminiDetails] = useState(null);
  const [consoleDetails, setConsoleDetails] = useState(null);
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [searchMetrics, setSearchMetrics] = useState(null);
  const [searchMetricsLoading, setSearchMetricsLoading] = useState(false);
  const [searchMetricsError, setSearchMetricsError] = useState('');
  const [aiReview, setAiReview] = useState(null);
  const [aiReviewLoading, setAiReviewLoading] = useState(false);
  const [aiReviewError, setAiReviewError] = useState('');
  const [quickOptions, setQuickOptions] = useState(() => getAdminQuickOptions());

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/blogs');
      if (data.success) {
        setBlogs(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchBlogs();
    api.get('/seo/integrations/status')
      .then(({ data }) => setIntegrationStatus(data.data))
      .catch(() => setIntegrationStatus(null));
  }, []);

  useEffect(() => {
    const syncQuickOptions = () => setQuickOptions(getAdminQuickOptions());
    window.addEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
    window.addEventListener('storage', syncQuickOptions);
    return () => {
      window.removeEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
      window.removeEventListener('storage', syncQuickOptions);
    };
  }, []);

  const scoredBlogs = useMemo(() => blogs.map((blog) => {
    const seoAnalysis = calculateSeoScore(blog);
    return { ...blog, seoAnalysis, seoDisplay: getDisplayedSeo(blog, seoAnalysis) };
  }), [blogs]);

  const searchConsoleConfigured = Boolean(
    integrationStatus?.searchConsole?.siteConfigured
    && integrationStatus?.searchConsole?.credentialsConfigured
  );

  const averageSeoScore = scoredBlogs.length
    ? Math.round(scoredBlogs.reduce((total, blog) => total + blog.seoDisplay.score, 0) / scoredBlogs.length)
    : 0;

  const publishedCount = scoredBlogs.filter((blog) => blog.status === 'published').length;

  const filteredBlogs = scoredBlogs.filter((blog) => {
    const matchesQuery =
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.authorName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  const loadAiReviewForBlog = async (blog, { force = false } = {}) => {
    if (!blog?._id) return;
    try {
      setAiReviewLoading(true);
      setAiReviewError('');
      const { data } = await api.post(`/blogs/${blog._id}/gemini-seo-review${force ? '?force=true' : ''}`, force ? { force: true } : {});
      const result = data.data;
      const savedAudit = {
        aiSeoScore: result.review.overallScore,
        aiSeoAudit: result.review,
        aiSeoModel: result.model,
        aiSeoAnalyzedAt: result.analyzedAt
      };
      setAiReview(result);
      setBlogs((current) => current.map((item) => item._id === blog._id ? { ...item, ...savedAudit } : item));
      setGeminiDetails((current) => current?._id === blog._id ? { ...current, ...savedAudit } : current);
    } catch (err) {
      setAiReviewError(err.response?.data?.message || err.message);
    } finally {
      setAiReviewLoading(false);
    }
  };

  const openGeminiDetails = (blog) => {
    setGeminiDetails(blog);
    setAiReviewError('');
    if (blog.aiSeoAudit) {
      setAiReview({
        model: blog.aiSeoModel,
        review: blog.aiSeoAudit,
        analyzedAt: blog.aiSeoAnalyzedAt,
        searchMetricsIncluded: Boolean(blog.aiSeoAudit.analysisBasis?.searchConsoleIncluded),
        cached: true
      });
    } else {
      setAiReview(null);
      void loadAiReviewForBlog(blog);
    }
  };

  const openConsoleDetails = (blog) => {
    setConsoleDetails(blog);
    setSearchMetrics(null);
    setSearchMetricsError('');
    if (searchConsoleConfigured) {
      void loadSearchMetrics(blog);
    }
  };

  const loadSearchMetrics = async (blog = consoleDetails) => {
    if (!blog?._id) return;
    try {
      setSearchMetricsLoading(true);
      setSearchMetricsError('');
      const { data } = await api.get(`/blogs/${blog._id}/search-console?days=28`);
      setSearchMetrics(data.data);
    } catch (err) {
      setSearchMetricsError(err.response?.data?.message || err.message);
    } finally {
      setSearchMetricsLoading(false);
    }
  };

  const handleAddNew = () => {
    setSelectedBlog(null);
    setIsFormOpen(true);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      const { data } = await api.delete(`/blogs/${id}`);
      if (data.success) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      } else {
        alert(data.message || 'Failed to delete blog');
      }
    } catch (err) {
      alert(`Error deleting blog: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleFormSave = () => {
    setIsFormOpen(false);
    void fetchBlogs();
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="mx-auto w-full max-w-none p-3 md:p-5 lg:p-6">
        <div className="mb-6 h-16 w-full animate-pulse rounded-2xl bg-slate-100" />
        <div className="mb-6 grid gap-4 lg:grid-cols-4">
          {[0, 1, 2, 3].map((key) => (
            <div key={key} className="h-28 animate-pulse rounded-2xl bg-slate-100" />
          ))}
        </div>
        <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-none p-3 md:p-5 lg:p-6">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-200">
            <Newspaper size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Blog Management</h1>
            <p className="mt-1 text-sm text-slate-500">Create, edit, and manage blog SEO with local checks, Gemini AI, and Search Console.</p>
          </div>
        </div>

        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:shadow-blue-200 active:scale-[0.98]"
        >
          <Plus size={18} />
          Add New Blog
        </button>
      </div>

      <div className={`mb-6 grid gap-4 ${quickOptions.seoHints ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Total blogs</span>
            <span className="rounded-lg bg-slate-100 p-1.5 text-slate-600"><Layers size={16} /></span>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-900">{blogs.length}</p>
          <p className="mt-1 text-xs text-slate-400">{publishedCount} published</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Average SEO score</span>
            <span className="rounded-lg bg-violet-100 p-1.5 text-violet-700"><Activity size={16} /></span>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-900">{averageSeoScore}<span className="text-sm font-medium text-slate-400">/100</span></p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Excellent blogs</span>
            <span className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700"><TrendingUp size={16} /></span>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-900">{scoredBlogs.filter((blog) => blog.seoDisplay.score >= 85).length}<span className="text-sm font-medium text-slate-400">/{blogs.length}</span></p>
        </div>
        {quickOptions.seoHints ? <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Integrations</span>
            <Info size={16} className="shrink-0 text-slate-300" />
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${searchConsoleConfigured ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${searchConsoleConfigured ? 'bg-emerald-500' : 'bg-slate-400'}`} />
              Search Console {searchConsoleConfigured ? 'connected' : 'not set up'}
            </span>
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${integrationStatus?.gemini?.configured ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${integrationStatus?.gemini?.configured ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              Gemini {integrationStatus?.gemini?.configured ? integrationStatus.gemini.model : 'setup required'}
            </span>
          </div>
        </div> : null}
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0" />
          {error}
        </div>
      )}

      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search blogs by title, category, or author..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-sm text-slate-800 transition focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'All' },
            { id: 'published', label: 'Published' },
            { id: 'draft', label: 'Draft' }
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setStatusFilter(option.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                statusFilter === option.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {option.label}
            </button>
          ))}
          <span className="ml-1 hidden shrink-0 text-xs font-medium text-slate-400 sm:inline">
            {filteredBlogs.length} of {blogs.length}
          </span>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1280px] text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">SEO</th>
                <th className="px-6 py-4">Tools</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <tr key={blog._id} className="admin-blog-row group transition">
                    <td className="max-w-md px-6 py-4">
                      <div className="flex items-start gap-3">
                        {blog.image ? (
                          <img
                            src={getAssetUrl(blog.image)}
                            alt={blog.imageAlt || blog.title || 'Blog image'}
                            className="h-11 w-11 shrink-0 rounded-lg border border-slate-200 object-cover"
                          />
                        ) : (
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                            <ImageIcon size={18} />
                          </span>
                        )}
                        <div className="min-w-0">
                          <p className="line-clamp-2 font-semibold text-slate-900">{blog.title}</p>
                          <p className="mt-1 text-xs font-normal text-slate-400">{new Date(blog.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                          {blog.authorName ? blog.authorName.charAt(0).toUpperCase() : <User size={13} />}
                        </span>
                        <span className="truncate text-slate-700">{blog.authorName || 'Unknown'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {blog.category || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${blog.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${blog.status === 'published' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => setLocalSeoDetails(blog)}
                        className={`group/score flex min-w-40 items-center gap-3 rounded-xl border px-3 py-2 text-left transition hover:-translate-y-0.5 hover:shadow-md ${blog.seoDisplay.tone.background} ${blog.seoDisplay.tone.border}`}
                        title="Open local SEO audit"
                      >
                        <ScoreRing score={blog.seoDisplay.score} tone={blog.seoDisplay.tone} size="h-10 w-10" />
                        <span>
                          <span className={`block text-xs font-semibold ${blog.seoDisplay.tone.text}`}>{blog.seoDisplay.label || blog.seoDisplay.tone.label}</span>
                          <span className="block text-[10px] text-slate-500">{blog.seoDisplay.source}</span>
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => openGeminiDetails(blog)}
                          className="inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
                        >
                          <Sparkles className="h-4 w-4" />
                          Gemini
                        </button>
                        <button
                          type="button"
                          onClick={() => openConsoleDetails(blog)}
                          className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                        >
                          <BarChart3 className="h-4 w-4" />
                          Console
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700">{blog.views}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5 opacity-80 transition group-hover:opacity-100">
                        <button onClick={() => handleEdit(blog)} className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50" title="Edit">
                          <Edit2 size={17} />
                        </button>
                        <button onClick={() => handleDelete(blog._id)} className="rounded-lg p-2 text-red-600 transition hover:bg-red-50" title="Delete">
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                        <FileText size={24} />
                      </span>
                      <p className="text-sm font-semibold text-slate-700">No blogs found</p>
                      <p className="max-w-xs text-xs text-slate-400">
                        {searchQuery || statusFilter !== 'all' ? 'Try adjusting your search or filters.' : 'Get started by creating your first blog post.'}
                      </p>
                      {!searchQuery && statusFilter === 'all' && (
                        <button
                          onClick={handleAddNew}
                          className="mt-1 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                        >
                          <Plus size={14} />
                          Add New Blog
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isFormOpen && (
        <BlogForm
          blog={selectedBlog}
          onClose={() => setIsFormOpen(false)}
          onSave={handleFormSave}
        />
      )}

      {localSeoDetails && (
        <LocalSeoModal
          blog={localSeoDetails}
          onClose={() => setLocalSeoDetails(null)}
          onEdit={() => {
            setLocalSeoDetails(null);
            handleEdit(localSeoDetails);
          }}
        />
      )}

      {geminiDetails && (
        <GeminiModal
          blog={geminiDetails}
          aiReview={aiReview}
          loading={aiReviewLoading}
          error={aiReviewError}
          onClose={() => setGeminiDetails(null)}
          onAnalyze={() => loadAiReviewForBlog(geminiDetails)}
          onRefresh={() => loadAiReviewForBlog(geminiDetails, { force: true })}
        />
      )}

      {consoleDetails && (
        <SearchConsoleModal
          blog={consoleDetails}
          configured={searchConsoleConfigured}
          metrics={searchMetrics}
          loading={searchMetricsLoading}
          error={searchMetricsError}
          onClose={() => setConsoleDetails(null)}
          onRefresh={() => loadSearchMetrics(consoleDetails)}
        />
      )}
    </div>
  );
}

function LocalSeoModal({ blog, onClose, onEdit }) {
  const analysis = blog.seoAnalysis || calculateSeoScore(blog);
  return (
    <ModalShell onClose={onClose}>
      <div className="flex items-start justify-between border-b border-slate-200 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">Local deterministic audit</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">{blog.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{analysis.wordCount} words - {analysis.passed}/{analysis.checks.length} checks fully passed</p>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={20} /></button>
      </div>
      <div className="max-h-[calc(90vh-96px)] overflow-y-auto p-5">
        <div className={`mb-5 flex items-center justify-between rounded-2xl border p-5 ${analysis.tone.background} ${analysis.tone.border}`}>
          <div>
            <p className={`text-sm font-semibold ${analysis.tone.text}`}>{analysis.tone.label}</p>
            <p className="mt-1 text-xs text-slate-600">Stable score from fixed on-page SEO rules.</p>
          </div>
          <p className="text-4xl font-bold text-slate-900">{analysis.score}<span className="text-base text-slate-400">/100</span></p>
        </div>

        {analysis.improvements.length > 0 ? (
          <div className="mb-5 rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
            <div className="flex items-center gap-2">
              <FileSearch className="h-5 w-5 text-amber-600" />
              <h4 className="text-sm font-bold text-slate-900">Fix these first for SEO improvement</h4>
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {analysis.improvements.slice(0, 6).map((check) => (
                <div key={check.label} className="rounded-xl bg-white p-3 text-xs shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-800">{check.label}</p>
                    <span className="shrink-0 font-bold text-amber-700">{check.points}/{check.maxPoints}</span>
                  </div>
                  <p className="mt-1 leading-5 text-slate-500">{check.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <h4 className="mb-3 text-sm font-semibold text-slate-900">Audit breakdown</h4>
        <div className="space-y-2">
          {analysis.checks.map((check) => (
            <div key={check.label} className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
              {check.status === 'pass' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" /> : <AlertCircle size={18} className={`mt-0.5 shrink-0 ${check.status === 'partial' ? 'text-amber-500' : 'text-red-500'}`} />}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">{check.label}</p>
                {check.status !== 'pass' && <p className="mt-0.5 text-xs leading-5 text-slate-500">{check.recommendation}</p>}
              </div>
              <span className="shrink-0 text-xs font-bold text-slate-600">{check.points}/{check.maxPoints}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-end">
          <button type="button" onClick={onEdit} className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">
            <Edit2 size={16} />
            Improve this blog
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

function GeminiModal({ blog, aiReview, loading, error, onClose, onAnalyze, onRefresh }) {
  const score = aiReview?.review?.overallScore ?? blog.aiSeoScore ?? blog.seoAnalysis?.score ?? 0;
  const tone = getScoreTone(score);
  const review = aiReview?.review || blog.aiSeoAudit;
  const [activeAuditTab, setActiveAuditTab] = useState('fixes');

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-6xl">
      <div className="flex items-start justify-between border-b border-slate-200 bg-white p-5">
        <div className="flex items-start gap-4">
          <GeminiMark />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">Gemini AI SEO audit</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{blog.title}</h3>
            <p className="mt-1 text-xs text-slate-500">
              Saved score is reused for consistency. Refresh AI only when content changed or you need a new review.
            </p>
          </div>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-slate-700"><X size={20} /></button>
      </div>

      <div className="max-h-[calc(90vh-96px)] overflow-y-auto p-5">
        <div className={`mb-5 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between ${tone.background} ${tone.border}`}>
          <div className="flex items-center gap-4">
            <ScoreRing score={score} tone={tone} size="h-16 w-16" />
            <div>
              <p className={`text-sm font-bold ${tone.text}`}>{tone.label}</p>
              <p className="mt-1 text-xs text-slate-600">
                {loading ? 'Gemini is analyzing evidence...' : review ? `${aiReview?.cached ? 'Cached' : 'Saved'} Gemini audit` : 'No Gemini audit yet'}
              </p>
              {aiReview?.analyzedAt || blog.aiSeoAnalyzedAt ? (
                <p className="mt-1 text-[11px] text-slate-500">Analyzed: {new Date(aiReview?.analyzedAt || blog.aiSeoAnalyzedAt).toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={onAnalyze} disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-60">
              <Bot className="h-4 w-4" />
              {review ? 'Load saved audit' : 'Analyze with Gemini'}
            </button>
            <button type="button" onClick={onRefresh} disabled={loading} className="inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50 disabled:opacity-60">
              <RefreshCw className="h-4 w-4" />
              Refresh AI
            </button>
          </div>
        </div>

        {error && <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">{error}</p>}
        {!review && !loading ? (
          <div className="rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 p-8 text-center">
            <GeminiMark />
            <p className="mt-4 text-sm font-bold text-slate-900">Gemini audit is not generated yet.</p>
            <p className="mt-1 text-xs text-slate-500">Click Analyze with Gemini to create and save the AI score.</p>
          </div>
        ) : null}

        {review ? (
          <GeminiAuditWorkspace
            review={review}
            activeTab={activeAuditTab}
            setActiveTab={setActiveAuditTab}
          />
        ) : null}
      </div>
    </ModalShell>
  );
}

function GeminiAuditWorkspace({ review, activeTab, setActiveTab }) {
  const criticalCount = (review.auditIssues || []).filter((issue) => issue.severity === 'Critical').length;
  const highCount = (review.auditIssues || []).filter((issue) => issue.severity === 'High').length;
  const fixCount = review.priorityActions?.length || 0;
  const issueCount = (review.auditIssues || []).length;
  const correctionCount = (review.sentenceCorrections || []).length;
  const faqCount = (review.seoFaqs || []).length + (review.featuredSnippetSuggestions || []).length;
  const checklistCount = (review.finalChecklist || []).length;
  const tabs = [
    { id: 'fixes', step: '1', label: 'Fix First', helper: 'Highest impact edits', count: fixCount },
    { id: 'audit', step: '2', label: 'Issues', helper: 'Problems by severity', count: issueCount },
    { id: 'corrections', step: '3', label: 'Rewrite', helper: 'Sentence corrections', count: correctionCount },
    { id: 'seo', step: '4', label: 'SEO Setup', helper: 'Metadata and intent', count: review.seoRecommendations ? 1 : 0 },
    { id: 'faqs', step: '5', label: 'FAQs', helper: 'Snippets and schema', count: faqCount },
    { id: 'checklist', step: '6', label: 'Checklist', helper: 'Final review', count: checklistCount }
  ];

  return (
    <div className="space-y-5">
      <section className="grid gap-4 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <BrainCircuit size={22} className="mt-0.5 shrink-0 text-violet-600" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">Gemini summary</p>
              <h4 className="mt-1 text-lg font-black text-slate-950">What needs attention</h4>
              <p className="mt-2 text-sm leading-6 text-slate-700">{review.summary}</p>
              <p className="mt-3 rounded-xl bg-violet-50 p-3 text-xs font-semibold leading-5 text-violet-700">{review.scoreRationale}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-black text-slate-900">Recommended workflow</p>
          <div className="mt-4 space-y-3">
            {[
              ['1', 'Fix high-priority edits first'],
              ['2', 'Apply metadata, FAQ and schema suggestions'],
              ['3', 'Use checklist before publishing'],
            ].map(([step, label]) => (
              <button
                key={step}
                type="button"
                onClick={() => setActiveTab(step === '1' ? 'fixes' : step === '2' ? 'seo' : 'checklist')}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-50 p-3 text-left transition hover:bg-violet-50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-black text-white">{step}</span>
                <span className="text-sm font-bold text-slate-700">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-3">
        <MetricCard label="AI SEO score" value={review.overallScore} color="text-violet-700" />
        <MetricCard label="Critical + High issues" value={criticalCount + highCount} color="text-red-700" />
        <MetricCard label="Readiness" value={review.rankingPotential?.score ?? '-'} color="text-emerald-700" />
      </div>

      <div className="sticky top-0 z-10 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-sm backdrop-blur">
        <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-3 py-3 text-left transition ${
                activeTab === tab.id
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-violet-50 hover:text-violet-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-white text-violet-700'}`}>{tab.step}</span>
                <span className="text-xs font-black">{tab.label}</span>
              </span>
              <span className={`mt-2 block text-[10px] font-semibold ${activeTab === tab.id ? 'text-violet-100' : 'text-slate-400'}`}>
                {tab.helper}
              </span>
              <span className={`mt-1 block text-[10px] font-black ${activeTab === tab.id ? 'text-violet-100' : 'text-slate-400'}`}>
                {tab.count} item{tab.count === 1 ? '' : 's'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'fixes' && <FixFirstTab review={review} />}
      {activeTab === 'audit' && <FullAuditTab review={review} />}
      {activeTab === 'corrections' && <CorrectionsTab review={review} />}
      {activeTab === 'seo' && <SeoSetupTab review={review} />}
      {activeTab === 'faqs' && <FaqSnippetTab review={review} />}
      {activeTab === 'checklist' && <ChecklistTab review={review} />}
    </div>
  );
}

function FixFirstTab({ review }) {
  const actions = review.priorityActions || [];

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <div>
              <h4 className="text-base font-black text-slate-900">Start here</h4>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Apply these cards from top to bottom. They are written as copy/paste friendly tasks.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">{actions.length} priority fixes</span>
        </div>
      </div>

      {actions.length > 0 ? (
        <div className="space-y-3">
          {actions.map((action, index) => (
            <ExactFixCard key={`${action.title}-${index}`} action={action} />
          ))}
        </div>
      ) : (
        <EmptyAuditState title="No priority fixes returned" message="Refresh the Gemini audit to generate exact recommendations." />
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <ActionColumn title="Ranking blockers" tone="amber" items={review.rankingPotential?.blockers || []} emptyText="No major blocker reported." />
        <ActionColumn title="Quick wins" tone="emerald" items={review.rankingPotential?.quickWins || []} emptyText="No quick wins reported." />
        <ActionColumn title="Safety risks" tone="red" items={review.riskFlags || []} emptyText="No safety risk reported." />
      </div>
    </section>
  );
}

function FullAuditTab({ review }) {
  const issuesBySeverity = ['Critical', 'High', 'Medium', 'Low'].map((severity) => ({
    severity,
    items: (review.auditIssues || []).filter((issue) => issue.severity === severity)
  }));

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h4 className="text-base font-bold text-slate-900">Full audit</h4>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Review issues by severity. Use Critical and High first, then Medium and Low.
        </p>
      </div>
      {issuesBySeverity.map(({ severity, items }) => (
        <IssueTable key={severity} severity={severity} items={items} />
      ))}
    </section>
  );
}

function CorrectionsTab({ review }) {
  const corrections = review.sentenceCorrections || [];

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h4 className="text-base font-bold text-slate-900">Sentence corrections</h4>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Copy the improved version and replace the original sentence in the blog editor.
        </p>
      </div>

      {corrections.length > 0 ? corrections.slice(0, 30).map((item, index) => (
        <div key={`${item.location}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.location}</p>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50/70 p-3">
              <p className="text-[10px] font-bold uppercase text-red-700">Replace this</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">{item.original}</p>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
              <p className="text-[10px] font-bold uppercase text-emerald-700">Use this instead</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-900">{item.improved}</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">{item.reason}</p>
        </div>
      )) : (
        <EmptyAuditState title="No corrections returned" message="The current saved audit does not include sentence-level corrections. Refresh AI to generate the full audit." />
      )}
    </section>
  );
}

function SeoSetupTab({ review }) {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h4 className="text-base font-bold text-slate-900">SEO setup</h4>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Metadata, intent, keywords, headings, schema, and links in one place.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <SeoMetadataPanel recommendations={review.seoRecommendations} />
        <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
          <div className="flex items-center gap-2"><Target size={16} className="text-blue-600" /><p className="text-sm font-bold text-slate-800">Search intent</p></div>
          <p className="mt-2 text-sm leading-6 text-slate-600"><strong>{review.searchIntent?.primaryIntent}</strong> - {review.searchIntent?.targetAudience}</p>
          <p className="mt-2 text-sm leading-6 text-blue-700">{review.searchIntent?.recommendedAngle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">{(review.searchIntent?.likelySearchQueries || []).slice(0, 8).map((item) => <span key={item} className="rounded-full bg-white px-2 py-1 text-xs font-medium text-blue-700">{item}</span>)}</div>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
          <div className="flex items-center gap-2"><Zap size={16} className="text-amber-500" /><p className="text-sm font-bold text-slate-800">Keyword strategy</p></div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{review.keywordStrategy?.placementAssessment}</p>
          <p className="mt-2 text-xs text-slate-500">Stuffing risk: <strong>{review.keywordStrategy?.stuffingRisk}</strong></p>
          <div className="mt-3 flex flex-wrap gap-1.5">{(review.keywordStrategy?.semanticTerms || []).slice(0, 10).map((item) => <span key={item} className="rounded-full bg-white px-2 py-1 text-xs font-medium text-amber-700">{item}</span>)}</div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-slate-900">Score breakdown</p>
          <div className="mt-3 space-y-3">
            {(review.categoryScores || []).map((category) => (
              <div key={category.category}>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <p className="font-semibold text-slate-700">{category.category}</p>
                  <span className="font-bold text-violet-700">{category.score}/{category.maxScore}</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-violet-500" style={{ width: `${Math.min(100, (category.score / category.maxScore) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <ActionColumn title="Content gaps" tone="blue" items={review.contentGaps || []} emptyText="No content gaps returned." />
        <ActionColumn title="Heading ideas" tone="violet" items={review.suggestedHeadings || []} emptyText="No heading ideas returned." />
        <ActionColumn title="Internal links" tone="blue" items={review.internalLinkIdeas || []} emptyText="No internal link ideas returned." />
      </div>
    </section>
  );
}

function FaqSnippetTab({ review }) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <FaqPanel faqs={review.seoFaqs || []} />
      <SnippetPanel snippets={review.featuredSnippetSuggestions || []} />
      <ReadyTextPanel title="Missing content to add" items={review.missingContentSuggestions || []} />
      <ActionColumn title="Schema suggestions" tone="violet" items={review.schemaSuggestions || []} emptyText="No schema suggestions returned." />
    </section>
  );
}

function ChecklistTab({ review }) {
  return (
    <section className="space-y-4">
      <ImpactPanel impact={review.estimatedImpact} checklist={review.finalChecklist || []} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ActionColumn title="Trust and E-E-A-T" tone="slate" items={review.eeatRecommendations || []} emptyText="No E-E-A-T issue reported." />
        <ActionColumn title="Final quick wins" tone="emerald" items={review.rankingPotential?.quickWins || []} emptyText="No quick wins reported." />
      </div>
    </section>
  );
}

function EmptyAuditState({ title, message }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
      <FileSearch className="mx-auto h-8 w-8 text-slate-300" />
      <p className="mt-3 text-sm font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{message}</p>
    </div>
  );
}

function SeoActionPlan({ review }) {
  const highPriorityActions = (review.priorityActions || []).filter((action) => action.priority === 'high');
  const visibleActions = highPriorityActions.length ? highPriorityActions : (review.priorityActions || []).slice(0, 3);

  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
          <FileSearch className="h-5 w-5" />
        </span>
        <div>
          <h4 className="text-sm font-bold text-slate-900">SEO Action Plan</h4>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            Use this to improve page relevance, snippets, crawlability, trust, and ranking readiness. It does not promise a Google rank.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <ActionColumn title="Do first" tone="red" items={visibleActions.map((action) => `${action.issueLocation || action.title}: ${action.recommendedReplacement || action.exactRecommendation}`)} emptyText="No urgent action found." />
        <ActionColumn title="Ranking blockers" tone="amber" items={review.rankingPotential?.blockers || []} emptyText="No major blocker reported." />
        <ActionColumn title="Quick wins" tone="emerald" items={review.rankingPotential?.quickWins || []} emptyText="No quick wins reported." />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <ActionColumn title="Content gaps" tone="blue" items={review.contentGaps || []} emptyText="No content gaps reported." />
        <ActionColumn title="Heading ideas" tone="violet" items={review.suggestedHeadings || []} emptyText="No heading ideas reported." />
        <ActionColumn title="Trust and E-E-A-T" tone="slate" items={review.eeatRecommendations || []} emptyText="No E-E-A-T issue reported." />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <ActionColumn title="Internal link ideas" tone="blue" items={review.internalLinkIdeas || []} emptyText="No internal link ideas reported." />
        <ActionColumn title="Safety or claim risks" tone="red" items={review.riskFlags || []} emptyText="No risk flags reported." />
      </div>
    </div>
  );
}

function CompleteAuditSections({ review }) {
  const issuesBySeverity = ['Critical', 'High', 'Medium', 'Low'].map((severity) => ({
    severity,
    items: (review.auditIssues || []).filter((issue) => issue.severity === severity)
  }));

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <h4 className="text-sm font-bold text-slate-900">Line-by-line issue tables</h4>
        </div>
        <p className="mt-1 text-xs leading-5 text-slate-500">Exact problem, impact, and replacement suggestions from the AI audit.</p>
        <div className="mt-4 space-y-4">
          {issuesBySeverity.map(({ severity, items }) => (
            <IssueTable key={severity} severity={severity} items={items} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-2">
          <Edit2 className="h-5 w-5 text-violet-600" />
          <h4 className="text-sm font-bold text-slate-900">Sentence-by-sentence corrections</h4>
        </div>
        <div className="mt-4 space-y-3">
          {(review.sentenceCorrections || []).length > 0 ? review.sentenceCorrections.slice(0, 30).map((item, index) => (
            <div key={`${item.location}-${index}`} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{item.location}</p>
              <div className="mt-2 grid gap-3 lg:grid-cols-2">
                <div className="rounded-lg bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-red-600">Original</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.original}</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-emerald-600">Improved</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-800">{item.improved}</p>
                </div>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{item.reason}</p>
            </div>
          )) : (
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No sentence corrections returned.</p>
          )}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <ReadyTextPanel title="Missing content suggestions" items={review.missingContentSuggestions || []} />
        <SeoMetadataPanel recommendations={review.seoRecommendations} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <FaqPanel faqs={review.seoFaqs || []} />
        <SnippetPanel snippets={review.featuredSnippetSuggestions || []} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <ActionColumn title="Schema suggestions" tone="violet" items={review.schemaSuggestions || []} emptyText="No schema suggestions returned." />
        <ImpactPanel impact={review.estimatedImpact} checklist={review.finalChecklist || []} />
      </section>
    </div>
  );
}

function IssueTable({ severity, items }) {
  const styles = {
    Critical: 'text-red-700 bg-red-50 border-red-100',
    High: 'text-orange-700 bg-orange-50 border-orange-100',
    Medium: 'text-amber-700 bg-amber-50 border-amber-100',
    Low: 'text-blue-700 bg-blue-50 border-blue-100'
  };

  return (
    <div className={`rounded-xl border p-3 ${styles[severity]}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wide">{severity} issues</p>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold">{items.length}</span>
      </div>
      {items.length > 0 ? (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs">
            <thead className="text-[10px] uppercase text-slate-500">
              <tr>
                <th className="px-3 py-2">Location</th>
                <th className="px-3 py-2">Problem</th>
                <th className="px-3 py-2">Why it matters</th>
                <th className="px-3 py-2">Suggested fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/80">
              {items.slice(0, 12).map((issue, index) => (
                <tr key={`${severity}-${index}`} className="align-top">
                  <td className="px-3 py-2 font-semibold text-slate-800">{issue.location}</td>
                  <td className="px-3 py-2 text-slate-600">
                    <p className="font-medium">{issue.problem}</p>
                    {issue.problematicText ? <p className="mt-1 rounded bg-white/80 p-1.5 text-[11px]">{issue.problematicText}</p> : null}
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">{issue.category}</p>
                  </td>
                  <td className="px-3 py-2 text-slate-600">
                    <p>{issue.whyItMatters}</p>
                    <p className="mt-1 text-[11px]"><strong>SEO:</strong> {issue.seoImpact}</p>
                    <p className="mt-1 text-[11px]"><strong>User:</strong> {issue.userImpact}</p>
                  </td>
                  <td className="px-3 py-2 text-slate-700">
                    <p className="font-medium">{issue.suggestedFix}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{issue.whyReplacementIsBetter}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-3 rounded-lg bg-white/70 p-3 text-xs text-slate-500">No {severity.toLowerCase()} issues returned.</p>
      )}
    </div>
  );
}

function ReadyTextPanel({ title, items }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      <div className="mt-3 space-y-3">
        {items.length > 0 ? items.slice(0, 8).map((item, index) => (
          <div key={`${item.section}-${index}`} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
            <p className="text-xs font-bold text-slate-800">{item.section}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{item.whyNeeded}</p>
            <p className="mt-2 whitespace-pre-line rounded-lg bg-white p-2 text-xs font-medium leading-5 text-slate-800">{item.readyToPasteText}</p>
          </div>
        )) : (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No missing content suggestions returned.</p>
        )}
      </div>
    </section>
  );
}

function SeoMetadataPanel({ recommendations }) {
  const rows = recommendations ? [
    ['Meta title', recommendations.metaTitle],
    ['Meta description', recommendations.metaDescription],
    ['URL slug', recommendations.urlSlug],
    ['Focus keyword', recommendations.focusKeyword],
    ['Secondary keywords', (recommendations.secondaryKeywords || []).join(', ')],
    ['Image alt text', (recommendations.imageAltText || []).join(' | ')],
    ['OG title', recommendations.ogTitle],
    ['OG description', recommendations.ogDescription],
    ['Twitter title', recommendations.twitterTitle],
    ['Twitter description', recommendations.twitterDescription]
  ] : [];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="text-sm font-bold text-slate-900">SEO metadata recommendations</h4>
      <div className="mt-3 space-y-2">
        {rows.length > 0 ? rows.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-1 text-xs font-medium leading-5 text-slate-800">{value || 'N/A'}</p>
          </div>
        )) : (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No metadata recommendations returned.</p>
        )}
      </div>
    </section>
  );
}

function FaqPanel({ faqs }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="text-sm font-bold text-slate-900">SEO FAQ suggestions</h4>
      <div className="mt-3 space-y-2">
        {faqs.length > 0 ? faqs.slice(0, 14).map((faq, index) => (
          <div key={`${faq.question}-${index}`} className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-bold text-slate-800">{faq.question}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">{faq.answer}</p>
          </div>
        )) : (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No FAQs returned.</p>
        )}
      </div>
    </section>
  );
}

function SnippetPanel({ snippets }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="text-sm font-bold text-slate-900">Featured snippet opportunities</h4>
      <div className="mt-3 space-y-2">
        {snippets.length > 0 ? snippets.slice(0, 8).map((snippet, index) => (
          <div key={`${snippet.targetQuery}-${index}`} className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-blue-600">{snippet.targetQuery}</p>
            <p className="mt-1 text-xs leading-5 text-slate-700">{snippet.readyToPasteAnswer}</p>
          </div>
        )) : (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No featured snippet suggestions returned.</p>
        )}
      </div>
    </section>
  );
}

function ImpactPanel({ impact, checklist }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="text-sm font-bold text-slate-900">Final checklist and estimated impact</h4>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-800">Implementation checklist</p>
          <div className="mt-2 space-y-1.5">
            {checklist.length > 0 ? checklist.slice(0, 18).map((item, index) => (
              <p key={`${item}-${index}`} className="text-xs leading-5 text-slate-600">☐ {item.replace(/^☐\s*/, '')}</p>
            )) : <p className="text-xs text-slate-400">No checklist returned.</p>}
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-800">Estimated impact</p>
          {impact ? (
            <div className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">
              <p><strong>SEO:</strong> {impact.seo}</p>
              <p><strong>User trust:</strong> {impact.userTrust}</p>
              <p><strong>Readability:</strong> {impact.readability}</p>
              <p><strong>Engagement:</strong> {impact.engagement}</p>
              <p><strong>Conversion:</strong> {impact.conversion}</p>
              <p><strong>Medical compliance:</strong> {impact.medicalCompliance}</p>
              <p><strong>Overall quality:</strong> {impact.overallQuality}</p>
            </div>
          ) : <p className="mt-2 text-xs text-slate-400">No impact estimate returned.</p>}
        </div>
      </div>
    </section>
  );
}

function ExactFixCard({ action }) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${action.priority === 'high' ? 'bg-red-100 text-red-700' : action.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{action.priority}</span>
        <p className="text-sm font-bold text-slate-900">{action.title}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-500">{action.issueLocation || 'Content'}</span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-red-100 bg-red-50/70 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-red-700">Problem</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">{action.currentIssue || action.reason}</p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">Copy / add this</p>
          <p className="mt-1 whitespace-pre-line rounded-lg bg-white p-2 text-xs font-medium leading-5 text-slate-800">
            {action.recommendedReplacement || action.exactRecommendation}
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
        <p className="text-[10px] font-bold uppercase tracking-wide text-blue-700">How to use</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">{action.howToUse || action.exactRecommendation}</p>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">{action.reason}</p>
    </div>
  );
}

function ActionColumn({ title, items = [], emptyText, tone }) {
  const tones = {
    red: 'border-red-100 bg-white text-red-700',
    amber: 'border-amber-100 bg-white text-amber-700',
    emerald: 'border-emerald-100 bg-white text-emerald-700',
    blue: 'border-blue-100 bg-white text-blue-700',
    violet: 'border-violet-100 bg-white text-violet-700',
    slate: 'border-slate-100 bg-white text-slate-700'
  };

  return (
    <div className={`rounded-xl border p-3 ${tones[tone] || tones.slate}`}>
      <p className="text-xs font-bold uppercase tracking-wide">{title}</p>
      <div className="mt-2 space-y-2">
        {items.length > 0 ? items.slice(0, 5).map((item, index) => (
          <div key={`${title}-${index}`} className="flex gap-2 text-xs leading-5 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-current" />
            <span>{item}</span>
          </div>
        )) : (
          <p className="text-xs leading-5 text-slate-400">{emptyText}</p>
        )}
      </div>
    </div>
  );
}

function MetricCard({ label, value, color }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-[10px] font-bold uppercase text-slate-400">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${color}`}>{value}<span className="text-xs text-slate-400">{Number.isFinite(value) ? '/100' : ''}</span></p>
    </div>
  );
}

function SearchConsoleModal({ blog, configured, metrics, loading, error, onClose, onRefresh }) {
  const pageUrl = blog.canonicalUrl || `https://manovaidya.org/blog/${blog.slug || ''}`;
  const resourceId = encodeURIComponent('https://manovaidya.org/');
  const inspectUrl = `https://search.google.com/search-console/inspect?resource_id=${resourceId}&id=${encodeURIComponent(pageUrl)}`;

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-4xl">
      <div className="flex items-start justify-between border-b border-slate-200 bg-white p-5">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <BarChart3 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Google Search Console</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{blog.title}</h3>
            <p className="mt-1 text-xs text-slate-500">Exact page performance for the last 28 available days.</p>
          </div>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-slate-700"><X size={20} /></button>
      </div>

      <div className="max-h-[calc(90vh-96px)] overflow-y-auto p-5">
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-900">{configured ? 'Search Console connected' : 'Search Console API credentials pending'}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              {configured ? 'Use this for real indexed page metrics. It is separate from Gemini editorial scoring.' : 'Live Search Console can still be opened. API metrics need Google service account credentials on the backend.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={inspectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
            >
              <ExternalLink className="h-4 w-4" />
              Inspect URL
            </a>
            <button type="button" onClick={onRefresh} disabled={!configured || loading} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500">
              <RefreshCw className="h-4 w-4" />
              {loading ? 'Loading...' : metrics ? 'Refresh metrics' : 'Load metrics'}
            </button>
          </div>
        </div>

        {error && <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">{error}</p>}

        {!configured ? (
          <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-8 text-center">
            <Gauge className="mx-auto h-9 w-9 text-blue-600" />
            <p className="mt-4 text-sm font-bold text-slate-900">API metrics will appear after credentials setup.</p>
            <p className="mt-1 break-all text-xs text-slate-500">Live page: {pageUrl}</p>
            <p className="mt-2 text-xs text-slate-500">Add Google service account credentials in backend env and give that service account access to the manovaidya.org Search Console property.</p>
          </div>
        ) : null}

        {metrics ? (
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-4">
              <MetricTile label="Avg position" value={metrics.position ?? '-'} />
              <MetricTile label="Impressions" value={metrics.impressions} />
              <MetricTile label="Clicks" value={metrics.clicks} />
              <MetricTile label="CTR" value={`${metrics.ctr}%`} />
            </div>
            {!metrics.hasData && <p className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500">No Search Console data found for this exact canonical page in the selected period.</p>}
            {metrics.topQueries?.length > 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Top queries</p>
                <div className="space-y-2">
                  {metrics.topQueries.slice(0, 8).map((item) => (
                    <div key={item.query} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 text-xs">
                      <span className="truncate text-slate-700">{item.query}</span>
                      <span className="shrink-0 font-semibold text-blue-700">#{item.position}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </ModalShell>
  );
}

function MetricTile({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-[10px] uppercase text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
