import React from "react";
import { Brain, HeartHandshake, UsersRound } from "lucide-react";
import doctorPortrait from "../images/doctorimg-2.jpeg";

const insightCards = [
  {
    Icon: UsersRound,
    text: "His work focuses on Autism Spectrum Disorder (ASD), ADHD, child development, behavioural challenges and emotional wellbeing. His PhD research explores the connection between the gut-brain axis, behaviour and emotional health.",
  },
  {
    Icon: HeartHandshake,
    text: "Through the Neuro-Ayurveda Development System, he aims to bring together different perspectives on brain function, digestion, lifestyle and behaviour to support a broader understanding of individual developmental needs.",
  },
];

function AboutDoctorBioSection() {
  return (
    <section className="bg-[#fbfaff] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-7 lg:grid-cols-[0.78fr_1.52fr] lg:gap-9">
        <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(31,19,56,0.14)]">
          <img
            src={doctorPortrait}
            alt="Dr. Ankush Garg"
            className="aspect-[1.04/1] w-full object-cover"
            loading="lazy"
          />

          <div className="flex items-center gap-4 bg-[#6540c5] px-5 py-4 text-white sm:px-6 sm:py-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#8B43BA]">
              <Brain className="h-8 w-8" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-[17px] font-extrabold leading-tight">
                Dr. Ankush Garg
              </h3>
              <p className="mt-1 text-[12.5px] font-semibold leading-5 text-white/90">
                Founder of Manovaidya & Creator of the
                <span className="block">Neuro-Ayurveda Development System</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.03em] text-[#5b34bd] sm:text-[14px]">
            Meet Our Founder
          </p>
          <h1 className="mt-2 text-[28px] font-black leading-tight text-[#8B43BA] sm:text-[clamp(30px,2.8vw,42px)]">
            Dr. Ankush Garg
          </h1>
          <h3 className="mt-2 text-[14px] font-black leading-6 text-[#6540c5] sm:text-[16px]">
            Founder of Manovaidya | Ayurvedacharya | Creator of the
            Neuro-Ayurveda Development System
          </h3>

          <p className="mt-4 max-w-[920px] text-[13.5px] font-bold leading-7 text-[#251553] sm:text-[15px] sm:leading-8">
            Dr. Ankush Garg is an Ayurvedacharya, the Founder of Manovaidya and
            the developer of the Neuro-Ayurveda Development System. With over 7
            years of focused experience in child development and mental
            wellness, he has a strong professional interest in understanding
            developmental and behavioural concerns.
          </p>

          <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
            {insightCards.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex gap-4 rounded-xl border border-[#8B43BA]/10 bg-[#8B43BA]/7 px-4 py-4 shadow-[0_10px_26px_rgba(139,67,186,0.07)] sm:gap-5 sm:px-5 sm:py-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#8B43BA] sm:h-14 sm:w-14">
                  <Icon className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.7} />
                </span>
                <p className="text-[13px] font-bold leading-6 text-[#251553] sm:text-[14px] sm:leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-[940px] text-[13.5px] font-bold leading-7 text-[#251553] sm:mt-6 sm:text-[15px] sm:leading-8">
            At Manovaidya, his vision is to help families better understand
            developmental challenges and encourage a more informed and holistic
            perspective on child development and mental wellness.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctorBioSection;
