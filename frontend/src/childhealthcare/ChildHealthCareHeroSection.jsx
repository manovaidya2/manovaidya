import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Puzzle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import childHeroImage from "../images/child-health-care-hero.png";

const trustItems = [
  { label: "Expert Guidance", Icon: BadgeCheck },
  { label: "Personalized Care", Icon: HeartHandshake },
  { label: "Evidence-Informed", Icon: ShieldCheck },
  { label: "Family Support", Icon: UsersRound },
  { label: "Holistic Approach", Icon: Sparkles },
];

const concerns = [
  { label: "Autism", Icon: Puzzle },
  { label: "ADHD", Icon: Brain },
  { label: "Speech Delay", Icon: MessageCircle },
  { label: "Learning Difficulties", Icon: BookOpen },
];

const stats = [
  { value: "10+", label: "Years of\nExperience", Icon: UsersRound },
  { value: "50,000+", label: "Children & Families\nSupported", Icon: UsersRound },
  { value: "20+", label: "Specialized\nPrograms", Icon: Sparkles },
  { value: "India Wide", label: "Online & In-Person\nConsultations", Icon: MapPin },
];

function ChildHealthCareHeroSection() {
  return (
    <React.Fragment>
      <section className="w-full bg-white">
        <div className="relative min-h-[790px] w-full overflow-hidden sm:min-h-[720px] lg:min-h-[600px]">
          <img
            src={childHeroImage}
            alt="Indian parents and their child receiving supportive developmental guidance"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-[66%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.99)_30%,rgba(255,255,255,0.88)_45%,rgba(255,255,255,0.2)_64%,rgba(255,255,255,0)_82%)]" />

          <div className="relative z-10 mx-auto flex min-h-[790px] max-w-[1500px] flex-col px-5 pb-5 pt-6 sm:min-h-[720px] sm:px-8 lg:min-h-[600px] lg:px-10 lg:pb-5 lg:pt-5">
            <div className="max-w-[625px]">
              <span className="inline-flex rounded-full bg-[#eee8fb] px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.04em] text-[#8B43BA]">
                Child Health Care
              </span>

              <h1 className="mt-4 text-[39px] font-bold leading-[1.08] sm:text-[49px] lg:text-[46px] xl:text-[46px]">
                <span className="text-[#18181b]">Child Health Care &amp;</span>
                <br />
                <span className="text-[#8B43BA]">Development Treatment in India</span>
              </h1>

              <h2 className="mt-4 max-w-[610px] text-[17px] font-black leading-[1.45] text-[#18181b] sm:text-[19px]">
                Compassionate. Evidence-Informed. Family-Centred Care.
              </h2>

              <p className="mt-3 max-w-[590px] text-[14px] font-bold leading-[1.6] text-[#18181b]/75 sm:text-[15px]">
                Supporting your child&apos;s growth, learning, communication, behaviour
                and emotional wellbeing through expert care and the Neuro-Ayurveda approach.
              </p>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#assessment"
                  className="inline-flex h-[50px] min-w-[190px] items-center justify-center gap-5 rounded-md bg-[#8B43BA] px-6 text-[13px] font-black text-white shadow-[0_12px_24px_rgba(139,67,186,0.24)] transition hover:bg-[#7835a4]"
                >
                  Book Assessment
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
                <a
                  href="/child-development-care-india/"
                  className="inline-flex h-[50px] min-w-[182px] items-center justify-center gap-5 rounded-md border-2 border-[#8B43BA] bg-white/90 px-6 text-[13px] font-black text-[#8B43BA] transition hover:bg-[#8B43BA]/5"
                >
                  Explore Programs
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            <div className="mt-auto max-w-[680px]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {trustItems.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#8B43BA] shadow-sm ring-1 ring-[#d8cff1]">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2.3} />
                    </span>
                    <span className="text-[12px] font-black text-[#18181b]">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex max-w-[625px] flex-wrap items-center gap-x-5 gap-y-2 rounded-lg bg-[#4a1d91] px-5 py-3 text-white shadow-[0_10px_22px_rgba(74,29,145,0.2)]">
                <span className="text-[11px] font-black">We support children with:</span>
                {concerns.map(({ label, Icon }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-[11px] font-black text-white/95">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
                      <Icon className="h-3 w-3" strokeWidth={2.2} />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 grid overflow-hidden rounded-xl bg-white/96 shadow-[0_12px_30px_rgba(45,31,87,0.13)] ring-1 ring-[#e4dfed] backdrop-blur sm:grid-cols-2 lg:grid-cols-4 xl:absolute xl:-bottom-1 xl:right-10 xl:mt-0 xl:w-[650px]">
              {stats.map(({ value, label, Icon }, index) => (
                <article
                  key={value}
                  className={`flex min-h-[116px] flex-col items-center justify-center px-3 py-4 text-center ${index > 0 ? "sm:border-l sm:border-[#e3dfeb]" : ""
                    }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B43BA]/10 text-[#8B43BA]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <strong className="mt-2 text-[20px] font-black leading-tight text-[#8B43BA]">{value}</strong>
                  <span className="mt-2 whitespace-pre-line text-[10px] font-black leading-[1.35] text-[#18181b]">
                    {label}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ChildHealthCareHeroSection;
