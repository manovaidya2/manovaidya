import React from "react";
import {
  ChartNoAxesCombined,
  ClipboardList,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";
import supportImage from "../images/child-support-family.png";

const supportSteps = [
  {
    title: "Detailed\nAssessment",
    description:
      "Comprehensive evaluation of development, behaviour, learning, communication and emotional wellbeing.",
    Icon: ClipboardList,
    circleClass: "bg-[#eee6fa] text-[#4b318f]",
  },
  {
    title: "Personalized\nGuidance",
    description:
      "Individualized care plans based on the child's unique strengths and developmental needs.",
    Icon: UserRound,
    circleClass: "bg-[#fff0e8] text-[#ff7d45]",
  },
  {
    title: "Family\nSupport",
    description:
      "Guiding parents with strategies, training and home support for better development outcomes.",
    Icon: UsersRound,
    circleClass: "bg-[#e9f5ff] text-[#3f98eb]",
  },
  {
    title: "Development\nTracking",
    description:
      "Regular monitoring and progress tracking to ensure steady improvement.",
    Icon: ChartNoAxesCombined,
    circleClass: "bg-[#eaf5dd] text-[#67a541]",
  },
  {
    title: "Structured\nRoadmap",
    description:
      "Clear roadmap with goals, timelines and practical strategies for long-term progress.",
    Icon: Target,
    circleClass: "bg-[#ffe0ec] text-[#ef4f7b]",
  },
];

function ChildHealthCareSupportSection() {
  return (
    <section className="bg-white px-4 py-7 sm:px-6 lg:px-8 lg:py-5">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-7 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="flex min-w-0 flex-col justify-center py-2 lg:py-0">
          <div className="mb-8 text-center lg:mb-5">
            <h2 className="text-[26px] font-bold leading-tight sm:text-[32px]">
              <span className="text-[#18181b]">How Manovaidya Supports </span>
              <span className="text-[#8b43ba]">Children & Families</span>
            </h2>
            <p className="mt-2 text-[14px] font-bold text-[#51467d] sm:text-[15px]">
              A structured process to understand your child&apos;s unique needs and create a personalized roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {supportSteps.map(({ title, description, Icon, circleClass }, index) => (
              <article
                key={title}
                className="relative flex min-w-0 flex-col items-center px-3 text-center lg:px-2 xl:px-3"
              >
                {index < supportSteps.length - 1 && (
                  <span className="absolute left-[calc(50%+32px)] top-[27px] hidden w-[calc(100%-64px)] border-t-2 border-dotted border-[#8e82bd] lg:block" />
                )}

                <div
                  className={`relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full ${circleClass} ring-1 ring-black/5`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>

                <h3 className="mt-3 whitespace-pre-line text-[14px] font-black leading-[1.35] text-[#33277a] xl:text-[15px]">
                  {index + 1}. {title}
                </h3>
                <p className="mt-3 max-w-[170px] text-[12px] font-semibold leading-[1.55] text-[#4c456d] xl:text-[12.5px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[7px] sm:min-h-[330px] lg:min-h-[250px]">
          <img
            src={supportImage}
            alt="Happy Indian parents and their young daughter sitting on a couch, looking at a tablet together"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ChildHealthCareSupportSection;
