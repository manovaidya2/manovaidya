import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Gift,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import heroImage from "../images/mind-body-wellbeing-hero.png";

const trustItems = [
  { label: "Holistic & Integrative", Icon: Leaf },
  { label: "Evidence-Informed", Icon: ShieldCheck },
  { label: "Ayurveda-Powered", Icon: Sparkles },
  { label: "Personalised Care", Icon: BadgeCheck },
  { label: "Expert Guidance", Icon: Brain },
];

const stats = [
  { value: "10+", label: "Years of\nExperience", Icon: UsersRound },
  { value: "50,000+", label: "People\nSupported", Icon: UsersRound },
  { value: "20+", label: "Specialised\nPrograms", Icon: Gift },
  { value: "India Wide", label: "Online & In-Person\nConsultations", Icon: MapPin },
];

function MindBodyWellbeingHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative min-h-[650px] w-full overflow-hidden lg:min-h-[520px]">
        <img
          src={heroImage}
          alt="Woman meditating peacefully in a warm living room"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-[68%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.99)_29%,rgba(255,255,255,0.87)_42%,rgba(255,255,255,0.22)_59%,rgba(255,255,255,0)_75%)]" />

        <div className="relative z-10 flex min-h-[650px] flex-col px-5 pb-5 pt-6 sm:px-8 lg:min-h-[520px] lg:px-10 lg:pb-5 lg:pt-5">
          <div className="max-w-[610px]">
            <span className="inline-flex rounded-full bg-[#8B43BA]/12 px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.04em] text-[#8B43BA]">
              Mind &amp; Body Concerns
            </span>

            <h1 className="mt-4 font-serif text-[39px] font-bold leading-[1.04] sm:text-[48px] lg:text-[47px] xl:text-[51px]">
              <span className="text-[#18181b]">Mind &amp; Body Balance</span>
              <br />
              <span className="text-[#8B43BA]">for a Healthier, Happier You</span>
            </h1>

            <h2 className="mt-4 text-[19px] font-black leading-[1.35] sm:text-[22px]">
              <span className="text-[#18181b]">Heal Your Mind. Strengthen Your Body.</span>
              <br />
              <span className="text-[#8B43BA]">Live in Balance.</span>
            </h2>

            <p className="mt-3 max-w-[570px] text-[14px] font-bold leading-[1.55] text-[#18181b]/75 sm:text-[15px]">
              Holistic care for stress, fatigue, poor sleep, lifestyle disorders,
              pain, digestive issues and more. Evidence-informed.
              Ayurveda-powered. Personalised for you.
            </p>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex h-[50px] min-w-[182px] items-center justify-center gap-5 rounded-md bg-[#8B43BA] px-6 text-[13px] font-black text-white shadow-[0_12px_24px_rgba(139,67,186,0.24)] transition hover:bg-[#76369f]"
              >
                Book Assessment
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="#programs"
                className="inline-flex h-[50px] min-w-[182px] items-center justify-center gap-5 rounded-md border-2 border-[#8B43BA] bg-white/90 px-6 text-[13px] font-black text-[#8B43BA] transition hover:bg-[#8B43BA]/5"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <p className="absolute right-10 top-[16%] hidden max-w-[270px] font-serif text-[24px] font-bold leading-[1.22] text-white drop-shadow-[0_2px_8px_rgba(60,36,29,0.5)] xl:block">
            When Mind is Calm
            <br />
            and Body is Well,
            <br />
            Life Flows Better.
          </p>

          <div className="mt-auto hidden flex-wrap items-center gap-x-7 gap-y-3 pb-1 lg:flex lg:max-w-[650px]">
            {trustItems.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-[18px] w-[18px] text-[#8B43BA]" strokeWidth={2.2} />
                <span className="text-[10.5px] font-black text-[#18181b]">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid overflow-hidden rounded-xl bg-white/96 shadow-[0_12px_30px_rgba(45,31,87,0.13)] ring-1 ring-[#e4dfed] backdrop-blur sm:grid-cols-2 lg:absolute lg:-bottom-1 lg:right-10 lg:mt-0 lg:w-[610px] lg:grid-cols-4">
            {stats.map(({ value, label, Icon }, index) => (
              <article
                key={value}
                className={`flex min-h-[120px] flex-col items-center justify-center px-4 py-4 text-center ${
                  index > 0 ? "sm:border-l sm:border-[#e3dfeb]" : ""
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B43BA]/12 text-[#8B43BA]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <strong className="mt-2 text-[21px] font-black leading-tight text-[#8B43BA]">{value}</strong>
                <span className="mt-2 whitespace-pre-line text-[10px] font-black leading-[1.35] text-[#18181b]">
                  {label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MindBodyWellbeingHeroSection;
