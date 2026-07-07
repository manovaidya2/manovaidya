import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews, videoStories } from "./successStoryData";

function SuccessStoryReviewsTestimonials() {
  const familyVideos = videoStories.slice(0, 4);
  const reviewsPerPage = 2;
  const reviewPages = Math.ceil(reviews.length / reviewsPerPage);
  const [activeReviewPage, setActiveReviewPage] = React.useState(0);
  const visibleReviews = reviews.slice(
    activeReviewPage * reviewsPerPage,
    activeReviewPage * reviewsPerPage + reviewsPerPage
  );

  const moveReviewPage = (direction) => {
    setActiveReviewPage((currentPage) => {
      if (direction === "next") {
        return (currentPage + 1) % reviewPages;
      }

      return (currentPage - 1 + reviewPages) % reviewPages;
    });
  };

  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
      <div className="min-w-0 rounded-xl bg-slate-50 p-4 shadow-[0_18px_36px_rgba(15,47,63,0.08)] sm:p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <h2 className="text-[clamp(24px,1.8vw,32px)] font-black text-[#073c47]">
            Google Reviews
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex text-[#ffb21a]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-[#ffb21a]" />
              ))}
            </div>
            <span className="text-[13px] font-black text-[#071c2b]">Average Rating: 4.9/5</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Previous Google reviews"
            onClick={() => moveReviewPage("prev")}
            className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="grid gap-4 sm:grid-cols-2">
          {visibleReviews.map((review) => (
            <article key={review.name} className="min-w-0 rounded-lg bg-white p-4 shadow-[0_12px_24px_rgba(15,47,63,0.08)] sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B43BA] text-[13px] font-black text-white">
                  {review.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="break-words text-[14px] font-black leading-5 text-[#071c2b]">
                        {review.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-bold leading-4 text-slate-500">
                        {review.meta}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                  </div>
                  <div className="mt-3 flex text-[#ffb21a]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#ffb21a]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 break-words text-[13px] font-semibold leading-6 text-[#071c2b] sm:text-[14px]">
                {review.text}
              </p>
            </article>
          ))}
          </div>

          <button
            type="button"
            aria-label="Next Google reviews"
            onClick={() => moveReviewPage("next")}
            className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from({ length: reviewPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show Google review page ${index + 1}`}
              onClick={() => setActiveReviewPage(index)}
              className={`h-2 rounded-full transition-all ${activeReviewPage === index ? "w-6 bg-[#8B43BA]" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>
      </div>

      <div id="testimonials">
        <h2 className="text-center text-[clamp(24px,1.8vw,32px)] font-black text-[#071c2b]">
          Family Testimonials
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {familyVideos.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-lg bg-white shadow-[0_18px_36px_rgba(15,47,63,0.1)]">
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  title={item.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-5 py-4 text-center">
                <h3 className="text-[14px] font-semibold leading-6 text-[#071c2b]">{item.title}</h3>
                <p className="mt-2 text-[12px] font-bold text-slate-500">
                  {item.type} | {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/success-story-videos"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#8B43BA] px-6 text-[14px] font-black text-[#8B43BA] transition hover:bg-[#f7effd]"
          >
            Watch More Stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SuccessStoryReviewsTestimonials;
