import React from "react";
import {
  ArrowRight,
  Brain,
  CloudRain,
  GraduationCap,
  Phone,
  UserRound,
  UsersRound,
} from "lucide-react";

const supportAreas = [
  {
    title: "Teen Stress &\nAnxiety",
    description:
      "Helping teens manage stress, worry, overthinking and daily pressure effectively.",
    action: "Explore Stress Support",
    Icon: Brain,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/teen-stress-anxiety-support",
  },
  {
    title: "Depression &\nLow Mood",
    description:
      "Support for low mood, sadness, loss of interest, loneliness and emotional heaviness.",
    action: "Explore Depression Support",
    Icon: CloudRain,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/teen-depression-support",
  },
  {
    title: "Exam & Academic\nPressure",
    description:
      "Guidance to handle exam stress, performance pressure and academic expectations.",
    action: "Explore Exam Support",
    Icon: GraduationCap,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/exam-performance-pressure",
  },
  {
    title: "Low Confidence &\nSelf-Esteem",
    description:
      "Building self-belief, self-worth and a positive body and self-image.",
    action: "Explore Confidence Support",
    Icon: UserRound,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/teen-confidence-emotional-wellbeing",
  },
  {
    title: "Screen Addiction &\nDigital Wellbeing",
    description:
      "Support for excessive screen use, gaming addiction and digital distraction.",
    action: "Explore Digital Wellbeing",
    Icon: Phone,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/teen-screen-addiction-support",
  },
  {
    title: "Parent-Teen\nRelationship Support",
    description:
      "Improving communication, understanding and emotional connection at home.",
    action: "Explore Relationship Support",
    Icon: UsersRound,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA]",
    href: "/parent-teen-relationship-support",
  },
];

function TeenMentalSupportAreasSection() {
  return (
    <section id="programs" className="border-t border-[#eeeaf3] bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-9">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-[2px] w-14 bg-[#8B43BA]/55 sm:block" />
            <h2 className="text-[28px] font-black leading-none sm:text-[32px] lg:text-[36px]">
              <span className="text-[#18181b]">Areas </span>
              <span className="text-[#8B43BA]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-14 bg-[#8B43BA]/55 sm:block" />
          </div>
          <p className="mt-2 text-[13px] font-bold text-[#18181b]/70 sm:text-[14px]">
            Specialized support for common emotional and behavioural challenges in teenagers.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {supportAreas.map(({ title, description, action, Icon, iconClass, href }) => (
            <article
              key={title}
              className="flex min-h-[310px] min-w-0 flex-col items-center rounded-md border border-[#e2deea] bg-white px-3 py-5 text-center shadow-[0_8px_22px_rgba(45,32,84,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(45,32,84,0.11)]"
            >
              <span className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                <Icon className="h-8 w-8" strokeWidth={2} />
              </span>

              <h3 className="mt-5 min-h-[50px] whitespace-pre-line text-[16px] font-black leading-[1.35] text-[#8B43BA]">
                {title}
              </h3>

              <p className="mt-3 text-[13px] font-semibold leading-[1.7] text-[#18181b]/75">
                {description}
              </p>

              <a
                href={href || "#assessment"}
                className="mt-auto inline-flex items-center gap-2 whitespace-nowrap pt-4 text-[10.5px] font-black text-[#8B43BA] transition hover:text-[#18181b]"
              >
                {action}
                <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeenMentalSupportAreasSection;
