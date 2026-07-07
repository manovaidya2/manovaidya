import React from "react";

import memoryImage from "../images/memory-loss-forgetfulness-support-seniors-india.png";
import confusionImage from "../images/confusion-disorientation-support-seniors-india.png";
import mciImage from "../images/mild-cognitive-impairment-mci-support-seniors-india.png";
import dementiaImage from "../images/dementia-alzheimers-care-support-seniors-india.png";
import depressionImage from "../images/depression-support-seniors-india.png";
import sleepImage from "../images/sleep-disorders-seniors-support-india.png";

const relatedPages = [
  {
    title: "Memory Loss & Forgetfulness Treatment",
    description: "Memory changes, forgetfulness and healthy brain ageing support.",
    href: "/memory-loss-forgetfulness-support-seniors-india/",
    image: memoryImage,
  },
  {
    title: "Confusion & Disorientation Treatment",
    description: "Support for confusion, orientation and cognitive wellbeing.",
    href: "/confusion-disorientation-support-seniors-india/",
    image: confusionImage,
  },
  {
    title: "Mild Cognitive Impairment (MCI)",
    description: "Early cognitive changes, MCI awareness and family guidance.",
    href: "/mild-cognitive-impairment-mci-support-seniors-india/",
    image: mciImage,
  },
  {
    title: "Dementia & Alzheimer's Care",
    description: "Dementia awareness, Alzheimer's care and caregiver support.",
    href: "/dementia-alzheimers-care-support-seniors-india/",
    image: dementiaImage,
  },
  {
    title: "Depression Treatment for Seniors",
    description: "Low mood, emotional wellbeing and healthy ageing support.",
    href: "/senior-depression-support-india/",
    image: depressionImage,
  },
  {
    title: "Sleep Disorders in Seniors",
    description: "Insomnia, poor sleep, daytime fatigue and brain health support.",
    href: "/sleep-disorders-seniors-support-india/",
    image: sleepImage,
  },
];

function normalizePath(path) {
  return path.replace(/\/+$/, "");
}

function RelatedSeniorMindCarePages() {
  const currentPath =
    typeof window === "undefined" ? "" : normalizePath(window.location.pathname);
  const pages = relatedPages.filter(({ href }) => normalizePath(href) !== currentPath);

  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">
        Related Senior Mind Care Pages
      </h2>
      <div className="mt-4 space-y-3">
        {pages.map(({ title, description, href, image }) => (
          <a
            key={href}
            href={href}
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

export default RelatedSeniorMindCarePages;
