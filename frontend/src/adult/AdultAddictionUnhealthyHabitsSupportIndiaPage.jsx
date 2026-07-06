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
  Flower2,
  Cigarette,
  Smartphone
} from "lucide-react";

import heroImage from "../images/addiction-unhealthy-habits-support-india.png";
import symptomsImage from "../images/addiction-signs-symptoms.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import behaviourImage from "../images/behavioural-addiction-support.png";
import supportImage from "../images/healthy-habit-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import BookConsultationButton from "../components/BookConsultationButton";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Habits", id: "understanding-habits" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes of Addiction", id: "causes" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Building Healthy Habits", id: "building-habits" },
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
  { label: "Addiction & Habits", count: 11, Icon: Smartphone },
  { label: "Neuro-Ayurveda", count: 10, Icon: Sparkles },
];

const highlights = [
  { label: "Mobile Phone Addiction", Icon: Smartphone },
  { label: "Social Media Addiction", Icon: Users },
  { label: "Internet Addiction", Icon: Activity },
  { label: "Gaming Addiction", Icon: Puzzle },
  { label: "Smoking & Tobacco Dependence", Icon: Cigarette },
  { label: "Habit Change", Icon: ShieldCheck },
];

const assessmentSteps = [
  {
    step: "Step 1",
    title: "Comprehensive Assessment",
    desc: "Understanding behavioural patterns, emotional wellbeing, lifestyle habits, stress levels, sleep and daily routines.",
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
    desc: "Helping individuals better understand emotional triggers, unhealthy habits and healthier coping strategies.",
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
    desc: "Creating a structured roadmap that helps individuals monitor progress, strengthen healthier habits and support long-term wellbeing.",
    Icon: ShieldCheck
  },
];

const neuroAyurvedaPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy decision-making and emotional regulation depend upon healthy brain functioning. The Brain Nourishment System focuses on understanding factors that may influence: Impulse control, Emotional regulation, Attention, Decision-making, Mental clarity, Behavioural awareness. Supporting healthy brain function helps individuals better understand the patterns that influence habit formation.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Growing research suggests that physical wellbeing and emotional wellbeing are closely connected. Many adults experiencing chronic stress or unhealthy habits also report: Digestive discomfort, Poor eating habits, Reduced energy, Lifestyle imbalance. The Gut Response System focuses on understanding how physical wellbeing may influence emotional resilience and behavioural health.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Repeated behaviours gradually become automatic. The Neural Network System focuses on understanding: Habit formation, Behavioural patterns, Emotional triggers, Cravings, Reward-seeking behaviours. Recognising these patterns helps individuals understand why unhealthy habits become difficult to change and how healthier habits can gradually replace them.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Everyday environments influence behaviour more than many people realise. Examples include: Constant smartphone notifications, Social media exposure, Workplace stress, Easy access to addictive behaviours, Social environments. Learning to identify environmental triggers can help individuals create healthier routines and reduce unnecessary temptations.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Behaviour change happens gradually. Some individuals may develop patterns such as: Impulsive decisions, Repeated procrastination, Emotional coping through unhealthy habits, Avoidance, Loss of routine, Difficulty maintaining self-control. Rather than focusing only on stopping the behaviour, this pillar helps individuals understand the emotional and behavioural factors that contribute to long-term habit formation.",
  },
];

const faqs = [
  {
    question: "1. What is addiction?",
    answer: "Addiction is a condition in which a person finds it difficult to control the use of a substance or a repetitive behaviour despite knowing that it is causing harm. Addiction may involve substances such as alcohol or tobacco, as well as behavioural patterns like excessive mobile phone use, gaming or social media. Over time, addiction can affect emotional wellbeing, relationships, work performance and overall quality of life."
  },
  {
    question: "2. What is the difference between a habit and an addiction?",
    answer: "A habit is a repeated behaviour that usually remains under your control and can often be changed with consistent effort. Addiction, however, involves a loss of control where a person continues the behaviour despite experiencing negative consequences. Strong cravings, repeated unsuccessful attempts to stop and difficulty controlling the behaviour are common signs that a habit may have progressed towards addiction."
  },
  {
    question: "3. What are the signs of addiction?",
    answer: "Common signs of addiction include strong cravings, repeated unsuccessful attempts to stop, spending excessive time on the behaviour, loss of control, continuing despite negative consequences, neglecting responsibilities, mood changes and withdrawal from family or social activities. The signs may vary depending on the type of addiction and the individual."
  },
  {
    question: "4. What causes addiction?",
    answer: "Addiction usually develops through a combination of biological, psychological and environmental factors. Chronic stress, trauma, emotional difficulties, mental health conditions, family history, social influences and repeated exposure to rewarding behaviours may all contribute. Understanding these contributing factors helps create a more personalised approach to behavioural change and emotional wellbeing."
  },
  {
    question: "5. Can stress lead to addiction?",
    answer: "Yes. Some individuals use substances or repetitive behaviours as a way of coping with ongoing stress, anxiety or emotional discomfort. Over time, these coping behaviours may become repetitive and difficult to control. Developing healthier stress management strategies and understanding emotional triggers may help reduce dependence on unhealthy habits."
  },
  {
    question: "6. Can addiction affect mental health?",
    answer: "Yes. Addiction and mental health often influence each other. Persistent addictive behaviours may increase emotional stress, anxiety, depression, sleep problems and feelings of guilt or low self-esteem. Likewise, existing mental health challenges may make some individuals more vulnerable to developing unhealthy coping habits. A comprehensive assessment helps understand these interconnected factors."
  },
  {
    question: "7. What are behavioural addictions?",
    answer: "Behavioural addictions involve repetitive behaviours that become difficult to control even without the use of a substance. Examples include excessive mobile phone use, social media addiction, gaming addiction, internet addiction, gambling and compulsive pornography use. These behaviours may interfere with work, relationships, emotional wellbeing and daily responsibilities."
  },
  {
    question: "8. Can unhealthy habits be changed?",
    answer: "Yes. Many unhealthy habits can improve with greater self-awareness, structured routines, healthier coping strategies and consistent effort. The process is usually gradual rather than immediate. Understanding the emotional and behavioural factors behind a habit often makes long-term behaviour change more sustainable."
  },
  {
    question: "9. How long does it take to break a habit?",
    answer: "There is no fixed timeline for changing a habit because it depends on the individual, the type of behaviour and how long it has been present. Some habits may begin changing within weeks, while others require a longer period of consistent effort and support. Focusing on gradual progress rather than quick results often leads to more sustainable behaviour change."
  },
  {
    question: "10. Can addiction affect relationships?",
    answer: "Yes. Addiction may affect communication, trust, emotional connection and family relationships. Some individuals become emotionally withdrawn, neglect responsibilities or experience increased conflict with loved ones. Addressing unhealthy behavioural patterns early may help improve both emotional wellbeing and relationship health."
  },
  {
    question: "11. Can professional guidance help with addiction recovery?",
    answer: "Yes. Professional guidance can help individuals better understand the emotional, behavioural and lifestyle factors contributing to addiction. Depending on individual needs, support may include psychological interventions, lifestyle guidance, stress management and strategies to develop healthier habits. The most appropriate approach varies for each person and should be tailored to their circumstances."
  },
  {
    question: "12. How does Manovaidya support adults with addiction concerns?",
    answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on the addictive behaviour. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help individuals understand behavioural patterns, emotional wellbeing, lifestyle habits and the factors influencing unhealthy habits. Our goal is to support healthier routines, emotional resilience and long-term behavioural wellbeing through a holistic and personalised approach."
  },
  {
    question: "13. Can addiction recovery improve emotional wellbeing?",
    answer: "For many individuals, reducing unhealthy behaviours and building healthier coping strategies can positively influence emotional wellbeing, confidence, relationships and overall quality of life. Recovery is often a gradual journey, and progress may look different for each person. Long-term improvement is usually supported by consistent healthy habits and appropriate professional guidance."
  },
  {
    question: "14. What are the first signs of unhealthy habits becoming addiction?",
    answer: "Early signs may include increasing difficulty controlling the behaviour, spending more time engaging in it, repeated unsuccessful attempts to stop, strong urges or cravings, neglecting responsibilities and continuing despite negative consequences. Recognising these warning signs early may help individuals seek guidance before the behaviour begins affecting multiple areas of life."
  },
  {
    question: "15. When should I seek professional guidance for addiction or unhealthy habits?",
    answer: "You should consider seeking professional guidance if an unhealthy habit or addictive behaviour has become difficult to control, continues despite negative consequences or begins affecting your emotional wellbeing, relationships, work or daily functioning. At Manovaidya, structured assessments help identify the emotional, behavioural and lifestyle factors influencing addiction and provide personalised guidance to support healthier habits and long-term wellbeing."
  }
];

function SidebarCard({ children, className = "", id = "" }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AdultAddictionUnhealthyHabitsSupportIndiaPage() {
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
                <span className="text-[#4b345d]">Addiction & Unhealthy Habits Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Addiction & Habit Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Addiction & Unhealthy Habits Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Understand Addiction, Break Unhealthy Habits & Improve Emotional Wellbeing
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
                    <p className="text-[12px] font-bold text-[#75677d]">May 30, 2025 · 14 min read</p>
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
                  alt="Addiction and unhealthy habits support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people develop habits as part of their daily routine. Some habits, such as exercising regularly or maintaining a healthy sleep schedule, can improve overall wellbeing. Others, however, may gradually become unhealthy and begin affecting physical health, emotional wellbeing, relationships and daily life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              An unhealthy habit may start as an occasional behaviour, but over time it can become increasingly difficult to control. Some individuals notice that they repeatedly engage in certain behaviours even when they know those behaviours are negatively affecting their health, work, finances or relationships. This pattern may indicate the development of dependence or addiction.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Addiction is not always related to alcohol or tobacco. Many adults today struggle with behavioural addictions such as excessive mobile phone use, social media overuse, gaming, internet use, online gambling or compulsive pornography consumption. Others may experience dependence on smoking, alcohol or other substances.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people silently struggle with addiction because they feel embarrassed, guilty or afraid of being judged. Some repeatedly try to stop on their own but find themselves returning to the same behaviour, leaving them frustrated and emotionally exhausted.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that addiction is often more complex than a lack of willpower. Emotional wellbeing, stress, lifestyle, behavioural patterns and environmental influences may all play an important role in the development and maintenance of unhealthy habits.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help adults better understand addiction, unhealthy habits and the multiple factors influencing long-term emotional wellbeing.
            </p>
            
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Addiction & Habit Support Focuses On:</h3>
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

          <section id="understanding-habits" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Addiction & Unhealthy Habits</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Not every habit is an addiction.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many daily behaviours become part of our routine and can be changed with relatively little effort. However, some habits gradually become repetitive, difficult to control and continue despite causing negative consequences. Understanding the difference between a habit, an unhealthy habit and addiction helps individuals recognise when professional guidance may be beneficial.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults searching for Addiction Support in India, How to Break Bad Habits, Behavioural Addiction, Mobile Addiction or Alcohol Addiction Support are often looking for answers because they feel they have lost control over a particular behaviour.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Recognising these patterns early is the first step towards building healthier habits and improving emotional wellbeing.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">Habit vs Unhealthy Habit vs Addiction</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding the differences between these terms can make it easier to recognise when a behaviour is becoming a concern.
            </p>
            
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Healthy Habit</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">A healthy habit is a repeated behaviour that supports physical or emotional wellbeing.</p>
                <ul className="space-y-1.5 mt-2">
                  {["Regular exercise", "Reading", "Healthy eating", "Meditation", "Walking", "Maintaining a consistent sleep routine"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">Healthy habits usually improve quality of life and remain under personal control.</p>
              </div>
              
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Unhealthy Habit</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">An unhealthy habit is a repeated behaviour that may negatively affect health or wellbeing but can often be changed with awareness and consistent effort.</p>
                <ul className="space-y-1.5 mt-2">
                  {["Excessive late-night screen use", "Skipping meals", "Procrastination", "Overeating during stress", "Spending excessive time on social media"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">Although these habits may be difficult to change, individuals generally retain a reasonable level of control over them.</p>
              </div>

              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Addiction</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">Addiction develops when an individual repeatedly engages in a behaviour or uses a substance despite experiencing negative consequences and finds it increasingly difficult to stop.</p>
                <ul className="space-y-1.5 mt-2">
                  {["Strong cravings", "Loss of control", "Repeated unsuccessful attempts to stop", "Continuing the behaviour despite problems", "Feeling uncomfortable when unable to engage in the behaviour"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">Understanding addiction as a complex behavioural and emotional concern rather than simply a lack of willpower may encourage individuals to seek appropriate support.</p>
              </div>
            </div>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Addiction</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              The signs of addiction vary depending on the individual and the type of addiction. However, several common patterns are frequently observed.
            </p>

            <img src={symptomsImage} alt="Common signs and symptoms of addiction in adults" className="w-full mt-4 h-[350px] rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Many adults experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Strong urges or cravings", "Irritability", "Anxiety when unable to engage in the behaviour", "Mood changes", "Guilt", "Emotional distress", "Reduced motivation"].map((step) => (
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
                  <h3 className="text-[16px] font-black text-[#21142d]">Behavioural Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Some individuals may notice:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Difficulty controlling the behaviour", "Repeated failed attempts to stop", "Spending increasing amounts of time on the behaviour", "Ignoring responsibilities", "Continuing despite negative consequences", "Loss of interest in other activities"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Stethoscope className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Physical Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Some addictions may also influence physical wellbeing. Individuals may experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Sleep disturbances", "Fatigue", "Appetite changes", "Low energy", "Difficulty concentrating"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">The symptoms vary depending on the behaviour or substance involved.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Social Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Addiction may gradually affect relationships and daily responsibilities. Some adults experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Family conflicts", "Relationship difficulties", "Reduced work performance", "Social withdrawal", "Financial problems", "Isolation"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3">These changes may gradually affect emotional wellbeing and overall quality of life.</p>
              </div>
            </div>
          </section>

          <section id="causes" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Addiction?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Addiction usually develops through the interaction of multiple biological, psychological and environmental factors rather than a single cause. Common contributing factors include:
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Chronic Stress", text: "Long-term stress may increase the likelihood of using certain behaviours or substances as a coping strategy." },
                { title: "Emotional Difficulties", text: "Some individuals turn towards unhealthy habits while trying to manage loneliness, anxiety, sadness or emotional distress." },
                { title: "Trauma", text: "Past traumatic experiences may influence emotional wellbeing and increase vulnerability to unhealthy coping patterns." },
                { title: "Mental Health Conditions", text: "Conditions such as anxiety, depression, chronic stress or low self-esteem may occur alongside addictive behaviours in some individuals." },
                { title: "Environment", text: "Family environment, workplace culture, peer influence and easy access to certain behaviours or substances may also contribute." },
                { title: "Habit Loops", text: "Repeated behaviours gradually become automatic. Over time, the brain begins associating certain situations, emotions or environments with that behaviour, making it more difficult to stop without conscious effort." }
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
                Many adults believe they should simply "try harder" to stop an unhealthy habit. However, addiction often involves emotional, behavioural and environmental factors that make change more complex than willpower alone. Recognising unhealthy patterns early allows individuals to better understand the underlying influences, build healthier coping strategies and seek appropriate guidance before addiction begins affecting mental health, relationships, career and overall wellbeing.
              </p>
            </div>
          </section>

          <section id="health-impact" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Addiction & Unhealthy Habits Can Affect Daily Life</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Addiction and unhealthy habits rarely affect only one part of life. Over time, they may influence emotional wellbeing, physical health, relationships, work performance and overall quality of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many adults continue functioning normally on the outside while privately struggling to control certain behaviours. What may begin as an occasional habit can gradually become something that consumes more time, energy and emotional attention than intended. Understanding how addiction affects different areas of life is an important step towards recognising the need for healthier coping strategies and appropriate support.
            </p>
            
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Emotional Wellbeing",
                  desc: "Addiction often affects emotional health before individuals recognise its impact. Some individuals also experience temporary emotional relief after engaging in the behaviour, followed by regret or disappointment. This cycle may repeat over time, making it increasingly difficult to break unhealthy patterns. Many adults experience:",
                  list: ["Irritability", "Mood changes", "Anxiety", "Guilt", "Shame", "Emotional exhaustion", "Feeling out of control"]
                },
                {
                  title: "Relationships",
                  desc: "Addiction may gradually affect communication and trust within relationships. As the behaviour becomes more repetitive, loved ones may also begin noticing changes in communication, responsibility and emotional availability. Some individuals notice:",
                  list: ["Increased arguments", "Reduced emotional connection", "Lack of trust", "Family conflicts", "Difficulty spending quality time together", "Social withdrawal"]
                },
                {
                  title: "Career & Productivity",
                  desc: "Many unhealthy habits can influence workplace performance. Digital addictions, in particular, may interfere with focus and time management, affecting both personal and professional growth. Adults may experience:",
                  list: ["Difficulty concentrating", "Reduced motivation", "Procrastination", "Missed deadlines", "Poor decision-making", "Reduced productivity"]
                },
                {
                  title: "Physical Wellbeing",
                  desc: "Addictive behaviours may also affect physical health. Healthy physical wellbeing often supports healthier emotional regulation and habit change. Some individuals notice:",
                  list: ["Poor sleep", "Fatigue", "Low energy", "Appetite changes", "Reduced physical activity", "Difficulty maintaining healthy routines"]
                },
                {
                  title: "Financial Wellbeing",
                  desc: "Certain addictions may also create financial challenges. Individuals may spend increasing amounts of money on substances, gambling, online purchases or digital entertainment without fully realising the long-term impact. Financial stress may then contribute to additional emotional distress, creating another unhealthy cycle.",
                  list: []
                },
                {
                  title: "Confidence & Self-Esteem",
                  desc: "Repeated unsuccessful attempts to stop an unhealthy habit may gradually affect confidence. Over time, these thoughts may reduce self-esteem and make change feel even more difficult. Recognising addiction as a behavioural and emotional challenge rather than a personal weakness can help reduce self-blame and encourage healthier support. Many adults begin thinking:",
                  list: ["\"Why can't I stop?\"", "\"Something is wrong with me.\"", "\"I've failed again.\""]
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="text-[16px] font-black leading-5 text-[#21142d] mb-2">{item.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{item.desc}</p>
                  {item.list.length > 0 && (
                    <ul className="mt-2 space-y-1 pl-4 list-disc list-inside text-[13px] font-semibold text-[#5a5063]">
                      {item.list.map((li, index) => <li key={index}>{li}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            <img src={behaviourImage} alt="Behavioural addiction and unhealthy habits support" className="w-full mt-5 h-[320px] rounded-lg object-cover shadow-[0_8px_22px_rgba(58,31,90,0.06)]" />
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Addiction & Behavioural Wellbeing</h2>
              </div>
            </div>
            
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, addiction is understood through a broader perspective. Rather than focusing only on stopping a behaviour, we aim to understand the emotional, behavioural and lifestyle factors that may contribute to unhealthy habits.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The Neuro-Ayurveda Development System helps individuals better understand addiction through five interconnected pillars.
            </p>
            
            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for addiction and behavioural wellbeing"
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

          <section id="building-habits" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Adults Can Build Healthier Habits</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Developing healthier habits usually requires consistent effort rather than quick solutions. Although every individual's journey is different, certain strategies often support long-term habit change.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build Structured Daily Routines: Regular routines reduce unnecessary decision-making and help create healthier behavioural patterns.",
                  "Identify Emotional Triggers: Recognising situations, emotions or environments that trigger unhealthy habits is an important step towards behaviour change.",
                  "Replace Rather Than Remove: Replacing unhealthy habits with healthier alternatives is often more sustainable than simply trying to stop a behaviour without a replacement.",
                  "Prioritise Healthy Sleep: Good sleep supports emotional regulation, concentration and healthier decision-making.",
                  "Stay Physically Active: Regular physical activity supports emotional wellbeing, reduces stress and encourages healthier daily routines.",
                  "Build a Strong Support System: Support from family members, trusted friends and qualified professionals may help individuals stay motivated while working towards healthier habits."
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
                    At Manovaidya, support begins with understanding the individual rather than focusing only on the addiction or unhealthy habit. A structured, step-by-step process designed for long-term growth and real change.
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
                Our goal is clarity, not just temporary relief. We help you understand your emotional triggers and build healthier habits deeply.
              </div>
            </div>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">When Should You Consider Professional Guidance?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">You may consider seeking professional guidance if you experience:</p>
            
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Difficulty controlling a habit",
                  "Repeated unsuccessful attempts to stop",
                  "Strong cravings",
                  "Addiction affecting work or relationships",
                  "Loss of interest in healthy activities",
                  "Behaviour continuing despite negative consequences",
                  "Emotional distress related to the behaviour"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured assessment can help identify the emotional, behavioural and lifestyle factors influencing addiction while creating a personalised roadmap towards healthier habits and improved emotional wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help individuals move from unhealthy behavioural patterns towards healthier routines, emotional resilience, improved self-control and long-term wellbeing.
            </p>
          </section>

          <section id="why-choose-us" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Why Adults Across India Choose Manovaidya</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Breaking an unhealthy habit is rarely about willpower alone. Many adults genuinely want to reduce or stop certain behaviours but find themselves repeating the same pattern despite knowing its impact on their health, relationships or daily life.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, we understand that addiction and unhealthy habits often develop through a combination of emotional, behavioural and lifestyle factors. Rather than focusing only on the behaviour itself, we aim to understand the individual, identify contributing factors and provide structured guidance towards healthier long-term habits.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Our goal is to help individuals build greater self-awareness, emotional resilience and healthier daily routines that support lasting wellbeing.
              </p>
              <div className="mt-4 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Our support focuses on:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    "Comprehensive Addiction & Habit Assessment",
                    "Neuro-Ayurveda Development System",
                    "Personalized Guidance",
                    "Holistic Mind-Body Perspective",
                    "Long-Term Behaviour Change",
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
                Adults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Addiction & Unhealthy Habits Support through online and in-clinic consultations.
              </p>
            </div>
            <img
              src={supportImage}
              alt="Healthy habit support and emotional wellbeing"
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
                  His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and holistic approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Many adults experiencing addictive behaviours, unhealthy habits, emotional dependence or difficulty controlling repetitive behaviours seek guidance to better understand the factors influencing their emotional wellbeing and behavioural health. Through structured assessment, personalized guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps individuals better understand emotional wellbeing while supporting healthier behavioural patterns through the Neuro-Ayurveda Development System.
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
              <h2 className="text-[24px] font-black">Finding It Difficult to Break an Unhealthy Habit?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Book a structured assessment and personalized guidance session with the Manovaidya team to better understand addiction, unhealthy habits and your emotional wellbeing.
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
                    "Focus on Long-Term Behavioural & Emotional Wellbeing"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Take the First Step Towards Healthier Habits & Emotional Wellbeing</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Whether you are experiencing digital addiction, smoking or alcohol concerns, emotional dependence or difficulty managing repetitive habits, our team is here to help you understand your concerns and explore personalized support.</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+917823894080"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                  >
                    Take Mental Health Assessment
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
                "name": "Addiction & Unhealthy Habits Support in India",
                "description": "Looking for Addiction & Unhealthy Habits Support in India? Learn about behavioural addiction, unhealthy habits, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.",
                "url": "https://manovaidya.com/addiction-unhealthy-habits-support-india/"
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
                    "name": "Addiction & Unhealthy Habits Support",
                    "item": "https://manovaidya.com/addiction-unhealthy-habits-support-india/"
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

export default AdultAddictionUnhealthyHabitsSupportIndiaPage;

