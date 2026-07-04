import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Waves,
  Salad
} from "lucide-react";
import heroImage from "../images/stress-ibs-hero.png";
import refluxImage from "../images/ibs-symptoms-stress.png";
import gutBrainImage from "../images/gut-brain-ibs.png";
import lifestyleImage from "../images/ibs-lifestyle-management.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import consultationImage from "../images/ibs-consultation.png";
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is IBS?", id: "what-is-ibs" },
  { label: "Stress Connection", id: "stress-connection" },
  { label: "Gut-Brain Axis", id: "gut-brain-axis" },
  { label: "Symptoms", id: "symptoms" },
  { label: "Assessment Process", id: "assessment-process" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Support Approach", id: "support-approach" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-assessment" },
];

const faqs = [
  {
    question: "1. Can stress cause IBS?",
    answer: "Stress does not always lead to the development of IBS, but emotional stress may influence IBS symptoms. IBS is a complicated syndrome caused by alterations in gut function, stress, and other health and lifestyle-related issues."
  },
  {
    question: "2. How are stress and IBS related?",
    answer: "Stress and the digestive symptoms of some people with IBS are connected through the gut-brain axis, which illustrates the constant bidirectional communication between the brain and the digestive system."
  },
  {
    question: "3. Does IBS mean I have a psychological problem?",
    answer: "No. IBS does not mean that someone has a psychological problem. However, the close relationship between the gut and the brain means that emotional wellbeing significantly impacts digestive health."
  },
  {
    question: "4. What are the common symptoms of IBS?",
    answer: "Common symptoms include abdominal discomfort, bloating, altered bowel habits (diarrhea, constipation, or both), and feeling of incomplete bowel movements. An evaluation by a medical practitioner is essential for accurate diagnosis."
  },
  {
    question: "5. Can anxiety make IBS worse?",
    answer: "Yes, increased emotional stress and anxiety often correspond with increased digestive symptoms. The unpredictable nature of symptoms can also result in more anxiety, creating a cycle."
  },
  {
    question: "6. What is the gut-brain axis?",
    answer: "The gut-brain axis is a complex communication system between the brain and the digestive system mediated by nerves, hormones, or the immune system. It regulates gut motility, sensitivity, and stress responses."
  },
  {
    question: "7. When should I seek medical help for IBS?",
    answer: "You should seek medical help if symptoms last for weeks, affect your daily life, worsen over time, or if you notice warning signs like blood in the stool, difficulty swallowing, or unexplained weight loss."
  },
  {
    question: "8. How does Manovaidya support individuals with IBS?",
    answer: "At Manovaidya, we focus on the complete relationship between emotional wellbeing, gut health, and lifestyle using the Neuro-Ayurveda Development System, rather than focusing solely on the digestive symptoms."
  },
  {
    question: "9. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is a structured five-pillar framework. It considers the health of the brain, gut, behavior, and lifestyle together to support comprehensive mind-body wellbeing."
  },
  {
    question: "10. Does improving emotional wellbeing help manage IBS?",
    answer: "Yes. In conjunction with medical care and lifestyle interventions, emotional wellbeing provides patients with a better sense of control and coping ability in the face of persistent IBS challenges."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & IBS", count: 12, Icon: Activity },
  { label: "Gut-Brain Axis", count: 9, Icon: HeartHandshake },
  { label: "Digestive Health", count: 11, Icon: Salad },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Digestive Health", href: "/stress-and-digestive-health" },
  { label: "Stress & Acidity", href: "/stress-and-acidity" },
  { label: "Stress & Migraine", href: "/stress-and-migraine" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue" },
];

function SidebarCard({ children, className = "", id }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_10px_28px_rgba(139,67,186,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Services</h2>
      <div className="mt-4 space-y-3">
        {relatedPages.map(({ label, href }) => (
          <a key={label} href={href} className="group flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#8b43ba]">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#faf0fc] text-[#8b43ba] transition group-hover:bg-[#8b43ba] group-hover:text-white">
                <ArrowRight className="h-3 w-3" />
              </span>
              {label}
            </span>
          </a>
        ))}
      </div>
    </SidebarCard>
  );
}

function StressIBSSupportPage() {
  const [activeSection, setActiveSection] = useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
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
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#8b43ba]">Home</a>
                <span>/</span>
                <a href="/mind-body-health-care-india" className="transition hover:text-[#8b43ba]">Mind-Body Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Stress & IBS</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & IBS Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                The Connection Between Stress, Irritable Bowel Syndrome (IBS) and the Gut-Brain Connection.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book IBS Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(106,51,142,0.22)] lg:flex">
                <Salad className="mb-1 h-5 w-5" />
                Gut-Brain Axis Support
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(139,67,186,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and IBS support through the gut-brain connection" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & IBS</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Irritable Bowel Syndrome (IBS) is a digestive condition that leads to dysfunction of one’s digestive system. IBS may cause bloating, changes in bowel movements and abdominal pain, that may all vary in frequency and duration.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The gut and the brain are continuously communicating and this is referred to as the gut-brain axis. The close relationship between the gut and the brain leads to a situation where emotional stress may also influence IBS symptoms and the quality of life may worsen with ongoing digestive symptoms.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress does not always lead to the development of IBS, and IBS does not mean that someone has a psychological problem. IBS is a complicated syndrome that may vary in presentation and severity, and is caused by alterations in gut function, stress and other health and lifestyle related issues.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we believe in understanding the complete relationship between emotional wellbeing, gut health and lifestyle rather than focusing on digestive symptoms. Led by Dr. Ankush Garg, a Mental Health Specialist and the Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This is a structured five-pillar framework that considers health of the brain, gut, and health related behavior and lifestyle while supporting mind-body wellbeing.
            </p>
          </section>

          <section id="what-is-ibs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Irritable Bowel Syndrome (IBS)?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              IBS is a functional gastrointestinal disorder that affects the way the digestive system works. People with IBS may still show no evidence of damage in the digestive tract while experiencing frequent digestive symptoms.
            </p>
            
            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Key Facts about IBS:</h3>
              <ul className="mt-3 space-y-2.5">
                {["It is a lifelong condition that impacts people differently", "Symptoms can be tolerable for some, while others find them disruptive to daily life", "Diagnosis occurs after assessment of symptoms by a medical practitioner", "It involves alterations in gut function and stress", "It does not mean someone has a psychological problem"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and IBS Related?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress and the digestive symptoms of some people with IBS are connected through the gut-brain axis, which illustrates the constant bidirectional communication that occurs between the brain and the digestive system.
            </p>

            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_8px_22px_rgba(139,67,186,0.04)]">
               <h3 className="text-[15px] font-black text-[#21142d] mb-3">During stressful situations, individuals notice:</h3>
               <ul className="space-y-2 sm:columns-2">
                 {["Increased digestive symptoms", "Increased emotional stress", "Diminished overall wellbeing", "Emotional frustration from unpredictability", "Changes in gut sensitivity"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Increased emotional stress some people with IBS experience often corresponds with increased digestive symptoms. The unpredictable nature of some people's symptoms often results in an increased stress and an emotional frustration, ultimately creating a cycle of diminished overall wellbeing.
            </p>
          </section>

          <section id="gut-brain-axis" className="mt-9">
             <div className="rounded-lg border border-[#f4e6fa] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(139,67,186,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
               <div className="lg:max-w-[43%] lg:shrink-0">
                  <h2 className="text-[17px] font-black leading-snug text-[#6a338e] sm:text-[18px]">
                    The Gut-Brain Connection and IBS
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    The gut-brain axis is a complex communication system between the brain and the digestive system mediated by nerves, hormones, and the immune system.
                  </p>
               </div>
               <div className="mt-5 lg:mt-0 lg:flex-1">
                 <img src={gutBrainImage} alt="Gut brain connection and IBS" className="w-full rounded-lg h-[160px] object-cover" />
               </div>
             </div>
             
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                This communication system is responsible for the regulation of many functions of the digestive system, such as: Gut motility, Sensitivity of the digestive system, Appetite, Stress and emotional responses.
             </p>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Research on the gut-brain connection has allowed us to appreciate that supporting emotional wellbeing is a valid and necessary component of digestive health. Patients with IBS often report that stress makes their symptoms worse because this communication may be constant.
             </p>
          </section>

          <section id="symptoms" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms of IBS</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Symptoms of IBS are subjective and can be expressed in many different ways. Some of the more common symptoms that are reported are:
             </p>
             <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Abdominal discomfort and pain",
                   "Bloating and increased girth",
                   "Increased flatulence",
                   "Altered bowel habits (diarrhea/constipation)",
                   "Incomplete bowel movements",
                   "Postprandial symptoms"
                 ].map((label) => (
                   <div key={label} className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#f4e6fa] bg-white p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                     <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faf0fc] text-[#8b43ba]">
                       <Activity className="h-5 w-5" />
                     </span>
                     <span>{label}</span>
                   </div>
                 ))}
             </div>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                IBS symptoms can often be attributed to other gastrointestinal conditions. The evaluation and assessment of symptoms by a medical practitioner is essential for an accurate diagnosis.
             </p>
             
             <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Who Experiences IBS Symptoms with Increased Stress?</h3>
             <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                IBS Symptoms often worsen for some people during increased workplace or family stress, during/after major life changes, due to anxiety and emotional distress, and from other busy lifestyles and activities.
             </p>
          </section>
          
          <section className="mt-9">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={refluxImage} alt="IBS symptoms and stress" className="rounded-lg shadow-md w-full h-[220px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-[20px] font-black text-[#17111f]">Why Emotional Wellbeing Matters in IBS</h2>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   IBS takes a toll on many areas of a person's daily life. It can cause:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Anxiety when traveling", "Worry about IBS flare-ups when eating in public", "Reduced confidence when socializing", "Emotional frustration from unpredictable symptoms", "Poor or restless sleep", "Low self-esteem", "Declining social involvement"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <div className="mt-5 bg-[#faf0fc] rounded-lg p-5">
              <h3 className="text-[16px] font-black text-[#6a338e] mb-3">Common Signs To Get Checked</h3>
              <p className="text-[13px] font-bold text-[#51465a] mb-2">Most times, IBS is a chronic digestive disorder, but get evaluated for the following to rule out other conditions:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Blood in the stool", "Vomiting that doesn't stop", "Intense abdominal pain", "Rapid, unexplained weight loss", "Difficulty swallowing", "A fever that won't go away", "Worsening symptoms", "Symptoms disturbing sleep"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
              <p className="text-[12px] font-bold mt-2 text-[#51465a] italic">Never assume these symptoms are IBS.</p>
            </div>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & IBS Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our assessment process aims to increase awareness about the aspects affecting your wellbeing while facilitating advanced medical assessments and personalized recommendations.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Investigating Your Health History</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">We start each session by listening to your health journey. We ask about your health concerns, IBS diagnosis, symptom patterns, emotional health, stress levels, eating habits, and sleep quality.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our formal assessment focuses on various domains of life affected by IBS, including emotional stress, lifestyle habits, sleep quality, digestive health, nutrition, and work-life balance.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Appraisal of Your Wellbeing</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">We provide an informal explanation of our observations regarding your emotional wellbeing, lifestyle influences, and gaps. We then offer personalized recommendations to support informed choices.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we have a comprehensive understanding of Irritable Bowel Syndrome (IBS) using the Neuro-Ayurveda Development System, a five-pillar model integrative of brain and gut health, behavior, lifestyle and emotional health.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The health of the brain and its function helps to regulate emotions, increase resilience to stress, improve mental clarity, enhance the quality of sleep, and foster better decision-making.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy digestion is the result of many factors. This pillar focuses on gut-brain interactions, digestive health, healthy eating, eating patterns, and lifestyles.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain is continuously changing based on experiences and learning. This pillar focuses on healthy thinking patterns, emotional and behavioral stress, and cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Stress and experiences in the environment may impact emotional health and digestive comfort. This pillar looks at stress in the environment, recovery, relaxation, and lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy habits are the foundation of long-term health. This pillar focuses on healthy routines, behavioral stress, lifelong practices, and daily habits.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for IBS" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals with Stress & IBS</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               We recognize that everyone living with IBS has a unique experience. By examining the emotional health of the individual, we offer a tailored service addressing specific digestive and lifestyle concerns.
             </p>
             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                 {["Mind-Body Health Assessments", "Emotional Health Support", "Lifestyle & Nutritional Education", "Stress Management", "Gut-Brain Wellness Education", "Mind-Body Balance Support", "Routine Planning", "Monitoring and Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             
             <div className="mt-6 flex flex-col md:flex-row gap-5 items-center bg-[#faf0fc] rounded-lg p-5">
                <div className="md:w-1/3">
                  <img src={lifestyleImage} alt="Healthy lifestyle management" className="rounded-md w-full" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[16px] font-black text-[#6a338e]">Managing IBS Symptoms</h3>
                  <p className="text-[13px] mt-2 text-[#51465a]">IBS symptoms can be unpredictable, but healthy lifestyle habits help manage IBS effectively:</p>
                  <ul className="text-[13px] mt-2 space-y-1 font-semibold text-[#51465a]">
                    <li>• Regular meal schedules and daily activity</li>
                    <li>• Daily intake of water and consistent sleep</li>
                    <li>• Following health care provider's instructions and keeping a symptoms journal</li>
                  </ul>
                  <p className="text-[12px] mt-2 italic text-[#51465a]">Lifestyle changes must be individualized and discussed with your health care provider.</p>
                </div>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Trust Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              People from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and all over India trust Manovaidya because we take a comprehensive view of emotional and digestive health.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Detailed Assessments of IBS & Mind-Body", "Understanding of the Gut-Brain Axis", "Neuro-Ayurveda Development System", "Techniques for Managing Lifestyle & Stress", "Support for Holistic Emotional Wellbeing", "Consultations Available Online & In-Clinic", "Personalized Long-Term Wellness Plan"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
          </section>
          
          <section id="about-dr-ankush-garg" className="mt-9">
            <div className="rounded-lg bg-[#faf0fc] p-6 lg:flex lg:items-center lg:gap-8">
              <div className="mb-6 lg:mb-0 lg:w-[220px] lg:shrink-0">
                <div className="overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-[200px] w-full object-cover rounded-md" />
                </div>
              </div>
              <div className="lg:flex-1">
                <h2 className="text-[20px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="text-[14px] font-bold text-[#8b43ba] mt-1">Mental Health Specialist & Founder of Manovaidya</p>
                
                <div className="mt-4 space-y-3 text-[13.5px] font-semibold leading-relaxed text-[#51465a]">
                  <p>
                    Dr. Ankush Garg is the Founder of Manovaidya and the creator of the Neuro-Ayurveda Development System. He focuses on emotional and lifestyle health and the gut-brain axis for people with IBS and related stress health concerns.
                  </p>
                  <p>
                    He conducts structured assessments of the brain and gut for healthier long-term wellbeing and offers personalized support and follow-up to support mind-body balance.
                  </p>
                  <p>
                    Based in the Delhi NCR, he offers consultations on Mind-Body Health across India through in-clinic and online sessions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
            </div>
            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-[#f4e6fa] bg-white transition hover:border-[#8b43ba]">
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left sm:px-5">
                    <span className="pr-4 text-[14px] font-bold leading-snug text-[#21142d]">{faq.question}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === index ? "bg-[#8b43ba] text-white" : "bg-[#faf0fc] text-[#8b43ba]"}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-[#f4e6fa] px-4 pb-4 pt-3 text-[13px] font-medium leading-[1.6] text-[#51465a] sm:px-5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="book-assessment" className="mt-10 mb-8">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#6a338e] to-[#8b43ba] text-white shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Develop a Greater Understanding of IBS?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    For people with IBS or stress-related digestive issues, an evaluation of emotional health and gut health may offer greater management of overall wellness through simultaneous gut and mind support.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Reserve Assessment
                    </a>
                    <a href="https://wa.me/917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Connect with our Staff
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Consultation" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#f4e6fa] bg-[#faf0fc] px-3">
              <input
                type="search"
                placeholder="Search topics..."
                className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]"
              />
              <Search className="h-4 w-4 text-[#8b43ba]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(id);
                  }}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                    activeSection === id
                      ? "bg-[#faf0fc] text-[#8b43ba]"
                      : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#8b43ba]"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      activeSection === id ? "bg-[#8b43ba]" : "bg-[#d4bce2]"
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
                <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#8b43ba]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#8b43ba]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#faf0fc]" id="book-consultation">
            <CalendarCheck className="h-9 w-9 text-[#8b43ba]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Ready for Support?</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Schedule your consultation with Dr. Ankush Garg for a detailed Mind-Body Assessment.
            </p>
            <a
              href="tel:+917823894080"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white transition hover:bg-[#6a338e]"
            >
              Book Appointment
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressIBSSupportPage;

