import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

const trustItems = [
  {
    title: "Evidence-Informed\nCare",
    Icon: ShieldCheck,
  },
  {
    title: "Holistic &\nIntegrated",
    Icon: Heart,
  },
  {
    title: "Family-Centred\nSupport",
    Icon: UsersRound,
  },
  {
    title: "Experienced\nProfessionals",
    Icon: UserRound,
  },
  {
    title: "Compassionate\nApproach",
    Icon: Heart,
  },
  {
    title: "Trusted by\nFamilies Across India",
    Icon: UsersRound,
  },
];

function ApproachCtaSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-1 sm:px-6 lg:px-10 lg:pb-12">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-5 rounded-[12px] bg-[#43209f] px-7 py-6 text-white shadow-[0_14px_34px_rgba(56,30,137,0.22)] sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div className="flex items-center gap-5">
            <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-[#5630b8]">
              <CalendarDays className="h-10 w-10" strokeWidth={2.1} />
            </span>
            <div>
              <h2 className="text-[22px] font-extrabold leading-tight sm:text-[24px]">
                Ready to Take the First Step Towards a Better Tomorrow?
              </h2>
              <p className="mt-2 text-[14px] font-bold leading-relaxed text-white/92 sm:text-[15px]">
                Book a consultation with our expert team and start your personalised journey today.
              </p>
            </div>
          </div>

          <a
            href="#consultation"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-[6px] bg-white px-9 text-[14px] font-extrabold text-[#5630b8] shadow-[0_8px_20px_rgba(20,10,60,0.14)] transition hover:bg-violet-50"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {trustItems.map(({ title, Icon }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#f1ecff] text-[#6234c3]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="whitespace-pre-line text-[11px] font-extrabold leading-[1.25] text-[#2b225f]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachCtaSection;
