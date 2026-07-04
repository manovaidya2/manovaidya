import React from "react";
import {
  ArrowRight,
  Brain,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  House,
  Plus,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import doctorImage from "../images/doctorimg-2.jpeg";
import sunsetImage from "../images/senior-couple-sunset-cta.png";

const reasons = [
  { label: "Experienced &\nCompassionate Team", Icon: HeartHandshake },
  { label: "Evidence-Based\nApproach", Icon: ShieldCheck },
  { label: "Holistic Mind & Body\nCare", Icon: Brain },
  { label: "Home-Based & Online\nSupport Available", Icon: House },
  { label: "Family-Centred\nCare", Icon: UsersRound },
  { label: "Long-Term Brain\nHealth Focus", Icon: HeartPulse },
];

const stats = [
  { value: "10+", label: "Years of\nExperience" },
  { value: "50,000+", label: "Families\nSupported" },
  { value: "20+", label: "Specialized\nPrograms" },
  { value: "India Wide", label: "Online & In-Person\nConsultations" },
];

const faqs = [
  {
    question: "What are early signs of memory loss in seniors?",
    answer:
      "Early signs may include repeating questions, forgetting recent conversations, losing familiar items, confusion about time or place, and difficulty managing usual daily tasks.",
  },
  {
    question: "Can memory loss be reversed?",
    answer:
      "It depends on the cause; some memory problems linked with sleep, mood, nutrition, thyroid issues or medicines may improve when identified and treated, while progressive conditions need ongoing support.",
  },
  {
    question: "What is the difference between dementia and Alzheimer's?",
    answer:
      "Dementia is a general term for symptoms affecting memory and thinking, while Alzheimer's disease is one of the most common conditions that can cause dementia.",
  },
  {
    question: "How can I help my loved one with memory problems?",
    answer:
      "Offer calm communication, predictable routines, written reminders and practical safety support, and arrange a professional assessment if changes are persistent or worsening.",
  },
  {
    question: "Is forgetfulness a normal part of ageing?",
    answer:
      "Occasional lapses can occur with ageing, but repeated or worsening memory problems that disrupt daily life, judgment or familiar activities should be professionally assessed.",
  },
  {
    question: "How can I improve my memory naturally?",
    answer:
      "Regular sleep, suitable physical activity, social engagement, balanced nutrition, mental stimulation and good control of health conditions can support overall brain health.",
  },
  {
    question: "Are online therapy sessions effective for seniors?",
    answer:
      "Online sessions can support follow-ups, emotional wellbeing, lifestyle planning and caregiver guidance, although some memory concerns may also require an in-person medical assessment.",
  },
  {
    question: "What therapies are used for dementia care?",
    answer:
      "Care may include cognitive stimulation, structured routines, emotional support, lifestyle guidance, caregiver education, medical coordination and personalised holistic strategies.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "The timeline depends on the cause, severity, overall health and consistency with the plan; progress is monitored regularly and care is adjusted to current needs.",
  },
  {
    question: "Can seniors live independently with memory issues?",
    answer:
      "Some seniors with mild concerns can remain independent with routines, reminders and family support, but safety and support needs should be reviewed individually as symptoms change.",
  },
  {
    question: "Is medication always necessary?",
    answer:
      "Not always; care may also use routines, cognitive activities, sleep and lifestyle support, but medication decisions must be made with the senior's qualified treating clinician.",
  },
  {
    question: "Do you provide home visit or caregiver guidance?",
    answer:
      "Caregiver guidance and family education can be included; home-visit availability depends on location and should be confirmed directly with the Manovaidya team.",
  },
];

function SeniorTrustFaqSection() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-[#edeaf6] bg-white shadow-[0_14px_40px_rgba(47,32,113,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(105deg,#28116f_0%,#39148a_38%,#77209d_74%,#f16a78_100%)] px-5 py-6 text-white sm:px-7 lg:px-9 lg:py-5">
          <h2 className="font-serif text-[24px] font-bold leading-tight lg:text-[28px]">
            Why Families Trust Manovaidya
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
                neuroscience with the timeless wisdom of Ayurveda to support mental health across
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

        <div id="senior-faqs" className="px-5 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-serif text-[26px] font-bold">
              <span className="text-[#18181b]">Frequently Asked </span>
              <span className="text-[#8B43BA]">Questions</span>
            </h3>
            <a
              href="#senior-faqs"
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

        <div className="relative min-h-[155px] overflow-hidden bg-[#2c176e] text-white">
          <img
            src={sunsetImage}
            alt="Senior couple walking together at sunset"
            className="absolute inset-0 h-full w-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2d176f_0%,rgba(52,24,115,0.98)_38%,rgba(98,34,126,0.72)_62%,rgba(73,24,91,0.05)_100%)]" />

          <div className="relative z-10 grid min-h-[155px] items-center gap-6 px-6 py-6 md:grid-cols-[minmax(330px,0.9fr)_minmax(420px,1fr)_0.35fr] lg:px-9">
            <div>
              <h3 className="font-serif text-[28px] font-bold leading-[1.08]">
                Concerned About Your Loved One&apos;s
                <br />
                Memory or Mind Health?
              </h3>
              <p className="mt-2 text-[14px] font-medium text-white/90">
                Book a confidential memory assessment and let our experts guide you with the right care and support.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex min-h-12 min-w-[225px] items-center justify-center gap-4 rounded-md bg-white px-5 text-[13px] font-black text-[#3b2582]"
              >
                Book Memory Assessment <ArrowRight className="h-4 w-4" />
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

export default SeniorTrustFaqSection;

