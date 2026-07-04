import React from "react";

import anxietyImage from "../images/adult-mental-wellness-hero.png";
import depressionImage from "../images/adult-mental-wellness-hero.png";
import burnoutImage from "../images/stress-burnout-support-india.png";
import sleepImage from "../images/sleep-disorders-support-india.png";
import confidenceImage from "../images/low-self-esteem-confidence-support-india.png";
import relationshipImage from "../images/relationship-challenges-support-india.png";
import addictionImage from "../images/addiction-unhealthy-habits-support-india.png";

const relatedPages = [
  {
    title: "Adult Anxiety Support",
    description: "Constant worry, overthinking, panic and emotional wellbeing.",
    href: "/anxiety-support-india",
    image: anxietyImage,
  },
  {
    title: "Adult Depression Support",
    description: "Low mood, sadness, emotional exhaustion and motivation.",
    href: "/adult-depression-support",
    image: depressionImage,
  },
  {
    title: "Stress & Burnout Support",
    description: "Mental exhaustion, work pressure and emotional overload.",
    href: "/stress-burnout-support-india",
    image: burnoutImage,
  },
  {
    title: "Sleep Disorders & Insomnia Support",
    description: "Insomnia, restless sleep and difficulty sleeping well.",
    href: "/sleep-disorders-insomnia-support-india",
    image: sleepImage,
  },
  {
    title: "Self-Esteem & Confidence Support",
    description: "Self-doubt, low self-worth and confidence building.",
    href: "/low-self-esteem-confidence-support-india",
    image: confidenceImage,
  },
  {
    title: "Relationship Challenges Support",
    description: "Communication, conflicts, breakups and emotional disconnect.",
    href: "/relationship-challenges-support-india",
    image: relationshipImage,
  },
  {
    title: "Addiction & Unhealthy Habits Support",
    description: "Substance use, repetitive habits and healthier routines.",
    href: "/addiction-unhealthy-habits-support-india",
    image: addictionImage,
  },
];

function normalizePath(path) {
  return path.replace(/\/+$/, "");
}

function RelatedPagesCard() {
  const currentPath =
    typeof window === "undefined" ? "" : normalizePath(window.location.pathname);
  const pages = relatedPages.filter(({ href }) => normalizePath(href) !== currentPath);

  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">
        Related Adult Mental Wellness Pages
      </h2>
      <div className="mt-4 space-y-3">
        {pages.map(({ title, description, href, image }) => (
          <a
            key={href}
            href={`${href}/`}
            className="group grid grid-cols-[58px_minmax(0,1fr)] gap-3 rounded-md border border-[#eadff1] bg-[#fbf9fd] p-2 transition hover:border-[#c5adcf] hover:bg-white"
          >
            <img
              src={image}
              alt={title}
              className="h-[58px] w-[58px] rounded-md object-cover object-center"
            />
            <span className="min-w-0">
              <span className="block text-[12px] font-black leading-5 text-[#21142d] transition group-hover:text-[#7835A4]">
                {title}
              </span>
              <span className="mt-0.5 block text-[10.5px] font-bold leading-4 text-[#6b5f73]">
                {description}
              </span>
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default RelatedPagesCard;
