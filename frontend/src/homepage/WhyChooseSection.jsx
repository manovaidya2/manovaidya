import React from "react";
import {
  Brain,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    title: "Structured Assessment",
    description: "In-depth evaluation to identify root causes.",
    Icon: ClipboardCheck,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA] ring-[#8B43BA]/20",
  },
  {
    title: "Personalised Care Plans",
    description: "Tailored plans for each child, teen or adult.",
    Icon: HeartHandshake,
    iconClass: "bg-rose-100 text-[#ef655e] ring-rose-200/70",
  },
  {
    title: "Neuro-Ayurveda Approach",
    description: "Ancient wisdom backed by modern neuroscience.",
    Icon: Brain,
    iconClass: "bg-emerald-100 text-[#35a852] ring-emerald-200/70",
  },
  {
    title: "Family Guidance",
    description: "Empowering families with tools and ongoing support.",
    Icon: UsersRound,
    iconClass: "bg-pink-100 text-[#dd4a85] ring-pink-200/70",
  },
  {
    title: "Online Across India",
    description: "Expert care, wherever you are.",
    Icon: MapPin,
    iconClass: "bg-green-100 text-[#33b965] ring-green-200/70",
  },
  {
    title: "Progress Tracking",
    description: "Regular follow-ups to track and support progress.",
    Icon: TrendingUp,
    iconClass: "bg-[#8B43BA]/10 text-[#8B43BA] ring-[#8B43BA]/20",
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-[#fbfaff] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto w-full ">
        <h2 className="text-center text-[clamp(26px,2.3vw,36px)] font-bold leading-tight text-[#272047]">
          Why Families Choose <span className="text-[#8B43BA]">Manovaidya</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {reasons.map(({ title, description, Icon, iconClass }) => (
            <article
              key={title}
              className="group flex min-h-[176px] flex-col rounded-xl border border-violet-100/80 bg-white px-5 py-5 shadow-[0_12px_26px_rgba(61,50,126,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(61,50,126,0.13)]"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-4 ${iconClass}`}
              >
                <Icon className="h-6 w-6" strokeWidth={2.15} />
              </span>

              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="min-h-[44px] text-[16px] font-black leading-[1.25] text-[#271378]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] font-semibold leading-6 text-[#34217c]/75">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
