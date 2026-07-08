import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Search,
  ShieldCheck,
  Waves,
  Salad
} from "lucide-react";
import heroImage from "../images/stress-fatigue-new.png";
import mentalFatigueImage from "../images/mental-fatigue-new.png"; 
import lowEnergyImage from "../images/low-energy-new.png";
import lifestyleImage from "../images/healthy-energy-lifestyle-new.png"; 
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp"; 
import consultationImage from "../images/fatigue-consultation-new.png"; 
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Fatigue?", id: "what-is-fatigue" },
  { label: "Stress Connection", id: "stress-connection" },
  { label: "Symptoms & Causes", id: "symptoms-causes" },
  { label: "Warning Signs", id: "warning-signs" },
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
    question: "1. Can stress cause fatigue?",
    answer: "Yes. Emotional stress can contribute to physical, mental or emotional fatigue in some people. Long-term stress can affect sleep, focus, motivation and daily energy. Still, fatigue can have many causes, so it should not be blamed on stress alone."
  },
  {
    question: "2. What is the difference between normal tiredness and fatigue?",
    answer: "Normal tiredness usually improves after rest or sleep. Fatigue is more persistent. It can continue even after rest and may affect daily activities, work and motivation."
  },
  {
    question: "3. What are the common symptoms of fatigue?",
    answer: "Common symptoms may include constant tiredness, low energy, mental exhaustion, difficulty concentrating, poor motivation, reduced physical stamina, sleep disturbances, emotional exhaustion and feeling tired even after sleeping."
  },
  {
    question: "4. Can emotional stress make you feel physically tired?",
    answer: "Yes. During long periods of emotional stress, some people feel physically tired. Stress can affect sleep, recovery, energy levels and overall wellbeing, which may lead to exhaustion."
  },
  {
    question: "5. Can poor sleep contribute to fatigue?",
    answer: "Yes. Poor sleep quality or not getting enough sleep is one of the most common reasons for fatigue. Healthy sleep supports physical energy, mental clarity and emotional wellbeing."
  },
  {
    question: "6. Can fatigue be caused by medical conditions?",
    answer: "Yes. Fatigue can be linked with many medical conditions, including thyroid disorders, anaemia, diabetes, nutritional deficiencies, infections, heart disease and other health problems. Persistent fatigue should be evaluated by a healthcare professional."
  },
  {
    question: "7. Can lifestyle habits improve energy levels?",
    answer: "Healthy lifestyle habits such as regular physical activity, balanced nutrition, proper sleep, hydration, stress management and a consistent routine may support energy and wellbeing. These habits should work along with medical care when needed."
  },
  {
    question: "8. When should I see a healthcare professional for fatigue?",
    answer: "You should seek medical evaluation if fatigue lasts for several weeks, affects work or daily life, does not improve with rest, or comes with symptoms like unexplained weight loss, fever, severe weakness, chest pain, shortness of breath or persistent dizziness."
  },
  {
    question: "9. Is mental fatigue different from physical fatigue?",
    answer: "Yes. Mental fatigue affects concentration, memory, decision-making and motivation. Physical fatigue affects body energy, stamina and the ability to do daily activities. Many people experience both together."
  },
  {
    question: "10. What is a Stress & Fatigue assessment?",
    answer: "A Stress & Fatigue assessment is a structured evaluation. It looks at emotional wellbeing, stress levels, sleep quality, lifestyle habits, nutrition, daily routine, medical history and overall health. It helps identify factors that may affect wellbeing and supports personalised guidance."
  },
  {
    question: "11. How does Manovaidya support individuals experiencing stress-related fatigue?",
    answer: "At Manovaidya, we focus on the connection between emotional wellbeing, lifestyle and overall health instead of looking only at low energy. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help people understand their mind-body wellbeing."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is Manovaidya's five-pillar framework. It includes Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance. It helps us look at emotional wellbeing, lifestyle and overall health through a holistic lens, along with assessment and personalised guidance."
  },
  {
    question: "13. Can managing stress help improve overall wellbeing?",
    answer: "Managing stress through healthy routines, regular activity, balanced nutrition, good sleep and relaxation techniques may support emotional wellbeing and healthy energy. These practices do not replace proper medical diagnosis or treatment."
  },
  {
    question: "14. Why do I feel tired even after sleeping?",
    answer: "Feeling tired even after sleep can happen for many reasons. Poor sleep quality, stress, thyroid problems, nutritional deficiencies, medical conditions, medicines or lifestyle factors may be involved. If it continues, a qualified healthcare professional should evaluate it."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Fatigue support?",
    answer: "At Manovaidya, we focus on the relationship between emotional wellbeing, lifestyle and long-term health through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our holistic approach helps people understand stress-related fatigue while supporting sustainable mind-body wellbeing along with proper medical care."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Fatigue", count: 12, Icon: Activity },
  { label: "Brain Health", count: 9, Icon: HeartHandshake },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Thyroid", href: "/stress-and-thyroid/" },
  { label: "Stress & High Blood Pressure", href: "/stress-and-high-blood-pressure/" },
  { label: "Stress & Headaches", href: "/stress-and-headaches/" },
  { label: "Stress & Migraine", href: "/stress-and-migraine/" },
  { label: "Adult Mental Health Care", href: "/adult-mental-health-care-india/" },
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

function StressFatigueIndiaPage() {
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
        title="Stress & Fatigue Treatment in India | Mind-Body Health | Manovaidya"
        description="Looking for Stress & Fatigue treatment in India? Learn how chronic stress causes physical and mental fatigue, and explore Neuro-Ayurveda for renewed energy."
        keywords="Stress & Fatigue, Chronic Fatigue Treatment India, Stress and Energy Levels, Mental Fatigue, Physical Exhaustion and Stress, Adrenal Fatigue, Emotional Wellbeing, Mind-Body Health, Fatigue Assessment, Neuro-Ayurveda Development System, Low Energy Support"
        path="/stress-and-fatigue"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Fatigue Treatment in India",
          "description": "Looking for Stress & Fatigue treatment in India? Learn how chronic stress causes physical and mental fatigue, and explore Neuro-Ayurveda for renewed energy."
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
                <span className="text-[#4b345d]">Stress & Fatigue</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Brain Health</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Fatigue Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Fatigue and Emotional Wellbeing
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book Fatigue Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(106,51,142,0.22)] lg:flex">
                <Brain className="mb-1 h-5 w-5" />
                Brain Health
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(139,67,186,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and fatigue support through a holistic mind-body approach" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
              Feeling tired after a busy day is normal. But when tiredness stays for weeks, starts affecting your daily work, or does not improve even after proper rest, it should not be ignored. It may be your body's way of saying that something needs attention.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Fatigue is not just sleepiness. It can feel like physical weakness, mental heaviness or emotional exhaustion. A person may feel drained all the time, lose interest in work, or find it hard to focus even after sleeping well.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              There can be many reasons behind fatigue. Poor sleep, nutritional deficiencies, thyroid problems, infections, long-term health conditions, medicines and emotional stress can all play a role. That is why finding the real reason is important before deciding what support is needed.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we do not look at low energy as a small, isolated problem. We try to understand the complete person. Sleep, lifestyle, nutrition, emotional wellbeing and mind-body health are all considered together so that healthier long-term habits can be built.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This is a five-pillar framework that looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together.
            </p>
          </section>

          <section id="what-is-fatigue" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Fatigue?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Fatigue means a long-lasting feeling of physical, mental or emotional tiredness. It does not always go away with rest.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Normal tiredness after work or physical activity usually improves after sleep. Fatigue is different. It can disturb work, relationships, concentration and everyday life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Fatigue is not a disease by itself. It is a symptom that can happen because of many medical or psychological reasons.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A proper medical evaluation helps find the real cause and decide the right treatment or support.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Fatigue Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When a person stays under emotional stress for a long time, the body's stress response keeps working again and again.
            </p>
            <p className="text-[13px] font-bold mt-3 text-[#51465a]">Over time, this may influence:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Sleep quality",
                   "Emotional wellbeing",
                   "Energy levels",
                   "Concentration",
                   "Daily motivation",
                   "Recovery after work"
                 ].map((label) => (
                   <div key={label} className="flex min-h-[66px] items-center gap-3 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] shrink-0" />
                     <span>{label}</span>
                   </div>
                 ))}
             </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress can make some people feel tired, but it is not the only reason for fatigue. Many physical health problems can also cause constant tiredness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding how stress, lifestyle and energy levels are connected can help a person make better decisions about health.
            </p>
            
            <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Can Stress Cause Fatigue?</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress can affect both the mind and the body. When stress continues for a long time, a person may feel physically tired, mentally overloaded or emotionally drained, even after sleeping enough.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress can disturb sleep, routine, focus and recovery. But fatigue has many possible causes. So, constant tiredness should not be blamed only on stress.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              If fatigue stays for weeks or starts affecting daily life, a healthcare professional should evaluate it properly.
            </p>
            
            <div className="mt-8 flex flex-col lg:flex-row gap-6 items-start">
              <div className="lg:w-[50%]">
                 <h3 className="text-[18px] font-black text-[#17111f]">Understanding Physical and Mental Fatigue</h3>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Fatigue is not the same for every person. Many people feel both physical and mental fatigue at the same time.
                 </p>
                 <div className="mt-4 rounded-lg bg-[#faf0fc] p-4 border border-[#f4e6fa]">
                    <h4 className="font-bold text-[#6a338e]">Physical Fatigue</h4>
                    <p className="mt-1 text-[13px] font-semibold text-[#51465a]">Physical fatigue may involve: Low energy levels, Muscle tiredness, Reduced physical stamina, Feeling exhausted after simple activities, Difficulty completing daily tasks.</p>
                 </div>
                 <div className="mt-3 rounded-lg bg-[#faf0fc] p-4 border border-[#f4e6fa]">
                    <h4 className="font-bold text-[#6a338e]">Mental Fatigue</h4>
                    <p className="mt-1 text-[13px] font-semibold text-[#51465a]">Mental fatigue may involve: Difficulty concentrating, Poor memory, Reduced productivity, Feeling mentally overwhelmed, Difficulty making decisions, Reduced motivation.</p>
                 </div>
              </div>
              <div className="lg:w-[50%]">
                 <img src={mentalFatigueImage} alt="Person experiencing mental fatigue and emotional exhaustion" className="rounded-lg shadow-md w-full h-[280px] object-cover" />
              </div>
            </div>
          </section>

          <section id="symptoms-causes" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms Associated With Fatigue</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Fatigue does not feel the same for everyone.
             </p>
             <div className="mt-4 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-[60%]">
                   <p className="text-[14px] font-bold text-[#21142d] mb-3">Commonly reported symptoms include:</p>
                   <div className="grid gap-2 sm:grid-cols-2">
                     {[
                       "Constant tiredness",
                       "Low energy levels",
                       "Mental exhaustion",
                       "Difficulty concentrating",
                       "Poor motivation",
                       "Reduced physical stamina",
                       "Sleep disturbances",
                       "Tired even after sleeping",
                       "Reduced work performance",
                       "Emotional exhaustion"
                     ].map((label) => (
                       <div key={label} className="flex items-center gap-2 p-2 bg-white border border-[#f4e6fa] rounded-md text-[13px] font-bold text-[#51465a]">
                         <Activity className="h-4 w-4 text-[#8b43ba] shrink-0" />
                         <span>{label}</span>
                       </div>
                     ))}
                   </div>
                   <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a]">
                      If fatigue continues, it should be checked medically so the real cause can be understood.
                   </p>
                </div>
                <div className="lg:w-[40%]">
                   <img src={lowEnergyImage} alt="Persistent low energy affecting daily life and wellbeing" className="rounded-lg h-[250px] object-cover shadow-sm w-full" />
                </div>
             </div>

             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Common Causes of Fatigue</h3>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Fatigue can happen for many reasons. Some common causes include:
             </p>
             <div className="mt-4 flex flex-wrap gap-2">
                 {["Emotional stress", "Poor sleep", "Thyroid disorders", "Anaemia", "Diabetes", "Nutritional deficiencies", "Chronic infections", "Certain medications", "Depression", "Anxiety", "Burnout", "Long working hours"].map((label) => (
                   <span key={label} className="bg-[#faf0fc] text-[#6a338e] text-[13px] font-bold px-3 py-1.5 rounded-full border border-[#f4e6fa]">
                     {label}
                   </span>
                 ))}
             </div>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a] italic">
                Because there are many possible causes, it is better not to self-diagnose fatigue.
             </p>
          </section>
          
          <section id="warning-signs" className="mt-9">
            <div className="rounded-lg border-l-4 border-[#8b43ba] bg-[#faf0fc] p-6 shadow-sm">
               <h2 className="text-[18px] font-black text-[#21142d] mb-3">Common Signs You Should Not Ignore</h2>
               <p className="text-[14px] font-bold text-[#51465a] mb-4">Persistent fatigue should not be ignored, especially when it comes with other symptoms.</p>
               <p className="text-[14px] font-bold text-[#e14f79] mb-3">Seek medical evaluation if you experience:</p>
               <ul className="space-y-2 sm:columns-2">
                 {["Fatigue lasting several weeks", "Unexplained weight loss", "Persistent fever", "Severe weakness", "Shortness of breath", "Chest pain", "Frequent dizziness", "Swollen lymph nodes", "Blood in stool", "Persistent night sweats"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e14f79] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
               <p className="text-[13px] font-bold mt-4 text-[#e14f79] italic">These signs may point to an underlying medical condition that needs timely attention.</p>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-5 items-center">
                <div className="md:w-1/2">
                   <h3 className="text-[18px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h3>
                   <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                     Long-term fatigue can affect many parts of life.
                   </p>
                   <p className="text-[13px] font-bold mt-3 text-[#51465a]">Some individuals experience:</p>
                   <ul className="space-y-1 mt-2">
                     {["Reduced productivity", "Difficulty concentrating", "Irritability", "Lack of motivation", "Reduced confidence", "Social withdrawal", "Difficulty maintaining relationships", "Lower quality of life"].map((step) => (
                        <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                   </ul>
                   <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                     When emotional wellbeing is supported along with medical care and healthy lifestyle habits, daily life can become easier to manage.
                   </p>
                </div>
                <div className="md:w-1/2">
                   <img src={lifestyleImage} alt="Healthy lifestyle habits supporting energy and recovery" className="rounded-lg h-[300px] object-cover w-full shadow-md" />
                </div>
            </div>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & Fatigue Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Persistent fatigue usually has more than one reason. For one person, stress may be a major factor. For another person, sleep problems, nutritional deficiency, medical conditions or lifestyle habits may be involved. That is why the complete picture matters.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our assessment process looks at emotional wellbeing, lifestyle, sleep and daily habits in relation to energy levels. We also encourage medical evaluation whenever it is needed.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Every consultation starts with your complete health history. We discuss: When the fatigue started, Your daily energy levels, Sleep quality, Emotional wellbeing, Stress levels, Work routine, Physical activity, Nutrition habits, Existing medical conditions, Current medications, and Previous investigations and treatments. This helps us understand your overall health profile before giving personalised guidance.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our structured assessment looks at different areas that may affect energy and wellbeing. These include: Emotional wellbeing, Stress patterns, Sleep quality, Lifestyle habits, Nutrition, Physical activity, Work-life balance, Behavioural patterns, Daily routines, and Overall quality of life. The purpose is to understand how these areas are connected with long-term wellbeing and recovery.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">After the assessment, we explain the observations in simple and practical language. This includes: Emotional wellbeing profile, Lifestyle observations, Stress patterns, Sleep assessment, Daily routine analysis, Areas requiring attention, Personalised lifestyle guidance, and Practical next steps. Our aim is to help people understand the connection between emotional wellbeing, lifestyle and persistent fatigue, while also making informed healthcare decisions.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, persistent fatigue is understood through the Neuro-Ayurveda Development System. This five-pillar framework looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Instead of focusing only on tiredness, this framework helps us understand long-term mind-body wellness and sustainable energy in a broader way.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Mental clarity, Emotional balance, Healthy sleep, Stress resilience, Cognitive performance, and Overall quality of life. When brain health is supported, a person may handle daily mental demands in a better way.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Nutrition and digestive wellbeing are important for healthy energy levels. This pillar focuses on understanding: Healthy eating habits, Gut-brain communication, Digestive wellbeing, Nutrition patterns, and Lifestyle influences.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain keeps adapting through learning and life experiences. This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, and Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Daily environment and lifestyle can affect recovery. This pillar considers: Mental workload, Environmental stress, Recovery, Relaxation, and Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy habits support long-term energy and wellbeing. This pillar focuses on: Sustainable daily routines, Healthy sleep habits, Behavioural awareness, Stress management, and Lifestyle improvement.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for stress, fatigue and mind-body wellness" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals Concerned About Fatigue</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Every person's fatigue experience is different. At Manovaidya, support is personalised according to emotional wellbeing, lifestyle and health concerns.
             </p>
             <p className="mt-3 text-[14px] font-bold text-[#51465a]">Our approach may include:</p>
             <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                 {["Stress & Fatigue Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle Education", "Healthy Habit Planning", "Stress Management Guidance", "Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a] italic">
               Our aim is to help people understand how emotional wellbeing, lifestyle and daily habits can affect energy and quality of life.
             </p>
             
             <div className="mt-8 bg-[#faf0fc] rounded-lg p-5">
                <h3 className="text-[17px] font-black text-[#6a338e]">Supporting Healthy Energy Levels</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-semibold">Daily habits can support energy, recovery and overall wellbeing. Helpful practices include:</p>
                <ul className="mt-3 space-y-1 font-bold text-[#51465a] text-[13px] sm:columns-2">
                  <li>✔ Getting adequate sleep</li>
                  <li>✔ Eating a balanced diet</li>
                  <li>✔ Staying physically active</li>
                  <li>✔ Drinking enough water</li>
                  <li>✔ Taking regular breaks during work</li>
                  <li>✔ Managing everyday stress</li>
                  <li>✔ Limiting tobacco and alcohol</li>
                  <li>✔ Following medical advice</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">Lifestyle habits are helpful, but they should not replace proper medical care.</p>
             </div>
             
             <div className="mt-6 border border-[#f4e6fa] rounded-lg p-5 shadow-sm">
                <h3 className="text-[17px] font-black text-[#21142d]">When Should You See a Healthcare Professional?</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-bold">You should consult a healthcare professional if:</p>
                <ul className="mt-2 space-y-1 font-bold text-[#51465a] text-[13px]">
                  <li>• Fatigue affects your work or daily life</li>
                  <li>• Rest does not improve your energy levels</li>
                  <li>• Symptoms continue for several weeks</li>
                  <li>• You experience new or worsening symptoms</li>
                  <li>• You have existing medical conditions</li>
                  <li>• You are unsure about the cause of your fatigue</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">Early evaluation can help find the cause and guide proper treatment.</p>
             </div>
             
             <div className="mt-8">
                <h3 className="text-[18px] font-black text-[#17111f]">Looking Beyond Feeling Tired</h3>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">Fatigue is often a sign that the body or mind needs attention. Sleep, food, emotional wellbeing, activity level, existing medical conditions and daily routine all affect long-term energy.</p>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">At Manovaidya, we do not look only at tiredness. We look at the full picture. When emotional wellbeing, lifestyle and physical health are understood together, a person can make better choices for sustainable health.</p>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India choose Manovaidya because of our holistic approach to mind-body health.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Mind-Body Health Assessments", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Personalised Long-Term Wellness Approach", "Online & In-Clinic Consultations", "Guidance by Dr. Ankush Garg"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Our aim is to help people understand the relationship between emotional wellbeing, lifestyle and long-term health, while supporting sustainable wellbeing.
             </p>
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
                    His work focuses on the connection between emotional wellbeing, lifestyle, brain health and mind-body wellness. Through structured assessments, personalised guidance and regular follow-up, he helps people understand how stress and daily habits can affect their energy and overall wellbeing.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg provides Mind-Body Health consultations for individuals across India through both online and in-clinic appointments.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Persistent Fatigue?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Fatigue Assessment with Manovaidya to better understand the relationship between emotional wellbeing, lifestyle, energy levels and overall mind-body health while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Fatigue Assessment
                    </a>
                    <a href="https://wa.me/917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and fatigue assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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
              Schedule Consultation
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressFatigueIndiaPage;

