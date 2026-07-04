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

const faqs = [
  {
    question: "1. How can I build confidence in my teenager?",
    answer: "Parents can help build confidence by encouraging effort, recognizing strengths, celebrating progress and creating a supportive environment. Teenagers often develop healthy confidence when they feel understood, respected and encouraged to learn from mistakes rather than fear them. Confidence grows through positive experiences, emotional support and opportunities to develop new skills over time.",
  },
  {
    question: "2. Why does my teenager have low self-esteem?",
    answer: "Low self-esteem may be influenced by social comparison, academic pressure, negative experiences, peer relationships, fear of failure or constant self-criticism. Teenagers often become more aware of how they are perceived by others, which can affect confidence and self-worth. Understanding the factors influencing self-esteem often helps families provide more meaningful support and encouragement.",
  },
  {
    question: "3. What causes low confidence in teenagers?",
    answer: "Confidence is influenced by many factors including emotional wellbeing, family environment, social experiences, academic challenges, peer relationships and personal experiences. Some teenagers may struggle with confidence because of repeated criticism, fear of failure or negative comparisons. Every teenager develops confidence differently, which is why understanding their individual experiences is important.",
  },
  {
    question: "4. How does social media affect confidence?",
    answer: "Social media can sometimes encourage comparison with unrealistic standards of appearance, success or lifestyle. Constant comparison may affect self-esteem and emotional wellbeing. While social media is not always harmful, excessive exposure may influence how teenagers view themselves. Healthy digital habits and balanced online engagement often help support healthier confidence.",
  },
  {
    question: "5. Can low confidence affect school performance?",
    answer: "Yes. Confidence and academic performance are closely connected. Teenagers with low confidence may hesitate to participate in class, avoid challenges, fear making mistakes or underestimate their abilities. Even capable students may struggle to perform at their full potential when self-belief is low. Supporting confidence often helps create a stronger foundation for learning and growth.",
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

function Paragraph({ children }) {
  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{children}</p>;
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
        <a href="/exam-performance-pressure/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <BookOpen className="h-4 w-4 text-[#7835A4]" /> Exam & Performance Pressure Support
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

function TeenConfidenceEmotionalWellbeingPage() {
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

    document.title = "Teen Confidence & Emotional Wellbeing Support in India | Self-Esteem Support | Manovaidya";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Teen Confidence & Emotional Wellbeing Support in India? Learn about self-esteem, confidence challenges, emotional resilience and family guidance through the Neuro-Ayurveda approach at Manovaidya.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/teen-confidence-emotional-wellbeing/`;

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
                  href="tel:+917823894080"
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
                  alt="Teen Confidence and Emotional Wellbeing Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Helping Teenagers Build Confidence, Emotional Resilience, Self-Belief & Healthy Emotional Wellbeing</h2>
            <Paragraph>Confidence plays an important role in how teenagers think, learn, communicate and respond to challenges. During adolescence, teenagers are constantly developing their identity, exploring new experiences and learning how they fit into the world around them.</Paragraph>
            <Paragraph>Many teenagers experience self-doubt, fear of judgement, low confidence or uncertainty about their abilities. These challenges can influence emotional wellbeing, academic growth, relationships and overall development.</Paragraph>
            <Paragraph>Parents often notice that their teenager has become hesitant, withdrawn or overly critical of themselves. Some teenagers avoid opportunities because they fear making mistakes, while others struggle with confidence despite having strong abilities and potential.</Paragraph>
            <Paragraph>At Manovaidya, we understand that confidence is not simply about speaking loudly or appearing outgoing. True confidence is closely connected to emotional wellbeing, self-belief, resilience and the ability to handle life's challenges in a balanced way.</Paragraph>
            <Paragraph>Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand emotional wellbeing while supporting confidence, resilience and long-term growth.</Paragraph>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="mb-2 text-[14px] font-bold text-[#3b2e45]">At Manovaidya, Teen Confidence & Emotional Wellbeing Support Focuses On:</h3>
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
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Teen Confidence & Emotional Wellbeing</h2>
            <Paragraph>Confidence is the belief that a person can learn, grow and handle challenges, even when situations feel difficult.</Paragraph>
            <Paragraph>During adolescence, teenagers experience rapid emotional, social and personal changes. They begin comparing themselves to peers, thinking more deeply about their future and developing a stronger sense of identity.</Paragraph>
            <Paragraph>Many families searching for Teen Confidence Support in India, Self-Esteem Support for Teenagers or Teen Emotional Wellbeing Support in India are often looking for a structured approach that helps teenagers develop confidence and emotional resilience.</Paragraph>
            <Paragraph>Confidence is not something that appears overnight.</Paragraph>
            <Paragraph>It develops through experiences, relationships, learning opportunities and emotional support.</Paragraph>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teenagers with healthy confidence are more likely to:</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Express their thoughts openly", "Try new experiences", "Learn from mistakes", "Build healthy relationships", "Manage challenges more effectively"].map((item) => (
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
            <Paragraph>Low confidence can appear in many different ways.</Paragraph>
            <Paragraph>Some teenagers openly express self-doubt, while others hide their struggles behind avoidance, perfectionism or withdrawal.</Paragraph>
            <Paragraph>Parents may notice changes in emotions, behaviour, academics and social interactions.</Paragraph>

            <div className="mt-5 space-y-5">
              {[
                { title: "Emotional Signs", Icon: HeartHandshake, items: ["Self-doubt", "Negative self-talk", "Fear of judgement", "Low self-esteem", "Increased emotional sensitivity", "Lack of self-belief"] },
                { title: "Behavioural Signs", Icon: Users, items: ["Avoiding challenges", "Reluctance to try new things", "Giving up easily", "Excessive perfectionism", "Fear of participation"] },
                { title: "Academic Signs", Icon: BookOpen, items: ["Lack of confidence despite ability", "Fear of making mistakes", "Avoiding difficult tasks", "Reduced participation in class", "Excessive worry about performance"] },
                { title: "Social Signs", Icon: Activity, items: ["Difficulty expressing opinions", "Social withdrawal", "Comparing themselves to others", "Fear of rejection", "Reduced social confidence"] },
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
            <Paragraph>The presence of one or two signs does not automatically indicate a significant concern. However, when low confidence begins affecting emotional wellbeing, relationships or daily functioning, it may deserve additional understanding and support.</Paragraph>
          </section>

          <section id="why-teenagers-struggle" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Struggle With Confidence</h2>
            <Paragraph>Confidence is influenced by many interconnected factors.</Paragraph>
            <Paragraph>Understanding these influences often helps parents respond more effectively.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Social Comparison", desc: "Teenagers frequently compare themselves with friends, classmates and social media content. Constant comparison may contribute to feelings of inadequacy and self-doubt." },
                { title: "Academic Pressure", desc: "Academic expectations can influence how teenagers view their abilities and self-worth. Repeated struggles or fear of failure may affect confidence." },
                { title: "Fear of Failure", desc: "Many teenagers avoid challenges because they worry about making mistakes or disappointing others." },
                { title: "Social Media Influence", desc: "Online platforms often present unrealistic standards of success, appearance and lifestyle. These comparisons may influence confidence and emotional wellbeing." },
                { title: "Peer Relationships", desc: "Friendships and social experiences play an important role during adolescence. Negative social experiences may affect confidence and self-esteem." },
                { title: "Family Expectations", desc: "Well-intentioned expectations can sometimes create pressure if teenagers feel they are unable to meet them." },
                { title: "Negative Experiences", desc: "Past criticism, failures, bullying or difficult experiences may influence how teenagers view themselves and their abilities." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
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
            <Paragraph>Understanding these effects often helps families recognize why confidence is such an important part of healthy development.</Paragraph>

            <div className="mt-5 space-y-4">
              {[
                { title: "Emotional Wellbeing", text: "Low confidence often affects emotional wellbeing. Teenagers may experience: Self-doubt, Negative thinking, Fear of judgement, Increased emotional sensitivity, Worry about making mistakes, Reduced self-belief. Over time, these feelings may influence how teenagers respond to everyday challenges and opportunities." },
                { title: "Academic Growth", text: "Many teenagers with low confidence underestimate their abilities. They may: Avoid answering questions, Hesitate to participate in class, Doubt their capabilities, Fear academic challenges, Avoid taking healthy risks. Even capable students may struggle to perform at their full potential when confidence is low." },
                { title: "Relationships & Social Confidence", text: "Confidence influences communication and relationships. Teenagers with low confidence may: Avoid expressing opinions, Fear rejection, Struggle in social situations, Find it difficult to make new friends, Compare themselves to others. Healthy confidence often helps teenagers develop stronger communication skills and healthier relationships." },
                { title: "Decision Making", text: "Teenagers regularly face decisions related to studies, friendships, activities and future goals. Low confidence may make decision-making more difficult. Many teenagers begin seeking constant reassurance because they fear making the wrong choice." },
                { title: "Motivation & Personal Growth", text: "Confidence and motivation are closely connected. Teenagers who believe in themselves are often more willing to: Try new experiences, Learn new skills, Accept challenges, Recover from setbacks. Low confidence may limit growth because teenagers stop believing that success is possible." },
                { title: "Future Development", text: "Confidence influences how teenagers approach opportunities later in life. Healthy confidence supports: Leadership, Communication, Career development, Independence, Emotional resilience. Building confidence during adolescence often creates a stronger foundation for adulthood." },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h3 className="text-[16px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">{text}</p>
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
                At Manovaidya, confidence is understood through a broader and more comprehensive perspective. Rather than focusing only on self-esteem or motivation, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, behaviour, resilience and overall development. The Neuro-Ayurveda Development System helps families better understand emotional wellbeing through five interconnected pillars.
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
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">{pillar.text}</p>
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
            <Paragraph>Parents play one of the most important roles in helping teenagers develop healthy confidence and emotional resilience.</Paragraph>
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
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
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
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
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
            <Paragraph>A structured assessment can help families better understand the factors influencing emotional wellbeing, confidence and overall development.</Paragraph>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <Paragraph>Choosing the right support system for confidence, self-esteem and emotional wellbeing can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps teenagers build confidence while maintaining emotional balance and resilience.</Paragraph>
            <Paragraph>At Manovaidya, our goal is not simply to focus on confidence alone. We help families understand the broader factors that may influence emotional wellbeing, self-belief, behaviour, motivation and overall development.</Paragraph>

            <h3 className="mb-4 mt-6 text-[16px] font-black text-[#17111f]">Families Choose Manovaidya Because Of:</h3>
            <div className="space-y-4">
              {[
                { title: "Structured Teen Confidence Assessment", desc: "Every teenager develops confidence differently. Understanding emotional, behavioural and lifestyle-related influences helps create a more personalized roadmap for growth and development." },
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand emotional wellbeing and confidence through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System" },
                { title: "Parent-Centred Guidance", desc: "Confidence building is not only about the teenager. Parents often play one of the most important roles in shaping self-belief, emotional resilience and healthy development." },
                { title: "Personalized Support", desc: "Every teenager experiences confidence challenges differently. Guidance is tailored according to individual strengths, challenges and developmental needs." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on emotional resilience, confidence, communication, self-belief and overall wellbeing rather than temporary motivation alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful growth often happens when teenagers and families work together with proper understanding and support." },
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

            <p className="mt-8 text-[15px] font-black leading-7 text-[#17111f]">Why Families Across India Connect With Manovaidya</p>
            <Paragraph>Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Confidence Support, Emotional Wellbeing Support and Teen Mental Wellness guidance through online and in-clinic consultations.</Paragraph>
            <Paragraph>Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Confidence Support, Self-Esteem Support and Teen Emotional Wellbeing guidance through online and in-clinic consultations.</Paragraph>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm" />
              <div>
                <h2 className="text-[18px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-black text-[#7835A4]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Many families searching for guidance regarding confidence, self-esteem, emotional wellbeing and personal development connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support.
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Through detailed assessment, individualized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing emotional wellbeing, confidence, resilience and long-term growth.
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
                <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">
                  Book Consultation
                </a>
                <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">
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
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
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

export default TeenConfidenceEmotionalWellbeingPage;

