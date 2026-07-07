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

import heroImage from "../images/teen-stress-anxiety-support-india.png";
import parentGuidanceImage from "../images/parent-guidance-teen-anxiety.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/teen-emotional-wellbeing-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Teen Stress", id: "understanding-teen-stress" },
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
  { label: "Teen Depression", count: 12, Icon: Activity },
  { label: "Exam Pressure", count: 10, Icon: BookOpen },
  { label: "Screen Addiction", count: 8, Icon: Brain },
  { label: "Confidence & Self-Esteem", count: 11, Icon: Sparkles },
  { label: "Parent-Teen Relationship", count: 9, Icon: Users },
  { label: "Teen Stress & Anxiety", count: 13, Icon: HeartHandshake },
];

const faqs = [
  {
    question: "1. What are the signs of anxiety in teenagers?",
    answer: "Teen anxiety can appear in different ways depending on the individual. Common signs may include excessive worrying, overthinking, irritability, difficulty concentrating, sleep disturbances, low confidence, emotional withdrawal and fear of failure. Some teenagers may become quiet and avoid social situations, while others may appear restless or emotionally overwhelmed. Anxiety can affect relationships, academic performance and overall wellbeing. Recognizing these signs early can help families better understand what their teenager may be experiencing and provide appropriate support."
  },
  {
    question: "2. What is the main cause of anxiety in teens?",
    answer: "There is no single cause of anxiety in teenagers. It is often influenced by a combination of factors such as academic pressure, social expectations, fear of failure, family stress, excessive screen use, lifestyle habits and emotional experiences. Every teenager responds differently to challenges and stressors. Understanding the factors contributing to anxiety is often an important first step in helping teenagers develop healthier coping skills and emotional resilience."
  },
  {
    question: "3. How can I help my 15 year old with anxiety?",
    answer: "Parents can help by creating a supportive environment where teenagers feel safe discussing their thoughts and emotions. Listening without judgment, maintaining healthy routines, encouraging physical activity and reducing unnecessary pressure may help teenagers manage anxiety more effectively. Consistent emotional support often plays an important role in helping teenagers build resilience and confidence. Small changes in communication and daily habits can sometimes make a meaningful difference over time."
  },
  {
    question: "4. How to help a teenager with anxiety and depression?",
    answer: "Teenagers experiencing anxiety and low mood often benefit from understanding, patience and emotional support. Parents can encourage open communication, healthy routines, social connection and balanced daily habits. It is important to avoid constant criticism or comparison, as these may increase emotional distress."
  },
  {
    question: "5. Can teenage hormones cause anxiety?",
    answer: "Yes, hormonal changes during adolescence may influence emotions, mood and stress responses. However, anxiety is usually influenced by multiple factors rather than hormones alone. Academic pressure, social challenges, lifestyle habits, sleep patterns, family environment and personal experiences may also contribute to anxiety. While hormonal changes can make teenagers more emotionally sensitive, understanding the overall picture often helps families provide more effective support and guidance."
  },
  {
    question: "6. What are the first signs of anxiety?",
    answer: "Early signs of anxiety may include excessive worrying, overthinking, irritability, restlessness, difficulty sleeping, low confidence, avoidance of certain situations and trouble concentrating. Some teenagers may also complain of headaches, stomach discomfort or feeling nervous without a clear reason. Recognizing these early signs can help families better understand their teenager's emotional wellbeing and take supportive steps before anxiety begins affecting daily life."
  },
  {
    question: "7. What triggers anxiety in teenagers?",
    answer: "Teen anxiety may be triggered by many different factors, including academic pressure, social expectations, fear of failure, relationship difficulties, excessive screen use, major life changes or uncertainty about the future. Every teenager is different, and what feels manageable for one teenager may feel overwhelming for another. Understanding personal triggers can help families and teenagers develop healthier coping strategies and emotional resilience."
  },
  {
    question: "8. What does anxiety feel like physically?",
    answer: "Anxiety does not only affect emotions; it can also affect the body. Teenagers may experience a racing heart, sweating, stomach discomfort, headaches, muscle tension, restlessness, fatigue or difficulty sleeping. Some may describe feeling constantly 'on edge' or unable to relax. Physical symptoms can sometimes be confusing because they may appear even when there is no immediate danger. Understanding this mind-body connection can help families better recognize anxiety-related challenges."
  },
  {
    question: "9. How do doctors diagnose anxiety?",
    answer: "Doctors and mental health professionals typically diagnose anxiety by understanding emotional, behavioural and physical symptoms, along with how those symptoms affect daily functioning. The assessment process may include discussions about stress levels, thoughts, emotions, lifestyle habits, school experiences and overall wellbeing. There is no single laboratory test that confirms anxiety. Diagnosis usually involves a comprehensive evaluation of the teenager's experiences and concerns."
  },
  {
    question: "10. Is there a test for anxiety?",
    answer: "There is no single medical test that can definitively diagnose anxiety. Professionals typically use detailed assessments, questionnaires, interviews and clinical observations to understand emotional wellbeing and anxiety-related symptoms. These tools help identify patterns, severity and factors that may be influencing a teenager's mental health. A structured assessment often provides families with greater clarity about the challenges their teenager may be experiencing."
  },
  {
    question: "11. What age does anxiety usually start?",
    answer: "Anxiety can develop at different ages and varies from one individual to another. Some children may show signs of anxiety during early childhood, while others may experience it during adolescence when academic, social and emotional demands increase. Teenage years are a common period for anxiety-related concerns because teenagers are navigating significant developmental changes. Early understanding and support often help teenagers manage these challenges more effectively."
  },
  {
    question: "12. What is the best treatment for teenage anxiety?",
    answer: "The most appropriate approach depends on the teenager's individual needs, circumstances and the factors contributing to anxiety. Effective support often involves understanding emotional wellbeing, lifestyle habits, stressors, family dynamics and coping skills. Many families benefit from structured assessment, emotional guidance, healthy routines, parent support and personalized strategies. The goal is not only to reduce anxiety but also to strengthen emotional resilience, confidence and overall wellbeing."
  },
  {
    question: "13. Can anxiety be managed without medication?",
    answer: "Many teenagers benefit from non-medication approaches that focus on emotional wellbeing, lifestyle habits, stress management, healthy routines, physical activity and family support. The most appropriate approach depends on the teenager's individual situation and the severity of concerns. Understanding the factors contributing to anxiety often helps families identify supportive strategies that promote confidence, resilience and emotional balance."
  },
  {
    question: "14. How can parents help teenagers manage stress and anxiety?",
    answer: "Parents can support teenagers by maintaining open communication, listening without judgment, encouraging healthy routines and creating a supportive home environment. Teenagers often respond positively when they feel understood rather than criticized. Consistent sleep habits, balanced routines, emotional support and realistic expectations can all contribute to better wellbeing. Parents play an important role in helping teenagers develop healthy coping skills, emotional resilience and long-term wellbeing."
  },
  {
    question: "15. When should parents seek professional guidance?",
    answer: "Parents may consider seeking professional guidance when stress, anxiety or emotional concerns persist over time and begin affecting daily functioning, relationships, sleep, confidence or academic performance. Signs such as excessive worry, emotional withdrawal, persistent low mood, behavioural changes or difficulty managing responsibilities may indicate the need for additional support. A structured assessment can help families better understand emotional, behavioural and lifestyle-related factors that may be influencing their teenager's wellbeing."
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
        <a href="/teen-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Activity className="h-4 w-4 text-[#7835A4]" /> Teen Depression & Low Mood Treatment
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

function TeenStressAnxietyIndiaPage() {
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

    document.title = "Teen Stress & Anxiety Treatment in India | Teen Mental Health Support | Manovaidya";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Teen Stress & Anxiety Treatment in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya.";

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
                <span className="text-[#4b345d]">Teen Stress & Anxiety Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Stress & Anxiety Treatment</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Teen Stress & Anxiety Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Teenagers Build Emotional Resilience, Confidence & Better Emotional Wellbeing. Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya.
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
                  alt="Teen Stress and Anxiety Treatment in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Helping Teenagers Build Emotional Resilience, Confidence & Better Emotional Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teenage years bring significant emotional, social, academic and personal changes. During this phase, many teenagers experience stress, anxiety, emotional pressure and self-doubt while trying to manage school, relationships, social expectations and future goals.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that teen stress and anxiety are not simply about worrying too much. Emotional wellbeing, confidence, behaviour, lifestyle habits, social experiences and family dynamics often work together to influence a teenager's overall mental wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand emotional wellbeing while creating a roadmap for healthy growth and long-term resilience.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families searching for Teen Stress & Anxiety Treatment in India, Teen Mental Health Treatment in India or guidance for Teenage Stress and Anxiety are often looking for a structured approach that helps them better understand their teenager's emotional wellbeing and long-term growth.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families searching for Teen Anxiety Treatment in India, Teen Stress & Anxiety Treatment in India or Teen Mental Health Treatment in India are often looking for structured guidance and long-term emotional wellbeing support.
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Teen Stress & Anxiety Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Emotional Wellbeing & Resilience", Icon: HeartHandshake },
                  { label: "Stress & Anxiety Management", Icon: ShieldCheck },
                  { label: "Confidence & Self-Esteem Building", Icon: Sparkles },
                  { label: "Academic & Performance Pressure", Icon: BookOpen },
                  { label: "Healthy Lifestyle & Daily Habits", Icon: Activity },
                  { label: "Parent-Teen Communication & Support", Icon: Users },
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

          <section id="understanding-teen-stress" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Teen Stress & Anxiety</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teenage years are often described as a period of rapid change. Physical development, emotional growth, social expectations, academic responsibilities and future planning can all create new challenges for teenagers. As a result, many families today are seeking guidance regarding Teen Mental Health Concerns, Teen Mental Health Support and Teen Emotional Wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Issues such as Teenage Stress and Anxiety, low confidence, academic pressure, emotional struggles and social challenges can sometimes affect a teenager's overall wellbeing and daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents notice that their teenager has become more withdrawn, irritable, stressed or emotionally distant but often struggle to understand whether these changes are a normal part of adolescence or signs of a deeper emotional concern.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Stress and anxiety can affect teenagers differently:</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Some may become quiet and withdrawn.",
                  "Others may become angry, emotional or irritable.",
                  "Some teenagers may constantly worry about school, friendships, appearance or future goals.",
                  "Others may struggle with confidence, motivation or decision-making."
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every teenager's experience is unique, which is why understanding the underlying factors influencing emotional wellbeing is often more important than focusing only on visible behaviours.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our goal is to help families better understand emotional wellbeing, confidence, behaviour and lifestyle-related influences that may affect a teenager's mental wellness.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Teen Stress & Anxiety</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teen stress and anxiety do not always appear in the same way. Many teenagers may not openly express what they are feeling emotionally. Instead, stress often becomes visible through behaviour, habits, emotions or physical symptoms. Parents may notice:
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Excessive worrying", "Overthinking", "Irritability", "Mood swings", "Low confidence", "Fear of failure", "Emotional overwhelm"].map((step) => (
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
                  {["Social withdrawal", "Avoiding responsibilities", "Reduced motivation", "Increased screen use", "Difficulty managing daily routines", "Emotional outbursts"].map((step) => (
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
                  {["Difficulty concentrating", "Declining academic performance", "Exam-related anxiety", "Fear of making mistakes", "Reduced interest in studies"].map((step) => (
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
                  {["Sleep difficulties", "Fatigue", "Headaches", "Stomach discomfort", "Restlessness", "Muscle tension"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              The presence of one or two signs does not automatically indicate a significant concern. However, when emotional or behavioural changes continue for an extended period and begin affecting daily life, they deserve attention and understanding.
            </p>
          </section>

          <section id="why-experience-stress" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Stress & Anxiety</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents assume that teenagers experience stress only because of studies. In reality, teen stress and anxiety are often influenced by multiple interconnected factors.
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Academic Pressure", desc: "School expectations, competitive environments, exams and future career concerns can create significant emotional pressure. Many teenagers worry about performance, grades and meeting expectations." },
                { title: "Social Pressure", desc: "Friendships, peer acceptance and social relationships become increasingly important during adolescence. Teenagers often compare themselves to others, which can affect confidence and emotional wellbeing." },
                { title: "Future Uncertainty", desc: "Questions about careers, higher education and future goals may create anxiety and self-doubt. Many teenagers feel pressure to make important life decisions while still developing emotionally." },
                { title: "Screen & Social Media Influence", desc: "Excessive exposure to social media can increase comparison, self-criticism and emotional stress. Many teenagers may feel pressure to meet unrealistic standards presented online." },
                { title: "Family Expectations", desc: "Well-intentioned expectations from parents can sometimes create additional pressure if teenagers feel they are unable to meet them. Healthy communication and emotional support often play an important role in reducing this stress." },
                { title: "Lifestyle & Sleep Habits", desc: "Poor sleep, irregular routines, lack of physical activity and excessive screen use may influence emotional wellbeing, focus and stress management." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents worry that ongoing emotional struggles, low confidence, excessive screen use or academic stress may affect their teenager's future growth, relationships and overall wellbeing. Understanding these concerns early often helps families take positive and informed steps towards better emotional health and resilience.
            </p>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Stress & Anxiety Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress and anxiety can influence much more than emotions alone. When emotional pressure continues for a prolonged period, it may affect confidence, relationships, learning, motivation and overall wellbeing. Many teenagers struggle silently because they are unsure how to express what they are feeling or because they fear being misunderstood. Understanding how stress and anxiety affect different areas of life can help families provide more meaningful support.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">One of the most common effects of stress and anxiety is emotional overwhelm. Teenagers may experience: Frequent worrying, Overthinking, Irritability, Mood swings, Emotional sensitivity, Fear of failure, Feelings of helplessness. Over time, unmanaged emotional stress may affect a teenager's ability to enjoy daily life and maintain emotional balance.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence & Self-Esteem</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Stress and anxiety often affect how teenagers view themselves. Many teenagers begin questioning: Am I good enough? Why can't I do better? What if I fail? What will others think about me? These thoughts can gradually reduce confidence and self-esteem. A teenager who once appeared motivated and confident may begin avoiding challenges because they fear making mistakes or being judged.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Emotional wellbeing and academic performance are closely connected. Teenagers experiencing high levels of stress or anxiety may struggle with: Concentration, Memory, Exam preparation, Time management, Decision making. Even highly capable students may find it difficult to perform at their best when emotional pressure becomes overwhelming.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Social Relationships</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Stress and anxiety may influence how teenagers interact with friends, classmates and family members. Some teenagers may become: More withdrawn, Less socially active, Easily irritated, Sensitive to criticism, Fearful of social situations. These changes may affect friendships, communication and social confidence.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Physical Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">Mental and emotional wellbeing can also influence physical health. Some teenagers may experience: Sleep difficulties, Fatigue, Headaches, Digestive discomfort, Restlessness, Reduced energy. Understanding the connection between emotional wellbeing and physical wellbeing is often an important part of supporting teenagers more effectively.</p>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)]">
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">
                The Neuro-Ayurveda Approach to Teen Stress & Anxiety
              </h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                At Manovaidya, teen stress and anxiety are understood through a broader perspective. Rather than focusing only on stress, anxiety or behaviour alone, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation, attention and overall development. The Neuro-Ayurveda Development System helps families better understand the interconnected factors that may influence emotional health and resilience.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "Healthy emotional wellbeing is closely connected to healthy brain functioning. The Brain Nourishment System focuses on understanding factors that may influence: Attention, Emotional regulation, Learning readiness, Confidence, Decision making, Cognitive wellbeing. Supporting emotional resilience often begins with understanding how teenagers process information, respond to challenges and manage emotions.", Icon: Brain },
                { title: "Gut Response System", text: "Modern research and traditional health systems increasingly recognize the relationship between gut health and emotional wellbeing. Many teenagers experiencing stress and anxiety may also report: Digestive discomfort, Irregular eating habits, Appetite changes, Food sensitivities, Energy fluctuations. The Gut Response System focuses on understanding how digestive wellbeing may influence overall functioning, mood and emotional balance.", Icon: Utensils },
                { title: "Neural Network System", text: "Every experience contributes to how the brain develops patterns of thinking, learning and responding. The Neural Network System focuses on understanding: Thought patterns, Learning behaviour, Emotional responses, Attention, Adaptability. This pillar helps families understand how emotional and behavioural patterns may develop over time.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Many teenagers experience stress differently based on how they respond to their environment. Factors such as: Noise, Crowded spaces, Academic environments, Social situations, Digital stimulation may influence emotional wellbeing and stress levels. Understanding sensory influences often helps create more supportive environments for teenagers.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "Behaviour is often a form of communication. Teenagers may express emotional stress through: Anger, Withdrawal, Irritability, Avoidance, Lack of motivation. Rather than reacting only to behaviour, this pillar focuses on understanding what may be influencing those behaviours and how families can respond more effectively.", Icon: ShieldCheck }
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

            <img
              src={neuroAyurvedaImage}
              alt="Neuro Ayurveda approach for teen mental wellness"
              className="mt-6 w-full max-h-[380px] rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-parents-can-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Support Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents play one of the most important roles in supporting a teenager's emotional wellbeing. Small changes in communication, understanding and daily routines can often make a meaningful difference.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Listen Without Judgement", desc: "Many teenagers want to feel heard before they want solutions. Creating a safe space for open conversations helps teenagers express emotions more comfortably." },
                { title: "Avoid Constant Criticism", desc: "Excessive criticism may reduce confidence and increase emotional stress. Guidance is often more effective when teenagers feel supported rather than judged." },
                { title: "Encourage Healthy Routines", desc: "Consistent sleep, balanced daily schedules, physical activity and healthy habits can support emotional wellbeing and resilience." },
                { title: "Reduce Unnecessary Pressure", desc: "Encouragement and realistic expectations often create better outcomes than constant pressure or comparison. Every teenager develops at a different pace." },
                { title: "Support Emotional Expression", desc: "Teenagers should feel comfortable expressing: Fear, Stress, Frustration, Confusion, Disappointment. Learning healthy emotional expression is an important life skill." },
                { title: "Promote Healthy Screen Habits", desc: "Technology is part of modern life, but balance remains important. Helping teenagers maintain healthy boundaries around screen use can support attention, sleep and emotional wellbeing." },
                { title: "Focus on Strengths", desc: "Many teenagers hear more about what they are doing wrong than what they are doing right. Recognizing strengths, progress and effort often helps build confidence and emotional resilience." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, parent guidance is considered an important part of teen mental wellness because teenagers often make the greatest progress when families and professionals work together to create a supportive environment for growth, confidence and emotional wellbeing.
            </p>

            <img
              src={parentGuidanceImage}
              alt="Parent guidance for teen stress and anxiety support"
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
                { title: "Step 1: Detailed Assessment", desc: "Understanding emotional wellbeing, stress levels, behaviour, lifestyle habits, confidence challenges, sleep patterns, screen usage and family concerns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing individualized recommendations based on the teenager's unique emotional, behavioural and developmental needs." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents better understand communication, emotional wellbeing and practical ways to support their teenager at home." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand emotional wellbeing, behaviour, attention, confidence and overall growth." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap that helps families monitor progress and make informed decisions over time." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[14px] font-bold leading-7 text-[#51465a]">
              Our goal is to help teenagers and families move from confusion and stress toward greater clarity, confidence and emotional wellbeing.
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

            <div className="mt-5 space-y-4">
              {[
                { title: "✔ Structured Teen Mental Wellness Assessment", desc: "Every teenager is unique. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for support and growth." },
                { title: "✔ Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand emotional wellbeing through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System." },
                { title: "✔ Parent-Centred Guidance", desc: "Teen mental wellness is not only about the teenager. Parents play an important role in creating a supportive environment for emotional growth and resilience." },
                { title: "✔ Personalized Support", desc: "Every teenager experiences stress, anxiety and emotional challenges differently. Guidance is always tailored according to individual needs and circumstances." },
                { title: "✔ Long-Term Growth Focus", desc: "Our approach focuses on helping teenagers build confidence, emotional resilience, healthy habits and long-term wellbeing rather than seeking short-term solutions alone." },
                { title: "✔ Family-Oriented Approach", desc: "When parents and teenagers work together with proper understanding and guidance, meaningful progress often becomes easier to achieve." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[14px] font-bold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Stress & Anxiety Treatment, Teen Mental Health Support and Teen Emotional Wellbeing guidance through online and in-clinic consultations.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Over the years, he has worked with children, teenagers, adults and families seeking support for developmental, behavioural, emotional and mental wellness concerns. Many families searching for a Mental Health Specialist in India are looking for more than symptom-based guidance. They are looking for clarity, direction and a structured roadmap.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg's work focuses on helping families better understand emotional wellbeing, behavioural patterns, confidence challenges, lifestyle-related influences and long-term mental wellness planning. Through structured assessment, personalized guidance, family support and regular follow-up, he helps individuals and families move from confusion toward greater clarity, confidence and wellbeing.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Today, families from different parts of India connect with Manovaidya because they are looking for a compassionate, structured and personalized approach that focuses on overall wellbeing and long-term growth. Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]"
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-7">
              <h2 className="text-[24px] font-black">Concerned About Your Teenager's Emotional Wellbeing?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If your teenager is experiencing stress, anxiety, emotional overwhelm, confidence challenges, academic pressure or behavioural changes, seeking clarity is often the first step.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                At Manovaidya, our team helps families better understand emotional wellbeing through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Take the First Step Towards Better Teen Mental Wellness</h3>
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
              alt="Teen emotional wellbeing support and family guidance"
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

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation">
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

      <section className="border-y border-[#eadff1] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
              <Mail className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, teen mental wellness tips and Manovaidya updates.
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

export default TeenStressAnxietyIndiaPage;

