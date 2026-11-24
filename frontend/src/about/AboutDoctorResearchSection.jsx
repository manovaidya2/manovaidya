import React from "react";
import { Baby, Brain, HeartPulse, Microscope, Network } from "lucide-react";
import researchImage from "../images/doctor-research-gut-brain-axis.webp";

const researchAreas = [
  {
    title: "Gut-Brain Connection",
    text: "Exploring how communication between the digestive system and the brain may influence different aspects of overall wellbeing.",
    Icon: Network,
    color: "text-[#ff8a62]",
    bg: "bg-[#ff8a62]/12",
  },
  {
    title: "Brain & Behaviour",
    text: "Understanding the relationship between brain functioning, behavioural patterns and everyday responses.",
    Icon: Brain,
    color: "text-[#7e63df]",
    bg: "bg-[#7e63df]/10",
  },
  {
    title: "Emotional & Mental Wellbeing",
    text: "Exploring factors that contribute to emotional balance, mental wellness and overall quality of life.",
    Icon: HeartPulse,
    color: "text-[#e65395]",
    bg: "bg-[#e65395]/12",
  },
  {
    title: "Child Development & Behaviour",
    text: "Developing a deeper understanding of childhood development, learning patterns and behavioural differences.",
    Icon: Baby,
    color: "text-[#55b76b]",
    bg: "bg-[#55b76b]/12",
  },
];

function AboutDoctorResearchSection() {
  return (
    <section className="bg-[#fbfaff] px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pb-16">
      <div className="mx-auto w-full rounded-2xl border border-[#8B43BA]/12 bg-white px-4 py-6 shadow-[0_12px_34px_rgba(31,19,56,0.08)] sm:px-8 sm:py-8 lg:px-9">
        <h2 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-[24px] font-black leading-tight text-[#4d2a74] sm:gap-x-8 sm:gap-y-2 sm:text-[clamp(24px,2.4vw,36px)]">
          <span className="text-[#8B43BA]">...</span>
          <span>Advancing Research in Brain Health &amp; Behaviour</span>
          <span className="text-[#8B43BA]">...</span>
        </h2>

        <div className="mt-6 grid items-center gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-[14px] font-bold leading-7 text-[#251553] sm:space-y-5 sm:text-[15px] sm:leading-8">
            <p>
              Dr. Ankush Garg believes that understanding health requires
              looking beyond individual symptoms. His research interests focus
              on exploring how the brain, gut, behaviour and emotional wellbeing
              are connected.
            </p>
            <p>
              Through his work in Neuro-Ayurveda, he aims to bring traditional
              Ayurvedic perspectives together with modern scientific
              understanding. His academic research explores the Gut-Brain Axis
              and its possible relationship with behaviour, neurological
              functioning and emotional health.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-2xl border border-[#8B43BA]/10 shadow-[0_16px_38px_rgba(31,19,56,0.12)]">
            <img
              src={researchImage}
              alt="Illustration of the gut-brain axis linking brain health, gut health, behaviour and emotional wellbeing"
              width="1400"
              height="1123"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <h3 className="mt-8 text-center text-[19px] font-black leading-tight text-[#4d2a74] sm:mt-10 sm:text-[22px]">
          Key Areas of Research Interest
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {researchAreas.map(({ title, text, Icon, color, bg }, index) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-[#8B43BA]/10 bg-[#8B43BA]/5 p-5 shadow-[0_10px_26px_rgba(139,67,186,0.07)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="text-[28px] font-black leading-none text-[#8B43BA]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-4 text-[15px] font-black leading-6 text-[#251553] sm:text-[16px]">
                {title}
              </h4>
              <p className="mt-2 text-[13px] font-bold leading-6 text-[#251553]/80 sm:text-[13.5px]">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[linear-gradient(120deg,#4d238e_0%,#6540c5_100%)] px-5 py-6 text-white shadow-[0_16px_34px_rgba(77,35,142,0.24)] sm:mt-10 sm:px-8 sm:py-8">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 lg:gap-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#8B43BA] sm:h-20 sm:w-20">
              <Microscope className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="text-[21px] font-black leading-tight sm:text-[26px]">
                Bringing Research into a Broader Perspective
              </h3>
              <div className="mt-3 grid gap-3 text-[13.5px] font-semibold leading-7 text-white/88 sm:mt-4 sm:text-[14.5px] lg:grid-cols-2 lg:gap-8">
                <p>
                  For Dr. Ankush Garg, research is an ongoing process of
                  learning, questioning and discovering new perspectives. His
                  interest in Neuro-Ayurveda reflects an effort to understand
                  the relationship between traditional knowledge and modern
                  research.
                </p>
                <p>
                  His vision is to encourage a more comprehensive understanding
                  of brain health, behaviour and human development through
                  continued learning and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctorResearchSection;
