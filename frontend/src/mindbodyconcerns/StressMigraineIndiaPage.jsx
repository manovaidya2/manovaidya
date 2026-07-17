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
import heroImage from "../images/stress-and-migraine.webp";
import migraineSymptomsImage from "../images/migraine-symptoms.webp"; 
import brainStressImage from "../images/brain-stress-migraine.webp";
import lifestyleImage from "../images/healthy-lifestyle-migraine.webp"; 
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp"; 
import consultationImage from "../images/migraine-consultation.webp"; 
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Migraine?", id: "what-is-migraine" },
  { label: "Stress & Migraine", id: "stress-connection" },
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
    question: "1. Can stress trigger migraine attacks?",
    answer: "Stress is one of the triggers often reported by people with migraine. An attack may occur more often or feel more intense during a difficult period. That does not mean stress is the only cause; most people have a combination of triggers."
  },
  {
    question: "2. What is the difference between a migraine and a headache?",
    answer: "Migraine is a neurological condition, not simply another name for a severe headache. Along with moderate or intense head pain, it may cause nausea, sensitivity to light or sound and, for some people, an aura. Other headaches can arise for many reasons and may not include these features."
  },
  {
    question: "3. What are the common symptoms of migraine?",
    answer: "Common symptoms include throbbing or pulsating pain, pain on one or both sides of the head, nausea, vomiting, sensitivity to light, sound or smells, and difficulty concentrating. Some people notice an aura shortly before the headache begins."
  },
  {
    question: "4. What are the common triggers for migraine?",
    answer: "The trigger pattern is different for each person. Stress, inadequate sleep, missed meals, dehydration, hormonal changes, bright light, loud noise, strong smells, changing weather and physical exhaustion are all commonly mentioned."
  },
  {
    question: "5. Can anxiety make migraine worse?",
    answer: "It can. Some people find that anxiety increases the chance of an attack or makes the pain and sensitivity harder to tolerate. Keeping track of your own pattern is more useful than assuming the same trigger applies to everyone."
  },
  {
    question: "6. Can poor sleep trigger migraine?",
    answer: "Yes. Too little sleep, an irregular schedule or a sudden change in sleeping hours can trigger migraine in some people. A reasonably consistent sleep routine supports both brain health and general wellbeing."
  },
  {
    question: "7. What is a migraine aura?",
    answer: "Aura is the name given to temporary neurological changes that can appear before or during a migraine. A person may see flashing lights or blind spots, feel tingling, or briefly have difficulty speaking. Because similar symptoms can occur in other conditions, aura should be discussed with a healthcare professional."
  },
  {
    question: "8. When should I seek immediate medical attention for a headache?",
    answer: "Seek emergency care for a sudden, extremely severe headache or a headache accompanied by weakness, confusion, speech difficulty, seizures, loss of consciousness, fever, sudden vision loss or a recent serious head injury. These warning signs need urgent medical evaluation."
  },
  {
    question: "9. Can lifestyle habits influence migraine?",
    answer: "They can. Regular sleep, enough fluids, balanced meals, physical activity, stress management and awareness of personal triggers may all support wellbeing. These steps should be used alongside appropriate medical care, not instead of it."
  },
  {
    question: "10. What is a Stress & Migraine assessment?",
    answer: "It is a structured review of the person's migraine history, emotional wellbeing, stress, sleep, food habits, routine, possible triggers and general health. The purpose is to identify relevant patterns and use them to guide personalised support."
  },
  {
    question: "11. How does Manovaidya support individuals experiencing migraine?",
    answer: "Rather than looking only at the latest attack, Manovaidya considers brain health, emotional wellbeing and lifestyle together. Structured assessment, personalised guidance and the Neuro-Ayurveda Development System are used to help the person understand the wider mind-body picture."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "It is Manovaidya's five-pillar framework covering Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance. The framework brings emotional wellbeing, brain health and lifestyle into the same assessment, alongside personalised guidance."
  },
  {
    question: "13. Can managing stress help people living with migraine?",
    answer: "For some people, reducing everyday stress can remove one possible trigger from the picture. Regular sleep, exercise, relaxation and emotional support may be useful, but they are additions to proper diagnosis and treatment—not substitutes for them."
  },
  {
    question: "14. Is every headache a migraine?",
    answer: "No. Tension-type headache, dehydration, infection, sinus problems and several other conditions can cause head pain. Migraine has its own pattern of neurological symptoms and should be diagnosed by a qualified healthcare professional."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Migraine support?",
    answer: "Manovaidya combines a structured Stress & Migraine Assessment with personalised guidance and the Neuro-Ayurveda Development System. The approach considers emotional health, brain health and lifestyle together, while continuing to recognise the importance of appropriate medical care."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Migraine", count: 12, Icon: Activity },
  { label: "Brain Health", count: 9, Icon: HeartHandshake },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Headaches", href: "/stress-and-headaches/" },
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

function StressMigraineIndiaPage() {
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
        title="Stress & Migraine Treatment in India | Mind-Body Health | Manovaidya"
        description="Looking for Stress & Migraine treatment in India? Discover how stress triggers migraines, aura symptoms, and explore Neuro-Ayurveda relief at Manovaidya."
        keywords="Stress & Migraine, Migraine Treatment India, Stress Triggered Migraine, Migraine with Aura, Chronic Migraine Support, Emotional Wellbeing, Mind-Body Health, Migraine Assessment, Neuro-Ayurveda Development System, Headaches and Stress, Migraine Relief"
        path="/stress-and-migraine"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Migraine Treatment in India",
          "description": "Looking for Stress & Migraine treatment in India? Discover how stress triggers migraines, aura symptoms, and explore Neuro-Ayurveda relief at Manovaidya."
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
                <span className="text-[#4b345d]">Stress & Migraine</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Brain Health</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Migraine Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Migraine and Emotional Wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book Migraine Assessment
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
                <img src={heroImage} alt="Stress and migraine support through holistic brain health" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & Migraine</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A migraine is not simply a bad headache. It is a neurological condition, and an episode can bring severe head pain, nausea, sensitivity to light or sound, and enough discomfort to make ordinary daily tasks difficult.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              People who live with migraine often notice a link between stressful periods and their attacks. Stress can sometimes set off an episode or make the symptoms harder to handle. Even so, migraine is rarely explained by one factor alone, so stress should be seen as a possible trigger rather than the single cause.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The connection between emotional health, the nervous system and migraine is still being studied. Learning how these areas affect one another can make it easier for a person to notice their own patterns, recognise possible triggers and make useful lifestyle changes while continuing with appropriate medical care.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our work at Manovaidya does not begin and end with the headache itself. We take time to look at the person's emotional state, sleep, food habits, routine and wider mind-body health so that the support offered reflects the full picture.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This work is led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya. The clinic follows his Neuro-Ayurveda Development System, a five-pillar framework that brings together brain health, gut health, behaviour, lifestyle and emotional wellbeing.
            </p>
          </section>

          <section id="what-is-migraine" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Migraine?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Migraine is a neurological condition in which headache attacks return from time to time. The pain, length of an attack and accompanying symptoms can vary widely from one person to another.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              For some people, an attack happens only occasionally. For others, migraines come often enough to disturb work, family responsibilities, travel and the basic rhythm of daily life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              There is no single, fixed way in which migraine appears. Two people may describe very different experiences, and even the same person's symptoms can change over the years.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A healthcare professional usually makes the diagnosis after listening carefully to the symptom history and checking whether another condition could be causing the headaches.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Migraine Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Emotional stress is one of the triggers most frequently mentioned by people who experience migraine. A person may notice more frequent episodes during times such as:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                 {[
                   "Emotional pressure",
                   "Workplace stress",
                   "Poor sleep",
                   "Anxiety",
                   "Major life changes",
                   "Mental fatigue"
                 ].map((label) => (
                   <div key={label} className="flex min-h-[66px] items-center gap-3 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] shrink-0" />
                     <span>{label}</span>
                   </div>
                 ))}
             </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress can affect the nervous system and the body's normal stress-response mechanisms, which may play a part in an attack. Still, migraine generally results from several factors coming together, not from stress in isolation.
            </p>
            
            <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Can Stress Trigger Migraine Attacks?</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many people describe stress as the point at which an attack begins or existing symptoms become stronger. The exact relationship is complex, and researchers are still examining how the brain, nervous system and stress response interact during migraine.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress is only one possible trigger. Hormonal changes, lack of sleep, dehydration, missed meals, certain foods, bright lights and strong smells are among the other factors commonly reported.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Because no two trigger patterns are identical, long-term management often starts with noticing what tends to happen before an attack in your own case.
            </p>
            
            <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={brainStressImage} alt="Relationship between stress response and migraine attacks" className="rounded-lg shadow-md w-full h-[250px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h3 className="text-[18px] font-black text-[#17111f]">The Brain, Stress Response and Migraine</h3>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   Migraine involves changes in brain activity and nervous system function, which is why it is classified as a neurological condition.
                 </p>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   When stress remains high for days or weeks, it can disrupt several areas of daily life, including:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Sleep quality", "Muscle tension", "Emotional wellbeing", "Daily routines", "Sensitivity to environmental triggers"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
                 <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                   Any of these changes may make an attack more likely for some people, although stress by itself is seldom the whole explanation. Research is continuing into what takes place in the brain and nervous system before an attack, while it is happening and after the symptoms settle.
                 </p>
              </div>
            </div>
          </section>

          <section id="symptoms-triggers" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Symptoms of Migraine</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Migraine does not feel exactly the same for everyone, and the set of symptoms can differ from one attack to the next.
             </p>
             <div className="mt-4 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-[60%]">
                   <p className="text-[14px] font-bold text-[#21142d] mb-3">Some commonly reported symptoms include:</p>
                   <div className="grid gap-2 sm:grid-cols-2">
                     {[
                       "Moderate to severe headache",
                       "Throbbing or pulsating pain",
                       "Pain on one side of the head",
                       "Nausea or vomiting",
                       "Sensitivity to light",
                       "Sensitivity to sound",
                       "Sensitivity to smells",
                       "Difficulty concentrating",
                       "Increased discomfort during physical activity"
                     ].map((label) => (
                       <div key={label} className="flex items-center gap-2 p-2 bg-white border border-[#f4e6fa] rounded-md text-[13px] font-bold text-[#51465a]">
                         <Activity className="h-4 w-4 text-[#8b43ba] shrink-0" />
                         <span>{label}</span>
                       </div>
                     ))}
                   </div>
                   <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a]">
                      Some people also have an aura before or during the headache. This may involve short-lived changes in vision, sensation or other neurological functions.
                   </p>
                </div>
                <div className="lg:w-[40%]">
                   <img src={migraineSymptomsImage} alt="Person experiencing migraine with light sensitivity and headache" className="rounded-lg h-full object-cover shadow-sm w-full min-h-[200px]" />
                </div>
             </div>

             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Who May Notice Stress-Related Migraine Triggers?</h3>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Migraine attacks may become more noticeable during:
             </p>
             <ul className="mt-4 space-y-2 sm:columns-2">
                 {["High workplace pressure", "Examination periods", "Emotional conflicts", "Sleep deprivation", "Busy schedules", "Long working hours", "Travel-related stress", "Hormonal changes (in some women)"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Triggers are personal. Something that reliably brings on an attack for one person may not affect another at all. Writing down attacks, routines and possible triggers in a migraine diary can reveal patterns that are otherwise easy to miss.
             </p>
             
             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Common Migraine Triggers</h3>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                There is no trigger list that applies equally to everyone. Some commonly reported triggers include:
             </p>
             <div className="mt-4 flex flex-wrap gap-2">
                 {["Emotional stress", "Poor sleep", "Skipping meals", "Dehydration", "Bright lights", "Loud sounds", "Strong smells", "Hormonal changes", "Weather changes", "Physical exhaustion"].map((label) => (
                   <span key={label} className="bg-[#faf0fc] text-[#6a338e] text-[13px] font-bold px-3 py-1.5 rounded-full border border-[#f4e6fa]">
                     {label}
                   </span>
                 ))}
             </div>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                A migraine diary can help you connect attacks with sleep, meals, stress, weather or other events and work out which patterns are actually relevant to you.
             </p>
          </section>
          
          <section id="warning-signs" className="mt-9">
            <div className="rounded-lg border-l-4 border-[#8b43ba] bg-[#faf0fc] p-6 shadow-sm">
               <h2 className="text-[18px] font-black text-[#21142d] mb-3">Warning Signs You Should Not Ignore</h2>
               <p className="text-[14px] font-bold text-[#51465a] mb-4">Migraine is a recognised neurological condition, but a severe headache should not automatically be labelled as migraine. Certain symptoms can signal a more serious problem and need urgent assessment.</p>
               <p className="text-[14px] font-bold text-[#e14f79] mb-3">Seek urgent medical attention if you experience:</p>
               <ul className="space-y-2 sm:columns-2">
                 {["Sudden severe headache", "Weakness in face, arm or leg", "Difficulty speaking", "Loss of consciousness", "Confusion", "Seizures", "Fever with severe headache", "Headache after head injury", "Sudden vision loss", "Persistent vomiting with headache"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e14f79] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
               </ul>
               <p className="text-[13px] font-bold mt-4 text-[#e14f79] italic">Do not wait for these symptoms to pass on their own; they require immediate emergency care.</p>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-5 items-center">
                <div className="md:w-1/2">
                   <h3 className="text-[18px] font-black text-[#17111f]">Why Emotional Wellbeing Matters</h3>
                   <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                     The effect of migraine is not limited to physical pain. The uncertainty of when an attack might return can shape plans, confidence, work choices and emotional health.
                   </p>
                   <p className="text-[13px] font-bold mt-3 text-[#51465a]">Some individuals experience:</p>
                   <ul className="space-y-1 mt-2">
                     {["Anxiety about the next migraine attack", "Difficulty planning social activities", "Reduced confidence while travelling", "Work-related challenges", "Emotional frustration", "Reduced quality of life"].map((step) => (
                        <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                   </ul>
                   <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">
                     Looking after emotional wellbeing, along with following medical advice and maintaining practical daily habits, can make the day-to-day burden of migraine easier to manage. Repeated migraine attacks can wear a person down emotionally, particularly when pain begins to limit independence, work, travel or time with others.
                   </p>
                </div>
                <div className="md:w-1/2">
                   <img src={lifestyleImage} alt="Healthy lifestyle habits supporting migraine management" className="rounded-lg h-[300px] object-cover w-full shadow-md" />
                </div>
            </div>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Stress & Migraine Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A migraine attack can interrupt far more than physical comfort. When attacks are frequent, they may affect sleep, work, family time, travel and emotional stability. Medical diagnosis and treatment remain essential, while stress and lifestyle still deserve attention because they can influence the way migraine is experienced.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our assessment at Manovaidya therefore looks at the relationship between brain health, emotional wellbeing and daily life, rather than examining the headache alone. Before suggesting personalised guidance, we first build a clear picture of the factors that may be affecting the person's overall wellbeing.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Journey</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">The first part of the consultation is a detailed conversation about your health journey and the way migraine has affected your life. We discuss: Your migraine history, Frequency and duration of attacks, Common triggers you have noticed, Emotional wellbeing, Stress levels, Sleep quality, Daily routine, Eating habits, Medical history, and Previous investigations and treatments. Taken together, these details help us see the broader health picture and identify influences that may otherwise remain unnoticed.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">The next stage looks at several connected areas that can shape both migraine and general wellbeing. These include: Emotional wellbeing, Stress patterns, Sleep quality, Lifestyle habits, Nutrition, Daily routine, Work-life balance, Behavioural patterns, Energy levels, and Overall quality of life. Reviewing these areas side by side often makes recurring links clearer—for example, whether poor sleep, work pressure or changes in routine tend to appear around the same time as an attack.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Afterwards, we talk through the observations in straightforward language and relate them to everyday life. This includes: Emotional wellbeing profile, Lifestyle influences, Stress patterns, Sleep observations, Potential trigger patterns, Personalised guidance, and Practical next steps. The purpose is to give people a clearer understanding of how migraine, emotional health and lifestyle may be connected, so future healthcare decisions are based on a fuller picture.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Manovaidya uses the Neuro-Ayurveda Development System to view migraine through five connected areas: brain health, gut health, behaviour, lifestyle and emotional wellbeing. The framework does not reduce the problem to headache attacks alone. It is used to explore how several parts of health may influence one another over time.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Emotional regulation, Mental clarity, Stress resilience, Healthy sleep, Cognitive wellbeing, and Overall quality of life. Giving attention to brain health is therefore relevant to both neurological and emotional wellbeing.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Food habits and digestive wellbeing can affect how a person feels and functions overall. This pillar focuses on understanding: Healthy eating habits, Gut-brain communication, Digestive wellbeing, Lifestyle influences, and Nutrition patterns.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain keeps changing in response to learning, repeated habits and everyday experiences. This pillar focuses on strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, and Cognitive flexibility.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Light, sound and other surroundings can become unusually difficult to tolerate during migraine. Many people recognise this sensory sensitivity as a major part of an attack. This pillar considers: Light sensitivity, Sound sensitivity, Environmental stress, Recovery, and Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Lasting improvement is easier to maintain when supportive habits become part of ordinary life rather than a short-term effort. This pillar focuses on: Healthy daily habits, Stress management, Behavioural awareness, Sustainable routines, and Lifestyle improvement.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for migraine and brain wellness" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Individuals Living With Migraine</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Migraine is personal, so a standard plan will not suit everyone. Support at Manovaidya is shaped around the person's symptoms, emotional wellbeing, routine and lifestyle instead of being applied in the same way to every case.
             </p>
             <p className="mt-3 text-[14px] font-bold text-[#51465a]">Our approach may include:</p>
             <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                 {["Stress & Migraine Assessment", "Mind-Body Health Assessment", "Emotional Wellbeing Guidance", "Lifestyle Education", "Stress Management Guidance", "Healthy Routine Planning", "Brain Wellness Education", "Progress Monitoring & Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[13px] font-semibold leading-6 text-[#51465a] italic">
               The intention is to make the links between brain health, emotional wellbeing and lifestyle easier to recognise, while helping the person build habits that can be continued in real life.
             </p>
             
             <div className="mt-8 bg-[#faf0fc] rounded-lg p-5">
                <h3 className="text-[17px] font-black text-[#6a338e]">Living Well With Migraine</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-semibold">It is not always possible to prevent every migraine. Even so, a steady routine and fewer avoidable triggers can make life more manageable for many people. Helpful lifestyle habits may include:</p>
                <ul className="mt-3 space-y-1 font-bold text-[#51465a] text-[13px] sm:columns-2">
                  <li>✔ Maintaining regular sleep patterns</li>
                  <li>✔ Eating meals on time</li>
                  <li>✔ Staying hydrated</li>
                  <li>✔ Regular physical activity</li>
                  <li>✔ Managing everyday stress</li>
                  <li>✔ Limiting excessive caffeine where advised</li>
                  <li>✔ Following prescribed treatment plans</li>
                  <li>✔ Keeping a migraine diary</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">These measures are meant to support the treatment plan advised by your healthcare professional, not take its place.</p>
             </div>
             
             <div className="mt-6 border border-[#f4e6fa] rounded-lg p-5 shadow-sm">
                <h3 className="text-[17px] font-black text-[#21142d]">When Should You See a Healthcare Professional?</h3>
                <p className="text-[13px] mt-2 text-[#51465a] font-bold">You should seek professional medical evaluation if:</p>
                <ul className="mt-2 space-y-1 font-bold text-[#51465a] text-[13px]">
                  <li>• Headaches become frequent</li>
                  <li>• Migraine attacks interfere with work or daily life</li>
                  <li>• Symptoms become more severe</li>
                  <li>• New neurological symptoms develop</li>
                  <li>• Over-the-counter medicines are no longer effective</li>
                  <li>• You are unsure whether your headaches are migraines</li>
                </ul>
                <p className="text-[12px] mt-3 italic text-[#51465a]">Getting the right assessment early can rule out other causes and help you move towards a more suitable management plan.</p>
             </div>
             
             <div className="mt-8">
                <h3 className="text-[18px] font-black text-[#17111f]">Looking Beyond Migraine Attacks</h3>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">Migraine reaches beyond pain in the head. Sleep, food, stress, emotional health and everyday routines can all influence how often attacks occur and how disruptive they feel.</p>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">For that reason, Manovaidya looks at the person's wider health rather than treating each headache as an isolated event. Seeing emotional, lifestyle and physical factors together can support more informed, realistic decisions about long-term wellbeing.</p>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              People from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and other parts of India consult Manovaidya to explore the connection between migraine, emotional wellbeing and stress-related triggers through structured assessment and personalised guidance.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Stress & Migraine Assessments", "Brain Health & Mind-Body Understanding", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Online & In-Clinic Consultations", "Personalised Long-Term Wellness Approach"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                The larger purpose is to bring clarity to the connection between lifestyle, emotional wellbeing and brain health while supporting the person's overall quality of life.
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
                    His work explores how emotional wellbeing, brain function, lifestyle and general health influence one another, especially in people facing stress-related neurological or mind-body concerns.
                  </p>
                  <p>
                    Using structured assessments, one-to-one guidance and ongoing follow-up, he helps people make sense of their symptoms and develop lifestyle practices that are practical enough to sustain.
                  </p>
                  <p>
                    Based in Delhi NCR, Dr. Ankush Garg offers Mind-Body and Brain Health Assessments across India, both online and at the clinic, examining how emotional wellbeing, lifestyle and migraine may be connected within the Neuro-Ayurveda Development System.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Migraine?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Migraine Assessment at Manovaidya to explore migraine triggers, emotional wellbeing, lifestyle factors and brain health, followed by guidance tailored to the findings.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Migraine Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and migraine assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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

export default StressMigraineIndiaPage;

