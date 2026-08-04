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
import Seo from "../components/Seo";

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

const keyTakeaways = [
  "Understanding Exam Stress & Academic Performance Pressure",
  "Common Signs of Exam Anxiety in Teenagers",
  "Main Causes of Academic Stress and Fear of Failure",
  "Impact of Exam Pressure on Confidence, Sleep & Concentration",
  "Role of Family Expectations, Comparison and Competition",
  "Emotional Resilience and Healthy Academic Wellbeing",
  "Neuro-Ayurveda Approach to Exam Stress Management",
  "How Parents Can Support Teenagers During Exams",
  "Manovaidya's Assessment and Personalized Support Process",
  "When Parents Should Seek Professional Guidance",
  "Why Families Choose Manovaidya for Exam Stress Support",
  "Frequently Asked Questions About Exam Stress & Anxiety",
];

const fullMedicalReferenceContent = `References
[1] World Health Organization - Mental Health of Adolescents
https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health
[2] Charaka Samhita, Sutra Sthana 11 - Tistraishaniya Adhyaya
https://www.carakasamhitaonline.com/index.php?title=Tistraishaniya_Adhyaya
[3] Steare T, et al. - The Association Between Academic Pressure and Adolescent Mental Health Problems
https://pubmed.ncbi.nlm.nih.gov/37437728/
[4] World Health Organization - Anxiety Disorders
https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders
[5] Charaka Samhita - Sattvavajaya
https://www.carakasamhitaonline.com/index.php/Sattvavajaya
[6] James AC, et al. - Cognitive Behavioural Therapy for Anxiety Disorders in Children and Adolescents
https://pubmed.ncbi.nlm.nih.gov/33196111/
[7] Cardy JL, et al. - Parental Involvement in CBT for Adolescent Anxiety Disorders
https://pubmed.ncbi.nlm.nih.gov/32862330/
[8] Charaka Samhita, Chikitsa Sthana 1 - Rasayana Chikitsa Adhyaya
https://www.carakasamhitaonline.com/index.php?title=Rasayana_Adhyaya
[9] Dibben GO, et al. - Adolescents' Electronic Device Use, Sleep and Mental Health
https://pubmed.ncbi.nlm.nih.gov/37029099/
[10] Zhang J, et al. - Impact of Sleep-Related Factors on Anxiety in Adolescents
https://pubmed.ncbi.nlm.nih.gov/41713614/
[11] Charaka Samhita - Dhriti
https://www.carakasamhitaonline.com/index.php?title=Dhriti
[12] Dworsky-Fried M, et al. - Pubertal Stress, Gut-Brain Axis and Mental Health
https://pubmed.ncbi.nlm.nih.gov/38274549/

Reference Note
This article uses recognised public health resources, peer-reviewed research and classical Ayurvedic texts for adolescent mental health, academic pressure, anxiety, CBT-based support, parent involvement, sleep, electronic device use, gut-brain concepts and Ayurvedic concepts related to Manas, Sattvavajaya, Rasayana and Dhriti.

Classical Ayurvedic references are included for conceptual understanding of mind regulation, determination, nourishment and whole-person wellbeing. They are not modern diagnostic criteria and should not be interpreted as a guaranteed cure for exam stress, anxiety disorders, academic burnout or teen mental health conditions.

Authorised & Clinically Reviewed by Dr Ankush Garg
Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
Clinical Focus: Autism, ADHD, Child Development, Teen Mental Wellness and Mental Health`;

const articleLinkRules = [
  { label: "Exam Stress Treatment in India", href: "#introduction", pattern: /Exam Stress Treatment in India/i },
  { label: "Exam Anxiety Treatment in India", href: "#introduction", pattern: /Exam Anxiety Treatment in India/i },
  { label: "Exam Stress Management", href: "#how-we-support", pattern: /Exam Stress Management/i },
  { label: "Exam Stress", href: "#common-signs", pattern: /Exam Stress/i },
  { label: "Academic Stress", href: "#why-experience-stress", pattern: /Academic Stress/i },
  { label: "Academic Pressure", href: "#understanding-exam-pressure", pattern: /Academic Pressure/i },
  { label: "Exam Anxiety", href: "#common-signs", pattern: /Exam Anxiety/i },
  { label: "Test Anxiety", href: "#common-signs", pattern: /Test Anxiety/i },
  { label: "Performance Anxiety", href: "#understanding-exam-pressure", pattern: /Performance Anxiety/i },
  { label: "Student Stress", href: "#why-experience-stress", pattern: /Student Stress/i },
  { label: "Student Mental Health", href: "/teen-mental-wellness", pattern: /Student Mental Health/i },
  { label: "Teen Mental Wellness", href: "/teen-mental-wellness", pattern: /Teen Mental Wellness/i },
  { label: "Teen Mental Health", href: "/teen-mental-wellness", pattern: /Teen Mental Health/i },
  { label: "Teen Stress & Anxiety", href: "/teen-stress-anxiety-support/", pattern: /Teen Stress (?:&|and) Anxiety/i },
  { label: "Teen Depression", href: "/teen-depression-support/", pattern: /Teen Depression/i },
  { label: "Confidence", href: "/teen-confidence-emotional-wellbeing/", pattern: /Confidence/i },
  { label: "Screen Use", href: "/teen-screen-addiction-support/", pattern: /Screen Use/i },
  { label: "Parent Guidance", href: "#how-parents-can-support", pattern: /Parent Guidance/i },
  { label: "Family Support", href: "/parent-teen-relationship-support/", pattern: /Family Support/i },
  { label: "Parent-Teen Academic Support", href: "#how-parents-can-support", pattern: /Parent-Teen Academic Support/i },
  { label: "Neuro-Ayurveda Development System", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda Development System/i },
  { label: "Neuro-Ayurveda", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda/i },
  { label: "Dr. Ankush Garg", href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { label: "Manovaidya", href: "/about/manovaidya", pattern: /Manovaidya/i },
  { label: "Child Development", href: "/child-development-support-india", pattern: /Child Development/i },
  { label: "Autism", href: "/autism-treatment-india", pattern: /Autism/i },
  { label: "ADHD", href: "/child-health-care/adhd-child", pattern: /ADHD/i },
];

const faqs = [
  {
    question: "1. Why does my teenager get stressed before exams?",
    answer: "Many teenagers experience stress before exams because they worry about performance, results, future opportunities and meeting expectations. Academic pressure, fear of failure, comparison with peers and uncertainty about outcomes can all contribute to exam-related stress. While some level of stress may motivate preparation, excessive stress can affect confidence, concentration and emotional wellbeing. Understanding the reasons behind exam stress often helps families provide more effective support. [3] [4]"
  },
  {
    question: "2. What are the signs of exam anxiety?",
    answer: "Common signs of exam anxiety may include excessive worrying, overthinking, sleep difficulties, fear of failure, difficulty concentrating, irritability, emotional overwhelm and physical symptoms such as headaches, stomach discomfort or restlessness. Some teenagers may avoid studying, procrastinate or become unusually emotional before examinations. Recognizing these signs early can help families better understand their teenager's emotional wellbeing and provide timely support. [4] [10]"
  },
  {
    question: "3. How can parents help teenagers during exams?",
    answer: "Parents can support teenagers by creating a calm and encouraging environment during exam periods. Listening without judgement, reducing unnecessary pressure, maintaining healthy routines and focusing on effort rather than only results often helps teenagers manage stress more effectively. Emotional support and reassurance can play an important role in helping teenagers build confidence and resilience during challenging academic periods. [7] [11]"
  },
  {
    question: "4. Can exam stress affect academic performance?",
    answer: "Yes. Excessive exam stress may affect concentration, memory, confidence and decision-making abilities. Many students find it difficult to perform at their best when anxiety becomes overwhelming. Emotional wellbeing and academic performance are closely connected, which is why supporting a teenager's mental wellbeing often helps create a stronger foundation for learning and achievement. [3] [4]"
  },
  {
    question: "5. Why is my child afraid of failure?",
    answer: "Fear of failure may develop when teenagers associate their self-worth with academic results or feel excessive pressure to succeed. High expectations, perfectionist tendencies, comparison with others and concerns about disappointing family members can all contribute to this fear. Helping teenagers focus on growth, learning and effort rather than perfection often supports healthier confidence and emotional resilience. [3] [7]"
  },
  {
    question: "6. How can I improve my teenager's concentration?",
    answer: "Concentration may be influenced by sleep quality, emotional wellbeing, study habits, lifestyle routines, screen use and stress levels. Encouraging consistent schedules, healthy sleep, regular physical activity and balanced study routines often helps improve focus. Understanding the factors affecting concentration is usually more effective than simply asking teenagers to study harder. [3] [9] [10]"
  },
  {
    question: "7. What causes performance anxiety in teenagers?",
    answer: "Performance anxiety may be influenced by fear of judgement, academic expectations, low confidence, perfectionism, social pressure and concerns about future outcomes. Some teenagers place significant pressure on themselves to achieve specific results. Understanding these emotional influences often helps families better support confidence and wellbeing during academic challenges. [3] [4]"
  },
  {
    question: "8. Why does my teenager procrastinate before exams?",
    answer: "Procrastination is not always a sign of laziness. In many cases, it may be linked to fear of failure, anxiety, overwhelm, low confidence or difficulty managing academic pressure. Teenagers may delay studying because they feel stressed about the task itself. Understanding the reasons behind procrastination often helps families provide more meaningful guidance and support. [3] [6]"
  },
  {
    question: "9. Can lack of sleep increase exam stress?",
    answer: "Yes. Sleep plays an important role in emotional wellbeing, memory, concentration and learning. Poor sleep habits may increase irritability, anxiety, stress levels and difficulty focusing. Maintaining healthy sleep routines during exam periods often supports both emotional wellbeing and academic performance. [9] [10]"
  },
  {
    question: "10. What is the best way to manage exam stress?",
    answer: "Managing exam stress often involves a combination of healthy study habits, adequate sleep, balanced daily routines, emotional support, realistic expectations and effective time management. Every teenager responds differently to academic pressure, so understanding individual needs and challenges is important. The goal is not only to improve performance but also to support confidence and emotional wellbeing. [3] [6] [10]"
  },
  {
    question: "11. How do I help my child deal with academic pressure?",
    answer: "Parents can help by encouraging open communication, reducing excessive expectations and focusing on learning rather than only outcomes. Teenagers often cope better when they feel supported and understood. Creating a balanced environment that values effort, growth and wellbeing can help reduce unnecessary pressure and improve confidence. [3] [7]"
  },
  {
    question: "12. What are the first signs of academic burnout?",
    answer: "Early signs of academic burnout may include emotional exhaustion, reduced motivation, difficulty concentrating, increased irritability, sleep disturbances, fatigue and loss of interest in studies. Some teenagers may also become withdrawn or feel overwhelmed by tasks they previously managed comfortably. Identifying these signs early often helps prevent further emotional strain. [1] [3]"
  },
  {
    question: "13. How does Manovaidya support students and families?",
    answer: "At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of emotional wellbeing, confidence, concentration, motivation and lifestyle-related influences. The goal is to help students and families move toward greater clarity, resilience and long-term growth."
  },
  {
    question: "14. Can exam stress be managed without medication?",
    answer: "Many teenagers benefit from non-medication approaches that focus on emotional wellbeing, healthy routines, effective study habits, stress management, physical activity and family support. The most appropriate approach depends on the individual's needs and circumstances. Understanding the factors contributing to stress often helps families identify strategies that support confidence, resilience and academic wellbeing. [4] [6] [7]"
  },
  {
    question: "15. When should parents seek professional guidance for exam stress?",
    answer: "Parents may consider seeking guidance when exam-related stress begins affecting sleep, confidence, concentration, motivation, emotional wellbeing or daily functioning. Persistent anxiety, fear of failure, emotional breakdowns, avoidance of studies or significant behavioural changes may indicate the need for additional support. A structured assessment can help families better understand the factors influencing their teenager's academic and emotional wellbeing. [1] [3] [4]"
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

function Citation({ id, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="mx-0.5 inline cursor-pointer rounded px-0.5 font-black text-[#7835A4] underline decoration-[#7835A4]/40 underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]"
    >
      [{id}]
    </button>
  );
}

function CitationText({ text, onCitationClick }) {
  const source = String(text);
  const citationPattern = /\[(\d+)\]/;
  const linkedRuleKeysInText = new Set();
  const parts = [];
  let cursor = 0;
  let safety = 0;

  while (cursor < source.length && safety < 100) {
    safety += 1;
    const remaining = source.slice(cursor);
    const candidates = [];
    const citationMatch = remaining.match(citationPattern);

    if (citationMatch) {
      candidates.push({
        index: citationMatch.index,
        text: citationMatch[0],
        citationId: citationMatch[1],
        type: "citation",
      });
    }

    articleLinkRules.forEach((rule) => {
      const ruleKey = `${rule.href}|${rule.pattern.source}`;
      if (linkedRuleKeysInText.has(ruleKey)) return;

      const keywordMatch = remaining.match(rule.pattern);
      if (keywordMatch) {
        candidates.push({
          index: keywordMatch.index,
          text: keywordMatch[0],
          rule,
          ruleKey,
          type: "keyword",
        });
      }
    });

    candidates.sort((a, b) => a.index - b.index || b.text.length - a.text.length);
    if (!candidates.length) {
      parts.push(remaining);
      break;
    }

    const next = candidates[0];
    const absoluteIndex = cursor + next.index;

    if (absoluteIndex > cursor) {
      parts.push(source.slice(cursor, absoluteIndex));
    }

    if (next.type === "citation") {
      parts.push(<Citation key={`${next.text}-${parts.length}`} id={next.citationId} onClick={onCitationClick} />);
    } else {
      linkedRuleKeysInText.add(next.ruleKey);
      parts.push(
        <a key={`${next.text}-${parts.length}`} href={next.rule.href} className="font-black text-[#7835A4] underline decoration-[#7835A4]/35 underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]">
          {next.text}
        </a>
      );
    }

    cursor = absoluteIndex + next.text.length;
  }

  return parts.map((part, index) =>
    typeof part === "string" ? <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment> : part
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#7835A4]">
            Exam Stress & Academic Wellbeing
          </p>
          <h2 className="mt-2 text-[21px] font-black leading-tight text-[#111827]">Key Takeaways</h2>
          <ul className="mt-4 space-y-2.5">
            {keyTakeaways.map((item) => (
              <li key={item} className="flex gap-3 text-[13px] font-bold leading-6 text-[#21142d]">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec2b83]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f3eadb] p-6 sm:p-8">
          <h3 className="text-[16px] font-black leading-tight text-[#111827]">Want more content like this?</h3>
          <p className="mt-3 text-[13px] font-semibold leading-6 text-[#111827]">
            Join our teen mental wellness newsletter for exam stress, confidence and academic wellbeing guidance from our experts.
          </p>
          <form className="mt-5 space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]"
            />
            <button
              type="button"
              className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]"
            >
              Join Now
            </button>
          </form>
          <p className="mt-4 text-[11px] font-semibold text-[#111827]">
            Your <a href="/privacy-policy" className="underline decoration-[#111827] underline-offset-2">privacy</a> is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}

function LinkifiedText({ text }) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (!part.startsWith("http://") && !part.startsWith("https://")) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    return (
      <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    );
  });
}

function ResourceReferenceText({ text }) {
  return text.split("\n").map((line, index) => {
    const referenceMatch = line.match(/^\[(\d+)\]/);

    return (
      <div
        key={`${line}-${index}`}
        id={referenceMatch ? `reference-${referenceMatch[1]}` : undefined}
        className={referenceMatch ? "scroll-mt-28" : undefined}
      >
        <LinkifiedText text={line} />
      </div>
    );
  });
}

function MedicalReferencesBlock() {
  const [heading, ...referenceLines] = fullMedicalReferenceContent.split("\n");
  const referenceBody = referenceLines.join("\n");

  return (
    <section className="mt-5 rounded-xl border border-[#eadff1] bg-[#fbf9fd] p-6 sm:p-8" id="medical-references">
      <h2 className="mb-4 text-[22px] font-black leading-tight text-[#2d1b45]">{heading}</h2>
      <div className="max-w-full whitespace-pre-wrap break-words text-[14px] font-semibold leading-7 text-[#51465a] [&_a]:break-all [&_a]:text-[#7835A4] [&_a]:underline">
        <ResourceReferenceText text={referenceBody} />
      </div>
    </section>
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
        <a href="/teen-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <HeartHandshake className="h-4 w-4 text-[#7835A4]" /> Teen Depression & Low Mood Treatment
        </a>
        <a href="/teen-confidence-emotional-wellbeing/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
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

function ExamPerformancePressureIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showResources, setShowResources] = React.useState(false);
  const pageUrl = "https://manovaidya.org/exam-performance-pressure";
  const pageTitle = "Exam & Performance Pressure Treatment in India | Manovaidya";
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedPageTitle = encodeURIComponent(pageTitle);
  const articleShareLinks = [
    { label: "f", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`, title: "Share on Facebook" },
    { label: "x", href: `https://twitter.com/intent/tweet?url=${encodedPageUrl}&text=${encodedPageTitle}`, title: "Share on X" },
    { label: "in", href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}&title=${encodedPageTitle}`, title: "Share on LinkedIn" },
    { label: "wa", href: `https://api.whatsapp.com/send?text=${encodedPageTitle}%20${encodedPageUrl}`, title: "Share on WhatsApp" },
  ];

  const handleCitationClick = React.useCallback((referenceId) => {
    setShowResources(true);
    window.setTimeout(() => {
      document
        .getElementById(`reference-${referenceId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

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
        title="Exam & Performance Pressure Treatment in India | Exam Stress & Anxiety Support | Manovaidya"
        description="Looking for Exam Stress Treatment in India? Learn about exam anxiety, academic pressure, fear of failure, concentration challenges and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        keywords="Exam Stress Treatment India, Exam Anxiety Support, Performance Pressure in Teens, Academic Stress, Student Stress Relief, Exam Pressure, Neuro-Ayurveda Student Support, Concentration Issues, Dr. Ankush Garg"
        path="/exam-performance-pressure"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Exam & Performance Pressure Treatment in India",
          "description": "Looking for Exam Stress Treatment in India? Learn about exam anxiety, academic pressure, fear of failure, concentration challenges and family guidance through the Neuro-Ayurveda approach at Manovaidya."
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
                <span className="text-[#4b345d]">Exam & Performance Pressure Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Exam & Performance Pressure Treatment in India
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
                  {articleShareLinks.map(({ label, href, title }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white"
                      aria-label={title}
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
                  alt="Exam and Performance Pressure Treatment in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What Is Exam & Performance Pressure Treatment in India?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Supporting the confidence, emotional resilience and healthy academic wellbeing of teenagers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="For families seeking Exam Stress Treatment in India or Exam Anxiety Treatment in India, structured support can help address emotional stress as well as academic performance stress. Effective Exam Stress Management is not just about reducing stress; it is also about developing confidence, healthy habits, emotional skills and resilience in teens." onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Teenagers can face significant emotional stress due to academic expectations, exams, competition, career planning and performance worries. It can appear as Exam Stress, Academic Stress, Student Stress, Exam Anxiety, Test Anxiety or Performance Anxiety. [1] [3]" onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Too much academic stress can impact confidence, sleep patterns, concentration, motivation and mental health. At Manovaidya, the emphasis is on learning how a teenager's emotional wellbeing, lifestyle habits, family expectations and stress-management skills interact with academic performance. [1] [3] [4]" onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents notice that their teenager becomes anxious before exams, worries excessively about results, loses confidence or struggles to manage academic expectations. Understanding these challenges early often helps families provide more effective support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Under Dr. Ankush Garg's guidance, Manovaidya adopts a structured Neuro-Ayurveda approach to help teenagers and families understand exam stress and develop an individualized plan for emotional strength and future development." onCitationClick={handleCitationClick} />
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Exam & Performance Pressure Treatment Focuses On:</h3>
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
            <h2 className="text-[20px] font-black text-[#17111f]">What Is Exam & Performance Pressure in Teenagers?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Examinations are an important part of education. For many teenagers, academic achievement can become intertwined with self-worth, confidence and future prospects. [3]" onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Exam Performance Pressure may rise when teenagers believe grades determine intelligence, future opportunity or value to the family. Over time this can lead to Academic Performance Anxiety, fear of results and repeated self-comparison. [3]" onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Many families searching for Exam Stress Treatment in India, Academic Pressure Support in India or Teen Mental Health Treatment in India are often looking for a structured approach that helps them better understand their teenager's emotional wellbeing and academic challenges." onCitationClick={handleCitationClick} />
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
              <CitationText text="While some stress can support preparation, high levels can negatively affect confidence, concentration and emotional health. Some teenagers become nervous and test-anxious, while others lose motivation, avoid studying or become overwhelmed. [3] [4]" onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every teenager experiences academic pressure differently. Some become highly anxious before exams, while others lose motivation, avoid studying or become emotionally overwhelmed. Understanding these differences is often an important step toward providing meaningful support.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs and Symptoms of Exam Stress in Teenagers</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Exam-related stress can appear emotionally, behaviourally, academically and physically. Parents looking for symptoms of Exam Anxiety may notice changes in feelings, study habits, behaviour and physical health. [3] [4]" onCitationClick={handleCitationClick} />
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
              <CitationText text="Parents should focus on patterns rather than isolated incidents. When symptoms persist and interfere with functioning, more attention and professional guidance may be needed. [4] [9] [10]" onCitationClick={handleCitationClick} />
            </p>
          </section>

          <section id="why-experience-stress" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Exam & Performance Pressure</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Many parents assume exam stress occurs only because teenagers are not prepared enough. In reality, academic pressure can be affected by emotional, educational, lifestyle and family factors. [3] [4]" onCitationClick={handleCitationClick} />
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Fear of Failure", desc: "Many teenagers fear their grades are not high enough and worry about disappointing themselves, parents or teachers. When each test feels like an assessment of ability or future, fear of exams can grow." },
                { title: "High Expectations", desc: "High expectations from family, school or the teenager can create pressure when teens feel that only perfect marks will be accepted." },
                { title: "Competitive Environments", desc: "Comparison with classmates or high-performing peers can gradually affect confidence, self-esteem and stress." },
                { title: "Future Uncertainty", desc: "Careers, college applications and future prospects can create ongoing worry. Some adolescents begin to believe one exam will shape their entire life." },
                { title: "Low Confidence", desc: "Teenagers who doubt themselves may experience greater exam anxiety even when they prepare well. Confidence building is an important part of exam anxiety and performance anxiety support." },
                { title: "Lifestyle & Sleep Habits", desc: "Sleep difficulty, irregular routines and excessive screen time can affect focus, recall, energy and emotional regulation." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Exam Pressure Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Exam Stress and Academic Stress do not affect only marks or study routines. They can also affect emotional wellbeing, confidence, relationships, physical health and overall Student Mental Health. [1] [3]" onCitationClick={handleCitationClick} />
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Excessive academic pressure may increase anxiety, overthinking, emotional exhaustion and mood swings. Teenagers may feel overwhelmed and struggle to calm down or regulate emotions." onCitationClick={handleCitationClick} />
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Many teenagers begin linking self-worth directly to grades, rank and results. If performance is not as expected, confidence and self-belief can suffer." onCitationClick={handleCitationClick} />
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Too much pressure can reduce concentration, memory and decision-making. Even well-prepared students may struggle to show their true capacity when anxiety becomes overwhelming." onCitationClick={handleCitationClick} />
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Relationships</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Academic stress can affect communication with parents, teachers and friends. Teenagers may become withdrawn, angry or highly sensitive." onCitationClick={handleCitationClick} />
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Physical Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Persistent stress can contribute to sleep difficulties, tiredness, headaches and reduced energy, which can further affect concentration and motivation." onCitationClick={handleCitationClick} />
                </p>
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
                <CitationText text="At Manovaidya, exam stress is understood through a broader perspective. Rather than focusing only on marks, performance or academic outcomes, Manovaidya considers emotional wellbeing, confidence, concentration, motivation, attention and overall development. This approach can help families exploring Exam Stress Treatment in India, Exam Anxiety Treatment in India or Academic Stress Treatment by considering emotional, cognitive, behavioural, lifestyle and family needs together. [2] [5] [8] [11]" onCitationClick={handleCitationClick} />
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "Healthy learning begins with healthy cognitive functioning. This pillar focuses on attention, concentration, memory, learning readiness, self-confidence and decision-making. Students in distress are often not incapable; they may be experiencing emotional stress, poor routines or diminished self-confidence.", Icon: Brain },
                { title: "Gut Response System", text: "Teenagers under academic stress may experience appetite changes, digestive discomfort, irregular eating or energy changes. This pillar explores how digestion, general health, emotional balance, concentration and daily functioning may be connected.", Icon: Utensils },
                { title: "Neural Network System", text: "Experiences shape patterns of thinking, learning and responding. This pillar focuses on learning styles, study habits, emotional reactions, self-confidence and adaptability, especially when repeated thoughts of failure become automatic.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Examination settings, noise, social pressure, classroom environments and digital stimulation can influence concentration and emotional wellbeing. For some students, these factors can intensify Test Anxiety.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "Academic pressure may appear as procrastination, avoidance, irritability, emotional withdrawal or reduced motivation. These behaviours can be symptoms of Student Stress, not laziness.", Icon: ShieldCheck }
              ].map((pillar) => (
                <div key={pillar.title} className="flex gap-4 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm">
                    <pillar.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-black text-[#21142d]">{pillar.title}</h3>
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">
                      <CitationText text={pillar.text} onCitationClick={handleCitationClick} />
                    </p>
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
              <CitationText text="Parents play a major role in shaping how teenagers experience academic pressure. Supportive guidance can help teenagers develop confidence and healthier coping skills. [7]" onCitationClick={handleCitationClick} />
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Focus on Effort, Not Just Results", desc: "Recognizing effort, consistency and progress fosters confidence and resilience. An exam grade cannot determine a teenager's intelligence, ability or future." },
                { title: "Avoid Excessive Comparison", desc: "Comparing teenagers with siblings, friends or classmates may increase stress and reduce confidence. Every teenager is unique and learns differently." },
                { title: "Encourage Healthy Study Habits", desc: "Realistic schedules and balanced study routines usually work better than last-minute pressure or cramming." },
                { title: "Promote Healthy Sleep", desc: "Sleep supports concentration, memory and emotional health. Better sleep can reduce fatigue, irritability and exam anxiety symptoms." },
                { title: "Create a Supportive Environment", desc: "Teenagers benefit when they feel emotionally supported rather than constantly evaluated. Calm, non-judgemental conversations help." },
                { title: "Help Manage Expectations", desc: "Goals can motivate, but unrealistic expectations can increase anxiety and fear of failure. Parents can support growth and learning rather than perfection." },
                { title: "Encourage Balance", desc: "Academic achievement matters, but emotional wellbeing, recreation, physical health and relationships are also part of healthy development." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
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
              <CitationText text="At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance. The process supports teenagers beyond learning alone." onCitationClick={handleCitationClick} />
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding emotional wellbeing, confidence, study habits, lifestyle routines, sleep, concentration difficulties and family concerns. The assessment may help identify Exam Anxiety Symptoms, Causes of Exam Stress, Test Anxiety and Academic Stress patterns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing individualized recommendations based on the teenager's emotional, behavioural and developmental needs, including exam stress management, emotional support, healthier routines and practical strategies." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents better understand academic pressure and practical ways to support teenagers during challenging periods. Parent guidance can improve communication, expectations and academic routines." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand emotional wellbeing, confidence, concentration, motivation and overall growth." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap to monitor exam anxiety symptoms, confidence, concentration, sleep and motivation over time." }
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold text-[#5a5063] leading-6">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[16px] font-black text-[#21142d] mb-3">When Should Parents Consider an Assessment?</h3>
              <p className="text-[14px] font-semibold leading-7 text-[#51465a] mb-3">
                <CitationText text="Parents may consider seeking guidance if they notice:" onCitationClick={handleCitationClick} />
              </p>
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
                <CitationText text="These concerns could be related to Exam Anxiety, Test Anxiety, Academic Stress or Performance Anxiety. If symptoms persist, worsen over time or interfere with daily living, professional help may be useful. [3] [4]" onCitationClick={handleCitationClick} />
              </p>
            </div>

            <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Our goal is to help teenagers and families move from stress, confusion and academic overwhelm toward greater clarity, confidence, resilience and balanced growth." onCitationClick={handleCitationClick} />
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Choosing the right support system for academic stress and emotional wellbeing can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps teenagers manage academic pressure while maintaining confidence and emotional balance." onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="At Manovaidya, our goal is not simply to focus on marks, exams or performance. We help families understand the broader factors that may influence concentration, confidence, motivation, emotional wellbeing and overall development." onCitationClick={handleCitationClick} />
            </p>
            
            <h3 className="mt-6 mb-4 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Academic Wellbeing Assessment", desc: "Every teenager experiences academic pressure differently. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for support and growth." },
                { title: "Neuro-Ayurveda Development System", desc: "The framework includes Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System and Behaviour Guidance System." },
                { title: "Parent-Centred Guidance", desc: "Parent guidance can help reduce unnecessary Exam Performance Pressure and improve communication about marks, expectations and future planning." },
                { title: "Personalized Support", desc: "Exam Anxiety Treatment, Student Stress Treatment and Performance Anxiety Treatment may vary depending on the teenager's specific concerns." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on confidence, emotional resilience, healthy study habits and balanced development rather than short-term academic pressure alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful progress often happens when parents and teenagers work together with proper understanding and structured support." }
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7835A4]" />
                  <div>
                    <h4 className="text-[14px] font-black text-[#21142d]">{title}</h4>
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-[#5a5063]">
                      <CitationText text={desc} onCitationClick={handleCitationClick} />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[15px] font-black leading-7 text-[#17111f]">
              Why Families Across India Connect With Manovaidya
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Families from Delhi, Noida, Gurgaon, Faridabad and other parts of India reach out to Manovaidya for Exam Stress Support, Academic Pressure Support and Teen Mental Wellness guidance through in-clinic and online consultation." onCitationClick={handleCitationClick} />
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              <CitationText text="Exam Stress Treatment in India, Exam Anxiety Treatment in India and Online Exam Anxiety Consultation provide families with structured guidance based on their location and needs." onCitationClick={handleCitationClick} />
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
                  <CitationText text="Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Many families searching for support for exam stress, academic pressure, emotional wellbeing and confidence challenges connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Through detailed assessment, personalized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing emotional wellbeing, confidence, concentration and long-term growth." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System." onCitationClick={handleCitationClick} />
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
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">
                        <CitationText text={faq.answer} onCitationClick={handleCitationClick} />
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => setShowResources((current) => !current)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#d8c6e5] bg-[#7835A4] px-6 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-[#7835A4]/20 transition hover:bg-[#64258e]"
              aria-expanded={showResources}
              aria-controls="medical-references"
            >
              <BookOpen className="h-4 w-4" />
              Resources
              <ChevronDown className={`h-4 w-4 transition ${showResources ? "rotate-180" : ""}`} />
            </button>
            {showResources && <MedicalReferencesBlock />}
          </div>

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
              alt="Academic wellbeing and exam stress support in India"
              className="w-full h-40 sm:h-52 object-cover object-center"
            />
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img
                src={doctorImage}
                alt="Dr Ankush Garg Manovaidya exam stress academic wellbeing clinician"
                className="h-12 w-12 shrink-0 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">
                  Authorised & Clinically Reviewed by Dr Ankush Garg
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Clinical Focus: Teen Mental Wellness, Autism, ADHD, Child Development and Mental Health
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Last Updated: [20-07-2026]
                </p>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#5d3b90] p-3 text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Brain className="h-5 w-5" />
              </span>
              <p className="text-[12px] font-black leading-5">Neuro-Ayurveda Development System</p>
            </div>
          </SidebarCard>

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

export default ExamPerformancePressureIndiaPage;

