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

import heroImage from "../images/exam-performance-pressure-support-india.webp";
import parentGuidanceImage from "../images/parent-support-exam-stress.webp";
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import ctaImage from "../images/academic-wellbeing-support-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Exam Pressure", id: "understanding-exam-pressure" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Experience Stress", id: "why-experience-stress" },
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
  { label: "Exam Pressure", count: 10, Icon: BookOpen },
  { label: "Teen Depression", count: 12, Icon: Activity },
  { label: "Screen Addiction", count: 8, Icon: Brain },
  { label: "Confidence & Self-Esteem", count: 11, Icon: Sparkles },
  { label: "Parent-Teen Relationship", count: 9, Icon: Users },
  { label: "Teen Stress & Anxiety", count: 13, Icon: HeartHandshake },
];

const faqs = [
  {
    question: "1. Why does my teenager get stressed before exams?",
    answer: "Many teenagers experience stress before exams because they worry about performance, results, future opportunities and meeting expectations. Academic pressure, fear of failure, comparison with peers and uncertainty about outcomes can all contribute to exam-related stress. While some level of stress may motivate preparation, excessive stress can affect confidence, concentration and emotional wellbeing. Understanding the reasons behind exam stress often helps families provide more effective support."
  },
  {
    question: "2. What are the signs of exam anxiety?",
    answer: "Common signs of exam anxiety may include excessive worrying, overthinking, sleep difficulties, fear of failure, difficulty concentrating, irritability, emotional overwhelm and physical symptoms such as headaches, stomach discomfort or restlessness. Some teenagers may avoid studying, procrastinate or become unusually emotional before examinations. Recognizing these signs early can help families better understand their teenager's emotional wellbeing and provide timely support."
  },
  {
    question: "3. How can parents help teenagers during exams?",
    answer: "Parents can support teenagers by creating a calm and encouraging environment during exam periods. Listening without judgement, reducing unnecessary pressure, maintaining healthy routines and focusing on effort rather than only results often helps teenagers manage stress more effectively. Emotional support and reassurance can play an important role in helping teenagers build confidence and resilience during challenging academic periods."
  },
  {
    question: "4. Can exam stress affect academic performance?",
    answer: "Yes. Excessive exam stress may affect concentration, memory, confidence and decision-making abilities. Many students find it difficult to perform at their best when anxiety becomes overwhelming. Emotional wellbeing and academic performance are closely connected, which is why supporting a teenager's mental wellbeing often helps create a stronger foundation for learning and achievement."
  },
  {
    question: "5. Why is my child afraid of failure?",
    answer: "Fear of failure may develop when teenagers associate their self-worth with academic results or feel excessive pressure to succeed. High expectations, perfectionist tendencies, comparison with others and concerns about disappointing family members can all contribute to this fear. Helping teenagers focus on growth, learning and effort rather than perfection often supports healthier confidence and emotional resilience."
  },
  {
    question: "6. How can I improve my teenager's concentration?",
    answer: "Concentration may be influenced by sleep quality, emotional wellbeing, study habits, lifestyle routines, screen use and stress levels. Encouraging consistent schedules, healthy sleep, regular physical activity and balanced study routines often helps improve focus. Understanding the factors affecting concentration is usually more effective than simply asking teenagers to study harder."
  },
  {
    question: "7. What causes performance anxiety in teenagers?",
    answer: "Performance anxiety may be influenced by fear of judgement, academic expectations, low confidence, perfectionism, social pressure and concerns about future outcomes. Some teenagers place significant pressure on themselves to achieve specific results. Understanding these emotional influences often helps families better support confidence and wellbeing during academic challenges."
  },
  {
    question: "8. Why does my teenager procrastinate before exams?",
    answer: "Procrastination is not always a sign of laziness. In many cases, it may be linked to fear of failure, anxiety, overwhelm, low confidence or difficulty managing academic pressure. Teenagers may delay studying because they feel stressed about the task itself. Understanding the reasons behind procrastination often helps families provide more meaningful guidance and support."
  },
  {
    question: "9. Can lack of sleep increase exam stress?",
    answer: "Yes. Sleep plays an important role in emotional wellbeing, memory, concentration and learning. Poor sleep habits may increase irritability, anxiety, stress levels and difficulty focusing. Maintaining healthy sleep routines during exam periods often supports both emotional wellbeing and academic performance."
  },
  {
    question: "10. What is the best way to manage exam stress?",
    answer: "Managing exam stress often involves a combination of healthy study habits, adequate sleep, balanced daily routines, emotional support, realistic expectations and effective time management. Every teenager responds differently to academic pressure, so understanding individual needs and challenges is important. The goal is not only to improve performance but also to support confidence and emotional wellbeing."
  },
  {
    question: "11. How do I help my child deal with academic pressure?",
    answer: "Parents can help by encouraging open communication, reducing excessive expectations and focusing on learning rather than only outcomes. Teenagers often cope better when they feel supported and understood. Creating a balanced environment that values effort, growth and wellbeing can help reduce unnecessary pressure and improve confidence."
  },
  {
    question: "12. What are the first signs of academic burnout?",
    answer: "Early signs of academic burnout may include emotional exhaustion, reduced motivation, difficulty concentrating, increased irritability, sleep disturbances, fatigue and loss of interest in studies. Some teenagers may also become withdrawn or feel overwhelmed by tasks they previously managed comfortably. Identifying these signs early often helps prevent further emotional strain."
  },
  {
    question: "13. How does Manovaidya support students and families?",
    answer: "At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of emotional wellbeing, confidence, concentration, motivation and lifestyle-related influences. The goal is to help students and families move toward greater clarity, resilience and long-term growth."
  },
  {
    question: "14. Can exam stress be managed without medication?",
    answer: "Many teenagers benefit from non-medication approaches that focus on emotional wellbeing, healthy routines, effective study habits, stress management, physical activity and family support. The most appropriate approach depends on the individual's needs and circumstances. Understanding the factors contributing to stress often helps families identify strategies that support confidence, resilience and academic wellbeing."
  },
  {
    question: "15. When should parents seek professional guidance for exam stress?",
    answer: "Parents may consider seeking guidance when exam-related stress begins affecting sleep, confidence, concentration, motivation, emotional wellbeing or daily functioning. Persistent anxiety, fear of failure, emotional breakdowns, avoidance of studies or significant behavioural changes may indicate the need for additional support. A structured assessment can help families better understand the factors influencing their teenager's academic and emotional wellbeing."
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
          <Activity className="h-4 w-4 text-[#7835A4]" /> Teen Stress & Anxiety Support
        </a>
        <a href="/teen-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <HeartHandshake className="h-4 w-4 text-[#7835A4]" /> Teen Depression & Low Mood Support
        </a>
        <a href="/teen-confidence-emotional-wellbeing/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Sparkles className="h-4 w-4 text-[#7835A4]" /> Teen Confidence & Emotional Wellbeing
        </a>
        <a href="/teen-screen-addiction-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Brain className="h-4 w-4 text-[#7835A4]" /> Screen Addiction Support
        </a>
        <a href="/parent-teen-relationship-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Users className="h-4 w-4 text-[#7835A4]" /> Parent-Teen Relationship Support
        </a>
      </div>
    </SidebarCard>
  );
}

function ExamPerformancePressureIndiaPage() {
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

    document.title = "Exam & Performance Pressure Support in India | Exam Stress & Anxiety Support | Manovaidya";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Exam Stress Support in India? Learn about exam anxiety, academic pressure, fear of failure, concentration challenges and family guidance through the Neuro-Ayurveda approach at Manovaidya.";

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
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/teen-mental-wellness" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Exam & Performance Pressure Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Exam & Performance Pressure Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Teenagers Build Confidence, Emotional Resilience & Healthy Academic Wellbeing. Learn about exam anxiety, academic pressure, fear of failure, and family guidance at Manovaidya.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+917823894080"
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
                  alt="Exam and Performance Pressure Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Helping Teenagers Build Confidence, Emotional Resilience & Healthy Academic Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Academic expectations have become a significant part of modern teenage life. School examinations, competitive environments, future career planning and performance expectations can create considerable emotional pressure for many teenagers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              While a certain level of pressure may motivate learning and growth, excessive academic stress can affect emotional wellbeing, confidence, sleep, concentration and overall mental wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents notice that their teenager becomes anxious before exams, worries excessively about results, loses confidence or struggles to manage academic expectations. Understanding these challenges early often helps families provide more effective support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that exam pressure is not simply about studies. Emotional wellbeing, confidence, lifestyle habits, sleep patterns, family expectations and stress management skills often work together to influence academic performance and overall wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand exam-related stress while creating a roadmap for emotional resilience and long-term growth.
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Exam & Performance Pressure Support Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Exam Stress & Anxiety", Icon: Activity },
                  { label: "Academic Pressure Management", Icon: BookOpen },
                  { label: "Confidence & Self-Belief", Icon: Sparkles },
                  { label: "Fear of Failure", Icon: ShieldCheck },
                  { label: "Emotional Resilience", Icon: HeartHandshake },
                  { label: "Parent-Teen Academic Support", Icon: Users },
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

          <section id="understanding-exam-pressure" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Exam & Performance Pressure</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Examinations are often viewed as an important part of education. However, for many teenagers, academic performance becomes closely connected to self-worth, confidence and future expectations.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families searching for Exam Stress Support in India, Academic Pressure Support in India or Teen Mental Health Support in India are often looking for a structured approach that helps them better understand their teenager's emotional wellbeing and academic challenges.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teenagers may experience pressure from:</h3>
              <ul className="mt-3 space-y-2.5 sm:columns-2">
                {[
                  "School expectations",
                  "Competitive environments",
                  "Family expectations",
                  "Peer comparison",
                  "Career concerns",
                  "Fear of disappointing others"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              While some stress can be helpful, excessive pressure may affect confidence, concentration and emotional wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every teenager experiences academic pressure differently. Some become highly anxious before exams, while others lose motivation, avoid studying or become emotionally overwhelmed. Understanding these differences is often an important step toward providing meaningful support.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Exam & Performance Pressure</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Exam-related stress may appear emotionally, behaviourally, academically and physically.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <ul className="space-y-2">
                  {["Excessive worrying", "Fear of failure", "Irritability", "Overthinking", "Emotional overwhelm", "Low confidence"].map((step) => (
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
                <ul className="space-y-2">
                  {["Procrastination", "Avoiding studies", "Reduced motivation", "Emotional outbursts", "Excessive screen use"].map((step) => (
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
                <ul className="space-y-2">
                  {["Difficulty concentrating", "Poor time management", "Exam anxiety", "Memory difficulties", "Reduced performance despite effort"].map((step) => (
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
                <ul className="space-y-2">
                  {["Sleep difficulties", "Headaches", "Fatigue", "Restlessness", "Stomach discomfort"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents should focus on patterns rather than isolated incidents. Persistent stress affecting daily functioning may deserve additional attention and support.
            </p>
          </section>

          <section id="why-experience-stress" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Exam & Performance Pressure</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents assume exam stress occurs only because teenagers are not prepared enough. In reality, academic pressure is often influenced by multiple factors.
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Fear of Failure", desc: "Many teenagers worry about disappointing themselves, parents or teachers." },
                { title: "High Expectations", desc: "Strong academic expectations can sometimes create excessive emotional pressure." },
                { title: "Competitive Environments", desc: "Comparison with peers and academic competition may affect confidence and self-esteem." },
                { title: "Future Uncertainty", desc: "Questions about careers, admissions and future opportunities may increase stress levels." },
                { title: "Low Confidence", desc: "Teenagers who doubt their abilities often experience greater exam-related anxiety." },
                { title: "Lifestyle & Sleep Habits", desc: "Poor sleep, irregular routines and excessive screen use may negatively affect concentration and emotional wellbeing." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Exam Pressure Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Excessive academic stress may affect multiple areas of life.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Anxiety, Overthinking, Emotional exhaustion, Mood changes.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Many teenagers begin linking self-worth directly to grades and results.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Ironically, excessive pressure may reduce concentration, memory and exam performance.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Relationships</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Stress can influence communication with parents, teachers and friends.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Physical Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Sleep problems, Fatigue, Headaches, Reduced energy.</p>
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding these effects helps families focus on supporting overall wellbeing rather than only academic results.
            </p>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)]">
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">
                The Neuro-Ayurveda Approach to Exam & Performance Pressure
              </h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                At Manovaidya, exam stress is understood through a broader perspective. Rather than focusing only on marks, performance or academic outcomes, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, concentration, motivation, attention and overall development. The Neuro-Ayurveda Development System helps families better understand the interconnected factors that may influence a teenager's academic wellbeing and emotional resilience.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "Healthy learning begins with healthy cognitive functioning. The Brain Nourishment System focuses on understanding factors that may influence: Attention, Concentration, Memory, Learning readiness, Confidence, Decision making. Many teenagers struggling with academic pressure are not lacking ability. They may be struggling with emotional stress, poor routines or reduced confidence. Supporting academic wellbeing often begins with understanding how the brain processes information, learning experiences and challenges.", Icon: Brain },
                { title: "Gut Response System", text: "Growing research continues to highlight the relationship between digestive wellbeing and emotional health. Many teenagers experiencing academic stress may also report: Appetite changes, Digestive discomfort, Irregular eating habits, Energy fluctuations, Lifestyle-related concerns. The Gut Response System focuses on understanding how overall wellbeing may influence emotional balance, concentration and daily functioning.", Icon: Utensils },
                { title: "Neural Network System", text: "Every experience contributes to how the brain develops patterns of thinking, learning and responding. The Neural Network System focuses on understanding: Learning habits, Study patterns, Emotional responses, Confidence levels, Adaptability. This pillar helps families understand how thought patterns and academic behaviours may influence performance over time.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Many teenagers respond differently to academic environments. Factors such as: Examination settings, Noise, Social pressure, Classroom environments, Digital stimulation may influence concentration, emotional wellbeing and performance. Understanding these influences often helps create a more supportive learning environment.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "Behaviour is often a reflection of underlying experiences. Teenagers experiencing academic pressure may show: Procrastination, Avoidance of studies, Irritability, Emotional withdrawal, Reduced motivation. Rather than focusing only on behaviour, this pillar focuses on understanding the factors that may be contributing to those behaviours and helping families respond more effectively.", Icon: ShieldCheck }
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
                alt="Neuro Ayurveda approach for exam stress support"
                className="max-h-full max-w-full rounded-lg object-contain object-center"
              />
            </div>
          </section>

          <section id="how-parents-can-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Support Teenagers During Exams</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents often play a major role in shaping how teenagers experience academic pressure. Supportive guidance can help teenagers develop confidence and healthier coping skills.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Focus on Effort, Not Just Results", desc: "Many teenagers feel that their value depends entirely on marks and performance. Recognizing effort, consistency and progress often helps build confidence and resilience." },
                { title: "Avoid Excessive Comparison", desc: "Comparing teenagers with siblings, friends or classmates may increase stress and reduce confidence. Every teenager has different strengths, abilities and learning styles." },
                { title: "Encourage Healthy Study Habits", desc: "Consistent routines, realistic schedules and balanced study habits often support better academic performance than last-minute pressure." },
                { title: "Promote Healthy Sleep", desc: "Sleep plays an important role in concentration, memory and emotional wellbeing. Teenagers often perform better when healthy sleep routines are maintained." },
                { title: "Create a Supportive Environment", desc: "Teenagers benefit when they feel emotionally supported rather than constantly evaluated. A calm environment often helps reduce unnecessary pressure." },
                { title: "Help Manage Expectations", desc: "Ambitious goals can be motivating, but unrealistic expectations may increase anxiety and fear of failure. Parents can help teenagers focus on growth and learning rather than perfection." },
                { title: "Encourage Balance", desc: "Academic success is important, but emotional wellbeing, physical health, recreation and relationships are also valuable parts of healthy development." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <img
              src={parentGuidanceImage}
              alt="Parent guidance for exam stress and academic pressure"
              className="mt-6 w-full max-h-[380px] rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Students & Families</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance. Our process typically includes:
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding emotional wellbeing, confidence levels, study habits, lifestyle routines, sleep patterns, concentration challenges and family concerns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing individualized recommendations based on the teenager's emotional, behavioural and developmental needs." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents better understand academic pressure, emotional wellbeing and practical ways to support teenagers during challenging periods." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand emotional wellbeing, confidence, concentration, motivation and overall growth." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap that helps families monitor progress and make informed decisions over time." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[16px] font-black text-[#21142d] mb-3">When Should Parents Consider an Assessment?</h3>
              <p className="text-[14px] font-semibold leading-7 text-[#51465a] mb-3">Parents may consider seeking guidance if they notice:</p>
              <ul className="space-y-2 sm:columns-2">
                {[
                  "Persistent exam anxiety",
                  "Fear of failure",
                  "Excessive worrying about studies",
                  "Declining confidence",
                  "Difficulty concentrating",
                  "Sleep problems before exams",
                  "Emotional breakdowns related to academics",
                  "Reduced motivation despite effort",
                  "Academic pressure affecting overall wellbeing"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                A structured assessment can help families better understand the factors influencing emotional wellbeing, confidence and academic functioning.
              </p>
            </div>

            <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help teenagers and families move from stress, confusion and academic overwhelm toward greater clarity, confidence, resilience and balanced growth.
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for academic stress and emotional wellbeing can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps teenagers manage academic pressure while maintaining confidence and emotional balance.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our goal is not simply to focus on marks, exams or performance. We help families understand the broader factors that may influence concentration, confidence, motivation, emotional wellbeing and overall development.
            </p>
            
            <h3 className="mt-6 mb-4 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Academic Wellbeing Assessment", desc: "Every teenager experiences academic pressure differently. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for support and growth." },
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand emotional wellbeing and academic functioning through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System" },
                { title: "Parent-Centred Guidance", desc: "Academic stress affects both teenagers and parents. Supporting families often helps create a healthier and more balanced learning environment." },
                { title: "Personalized Support", desc: "Every teenager has unique strengths, challenges and learning patterns. Guidance is tailored according to individual needs and circumstances." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on confidence, emotional resilience, healthy study habits and balanced development rather than short-term academic pressure alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful progress often happens when parents and teenagers work together with proper understanding and structured support." }
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
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Exam Stress Support, Academic Pressure Support and Teen Mental Wellness guidance through online and in-clinic consultations.
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
                  Many families searching for support for exam stress, academic pressure, emotional wellbeing and confidence challenges connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Through detailed assessment, personalized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing emotional wellbeing, confidence, concentration and long-term growth.
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
                Concerned About Exam Stress or Academic Pressure?
              </h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If your teenager is experiencing exam stress, fear of failure, declining confidence, concentration difficulties or emotional overwhelm, seeking clarity is often the first step.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                At Manovaidya, our team helps families better understand academic wellbeing through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Take the First Step Towards Better Confidence, Emotional Resilience & Academic Wellbeing</h3>
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
                  href="tel:+917823894080"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+917823894080"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]"
                >
                  Take Teen Wellness Assessment
                </a>
              </div>
            </div>
            <img
              src={ctaImage}
              alt="Academic wellbeing and exam stress support in India"
              className="w-full h-40 sm:h-52 object-cover object-center"
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
              href="tel:+917823894080"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823894080</p>
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

export default ExamPerformancePressureIndiaPage;

