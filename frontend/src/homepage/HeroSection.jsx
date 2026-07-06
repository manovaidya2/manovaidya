import React from "react";
import {
  ArrowRight,
  Brain,
  MapPin,
  MonitorCheck,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import BookConsultationButton from "../components/BookConsultationButton";
import heroDarkBg from "../images/herobg.png";
import heroMobileBg from "../images/herobg-mobile.png";

const carePillars = [
  { label: "Ancient Wisdom\nModern Science", Icon: Brain },
  { label: "Personalised\nCare Plans", Icon: Users },
  { label: "Holistic\nHealing", Icon: ShieldCheck },
  { label: "Evidence-\nBased Approach", Icon: Network },
];

const stats = [
  { value: "8+", label: "Years Experience", Icon: Sparkles },
  { value: "1000+", label: "Families Guided", Icon: Users },
  { value: "20K+", label: "Consultations", Icon: Network },
  { value: "Across", label: "India", Icon: MapPin },
  { value: "Online", label: "Consultations", Icon: MonitorCheck },
];

function HeroSection() {
  return (
    <React.Fragment>
      <section className="relative isolate bg-[#050b25] text-white">
        <img
          src={heroDarkBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 hidden h-full w-full object-cover object-center sm:block lg:object-[center_center]"
        />
        <img
          src={heroMobileBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center sm:hidden"
        />
        <div className="absolute inset-0 -z-10 " />

        <div className="relative mx-auto w-full px-4 py-8 sm:px-8 sm:py-10 lg:min-h-[640px] lg:px-12">
          <div className="w-full max-w-[560px] pt-1 lg:pt-4">
            <p className="text-[clamp(23px,7vw,28px)] font-medium leading-tight text-white/95">
              Neuro-Ayurveda Care for
            </p>

            <h1 className="mt-2 text-[clamp(42px,13vw,70px)] font-bold leading-[1] tracking-tight text-white">
              Every Mind.
              <span className="block text-[#8b43ba]">Every Stage.</span>
            </h1>

            <p className="mt-5 max-w-[540px] text-[clamp(16px,4.7vw,20px)] font-semibold leading-[1.55] text-violet-50/90">
              Supporting Child Development, Mental Health &
              <span className="block">
                Emotional Wellbeing Through Neuro-Ayurveda.
              </span>
            </p>

            <div className="mt-8 grid w-full max-w-[600px] grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:mt-9 sm:grid-cols-4 sm:gap-6 lg:gap-8">
              {carePillars.map(({ label, Icon }) => (
                <div key={label} className="flex min-w-0 items-center gap-3 border-b border-violet-300/25 pb-3 min-[420px]:border-b-0 sm:border-r sm:pb-0 sm:pr-3 sm:last:border-r-0">
                  <Icon className="h-8 w-8 shrink-0 text-violet-200" strokeWidth={1.7} />
                  <span className="min-w-0 text-[13px] font-semibold leading-tight text-violet-50/85 sm:text-[12px] lg:text-[13px]">
                    {label.split("\n").map((line) => (
                      <span key={line} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:gap-4">
              <BookConsultationButton
                showIcon
                className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-md bg-[#8b43ba] px-4 py-3 text-center text-[15px] font-bold leading-tight text-white shadow-[0_18px_32px_rgba(139,67,186,0.38)] transition hover:bg-[#7835a4] sm:h-[58px] sm:px-7 sm:py-0"
              >
                Book Consultation
              </BookConsultationButton>
              <a
                href="#assessment"
                className="inline-flex min-h-[54px] flex-1 items-center justify-center rounded-md bg-white px-4 py-3 text-center text-[15px] font-bold leading-tight text-[#8b43ba] shadow-[0_18px_32px_rgba(0,0,0,0.16)] transition hover:bg-violet-50 sm:h-[58px] sm:px-7 sm:py-0"
              >
                Take Free Assessment
                <ArrowRight className="ml-3 h-5 w-5 shrink-0" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid w-full max-w-[680px] grid-cols-2 gap-4 border-t border-violet-300/12 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:absolute lg:bottom-8 lg:left-12 lg:mt-0 lg:w-[660px] lg:max-w-none lg:grid-cols-5 lg:border-t-0 lg:pt-0">
            {stats.map(({ value, label, Icon }, index) => (
              <div
                key={`${value}-${label}`}
                className={`flex min-w-0 items-center gap-3 border-b border-violet-300/14 pb-3 sm:pr-4 lg:border-r lg:pb-0 lg:last:border-r-0 ${
                  index === stats.length - 1 ? "col-span-2 justify-center sm:col-span-1 sm:justify-start" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-300/25 bg-white/5 text-violet-100">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <p className="min-w-0 leading-tight">
                  <span className="block text-[16px] font-semibold text-white">{value}</span>
                  <span className="block text-[11px] font-semibold text-violet-100/75">{label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroSection;
