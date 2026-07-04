import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Heart,
  MessageCircle,
  Puzzle,
  UsersRound,
} from "lucide-react";

const concerns = [
  {
    title: "Autism Spectrum\nDisorder",
    description:
      "Support for social skills, communication, behaviour and overall development in children with autism.",
    Icon: Puzzle,
    iconColor: "#6043c4",
    iconBg: "#eee6ff",
    linkText: "Explore Autism Support",
    href: "/autism-treatment-india",
  },
  {
    title: "ADHD &\nHyperactivity",
    description:
      "Helping children improve attention, focus, impulse control and daily functioning.",
    Icon: Brain,
    iconColor: "#d87b27",
    iconBg: "#ffebd6",
    linkText: "Explore ADHD Support",
    href: "/child-health-care/adhd-child",
  },
  {
    title: "Speech Delay\nSupport",
    description:
      "Support for delayed speech, communication difficulties and language development challenges.",
    Icon: MessageCircle,
    iconColor: "#1691c8",
    iconBg: "#dff5ff",
    linkText: "Explore Speech Support",
    href: "/speech-delay-support-india",
  },
  {
    title: "Learning\nDifficulties",
    description:
      "Helping children with reading, writing, math, comprehension and academic related challenges.",
    Icon: BookOpen,
    iconColor: "#4a9a3a",
    iconBg: "#e8f6df",
    linkText: "Explore Learning Support",
    href: "/learning-attention-difficulties-india",
  },
  {
    title: "Behavioural\nChallenges",
    description:
      "Support for behaviour issues, emotional regulation, tantrums, aggression and other concerns.",
    Icon: UsersRound,
    iconColor: "#b99018",
    iconBg: "#fff1c9",
    linkText: "Explore Behaviour Support",
    href: "/behavioural-concerns-children-india",
  },
  {
    title: "Child Development\nSupport",
    description:
      "Holistic support for overall growth, milestones, confidence and emotional wellbeing.",
    Icon: Heart,
    iconColor: "#ef4f7b",
    iconBg: "#ffe0ec",
    linkText: "Explore Child Development",
    href: "/child-development-support-india",
  },
];

function ChildHealthCareConcernsSection() {
  return (
    <section className="bg-white px-[10px] py-6 sm:px-5 lg:px-10 lg:py-7">
      <div className="mx-auto w-full">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-[2px] w-16 bg-[#4b318f]/55 sm:block" />
            <h2 className="text-[26px] font-black leading-none sm:text-[30px] lg:text-[34px]">
              <span className="text-[#18181b]">Conditions </span>
              <span className="text-[#8b43ba]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-16 bg-[#4b318f]/55 sm:block" />
          </div>
          <p className="mt-2 text-[12.5px] font-black leading-tight text-[#2f276d]/80 sm:text-[13.5px]">
            Comprehensive support for a wide range of developmental and behavioural concerns.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {concerns.map(({ title, description, Icon, iconColor, iconBg, linkText, href }) => (
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

              <Link
                to={href || "#assessment"}
                className="mt-auto inline-flex items-center gap-3 text-[11.5px] font-black text-[#3b2b94] transition hover:text-[#8B43BA]"
              >
                {linkText}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.7} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChildHealthCareConcernsSection;
