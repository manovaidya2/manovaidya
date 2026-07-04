// import React from "react";
// import { CalendarDays, Play } from "lucide-react";
// import { successStoryImages } from "./successStoryData";

// function SuccessStoryHero() {
//   return (
//     <section className="relative min-h-[300px] overflow-hidden bg-[#8b43ba] md:min-h-[320px] lg:min-h-[350px]">
//       <img
//         src={successStoryImages.hero}
//         alt="Family consultation success story"
//         className="absolute inset-0 h-full w-full object-cover object-center"
//       />
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,#3f155f_0%,#8b43ba_34%,rgba(139,67,186,0.88)_43%,rgba(139,67,186,0.36)_58%,rgba(255,255,255,0)_76%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0)_68%)]" />
//       <div className="absolute inset-y-0 left-[42%] hidden w-56 bg-gradient-to-r from-[#8b43ba]/95 via-[#8b43ba]/55 to-transparent md:block" />
//       <img
//         src={successStoryImages.hero}
//         alt="Family consultation success story"
//         className="absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover object-center md:block"
//       />
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,#3f155f_0%,#8b43ba_36%,rgba(139,67,186,0.88)_44%,rgba(139,67,186,0.25)_58%,rgba(255,255,255,0)_76%)] md:block" />
//       <div className="relative mx-auto flex min-h-[300px] max-w-[1440px] items-center px-4 py-9 sm:px-6 md:min-h-[320px] lg:min-h-[350px] lg:px-10">
//         <div className="max-w-[630px] text-white">
//           <h1 className="text-[clamp(32px,4vw,50px)] font-bold leading-[1.15] tracking-[-0.01em] drop-shadow-sm">
//             Real Recovery Journeys. Real Families. Real Hope.
//           </h1>
//           <p className="mt-5 max-w-[560px] text-[clamp(16px,1.25vw,20px)] font-bold leading-8 text-white/95">
//             See how families across India have shared their experiences with
//             personalized Neuro-Ayurveda care.
//           </p>
//           <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <a
//               href="#video-stories"
//               className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-white px-7 text-[15px] font-black text-[#5f2587] shadow-[0_18px_32px_rgba(0,0,0,0.18)] transition hover:bg-violet-50"
//             >
//               <Play className="h-4 w-4 fill-[#5f2587]" />
//               Watch Video Stories
//             </a>
//             <a
//               href="#consultation"
//               className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#ffc233] px-7 text-[15px] font-black text-black shadow-[0_18px_32px_rgba(0,0,0,0.16)] transition hover:bg-[#ffd15c]"
//             >
//               <CalendarDays className="h-4 w-4" />
//               Book Consultation
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SuccessStoryHero;


import React from "react";
import {
  CalendarDays,
  CirclePlay,
  MapPin,
  ShieldCheck,
  Star,
  UsersRound,
  Video,
} from "lucide-react";
import successHeroImg from "../images/sucesshero.png";

const successStats = [
  {
    icon: UsersRound,
    value: "5000+",
    label: "Families Supported",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities Across India",
  },
  {
    icon: Video,
    value: "250+",
    label: "Video Testimonials",
  },
  {
    icon: Star,
    value: "98%",
    label: "Positive Patient Experience",
  },
  {
    icon: ShieldCheck,
    value: "Trusted",
    label: "Child Development & Mental Wellness Centre",
  },
];

function SuccessStoryHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf9fd] pb-10 lg:pb-10">
      {/* Desktop Background Image */}
      <img
        src={successHeroImg}
        alt="Happy Indian families sharing their experiences"
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />

      {/* Mobile Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fcf9ff] to-[#f2e7fb] md:hidden" />

      <div className="relative mx-auto min-h-[690px] max-w-[1600px] px-5 pb-44 pt-14 sm:px-8 md:min-h-[650px] md:px-10 md:pb-20 lg:min-h-[700px] lg:px-10 lg:pt-10 xl:px-10">
        {/* Left Content */}
        <div className="relative z-20 max-w-[710px] md:w-[48%]">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#7a2db3] lg:text-base">
            Success Stories
          </p>

          <h1 className="text-[clamp(42px,5vw,60px)] font-bold leading-[1.03] tracking-[-0.045em] text-[#07152f]">
            Real Stories.
            <br />
            Real People.{" "}
            <span className="text-[#7127ae]">Real Hope.</span>
          </h1>

          <p className="mt-6 max-w-[650px] text-[16px] font-medium leading-8 text-[#27354d] sm:text-[18px] lg:text-[19px] lg:leading-9">
            Every individual and every family has a unique journey. Explore real
            experiences shared by children, teenagers, adults, women and seniors
            who found understanding, guidance and support at Manovaidya.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#video-stories"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#5520bf] to-[#6f27d6] px-7 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_35px_rgba(93,33,191,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(93,33,191,0.38)]"
            >
              <CirclePlay className="h-6 w-6 fill-white text-white" />
              Watch Video Stories
            </a>

            <a
              href="#assessment"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 border-[#7b3bb3] bg-white/90 px-7 py-4 text-[15px] font-extrabold text-[#182033] shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#f7effd]"
            >
              <CalendarDays className="h-5 w-5 text-[#6e2baa]" />
              Book Assessment
            </a>
          </div>
        </div>

        {/* Mobile People Image */}
        <div className="relative z-10 mt-10 min-h-[330px] md:hidden">
          <img
            src={successHeroImg}
            alt="Happy Indian families"
            className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
          />
        </div>

        {/* Quote Card */}
        <div className="absolute right-[0%] top-[14%] z-20 hidden w-[230px] rounded-[32px] bg-white/95 px-7 py-8 shadow-[0_20px_60px_rgba(69,40,87,0.15)] backdrop-blur lg:block xl:right-[1%] xl:w-[220px]">
          <span className="block text-4xl font-black leading-none text-[#7029b2]">
            “
          </span>

          <p className="mt-2 text-[15px] font-semibold leading-7 text-[#283044]">
            We are grateful for the clarity, support and care we received.
          </p>

          <p className="mt-5 text-sm font-bold text-[#51576a]">
            — Parent, Delhi
          </p>

          <span className="absolute bottom-4 right-6 text-5xl font-black leading-none text-[#7029b2]">
            ”
          </span>
        </div>

        {/* Statistics Card */}
        <div className="absolute -bottom-8 left-1/2 z-30 w-[calc(100%-32px)] max-w-[1460px] -translate-x-1/2 sm:w-[calc(100%-64px)] md:-bottom-10">
          <div className="grid overflow-hidden rounded-[30px] border border-white/90 bg-white/95 shadow-[0_24px_65px_rgba(34,24,51,0.13)] backdrop-blur md:grid-cols-5">
            {successStats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex min-h-[128px] items-center gap-4 px-5 py-6 lg:px-7 ${index !== successStats.length - 1
                  ? "border-b border-[#ebe7ef] md:border-b-0 md:border-r"
                  : ""
                  }`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5edfb] text-[#6c28aa]">
                  <Icon className="h-8 w-8" strokeWidth={2.4} />
                </div>

                <div>
                  <p className="text-[21px] font-black leading-tight text-[#6b25aa] lg:text-[24px]">
                    {value}
                  </p>

                  <p className="mt-1 max-w-[160px] text-[12px] font-bold leading-5 text-[#2e3442] lg:text-[13px]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStoryHero;

