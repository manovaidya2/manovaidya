import React from "react";
import { ChartNoAxesColumnIncreasing, Flower2, HeartHandshake, Target } from "lucide-react";

const expectations = [
  {
    title: "Clarity & Understanding",
    text: "Clear insights into the real factors affecting development and wellbeing.",
    Icon: Target,
    bg: "bg-[#efe8ff]",
    color: "text-[#6031b8]",
  },
  {
    title: "Personalised Guidance",
    text: "Plans tailored to individual needs, strengths and goals.",
    Icon: HeartHandshake,
    bg: "bg-[#ffe8f2]",
    color: "text-[#df3c7e]",
  },
  {
    title: "Measurable Progress",
    text: "Trackable improvements in behaviour, learning, emotions and daily life.",
    Icon: ChartNoAxesColumnIncreasing,
    bg: "bg-[#eef9e9]",
    color: "text-[#62a94f]",
  },
  {
    title: "Long-Term Wellbeing",
    text: "Sustainable outcomes that create a better quality of life for years to come.",
    Icon: Flower2,
    bg: "bg-[#edf6ff]",
    color: "text-[#2f66cf]",
  },
];

function ApproachExpectSection() {
  return (
    <section className="bg-white px-4 pb-12 pt-3 sm:px-6 lg:px-10 lg:pb-14">
      <div className="mx-auto max-w-[1420px]">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#4a2aa0] sm:text-[30px] lg:text-[33px]">
            What You Can Expect
          </h2>
          <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-[#6040c8]" />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map(({ title, text, Icon, bg, color }) => (
            <article
              key={title}
              className="grid min-h-[152px] grid-cols-[86px_1fr] items-center gap-6 rounded-[14px] bg-[#fdfbff] px-7 py-6 shadow-[0_10px_34px_rgba(55,36,105,0.07)] ring-1 ring-[#f1edf9]"
            >
              <span className={`flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full ${bg} ${color}`}>
                <Icon className="h-12 w-12" strokeWidth={2.05} />
              </span>
              <div className="flex min-h-[96px] flex-col justify-center">
                <h3 className="text-[16px] font-extrabold leading-[1.25] text-[#20175b]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[230px] text-[13px] font-bold leading-[1.6] text-[#2e2860]">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachExpectSection;
