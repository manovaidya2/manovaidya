import React from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Eye,
  Gamepad2,
  HeartHandshake,
  Mail,
  MonitorSmartphone,
  Moon,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/teen-screen-addiction-support-india-generated.png";
import parentGuidanceImage from "../images/teen-family-support.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/teen-emotional-wellbeing-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Screen Addiction", id: "understanding-screen-addiction" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Screen Dependency Develops", id: "why-screen-dependency" },
  { label: "How It Affects Teenagers", id: "how-it-affects" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "How Parents Can Help", id: "how-parents-can-help" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Mobile Addiction", count: 12, Icon: MonitorSmartphone },
  { label: "Gaming Addiction", count: 10, Icon: Gamepad2 },
  { label: "Social Media Addiction", count: 8, Icon: Users },
  { label: "Teen Focus Problems", count: 11, Icon: Brain },
  { label: "Sleep Challenges", count: 9, Icon: Moon },
  { label: "Digital Wellbeing", count: 13, Icon: ShieldCheck },
];

const keyTakeaways = [
  "Understanding Teen Screen Addiction & Digital Wellbeing",
  "Common Signs of Screen Addiction in Teenagers",
  "Main Causes of Excessive Screen Time and Digital Dependency",
  "Impact on Sleep, Focus, Studies and Emotional Wellbeing",
  "Mobile, Smartphone, Social Media and Gaming Addiction Concerns",
  "Difference Between Screen Overuse, Gaming Disorder and ADHD-Like Symptoms",
  "Neuro-Ayurveda Approach to Teen Screen Addiction Support",
  "How Parents Can Reduce Screen Time Without Constant Conflict",
  "Healthy Digital Habits, Offline Activities and Balanced Routines",
  "Manovaidya's Assessment and Personalized Support Process",
  "When Parents Should Seek Professional Guidance",
  "Frequently Asked Questions About Teen Screen Addiction & Digital Wellbeing",
];

const fullMedicalReferenceContent = `References
[1] World Health Organization - Inclusion of "gaming disorder" in ICD-11
https://www.who.int/news/item/14-09-2018-inclusion-of-gaming-disorder-in-icd-11
[2] World Health Organization - Adolescent Health
https://www.who.int/health-topics/adolescent-health
[3] American Academy of Pediatrics - Screen Time Guidelines
https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/screen-time-guidelines/
[4] HealthyChildren.org / American Academy of Pediatrics - How to Make a Family Media Use Plan
https://www.healthychildren.org/English/family-life/Media/Pages/How-to-Make-a-Family-Media-Use-Plan.aspx
[5] Baumgartner SE, et al. - Media use, attention, mental health and academic performance among adolescents
https://pmc.ncbi.nlm.nih.gov/articles/PMC8598050/
[6] American Academy of Pediatrics - The Family Media Plan, Pediatrics
https://publications.aap.org/pediatrics/article/154/6/e2024067417/199968/The-Family-Media-Plan
[7] Charaka Samhita, Sutra Sthana 11 - Tistraishaniya Adhyaya
https://www.carakasamhitaonline.com/index.php?title=Tistraishaniya_Adhyaya
[8] Charaka Samhita - Manas: Mind and Mental Health
https://www.carakasamhitaonline.com/index.php?title=Manas
[9] Charaka Samhita - Indriya
https://www.carakasamhitaonline.com/index.php?title=Indriya

Reference Note
This article uses recognised public health resources, paediatric media guidance, peer-reviewed research and classical Ayurvedic texts for gaming disorder, adolescent health, screen-time guidance, sleep and family media planning, attention, and Ayurvedic concepts related to Manas, Sattvavajaya, regulated lifestyle and balanced sensory engagement.

Classical Ayurvedic references are included for conceptual understanding of mind regulation, sensory balance and whole-person wellbeing. They are not modern diagnostic criteria and should not be interpreted as a guaranteed cure for screen addiction, gaming disorder, ADHD-like symptoms or teen mental health conditions.

Authorised & Clinically Reviewed by Dr Ankush Garg
Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
Clinical Focus: Autism, ADHD, Child Development, Teen Mental Wellness and Mental Health`;

const articleLinkRules = [
  { label: "Teen Screen Addiction Treatment in India", href: "#introduction", pattern: /Teen Screen Addiction Treatment in India/i },
  { label: "Teen Screen Addiction Treatment", href: "#why-families-choose", pattern: /Teen Screen Addiction Treatment/i },
  { label: "Teen Screen Addiction Counselling", href: "#common-signs", pattern: /Teen Screen Addiction Counselling/i },
  { label: "Screen Addiction Treatment in India", href: "#understanding-screen-addiction", pattern: /Screen Addiction Treatment in India/i },
  { label: "Screen Addiction Therapy for Teenagers", href: "#common-signs", pattern: /Screen Addiction Therapy for Teenagers/i },
  { label: "Screen Addiction in Teenagers", href: "#understanding-screen-addiction", pattern: /Screen Addiction in Teenagers/i },
  { label: "Screen Addiction", href: "#common-signs", pattern: /Screen Addiction/i },
  { label: "Online Screen Addiction Support for Teenagers", href: "#how-we-support", pattern: /Online Screen Addiction Support for Teenagers/i },
  { label: "Excessive Screen Time in Teenagers", href: "#introduction", pattern: /Excessive Screen Time in Teenagers/i },
  { label: "Excessive Screen Time", href: "#how-it-affects", pattern: /Excessive Screen Time/i },
  { label: "Excessive Screen Use", href: "#how-it-affects", pattern: /Excessive Screen Use/i },
  { label: "Screen Time", href: "#how-parents-can-help", pattern: /Screen Time/i },
  { label: "Screen Use", href: "#understanding-screen-addiction", pattern: /Screen Use/i },
  { label: "Mobile Addiction in Teenagers", href: "#understanding-screen-addiction", pattern: /Mobile Addiction in Teenagers/i },
  { label: "Mobile Addiction Support", href: "#why-families-choose", pattern: /Mobile Addiction Support/i },
  { label: "Mobile Addiction", href: "#common-signs", pattern: /Mobile Addiction/i },
  { label: "Mobile Phone Use", href: "#how-we-support", pattern: /Mobile Phone Use/i },
  { label: "Gaming Addiction", href: "#understanding-screen-addiction", pattern: /Gaming Addiction/i },
  { label: "Gaming Disorder", href: "#understanding-screen-addiction", pattern: /Gaming Disorder/i },
  { label: "Social Media Dependency", href: "#why-screen-dependency", pattern: /Social Media Dependency/i },
  { label: "Social Media Addiction", href: "#common-signs", pattern: /Social Media Addiction/i },
  { label: "Social Media", href: "#why-screen-dependency", pattern: /Social Media/i },
  { label: "Digital Wellbeing Support in India", href: "#how-we-support", pattern: /Digital Wellbeing Support in India/i },
  { label: "Teen Digital Wellbeing Support", href: "#understanding-screen-addiction", pattern: /Teen Digital Wellbeing Support/i },
  { label: "Teen Digital Wellbeing", href: "#why-families-choose", pattern: /Teen Digital Wellbeing/i },
  { label: "Teen Digital Wellness", href: "#understanding-screen-addiction", pattern: /Teen Digital Wellness/i },
  { label: "Online Teen Digital Wellbeing Program", href: "#why-families-choose", pattern: /Online Teen Digital Wellbeing Program/i },
  { label: "Healthy Digital Habits", href: "#how-parents-can-help", pattern: /Healthy Digital Habits/i },
  { label: "Digital Habits", href: "#how-it-affects", pattern: /Digital Habits/i },
  { label: "Family Media Plan", href: "#how-parents-can-help", pattern: /Family Media Plan/i },
  { label: "Parent Guidance", href: "#how-parents-can-help", pattern: /Parent Guidance/i },
  { label: "Family Support", href: "/parent-teen-relationship-support/", pattern: /Family Support/i },
  { label: "Teen Mental Wellness", href: "/teen-mental-wellness-india/", pattern: /Teen Mental Wellness/i },
  { label: "Emotional Wellbeing", href: "#how-it-affects", pattern: /Emotional Wellbeing/i },
  { label: "Academic Pressure", href: "/exam-performance-pressure", pattern: /Academic Pressure/i },
  { label: "ADHD", href: "/child-health-care/adhd-child", pattern: /ADHD/i },
  { label: "Neuro-Ayurveda Development System", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda Development System/i },
  { label: "Neuro-Ayurveda", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda/i },
  { label: "Dr. Ankush Garg", href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { label: "Manovaidya", href: "/about/manovaidya", pattern: /Manovaidya/i },
  { label: "Child Development", href: "/child-development-support-india", pattern: /Child Development/i },
  { label: "Autism", href: "/autism-treatment-india", pattern: /Autism/i },
];

const faqs = [
  {
    question: "1. How to help kids with screen addiction?",
    answer: "Parents can help by creating healthy digital boundaries, encouraging offline activities and maintaining consistent routines. Rather than focusing only on restricting devices, it is often helpful to understand why the child is spending excessive time on screens. Many children use screens for entertainment, social connection, stress relief or habit. A balanced and supportive approach often leads to better long-term results than constant conflict or punishment.",
  },
  {
    question: "2. What are the signs of screen addiction in teenagers?",
    answer: "Common signs may include excessive screen use, irritability when devices are removed, reduced interest in offline activities, difficulty controlling screen time, sleep disturbances, declining academic performance and reduced family interaction. Some teenagers may constantly think about gaming, social media or mobile phone use even when engaged in other activities.",
  },
  {
    question: "3. How can I reduce my teenager's screen time?",
    answer: "Reducing screen time often works best through gradual changes rather than sudden restrictions. Parents can create structured schedules, encourage hobbies, promote outdoor activities and establish screen-free periods during meals and before bedtime. Consistency and family involvement are often more effective than strict rules alone.",
  },
  {
    question: "4. Is screen addiction a problem?",
    answer: "Excessive screen use can become a concern when it starts affecting emotional wellbeing, sleep, concentration, relationships, academic performance or daily functioning. Technology itself is not the problem. The concern arises when screen use becomes difficult to control and begins replacing healthy routines and real-world experiences. [1] [2]",
  },
  {
    question: "5. Can excessive screen time affect mental health?",
    answer: "Excessive screen use may influence emotional wellbeing, mood regulation, stress levels and social interactions. Some teenagers may experience increased irritability, emotional dependence on digital activities, reduced social engagement or difficulty managing emotions. Maintaining a balanced relationship with technology often supports healthier emotional development. [2] [3]",
  },
  {
    question: "6. Does screen addiction affect concentration and studies?",
    answer: "Yes. Excessive screen use may affect attention, concentration, study habits and academic performance. Constant digital stimulation can make it difficult for some teenagers to maintain focus on tasks that require sustained attention. Healthy routines and balanced screen habits often support better learning and productivity. [5]",
  },
  {
    question: "7. Why is my teenager always on their phone?",
    answer: "Teenagers often use phones for communication, entertainment, social media, gaming, studying and staying connected with friends. However, excessive use may sometimes be linked to boredom, stress, loneliness, habit formation or emotional challenges. Understanding the reason behind the behaviour often helps parents respond more effectively.",
  },
  {
    question: "8. Can social media addiction affect emotional wellbeing?",
    answer: "Social media can sometimes contribute to comparison, fear of missing out, unrealistic expectations and emotional dependence on online validation. Excessive use may influence self-esteem, confidence and overall emotional wellbeing. Healthy digital habits often help teenagers maintain a more balanced perspective. [3]",
  },
  {
    question: "9. How does gaming addiction affect teenagers?",
    answer: "Excessive gaming may influence sleep patterns, academic performance, physical activity, social interaction and emotional wellbeing. Some teenagers may become highly dependent on gaming for entertainment or emotional escape. Understanding the underlying reasons for excessive gaming often helps families support healthier habits and balance. [1]",
  },
  {
    question: "10. Can excessive screen time affect sleep?",
    answer: "Yes. Screen exposure, especially before bedtime, may interfere with healthy sleep patterns. Late-night gaming, social media use or continuous device engagement can make it difficult for teenagers to fall asleep and maintain quality rest. Healthy sleep habits often support emotional wellbeing, concentration and daily functioning. [3] [4]",
  },
  {
    question: "11. Is it ADHD or too much screen time?",
    answer: "Some signs of excessive screen use, such as reduced attention, distractibility or difficulty focusing, may appear similar to ADHD. However, ADHD and screen-related difficulties are not the same. A structured assessment can help families better understand the factors influencing attention, behaviour and concentration rather than making assumptions based on symptoms alone. [5]",
  },
  {
    question: "12. How long does it take to detox from screen addiction?",
    answer: "There is no fixed timeline because every teenager is different. Improvements often depend on habits, routines, family support, emotional wellbeing and the level of screen dependency. The goal is not simply to stop screen use but to help teenagers develop healthier and more balanced digital habits over time.",
  },
  {
    question: "13. How does Manovaidya support teenagers with screen addiction?",
    answer: "At Manovaidya, support begins with understanding the teenager as a whole rather than focusing only on screen time. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of the factors influencing behaviour, attention, emotional wellbeing and digital habits. The goal is to support healthier routines, improved focus and balanced development.",
  },
  {
    question: "14. Should I limit my 15 year old's screen time?",
    answer: "Healthy limits can be beneficial, but limits alone are not always enough. Teenagers often respond better when digital boundaries are combined with meaningful alternatives such as sports, hobbies, family activities and social engagement. The focus should be on creating balance rather than completely eliminating technology. [6]",
  },
  {
    question: "15. When should parents seek professional guidance?",
    answer: "Parents may consider seeking guidance when screen use begins affecting sleep, concentration, academic performance, emotional wellbeing, relationships or daily functioning. Persistent dependency, irritability when devices are removed, social withdrawal or significant behavioural changes may indicate the need for additional support. A structured assessment can help families better understand the factors influencing screen-related challenges and overall wellbeing. [1] [2]",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question.replace(/^\d+\.\s*/, ""),
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

const CitationClickContext = React.createContext({
  onCitationClick: null,
  linkedRuleKeys: null,
});

function Paragraph({ children }) {
  const linkContext = React.useContext(CitationClickContext);
  const content = React.Children.map(children, (child, index) =>
    typeof child === "string" ? (
      <CitationText key={`${child}-${index}`} text={child} onCitationClick={linkContext?.onCitationClick} />
    ) : (
      child
    )
  );

  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{content}</p>;
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
  const linkContext = React.useContext(CitationClickContext);
  const citationHandler = onCitationClick || linkContext?.onCitationClick;
  const linkedRuleKeysInPage = linkContext?.linkedRuleKeys;
  const source = String(text);
  const citationPattern = /\[(\d+)\]/;
  const linkedRuleKeysInText = linkedRuleKeysInPage || new Set();
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
      parts.push(<Citation key={`${next.text}-${parts.length}`} id={next.citationId} onClick={citationHandler} />);
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
            Screen Addiction & Digital Wellbeing
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
            Join our teen mental wellness newsletter for screen balance, focus and digital wellbeing guidance from our experts.
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
        <a href="/exam-performance-pressure/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <BookOpen className="h-4 w-4 text-[#7835A4]" /> Exam & Performance Pressure Support
        </a>
        <a href="/teen-confidence-emotional-wellbeing/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Sparkles className="h-4 w-4 text-[#7835A4]" /> Teen Confidence & Emotional Wellbeing
        </a>
        <a href="/parent-teen-relationship-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Users className="h-4 w-4 text-[#7835A4]" /> Parent-Teen Relationship Treatment
        </a>
      </div>
    </SidebarCard>
  );
}

function TeenScreenAddictionSupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showResources, setShowResources] = React.useState(false);
  const pageUrl = "https://manovaidya.org/teen-screen-addiction-support";
  const pageTitle = "Teen Screen Addiction Treatment in India | Manovaidya";
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

  const linkRenderContext = {
    onCitationClick: handleCitationClick,
    linkedRuleKeys: new Set(),
  };

  return (
    <CitationClickContext.Provider value={linkRenderContext}>
      <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
      <Seo
        title="Teen Screen Addiction Treatment in India | Mobile & Gaming Addiction Support | Manovaidya"
        description="Looking for Teen Screen Addiction Treatment in India? Learn about mobile addiction, gaming addiction, social media dependency, screen time concerns and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        keywords="Teen Screen Addiction India, Mobile Addiction Treatment, Gaming Addiction in Teens, Social Media Addiction Support, Excessive Screen Time, Teenage Digital Detox, Parent Guidance for Screen Addiction, Neuro-Ayurveda Addiction Care, Dr. Ankush Garg"
        path="/teen-screen-addiction-support"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Teen Screen Addiction Treatment in India",
          "description": "Looking for Teen Screen Addiction Treatment in India? Learn about mobile addiction, gaming addiction, social media dependency, screen time concerns and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/teen-mental-wellness-india/" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Teen Screen Addiction Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Wellness</p>
              <p className="mt-1 text-[12px] font-black text-[#4b345d]">Screen Addiction & Digital Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Teen Screen Addiction Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Teenagers Develop Healthier Digital Habits, Better Focus & Emotional Wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">
                  Book Consultation
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">
                  Speak With Our Team
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
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label={title}>
                      {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex">
                <MonitorSmartphone className="mb-1 h-5 w-5" />
                Healthy Digital Habits
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Teen Screen Addiction Treatment in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What Is Teen Screen Addiction Treatment in India?</h2>
            <Paragraph>Supporting teenagers with healthier digital habits, better focus and emotional wellbeing.</Paragraph>
            <Paragraph>When families look for Teen Screen Addiction Treatment in India, they often want guidance that helps teenagers control screen time without constant conflict. The goal is not simply to remove phones, games and social media, but to understand what drives screen dependence, behaviour patterns, lifestyle habits and family routines.</Paragraph>
            <Paragraph>Technology plays a significant role in today's life. Smartphones, social media, online games, video content and digital learning platforms have many advantages. But heavy screen time can impact emotional health, focus, sleep, behaviour and daily functioning. <Citation id="2" onClick={handleCitationClick} /> <Citation id="3" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /> <Citation id="5" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>When screen time begins to replace sleep, physical activity, studies, in-person interaction, family time or meaningful offline experiences, it is important to pay attention to Excessive Screen Time in Teenagers.</Paragraph>
            <Paragraph>Many parents notice that their teenager spends long hours on mobile phones, social media, gaming platforms or digital entertainment. The teenager may struggle to disconnect, become irritable when devices are removed or slowly lose interest in offline activities.</Paragraph>
            <Paragraph>At Manovaidya, we understand that screen dependency is not simply about technology use. Emotional wellbeing, social experiences, confidence, boredom, stress, sleep patterns, lifestyle habits and daily routines often influence how teenagers interact with digital devices.</Paragraph>
            <Paragraph>Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families understand screen-related challenges while supporting healthier habits, attention, emotional wellbeing and balanced development.</Paragraph>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="mb-2 text-[14px] font-bold text-[#3b2e45]">At Manovaidya, Teen Screen Addiction Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Excessive Mobile Phone Use", Icon: MonitorSmartphone },
                  { label: "Social Media Dependency", Icon: Users },
                  { label: "Gaming Addiction Concerns", Icon: Gamepad2 },
                  { label: "Reduced Attention & Focus", Icon: Brain },
                  { label: "Sleep & Lifestyle Challenges", Icon: Moon },
                  { label: "Healthy Digital Habits", Icon: ShieldCheck },
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

          <section id="understanding-screen-addiction" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Is Screen Addiction in Teenagers?</h2>
            <Paragraph>Technology is now deeply integrated into education, communication and entertainment.</Paragraph>
            <Paragraph>Screen use does not always have negative consequences. Problems may arise when digital activities become difficult to manage and begin affecting emotional wellbeing, sleep, relationships, school or home life. <Citation id="2" onClick={handleCitationClick} /> <Citation id="3" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Screen Addiction in Teenagers can appear as frequent use, struggles with putting devices down, emotional reactions when screen access is reduced, or a feeling of compulsion even when screen use harms other parts of life.</Paragraph>
            <Paragraph>Formal diagnostic recognition is specific in areas such as gaming disorder. Not every teenager who uses a device for many hours is addicted. Gaming disorder includes impaired control, increased priority given to gaming and continued gaming despite negative outcomes. <Citation id="1" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Families searching for Screen Addiction Treatment in India, Mobile Addiction in Teenagers or Teen Digital Wellbeing Support are often looking for clarity on whether the concern is occasional overuse, lifestyle imbalance or a pattern affecting daily functioning.</Paragraph>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teenagers may use screens for:</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Social interaction", "Gaming", "Entertainment", "Studying", "Content creation", "Communication"].map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Paragraph>Teen Digital Wellness means helping teenagers become aware of their technology use while promoting healthy sleep, learning, physical activity, family time and meaningful offline activities.</Paragraph>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Screen Addiction in Teenagers</h2>
            <Paragraph>Signs of Screen Addiction in Teenagers should be noticed across emotions, behaviour, studies, physical wellbeing and daily functioning.</Paragraph>
            <div className="mt-5 space-y-5">
              {[
                { title: "Emotional Signs", Icon: HeartHandshake, items: ["Irritability when devices are removed", "Frequent mood changes", "Increased frustration", "Emotional dependence on digital activities", "Difficulty managing boredom without a screen"] },
                { title: "Behavioural Signs", Icon: MonitorSmartphone, items: ["Excessive screen time", "Constantly checking devices", "Difficulty reducing usage", "Avoiding offline activities", "Reduced family interaction", "Ignoring responsibilities to continue screen use"] },
                { title: "Academic Signs", Icon: BookOpen, items: ["Difficulty concentrating", "Reduced academic performance", "Procrastination", "Reduced productivity", "Trouble managing without the mobile phone"] },
                { title: "Physical Signs", Icon: Eye, items: ["Sleep disturbances", "Fatigue", "Eye strain", "Reduced physical activity", "Headaches or body discomfort after extended use"] },
              ].map(({ title, Icon, items }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#7835A4]" />
                    <h3 className="text-[16px] font-black text-[#21142d]">{title}</h3>
                  </div>
                  <ul className="space-y-2 sm:columns-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Paragraph>Overstimulation from digital devices may be linked to attention and concentration problems, but it should not be assumed to be ADHD or another developmental concern without assessment. <Citation id="5" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Mobile device use late at night and screen access near bedtime may relate to shorter sleep duration, poorer sleep quality and daytime sleepiness. <Citation id="3" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Occasional overuse is not always addiction. When multiple signs persist and screen use interferes with several areas of life, Teen Screen Addiction Counselling, Screen Addiction Therapy for Teenagers or Online Screen Addiction Support for Teenagers may be useful.</Paragraph>
          </section>

          <section id="why-screen-dependency" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Develop Screen Dependency</h2>
            <Paragraph>Many parents assume teenagers use screens excessively because they lack discipline. In reality, multiple emotional, social, behavioural and lifestyle factors can influence digital dependency.</Paragraph>
            <Paragraph>Learning about these influences is an important part of How to Overcome Screen Addiction in Teenagers without relying only on punishment or abrupt restrictions.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Social Connection", desc: "Digital platforms are a common way for teenagers to connect with friends and peers. Reducing phone use can feel difficult when they worry about missing conversations, updates, group activities or social acceptance." },
                { title: "Entertainment & Instant Rewards", desc: "Gaming, videos and social media provide immediate stimulation and rewards. Notifications, game achievements, likes and short-form content can reinforce automatic checking and recurring use." },
                { title: "Academic Demands", desc: "Screens are essential for online learning, research, communication and assignments. This makes screen-time management complicated because learning and entertainment often happen on the same device." },
                { title: "Emotional Escape", desc: "Some teenagers use screens to relieve boredom, loneliness, stress, academic pressure or uncomfortable emotions. Support should explore emotional avoidance rather than only removing devices." },
                { title: "Social Media Influence", desc: "Comparison, fear of missing out and online validation may increase the need to stay connected. Social media dependency can affect sleep and emotional health." },
                { title: "Lifestyle Imbalance", desc: "Lack of structured routines, physical activity, hobbies and meaningful offline time can contribute to excessive screen time. Predictable routines and offline engagement support healthier digital habits." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Excessive Screen Use Can Affect Teenagers</h2>
            <Paragraph>The impact of excessive screen time depends on what teenagers are doing online, when they use screens, how it makes them feel and whether screens are replacing meaningful daily activities. <Citation id="2" onClick={handleCitationClick} /></Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Emotional Wellbeing", text: "Teenagers may experience irritability, mood fluctuations, emotional dependence, reduced emotional balance and difficulty coping with boredom or frustration." },
                { title: "Concentration & Attention", text: "Excessive digital stimulation can affect attention, focus and learning styles. Frequent switching between short videos, games, notifications and messages may make studying feel less engaging." },
                { title: "Sleep Quality", text: "Using devices late in the day may disrupt sleep. Poor sleep can affect mood, attention, energy, learning and emotional control." },
                { title: "Academic Performance", text: "Reduced concentration and increased procrastination may affect studies." },
                { title: "Relationships", text: "Excessive screen use can reduce face-to-face interaction and family involvement. Family routines, parent modelling and communication can all influence teen screen use." },
                { title: "Physical Wellbeing", text: "Limited physical activity and extended screen time can affect wellbeing, which is why support should also promote movement, outdoor activity, healthy sleep and offline engagement." },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h3 className="text-[16px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                    <CitationText text={text} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)]">
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">The Neuro-Ayurveda Approach to Teen Screen Addiction</h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                <CitationText text="At Manovaidya, screen-related challenges are understood through a broader perspective. The focus is not simply on reducing screen time, but on understanding emotional wellbeing, attention, behaviour, lifestyle habits, routines and family patterns that may contribute to digital dependency. Traditional Ayurvedic ideas about Manas, Sattvavajaya, regulated lifestyle and balanced sensory engagement provide conceptual support. [7] [8] [9]" onCitationClick={handleCitationClick} />
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "This pillar focuses on attention, concentration, learning readiness, emotional regulation and healthy cognitive functioning. It helps families explore whether digital habits, sleep issues, emotional stress or inconsistent routines are connected with reduced focus.", Icon: Brain },
                { title: "Gut Response System", text: "Lifestyle balance, eating patterns, energy levels, sleep routines and daily functioning may influence how teenagers engage with screens. The focus is on nutrition, sleep, routines and overall wellbeing.", Icon: Utensils },
                { title: "Neural Network System", text: "Repeated reward patterns, thought patterns, attention habits and emotional responses shape digital habits over time. Support focuses on triggers, healthier replacements and reducing automatic device use.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Fast-moving content, gaming stimulation, social media scrolling and digital overload may influence sensory and emotional balance. Offline activities may feel less interesting when teens become used to constant stimulation.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "This pillar helps families understand avoidance, irritability, dependency and resistance as possible signs of habit, emotional dependence, boredom, fear of missing out or lack of meaningful alternatives.", Icon: ShieldCheck },
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
            <div className="mt-6 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] p-8 shadow-[0_12px_30px_rgba(58,31,90,0.08)]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for screen addiction support" className="max-h-full max-w-full rounded-lg object-contain object-center" />
            </div>
          </section>

          <section id="how-parents-can-help" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Help Reduce Screen Dependency</h2>
            <Paragraph>Parents can support healthier digital habits by creating structure, encouraging offline engagement, maintaining consistent routines and understanding the emotional reasons behind excessive digital use. Reducing screen time for teenagers usually works best through gradual and realistic change.</Paragraph>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Create Screen-Free Routines", desc: "Screen-free meals, evening routines and predictable bedtimes can support self-regulation. Families can set realistic limits around mealtimes, rest, study, recreation and exercise." },
                { title: "Encourage Offline Activities", desc: "Sports, hobbies, family time and peer interaction provide meaningful alternatives to digital stimulation. Activities should be based on interests, not framed only as punishment." },
                { title: "Avoid Constant Conflict", desc: "Calm communication often works better than repeated arguments, sudden restrictions or punishment. Parents can explain boundaries, listen to concerns and involve teenagers in realistic schedules." },
                { title: "Support Sleep Habits", desc: "Reducing evening device use can improve sleep, emotional health and concentration. Keeping devices out of the bedroom and reducing notifications can help." },
                { title: "Model Balanced Technology Use", desc: "Teenagers often respond better when the whole family follows healthy digital boundaries. Family-wide limits help digital wellbeing feel like a shared routine." },
                { title: "Understand Emotional Triggers", desc: "Stress, loneliness, boredom and social pressure can all influence excessive screen time. Understanding triggers helps parents offer emotional support and suitable alternatives." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
            <img src={parentGuidanceImage} alt="Parent guidance for teen screen addiction support" className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <Paragraph>At Manovaidya, support begins with understanding the teenager as a whole rather than focusing only on screen time.</Paragraph>
            <Paragraph>A structured assessment can be the first step for families looking for Teen Screen Addiction Treatment in India, Online Screen Addiction Support for Teenagers or Digital Wellbeing Support in India.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding screen habits, mobile phone use, gaming patterns, social media dependency, sleep, attention, emotional wellbeing and family concerns. This helps clarify whether the concern is occasional overuse, lifestyle imbalance or a persistent screen-related challenge." },
                { title: "Step 2: Personalized Guidance", desc: "Providing recommendations based on the teenager's habits, lifestyle, emotional needs and developmental concerns, including screen-time management, sleep support, healthier routines and strategies to reduce automatic device use." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents create practical digital boundaries, supportive routines, healthier communication and meaningful offline alternatives at home." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand attention, behaviour, emotional wellbeing and healthy digital habits." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Tracking changes in screen duration, late-night use, sleep quality, attention, family interaction, academic routines, offline engagement and emotional responses to restrictions." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <Paragraph>Choosing the right support system for screen addiction, mobile dependency and digital wellbeing can feel challenging for many families. Parents are often looking for practical guidance, better understanding and a structured approach that helps teenagers develop healthier habits without creating constant conflict.</Paragraph>
            <Paragraph>At Manovaidya, our goal is not simply to reduce screen time. We help families understand the broader factors that may influence digital habits, attention, emotional wellbeing, behaviour and overall development.</Paragraph>
            <h3 className="mb-4 mt-6 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Screen Addiction Assessment", desc: "Every teenager uses technology differently. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for healthy digital habits and balanced development." },
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand screen-related challenges through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System." },
                { title: "Parent-Centred Guidance", desc: "Digital wellbeing is not only about the teenager. Parents often play a major role in shaping healthy technology habits and creating balanced routines." },
                { title: "Personalized Support", desc: "Every teenager experiences screen-related challenges differently. Guidance is tailored according to individual needs, habits and developmental concerns." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on healthy digital habits, emotional wellbeing, attention, focus and balanced development rather than temporary restrictions alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful progress often happens when teenagers and families work together with proper understanding and structured support." },
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
            <p className="mt-8 text-[15px] font-black leading-7 text-[#17111f]">Why Families Across India Connect With Manovaidya</p>
            <Paragraph>Through online and in-clinic consultation, families from Delhi, Noida, Gurgaon, Faridabad and across India reach out to Manovaidya for Teen Screen Addiction Treatment, Teen Digital Wellbeing guidance and Mobile Addiction Support.</Paragraph>
            <Paragraph>Families looking for Teen Screen Addiction Treatment in India, Digital Wellbeing Support in India or an Online Teen Digital Wellbeing Program can find structured support based on their location and concerns.</Paragraph>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm" />
              <div>
                <h2 className="text-[18px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-black text-[#7835A4]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Many families searching for support regarding excessive screen use, mobile addiction, gaming dependency and digital wellbeing connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Through detailed assessment, individualized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing attention, behaviour, emotional wellbeing and healthy development." onCitationClick={handleCitationClick} />
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
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={openFaq === index}>
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
              <h2 className="text-[22px] font-black leading-tight">Concerned About Your Teenager's Screen Habits?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                <CitationText text="If your teenager is struggling with excessive mobile phone use, gaming dependency, social media overuse, sleep disturbances or reduced concentration, seeking clarity is often the first step." onCitationClick={handleCitationClick} />
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                <CitationText text="At Manovaidya, our team helps families better understand screen-related challenges through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team." onCitationClick={handleCitationClick} />
              </p>
              <div className="mt-6">
                <h3 className="mb-3 text-[16px] font-black">Take the First Step Towards Healthier Digital Habits, Better Focus & Emotional Wellbeing</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {["Book Assessment Session", "Speak With Our Team", "Get Personalized Guidance"].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6">
                <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Consultation</a>
                <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Take Teen Wellness Assessment</a>
              </div>
            </div>
            <img src={ctaImage} alt="Teen digital wellbeing and screen addiction support" className="h-64 w-full object-cover object-center sm:h-80" />
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img
                src={doctorImage}
                alt="Dr Ankush Garg Manovaidya teen screen addiction digital wellbeing clinician"
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
              <input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" />
              <Search className="h-4 w-4 text-[#7835A4]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => (
                <a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}>
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"}`} />
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
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get a personalized plan for your teenager from our experts.</p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 78238 38638</p>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, teen development tips and Manovaidya updates.</p>
            </div>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button>
          </form>
        </div>
      </section>
      </main>
    </CitationClickContext.Provider>
  );
}

export default TeenScreenAddictionSupportIndiaPage;

