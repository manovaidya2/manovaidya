import React from "react";
import { CalendarDays, CheckCircle2, PhoneCall, ShieldCheck, Users } from "lucide-react";

function SuccessStoryBottomBar() {
  return (
    <React.Fragment>
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-4 text-[13px] font-bold text-[#233445] sm:px-6 md:grid-cols-4 lg:px-10">
          <span className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#8B43BA]" />
            100% Confidential
          </span>
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#8B43BA]" />
            Holistic & Safe
          </span>
          <span className="flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-[#8B43BA]" />
            Expert Team
          </span>
          <a href="tel:+917823838638" className="flex items-center justify-center gap-2 text-[#073c47]">
            <PhoneCall className="h-4 w-4 text-[#8B43BA]" />
            +91 95234 35814
          </a>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-slate-100 bg-white/95 px-4 py-3 shadow-[0_-10px_28px_rgba(15,47,63,0.12)] backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="rounded-lg bg-[#fff4c7] px-4 py-3 text-center text-[12px] font-bold leading-5 text-[#443200]">
            Disclaimer: Individual experiences differ, and outcomes vary from person to person.
            Results shown are specific to the individuals and may not guarantee similar outcomes for everyone.
          </p>
          <a
            href="tel:+917823838638"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#ffb91d] px-7 text-[14px] font-black text-[#141414] shadow-[0_12px_22px_rgba(0,0,0,0.12)]"
          >
            <CalendarDays className="h-4 w-4" />
            Book Consultation
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SuccessStoryBottomBar;
