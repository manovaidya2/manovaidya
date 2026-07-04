import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import womenHeroImage from "../images/women-mental-health-hero.png";

const trustItems = [
  { label: "Confidential & Safe", Icon: ShieldCheck },
  { label: "Expert Care", Icon: BadgeCheck },
  { label: "Evidence-Informed", Icon: ShieldCheck },
  { label: "Holistic Approach", Icon: Sparkles },
  { label: "Empowering Women", Icon: HeartHandshake },
];

const stats = [
  {
    value: "10+",
    label: "Years of\nExperience",
    Icon: UsersRound,
  },
  {
    value: "50,000+",
    label: "Women\nSupported",
    Icon: UsersRound,
  },
  {
    value: "20+",
    label: "Specialized\nPrograms",
    Icon: Sparkles,
  },
  {
    value: "India Wide",
    label: "Online & In-Person\nConsultations",
    Icon: MapPin,
  },
];

function WomenHealthCareHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[620px] lg:min-h-[520px]">
        <img
          src={womenHeroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_28%,rgba(255,255,255,0.77)_43%,rgba(255,255,255,0.12)_64%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1500px] flex-col px-5 pb-6 pt-5 sm:px-8 lg:min-h-[520px] lg:px-12">
          <div className="max-w-[590px]">
            <span className="inline-flex rounded-full bg-[#eee8fb] px-5 py-1.5 text-[14px] font-bold uppercase tracking-[0.02em] text-[#5630b8]">
              Women Mental Health Concerns
            </span>

            <h1 className="mt-3 text-[40px] font-bold leading-[1.08] sm:text-[56px] lg:text-[48px]">
              <span className="text-[#18181b]">Women Mental Health</span>
              <br />
              <span className="text-[#8b43ba]">Care in India</span>
            </h1>

            <h2 className="mt-3 text-[21px] font-bold leading-[1.35] sm:text-[26px]">
              <span className="text-[#18181b]">Because Every Woman Deserves to Feel</span>
              <br />
              <span className="text-[#8b43ba]">Heard, Supported &amp; Empowered.</span>
            </h2>

            <p className="mt-5 max-w-[545px] text-[16px] font-bold leading-[1.65] text-[#473f72] sm:text-[18px]">
              Compassionate care for stress, anxiety, mood changes, hormonal
              challenges, relationships and more. Evidence-informed. Holistic. Confidential.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[8px] bg-[#8B43BA] px-9 text-[15px] font-extrabold text-white shadow-[0_12px_24px_rgba(67,32,159,0.2)] transition hover:bg-[#7835a4]"
              >
                Book Assessment
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="#programs"
                className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[8px] border-2 border-[#b8aadf] bg-white/80 px-9 text-[15px] font-extrabold text-[#8B43BA] shadow-[0_8px_18px_rgba(67,32,159,0.08)] transition hover:bg-white"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4 pb-1">
            {trustItems.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#5630b8] shadow-sm ring-1 ring-[#d8cff1]">
                  <Icon className="h-4 w-4" strokeWidth={2.3} />
                </span>
                <span className="text-[12px] font-extrabold text-[#3a3067]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid rounded-[12px] bg-white/95 shadow-[0_10px_30px_rgba(40,28,82,0.12)] ring-1 ring-[#ebe6f6] backdrop-blur sm:grid-cols-2 lg:absolute lg:-bottom-2 lg:right-3 lg:mt-0 lg:w-[620px] lg:grid-cols-4">
            {stats.map(({ value, label, Icon }, index) => (
              <div
                key={value}
                className={`flex min-h-[108px] flex-col items-center justify-center px-4 py-3 text-center ${
                  index > 0 ? "lg:border-l lg:border-[#e1ddeb]" : ""
                }`}
              >
                <Icon className="h-7 w-7 text-[#8B43BA]" strokeWidth={2.1} />
                <strong className="mt-2 text-[22px] font-extrabold leading-tight text-[#8B43BA]">
                  {value}
                </strong>
                <span className="mt-1.5 whitespace-pre-line text-[11px] font-extrabold leading-[1.3] text-[#3a3067]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomenHealthCareHeroSection;
