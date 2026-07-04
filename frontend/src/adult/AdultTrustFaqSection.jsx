import React from "react";
import {
  ArrowRight,
  Brain,
  ClipboardCheck,
  HeartPulse,
  House,
  Plus,
  ShieldCheck,
  UsersRound,
  UserCheck,
} from "lucide-react";
import doctorImage from "../images/doctorimg-2.jpeg";
import sunsetImage from "../images/adult-sunset-cta.png";

const reasons = [
  { label: "Expert &\nExperienced Team", Icon: UserCheck },
  { label: "Personalized &\nHolistic Care", Icon: UsersRound },
  { label: "Confidential &\nJudgment-Free", Icon: ShieldCheck },
  { label: "Flexible Online &\nIn-Person Sessions", Icon: House },
  { label: "Evidence-Based\nApproach", Icon: ClipboardCheck },
  { label: "Long-Term Wellness\n& Relapse Prevention", Icon: HeartPulse },
];

const stats = [
  { value: "10+", label: "Years of\nExperience" },
  { value: "50,000+", label: "Adults\nSupported" },
  { value: "20+", label: "Specialized\nPrograms" },
  { value: "India Wide", label: "Online & In-Person\nConsultations" },
];

// Re-ordered to display column-wise in a 3-column grid layout (flowing left-to-right, top-to-bottom)
// Col 1: Q1, Q2, Q3, Q4
// Col 2: Q5, Q6, Q7, Q8
// Col 3: Q9, Q10, Q11, Q12
const faqs = [
  // Row 1
  {
    question: "What are the signs of stress or anxiety in adults?",
    answer:
      "Common signs include constant worry, restlessness, irritability, sleep disruptions, muscle tension, fatigue, and difficulty concentrating or making daily decisions.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "The duration depends on your personal goals and needs. Many adults begin to notice a positive change in their coping abilities and perspective within 4 to 6 sessions of regular support.",
  },
  {
    question: "Can medication be avoided with therapy?",
    answer:
      "For many mild to moderate concerns, therapy and lifestyle changes are highly effective on their own. Our specialist will guide you if clinical conditions require medical consultation.",
  },
  // Row 2
  {
    question: "When should I seek help for my mental health?",
    answer:
      "Consider seeking support if your feelings interfere with daily life, work performance, or relationships for more than two weeks, or if you feel overwhelmed by stress, anxiety, or sadness.",
  },
  {
    question: "Is online counselling effective for adults?",
    answer:
      "Yes, research shows online counselling is highly effective for anxiety, stress, and mood concerns. It offers the same clinical quality as in-person therapy with added convenience and privacy.",
  },
  {
    question: "Can work stress lead to depression?",
    answer:
      "Yes, chronic and unmanaged workplace stress can lead to burnout, which significantly increases the risk of developing clinical depression or anxiety disorders.",
  },
  // Row 3
  {
    question: "What is the difference between stress and anxiety?",
    answer:
      "Stress is typically a reaction to a specific external trigger (like work pressure), whereas anxiety is a persistent feeling of apprehension or dread that persists even when the stressor is gone.",
  },
  {
    question: "Will my sessions be confidential?",
    answer:
      "Yes, all therapy sessions are confidential. Details of your conversations and assessment records are protected by strict ethical guidelines and privacy protocols.",
  },
  {
    question: "How can I support a loved one struggling with mental health?",
    answer:
      "Listen to them empathetically without judgment, encourage them to seek professional guidance, and let them know that asking for help is a sign of strength, not weakness.",
  },
  // Row 4
  {
    question: "How does therapy or counselling help?",
    answer:
      "Therapy provides a safe, non-judgmental space to explore your challenges, identify negative thought patterns, build healthy coping mechanisms, and improve your overall emotional wellbeing.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "Our experts will conduct a detailed initial assessment of your concerns and requirements to recommend a personalized therapy program tailored to your needs.",
  },
  {
    question: "Do you offer in-person consultations?",
    answer:
      "Yes, we offer both flexible online counselling and in-person consultations. Please connect with our team to verify clinic availability in your region.",
  },
];

function AdultTrustFaqSection() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-[#edeaf6] bg-white shadow-[0_14px_40px_rgba(47,32,113,0.08)]">
        
        {/* Why Adults Trust Manovaidya */}
        <div className="relative overflow-hidden bg-[linear-gradient(105deg,#28116f_0%,#39148a_38%,#77209d_74%,#f16a78_100%)] px-5 py-6 text-white sm:px-7 lg:px-9 lg:py-5">
          <h2 className="font-serif text-[24px] font-bold leading-tight lg:text-[28px]">
            Why Adults Trust Manovaidya
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

        {/* Doctor and Stats */}
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
                neuroscience with the timeless wisdom of Ayurveda to support emotional and mental
                wellness.
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

        {/* FAQ Section */}
        <div id="adult-faqs" className="px-5 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-serif text-[26px] font-bold">
              <span className="text-[#18181b]">Frequently Asked </span>
              <span className="text-[#8B43BA]">Questions</span>
            </h3>
            <a
              href="#adult-faqs"
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

        {/* CTA Banner */}
        <div className="relative min-h-[155px] overflow-hidden bg-[#2c176e] text-white">
          <img
            src={sunsetImage}
            alt="Ready to Take the First Step Towards Better Mental Wellbeing?"
            className="absolute inset-0 h-full w-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2d176f_0%,rgba(52,24,115,0.98)_38%,rgba(98,34,126,0.72)_62%,rgba(73,24,91,0.05)_100%)]" />

          <div className="relative z-10 grid min-h-[155px] items-center gap-6 px-6 py-6 md:grid-cols-[minmax(330px,0.95fr)_minmax(420px,1.05fr)_0.1fr] lg:px-9">
            <div>
              <h3 className="font-serif text-[28px] font-bold leading-[1.1]">
                Ready to Take the First Step Towards
                <br />
                Better Mental Wellbeing?
              </h3>
              <p className="mt-2 text-[14px] font-medium text-white/90">
                Book a confidential assessment and let our experts guide you towards a healthier, happier you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#assessment"
                  className="inline-flex min-h-12 min-w-[200px] items-center justify-center gap-4 rounded-md bg-white px-5 text-[13px] font-black text-[#3b2582]"
                >
                  Book Assessment <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#assessment"
                  className="inline-flex min-h-12 min-w-[200px] items-center justify-center gap-4 rounded-md border border-white/55 bg-white/5 px-5 text-[13px] font-bold text-white backdrop-blur-sm"
                >
                  Talk to Our Expert <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold text-white/90">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-white/80" />
                  100% Confidential and Secure
                </span>
                <span className="flex items-center gap-1.5">
                  <UsersRound className="h-4 w-4 text-white/80" />
                  Trusted by 50,000+ Adults Across India
                </span>
                <span className="flex items-center gap-1.5">
                  <House className="h-4 w-4 text-white/80" />
                  Flexible Online or In-Person Options
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AdultTrustFaqSection;

