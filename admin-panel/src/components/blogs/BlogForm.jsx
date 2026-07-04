import { useMemo, useRef, useState } from 'react';
import { Code2, ImagePlus, Link2, Plus, Sparkles, Trash2, Video, X } from 'lucide-react';
import JoditEditor from 'jodit-react';
import api, { getAssetUrl } from '../../api/axiosInstance';

const initialFormData = {
  title: '',
  slug: '',
  category: '',
  image: '',
  shortDescription: '',
  content: '',
  authorName: '',
  status: 'published',
  faq: [],
  metaTitle: '',
  metaDescription: '',
  focusKeyword: '',
  metaKeywords: '',
  canonicalUrl: '',
  imageAlt: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: '',
  robots: 'index,follow',
  schemaMarkup: ''
};

const youtubeEmbedExample = '<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" allowfullscreen></iframe>';

const escapeHtml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const getYouTubeVideoId = (value = '') => {
  const match = value.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
  return match?.[1] || null;
};

const isSafeUrl = (value = '') => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
};

export default function BlogForm({ blog, onClose, onSave }) {
  const editor = useRef(null);
  const [formData, setFormData] = useState(() => blog
    ? { ...initialFormData, ...blog, faq: blog.faq || [] }
    : initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [youtubeInput, setYoutubeInput] = useState('');
  const [linkedImage, setLinkedImage] = useState({ imageUrl: '', linkUrl: '', alt: '', newTab: true });
  const [editorNotice, setEditorNotice] = useState(null);

  const editorConfig = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing your blog content... Use headings, images, links, tables and videos.',
    height: 500,
    minHeight: 420,
    toolbarAdaptive: false,
    toolbarSticky: false,
    spellcheck: true,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: true,
    beautifyHTML: true,
    sourceEditor: 'area',
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_as_html',
    defaultActionOnPasteFromWord: 'insert_clear_html',
    processPasteHTML: true,
    enableDragAndDropFileToEditor: true,
    uploader: {
      insertImageAsBase64URI: true
    },
    link: {
      processVideoLink: true,
      processPastedLink: true,
      noFollowCheckbox: true,
      openInNewTabCheckbox: true,
      openInNewTabCheckboxDefaultChecked: true,
      ariaLabelInput: true
    },
    image: {
      openOnDblClick: true,
      editSrc: true,
      editTitle: true,
      editAlt: true,
      editLink: true,
      editSize: true,
      editMargins: true,
      editBorderRadius: true,
      editAlign: true,
      showPreview: true,
      useImageEditor: true
    },
    video: {
      defaultWidth: 800,
      defaultHeight: 450
    },
    allowResizeTags: new Set(['img', 'iframe', 'table']),
    mediaInFakeBlock: false,
    cleanHTML: {
      allowTags: false,
      denyTags: 'script,style,object,embed,applet',
      fillEmptyParagraph: false,
      removeEmptyElements: false,
      removeEventAttributes: true,
      safeJavaScriptLink: true,
      safeLinksTarget: true,
      sandboxIframesInContent: false,
      useIframeSandbox: false
    }
  }), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const nextData = { ...prev, [name]: value };
      if (name === 'title' && !blog && !prev.slug) {
        nextData.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      }
      return nextData;
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const insertHtmlIntoEditor = (html) => {
    if (editor.current?.s) {
      editor.current.s.focus();
      editor.current.s.insertHTML(html);
      handleContentChange(editor.current.value);
    } else {
      handleContentChange(`${formData.content}${html}`);
    }
  };

  const insertYouTubeVideo = () => {
    const videoId = getYouTubeVideoId(youtubeInput.trim());
    if (!videoId) {
      setEditorNotice({ type: 'error', text: 'Valid YouTube URL ya iframe embed code paste karein.' });
      return;
    }

    const embedHtml = `<div class="youtube-video" style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;margin:24px 0;border-radius:12px;"><iframe src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p><br></p>`;
    insertHtmlIntoEditor(embedHtml);
    setYoutubeInput('');
    setEditorNotice({ type: 'success', text: 'YouTube video content mein insert ho gaya.' });
  };

  const insertLinkedImage = () => {
    if (!isSafeUrl(linkedImage.imageUrl) || !isSafeUrl(linkedImage.linkUrl)) {
      setEditorNotice({ type: 'error', text: 'Image URL aur destination link dono valid http/https URL hone chahiye.' });
      return;
    }

    const target = linkedImage.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    const imageHtml = `<p><a href="${escapeHtml(linkedImage.linkUrl)}"${target}><img src="${escapeHtml(linkedImage.imageUrl)}" alt="${escapeHtml(linkedImage.alt || formData.title)}" style="max-width:100%;height:auto;border-radius:12px;" /></a></p><p><br></p>`;
    insertHtmlIntoEditor(imageHtml);
    setLinkedImage({ imageUrl: '', linkUrl: '', alt: '', newTab: true });
    setEditorNotice({ type: 'success', text: 'Clickable image content mein insert ho gayi.' });
  };

  const generateSchemaMarkup = () => {
    const articleSchema = {
      '@type': 'BlogPosting',
      headline: formData.metaTitle || formData.title,
      description: formData.metaDescription || formData.shortDescription,
      author: { '@type': 'Person', name: formData.authorName },
      datePublished: blog?.createdAt || new Date().toISOString(),
      dateModified: new Date().toISOString(),
      ...(formData.canonicalUrl ? { mainEntityOfPage: { '@type': 'WebPage', '@id': formData.canonicalUrl } } : {}),
      ...(formData.image && /^https?:\/\//i.test(formData.image) ? { image: formData.image } : {})
    };
    const graph = [articleSchema];
    if (formData.faq.length) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: formData.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      });
    }
    const schema = { '@context': 'https://schema.org', '@graph': graph };
    setFormData(prev => ({ ...prev, schemaMarkup: JSON.stringify(schema, null, 2) }));
  };

  const handleFaqChange = (index, field, value) => {
    const newFaq = [...formData.faq];
    newFaq[index][field] = value;
    setFormData(prev => ({ ...prev, faq: newFaq }));
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faq: [...prev.faq, { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index) => {
    setFormData(prev => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let editorContent = editor.current?.value || formData.content;
      if (!editorContent.trim()) throw new Error('Blog content is required.');

      // Enforce alt tags for all images in the editor content
      const defaultAlt = formData.imageAlt?.trim() || formData.title?.trim() || 'Blog Image';
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = editorContent;
      const images = tempDiv.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        if (!images[i].getAttribute('alt') || images[i].getAttribute('alt').trim() === '') {
          images[i].setAttribute('alt', defaultAlt);
        }
      }
      editorContent = tempDiv.innerHTML;

      // Automatically set the main imageAlt if not provided
      if (!formData.imageAlt || formData.imageAlt.trim() === '') {
        formData.imageAlt = defaultAlt;
      }

      if (formData.schemaMarkup.trim()) {
        try {
          JSON.parse(formData.schemaMarkup);
        } catch {
          throw new Error('Schema markup valid JSON-LD format mein hona chahiye.');
        }
      }

      const dataToSubmit = { ...formData, content: editorContent };
      const submitData = new FormData();
      Object.keys(dataToSubmit).forEach(key => {
        if (key === 'faq') {
          submitData.append(key, JSON.stringify(dataToSubmit[key]));
        } else if (key !== 'image') {
          submitData.append(key, dataToSubmit[key]);
        }
      });

      if (imageFile) {
        submitData.append('image', imageFile);
      } else if (typeof formData.image === 'string') {
        submitData.append('image', formData.image);
      }

      const { data } = blog
        ? await api.put(`/blogs/${blog._id}`, submitData)
        : await api.post('/blogs', submitData);

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong');
      }

      onSave(data.data || data); // pass back saved blog
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 p-4">
      <div className="relative w-full max-w-4xl rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b p-4 md:p-5">
          <h3 className="text-xl font-semibold text-slate-800">
            {blog ? 'Edit Blog' : 'Add New Blog'}
          </h3>
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-slate-400 hover:bg-slate-200 hover:text-slate-900"
          >
            <X size={24} />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-4 md:p-5">
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Title <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="Leave empty to auto-generate"
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Author Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Blog Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-blue-700 hover:file:bg-blue-100"
                />
                {!imageFile && formData.image && (
                  <p className="mt-2 text-xs text-slate-500">
                    Current image: <a href={getAssetUrl(formData.image)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View</a>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">Short Description</label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="2"
                className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="pb-12">
              <label className="mb-2 block text-sm font-medium text-slate-900">Content <span className="text-red-500">*</span></label>
              <JoditEditor
                ref={editor}
                value={formData.content}
                config={editorConfig}
                tabIndex={1}
                onBlur={newContent => handleContentChange(newContent)}
                onChange={() => { }}
              />

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-violet-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Editor content tools</h4>
                    <p className="text-xs text-slate-500">Video aur linked image ko safely content mein insert karein.</p>
                  </div>
                </div>

                {editorNotice && (
                  <div className={`mb-4 rounded-lg px-3 py-2 text-xs font-medium ${editorNotice.type === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {editorNotice.text}
                  </div>
                )}

                <div className="grid gap-4 xl:grid-cols-2">
                  <div className="rounded-xl border border-red-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Video size={19} className="text-red-600" /> YouTube video
                    </div>
                    <textarea
                      value={youtubeInput}
                      onChange={(event) => setYoutubeInput(event.target.value)}
                      rows="3"
                      placeholder="YouTube URL ya iframe embed code paste karein"
                      className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-xs text-slate-800 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    />
                    <div className="mt-2 rounded-lg bg-slate-900 p-2.5 font-mono text-[10px] leading-4 text-slate-300">
                      {youtubeEmbedExample}
                    </div>
                    <p className="mt-2 text-[11px] leading-4 text-slate-500">YouTube → Share → Embed se code copy karein, ya normal watch/shorts URL paste karein.</p>
                    <button type="button" onClick={insertYouTubeVideo} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700">
                      <Code2 size={15} /> Insert video
                    </button>
                  </div>

                  <div className="rounded-xl border border-violet-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <ImagePlus size={19} className="text-violet-600" /> Clickable image
                    </div>
                    <div className="space-y-2">
                      <input type="url" value={linkedImage.imageUrl} onChange={(event) => setLinkedImage(prev => ({ ...prev, imageUrl: event.target.value }))} placeholder="Image URL (https://...)" className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-xs outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" />
                      <input type="url" value={linkedImage.linkUrl} onChange={(event) => setLinkedImage(prev => ({ ...prev, linkUrl: event.target.value }))} placeholder="Click destination URL (https://...)" className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-xs outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" />
                      <input type="text" value={linkedImage.alt} onChange={(event) => setLinkedImage(prev => ({ ...prev, alt: event.target.value }))} placeholder="Image alt text (SEO + accessibility)" className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-xs outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" />
                      <label className="flex items-center gap-2 text-[11px] text-slate-600"><input type="checkbox" checked={linkedImage.newTab} onChange={(event) => setLinkedImage(prev => ({ ...prev, newTab: event.target.checked }))} className="accent-violet-600" /> Link new tab mein khole</label>
                    </div>
                    <button type="button" onClick={insertLinkedImage} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700">
                      <Link2 size={15} /> Insert linked image
                    </button>
                    <p className="mt-2 text-[11px] leading-4 text-slate-500">Editor ki existing image ko double-click karke bhi Link, Alt, Size aur Alignment edit kar sakte hain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">SEO & Social Sharing</h4>
                  <p className="mt-1 text-xs text-slate-500">Google metadata, canonical, Open Graph, Twitter Card aur JSON-LD configure karein.</p>
                </div>
                <button type="button" onClick={generateSchemaMarkup} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-200 bg-white px-3 py-2 text-xs font-semibold text-violet-700 hover:bg-violet-100">
                  <Sparkles size={15} /> Generate JSON-LD
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Meta Title</label>
                  <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} maxLength="60" placeholder="Recommended: 50–60 characters" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                  <p className={`mt-1 text-right text-[11px] ${formData.metaTitle.length > 60 ? 'text-red-600' : 'text-slate-400'}`}>{formData.metaTitle.length}/60</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Focus Keyword</label>
                  <input type="text" name="focusKeyword" value={formData.focusKeyword} onChange={handleChange} placeholder="Main keyword for this article" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Meta Description</label>
                  <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} maxLength="160" rows="3" placeholder="Recommended: 140–160 characters" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                  <p className={`mt-1 text-right text-[11px] ${formData.metaDescription.length > 160 ? 'text-red-600' : 'text-slate-400'}`}>{formData.metaDescription.length}/160</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Canonical URL</label>
                  <input type="url" name="canonicalUrl" value={formData.canonicalUrl} onChange={handleChange} placeholder="https://website.com/blog/slug" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Robots</label>
                  <select name="robots" value={formData.robots} onChange={handleChange} className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    <option value="index,follow">Index, Follow</option>
                    <option value="index,nofollow">Index, No Follow</option>
                    <option value="noindex,follow">No Index, Follow</option>
                    <option value="noindex,nofollow">No Index, No Follow</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Meta Keywords</label>
                  <input type="text" name="metaKeywords" value={formData.metaKeywords} onChange={handleChange} placeholder="keyword one, keyword two" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Main Image Alt Text</label>
                  <input type="text" name="imageAlt" value={formData.imageAlt} onChange={handleChange} placeholder="Describe the cover image" className="block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h5 className="mb-3 text-sm font-semibold text-slate-800">Open Graph (Facebook / LinkedIn)</h5>
                  <div className="space-y-3">
                    <input type="text" name="ogTitle" value={formData.ogTitle} onChange={handleChange} placeholder="OG title (defaults to meta title)" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                    <textarea name="ogDescription" value={formData.ogDescription} onChange={handleChange} rows="2" placeholder="OG description" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                    <input type="url" name="ogImage" value={formData.ogImage} onChange={handleChange} placeholder="OG image URL (1200 × 630 recommended)" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h5 className="mb-3 text-sm font-semibold text-slate-800">Twitter / X Card</h5>
                  <div className="space-y-3">
                    <input type="text" name="twitterTitle" value={formData.twitterTitle} onChange={handleChange} placeholder="Twitter title" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                    <textarea name="twitterDescription" value={formData.twitterDescription} onChange={handleChange} rows="2" placeholder="Twitter description" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                    <input type="url" name="twitterImage" value={formData.twitterImage} onChange={handleChange} placeholder="Twitter image URL" className="block w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-violet-500" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700"><Code2 size={16} /> Schema Markup (JSON-LD)</label>
                <textarea name="schemaMarkup" value={formData.schemaMarkup} onChange={handleChange} rows="9" spellCheck="false" placeholder='{"@context":"https://schema.org","@type":"BlogPosting"}' className="block w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-xs leading-5 text-emerald-300 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
                <p className="mt-1 text-[11px] text-slate-500">Save karte waqt JSON validity automatically check hogi.</p>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="mt-6 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-medium text-slate-800">FAQs</h4>
                <button
                  type="button"
                  onClick={addFaq}
                  className="flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-700"
                >
                  <Plus size={16} /> Add FAQ
                </button>
              </div>

              {formData.faq.map((item, index) => (
                <div key={index} className="relative mb-4 rounded-lg border border-slate-200 p-4">
                  <button
                    type="button"
                    onClick={() => removeFaq(index)}
                    className="absolute right-2 top-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="space-y-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Question</label>
                      <input
                        type="text"
                        value={item.question}
                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                        required
                        className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Answer</label>
                      <textarea
                        value={item.answer}
                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                        required
                        rows="2"
                        className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {formData.faq.length === 0 && (
                <p className="text-sm text-slate-500">No FAQs added yet.</p>
              )}
            </div>

            <div className="flex items-center justify-end space-x-3 border-t pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
