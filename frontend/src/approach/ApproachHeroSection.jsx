import React from "react";
import { Brain, ShieldCheck } from "lucide-react";
import approachBanner from "../images/approach-life-stage-banner.png";

const labels = [
  { text: "Child", className: "left-[42.8%] top-[30%]" },
  { text: "Teen", className: "left-[52.8%] top-[22%]" },
  { text: "Adult", className: "left-[64%] top-[13%]" },
  { text: "Women", className: "left-[74.3%] top-[19%]" },
  { text: "Senior", className: "left-[84.8%] top-[25%]" },
  { text: "Old Age", className: "left-[92.2%] top-[25%]" },
];

function ApproachHeroSection() {
  return (
    <section id="approach" className="bg-[#f8f4ff] px-3 py-5 sm:px-5 lg:px-0 lg:py-0">
      <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl bg-[#eee7ff] shadow-[0_20px_70px_rgba(52,31,115,0.16)] lg:block lg:aspect-[1137/407] lg:min-h-0 lg:rounded-none">
        <img
          src={approachBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0  lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.42)_31%,rgba(255,255,255,0)_58%)]" />

        <div className="relative z-10 flex h-full flex-col px-5 py-8 lg:block lg:px-[3%] lg:py-[2.2%]">
          <div className="w-full sm:max-w-[80%] lg:min-w-[310px] lg:max-w-[39.5%]">
            <span className="inline-flex rounded-full bg-white/82 px-5 py-1.5 text-[13px] font-extrabold text-[#6650b6] shadow-[0_6px_18px_rgba(77,46,151,0.12)] ring-1 ring-white/80">
              Our Approach
            </span>
            <h1 className="mt-5 text-[32px] font-bold leading-[1.22] text-[#15115b] sm:text-[42px] lg:mt-[4%] lg:text-[clamp(34px,3.4vw,39px)]">
              A Holistic, Structured &amp; Personalised Path to Better Development &amp; Wellbeing
            </h1>
            <p className="mt-4 max-w-[95%] text-[14.5px] font-extrabold leading-[1.68] text-[#282064] sm:text-[15px] lg:mt-[4.2%] lg:text-[clamp(12px,1vw,16px)]">
              At Manovaidya, we go beyond symptoms to understand the root causes.
              Our holistic and evidence-informed approach combines Ayurveda with
              modern science to support lasting change in development, behaviour,
              emotions and overall wellbeing.
            </p>
          </div>

          {labels.map((label) => (
            <span
              key={label.text}
              className={`absolute z-20 hidden -translate-x-1/2 text-[12px] font-extrabold text-[#29205f] sm:text-[14px] lg:block lg:text-[clamp(12px,1vw,16px)] ${label.className}`}
            >
              {label.text}
            </span>
          ))}

          <div className="relative z-20 mt-8 grid gap-4 lg:absolute lg:bottom-[4.2%] lg:left-[3%] lg:right-[3%] lg:mt-0 lg:grid-cols-[34%_36%_24%] lg:gap-[1.5%]">
            <article className="flex flex-col items-start gap-4 rounded-[12px] bg-[#5630b8] px-5 py-5 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)] sm:flex-row sm:items-center sm:gap-5 sm:py-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#5630b8] sm:h-16 sm:w-16">
                <Brain className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2.2} />
              </span>
              <p className="text-[13.5px] font-bold leading-[1.6] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                We help individuals and families move from confusion to clarity,
                and from challenges to confidence through personalised care and guidance.
              </p>
            </article>

            <article className="flex flex-col items-start gap-4 rounded-[12px] bg-[#5630b8] px-5 py-5 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)] sm:flex-row sm:items-center sm:gap-5 sm:py-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#5630b8] sm:h-16 sm:w-16">
                <Brain className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2.2} />
              </span>
              <p className="text-[13.5px] font-bold leading-[1.6] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                Families across India trust Manovaidya for thoughtful assessment,
                personalised roadmap and long-term support for better outcomes.
              </p>
            </article>

            <article className="flex flex-col items-start gap-4 rounded-[12px] bg-[#5630b8] px-5 py-5 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)] sm:flex-row sm:items-center sm:gap-5 sm:py-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#1cb85f] sm:h-16 sm:w-16">
                <ShieldCheck className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2.4} />
              </span>
              <p className="text-[13.5px] font-bold leading-[1.42] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                Trusted by <br className="hidden sm:block lg:hidden xl:block" />
                <strong className="text-[17px] leading-tight">Thousands of</strong>
                <br />
                Families Across India
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachHeroSection;
