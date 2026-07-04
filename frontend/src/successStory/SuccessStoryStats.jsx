import React from "react";
import { stats } from "./successStoryData";

function SuccessStoryStats() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon, tone }) => (
          <div
            key={label}
            className={`flex min-h-28 items-center justify-center gap-5 rounded-xl border border-slate-100 bg-gradient-to-br p-6 shadow-[0_18px_36px_rgba(15,47,63,0.08)] ${
              tone === "amber"
                ? "from-[#fff5d9] to-white"
                : tone === "gold"
                  ? "from-[#fff8e8] to-[#f7effd]"
                  : "from-[#f7effd] to-white"
            }`}
          >
            <Icon className={`h-12 w-12 ${tone === "amber" || tone === "gold" ? "text-[#ffb21a]" : "text-[#8B43BA]"}`} strokeWidth={2.3} />
            <div>
              <p className="text-[clamp(28px,2.3vw,42px)] font-black leading-none text-[#073c47]">
                {value}
              </p>
              <p className="mt-1 text-[15px] font-bold text-[#071c2b]">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStoryStats;
