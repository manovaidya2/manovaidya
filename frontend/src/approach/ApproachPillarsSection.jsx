import React from "react";
import {
  Brain,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  HandHeart,
  UserRound,
} from "lucide-react";

const pillars = [
  {
    number: "1.",
    title: "Root-Cause Understanding",
    text: "We look beyond symptoms to understand underlying factors.",
    Icon: Brain,
    color: "text-[#6031b8]",
    bg: "bg-[#efe8ff]",
  },
  {
    number: "2.",
    title: "Evidence-Informed Assessment",
    text: "In-depth evaluation using Ayurveda insights and modern science.",
    Icon: ClipboardList,
    color: "text-[#f27a3d]",
    bg: "bg-[#fff0e8]",
  },
  {
    number: "3.",
    title: "Personalised Care Plans",
    text: "Individualised roadmap aligned with unique needs and goals.",
    Icon: UserRound,
    color: "text-[#62a94f]",
    bg: "bg-[#eef9e9]",
  },
  {
    number: "4.",
    title: "Holistic Intervention",
    text: "Integrated support for mind, body, behaviour and lifestyle for complete wellbeing.",
    Icon: HandHeart,
    color: "text-[#289b9b]",
    bg: "bg-[#e9fbfb]",
  },
  {
    number: "5.",
    title: "Continuous Monitoring & Support",
    text: "Ongoing tracking and guidance to ensure consistent progress and long-term results.",
    Icon: ChartNoAxesColumnIncreasing,
    color: "text-[#6031b8]",
    bg: "bg-[#efe8ff]",
  },
];

function ApproachPillarsSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto ">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#4a2aa0] sm:text-[30px] lg:text-[32px]">
            The 5 Pillars of Our Approach
          </h2>
          <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-[#6040c8]" />
        </div>

        <div className="mt-8 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {pillars.map(({ number, title, text, Icon, color, bg }, index) => (
            <article
              key={title}
              className={`relative flex flex-col items-center px-6 text-center ${
                index > 0 ? "lg:border-l lg:border-[#ddd9e9]" : ""
              }`}
            >
              <span className={`flex h-[74px] w-[74px] items-center justify-center rounded-full ${bg} ${color}`}>
                <Icon className="h-10 w-10" strokeWidth={2.1} />
              </span>

              <h3 className="mt-1 min-h-[58px] max-w-[210px] text-[15px] font-extrabold leading-[1.35] text-[#20175b]">
                {number} {title}
              </h3>

              <p className="mt-1 max-w-[220px] text-[13px] font-bold leading-[1.65] text-[#2e2860]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachPillarsSection;
