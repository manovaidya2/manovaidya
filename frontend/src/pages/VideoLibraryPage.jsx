import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Library, Play, Sparkles, Video as VideoIcon, X } from "lucide-react";
import Seo from "../components/Seo";
import api from "../api/axiosInstance";

function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, video]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-slate-900 px-4 py-3">
          <p className="truncate pr-4 text-sm font-semibold text-white">{video.title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="shrink-0 rounded-full p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e5dced] bg-white text-left shadow-[0_14px_34px_rgba(31,19,56,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B43BA]/35 hover:shadow-[0_22px_46px_rgba(31,19,56,0.13)] focus:outline-none focus:ring-4 focus:ring-[#8B43BA]/15"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition-colors duration-300 group-hover:bg-slate-950/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#8B43BA] shadow-[0_16px_30px_rgba(15,23,42,0.22)] transition-transform duration-300 group-hover:scale-110">
            <Play size={23} fill="currentColor" className="ml-1" />
          </span>
        </div>
        {video.category ? (
          <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-[#6d2e92] shadow-sm">
            {video.category}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-[16px] font-black leading-snug text-[#21142d] line-clamp-2">{video.title}</h3>
        {video.description ? (
          <p className="text-[13px] font-medium leading-relaxed text-[#62556c] line-clamp-2">{video.description}</p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wide text-[#8B43BA]">
          Watch video <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

function VideoCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#e5dced] bg-white shadow-sm">
      <div className="aspect-video w-full animate-pulse bg-[#f3eef7]" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-4/5 animate-pulse rounded bg-[#f3eef7]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#f6f2f8]" />
        <div className="h-3 w-3/5 animate-pulse rounded bg-[#f6f2f8]" />
      </div>
    </div>
  );
}

function FeaturedVideoPanel({ video, onPlay }) {
  if (!video) {
    return (
      <div className="rounded-lg border border-[#e6deec] bg-white p-5 shadow-[0_18px_45px_rgba(31,19,56,0.09)]">
        <div className="flex aspect-video items-center justify-center rounded-lg bg-[#f4eff8] text-[#8B43BA]">
          <VideoIcon size={42} />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group rounded-lg border border-[#e6deec] bg-white p-3 text-left shadow-[0_18px_45px_rgba(31,19,56,0.09)] transition hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(31,19,56,0.14)] focus:outline-none focus:ring-4 focus:ring-[#8B43BA]/15"
    >
      <div className="relative aspect-video overflow-hidden rounded-md bg-slate-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/20" />
        <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-[#6d2e92]">
          Featured
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8B43BA] shadow-[0_16px_30px_rgba(15,23,42,0.24)] transition-transform group-hover:scale-110">
          <Play size={27} fill="currentColor" className="ml-1" />
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8B43BA]">Latest Story</p>
          <h2 className="mt-1 line-clamp-2 text-lg font-black leading-tight text-[#21142d]">{video.title}</h2>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2e8f8] text-[#8B43BA]">
          <ArrowRight size={18} />
        </span>
      </div>
    </button>
  );
}

function VideoLibraryPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchVideos = async () => {
      try {
        const { data } = await api.get("/videos?status=published");
        if (!data.success) throw new Error(data.message || "Unable to load videos.");
        if (isMounted) {
          setVideos(data.data || []);
          setError("");
        }
      } catch (err) {
        if (isMounted) setError(err.response?.data?.message || err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void fetchVideos();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(videos.map((video) => video.category).filter(Boolean)));
    return ["All", ...unique];
  }, [videos]);

  const visibleVideos = useMemo(() => {
    if (activeCategory === "All") return videos;
    return videos.filter((video) => video.category === activeCategory);
  }, [videos, activeCategory]);

  const featuredVideo = videos[0] || null;

  return (
    <main className="min-h-screen bg-[#fbfafc]">
      <Seo
        title="Video Library | Real Care Journeys on Video | Manovaidya"
        description="Watch real recovery stories, patient interviews and care journeys from Manovaidya's Neuro-Ayurveda mental health clinic."
        keywords="Manovaidya video library, patient stories video, autism recovery video, mental health testimonials, Neuro-Ayurveda care videos"
        path="/video-library"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Video Library",
          description: "Real recovery stories and care journeys from Manovaidya, shown as video testimonials."
        }}
      />

      <section className="border-b border-[#eadff1] bg-white" aria-label="Video Library">
        <div className="mx-auto grid gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.8fr)] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#8B43BA]/20 bg-[#fbf7fd] px-3 py-1.5 text-[12px] font-black uppercase tracking-[0.16em] text-[#8B43BA]">
              <VideoIcon size={14} /> Video Library
            </span>
            <h1 className="mt-5 max-w-2xl text-[34px] font-black leading-[1.08] text-[#21142d] sm:text-[46px] lg:text-[54px]">
              Real care journeys, told through clear video stories
            </h1>
            <p className="mt-5 max-w-xl text-[15px] font-medium leading-7 text-[#5f5267] sm:text-[16px]">
              Watch families and patients share their Neuro-Ayurveda care journey with Manovaidya -
              honest conversations about progress, challenges and support.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-4">
                <p className="text-2xl font-black text-[#21142d]">{videos.length}</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-wide text-[#7a6d82]">Videos</p>
              </div>
              <div className="rounded-lg border border-[#dce9e4] bg-[#f6fbf8] p-4">
                <p className="text-2xl font-black text-[#1f3f34]">{Math.max(categories.length - 1, 0)}</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-wide text-[#61766d]">Categories</p>
              </div>
              <div className="col-span-2 rounded-lg border border-[#f0e2ca] bg-[#fffaf1] p-4 sm:col-span-1">
                <p className="text-2xl font-black text-[#4a3721]">HD</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-wide text-[#806b4f]">Stories</p>
              </div>
            </div>
          </div>

          <FeaturedVideoPanel video={featuredVideo} onPlay={setPlayingVideo} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#eadff1] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.16em] text-[#8B43BA]">
              <Library size={15} /> Browse Library
            </span>
            <h2 className="mt-2 text-2xl font-black text-[#21142d] sm:text-3xl">Patient stories and care insights</h2>
          </div>

        {categories.length > 1 ? (
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-md px-4 py-2 text-sm font-black transition-colors ${
                  activeCategory === category
                    ? "bg-[#8B43BA] text-white shadow-sm shadow-[#8B43BA]/30"
                    : "border border-[#e6deec] bg-white text-[#62556c] hover:border-[#8B43BA]/45 hover:text-[#8B43BA]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        ) : null}
        </div>

        {activeCategory !== "All" ? (
          <div className="mb-6 rounded-lg border border-[#eadff1] bg-white px-4 py-3 text-sm font-bold text-[#62556c]">
            Showing {visibleVideos.length} video{visibleVideos.length === 1 ? "" : "s"} in{" "}
            <span className="text-[#8B43BA]">{activeCategory}</span>
          </div>
        ) : null}

        {error ? (
          <div className="mx-auto max-w-md rounded-lg border border-red-100 bg-red-50 p-6 text-center text-sm font-bold text-red-700">
            {error}
          </div>
        ) : loading ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <VideoCardSkeleton key={index} />
            ))}
          </div>
        ) : visibleVideos.length === 0 ? (
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-lg border border-dashed border-[#d9cce3] bg-white p-12 text-center shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#f2e8f8] text-[#8B43BA]">
              <Sparkles size={24} />
            </span>
            <h3 className="text-lg font-black text-[#21142d]">New videos coming soon</h3>
            <p className="text-sm font-medium leading-6 text-[#62556c]">
              We're preparing more real care journey videos. Please check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleVideos.map((video) => (
              <VideoCard key={video._id} video={video} onPlay={setPlayingVideo} />
            ))}
          </div>
        )}
      </section>

      <VideoModal video={playingVideo} onClose={() => setPlayingVideo(null)} />
    </main>
  );
}

export default VideoLibraryPage;
