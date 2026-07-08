import React from "react";
import childHeroImage from "../images/child-health-care-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import doctorImage from "../images/doctorimg-2.jpeg";

const relatedPages = [
  {
    title: "Autism Treatment in India",
    href: "/autism-treatment-india",
    image: childHeroImage,
  },
  {
    title: "ADHD Treatment in India",
    href: "/child-health-care/adhd-child",
    image: supportFamilyImage,
  },
  {
    title: "Speech Delay & Communication Support",
    href: "/speech-delay-support-india",
    image: signsImage,
  },
  {
    title: "Learning & Attention Difficulties",
    href: "/learning-attention-difficulties-india",
    image: ctaImage,
  },
  {
    title: "Behavioural Concerns in Children",
    href: "/behavioural-concerns-children-india",
    image: childHeroImage,
  },
  {
    title: "Child Development Treatment in India",
    href: "/child-development-support-india",
    image: supportFamilyImage,
  },
  {
    title: "Know more about Dr. Ankush Garg",
    href: "/about/doctor",
    image: doctorImage,
  },
];

function RelatedPagesCard() {
  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">Related Pages</h2>
      <div className="mt-5 space-y-5">
        {relatedPages.map((article) => (
          <a key={article.title} href={article.href} className="grid grid-cols-[76px_1fr] gap-3">
            <img src={article.image} alt={article.title} className="h-16 w-[76px] rounded-md object-cover" />
            <span>
              <span className="block text-[12px] font-black leading-5 text-[#21142d]">{article.title}</span>
              <span className="mt-1 block text-[11px] font-bold text-[#75677d]">Open page</span>
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default RelatedPagesCard;

