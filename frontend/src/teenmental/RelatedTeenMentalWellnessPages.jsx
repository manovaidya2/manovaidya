import React from "react";

import stressImage from "../images/teen-stress-anxiety-support-india.png";
import depressionImage from "../images/teen-depression-support-india.png";
import examImage from "../images/exam-performance-pressure-support-india.webp";
import confidenceImage from "../images/teen-confidence-emotional-wellbeing-india-generated.png";
import screenImage from "../images/teen-screen-addiction-support-india-generated.png";
import relationshipImage from "../images/teen-family-support.png";

const relatedPages = [
  {
    title: "Teen Stress & Anxiety Treatment",
    description: "Stress, worry, overthinking and daily pressure support.",
    href: "/teen-stress-anxiety-support",
    image: stressImage,
  },
  {
    title: "Teen Depression & Low Mood Treatment",
    description: "Low mood, sadness, loneliness and emotional heaviness.",
    href: "/teen-depression-support",
    image: depressionImage,
  },
  {
    title: "Exam & Performance Pressure Support",
    description: "Exam stress, academic pressure and fear of failure.",
    href: "/exam-performance-pressure",
    image: examImage,
  },
  {
    title: "Teen Confidence & Emotional Wellbeing",
    description: "Self-belief, self-esteem and emotional resilience.",
    href: "/teen-confidence-emotional-wellbeing",
    image: confidenceImage,
  },
  {
    title: "Teen Screen Addiction Treatment",
    description: "Screen use, gaming habits and digital wellbeing.",
    href: "/teen-screen-addiction-support",
    image: screenImage,
  },
  {
    title: "Parent-Teen Relationship Treatment",
    description: "Communication, trust and emotional connection at home.",
    href: "/parent-teen-relationship-support",
    image: relationshipImage,
  },
];

function normalizePath(path) {
  return path.replace(/\/+$/, "");
}

function RelatedTeenMentalWellnessPages() {
  const currentPath =
    typeof window === "undefined" ? "" : normalizePath(window.location.pathname);
  const pages = relatedPages.filter(({ href }) => normalizePath(href) !== currentPath);

  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">
        Related Teen Mental Wellness Pages
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

export default RelatedTeenMentalWellnessPages;
