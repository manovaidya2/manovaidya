import React from "react";
import {
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  FilePenLine,
  HandHeart,
  Search,
  Users,
} from "lucide-react";

const processSteps = [
  {
    step: "Step 1",
    title: "Understand",
    text: "We listen, observe and understand your concerns, history and goals.",
    Icon: ClipboardList,
    bg: "bg-[#efe8ff]",
    color: "text-[#6031b8]",
  },
  {
    step: "Step 2",
    title: "Assess",
    text: "In-depth assessment to identify root causes and contributing factors.",
    Icon: Search,
    bg: "bg-[#fff0e6]",
    color: "text-[#f27639]",
  },
  {
    step: "Step 3",
    title: "Plan",
    text: "Create a personalised care plan with clear goals and recommended interventions.",
    Icon: FilePenLine,
    bg: "bg-[#eef9e9]",
    color: "text-[#62a94f]",
  },
  {
    step: "Step 4",
    title: "Implement",
    text: "Begin the recommended interventions with family guidance and support.",
    Icon: HandHeart,
    bg: "bg-[#e9fbfb]",
    color: "text-[#2a9b9b]",
  },
  {
    step: "Step 5",
    title: "Track",
    text: "Regular monitoring and tracking to measure progress and changes.",
    Icon: ChartNoAxesColumnIncreasing,
    bg: "bg-[#efe8ff]",
    color: "text-[#6031b8]",
  },
  {
    step: "Step 6",
    title: "Evolve",
    text: "Plan evolves as the individual grows, ensuring long-term wellbeing and success.",
    Icon: Users,
    bg: "bg-[#ffe8f2]",
    color: "text-[#df3c7e]",
  },
];

function ApproachCareProcessSection() {
  return (
    <section className="bg-white px-4 py-9 sm:px-6 lg:px-10 lg:py-11">
      <div className="mx-auto max-w-[1420px]">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#4a2aa0] sm:text-[30px] lg:text-[33px]">
            How We Work - Our Care Process
          </h2>
          <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-[#6040c8]" />
        </div>

        <div className="mt-7 grid gap-y-9 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
          {processSteps.map(({ step, title, text, Icon, bg, color }, index) => (
            <article key={title} className="relative flex flex-col items-center px-5 text-center">
              {index < processSteps.length - 1 ? (
                <span className="pointer-events-none absolute right-[-14px] top-[34px] hidden text-[32px] font-black leading-none text-[#5630b8] lg:block">
                  →
                </span>
              ) : null}

              <span className={`flex h-[78px] w-[78px] items-center justify-center rounded-full ${bg} ${color}`}>
                <Icon className="h-10 w-10" strokeWidth={2.05} />
              </span>

              <h3 className="mt-4 text-[15px] font-extrabold leading-[1.2] text-[#20175b]">
                {step}
                <br />
                {title}
              </h3>

              <p className="mt-5 max-w-[210px] text-[13px] font-bold leading-[1.65] text-[#2e2860]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachCareProcessSection;
