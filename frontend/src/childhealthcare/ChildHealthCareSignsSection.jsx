import React from "react";
import {
  BookOpen,
  Brain,
  ClipboardList,
  Ear,
  Eye,
  HeartPulse,
  MessageSquare,
  User,
  Users,
  Zap,
} from "lucide-react";
import signsImage from "../images/child-signs-reflection.png";

const signs = [
  {
    text: "Not Responding\nto Name",
    Icon: MessageSquare,
  },
  {
    text: "Poor Eye\nContact",
    Icon: Eye,
  },
  {
    text: "Delayed\nSpeech",
    Icon: Ear,
  },
  {
    text: "Hyperactivity\n& Impulsivity",
    Icon: Zap,
  },
  {
    text: "Attention\nDifficulties",
    Icon: Brain,
  },
  {
    text: "Learning\nChallenges",
    Icon: BookOpen,
  },
  {
    text: "Behavioural\nConcerns",
    Icon: User,
  },
  {
    text: "Social Interaction\nDifficulties",
    Icon: Users,
  },
  {
    text: "Emotional Regulation\nDifficulties",
    Icon: HeartPulse,
  },
  {
    text: "Difficulty in\nDaily Routines",
    Icon: ClipboardList,
  },
];

function ChildHealthCareSignsSection() {
  return (
    <section className="overflow-hidden bg-[#fbf9ff] lg:pr-10">
      <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:min-h-[260px] lg:grid-cols-[190px_minmax(0,1fr)_270px] xl:min-h-[240px] xl:grid-cols-[200px_minmax(0,1fr)_330px] 2xl:grid-cols-[220px_minmax(0,1fr)_380px]">
        <div className="flex items-start justify-start px-5 pb-3 pt-6 text-left sm:px-7 md:col-span-2 md:px-6 lg:col-span-3 lg:px-10 lg:pb-2 lg:pt-5">
          <div>
            <h2 className="text-[28px] font-black leading-[1.15] sm:text-[30px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px]">
              <span className="text-[#18181b]">Common Signs </span>
              <span className="text-[#8b43ba]">Parents Notice</span>
            </h2>
            <span className="mt-3 block h-[2px] w-12 bg-[#4f36a0]" />
          </div>
        </div>

        <div className="flex min-w-0 items-center px-5 pb-7 sm:px-7 md:col-span-2 md:px-6 md:py-6 lg:col-span-2 lg:px-5 lg:py-5 xl:px-6">
          <div className="grid w-full grid-cols-1 gap-2.5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {signs.map(({ text, Icon }) => (
              <article
                key={text}
                className="flex min-h-[84px] min-w-0 items-center gap-2.5 rounded-md bg-white px-3 py-3 shadow-[0_8px_22px_rgba(74,55,136,0.07)] 2xl:min-h-[88px] 2xl:gap-3 2xl:px-4"
              >
                <Icon className="h-[25px] w-[25px] shrink-0 text-[#5c48ad]" strokeWidth={2} />
                <p className="min-w-0 flex-1 whitespace-pre-line break-words text-[13px] font-black leading-[1.35] text-[#312760] xl:text-[13.5px] 2xl:text-[14px]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-r-md sm:min-h-[340px] md:col-span-2 md:min-h-[360px] lg:col-span-1 lg:min-h-full">
          <img
            src={signsImage}
            alt="Young girl sitting thoughtfully at a desk"
            className="absolute inset-0 h-full w-full object-cover object-[76%_center] sm:object-[72%_center] lg:object-[70%_center] xl:object-[68%_center]"
            loading="lazy"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-[linear-gradient(90deg,#fbf9ff_0%,rgba(251,249,255,0.76)_38%,rgba(251,249,255,0)_100%)] lg:block" />
          <div className="absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,#fbf9ff_0%,rgba(251,249,255,0)_100%)] lg:hidden" />
        </div>
      </div>
    </section>
  );
}

export default ChildHealthCareSignsSection;
