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
    answer: "Excessive screen use can become a concern when it starts affecting emotional wellbeing, sleep, concentration, relationships, academic performance or daily functioning. Technology itself is not the problem. The concern arises when screen use becomes difficult to control and begins replacing healthy routines and real-world experiences.",
  },
  {
    question: "5. Can excessive screen time affect mental health?",
    answer: "Excessive screen use may influence emotional wellbeing, mood regulation, stress levels and social interactions. Some teenagers may experience increased irritability, emotional dependence on digital activities, reduced social engagement or difficulty managing emotions. Maintaining a balanced relationship with technology often supports healthier emotional development.",
  },
  {
    question: "6. Does screen addiction affect concentration and studies?",
    answer: "Yes. Excessive screen use may affect attention, concentration, study habits and academic performance. Constant digital stimulation can make it difficult for some teenagers to maintain focus on tasks that require sustained attention. Healthy routines and balanced screen habits often support better learning and productivity.",
  },
  {
    question: "7. Why is my teenager always on their phone?",
    answer: "Teenagers often use phones for communication, entertainment, social media, gaming, studying and staying connected with friends. However, excessive use may sometimes be linked to boredom, stress, loneliness, habit formation or emotional challenges. Understanding the reason behind the behaviour often helps parents respond more effectively.",
  },
  {
    question: "8. Can social media addiction affect emotional wellbeing?",
    answer: "Social media can sometimes contribute to comparison, fear of missing out, unrealistic expectations and emotional dependence on online validation. Excessive use may influence self-esteem, confidence and overall emotional wellbeing. Healthy digital habits often help teenagers maintain a more balanced perspective.",
  },
  {
    question: "9. How does gaming addiction affect teenagers?",
    answer: "Excessive gaming may influence sleep patterns, academic performance, physical activity, social interaction and emotional wellbeing. Some teenagers may become highly dependent on gaming for entertainment or emotional escape. Understanding the underlying reasons for excessive gaming often helps families support healthier habits and balance.",
  },
  {
    question: "10. Can excessive screen time affect sleep?",
    answer: "Yes. Screen exposure, especially before bedtime, may interfere with healthy sleep patterns. Late-night gaming, social media use or continuous device engagement can make it difficult for teenagers to fall asleep and maintain quality rest. Healthy sleep habits often support emotional wellbeing, concentration and daily functioning.",
  },
  {
    question: "11. Is it ADHD or too much screen time?",
    answer: "Some signs of excessive screen use, such as reduced attention, distractibility or difficulty focusing, may appear similar to ADHD. However, ADHD and screen-related difficulties are not the same. A structured assessment can help families better understand the factors influencing attention, behaviour and concentration rather than making assumptions based on symptoms alone.",
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
    answer: "Healthy limits can be beneficial, but limits alone are not always enough. Teenagers often respond better when digital boundaries are combined with meaningful alternatives such as sports, hobbies, family activities and social engagement. The focus should be on creating balance rather than completely eliminating technology.",
  },
  {
    question: "15. When should parents seek professional guidance?",
    answer: "Parents may consider seeking guidance when screen use begins affecting sleep, concentration, academic performance, emotional wellbeing, relationships or daily functioning. Persistent dependency, irritability when devices are removed, social withdrawal or significant behavioural changes may indicate the need for additional support. A structured assessment can help families better understand the factors influencing screen-related challenges and overall wellbeing.",
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
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">
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
                    <a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">
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

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Helping Teenagers Develop Healthier Digital Habits, Better Focus & Emotional Wellbeing</h2>
            <Paragraph>Technology has become an important part of modern life. Smartphones, social media, online gaming, video content and digital learning platforms offer many benefits. However, excessive screen use may sometimes affect emotional wellbeing, concentration, sleep, behaviour and daily functioning.</Paragraph>
            <Paragraph>Many parents notice that their teenager spends long hours on mobile phones, social media, gaming platforms or digital entertainment. They may struggle to disconnect from screens, become irritable when devices are removed or lose interest in offline activities.</Paragraph>
            <Paragraph>At Manovaidya, we understand that screen dependency is not simply about technology use. Emotional wellbeing, lifestyle habits, social experiences, confidence and daily routines often influence how teenagers interact with digital devices.</Paragraph>
            <Paragraph>Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand screen-related challenges while supporting healthier habits, emotional wellbeing and balanced development.</Paragraph>

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
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Screen Addiction in Teenagers</h2>
            <Paragraph>Technology is now deeply integrated into education, communication and entertainment.</Paragraph>
            <Paragraph>While screen use is not automatically harmful, difficulties may arise when digital activities begin affecting emotional wellbeing, sleep, relationships, academics or daily responsibilities.</Paragraph>
            <Paragraph>Many families searching for Screen Addiction Treatment in India, Mobile Addiction in Teenagers or Teen Digital Wellbeing Support are often looking for a structured approach that helps them better understand their teenager's relationship with technology.</Paragraph>
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
            <Paragraph>The challenge often begins when screen use becomes difficult to regulate and starts replacing healthy daily activities.</Paragraph>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Screen Addiction</h2>
            <div className="mt-5 space-y-5">
              {[
                { title: "Emotional Signs", Icon: HeartHandshake, items: ["Irritability when devices are removed", "Mood changes", "Increased frustration", "Emotional dependence on digital activities"] },
                { title: "Behavioural Signs", Icon: MonitorSmartphone, items: ["Excessive screen time", "Constant checking of devices", "Difficulty reducing usage", "Avoiding offline activities", "Reduced family interaction"] },
                { title: "Academic Signs", Icon: BookOpen, items: ["Difficulty concentrating", "Reduced academic performance", "Procrastination", "Reduced productivity"] },
                { title: "Physical Signs", Icon: Eye, items: ["Sleep disturbances", "Fatigue", "Eye strain", "Reduced physical activity"] },
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
            <Paragraph>The presence of occasional screen overuse does not automatically indicate addiction. However, when screen use begins affecting multiple areas of life, additional understanding and support may be beneficial.</Paragraph>
          </section>

          <section id="why-screen-dependency" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Develop Screen Dependency</h2>
            <Paragraph>Many parents assume teenagers use screens excessively simply because they lack discipline.</Paragraph>
            <Paragraph>In reality, digital dependency is often influenced by multiple factors.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Social Connection", desc: "Teenagers often use digital platforms to stay connected with friends and peers." },
                { title: "Entertainment & Instant Rewards", desc: "Gaming, videos and social media provide immediate stimulation and rewards that may encourage repeated use." },
                { title: "Academic Demands", desc: "Many educational activities now require regular screen use." },
                { title: "Emotional Escape", desc: "Some teenagers may use screens to avoid boredom, stress, loneliness or emotional difficulties." },
                { title: "Social Media Influence", desc: "Social comparison and online engagement can increase the desire to remain connected." },
                { title: "Lifestyle Imbalance", desc: "Lack of structured routines, physical activity or offline interests may contribute to excessive screen use." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Excessive Screen Use Can Affect Teenagers</h2>
            <div className="mt-5 space-y-4">
              {[
                { title: "Emotional Wellbeing", text: "Increased irritability, Emotional dependence, Mood fluctuations, Reduced emotional balance." },
                { title: "Concentration & Attention", text: "Excessive digital stimulation may affect focus, attention and learning habits." },
                { title: "Sleep Quality", text: "Late-night device use may interfere with healthy sleep patterns." },
                { title: "Academic Performance", text: "Reduced concentration and increased procrastination may affect studies." },
                { title: "Relationships", text: "Screen dependency may reduce face-to-face interaction and family engagement." },
                { title: "Physical Wellbeing", text: "Reduced physical activity and prolonged screen exposure may influence overall wellbeing." },
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
              <h2 className="text-[18px] font-black leading-snug text-[#5d268d]">The Neuro-Ayurveda Approach to Teen Screen Addiction</h2>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#51465a]">
                At Manovaidya, screen-related challenges are understood through a broader and more comprehensive perspective. The focus is not simply on reducing screen time, but on understanding emotional wellbeing, attention, lifestyle habits, behaviour, routines and family patterns that may influence digital dependency.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { title: "Brain Nourishment System", text: "This pillar focuses on attention, concentration, learning readiness, emotional regulation and healthy cognitive functioning that may influence screen time management.", Icon: Brain },
                { title: "Gut Response System", text: "Lifestyle balance, eating patterns, energy levels, sleep routines and daily functioning may influence how teenagers engage with screens.", Icon: Utensils },
                { title: "Neural Network System", text: "Digital habits are often shaped by repeated reward patterns, thought patterns, attention habits and emotional responses.", Icon: Sparkles },
                { title: "Sensory Integration System", text: "Fast-moving content, gaming stimulation, social media scrolling and digital overload may influence sensory and emotional balance.", Icon: Waves },
                { title: "Behaviour Guidance System", text: "This pillar helps families understand avoidance, irritability, dependency, resistance and screen-related behaviour issues with a supportive plan.", Icon: ShieldCheck },
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
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for screen addiction support" className="max-h-full max-w-full rounded-lg object-contain object-center" />
            </div>
          </section>

          <section id="how-parents-can-help" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Help Reduce Screen Dependency</h2>
            <Paragraph>Parents can support healthier screen habits by creating structure, encouraging offline engagement, maintaining consistent routines and understanding the emotional reasons behind excessive digital use.</Paragraph>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Create Screen-Free Routines", desc: "Screen-free meals, bedtime boundaries and predictable daily schedules can support better self-regulation." },
                { title: "Encourage Offline Activities", desc: "Sports, hobbies, family time and peer interaction provide meaningful alternatives to digital stimulation." },
                { title: "Avoid Constant Conflict", desc: "Calm communication often works better than repeated arguments, sudden restrictions or punishment alone." },
                { title: "Support Sleep Habits", desc: "Reducing late-night device use can help improve sleep quality, emotional wellbeing and focus." },
                { title: "Model Balanced Technology Use", desc: "Teenagers often respond better when the whole family follows healthy digital boundaries." },
                { title: "Understand Emotional Triggers", desc: "Stress, loneliness, boredom and social pressure can all influence excessive screen time." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                </div>
              ))}
            </div>
            <img src={parentGuidanceImage} alt="Parent guidance for teen screen addiction support" className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <Paragraph>At Manovaidya, support begins with understanding the teenager as a whole rather than focusing only on screen time.</Paragraph>
            <div className="mt-5 space-y-4">
              {[
                { title: "Step 1: Detailed Assessment", desc: "Understanding screen habits, mobile phone use, gaming patterns, social media dependency, sleep, attention, emotional wellbeing and family concerns." },
                { title: "Step 2: Personalized Guidance", desc: "Providing recommendations based on the teenager's habits, lifestyle, emotional needs and developmental concerns." },
                { title: "Step 3: Parent Guidance & Family Support", desc: "Helping parents create practical digital boundaries, supportive routines and healthier communication at home." },
                { title: "Step 4: Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to better understand attention, behaviour, emotional wellbeing and healthy digital habits." },
                { title: "Step 5: Progress Tracking & Follow-Up", desc: "Creating a structured roadmap that helps families monitor screen-related challenges and balanced development over time." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
                  <h4 className="text-[15px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
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
                { title: "Neuro-Ayurveda Development System", desc: "Our structured framework helps families understand screen-related challenges through five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System, Behaviour Guidance System" },
                { title: "Parent-Centred Guidance", desc: "Digital wellbeing is not only about the teenager. Parents often play a major role in shaping healthy technology habits and creating balanced routines." },
                { title: "Personalized Support", desc: "Every teenager experiences screen-related challenges differently. Guidance is tailored according to individual needs, habits and developmental concerns." },
                { title: "Long-Term Growth Focus", desc: "Our approach focuses on healthy digital habits, emotional wellbeing, attention, focus and balanced development rather than temporary restrictions alone." },
                { title: "Family-Oriented Approach", desc: "Meaningful progress often happens when teenagers and families work together with proper understanding and structured support." },
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
            <Paragraph>Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Screen Addiction Treatment, Mobile Addiction Support and Teen Digital Wellbeing guidance through online and in-clinic consultations.</Paragraph>
            <Paragraph>Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Screen Addiction Treatment, Mobile Addiction Support and Digital Wellbeing guidance through online and in-clinic consultations.</Paragraph>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm" />
              <div>
                <h2 className="text-[18px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-black text-[#7835A4]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System.</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">Many families searching for support regarding excessive screen use, mobile addiction, gaming dependency and digital wellbeing connect with Dr. Ankush Garg for structured assessment, personalized guidance and family-centred support.</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">Through detailed assessment, individualized recommendations, family guidance and regular follow-up, he helps families better understand the factors influencing attention, behaviour, emotional wellbeing and healthy development.</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.</p>
                <a href="/dr-ankush-garg/" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline">
                  Know more about Dr. Ankush Garg <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <p className="mt-2 text-[13px] font-bold text-[#75677d]">Final SEO FAQ Set</p>
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
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-6 sm:p-8">
              <h2 className="text-[22px] font-black leading-tight">Concerned About Your Teenager's Screen Habits?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">If your teenager is struggling with excessive mobile phone use, gaming dependency, social media overuse, sleep disturbances or reduced concentration, seeking clarity is often the first step.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">At Manovaidya, our team helps families better understand screen-related challenges through structured assessment, personalized guidance and family-centred support. Book a structured assessment and personalized guidance session with the Manovaidya team.</p>
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
                <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Consultation</a>
                <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Take Teen Wellness Assessment</a>
              </div>
            </div>
            <img src={ctaImage} alt="Teen digital wellbeing and screen addiction support" className="h-64 w-full object-cover object-center sm:h-80" />
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
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
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
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
  );
}

export default TeenScreenAddictionSupportIndiaPage;

