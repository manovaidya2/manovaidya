import React from "react";
import {
  ChartNoAxesCombined,
  ClipboardList,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";
import supportImage from "../images/teen-family-support.png";

const supportSteps = [
  {
    title: "Comprehensive\nAssessment",
    description:
      "Understanding emotional, behavioural, academic and lifestyle factors.",
    Icon: ClipboardList,
    circleClass: "bg-[#2f167e] text-white",
  },
  {
    title: "Personalized\nSupport Plan",
    description:
      "Customised plan based on your teen's unique needs and challenges.",
    Icon: UserRound,
    circleClass: "bg-[#fff0e8] text-[#ff7d45]",
  },
  {
    title: "Teen-Focused\nInterventions",
    description:
      "Evidence-informed strategies to build emotional balance and resilience.",
    Icon: UsersRound,
    circleClass: "bg-[#e9f5ff] text-[#3f98eb]",
  },
  {
    title: "Progress\nMonitoring",
    description:
      "Regular tracking to measure improvement and adapt support.",
    Icon: ChartNoAxesCombined,
    circleClass: "bg-[#eaf5dd] text-[#67a541]",
  },
  {
    title: "Family\nInvolvement",
    description:
      "Guiding parents to build stronger understanding and lasting support.",
    Icon: Target,
    circleClass: "bg-[#dc3d82] text-white",
  },
];

function TeenMentalSupportProcessSection() {
  return (
    <section className="bg-white px-4 py-7 sm:px-6 lg:px-8 lg:py-3">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-7 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="flex min-w-0 flex-col justify-center py-2 lg:py-0">
          <div className="mb-5 text-center lg:mb-3">
            <h2 className="text-[36px] font-bold leading-tight">
              <span className="text-[#18181b]">How Manovaidya Supports </span>
              <span className="text-[#8b43ba]">Teens &amp; Families</span>
            </h2>
            <p className="mt-1 font-bold text-[#51467d]">
              A structured process to understand, support and guide teenagers towards a healthier and balanced life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {supportSteps.map(({ title, description, Icon, circleClass }, index) => (
              <article
                key={title}
                className="relative flex min-w-0 flex-col items-center px-3 text-center lg:px-2 xl:px-3"
              >
                {index < supportSteps.length - 1 && (
                  <span className="absolute left-[calc(50%+32px)] top-[27px] hidden w-[calc(100%-64px)] border-t-2 border-dotted border-[#8e82bd] lg:block" />
                )}

                <div
                  className={`relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full ${circleClass}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>

                <h3 className="mt-2 whitespace-pre-line font-black leading-[1.35] text-[#33277a]">
                  {index + 1}. {title}
                </h3>
                <p className="mt-3 max-w-[165px] font-semibold leading-[1.55] text-[#4c456d]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[7px] sm:min-h-[330px] lg:min-h-[250px]">
          <img
            src={supportImage}
            alt="Indian parents supporting their teenage son during a family conversation"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default TeenMentalSupportProcessSection;
