import React, { useState } from "react";
import {
  ArrowRight,
  Brain,
  CirclePlay,
  Heart,
  Moon,
  Network,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import scienceImage from "../images/science-neuro-ayurveda.png";
import videoThumbnail from "../images/Untitled design.jpg.jpeg";

const focusAreas = [
  { label: "Brain Health", Icon: Brain },
  { label: "Gut Health", Icon: Sparkles },
  { label: "Emotions", Icon: Heart },
  { label: "Sleep", Icon: Moon },
  { label: "Behaviour", Icon: Users },
  { label: "Development", Icon: Network },
];

const stories = [
  {
    quote:
      "The care and guidance we received improved my son's behaviour and confidence tremendously.",
    name: "Neha S.",
    role: "Mother of Aarav",
  },
  {
    quote:
      "My anxiety and stress reduced significantly. I feel more calm and in control now.",
    name: "Rohit K.",
    role: "Adult Patient",
  },
  {
    quote:
      "My father's memory and mood have improved beautifully with the holistic treatment.",
    name: "Anjali M.",
    role: "Daughter of Patient",
  },
  {
    quote:
      "The gut healing diet and lifestyle plan made a big difference in my IBS and mental health.",
    name: "Pooja T.",
    role: "Patient",
  },
];

function ScienceStoriesSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-[#fbfaff] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full gap-5 lg:grid-cols-[3fr_2fr]">
        <div className="grid gap-5 rounded-2xl border border-[#8B43BA]/15 bg-white p-4 shadow-[0_14px_34px_rgba(139,67,186,0.08)] lg:grid-cols-[1.08fr_0.92fr] lg:p-5">
          <div className="overflow-hidden rounded-xl bg-[#0b0b3b]">
            <img
              src={scienceImage}
              alt="Neuro-Ayurveda science illustration"
              className="h-full min-h-[240px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start pt-2 lg:pt-1">
            <h2 className="text-[clamp(27px,2.3vw,38px)] font-bold leading-[1.08] text-[#8B43BA]">
              The Science Behind Neuro-Ayurveda
            </h2>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-slate-700">
              We combine the timeless wisdom of Ayurveda with the latest
              neuroscience to understand how the brain, gut, emotions and
              lifestyle are deeply connected.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-slate-700">
              Our holistic approach focuses on restoring balance at the root
              level, not just managing symptoms.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {focusAreas.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2 text-[13px] font-black text-[#8B43BA]">
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#consultation"
              className="mt-6 inline-flex w-fit items-center gap-3 rounded-lg bg-[#8B43BA] px-6 py-3 text-[14px] font-black text-white shadow-[0_12px_24px_rgba(139,67,186,0.22)] transition hover:bg-[#8B43BA]/90"
            >
              Discover Our Approach
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[#8B43BA]/15 bg-white p-4 shadow-[0_14px_34px_rgba(139,67,186,0.08)] lg:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[clamp(24px,2vw,32px)] font-bold leading-tight text-[#8B43BA]">
              Real Stories. Real Progress.
            </h2>
            <a
              href="#stories"
              className="inline-flex items-center gap-2 text-[13px] font-black text-[#8B43BA]"
            >
              View All Stories
              <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
            </a>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {stories.slice(0, 2).map(({ quote, name, role }) => (
              <article
                key={name}
                className="rounded-xl border border-[#8B43BA]/15 bg-white px-4 py-5 shadow-[0_10px_24px_rgba(139,67,186,0.07)]"
              >
                <p className="text-3xl leading-none text-[#8B43BA]">“</p>
                <p className="mt-1 min-h-[96px] text-[13px] font-semibold leading-6 text-slate-700">
                  {quote}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  {/* <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B43BA] text-[13px] font-black text-white">
                    {name.charAt(0)}
                  </span> */}
                  <p className="leading-tight">
                    <span className="block text-[13px] font-black text-[#8B43BA]">
                      {name}
                    </span>
                    <span className="block text-[11px] font-bold text-slate-500">
                      {role}
                    </span>
                  </p>
                </div>

                <div className="mt-3 flex gap-1 text-[#f8b21a]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
              </article>
            ))}
          </div>

          {isVideoPlaying ? (
            <div className="mt-5 flex h-[180px] overflow-hidden rounded-xl bg-black shadow-[0_14px_30px_rgba(139,67,186,0.18)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4EE2fYQUD2c?si=t5IQSgDTwMg-1y3U&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="group relative mt-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#0b0b3b] shadow-[0_14px_30px_rgba(139,67,186,0.18)] transition-all hover:shadow-[0_18px_40px_rgba(139,67,186,0.25)]"
            >
              <img
                src={videoThumbnail}
                alt="Video thumbnail"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0  to-transparent" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"></span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#8B43BA] shadow-lg">
                    <CirclePlay className="h-7 w-7" strokeWidth={2} />
                  </span>
                </div>
                {/* <h3 className="text-[20px] font-black leading-tight text-white drop-shadow-md">
                  Hear From Our Families
                </h3> */}
                {/* <p className="mt-1 text-[14px] font-bold text-white/90 drop-shadow-sm">
                  Click to watch video testimonials
                </p> */}
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ScienceStoriesSection;
