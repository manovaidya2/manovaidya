import React from "react";

import stressImage from "../images/women-stress-management-mind-body-balance-india.png";
import depressionImage from "../images/women-depression-low-mood-support-india.png";
import hormonalImage from "../images/women-hormonal-pms-pmdd-support-india.png";
import selfEsteemImage from "../images/women-self-esteem-body-image-support-india.png";
import relationshipImage from "../images/women-relationship-emotional-wellbeing-support-india.png";
import pregnancyImage from "../images/women-pregnancy-postpartum-motherhood-mental-health-support-india.png";
import lifeTransitionsImage from "../images/women-life-transitions-career-pressure-support-india.png";

const relatedPages = [
  {
    title: "Stress & Anxiety Support",
    description: "Stress, overthinking, anxiety and mind-body balance support.",
    href: "/women-stress-management-mind-body-balance-india/",
    image: stressImage,
  },
  {
    title: "Depression & Low Mood Support",
    description: "Persistent sadness, low mood and emotional wellbeing support.",
    href: "/women-depression-low-mood-support-india/",
    image: depressionImage,
  },
  {
    title: "Hormonal Mood Changes, PMS & PMDD",
    description: "Mood swings, irritability, PMS and PMDD emotional support.",
    href: "/women-hormonal-pms-pmdd-support-india/",
    image: hormonalImage,
  },
  {
    title: "Self-Esteem & Body Image Support",
    description: "Self-worth, confidence and body image support for women.",
    href: "/women-self-esteem-body-image-support-india/",
    image: selfEsteemImage,
  },
  {
    title: "Relationship & Emotional Challenges",
    description: "Relationship stress, loneliness and emotional connection support.",
    href: "/women-relationship-emotional-wellbeing-support-india/",
    image: relationshipImage,
  },
  {
    title: "Pregnancy, Postpartum & Motherhood",
    description: "Pregnancy anxiety, postpartum emotions and motherhood support.",
    href: "/women-pregnancy-postpartum-motherhood-mental-health-india/",
    image: pregnancyImage,
  },
  {
    title: "Life Transitions & Career Pressure",
    description: "Burnout, career stress, work-life balance and life changes.",
    href: "/women-life-transitions-career-pressure-support-india/",
    image: lifeTransitionsImage,
  },
];

function normalizePath(path) {
  return path.replace(/\/+$/, "");
}

function RelatedWomenHealthCarePages() {
  const currentPath =
    typeof window === "undefined" ? "" : normalizePath(window.location.pathname);
  const pages = relatedPages.filter(({ href }) => normalizePath(href) !== currentPath);

  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">
        Related Women Health Care Pages
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
              <span className="block text-[12px] font-black leading-5 text-[#21142d] transition group-hover:text-[#8B43BA]">
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

export default RelatedWomenHealthCarePages;
