import React from "react";
import { HeartHandshake, HeartPulse, Puzzle, Sprout, UsersRound } from "lucide-react";

const aims = [
  {
    title: "Understanding Autism & ADHD",
    description:
      "Helping parents better understand autism, ADHD and their impact on a child's development.",
    Icon: Puzzle,
  },
  {
    title: "Supporting Child Development",
    description:
      "Encouraging communication, learning, social interaction and everyday skills.",
    Icon: Sprout,
  },
  {
    title: "Empowering Parents",
    description:
      "Providing families with better awareness and guidance to support their child's needs.",
    Icon: UsersRound,
  },
  {
    title: "Promoting Overall Wellbeing",
    description:
      "Supporting children's emotional, behavioural and developmental wellbeing.",
    Icon: HeartPulse,
  },
];

function AboutManovaidyaCommitmentSection() {
  return (
    <section className="bg-[#fbfaff] px-[10px] py-7 sm:py-8 lg:px-10 lg:py-9">
      <div className="w-full rounded-xl border border-[#8B43BA]/12 bg-white px-4 py-6 shadow-[0_14px_34px_rgba(31,19,56,0.07)] sm:px-7 sm:py-8 lg:px-10 lg:py-10">
        <div className="flex items-center justify-center gap-3 text-center sm:gap-5">
          <span className="hidden h-px w-20 shrink-0 bg-[#8B43BA]/18 sm:block lg:w-28" />
          <h2 className="text-[24px] font-black leading-tight text-[#4d2a74] sm:text-[28px] lg:text-[30px]">
            Our Commitment to Every Child&apos;s{" "}
            <span className="text-[#8B43BA]">Development</span>
          </h2>
          <span className="hidden h-px w-20 shrink-0 bg-[#8B43BA]/18 sm:block lg:w-28" />
        </div>

        <div className="mt-5 grid gap-3 sm:mt-6 lg:mt-7 lg:grid-cols-2 lg:gap-5">
          <p className="rounded-xl border-l-4 border-[#8B43BA] bg-[#8B43BA]/5 px-4 py-4 text-[13.5px] font-bold leading-[1.7] text-[#251553] sm:px-5 sm:text-[15px]">
            At Manovaidya, our aim is to support children with autism, ADHD
            and other developmental challenges by helping families better
            understand their child&apos;s unique needs. We want every child to
            receive the attention, guidance and encouragement needed to support
            their individual development journey.
          </p>
          <p className="rounded-xl border-l-4 border-[#6540c5] bg-[#6540c5]/5 px-4 py-4 text-[13.5px] font-bold leading-[1.7] text-[#251553] sm:px-5 sm:text-[15px]">
            We believe every child has their own way of learning,
            communicating and growing. Our focus is to help parents understand
            these differences and explore meaningful ways to support their
            child&apos;s everyday development.
          </p>
        </div>

        <h3 className="mt-7 flex items-center justify-center gap-3 text-center text-[19px] font-black leading-tight text-[#5a31ad] sm:mt-9 sm:text-[22px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8B43BA]" />
          What We Aim to Achieve
          <span className="h-1.5 w-1.5 rounded-full bg-[#8B43BA]" />
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[460px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {aims.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="relative flex flex-col items-center rounded-xl border border-[#8B43BA]/14 bg-white px-4 pb-5 pt-6 text-center shadow-[0_12px_28px_rgba(31,19,56,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(31,19,56,0.1)] lg:px-5"
            >
              <span className="absolute right-3 top-3 text-[22px] font-black leading-none text-[#8B43BA]/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B43BA]/10 text-[#8B43BA]">
                <Icon className="h-7 w-7" strokeWidth={1.9} />
              </span>
              <h4 className="mt-3 text-[15px] font-black leading-[1.3] text-[#5a31ad] lg:text-[16px]">
                {title}
              </h4>
              <p className="mt-2 max-w-[280px] text-[13px] font-bold leading-[1.6] text-[#251553] lg:text-[13.5px]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-[linear-gradient(120deg,#4d238e_0%,#6540c5_100%)] px-5 py-5 text-center text-white shadow-[0_16px_34px_rgba(77,35,142,0.22)] sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8B43BA]">
            <HeartHandshake className="h-6 w-6" strokeWidth={1.9} />
          </span>
          <p className="text-[15px] font-black leading-[1.5] sm:text-[17px] lg:text-[18px]">
            Our aim is to help every child feel understood, supported and
            encouraged to grow at their own pace.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutManovaidyaCommitmentSection;
