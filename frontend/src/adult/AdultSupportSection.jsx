import React from "react";
import {
  ChartNoAxesCombined,
  ClipboardList,
  Heart,
  HeartHandshake,
  UserRound,
} from "lucide-react";
import supportImage from "../images/adult-wellness-support.png";

const steps = [
  {
    title: "In-Depth\nAssessment",
    description:
      "Understanding your mental, emotional and lifestyle challenges in detail.",
    Icon: ClipboardList,
    circleClass: "bg-[#2f167e] text-white",
  },
  {
    title: "Personalized\nPlan",
    description:
      "A tailored treatment plan based on your unique needs and goals.",
    Icon: UserRound,
    circleClass: "bg-[#fff0e8] text-[#ff7d45]",
  },
  {
    title: "Evidence-Informed\nTherapies",
    description:
      "Science-based therapies like CBT, ACT, mindfulness and more.",
    Icon: HeartHandshake,
    circleClass: "bg-[#e4f3ff] text-[#348cd7]",
  },
  {
    title: "Progress\nTracking",
    description:
      "Regular follow-ups to track improvement and adjust the plan.",
    Icon: ChartNoAxesCombined,
    circleClass: "bg-[#eaf5dd] text-[#67a541]",
  },
  {
    title: "Holistic\nWellbeing",
    description:
      "Focus on mind, body, emotions and lifestyle for lasting change.",
    Icon: Heart,
    circleClass: "bg-[#dc3d82] text-white",
  },
];

function AdultSupportSection() {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-4">
      <div className="mx-auto grid items-stretch gap-7 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_440px]">
        <div className="flex min-w-0 flex-col justify-center py-2 lg:py-0">
          <div className="mb-5 text-center lg:mb-4">
            <h2 className="text-[27px] font-black leading-tight sm:text-[31px] lg:text-[30px]">
              <span className="text-[#18181b]">How Manovaidya Supports </span>
              <span className="text-[#8B43BA]">You</span>
            </h2>
            <p className="mt-1.5 text-[12px] font-bold text-[#514967] sm:text-[13px]">
              A structured and personalized approach to help you heal, grow and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map(({ title, description, Icon, circleClass }, index) => (
              <article
                key={title}
                className="relative flex min-w-0 flex-col items-center px-3 text-center lg:px-2 xl:px-3"
              >
                {index < steps.length - 1 && (
                  <span className="absolute left-[calc(50%+32px)] top-[29px] hidden w-[calc(100%-64px)] border-t-2 border-dotted border-[#8e82bd] lg:block" />
                )}

                <div
                  className={`relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full ${circleClass}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>

                <h3 className="mt-3 min-h-[38px] whitespace-pre-line text-[12px] font-black leading-[1.35] text-[#33277a] xl:text-[14px]">
                  {index + 1}. {title}
                </h3>
                <p className="mt-2 max-w-[170px] text-[10.5px] font-semibold leading-[1.55] text-[#4c456d] xl:text-[13px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[290px] overflow-hidden rounded-md sm:min-h-[340px] lg:min-h-[270px]">
          <img
            src={supportImage}
            alt="Woman enjoying a calm moment at home with a warm drink"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AdultSupportSection;
