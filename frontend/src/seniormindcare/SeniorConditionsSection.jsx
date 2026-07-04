import React from "react";
import {
  ArrowRight,
  Brain,
  CloudRain,
  Flower2,
  HeartPulse,
  Puzzle,
  ScanFace,
  UserRound,
} from "lucide-react";

const conditions = [
  {
    title: "Memory Loss &\nForgetfulness",
    description:
      "Difficulty remembering recent events, names, or important information.",
    action: "Explore Memory Care",
    href: "/memory-loss-forgetfulness-support-seniors-india/",
    Icon: Brain,
    iconClass: "bg-[#eee5ff] text-[#6043b8]",
  },
  {
    title: "Confusion &\nDisorientation",
    description:
      "Feeling confused about time, place or familiar surroundings.",
    action: "Explore Support",
    href: "/confusion-disorientation-support-seniors-india/",
    Icon: CloudRain,
    iconClass: "bg-[#dcefff] text-[#2583c7]",
  },
  {
    title: "Mild Cognitive\nImpairment (MCI)",
    description:
      "Early stage cognitive changes that may affect daily functioning.",
    action: "Explore MCI Support",
    href: "/mild-cognitive-impairment-mci-support-seniors-india/",
    Icon: ScanFace,
    iconClass: "bg-[#ffe1eb] text-[#e34e7d]",
  },
  {
    title: "Dementia &\nAlzheimer's Care",
    description:
      "Comprehensive care for Alzheimer's and other types of dementia.",
    action: "Explore Dementia Care",
    href: "/dementia-alzheimers-care-support-seniors-india/",
    Icon: Puzzle,
    iconClass: "bg-[#e4f1d9] text-[#60993e]",
  },
  {
    title: "Depression Treatment &\nSupport",
    description:
      "Trouble focusing, completing tasks or following conversations.",
    action: "Explore Focus Support",
    href: "/senior-depression-support-india/",
    Icon: Flower2,
    iconClass: "bg-[#fff0ca] text-[#a27918]",
  },
  {
    title: "Mood & Behaviour\nChanges",
    description:
      "Anxiety, mood swings, agitation or withdrawal in seniors.",
    action: "Explore Behaviour Support",
    Icon: HeartPulse,
    iconClass: "bg-[#eee5ff] text-[#6547b6]",
  },
  {
    title: "Sleep & Daytime\nFatigue",
    description:
      "Poor sleep quality, restless nights and daytime tiredness.",
    action: "Explore Sleep Support",
    href: "/sleep-disorders-seniors-support-india/",
    Icon: UserRound,
    iconClass: "bg-[#d9f3f4] text-[#238c96]",
  },
];

function SeniorConditionsSection() {
  return (
    <section id="programs" className="bg-white px-4 py-7 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-[2px] w-14 bg-[#8B43BA]/50 sm:block" />
            <h2 className="text-[28px] font-black leading-none sm:text-[32px] lg:text-[36px]">
              <span className="text-[#18181b]">Conditions </span>
              <span className="text-[#8B43BA]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-14 bg-[#8B43BA]/50 sm:block" />
          </div>
          <p className="mt-2 text-[13px] font-bold text-[#514967] sm:text-[14px]">
            Specialized support for a wide range of age-related cognitive and emotional challenges.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {conditions.map(({ title, description, action, href = "#assessment", Icon, iconClass }) => (
            <article
              key={title}
              className="flex min-h-[300px] min-w-0 flex-col items-center rounded-md border border-[#e2deea] bg-white px-3 py-5 text-center shadow-[0_8px_22px_rgba(45,32,84,0.06)]"
            >
              <span className={`flex h-[60px] w-[60px] items-center justify-center rounded-full ${iconClass}`}>
                <Icon className="h-8 w-8" strokeWidth={1.9} />
              </span>

              <h3 className="mt-5 min-h-[50px] whitespace-pre-line text-[16px] font-black leading-[1.35] text-[#342477]">
                {title}
              </h3>

              <p className="mt-3 text-[11.5px] font-semibold leading-[1.7] text-[#443d5e]">
                {description}
              </p>

              <a
                href={href}
                className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-black text-[#4e2b9c] transition hover:text-[#8B43BA]"
              >
                {action}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeniorConditionsSection;
