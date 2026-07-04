import React from "react";
import { ArrowRight } from "lucide-react";
import { beforeAfterSteps, journeySteps } from "./successStoryData";

function IconCircle({ icon: Icon, className = "" }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full ${className}`}>
      <Icon className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

function SuccessStoryTimelines() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-10">
      <div>
        <h2 className="text-center text-[clamp(23px,1.7vw,30px)] font-black text-[#071c2b]">
          Before & After Progress Timeline
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {beforeAfterSteps.map(({ title, text, icon: Icon }, index) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              {index < beforeAfterSteps.length - 1 ? (
                <ArrowRight className="absolute left-[72%] top-7 hidden h-6 w-6 text-[#8B43BA] sm:block" />
              ) : null}
              <IconCircle icon={Icon} className="h-16 w-16 border border-[#8B43BA]/25 bg-[#f7effd] text-[#8B43BA]" />
              <h3 className="mt-3 text-[14px] font-black text-[#071c2b]">{title}</h3>
              <p className="mt-1 text-[13px] font-black leading-5 text-[#071c2b]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center text-[clamp(23px,1.7vw,30px)] font-black text-[#071c2b]">
          Recovery Journey Process
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {journeySteps.map(({ title, icon: Icon }, index) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              {index < journeySteps.length - 1 ? (
                <span className="absolute left-[68%] top-8 hidden h-px w-16 border-t-2 border-dashed border-[#8B43BA]/45 sm:block" />
              ) : null}
              <IconCircle icon={Icon} className="h-16 w-16 border border-[#8B43BA]/35 bg-white text-[#8B43BA]" />
              <p className="mt-3 text-[12px] font-black leading-5 text-[#071c2b]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStoryTimelines;
