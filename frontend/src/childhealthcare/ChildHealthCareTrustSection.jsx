import React from "react";

import {
  ArrowRight,
  Brain,
  HeartHandshake,
  HeartPulse,
  Plus,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import doctorImage from "../images/doctorimg-2.jpeg";
import sunsetImage from "../images/child-wellbeing-sunset-cta.png";

const reasons = [
  { label: "Expert & Experienced\nTeam", Icon: UserCheck },
  { label: "Neuro-Ayurveda\nApproach", Icon: Brain },
  { label: "Evidence-Informed\nCare", Icon: ShieldCheck },
  { label: "Personalized\nSupport", Icon: UsersRound },
  { label: "Family-Centred\nCare", Icon: HeartHandshake },
  { label: "Holistic & Long-Term\nDevelopment Focus", Icon: HeartPulse },
];

const stats = [
  { value: "10+", label: "Years of\nExperience" },
  { value: "50,000+", label: "Children & Families\nSupported" },
  { value: "20+", label: "Specialized\nPrograms" },
  { value: "India Wide", label: "Online & In-Person\nConsultations" },
];

const faqs = [
  {
    question: "What are the signs of developmental delays in children?",
    answer: "Signs include not responding to their name, poor eye contact, delayed speech, hyperactivity, attention difficulties, and learning challenges.",
  },
  {
    question: "Can developmental delays improve over time?",
    answer: "Yes, with early intervention, structured therapies, and consistent support, many children show significant improvement in their development.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer: "It is a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support children's healthy development.",
  },
  {
    question: "When should parents worry about child development?",
    answer: "If a child consistently misses developmental milestones or shows regression in previously acquired skills, professional guidance is recommended.",
  },
  {
    question: "How can parents support child development at home?",
    answer: "Parents can support development through interactive play, reading together, establishing routines, and providing a nurturing environment.",
  },
  {
    question: "When should parents seek professional guidance?",
    answer: "Professional guidance should be sought if there are persistent concerns regarding a child's speech, behaviour, social skills, or learning.",
  },
  {
    question: "What are the early signs of autism?",
    answer: "Early signs often include reduced eye contact, lack of response to their name, repetitive movements, and delayed social or communication skills.",
  },
  {
    question: "What are learning difficulties in children?",
    answer: "Learning difficulties encompass challenges with reading (dyslexia), writing (dysgraphia), math (dyscalculia), and general comprehension.",
  },
  {
    question: "Can children with developmental challenges attend regular school?",
    answer: "Yes, many children with developmental challenges thrive in regular schools with appropriate accommodations, individualized support, and therapies.",
  },
  {
    question: "What are the signs of ADHD in children?",
    answer: "Common signs include excessive fidgeting, difficulty staying seated, trouble focusing on tasks, impulsive actions, and frequent interruptions.",
  },
  {
    question: "What are behavioural issues in children?",
    answer: "Behavioural issues include frequent tantrums, aggression, emotional dysregulation, and difficulty following instructions or adjusting to changes.",
  },
  {
    question: "How important is early intervention?",
    answer: "Early intervention is highly critical as it takes advantage of neuroplasticity, maximizing a child's potential for growth and improvement.",
  },
  {
    question: "What causes speech delay in children?",
    answer: "Speech delay can stem from hearing loss, developmental disorders like autism, oral-motor issues, or a lack of adequate language stimulation.",
  },
  {
    question: "How does Manovaidya assess child development?",
    answer: "We conduct a comprehensive evaluation of development, behaviour, learning, communication, and emotional wellbeing to create a tailored care plan.",
  },
  {
    question: "How does Manovaidya support families?",
    answer: "We offer family-centred care, guiding parents with practical strategies, training, and home support for better long-term developmental outcomes.",
  },
];

function ChildHealthCareTrustSection() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-[#edeaf6] bg-white shadow-[0_14px_40px_rgba(47,32,113,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(105deg,#28116f_0%,#39148a_38%,#77209d_74%,#f16a78_100%)] px-5 py-6 text-white sm:px-7 lg:px-9 lg:py-5">
          <h2 className=" text-[24px] font-bold leading-tight lg:text-[28px]">
            Why Families
            <br className="hidden lg:block" /> Choose Manovaidya
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:absolute lg:right-9 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:grid-cols-6 lg:gap-0">
            {reasons.map(({ label, Icon }, index) => (
              <article
                key={label}
                className={`relative flex flex-col items-center px-4 text-center ${index > 0 ? "lg:border-l lg:border-white/20" : ""
                  }`}
              >
                <Icon className="h-9 w-9 text-white/85" strokeWidth={1.55} />
                <p className="mt-3 whitespace-pre-line text-[11px] font-bold leading-[1.35] text-white lg:text-[12px]">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-b border-[#eeeaf7] bg-[#fdfcff] p-6 md:grid-cols-[minmax(0,1fr)_minmax(440px,0.95fr)] lg:p-7">
          <div className="grid items-center gap-6 sm:grid-cols-[165px_minmax(0,1fr)]">
            <img
              src={doctorImage}
              alt="Dr. Ankush Garg"
              className="mx-auto h-[152px] w-[152px] rounded-full object-cover object-top ring-1 ring-[#ddd6f0]"
              loading="lazy"
            />

            <div>
              <h3 className=" text-[27px] font-bold">
                <span className="text-[#18181b]">About Dr. </span>
                <span className="text-[#8b43ba]">Ankush Garg</span>
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#4e476a] lg:text-[16px]">
                Dr. Ankush Garg is a leading Autism, ADHD, Child Development & Mental Health
                Specialist in India and the Founder of Manovaidya. He is the creator of the
                Neuro-Ayurveda Development System, a structured approach that integrates modern
                neuroscience with the timeless wisdom of Ayurveda to support children&apos;s healthy
                development.
              </p>
              <a
                href="/about/doctor"
                className="mt-2 inline-flex items-center gap-2 text-[14px] font-black text-[#4a2997]"
              >
                Know more about Dr. Ankush Garg
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid self-center grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <article
                key={value}
                className="flex h-[142px] flex-col items-center justify-center rounded-md border border-[#e5e0ef] bg-white px-3 text-center shadow-[0_8px_22px_rgba(66,47,129,0.05)]"
              >
                <strong className="text-[25px] font-black text-[#392188]">{value}</strong>
                <span className="mt-3 whitespace-pre-line text-[12.5px] font-bold leading-[1.45] text-[#3e3566]">
                  {label}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div id="child-faqs" className="px-5 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className=" text-[26px] font-bold">
              <span className="text-[#18181b]">Frequently Asked </span>
              <span className="text-[#8b43ba]">Questions</span>
            </h3>
            <a href="#child-faqs" className="inline-flex items-center gap-1 text-[14px] font-black text-[#3f278b]">
              View All FAQs <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-2 grid gap-x-8 md:grid-cols-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-[#efecf6] py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 pr-2 text-[13px] font-bold text-[#3f3764] marker:content-none xl:text-[14px]">
                  <span>{question}</span>
                  <Plus className="h-3.5 w-3.5 shrink-0 text-[#442894] transition-transform group-open:rotate-45" />
                </summary>
                <p className="pt-2 text-[13px] leading-relaxed text-[#68617e]">{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative min-h-[145px] overflow-hidden bg-[#2c176e] text-white">
          <img
            src={sunsetImage}
            alt="Family walking happily outdoors during sunset"
            className="absolute inset-0 h-full w-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2d176f_0%,rgba(52,24,115,0.98)_38%,rgba(98,34,126,0.73)_62%,rgba(73,24,91,0.08)_100%)]" />

          <div className="relative z-10 grid min-h-[145px] items-center gap-6 px-6 py-6 md:grid-cols-[minmax(280px,0.8fr)_minmax(380px,1fr)_0.5fr] lg:px-9">
            <div>
              <h3 className="font-serif text-[26px] font-bold leading-[1.08] lg:text-[28px]">
                Concerned About Your
                <br />
                Child&apos;s Development?
              </h3>
              <p className="mt-2 text-[14px] font-medium text-white/90">
                Book a structured assessment and personalized guidance session with the Manovaidya team.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex min-h-12 min-w-[205px] items-center justify-center gap-4 rounded-md bg-white px-5 text-[13px] font-black text-[#3b2582]"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#assessment"
                className="inline-flex min-h-12 min-w-[205px] items-center justify-center gap-4 rounded-md border border-white/55 bg-white/5 px-5 text-[13px] font-bold text-white backdrop-blur-sm"
              >
                Take Child Development Assessment <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChildHealthCareTrustSection;
