import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Clock, User, Calendar, Share2, Bookmark,
  Link2, ChevronDown, ChevronUp, Sparkles, BookOpen, AlertCircle
} from 'lucide-react';
import BookConsultationButton from '../components/BookConsultationButton';

// Custom SVG Icons for Socials to avoid lucide-react version issues
const FacebookIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const LinkedinIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MessageCircleIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
import api, { getAssetUrl } from '../api/axiosInstance';

const TableOfContents = ({ toc, activeId }) => {
  if (!toc || toc.length === 0) return null;
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 font-serif">
        <BookOpen size={24} className="text-[#0F766E]" />
        Table of Contents
      </h3>
      <nav className="relative flex flex-col gap-6 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
        {toc.map((heading, idx) => (
          <a
            key={idx}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative pl-8 text-[15px] leading-snug transition-colors duration-300 ${activeId === heading.id
              ? 'font-bold text-[#0F766E]'
              : 'font-medium text-slate-500 hover:text-slate-800'
              } ${heading.level === 'h3' ? 'ml-6' : ''}`}
          >
            <span className={`absolute left-0 top-1 h-5 w-5 rounded-full border-[2.5px] bg-white transition-colors ${activeId === heading.id ? 'border-[#0F766E]' : 'border-slate-200'
              }`} />
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const contentRef = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blogs/slug/${slug}`);
        if (data.success) {
          setBlog(data.data);

          // Full SEO: Update page title, meta description, keywords, canonical, and OG tags
          document.title = data.data.metaTitle || data.data.title || 'Blog Details - Manovaidya';
          
          const setMetaTag = (name, content, isProperty = false) => {
            if (!content) return;
            const attr = isProperty ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attr}="${name}"]`);
            if (!tag) {
              tag = document.createElement('meta');
              tag.setAttribute(attr, name);
              document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
          };

          setMetaTag('description', data.data.metaDescription || data.data.shortDescription);
          setMetaTag('keywords', data.data.metaKeywords || data.data.focusKeyword);
          setMetaTag('robots', data.data.robots || 'index,follow');
          
          // Open Graph (Social Sharing SEO)
          setMetaTag('og:title', data.data.ogTitle || data.data.metaTitle || data.data.title, true);
          setMetaTag('og:description', data.data.ogDescription || data.data.metaDescription || data.data.shortDescription, true);
          setMetaTag('og:url', window.location.href, true);
          setMetaTag('og:type', 'article', true);
          const ogImg = data.data.ogImage || data.data.image;
          if (ogImg) setMetaTag('og:image', getAssetUrl(ogImg), true);

          // Twitter SEO
          setMetaTag('twitter:card', 'summary_large_image');
          setMetaTag('twitter:title', data.data.twitterTitle || data.data.ogTitle || data.data.metaTitle || data.data.title);
          setMetaTag('twitter:description', data.data.twitterDescription || data.data.ogDescription || data.data.metaDescription || data.data.shortDescription);
          const twImg = data.data.twitterImage || ogImg;
          if (twImg) setMetaTag('twitter:image', getAssetUrl(twImg));

          // Canonical URL
          let canonicalLink = document.querySelector('link[rel="canonical"]');
          if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = "canonical";
            document.head.appendChild(canonicalLink);
          }
          canonicalLink.setAttribute("href", data.data.canonicalUrl || window.location.href);

          // Schema Markup (JSON-LD)
          if (data.data.schemaMarkup) {
            let script = document.querySelector('script[type="application/ld+json"]');
            if (!script) {
              script = document.createElement('script');
              script.type = "application/ld+json";
              document.head.appendChild(script);
            }
            script.textContent = data.data.schemaMarkup;
          }

          // Fetch related blogs (mocking by just fetching latest 3 from same category if possible, else just 3 latest)
          const relatedRes = await api.get(`/blogs`);
          if (relatedRes.data.success) {
            setRelatedBlogs(relatedRes.data.data.filter(b => b.slug !== slug).slice(0, 3));
          }
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch blog details');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  // Process HTML for TOC and styling
  const processedContent = useMemo(() => {
    if (!blog?.content) return '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, 'text/html');

    // Remove inline background colors (often caused by copy-pasting into the editor)
    const allElements = doc.querySelectorAll('*');
    allElements.forEach(el => {
      if (el.style && (el.style.backgroundColor === 'white' || el.style.backgroundColor === '#ffffff' || el.style.backgroundColor === 'rgb(255, 255, 255)' || el.style.backgroundColor)) {
        el.style.backgroundColor = 'transparent';
      }
    });

    const headings = doc.querySelectorAll('h2, h3');
    const newToc = [];

    headings.forEach((h) => {
      const id = h.textContent.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '');
      h.id = id;
      newToc.push({ id, text: h.textContent, level: h.tagName.toLowerCase() });
    });

    setToc(newToc);
    return doc.body.innerHTML;
  }, [blog?.content]);

  // TOC active state tracking
  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      // Find the current active heading based on scroll position
      const headingElements = toc.map(h => document.getElementById(h.id)).filter(Boolean);

      // Add offset to trigger highlight when heading is near the top of the viewport
      const scrollPosition = window.scrollY + 200;

      let currentId = toc[0]?.id || '';
      for (const el of headingElements) {
        if (el.offsetTop <= scrollPosition) {
          currentId = el.id;
        } else {
          break; // Since headings are in order, we can break early
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-16 w-16 rounded-full border-4 border-teal-600 border-t-transparent animate-spin"
        />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC] px-4 text-center">
        <AlertCircle size={48} className="mb-4 text-red-500" />
        <h2 className="mb-6 text-3xl font-bold text-slate-800">{error || 'Blog not found'}</h2>
        <Link to="/blog" className="rounded-full bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-800 hover:shadow-lg">
          Explore All Articles
        </Link>
      </div>
    );
  }

  const readTime = Math.ceil((blog.content?.length || 1000) / 1000);
  const publishDate = new Date(blog.createdAt || blog.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(blog.title + " " + window.location.href)}`
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24 ">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-10">
          <nav className="flex items-center text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <span className="mx-3 text-slate-300">{'>'}</span>
            <Link to="/blog" className="hover:text-teal-700">Blog</Link>
            <span className="mx-3 text-slate-300">{'>'}</span>
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-md">{blog.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full  px-4 sm:px-6 lg:px-10">
        {/* Hero Section (2-Column) */}
        <div className="mb-12 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <header className="flex-1 lg:max-w-[50%]">
            {blog.category && (
              <span className="mb-4 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#0F766E]">
                {blog.category}
              </span>
            )}
            <h1 className="mb-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl md:text-[42px] lg:text-[52px]">
              {blog.title}
            </h1>

            {blog.shortDescription && (
              <p className="mb-8 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                {blog.shortDescription}
              </p>
            )}

            {/* Author Info */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E0FCF6] text-xl font-bold text-[#0F766E]">
                {blog.authorName?.charAt(0) || 'D'}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500">
                  By <span className="font-bold text-[#0F766E]">{blog.authorName || 'dr Ankush Garg'}</span>
                </div>
                <div className="text-xs font-medium text-slate-500">
                  Autism, ADHD & Child Development Specialist
                </div>
              </div>
            </div>

            {/* Meta Stats Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 sm:gap-5">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-slate-400" /> {publishDate}
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-slate-400" /> {readTime} min read
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-1.5">
                <User size={16} className="text-slate-400" /> {blog.views || 0} views
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-300"></div>
              <button className="flex items-center gap-1.5 text-slate-500 transition hover:text-[#0F766E]">
                <Bookmark size={16} /> Save Article
              </button>
            </div>
          </header>

          {/* Hero Image */}
          {blog.image && (
            <motion.figure
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full lg:w-[45%] shrink-0 overflow-hidden rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <img
                src={getAssetUrl(blog.image)}
                alt={blog.imageAlt || blog.title}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
            </motion.figure>
          )}
        </div>
      </div>

      <div className="mx-auto grid w-full  gap-16 px-4 sm:px-6 lg:px-10 xl:grid-cols-[1fr_320px]">

        {/* LEFT COLUMN: Main Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          {/* Rich Text Content */}
          <div
            ref={contentRef}
            className="prose-blog text-slate-700 text-[17px] leading-[1.85] 
              [&>p]:mb-6 
              [&>h2]:text-[32px] [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h2]:scroll-mt-24
              [&>h3]:text-[24px] [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:scroll-mt-24
              [&>ul]:my-8 [&>ul]:list-none [&>ul]:space-y-3 [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-2 [&>ul>li::before]:h-2 [&>ul>li::before]:w-2 [&>ul>li::before]:rounded-full [&>ul>li::before]:bg-teal-600
              [&>ol]:my-8 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-3 [&>ol>li::marker]:font-bold [&>ol>li::marker]:text-teal-700
              [&>a]:text-[#0F766E] [&>a]:font-bold [&>a]:underline [&>a]:decoration-2 [&>a]:underline-offset-4 [&>a:hover]:text-[#14B8A6]
              [&>img]:rounded-[20px] [&>img]:my-12 [&>img]:w-full [&>img]:shadow-md
              [&>blockquote]:my-10 [&>blockquote]:rounded-r-2xl [&>blockquote]:border-l-4 [&>blockquote]:border-teal-600 [&>blockquote]:bg-teal-50 [&>blockquote]:py-6 [&>blockquote]:px-8 [&>blockquote]:text-xl [&>blockquote]:font-medium [&>blockquote]:italic [&>blockquote]:text-teal-900
              [&>iframe]:w-full [&>iframe]:rounded-[20px] [&>iframe]:shadow-lg [&>iframe]:my-10"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* FAQ Accordion */}
          {blog.faq && blog.faq.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-[32px] font-extrabold tracking-tight text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {blog.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-bold text-slate-900">{item.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="shrink-0 text-teal-600" />
                      ) : (
                        <ChevronDown className="shrink-0 text-slate-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 text-slate-600 leading-relaxed"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {blog.metaKeywords && (
            <div className="mt-12 flex flex-wrap gap-2 pt-8 border-t border-slate-200">
              {blog.metaKeywords.split(',').filter(k => k.trim()).map((tag, idx) => (
                <span key={idx} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-200 hover:text-slate-900">
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}
        </motion.article>

        {/* RIGHT COLUMN: Sticky Sidebar */}
        <aside className="relative h-full">
          <div className="sticky top-8 flex max-h-[calc(100vh-4rem)] flex-col gap-8 overflow-y-auto overflow-x-hidden pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* Share Widget */}
            <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="mb-6 text-[13px] font-extrabold uppercase tracking-widest text-slate-500">SHARE THIS ARTICLE</h3>
              <div className="flex flex-wrap gap-4">
                <a href={shareLinks.facebook} target="_blank" rel="noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:-translate-y-1 hover:shadow-lg"><FacebookIcon size={20} /></a>
                <a href={shareLinks.twitter} target="_blank" rel="noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#00B2FF] text-white transition hover:-translate-y-1 hover:shadow-lg"><TwitterIcon size={20} /></a>
                <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:-translate-y-1 hover:shadow-lg"><LinkedinIcon size={20} /></a>
                <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#12C85D] text-white transition hover:-translate-y-1 hover:shadow-lg"><MessageCircleIcon size={20} /></a>
                <button onClick={copyLink} className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F3F4F6] text-[#4B5563] transition hover:-translate-y-1 hover:shadow-lg hover:bg-[#E5E7EB]"><Link2 size={20} /></button>
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents toc={toc} activeId={activeId} />

            {/* Author Mini Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-800 shrink-0">
                  {blog.authorName?.charAt(0) || 'M'}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{blog.authorName || 'Dr. Ankush Garg'}</h4>
                  <p className="text-xs font-semibold text-teal-600">Specialist</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Expert in holistic wellness and evidence-based healing. Committed to providing long-term structural solutions for a healthier life.
              </p>
              <button className="text-sm font-bold text-teal-700 border border-teal-200 rounded-xl px-4 py-2 w-full transition hover:bg-teal-50">
                Know More
              </button>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] p-8 text-white shadow-lg">
              <Sparkles className="mb-4 h-8 w-8 text-teal-200" />
              <h3 className="mb-3 text-xl font-bold leading-tight">Need Personalized Guidance?</h3>
              <p className="mb-6 text-sm text-teal-50 font-medium leading-relaxed">
                Book a 1:1 consultation with our experts and get a customized plan for your well-being.
              </p>
              <BookConsultationButton className="inline-block w-full text-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0F766E] transition hover:bg-teal-50 hover:shadow-md">
                Book Consultation →
              </BookConsultationButton>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-bold text-slate-900">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map(post => (
                    <Link key={post._id} to={`/blog/${post.slug}`} className="group flex gap-4">
                      <img src={getAssetUrl(post.image)} alt="" className="h-16 w-16 rounded-xl object-cover transition group-hover:opacity-80" />
                      <div className="min-w-0">
                        <h4 className="line-clamp-2 text-sm font-bold text-slate-800 transition group-hover:text-teal-700 leading-snug">
                          {post.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-slate-500">{Math.ceil((post.content?.length || 1000) / 1000)} min read</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/blog" className="mt-6 inline-block text-sm font-bold text-teal-700 hover:underline">
                  View All Articles →
                </Link>
              </div>
            )}

          </div>
        </aside>

      </div>
    </main>
  );
}
