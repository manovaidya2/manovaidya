import React from "react";
import {
  ArrowRight,
  Brain,
  CloudRain,
  Flower2,
  Heart,
  SmilePlus,
  Sparkles,
  UserRound,
} from "lucide-react";

const concerns = [
  {
    title: "Stress & Anxiety",
    description:
      "Overthinking, worry, panic attacks and daily stress management.",
    href: "/women-stress-management-mind-body-balance-india/",
    Icon: Brain,
    iconColor: "#8B43BA",
    iconBg: "#f0e7f6",
  },
  {
    title: "Depression &\nLow Mood",
    description:
      "Persistent sadness, loss of interest, emptiness and hopelessness.",
    href: "/women-depression-low-mood-support-india/",
    Icon: CloudRain,
    iconColor: "#6043c4",
    iconBg: "#eee6ff",
  },
  {
    title: "Hormonal &\nPMS/PMDD",
    description:
      "Mood swings, irritability, fatigue and emotional changes.",
    href: "/women-hormonal-pms-pmdd-support-india/",
    Icon: Sparkles,
    iconColor: "#d84a62",
    iconBg: "#ffe8e7",
  },
  {
    title: "Self-Esteem &\nBody Image",
    description:
      "Low self-worth, self-doubt, negative self-image and confidence issues.",
    href: "/women-self-esteem-body-image-support-india/",
    Icon: UserRound,
    iconColor: "#4a9a3a",
    iconBg: "#e8f6df",
  },
  {
    title: "Relationship &\nEmotional Challenges",
    description:
      "Relationship stress, loneliness, breakups and family dynamics.",
    href: "/women-relationship-emotional-wellbeing-support-india/",
    Icon: Heart,
    iconColor: "#b99018",
    iconBg: "#fff1c9",
  },
  {
    title: "Pregnancy, Postpartum\n& Motherhood",
    description:
      "Perinatal anxiety, postnatal depression and motherhood adjustment.",
    href: "/women-pregnancy-postpartum-motherhood-mental-health-india/",
    Icon: SmilePlus,
    iconColor: "#1691c8",
    iconBg: "#dff5ff",
  },
  {
    title: "Life Transitions &\nCareer Pressure",
    description:
      "Burnout, career stress, work-life balance and major life changes.",
    href: "/women-life-transitions-career-pressure-support-india/",
    Icon: Flower2,
    iconColor: "#7d58be",
    iconBg: "#eee4ff",
  },
];

function WomenHealthCareConcernsSection() {
  return (
    <section className="bg-white px-[10px] py-6 sm:px-5 lg:px-10 lg:py-7">
      <div className="mx-auto w-full ">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-[2px] w-16 bg-[#4b318f]/55 sm:block" />
            <h2 className="text-[26px] font-black leading-none sm:text-[30px] lg:text-[34px]">
              <span className="text-[#18181b]">Concerns </span>
              <span className="text-[#8b43ba]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-16 bg-[#4b318f]/55 sm:block" />
          </div>
          <p className="mt-2 text-[12.5px] font-black leading-tight text-[#2f276d]/80 sm:text-[13.5px]">
            Specialized support for a wide range of women&apos;s mental health concerns.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-3">
          {concerns.map(({ title, description, href = "#assessment", Icon, iconColor, iconBg }) => (
            <article
              key={title}
              className="flex min-h-[285px] flex-col items-center rounded-lg border border-[#ded9ee] bg-white px-4 py-6 text-center shadow-[0_8px_22px_rgba(45,38,103,0.08)] lg:min-h-[300px] lg:px-3 lg:py-6"
            >
              <span
                className="flex h-[62px] w-[62px] items-center justify-center rounded-full"
                style={{ backgroundColor: iconBg, color: iconColor }}
              >
                <Icon className="h-8 w-8" strokeWidth={2.2} />
              </span>

              <h3 className="mt-6 min-h-[48px] whitespace-pre-line text-[15px] font-black leading-[1.32] text-[#292178] lg:text-[14px] xl:text-[15px]">
                {title}
              </h3>

              <p className="mt-6 min-h-[72px] text-[11.5px] font-black leading-[1.65] text-[#221a63]/78 lg:text-[10.5px] xl:text-[11.5px]">
                {description}
              </p>

              <a
                href={href}
                className="mt-auto inline-flex items-center gap-3 text-[11.5px] font-black text-[#3b2b94] transition hover:text-[#8B43BA]"
              >
                Explore Support
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.7} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WomenHealthCareConcernsSection;

