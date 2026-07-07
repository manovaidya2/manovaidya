import React from "react";
import {
  Activity,
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
import heroImage from "../images/memory-loss-forgetfulness-support-seniors-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import RelatedSeniorMindCarePages from "./RelatedSeniorMindCarePages";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Memory Loss", id: "understanding-memory-loss" },
  { label: "Ageing vs Memory Loss", id: "normal-ageing-vs-memory-loss" },
  { label: "MCI", id: "mild-cognitive-impairment" },
  { label: "Dementia Awareness", id: "dementia-awareness" },
  { label: "Signs & Symptoms", id: "common-signs-symptoms" },
  { label: "Causes", id: "what-causes-memory-loss" },
  { label: "Daily Life", id: "daily-life-impact" },
  { label: "Neuro-Ayurveda", id: "neuro-ayurveda-approach" },
  { label: "Brain Ageing", id: "supporting-brain-ageing" },
  { label: "How We Support", id: "how-manovaidya-supports" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Doctor", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Senior Mental Health", count: 12, Icon: HeartHandshake },
  { label: "Memory Loss", count: 10, Icon: Brain },
  { label: "Dementia Awareness", count: 8, Icon: ShieldCheck },
  { label: "Healthy Ageing", count: 11, Icon: Sparkles },
  { label: "Caregiver Support", count: 9, Icon: Users },
  { label: "Cognitive Wellbeing", count: 13, Icon: Activity },
];

const normalAgeingItems = [
  "Forget a name but remember it later.",
  "Misplace everyday items occasionally.",
  "Need reminders for appointments.",
  "Take longer to learn new technology.",
  "Forget why they entered a room for a short time.",
];

const attentionItems = [
  "Repeatedly ask the same questions.",
  "Forget important appointments despite reminders.",
  "Frequently lose familiar objects.",
  "Forget recently learned information.",
  "Become confused in familiar places.",
  "Struggle to follow conversations.",
  "Have difficulty completing routine tasks.",
];

const symptomGroups = [
  {
    title: "Memory Symptoms",
    text: "Many seniors may experience:",
    items: [
      "Forgetting names",
      "Misplacing belongings",
      "Repeating questions",
      "Forgetting appointments",
      "Forgetting recent conversations",
      "Difficulty remembering new information",
    ],
    Icon: Brain,
  },
  {
    title: "Cognitive Symptoms",
    text: "Some individuals notice:",
    items: [
      "Difficulty concentrating",
      "Slower thinking",
      "Confusion",
      "Difficulty planning tasks",
      "Trouble learning new information",
    ],
    Icon: Activity,
  },
  {
    title: "Behavioural Symptoms",
    text: "Some seniors become:",
    items: [
      "Frustrated",
      "Irritable",
      "Less confident",
      "Socially withdrawn",
      "Hesitant to participate in conversations",
    ],
    Icon: HeartHandshake,
  },
  {
    title: "Daily Life Changes",
    text: "As memory problems progress, some individuals may experience difficulty with everyday activities such as:",
    items: [
      "Managing medications",
      "Paying bills",
      "Remembering important dates",
      "Following recipes",
      "Managing finances",
      "Keeping appointments",
    ],
    Icon: CalendarCheck,
  },
];

const causes = [
  { title: "Normal Ageing", desc: "Small changes in memory can occur naturally as the brain ages." },
  { title: "Poor Sleep", desc: "Long-term sleep problems may reduce concentration and memory performance." },
  { title: "Chronic Stress", desc: "Persistent stress may affect attention, learning and memory." },
  { title: "Depression", desc: "Depression in older adults can sometimes cause concentration and memory difficulties that resemble cognitive decline." },
  { title: "Vitamin Deficiencies", desc: "Low levels of certain vitamins, such as vitamin B12, may contribute to memory problems in some individuals." },
  { title: "Medication Side Effects", desc: "Some medications may affect alertness, concentration or memory." },
  { title: "Thyroid Disorders", desc: "Both underactive and overactive thyroid conditions can influence memory and thinking." },
  { title: "Mild Cognitive Impairment (MCI)", desc: "MCI may cause noticeable memory changes while allowing individuals to remain largely independent." },
  { title: "Dementia", desc: "Several forms of dementia may affect memory, reasoning and daily functioning." },
  { title: "Alzheimer's Disease", desc: "Alzheimer's disease is one possible cause of progressive memory decline and requires proper medical diagnosis and ongoing management." },
];

const dailyLifeCards = [
  {
    title: "Independence",
    desc: "For many older adults, maintaining independence is an important part of healthy ageing. As memory changes become more noticeable, some seniors may find it difficult to:",
    items: ["Remember appointments", "Take medications on time", "Manage household tasks", "Follow daily routines", "Organise important documents", "Keep track of personal belongings"],
  },
  {
    title: "Emotional Wellbeing",
    desc: "Memory concerns can affect emotions as much as thinking. Many seniors experience:",
    items: ["Frustration", "Embarrassment", "Anxiety about forgetting things", "Reduced confidence", "Worry about becoming dependent", "Fear of developing dementia"],
  },
  {
    title: "Relationships",
    desc: "Memory changes may influence family relationships. Some families notice that their loved one:",
    items: ["Repeats the same stories", "Forgets recent conversations", "Becomes easily frustrated", "Needs frequent reminders", "Misunderstands situations", "Withdraws from family activities"],
  },
  {
    title: "Daily Activities",
    desc: "As memory problems progress, everyday activities may become more challenging. Some seniors experience difficulty with:",
    items: ["Shopping independently", "Cooking meals", "Managing finances", "Remembering important dates", "Following television programs or books", "Learning new technology"],
  },
  {
    title: "Safety",
    desc: "Memory difficulties may also affect personal safety. Families should pay attention if an older adult begins to:",
    items: ["Forget to switch off appliances", "Miss medications", "Become confused while travelling", "Wander away from familiar places", "Forget emergency contact information"],
  },
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy brain function plays an important role in memory, concentration and decision-making. The Brain Nourishment System focuses on understanding factors that may influence: Memory, Attention, Mental clarity, Learning, Emotional regulation, Cognitive resilience. Supporting brain health may contribute to healthier ageing and improved cognitive wellbeing.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Research continues to explore the relationship between gut health and brain function. Many seniors also experience: Appetite changes, Digestive discomfort, Reduced nutrition, Lifestyle imbalance. The Gut Response System focuses on understanding how overall physical wellbeing may support healthy ageing.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "The brain continues adapting throughout life. Regular mental stimulation, learning and healthy routines may help maintain cognitive function and support healthy neural activity as people age.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Healthy ageing also depends upon maintaining meaningful engagement with the surrounding environment. Activities such as: Reading, Listening to music, Social conversations, Gentle hobbies, Spending time outdoors may help support cognitive wellbeing while encouraging emotional engagement.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Memory concerns often lead to changes in behaviour. Some seniors may: Avoid social interactions, Become less confident, Rely heavily on family members, Stop participating in hobbies, Become frustrated more easily. Understanding these behavioural changes helps families provide supportive and respectful care while encouraging continued participation in meaningful activities.",
  },
];

const healthyAgeingItems = [
  { title: "Stay Mentally Active", desc: "Activities such as reading, puzzles, learning new skills, writing, playing board games or solving simple memory exercises may help keep the brain engaged." },
  { title: "Maintain Regular Physical Activity", desc: "Walking, stretching, yoga and other age-appropriate exercises support blood circulation, physical health and overall wellbeing." },
  { title: "Prioritise Healthy Sleep", desc: "Good quality sleep plays an important role in memory, concentration and emotional regulation." },
  { title: "Eat a Balanced Diet", desc: "Nutritious meals that include fruits, vegetables, whole grains, healthy fats and adequate protein support overall health and healthy ageing." },
  { title: "Stay Socially Connected", desc: "Regular conversations with family members, friends and community groups help reduce loneliness and encourage mental stimulation." },
  { title: "Manage Stress", desc: "Relaxation techniques, meditation, enjoyable hobbies and meaningful social interactions may support emotional wellbeing." },
  { title: "Seek Medical Evaluation for Memory Changes", desc: "Because memory loss has many possible causes, persistent or worsening symptoms should always be evaluated by a qualified healthcare professional." },
];

const supportSteps = [
  { step: "Step 1", title: "Comprehensive Assessment", desc: "Understanding memory concerns, emotional wellbeing, lifestyle habits, sleep quality, nutrition and daily functioning.", Icon: Search },
  { step: "Step 2", title: "Personalized Guidance", desc: "Providing individualized recommendations based on each senior's cognitive, emotional and lifestyle needs.", Icon: BookOpen },
  { step: "Step 3", title: "Brain Health & Emotional Wellbeing Support", desc: "Helping seniors and families understand memory changes, healthy routines and practical strategies that support daily life.", Icon: Brain },
  { step: "Step 4", title: "Neuro-Ayurveda Development System", desc: "Applying the five-pillar framework to understand cognitive wellbeing, emotional health, behaviour, lifestyle and healthy ageing.", Icon: Sparkles },
  { step: "Step 5", title: "Progress Tracking & Family Guidance", desc: "Creating a structured roadmap that helps seniors and caregivers monitor changes, strengthen healthy routines and support long-term wellbeing.", Icon: CalendarCheck },
];

const professionalGuidanceItems = [
  "Frequently forgets recent conversations",
  "Repeats the same questions many times",
  "Gets lost in familiar places",
  "Struggles with medications or finances",
  "Experiences increasing confusion",
  "Shows noticeable changes in behaviour or personality",
  "Has memory problems that interfere with daily independence",
];

const whyChooseCards = [
  {
    title: "Comprehensive Memory & Cognitive Assessment",
    desc: "Every senior's memory concerns are unique. Some older adults may experience increasing forgetfulness, difficulty remembering recent events, confusion during daily activities, repeating questions, difficulty managing medications, changes in behaviour, reduced confidence and emotional distress related to memory changes.",
    points: ["Memory concerns", "Daily functioning", "Emotional wellbeing", "Sleep quality", "Lifestyle habits", "Nutrition", "Family support", "Personal goals"],
  },
  {
    title: "Neuro-Ayurveda Development System",
    desc: "Manovaidya follows the Neuro-Ayurveda Development System, a structured framework that understands healthy brain ageing through five interconnected pillars.",
    points: ["Brain Nourishment System", "Gut Response System", "Neural Network System", "Sensory Integration System", "Behaviour Guidance System"],
  },
  {
    title: "Personalized Guidance",
    desc: "No two seniors experience memory changes in exactly the same way. Recommendations are personalised according to memory concerns, emotional wellbeing, lifestyle, sleep quality, daily routine, medical history and personal goals.",
    points: ["Memory concerns", "Emotional wellbeing", "Lifestyle", "Sleep quality", "Daily routine", "Medical history", "Personal goals"],
  },
  {
    title: "Holistic Brain Health Perspective",
    desc: "Healthy ageing involves more than memory alone. Our approach considers the relationship between brain health, emotional wellbeing, nutrition, lifestyle habits, sleep quality, physical activity and social engagement to provide a broader understanding of cognitive wellbeing during later life.",
    points: ["Brain health", "Emotional wellbeing", "Nutrition", "Lifestyle habits", "Sleep quality", "Physical activity", "Social engagement"],
  },
  {
    title: "Focus on Healthy Ageing",
    desc: "Rather than focusing only on memory difficulties, our goal is to help seniors maintain independence, strengthen cognitive wellbeing and support healthy ageing through practical lifestyle guidance and ongoing care.",
    points: ["Independence", "Cognitive wellbeing", "Healthy ageing", "Practical lifestyle guidance", "Ongoing care"],
  },
  {
    title: "Ongoing Support & Family Guidance",
    desc: "Families often play an essential role in supporting seniors with memory concerns. Regular follow-up and structured progress tracking help both seniors and caregivers understand changes, strengthen healthy routines and make informed decisions as needs evolve over time.",
    points: ["Regular follow-up", "Structured progress tracking", "Caregiver guidance", "Healthy routines", "Informed decisions"],
  },
];

const trustItems = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Assessment Before Recommendations",
  "Senior-Focused Holistic Care",
  "Online & In-Clinic Consultations Across India",
  "Guidance by Dr. Ankush Garg",
  "Family-Centred Support",
  "Focus on Healthy Brain Ageing & Cognitive Wellbeing",
];

const internalLinks = [
  { title: "Explore Senior Mental Health Care.", href: "/senior-mental-health-care/" },
  { title: "Learn about Depression Treatment for Seniors.", href: "/senior-depression-support-india/" },
  { title: "Understand Anxiety Treatment for Seniors.", href: "/senior-anxiety-support-india/" },
  { title: "Explore Sleep Disorders in Seniors.", href: "/senior-sleep-disorders-support-india/" },
  { title: "Learn about Loneliness & Social Isolation Support.", href: "/senior-loneliness-social-isolation-support-india/" },
  { title: "Explore Healthy Ageing Support.", href: "/healthy-ageing-support-india/" },
  { title: "Learn about Caregiver Support.", href: "/caregiver-support-india/" },
  { title: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
];

const entityLinks = [
  "Senior Mental Health Care",
  "Depression Treatment for Seniors",
  "Anxiety Treatment for Seniors",
  "Sleep Disorders in Seniors",
  "Loneliness & Social Isolation Support",
  "Healthy Ageing Support",
  "Caregiver Support",
  "Future Senior Brain Health Cluster",
  "Dementia Treatment",
  "Alzheimer's Disease Support",
  "Mild Cognitive Impairment \(MCI\) Treatment",
  "Cognitive Decline Support",
  "Brain Health for Seniors",
  "Senior Nutrition for Brain Health",
  "Caregiver Guide for Dementia",
  "Memory Enhancement Activities for Seniors",
];

const keywordGroups = [
  {
    title: "Primary Keywords",
    items: [
      "Memory Loss",
      "Forgetfulness",
      "Memory Loss Treatment",
      "Senior Memory Loss",
      "Memory Problems in Elderly",
      "Memory Loss in Seniors",
      "Brain Health",
      "Cognitive Wellbeing",
      "Healthy Brain Ageing",
      "Forgetfulness in Elderly",
    ],
  },
  {
    title: "Secondary Keywords",
    items: [
      "Mild Cognitive Impairment",
      "MCI",
      "Dementia",
      "Alzheimer's Disease",
      "Memory Decline",
      "Brain Ageing",
      "Senior Brain Health",
      "Cognitive Decline",
      "Memory Changes",
      "Healthy Ageing",
    ],
  },
  {
    title: "Long-Tail Keywords",
    items: [
      "What causes memory loss in old age",
      "Memory loss in seniors",
      "Forgetfulness in elderly people",
      "Early signs of dementia",
      "Difference between Alzheimer's and dementia",
      "How to improve memory naturally",
      "Memory problems in older adults",
      "Healthy brain ageing",
      "Mild Cognitive Impairment symptoms",
      "Professional support for memory loss",
    ],
  },
];

const faqs = [
  {
    question: "1. What causes memory loss in old age?",
    answer: "Memory loss in older adults can have many possible causes. While mild forgetfulness may occur as a normal part of ageing, memory problems can also be associated with poor sleep, stress, depression, vitamin deficiencies, thyroid disorders, medication side effects, Mild Cognitive Impairment (MCI), dementia or Alzheimer's disease. Because different conditions can cause similar symptoms, a proper medical evaluation is important to identify the underlying reason.",
  },
  {
    question: "2. Is memory loss a normal part of ageing?",
    answer: "Occasional forgetfulness, such as misplacing keys or taking longer to remember names, may occur with normal ageing. However, memory loss that interferes with daily activities, causes confusion or progressively worsens should not be considered a normal part of growing older. Persistent memory changes deserve professional assessment to determine their cause.",
  },
  {
    question: "3. What is the difference between forgetfulness and dementia?",
    answer: "Forgetfulness usually involves occasional difficulty remembering information that is often recalled later and does not significantly affect daily independence. Dementia is a group of conditions that gradually affect memory, thinking, reasoning and everyday functioning. Not everyone who experiences forgetfulness has dementia, making proper evaluation essential before drawing conclusions.",
  },
  {
    question: "4. What are the early signs of dementia?",
    answer: "Early signs of dementia may include repeatedly asking the same questions, forgetting recent conversations, becoming confused in familiar places, difficulty completing familiar tasks, misplacing important items, struggling with planning or decision-making and noticeable changes in behaviour or personality. These symptoms should be evaluated by a qualified healthcare professional because they may also occur in other medical conditions.",
  },
  {
    question: "5. What is Mild Cognitive Impairment (MCI)?",
    answer: "Mild Cognitive Impairment (MCI) is a condition in which memory or thinking problems are greater than expected for normal ageing but are not severe enough to significantly affect daily independence. Some people remain stable for years, some improve depending on the underlying cause and others may later develop dementia. Regular medical follow-up is important for monitoring cognitive health.",
  },
  {
    question: "6. Can stress cause memory loss in older adults?",
    answer: "Yes. Ongoing stress may affect concentration, attention and the ability to remember new information. Chronic stress can make memory problems feel more noticeable, even when there is no progressive neurological condition. Managing stress, maintaining healthy routines and seeking professional guidance when needed may support cognitive wellbeing.",
  },
  {
    question: "7. Can poor sleep affect memory?",
    answer: "Yes. Sleep plays an important role in learning, memory and overall brain function. Poor sleep, frequent waking or untreated sleep disorders may reduce concentration and memory performance. Improving sleep quality can support healthy cognitive functioning and emotional wellbeing.",
  },
  {
    question: "8. Can memory loss be reversed?",
    answer: "Whether memory loss can improve depends on its underlying cause. Memory problems related to vitamin deficiencies, medication side effects, poor sleep, thyroid disorders or depression may improve with appropriate medical care. Memory changes caused by progressive neurological conditions may require ongoing management rather than reversal. A proper medical evaluation is essential to determine the most appropriate approach.",
  },
  {
    question: "9. What foods support healthy brain function in seniors?",
    answer: "A balanced diet that includes fruits, vegetables, whole grains, legumes, nuts, seeds, healthy fats and adequate protein supports overall health and brain function. Foods rich in omega-3 fatty acids, antioxidants and essential vitamins may contribute to healthy ageing. Individual nutritional needs vary, so dietary advice should be personalised when necessary.",
  },
  {
    question: "10. How can seniors improve memory naturally?",
    answer: "Healthy lifestyle habits may support brain health. Staying mentally active, engaging in regular physical activity, maintaining good sleep, eating a balanced diet, staying socially connected, managing stress and following consistent daily routines may all contribute to healthy cognitive ageing. Seniors experiencing persistent memory concerns should also seek appropriate medical evaluation to identify possible underlying causes.",
  },
  {
    question: "11. What is the difference between Alzheimer's disease and dementia?",
    answer: "Dementia is a general term describing a group of conditions that affect memory, thinking and daily functioning. Alzheimer's disease is the most common cause of dementia, but it is not the only one. Other medical conditions may also lead to dementia symptoms. A qualified healthcare professional can determine the underlying cause through appropriate assessment.",
  },
  {
    question: "12. Can depression cause memory problems in older adults?",
    answer: "Yes. Depression in older adults can sometimes affect concentration, attention and memory, making individuals feel more forgetful. Because depression and certain cognitive conditions may share similar symptoms, professional assessment is important to identify the underlying cause and guide appropriate care.",
  },
  {
    question: "13. When should memory loss be evaluated by a doctor?",
    answer: "Memory changes should be evaluated if they interfere with daily activities, become progressively worse, cause confusion, affect safety or are accompanied by changes in behaviour or personality. Early assessment may help identify treatable causes and support appropriate planning and management.",
  },
  {
    question: "14. How does Manovaidya support seniors with memory concerns?",
    answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on memory problems. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help seniors and their families understand cognitive wellbeing, lifestyle habits, emotional health and behavioural changes that may influence memory. Our goal is to support healthy brain ageing, daily functioning and overall wellbeing through a holistic and personalised approach.",
  },
  {
    question: "15. When should families seek professional guidance for memory changes?",
    answer: "Families should consider seeking professional guidance if an older adult begins forgetting recent conversations, repeatedly asks the same questions, becomes confused in familiar places, struggles with daily activities, misses medications, shows personality changes or experiences worsening memory over time. Early assessment can help identify the possible causes of memory changes and support appropriate care for both the senior and their family.",
  },
];

const schemaGraph = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Memory Loss & Forgetfulness Treatment for Seniors in India",
    url: "https://www.manovaidya.com/memory-loss-forgetfulness-support-seniors-india/",
    headline: "Memory Loss & Forgetfulness Treatment for Seniors in India",
    description:
      "Looking for Memory Loss & Forgetfulness Treatment for Seniors in India? Learn about age-related memory changes, forgetfulness, dementia awareness, brain health and the Neuro-Ayurveda approach at Manovaidya.",
    about: ["Memory Loss", "Forgetfulness", "Cognitive Wellbeing", "Healthy Brain Ageing", "Dementia Awareness"],
    primaryImageOfPage: "memory-loss-forgetfulness-support-seniors-india.webp",
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
      { "@type": "ListItem", position: 3, name: "Memory Loss & Forgetfulness Treatment", item: "https://www.manovaidya.com/memory-loss-forgetfulness-support-seniors-india/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Ankush Garg",
    medicalSpecialty: ["Mental Health", "Child Development", "Senior Mental Health"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
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

function MemoryLossForgetfulnessSupportPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showNeuroPillars, setShowNeuroPillars] = React.useState(false);

  React.useEffect(() => {
    const fontId = "senior-memory-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  React.useEffect(() => {
    document.title = "Memory Loss & Forgetfulness Treatment for Seniors in India | Brain Health & Cognitive Wellbeing | Manovaidya";
    const description = "Looking for Memory Loss & Forgetfulness Treatment for Seniors in India? Learn about age-related memory changes, forgetfulness, dementia awareness, brain health and the Neuro-Ayurveda approach at Manovaidya.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    const schemaId = "memory-loss-forgetfulness-schema";
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
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/senior-mind-memory-care" className="transition hover:text-[#7835A4]">Senior Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Memory Loss & Forgetfulness Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Senior age</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Memory Loss & Forgetfulness Treatment for Seniors in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Seniors Understand Memory Changes, Forgetfulness & Cognitive Wellbeing
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Memory Assessment
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
                  alt="Memory loss and forgetfulness support for seniors in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            {[
              "As people grow older, occasional forgetfulness can become a common concern. Misplacing keys, forgetting a familiar name for a moment or walking into a room and forgetting why you entered may happen from time to time. While these experiences can be a normal part of ageing, frequent or progressive memory problems deserve attention and should not be ignored.",
              "Memory changes can affect confidence, independence and everyday life. Some older adults begin forgetting appointments, repeating the same questions, missing medications or finding it difficult to remember recent conversations. Family members are often the first to notice these changes and may wonder whether they are simply related to ageing or whether they indicate a more significant health concern.",
              "It is important to understand that memory loss has many possible causes. Some causes may be temporary or reversible, such as poor sleep, stress, depression, vitamin deficiencies or medication side effects. Others may be associated with conditions such as Mild Cognitive Impairment (MCI), dementia or Alzheimer's disease. A proper medical evaluation is important to understand the underlying cause before reaching any conclusions.",
              "Many seniors worry that every memory problem means Alzheimer's disease. In reality, not all forgetfulness is dementia, and not all dementia is Alzheimer's disease. Understanding the differences helps families seek appropriate guidance without unnecessary fear.",
              "At Manovaidya, we understand that healthy ageing involves much more than preserving memory alone. Brain health, emotional wellbeing, lifestyle, sleep, nutrition and daily routines all contribute to cognitive wellbeing during later life.",
              "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help seniors and their families better understand memory changes, cognitive wellbeing and the factors that support healthy ageing.",
            ].map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="mb-2 text-[14px] font-bold text-[#3b2e45]">At Manovaidya, Memory Loss & Forgetfulness Treatment Focuses On</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Memory Loss", Icon: Brain },
                  { label: "Forgetfulness", Icon: Search },
                  { label: "Mild Memory Changes", Icon: Activity },
                  { label: "Age-Related Memory Decline", Icon: CalendarCheck },
                  { label: "Cognitive Wellbeing", Icon: HeartHandshake },
                  { label: "Dementia Awareness", Icon: ShieldCheck },
                  { label: "Alzheimer's Awareness", Icon: Sparkles },
                  { label: "Healthy Brain Ageing", Icon: CheckCircle2 },
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
              <h3 className="text-[16px] font-black text-[#21142d]">Book a Memory Assessment</h3>
              <p className="mt-2 text-[13px] font-bold leading-6 text-[#51465a]">
                Take the first step toward understanding memory changes, forgetfulness and cognitive wellbeing through a structured assessment and personalized guidance process.
              </p>
            </div>
          </section>

          <section id="understanding-memory-loss" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Memory Loss & Forgetfulness</h2>
            {[
              "Memory is an important part of daily life. It helps us remember names, recognise faces, learn new information, manage daily activities and stay connected with family and friends.",
              "As people age, the brain naturally changes. Many seniors notice that recalling information may take slightly longer than it did in earlier years. Occasional forgetfulness is often considered a normal part of ageing and does not necessarily indicate a serious medical condition.",
              "However, when memory problems become frequent, interfere with daily life or continue worsening over time, they should be evaluated by a qualified healthcare professional.",
              "Many families searching for Memory Loss Treatment in India, Forgetfulness in Seniors, Memory Problems in Elderly People or Healthy Brain Ageing are looking for reliable information to better understand these changes.",
              "Recognising the difference between normal ageing and more significant memory problems helps families make informed decisions and seek appropriate support when needed.",
            ].map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Many families first notice concerns when a senior:</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Forgets recent conversations",
                  "Repeats the same questions",
                  "Misses medicines or appointments",
                  "Misplaces familiar objects",
                  "Finds it difficult to follow daily routines",
                  "Feels less confident due to memory changes",
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="normal-ageing-vs-memory-loss" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Normal Ageing vs Memory Loss</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Understanding the difference between age-related forgetfulness and memory loss is important.</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                <h3 className="text-[16px] font-black text-[#21142d]">Normal Age-Related Forgetfulness</h3>
                <p className="mt-2 text-[13px] font-bold text-[#5a5063]">Many healthy older adults may occasionally:</p>
                <BulletList items={normalAgeingItems} columns={false} />
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">These changes usually do not interfere significantly with independence or daily life.</p>
              </div>
              <div className="rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
                <h3 className="text-[16px] font-black text-[#21142d]">Memory Loss That Needs Attention</h3>
                <p className="mt-2 text-[13px] font-bold text-[#5a5063]">Memory changes should be evaluated if an individual begins to:</p>
                <BulletList items={attentionItems} columns={false} />
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">These symptoms do not automatically mean dementia, but they deserve professional assessment.</p>
              </div>
            </div>
          </section>

          <section id="mild-cognitive-impairment" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6">
            <h2 className="text-[20px] font-black text-[#17111f]">Mild Cognitive Impairment (MCI)</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Some older adults experience memory changes that are greater than expected for normal ageing but are not severe enough to significantly interfere with daily independence.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">This stage is often referred to as Mild Cognitive Impairment (MCI).</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Some individuals with MCI remain stable for years, some improve depending on the underlying cause and others may develop more significant cognitive conditions over time. Regular medical follow-up is important to monitor these changes.</p>
          </section>

          <section id="dementia-awareness" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Dementia & Alzheimer's Disease Awareness</h2>
            {[
              "Dementia is not a single disease. It is a general term used to describe a group of conditions that affect memory, thinking, communication and daily functioning.",
              "Alzheimer's disease is the most common cause of dementia, but it is not the only cause.",
              "Other conditions may also contribute to memory loss, making proper medical assessment essential before reaching a diagnosis.",
              "Understanding these differences helps reduce unnecessary fear while encouraging timely evaluation.",
            ].map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
          </section>

          <section id="common-signs-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Memory Loss</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">Memory changes may affect different aspects of daily life.</p>
            <div className="mt-5 space-y-5">
              {symptomGroups.map(({ title, text, items, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#7835A4]" />
                    <h3 className="text-[16px] font-black text-[#21142d]">{title}</h3>
                  </div>
                  <p className="mb-3 mt-2 text-[13px] font-bold text-[#51465a]">{text}</p>
                  <ul className="space-y-2 sm:columns-2">
                    {items.map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">These behavioural changes often develop because individuals become aware of their memory difficulties.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">When these activities become difficult, professional evaluation becomes increasingly important.</p>
          </section>

          <section id="what-causes-memory-loss" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Memory Loss?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Memory loss can develop for many different reasons.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Not all causes are permanent, and not every memory problem is related to dementia.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Some common causes include:</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {causes.map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <h3 className="text-[15px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Early Understanding Matters</h3>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Many people assume that memory loss is simply a normal part of getting older.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">While occasional forgetfulness may occur with ageing, significant or worsening memory problems should never be ignored.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Early assessment may help identify treatable causes, provide appropriate guidance and support individuals and families in planning for healthy ageing and better cognitive wellbeing.</p>
            </div>
          </section>

          <section id="daily-life-impact" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Memory Changes Can Affect Daily Life</h2>
            {[
              "Memory changes do not only affect the ability to remember things. Over time, they may influence confidence, independence, relationships and overall quality of life.",
              "Some seniors continue managing their daily activities with only occasional reminders, while others begin facing increasing difficulty with routine tasks. Families often notice these changes gradually and may become concerned about their loved one's safety and wellbeing.",
              "Understanding how memory changes affect daily life helps individuals and caregivers recognise when additional support or professional assessment may be helpful.",
            ].map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {dailyLifeCards.map(({ title, desc, items }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <h3 className="text-[15px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                  <BulletList items={items} columns={false} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">Understanding these changes with patience and compassion can strengthen communication and reduce unnecessary conflict.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Recognising these changes early allows families to provide appropriate support while encouraging as much independence as possible.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">These situations do not always indicate dementia but should be discussed with a qualified healthcare professional.</p>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Healthy Brain Ageing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">At Manovaidya, healthy brain ageing is viewed as a combination of cognitive health, emotional wellbeing, lifestyle habits and overall physical wellness.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Rather than focusing only on memory symptoms, the Neuro-Ayurveda Development System helps individuals understand the broader factors that may influence cognitive wellbeing throughout later life.</p>
            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for senior memory support"
              className="mt-5 mb-5 max-h-[400px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4 shadow-sm"
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
                {neuroPillars.map(({ title, text, Icon }) => (
                  <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] last:sm:col-span-2">
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

          <section id="supporting-brain-ageing" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Supporting Healthy Brain Ageing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Although ageing cannot be stopped, healthy lifestyle habits may support brain health and cognitive wellbeing.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {healthyAgeingItems.map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="text-[15px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-manovaidya-supports" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Seniors</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">At Manovaidya, support begins with understanding the individual rather than focusing only on memory concerns.</p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Our structured process includes:</p>
            <div className="mt-5 grid gap-4">
              {supportSteps.map(({ step, title, desc, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">{step}</p>
                      <h3 className="mt-1 text-[15px] font-black text-[#21142d]">{title}</h3>
                      <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">When Should You Consider Professional Guidance?</h3>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">You should consider seeking professional guidance if a senior:</p>
              <BulletList items={professionalGuidanceItems} />
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">A structured assessment can help identify possible contributing factors and guide appropriate next steps. Since memory changes can have many different causes, early evaluation is important for understanding the individual's needs.</p>
              <p className="mt-3 text-[14px] font-bold leading-7 text-[#51465a]">Our goal is to help seniors and their families better understand memory changes, support healthy brain ageing and improve quality of life through compassionate, personalised care.</p>
            </div>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Across India Choose Manovaidya</h2>
            {[
              "Memory changes in older adults often affect the entire family. Children, spouses and caregivers may notice small changes before the senior recognises them, leading to concerns about independence, safety and overall wellbeing.",
              "At Manovaidya, we understand that every senior experiences memory changes differently. Some individuals have age-related forgetfulness, while others may have medical conditions that require proper evaluation and ongoing care. Our approach focuses on understanding the whole person rather than making assumptions based on memory symptoms alone.",
              "Through structured assessment, personalised guidance and a holistic perspective, we aim to support seniors and their families in maintaining dignity, independence and quality of life.",
            ].map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {whyChooseCards.map(({ title, desc, points }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="text-[15px] font-black text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5a5063]">{desc}</p>
                  <BulletList items={points} columns={false} />
                </div>
              ))}
            </div>
            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Why Families Across India Trust Manovaidya</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Memory Loss & Forgetfulness Treatment, Healthy Brain Ageing Guidance and Senior Mental Health Support through both online and in-clinic consultations.</p>
            <div className="mt-5 rounded-lg bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Trust Manovaidya?</h3>
              <BulletList items={trustItems} />
            </div>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr. Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Autism, ADHD, Child Development & Mental Health Specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Dr. Ankush Garg is the Founder of Manovaidya and the Developer of the Neuro-Ayurveda Development System.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">His work extends across Child Development, Adult Mental Health and Senior Mental Health with a strong focus on understanding the relationship between brain health, emotional wellbeing and overall quality of life.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Many families seek guidance when an older loved one begins experiencing forgetfulness, memory changes or cognitive concerns. Through structured assessment, personalised guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps seniors and families better understand memory-related concerns while supporting healthy brain ageing through the Neuro-Ayurveda Development System.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Based in Delhi NCR, Dr. Ankush Garg supports seniors and families across India through structured assessment, personalised guidance and holistic mental health care.</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">Based in Delhi NCR, Dr. Ankush Garg supports seniors and families across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.</p>
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
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-7">
              <h2 className="text-[24px] font-black">Book a Consultation</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">Concerned About Memory Changes in Yourself or a Loved One?</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">If forgetfulness, memory problems or changes in thinking have started affecting daily life, independence or family wellbeing, understanding the underlying cause is an important first step.</p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">At Manovaidya, we help seniors and families better understand memory changes through structured assessment, personalised guidance and the Neuro-Ayurveda Development System.</p>
              <div className="mt-6">
                <h3 className="mb-3 text-[16px] font-black">Book Your Assessment Today</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Book Consultation",
                    "Speak With Our Team",
                    "Get Personalized Guidance",
                    "Memory Loss & Forgetfulness Treatment",
                    "Healthy Brain Ageing Guidance",
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-[#8e45bb] pt-6">
                <h3 className="mb-2 text-[18px] font-black">Support Healthy Brain Ageing With the Right Guidance</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Manovaidya Clinic</p>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>
                <a href="tel:+917823894080" className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Contact Us Now</a>
              </div>
            </div>
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
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}
                >
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />
                  {label}
                </a>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map(({ label, count, Icon }) => (
                <a key={label} href="#why-families-choose" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#7835A4]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Internal Links</h2>
            <div className="mt-4 space-y-3">
              {internalLinks.map(({ title, href }) => (
                <a key={title} href={href} className="block text-[12px] font-bold leading-5 text-[#51465a] transition hover:text-[#7835A4]">{title}</a>
              ))}
            </div>
          </SidebarCard>

          <RelatedSeniorMindCarePages />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Book a structured assessment and personalized guidance session with the Manovaidya team.</p>
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, senior mental health tips and Manovaidya updates.</p>
            </div>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="sr-only" aria-label="SEO keyword and entity strategy">
        {keywordGroups.map(({ title, items }) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{items.join(", ")}</p>
          </div>
        ))}
        <h2>Entity & Internal Linking Strategy</h2>
        <p>{entityLinks.join(", ")}</p>
        <p>Hero Image Filename: memory-loss-forgetfulness-support-seniors-india.webp</p>
        <p>Symptoms Image Filename: memory-loss-symptoms-seniors.webp</p>
        <p>Brain Health Image Filename: healthy-brain-ageing.webp</p>
        <p>Neuro-Ayurveda Image Filename: neuro-ayurveda-memory-support.webp</p>
        <p>CTA Image Filename: senior-brain-health-support.webp</p>
      </section>
    </main>
  );
}

export default MemoryLossForgetfulnessSupportPage;

