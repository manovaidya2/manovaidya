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
  ClipboardList
} from "lucide-react";
import heroImage from "../images/stress-burnout-support-india.png";
import symptomsImage from "../images/burnout-symptoms-adults.png";
import supportImage from "../images/emotional-wellbeing-burnout-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import neuroDiagramImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import RelatedPagesCard from "./RelatedPagesCard";
import BookConsultationButton from "../components/BookConsultationButton";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Stress", id: "understanding-stress" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes of Burnout", id: "causes" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Management", id: "management" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Adult Mental Wellness", count: 15, Icon: HeartHandshake },
  { label: "Stress & Burnout", count: 12, Icon: BatteryLow },
  { label: "Anxiety & Depression", count: 14, Icon: Brain },
  { label: "Sleep Disorders", count: 8, Icon: Clock },
  { label: "Work-Life Balance", count: 9, Icon: Briefcase },
  { label: "Neuro-Ayurveda", count: 10, Icon: Sparkles },
];

const burnoutHighlights = [
  { label: "Emotional Wellbeing", Icon: HeartHandshake },
  { label: "Workplace Stress", Icon: Briefcase },
  { label: "Physical Exhaustion", Icon: BatteryLow },
  { label: "Mental Clarity", Icon: Brain },
  { label: "Mind-Body Balance", Icon: Sparkles },
];

const assessmentSteps = [
  {
    step: "Step 1",
    title: "Comprehensive Assessment",
    desc: "Understanding emotional wellbeing, work demands, lifestyle habits, sleep patterns, daily routines and personal concerns.",
    Icon: ClipboardList
  },
  {
    step: "Step 2",
    title: "Personalized Guidance",
    desc: "Providing individualized recommendations based on each person's emotional, behavioural and lifestyle needs.",
    Icon: BookOpen
  },
  {
    step: "Step 3",
    title: "Emotional Wellbeing Support",
    desc: "Helping individuals better understand chronic stress, burnout and healthy coping strategies through a structured approach.",
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
    desc: "Creating a structured roadmap that helps individuals monitor progress and build healthier routines for long-term emotional wellbeing.",
    Icon: ShieldCheck
  },
];

const assessmentClarityItems = [
  { label: "Emotional Wellbeing", Icon: Activity },
  { label: "Work Demands", Icon: Briefcase },
  { label: "Lifestyle Habits", Icon: HeartHandshake },
  { label: "Sleep Patterns", Icon: Clock },
  { label: "Daily Routines", Icon: CheckCircle2 },
  { label: "Personal Concerns", Icon: Users }
];

const neuroAyurvedaPillars = [
  {
    title: "Pillar 1: Brain Nourishment System",
    Icon: Brain,
    text: "Healthy emotional resilience depends upon healthy brain functioning. The Brain Nourishment System focuses on understanding factors that may influence: Mental clarity, Emotional regulation, Concentration, Decision making, Stress response, Motivation. Supporting brain nourishment helps individuals better understand emotional wellbeing and mental performance.",
  },
  {
    title: "Pillar 2: Gut Response System",
    Icon: Utensils,
    text: "The relationship between gut health and emotional wellbeing is increasingly recognised. Many adults experiencing prolonged stress may also notice: Digestive discomfort, Appetite changes, Low energy, Lifestyle imbalance, Poor recovery. The Gut Response System focuses on understanding how physical wellbeing may influence emotional resilience and stress management.",
  },
  {
    title: "Pillar 3: Neural Network System",
    Icon: Sparkles,
    text: "Repeated experiences gradually shape thinking and behavioural patterns. The Neural Network System focuses on understanding: Stress responses, Habit formation, Thought patterns, Emotional reactions, Behavioural responses. Recognising these patterns often helps individuals develop healthier coping strategies over time.",
  },
  {
    title: "Pillar 4: Sensory Integration System",
    Icon: Waves,
    text: "Modern lifestyles expose adults to continuous stimulation from: Work demands, Mobile phones, Social media, Emails, Notifications, Constant multitasking. Excessive stimulation may reduce opportunities for mental recovery and contribute to emotional fatigue. Creating healthier environmental balance supports emotional wellbeing.",
  },
  {
    title: "Pillar 5: Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Behaviour often reflects underlying emotional experiences. Adults experiencing burnout may notice: Reduced motivation, Procrastination, Social withdrawal, Avoiding responsibilities, Irritability, Difficulty maintaining routines. Rather than focusing only on behaviour, this pillar encourages understanding the factors influencing these changes and building healthier behavioural patterns.",
  },
];

const faqs = [
  {
    question: "1. What are the first signs of burnout?",
    answer: "The first signs of burnout may include constant tiredness, emotional exhaustion, loss of motivation, difficulty concentrating, irritability and feeling overwhelmed by everyday responsibilities. Many people also notice reduced enthusiasm for work, decreased productivity or feeling mentally drained even after rest. Recognising these early signs is important because timely lifestyle changes and professional guidance may help prevent burnout from becoming more severe."
  },
  {
    question: "2. What are the physical symptoms of burnout?",
    answer: "Burnout can affect both emotional and physical wellbeing. Common physical symptoms may include persistent fatigue, headaches, muscle tension, poor sleep, digestive discomfort, body aches and low energy levels. Some individuals also experience frequent illnesses or difficulty recovering after a busy day. Since these symptoms may have different causes, a proper assessment can help identify the factors contributing to ongoing stress and exhaustion."
  },
  {
    question: "3. What are the 7 warning signs of stress?",
    answer: "Common warning signs of stress include feeling constantly overwhelmed, irritability, difficulty relaxing, poor concentration, disturbed sleep, physical fatigue and reduced motivation. Some people may also notice headaches, muscle tension or digestive discomfort. Occasional stress is a normal part of life, but persistent symptoms that begin affecting work, relationships or overall wellbeing should not be ignored."
  },
  {
    question: "4. What is the biggest cause of burnout?",
    answer: "Burnout usually develops because of prolonged stress rather than a single event. Common contributing factors include excessive workload, long working hours, poor work-life balance, ongoing emotional pressure, financial concerns, caregiving responsibilities and inadequate rest. When stress continues without enough recovery, it may gradually lead to emotional, mental and physical exhaustion."
  },
  {
    question: "5. How do you overcome stress and burnout?",
    answer: "Recovering from stress and burnout often requires a combination of healthy lifestyle changes and appropriate professional guidance. Prioritising sleep, maintaining regular physical activity, creating healthy work boundaries, taking regular breaks and building supportive relationships may all contribute to recovery. Because every individual's situation is different, understanding the underlying causes of stress is an important step towards long-term emotional wellbeing."
  },
  {
    question: "6. How can I recover from burnout without quitting my job?",
    answer: "Many people can begin recovering from burnout without leaving their job by improving work-life balance, setting healthy boundaries, taking regular breaks, prioritising sleep and seeking appropriate support. Small but consistent lifestyle changes often make a meaningful difference. If burnout continues despite these efforts, a professional assessment may help identify additional factors contributing to emotional exhaustion."
  },
  {
    question: "7. How do doctors diagnose burnout?",
    answer: "There is no single medical test for burnout. Doctors and mental health professionals usually evaluate symptoms, emotional wellbeing, work-related stress, lifestyle habits and how these challenges affect daily functioning. They may also assess whether other medical or mental health conditions could be contributing to similar symptoms. A structured assessment helps provide a clearer understanding of the individual's situation."
  },
  {
    question: "8. How can I check if I have burnout?",
    answer: "If you have been feeling emotionally exhausted, mentally drained, constantly tired or unmotivated for several weeks, it may be helpful to seek a professional assessment. Healthcare professionals use structured discussions and validated assessment tools to understand the severity of symptoms and identify the factors contributing to burnout. Early assessment often supports better long-term recovery."
  },
  {
    question: "9. Can burnout be serious?",
    answer: "Yes. If burnout is ignored, it may gradually affect emotional wellbeing, physical health, work performance, relationships and overall quality of life. Persistent burnout can reduce concentration, motivation, confidence and emotional resilience. Seeking support early may help prevent these challenges from becoming more severe and support healthier long-term wellbeing."
  },
  {
    question: "10. Is burnout a medical problem?",
    answer: "Burnout is widely recognised as an occupational phenomenon associated with chronic workplace stress that has not been successfully managed. Although it is not classified as a medical disease in itself, prolonged burnout can significantly affect emotional wellbeing, physical health and daily functioning. Persistent symptoms should be evaluated by a qualified healthcare professional to determine the most appropriate support."
  },
  {
    question: "11. Can burnout lead to anxiety or depression?",
    answer: "Long-term burnout and chronic stress may increase emotional vulnerability and may occur alongside anxiety or depression in some individuals. Ongoing emotional exhaustion, sleep disturbances, reduced motivation and persistent stress can significantly affect overall mental wellbeing. A comprehensive assessment helps understand the individual's symptoms and identify the most appropriate support."
  },
  {
    question: "12. What happens if burnout is ignored?",
    answer: "Ignoring burnout may allow emotional and physical exhaustion to continue building over time. It can affect work performance, concentration, relationships, sleep quality, motivation and overall wellbeing. Some individuals may also experience increased stress, emotional distress or reduced resilience. Recognising burnout early and seeking appropriate guidance may help prevent further difficulties."
  },
  {
    question: "13. Can people recover from burnout?",
    answer: "Yes. Many people recover from burnout with appropriate lifestyle changes, healthy recovery strategies and professional support when needed. Recovery often involves improving sleep, reducing ongoing stress, rebuilding healthy routines, strengthening emotional resilience and addressing the underlying factors contributing to burnout. Recovery is gradual and may differ from person to person."
  },
  {
    question: "14. How does Manovaidya support adults with stress and burnout?",
    answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on stress symptoms. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand emotional wellbeing, lifestyle influences, work-related stress and behavioural patterns. Our goal is to support long-term emotional balance, resilience and healthier daily functioning through a holistic approach."
  },
  {
    question: "15. When should I seek professional guidance for stress and burnout?",
    answer: "You should consider seeking professional guidance if stress, emotional exhaustion or burnout continues for several weeks and begins affecting your work, relationships, sleep or daily life. Persistent fatigue, low motivation, difficulty concentrating or feeling overwhelmed despite adequate rest should not be ignored. At Manovaidya, structured assessments help identify contributing factors and provide personalised guidance for improving emotional wellbeing and long-term resilience."
  }
];

function SidebarCard({ children, className = "", id = "" }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function StressBurnoutSupportPage() {
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
                <span className="text-[#4b345d]">Stress & Burnout Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Stress & Burnout Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Burnout Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Better Understand Chronic Stress, Workplace Burnout, Emotional Exhaustion & Mental Wellbeing
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
                    <p className="text-[12px] font-bold text-[#75677d]">May 20, 2025 · 10 min read</p>
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
                  alt="Stress and Burnout Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Feeling stressed from time to time is a normal part of life. Deadlines, family responsibilities, financial commitments and unexpected challenges can all create temporary stress. In many situations, this stress improves once the situation changes or the challenge is resolved.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when stress continues for weeks or months without adequate recovery, it can gradually affect emotional wellbeing, physical health, relationships, work performance and overall quality of life. Some individuals begin feeling mentally exhausted, emotionally drained or constantly overwhelmed, even after taking rest. This prolonged state is often referred to as burnout.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults continue managing their daily responsibilities despite experiencing chronic stress or burnout. Because these changes usually develop gradually, they are often overlooked until they begin affecting multiple areas of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that stress and burnout are not simply about working too hard. Emotional wellbeing is influenced by multiple interconnected factors including lifestyle, sleep, emotional health, daily routines, work demands and overall mind-body balance.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand chronic stress, emotional burnout and the factors influencing long-term mental wellbeing.
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Stress & Burnout Support Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Chronic Stress", Icon: Activity },
                  { label: "Workplace Burnout", Icon: Briefcase },
                  { label: "Mental Exhaustion", Icon: Brain },
                  { label: "Emotional Fatigue", Icon: BatteryLow },
                  { label: "Work-Life Balance", Icon: Clock },
                  { label: "Emotional Wellbeing & Mind-Body Balance", Icon: HeartHandshake },
                ].map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Book a Structured Assessment</h3>
              <p className="mt-2 text-[13px] font-bold leading-6 text-[#51465a]">
                Take the first step toward understanding chronic stress, burnout and your emotional wellbeing through a structured assessment and personalized guidance process.
              </p>
            </div>
          </section>

          <section id="understanding-stress" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & Burnout</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress and burnout are often used interchangeably, but they are not the same.
            </p>

            <h3 className="mt-4 font-black text-[16px] text-[#21142d]">What is Stress?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress is the body's natural response to challenges or demands. Short-term stress can sometimes improve focus, motivation and performance. Once the situation passes, stress usually reduces and the body begins to recover.
            </p>

            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Examples include:</h3>
              <ul className="mt-3 space-y-2.5">
                {["Preparing for an important presentation", "Meeting work deadlines", "Managing family responsibilities", "Facing temporary financial pressure"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">What is Chronic Stress?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              When stressful situations continue for a long period without adequate recovery, stress may become chronic. Instead of returning to a balanced state, the mind and body remain under continuous pressure. Over time, chronic stress may affect emotional wellbeing, sleep, concentration, physical health and relationships.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">What is Burnout?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Burnout is a state of ongoing physical, emotional and mental exhaustion that may develop after prolonged exposure to chronic stress.
            </p>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-2">People experiencing burnout often describe feeling:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Emotionally drained", "Mentally exhausted", "Unmotivated", "Disconnected from work or responsibilities", "Unable to recover even after rest"].map(item => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a] italic">
                    "{item}"
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Burnout does not happen overnight. It usually develops gradually when stress continues without sufficient recovery, healthy routines or emotional support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults searching for Stress Support in India, Burnout Support, Workplace Burnout or Chronic Stress are looking for answers because they have noticed persistent exhaustion that is affecting their daily lives. Understanding the difference between temporary stress and long-term burnout is an important step towards choosing appropriate support.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Stress & Burnout</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress and burnout can influence emotions, thoughts, behaviour and physical wellbeing. The symptoms may vary from person to person depending on individual circumstances.
            </p>

            <img src={symptomsImage} alt="Common signs and symptoms of stress and burnout in adults" className="w-full mt-4 h-[350px] rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Feeling overwhelmed", "Irritability", "Constant worry", "Emotional exhaustion", "Reduced enthusiasm", "Feeling emotionally disconnected", "Low patience"].map((step) => (
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
                  <h3 className="text-[16px] font-black text-[#21142d]">Physical Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Constant fatigue", "Low energy", "Frequent headaches", "Muscle tension", "Poor sleep", "Digestive discomfort", "Body aches"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Cognitive Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Difficulty concentrating", "Brain fog", "Forgetfulness", "Poor decision-making", "Racing thoughts", "Reduced creativity"].map((step) => (
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
                  <h3 className="text-[16px] font-black text-[#21142d]">Behavioural Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Reduced productivity", "Procrastination", "Social withdrawal", "Loss of motivation", "Difficulty maintaining routines", "Reduced engagement with work or family"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Experiencing occasional stress does not necessarily indicate burnout. However, if these symptoms persist for several weeks or begin affecting daily life, relationships or work performance, seeking professional guidance may be beneficial.
            </p>
          </section>

          <section id="causes" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <div className="flex items-start gap-3">
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    What Causes Stress & Burnout?
                  </h2>
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  Stress and burnout usually develop because of multiple contributing factors rather than one single cause. Understanding these influences helps individuals gain a broader perspective on their emotional wellbeing.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:mt-0 lg:flex-1">
                {burnoutHighlights.map(({ label, Icon }) => (
                  <div key={label} className="flex min-h-[86px] flex-col items-center justify-start text-center">
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="max-w-[116px] text-[11px] font-black leading-4 text-[#3b2e45]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {[
                { title: "Workplace Pressure", text: "Heavy workloads, unrealistic deadlines, long working hours and limited recovery time may contribute to ongoing stress." },
                { title: "Business Responsibilities", text: "Business owners often balance financial planning, team management, decision-making and long-term growth, which can create continuous mental pressure." },
                { title: "Financial Concerns", text: "Debt, job insecurity, rising expenses and future uncertainty may increase emotional stress over time." },
                { title: "Parenting & Caregiving", text: "Looking after children, elderly parents or family members while balancing work responsibilities can become emotionally demanding." },
                { title: "Relationship Challenges", text: "Ongoing family conflicts, communication difficulties or personal relationship concerns may influence emotional wellbeing." },
                { title: "Digital Overload", text: "Continuous notifications, social media, emails and work-related communication may reduce opportunities for mental recovery." },
                { title: "Lifestyle Imbalance", text: "Poor sleep, irregular meals, lack of physical activity and limited relaxation time may reduce emotional resilience and increase the impact of stress." },
                { title: "Major Life Changes", text: "Relocation, career transitions, marriage, divorce, illness or other significant life events may contribute to prolonged emotional pressure." }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h3 className="text-[15px] font-black text-[#21142d]">{item.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults believe feeling constantly exhausted is simply part of modern life. However, persistent stress and burnout should not be ignored, especially when they begin affecting physical health, emotional wellbeing or daily functioning.
            </p>

            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Early Understanding Matters</h3>
              <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Stress often begins as a temporary response but may gradually develop into chronic stress or burnout if recovery is repeatedly delayed. Recognising emotional, physical and behavioural changes early allows individuals to make healthier decisions and seek support before stress begins affecting multiple areas of life.
              </p>
            </div>
          </section>

          <section id="health-impact" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Chronic Stress & Burnout Can Affect Your Health</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Stress is not only an emotional experience. When it continues for a long time without adequate recovery, it may gradually influence emotional wellbeing, physical health, relationships, work performance and overall quality of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many adults continue working despite feeling exhausted because they assume constant stress is simply part of modern life. However, persistent stress and burnout can affect multiple areas of daily functioning and should not be ignored.
            </p>

            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Emotional Wellbeing",
                  desc: "Long-term stress may gradually reduce emotional resilience and make everyday situations feel more overwhelming. Many adults experiencing chronic stress report:",
                  list: ["Feeling emotionally exhausted", "Constant irritability", "Increased frustration", "Feeling overwhelmed", "Difficulty relaxing", "Reduced enjoyment in everyday life"]
                },
                {
                  title: "Physical Wellbeing",
                  desc: "Chronic stress can also influence physical wellbeing. Many individuals experience:",
                  list: ["Frequent headaches", "Muscle tension", "Neck or shoulder pain", "Fatigue", "Digestive discomfort", "Reduced energy", "Increased body aches"]
                },
                {
                  title: "Sleep & Recovery",
                  desc: "Recovery becomes difficult when healthy sleep is affected. Adults experiencing burnout often notice:",
                  list: ["Difficulty falling asleep", "Waking during the night", "Feeling tired after sleeping", "Difficulty switching off racing thoughts", "Poor recovery after busy days"]
                },
                {
                  title: "Work Performance",
                  desc: "Stress and burnout may gradually affect professional life by reducing:",
                  list: ["Concentration", "Productivity", "Motivation", "Decision-making", "Creativity", "Job satisfaction"]
                },
                {
                  title: "Relationships",
                  desc: "Persistent stress may also influence communication with family members, friends and colleagues. Some individuals become:",
                  list: ["Easily irritated", "Emotionally distant", "Less patient", "Less engaged in conversations", "Socially withdrawn"]
                },
                {
                  title: "Confidence & Decision Making",
                  desc: "Long-term stress may reduce confidence and increase self-doubt. Individuals may experience:",
                  list: ["Difficulty making decisions", "Fear of making mistakes", "Reduced confidence", "Overthinking", "Procrastination", "Mental fatigue"]
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
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Stress & Burnout Support</h2>
              </div>
            </div>

            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, chronic stress and burnout are understood through a broader perspective. Rather than focusing only on symptoms, we aim to understand the interconnected factors influencing emotional wellbeing, behaviour, lifestyle and overall health.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The Neuro-Ayurveda Development System helps individuals better understand stress and burnout through five interconnected pillars.
            </p>

            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for stress and burnout support"
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

          <section id="management" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Adults Can Better Manage Stress & Prevent Burnout</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Healthy stress management often begins with small, consistent lifestyle changes.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prioritise Quality Sleep: Good sleep supports emotional recovery, concentration and resilience.",
                  "Create Healthy Daily Routines: Structured routines reduce uncertainty and help maintain emotional balance.",
                  "Maintain Physical Activity: Regular movement supports both physical and emotional wellbeing while helping the body recover from daily stress.",
                  "Set Healthy Work Boundaries: Taking regular breaks, limiting excessive working hours and maintaining work-life balance may help reduce burnout risk.",
                  "Stay Connected With Supportive People: Healthy relationships often improve emotional resilience and provide valuable support during stressful periods.",
                  "Practice Regular Self-Care: Relaxation, hobbies, mindfulness and enjoyable activities allow both the mind and body to recover from continuous pressure.",
                  "Reduce Digital Overload: Creating screen-free time during the day may reduce mental fatigue and improve overall wellbeing."
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
                    How Manovaidya Supports Adults
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    At Manovaidya, support begins with understanding the individual rather than focusing only on stress symptoms. A structured, step-by-step process designed for long-term growth and real change.
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
                Our goal is clarity, not just relief. We help you understand your emotional wellbeing deeply.
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">The assessment process is designed to help individuals gain clarity about:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {assessmentClarityItems.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-[0_6px_14px_rgba(58,31,90,0.07)]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
      
            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">When Should You Consider an Assessment?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">You may consider seeking guidance if you experience:</p>

            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Persistent stress lasting several weeks or months",
                  "Emotional exhaustion",
                  "Constant fatigue despite rest",
                  "Difficulty concentrating",
                  "Reduced motivation",
                  "Sleep disturbances",
                  "Work stress affecting personal life",
                  "Burnout symptoms interfering with daily functioning"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured assessment can help identify the factors influencing stress, emotional wellbeing and lifestyle, while creating a personalised roadmap towards healthier recovery and long-term resilience.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help individuals move from chronic stress and emotional exhaustion towards greater emotional balance, mental clarity, resilience and overall wellbeing.
            </p>
          </section>

          <section id="why-choose-us" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Why Adults Across India Choose Manovaidya</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Adults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Stress & Burnout Support, Workplace Stress Guidance and Emotional Wellbeing Support through online and in-clinic consultations.
              </p>
              <div className="mt-3 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Our support focuses on:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {["Personalized Assessment", "Structured Neuro-Ayurveda System", "Online & In-Clinic Support", "Holistic Mind-Body Approach", "Expert Guidance", "Long-Term Emotional Wellbeing"].map(item => (
                    <li key={item} className="flex gap-2 text-[12.5px] font-semibold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Choosing the right support system for stress and burnout can feel overwhelming. Many individuals find themselves searching for a more structured and comprehensive understanding of their emotional needs.
              </p>
            </div>
            <img
              src={supportImage}
              alt="Emotional wellbeing and burnout recovery support"
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
                  Based in Delhi NCR, Dr. Ankush Garg supports adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on Adult Mental Health, Women's Emotional Wellbeing, Stress-Related Concerns and Mental Wellness Support. Through Manovaidya, Dr. Ankush Garg combines traditional Ayurvedic understanding with modern insights into emotional wellbeing and cognitive health.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His approach emphasizes root-cause understanding, personalized guidance, and long-term wellness planning to help adults better understand their concerns and move forward with greater clarity, confidence and direction.
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
              <h2 className="text-[24px] font-black">Feeling Constantly Stressed or Emotionally Exhausted?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Book a structured assessment and personalized guidance session with the Manovaidya team to better understand chronic stress, burnout and your emotional wellbeing.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Why Trust Manovaidya?</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Structured Neuro-Ayurveda Development System",
                    "Personalized Assessment Before Recommendations",
                    "Online & In-Clinic Consultations Across India",
                    "Holistic Mind-Body Approach",
                    "Focus on Long-Term Emotional Wellbeing"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Book Your Consultation with Manovaidya Today</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Manovaidya Clinic</p>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+917823894080"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                  >
                    Contact Us Now
                  </a>
                  <BookConsultationButton
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#8e45bb]"
                  >
                    Book Consultation
                  </BookConsultationButton>
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
                "name": "Stress & Burnout Support in India",
                "description": "Looking for Stress & Burnout Support in India? Learn about chronic stress, workplace burnout, emotional exhaustion and the Neuro-Ayurveda approach at Manovaidya.",
                "url": "https://manovaidya.com/stress-burnout-support-india/"
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
                    "name": "Stress & Burnout Support",
                    "item": "https://manovaidya.com/stress-burnout-support-india/"
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
            <BookConsultationButton
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </BookConsultationButton>
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

export default StressBurnoutSupportPage;

