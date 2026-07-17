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
  Moon,
  CloudRain,
  Sun
} from "lucide-react";

// Using the filenames provided in the SEO plan
import heroImage from "../images/sleep-disorders-support-india.png";
import symptomsImage from "../images/insomnia-symptoms-adults.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import supportImage from "../images/healthy-sleep-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import BookConsultationButton from "../components/BookConsultationButton";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Insomnia", id: "understanding-insomnia" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes of Sleep Problems", id: "causes" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Improving Sleep Habits", id: "improving-sleep" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Adult Mental Wellness", count: 15, Icon: HeartHandshake },
  { label: "Sleep Disorders", count: 12, Icon: BedDouble },
  { label: "Stress & Burnout", count: 12, Icon: BatteryLow },
  { label: "Anxiety & Depression", count: 14, Icon: Brain },
  { label: "Work-Life Balance", count: 9, Icon: Briefcase },
  { label: "Neuro-Ayurveda", count: 10, Icon: Sparkles },
];

const sleepHighlights = [
  { label: "Difficulty Falling Asleep", Icon: BedDouble },
  { label: "Frequent Night Awakenings", Icon: Clock },
  { label: "Poor Sleep Quality", Icon: Activity },
  { label: "Daytime Fatigue", Icon: BatteryLow },
  { label: "Healthy Sleep & Emotional Wellbeing", Icon: HeartHandshake },
];

const assessmentSteps = [
  { 
    step: "Step 1", 
    title: "Comprehensive Assessment", 
    desc: "Understanding sleep patterns, emotional wellbeing, lifestyle habits, stress levels, daily routines and personal concerns.",
    Icon: ClipboardList 
  },
  { 
    step: "Step 2", 
    title: "Personalized Guidance", 
    desc: "Providing individualized recommendations based on each person's sleep concerns, lifestyle and emotional wellbeing.",
    Icon: BookOpen 
  },
  { 
    step: "Step 3", 
    title: "Emotional Wellbeing Support", 
    desc: "Helping individuals better understand sleep problems, stress and healthy coping strategies through a structured approach.",
    Icon: HeartHandshake 
  },
  { 
    step: "Step 4", 
    title: "Neuro-Ayurveda Development System", 
    desc: "Applying the five-pillar framework to understand sleep health, emotional wellbeing, behaviour, lifestyle and mind-body balance.",
    Icon: Sparkles 
  },
  { 
    step: "Step 5", 
    title: "Progress Tracking & Follow-Up", 
    desc: "Creating a structured roadmap that helps individuals monitor progress and develop healthier sleep habits over time.",
    Icon: ShieldCheck 
  },
];

const neuroAyurvedaPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy sleep depends upon healthy brain function. The Brain Nourishment System focuses on understanding factors that may influence: Sleep regulation, Mental relaxation, Emotional balance, Memory, Concentration, Recovery. Supporting brain nourishment helps individuals better understand healthy sleep and overall wellbeing.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Growing research highlights the relationship between gut health and sleep quality. Many adults experiencing poor sleep also report: Digestive discomfort, Irregular eating habits, Low energy, Lifestyle imbalance. The Gut Response System focuses on understanding how overall physical wellbeing may influence healthy sleep.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Daily habits gradually shape sleep patterns. The Neural Network System focuses on understanding: Bedtime routines, Overthinking patterns, Stress responses, Sleep habits, Behavioural routines. Recognising these patterns helps individuals build healthier sleep behaviours over time.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Modern lifestyles expose adults to constant stimulation. Common factors include: Mobile phones, Laptops, Social media, Television, Bright lights, Continuous notifications. Reducing unnecessary stimulation before bedtime may help support healthier sleep routines.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Sleep is strongly influenced by behaviour. Adults experiencing insomnia often develop habits that unintentionally worsen sleep difficulties. Examples include: Irregular sleep schedules, Spending excessive time in bed awake, Late-night screen use, Skipping physical activity, Working until bedtime. Understanding these behavioural patterns allows individuals to gradually develop healthier sleep habits.",
  },
];

const faqs = [
  {
    question: "1. Why can't I sleep at night?",
    answer: "Difficulty sleeping at night can happen for many reasons, including stress, anxiety, irregular sleep routines, excessive screen use, lifestyle habits or certain health conditions. Some people struggle to fall asleep, while others wake up frequently during the night. If sleep problems continue for several weeks and begin affecting your energy, mood or daily life, a professional assessment may help identify the contributing factors."
  },
  {
    question: "2. What causes insomnia?",
    answer: "Insomnia can develop due to a combination of emotional, lifestyle and physical factors. Common causes include ongoing stress, anxiety, depression, irregular sleep schedules, excessive caffeine, late-night screen use, shift work and certain medical conditions. Since every individual experiences insomnia differently, understanding the underlying causes is an important step towards improving sleep quality."
  },
  {
    question: "3. What are the symptoms of insomnia?",
    answer: "Common symptoms of insomnia include difficulty falling asleep, waking frequently during the night, waking too early, feeling unrefreshed after sleep and daytime fatigue. Many people also experience poor concentration, irritability, low energy and reduced productivity. Persistent sleep problems that affect daily functioning may require professional evaluation."
  },
  {
    question: "4. How much sleep do adults need?",
    answer: "Most healthy adults generally need 7 to 9 hours of sleep each night for optimal physical and emotional wellbeing. Individual sleep needs may vary depending on age, health and lifestyle. The quality of sleep is equally important, as sleeping for enough hours but waking up tired may still indicate an underlying sleep concern."
  },
  {
    question: "5. Can stress and anxiety cause sleep problems?",
    answer: "Yes. Stress and anxiety are among the most common reasons people experience difficulty sleeping. Ongoing worry, racing thoughts and emotional tension can make it harder to fall asleep or stay asleep. Improving stress management, maintaining healthy sleep habits and addressing the underlying causes may help support better sleep over time."
  },
  {
    question: "6. How do doctors diagnose insomnia?",
    answer: "Doctors diagnose insomnia by understanding a person's sleep history, symptoms, lifestyle habits and how sleep problems affect daily life. They may ask about bedtime routines, stress levels, medications, emotional wellbeing and overall health. In some cases, additional medical evaluation or sleep studies may be recommended if another sleep disorder is suspected."
  },
  {
    question: "7. How can I check if I have a sleep disorder?",
    answer: "If you regularly experience difficulty sleeping, frequent night awakenings, excessive daytime tiredness or poor sleep quality for several weeks, it may be helpful to seek a professional assessment. Healthcare professionals evaluate sleep patterns, lifestyle, emotional wellbeing and medical history to better understand the possible causes and recommend appropriate guidance."
  },
  {
    question: "8. Can insomnia be managed without medication?",
    answer: "Many individuals with mild or moderate insomnia benefit from improving sleep hygiene, maintaining a regular sleep schedule, managing stress, reducing screen exposure before bedtime and making healthy lifestyle changes. The most appropriate approach depends on the underlying cause of the sleep problem. Persistent or severe insomnia should always be evaluated by a qualified healthcare professional."
  },
  {
    question: "9. What is good sleep hygiene?",
    answer: "Sleep hygiene refers to healthy habits that support better sleep. These include maintaining a consistent bedtime, limiting caffeine late in the day, reducing screen time before sleep, creating a quiet and comfortable sleeping environment and following a relaxing bedtime routine. Practising good sleep hygiene consistently may help improve both sleep quality and overall wellbeing."
  },
  {
    question: "10. Can lack of sleep affect mental health?",
    answer: "Yes. Poor sleep and mental health are closely connected. Ongoing sleep problems may affect emotional wellbeing, increase irritability, reduce concentration and make it more difficult to cope with everyday stress. Sleep difficulties may also occur alongside anxiety, depression or chronic stress. Improving sleep is often an important part of supporting overall emotional wellbeing."
  },
  {
    question: "11. Can poor sleep affect memory and concentration?",
    answer: "Yes. Healthy sleep plays an important role in memory, learning and concentration. Poor sleep may lead to brain fog, forgetfulness, slower thinking and difficulty focusing on everyday tasks. When sleep quality improves, many people also notice better attention, clearer thinking and improved productivity."
  },
  {
    question: "12. What are the long-term effects of poor sleep?",
    answer: "Persistent poor sleep may gradually affect emotional wellbeing, physical health, work performance, memory, concentration and overall quality of life. Many individuals also experience ongoing fatigue, reduced motivation and difficulty managing everyday responsibilities. Identifying and addressing sleep problems early may help reduce their long-term impact."
  },
  {
    question: "13. Can lifestyle changes improve sleep quality?",
    answer: "Yes. Healthy lifestyle habits can support better sleep for many people. Maintaining a regular sleep schedule, staying physically active, managing stress, reducing screen exposure before bedtime and following good sleep hygiene practices may improve sleep quality over time. Lifestyle changes are often most effective when combined with personalised professional guidance."
  },
  {
    question: "14. How does Manovaidya support adults with sleep disorders?",
    answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on sleep symptoms. Through structured assessment, personalized guidance and the Neuro-Ayurveda Development System, we help individuals better understand the emotional, behavioural and lifestyle factors that may be influencing their sleep. Our goal is to support healthier sleep, emotional balance and long-term wellbeing through a holistic approach."
  },
  {
    question: "15. When should I seek professional guidance for sleep problems?",
    answer: "You should consider seeking professional guidance if sleep problems continue for several weeks or begin affecting your work, relationships, emotional wellbeing or daily activities. Difficulty falling asleep, frequent night awakenings, persistent daytime fatigue or poor sleep quality should not be ignored. At Manovaidya, structured assessments help identify contributing factors and provide personalized guidance to support healthier sleep and long-term wellbeing."
  }
];

function SidebarCard({ children, className = "", id = "" }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AdultSleepDisordersSupportIndiaPage() {
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
      <Seo
        title="Sleep Disorders & Insomnia Treatment in India | Poor Sleep, Insomnia & Healthy Sleep | Manovaidya"
        description="Looking for Sleep Disorders & Insomnia Treatment in India? Learn about insomnia, poor sleep, healthy sleep habits and the Neuro-Ayurveda approach at Manovaidya."
        keywords="Sleep Disorders Treatment, Sleep Disorders Treatment in India, Insomnia Support, Insomnia Symptoms, Poor Sleep Quality, Difficulty Sleeping, Chronic Sleep Problems, Sleep Hygiene, Healthy Sleep Habits, Daytime Fatigue, Sleep and Mental Health, Emotional Wellbeing, Sleep Assessment"
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Sleep Disorders & Insomnia Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Sleep Disorders & Insomnia Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Sleep Disorders & Insomnia Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Better Understand Sleep Problems, Insomnia, Poor Sleep Quality & Healthy Sleep
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Assessment
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
                    <p className="text-[12px] font-bold text-[#75677d]">May 25, 2025 · 10 min read</p>
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
                  alt="Sleep Disorders and Insomnia Treatment in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A good night's sleep is essential for both physical health and emotional wellbeing. Most adults occasionally experience difficulty sleeping because of stress, travel, illness or changes in routine. In many cases, these temporary sleep disturbances improve once the underlying situation changes.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when difficulty sleeping continues for weeks or months, it may begin affecting energy levels, concentration, emotional wellbeing, work performance and overall quality of life. Some people struggle to fall asleep, while others wake up repeatedly during the night or wake much earlier than expected and cannot return to sleep. These ongoing sleep difficulties may be associated with insomnia or other sleep-related concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that sleep problems are not simply about the number of hours you sleep. Healthy sleep is influenced by multiple interconnected factors, including lifestyle, emotional wellbeing, stress, daily routines and overall mind-body balance.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand sleep disorders, insomnia and the factors influencing long-term sleep health and emotional wellbeing.
            </p>
            
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Sleep Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sleepHighlights.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
                <li className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <Moon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <span>Insomnia</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="understanding-insomnia" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Sleep Disorders & Insomnia</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Sleep is one of the body's most important natural recovery processes. It allows the brain and body to rest, restore energy and prepare for the next day.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Most people experience occasional sleepless nights from time to time. Temporary sleep problems caused by stress, travel or illness usually improve within a short period.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when sleep difficulties become frequent or persistent, they may begin affecting emotional wellbeing, physical health and daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults searching for Sleep Disorders Treatment in India, Insomnia Support, Difficulty Sleeping or Poor Sleep Quality are looking for answers because they have been struggling with ongoing sleep problems that interfere with everyday life.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">What Is Insomnia?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Insomnia is one of the most common sleep-related concerns.
            </p>
            
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">People with insomnia may experience:</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Difficulty falling asleep",
                  "Waking frequently during the night",
                  "Waking too early",
                  "Feeling unrefreshed after sleeping",
                  "Poor quality sleep despite spending enough time in bed"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some people experience temporary insomnia, while others may experience sleep difficulties over a longer period. Understanding the pattern and possible contributing factors is an important step towards improving sleep health.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">Temporary vs Chronic Sleep Problems</h3>
            
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Temporary Sleep Problems</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">Short-term sleep disturbances may occur because of:</p>
                <ul className="space-y-1.5">
                  {["Stressful situations", "Travel", "Temporary illness", "Changes in routine", "Important life events"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">These usually improve once the situation changes.</p>
              </div>
              
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Chronic Sleep Problems</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a]">
                  When difficulty sleeping continues for several weeks or longer and begins affecting daily life, work or emotional wellbeing, professional assessment may be helpful.
                </p>
                <p className="text-[13px] font-bold text-[#7835A4] mt-3">
                  Persistent sleep difficulties should not simply be accepted as a normal part of life.
                </p>
              </div>
            </div>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Sleep Disorders</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Sleep problems can affect much more than the night. They often influence physical energy, emotional wellbeing, concentration and daily performance.
            </p>

            <img src={symptomsImage} alt="Common symptoms of insomnia and sleep disorders in adults" className="w-full mt-4 h-[350px] rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Moon className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Night-Time Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Difficulty falling asleep", "Frequent waking during the night", "Waking earlier than planned", "Restless sleep", "Feeling unable to return to sleep", "Poor sleep quality"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Daytime Symptoms</h3>
                </div>
                <ul className="space-y-2 sm:columns-2">
                  {["Constant tiredness", "Low energy", "Difficulty concentrating", "Brain fog", "Reduced productivity", "Daytime sleepiness"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Symptoms</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Poor sleep may also affect emotional wellbeing. Some individuals experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Irritability", "Mood changes", "Increased stress", "Reduced emotional resilience", "Feeling mentally exhausted"].map((step) => (
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
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Sleep problems may influence:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Memory", "Attention", "Decision making", "Learning", "Mental clarity"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold text-[#5a5063] mt-3 italic">Many adults first notice reduced concentration before recognising that poor sleep may be contributing to these changes.</p>
              </div>
            </div>
          </section>

          <section id="causes" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Sleep Problems?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Sleep difficulties usually develop because of several contributing factors rather than one single cause. Understanding these influences helps individuals better understand their sleep health.
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Stress", text: "Ongoing stress may make it difficult for the mind to relax before bedtime, leading to difficulty falling asleep or staying asleep." },
                { title: "Anxiety", text: "Persistent worry and overthinking may increase mental alertness and interfere with healthy sleep." },
                { title: "Depression", text: "Some individuals experiencing depression may sleep too little, while others may sleep much longer than usual but still feel tired." },
                { title: "Lifestyle Habits", text: "Irregular sleep schedules, excessive caffeine, poor daily routines and unhealthy habits may contribute to disturbed sleep." },
                { title: "Screen Exposure", text: "Using mobile phones, laptops or other digital devices close to bedtime may make it harder for some people to fall asleep." },
                { title: "Shift Work", text: "Changing work schedules and night shifts can disrupt the body's natural sleep-wake cycle." },
                { title: "Physical Health Conditions", text: "Some medical conditions or ongoing physical discomfort may interfere with healthy sleep." },
                { title: "Ageing", text: "Sleep patterns naturally change with age, and some older adults may experience lighter or shorter sleep than younger adults." }
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
                Many people ignore sleep problems for months or even years, assuming they will improve on their own. However, persistent poor sleep can gradually affect emotional wellbeing, physical health, concentration, work performance and overall quality of life. Recognising sleep difficulties early allows individuals to understand the contributing factors and seek appropriate guidance before the problem becomes more disruptive.
              </p>
            </div>
          </section>

          <section id="health-impact" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Poor Sleep Can Affect Daily Life</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Sleep is one of the body's most important recovery processes. When sleep is disturbed for a prolonged period, its effects are often seen far beyond the bedroom. Poor sleep can influence emotional wellbeing, physical health, concentration, productivity and relationships.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many adults assume that sleeping less is simply part of a busy lifestyle. However, persistent sleep problems may gradually affect multiple areas of daily functioning and reduce overall quality of life.
            </p>
            
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Emotional Wellbeing", 
                  desc: "Poor sleep may make it more difficult to regulate emotions and cope with everyday challenges. Many adults experiencing ongoing sleep problems report:",
                  list: ["Increased irritability", "Mood swings", "Feeling emotionally overwhelmed", "Reduced patience", "Difficulty relaxing", "Increased emotional sensitivity"]
                },
                {
                  title: "Brain Function & Concentration", 
                  desc: "The brain depends on quality sleep for learning, memory and decision-making. When sleep is consistently disturbed, some individuals may experience:",
                  list: ["Difficulty concentrating", "Brain fog", "Forgetfulness", "Reduced attention span", "Slower thinking", "Poor decision-making"]
                },
                {
                  title: "Physical Wellbeing", 
                  desc: "Sleep is closely connected with physical recovery. Long-term poor sleep may contribute to:",
                  list: ["Persistent fatigue", "Low energy", "Reduced physical performance", "Headaches", "Muscle discomfort", "Daytime tiredness"]
                },
                {
                  title: "Work Performance", 
                  desc: "Sleep problems may reduce productivity and mental performance. Adults may notice:",
                  list: ["Difficulty completing tasks", "Reduced motivation", "More mistakes at work", "Lower productivity", "Difficulty managing workload", "Reduced creativity"]
                },
                {
                  title: "Relationships", 
                  desc: "Poor sleep may also affect communication and relationships. Some individuals become:",
                  list: ["Easily frustrated", "Less patient", "Emotionally distant", "Less interested in social interaction", "More reactive during conversations"]
                },
                {
                  title: "Daily Energy & Quality of Life", 
                  desc: "Many people with ongoing sleep problems feel tired throughout the day. This may reduce their ability to:",
                  list: ["Exercise", "Enjoy hobbies", "Spend time with family", "Stay productive", "Maintain healthy routines"]
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
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Sleep Disorders & Insomnia Support</h2>
              </div>
            </div>
            
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, healthy sleep is understood through a broader perspective. Rather than focusing only on sleeping difficulties, we aim to understand the interconnected factors influencing sleep quality, emotional wellbeing, lifestyle and overall health.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The Neuro-Ayurveda Development System helps individuals better understand sleep concerns through five interconnected pillars.
            </p>
            
            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for sleep disorders and insomnia support"
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

          <section id="improving-sleep" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How Adults Can Improve Healthy Sleep Habits</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Improving sleep usually requires consistency rather than a single quick solution.
             </p>
             <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
               <ul className="grid sm:grid-cols-2 gap-4">
                 {[
                   "Maintain a Consistent Sleep Schedule: Going to bed and waking up at similar times each day helps support the body's natural sleep cycle.",
                   "Reduce Screen Exposure Before Bed: Limiting mobile phones, laptops and other digital devices before bedtime may help the mind prepare for sleep.",
                   "Create a Relaxing Bedtime Routine: Reading, light stretching, meditation or relaxation exercises may help some individuals unwind before sleep.",
                   "Stay Physically Active: Regular physical activity supports both physical health and healthy sleep patterns.",
                   "Limit Stimulants Late in the Day: Reducing caffeine and other stimulants in the evening may improve sleep quality for some individuals.",
                   "Manage Daily Stress: Healthy stress management, relaxation techniques and structured routines may improve both emotional wellbeing and sleep."
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
                    At Manovaidya, support begins with understanding the individual rather than focusing only on sleep symptoms. A structured, step-by-step process designed for long-term growth and real change.
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
                Our goal is clarity, not just temporary relief. We help you understand your sleep deeply.
              </div>
            </div>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">When Should You Consider an Assessment?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">You may consider seeking professional guidance if you experience:</p>
            
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Difficulty sleeping for several weeks",
                  "Frequent night awakenings",
                  "Persistent daytime fatigue",
                  "Poor sleep affecting work or relationships",
                  "Difficulty concentrating due to lack of sleep",
                  "Emotional distress related to poor sleep",
                  "Ongoing insomnia affecting daily life"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured assessment can help identify the factors influencing your sleep and provide a personalised roadmap towards healthier sleep and improved emotional wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help individuals move from restless nights and daytime exhaustion towards healthier sleep, greater mental clarity, improved emotional balance and better overall wellbeing.
            </p>
          </section>

          <section id="why-choose-us" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Why Adults Across India Choose Manovaidya</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Living with ongoing sleep problems can be physically exhausting and emotionally overwhelming. Many adults silently struggle with difficulty falling asleep, frequent night awakenings or waking up feeling tired every morning, believing that poor sleep is simply part of a busy lifestyle.
              </p>
              <div className="mt-3 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Our support focuses on:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    "Comprehensive Sleep Assessment", 
                    "Neuro-Ayurveda Development System", 
                    "Personalized Guidance", 
                    "Holistic Mind-Body Perspective", 
                    "Long-Term Sleep Health", 
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
                Adults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Sleep Disorders & Insomnia Support, Healthy Sleep Guidance and Emotional Wellbeing Support through online and in-clinic consultations.
              </p>
            </div>
            <img
              src={supportImage}
              alt="Healthy sleep and insomnia support at Manovaidya"
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
                  Many adults experiencing insomnia, disturbed sleep, poor sleep quality or persistent daytime fatigue seek guidance to better understand the factors influencing their sleep and emotional wellbeing. Through structured assessment and personalized guidance, Dr. Ankush Garg helps individuals better understand healthy sleep while supporting long-term emotional wellbeing.
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
              <h2 className="text-[24px] font-black">Struggling With Poor Sleep or Insomnia?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Book a structured assessment and personalized guidance session with the Manovaidya team to better understand your sleep concerns, emotional wellbeing and overall health.
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
                    "Focus on Healthy Sleep & Long-Term Wellbeing"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Take the First Step Towards Better Sleep & Emotional Wellbeing</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Whether you are experiencing difficulty falling asleep, frequent night awakenings, poor sleep quality or persistent tiredness, our team is here to help.</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+917823838638"
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
                "name": "Sleep Disorders & Insomnia Treatment in India",
                "description": "Looking for Sleep Disorders & Insomnia Treatment in India? Learn about insomnia, poor sleep, healthy sleep habits and the Neuro-Ayurveda approach at Manovaidya.",
                "url": "https://manovaidya.com/sleep-disorders-insomnia-support-india/"
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
                    "name": "Sleep Disorders & Insomnia Support",
                    "item": "https://manovaidya.com/sleep-disorders-insomnia-support-india/"
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
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p>
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

export default AdultSleepDisordersSupportIndiaPage;

