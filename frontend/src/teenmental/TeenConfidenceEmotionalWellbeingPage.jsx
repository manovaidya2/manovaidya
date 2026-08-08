import React from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/teen-confidence-emotional-wellbeing-india-generated.png";
import parentGuidanceImage from "../images/teen-family-support.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/teen-emotional-wellbeing-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Confidence", id: "understanding-confidence" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Struggle", id: "why-teenagers-struggle" },
  { label: "How It Affects Teenagers", id: "how-it-affects" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "How Parents Can Help", id: "how-parents-can-help" },
  { label: "How We Support", id: "how-we-support" },
  { label: "When to Assess", id: "when-to-assess" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Teen Confidence", count: 12, Icon: Sparkles },
  { label: "Self-Esteem Support", count: 10, Icon: ShieldCheck },
  { label: "Teen Motivation", count: 8, Icon: Activity },
  { label: "Teen Emotional Health", count: 11, Icon: HeartHandshake },
  { label: "Teen Resilience", count: 9, Icon: Brain },
  { label: "Teen Personal Growth", count: 13, Icon: Users },
];

const keyTakeaways = [
  "Understanding Teen Confidence & Emotional Wellbeing",
  "Common Signs of Low Confidence in Teenagers",
  "Main Causes of Teen Self-Esteem Issues",
  "Impact of Low Confidence on Academics and Relationships",
  "Social Media, Peer Pressure and Family Expectations",
  "Emotional Resilience and Positive Self-Image in Teenagers",
  "Neuro-Ayurveda Approach to Teen Confidence Building",
  "How Parents Can Improve Teen Confidence",
  "Manovaidya's Assessment and Personalized Support Process",
  "When Parents Should Seek Professional Guidance",
  "Why Families Choose Manovaidya",
  "Frequently Asked Questions About Teen Confidence & Self-Esteem",
];

const fullMedicalReferenceContent = `References
[1] World Health Organization - Mental Health of Adolescents
https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health
[2] Tehrani HD, et al. - The Links Between Parenting, Self-Esteem and Depressive Symptoms: A Meta-Analysis
https://pubmed.ncbi.nlm.nih.gov/39472151/
[3] Vincente-Benito I, Ramirez-Duran MDV - Influence of Social Media Use on Body Image and Wellbeing Among Adolescents and Young Adults: A Systematic Review
https://pubmed.ncbi.nlm.nih.gov/37256748/
[4] Mullan VMR, et al. - The Relationship Between Peer Victimisation, Self-Esteem and Internalizing Symptoms in Adolescents: A Systematic Review and Meta-Analysis
https://pubmed.ncbi.nlm.nih.gov/36989220/
[5] Huang C - Self-Concept and Academic Achievement: A Meta-Analysis of Longitudinal Relations
https://pubmed.ncbi.nlm.nih.gov/21930007/
[6] Dray J, et al. - Systematic Review of Universal Resilience-Focused Interventions Targeting Child and Adolescent Mental Health
https://pubmed.ncbi.nlm.nih.gov/28942803/
[7] Charaka Samhita, Sutra Sthana 11 - Tistraishaniya Adhyaya
https://www.carakasamhitaonline.com/index.php?title=Tistraishaniya_Adhyaya
[8] Charaka Samhita - Manas: Mind and Mental Health
https://www.carakasamhitaonline.com/index.php?title=Manas
[9] Charaka Samhita - Dhriti
https://www.carakasamhitaonline.com/index.php?title=Dhriti

Reference Note
This article uses recognised public health resources, peer-reviewed research and classical Ayurvedic texts for adolescent mental health, parenting, self-esteem, social media influence, peer victimisation, academic self-concept, resilience and Ayurvedic concepts related to Manas, Sattvavajaya and Dhriti.

Classical Ayurvedic references are included for conceptual understanding of mind regulation, emotional stability, determination and whole-person wellbeing. They are not modern diagnostic criteria and should not be interpreted as a guaranteed cure for low confidence, self-esteem concerns or teen mental health conditions.

Authorised & Clinically Reviewed by Dr Ankush Garg
Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
Clinical Focus: Autism, ADHD, Child Development, Teen Mental Wellness and Mental Health`;

const articleLinkRules = [
  { label: "Teen Confidence Support", href: "#introduction", pattern: /Teen Confidence Support/i },
  { label: "Teen Confidence Treatment", href: "#why-families-choose", pattern: /Teen Confidence Treatment/i },
  { label: "Teen Confidence Building", href: "#how-parents-can-help", pattern: /Teen Confidence Building/i },
  { label: "Teen Emotional Wellbeing Support", href: "#understanding-confidence", pattern: /Teen Emotional Wellbeing Support/i },
  { label: "Teen Emotional Wellbeing", href: "#why-families-choose", pattern: /Teen Emotional Wellbeing/i },
  { label: "Teenage Emotional Health", href: "#understanding-confidence", pattern: /Teenage Emotional Health/i },
  { label: "Teen Mental Wellness", href: "/teen-mental-wellness-india/", pattern: /Teen Mental Wellness/i },
  { label: "Teen Mental Health Support", href: "/teen-mental-wellness-india/", pattern: /Teen Mental Health Support/i },
  { label: "Teen Therapy", href: "#how-we-support", pattern: /Teen Therapy/i },
  { label: "Teen Counselling", href: "#when-to-assess", pattern: /Teen Counselling/i },
  { label: "Online Counselling for Teenagers", href: "#when-to-assess", pattern: /Online Counselling for Teenagers/i },
  { label: "Teen Self-Esteem Issues", href: "#common-signs", pattern: /Teen Self-Esteem Issues/i },
  { label: "Self-Esteem Support", href: "#why-families-choose", pattern: /Self-Esteem Support/i },
  { label: "Self-Esteem Challenges", href: "#common-signs", pattern: /Self-Esteem Challenges/i },
  { label: "Low Confidence in Teenagers", href: "#how-it-affects", pattern: /Low Confidence in Teenagers/i },
  { label: "Low Confidence", href: "#common-signs", pattern: /Low Confidence/i },
  { label: "Confidence Issues in Adolescents", href: "#common-signs", pattern: /Confidence Issues in Adolescents/i },
  { label: "Confidence", href: "#understanding-confidence", pattern: /Confidence/i },
  { label: "Emotional Wellbeing", href: "#how-it-affects", pattern: /Emotional Wellbeing/i },
  { label: "Emotional Resilience", href: "#how-parents-can-help", pattern: /Emotional Resilience/i },
  { label: "Academic Pressure", href: "/exam-performance-pressure", pattern: /Academic Pressure/i },
  { label: "Academic Stress", href: "/exam-performance-pressure", pattern: /Academic Stress/i },
  { label: "Social Media", href: "/teen-screen-addiction-support/", pattern: /Social Media/i },
  { label: "Parent Guidance", href: "#how-parents-can-help", pattern: /Parent Guidance/i },
  { label: "Family Support", href: "/parent-teen-relationship-support/", pattern: /Family Support/i },
  { label: "Parent-Teen Communication", href: "/parent-teen-relationship-support/", pattern: /Parent-Teen Communication/i },
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
    question: "1. How can I build confidence in my teenager?",
    answer: "Parents can help build confidence by encouraging effort, recognizing strengths, celebrating progress and creating a supportive environment. Teenagers often develop healthy confidence when they feel understood, respected and encouraged to learn from mistakes rather than fear them. Confidence grows through positive experiences, emotional support and opportunities to develop new skills over time. [2] [6]",
  },
  {
    question: "2. Why does my teenager have low self-esteem?",
    answer: "Low self-esteem may be influenced by social comparison, academic pressure, negative experiences, peer relationships, fear of failure or constant self-criticism. Teenagers often become more aware of how they are perceived by others, which can affect confidence and self-worth. Understanding Teen Self-Esteem Issues often helps families provide more meaningful support and encouragement. [1] [2] [3] [4]",
  },
  {
    question: "3. What causes low confidence in teenagers?",
    answer: "Confidence is influenced by many factors including emotional wellbeing, family environment, social experiences, academic challenges, peer relationships and personal experiences. Some teenagers may struggle with confidence because of repeated criticism, fear of failure or negative comparisons. Every teenager develops confidence differently, which is why understanding their individual experiences is important.",
  },
  {
    question: "4. How does social media affect confidence?",
    answer: "Social media can sometimes encourage comparison with unrealistic standards of appearance, success or lifestyle. Constant comparison may affect self-esteem and emotional wellbeing. While social media is not always harmful, excessive exposure may influence how teenagers view themselves. Healthy digital habits and balanced online engagement often help support healthier confidence. [3]",
  },
  {
    question: "5. Can low confidence affect school performance?",
    answer: "Yes. Confidence and academic performance are closely connected. Teenagers with low confidence may hesitate to participate in class, avoid challenges, fear making mistakes or underestimate their abilities. Even capable students may struggle to perform at their full potential when self-belief is low. Supporting confidence often helps create a stronger foundation for learning and growth. [5]",
  },
  {
    question: "6. What are the signs of low self-esteem?",
    answer: "Common signs may include self-doubt, negative self-talk, fear of judgement, avoiding challenges, social withdrawal, excessive comparison with others and difficulty expressing opinions. Some teenagers may become perfectionistic, while others may give up easily because they do not believe in their abilities. Recognizing these signs early often helps families provide appropriate support.",
  },
  {
    question: "7. How can parents improve confidence in teenagers?",
    answer: "Parents can improve confidence by focusing on strengths, encouraging independence, avoiding excessive criticism and recognizing effort rather than only outcomes. Healthy communication, emotional support and opportunities to make decisions often help teenagers develop stronger self-belief and resilience over time.",
  },
  {
    question: "8. Why does my teenager compare themselves to others?",
    answer: "Comparison is a common part of adolescence because teenagers are developing their identity and understanding their place in the world. Social media, peer relationships and academic environments may increase comparison. Helping teenagers focus on personal growth, strengths and individual progress often supports healthier confidence and emotional wellbeing.",
  },
  {
    question: "9. Can confidence be learned?",
    answer: "Yes. Confidence is not something teenagers are simply born with. It develops through experiences, learning opportunities, supportive relationships, emotional growth and overcoming challenges. With appropriate guidance, encouragement and positive experiences, confidence can continue to grow throughout adolescence and adulthood.",
  },
  {
    question: "10. How can I motivate my teenager?",
    answer: "Motivation often improves when teenagers feel capable, supported and connected to meaningful goals. Encouragement, healthy routines, realistic expectations and confidence-building experiences often work better than pressure or criticism. Understanding what motivates a teenager personally is usually more effective than using a one-size-fits-all approach.",
  },
  {
    question: "11. Why does my teenager lack confidence despite being talented?",
    answer: "Many talented teenagers struggle with confidence because confidence and ability are not the same thing. Fear of failure, perfectionism, social comparison, past experiences or excessive self-criticism may prevent teenagers from recognizing their strengths. Helping them focus on progress, learning and personal growth often supports healthier self-belief.",
  },
  {
    question: "12. Why is my teenager afraid of making mistakes?",
    answer: "Many teenagers fear mistakes because they worry about failure, criticism, embarrassment or disappointing others. Academic pressure, perfectionist tendencies and social expectations may contribute to this fear. Helping teenagers view mistakes as opportunities for learning and growth often supports confidence, resilience and emotional wellbeing.",
  },
  {
    question: "13. How does Manovaidya support teenagers?",
    answer: "At Manovaidya, support begins with understanding emotional wellbeing, confidence, behaviour, motivation and lifestyle-related influences through a structured assessment process. Through personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of the factors influencing confidence, resilience and long-term development.",
  },
  {
    question: "14. Can low self-esteem affect a teenager's future?",
    answer: "Low self-esteem may influence confidence, decision-making, communication, relationships, academic growth and willingness to pursue opportunities. Teenagers who do not believe in themselves may avoid challenges even when they have the ability to succeed. Supporting confidence and emotional wellbeing during adolescence often helps create a stronger foundation for future growth and independence.",
  },
  {
    question: "15. When should parents seek guidance?",
    answer: "Parents may consider seeking guidance when confidence challenges begin affecting emotional wellbeing, relationships, communication, motivation, academics or daily functioning. Signs such as persistent self-doubt, fear of failure, social withdrawal or low self-esteem may indicate the need for additional support. A structured assessment can help families better understand the factors influencing confidence, resilience and overall development.",
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
            Low Confidence & Self-Esteem
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
            Join our teen mental wellness newsletter for confidence, resilience and emotional wellbeing guidance from our experts.
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

function TeenConfidenceEmotionalWellbeingPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showResources, setShowResources] = React.useState(false);
  const pageUrl = "https://manovaidya.org/teen-confidence-emotional-wellbeing";
  const pageTitle = "Teen Confidence & Emotional Wellbeing Support in India | Manovaidya";
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
      <main
        className="min-h-screen bg-white text-[#1f1726]"
        style={{ font: '400 1.125rem/1.5 "Martel", serif' }}
      >
      <Seo
        title="Teen Confidence & Emotional Wellbeing Support in India | Self-Esteem Support | Manovaidya"
        description="Looking for Teen Confidence & Emotional Wellbeing Support in India? Learn about self-esteem, confidence challenges, emotional resilience and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        keywords="Teen Confidence Support India, Teen Self-Esteem Treatment, Adolescent Emotional Wellbeing, Teen Self-Doubt, Low Confidence in Teens, Teenage Emotional Resilience, Neuro-Ayurveda Confidence Support, Dr. Ankush Garg"
        path="/teen-confidence-emotional-wellbeing"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Teen Confidence & Emotional Wellbeing Support in India",
          "description": "Looking for Teen Confidence & Emotional Wellbeing Support in India? Learn about self-esteem, confidence challenges, emotional resilience and family guidance through the Neuro-Ayurveda approach at Manovaidya."
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
                <span className="text-[#4b345d]">Teen Confidence & Emotional Wellbeing Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Wellness</p>
              <p className="mt-1 text-[12px] font-black text-[#4b345d]">Low Confidence & Self-Esteem</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Teen Confidence & Emotional Wellbeing Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Teenagers Build Confidence, Emotional Resilience, Self-Belief & Healthy Emotional Wellbeing.
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
                  alt="Teen Confidence and Emotional Wellbeing Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Teen Confidence & Emotional Wellbeing Support in India?</h2>
            <Paragraph>Supporting teens to develop confidence, emotional resilience, self-belief and emotional wellbeing.</Paragraph>
            <Paragraph>Many Indian families look for Teen Confidence Support when teenagers struggle with self-doubt, fear of judgement, motivation problems and social hesitation. Support is not about making a teenager sound louder; it is about developing steady self-esteem, emotional regulation and self-confidence in study, social and family settings.</Paragraph>
            <Paragraph>Confidence influences how teenagers think, learn, communicate and react when they fail. During adolescence, they build identity, compare themselves with others and figure out how they fit into the world. These changes can bring doubt, fear of judgement and lack of confidence in oneself. <Citation id="1" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Many teenagers experience self-doubt, fear of judgement, low confidence or uncertainty about their abilities. These challenges can influence emotional wellbeing, academic growth, relationships and overall development.</Paragraph>
            <Paragraph>Parents often notice that their teenager has become hesitant, withdrawn or overly critical of themselves. Some teenagers avoid opportunities because they fear making mistakes, while others struggle with confidence despite having strong abilities and potential.</Paragraph>
            <Paragraph>At Manovaidya, we understand that confidence is not simply about speaking loudly or appearing outgoing. True confidence is closely connected to emotional wellbeing, self-belief, resilience and the ability to handle life's challenges in a balanced way.</Paragraph>
            <Paragraph>Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families understand emotional patterns, confidence concerns, behaviour, routines and family influences while supporting long-term Teen Mental Wellness.</Paragraph>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="mb-2 text-[14px] font-bold text-[#3b2e45]">At Manovaidya, Teen Confidence & Emotional Wellbeing Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Low Confidence & Self-Doubt", Icon: Sparkles },
                  { label: "Self-Esteem Challenges", Icon: ShieldCheck },
                  { label: "Emotional Wellbeing", Icon: HeartHandshake },
                  { label: "Motivation & Growth Mindset", Icon: Activity },
                  { label: "Social Confidence", Icon: Users },
                  { label: "Resilience & Positive Development", Icon: Brain },
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

          <section id="understanding-confidence" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Does Healthy Confidence Look Like in Teenagers?</h2>
            <Paragraph>Confidence is the belief that a person can learn, grow and overcome difficulties even when situations feel difficult. It does not mean the absence of worry, uncertainty or disappointment.</Paragraph>
            <Paragraph>During adolescence, teenagers experience rapid emotional, social and personal changes. They may compare themselves with peers, friends, classmates and online personalities while developing their sense of self.</Paragraph>
            <Paragraph>Teenage Emotional Health can be affected by social experiences, family communication, academic pressure and personal achievements. <Citation id="1" onClick={handleCitationClick} /> <Citation id="3" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Many families searching for Teen Confidence Treatment in India, Self-Esteem Support for Teenagers or Teen Emotional Wellbeing Support in India are often looking for a structured approach that looks beyond visible hesitation and considers emotions, peer relationships and negative thinking patterns.</Paragraph>
            <Paragraph>Confidence is not something that appears overnight.</Paragraph>
            <Paragraph>It develops through supportive relationships, opportunities to try, room to make mistakes, healthy independence and emotional support. <Citation id="2" onClick={handleCitationClick} /> <Citation id="6" onClick={handleCitationClick} /></Paragraph>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teenagers with healthy confidence are more likely to:</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Communicate freely", "Try new experiences", "Learn from mistakes", "Build healthy relationships", "Manage challenges more effectively", "Make age-appropriate decisions", "Ask for help when needed"].map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Paragraph>When confidence is low, teenagers may struggle with self-doubt, fear of failure and emotional distress.</Paragraph>
            <Paragraph>Understanding confidence through a broader perspective often helps families create a healthier environment for growth and development.</Paragraph>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Low Confidence in Teenagers</h2>
            <Paragraph>Low confidence can appear as self-doubt, avoidance, perfectionism, anger or withdrawal.</Paragraph>
            <Paragraph>Some teenagers openly express self-doubt, while others hide their struggles through silence, procrastination or excessive fear of getting things wrong.</Paragraph>
            <Paragraph>Parents may notice changes in emotions, behaviour, academics and social interactions.</Paragraph>

            <div className="mt-5 space-y-5">
              {[
                { title: "Emotional Signs", Icon: HeartHandshake, items: ["Self-doubt", "Negative self-talk", "Fear of judgement", "Low self-esteem", "Increased emotional sensitivity", "Lack of self-belief", "Worry about making mistakes"] },
                { title: "Behavioural Signs", Icon: Users, items: ["Avoiding challenges", "Reluctance to try new things", "Giving up easily", "Excessive perfectionism", "Fear of participation", "Seeking constant reassurance"] },
                { title: "Academic Signs", Icon: BookOpen, items: ["Low self-esteem and confidence despite ability", "Fear of making mistakes", "Avoiding difficult tasks", "Reduced class participation", "Excessive worry about performance", "Underestimating personal abilities"] },
                { title: "Social Signs", Icon: Activity, items: ["Difficulty expressing opinions", "Social withdrawal", "Comparing themselves with others", "Fear of rejection", "Reduced social confidence", "Withdrawing from new friends and group activities"] },
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
            <Paragraph>These can be indicators of Teen Self-Esteem Issues or broader Confidence Issues in Adolescents, especially when they are persistent and affect daily living. <Citation id="1" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>The presence of one or two signs does not automatically indicate a significant concern. However, when low confidence begins affecting emotional wellbeing, relationships or daily functioning, Teen Counselling in India, Online Counselling for Teenagers or customized Teen Confidence Support may be helpful.</Paragraph>
          </section>

          <section id="why-teenagers-struggle" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Struggle With Confidence</h2>
            <Paragraph>Why teenagers lose confidence is rarely answered by one reason. Emotional experiences, peer relationships, academic stress, family expectations, social comparison and previous failures can all contribute. <Citation id="1" onClick={handleCitationClick} /> <Citation id="2" onClick={handleCitationClick} /> <Citation id="3" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Understanding these influences helps parents become part of the solution instead of assuming the teenager is simply not motivated enough.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Social Comparison", desc: "Teenagers frequently compare themselves with friends, classmates and social media content. Repeated comparison can create a feeling that everyone else is more successful, attractive, able or confident." },
                { title: "Academic Pressure", desc: "Academic expectations can influence how teenagers view their abilities and self-worth. Repeated struggles or fear of failure may make rank and performance feel like proof of intelligence or future capability." },
                { title: "Fear of Failure", desc: "Many teenagers avoid challenges because they worry about making mistakes or disappointing others." },
                { title: "Social Media Influence", desc: "Online platforms often present unrealistic standards of success, appearance and lifestyle. These comparisons may influence confidence and emotional wellbeing." },
                { title: "Peer Relationships", desc: "Friendships and social experiences play an important role during adolescence. Negative social experiences may affect confidence and self-esteem." },
                { title: "Family Expectations", desc: "Well-intentioned expectations can sometimes create pressure if teenagers feel they are unable to meet them." },
                { title: "Negative Experiences", desc: "Past criticism, failures, bullying or difficult experiences may influence how teenagers view themselves and their abilities." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>
            <Paragraph>Many parents worry that ongoing self-doubt, low confidence or emotional struggles may affect their teenager's future opportunities, relationships and overall wellbeing. Understanding these concerns early often helps families support healthier emotional growth and resilience.</Paragraph>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Low Confidence Can Affect Teenagers</h2>
            <Paragraph>Confidence influences much more than how teenagers feel about themselves.</Paragraph>
            <Paragraph>It can affect emotional wellbeing, communication, learning, relationships and future growth.</Paragraph>
            <Paragraph>When confidence remains low for an extended period, teenagers may begin limiting their own potential because they no longer believe in their abilities.</Paragraph>
            <Paragraph>Persistent Low Confidence in Teenagers can impact multiple aspects of Teen Mental Wellness, and structured Self-Esteem Support can help families understand how confidence affects emotions, choices and daily functioning.</Paragraph>

            <div className="mt-5 space-y-4">
              {[
                { title: "Emotional Wellbeing", text: "Low confidence may create self-doubt, negative thinking, fear of judgement, emotional sensitivity and worry about mistakes. Supporting emotional wellbeing means helping teenagers identify uncomfortable emotions and challenge negative self-beliefs." },
                { title: "Academic Growth", text: "A lack of self-belief can make even capable students avoid participation or challenging work. Teen Confidence Building helps teenagers see learning as a chance to grow rather than a threat." },
                { title: "Relationships & Social Confidence", text: "Low confidence can make teenagers avoid expressing opinions, fear rejection, struggle in social situations and depend heavily on approval. Personalized support can explore whether social worry is linked to low self-esteem, negative peer experiences or fear of judgement." },
                { title: "Decision Making", text: "Teenagers regularly face decisions related to studies, friendships, activities and future goals. Low confidence may make decision-making more difficult. Many teenagers begin seeking constant reassurance because they fear making the wrong choice." },
                { title: "Motivation & Personal Growth", text: "Confidence and motivation go hand-in-hand. Teenagers who believe in themselves are often more willing to try new experiences, learn new skills, accept challenges, recover from setbacks and continue after disappointment." },
                { title: "Future Development", text: "Confidence influences how teenagers approach opportunities later in life. Healthy confidence supports: Leadership, Communication, Career development, Independence, Emotional resilience. Building confidence during adolescence often creates a stronger foundation for adulthood." },
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
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">
                The Neuro-Ayurveda Approach to Confidence & Emotional Wellbeing
              </h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                <CitationText text="At Manovaidya, confidence is understood through a broader and more comprehensive perspective. Rather than focusing only on self-esteem or motivation, Manovaidya considers emotional wellbeing, thought patterns, behaviour, lifestyle habits and family support through five interconnected pillars. Classical concepts around Manas, Sattvavajaya and Dhriti provide Ayurvedic conceptual support for mind regulation, emotional stability and determination. [7] [8] [9]" onCitationClick={handleCitationClick} />
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "Confidence is closely connected to healthy emotional and cognitive functioning. The Brain Nourishment System focuses on understanding factors that may influence: Self-belief, Attention, Learning readiness, Emotional regulation, Decision making, Confidence development. Supporting confidence often begins with understanding how teenagers process experiences, challenges and achievements.", Icon: Brain },
                { title: "Gut Response System", text: "Emotional wellbeing and physical wellbeing are often interconnected. Many teenagers experiencing confidence challenges may also struggle with: Poor routines, Irregular eating habits, Lifestyle imbalance, Low energy levels, Reduced daily engagement. The Gut Response System focuses on understanding how overall wellbeing may influence emotional balance and confidence.", Icon: Utensils },
                { title: "Neural Network System", text: "Every experience contributes to how the brain develops patterns of thinking and responding. The Neural Network System focuses on understanding: Thought patterns, Self-belief systems, Emotional responses, Learning habits, Adaptability. Helping teenagers build healthier thinking patterns often supports confidence and resilience.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Teenagers respond differently to environments, experiences and social situations. Factors such as: Classroom settings, Social environments, Peer interactions, Digital stimulation, Performance situations may influence emotional wellbeing and confidence. Understanding these influences often helps families create more supportive environments.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "Behaviour is often a reflection of how teenagers see themselves. Teenagers with low confidence may show: Avoidance behaviours, Hesitation, Withdrawal, Perfectionism, Fear of participation. Rather than focusing only on behaviour, this pillar focuses on understanding the factors that may be contributing to those behaviours and helping families respond more effectively.", Icon: ShieldCheck },
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
              <img
                src={neuroAyurvedaImage}
                alt="Neuro Ayurveda approach for teen confidence support"
                className="max-h-full max-w-full rounded-lg object-contain object-center"
              />
            </div>
          </section>

          <section id="how-parents-can-help" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Help Build Confidence in Teenagers</h2>
            <Paragraph>Parents play one of the most important roles in helping teenagers develop healthy confidence and emotional resilience. Parent-teen communication, emotional safety and recognition of effort can influence self-esteem and wellbeing. <Citation id="2" onClick={handleCitationClick} /></Paragraph>
            <Paragraph>Small changes in communication and support often make a meaningful difference.</Paragraph>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Encourage Effort Rather Than Perfection", desc: "Teenagers benefit when effort, learning and progress are appreciated rather than only outcomes. Recognizing growth helps build confidence over time." },
                { title: "Avoid Excessive Criticism", desc: "Frequent criticism may reduce self-belief and increase self-doubt. Constructive guidance is often more effective when delivered with encouragement and understanding." },
                { title: "Celebrate Small Successes", desc: "Confidence grows through positive experiences. Acknowledging achievements, improvements and personal strengths often helps teenagers develop a healthier self-image." },
                { title: "Support Independence", desc: "Allowing teenagers to make age-appropriate decisions helps build responsibility and confidence. Learning through experience is an important part of development." },
                { title: "Focus on Strengths", desc: "Every teenager has unique strengths and abilities. Helping teenagers recognize their strengths often improves self-belief and motivation." },
                { title: "Encourage Healthy Communication", desc: "Creating a safe environment for open conversations helps teenagers express thoughts and emotions more comfortably. Feeling heard often strengthens confidence." },
                { title: "Teach Resilience", desc: "Confidence is not about avoiding failure. It is about learning how to recover, adapt and continue moving forward after setbacks." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">
                    <CitationText text={desc} onCitationClick={handleCitationClick} />
                  </p>
                </div>
              ))}
            </div>

            <img
              src={parentGuidanceImage}
              alt="Parent guidance for teen confidence and self esteem"
              className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <Paragraph>At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single concern.</Paragraph>
            <Paragraph>Families who come to Manovaidya for Teen Therapy in India, Teen Counselling in India or Teen Mental Health Support in India begin with a structured understanding of confidence, emotional wellbeing, behaviour, routines and family concerns.</Paragraph>
            <Paragraph>Our process typically includes:</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding confidence challenges, emotional wellbeing, behaviour, motivation, lifestyle habits, social experiences and family concerns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing individualized recommendations based on the teenager's unique emotional, behavioural and developmental needs." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents better understand confidence building, communication and practical ways to support emotional growth at home." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand emotional wellbeing, resilience, confidence and overall development." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap that helps families monitor growth and make informed decisions over time." },
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

          <section id="when-to-assess" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">When Should Parents Consider an Assessment?</h2>
            <Paragraph>Parents may consider seeking guidance if they notice:</Paragraph>
            <ul className="mt-4 grid gap-2 rounded-lg border border-[#eadff1] bg-white p-5 sm:grid-cols-2">
              {[
                "Persistent self-doubt",
                "Low self-esteem",
                "Social withdrawal",
                "Fear of failure",
                "Lack of confidence despite ability",
                "Emotional sensitivity",
                "Difficulty expressing opinions",
                "Reduced motivation",
                "Confidence challenges affecting daily life",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </li>
              ))}
            </ul>
            <Paragraph>A structured assessment can help families better understand confidence issues, learning patterns, relationships and overall wellbeing. Teen Counselling in India, Online Counselling for Teenagers or individual Teen Confidence Support may be considered when concerns affect school, communication, relationships or daily functioning. <Citation id="1" onClick={handleCitationClick} /> <Citation id="4" onClick={handleCitationClick} /></Paragraph>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <Paragraph>Choosing the right support system for confidence, self-esteem and emotional wellbeing can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps teenagers build confidence while maintaining emotional balance and resilience.</Paragraph>
            <Paragraph>At Manovaidya, our goal is not simply to focus on confidence alone. We help families understand the broader factors that may influence emotional wellbeing, self-belief, behaviour, motivation and overall development.</Paragraph>

            <h3 className="mb-4 mt-6 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Teen Confidence Assessment", desc: "Every teenager develops confidence differently. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for growth and development." },
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand emotional wellbeing and confidence through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System." },
                { title: "Parent-Centred Guidance", desc: "Confidence building is not only about the teenager. Parents often play one of the most important roles in shaping self-belief, emotional resilience and healthy development." },
                { title: "Personalized Support", desc: "Every teenager experiences confidence challenges differently. Guidance is tailored according to individual strengths, challenges and developmental needs." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on emotional resilience, confidence, communication, self-belief and overall wellbeing rather than temporary motivation alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful growth often happens when teenagers and families work together with proper understanding and support." },
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
            <Paragraph>Families from Delhi, Noida, Gurgaon, Faridabad and other parts of India connect with Manovaidya for online and in-clinic Teen Confidence Treatment, Self-Esteem Support and Teen Emotional Wellbeing guidance.</Paragraph>
            <Paragraph>Parents looking for Best Online Teen Counselling in India, Online Counselling for Teenagers or Best Teen Mental Health Support in India can find guidance tailored to the teenager's needs, emotions, family environment and personal experiences.</Paragraph>
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
                  <CitationText text="Many families searching for guidance regarding confidence, self-esteem, emotional wellbeing and personal development connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support." onCitationClick={handleCitationClick} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  <CitationText text="Through detailed assessment, individualized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing emotional wellbeing, confidence, resilience and long-term growth." onCitationClick={handleCitationClick} />
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
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
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
                Concerned About Your Teenager's Confidence & Emotional Wellbeing?
              </h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If your teenager is experiencing low confidence, self-doubt, fear of failure, emotional sensitivity or motivation challenges, seeking clarity is often the first step.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                At Manovaidya, our team helps families better understand emotional wellbeing through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team.
              </p>

              <div className="mt-6">
                <h3 className="mb-3 text-[16px] font-black">Take the First Step Towards Better Confidence, Emotional Resilience & Personal Growth</h3>
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
                <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">
                  Book Consultation
                </a>
                <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">
                  Take Teen Wellness Assessment
                </a>
              </div>
            </div>
            <img
              src={ctaImage}
              alt="Teen self esteem and emotional wellbeing support"
              className="h-64 w-full object-cover object-center sm:h-80"
            />
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img
                src={doctorImage}
                alt="Dr Ankush Garg Manovaidya teen confidence emotional wellbeing clinician"
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
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                    activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                  }`}
                >
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
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a personalized plan for your teenager from our experts.
            </p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Book Now
            </a>
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
    </CitationClickContext.Provider>
  );
}

export default TeenConfidenceEmotionalWellbeingPage;

