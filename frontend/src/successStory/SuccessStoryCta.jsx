import React from "react";
import { CalendarDays } from "lucide-react";
import { successStoryImages } from "./successStoryData";

function SuccessStoryCta() {
  return (
    <section id="consultation" className="relative overflow-hidden bg-gradient-to-r from-[#0d736b] via-[#61a498] to-[#fcf4e7]">
      {/* Background Leaves */}
      <svg
        className="absolute right-0 top-0 h-full w-auto opacity-40 mix-blend-multiply md:w-[40%]"
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M300 300 C 250 200, 350 100, 450 50 C 480 80, 420 180, 350 250 Z"
          fill="#d2e4da"
        />
        <path
          d="M450 300 C 400 250, 450 150, 500 100 C 520 150, 480 250, 480 300 Z"
          fill="#d2e4da"
        />
        <path
          d="M150 100 C 200 50, 300 20, 400 0 C 350 80, 250 120, 150 150 Z"
          fill="#94bba5"
          opacity="0.3"
        />
        <path
          d="M250 300 C 200 200, 250 50, 350 -20 C 380 50, 300 180, 280 250 Z"
          fill="#94bba5"
          opacity="0.2"
        />
      </svg>
      <svg
        className="absolute left-[30%] top-0 h-full w-auto opacity-10 mix-blend-color-burn"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300 C 50 200, -50 100, 50 0 C 100 100, 50 200, 80 300 Z"
          fill="#000"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.6fr] lg:px-10">
        <div className="z-10 text-white">
          <h2 className="text-[clamp(28px,2.5vw,44px)] font-black">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-3 max-w-xl text-[16px] font-bold leading-7 text-white/90">
            Take the first step towards better health and a brighter future for
            you and your family.
          </p>
          <a
            href="tel:+919523435814"
            className="mt-7 inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#fbb81f] px-7 text-[15px] font-black text-[#141414] shadow-[0_16px_28px_rgba(0,0,0,0.15)] transition hover:bg-[#ffc847]"
          >
            <CalendarDays className="h-5 w-5" />
            Book Consultation Now
          </a>
        </div>
        <div className="relative hidden h-full min-h-[260px] lg:block">
          <img
            src={successStoryImages.doctor}
            alt="Manovaidya doctor"
            className="absolute bottom-[-40px] left-1/2 h-[120%] w-auto -translate-x-1/2 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SuccessStoryCta;
