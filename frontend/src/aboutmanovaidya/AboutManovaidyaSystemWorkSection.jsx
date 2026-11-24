import React from "react";
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Lightbulb,
  MapPinned,
  // Sprout, // used by the commented-out Neuro-Ayurveda System card below
  UsersRound,
} from "lucide-react";
// Used by the commented-out Neuro-Ayurveda System card below.
// import systemDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";

const workSteps = [
  {
    number: "1",
    title: "Assessment",
    description: "Understanding strengths, challenges and influencing factors.",
    Icon: ClipboardCheck,
  },
  {
    number: "2",
    title: "Clarity",
    description:
      "Identifying the areas that may be affecting development, behaviour, learning or wellbeing.",
    Icon: Lightbulb,
  },
  {
    number: "3",
    title: "Personalised\nRoadmap",
    description:
      "Creating a structured plan based on individual needs and goals.",
    Icon: MapPinned,
  },
  {
    number: "4",
    title: "Guidance &\nSupport",
    description:
      "Providing ongoing recommendations, education and direction.",
    Icon: UsersRound,
  },
  {
    number: "5",
    title: "Progress\nTracking",
    description:
      "Monitoring progress and adjusting strategies when needed.",
    Icon: BarChart3,
  },
];

function AboutManovaidyaSystemWorkSection() {
  return (
    <section className="bg-[#fbfaff] px-[10px] py-7 sm:py-8 lg:py-9">
      <div className="grid w-full items-stretch gap-4">
        {/* Neuro-Ayurveda Development System card (hidden for now).
            To restore: uncomment this block and the two imports above, and
            put back lg:grid-cols-2 on the wrapper div.
        <div className="grid overflow-hidden rounded-xl border border-[#8B43BA]/12 bg-white shadow-[0_14px_34px_rgba(31,19,56,0.07)] lg:min-h-[330px] lg:grid-cols-[0.32fr_0.68fr]">
          <div className="flex flex-col justify-center px-4 py-6 text-center sm:px-7 lg:py-7 lg:text-left">
            <div className="mb-3 flex justify-center lg:justify-start">
              <Sprout className="h-7 w-7 text-[#8B43BA]" strokeWidth={1.8} />
            </div>
            <h2 className="text-[24px] font-black leading-[1.12] text-[#4d2a74] sm:text-[28px] lg:text-[25px] xl:text-[27px]">
              <span className="block lg:whitespace-nowrap">
                The Neuro-Ayurveda
              </span>
              <span className="block text-[#8B43BA] lg:whitespace-nowrap">
                Development System
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[330px] text-[13.5px] font-bold leading-[1.72] text-[#251553] sm:text-[15px] lg:mx-0">
              A comprehensive framework that looks beyond symptoms and focuses
              on the root factors influencing development, behaviour and
              wellbeing.
            </p>
            <a
              href="/about/approach/"
              className="mx-auto mt-5 inline-flex h-11 w-full max-w-[260px] items-center justify-center gap-3 rounded-lg bg-[#4d238e] px-5 text-[13px] font-black text-white shadow-[0_12px_24px_rgba(77,35,142,0.22)] transition hover:-translate-y-0.5 sm:w-auto lg:mx-0"
            >
              Explore Our Approach
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>

          <div className="flex h-full items-center justify-center px-2 pb-6 pt-0 sm:px-4 sm:pb-7 lg:translate-x-10 lg:px-0 lg:py-4">
            <img
              src={systemDiagramImage}
              alt="Neuro-Ayurveda Development System diagram"
              className="mx-auto w-full max-w-[430px] scale-[1.08] object-contain sm:max-w-[560px] sm:scale-[1.24] lg:max-w-[1000px] lg:scale-[1.9]"
              loading="lazy"
            />
          </div>
        </div>
        */}

        <div className="flex flex-col justify-center rounded-xl border border-[#8B43BA]/12 bg-white px-4 py-6 shadow-[0_14px_34px_rgba(31,19,56,0.07)] sm:px-7 lg:min-h-[330px] lg:px-10 lg:py-10">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="hidden h-px w-24 bg-[#8B43BA]/24 sm:block lg:w-40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B43BA]" />
            <h2 className="text-[24px] font-black leading-tight text-[#4d2a74] sm:text-[28px] lg:text-[34px]">
              How We <span className="text-[#8B43BA]">Work</span>
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B43BA]" />
            <span className="hidden h-px w-24 bg-[#8B43BA]/24 sm:block lg:w-40" />
          </div>

          <div className="mt-6 grid gap-5 min-[420px]:grid-cols-2 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-6">
            {workSteps.map(({ number, title, description, Icon }, index) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <div className="relative mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#8B43BA]/20 bg-white text-[#8B43BA] shadow-[0_10px_24px_rgba(31,19,56,0.06)] lg:h-24 lg:w-24">
                  <Icon className="h-8 w-8 lg:h-10 lg:w-10" strokeWidth={1.7} />
                </div>
                {index < workSteps.length - 1 && (
                  // Centred in the gap between this step and the next.
                  <ArrowRight className="absolute left-[calc(100%+12px)] top-12 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#8B43BA] lg:block" strokeWidth={1.8} />
                )}

                <p className="mt-3 text-[14px] font-black leading-none text-[#5a31ad] lg:mt-4 lg:text-[16px]">
                  {number}
                </p>
                <h3 className="mt-2 min-h-[38px] whitespace-pre-line text-[13px] font-black leading-[1.25] text-[#5a31ad] lg:min-h-[44px] lg:text-[17px]">
                  {title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[150px] text-[11.5px] font-bold leading-[1.48] text-[#251553] lg:mt-2 lg:max-w-[240px] lg:text-[14px] lg:leading-[1.6]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutManovaidyaSystemWorkSection;
