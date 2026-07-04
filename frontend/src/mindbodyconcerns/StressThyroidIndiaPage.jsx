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
import heroImage from "../images/stress-thyroid-health.webp";
import refluxImage from "../images/thyroid-gland-health.webp";
import gutBrainImage from "../images/stress-hormonal-health.webp";
import lifestyleImage from "../images/healthy-thyroid-lifestyle.webp";
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import consultationImage from "../images/thyroid-consultation.webp";
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is the Thyroid Gland?", id: "what-is-thyroid" },
  { label: "Stress Connection", id: "stress-connection" },
  { label: "Hypothyroidism & Hyperthyroidism", id: "hypo-hyper" },
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
    question: "1. Can stress affect thyroid health?",
    answer: "Long-term emotional stress may influence the body's hormonal balance, sleep, lifestyle habits and overall wellbeing. While stress is generally not considered the direct cause of most thyroid disorders, it may affect how some individuals experience thyroid-related symptoms or cope with their condition."
  },
  {
    question: "2. Can stress cause thyroid problems?",
    answer: "Current medical evidence does not suggest that stress alone directly causes most thyroid disorders. Thyroid conditions usually develop because of multiple factors, including autoimmune diseases, genetics, certain medications and other medical conditions. Stress may indirectly influence overall health and symptom management."
  },
  {
    question: "3. What is the difference between hypothyroidism and hyperthyroidism?",
    answer: "Hypothyroidism occurs when the thyroid gland produces too little thyroid hormone, while hyperthyroidism occurs when it produces too much. Both conditions affect the body's metabolism and require diagnosis and treatment by a qualified healthcare professional."
  },
  {
    question: "4. What are the common symptoms of thyroid disorders?",
    answer: "Common symptoms may include fatigue, weight changes, feeling unusually cold or hot, hair thinning, dry skin, sleep disturbances, mood changes, changes in heart rate and difficulty concentrating. These symptoms can occur in many different conditions, so professional evaluation is essential."
  },
  {
    question: "5. Can stress make thyroid symptoms feel worse?",
    answer: "Some individuals living with thyroid disorders report that emotional stress makes fatigue, sleep problems or overall wellbeing more difficult to manage. Managing stress may support quality of life alongside appropriate medical treatment."
  },
  {
    question: "6. Can poor sleep affect thyroid health?",
    answer: "Sleep is important for overall hormonal health and wellbeing. Poor sleep may influence energy levels, emotional wellbeing and recovery. Maintaining healthy sleep habits supports overall health while living with thyroid conditions."
  },
  {
    question: "7. Can lifestyle habits support thyroid health?",
    answer: "Yes. Healthy eating, regular physical activity, adequate sleep, taking prescribed thyroid medication, attending follow-up appointments and managing stress all contribute to overall wellbeing. Lifestyle measures should complement—not replace—medical treatment."
  },
  {
    question: "8. When should I see a healthcare professional for thyroid symptoms?",
    answer: "You should seek medical evaluation if you experience persistent fatigue, unexplained weight changes, swelling in the neck, difficulty swallowing, rapid or irregular heartbeat, severe weakness, hair loss with other symptoms or ongoing intolerance to heat or cold."
  },
  {
    question: "9. Do thyroid disorders always cause noticeable symptoms?",
    answer: "No. Some people have mild thyroid disorders with few or no noticeable symptoms, while others experience significant changes in energy, metabolism and overall wellbeing. Blood tests are often needed to confirm a diagnosis."
  },
  {
    question: "10. What is a Stress & Thyroid assessment?",
    answer: "A Stress & Thyroid assessment is a structured evaluation that explores emotional wellbeing, stress levels, sleep quality, lifestyle habits, nutrition, daily routine, thyroid history and overall health. The assessment helps identify factors that may influence overall wellbeing and supports personalised guidance."
  },
  {
    question: "11. How does Manovaidya support individuals concerned about thyroid health?",
    answer: "At Manovaidya, we focus on understanding the relationship between emotional wellbeing, lifestyle and overall health rather than looking only at thyroid hormone levels. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand their overall mind-body wellbeing."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework that considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding emotional wellbeing, lifestyle and overall health. It provides a holistic perspective alongside comprehensive assessment and personalised guidance."
  },
  {
    question: "13. Can managing stress support people living with thyroid disorders?",
    answer: "Managing stress through healthy routines, regular physical activity, balanced nutrition, quality sleep and relaxation techniques may support emotional wellbeing and overall quality of life. These practices complement but do not replace appropriate medical diagnosis and treatment."
  },
  {
    question: "14. How are thyroid disorders diagnosed?",
    answer: "Thyroid disorders are usually diagnosed through a combination of medical history, physical examination, blood tests (such as thyroid hormone levels) and, when required, imaging studies. A qualified healthcare professional determines the appropriate investigations based on individual symptoms."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Thyroid support?",
    answer: "At Manovaidya, we focus on understanding the relationship between emotional wellbeing, lifestyle and long-term health through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our holistic approach helps individuals better understand stress-related wellbeing concerns while living with thyroid disorders alongside appropriate medical care."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Thyroid", count: 12, Icon: Activity },
  { label: "Hormonal Health", count: 9, Icon: HeartHandshake },
  { label: "Thyroid Support", count: 11, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health Care", href: "/mind-body-health-care-india/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & High Blood Pressure", href: "/stress-and-high-blood-pressure/" },
  { label: "Women's Mental Health Care", href: "/womens-mental-health-care/" },
  { label: "Adult Mental Health Care", href: "/adult-mental-health-care/" },
  { label: "Stress & Digestive Health", href: "/stress-and-digestive-health/" },
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

function StressThyroidIndiaPage() {
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
                <span className="text-[#4b345d]">Stress & Thyroid</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Hormonal Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Thyroid Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(225,79,121,0.22)] transition hover:bg-[#6a338e]">
                  Book Thyroid Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(194,62,98,0.22)] lg:flex">
                <Activity className="mb-1 h-5 w-5" />
                Mind-Body Health
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(225,79,121,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and thyroid health support through a holistic mind-body approach" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The thyroid is a small butterfly-shaped gland located in the front of the neck that produces hormones essential for regulating metabolism, energy production, body temperature, heart rate and many other body functions.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When the thyroid does not produce hormones in the right amount, it may lead to conditions such as hypothyroidism (underactive thyroid) or hyperthyroidism (overactive thyroid). These conditions require appropriate medical diagnosis and treatment.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people wonder whether emotional stress affects thyroid health. Research suggests that long-term stress may influence the body's hormonal balance and overall wellbeing. While stress is not generally considered the sole cause of thyroid disorders, it may influence how some individuals experience symptoms, cope with illness or maintain healthy lifestyle habits.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we believe in understanding the whole person rather than focusing only on thyroid hormone levels. Our approach considers emotional wellbeing, lifestyle, sleep and overall mind-body health while supporting healthier long-term habits alongside appropriate medical care.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together.
            </p>
          </section>

          <section id="what-is-thyroid" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is the Thyroid Gland?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The thyroid gland is an important part of the endocrine (hormonal) system.
            </p>
            
            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">It produces hormones that help regulate:</h3>
              <ul className="mt-3 space-y-2.5 sm:columns-2">
                {["Metabolism", "Energy production", "Body temperature", "Heart rate", "Digestion", "Growth and development", "Mood and overall wellbeing"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              When thyroid hormone levels become too low or too high, many body systems may be affected. A healthcare professional diagnoses thyroid disorders through clinical evaluation, blood tests and, when necessary, imaging studies.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Thyroid Health Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The body naturally responds to emotional stress by releasing stress hormones. Researchers continue to study how long-term stress may interact with the endocrine system, including the thyroid.
            </p>

            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_8px_22px_rgba(225,79,121,0.04)]">
               <h3 className="text-[15px] font-black text-[#21142d] mb-3">Although stress is not considered the direct cause of most thyroid disorders, ongoing emotional stress may influence:</h3>
               <ul className="space-y-2 sm:columns-2">
                 {["Sleep quality", "Energy levels", "Daily routines", "Emotional wellbeing", "Lifestyle habits", "Overall quality of life"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              People living with thyroid disorders may also experience emotional challenges that deserve attention alongside routine medical care.
            </p>
          </section>

          <section id="hypo-hyper" className="mt-9">
             <div className="rounded-lg border border-[#f4e6fa] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(225,79,121,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
               <div className="lg:max-w-[43%] lg:shrink-0">
                  <h2 className="text-[17px] font-black leading-snug text-[#6a338e] sm:text-[18px]">
                    Understanding Hypothyroidism and Hyperthyroidism
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    The thyroid gland may become either underactive or overactive. Both conditions require diagnosis and management by a qualified healthcare professional.
                  </p>
               </div>
               <div className="mt-5 lg:mt-0 lg:flex-1">
                 <img src={refluxImage} alt="Illustration of the thyroid gland and hormonal health" className="w-full rounded-lg h-[160px] object-cover" />
               </div>
             </div>
             
             <div className="mt-5 grid gap-5 sm:grid-cols-2">
               <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="text-[15px] font-black text-[#6a338e] mb-2">Hypothyroidism (Underactive Thyroid)</h3>
                 <p className="text-[13px] font-semibold text-[#51465a] mb-3">This occurs when the thyroid produces less hormone than the body requires.</p>
                 <ul className="space-y-1">
                   {["Fatigue", "Weight gain", "Feeling cold", "Dry skin", "Constipation", "Slow thinking", "Low mood", "Hair thinning"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
               </div>
               <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="text-[15px] font-black text-[#6a338e] mb-2">Hyperthyroidism (Overactive Thyroid)</h3>
                 <p className="text-[13px] font-semibold text-[#51465a] mb-3">This occurs when the thyroid produces more hormone than the body requires.</p>
                 <ul className="space-y-1">
                   {["Weight loss", "Rapid heartbeat", "Feeling hot", "Tremors", "Anxiety", "Sweating", "Difficulty sleeping", "Increased nervousness"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
               </div>
             </div>
          </section>

          <section id="symptoms" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms Associated With Thyroid Disorders</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Symptoms vary depending on the type of thyroid condition. People may experience:
             </p>
             <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Fatigue",
                   "Changes in body weight",
                   "Feeling unusually cold or hot",
                   "Hair thinning",
                   "Dry skin",
                   "Mood changes",
                   "Difficulty concentrating",
                   "Changes in heart rate",
                   "Sleep disturbances",
                   "Low energy levels"
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
                These symptoms can occur in many different medical conditions. An accurate diagnosis requires professional medical evaluation.
             </p>
             
             <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Can Stress Make Thyroid Symptoms Feel Worse?</h3>
             <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Some individuals living with thyroid disorders report that emotional stress may make symptoms feel more noticeable or difficult to manage.
             </p>
             <div className="mt-3 rounded-lg border border-[#f4e6fa] bg-white p-4">
                 <h4 className="text-[14px] font-bold text-[#21142d] mb-2">For example, stress may affect:</h4>
                 <ul className="space-y-1 sm:columns-2">
                   {["Sleep quality", "Energy levels", "Emotional balance", "Daily routines", "Self-care habits"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
             </div>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Managing stress does not replace medical treatment, but supporting emotional wellbeing may contribute to overall quality of life.
             </p>
          </section>
          
          <section className="mt-9">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={gutBrainImage} alt="Relationship between emotional stress and thyroid hormone balance" className="rounded-lg shadow-md w-full h-[220px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-[20px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h2>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Living with a thyroid disorder can sometimes affect emotional wellbeing. Some individuals experience:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Anxiety about long-term health", "Fatigue affecting daily activities", "Difficulty maintaining work-life balance", "Frustration due to ongoing symptoms", "Sleep difficulties", "Reduced confidence", "Lower quality of life"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Can Stress Cause Thyroid Problems?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people ask whether emotional stress can cause thyroid disease. Current medical evidence suggests that stress is generally not considered the direct cause of most thyroid disorders. However, long-term stress may influence the body's hormonal balance, emotional wellbeing and lifestyle habits, which can affect how some individuals experience thyroid-related symptoms.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              People already living with thyroid conditions may notice that emotional stress makes fatigue, sleep disturbances or overall wellbeing more difficult to manage. Managing stress should be viewed as a supportive lifestyle measure and not as a replacement for appropriate medical diagnosis or treatment.
            </p>
            
            <div className="mt-5 bg-[#faf0fc] rounded-lg p-5">
              <h3 className="text-[16px] font-black text-[#6a338e] mb-3">Common Signs You Should Not Ignore</h3>
              <p className="text-[13px] font-bold text-[#51465a] mb-2">Some thyroid-related symptoms should never be ignored. Seek medical evaluation if you notice:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Persistent fatigue", "Unexplained weight changes", "Swelling in the neck", "Difficulty swallowing", "Persistent hoarseness", "Rapid or irregular heartbeat", "Severe weakness", "Significant mood changes", "Hair loss with other thyroid symptoms", "Ongoing intolerance to heat or cold"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
              <p className="text-[13px] font-bold text-[#51465a] mt-3">Early evaluation helps identify the underlying cause and supports timely treatment.</p>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              You should consult a healthcare professional if symptoms continue for several weeks, you notice changes in neck swelling, your energy levels remain unusually low, weight changes occur without explanation, heart rate becomes unusually fast or slow, thyroid medication no longer seems effective, or you develop new symptoms after diagnosis. Regular follow-up is important for people already diagnosed with thyroid disorders.
            </p>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & Thyroid Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Living with a thyroid disorder often involves more than managing hormone levels. Many individuals also experience changes in energy, sleep, emotional wellbeing, concentration and daily routines. While medical diagnosis and treatment remain essential, understanding lifestyle and emotional health can also support overall wellbeing.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Every consultation begins with understanding your complete health history. We discuss: Your thyroid diagnosis (if any), current symptoms, medication history, blood test history, emotional wellbeing, stress levels, sleep quality, daily routine, nutrition habits, physical activity, and family history.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our structured assessment explores different areas that may influence your overall wellbeing, including emotional wellbeing, stress patterns, sleep quality, lifestyle habits, nutrition, physical activity, work-life balance, daily routines, and overall quality of life.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">After the assessment, we explain our observations in a simple and practical way. This includes personalised lifestyle guidance and practical next steps to help individuals better understand the relationship between emotional wellbeing, lifestyle and thyroid health.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, thyroid wellbeing is understood through the Neuro-Ayurveda Development System, a structured five-pillar framework that considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together. Rather than focusing only on thyroid hormone levels, this framework encourages a broader understanding of long-term mind-body wellness.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Emotional balance, Mental clarity, Stress resilience, Healthy sleep, Cognitive wellbeing, Overall quality of life. Supporting emotional wellbeing may help individuals better cope with everyday stress.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Nutrition and digestive wellbeing play an important role in overall health. This pillar focuses on understanding: Healthy eating habits, Gut-brain communication, Digestive wellbeing, Nutrition patterns, Lifestyle influences.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain continuously adapts through learning and everyday experiences. This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Environmental and lifestyle factors influence daily wellbeing. This pillar considers: Recovery, Relaxation, Environmental stress, Healthy routines, Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy habits support long-term wellbeing. This pillar focuses on: Sustainable daily routines, Behavioural awareness, Lifestyle improvement, Stress management, Healthy habit formation.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for thyroid health and mind-body wellness" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals Concerned About Thyroid Health</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Every individual's health journey is different. At Manovaidya, our support is personalised according to each person's emotional wellbeing, lifestyle and health concerns.
             </p>
             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                 {["Stress & Thyroid Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle Education", "Healthy Habit Planning", "Stress Management Guidance", "Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             
             <div className="mt-6 flex flex-col md:flex-row gap-5 items-center bg-[#faf0fc] rounded-lg p-5">
                <div className="md:w-1/3">
                  <img src={lifestyleImage} alt="Healthy lifestyle habits supporting thyroid health and emotional wellbeing" className="rounded-md w-full" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[16px] font-black text-[#6a338e]">Supporting Healthy Thyroid Function</h3>
                  <p className="text-[13px] mt-2 text-[#51465a]">Healthy lifestyle habits support overall wellbeing while complementing medical treatment. These may include:</p>
                  <ul className="text-[13px] mt-2 space-y-1 font-semibold text-[#51465a]">
                    <li>• Taking thyroid medication exactly as prescribed</li>
                    <li>• Attending regular medical follow-ups and blood tests</li>
                    <li>• Eating a balanced diet and getting adequate sleep</li>
                    <li>• Staying physically active and managing everyday stress</li>
                  </ul>
                  <p className="text-[12px] mt-2 italic text-[#51465a]">Lifestyle measures should complement—not replace—medical care.</p>
                </div>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India choose Manovaidya because of our holistic approach to mind-body health.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya to better understand the relationship between emotional wellbeing, stress and thyroid health through structured assessments and personalised lifestyle guidance.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Mind-Body Health Assessments", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Personalised Long-Term Wellness Approach", "Online & In-Clinic Consultations", "Guidance by Dr. Ankush Garg"].map((label) => (
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
                    Dr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System.
                  </p>
                  <p>
                    His work focuses on understanding the relationship between emotional wellbeing, lifestyle, brain health and mind-body wellness. Through structured assessments, personalised guidance and continuous follow-up, he helps individuals better understand how stress and daily habits may influence their overall wellbeing while living with chronic health conditions.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg provides Mind-Body Health Assessments, helping individuals understand the relationship between emotional wellbeing, lifestyle and thyroid health through the Neuro-Ayurveda Development System. He provides consultations across India through both online and in-clinic appointments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
            </div>
            <div className="grid gap-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-[#f4e6fa] bg-white transition hover:border-[#8b43ba]" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left sm:px-5">
                    <span className="pr-4 text-[14px] font-bold leading-snug text-[#21142d]" itemProp="name">{faq.question}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === index ? "bg-[#8b43ba] text-white" : "bg-[#faf0fc] text-[#8b43ba]"}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div className="overflow-hidden">
                      <div className="border-t border-[#f4e6fa] px-4 pb-4 pt-3 text-[13px] font-medium leading-[1.6] text-[#51465a] sm:px-5" itemProp="text">
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Thyroid Health?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Thyroid Assessment with Manovaidya to better understand the relationship between emotional wellbeing, lifestyle, hormonal health and thyroid disorders while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Thyroid Assessment
                    </a>
                    <a href="https://wa.me/917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and thyroid assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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
            <h2 className="mt-4 text-[16px] font-black leading-tight text-[#21142d]">
              Ready for an Assessment?
            </h2>
            <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#51465a]">
              Take the first step towards understanding your mind-body health. Our team is here to guide you.
            </p>
            <a
              href="tel:+917823894080"
              className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-[#8b43ba] text-[13px] font-black text-white shadow-sm transition hover:bg-[#6a338e]"
            >
              Book Now
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressThyroidIndiaPage;

