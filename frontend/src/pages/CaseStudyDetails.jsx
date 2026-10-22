import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarCheck, CheckCircle2, Clock3, MapPin, PhoneCall, Sparkles } from "lucide-react";
import api, { getAssetUrl } from "../api/axiosInstance";
import NewsletterSection from "../blog/NewsletterSection";
import Seo from "../components/Seo";
import { usePrerenderData } from "../prerenderData";
import { normalizeArticleLinks } from "../utils/articleLinks";
import { isPublicCaseStudy } from "../utils/publicContent";
import { getArticleSchema } from "../utils/articleSchema";
import NotFoundPage from './NotFoundPage';

function CaseStudyDetails() {
  const { slug } = useParams();
  const prerenderData = usePrerenderData();
  const initialStudy = prerenderData.caseStudiesBySlug?.[slug] || null;
  const [study, setStudy] = useState(initialStudy);
  const [loading, setLoading] = useState(!initialStudy);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(prerenderData.httpStatus === 404 && prerenderData.notFoundPath?.replace(/\/+$/, '') === `/case-studies/${slug}`);

  useEffect(() => {
    if (initialStudy || notFound) return;
    let isMounted = true;

    const fetchCaseStudy = async () => {
      try {
        if (!initialStudy) setLoading(true);
        const { data } = await api.get(`/case-studies/slug/${slug}`);
        if (!data.success || data.data?.slug !== slug || !isPublicCaseStudy(data.data)) {
          if (isMounted) setNotFound(true);
          throw new Error("Case study not found.");
        }
        if (isMounted) {
          setStudy(data.data);
          setError("");
        }
      } catch (err) {
        if (isMounted && err.response?.status === 404) setNotFound(true);
        if (isMounted && !initialStudy) setError(err.response?.data?.message || err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void fetchCaseStudy();
    return () => {
      isMounted = false;
    };
  }, [slug, initialStudy, notFound]);


  const outcomes = useMemo(
    () => (study?.outcomes || []).map((item) => item.text || item).filter(Boolean),
    [study]
  );

  const openConsultationForm = () => {
    window.dispatchEvent(new CustomEvent("manovaidya:open-consultation"));
  };

  if (notFound) return <NotFoundPage />;
  if (loading) {
    return <main className="min-h-[60vh] bg-[#fbfcfa] px-6 py-16 text-center font-bold text-slate-500">Loading case study...</main>;
  }

  if (error || !study) {
    return (
      <main className="min-h-[60vh] bg-[#fbfcfa] px-6 py-16 text-center">
        <Seo title="Case study not found | Manovaidya" path={`/case-studies/${slug}/`} noindex />
        <p className="text-lg font-black text-slate-900">{error || "Case study not found."}</p>
        <Link to="/case-studies/" className="mt-5 inline-flex rounded-md bg-[#8b43ba] px-5 py-3 text-sm font-black text-white">
          Back to Case Studies
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#fbfcfa]">
      <Seo
        title={study.metaTitle || `${study.title} | Case Study | Manovaidya`}
        description={study.metaDescription || study.summary}
        keywords={study.metaKeywords || study.focusKeyword}
        path={`/case-studies/${study.slug || slug}/`}
        image={getAssetUrl(study.image || study.ogImage)}
        noindex={/\bnoindex\b/i.test(study.robots || '')}
        schema={getArticleSchema(study, 'case-studies', getAssetUrl(study.image))}
        type="article"
      />
      <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {study.image ? (
              <img
                src={getAssetUrl(study.image)}
                alt={study.imageAlt || study.title}
                className="h-[260px] w-full object-cover sm:h-[360px]"
              />
            ) : null}

            <div className="p-5 sm:p-8">
              <Link to="/case-studies/" className="inline-flex items-center gap-2 text-sm font-black text-[#8b43ba]">
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#8b43ba]">{study.category}</p>
              <h1 className="mt-3 text-[32px] font-black leading-tight text-slate-950 sm:text-[44px]">{study.title}</h1>
              <p className="mt-4 text-base font-semibold leading-8 text-slate-600">{study.summary}</p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
                {study.authorName ? <span>{study.authorName}</span> : null}
                {study.createdAt && !Number.isNaN(new Date(study.createdAt).getTime()) ? (
                  <time dateTime={new Date(study.createdAt).toISOString()}>
                    {new Date(study.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                  </time>
                ) : null}
                {study.location ? (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                    <MapPin className="h-4 w-4 text-[#8b43ba]" />
                    {study.location}
                  </span>
                ) : null}
                {study.duration ? (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                    <Clock3 className="h-4 w-4 text-[#8b43ba]" />
                    {study.duration}
                  </span>
                ) : null}
              </div>

              {outcomes.length ? (
                <section className="mt-8 rounded-2xl bg-violet-50/70 p-5">
                  <h2 className="text-xl font-black text-slate-950">Key Outcomes</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 text-sm font-bold leading-6 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8b43ba]" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {study.content ? (
                <div
                  className="prose-blog mt-8 max-w-none text-[16px] font-medium leading-8 text-slate-700 [&>h2]:mt-8 [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-slate-950 [&>h3]:mt-6 [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-slate-950 [&>p]:mb-4 [&>ul]:my-5 [&>ul]:list-disc [&>ul]:pl-6"
                  dangerouslySetInnerHTML={{ __html: normalizeArticleLinks(study.content) }}
                />
              ) : null}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Sparkles className="h-7 w-7 text-[#8b43ba]" />
              <h2 className="mt-4 text-lg font-black text-slate-950">Need a Personalized Plan?</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Speak with the Manovaidya team and understand the right care path for your family.
              </p>
              <button
                type="button"
                onClick={openConsultationForm}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#8b43ba] px-5 py-3 text-sm font-black text-white transition hover:bg-[#7835a4]"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Consultation
              </button>
              <a
                href="tel:+917823838638"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-5 py-3 text-sm font-black text-[#8b43ba] transition hover:border-[#8b43ba]"
              >
                <PhoneCall className="h-4 w-4" />
                Call +91 78238 38638
              </a>
            </div>
          </aside>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default CaseStudyDetails;
