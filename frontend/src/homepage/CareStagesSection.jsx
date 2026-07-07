import React from "react";
import {
  ArrowRight,
  Brain,
  CircleCheck,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import childImage from "../images/care-stage-child-generated.png";
import boyImage from "../images/care-stage-teen-generated.png";
import adultImage from "../images/care-stage-adult-generated.png";
import seniorImage from "../images/care-stage-senior-generated.png";
import womenImage from "../images/care-stage-women-generated.png";
import mindBodyImage from "../images/care-stage-mind-body-generated.png";

const careStages = [
  {
    title: "Child Health Care",
    image: childImage,
    Icon: HeartPulse,
    color: "violet",
    link: "/child-health-care",
    description:
      "Supporting children's growth, development and emotional wellbeing",
    items: [
      "Autism Spectrum Disorder",
      "ADHD & Attention Difficulties",
      "Speech & Language Delay",
      "Learning Difficulties",
      "Behavioral Concerns",
      "Child Development Support",
    ],
  },
  {
    title: "Teen Mental Wellness",
    image: boyImage,
    Icon: UserRound,
    color: "emerald",
    link: "/teen-mental-wellness",
    description:
      "Guiding teenagers towards emotional balance, confidence and a positive future",
    items: [
      "Teen Stress & Anxiety",
      "Teen Depression & Low Mood",
      "Exam & Performance Pressure",
      "Teen Confidence & Emotional Wellbeing",
      "Screen Addiction & Digital Wellbeing",
      "Parent-Teen Relationship Support",
    ],
  },
  {
    title: "Adult Mental Health Care",
    image: adultImage,
    Icon: Brain,
    color: "sky",
    link: "/adult-mental-wellness",
    description:
      "Compassionate care for stress, anxiety, emotional challenges and life balance",
    items: [
      "Anxiety & Stress",
      "Depression & Low Mood",
      "OCD & Perfectionism",
      "Panic Disorder",
      "Anger & Emotional Regulation",
      "Work Stress & Burnout",
    ],
  },
  {
    title: "Senior Mind & Memory Care",
    image: seniorImage,
    Icon: ShieldCheck,
    color: "orange",
    link: "/senior-mind-memory-care",
    description:
      "Supporting healthy ageing, memory, cognitive strength and emotional wellbeing",
    items: [
      "Memory Loss",
      "Dementia Treatment",
      "Alzheimer's Care",
      "Ageing & Emotional Wellbeing",
      "Focus & Brain Health",
      "Senior Mental Wellness",
    ],
  },
  {
    title: "Women Mental Health",
    image: womenImage,
    Icon: Sparkles,
    color: "pink",
    link: "/women-health-care",
    description:
      "Empowering women through every phase of life with care and understanding",
    items: [
      "PCOS & Hormonal Imbalance",
      "Postpartum Depression",
      "Pregnancy & Prenatal Wellness",
      "Mood Swings & Irritability",
      "Stress & Anxiety in Women",
      "Menopause & Emotional Wellbeing",
    ],
  },
  {
    title: "Mind & Body Wellbeing",
    image: mindBodyImage,
    Icon: Leaf,
    color: "green",
    link: "/mind-body-wellbeing",
    description:
      "Holistic support for physical symptoms linked with stress and emotional health",
    items: [
      "Migraine & Headache",
      "Sleep Problems (Insomnia)",
      "Gut-Brain Connection",
      "Stress Related Physical Issues",
      "Fatigue & Low Energy",
      "Mind-Body Balance",
    ],
  },
];

const colorClasses = {
  violet: {
    icon: "bg-[#4b207f]",
    title: "text-[#4b207f]",
    button: "bg-[#4b207f] hover:bg-[#3c1868]",
  },
  emerald: {
    icon: "bg-[#5d2d89]",
    title: "text-[#4b207f]",
    button: "bg-[#5d2d89] hover:bg-[#4b2070]",
  },
  sky: {
    icon: "bg-[#4b207f]",
    title: "text-[#4b207f]",
    button: "bg-[#4b207f] hover:bg-[#3c1868]",
  },
  orange: {
    icon: "bg-[#3f7f42]",
    title: "text-[#3f7f42]",
    button: "bg-[#3f7f42] hover:bg-[#326a35]",
  },
  pink: {
    icon: "bg-[#de4c7f]",
    title: "text-[#de4c7f]",
    button: "bg-[#de4c7f] hover:bg-[#c93a6d]",
  },
  green: {
    icon: "bg-[#13898a]",
    title: "text-[#13898a]",
    button: "bg-[#13898a] hover:bg-[#0f7475]",
  },
};

function CareStagesSection() {
  return (
    <section id="conditions" className="bg-[#fbfaff] px-4 py-8 sm:px-6 lg:px-10 lg:py-9">
      <div className="mx-auto w-full">
        <div className="mx-auto  text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B43BA] sm:text-sm sm:tracking-[0.18em]">
            Care Programs
          </p>
          <h2 className="mt-2 text-[30px] font-bold leading-tight text-[#272047] sm:text-[clamp(30px,5vw,36px)]">
            Care for Every <span className="text-[#8B43BA]">Stage of Life</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] font-medium leading-7 text-slate-600 sm:text-[17px]">
            Personalised Neuro-Ayurveda support for children, teens, adults,
            seniors, women, and mind-body concerns.
          </p>
        </div>

        <div className="mx-auto mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {careStages.map(({ title, description, image, Icon, color, items, link }) => {
            const palette = colorClasses[color];

            return (
              <article
                key={title}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_26px_rgba(31,19,56,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(31,19,56,0.14)]"
              >
                <div className="relative bg-slate-100">
                  <div className="aspect-[16/6.1] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`absolute -bottom-5 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-[3px] ring-white ${palette.icon}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-7">
                  <h3 className={`text-[17px] font-black uppercase leading-tight tracking-wide ${palette.title}`}>
                    {title}
                  </h3>
                  <p className="mt-1.5 max-w-[520px] text-[12px] font-semibold leading-[1.45] text-slate-800">
                    {description}
                  </p>

                  <ul className="mb-3 mt-3 grid gap-x-3 gap-y-1 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[11.2px] font-semibold leading-[1.55] text-slate-700">
                        <CircleCheck className={`mt-0.5 h-3 w-3 shrink-0 ${palette.title}`} strokeWidth={2.4} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={link || "#consultation"}
                    className={`mt-auto inline-flex w-fit items-center gap-2 rounded-md px-3 py-2 text-[11.5px] font-black text-white shadow-[0_10px_18px_rgba(31,19,56,0.16)] transition ${palette.button}`}
                  >
                    Explore {title}
                    <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareStagesSection;
