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
  Briefcase,
  BatteryLow,
  Clock,
  Coffee,
  ClipboardList,
  BedDouble,
  Flower2
} from "lucide-react";

import heroImage from "../images/relationship-challenges-support-india.png";
import communicationImage from "../images/relationship-communication-support.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import trustImage from "../images/trust-issues-relationship.png";
import supportImage from "../images/healthy-relationships-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Challenges", id: "understanding-challenges" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes of Problems", id: "causes" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Building Relationships", id: "building-relationships" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Adult Mental Wellness", count: 15, Icon: HeartHandshake },
  { label: "Self-Esteem & Confidence", count: 12, Icon: Flower2 },
  { label: "Anxiety & Depression", count: 14, Icon: Brain },
  { label: "Stress & Burnout", count: 12, Icon: BatteryLow },
  { label: "Relationship Challenges", count: 9, Icon: Users },
  { label: "Neuro-Ayurveda", count: 10, Icon: Sparkles },
];

const highlights = [
  { label: "Relationship Problems", Icon: Users },
  { label: "Communication Difficulties", Icon: MessageCircle },
  { label: "Trust Issues", Icon: ShieldCheck },
  { label: "Emotional Distance", Icon: HeartHandshake },
  { label: "Frequent Arguments", Icon: Activity },
  { label: "Relationship Stress", Icon: BatteryLow },
];

const assessmentSteps = [
  {
    step: "Step 1",
    title: "Comprehensive Assessment",
    desc: "Understanding relationship concerns, communication patterns, emotional wellbeing, stress levels and lifestyle habits.",
    Icon: ClipboardList
  },
  {
    step: "Step 2",
    title: "Personalized Guidance",
    desc: "Providing individualized recommendations based on each person's emotional, behavioural and relationship needs.",
    Icon: BookOpen
  },
  {
    step: "Step 3",
    title: "Emotional Wellbeing Support",
    desc: "Helping individuals better understand communication, emotional regulation and healthier coping strategies.",
    Icon: HeartHandshake
  },
  {
    step: "Step 4",
    title: "Neuro-Ayurveda Development System",
    desc: "Applying the five-pillar framework to understand emotional wellbeing, behaviour, lifestyle and mind-body balance.",
    Icon: Sparkles
  },
  {
    step: "Step 5",
    title: "Progress Tracking & Follow-Up",
    desc: "Supporting individuals and families through structured follow-up, healthier communication patterns and long-term wellbeing.",
    Icon: ShieldCheck
  },
];

const neuroAyurvedaPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy relationships depend upon healthy emotional regulation. The Brain Nourishment System focuses on understanding factors that may influence: Emotional balance, Patience, Decision-making, Emotional awareness, Communication, Mental clarity. Supporting healthy brain function helps individuals respond to relationship situations with greater emotional stability.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Research increasingly highlights the relationship between physical wellbeing and emotional health. Many adults experiencing relationship stress also report: Digestive discomfort, Appetite changes, Reduced energy, Lifestyle imbalance. The Gut Response System focuses on understanding how physical wellbeing may influence emotional resilience.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Relationship behaviours often become repeated patterns. The Neural Network System focuses on understanding: Communication habits, Emotional reactions, Conflict responses, Trust patterns, Behavioural routines. Recognising these patterns helps individuals develop healthier ways of responding during emotionally challenging situations.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Daily environments also influence emotional wellbeing. Factors such as: Work pressure, Financial stress, Parenting responsibilities, Social expectations, Digital distractions may gradually affect communication and emotional connection. Understanding these influences helps individuals build healthier relationship habits.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Behaviour plays a major role in relationship health. Some individuals may develop patterns such as: Avoiding conversations, Becoming defensive, Constant criticism, Seeking reassurance, Emotional withdrawal, Silent treatment. Rather than judging these behaviours, this pillar focuses on understanding the emotional factors contributing to them and encouraging healthier communication.",
  },
];

const faqs = [
  {
    question: "1. What are the signs of an unhealthy relationship?",
    answer: "An unhealthy relationship may involve frequent arguments, poor communication, lack of trust, constant criticism, emotional distance, controlling behaviour or feeling emotionally unsafe. Some individuals may also feel unheard, unappreciated or anxious within the relationship. While every relationship faces occasional disagreements, persistent patterns that affect emotional wellbeing and daily life may indicate that additional support or guidance could be beneficial."
  },
  {
    question: "2. What causes relationship problems?",
    answer: "Relationship problems usually develop because of multiple factors rather than a single event. Common causes include poor communication, trust issues, unresolved conflicts, work stress, financial pressure, parenting responsibilities, different expectations and mental health challenges such as anxiety or depression. Understanding the underlying causes is an important step towards improving communication and building healthier relationships."
  },
  {
    question: "3. How can I improve communication in my relationship?",
    answer: "Healthy communication begins with listening as much as speaking. Expressing thoughts honestly, respecting each other's perspectives, avoiding blame and choosing the right time for important conversations can improve understanding. Regular communication, empathy and patience often strengthen emotional connection. If communication difficulties continue over time, professional guidance may help identify unhealthy patterns and develop healthier ways of interacting."
  },
  {
    question: "4. Can relationship problems affect mental health?",
    answer: "Yes. Ongoing relationship challenges may affect emotional wellbeing and can contribute to increased stress, anxiety, sadness, sleep difficulties or reduced confidence in some individuals. Emotional conflict at home may also influence work performance and overall quality of life. Addressing relationship concerns early may support both healthier relationships and improved mental wellbeing."
  },
  {
    question: "5. What are trust issues in a relationship?",
    answer: "Trust issues refer to ongoing difficulty believing that a partner will be honest, reliable or emotionally supportive. These concerns may develop after past experiences, repeated disappointments, poor communication or unresolved conflicts. Trust issues can lead to overthinking, reassurance-seeking, jealousy or emotional distance. Rebuilding trust usually requires open communication, consistency and mutual effort."
  },
  {
    question: "6. Why do couples argue so often?",
    answer: "Couples often argue because of differences in expectations, communication styles, financial concerns, parenting responsibilities, work stress or unresolved emotional issues. Frequent arguments do not always mean a relationship is unhealthy, but repeated conflicts without healthy resolution may increase emotional distance. Understanding the underlying reasons behind disagreements can help couples develop more constructive communication patterns."
  },
  {
    question: "7. Can stress affect relationships?",
    answer: "Yes. Stress from work, finances, health concerns or family responsibilities may reduce patience, increase irritability and make communication more difficult. Individuals experiencing chronic stress may become emotionally withdrawn or react more strongly during disagreements. Managing stress effectively often supports healthier communication and stronger emotional connections within relationships."
  },
  {
    question: "8. How can I rebuild trust in a relationship?",
    answer: "Rebuilding trust usually takes time, consistency and honest communication. Being transparent, accepting responsibility where appropriate, respecting boundaries and following through on commitments may gradually strengthen trust. Both individuals often need patience and willingness to understand each other's perspectives. When trust has been deeply affected, professional guidance may help support healthier communication and relationship rebuilding."
  },
  {
    question: "9. What are the signs of emotional distance in a relationship?",
    answer: "Emotional distance may develop gradually and often includes reduced communication, lack of emotional intimacy, feeling disconnected, avoiding meaningful conversations or spending less quality time together. Some individuals may feel lonely despite being in a relationship. Recognising these signs early allows couples to address communication challenges before emotional disconnection becomes more significant."
  },
  {
    question: "10. Can relationship problems cause anxiety or depression?",
    answer: "Relationship difficulties may contribute to emotional stress and can occur alongside anxiety or depression in some individuals. Ongoing conflicts, uncertainty, emotional distance or lack of support may affect mood, confidence and overall emotional wellbeing. Because emotional health and relationships influence one another, addressing both together may provide a more complete understanding of the situation."
  },
  {
    question: "11. How can couples manage relationship stress?",
    answer: "Couples can often reduce relationship stress by communicating openly, listening without interrupting, spending quality time together, managing daily stress, respecting boundaries and working together to solve problems. Small, consistent efforts to understand each other's needs often strengthen emotional connection. If relationship stress continues affecting daily life, professional guidance may provide additional support."
  },
  {
    question: "12. Can professional guidance help relationship challenges?",
    answer: "Yes. Professional guidance may help individuals and couples better understand communication patterns, emotional responses, conflict resolution and relationship dynamics. Depending on individual needs, support may include psychological guidance, lifestyle recommendations and strategies to improve communication and emotional wellbeing. The most appropriate approach varies according to each relationship's unique circumstances."
  },
  {
    question: "13. How can couples improve emotional connection?",
    answer: "Emotional connection often grows through honest communication, empathy, mutual respect and spending meaningful time together. Expressing appreciation, listening actively, supporting each other during difficult situations and maintaining healthy boundaries may strengthen relationships over time. Consistent daily efforts are often more valuable than occasional grand gestures."
  },
  {
    question: "14. How does Manovaidya support relationship wellbeing?",
    answer: "At Manovaidya, support begins with understanding the individual and the relationship rather than focusing only on conflicts. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand communication patterns, emotional wellbeing, lifestyle habits and behavioural factors that may influence relationships. Our goal is to support healthier communication, stronger emotional connection and long-term relationship wellbeing through a holistic and personalised approach."
  },
  {
    question: "15. When should I seek professional guidance for relationship challenges?",
    answer: "You should consider seeking professional guidance if communication problems, trust issues, emotional distance or recurring conflicts continue for several weeks and begin affecting your emotional wellbeing, family life, work or daily functioning. Persistent relationship stress should not be ignored. At Manovaidya, structured assessments help identify contributing factors and provide personalised guidance to support healthier relationships, emotional wellbeing and long-term family harmony."
  }
];

function SidebarCard({ children, className = "", id = "" }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AdultRelationshipChallengesSupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showNeuroPillars, setShowNeuroPillars] = React.useState(false);

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
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
                <span>/</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Relationship Challenges Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Relationship Challenges & Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Relationship Challenges & Emotional Wellbeing Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Build Healthier Relationships, Better Communication & Emotional Wellbeing
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Assessment
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
                    <p className="text-[12px] font-bold text-[#75677d]">May 30, 2025 · 12 min read</p>
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
                  alt="Relationship Challenges and Emotional Wellbeing Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Relationships are an important part of emotional wellbeing. Whether it is a relationship with a spouse, partner, family member or someone close to you, healthy relationships often provide emotional support, understanding and a sense of security.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every relationship experiences disagreements from time to time. Differences in opinions, misunderstandings and occasional conflicts are a natural part of human relationships. In most situations, these challenges can be resolved through healthy communication, mutual respect and understanding.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when misunderstandings become frequent, communication breaks down or emotional distance continues to grow, relationship challenges may begin affecting both emotional wellbeing and daily life. Individuals may start feeling unheard, disconnected, anxious or emotionally exhausted, making it difficult to maintain healthy personal and professional relationships.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults silently struggle with relationship difficulties because they are unsure whether their experiences are "normal" or whether they should seek guidance. Some continue living with unresolved conflicts for years, while others find themselves repeatedly facing similar relationship patterns in different stages of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that relationship challenges are not simply about disagreements. They often involve emotional wellbeing, communication patterns, stress, self-esteem, trust and behavioural responses that influence how individuals connect with others.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help adults better understand relationship challenges, emotional wellbeing and the multiple factors that influence healthy relationships.
            </p>
            
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Relationship Support Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="understanding-challenges" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Relationship Challenges</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every relationship goes through different phases. Differences in personalities, expectations, responsibilities and life experiences naturally influence how people interact with one another.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Healthy relationships are not relationships without disagreements. Instead, they are relationships where individuals are able to communicate openly, respect each other's perspectives and work together to resolve difficulties.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Relationship challenges arise when these healthy patterns begin breaking down. Poor communication, unresolved conflicts, emotional distance or repeated misunderstandings may gradually create frustration, loneliness and emotional stress.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults searching for Relationship Challenges Support in India, Relationship Problems, Trust Issues, Communication Problems or Relationship Stress are looking for answers because these difficulties have started affecting their emotional wellbeing, confidence or quality of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding these challenges is the first step towards building healthier and more fulfilling relationships.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">Healthy Relationship vs Relationship Challenges</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Not every disagreement means a relationship is unhealthy.
            </p>
            
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Healthy relationships usually include:</h4>
                <ul className="space-y-1.5 mt-2">
                  {["Open communication", "Mutual respect", "Emotional support", "Healthy boundaries", "Shared responsibility", "Trust", "Constructive conflict resolution"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Relationship challenges may become more noticeable when individuals experience:</h4>
                <ul className="space-y-1.5 mt-2">
                  {["Constant misunderstandings", "Frequent arguments", "Difficulty expressing emotions", "Emotional distance", "Lack of trust", "Avoiding communication", "Feeling unheard or unappreciated"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Recognising these patterns early can help prevent small concerns from becoming long-term relationship difficulties.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Relationship Challenges</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Relationship difficulties can appear in many different ways. Some people notice emotional changes, while others experience communication problems or behavioural changes.
            </p>

            <img src={communicationImage} alt="Communication challenges in relationships and emotional wellbeing" className="w-full mt-4 h-[350px] rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Many adults experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Feeling emotionally disconnected", "Loneliness despite being in a relationship", "Frustration", "Anger", "Resentment", "Feeling misunderstood", "Emotional exhaustion"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">These emotions may gradually reduce relationship satisfaction and overall emotional wellbeing.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Communication Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Healthy communication is the foundation of every relationship. Relationship challenges may include:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Frequent misunderstandings", "Difficulty listening", "Constant criticism", "Blaming each other", "Defensive communication", "Avoiding important conversations"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">When communication breaks down, even small disagreements may become larger conflicts.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Behavioural Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Some individuals may notice:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Frequent arguments", "Silent treatment", "Emotional withdrawal", "Avoiding spending time together", "Difficulty resolving conflicts", "Repeated trust issues"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">Over time, these patterns may increase emotional distance between partners or family members.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Psychological Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Relationship challenges may also influence emotional wellbeing. Many adults experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Overthinking", "Anxiety", "Fear of rejection", "Jealousy", "Low confidence", "Constant worry about the relationship"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">These emotional experiences may begin affecting work, sleep and daily functioning.</p>
              </div>
            </div>
          </section>

          <section id="causes" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Relationship Challenges?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Relationship difficulties usually develop because of multiple interacting factors rather than one single event. Some of the most common contributing factors include:
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Poor Communication", text: "Misunderstandings often begin when individuals struggle to express their thoughts, emotions or expectations clearly." },
                { title: "Stress", text: "Work pressure, financial concerns, parenting responsibilities and health issues may increase emotional stress and reduce patience within relationships." },
                { title: "Trust Issues", text: "Past experiences, repeated disappointments or unresolved conflicts may gradually affect trust between individuals." },
                { title: "Different Expectations", text: "Partners may have different expectations regarding communication, responsibilities, finances or future goals. When these expectations remain unspoken, misunderstandings often increase." },
                { title: "Emotional Distance", text: "Busy lifestyles, work commitments and ongoing stress may gradually reduce emotional connection between partners." },
                { title: "Mental Health Challenges", text: "Conditions such as anxiety, depression, chronic stress or low self-esteem may influence communication, emotional regulation and relationship satisfaction." },
                { title: "Childhood Experiences", text: "Early family experiences often influence how individuals communicate, manage conflict and build relationships during adulthood." }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h3 className="text-[15px] font-black text-[#21142d]">{item.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Early Understanding Matters</h3>
              <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Many couples believe relationship problems will automatically improve with time. However, unresolved communication difficulties, trust issues and emotional distance may gradually become more difficult to manage if left unaddressed. Understanding these patterns early helps individuals improve communication, strengthen emotional connection and build healthier long-term relationships before these difficulties begin affecting emotional wellbeing, family life and overall quality of life.
              </p>
            </div>
          </section>

          <section id="health-impact" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Relationship Challenges Can Affect Mental Health</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Relationships and mental health are closely connected. When relationships are healthy, they often provide emotional support, comfort and a sense of security. However, ongoing conflicts, poor communication or emotional distance may gradually affect emotional wellbeing and overall quality of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many adults continue managing relationship difficulties for months or even years without realising how deeply these challenges are influencing their thoughts, emotions and behaviour. Understanding this connection is an important step towards improving both relationship health and emotional wellbeing.
            </p>
            
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Emotional Wellbeing",
                  desc: "Relationship difficulties often affect emotional health before they affect anything else. Over time, these emotions may reduce overall life satisfaction and increase emotional stress. Many adults experience:",
                  list: ["Constant worry about the relationship", "Feeling emotionally exhausted", "Irritability", "Sadness", "Feeling unappreciated", "Loneliness despite being with someone", "Difficulty feeling emotionally connected"]
                },
                {
                  title: "Anxiety & Overthinking",
                  desc: "Relationship uncertainty often leads to excessive thinking. These repetitive thoughts may increase emotional distress and make it difficult to remain present in everyday life. Some individuals repeatedly wonder:",
                  list: ["\"Did I say something wrong?\"", "\"Does my partner still care about me?\"", "\"Why are they behaving differently?\"", "\"What if this relationship ends?\""]
                },
                {
                  title: "Confidence & Self-Esteem",
                  desc: "Relationship challenges can gradually influence the way individuals see themselves. Over time, these experiences may reduce confidence and emotional resilience. Some people begin to:",
                  list: ["Doubt their worth", "Feel \"not good enough\"", "Depend heavily on others for validation", "Fear rejection", "Avoid expressing their needs"]
                },
                {
                  title: "Sleep & Physical Wellbeing",
                  desc: "Emotional stress within relationships may also affect physical wellbeing. Healthy sleep and emotional wellbeing often support healthier communication and emotional regulation. Some adults notice:",
                  list: ["Difficulty falling asleep", "Restless sleep", "Fatigue", "Reduced appetite", "Emotional exhaustion", "Difficulty concentrating"]
                },
                {
                  title: "Career & Productivity",
                  desc: "Relationship stress does not remain limited to personal life. When emotional energy is constantly directed towards unresolved relationship concerns, other areas of life may also begin to suffer. Many individuals notice:",
                  list: ["Poor concentration at work", "Reduced motivation", "Increased absenteeism", "Difficulty making decisions", "Lower productivity", "Emotional distraction throughout the day"]
                },
                {
                  title: "Family Life",
                  desc: "Relationship challenges may influence the overall family environment. Improving communication between adults often creates a healthier emotional environment for the entire family. Ongoing conflict can affect:",
                  list: ["Parent-child communication", "Family routines", "Emotional security", "Household harmony", "Shared decision-making"]
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="text-[16px] font-black leading-5 text-[#21142d] mb-2">{item.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{item.desc}</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc list-inside text-[13px] font-semibold text-[#5a5063]">
                    {item.list.map((li, index) => <li key={index}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            
            <img src={trustImage} alt="Trust issues and relationship problems in adults" className="w-full mt-5 h-[320px] rounded-lg object-cover shadow-[0_8px_22px_rgba(58,31,90,0.06)]" />
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Relationship Wellbeing</h2>
              </div>
            </div>
            
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, relationship challenges are understood through a broader perspective. Rather than focusing only on disagreements, we aim to understand the emotional, behavioural and lifestyle factors that influence the way individuals communicate, respond to stress and build relationships.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The Neuro-Ayurveda Development System helps individuals better understand relationship wellbeing through five interconnected pillars.
            </p>
            
            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for relationship wellbeing"
              className="mt-5 w-full h-auto object-contain max-h-[400px] mb-5 rounded-lg border border-[#eadff1] bg-white shadow-sm p-4"
            />
            
            <button
              type="button"
              onClick={() => setShowNeuroPillars((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.18)] transition hover:bg-[#5f2785]"
              aria-expanded={showNeuroPillars}
            >
              {showNeuroPillars ? "Show Less" : "Read More"}
            </button>
            
            {showNeuroPillars && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {neuroAyurvedaPillars.map(({ title, text, Icon }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] last:sm:col-span-2"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <h3 className="text-[15px] font-black leading-5 text-[#21142d]">{title}</h3>
                    </div>
                    <p className="text-[13px] font-semibold leading-6 text-[#5a5063]">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section id="building-relationships" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Adults Can Build Healthier Relationships</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Healthy relationships require continuous effort, understanding and mutual respect. Although every relationship is different, certain habits often contribute to stronger emotional connections.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Communicate Openly: Express thoughts and emotions honestly while also listening carefully to your partner's perspective.",
                  "Practice Active Listening: Healthy communication is not only about speaking but also about understanding. Giving full attention during conversations often reduces misunderstandings.",
                  "Respect Healthy Boundaries: Healthy boundaries create mutual respect while allowing both individuals to maintain their identity and emotional wellbeing.",
                  "Manage Stress Together: Daily stress affects relationships. Finding healthy ways to manage stress together may strengthen emotional connection and reduce unnecessary conflicts.",
                  "Appreciate Small Efforts: Regular appreciation, kindness and gratitude often strengthen relationships more than occasional grand gestures.",
                  "Spend Quality Time Together: Meaningful conversations and shared experiences help maintain emotional closeness even during busy phases of life."
                ].map((item, idx) => {
                  const [boldText, normalText] = item.split(': ');
                  return (
                    <li key={idx} className="flex gap-2 text-[14px] font-semibold text-[#51465a]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#7835A4]" />
                      <span><strong className="text-[#21142d]">{boldText}:</strong> {normalText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section id="how-we-support" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div className="flex items-start gap-3">
                <div>
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    How Manovaidya Supports Adults & Couples
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    At Manovaidya, support begins with understanding the individual and the relationship dynamics rather than focusing only on conflicts. A structured, step-by-step process designed for long-term growth and real change.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-start lg:justify-between">
                {assessmentSteps.map(({ step, title, desc, Icon }, index) => (
                  <React.Fragment key={title}>
                    <div className="flex min-h-[94px] flex-col items-center justify-start text-center">
                      <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7d8] bg-[#f7fbf5] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-black leading-4 text-[#2f2636]">{step}: {title}</span>
                      <span className="mt-1 max-w-[128px] text-[10px] font-semibold leading-4 text-[#3b2e45]">
                        {desc}
                      </span>
                    </div>
                    {index < assessmentSteps.length - 1 && (
                      <ArrowRight className="mx-1 mt-3 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="mx-auto mt-6 max-w-[560px] rounded-md bg-[#f1f5ef] px-4 py-2 text-center text-[12px] font-black leading-5 text-[#5b5360]">
                Our goal is clarity, not just temporary relief. We help you understand your relationship dynamics deeply.
              </div>
            </div>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">When Should You Consider Professional Guidance?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">You may consider seeking professional guidance if you experience:</p>
            
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Frequent relationship conflicts",
                  "Ongoing communication difficulties",
                  "Persistent trust issues",
                  "Emotional distance",
                  "Relationship stress affecting mental health",
                  "Constant arguments",
                  "Difficulty resolving conflicts",
                  "Relationship concerns affecting work, sleep or family life"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured assessment can help identify the emotional, behavioural and lifestyle factors influencing relationship difficulties while creating a personalised roadmap towards healthier communication and emotional wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help individuals and couples move from misunderstanding, emotional distance and repeated conflict towards healthier communication, stronger emotional connection and long-term relationship wellbeing.
            </p>
          </section>

          <section id="why-choose-us" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Why Adults Across India Choose Manovaidya</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Healthy relationships are built on understanding, communication and emotional connection. However, when misunderstandings, trust issues or ongoing conflicts continue for a long time, they may begin affecting both the relationship and an individual's emotional wellbeing.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Many adults spend months or even years trying to solve relationship problems on their own. Some avoid difficult conversations, while others repeatedly experience the same communication patterns without understanding why. Over time, these unresolved challenges may increase emotional stress, reduce confidence and affect family life.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, we believe that healthy relationships begin with understanding the individual, not simply resolving conflicts. Our approach focuses on identifying the emotional, behavioural and lifestyle factors that influence relationship wellbeing and communication.
              </p>
              <div className="mt-4 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Our support focuses on:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    "Comprehensive Relationship Assessment",
                    "Neuro-Ayurveda Development System",
                    "Personalized Guidance",
                    "Holistic Mind-Body Perspective",
                    "Long-Term Relationship Wellbeing",
                    "Ongoing Support & Progress Tracking"
                  ].map(item => (
                    <li key={item} className="flex gap-2 text-[12.5px] font-semibold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Adults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Relationship Challenges Support, Communication Guidance and Emotional Wellbeing Support through online and in-clinic consultations.
              </p>
            </div>
            <img
              src={supportImage}
              alt="Support for relationship challenges and emotional wellbeing"
              className="w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">Mental Health & Wellness Specialist</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Based in Delhi NCR, Dr. Ankush Garg supports individuals and couples from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and holistic approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Many adults experiencing relationship stress, trust issues, communication difficulties or emotional distance seek guidance to better understand the factors influencing their emotional wellbeing and relationships. Through structured assessment, personalized guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps individuals and families better understand emotional wellbeing while supporting healthier relationships through the Neuro-Ayurveda Development System.
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
              <h2 className="text-[24px] font-black">Struggling With Relationship Challenges or Emotional Distance?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Book a structured assessment and personalized guidance session with the Manovaidya team to better understand relationship challenges, communication patterns and your emotional wellbeing.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Why Trust Manovaidya?</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Structured Neuro-Ayurveda Development System",
                    "Personalized Assessment Before Recommendations",
                    "Online & In-Clinic Consultations Across India",
                    "Holistic Mind-Body Approach",
                    "Guidance by Dr. Ankush Garg",
                    "Focus on Long-Term Emotional Wellbeing & Healthy Relationships"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Take the First Step Towards Healthier Relationships</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Whether you are experiencing communication problems, trust issues, emotional distance or recurring relationship conflicts, our team is here to help you understand your concerns and explore personalized support.</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+917823894080"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                  >
                    Take Mental Health Assessment
                  </a>
                  <a
                    href="/book-consultation"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#8e45bb]"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Schema generation */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "name": "Relationship Challenges Support in India",
                "description": "Looking for Relationship Challenges Support in India? Learn about relationship problems, communication difficulties, trust issues, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.",
                "url": "https://manovaidya.com/relationship-challenges-support-india/"
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://manovaidya.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Adult Mental Health Care",
                    "item": "https://manovaidya.com/adult-mental-health-care/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Relationship Challenges Support",
                    "item": "https://manovaidya.com/relationship-challenges-support-india/"
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Physician",
                "name": "Dr. Ankush Garg",
                "url": "https://manovaidya.com/dr-ankush-garg/",
                "image": "https://manovaidya.com/images/doctorimg-2.jpeg",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delhi NCR",
                  "addressCountry": "IN"
                },
                "medicalSpecialty": "Psychiatry"
              })
            }}
          />

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

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a personalized plan for your emotional wellbeing from our experts.
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
                Subscribe to expert articles, wellbeing tips and Manovaidya updates.
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

export default AdultRelationshipChallengesSupportIndiaPage;

