import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Edit2,
  Image as ImageIcon,
  MapPin,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X
} from 'lucide-react';
import JoditEditor from 'jodit-react';
import api, { getAssetUrl } from '../api/axiosInstance';

const initialFormData = {
  title: '',
  slug: '',
  category: '',
  location: '',
  duration: '',
  image: '',
  imageAlt: '',
  metaTitle: '',
  metaDescription: '',
  focusKeyword: '',
  metaKeywords: '',
  canonicalUrl: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: '',
  robots: 'index,follow',
  schemaMarkup: '',
  summary: '',
  content: '',
  outcomes: [{ text: '' }],
  faq: [],
  sortOrder: 0,
  status: 'published'
};

const makeSlug = (value = '') =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function CaseStudyForm({ caseStudy, onClose, onSave }) {
  const editor = useRef(null);
  const [formData, setFormData] = useState(() => caseStudy
    ? {
      ...initialFormData,
      ...caseStudy,
      outcomes: caseStudy.outcomes?.length ? caseStudy.outcomes : [{ text: '' }],
      faq: caseStudy.faq || []
    }
    : initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);

  const editorConfig = useMemo(() => ({
    readonly: false,
    placeholder: 'Write detailed case study content with headings, images, links, tables, and care notes...',
    height: 420,
    minHeight: 360,
    toolbarAdaptive: false,
    toolbarSticky: false,
    spellcheck: true,
    showCharsCounter: true,
    showWordsCounter: true,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_as_html',
    cleanHTML: {
      allowTags: false,
      denyTags: 'script,style,object,embed,applet',
      removeEventAttributes: true,
      safeJavaScriptLink: true,
      safeLinksTarget: true
    },
    uploader: {
      insertImageAsBase64URI: true
    },
    link: {
      openInNewTabCheckbox: true,
      openInNewTabCheckboxDefaultChecked: true,
      noFollowCheckbox: true
    },
    image: {
      editAlt: true,
      editTitle: true,
      editLink: true,
      editSize: true,
      showPreview: true
    }
  }), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => {
      const next = { ...current, [name]: value };
      if (name === 'title' && !slugTouched) {
        next.slug = makeSlug(value);
      } else if (name === 'slug') {
        next.slug = makeSlug(value);
      }
      return next;
    });
  };

  const handleSlugChange = (event) => {
    setSlugTouched(true);
    handleChange(event);
  };

  const regenerateSlug = () => {
    setSlugTouched(false);
    setFormData((current) => ({ ...current, slug: makeSlug(current.title) }));
  };

  const handleOutcomeChange = (index, value) => {
    setFormData((current) => ({
      ...current,
      outcomes: current.outcomes.map((item, itemIndex) => (
        itemIndex === index ? { ...item, text: value } : item
      ))
    }));
  };

  const addOutcome = () => {
    setFormData((current) => ({
      ...current,
      outcomes: [...current.outcomes, { text: '' }]
    }));
  };

  const removeOutcome = (index) => {
    setFormData((current) => ({
      ...current,
      outcomes: current.outcomes.filter((_, itemIndex) => itemIndex !== index)
    }));
  };

  const handleFaqChange = (index, field, value) => {
    setFormData((current) => ({
      ...current,
      faq: current.faq.map((item, itemIndex) => (
        itemIndex === index ? { ...item, [field]: value } : item
      ))
    }));
  };

  const addFaq = () => {
    setFormData((current) => ({
      ...current,
      faq: [...current.faq, { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index) => {
    setFormData((current) => ({
      ...current,
      faq: current.faq.filter((_, itemIndex) => itemIndex !== index)
    }));
  };

  const generateSchemaMarkup = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          name: formData.metaTitle || formData.title,
          description: formData.metaDescription || formData.summary,
          ...(formData.canonicalUrl ? { url: formData.canonicalUrl } : {}),
          ...(formData.image && /^https?:\/\//i.test(formData.image) ? { image: formData.image } : {})
        },
        ...(formData.faq.length ? [{
          '@type': 'FAQPage',
          mainEntity: formData.faq
            .filter((item) => item.question && item.answer)
            .map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer }
            }))
        }] : [])
      ]
    };

    setFormData((current) => ({ ...current, schemaMarkup: JSON.stringify(schema, null, 2) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const cleanOutcomes = formData.outcomes
        .map((item) => ({ text: item.text.trim() }))
        .filter((item) => item.text);
      const cleanFaq = formData.faq
        .map((item) => ({ question: item.question.trim(), answer: item.answer.trim() }))
        .filter((item) => item.question && item.answer);
      let editorContent = editor.current?.value || formData.content;

      if (formData.schemaMarkup.trim()) {
        try {
          JSON.parse(formData.schemaMarkup);
        } catch {
          throw new Error('Schema markup valid JSON-LD format mein hona chahiye.');
        }
      }

      const defaultAlt = formData.imageAlt?.trim() || formData.title?.trim() || 'Case study image';
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = editorContent;
      const images = tempDiv.getElementsByTagName('img');
      for (let index = 0; index < images.length; index += 1) {
        if (!images[index].getAttribute('alt')?.trim()) {
          images[index].setAttribute('alt', defaultAlt);
        }
      }
      editorContent = tempDiv.innerHTML;

      const submitData = new FormData();
      Object.entries({ ...formData, content: editorContent, outcomes: cleanOutcomes, faq: cleanFaq, imageAlt: defaultAlt }).forEach(([key, value]) => {
        if (key === 'outcomes' || key === 'faq') {
          submitData.append(key, JSON.stringify(value));
        } else if (key !== 'image') {
          submitData.append(key, value ?? '');
        }
      });

      if (imageFile) {
        submitData.append('image', imageFile);
      } else if (typeof formData.image === 'string') {
        submitData.append('image', formData.image);
      }

      const { data } = caseStudy
        ? await api.put(`/case-studies/${caseStudy._id}`, submitData)
        : await api.post('/case-studies', submitData);

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong');
      }

      onSave();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="admin-modal-panel w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-violet-600">
              {caseStudy ? 'Edit case study' : 'New case study'}
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">
              {caseStudy ? caseStudy.title : 'Add Case Study'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="max-h-[78vh] overflow-y-auto p-5">
          {error ? (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Title" required>
              <input name="title" value={formData.title} onChange={handleChange} required className="admin-input" />
            </Field>

            <Field label="Slug" required>
              <div className="flex gap-2">
                <input name="slug" value={formData.slug} onChange={handleSlugChange} required className="admin-input" />
                <button type="button" onClick={regenerateSlug} className="shrink-0 rounded-lg border border-violet-200 bg-white px-3 text-xs font-bold text-violet-700 hover:bg-violet-50">
                  Auto
                </button>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">Title se auto generate hota hai. Manual edit bhi save ho jayega.</p>
            </Field>

            <Field label="Category" required>
              <input name="category" value={formData.category} onChange={handleChange} required placeholder="Autism, ADHD, Speech Delay..." className="admin-input" />
            </Field>

            <Field label="Location">
              <input name="location" value={formData.location} onChange={handleChange} placeholder="Family from Delhi NCR" className="admin-input" />
            </Field>

            <Field label="Duration">
              <input name="duration" value={formData.duration} onChange={handleChange} placeholder="12 weeks" className="admin-input" />
            </Field>

            <Field label="Sort Order">
              <input type="number" name="sortOrder" value={formData.sortOrder} onChange={handleChange} className="admin-input" />
            </Field>

            <Field label="Status">
              <select name="status" value={formData.status} onChange={handleChange} className="admin-input">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </Field>

            <Field label="Case Study Image">
              <input type="file" accept="image/*" onChange={(event) => setImageFile(event.target.files?.[0] || null)} className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100" />
              {!imageFile && formData.image ? (
                <a href={getAssetUrl(formData.image)} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs font-semibold text-violet-700 hover:underline">
                  View current image
                </a>
              ) : null}
            </Field>
          </div>

          <Field label="Short Summary" required>
            <textarea name="summary" value={formData.summary} onChange={handleChange} required rows="3" className="admin-input" />
          </Field>

          <Field label="Detailed Content">
            <div className="rounded-xl border border-slate-200 bg-white">
              <JoditEditor
                ref={editor}
                value={formData.content}
                config={editorConfig}
                tabIndex={1}
                onBlur={(newContent) => setFormData((current) => ({ ...current, content: newContent }))}
                onChange={() => { }}
              />
            </div>
          </Field>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Outcomes</h4>
                <p className="mt-1 text-xs text-slate-500">Add visible progress points shown on the public card.</p>
              </div>
              <button type="button" onClick={addOutcome} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-700">
                <Plus size={15} /> Add
              </button>
            </div>

            <div className="space-y-3">
              {formData.outcomes.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input value={item.text} onChange={(event) => handleOutcomeChange(index, event.target.value)} placeholder="Better response to instructions" className="admin-input" />
                  <button type="button" onClick={() => removeOutcome(index)} className="rounded-lg border border-red-100 bg-white px-3 text-red-600 hover:bg-red-50">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900">FAQs</h4>
                <p className="mt-1 text-xs text-slate-500">Add FAQ questions for case study page SEO and user clarity.</p>
              </div>
              <button type="button" onClick={addFaq} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-700">
                <Plus size={15} /> Add FAQ
              </button>
            </div>

            <div className="space-y-3">
              {formData.faq.map((item, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-start gap-3">
                    <div className="grid flex-1 gap-2">
                      <input value={item.question} onChange={(event) => handleFaqChange(index, 'question', event.target.value)} placeholder="Question" className="admin-input" />
                      <textarea value={item.answer} onChange={(event) => handleFaqChange(index, 'answer', event.target.value)} placeholder="Answer" rows="2" className="admin-input" />
                    </div>
                    <button type="button" onClick={() => removeFaq(index)} className="rounded-lg border border-red-100 bg-white p-2 text-red-600 hover:bg-red-50">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {formData.faq.length === 0 ? (
                <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No FAQs added yet.</p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">SEO & Social Sharing</h4>
                <p className="mt-1 text-xs text-slate-500">Meta title, description, canonical tag, alt tag, robots, Open Graph, Twitter card and JSON-LD.</p>
              </div>
              <button type="button" onClick={generateSchemaMarkup} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-200 bg-white px-3 py-2 text-xs font-semibold text-violet-700 hover:bg-violet-100">
                <Sparkles size={15} /> Generate JSON-LD
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Meta Title">
                <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} maxLength="60" placeholder="Recommended: 50-60 characters" className="admin-input" />
                <p className={`mt-1 text-right text-[11px] ${formData.metaTitle.length > 60 ? 'text-red-600' : 'text-slate-400'}`}>{formData.metaTitle.length}/60</p>
              </Field>

              <Field label="Focus Keyword">
                <input type="text" name="focusKeyword" value={formData.focusKeyword} onChange={handleChange} placeholder="Main keyword" className="admin-input" />
              </Field>

              <div className="md:col-span-2">
                <Field label="Meta Description">
                  <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} maxLength="160" rows="3" placeholder="Recommended: 140-160 characters" className="admin-input" />
                  <p className={`mt-1 text-right text-[11px] ${formData.metaDescription.length > 160 ? 'text-red-600' : 'text-slate-400'}`}>{formData.metaDescription.length}/160</p>
                </Field>
              </div>

              <Field label="Canonical URL">
                <input type="url" name="canonicalUrl" value={formData.canonicalUrl} onChange={handleChange} placeholder="https://website.com/case-studies/slug" className="admin-input" />
              </Field>

              <Field label="Robots">
                <select name="robots" value={formData.robots} onChange={handleChange} className="admin-input">
                  <option value="index,follow">Index, Follow</option>
                  <option value="index,nofollow">Index, No Follow</option>
                  <option value="noindex,follow">No Index, Follow</option>
                  <option value="noindex,nofollow">No Index, No Follow</option>
                </select>
              </Field>

              <Field label="Meta Keywords">
                <input type="text" name="metaKeywords" value={formData.metaKeywords} onChange={handleChange} placeholder="keyword one, keyword two" className="admin-input" />
              </Field>

              <Field label="Image Alt Tag">
                <input type="text" name="imageAlt" value={formData.imageAlt} onChange={handleChange} placeholder="Describe the cover image" className="admin-input" />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h5 className="mb-3 text-sm font-semibold text-slate-800">Open Graph</h5>
                <div className="space-y-3">
                  <input type="text" name="ogTitle" value={formData.ogTitle} onChange={handleChange} placeholder="OG title" className="admin-input" />
                  <textarea name="ogDescription" value={formData.ogDescription} onChange={handleChange} rows="2" placeholder="OG description" className="admin-input" />
                  <input type="url" name="ogImage" value={formData.ogImage} onChange={handleChange} placeholder="OG image URL" className="admin-input" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h5 className="mb-3 text-sm font-semibold text-slate-800">Twitter / X Card</h5>
                <div className="space-y-3">
                  <input type="text" name="twitterTitle" value={formData.twitterTitle} onChange={handleChange} placeholder="Twitter title" className="admin-input" />
                  <textarea name="twitterDescription" value={formData.twitterDescription} onChange={handleChange} rows="2" placeholder="Twitter description" className="admin-input" />
                  <input type="url" name="twitterImage" value={formData.twitterImage} onChange={handleChange} placeholder="Twitter image URL" className="admin-input" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700"><Code2 size={16} /> Schema Markup (JSON-LD)</label>
              <textarea name="schemaMarkup" value={formData.schemaMarkup} onChange={handleChange} rows="9" spellCheck="false" placeholder='{"@context":"https://schema.org"}' className="block w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-xs leading-5 text-emerald-300 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
              <p className="mt-1 text-[11px] text-slate-500">Save karte waqt JSON validity check hogi.</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button type="button" onClick={onClose} className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="rounded-xl bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-800 disabled:cursor-not-allowed disabled:bg-violet-300">
              {loading ? 'Saving...' : 'Save Case Study'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="mt-4 block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function CaseStudyManagement() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await api.get('/case-studies');
      if (!data.success) throw new Error(data.message || 'Failed to fetch case studies');
      setCaseStudies(data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchCaseStudies();
  }, []);

  const filteredCaseStudies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return caseStudies.filter((item) => {
      const matchesQuery = !query || [item.title, item.category, item.location].some((value) => value?.toLowerCase().includes(query));
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [caseStudies, searchQuery, statusFilter]);

  const publishedCount = caseStudies.filter((item) => item.status === 'published').length;

  const handleAdd = () => {
    setSelectedCaseStudy(null);
    setIsFormOpen(true);
  };

  const handleEdit = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsFormOpen(true);
  };

  const handleDelete = async (caseStudy) => {
    if (!window.confirm(`Delete "${caseStudy.title}"?`)) return;

    try {
      const { data } = await api.delete(`/case-studies/${caseStudy._id}`);
      if (!data.success) throw new Error(data.message || 'Failed to delete case study');
      setCaseStudies((current) => current.filter((item) => item._id !== caseStudy._id));
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleSave = () => {
    setIsFormOpen(false);
    setSelectedCaseStudy(null);
    void fetchCaseStudies();
  };

  if (loading && caseStudies.length === 0) {
    return (
      <div className="p-6">
        <div className="h-20 animate-pulse rounded-2xl bg-slate-100" />
        <div className="mt-6 h-96 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-none p-3 md:p-5 lg:p-6">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-200">
            <BriefcaseBusiness size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Case Studies</h1>
            <p className="mt-1 text-sm text-slate-500">Create and manage public case study cards for the website.</p>
          </div>
        </div>

        <button onClick={handleAdd} className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800">
          <Plus size={18} /> Add Case Study
        </button>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <StatCard label="Total case studies" value={caseStudies.length} Icon={BriefcaseBusiness} />
        <StatCard label="Published" value={publishedCount} Icon={CheckCircle2} />
        <StatCard label="Drafts" value={caseStudies.length - publishedCount} Icon={BarChart3} />
      </div>

      {error ? (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} /> {error}
        </div>
      ) : null}

      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search by title, category, location..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100" />
        </div>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100">
          <option value="all">All status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4">Case Study</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Sort</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCaseStudies.map((item) => (
                <tr key={item._id} className="align-top hover:bg-slate-50/70">
                  <td className="px-5 py-4">
                    <div className="flex gap-3">
                      <div className="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                        {item.image ? (
                          <img src={getAssetUrl(item.image)} alt={item.imageAlt || item.title} className="h-full w-full object-cover" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900">{item.title}</p>
                        <p className="mt-1 line-clamp-2 max-w-md text-xs leading-5 text-slate-500">{item.summary}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">{item.category}</span>
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" /> {item.location || '-'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-500">{item.sortOrder ?? 0}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(item)} className="rounded-lg border border-blue-100 bg-blue-50 p-2 text-blue-700 hover:bg-blue-100" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(item)} className="rounded-lg border border-red-100 bg-red-50 p-2 text-red-700 hover:bg-red-100" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCaseStudies.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-5 py-12 text-center text-sm text-slate-500">
                    No case studies found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      {isFormOpen ? (
        <CaseStudyForm
          caseStudy={selectedCaseStudy}
          onClose={() => setIsFormOpen(false)}
          onSave={handleSave}
        />
      ) : null}
    </div>
  );
}

function StatCard({ label, value, Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
        <span className="rounded-lg bg-violet-50 p-1.5 text-violet-700"><Icon size={16} /></span>
      </div>
      <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
