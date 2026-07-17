import React from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  MessageCircle,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/teen-depression-support-india.png";
import parentGuidanceImage from "../images/parent-support-teen-depression.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-depression.png";
import ctaImage from "../images/teen-emotional-wellbeing-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Teen Depression & Low Mood", id: "understanding-teen-depression" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Experience Depression", id: "why-experience-depression" },
  { label: "How It Affects Teenagers", id: "how-it-affects" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "How Parents Can Support", id: "how-parents-can-support" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Families Choose Us", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Teen Depression", count: 12, Icon: Activity },
  { label: "Exam Pressure", count: 10, Icon: BookOpen },
  { label: "Screen Addiction", count: 8, Icon: Brain },
  { label: "Confidence & Self-Esteem", count: 11, Icon: Sparkles },
  { label: "Parent-Teen Relationship", count: 9, Icon: Users },
  { label: "Teen Stress & Anxiety", count: 13, Icon: HeartHandshake },
];

const faqs = [
  {
    question: "1. Why is my teenager always sad?",
    answer: "Teenagers may feel sad for many reasons, including academic pressure, friendship challenges, social comparison, low confidence, family stress or emotional difficulties. Occasional sadness is a normal part of life, but persistent sadness that continues for several weeks and begins affecting daily activities, relationships or motivation may indicate a deeper emotional concern. Understanding the factors influencing emotional wellbeing often helps families provide better support and guidance during this important stage of development."
  },
  {
    question: "2. What are the signs of depression in teenagers?",
    answer: "Common signs of depression in teenagers may include persistent sadness, irritability, emotional withdrawal, loss of interest in activities, reduced motivation, sleep changes, appetite changes, declining academic performance and low confidence. Some teenagers may become quiet and isolated, while others may appear angry or emotionally sensitive. Recognizing these signs early can help families better understand what their teenager may be experiencing and take supportive steps toward emotional wellbeing."
  },
  {
    question: "3. How do I know if my teenager is depressed?",
    answer: "Parents may notice prolonged sadness, loss of interest in hobbies, social withdrawal, low energy, reduced motivation and changes in sleep or eating habits. Depression often affects more than mood alone and may influence relationships, confidence and academic performance. If these changes continue for an extended period and begin affecting daily life, it may be helpful to seek structured guidance and a deeper understanding of the teenager's emotional wellbeing."
  },
  {
    question: "4. What causes depression in teenagers?",
    answer: "There is rarely a single cause of depression in teenagers. Emotional wellbeing may be influenced by academic pressure, social experiences, confidence challenges, family relationships, lifestyle habits, excessive screen use and personal experiences. Every teenager responds differently to stress and life events. Understanding the broader factors contributing to emotional difficulties often helps families provide more meaningful support and create a healthier environment for growth and resilience."
  },
  {
    question: "5. Is depression in teens serious?",
    answer: "Depression in teenagers should be taken seriously because it can affect emotional wellbeing, relationships, confidence, motivation and academic performance. While occasional sadness is normal, persistent emotional struggles may interfere with daily functioning and quality of life. Early understanding, emotional support and appropriate guidance can help families address concerns more effectively and support long-term wellbeing."
  },
  {
    question: "6. How long does teen depression last?",
    answer: "The duration of depression varies from one teenager to another. Some emotional difficulties may improve over time with support, while others may persist if underlying factors remain unaddressed. Emotional wellbeing is influenced by many different aspects of a teenager's life, including relationships, lifestyle habits, confidence and stress levels. Early understanding and structured support often help families better navigate emotional challenges and promote long-term resilience."
  },
  {
    question: "7. What are the therapies for teens with depression?",
    answer: "Support for teenagers experiencing depression may include counselling, psychotherapy, family guidance, behavioural support, emotional wellbeing strategies and lifestyle-based interventions. The most appropriate approach depends on the teenager's individual needs and circumstances. Effective support often focuses not only on emotional symptoms but also on understanding the broader factors that may influence confidence, behaviour, motivation and overall wellbeing."
  },
  {
    question: "8. Why has my teenager lost interest in everything?",
    answer: "A loss of interest in activities that were once enjoyable may sometimes be linked to emotional stress, low mood, confidence challenges, burnout or reduced motivation. Teenagers experiencing emotional difficulties may withdraw from hobbies, social activities or daily responsibilities. Understanding the reasons behind these changes is often more helpful than focusing only on the behaviour itself. Supportive communication and emotional understanding can make a meaningful difference."
  },
  {
    question: "9. Can depression affect school performance?",
    answer: "Yes. Emotional wellbeing and academic performance are closely connected. Teenagers experiencing depression may struggle with concentration, motivation, memory, participation and completing academic tasks. Emotional difficulties can affect learning even when a teenager has strong abilities. Supporting emotional wellbeing often helps create a stronger foundation for academic growth, confidence and long-term success."
  },
  {
    question: "10. How can parents help a teenager with depression?",
    answer: "Parents can help by maintaining open communication, listening without judgement, offering emotional support and creating a safe environment where teenagers feel understood. Encouraging healthy routines, balanced lifestyle habits and positive social connections may also support emotional wellbeing. Teenagers often respond better when they feel supported rather than criticized or pressured. Small, consistent efforts can contribute significantly to emotional resilience and recovery."
  },
  {
    question: "11. What are the first signs of depression?",
    answer: "Early signs of depression may include persistent sadness, irritability, emotional withdrawal, low confidence, reduced motivation, fatigue, sleep changes and loss of interest in activities. Some teenagers may become more sensitive or struggle with concentration and daily responsibilities. Recognizing these early signs can help families better understand emotional wellbeing concerns and seek appropriate support when needed."
  },
  {
    question: "12. Can teenagers recover from depression?",
    answer: "Many teenagers experience meaningful improvement in emotional wellbeing when they receive understanding, support, guidance and healthy coping strategies. Every teenager's journey is different, and progress often depends on individual circumstances and the factors contributing to emotional difficulties. A supportive family environment, healthy habits and structured guidance can play an important role in helping teenagers build resilience and confidence over time."
  },
  {
    question: "13. How does Manovaidya support teenagers and families?",
    answer: "At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single symptom. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of emotional wellbeing, behaviour, confidence and lifestyle-related influences. The goal is to help teenagers and families move toward greater clarity, resilience and long-term wellbeing."
  },
  {
    question: "14. Can depression be treated without medication?",
    answer: "The most appropriate approach depends on the teenager's individual situation and the severity of concerns. Many families explore non-medication strategies such as counselling, emotional wellbeing support, healthy routines, physical activity, family guidance and lifestyle improvements. Understanding the factors contributing to emotional difficulties often helps identify supportive approaches that strengthen confidence, resilience and overall wellbeing."
  },
  {
    question: "15. When should parents seek professional guidance?",
    answer: "Parents may consider seeking guidance when emotional difficulties persist over time and begin affecting daily functioning, relationships, motivation, confidence, sleep or academic performance. Signs such as prolonged sadness, emotional withdrawal, reduced interest in activities, behavioural changes or declining wellbeing may indicate the need for additional support. A structured assessment can help families gain clarity regarding the factors influencing their teenager's emotional health and overall development."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question.replace(/^\d+\.\s*/, ''),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Teen Mental Wellness Pages</h2>
      <div className="mt-4 space-y-3">
        <a href="/teen-stress-anxiety-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Activity className="h-4 w-4 text-[#7835A4]" /> Teen Stress & Anxiety Treatment
        </a>
        <a href="/exam-performance-pressure/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <BookOpen className="h-4 w-4 text-[#7835A4]" /> Exam & Performance Pressure
        </a>
        <a href="/teen-mental-wellness-india/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Sparkles className="h-4 w-4 text-[#7835A4]" /> Teen Confidence & Emotional Wellbeing
        </a>
        <a href="/teen-screen-addiction-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Brain className="h-4 w-4 text-[#7835A4]" /> Screen Addiction Support
        </a>
        <a href="/parent-teen-relationship-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Users className="h-4 w-4 text-[#7835A4]" /> Parent-Teen Relationship Treatment
        </a>
      </div>
    </SidebarCard>
  );
}

function TeenDepressionLowMoodIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    const scriptId = "faq-schema-script";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(faqSchema);
  }, []);

  React.useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 170;
      let currentSection = pageLinks[0].id;

      pageLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollMarker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-white text-[#1f1726]"
      style={{ font: '400 1.125rem/1.5 "Martel", serif' }}
    >
      <Seo
        title="Teen Depression & Low Mood Treatment in India | Teen Mental Health Support | Manovaidya"
        description="Looking for Teen Depression Treatment in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya."
        keywords="Teen Depression Treatment India, Teen Low Mood, Adolescent Depression, Teenage Depression Support, Teen Mental Health, Parent Guidance for Teen Depression, Neuro-Ayurveda Teen Care, Emotional Wellbeing, Dr. Ankush Garg"
        path="/teen-depression-support"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Teen Depression & Low Mood Treatment in India",
          "description": "Looking for Teen Depression Treatment in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/teen-mental-wellness" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Teen Depression & Low Mood Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Teen Depression & Low Mood Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Teenagers Build Emotional Strength, Confidence & Better Emotional Wellbeing. Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+917823838638"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]"
                >
                  Talk to Our Team
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                    <p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]">
                  <span>Share:</span>
                  {["f", "x", "in", "wa"].map((label) => (
                    <a
                      key={label}
                      href="#share"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white"
                      aria-label="Share article"
                    >
                      {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex">
                <Brain className="mb-1 h-5 w-5" />
                Neuro-Ayurveda Development System
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]">
                <img
                  src={heroImage}
                  alt="Teen Depression Treatment in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Helping Teenagers Build Emotional Strength, Confidence & Better Emotional Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teenage years can be emotionally challenging. While occasional sadness, disappointment and mood changes are a normal part of growing up, some teenagers may experience persistent low mood, emotional withdrawal, loss of motivation and difficulties enjoying everyday activities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents notice that their teenager seems distant, unhappy, irritable or no longer interested in things they once enjoyed. These changes can be confusing and concerning, especially when parents are unsure whether they are part of normal adolescence or signs of a deeper emotional challenge.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that emotional wellbeing is influenced by multiple factors including confidence, relationships, lifestyle habits, academic experiences, social pressures and overall mental wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand emotional wellbeing while creating a roadmap for long-term growth and resilience.
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Teen Depression & Low Mood Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Emotional Wellbeing & Resilience", Icon: HeartHandshake },
                  { label: "Confidence & Self-Esteem Building", Icon: Sparkles },
                  { label: "Understanding Low Mood & Emotional Withdrawal", Icon: ShieldCheck },
                  { label: "Healthy Lifestyle & Daily Habits", Icon: Activity },
                  { label: "Parent-Teen Communication & Support", Icon: Users },
                  { label: "Long-Term Mental Wellness", Icon: Brain },
                ].map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[100px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="understanding-teen-depression" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Teen Depression & Low Mood</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Feeling sad from time to time is a natural part of life. Teenagers may feel disappointed after a poor exam result, friendship conflict or personal setback. In most situations, these emotions gradually improve with time and support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when sadness becomes persistent, affects daily life and begins influencing behaviour, motivation, confidence and relationships, families often start looking for answers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents searching for Teen Depression Treatment in India, Teen Mental Health Treatment in India or guidance for Teen Emotional Wellbeing are often looking for a structured approach that helps them better understand what their teenager may be experiencing.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teen depression and low mood can affect teenagers differently:</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Some teenagers become quiet and withdrawn.",
                  "Others may appear angry, frustrated or emotionally sensitive.",
                  "Some may lose interest in hobbies and activities they once enjoyed.",
                  "Others may struggle with confidence, motivation and relationships."
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every teenager's experience is unique, which is why understanding emotional wellbeing requires looking beyond visible behaviours and exploring the broader factors that may be influencing their daily life.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Teen Depression & Low Mood</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teen depression does not always look the way many parents expect. A teenager does not have to cry constantly to be struggling emotionally. Many teenagers hide their emotions and continue functioning while experiencing significant emotional challenges internally. Parents may notice changes in emotions, behaviour, studies and daily habits:
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Persistent sadness", "Irritability", "Feelings of hopelessness", "Emotional sensitivity", "Low confidence", "Negative self-talk", "Increased emotional overwhelm"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Behavioural Signs</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Social withdrawal", "Avoiding friends and family", "Reduced interest in hobbies", "Lack of motivation", "Spending excessive time alone", "Increased screen dependency"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Academic Signs</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Declining academic performance", "Difficulty concentrating", "Reduced participation", "Lack of interest in studies", "Fear of failure"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Physical Signs</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Fatigue", "Changes in sleep patterns", "Appetite changes", "Reduced energy", "Difficulty maintaining routines"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              The presence of a few signs does not automatically mean a teenager is experiencing depression. However, when emotional and behavioural changes continue for an extended period and begin affecting daily functioning, they deserve understanding and attention.
            </p>
          </section>

          <section id="why-experience-depression" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Depression & Low Mood</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents assume there is always one clear reason behind emotional struggles. In reality, emotional wellbeing is usually influenced by multiple interconnected factors.
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Academic Pressure", desc: "School expectations, examinations and future career concerns can create ongoing emotional pressure. When teenagers feel unable to meet expectations, confidence and motivation may be affected." },
                { title: "Social Comparison", desc: "Teenagers often compare themselves to peers, friends and social media content. Constant comparison may contribute to feelings of inadequacy, self-doubt and emotional distress." },
                { title: "Relationship Challenges", desc: "Friendship difficulties, peer conflicts and social rejection can significantly affect emotional wellbeing during adolescence." },
                { title: "Low Confidence & Self-Esteem", desc: "Teenagers who struggle with self-confidence may become more vulnerable to negative thinking patterns and emotional challenges." },
                { title: "Screen & Social Media Influence", desc: "Excessive exposure to social media can increase comparison, unrealistic expectations and emotional pressure." },
                { title: "Lifestyle & Sleep Habits", desc: "Poor sleep, irregular routines, lack of physical activity and excessive screen use may influence emotional wellbeing and overall mental wellness." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents worry that ongoing low mood, emotional withdrawal, declining confidence or reduced motivation may affect their teenager's future growth, relationships and overall wellbeing. Understanding these concerns early often helps families take positive and informed steps toward better emotional health and resilience.
            </p>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Depression & Low Mood Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Depression and low mood can influence much more than emotions alone. When emotional struggles continue for an extended period, they may affect confidence, relationships, motivation, learning and overall wellbeing. Many teenagers struggle silently because they find it difficult to explain what they are feeling or fear being misunderstood. Understanding how emotional wellbeing influences different areas of life can help families provide more meaningful support.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">One of the most significant effects of depression and low mood is emotional overwhelm. Teenagers may experience: Persistent sadness, Emotional numbness, Hopelessness, Irritability, Frustration, Increased sensitivity, Feelings of loneliness. Over time, these emotional challenges may affect how teenagers view themselves, their future and their relationships.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence & Self-Esteem</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Many teenagers experiencing low mood begin doubting themselves. Common thoughts may include: I am not good enough. Nobody understands me. I always fail. Things will never improve. These thoughts can gradually affect confidence and self-esteem. A teenager who once enjoyed participating in activities may begin avoiding challenges because they no longer believe in their abilities.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Emotional wellbeing and academic performance are closely connected. Teenagers experiencing depression or low mood may struggle with: Concentration, Motivation, Memory, Participation in class, Completing assignments, Exam preparation. Many parents initially focus on falling grades without realizing that emotional wellbeing may be influencing academic performance.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Relationships & Social Life</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Depression can also affect friendships and family relationships. Some teenagers may: Spend more time alone, Avoid social interaction, Withdraw from friends, Communicate less, Become more sensitive to criticism. These changes may create misunderstandings between teenagers, parents and peers.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Daily Functioning</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Low mood may influence everyday routines. Teenagers may experience: Reduced energy, Sleep difficulties, Changes in appetite, Difficulty maintaining schedules, Loss of interest in hobbies, Reduced participation in family activities. Understanding these changes as potential signs of emotional struggles often helps families respond with greater empathy and support.</p>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)]">
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">
                The Neuro-Ayurveda Approach to Teen Depression & Low Mood
              </h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                At Manovaidya, emotional wellbeing is understood through a broader and more comprehensive perspective. Rather than focusing only on sadness, motivation or behaviour alone, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation, attention and overall development. The Neuro-Ayurveda Development System helps families better understand emotional wellbeing through five interconnected pillars.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "Healthy emotional wellbeing is closely connected to healthy cognitive and emotional functioning. The Brain Nourishment System focuses on understanding factors that may influence: Emotional balance, Confidence, Attention, Learning readiness, Decision making, Cognitive wellbeing. Supporting emotional resilience often begins with understanding how teenagers process emotions, experiences and challenges.", Icon: Brain },
                { title: "Gut Response System", text: "Growing research continues to explore the relationship between digestive wellbeing and emotional health. Many teenagers experiencing emotional challenges may also experience: Digestive discomfort, Appetite changes, Irregular eating habits, Energy fluctuations, Lifestyle-related concerns. The Gut Response System focuses on understanding how overall wellbeing may influence emotional balance and daily functioning.", Icon: Utensils },
                { title: "Neural Network System", text: "Every experience contributes to how the brain develops patterns of thinking, learning and responding. The Neural Network System focuses on understanding: Thought patterns, Emotional responses, Behavioural tendencies, Learning habits, Adaptability. Understanding these patterns often helps families gain greater clarity regarding emotional wellbeing.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "The environment around a teenager can influence emotional wellbeing. Factors such as: Academic pressure, Social environments, Noise, Digital stimulation, Social expectations may influence how teenagers experience stress, emotions and daily challenges. Understanding sensory influences often helps create more supportive environments.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "Behaviour is often a reflection of underlying emotional experiences. Teenagers experiencing low mood may show: Withdrawal, Irritability, Lack of motivation, Reduced communication, Avoidance behaviours. Rather than focusing only on behaviour, this pillar focuses on understanding the factors that may be contributing to those behaviours and helping families respond more effectively.", Icon: ShieldCheck }
              ].map((pillar) => (
                <div key={pillar.title} className="flex gap-4 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm">
                    <pillar.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-black text-[#21142d]">{pillar.title}</h3>
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 w-full h-[380px] rounded-lg shadow-[0_12px_30px_rgba(58,31,90,0.08)] bg-[#fbf9fd] flex items-center justify-center p-8">
              <img
                src={neuroAyurvedaImage}
                alt="Neuro Ayurveda approach for teen depression support"
                className="max-h-full max-w-full rounded-lg object-contain object-center"
              />
            </div>
          </section>

          <section id="how-parents-can-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Support Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents play a critical role in supporting emotional wellbeing during adolescence. Even small changes in communication, understanding and daily routines can make a meaningful difference.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Stay Emotionally Available", desc: "Many teenagers need to know that support is available even when they are not ready to talk. Consistent emotional presence often helps teenagers feel safer and more understood." },
                { title: "Listen Without Judgement", desc: "Teenagers are more likely to open up when they feel heard rather than judged. Listening calmly and respectfully can strengthen trust and communication." },
                { title: "Avoid Constant Criticism", desc: "Excessive criticism may reduce confidence and increase emotional distress. Supportive guidance often produces better outcomes than constant correction." },
                { title: "Encourage Healthy Routines", desc: "Healthy sleep habits, balanced schedules, physical activity and consistent daily routines can support emotional wellbeing." },
                { title: "Support Social Connection", desc: "Encouraging positive friendships, family interaction and healthy social experiences may help teenagers feel more connected and supported." },
                { title: "Focus on Strengths", desc: "Many teenagers struggling emotionally become focused on perceived weaknesses. Parents can help by recognizing strengths, effort and progress rather than focusing only on difficulties." },
                { title: "Create a Supportive Home Environment", desc: "A calm, understanding and emotionally safe environment often helps teenagers navigate challenges more effectively." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <img
              src={parentGuidanceImage}
              alt="Parent guidance for teen depression support"
              className="mt-6 w-full max-h-[380px] rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single symptom or concern. Our process typically includes:
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding emotional wellbeing, motivation, confidence, lifestyle habits, sleep patterns, social experiences and family concerns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing individualized recommendations based on the teenager's emotional, behavioural and developmental needs." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents better understand communication, emotional wellbeing and practical ways to support their teenager at home." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand emotional wellbeing, behaviour, confidence and overall growth." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap that helps families monitor progress and make informed decisions over time." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help teenagers and families move from confusion and emotional distress toward greater clarity, confidence and wellbeing.
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for a teenager can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps them better understand their teenager's emotional wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our goal is not simply to focus on isolated symptoms but to help families understand the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation and overall development.
            </p>
            
            <h3 className="mt-6 mb-4 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Teen Mental Wellness Assessment", desc: "Every teenager is unique. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for support and growth." },
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand emotional wellbeing through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System" },
                { title: "Parent-Centred Guidance", desc: "Teen mental wellness is not only about the teenager. Parents play an important role in creating a supportive environment for emotional growth and resilience." },
                { title: "Personalized Support", desc: "Every teenager experiences emotional challenges differently. Guidance is always tailored according to individual needs and circumstances." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on helping teenagers build confidence, emotional resilience, healthy habits and long-term wellbeing rather than seeking short-term solutions alone." },
                { title: "Family-Oriented Approach", desc: "When parents and teenagers work together with proper understanding and guidance, meaningful progress often becomes easier to achieve." }
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7835A4]" />
                  <div>
                    <h4 className="text-[14px] font-black text-[#21142d]">{title}</h4>
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[15px] font-black leading-7 text-[#17111f]">
              Why Families Across India Connect With Manovaidya
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Depression Treatment, Teen Mental Health Support and Teen Emotional Wellbeing guidance through online and in-clinic consultations.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                src={doctorImage}
                alt="Dr. Ankush Garg"
                className="h-24 w-24 rounded-full object-cover shadow-sm"
              />
              <div>
                <h2 className="text-[18px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="text-[13px] font-black text-[#7835A4] mt-1">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Over the years, he has worked with children, teenagers, adults and families seeking support for developmental, behavioural, emotional and mental wellness concerns. Many families searching for a Mental Health Specialist in India are looking for more than symptom-based guidance. They are looking for clarity, direction and a structured roadmap.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Dr. Ankush Garg's work focuses on helping families better understand emotional wellbeing, behavioural patterns, confidence challenges, lifestyle-related influences and long-term mental wellness planning. Through structured assessment, personalized guidance, family support and regular follow-up, he helps individuals and families move from confusion toward greater clarity, confidence and wellbeing.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Today, families from different parts of India connect with Manovaidya because they are looking for a compassionate, structured and personalized approach that focuses on overall wellbeing and long-term growth.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
                <a href="/dr-ankush-garg/" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline">
                  Know more about Dr. Ankush Garg <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-[14px] font-black text-[#21142d]">{faq.question}</span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbf9fd] transition-transform ${openFaq === index ? "rotate-180 bg-[#f0e7f6] text-[#7835A4]" : "text-[#9b8ea5]"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-[#eadff1] bg-[#fbf9fd] p-4">
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-6 sm:p-8">
              <h2 className="text-[22px] font-black leading-tight">
                Concerned About Your Teenager's Emotional Wellbeing?
              </h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If your teenager is experiencing persistent sadness, emotional withdrawal, low motivation, confidence challenges or behavioural changes, seeking clarity is often the first step.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                At Manovaidya, our team helps families better understand emotional wellbeing through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Take the First Step Towards Better Teen Emotional Wellbeing</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Book Assessment Session",
                    "Speak With Our Team",
                    "Get Personalized Guidance"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb] flex flex-wrap gap-4">
                <a
                  href="tel:+917823838638"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+917823838638"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]"
                >
                  Take Teen Wellness Assessment
                </a>
              </div>
            </div>
            <img
              src={ctaImage}
              alt="Teen emotional wellbeing support in India"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input
                type="search"
                placeholder="Search topics..."
                className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]"
              />
              <Search className="h-4 w-4 text-[#7835A4]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id
                      ? "bg-[#f0e7f6] text-[#7835A4]"
                      : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                    }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"
                      }`}
                  />
                  {label}
                </a>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map(({ label, count, Icon }) => (
                <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#7835A4]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedTeenMentalWellnessPages />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a personalized plan for your teenager from our experts.
            </p>
            <a
              href="tel:+917823838638"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-[#fbf9fd]">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm">
              <Mail className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, teen development tips and Manovaidya updates.
              </p>
            </div>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]"
            />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default TeenDepressionLowMoodIndiaPage;

