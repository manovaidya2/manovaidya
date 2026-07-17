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
import heroImage from "../images/stress-and-headaches.webp";
import tensionHeadacheImage from "../images/tension-headache.webp"; 
import stressNeckTensionImage from "../images/stress-neck-shoulder-tension.webp";
import lifestyleImage from "../images/healthy-lifestyle-headaches.webp"; 
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp"; 
import consultationImage from "../images/headache-consultation.webp"; 
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Stress-Related Headaches", id: "stress-related-headaches" },
  { label: "Stress Connection", id: "stress-connection" },
  { label: "Symptoms & Triggers", id: "symptoms-triggers" },
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
    question: "1. Can stress cause headaches?",
    answer: "Yes. Stress is a common trigger for tension-type headaches. It can increase muscle tension, disturb sleep and change daily routines, all of which may contribute to head pain in some people. Because headaches have many possible causes, frequent or severe symptoms should still be medically assessed."
  },
  {
    question: "2. What is a stress headache?",
    answer: "A stress headache usually refers to a tension-type headache that appears or becomes more noticeable during emotional or physical pressure. It often feels like a dull ache, steady pressure or a tight band around the head, sometimes with tension in the neck and shoulders."
  },
  {
    question: "3. What is the difference between a stress headache and a migraine?",
    answer: "A stress headache is commonly a tension-type headache and usually causes mild to moderate pressure on both sides of the head. Migraine is a neurological condition that may involve intense throbbing pain, nausea, sensitivity to light or sound and, in some people, an aura. A healthcare professional can help distinguish between them."
  },
  {
    question: "4. What are the common symptoms of stress-related headaches?",
    answer: "Typical symptoms include a dull ache, pressure across the forehead, tightness on both sides of the head, neck stiffness, shoulder tension, mental fatigue and difficulty concentrating. A persistent, severe or unusual headache should be medically evaluated."
  },
  {
    question: "5. Can anxiety trigger headaches?",
    answer: "It can. Some people notice that headaches occur more often when anxiety is high or emotional pressure has continued for several days. Since anxiety is only one possible factor, ongoing or worsening headaches should not be explained by stress alone without proper assessment."
  },
  {
    question: "6. Can poor sleep contribute to headaches?",
    answer: "Yes. Too little sleep, irregular sleeping hours or repeatedly disturbed sleep can contribute to headaches in some people. A reasonably consistent sleep routine supports both brain health and general wellbeing."
  },
  {
    question: "7. Can long hours of screen time cause headaches?",
    answer: "Prolonged screen use can lead to eye strain, poor posture and muscle tension around the neck and shoulders. For some people, that combination contributes to headaches. Regular breaks, better ergonomics and appropriate eye assessment may help when screen-related strain is suspected."
  },
  {
    question: "8. When should I seek immediate medical attention for a headache?",
    answer: "Seek emergency care for a sudden severe headache or a headache accompanied by weakness, confusion, speech difficulty, seizures, loss of consciousness, fever, sudden vision changes or a recent significant head injury. These warning signs require urgent medical evaluation."
  },
  {
    question: "9. Can dehydration contribute to headaches?",
    answer: "Yes. Not drinking enough fluid can cause or worsen headaches in some people, particularly during hot weather, physical activity or long working hours. Regular hydration supports overall health and may reduce dehydration-related head pain."
  },
  {
    question: "10. What is a Stress & Headache assessment?",
    answer: "It is a structured review of headache history, pain pattern, emotional wellbeing, stress, sleep, work routine, screen exposure, hydration, nutrition and general health. The assessment is used to identify relevant patterns and guide personalised support."
  },
  {
    question: "11. How does Manovaidya support individuals experiencing stress-related headaches?",
    answer: "Manovaidya looks beyond the latest episode of pain and considers emotional wellbeing, daily routine and mind-body health together. Structured assessment, personalised guidance and the Neuro-Ayurveda Development System are used to help the person understand the wider pattern."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "It is Manovaidya's five-pillar framework covering Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance. The framework brings emotional wellbeing, brain health and lifestyle into the same assessment, alongside personalised guidance."
  },
  {
    question: "13. Can managing stress help reduce headache episodes?",
    answer: "For some people, managing everyday stress can reduce exposure to one important headache trigger. Regular sleep, hydration, balanced meals, physical activity and relaxation may be useful, but they are additions to proper diagnosis and treatment rather than replacements for them."
  },
  {
    question: "14. Is every headache caused by stress?",
    answer: "No. Headaches can result from dehydration, infection, sinus conditions, eye strain, high blood pressure, migraine, neurological disorders and several other causes. Stress is only one factor among many, so recurring headaches should be assessed on their own pattern and symptoms."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Headache support?",
    answer: "Manovaidya combines a structured Stress & Headache Assessment with personalised guidance and the Neuro-Ayurveda Development System. The approach considers emotional health, brain health and lifestyle together while continuing to recognise the importance of appropriate medical care."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Headaches", count: 12, Icon: Activity },
  { label: "Brain Health", count: 9, Icon: HeartHandshake },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Migraine", href: "/stress-and-migraine/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & High Blood Pressure", href: "/stress-and-high-blood-pressure/" },
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

function StressHeadachesIndiaPage() {
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
        title="Stress & Headaches Treatment in India | Mind-Body Health | Manovaidya"
        description="Looking for Stress & Headaches treatment in India? Learn about tension headaches, stress triggers, and holistic Neuro-Ayurveda relief at Manovaidya."
        keywords="Stress & Headaches, Tension Headaches India, Stress Headaches Treatment, Headache Relief, Chronic Headaches, Emotional Wellbeing, Mind-Body Health, Headache Assessment, Neuro-Ayurveda Development System, Migraine vs Tension Headache"
        path="/stress-and-headaches"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Headaches Treatment in India",
          "description": "Looking for Stress & Headaches treatment in India? Learn about tension headaches, stress triggers, and holistic Neuro-Ayurveda relief at Manovaidya."
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
                <span className="text-[#4b345d]">Stress & Headaches</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Brain Health</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Headaches Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Headaches and Emotional Wellbeing
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book Headache Assessment
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
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
                <img src={heroImage} alt="Stress and headache support through a holistic mind-body approach" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & Headaches</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Headaches are so common that most people experience one at some point. They can arise for many reasons, but emotional stress is frequently linked with tension-type headaches and the kind of recurring head pain that appears during demanding periods of everyday life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A person may notice headaches returning during a busy work week, after several nights of poor sleep, or when emotional pressure has been building for some time. That does not mean stress explains every headache. Dehydration, eye strain, infection, sinus problems, high blood pressure, certain medicines and other medical conditions can also cause head pain.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Looking at when a headache begins, what was happening beforehand and how the body was feeling at the time can reveal useful patterns. This understanding can guide healthier daily choices, while medical evaluation remains important whenever symptoms are frequent, severe or unusual.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we do not look at the headache as an isolated complaint. Emotional health, sleep, food habits, work routine, lifestyle and overall mind-body wellbeing are considered together so that the wider picture is not missed.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This approach is led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya. His Neuro-Ayurveda Development System uses five connected pillars to explore brain health, behaviour, gut health, lifestyle and emotional wellbeing.
            </p>
          </section>

          <section id="stress-related-headaches" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Are Stress-Related Headaches?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The term stress-related headache is generally used when head pain becomes more noticeable during emotionally or physically demanding periods.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The most familiar example is a tension-type headache. People often describe it as steady pressure, a dull ache or the feeling of a band tightening around the head.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              These headaches are usually different from migraine. Severe nausea, a visual aura and marked sensitivity to light or sound are less typical in a tension-type headache.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Even so, several headache conditions can feel similar. A healthcare professional should assess the pattern when the diagnosis is unclear or the symptoms keep returning.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Headaches Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When a person feels under pressure, the body shifts into its normal stress response. This can affect muscles, sleep, breathing, posture and the ability to relax.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Increased muscle tension",
                   "Tightness around neck",
                   "Mental fatigue",
                   "Poor sleep",
                   "Difficulty relaxing",
                   "Shoulder tightness"
                 ].map((label) => (
                   <div key={label} className="flex min-h-[66px] items-center gap-3 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] shrink-0" />
                     <span>{label}</span>
                   </div>
                 ))}
             </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              For certain people, this combination can contribute to a tension-type headache or make an existing headache feel harder to manage.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress is only one possible trigger. The reason behind a headache can differ greatly from one person to another.
            </p>
            
            <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Can Stress Cause Headaches?</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress is one of the triggers most often associated with tension-type headaches. During a stressful situation, muscles around the scalp, neck and shoulders may stay tense for longer than usual. In some people, that tension is followed by pressure or aching in the head.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, it is important not to label every headache as a stress headache. Poor sleep, dehydration, prolonged screen use, eye strain, infections, sinus conditions, high blood pressure and neurological disorders are among the many other possible causes.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The most useful approach is to notice the pattern: when the headache starts, how long it lasts, what it feels like and what else was happening around that time. This information can support a more accurate assessment and better long-term decisions.
            </p>
            
            <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={stressNeckTensionImage} alt="Neck and shoulder muscle tension associated with stress headaches" className="rounded-lg shadow-md w-full h-[250px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h3 className="text-[18px] font-black text-[#17111f]">Understanding Tension-Type Headaches</h3>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Tension-type headache is one of the most frequently experienced forms of head pain.
                 </p>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   People often describe them as:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["A tight band around the head", "Pressure across the forehead", "Mild to moderate aching pain", "Tightness in the neck and shoulders", "Discomfort that develops gradually"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
                 <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                   Compared with migraine, tension-type headaches are less likely to involve severe nausea, a visual aura or strong sensitivity to light and sound. Because headache symptoms can overlap, especially in the early stages, professional evaluation is the safest way to confirm what type of headache a person is experiencing.
                 </p>
              </div>
            </div>
          </section>

          <section id="symptoms-triggers" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms of Stress-Related Headaches</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                A stress-related headache does not feel exactly the same for everyone.
             </p>
             <div className="mt-4 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-[60%]">
                   <p className="text-[14px] font-bold text-[#21142d] mb-3">Commonly reported symptoms include:</p>
                   <div className="grid gap-2 sm:grid-cols-2">
                     {[
                       "Dull aching head pain",
                       "Pressure around forehead",
                       "Tightness on both sides",
                       "Neck stiffness",
                       "Shoulder muscle tightness",
                       "Mild sensitivity to light/sound",
                       "Mental fatigue",
                       "Difficulty concentrating"
                     ].map((label) => (
                       <div key={label} className="flex items-center gap-2 p-2 bg-white border border-[#f4e6fa] rounded-md text-[13px] font-bold text-[#51465a]">
                         <Activity className="h-4 w-4 text-[#8b43ba] shrink-0" />
                         <span>{label}</span>
                       </div>
                     ))}
                   </div>
                   <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a]">
                      A headache that is persistent, severe or different from your usual pattern should be medically evaluated rather than assumed to be stress-related.
                   </p>
                </div>
                <div className="lg:w-[40%]">
                   <img src={tensionHeadacheImage} alt="Person experiencing a tension-type headache due to stress" className="rounded-lg h-[250px] object-cover shadow-sm w-full" />
                </div>
             </div>

             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Who May Experience Stress-Related Headaches?</h3>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Stress-related headaches are commonly reported by:
             </p>
             <ul className="mt-4 space-y-2 sm:columns-2">
                 {["Working professionals", "Students during examinations", "People with demanding schedules", "Caregivers", "Individuals experiencing emotional stress", "People with poor sleep habits", "Those working long hours on computers"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                These groups may face common triggers such as screen strain, long working hours, reduced sleep or sustained mental pressure. Still, belonging to one of these groups does not automatically explain the headache; the underlying cause needs to be understood individually.
             </p>
             
             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Common Headache Triggers</h3>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                There is no single trigger list that applies to everyone. A factor that causes headaches for one person may have no effect on another. Some commonly reported triggers include:
             </p>
             <div className="mt-4 flex flex-wrap gap-2">
                 {["Emotional stress", "Poor sleep", "Mental fatigue", "Dehydration", "Skipping meals", "Long hours of screen time", "Poor posture", "Eye strain", "Excessive caffeine", "Physical exhaustion"].map((label) => (
                   <span key={label} className="bg-[#faf0fc] text-[#6a338e] text-[13px] font-bold px-3 py-1.5 rounded-full border border-[#f4e6fa]">
                     {label}
                   </span>
                 ))}
             </div>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Keeping a simple record of headaches, meals, sleep, screen time and stressful events can make personal patterns easier to recognise over time.
             </p>
          </section>
          
          <section id="warning-signs" className="mt-9">
            <div className="rounded-lg border-l-4 border-[#8b43ba] bg-[#faf0fc] p-6 shadow-sm">
               <h2 className="text-[18px] font-black text-[#21142d] mb-3">Warning Signs You Should Not Ignore</h2>
               <p className="text-[14px] font-bold text-[#51465a] mb-4">Most headaches are not caused by a medical emergency. Still, certain symptoms should never be ignored because they can point to a more serious problem.</p>
               <p className="text-[14px] font-bold text-[#e14f79] mb-3">Seek urgent medical care if you experience:</p>
               <ul className="space-y-2 sm:columns-2">
                 {["Sudden severe headache", "Weakness in face, arm or leg", "Difficulty speaking", "Loss of consciousness", "Confusion", "Seizures", "Fever with severe headache", "Headache after head injury", "Sudden vision changes", "Persistent vomiting"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e14f79] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
               <p className="text-[13px] font-bold mt-4 text-[#e14f79] italic">These warning signs need immediate emergency assessment. Do not wait to see whether they settle on their own.</p>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-5 items-center">
                <div className="md:w-1/2">
                   <h3 className="text-[18px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h3>
                   <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                     Recurring head pain can gradually affect much more than physical comfort. It may change the way a person works, rests, socialises and plans the day.
                   </p>
                   <p className="text-[13px] font-bold mt-3 text-[#51465a]">Some individuals experience:</p>
                   <ul className="space-y-1 mt-2">
                     {["Reduced work productivity", "Difficulty concentrating", "Poor sleep", "Irritability", "Reduced physical activity", "Emotional frustration", "Lower quality of life", "Anxiety about recurring headaches"].map((step) => (
                        <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                   </ul>
                   <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                     Giving attention to emotional wellbeing, while also following suitable medical advice and practical lifestyle measures, can make the everyday burden of recurring headaches easier to handle. Emotional support, alongside proper medical care, can help protect quality of life when headaches have begun to affect everyday functioning.
                   </p>
                </div>
                <div className="md:w-1/2">
                   <img src={lifestyleImage} alt="Healthy daily habits supporting stress-related headache management" className="rounded-lg h-[300px] object-cover w-full shadow-md" />
                </div>
            </div>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & Headache Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Frequent headaches can affect concentration, work, sleep, family time and emotional balance. Finding the medical cause remains the first priority, but it is also useful to understand whether routine, stress, posture, screen use or sleep are adding to the problem.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, the assessment therefore explores the relationship between emotional wellbeing, daily habits and headache patterns instead of focusing only on the pain itself. Before personalised guidance is discussed, we first build a clear picture of the person's health history, present routine and the situations in which headaches tend to appear.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">The consultation begins with a detailed conversation about your headache history and the way the problem has affected everyday life. We discuss: Your headache history, Frequency and duration of headaches, Pain pattern, Emotional wellbeing, Stress levels, Sleep quality, Work routine, Screen time, Hydration and eating habits, Medical history, and Previous investigations and treatments. Taken together, these details help us understand the wider health picture.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">The next part of the assessment looks at several areas that may be connected with recurring headaches. These include: Emotional wellbeing, Stress patterns, Sleep quality, Lifestyle habits, Screen exposure, Work-life balance, Hydration, Nutrition, Physical activity, and Overall quality of life. Looking at these areas side by side can reveal practical patterns—for example, whether headaches tend to follow long screen sessions, missed meals, poor sleep or unusually stressful days.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Once the assessment is complete, the observations are explained in clear, everyday language. This includes: Emotional wellbeing profile, Lifestyle influences, Stress patterns, Sleep observations, Daily routine analysis, Personalised guidance, and Practical next steps. The purpose is to help the person see how emotional health, lifestyle and headache patterns may be linked, so that future healthcare decisions are based on a fuller understanding of the problem.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, recurring headaches are viewed through the Neuro-Ayurveda Development System, a five-pillar framework that brings brain health, gut health, behaviour, lifestyle and emotional wellbeing into the same assessment.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              The framework does not assume that every headache has one simple explanation. Instead, it helps explore how different parts of health and daily life may influence one another over time.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Mental clarity, Emotional regulation, Stress resilience, Healthy sleep, Cognitive wellbeing, and Overall quality of life. Supporting brain health can make it easier to cope with everyday pressure and maintain clearer, more consistent routines.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Food habits and digestive wellbeing can influence energy, concentration and overall health. This pillar focuses on understanding: Healthy eating habits, Gut-brain communication, Nutrition patterns, Lifestyle influences, and Digestive wellbeing.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain continues to adapt in response to learning, repeated habits and life experiences. This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, and Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Physical surroundings and sensory strain can be relevant to a headache pattern, particularly for people who spend long hours around screens, bright lights or noisy workspaces. This pillar considers: Screen exposure, Workplace environment, Light and noise exposure, Physical recovery, and Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Sustainable improvement is more likely when supportive habits become part of ordinary life rather than a temporary effort. This pillar focuses on: Healthy routines, Behavioural awareness, Stress management, Sustainable lifestyle habits, and Work-life balance.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for stress-related headaches and brain wellness" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals with Stress-Related Headaches</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Headaches are personal. The same approach will not suit every person, because symptoms, triggers, routines and health histories can be very different.
             </p>
             <p className="mt-3 text-[14px] font-bold text-[#51465a]">At Manovaidya, support is shaped around the individual's headache pattern, emotional wellbeing and daily lifestyle. Our approach may include:</p>
             <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                 {["Stress & Headache Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle Education", "Stress Management Guidance", "Healthy Routine Planning", "Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a] italic">
               The aim is to make the possible connections between stress, routine and recurring headaches easier to recognise, while helping the person build habits that are realistic enough to maintain.
             </p>
             
             <div className="mt-8 bg-[#faf0fc] rounded-lg p-5">
                <h3 className="text-[17px] font-black text-[#6a338e]">Living Well With Frequent Headaches</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-semibold">Not every headache can be prevented. Even so, steady daily habits can reduce exposure to several common triggers and make symptoms easier to understand. Helpful lifestyle habits may include:</p>
                <ul className="mt-3 space-y-1 font-bold text-[#51465a] text-[13px] sm:columns-2">
                  <li>✔ Maintaining regular sleep patterns</li>
                  <li>✔ Drinking enough water</li>
                  <li>✔ Eating balanced meals on time</li>
                  <li>✔ Taking regular breaks from screens</li>
                  <li>✔ Improving posture during work</li>
                  <li>✔ Staying physically active</li>
                  <li>✔ Managing everyday stress</li>
                  <li>✔ Following medical advice</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">These habits are supportive measures. They should work alongside, rather than replace, medical evaluation and any treatment recommended by a healthcare professional.</p>
             </div>
             
             <div className="mt-6 border border-[#f4e6fa] rounded-lg p-5 shadow-sm">
                <h3 className="text-[17px] font-black text-[#21142d]">When Should You See a Healthcare Professional?</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-bold">Professional medical evaluation is recommended if:</p>
                <ul className="mt-2 space-y-1 font-bold text-[#51465a] text-[13px]">
                  <li>• Headaches become frequent</li>
                  <li>• Pain interferes with work or daily activities</li>
                  <li>• Headaches are becoming more severe</li>
                  <li>• New neurological symptoms appear</li>
                  <li>• Over-the-counter medicines are no longer effective</li>
                  <li>• You are unsure about the cause of your headaches</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">An early assessment can help identify the type of headache, rule out other conditions and guide treatment before the problem becomes more disruptive.</p>
             </div>
             
             <div className="mt-8">
                <h3 className="text-[18px] font-black text-[#17111f]">Looking Beyond the Headache</h3>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">A recurring headache is rarely just a moment of pain. Sleep, posture, hydration, screen exposure, emotional pressure and work habits can all shape how often headaches occur and how strongly they are felt.</p>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">For this reason, Manovaidya looks at the person's broader health rather than treating every headache as an isolated event. Bringing emotional, physical and lifestyle factors into the same discussion can lead to more informed and realistic choices about long-term wellbeing.</p>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              People from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and other parts of India consult Manovaidya to explore recurring headaches, emotional wellbeing and stress-related headache patterns through structured assessment and personalised guidance.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Stress & Headache Assessments", "Brain Health & Mind-Body Understanding", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Online & In-Clinic Consultations", "Personalised Long-Term Wellness Approach"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                The broader purpose is to help people understand how stress, daily routines and recurring headaches may be connected while supporting overall wellbeing.
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
                    Dr. Ankush Garg founded Manovaidya and developed the Neuro-Ayurveda Development System used in its assessment approach.
                  </p>
                  <p>
                    His work examines how emotional wellbeing, brain health, lifestyle and mind-body functioning influence one another, particularly in people dealing with stress-related health concerns.
                  </p>
                  <p>
                    Through structured assessment, personalised guidance and regular follow-up, he helps individuals make sense of their health patterns and introduce lifestyle changes that can be followed in real life.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg offers Mind-Body and Brain Health Assessments that explore how emotional wellbeing, lifestyle and stress-related headaches may be connected within the Neuro-Ayurveda Development System across India, both online and at the clinic.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Frequent Stress-Related Headaches?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Headache Assessment at Manovaidya to explore the connection between emotional wellbeing, daily routine, tension patterns and recurring headaches, followed by guidance tailored to the assessment findings.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Headache Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and headache assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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
              Schedule Consultation
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressHeadachesIndiaPage;

