import React from "react";
import { ArrowRight } from "lucide-react";
import { storyFilters, videoStories } from "../successStory/successStoryData";

function SuccessStoryVideosPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const visibleStories = activeFilter === "All"
    ? videoStories
    : videoStories.filter((story) => story.category === activeFilter);

  return (
    <main className="bg-white px-4 py-10 text-[#071c2b] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#8B43BA]">
            Success Stories
          </p>
          <h1 className="mt-3 text-[clamp(30px,3vw,48px)] font-black leading-tight text-[#071c2b]">
            Video Success Stories
          </h1>
          <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-[#8B43BA]" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {storyFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`h-10 rounded-full px-5 text-[13px] font-black transition ${activeFilter === filter
                ? "bg-[#8B43BA] text-white shadow-[0_12px_22px_rgba(139,67,186,0.22)]"
                : "bg-slate-50 text-[#071c2b] hover:bg-[#f7effd] hover:text-[#8B43BA]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleStories.map((story) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_18px_36px_rgba(15,47,63,0.1)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${story.embedId}`}
                  title={story.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h2 className="text-[18px] font-black text-[#071c2b]">{story.title}</h2>
                <p className="mt-1 text-[13px] font-bold text-slate-600">
                  {story.type} | {story.location}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${story.embedId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-black text-[#8B43BA]"
                >
                  Watch on YouTube
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SuccessStoryVideosPage;
