import React from "react";
import {
  ArrowRight,
  BatteryMedium,
  Brain,
  Flower2,
  HeartPulse,
  MoonStar,
  Scale,
  Salad,
  UserRound,
  Activity,
} from "lucide-react";

const concerns = [
  {
    title: "Stress & High Blood Pressure",
    description: "Chronic stress, burnout, mental fatigue and irritability.",
    href: "/stress-and-high-blood-pressure/",
    Icon: Brain,
    iconClass: "bg-[#eee5ff] text-[#5d40b6]",
  },
  {
    title: "Stress \nIBS Support",
    description: "Insomnia, poor sleep quality, restless or non-restorative sleep.",
    href: "/stress-ibs-support-india/",
    Icon: MoonStar,
    iconClass: "bg-[#e3efff] text-[#3869ca]",
  },
  {
    title: "Stress &\nFatigue Support",
    description: "Constant tiredness, low stamina and lack of motivation.",
    href: "/stress-and-fatigue/",
    Icon: BatteryMedium,
    iconClass: "bg-[#e7f3df] text-[#5d9638]",
  },
  {
    title: "Stress &\nDigestive Health",
    description: "Tension headaches, migraine, neck pain, back pain and more.",
    href: "/stress-and-digestive-health/",
    Icon: UserRound,
    iconClass: "bg-[#fff0d5] text-[#a77820]",
  },
  {
    title: "Stress &\nAcidity Support",
    description: "Acidity, bloating, IBS, constipation and other digestive concerns.",
    href: "/stress-and-acidity/",
    Icon: Salad,
    iconClass: "bg-[#ffe7ed] text-[#e14f79]",
  },
  {
    title: "Stress &\nMigraine Support",
    description: "Support for stress-related migraine, tension headaches, and head pain.",
    href: "/stress-and-migraine/",
    Icon: Brain,
    iconClass: "bg-[#dcf4f4] text-[#258f99]",
  },
  {
    title: "Stress & Headaches Treatment",
    description: "Support for tension-type headaches, recurring head pain & stress-related tension.",
    href: "/stress-and-headaches/",
    Icon: HeartPulse,
    iconClass: "bg-[#eee4ff] text-[#6345b8]",
  },
  {
    title: "Stress &\nThyroid Support",
    description: "Support for thyroid health, hormonal balance & emotional wellbeing.",
    href: "/stress-and-thyroid/",
    Icon: Activity,
    iconClass: "bg-[#ffe8e8] text-[#e84a4a]",
  },
];

function MindBodyConcernsSection() {
  return (
    <section id="programs" className="bg-white px-4 py-7 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto w-full">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-[2px] w-16 bg-[#8B43BA]/45 sm:block" />
            <h2 className="text-[30px] font-black leading-none sm:text-[34px] lg:text-[38px]">
              <span className="text-[#18181b]">Concerns </span>
              <span className="text-[#8B43BA]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-16 bg-[#8B43BA]/45 sm:block" />
          </div>
          <p className="mt-2 text-[14px] font-bold text-[#4c4562] sm:text-[15px]">
            Comprehensive support for common mind-body and lifestyle challenges.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
          {concerns.map(({ title, description, href = "#assessment", Icon, iconClass }) => (
            <article
              key={title}
              className="flex min-h-[300px] min-w-0 flex-col items-center rounded-md border border-[#e5e1eb] bg-white px-3 py-5 text-center shadow-[0_8px_22px_rgba(44,30,85,0.06)]"
            >
              <span className={`flex h-[58px] w-[58px] items-center justify-center rounded-full ${iconClass}`}>
                <Icon className="h-8 w-8" strokeWidth={1.9} />
              </span>

              <h3 className="mt-5 min-h-[48px] whitespace-pre-line text-[16px] font-black leading-[1.3] text-[#342477]">
                {title}
              </h3>

              <p className="mt-3 text-[12.5px] font-semibold leading-[1.6] text-[#443d5e]">
                {description}
              </p>

              <a
                href={href}
                className="mt-auto inline-flex items-center gap-2 pt-4 text-[12.5px] font-black text-[#4e2b9c] transition hover:text-[#8B43BA]"
              >
                Explore Support
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MindBodyConcernsSection;
