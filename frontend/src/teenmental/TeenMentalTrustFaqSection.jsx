import React from "react";
import {
  ArrowRight,
  Brain,
  ClipboardCheck,
  HeartHandshake,
  Plus,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import doctorImage from "../images/doctorimg-2.jpeg";
import sunsetImage from "../images/women-wellbeing-sunset-cta.png";

const reasons = [
  { label: "Expert &\nExperienced Team", Icon: HeartHandshake },
  { label: "Scientific &\nEvidence-Informed", Icon: ClipboardCheck },
  { label: "Teen-Centred\nApproach", Icon: Brain },
  { label: "Holistic & Long-Term\nWellness Focus", Icon: Sparkles },
  { label: "Confidential &\nCompassionate Care", Icon: ShieldCheck },
  { label: "Family-Inclusive\nSupport", Icon: UsersRound },
];

const stats = [
  { value: "10+", label: "Years of\nExperience" },
  { value: "50,000+", label: "Families\nSupported" },
  { value: "20+", label: "Specialized\nPrograms" },
  { value: "India Wide", label: "Online & In-Person\nConsultations" },
];

const faqs = [
  {
    question: "What are the signs of stress or anxiety in teenagers?",
    answer:
      "Common signs include constant worry, overthinking, irritability, sleep changes, physical complaints, avoidance, difficulty concentrating and feeling overwhelmed by everyday situations.",
  },
  {
    question: "When should I worry about my teen's mental health?",
    answer:
      "Seek professional guidance when changes in mood, sleep, behaviour, school performance, relationships or daily functioning continue, intensify or begin affecting your teen's wellbeing.",
  },
  {
    question: "What causes depression in teenagers?",
    answer:
      "Teen depression can involve a combination of biological, emotional, family, social, academic and lifestyle factors. A structured assessment helps understand each teenager's individual situation.",
  },
  {
    question: "How does exam pressure affect teenagers?",
    answer:
      "Exam pressure can contribute to anxiety, disturbed sleep, low confidence, irritability, avoidance, physical symptoms and difficulty concentrating or performing at a teen's usual level.",
  },
  {
    question: "How can I build my teen's confidence?",
    answer:
      "Listen without judgment, recognise effort, set realistic expectations, encourage healthy routines and give your teen safe opportunities to make decisions, learn and express themselves.",
  },
  {
    question: "What is screen addiction in teenagers?",
    answer:
      "Problematic screen use occurs when gaming, social media or device use becomes difficult to control and begins disrupting sleep, studies, relationships, mood or daily responsibilities.",
  },
  {
    question: "How much screen time is too much?",
    answer:
      "The impact matters as much as the number of hours. Screen use needs attention when it consistently displaces sleep, physical activity, schoolwork, family interaction or offline interests.",
  },
  {
    question: "How does Manovaidya assess teen mental wellness?",
    answer:
      "The assessment explores emotional, behavioural, academic, family, sleep, lifestyle and screen-use patterns to understand concerns and create a personalised support plan.",
  },
  {
    question: "How can parents support their teen at home?",
    answer:
      "Create calm opportunities to talk, listen without immediate criticism, maintain predictable routines, respect appropriate privacy and stay connected with the agreed professional support plan.",
  },
  {
    question: "What therapies or approaches are used?",
    answer:
      "Support may include evidence-informed counselling, CBT, ACT, mindfulness, behaviour and lifestyle guidance, family support and Manovaidya's integrated Neuro-Ayurveda approach, depending on individual needs.",
  },
  {
    question: "Can teenagers improve with the right support?",
    answer:
      "Yes. Timely, consistent and personalised support can help teenagers understand emotions, develop coping skills, rebuild confidence and improve functioning at home, school and socially.",
  },
  {
    question: "Is online counselling effective for teens?",
    answer:
      "Online sessions can be effective for many teenagers when privacy, comfort, engagement and clinical suitability are considered. The appropriate format is discussed during assessment.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "Progress varies with the concern, its duration, severity, family support and consistency with the plan. Some changes appear early, while deeper concerns require sustained follow-up.",
  },
  {
    question: "Is Manovaidya support confidential?",
    answer:
      "Care is provided in a confidential and respectful environment. Privacy practices and the necessary safety-related limits of confidentiality are explained before support begins.",
  },
  {
    question: "How does Manovaidya involve parents in the process?",
    answer:
      "Parents receive practical guidance and progress-oriented support while the teenager's trust, dignity and age-appropriate privacy remain central to the care process.",
  },
];

function TeenMentalTrustFaqSection() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-[#edeaf6] bg-white shadow-[0_14px_40px_rgba(47,32,113,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(105deg,#28116f_0%,#39148a_38%,#77209d_74%,#f16a78_100%)] px-5 py-6 text-white sm:px-7 lg:px-9 lg:py-5">
          <h2 className="font-serif text-[24px] font-bold leading-tight lg:text-[28px]">
            Why Families Choose Manovaidya
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
                <span className="text-[#8b43ba]">Ankush Garg</span>
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#4e476a] lg:text-[16px]">
                Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health
                Specialist in India and the Founder of Manovaidya. He created the Neuro-Ayurveda
                Development System, integrating modern neuroscience with Ayurveda to support
                children&apos;s and teens&apos; mental wellness.
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

        <div id="teen-faqs" className="px-5 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-serif text-[26px] font-bold">
              <span className="text-[#18181b]">Frequently Asked </span>
              <span className="text-[#8b43ba]">Questions</span>
            </h3>
            <a href="#teen-faqs" className="inline-flex items-center gap-1 text-[14px] font-black text-[#3f278b]">
              View All FAQs <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-2 grid gap-x-8 md:grid-cols-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-[#efecf6] py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-bold text-[#3f3764] marker:content-none">
                  <span>{question}</span>
                  <Plus className="h-3.5 w-3.5 shrink-0 text-[#442894] transition-transform group-open:rotate-45" />
                </summary>
                <p className="pt-2 text-[14px] leading-relaxed text-[#68617e]">{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative min-h-[145px] overflow-hidden bg-[#2c176e] text-white">
          <img
            src={sunsetImage}
            alt="Person sitting peacefully at sunset"
            className="absolute inset-0 h-full w-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2d176f_0%,rgba(52,24,115,0.98)_38%,rgba(98,34,126,0.73)_62%,rgba(73,24,91,0.08)_100%)]" />

          <div className="relative z-10 grid min-h-[145px] items-center gap-6 px-6 py-6 md:grid-cols-[minmax(280px,0.8fr)_minmax(380px,1fr)_0.5fr] lg:px-9">
            <div>
              <h3 className="font-serif text-[28px] font-bold leading-[1.08]">
                Concerned About Your Teen&apos;s
                <br />
                Mental Wellbeing?
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
                className="inline-flex min-h-12 min-w-[240px] items-center justify-center gap-4 rounded-md border border-white/55 bg-white/5 px-5 text-[13px] font-bold text-white backdrop-blur-sm"
              >
                Take Teen Wellness Assessment <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeenMentalTrustFaqSection;

