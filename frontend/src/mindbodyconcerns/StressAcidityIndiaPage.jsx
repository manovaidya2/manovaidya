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
import heroImage from "../images/stress-and-acidity.png";
import refluxImage from "../images/acid-reflux-stress.png";
import gutBrainImage from "../images/gut-brain-acidity.png";
import lifestyleImage from "../images/healthy-digestive-lifestyle.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-acidity.png";
import consultationImage from "../images/acidity-consultation.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Acidity?", id: "what-is-acidity" },
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
    question: "1. Can stress cause acidity?",
    answer: "Stress may affect digestive function and make acidity or heartburn feel more noticeable in some individuals. However, acidity usually has several contributing factors, such as diet, lifestyle, medical conditions and digestive disorders. Symptoms that persist should always be medically evaluated."
  },
  {
    question: "2. Can stress make acid reflux worse?",
    answer: "Some people notice that acid reflux becomes more noticeable when they are emotionally stressed. Researchers continue to study how the gut-brain connection influences digestive health. Stress may affect symptom severity, but it is only one of several possible factors."
  },
  {
    question: "3. What is the difference between acidity and acid reflux?",
    answer: "Acidity is a general term commonly used for symptoms such as heartburn and indigestion. Acid reflux specifically occurs when stomach acid flows back into the food pipe, which may cause a burning sensation in the chest or a sour taste in the mouth. A healthcare professional can help identify the actual cause of these symptoms."
  },
  {
    question: "4. What are the common symptoms of acidity?",
    answer: "Common symptoms may include heartburn, a burning sensation in the chest, a sour or bitter taste in the mouth, indigestion, upper abdominal discomfort, burping and feeling unusually full after eating. Because these symptoms can also occur in other digestive conditions, medical evaluation may be needed."
  },
  {
    question: "5. Can anxiety affect acidity?",
    answer: "Some individuals experience more digestive discomfort, heartburn or indigestion during periods of anxiety or emotional stress. Since these symptoms can have several possible causes, a professional assessment is important for an accurate diagnosis."
  },
  {
    question: "6. Can poor sleep make acidity worse?",
    answer: "Sleep and digestive health can influence one another. Poor sleep may increase stress and affect overall wellbeing, while acidity at night may interrupt sleep. Maintaining a healthy sleep routine can support both digestive and emotional health."
  },
  {
    question: "7. Can lifestyle habits influence acidity?",
    answer: "Yes. Eating habits, meal timings, body weight, physical activity, sleep quality, tobacco use and alcohol consumption can all influence digestive health. Healthy lifestyle practices should be used alongside appropriate medical care."
  },
  {
    question: "8. When should I seek medical attention for acidity?",
    answer: "You should seek medical evaluation if you have persistent heartburn, difficulty swallowing, unexplained weight loss, blood in vomit, black or bloody stools, severe chest pain, repeated vomiting or symptoms that continue even after lifestyle changes."
  },
  {
    question: "9. Is every episode of acidity caused by stress?",
    answer: "No. Acidity may be linked to dietary habits, acid reflux disease, certain medicines, digestive disorders or other medical conditions. Stress may influence symptoms in some people, but it should never automatically be assumed to be the only cause."
  },
  {
    question: "10. What is a Stress & Acidity assessment?",
    answer: "A Stress & Acidity assessment is a structured evaluation of digestive symptoms, emotional wellbeing, stress levels, lifestyle habits, sleep, nutrition and overall health. It helps identify factors that may be influencing wellbeing and provides a basis for personalised guidance."
  },
  {
    question: "11. How does Manovaidya support individuals experiencing stress-related acidity?",
    answer: "At Manovaidya, we look at the relationship between emotional wellbeing, lifestyle and digestive health instead of focusing only on the digestive symptom. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help individuals understand their overall mind-body wellbeing more clearly."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework. It considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while exploring emotional wellbeing, gut health and lifestyle. It offers a holistic perspective alongside comprehensive assessment and personalised guidance."
  },
  {
    question: "13. Can managing stress support digestive wellbeing?",
    answer: "Healthy stress management, regular physical activity, balanced nutrition, adequate sleep and consistent daily routines may support overall digestive wellbeing. These measures can complement appropriate diagnosis and treatment, but they should not replace medical care."
  },
  {
    question: "14. How is stress-related acidity different from IBS?",
    answer: "Acidity mainly affects the upper digestive system and is commonly associated with heartburn, acid reflux and indigestion. IBS primarily affects the intestines and is more often linked with abdominal pain, bloating and changes in bowel habits. Both conditions should be evaluated by a healthcare professional for an accurate diagnosis."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Acidity support?",
    answer: "Manovaidya focuses on the relationship between emotional wellbeing, the gut-brain axis and lifestyle through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. This holistic approach helps individuals understand stress-related digestive concerns while supporting long-term mind-body wellbeing alongside appropriate medical care."
  }
];


const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Acidity", count: 12, Icon: Activity },
  { label: "Gut-Brain Axis", count: 9, Icon: HeartHandshake },
  { label: "Digestive Health", count: 11, Icon: Salad },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Digestive Health", href: "/stress-and-digestive-health" },
  { label: "Stress & IBS", href: "/stress-ibs-support-india" },
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

function StressAcidityIndiaPage() {
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
      <Seo
        title="Stress & Acidity Treatment in India | Digestive Health | Manovaidya"
        description="Looking for Stress & Acidity treatment in India? Learn how stress affects acid reflux, indigestion, heartburn and digestive health at Manovaidya."
        keywords="Stress & Acidity, Acid Reflux and Stress, Acidity Treatment India, Stress and Indigestion, Gut-Brain Axis, Digestive Health, Heartburn and Stress, Stress-Related Acidity, Mind-Body Health, Acidity Assessment, Neuro-Ayurveda Development System, Emotional Wellbeing and Digestion, Chronic Acidity"
        path="/stress-and-acidity"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Acidity Treatment in India",
          "description": "Looking for Stress & Acidity treatment in India? Learn how stress affects acid reflux, indigestion, heartburn and digestive health at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">

        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#8b43ba]">Home</a>
                <span>/</span>
                <a href="/mind-body-health-care-india" className="transition hover:text-[#8b43ba]">Mind-Body Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Stress & Acidity</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Acidity Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Acidity and Digestive Health through the Neuro-Ayurveda Development System.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(225,79,121,0.22)] transition hover:bg-[#6a338e]">
                  Book Acidity Assessment
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(194,62,98,0.22)] lg:flex">
                <Salad className="mb-1 h-5 w-5" />
                Gut-Brain Axis Support
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(225,79,121,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and acidity support through the gut-brain connection" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & Acidity</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Acidity, heartburn and acid reflux are digestive concerns that many people experience. For some, these symptoms become more noticeable during emotionally stressful periods. For others, the discomfort may appear after eating certain foods, following an irregular meal routine or making changes to their lifestyle.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              It is important to understand that stress is not responsible for every case of acidity. Diet, everyday habits, existing medical conditions and digestive disorders can all play a role. At the same time, emotional stress may affect the way the digestive system functions and how strongly a person notices or experiences the symptoms.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The brain and the digestive system are in constant communication through the gut-brain axis. This complex connection involves the nervous system, hormones and immune pathways. It is one of the reasons emotional wellbeing and digestive health can influence one another so closely.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we look beyond the digestive symptom alone and try to understand the person as a whole. Our approach takes emotional wellbeing, lifestyle, sleep, nutrition and gut-brain communication into account while supporting long-term mind-body wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Under the guidance of Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This structured five-pillar framework brings brain health, gut health, behaviour and lifestyle together to support overall wellbeing.
            </p>
          </section>

          <section id="what-is-acidity" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Acidity?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Acidity is a commonly used term for discomfort linked to stomach acid. It may refer to acid moving back into the food pipe, known as acid reflux, or to irritation in the upper digestive system.
            </p>
            
            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">People experiencing acidity may notice:</h3>
              <ul className="mt-3 space-y-2.5">
                {["Heartburn", "Burning sensation in the chest", "Sour taste in the mouth", "Indigestion", "Upper abdominal discomfort", "Feeling of food coming back into the throat"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Depending on the underlying cause, these symptoms may occur only once in a while or may keep returning.
            </p>
            <p className="mt-3 text-[14px] font-bold leading-7 text-[#6a338e]">
              Persistent or severe symptoms should always be assessed by a qualified healthcare professional.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Acidity Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Emotional stress can affect digestion in different ways, and the experience is not the same for everyone.
            </p>

            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_8px_22px_rgba(225,79,121,0.04)]">
               <h3 className="text-[15px] font-black text-[#21142d] mb-3">During stressful situations, some individuals notice:</h3>
               <ul className="space-y-2 sm:columns-2">
                 {["Increased stomach discomfort", "Heartburn", "Changes in appetite", "Indigestion", "Greater awareness of digestive symptoms"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Researchers are still studying the many ways emotional wellbeing and digestive health interact through the gut-brain axis. Stress may affect digestive function or make symptoms feel more noticeable in some people, but acidity is generally influenced by several factors rather than stress alone.
            </p>
          </section>

          <section id="gut-brain-axis" className="mt-9">
             <div className="rounded-lg border border-[#f4e6fa] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(225,79,121,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
               <div className="lg:max-w-[43%] lg:shrink-0">
                  <h2 className="text-[17px] font-black leading-snug text-[#6a338e] sm:text-[18px]">
                    The Gut-Brain Connection and Acidity
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    The brain and digestive system remain connected through nerves, hormones and immune pathways.
                  </p>
               </div>
               <div className="mt-5 lg:mt-0 lg:flex-1">
                 <img src={gutBrainImage} alt="Gut brain connection and digestive health" className="w-full rounded-lg h-[160px] object-cover" />
               </div>
             </div>
             
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                This ongoing communication helps regulate: Digestive function, Appetite, Stress responses, Sensitivity within the digestive system, Overall digestive wellbeing.
             </p>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                During emotionally stressful periods, some individuals notice that digestive discomfort feels stronger or appears more often. Researchers continue to study how the gut-brain axis may influence digestive concerns, including acid reflux and indigestion.
             </p>
          </section>

          <section id="symptoms" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms of Acidity</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Acidity does not feel exactly the same for every person. Commonly reported symptoms include:
             </p>
             <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Burning sensation in the chest",
                   "Heartburn",
                   "Sour or bitter taste in the mouth",
                   "Indigestion",
                   "Upper abdominal discomfort",
                   "Burping",
                   "Feeling of fullness after eating",
                   "Mild nausea"
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
                These symptoms can also occur in other digestive conditions. For that reason, a professional medical evaluation is important when an accurate diagnosis is needed.
             </p>
             
             <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Who May Notice Acidity During Stress?</h3>
             <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Some individuals find that digestive discomfort becomes more noticeable during: Work-related stress, Examination periods, Emotional pressure, Anxiety, Poor sleep, Busy lifestyles, Irregular meal timings, Major life transitions.
             </p>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every person responds to stress differently, so this pattern may be clear for some individuals and absent in others.
             </p>
          </section>
          
          <section className="mt-9">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={refluxImage} alt="Acid reflux and heartburn" className="rounded-lg shadow-md w-full h-[220px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-[20px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h2>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Frequent acidity can affect much more than physical comfort. It may begin to influence everyday choices, sleep and confidence.
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Anxiety about eating certain foods", "Poor sleep because of nighttime symptoms", "Reduced confidence during travel", "Difficulty enjoying meals", "Emotional frustration due to recurring discomfort"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Can Stress Make Acidity Symptoms Worse?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people feel that heartburn, indigestion or acid reflux becomes more noticeable when they are going through an emotionally stressful period. Researchers continue to explore this relationship through the gut-brain axis, the communication pathway that constantly connects the brain and the digestive system.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              In some individuals, stress may affect eating habits, sleep, daily routines and the way digestive symptoms are perceived. Even so, acidity usually develops because of a combination of factors, so stress should not automatically be treated as the only cause.
            </p>
            
            <div className="mt-5 bg-[#faf0fc] rounded-lg p-5">
              <h3 className="text-[16px] font-black text-[#6a338e] mb-3">Common Signs You Should Not Ignore</h3>
              <p className="text-[13px] font-bold text-[#51465a] mb-2">Occasional acidity can happen. However, you should seek medical evaluation for:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Frequent heartburn", "Persistent acid reflux", "Burning sensation in the chest", "Difficulty swallowing", "Recurrent indigestion", "Persistent upper abdominal discomfort", "Frequent vomiting", "Symptoms lasting despite lifestyle changes"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Seek prompt medical evaluation if you experience: Difficulty swallowing, Unexplained weight loss, Blood in vomit, Black or bloody stools, Severe chest pain, Persistent vomiting, Symptoms lasting several weeks, Symptoms becoming progressively worse.
            </p>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & Acidity Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we focus on the complete relationship between digestive health, emotional wellbeing and lifestyle instead of looking at symptoms in isolation.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Every consultation begins by listening to and understanding your complete health journey, discussing symptoms, eating habits, sleep quality, stress levels, medical history and previous treatments.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our structured assessment looks at several areas that may influence digestive wellbeing: emotional wellbeing, lifestyle habits, stress patterns, nutrition, daily routine, and work-life balance.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Once the assessment is complete, we explain our observations in a simple, clear and practical way. This includes personalised guidance and practical next steps.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand acidity and digestive wellbeing through the Neuro-Ayurveda Development System. This structured five-pillar framework considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Emotional regulation, Stress resilience, Mental clarity, Healthy sleep, Cognitive wellbeing. When emotional wellbeing is supported, individuals may be better able to respond to everyday stress in a balanced way.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy digestion depends on several factors working together. This pillar focuses on understanding: Gut-brain communication, Digestive wellbeing, Nutrition, Healthy eating habits, Lifestyle influences.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The demands and stressors of the surrounding environment may affect both emotional wellbeing and digestive comfort. This considers: Environmental stress, Recovery, Relaxation, Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy daily routines play an important role in long-term digestive and emotional wellbeing. This focuses on: Healthy routines, Behavioural awareness, Lifestyle improvement, Sustainable daily habits.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals with Stress & Acidity</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Every person experiences acidity differently. The triggers, symptom pattern and effect on daily life may vary from one individual to another. At Manovaidya, support is personalised around each person's digestive concerns, emotional wellbeing and lifestyle.
             </p>
             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                 {["Stress & Acidity Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle & Nutrition Education", "Stress Management Guidance", "Healthy Routine Planning", "Gut-Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             
             <div className="mt-6 flex flex-col md:flex-row gap-5 items-center bg-[#faf0fc] rounded-lg p-5">
                <div className="md:w-1/3">
                  <img src={lifestyleImage} alt="Healthy lifestyle" className="rounded-md w-full" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[16px] font-black text-[#6a338e]">Supporting Digestive Health and Emotional Wellbeing</h3>
                  <p className="text-[13px] mt-2 text-[#51465a]">Simple, consistent daily habits can support both digestive health and emotional wellbeing. Helpful practices include:</p>
                  <ul className="text-[13px] mt-2 space-y-1 font-semibold text-[#51465a]">
                    <li>• Eating regular meals and avoiding very late-night meals</li>
                    <li>• Staying physically active and drinking enough water</li>
                    <li>• Maintaining healthy sleep habits and managing everyday stress</li>
                  </ul>
                  <p className="text-[12px] mt-2 italic text-[#51465a]">Lifestyle changes should support appropriate medical care, not replace it.</p>
                </div>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and other parts of India choose Manovaidya for an approach that looks at emotional wellbeing and digestive health together.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya to better understand how stress, acidity, acid reflux and digestive health may be connected through structured assessments and personalised guidance.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Mind-Body & Digestive Health Assessments", "Understanding of the Gut-Brain Axis", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Online & In-Clinic Consultations", "Personalised Long-Term Wellness Approach"].map((label) => (
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
                    Dr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System. His work focuses on the relationship between emotional wellbeing, gut health, brain function and lifestyle, particularly for individuals dealing with stress-related digestive concerns.
                  </p>
                  <p>
                    Through structured assessments, personalised guidance and regular follow-up, Dr. Ankush Garg helps individuals understand the gut-brain connection more clearly and work towards healthier, sustainable lifestyle habits.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg provides Mind-Body and Digestive Health Assessments to help individuals understand the relationship between emotional wellbeing, the gut-brain axis and stress-related acidity through the Neuro-Ayurveda Development System. He provides consultations to individuals across India through both online and in-clinic appointments.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress, Acidity or Heartburn?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Acidity Assessment with Manovaidya to understand the relationship between emotional wellbeing, acid reflux, digestive health and lifestyle more clearly while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Acidity Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
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
              href="tel:+917823838638"
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

export default StressAcidityIndiaPage;

