import React from "react";
import {
  ArrowRight,
  BedDouble,
  Brain,
  CloudRain,
  Flower2,
  Martini,
  Cigarette,
  ScanFace,
  UsersRound,
} from "lucide-react";

const conditions = [
  {
    title: "Stress &\nAnxiety",
    description:
      "Overthinking, worry, panic attacks, work stress and constant fatigue.",
    action: "Explore Anxiety Support",
    Icon: Brain,
    iconClass: "bg-[#eee5ff] text-[#6043b8]",
    href: "/anxiety-support-india",
  },
  {
    title: "Depression",
    description:
      "Low mood, sadness, loss of interest, lack of motivation and emptiness.",
    action: "Explore Depression Support",
    Icon: CloudRain,
    iconClass: "bg-[#dcefff] text-[#2583c7]",
    href: "/adult-depression-support",
  },
  {
    title: "Burnout &\nExhaustion",
    description:
      "Emotional, physical and mental exhaustion due to work or life pressure.",
    action: "Explore Burnout Support",
    Icon: ScanFace,
    iconClass: "bg-[#ffe1eb] text-[#e34e7d]",
    href: "/stress-burnout-support-india",
  },
  {
    title: "Sleep\nProblems",
    description:
      "Insomnia, difficulty falling or staying asleep, restless sleep.",
    action: "Explore Sleep Support",
    Icon: BedDouble,
    iconClass: "bg-[#e4f1d9] text-[#60993e]",
    href: "/sleep-disorders-insomnia-support-india",
  },
  {
    title: "Self-Esteem &\nConfidence",
    description:
      "Low self-worth, self-doubt, negative self-image and insecurity.",
    action: "Explore Confidence Support",
    Icon: Flower2,
    iconClass: "bg-[#fff0ca] text-[#a27918]",
    href: "/low-self-esteem-confidence-support-india",
  },
  {
    title: "Relationship\nChallenges",
    description:
      "Communication issues, conflicts, breakups and emotional disconnect.",
    action: "Explore Relationship Support",
    Icon: UsersRound,
    iconClass: "bg-[#ffdadd] text-[#dc2626]",
    href: "/relationship-challenges-support-india",
  },
  {
    title: "Addiction &\nHabit Concerns",
    description:
      "Struggling with substance use or repetitive unhealthy habits.",
    action: "Explore Habit Support",
    Icon: Cigarette,
    iconClass: "bg-[#e5f0ea] text-[#16a34a]",
    href: "/addiction-unhealthy-habits-support-india",
  },
];

function AdultConditionsSection() {
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
            Comprehensive support for a wide range of mental health concerns in adults.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {conditions.map(({ title, description, action, Icon, iconClass, href }) => (
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

              <p className="mt-3 text-[13px] font-semibold leading-[1.7] text-[#443d5e]">
                {description}
              </p>

              <a
                href={href || "#assessment"}
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

export default AdultConditionsSection;
