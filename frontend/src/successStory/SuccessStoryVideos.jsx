import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { storyFilters, videoStories } from "./successStoryData";

function SuccessStoryVideos({ activeFilter, onFilterChange }) {
  const carouselRef = React.useRef(null);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);
  const visibleStories = activeFilter === "All"
    ? videoStories
    : videoStories.filter((story) => story.category === activeFilter);

  const scrollStories = React.useCallback((direction) => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const card = carouselRef.current.querySelector("article");
    const gap = 24;
    const scrollAmount = card ? card.offsetWidth + gap : carousel.clientWidth;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const nextLeft = carousel.scrollLeft + scrollAmount;
    const prevLeft = carousel.scrollLeft - scrollAmount;

    if (direction === "next" && nextLeft >= maxScrollLeft - 8) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "prev" && prevLeft <= 0) {
      carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    carousel.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  React.useEffect(() => {
    if (isCarouselPaused || visibleStories.length <= 1) return undefined;

    const slideTimer = window.setInterval(() => {
      scrollStories("next");
    }, 3500);

    return () => window.clearInterval(slideTimer);
  }, [isCarouselPaused, scrollStories, visibleStories.length]);

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

      <div
        className="relative mt-8"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        onFocus={() => setIsCarouselPaused(true)}
        onBlur={() => setIsCarouselPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous stories"
          onClick={() => scrollStories("prev")}
          className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visibleStories.map((story) => (
            <article
              key={story.id}
              className="w-[86vw] shrink-0 snap-start overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_18px_36px_rgba(15,47,63,0.1)] sm:w-[48%] lg:w-[calc((100%-48px)/3)]"
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
                <h3 className="text-[18px] font-black text-[#071c2b]">{story.title}</h3>
                <p className="mt-1 text-[13px] font-bold text-slate-600">
                  {story.type} | {story.location}
                </p>
                <p className="mt-4 min-h-[68px] text-[15px] font-semibold leading-7 text-[#233445]">
                  Watch this {story.type.toLowerCase()} from {story.location}.
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${story.embedId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[14px] font-black text-[#8B43BA]"
                >
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
          onClick={() => scrollStories("next")}
          className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071c2b] shadow-[0_12px_28px_rgba(15,47,63,0.16)] lg:flex"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

export default SuccessStoryVideos;
