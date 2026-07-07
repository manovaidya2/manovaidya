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
  HeartPulse
} from "lucide-react";
import heroImage from "../images/stress-high-blood-pressure.webp";
import refluxImage from "../images/blood-pressure-monitoring.webp";
import gutBrainImage from "../images/stress-heart-health.webp";
import lifestyleImage from "../images/healthy-heart-lifestyle.webp";
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import consultationImage from "../images/blood-pressure-consultation.webp";
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is High Blood Pressure?", id: "what-is-hbp" },
  { label: "Stress Connection", id: "stress-connection" },
  { label: "Temporary vs Long-Term", id: "temporary-longterm" },
  { label: "Risk Factors", id: "risk-factors" },
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
    question: "1. Can stress increase blood pressure?",
    answer: "Yes. Emotional stress can raise blood pressure for a short time as part of the body's natural stress response. In most people, the reading comes back to its usual level once the stressful situation passes. If blood pressure stays high, it should be medically evaluated."
  },
  {
    question: "2. Can stress cause long-term high blood pressure?",
    answer: "Stress alone is generally not considered the only cause of long-term high blood pressure or hypertension. But ongoing stress can affect sleep, eating habits, physical activity and other lifestyle factors that matter for cardiovascular health."
  },
  {
    question: "3. What is the difference between temporary high blood pressure and hypertension?",
    answer: "Temporary blood pressure rise can happen during stress, exercise or emotional situations. It usually becomes normal afterwards. Hypertension means blood pressure stays high over time and needs diagnosis through repeated readings by a healthcare professional."
  },
  {
    question: "4. What are the common risk factors for high blood pressure?",
    answer: "Common risk factors include increasing age, family history, obesity, physical inactivity, high salt intake, smoking, excess alcohol, diabetes, kidney disease and unhealthy lifestyle habits. Most people develop hypertension because of a combination of factors."
  },
  {
    question: "5. Can anxiety temporarily increase blood pressure?",
    answer: "Yes. During anxiety or emotional stress, blood pressure may rise for a short time due to the body's normal fight-or-flight response. These temporary changes are different from chronic hypertension."
  },
  {
    question: "6. Can poor sleep affect blood pressure?",
    answer: "Healthy sleep is important for overall cardiovascular health. Poor sleep or long-term sleep problems may affect blood pressure and overall wellbeing in some people."
  },
  {
    question: "7. Can lifestyle habits help support healthy blood pressure?",
    answer: "Yes. Healthy eating, regular physical activity, maintaining a healthy body weight, limiting extra salt, avoiding tobacco, moderating alcohol, managing stress and getting enough sleep all support cardiovascular wellbeing. These habits work along with proper medical care."
  },
  {
    question: "8. When should I seek emergency medical care for high blood pressure?",
    answer: "Seek immediate medical help if you have severe chest pain, sudden weakness, difficulty speaking, sudden vision loss, severe shortness of breath, confusion, seizures, loss of consciousness or extremely high blood pressure with worrying symptoms."
  },
  {
    question: "9. Does high blood pressure always cause symptoms?",
    answer: "No. Many people with high blood pressure do not notice any symptoms. That is why hypertension is often called a 'silent condition.' Regular blood pressure monitoring is important, especially for adults and people with risk factors."
  },
  {
    question: "10. What is a Stress & High Blood Pressure assessment?",
    answer: "A Stress & High Blood Pressure assessment is a structured evaluation that looks at emotional wellbeing, stress levels, sleep quality, lifestyle habits, nutrition, physical activity, blood pressure history and overall health. It helps identify factors that may influence wellbeing and supports personalised guidance."
  },
  {
    question: "11. How does Manovaidya support individuals concerned about stress and high blood pressure?",
    answer: "At Manovaidya, we look at the connection between emotional wellbeing, lifestyle and cardiovascular health instead of focusing only on blood pressure readings. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help people understand their overall mind-body wellbeing."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework. It looks at Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding emotional wellbeing, lifestyle and overall health. It gives a holistic perspective along with assessment and personalised guidance."
  },
  {
    question: "13. Can managing stress support heart health?",
    answer: "Managing stress through healthy routines, regular physical activity, balanced nutrition, good sleep and relaxation techniques may support overall cardiovascular wellbeing. These practices support, but do not replace, medical diagnosis, treatment and blood pressure monitoring."
  },
  {
    question: "14. How often should I check my blood pressure?",
    answer: "How often you should check blood pressure depends on your age, health condition and doctor's advice. People with diagnosed hypertension or cardiovascular risk factors should follow the monitoring schedule given by their healthcare professional."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & High Blood Pressure support?",
    answer: "At Manovaidya, we focus on the relationship between emotional wellbeing, lifestyle and overall cardiovascular health through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our holistic approach helps people understand stress-related health concerns while supporting long-term mind-body wellbeing alongside appropriate medical care."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Blood Pressure", count: 12, Icon: HeartPulse },
  { label: "Cardiovascular Health", count: 9, Icon: HeartHandshake },
  { label: "Hypertension Support", count: 11, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health Care", href: "/mind-body-health-care-india/" },
  { label: "Stress & Headaches", href: "/stress-and-headaches/" },
  { label: "Stress & Migraine", href: "/stress-and-migraine/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & Thyroid", href: "/stress-and-thyroid/" },
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

function StressHighBloodPressureIndiaPage() {
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
                <span className="text-[#4b345d]">Stress & High Blood Pressure</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Cardiovascular Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & High Blood Pressure Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, High Blood Pressure and Emotional Wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(225,79,121,0.22)] transition hover:bg-[#6a338e]">
                  Book Blood Pressure Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(194,62,98,0.22)] lg:flex">
                <HeartPulse className="mb-1 h-5 w-5" />
                Heart Health
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(225,79,121,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and high blood pressure support through a holistic mind-body approach" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding the Relationship Between Stress, High Blood Pressure and Emotional Wellbeing</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              High blood pressure, also called hypertension, is a very common long-term health concern. It often builds up slowly. Many people do not feel any clear symptoms in the beginning, so they may not even know that their blood pressure is high. That is why it is often called a "silent condition."
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A common question people ask is: can stress increase blood pressure? During stress, the body naturally releases stress hormones. Because of this, heart rate and blood pressure can rise for a short time. In most people, these readings come down again once the stressful situation is over.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Long-term high blood pressure is different. It usually happens due to a mix of reasons, such as age, family history, diet, activity level, body weight, medical conditions and daily lifestyle habits. Emotional stress may not be the only cause, but it can affect sleep, eating habits, physical activity and other routines that matter for heart health.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we do not look only at blood pressure numbers. We try to understand the person as a whole. Our approach looks at emotional wellbeing, lifestyle, sleep and overall mind-body health so that healthier long-term habits can be built.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. It is a structured five-pillar framework that looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together.
            </p>
          </section>

          <section id="what-is-hbp" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is High Blood Pressure?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Blood pressure measures the force of blood pushing against the walls of your arteries. When this pressure stays higher than the recommended range again and again, it is called high blood pressure or hypertension.
            </p>
            
            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-5">
              <ul className="space-y-2.5">
                {["Many people with high blood pressure feel completely normal.", "They may not notice symptoms for many years.", "Regular health check-ups and monitoring are important.", "A healthcare professional diagnoses high blood pressure through repeated measurements."].map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Blood Pressure Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When a person feels emotionally stressed, the body switches on its natural fight-or-flight response.
            </p>

            <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_8px_22px_rgba(225,79,121,0.04)]">
               <h3 className="text-[15px] font-black text-[#21142d] mb-3">This temporary response may lead to:</h3>
               <ul className="space-y-2 sm:columns-2">
                 {["Increased heart rate", "Temporary rise in blood pressure", "Faster breathing", "Increased muscle tension", "Heightened alertness"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Once the stressful event passes, blood pressure usually returns towards its usual level. However, ongoing emotional stress may influence lifestyle habits such as:
            </p>
            <ul className="mt-3 space-y-2 sm:columns-2 pl-2">
                 {["Poor sleep", "Reduced physical activity", "Unhealthy eating habits", "Increased alcohol or tobacco use", "Weight gain"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                      {step}
                    </li>
                  ))}
            </ul>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              These factors may contribute to long-term cardiovascular health risks.
            </p>
          </section>
          
          <section id="risk-factors" className="mt-9">
             <div className="rounded-lg border border-[#f4e6fa] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(225,79,121,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
               <div className="lg:max-w-[43%] lg:shrink-0">
                  <h2 className="text-[17px] font-black leading-snug text-[#6a338e] sm:text-[18px]">
                    Common Risk Factors for High Blood Pressure
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    High blood pressure is influenced by many factors. Most people develop high blood pressure because several of these factors work together.
                  </p>
               </div>
               <div className="mt-5 lg:mt-0 lg:flex-1">
                 <img src={refluxImage} alt="Checking blood pressure as part of cardiovascular health assessment" className="w-full rounded-lg h-[160px] object-cover" />
               </div>
             </div>
             
             <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Increasing age",
                   "Family history",
                   "Obesity",
                   "Physical inactivity",
                   "High salt intake",
                   "Smoking",
                   "Excess alcohol",
                   "Diabetes",
                   "Kidney disease",
                   "Chronic stress"
                 ].map((label) => (
                   <div key={label} className="flex min-h-[50px] items-center gap-3 rounded-lg border border-[#f4e6fa] bg-white p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                     <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf0fc] text-[#8b43ba]">
                       <HeartPulse className="h-4 w-4" />
                     </span>
                     <span>{label}</span>
                   </div>
                 ))}
             </div>
          </section>

          <section id="temporary-longterm" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Temporary vs Long-Term High Blood Pressure</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                It is important to understand the difference between a temporary rise in blood pressure and long-term hypertension.
             </p>
             
             <div className="mt-5 grid gap-5 sm:grid-cols-2">
               <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="text-[15px] font-black text-[#6a338e] mb-2">Temporary Rise in Blood Pressure</h3>
                 <p className="text-[13px] font-semibold text-[#51465a] mb-3">A short-term increase may occur during:</p>
                 <ul className="space-y-1">
                   {["Emotional stress", "Anxiety", "Pain", "Public speaking", "Physical exertion", "Medical appointments", "Sudden frightening situations"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
                 <p className="text-[13px] font-semibold text-[#51465a] mt-3">In many cases, blood pressure returns to normal after the triggering event ends.</p>
               </div>
               <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="text-[15px] font-black text-[#6a338e] mb-2">Long-Term High Blood Pressure</h3>
                 <p className="text-[13px] font-semibold text-[#51465a] mb-3">Persistent hypertension develops slowly and usually needs ongoing medical evaluation and management. It may be influenced by:</p>
                 <ul className="space-y-1">
                   {["Family history & Age", "Diabetes & Kidney disease", "Obesity & High salt intake", "Smoking & Lack of physical activity", "Chronic lifestyle factors"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
                 <p className="text-[13px] font-semibold text-[#51465a] mt-3">Regular monitoring helps identify long-term blood pressure patterns.</p>
               </div>
             </div>
             
             <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Can Stress Affect Blood Pressure Readings?</h3>
             <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Yes. Many people notice temporary increases in blood pressure during emotional stress, workplace pressure, public speaking, medical appointments ("white coat effect"), family conflicts, or financial worries.
             </p>
             <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                These temporary changes are not the same as persistent hypertension. Long-term high blood pressure needs regular medical evaluation and management.
             </p>
          </section>
          
          <section className="mt-9">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={gutBrainImage} alt="Relationship between emotional stress and cardiovascular health" className="rounded-lg shadow-md w-full h-[220px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-[20px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h2>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Living with high blood pressure may affect emotional wellbeing. Some individuals experience:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Anxiety about blood pressure readings", "Fear of future health problems", "Difficulty sleeping", "Emotional stress after diagnosis", "Reduced confidence in physical activities", "Lower overall quality of life"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">Can Stress Cause High Blood Pressure?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress can increase blood pressure for a short time. This happens as part of the body's natural stress response. During stressful moments, hormones like adrenaline can raise the heart rate and make blood vessels tighter for a while. This can cause a temporary rise in blood pressure.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Long-term high blood pressure is different. It is usually connected with many causes. Stress alone is generally not considered the only cause of long-term hypertension. Still, it can affect lifestyle habits, and those habits can influence heart health.
            </p>
            
            <div className="mt-5 bg-[#faf0fc] rounded-lg p-5">
              <h3 className="text-[16px] font-black text-[#6a338e] mb-3">Common Signs You Should Not Ignore</h3>
              <p className="text-[13px] font-bold text-[#51465a] mb-2">Many people with high blood pressure do not feel any clear symptoms. However, if blood pressure becomes dangerously high, you may experience:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Severe headache", "Blurred vision", "Chest discomfort", "Shortness of breath", "Dizziness", "Nosebleeds (occasionally)", "Confusion"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
              <p className="text-[13px] font-bold text-[#51465a] mt-3 text-red-600">These symptoms require prompt medical evaluation and should never be ignored.</p>
            </div>
            
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Seek immediate emergency medical attention if you experience severe chest pain, sudden difficulty breathing, sudden weakness or numbness, difficulty speaking, sudden loss of vision, severe confusion, loss of consciousness, seizures, or extremely high blood pressure accompanied by concerning symptoms.
            </p>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & High Blood Pressure Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our assessment process explores how emotional wellbeing, lifestyle, sleep and overall health may be connected. We also encourage proper medical evaluation and ongoing care wherever needed.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Every consultation begins with listening carefully to your health concerns. We discuss your blood pressure history, recent readings, current medications, family history, emotional wellbeing, stress levels, sleep quality, eating habits, physical activity, lifestyle routine, and previous medical investigations.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our structured assessment explores factors that may influence overall cardiovascular wellbeing, including emotional wellbeing, stress patterns, sleep quality, lifestyle habits, nutrition, physical activity, work-life balance, behavioural patterns, daily routine, and overall quality of life.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">After the assessment, we explain our observations in a simple and practical way. Our aim is to help people understand the connection between emotional wellbeing, lifestyle and cardiovascular health so they can make informed healthcare decisions.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand mind-body health through the Neuro-Ayurveda Development System. This is a structured five-pillar framework that looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together. Instead of focusing only on blood pressure numbers, this framework helps us look at the wider factors that influence long-term wellbeing.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Emotional balance, Stress resilience, Mental clarity, Healthy sleep, Cognitive wellbeing, Overall quality of life. Supporting emotional wellbeing may help people respond to daily stress in a healthier way.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Utensils className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Nutrition and digestive wellbeing play an important role in overall health. This pillar focuses on: Healthy eating habits, Gut-brain communication, Digestive wellbeing, Nutrition patterns, Lifestyle influences.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain continuously adapts through learning and life experiences. This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Environmental and lifestyle factors may influence emotional wellbeing. This pillar considers: Recovery, Relaxation, Environmental stress, Daily balance, Healthy routines.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy habits support long-term cardiovascular and emotional wellbeing. This pillar focuses on: Healthy daily routines, Behavioural awareness, Lifestyle improvement, Stress management, Sustainable habit formation.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for stress and cardiovascular wellbeing" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals Concerned About Stress & High Blood Pressure</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Every person's health journey is unique. At Manovaidya, support is personalised according to each person's emotional wellbeing, lifestyle and health concerns.
             </p>
             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                 {["Stress & Blood Pressure Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle Education", "Healthy Habit Planning", "Stress Management Guidance", "Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             
             <div className="mt-6 flex flex-col md:flex-row gap-5 items-center bg-[#faf0fc] rounded-lg p-5">
                <div className="md:w-1/3">
                  <img src={lifestyleImage} alt="Healthy lifestyle habits supporting blood pressure and heart health" className="rounded-md w-full" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[16px] font-black text-[#6a338e]">Supporting Healthy Blood Pressure</h3>
                  <p className="text-[13px] mt-2 text-[#51465a]">Healthy daily habits play an important role in supporting cardiovascular wellbeing. These may include:</p>
                  <ul className="text-[13px] mt-2 space-y-1 font-semibold text-[#51465a]">
                    <li>• Eating a balanced diet and limiting excess salt intake</li>
                    <li>• Staying physically active and maintaining healthy body weight</li>
                    <li>• Getting adequate sleep and managing everyday stress</li>
                    <li>• Taking prescribed medications as advised by your doctor</li>
                  </ul>
                  <p className="text-[12px] mt-2 italic text-[#51465a]">Lifestyle changes should complement—not replace—appropriate medical care.</p>
                </div>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India choose Manovaidya because of our holistic approach to mind-body health.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya to better understand the relationship between stress, emotional wellbeing and blood pressure through structured assessments and personalised lifestyle guidance.
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
                    His work focuses on the relationship between emotional wellbeing, lifestyle, brain health and mind-body wellness. Through structured assessments, personalised guidance and follow-up, he helps people understand how stress and daily habits may influence overall health.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg provides Mind-Body Health Assessments, helping individuals understand the relationship between emotional wellbeing, lifestyle and cardiovascular wellness through the Neuro-Ayurveda Development System. He provides consultations across India through both online and in-clinic appointments.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and High Blood Pressure?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & High Blood Pressure Assessment with Manovaidya to better understand the relationship between emotional wellbeing, lifestyle, cardiovascular health and blood pressure while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Blood Pressure Assessment
                    </a>
                    <a href="https://wa.me/917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and high blood pressure assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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

export default StressHighBloodPressureIndiaPage;

