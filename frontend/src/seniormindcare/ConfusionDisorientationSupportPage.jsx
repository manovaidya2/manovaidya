import React from "react";
import {
  Activity,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CloudRain,
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
import heroImage from "../images/confusion-disorientation-support-seniors-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import RelatedSeniorMindCarePages from "./RelatedSeniorMindCarePages";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding", id: "understanding-confusion" },
  { label: "Ageing vs Confusion", id: "normal-ageing-vs-confusion" },
  { label: "Temporary vs Persistent", id: "temporary-vs-persistent" },
  { label: "Delirium & Dementia", id: "delirium-dementia" },
  { label: "Signs & Symptoms", id: "common-signs-symptoms" },
  { label: "Causes", id: "what-causes-confusion" },
  { label: "Daily Life", id: "daily-life-impact" },
  { label: "Neuro-Ayurveda", id: "neuro-ayurveda-approach" },
  { label: "Healthy Function", id: "supporting-cognitive-function" },
  { label: "How We Support", id: "how-manovaidya-supports" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Doctor", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const focusItems = [
  { label: "Confusion in Older Adults", Icon: CloudRain },
  { label: "Disorientation", Icon: Search },
  { label: "Sudden Confusion", Icon: Activity },
  { label: "Thinking Difficulties", Icon: Brain },
  { label: "Cognitive Changes", Icon: Sparkles },
  { label: "Delirium Awareness", Icon: ShieldCheck },
  { label: "Dementia Awareness", Icon: HeartHandshake },
  { label: "Healthy Brain Ageing", Icon: CheckCircle2 },
];

const categories = [
  { label: "Senior Mental Health", count: 12, Icon: HeartHandshake },
  { label: "Confusion", count: 10, Icon: CloudRain },
  { label: "Dementia Awareness", count: 8, Icon: ShieldCheck },
  { label: "Healthy Ageing", count: 11, Icon: Sparkles },
  { label: "Caregiver Support", count: 9, Icon: Users },
  { label: "Cognitive Wellbeing", count: 13, Icon: Activity },
];

const symptomGroups = [
  {
    title: "Thinking Difficulties",
    text: "Some seniors experience:",
    items: ["Difficulty concentrating", "Slower thinking", "Poor judgement", "Difficulty understanding conversations", "Trouble following instructions", "Difficulty making decisions"],
    Icon: Brain,
  },
  {
    title: "Disorientation",
    text: "Some individuals become confused about:",
    items: ["Time", "Date", "Place", "Familiar surroundings", "Daily schedules"],
    Icon: Search,
  },
  {
    title: "Behavioural Changes",
    text: "Some seniors may:",
    items: ["Repeat the same questions", "Become restless", "Feel anxious", "Withdraw socially", "Become unusually irritable", "Show reduced confidence"],
    Icon: HeartHandshake,
  },
  {
    title: "Daily Life Changes",
    text: "Confusion may gradually interfere with everyday activities such as:",
    items: ["Taking medicines correctly", "Preparing meals", "Managing finances", "Keeping appointments", "Following conversations", "Performing familiar household tasks"],
    Icon: CalendarCheck,
  },
];

const causes = [
  { title: "Dehydration", desc: "Older adults are more likely to become dehydrated, which can sometimes affect thinking and alertness." },
  { title: "Infections", desc: "Urinary tract infections, chest infections and other illnesses may sometimes cause sudden confusion in older adults." },
  { title: "Medication Side Effects", desc: "Some medicines may influence alertness, concentration or thinking." },
  { title: "Poor Sleep", desc: "Insufficient or disrupted sleep may affect attention and cognitive performance." },
  { title: "Depression & Anxiety", desc: "Emotional health conditions may influence concentration, memory and decision-making." },
  { title: "Vitamin Deficiencies", desc: "Certain vitamin deficiencies, including vitamin B12 deficiency, may contribute to cognitive changes." },
  { title: "Thyroid Disorders", desc: "Changes in thyroid function may affect energy levels, concentration and thinking." },
  { title: "Delirium", desc: "Sudden confusion caused by an underlying medical illness requires urgent medical assessment." },
  { title: "Dementia", desc: "Progressive neurological conditions may gradually affect thinking, reasoning and orientation." },
  { title: "Alzheimer's Disease", desc: "Alzheimer's disease is one possible cause of progressive cognitive decline and requires comprehensive medical evaluation." },
];

const dailyLifeCards = [
  {
    title: "Independence",
    desc: "Many older adults value their independence and ability to manage everyday responsibilities. Confusion may gradually make it difficult to:",
    items: ["Follow daily routines", "Remember appointments", "Take medications correctly", "Prepare meals safely", "Manage finances", "Organise personal belongings", "Complete familiar household tasks"],
  },
  {
    title: "Emotional Wellbeing",
    desc: "Confusion can also affect emotional health. Many seniors experience:",
    items: ["Frustration", "Anxiety", "Embarrassment", "Reduced confidence", "Fear of making mistakes", "Worry about becoming dependent"],
  },
  {
    title: "Relationships",
    desc: "Confusion may change the way seniors interact with family members and friends. Families sometimes notice that their loved one:",
    items: ["Repeats the same questions", "Has difficulty following conversations", "Misunderstands situations", "Becomes irritated more easily", "Needs frequent reassurance", "Withdraws from social interactions"],
  },
  {
    title: "Daily Activities",
    desc: "Thinking clearly is essential for many everyday responsibilities. Confusion may interfere with:",
    items: ["Shopping", "Cooking", "Managing money", "Following instructions", "Remembering important dates", "Travelling independently", "Using mobile phones or other technology"],
  },
  {
    title: "Safety",
    desc: "Confusion may increase the risk of accidents or unsafe situations. Families should pay attention if an older adult:",
    items: ["Leaves appliances switched on", "Misses important medications", "Wanders away from familiar places", "Has difficulty recognising emergencies", "Becomes confused while crossing roads", "Cannot remember emergency contact information"],
  },
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy brain function supports attention, thinking, decision-making and emotional balance. The Brain Nourishment System focuses on understanding factors that may influence: Mental clarity, Attention, Memory, Decision-making, Emotional regulation, Cognitive resilience. Supporting overall brain health may contribute to healthier cognitive ageing.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Growing research suggests that physical wellbeing and brain health are closely connected. Many seniors experiencing confusion also report: Reduced appetite, Digestive concerns, Poor nutrition, Low energy. The Gut Response System focuses on understanding how lifestyle and physical wellbeing may influence healthy ageing.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Healthy brain ageing depends upon maintaining active neural pathways. Activities such as: Learning new skills, Reading, Solving puzzles, Conversation, Mental stimulation may help support cognitive engagement throughout later life.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "The brain continuously processes information from the surrounding environment. Maintaining regular exposure to familiar environments, meaningful activities and positive sensory experiences may help support orientation and emotional wellbeing.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Confusion often leads to changes in behaviour. Some seniors may: Become withdrawn, Avoid social situations, Feel less confident, Become restless, Depend more heavily on family members. Understanding these behaviours with compassion rather than frustration helps families create a more supportive environment.",
  },
];

const healthyFunctionItems = [
  { title: "Stay Well Hydrated", desc: "Dehydration is a common and sometimes overlooked cause of confusion in older adults. Drinking enough fluids throughout the day supports overall health and cognitive function." },
  { title: "Prioritise Healthy Sleep", desc: "Good quality sleep supports attention, memory and clear thinking." },
  { title: "Eat a Balanced Diet", desc: "Nutritious meals that include fruits, vegetables, whole grains, healthy fats and adequate protein support overall health and healthy ageing." },
  { title: "Stay Mentally Active", desc: "Reading, puzzles, board games, learning new hobbies and regular conversation help keep the mind engaged." },
  { title: "Remain Physically Active", desc: "Walking, stretching, yoga and other age-appropriate activities support physical and cognitive wellbeing." },
  { title: "Maintain Familiar Routines", desc: "Consistent daily routines help reduce confusion and provide a greater sense of security." },
  { title: "Attend Regular Medical Check-ups", desc: "Routine medical care helps identify health conditions that may contribute to confusion or cognitive changes." },
];

const supportSteps = [
  { step: "Step 1", title: "Comprehensive Assessment", desc: "Understanding cognitive concerns, emotional wellbeing, lifestyle habits, sleep quality, nutrition, medications and daily functioning.", Icon: Search },
  { step: "Step 2", title: "Personalized Guidance", desc: "Providing individualized recommendations based on each senior's cognitive, emotional and lifestyle needs.", Icon: BookOpen },
  { step: "Step 3", title: "Brain Health & Emotional Wellbeing Support", desc: "Helping seniors and families better understand confusion, orientation difficulties and practical strategies that support everyday life.", Icon: Brain },
  { step: "Step 4", title: "Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to understand cognitive wellbeing, behaviour, lifestyle and healthy ageing.", Icon: Sparkles },
  { step: "Step 5", title: "Progress Tracking & Family Guidance", desc: "Creating a structured roadmap that helps seniors and caregivers monitor changes, strengthen healthy routines and support long-term wellbeing.", Icon: CalendarCheck },
];

const professionalGuidanceItems = [
  "Frequently becomes confused about time or place.",
  "Has sudden confusion or disorientation.",
  "Experiences increasing difficulty following conversations.",
  "Struggles with routine daily activities.",
  "Shows noticeable changes in behaviour or personality.",
  "Has confusion that interferes with independence or safety.",
  "Develops rapidly worsening cognitive symptoms.",
];

const whyChooseCards = [
  {
    title: "Comprehensive Cognitive & Orientation Assessment",
    desc: "Every senior experiences cognitive changes differently. Our structured assessment helps us understand cognitive concerns, daily functioning, emotional wellbeing, sleep quality, lifestyle habits, nutrition, current medications, family support and personal goals before creating personalised guidance.",
    points: ["Frequent confusion", "Difficulty recognising familiar places", "Disorientation about time or date", "Trouble following conversations", "Reduced attention", "Behavioural changes", "Emotional distress", "Difficulty managing everyday activities"],
  },
  {
    title: "Neuro-Ayurveda Development System",
    desc: "Manovaidya follows the Neuro-Ayurveda Development System, a structured framework that understands healthy cognitive ageing through five interconnected pillars.",
    points: ["Brain Nourishment System", "Gut Response System", "Neural Network System", "Sensory Integration System", "Behaviour Guidance System"],
  },
  {
    title: "Personalized Guidance",
    desc: "Every individual's needs are different. Recommendations are personalised according to cognitive concerns, emotional wellbeing, lifestyle habits, sleep quality, daily routine, nutrition, medical history and personal goals.",
    points: ["Cognitive concerns", "Emotional wellbeing", "Lifestyle habits", "Sleep quality", "Daily routine", "Nutrition", "Medical history", "Personal goals"],
  },
  {
    title: "Holistic Cognitive Health Perspective",
    desc: "Healthy ageing involves more than maintaining memory. Our approach considers the relationship between brain health, emotional wellbeing, nutrition, lifestyle habits, sleep quality, physical activity and social engagement.",
    points: ["Brain health", "Emotional wellbeing", "Nutrition", "Lifestyle habits", "Sleep quality", "Physical activity", "Social engagement"],
  },
  {
    title: "Focus on Independence & Healthy Ageing",
    desc: "Our goal is to help seniors remain as independent as possible while supporting healthy cognitive function, emotional wellbeing and confidence in daily life.",
    points: ["Independence", "Healthy cognitive function", "Emotional wellbeing", "Confidence", "Supportive routines"],
  },
  {
    title: "Ongoing Support & Family Guidance",
    desc: "Regular follow-up and structured progress tracking help seniors and caregivers monitor changes, strengthen healthy routines and make informed decisions as needs evolve over time.",
    points: ["Regular follow-up", "Structured progress tracking", "Caregiver support", "Healthy routines", "Informed decisions"],
  },
];

const internalLinks = [
  { title: "Explore Senior Mental Health Care.", href: "/senior-mental-health-care/" },
  { title: "Learn about Memory Loss & Forgetfulness Treatment.", href: "/memory-loss-forgetfulness-support-seniors-india/" },
  { title: "Explore Depression Treatment for Seniors.", href: "/senior-depression-support-india/" },
  { title: "Understand Anxiety Treatment for Seniors.", href: "/senior-anxiety-support-india/" },
  { title: "Learn about Sleep Disorders in Seniors.", href: "/senior-sleep-disorders-support-india/" },
  { title: "Explore Healthy Ageing Support.", href: "/healthy-ageing-support-india/" },
  { title: "Learn about Caregiver Support.", href: "/caregiver-support-india/" },
  { title: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
];

const trustItems = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Assessment Before Recommendations",
  "Senior-Focused Holistic Care",
  "Online & In-Clinic Consultations Across India",
  "Guidance by Dr. Ankush Garg",
  "Family-Centred Support",
  "Focus on Healthy Cognitive Ageing",
];

const faqs = [
  { question: "1. What causes confusion in elderly people?", answer: "Confusion in older adults can have many possible causes. Common reasons include dehydration, infections such as urinary tract infections (UTIs), medication side effects, poor sleep, vitamin deficiencies, thyroid disorders, depression, anxiety and neurological conditions such as dementia. In some cases, sudden confusion may indicate a serious medical problem that requires immediate medical attention. Because the causes vary widely, a proper medical evaluation is important to identify the underlying reason." },
  { question: "2. What is the difference between confusion and dementia?", answer: "Confusion is a symptom that may develop suddenly or gradually and can have many different causes, including temporary medical conditions. Dementia is a group of progressive disorders that affect memory, thinking, reasoning and daily functioning over time. Not every person experiencing confusion has dementia. A healthcare professional can determine the underlying cause through a comprehensive assessment." },
  { question: "3. What is disorientation in older adults?", answer: "Disorientation refers to difficulty recognising time, place, surroundings or familiar people. An older adult may forget the date, become confused about where they are or have trouble recognising familiar environments. Disorientation may occur due to temporary medical conditions or longer-term neurological disorders. Any new or worsening disorientation should be assessed by a qualified healthcare professional." },
  { question: "4. Is confusion a normal part of ageing?", answer: "No. Although ageing may slightly slow thinking or make it take longer to recall information, significant confusion is not considered a normal part of healthy ageing. Persistent confusion, disorientation or sudden changes in thinking should always be evaluated to determine their underlying cause." },
  { question: "5. Can dehydration cause confusion in seniors?", answer: "Yes. Dehydration is a common and sometimes overlooked cause of confusion in older adults. Seniors are more vulnerable to dehydration because the sensation of thirst often decreases with age. Maintaining adequate fluid intake is important for overall health, but sudden confusion should still be medically evaluated to rule out other possible causes." },
  { question: "6. Can infections cause sudden confusion?", answer: "Yes. Infections, particularly urinary tract infections (UTIs), pneumonia and other serious illnesses, may sometimes cause sudden confusion or changes in alertness in older adults. If a senior suddenly becomes confused, unusually drowsy or disoriented, prompt medical assessment is recommended because these symptoms may indicate an acute illness." },
  { question: "7. What is delirium?", answer: "Delirium is a sudden change in attention, awareness and thinking that usually develops over hours or days. It is often caused by an underlying medical condition such as an infection, dehydration, medication effects or metabolic imbalance. Delirium is different from dementia because it develops rapidly and often requires urgent medical evaluation and treatment." },
  { question: "8. Can poor sleep cause confusion?", answer: "Yes. Poor sleep can affect concentration, attention and mental clarity. Long-term sleep problems may make older adults feel more forgetful or confused during the day. Improving sleep quality may support better cognitive function, but persistent confusion should always be assessed by a healthcare professional." },
  { question: "9. Can medications cause confusion in older adults?", answer: "Yes. Some prescription medicines, over-the-counter medications or interactions between multiple medicines may affect alertness, thinking or orientation. Older adults are often more sensitive to medication side effects. If confusion begins after starting or changing a medication, it should be discussed with the prescribing healthcare professional. Medications should never be stopped without medical advice." },
  { question: "10. When is confusion a medical emergency?", answer: "Sudden confusion should always be taken seriously. Immediate medical care is recommended if confusion develops suddenly or is accompanied by symptoms such as fever, weakness, difficulty speaking, severe headache, chest pain, seizures, loss of consciousness or changes in vision. These symptoms may indicate a serious medical condition that requires urgent evaluation." },
  { question: "11. Can confusion be treated?", answer: "Treatment depends entirely on the underlying cause. Confusion related to dehydration, infections, medication side effects, sleep problems or certain medical conditions may improve when those causes are appropriately managed. If confusion is related to progressive neurological disorders, treatment focuses on managing symptoms, maintaining quality of life and supporting the individual and family. A comprehensive medical assessment is essential to determine the appropriate approach." },
  { question: "12. How can families help a confused elderly person?", answer: "Families can support an older adult by communicating calmly, maintaining consistent daily routines, encouraging hydration and nutrition, ensuring medications are taken correctly, reducing unnecessary environmental stress and accompanying them for medical evaluation when needed. Patience, reassurance and respectful communication often help reduce anxiety and improve the senior's sense of security." },
  { question: "13. How does Manovaidya support seniors with confusion?", answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on confusion. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help seniors and families understand cognitive wellbeing, emotional health, lifestyle habits and behavioural changes that may influence confusion. Our goal is to support healthy ageing, daily functioning and overall wellbeing through a holistic and personalised approach." },
  { question: "14. Can confusion improve with treatment?", answer: "Improvement depends on the underlying cause. Temporary confusion caused by conditions such as dehydration, infections or medication side effects may improve after appropriate medical care. When confusion is associated with long-term neurological conditions, the focus is often on symptom management, maintaining independence where possible and improving quality of life. A healthcare professional can recommend the most appropriate plan after evaluation." },
  { question: "15. When should families seek professional guidance for confusion?", answer: "Families should seek professional guidance if an older adult develops frequent confusion, disorientation, increasing difficulty following conversations, changes in behaviour or personality, trouble managing everyday activities or confusion that interferes with safety or independence. If confusion develops suddenly or rapidly worsens, immediate medical evaluation is recommended, as it may be a sign of a serious underlying condition." },
];

const schemaGraph = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Confusion & Disorientation Treatment for Seniors in India",
    url: "https://www.manovaidya.com/confusion-disorientation-support-seniors-india/",
    headline: "Confusion & Disorientation Treatment for Seniors in India",
    description: "Looking for Confusion & Disorientation Treatment for Seniors in India? Learn about confusion in older adults, disorientation, possible causes, cognitive wellbeing and the Neuro-Ayurveda approach at Manovaidya.",
    about: ["Confusion in Elderly", "Disorientation", "Cognitive Changes", "Delirium Awareness", "Healthy Cognitive Ageing"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.manovaidya.com/" },
      { "@type": "ListItem", position: 2, name: "Senior Mental Health Care", item: "https://www.manovaidya.com/senior-mental-health-care/" },
      { "@type": "ListItem", position: 3, name: "Confusion & Disorientation Treatment", item: "https://www.manovaidya.com/confusion-disorientation-support-seniors-india/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Ankush Garg",
    medicalSpecialty: ["Mental Health", "Child Development", "Senior Mental Health"],
    address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "India" },
  },
];

function SidebarCard({ children, className = "" }) {
  return <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>{children}</aside>;
}

function BulletList({ items, columns = true }) {
  return (
    <ul className={`mt-3 grid gap-2 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#7835A4]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ConfusionDisorientationSupportPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showNeuroPillars, setShowNeuroPillars] = React.useState(false);

  React.useEffect(() => {
    const fontId = "senior-confusion-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  React.useEffect(() => {
    const schemaId = "confusion-disorientation-schema";
    document.getElementById(schemaId)?.remove();
    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaGraph);
    document.head.appendChild(script);
    return () => document.getElementById(schemaId)?.remove();
  }, []);

  React.useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 170;
      let currentSection = pageLinks[0].id;
      pageLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollMarker) currentSection = id;
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
        title="Confusion & Disorientation Treatment for Seniors in India | Cognitive Health | Manovaidya"
        description="Looking for Confusion & Disorientation Treatment for Seniors in India? Learn about confusion in older adults, disorientation, possible causes, cognitive wellbeing and the Neuro-Ayurveda approach at Manovaidya."
        keywords="Confusion in Elderly, Disorientation, Confusion in Seniors, Senior Confusion, Mental Confusion, Cognitive Changes, Thinking Problems in Elderly, Senior Cognitive Health, Healthy Brain Ageing, Delirium, Dementia, Alzheimer's Disease, Orientation Problems, Cognitive Decline, Brain Health, Senior Mental Health"
        path="/confusion-disorientation-support-seniors-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Confusion & Disorientation Treatment for Seniors in India",
          "description": "Looking for Confusion & Disorientation Treatment for Seniors in India? Learn about confusion in older adults, disorientation, possible causes, cognitive wellbeing and the Neuro-Ayurveda approach at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/senior-mental-health-care/" className="transition hover:text-[#7835A4]">Senior Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Confusion & Disorientation Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Senior Cognitive Health</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Confusion & Disorientation Treatment for Seniors in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Seniors Understand Confusion, Disorientation & Cognitive Wellbeing
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Cognitive Assessment</a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
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
                    <a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">
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
                <img src={heroImage} alt="Confusion and disorientation support for seniors in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            {[
              "As people grow older, occasional forgetfulness may become more common. However, when an older adult frequently appears confused, has difficulty recognising familiar places, loses track of time or struggles to understand everyday situations, it should not be ignored.",
              "Confusion and disorientation can affect a senior's confidence, independence and overall quality of life. Some individuals become unsure about where they are, forget the day or date, have difficulty following conversations or seem unable to make simple decisions that were once easy. These changes can be distressing not only for seniors but also for their families and caregivers.",
              "It is important to understand that confusion in older adults has many possible causes. Some causes may be temporary and treatable, including dehydration, infections, medication side effects, poor sleep, vitamin deficiencies or metabolic problems. Others may be related to neurological conditions such as delirium, dementia or Alzheimer's disease. Because the causes vary widely, professional medical evaluation is important to determine the underlying reason.",
              "Sudden confusion should never be dismissed as a normal part of ageing. In some situations, it may signal an urgent medical condition that requires immediate attention.",
              "At Manovaidya, we believe healthy ageing involves supporting cognitive wellbeing, emotional health, daily functioning and overall quality of life. Understanding the reasons behind confusion can help seniors and families make informed decisions and seek appropriate guidance.",
              "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help seniors and families better understand confusion, disorientation and the many factors that influence healthy cognitive ageing.",
            ].map((text) => <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>)}
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="mb-2 text-[14px] font-bold text-[#3b2e45]">At Manovaidya, Confusion & Disorientation Treatment Focuses On</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {focusItems.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Icon className="h-7 w-7" strokeWidth={1.8} /></span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="understanding-confusion" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Confusion & Disorientation</h2>
            {[
              "Confusion is a condition in which an individual finds it difficult to think clearly, understand information, make decisions or respond appropriately to situations.",
              "Disorientation refers to difficulty recognising time, place, surroundings or sometimes even familiar people. A person may forget where they are, what day it is or become uncertain about familiar environments.",
              "While occasional lapses in attention may occur with normal ageing, persistent or sudden confusion deserves careful evaluation. These symptoms should never automatically be assumed to be dementia because many medical conditions can produce similar changes.",
              "Families searching for Confusion in Elderly People, Disorientation in Seniors, Mental Confusion in Older Adults or Cognitive Changes in Ageing are often looking for reliable information to understand what these symptoms may mean and when professional help should be considered.",
            ].map((text) => <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>)}
          </section>

          <section id="normal-ageing-vs-confusion" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Normal Ageing vs Confusion</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Growing older naturally brings small changes in memory and processing speed, but these are different from significant confusion.</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                <h3 className="text-[16px] font-black text-[#21142d]">Normal Age-Related Changes</h3>
                <p className="mt-2 text-[13px] font-bold text-[#5a5063]">Many healthy seniors may occasionally:</p>
                <BulletList items={["Take longer to remember names.", "Misplace everyday items.", "Need reminders for appointments.", "Learn new technology more slowly.", "Pause briefly while searching for the right word."]} columns={false} />
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">These changes usually do not interfere with daily independence.</p>
              </div>
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
                <h3 className="text-[16px] font-black text-[#21142d]">Confusion That Needs Attention</h3>
                <p className="mt-2 text-[13px] font-bold text-[#5a5063]">Professional assessment is recommended if a senior:</p>
                <BulletList items={["Frequently becomes confused about time or place.", "Cannot follow simple conversations.", "Appears unusually drowsy or difficult to wake.", "Has trouble recognising familiar surroundings.", "Becomes increasingly disoriented.", "Experiences sudden changes in thinking or behaviour."]} columns={false} />
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">These symptoms may have many possible causes and should not be ignored.</p>
              </div>
            </div>
          </section>

          <section id="temporary-vs-persistent" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6">
            <h2 className="text-[20px] font-black text-[#17111f]">Temporary vs Persistent Confusion</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Not all confusion has the same cause.</p>
            <h3 className="mt-4 text-[16px] font-black text-[#21142d]">Temporary Confusion</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">Temporary confusion may occur due to:</p>
            <BulletList items={["Dehydration", "Fever", "Medication side effects", "Poor sleep", "Low blood sugar", "Acute illness", "Stress"]} />
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Many temporary causes improve when the underlying problem is identified and treated.</p>
            <h3 className="mt-4 text-[16px] font-black text-[#21142d]">Persistent Confusion</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">Confusion that gradually worsens or continues over time may require detailed medical assessment to identify possible neurological or other health conditions.</p>
          </section>

          <section id="delirium-dementia" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Delirium, Dementia & Alzheimer's Disease</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">These terms are often confused but describe different conditions.</p>
            {[
              { title: "Delirium", text: "Delirium is a sudden change in attention and thinking that develops over hours or days. It is often triggered by an underlying medical condition such as an infection, dehydration, medication effects or illness. Because delirium can be a medical emergency, sudden confusion should be assessed immediately." },
              { title: "Dementia", text: "Dementia is a group of conditions that gradually affect memory, thinking, communication and daily functioning over time." },
              { title: "Alzheimer's Disease", text: "Alzheimer's disease is the most common cause of dementia, but it is not the only one. Understanding these differences helps families avoid making assumptions while encouraging timely medical evaluation." },
            ].map(({ title, text }) => (
              <div key={title} className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <h3 className="text-[15px] font-black text-[#21142d]">{title}</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{text}</p>
              </div>
            ))}
          </section>

          <section id="common-signs-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Confusion</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">Confusion may affect several aspects of daily life.</p>
            <div className="mt-5 space-y-5">
              {symptomGroups.map(({ title, text, items, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <div className="mb-3 flex items-center gap-3"><Icon className="h-5 w-5 text-[#7835A4]" /><h3 className="text-[16px] font-black text-[#21142d]">{title}</h3></div>
                  <p className="mb-3 mt-2 text-[13px] font-bold text-[#51465a]">{text}</p>
                  <ul className="space-y-2 sm:columns-2">
                    {items.map((step) => <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />{step}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="what-causes-confusion" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Confusion in Seniors?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Confusion can have many possible causes.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Not every episode of confusion indicates dementia.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Some common causes include:</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {causes.map(({ title, desc }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]"><h3 className="text-[15px] font-black text-[#21142d]">{title}</h3><p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p></div>)}
            </div>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Early Understanding Matters</h3>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Many families assume confusion is simply part of growing older.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">However, persistent or sudden confusion should never be ignored. Early assessment may help identify reversible medical conditions, support timely treatment and provide appropriate guidance for seniors and their families.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Recognising cognitive changes early also helps maintain independence, improve safety and support better quality of life.</p>
            </div>
          </section>

          <section id="daily-life-impact" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Confusion & Disorientation Can Affect Daily Life</h2>
            {[
              "Confusion affects much more than memory alone. It can influence a senior's ability to think clearly, communicate, manage daily activities and maintain independence.",
              "Some seniors experience only occasional episodes of confusion, while others notice gradual changes that begin affecting their confidence and routine. Families may observe that their loved one becomes more dependent, hesitant or anxious while performing tasks that were once familiar.",
              "Recognising these changes early helps families provide appropriate support while seeking timely medical evaluation when necessary.",
            ].map((text) => <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>)}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {dailyLifeCards.map(({ title, desc, items }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]"><h3 className="text-[15px] font-black text-[#21142d]">{title}</h3><p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p><BulletList items={items} columns={false} /></div>)}
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Healthy Cognitive Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">At Manovaidya, cognitive wellbeing is viewed through a holistic perspective.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Rather than focusing only on confusion itself, the Neuro-Ayurveda Development System helps individuals understand the many factors that may influence thinking, emotional wellbeing, behaviour and healthy ageing.</p>
            <img src={neuroDiagramImage} alt="Neuro Ayurveda approach for confusion and cognitive wellbeing in seniors" className="mt-5 mb-5 max-h-[400px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4 shadow-sm" />
            <button type="button" onClick={() => setShowNeuroPillars((current) => !current)} className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.18)] transition hover:bg-[#5f2785]" aria-expanded={showNeuroPillars}>
              {showNeuroPillars ? "Show Less" : "Read More"}
            </button>
            {showNeuroPillars && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {neuroPillars.map(({ title, text, Icon }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] last:sm:col-span-2"><div className="mb-3 flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Icon className="h-6 w-6" strokeWidth={1.8} /></span><h3 className="text-[15px] font-black leading-5 text-[#21142d]">{title}</h3></div><p className="text-[13px] font-semibold leading-6 text-[#5a5063]">{text}</p></div>)}
              </div>
            )}
          </section>

          <section id="supporting-cognitive-function" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Supporting Healthy Cognitive Function</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Although ageing naturally changes the brain over time, healthy lifestyle habits may support cognitive wellbeing.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {healthyFunctionItems.map(({ title, desc }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm"><h3 className="text-[15px] font-black text-[#21142d]">{title}</h3><p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p></div>)}
            </div>
          </section>

          <section id="how-manovaidya-supports" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Seniors</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">At Manovaidya, support begins with understanding the individual rather than focusing only on confusion.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Our structured process includes:</p>
            <div className="mt-5 grid gap-4">
              {supportSteps.map(({ step, title, desc, Icon }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm"><div className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Icon className="h-5 w-5" /></span><div><p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">{step}</p><h3 className="mt-1 text-[15px] font-black text-[#21142d]">{title}</h3><p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p></div></div></div>)}
            </div>
            <div className="mt-6 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">When Should You Consider Professional Guidance?</h3>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">You should consider seeking professional guidance if a senior:</p>
              <BulletList items={professionalGuidanceItems} />
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">A structured assessment can help identify possible contributing factors and guide appropriate next steps. If confusion develops suddenly, is severe, or is accompanied by symptoms such as weakness, difficulty speaking, fever, chest pain or loss of consciousness, immediate emergency medical care is essential, as these symptoms may indicate a serious medical condition.</p>
              <p className="mt-3 text-[14px] font-bold leading-7 text-[#51465a]">Our goal is to help seniors and their families better understand confusion, support healthy cognitive ageing and improve quality of life through compassionate, personalised guidance.</p>
            </div>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Across India Choose Manovaidya</h2>
            {[
              "Confusion and disorientation in older adults can be worrying for both seniors and their families. Small changes in thinking, orientation or decision-making often raise questions about safety, independence and future health.",
              "At Manovaidya, we understand that confusion does not always have the same cause. Some episodes may be temporary and related to dehydration, infections, medications or sleep problems, while others may be associated with age-related cognitive conditions. Our approach focuses on understanding the whole person rather than making assumptions based on symptoms alone.",
              "Through structured assessment, personalised guidance and a holistic perspective, we aim to help seniors maintain dignity, confidence and the highest possible quality of life.",
            ].map((text) => <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>)}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {whyChooseCards.map(({ title, desc, points }) => <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm"><h3 className="text-[15px] font-black text-[#21142d]">{title}</h3><p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p><BulletList items={points} columns={false} /></div>)}
            </div>
            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Why Families Across India Trust Manovaidya</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Confusion & Disorientation Treatment, Healthy Cognitive Ageing Guidance and Senior Mental Health Support through both online and in-clinic consultations.</p>
            <div className="mt-5 rounded-lg bg-[#fbf9fd] p-5"><h3 className="text-[16px] font-black text-[#21142d]">Why Trust Manovaidya?</h3><BulletList items={trustItems} /></div>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr. Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Autism, ADHD, Child Development & Mental Health Specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Dr. Ankush Garg is the Founder of Manovaidya and the Developer of the Neuro-Ayurveda Development System.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">His work extends across Child Development, Adult Mental Health and Senior Mental Health, with a focus on understanding the relationship between brain health, emotional wellbeing and overall quality of life.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Many families seek guidance when an older loved one experiences confusion, disorientation or changes in thinking. Through structured assessment, personalised guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps seniors and families better understand cognitive concerns while supporting healthy ageing through the Neuro-Ayurveda Development System.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Based in Delhi NCR, Dr. Ankush Garg supports seniors and families across India through structured assessment, personalised guidance and holistic mental health care.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Based in Delhi NCR, Dr. Ankush Garg supports seniors and families across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.</p>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0"><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]" aria-expanded={openFaq === index}>{faq.question}<ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>}</div>)}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-7">
              <h2 className="text-[24px] font-black">Book a Consultation</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">Concerned About Confusion or Disorientation in Yourself or a Loved One?</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">If confusion, difficulty recognising familiar places, changes in thinking or disorientation have started affecting daily life, understanding the underlying cause is an important first step.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">At Manovaidya, we help seniors and families better understand cognitive changes through structured assessment, personalised guidance and the Neuro-Ayurveda Development System.</p>
              <div className="mt-6">
                <h3 className="mb-3 text-[16px] font-black">Book Your Assessment Today</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {["Book Consultation", "Speak With Our Team", "Get Personalized Guidance", "Confusion & Disorientation Treatment", "Healthy Cognitive Ageing Guidance"].map((step) => <li key={step} className="flex gap-2 text-[14px] font-bold"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />{step}</li>)}
                </ul>
              </div>
              <div className="mt-8 border-t border-[#8e45bb] pt-6">
                <h3 className="mb-2 text-[18px] font-black">Support Healthy Cognitive Ageing With the Right Guidance</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Manovaidya Clinic</p>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>
                <a href="tel:+917823838638" className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Contact Us Now</a>
              </div>
            </div>
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Search</h2><label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3"><input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" /><Search className="h-4 w-4 text-[#7835A4]" /></label></SidebarCard>
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => <a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />{label}</a>)}
            </nav>
          </SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Categories</h2><div className="mt-4 space-y-3">{categories.map(({ label, count, Icon }) => <a key={label} href="#why-families-choose" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span><span>{count}</span></a>)}</div></SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Internal Links</h2><div className="mt-4 space-y-3">{internalLinks.map(({ title, href }) => <a key={title} href={href} className="block text-[12px] font-bold leading-5 text-[#51465a] transition hover:text-[#7835A4]">{title}</a>)}</div></SidebarCard>
          <RelatedSeniorMindCarePages />
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]"><CalendarCheck className="h-9 w-9 text-[#7835A4]" /><h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2><p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Book a structured assessment and personalized guidance session with the Manovaidya team.</p><a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a><p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p></SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Mail className="h-8 w-8" /></span><div><h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2><p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, senior mental health tips and Manovaidya updates.</p></div></div>
          <form className="flex gap-3"><input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" /><button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button></form>
        </div>
      </section>

    </main>
  );
}

export default ConfusionDisorientationSupportPage;

