import React from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  MessageCircle,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  Users,
  Waves,
  Briefcase,
  BatteryLow,
  Clock,
  Coffee,
  ClipboardList,
  BedDouble,
  Flower2
} from "lucide-react";

import heroImage from "../images/low-self-esteem-confidence-support-india.png";
import symptomsImage from "../images/low-self-esteem-signs.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import supportImage from "../images/self-confidence-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import BookConsultationButton from "../components/BookConsultationButton";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Confidence", id: "understanding-confidence" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes of Low Self-Esteem", id: "causes" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "Building Confidence", id: "building-confidence" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Adult Mental Wellness", count: 15, Icon: HeartHandshake },
  { label: "Self-Esteem & Confidence", count: 12, Icon: Flower2 },
  { label: "Anxiety & Depression", count: 14, Icon: Brain },
  { label: "Stress & Burnout", count: 12, Icon: BatteryLow },
  { label: "Relationship Challenges", count: 9, Icon: Users },
  { label: "Neuro-Ayurveda", count: 10, Icon: Sparkles },
];

const highlights = [
  { label: "Low Self-Esteem", Icon: Flower2 },
  { label: "Lack of Confidence", Icon: Brain },
  { label: "Negative Self-Talk", Icon: MessageCircle },
  { label: "Fear of Failure", Icon: ShieldCheck },
  { label: "Self-Doubt", Icon: Users },
  { label: "Emotional Wellbeing", Icon: HeartHandshake },
];

const assessmentSteps = [
  {
    step: "Step 1",
    title: "Comprehensive Assessment",
    desc: "Understanding self-esteem, confidence, emotional wellbeing, lifestyle habits, stress levels and daily routines.",
    Icon: ClipboardList
  },
  {
    step: "Step 2",
    title: "Personalized Guidance",
    desc: "Providing individualized recommendations based on each person's emotional, behavioural and lifestyle needs.",
    Icon: BookOpen
  },
  {
    step: "Step 3",
    title: "Emotional Wellbeing Support",
    desc: "Helping individuals better understand self-worth, confidence and healthy coping strategies through a structured approach.",
    Icon: HeartHandshake
  },
  {
    step: "Step 4",
    title: "Neuro-Ayurveda Development System",
    desc: "Applying the five-pillar framework to understand emotional wellbeing, behaviour, lifestyle and mind-body balance.",
    Icon: Sparkles
  },
  {
    step: "Step 5",
    title: "Progress Tracking & Follow-Up",
    desc: "Creating a structured roadmap that helps individuals monitor progress, strengthen healthy habits and support long-term confidence.",
    Icon: ShieldCheck
  },
];

const neuroAyurvedaPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Healthy confidence is supported by healthy brain function. The Brain Nourishment System focuses on understanding factors that may influence: Confidence, Emotional regulation, Attention, Memory, Decision-making, Mental clarity. Supporting healthy brain function helps individuals better understand emotional balance and cognitive wellbeing.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text: "Growing research highlights the relationship between gut health and emotional wellbeing. Many adults experiencing low confidence also report: Poor appetite during stress, Digestive discomfort, Lifestyle imbalance, Reduced energy. The Gut Response System focuses on understanding how physical wellbeing may influence emotional resilience and self-confidence.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Thought patterns gradually become habits. The Neural Network System focuses on understanding: Negative self-talk, Self-belief, Fear of failure, Emotional responses, Behavioural habits. Recognising these patterns helps individuals gradually replace unhelpful beliefs with healthier ways of thinking.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Modern life constantly exposes individuals to comparison and external pressure. Sources include: Social media, Workplace competition, Family expectations, Academic pressure, Financial responsibilities. Understanding these influences helps individuals reduce unnecessary comparison and develop healthier emotional resilience.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Confidence grows through behaviour. Adults with low self-esteem may develop habits such as: Avoiding challenges, Seeking approval, People-pleasing, Overthinking, Procrastination, Avoiding difficult conversations. Rather than focusing only on increasing confidence, this pillar encourages understanding the behavioural patterns that may be maintaining low self-esteem.",
  },
];

const faqs = [
  {
    question: "1. What is low self-esteem?",
    answer: "Low self-esteem refers to having a consistently negative opinion about yourself or doubting your own worth and abilities. People with low self-esteem may feel they are \"not good enough,\" fear failure or constantly seek approval from others. These feelings can influence relationships, work performance and emotional wellbeing. Understanding the underlying factors behind low self-esteem is an important step towards building healthier confidence and self-worth."
  },
  {
    question: "2. What are the signs of low self-esteem?",
    answer: "Common signs of low self-esteem include constant self-doubt, negative self-talk, fear of making mistakes, difficulty accepting compliments, comparing yourself with others and avoiding new opportunities. Some individuals also struggle with people-pleasing, fear of rejection or difficulty expressing their opinions. These signs may gradually affect confidence, emotional wellbeing and everyday decision-making."
  },
  {
    question: "3. What causes low self-esteem?",
    answer: "Low self-esteem usually develops because of multiple life experiences rather than one single cause. Childhood criticism, bullying, difficult relationships, repeated failures, unrealistic expectations, social comparison and ongoing stress may all contribute. Mental health conditions such as anxiety or depression can also influence self-esteem. Every person's experience is unique, making individual assessment important for understanding the contributing factors."
  },
  {
    question: "4. What is the difference between self-esteem and confidence?",
    answer: "Self-esteem is how you value yourself as a person, while confidence is your belief in your ability to perform a particular task or handle a specific situation. Someone may feel confident at work but still struggle with low self-esteem in personal relationships. Healthy emotional wellbeing involves developing both self-worth and confidence, as they work together to support resilience and personal growth."
  },
  {
    question: "5. Can low self-esteem affect mental health?",
    answer: "Yes. Persistent low self-esteem may affect emotional wellbeing and can occur alongside conditions such as anxiety, depression or chronic stress. Constant self-criticism, fear of failure and negative thinking patterns may make it more difficult to cope with everyday challenges. Identifying these patterns early and seeking appropriate support may help improve overall emotional wellbeing."
  },
  {
    question: "6. Why do I have low confidence?",
    answer: "Low confidence can develop for many reasons, including negative past experiences, repeated criticism, fear of failure, social comparison, bullying or ongoing emotional stress. Sometimes confidence decreases after difficult life events or prolonged mental health challenges. Understanding the reasons behind low confidence may help individuals build healthier coping strategies and gradually strengthen self-belief."
  },
  {
    question: "7. Can adults build confidence?",
    answer: "Yes. Confidence is not a fixed personality trait and can develop throughout life. Building confidence often involves developing new skills, setting realistic goals, challenging negative self-talk, improving emotional awareness and celebrating gradual progress. While the journey is different for everyone, consistent effort and appropriate guidance may help adults strengthen their confidence over time."
  },
  {
    question: "8. How can I improve my self-esteem naturally?",
    answer: "Improving self-esteem naturally often involves maintaining healthy daily routines, practising self-awareness, reducing negative self-talk, setting achievable goals, building supportive relationships and limiting unhealthy comparisons with others. Regular physical activity, good sleep and stress management may also contribute to emotional wellbeing. Sustainable improvement usually comes from consistent habits rather than quick fixes."
  },
  {
    question: "9. Can childhood experiences affect self-esteem?",
    answer: "Yes. Childhood experiences often play an important role in shaping self-esteem. Frequent criticism, bullying, emotional neglect, unrealistic expectations or a lack of encouragement may influence how individuals view themselves later in life. However, self-esteem can continue to develop throughout adulthood, and many people gradually build healthier self-worth through positive experiences and professional guidance."
  },
  {
    question: "10. How does low self-esteem affect relationships?",
    answer: "Low self-esteem may influence communication, trust and emotional connection within relationships. Some individuals seek constant reassurance, avoid expressing their needs, fear rejection or remain in unhealthy relationships because they doubt their own worth. Developing healthier self-esteem often supports stronger boundaries, better communication and more balanced relationships."
  },
  {
    question: "11. Can social media affect self-confidence?",
    answer: "Yes. Constant exposure to carefully edited images, achievements and lifestyles on social media may encourage unhealthy comparison for some individuals. This can contribute to feelings of inadequacy, self-doubt or reduced confidence. Using social media mindfully and focusing on personal growth instead of comparison may help support healthier self-esteem and emotional wellbeing."
  },
  {
    question: "12. Can low self-esteem affect career growth?",
    answer: "Yes. Low self-esteem may influence career decisions by making individuals hesitate to apply for promotions, avoid leadership opportunities or underestimate their abilities. Fear of failure or criticism may reduce willingness to take on new challenges. Building healthier confidence can support better communication, decision-making and professional development."
  },
  {
    question: "13. Can therapy or professional guidance help improve self-esteem?",
    answer: "Professional guidance may help individuals better understand the emotional, behavioural and thought patterns contributing to low self-esteem. Depending on individual needs, support may include psychological interventions, lifestyle guidance, stress management and strategies to build healthier self-belief. The most appropriate approach varies from person to person and should be tailored to individual circumstances."
  },
  {
    question: "14. How does Manovaidya support adults with low self-esteem?",
    answer: "At Manovaidya, support begins with understanding the individual rather than focusing only on confidence challenges. Through structured assessment, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand self-esteem, emotional wellbeing, lifestyle habits and behavioural patterns that may influence confidence. Our goal is to support healthier self-worth, emotional resilience and long-term personal growth through a holistic and personalised approach."
  },
  {
    question: "15. When should I seek professional guidance for low self-esteem?",
    answer: "You should consider seeking professional guidance if low self-esteem or confidence continues for several weeks and begins affecting your work, relationships, emotional wellbeing or daily life. Persistent self-doubt, fear of failure, negative self-talk or difficulty making decisions should not be ignored. At Manovaidya, structured assessments help identify contributing factors and provide personalised guidance to support healthier confidence, emotional resilience and long-term wellbeing."
  }
];

function SidebarCard({ children, className = "", id = "" }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AdultSelfEsteemConfidenceSupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showNeuroPillars, setShowNeuroPillars] = React.useState(false);

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  React.useEffect(() => {
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
    <main
      className="min-h-screen bg-white text-[#1f1726]"
      style={{ font: '400 1.125rem/1.5 "Martel", serif' }}
    >
      <Seo
        title="Low Self-Esteem & Confidence Support in India | Self-Worth & Confidence Building | Manovaidya"
        description="Looking for Low Self-Esteem & Confidence Support in India? Learn about self-worth, confidence challenges, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya."
        keywords="Low Self-Esteem Support, Low Self-Esteem Support in India, Confidence Building, Self-Worth, Negative Self-Talk, Fear of Failure, Self-Doubt, Confidence Issues, Emotional Wellbeing, Signs of Low Self-Esteem, How to Improve Confidence, Self-Esteem Assessment, Personal Growth"
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Low Self-Esteem & Confidence Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Self-Esteem & Confidence Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Low Self-Esteem & Confidence Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Build Healthy Self-Esteem, Confidence & Emotional Wellbeing
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Assessment
                </a>
                <a
                  href="tel:+917823838638"
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
                    <p className="text-[12px] font-bold text-[#75677d]">May 30, 2025 · 12 min read</p>
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
                  alt="Low Self-Esteem and Confidence Support in India at Manovaidya"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Confidence influences the way we think, communicate, make decisions and respond to everyday challenges. Most people experience moments of self-doubt before an interview, presentation, examination or important life decision. These temporary feelings are a normal part of life and usually improve with experience.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              However, when self-doubt becomes constant and begins affecting work, relationships, communication or personal growth, it may be associated with low self-esteem or confidence difficulties. Individuals may begin questioning their abilities, avoiding new opportunities or believing they are "not good enough" despite having the skills to succeed.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults silently struggle with low self-esteem because the signs are often hidden behind perfectionism, overthinking, people-pleasing or fear of failure. Others compare themselves with friends, colleagues or social media, gradually losing confidence in their own abilities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that confidence is not simply about positive thinking or speaking loudly. Healthy confidence develops through emotional wellbeing, self-awareness, balanced thinking and supportive daily habits.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand self-esteem, confidence and the factors influencing long-term emotional wellbeing.
            </p>

            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, Self-Esteem & Confidence Support Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="understanding-confidence" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Low Self-Esteem & Confidence</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Self-esteem refers to the way we value and perceive ourselves. It influences how we think about our abilities, strengths and overall self-worth.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Confidence, on the other hand, reflects how comfortable we feel performing specific tasks or facing new situations. A person may feel confident at work but lack confidence in social situations, relationships or public speaking.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Healthy self-esteem and confidence help individuals face challenges, learn from mistakes and continue growing even when situations become difficult.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When self-esteem becomes consistently low, everyday decisions may feel overwhelming. Individuals may avoid opportunities, doubt their abilities or constantly seek approval from others.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many adults searching for Low Self-Esteem Support in India, Confidence Building Support, Self-Doubt Help or How to Improve Confidence are looking for practical guidance because these challenges have started affecting different areas of their lives.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding the difference between self-esteem and confidence is an important first step towards building healthier emotional wellbeing.
            </p>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">Self-Esteem vs Confidence</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Although these terms are often used together, they describe different aspects of emotional wellbeing.
            </p>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Self-Esteem</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">Self-esteem is your overall opinion about yourself. It reflects questions like:</p>
                <ul className="space-y-1.5">
                  {["Am I worthy?", "Do I respect myself?", "Do I believe I deserve happiness?", "How do I see myself as a person?"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">Healthy self-esteem remains relatively stable, even when life becomes challenging.</p>
              </div>

              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <h4 className="font-bold text-[#3b2e45] mb-2 text-[14px]">Confidence</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mb-2">
                  Confidence is the belief that you can successfully perform a specific task or handle a particular situation. For example, someone may feel confident:
                </p>
                <ul className="space-y-1.5">
                  {["Giving presentations", "Running a business", "Solving problems", "Driving a car"].map(item => (
                    <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#51465a] mt-2 italic">but still struggle with low self-esteem in personal relationships.</p>
              </div>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Both confidence and self-esteem influence each other and contribute to overall emotional wellbeing.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of Low Self-Esteem</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Low self-esteem often develops gradually and may not always be obvious to others. Recognising these signs early may help individuals better understand their experiences.
            </p>

            <img src={symptomsImage} alt="Common signs of low self-esteem and confidence issues in adults" className="w-full mt-4 h-[350px] rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Emotional Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Many adults experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Constant self-doubt", "Feeling \"not good enough\"", "Fear of failure", "Shame", "Guilt", "Feeling inferior to others", "Emotional sensitivity"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Behavioural Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Low confidence may influence behaviour in different ways. Some individuals:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Avoid new opportunities", "Delay important decisions", "Frequently apologise", "Seek constant approval", "Give up easily", "Avoid taking healthy risks"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Cognitive Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Negative thinking patterns often accompany low self-esteem. Individuals may experience:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Negative self-talk", "Overthinking", "Self-criticism", "Fear of judgement", "Difficulty accepting compliments", "Expecting failure before trying"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Social Signs</h3>
                </div>
                <p className="text-[13px] font-semibold text-[#5a5063] mb-3">Confidence difficulties may also affect relationships and communication. Some individuals:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Avoid social situations", "Hesitate to express opinions", "Feel uncomfortable meeting new people", "Compare themselves with others", "Fear rejection", "Find it difficult to say \"no\""].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="causes" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Causes Low Self-Esteem?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Low self-esteem usually develops over time through a combination of life experiences rather than one single event. Common contributing factors include:
            </p>

            <div className="mt-5 space-y-4">
              {[
                { title: "Childhood Experiences", text: "Repeated criticism, unrealistic expectations or lack of emotional support during childhood may influence how individuals view themselves later in life." },
                { title: "Bullying", text: "Bullying during school, college or the workplace may reduce confidence and increase feelings of self-doubt." },
                { title: "Difficult Relationships", text: "Emotionally unhealthy relationships, repeated rejection or constant criticism may gradually affect self-worth." },
                { title: "Fear of Failure", text: "Repeated disappointments or fear of making mistakes may reduce confidence and make individuals avoid new opportunities." },
                { title: "Social Comparison", text: "Constant comparison with others, especially through social media, may create unrealistic expectations and reduce self-confidence." },
                { title: "Mental Health Challenges", text: "Conditions such as anxiety, depression or chronic stress may also influence confidence and self-esteem." },
                { title: "Perfectionism", text: "People who expect themselves to perform perfectly may become highly self-critical whenever they make mistakes, gradually reducing their confidence." }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h3 className="text-[15px] font-black text-[#21142d]">{item.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-6 text-[#51465a]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Why Early Understanding Matters</h3>
              <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                Many adults assume that low confidence is simply part of their personality. However, confidence and self-esteem are not fixed traits. They are influenced by experiences, thoughts, behaviours and emotional wellbeing. Recognising the signs of low self-esteem early allows individuals to better understand the underlying factors, build healthier coping strategies and seek appropriate guidance before these challenges begin affecting work, relationships and overall quality of life.
              </p>
            </div>
          </section>

          <section id="health-impact" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Low Self-Esteem Can Affect Daily Life</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Low self-esteem is not simply about lacking confidence. Over time, it can influence the way a person thinks, feels, communicates and responds to everyday situations. It may gradually affect career growth, relationships, emotional wellbeing and overall quality of life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many adults continue functioning normally on the outside while constantly struggling with self-doubt internally. They may avoid opportunities, underestimate their abilities or seek constant approval from others despite being capable and talented. Understanding how low self-esteem affects different areas of life is an important step towards building healthier confidence and emotional wellbeing.
            </p>

            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Emotional Wellbeing",
                  desc: "Low self-esteem often influences emotional health. Many adults report experiencing:",
                  list: ["Constant self-doubt", "Feeling \"not good enough\"", "Fear of rejection", "Shame", "Guilt", "Emotional sensitivity", "Difficulty accepting appreciation"]
                },
                {
                  title: "Career & Professional Growth",
                  desc: "Confidence plays an important role in career development. Adults with low self-esteem may experience:",
                  list: ["Hesitation to accept new responsibilities", "Fear of speaking in meetings", "Avoiding leadership opportunities", "Difficulty negotiating salaries", "Fear of making mistakes", "Underestimating their abilities"]
                },
                {
                  title: "Relationships",
                  desc: "Healthy relationships are closely connected with healthy self-worth. Low self-esteem may lead to:",
                  list: ["Fear of rejection", "Difficulty expressing feelings", "Constant reassurance seeking", "People-pleasing behaviour", "Difficulty setting healthy boundaries", "Staying in unhealthy relationships"]
                },
                {
                  title: "Decision-Making",
                  desc: "Individuals with low confidence often struggle with everyday decisions. Some people repeatedly question themselves. This uncertainty may lead to procrastination, indecisiveness and increased stress.",
                  list: ["\"What if I make the wrong decision?\"", "\"What if people judge me?\"", "\"What if I fail?\"", "\"Maybe someone else knows better.\""]
                },
                {
                  title: "Social Life",
                  desc: "Confidence also affects social interactions. Over time, avoiding social experiences may further reduce confidence and increase feelings of isolation. Some adults may:",
                  list: ["Avoid meeting new people", "Feel uncomfortable expressing opinions", "Fear public speaking", "Compare themselves with others", "Withdraw from social situations"]
                },
                {
                  title: "Personal Growth",
                  desc: "Low self-esteem may prevent individuals from reaching their potential. Recognising these patterns early may help individuals gradually build healthier confidence and emotional resilience. Many people avoid:",
                  list: ["Learning new skills", "Applying for better jobs", "Starting a business", "Travelling alone", "Building new relationships", "Pursuing personal goals"]
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="text-[16px] font-black leading-5 text-[#21142d] mb-2">{item.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#5a5063]">{item.desc}</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc list-inside text-[13px] font-semibold text-[#5a5063]">
                    {item.list.map((li, index) => <li key={index}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System for Self-Esteem & Confidence</h2>
              </div>
            </div>

            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, confidence is understood through a broader perspective. Rather than focusing only on self-doubt, we aim to understand the interconnected factors influencing emotional wellbeing, behaviour, lifestyle and overall health.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The Neuro-Ayurveda Development System helps individuals better understand confidence and self-esteem through five interconnected pillars.
            </p>

            <img
              src={neuroDiagramImage}
              alt="Neuro Ayurveda approach for self-esteem and confidence support"
              className="mt-5 w-full h-auto object-contain max-h-[400px] mb-5 rounded-lg border border-[#eadff1] bg-white shadow-sm p-4"
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
                {neuroAyurvedaPillars.map(({ title, text, Icon }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] last:sm:col-span-2"
                  >
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

          <section id="building-confidence" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Adults Can Build Healthy Confidence</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Developing healthy confidence is usually a gradual process built through consistent habits and self-awareness.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Practice Self-Awareness: Understanding your strengths, challenges and emotional patterns is an important first step towards building confidence.",
                  "Challenge Negative Self-Talk: Learning to recognise and question overly critical thoughts may gradually improve self-belief.",
                  "Set Realistic Goals: Achieving small, meaningful goals often helps build confidence over time.",
                  "Maintain Healthy Daily Habits: Regular sleep, balanced nutrition, physical activity and consistent routines support both physical and emotional wellbeing.",
                  "Reduce Constant Comparison: Everyone has a different journey. Focusing on personal progress instead of comparing yourself with others may help strengthen self-esteem.",
                  "Build Supportive Relationships: Surrounding yourself with encouraging and respectful people often contributes to healthier confidence and emotional resilience."
                ].map((item, idx) => {
                  const [boldText, normalText] = item.split(': ');
                  return (
                    <li key={idx} className="flex gap-2 text-[14px] font-semibold text-[#51465a]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#7835A4]" />
                      <span><strong className="text-[#21142d]">{boldText}:</strong> {normalText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section id="how-we-support" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div className="flex items-start gap-3">
                <div>
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    How Manovaidya Supports Adults
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    At Manovaidya, support begins with understanding the individual rather than focusing only on confidence problems. A structured, step-by-step process designed for long-term growth and real change.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-start lg:justify-between">
                {assessmentSteps.map(({ step, title, desc, Icon }, index) => (
                  <React.Fragment key={title}>
                    <div className="flex min-h-[94px] flex-col items-center justify-start text-center">
                      <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7d8] bg-[#f7fbf5] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-black leading-4 text-[#2f2636]">{step}: {title}</span>
                      <span className="mt-1 max-w-[128px] text-[10px] font-semibold leading-4 text-[#3b2e45]">
                        {desc}
                      </span>
                    </div>
                    {index < assessmentSteps.length - 1 && (
                      <ArrowRight className="mx-1 mt-3 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mx-auto mt-6 max-w-[560px] rounded-md bg-[#f1f5ef] px-4 py-2 text-center text-[12px] font-black leading-5 text-[#5b5360]">
                Our goal is clarity, not just temporary relief. We help you understand your true potential deeply.
              </div>
            </div>

            <h3 className="mt-6 font-black text-[16px] text-[#21142d]">When Should You Consider an Assessment?</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">You may consider seeking professional guidance if you experience:</p>

            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Persistent low self-esteem",
                  "Constant self-doubt",
                  "Fear of failure affecting daily life",
                  "Difficulty making decisions",
                  "Avoiding opportunities because of lack of confidence",
                  "Negative self-talk",
                  "Confidence issues affecting work or relationships"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured assessment can help identify the factors influencing confidence, emotional wellbeing and self-worth while creating a personalised roadmap towards healthier emotional resilience and long-term personal growth.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is to help individuals move from self-doubt and fear towards greater confidence, emotional resilience, healthier relationships and a more fulfilling life.
            </p>
          </section>

          <section id="why-choose-us" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Why Adults Across India Choose Manovaidya</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Living with low self-esteem or confidence challenges can quietly affect many areas of life. Some individuals hesitate to express their opinions, while others constantly doubt their abilities despite achieving success. Over time, these patterns may influence relationships, career growth, emotional wellbeing and personal happiness.
              </p>
              <div className="mt-3 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Our support focuses on:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    "Comprehensive Self-Esteem & Confidence Assessment",
                    "Neuro-Ayurveda Development System",
                    "Personalized Guidance",
                    "Holistic Mind-Body Perspective",
                    "Long-Term Personal Growth",
                    "Ongoing Support & Progress Tracking"
                  ].map(item => (
                    <li key={item} className="flex gap-2 text-[12.5px] font-semibold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Adults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Low Self-Esteem & Confidence Support through online and in-clinic consultations.
              </p>
            </div>
            <img
              src={supportImage}
              alt="Support for low confidence and emotional wellbeing"
              className="w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">Mental Health & Wellness Specialist</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Based in Delhi NCR, Dr. Ankush Garg supports adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and holistic approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Many adults experiencing low self-esteem, fear of failure, persistent self-doubt or confidence challenges seek guidance to better understand the factors influencing their emotional wellbeing. Through structured assessment, personalized guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps individuals better understand emotional wellbeing while supporting long-term personal growth through the Neuro-Ayurveda Development System.
                </p>
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
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-7">
              <h2 className="text-[24px] font-black">Struggling With Low Self-Esteem or Lack of Confidence?</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Book a structured assessment and personalized guidance session with the Manovaidya team to better understand self-esteem, confidence challenges and your emotional wellbeing.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Why Trust Manovaidya?</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Structured Neuro-Ayurveda Development System",
                    "Personalized Assessment Before Recommendations",
                    "Online & In-Clinic Consultations Across India",
                    "Holistic Mind-Body Approach",
                    "Guidance by Dr. Ankush Garg",
                    "Focus on Long-Term Emotional Wellbeing & Personal Growth"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Take the First Step Towards Healthier Confidence & Emotional Wellbeing</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Whether you are experiencing negative self-talk, fear of judgement, low self-worth or confidence challenges, our team is here to help you understand your concerns and explore personalized support.</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+917823838638"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                  >
                    Take Mental Health Assessment
                  </a>
                  <BookConsultationButton
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#8e45bb]"
                  >
                    Book Consultation
                  </BookConsultationButton>
                </div>
              </div>
            </div>
          </section>

          {/* Schema generation */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "name": "Low Self-Esteem & Confidence Support in India",
                "description": "Looking for Low Self-Esteem & Confidence Support in India? Learn about self-worth, confidence challenges, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.",
                "url": "https://manovaidya.com/low-self-esteem-confidence-support-india/"
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://manovaidya.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Adult Mental Health Care",
                    "item": "https://manovaidya.com/adult-mental-health-care/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Low Self-Esteem & Confidence Support",
                    "item": "https://manovaidya.com/low-self-esteem-confidence-support-india/"
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Physician",
                "name": "Dr. Ankush Garg",
                "url": "https://manovaidya.com/dr-ankush-garg/",
                "image": "https://manovaidya.com/images/doctorimg-2.jpeg",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delhi NCR",
                  "addressCountry": "IN"
                },
                "medicalSpecialty": "Psychiatry"
              })
            }}
          />

        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input
                type="search"
                placeholder="Search topics..."
                className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]"
              />
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
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id
                    ? "bg-[#f0e7f6] text-[#7835A4]"
                    : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                    }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"
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
                <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#7835A4]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a personalized plan for your emotional wellbeing from our experts.
            </p>
            <BookConsultationButton
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </BookConsultationButton>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, wellbeing tips and Manovaidya updates.
              </p>
            </div>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]"
            />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AdultSelfEsteemConfidenceSupportIndiaPage;

