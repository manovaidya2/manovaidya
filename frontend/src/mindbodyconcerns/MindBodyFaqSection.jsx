import React from "react";
import {
  ArrowRight,
  Brain,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  Plus,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import doctorImage from "../images/doctorimg-2.jpeg";
import sunsetImage from "../images/women-wellbeing-sunset-cta.png";

const reasons = [
  { label: "Experienced &\nCompassionate Team", Icon: HeartHandshake },
  { label: "Confidential &\nJudgment-Free Care", Icon: ShieldCheck },
  { label: "Holistic Mind &\nBody Approach", Icon: Brain },
  { label: "Personalised\nCare Plans", Icon: HeartPulse },
  { label: "Online & In-Person\nSupport Options", Icon: UsersRound },
  { label: "Evidence-Informed\nTreatments", Icon: ClipboardCheck },
];

const stats = [
  { value: "10+", label: "Years of\nExperience" },
  { value: "50,000+", label: "People\nSupported" },
  { value: "20+", label: "Specialized\nPrograms" },
  { value: "India Wide", label: "Online & In-Person\nConsultations" },
];

const faqs = [
  {
    question: "What is mind-body medicine?",
    answer:
      "Mind-body medicine looks at how stress, emotions, sleep, digestion, pain and lifestyle influence physical wellbeing, then supports them through an integrated care plan.",
  },
  {
    question: "How does Ayurveda help in stress and fatigue?",
    answer:
      "Ayurveda considers sleep, digestion, daily routine, nutrition and individual constitution to create supportive lifestyle strategies for stress and fatigue.",
  },
  {
    question: "Can you help with sleep problems?",
    answer:
      "Yes, care may include assessing sleep patterns, stress, digestion and routine, followed by personalised sleep, relaxation and lifestyle guidance.",
  },
  {
    question: "Do you treat chronic pain without medication?",
    answer:
      "We can support chronic pain through relaxation, stress management, gentle movement and lifestyle care, while medication decisions remain with your treating clinician.",
  },
  {
    question: "What lifestyle changes do you recommend?",
    answer:
      "Recommendations may include sleep routines, balanced meals, hydration, suitable movement, breathwork, stress regulation and healthier screen habits based on your needs.",
  },
  {
    question: "Can this help with acidity and gut issues?",
    answer:
      "Yes, the plan can address the gut-brain connection through food habits, digestion support, stress care, sleep and personalised lifestyle guidance.",
  },
  {
    question: "Will I get a personalised care plan?",
    answer:
      "Yes, your plan is created around your symptoms, history, lifestyle, digestion, sleep, emotional patterns and individual goals.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "It depends on the concern, duration, severity and consistency with the plan; some people notice early changes while deeper concerns need sustained care.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, online consultations are available across India with structured history-taking, personalised planning, lifestyle guidance and regular progress reviews.",
  },
  {
    question: "Are your therapies safe and natural?",
    answer:
      "Care combines evidence-informed and Ayurvedic approaches selected after assessment; recommendations are personalised and coordinated with existing medical care when needed.",
  },
  {
    question: "Do you provide diet and nutrition guidance?",
    answer:
      "Yes, practical food and nutrition guidance may be included when relevant to digestion, energy, sleep, metabolism and overall wellbeing.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Use the Book Assessment or Talk to Our Expert option on this page, and the Manovaidya team will guide you through the next steps.",
  },
];

function MindBodyFaqSection() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-[#edeaf6] bg-white shadow-[0_14px_40px_rgba(47,32,113,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(105deg,#28116f_0%,#39148a_38%,#77209d_74%,#f16a78_100%)] px-5 py-6 text-white sm:px-7 lg:px-9 lg:py-5">
          <h2 className="font-serif text-[24px] font-bold leading-tight lg:text-[28px]">
            Why Choose Manovaidya for Mind-Body Care
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:mt-2 lg:grid-cols-6 lg:gap-0">
            {reasons.map(({ label, Icon }, index) => (
              <article
                key={label}
                className={`relative flex flex-col items-center px-2 text-center ${
                  index > 0 ? "lg:border-l lg:border-white/20" : ""
                }`}
              >
                <Icon className="h-10 w-10 text-white/85" strokeWidth={1.55} />
                <p className="mt-2 whitespace-pre-line text-[12px] font-bold leading-[1.35] text-white lg:text-[13px]">
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
              <h3 className="font-serif text-[27px] font-bold">
                <span className="text-[#18181b]">About Dr. </span>
                <span className="text-[#8B43BA]">Ankush Garg</span>
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#4e476a] lg:text-[16px]">
                Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health
                Specialist in India and the Founder of Manovaidya. He is the creator of the
                Neuro-Ayurveda Development System, a structured approach that integrates modern
                neuroscience with the timeless wisdom of Ayurveda to support mental wellness for
                all age groups.
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
                <strong className="text-[25px] font-black text-[#8B43BA]">{value}</strong>
                <span className="mt-3 whitespace-pre-line text-[12.5px] font-bold leading-[1.45] text-[#3e3566]">
                  {label}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div id="mind-body-faqs" className="px-5 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-serif text-[26px] font-bold">
              <span className="text-[#18181b]">Frequently Asked </span>
              <span className="text-[#8B43BA]">Questions</span>
            </h3>
            <a
              href="#mind-body-faqs"
              className="inline-flex items-center gap-1 text-[14px] font-black text-[#8B43BA]"
            >
              View All FAQs <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-2 grid gap-x-8 md:grid-cols-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-[#efecf6] py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-bold text-[#3f3764] marker:content-none">
                  <span>{question}</span>
                  <Plus className="h-3.5 w-3.5 shrink-0 text-[#8B43BA] transition-transform group-open:rotate-45" />
                </summary>
                <p className="pt-2 text-[14px] leading-relaxed text-[#68617e]">{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative min-h-[145px] overflow-hidden bg-[#2c176e] text-white">
          <img
            src={sunsetImage}
            alt="Woman sitting peacefully at sunset"
            className="absolute inset-0 h-full w-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2d176f_0%,rgba(52,24,115,0.98)_38%,rgba(98,34,126,0.73)_62%,rgba(73,24,91,0.08)_100%)]" />

          <div className="relative z-10 grid min-h-[145px] items-center gap-6 px-6 py-6 md:grid-cols-[minmax(280px,0.8fr)_minmax(380px,1fr)_0.5fr] lg:px-9">
            <div>
              <h3 className="font-serif text-[28px] font-bold leading-[1.08]">
                You Deserve to Feel Better.
                <br />
                We&apos;re Here to Help.
              </h3>
              <p className="mt-2 text-[14px] font-medium text-white/90">
                Take the first step towards mind-body balance and a healthier, happier you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex min-h-12 min-w-[205px] items-center justify-center gap-4 rounded-md bg-white px-5 text-[13px] font-black text-[#3b2582]"
              >
                Book Assessment <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#assessment"
                className="inline-flex min-h-12 min-w-[205px] items-center justify-center gap-4 rounded-md border border-white/55 bg-white/5 px-5 text-[13px] font-bold text-white backdrop-blur-sm"
              >
                Talk to Our Expert <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MindBodyFaqSection;

