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
  Search,
  ShieldCheck,
  Waves,
  Salad
} from "lucide-react";
import heroImage from "../images/stress-digestive-health.webp";
import refluxImage from "../images/ibs-symptoms-stress.png"; 
import gutBrainImage from "../images/gut-brain-digestive-health.webp";
import lifestyleImage from "../images/ibs-lifestyle-management.png"; 
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp"; 
import consultationImage from "../images/ibs-consultation.png"; 
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Stress & Digestion", id: "stress-connection" },
  { label: "Symptoms", id: "symptoms" },
  { label: "Gut-Brain Connection", id: "gut-brain-connection" },
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
    question: "1. Can stress affect digestive health?",
    answer: "Yes. Emotional stress may influence digestion in some individuals through the gut-brain connection. During periods of stress, some people notice symptoms such as bloating, indigestion, changes in appetite or changes in bowel habits. However, digestive symptoms can have many different medical causes and should be properly evaluated if they persist."
  },
  {
    question: "2. What is the gut-brain connection?",
    answer: "The gut-brain connection, also known as the gut-brain axis, is the two-way communication between the brain and the digestive system. This connection helps explain why emotional wellbeing and digestive health can influence each other."
  },
  {
    question: "3. Can anxiety cause stomach problems?",
    answer: "Some people notice stomach discomfort, nausea, bloating or changes in bowel habits during periods of anxiety or emotional stress. Since these symptoms may also be caused by medical conditions, persistent digestive problems should be assessed by a qualified healthcare professional."
  },
  {
    question: "4. Why do I experience stomach discomfort during stressful situations?",
    answer: "Stress activates the body's natural stress response, which may temporarily influence digestion in some individuals. If stomach discomfort becomes frequent or persistent, medical evaluation is important to identify the underlying cause."
  },
  {
    question: "5. Can emotional wellbeing influence appetite?",
    answer: "Yes. Emotional stress may affect appetite differently in different individuals. Some people notice reduced appetite during stressful periods, while others may eat more than usual. Persistent appetite changes should be discussed with a healthcare professional."
  },
  {
    question: "6. What digestive symptoms may become worse during stress?",
    answer: "Some individuals may notice bloating, indigestion, stomach discomfort, nausea, changes in appetite or changes in bowel habits during emotionally stressful periods. These symptoms are not specific to stress and require medical evaluation if they continue."
  },
  {
    question: "7. Can poor sleep affect digestive health?",
    answer: "Healthy sleep supports overall physical and emotional wellbeing. Poor sleep may influence digestion, appetite, energy levels and stress responses in some individuals. Improving sleep habits may contribute to overall wellness."
  },
  {
    question: "8. When should I seek medical attention for digestive symptoms?",
    answer: "You should seek medical evaluation if digestive symptoms are persistent, becoming worse or accompanied by severe abdominal pain, blood in stool, blood in vomit, unexplained weight loss, persistent vomiting, difficulty swallowing or high fever. These symptoms require professional medical assessment."
  },
  {
    question: "9. Can lifestyle habits affect digestive wellbeing?",
    answer: "Yes. Balanced nutrition, regular physical activity, adequate hydration, healthy sleep habits and stress management may support overall digestive health. Lifestyle measures should complement appropriate medical care whenever required."
  },
  {
    question: "10. What is a Stress & Digestive Health assessment?",
    answer: "A Stress & Digestive Health assessment is a structured evaluation that explores digestive concerns, emotional wellbeing, stress levels, sleep, lifestyle habits, nutrition and overall health. The assessment helps identify factors that may influence overall wellbeing and supports personalised guidance."
  },
  {
    question: "11. How does Manovaidya support stress-related digestive concerns?",
    answer: "At Manovaidya, we focus on understanding the relationship between emotional wellbeing, lifestyle and digestive health rather than looking only at digestive symptoms. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand their overall mind-body wellbeing."
  },
  {
    question: "12. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework that considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding emotional wellbeing, gut health and lifestyle. It provides a holistic perspective alongside comprehensive assessment and personalised guidance."
  },
  {
    question: "13. Can managing stress support digestive wellbeing?",
    answer: "Managing stress through healthy lifestyle habits, regular physical activity, adequate sleep, relaxation techniques and emotional wellbeing practices may support overall digestive health in some individuals. These approaches complement but do not replace appropriate medical treatment."
  },
  {
    question: "14. Is every digestive problem caused by stress?",
    answer: "No. Digestive symptoms can result from many different medical conditions, dietary factors, infections or other health issues. Stress may influence digestive wellbeing in some individuals, but it should never be assumed to be the only cause. Persistent symptoms should always be medically evaluated."
  },
  {
    question: "15. Why should I choose Manovaidya for Stress & Digestive Health support?",
    answer: "At Manovaidya, we focus on understanding the relationship between emotional wellbeing, gut health and lifestyle through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our holistic approach helps individuals better understand the gut-brain connection while supporting long-term mind-body wellbeing."
  }
];

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Digestion", count: 14, Icon: Salad },
  { label: "Gut-Brain Axis", count: 9, Icon: HeartHandshake },
  { label: "Digestive Health", count: 11, Icon: Activity },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & IBS", href: "/stress-ibs-support-india/" },
  { label: "Stress & Acidity", href: "/stress-and-acidity/" },
  { label: "Stress & Migraine", href: "/stress-and-migraine/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & Headaches", href: "/stress-and-headaches/" },
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

function StressDigestiveHealthIndiaPage() {
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
                <span className="text-[#4b345d]">Stress & Digestive Health</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Digestive Health Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Connection Between Stress, Emotional Wellbeing and Digestive Health.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(106,51,142,0.22)] lg:flex">
                <Salad className="mb-1 h-5 w-5" />
                Gut-Brain Connection
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(139,67,186,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and digestive health support through the gut-brain connection" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Stress & Digestive Health</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The digestive system and the brain are connected through a network called the gut-brain axis. This means that how you feel emotionally and your digestive health are always affecting each other. A lot of people notice that when they are stressed, worried or feeling pressure they experience changes in their appetite, stomach discomfort, bloating or other digestive symptoms.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Sometimes you might feel discomfort when you are stressed but if it happens all the time you should not ignore it. Digestive problems can have causes, including medical conditions that need to be diagnosed and treated properly. Emotional stress can affect how you experience symptoms but it is not the only reason.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya we think it is important to understand the person, not just their digestive symptoms. We look at wellbeing, lifestyle, sleep, nutrition and the connection between the gut and the brain to help people understand their overall health.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our team is led by Dr. Ankush Garg, a Mental Health Specialist and the Founder of Manovaidya. We use the Neuro-Ayurveda Development System, which's a framework that considers brain health, gut health, behavior and lifestyle together to support overall mind-body wellbeing.
            </p>
          </section>

          <section id="stress-connection" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Are Stress and Digestion Connected?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The brain and digestive system are always talking to each other through nerves, hormones and immune pathways.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When you are emotionally stressed your bodys stress response can affect your function. You might notice changes in your appetite, digestion or bowel habits when you are going through a time.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Similarly living with digestive discomfort can be a source of emotional stress creating a cycle where your physical and emotional wellbeing affect each other.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding this connection helps explain why taking care of both wellbeing and digestive health is important for overall wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress activates the bodys natural stress response, which prepares the body to deal with situations. When you are stressed for a time you might experience temporary changes in digestion as your body responds to the stress. If you are stressed for a time you might notice ongoing digestive discomfort. Researchers are still studying the relationship between emotional wellbeing and digestive health through the gut-brain axis, which describes the continuous communication between the brain and the digestive system.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              It is essential to understand that stress does not cause every condition. Digestive symptoms can have medical causes and should always be evaluated properly when they are persistent or severe.
            </p>
          </section>

          <section id="gut-brain-connection" className="mt-9">
             <div className="rounded-lg border border-[#f4e6fa] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(139,67,186,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
               <div className="lg:max-w-[43%] lg:shrink-0">
                  <h2 className="text-[17px] font-black leading-snug text-[#6a338e] sm:text-[18px]">
                    The Gut-Brain Connection
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    The digestive system has a network of nerves that talks to the brain all the time.
                  </p>
               </div>
               <div className="mt-5 lg:mt-0 lg:flex-1">
                 <img src={gutBrainImage} alt="Illustration of the gut-brain connection affecting digestive health" className="w-full rounded-lg h-[160px] object-cover" />
               </div>
             </div>
             
             <div className="mt-5 rounded-lg border border-[#f4e6fa] bg-[#faf0fc] p-5">
               <h3 className="text-[15px] font-black text-[#21142d]">This connection can affect:</h3>
               <ul className="mt-3 space-y-2.5 sm:columns-2">
                 {["Appetite", "Digestion", "Bowel movements", "Sensitivity in the tract", "Emotional wellbeing", "Stress responses"].map((step) => (
                   <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                     <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {step}
                   </li>
                 ))}
               </ul>
             </div>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Similarly digestive health can also affect how you feel emotionally highlighting the relationship between physical and emotional wellbeing.
             </p>
          </section>

          <section id="symptoms" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">Common Digestive Symptoms That May Be Associated With Stress</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every individual experiences stress differently. Some people might notice changes like:
             </p>
             <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                 {[
                   "Bloating",
                   "Indigestion",
                   "Stomach discomfort",
                   "Changes in appetite",
                   "Feeling full quickly",
                   "Changes in bowel habits",
                   "Nausea during situations",
                   "Increased abdominal discomfort"
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
                These symptoms are not just caused by stress and can happen due to many medical conditions. If you have digestive symptoms you should always see a qualified healthcare professional.
             </p>

             <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Who May Experience Stress-Related Symptoms?</h3>
             <ul className="mt-4 space-y-2">
                 {["Working professionals who are under chronic stress at work", "Students during exams", "People who are anxious", "Those who are taking care of someone term", "Individuals going through life changes", "People who are under emotional pressure", "Those with existing conditions who notice their symptoms getting worse when they are stressed"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every individual's experience is different.
             </p>
          </section>
          
          <section className="mt-9">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="lg:w-1/2">
                 <img src={refluxImage} alt="Digestive discomfort associated with stress and emotional wellbeing" className="rounded-lg shadow-md w-full h-[300px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-[20px] font-black text-[#17111f]">Why Emotional Wellbeing Matters for Digestive Health</h2>
                 <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                   wellbeing can affect many everyday habits that support digestive health. For example ongoing stress can affect:
                 </p>
                 <ul className="mt-3 space-y-2">
                   {["Eating patterns", "Sleep quality", "activity", "Hydration", "Daily routine", "Relaxation", "Overall quality of life"].map((step) => (
                      <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <div className="mt-5 bg-[#faf0fc] rounded-lg p-5">
              <h3 className="text-[16px] font-black text-[#6a338e] mb-3">Signs You Should Not Ignore</h3>
              <p className="text-[13px] font-bold text-[#51465a] mb-2">Sometimes you might experience digestive discomfort but if it happens all the time you should see a doctor. Do not ignore symptoms like:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Bloating that happens often", "Indigestion that does not go away", "Stomach acidity", "Discomfort in the stomach", "Abdominal cramps", "Changes in how you go to the bathroom", "Feeling full quickly", "Nausea that happens often"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
              <p className="mt-3 text-[13px] font-bold text-[#51465a] mb-2">Some people with ongoing digestive issues may also notice:</p>
              <ul className="space-y-1 sm:columns-2">
                 {["Feeling stressed all the time", "Worrying about eating", "Getting irritated easily", "Not sleeping well", "Finding it hard to relax", "Life not being enjoyable"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8b43ba] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
              </ul>
              <p className="text-[12px] font-bold mt-3 text-[#51465a] italic">Both physical and emotional symptoms need to be checked by a doctor.</p>
            </div>

            <div className="mt-5 rounded-lg border border-[#f4e6fa] p-5 shadow-[0_8px_22px_rgba(139,67,186,0.04)]">
               <h3 className="text-[16px] font-black text-[#21142d] mb-3">When Should You See a Doctor?</h3>
               <p className="text-[13px] font-bold text-[#51465a] mb-3">Do not think digestive symptoms are because of stress. You should see a doctor away if you have:</p>
               <ul className="space-y-2 sm:columns-2">
                 {["Severe stomach pain", "Blood in your stool", "Blood in what you vomit", "Vomiting that does not stop", "Losing weight", "Trouble swallowing", "Fever with symptoms", "Symptoms that last for weeks", "Symptoms that get worse"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="text-[#8b43ba]">✔</span>
                      {step}
                    </li>
                  ))}
               </ul>
               <p className="text-[12px] font-bold mt-3 text-[#51465a] italic">Seeing a doctor early can help find conditions and make sure you get the treatment.</p>
            </div>
          </section>
          
          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Mind-Body & Digestive Health Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Digestive symptoms can have many possible causes. Some are related to medical conditions, while emotional wellbeing, lifestyle habits, sleep and chronic stress may also influence how some individuals experience digestive discomfort. At Manovaidya, we believe in understanding the complete picture rather than focusing only on digestive symptoms. Our assessment process is designed to understand the relationship between digestive health, emotional wellbeing and lifestyle before recommending personalised guidance.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">1</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Health Concerns</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Every consultation begins with listening carefully to your experiences. We discuss: Your digestive concerns, Emotional wellbeing, Stress levels, Eating habits, Sleep quality, Daily routine, Lifestyle habits, Medical history, and Previous investigations and treatments. Understanding your complete health journey helps us identify factors that may be influencing your overall wellbeing.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">2</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Comprehensive Mind-Body Assessment</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">Our structured assessment explores multiple areas that may influence digestive wellbeing. These include: Emotional stress, Lifestyle habits, Sleep quality, Digestive health, Energy levels, Work-life balance, Nutrition, Behavioural patterns, and Overall quality of life. This holistic assessment helps identify patterns that may contribute to both emotional and digestive wellbeing.</p>
                 </div>
              </div>
              <div className="rounded-lg border border-[#f4e6fa] p-4 flex gap-4">
                 <div className="flex-shrink-0 h-10 w-10 bg-[#8b43ba] rounded-full text-white flex items-center justify-center font-bold">3</div>
                 <div>
                    <h3 className="font-bold text-[#21142d]">Understanding Your Wellbeing Profile</h3>
                    <p className="text-[13px] mt-1 text-[#51465a]">After the assessment, we explain our observations in a simple and practical manner. This includes: Emotional wellbeing profile, Lifestyle factors, Stress patterns, Digestive health observations, Areas requiring attention, Personalised recommendations, and Practical next steps. Our goal is to help individuals better understand the relationship between their emotional wellbeing and digestive health while encouraging informed healthcare decisions.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, digestive wellbeing is understood through the Neuro-Ayurveda Development System, a structured five-pillar framework that considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together. Rather than focusing only on digestive symptoms, this approach helps us understand the broader relationship between emotional health and overall wellbeing.
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Brain className="h-5 w-5"/> 1. Brain Nourishment System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy brain function supports: Emotional regulation, Stress resilience, Mental clarity, Sleep quality, Decision-making, and Overall wellbeing. Supporting emotional health may help individuals build healthier responses to everyday stress.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Salad className="h-5 w-5"/> 2. Gut Response System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The digestive system plays an important role in overall wellbeing. This pillar focuses on understanding: Digestive health, Nutrition, Healthy eating habits, Gut-brain communication, and Lifestyle factors influencing gut wellness.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Activity className="h-5 w-5"/> 3. Neural Network System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">The brain continuously adapts to experiences, learning and lifestyle habits. This pillar focuses on strengthening: Healthy thinking patterns, Emotional adaptability, Stress resilience, and Behavioural awareness.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><Waves className="h-5 w-5"/> 4. Sensory Integration System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Daily environmental factors may influence both emotional and physical wellbeing. This pillar considers: Sensory experiences, Environmental stress, Relaxation, Recovery, and Lifestyle balance.</p>
              </div>
              <div className="rounded-lg bg-[#faf0fc] p-5">
                 <h3 className="font-bold text-[#6a338e] flex items-center gap-2"><CalendarCheck className="h-5 w-5"/> 5. Behaviour Guidance System</h3>
                 <p className="mt-2 text-[13px] text-[#51465a]">Healthy daily habits support both emotional wellbeing and digestive wellness. This pillar focuses on: Stress management, Healthy routines, Sustainable lifestyle habits, Behavioural awareness, and Long-term wellbeing.</p>
              </div>
            </div>
            
            <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-lg shadow-md bg-[#faf0fc] border border-[#f4e6fa]">
              <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for gut-brain and digestive health" className="h-[85%] w-auto object-contain" />
            </div>
          </section>

          <section id="support-approach" className="mt-9">
             <h2 className="text-[20px] font-black text-[#17111f]">How We Support Digestive Health</h2>
             <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
               Every person's digestive health journey is different. At Manovaidya, our support is personalised according to the individual's emotional wellbeing, digestive concerns and lifestyle. Our goal is to help individuals better understand the connection between emotional wellbeing and digestive health while supporting healthier long-term habits.
             </p>
             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                 {["Mind-Body Health Assessment", "Digestive Wellbeing Assessment", "Emotional Wellbeing Guidance", "Lifestyle & Nutrition Education", "Stress Management Guidance", "Healthy Routine Planning", "Mind-Body Balance Support", "Progress Monitoring and Follow-Up"].map((label) => (
                   <li key={label} className="flex gap-2 text-[13px] font-bold text-[#51465a] p-3 border border-[#f4e6fa] rounded-md">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8b43ba]" />
                     {label}
                   </li>
                 ))}
             </ul>
             
             <div className="mt-6 flex flex-col md:flex-row gap-5 items-center bg-[#faf0fc] rounded-lg p-5">
                <div className="md:w-1/3">
                  <img src={lifestyleImage} alt="Healthy lifestyle habits supporting digestive health" className="rounded-md w-full" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[16px] font-black text-[#6a338e]">Supporting Digestive Health and Emotional Wellbeing</h3>
                  <p className="text-[13px] mt-2 text-[#51465a]">Taking care of your health means caring for your body and emotional wellbeing. Healthy habits that can help include:</p>
                  <ul className="text-[13px] mt-2 space-y-1 font-semibold text-[#51465a]">
                    <li>• Eating meals that're balanced and drinking water every day</li>
                    <li>• Being physically active regularly and getting sleep</li>
                    <li>• Managing stress every day, not smoking and limiting alcohol</li>
                    <li>• Taking medications as told and following advice for diagnosed digestive conditions</li>
                  </ul>
                  <p className="text-[12px] mt-2 italic text-[#51465a]">Making changes that you can stick to can help you be healthier in the long run.</p>
                </div>
             </div>
             
             <div className="mt-6">
                <h3 className="text-[18px] font-black text-[#17111f]">Looking Beyond Symptoms</h3>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a] mt-2">Discomfort is not, about your stomach. How you feel emotionally sleep, food, lifestyle habits and medical conditions you already have can all affect your symptoms. At Manovaidya we believe in understanding the person, not symptoms. By considering both physical wellbeing together you can develop healthier long-term habits that support your overall quality of life.</p>
             </div>
          </section>
          
          <section id="why-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why People Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Individuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya to better understand the relationship between stress, digestive health and the gut-brain connection through structured assessments and personalised guidance.
            </p>
            <ul className="mt-4 space-y-2">
                 {["Comprehensive Mind-Body Health Assessments", "Gut-Brain Axis Understanding", "Neuro-Ayurveda Development System", "Lifestyle & Stress Management Guidance", "Holistic Emotional Wellbeing Support", "Online & In-Clinic Consultations", "Personalised Long-Term Wellness Approach"].map((label) => (
                   <li key={label} className="flex gap-2 text-[14px] font-bold text-[#51465a]">
                     <span className="text-[#8b43ba]">✔</span>
                     {label}
                   </li>
                 ))}
             </ul>
             <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Our goal is to help individuals better understand how emotional wellbeing, digestive health and lifestyle work together to support overall wellness.
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
                    Dr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System. His work focuses on understanding the relationship between emotional wellbeing, gut health, brain health and lifestyle while helping individuals experiencing stress-related digestive concerns and other mind-body health challenges.
                  </p>
                  <p>
                    Through structured assessments, personalised guidance and continuous follow-up, Dr. Ankush Garg helps individuals better understand the gut-brain connection and develop healthier long-term lifestyle habits.
                  </p>
                  <p>
                    Based in Delhi NCR, he provides Mind-Body and Digestive Health Assessments for individuals across India through both online and in-clinic appointments, helping individuals understand the relationship between emotional wellbeing, gut health and overall wellness through the Neuro-Ayurveda Development System.
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Digestive Health?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Digestive Health Assessment with Manovaidya to understand the relationship between emotional wellbeing, gut health, digestion and lifestyle while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Assessment
                    </a>
                    <a href="https://wa.me/917823894080" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and digestive health assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
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

export default StressDigestiveHealthIndiaPage;

