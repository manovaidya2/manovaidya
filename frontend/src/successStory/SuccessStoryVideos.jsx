import React from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { featuredStories, storyFilters } from "./successStoryData";

function SuccessStoryVideos({ activeFilter, onFilterChange }) {
  return (
    <section id="video-stories" className="mx-auto  px-4 pb-4 sm:px-6 lg:px-10">
      <div className="text-center">
        <h2 className="text-[clamp(24px,2vw,32px)] font-black text-[#071c2b]">
          Featured Video Success Stories
        </h2>
        <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#8B43BA]" />
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        {storyFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`h-10 rounded-full px-5 text-[13px] font-black transition ${activeFilter === filter
              ? "bg-[#8B43BA] text-white shadow-[0_12px_22px_rgba(15,139,127,0.22)]"
              : "bg-slate-50 text-[#071c2b] hover:bg-[#f7effd] hover:text-[#8B43BA]"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative mt-8">
        <button
          type="button"
          aria-label="Previous stories"
          className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_18px_36px_rgba(15,47,63,0.1)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
                <button
                  type="button"
                  aria-label={`Play ${story.title}`}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#071c2b]/70 text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                >
                  <Play className="ml-1 h-7 w-7 fill-white" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-black text-[#071c2b]">{story.title}</h3>
                <p className="mt-1 text-[13px] font-bold text-slate-600">{story.location}</p>
                <p className="mt-4 min-h-[68px] text-[15px] font-semibold leading-7 text-[#233445]">
                  "{story.quote}"
                </p>
                <a href="#testimonials" className="mt-3 inline-flex items-center gap-2 text-[14px] font-black text-[#8B43BA]">
                  Watch Full Story
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next stories"
          className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

export default SuccessStoryVideos;
