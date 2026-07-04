import React from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  Flame,
  HeartPulse,
  Moon,
  Smile,
  Sparkles,
  Sun,
  UserRound,
} from "lucide-react";

const conditions = [
  {
    title: "Anxiety & Stress",
    description: "Emotional stress and overwhelm.",
    Icon: Sparkles,
  },
  {
    title: "Depression",
    description: "Low mood, motivation and fatigue.",
    Icon: Smile,
  },
  {
    title: "OCD",
    description: "Repetitive thoughts and behaviours.",
    Icon: UserRound,
  },
  {
    title: "ADHD",
    description: "Attention, focus and behaviour support.",
    Icon: Sun,
  },
  {
    title: "Autism",
    description: "Communication and developmental support.",
    Icon: Brain,
  },
  {
    title: "Bipolar Disorder",
    description: "Mood swings and emotional instability.",
    Icon: UserRound,
  },
  {
    title: "Sleep Disorders",
    description: "Insomnia, restless sleep and sleep issues.",
    Icon: Moon,
  },
  {
    title: "Anger Management",
    description: "Emotional regulation and behaviour.",
    Icon: Flame,
  },
  {
    title: "PTSD",
    description: "Trauma related stress and recovery.",
    Icon: HeartPulse,
  },
  {
    title: "Gut Health / IBS",
    description: "Digestive issues affecting mind and mood.",
    Icon: Activity,
  },
];

function ConditionsSupportSection() {
  return (
    <section id="conditions-support" className="bg-[#fbfaff] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto w-full">
        <h2 className="text-center text-[28px] font-bold leading-tight text-[#1f2078] sm:text-[clamp(26px,2.4vw,36px)]">
          Conditions We Support
        </h2>

        <div className="mt-5 overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_10px_24px_rgba(61,50,126,0.08)] sm:shadow-[0_14px_34px_rgba(61,50,126,0.08)]">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {conditions.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="flex min-h-[166px] flex-col items-center border-b border-r border-violet-100 px-3 py-5 text-center transition duration-300 hover:bg-violet-50/55 even:border-r-0 lg:min-h-0 lg:border-r lg:px-5 lg:py-6 lg:even:border-r lg:[&:nth-child(5n)]:border-r-0 lg:[&:nth-child(n+6)]:border-b-0"
              >
                <Icon className="h-8 w-8 text-[#8B43BA] sm:h-9 sm:w-9" strokeWidth={1.9} />
                <h3 className="mt-3 text-[16px] font-black leading-snug text-[#271378] sm:mt-4 sm:text-[18px]">
                  {title}
                </h3>
                <p className="mt-2 text-[12.5px] font-semibold leading-5 text-[#34217c]/75 sm:mt-3 sm:text-[13px] sm:leading-6">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex justify-center border-t border-violet-100 px-4 py-4 sm:px-5">
            <a
              href="#consultation"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-violet-200 bg-white px-5 py-3 text-[14px] font-black text-[#8B43BA] shadow-[0_8px_20px_rgba(61,50,126,0.08)] transition hover:border-[#8B43BA]/35 hover:bg-violet-50 sm:w-auto sm:px-7 sm:text-[15px]"
            >
              View All Conditions
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConditionsSupportSection;
