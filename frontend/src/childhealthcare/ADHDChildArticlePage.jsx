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
} from "lucide-react";
import childHeroImage from "../images/adhd-child-hero-generated.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is ADHD?", id: "what-is-adhd" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Beyond Behaviour", id: "beyond-behaviour" },
  { label: "ADHD Assessment", id: "adhd-assessment" },
  { label: "Looking Beyond Symptoms", id: "looking-beyond-symptoms" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Work", id: "how-we-work" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Autism", count: 12, Icon: Puzzle },
  { label: "ADHD", count: 10, Icon: Brain },
  { label: "Speech Delay", count: 8, Icon: MessageCircle },
  { label: "Child Development", count: 11, Icon: Baby },
  { label: "Parenting", count: 9, Icon: Users },
  { label: "Mental Health", count: 13, Icon: HeartHandshake },
];

const beyondBehaviourHighlights = [
  { label: "Brain Development & Function", Icon: Brain },
  { label: "Emotional Regulation", Icon: ShieldCheck },
  { label: "Learning Readiness", Icon: BookOpen },
  { label: "Executive Functioning", Icon: Activity },
  { label: "Behaviour & Environment", Icon: Puzzle },
];

const adhdAssessmentSteps = [
  { step: "Step 1", label: "Detailed Parent Discussion", Icon: Users },
  { step: "Step 2", label: "Developmental Assessment", Icon: BookOpen },
  { step: "Step 3", label: "Behaviour & Attention Evaluation", Icon: Brain },
  { step: "Step 4", label: "Report & Insights", Icon: CalendarCheck },
  { step: "Step 5", label: "Personalised Guidance", Icon: ShieldCheck },
];

const howWeWorkSteps = [
  { title: "Assessment", desc: "Understand your child in-depth", Icon: Brain },
  { title: "Understanding", desc: "Identify strengths & challenges", Icon: Search },
  { title: "Personalised Plan", desc: "Create an individualized development plan", Icon: Activity },
  { title: "Parent Guidance", desc: "Train & empower parents", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor, support & make adjustments", Icon: CalendarCheck },
];

const assessmentClarityItems = [
  { label: "Attention and concentration abilities", Icon: Activity },
  { label: "Learning readiness", Icon: BookOpen },
  { label: "Academic functioning", Icon: CalendarCheck },
  { label: "Behavioural patterns", Icon: Puzzle },
  { label: "Emotional regulation", Icon: HeartHandshake },
  { label: "Impulsivity", Icon: Sparkles },
  { label: "Social interaction", Icon: Users },
  { label: "Daily routines and functioning", Icon: CheckCircle2 },
  { label: "Developmental strengths", Icon: Brain },
  { label: "Areas requiring support", Icon: ShieldCheck },
];

const neuroAyurvedaPillars = [
  {
    title: "Pillar 1: Brain Nourishment System",
    Icon: Brain,
    text: "Learning, attention, memory, communication and social interaction are all influenced by brain development. The Brain Nourishment System focuses on supporting the foundations of healthy cognitive and developmental functioning. This pillar aims to understand factors that may influence: Attention, Learning readiness, Communication development, Cognitive functioning, Memory, Emotional regulation. The goal is to help create a stronger foundation for growth and development.",
  },
  {
    title: "Pillar 2: Gut Response System",
    Icon: Utensils,
    text: "The relationship between digestion and overall wellbeing has been recognized in both traditional and modern health approaches. Many children experiencing developmental concerns may also experience: Picky eating, Digestive discomfort, Food sensitivities, Irregular bowel habits, Appetite concerns. The Gut Response System focuses on understanding how digestive wellbeing may influence overall functioning and development.",
  },
  {
    title: "Pillar 3: Neural Network System",
    Icon: Sparkles,
    text: "Development occurs through connections within the brain. The Neural Network System focuses on supporting developmental readiness by understanding how learning, attention, communication and behaviour may be influenced by underlying developmental pathways. Areas often explored include: Learning readiness, Response patterns, Communication development, Attention, Social engagement.",
  },
  {
    title: "Pillar 4: Sensory Integration System",
    Icon: Waves,
    text: "Many children with autism experience sensory differences. Some children may become overwhelmed by sounds, lights, textures or crowded environments, while others may actively seek sensory experiences. The Sensory Integration System focuses on understanding: Sensory sensitivities, Sensory preferences, Sensory regulation, Daily functioning challenges, Environmental influences. Understanding sensory needs often helps families better support their child's comfort and participation.",
  },
  {
    title: "Pillar 5: Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Behaviour is often a form of communication. Children may express their needs, frustrations, discomfort or emotions through behaviour. The Behaviour Guidance System focuses on helping families understand: Why behaviours occur, Possible developmental influences, Environmental triggers, Emotional regulation challenges, Supportive behaviour guidance approaches. The goal is to move beyond simply reacting to behaviours and instead understand the factors influencing them.",
  },
];

const faqs = [
  {
    question: "1. What is ADHD?",
    answer: "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that may affect attention, focus, behaviour, emotional regulation and daily functioning. Children with ADHD may find it difficult to stay focused on tasks, follow instructions, manage impulses or remain organized during daily activities. Every child with ADHD is unique, and symptoms can vary significantly from one child to another. Some children primarily experience attention difficulties, while others may show hyperactivity, impulsivity or a combination of both. At Manovaidya, ADHD is understood through a broader developmental perspective that considers attention, learning, behaviour, emotional wellbeing and overall child development rather than focusing on isolated symptoms alone."
  },
  {
    question: "2. What are the first signs of ADHD?",
    answer: "Early signs of ADHD may include difficulty maintaining attention, frequent distractions, forgetfulness, excessive activity, impulsive behaviour and challenges following instructions. Parents may notice that their child struggles to complete tasks, frequently loses belongings, interrupts conversations or has difficulty waiting for their turn. These signs often become more noticeable when children begin school and are expected to sit, focus and follow structured routines. While occasional inattentiveness or high energy can be normal in childhood, persistent patterns that affect learning, behaviour or daily functioning may benefit from a structured developmental assessment."
  },
  {
    question: "3. What are the six symptoms of ADHD?",
    answer: "Although ADHD can present differently in every child, six commonly observed symptoms include difficulty maintaining attention, frequent distractions, forgetfulness, impulsive behaviour, excessive activity and difficulty following instructions. Some children may struggle to complete tasks, stay organized or manage their emotions effectively. Others may appear restless, interrupt conversations or act before thinking through consequences. The severity and combination of symptoms can vary depending on the child's age, developmental profile and individual needs. Understanding these symptoms within the context of overall development helps families gain a clearer picture of their child's strengths and challenges."
  },
  {
    question: "4. At what age can ADHD symptoms become noticeable?",
    answer: "ADHD symptoms can become noticeable during the preschool years, although they often become more apparent when children enter structured learning environments such as school. At this stage, children are expected to sit for longer periods, follow instructions, complete tasks and manage routines more independently. Parents and teachers may begin noticing difficulties related to attention, impulsivity, hyperactivity or emotional regulation. Every child develops differently, and occasional challenges do not automatically indicate ADHD. A structured assessment can help families better understand whether observed behaviours are part of normal development or require additional support."
  },
  {
    question: "5. What causes someone to develop ADHD?",
    answer: "ADHD is considered a neurodevelopmental condition, and current research suggests that multiple factors may contribute to its development. These may include genetic influences, brain development differences and environmental factors that affect early development. ADHD is not caused by poor parenting, lack of discipline or low intelligence. The condition affects how the brain regulates attention, behaviour and executive functioning skills. Because every child is unique, developmental influences can vary from one individual to another. Understanding these factors can help families move away from blame and focus on providing meaningful support and guidance for their child's development."
  },
  {
    question: "6. Can ADHD improve with age?",
    answer: "Many children with ADHD continue developing attention, emotional regulation, organizational skills and self-management abilities as they grow older. While ADHD is considered a lifelong neurodevelopmental condition, developmental progress often continues throughout childhood, adolescence and adulthood. Individual outcomes vary depending on factors such as family support, learning opportunities, routines and personalized guidance. Rather than focusing only on the diagnosis, it is often more helpful to focus on helping children build strengths, confidence, independence and life skills. Consistent support and developmental understanding can help children navigate challenges more effectively over time."
  },
  {
    question: "7. Is ADHD linked to high IQ?",
    answer: "ADHD and intelligence are two different things. A child with ADHD can have average, above-average or below-average intellectual abilities, just like any other child. Many children with ADHD are highly creative, curious, energetic and capable of thinking in unique ways. However, attention difficulties, impulsivity or organizational challenges may sometimes affect academic performance, making it difficult for others to recognize their strengths. ADHD does not determine intelligence. Understanding a child's learning profile, strengths and developmental needs helps families create a more supportive environment for growth and learning."
  },
  {
    question: "8. Does screen time cause ADHD?",
    answer: "Current research does not show that screen time directly causes ADHD. However, excessive screen exposure may influence attention span, sleep quality, emotional regulation and daily routines, which can sometimes make existing attention-related challenges more noticeable. Children who already struggle with focus, self-regulation or impulsivity may experience greater difficulties when screen use becomes excessive or unstructured. Maintaining healthy screen habits, balanced routines, outdoor play, social interaction and adequate sleep can help support overall development and wellbeing. Parents should view screen time as one factor among many rather than the sole cause of attention concerns."
  },
  {
    question: "9. How can I help my ADHD naturally?",
    answer: "Parents can support children with ADHD by creating structured routines, encouraging regular physical activity, maintaining healthy sleep habits and providing a calm and supportive environment. Breaking tasks into smaller steps, using visual schedules and offering positive reinforcement may also help improve daily functioning. Consistency is often more effective than strict discipline alone. Every child is unique, so support strategies should be adapted according to individual strengths and challenges. At Manovaidya, parent guidance focuses on helping families better understand attention, behaviour, learning and developmental needs through a structured and personalized approach."
  },
  {
    question: "10. How can I treat ADHD at home?",
    answer: "Home support plays an important role in helping children with ADHD manage daily challenges more effectively. Parents can focus on creating predictable routines, setting clear expectations, reducing unnecessary distractions and encouraging healthy lifestyle habits. Positive communication, patience and structured guidance often help children feel more confident and supported. Activities that encourage movement, organization, attention and emotional regulation may also be beneficial. While home-based strategies can be valuable, every child has unique developmental needs. A structured assessment can help families better understand which approaches may be most appropriate for their child."
  },
  {
    question: "11. What habits help ADHD?",
    answer: "Healthy daily habits can play an important role in supporting children with ADHD. Consistent sleep schedules, regular physical activity, structured routines and organized learning environments may help improve attention and daily functioning. Breaking tasks into smaller steps, using visual reminders and encouraging positive communication can also be beneficial. Many children respond well to predictable routines because they reduce confusion and improve task completion. It is important to focus on progress rather than perfection. Every child has unique strengths and challenges, so habits should be adjusted according to individual developmental needs and family circumstances."
  },
  {
    question: "12. What are the 7 triggers that make ADHD worse?",
    answer: "Several factors may increase attention, behaviour or emotional regulation difficulties in children with ADHD. Common triggers may include inadequate sleep, excessive screen time, highly distracting environments, inconsistent routines, emotional stress, lack of physical activity and overwhelming academic demands. These factors do not cause ADHD, but they may make existing symptoms more noticeable. Understanding individual triggers can help parents create a more supportive environment for their child. Since every child is different, identifying personal patterns and challenges is often an important part of long-term developmental support and planning."
  },
  {
    question: "13. How to focus with ADHD without medication?",
    answer: "Improving focus often involves creating strategies that support attention rather than relying on willpower alone. Children and adults with ADHD may benefit from structured routines, breaking tasks into smaller steps, reducing distractions and using visual reminders or schedules. Regular physical activity, healthy sleep habits and organized environments may also support attention and productivity. It is important to recognize that attention difficulties are not a sign of laziness or lack of intelligence. A structured developmental approach can help identify practical strategies that match the individual's learning style and attention needs."
  },
  {
    question: "14. Can children with ADHD attend regular schools?",
    answer: "Yes. Many children with ADHD attend regular schools successfully and continue progressing academically and socially. The most appropriate educational environment depends on the child's attention profile, learning needs, emotional regulation abilities and level of support required. Some children may benefit from classroom accommodations, additional academic support or structured learning strategies. Others may perform well within standard educational settings. Every child is unique, and school decisions should be based on individual strengths and developmental needs rather than the diagnosis alone. A developmental assessment can help parents make more informed educational decisions."
  },
  {
    question: "15. How does Manovaidya assess and support children with ADHD?",
    answer: "At Manovaidya, ADHD assessment focuses on understanding the child as a whole rather than evaluating a single symptom in isolation. The assessment process may include developmental history, attention abilities, learning patterns, behaviour observations, emotional regulation, school-related concerns and parent inputs. Based on this understanding, families receive personalized guidance and a structured developmental roadmap. Support focuses on attention development, learning readiness, behaviour guidance, emotional wellbeing and parent support through the Neuro-Ayurveda Development System. The goal is to provide greater clarity, meaningful direction and long-term developmental support tailored to the child's individual needs."
  }
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ADHDChildArticlePage() {
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
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">

        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg   pb-6 pt-2  lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8  lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/child-health-care" className="transition hover:text-[#7835A4]">Child Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">ADHD</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">ADHD Treatment</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                ADHD Treatment in India: ADHD Assessment, Attention & Child Development Support
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Take the first step toward understanding your child's attention, learning and behavioural needs through a structured ADHD Assessment and personalized guidance process.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book ADHD Assessment
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
                  src={childHeroImage}
                  alt="Child playing with colorful blocks during developmental support"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child learns, thinks and grows differently. Some children are naturally active, curious and energetic. However, when attention difficulties, hyperactivity or impulsive behaviour begin affecting learning, daily routines, school performance and social interactions, parents often start looking for answers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is one of the most commonly observed neurodevelopmental conditions in children. It can influence attention, focus, behaviour, emotional regulation, learning and daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that ADHD is not simply about a child being "too active" or "not listening." Attention, behaviour, learning readiness, emotional wellbeing and overall development are interconnected. This is why our approach focuses on understanding the child as a whole rather than looking at isolated symptoms alone.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, ADHD, Autism, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda Development System designed to help families better understand their child's developmental needs and create a clear roadmap for long-term growth and support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Whether parents are searching for ADHD Treatment in India, ADHD Assessment, Child Development Support or guidance regarding attention and behaviour concerns, our goal is to provide clarity, structured guidance and individualized support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from across India, Delhi, Noida, Greater Noida, Ghaziabad and NCR connect with Dr. Ankush Garg for ADHD, Autism, Child Development and Mental Health support through a structured Neuro-Ayurveda Development System.
            </p>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, ADHD Treatment Focuses On:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Attention & Focus Development", Icon: Activity },
                  { label: "Learning Readiness & Academic Support", Icon: BookOpen },
                  { label: "Behaviour Guidance & Emotional Regulation", Icon: HeartHandshake },
                  { label: "Parent Training & Family Support", Icon: Users },
                  { label: "Brain Development & Cognitive Wellness", Icon: Brain },
                  { label: "Personalized Development Planning", Icon: Sparkles },
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
              <h3 className="text-[16px] font-black text-[#21142d]">Book an ADHD Assessment</h3>
              <p className="mt-2 text-[13px] font-bold leading-6 text-[#51465a]">
                Take the first step toward understanding your child's attention, learning and behavioural needs through a structured ADHD Assessment and personalized guidance process.
              </p>
            </div>
          </section>

          <section id="what-is-adhd" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is ADHD?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that can influence a child's ability to maintain attention, regulate behaviour, manage impulses and stay organized during daily activities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              ADHD is not a result of poor parenting, lack of intelligence or a child's unwillingness to listen. It is a developmental condition that affects how children process information, maintain focus, regulate behaviour and respond to their environment.
            </p>
            <h3 className="mt-4 font-black text-[16px] text-[#21142d]">Every child with ADHD is unique.</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may primarily experience difficulties with attention and concentration, while others may display hyperactivity, impulsive behaviour or a combination of both. The way ADHD presents itself can vary significantly from one child to another.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Many parents first notice concerns when their child:</h3>
              <ul className="mt-3 space-y-2.5">
                {["Struggles to stay focused on tasks", "Frequently forgets instructions", "Appears easily distracted", "Has difficulty sitting still", "Interrupts conversations frequently", "Faces challenges completing schoolwork", "Acts impulsively without thinking through consequences"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              These behaviours can sometimes affect academic performance, family routines, social relationships and overall confidence.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we believe ADHD should be understood beyond behaviour alone. Attention, emotional regulation, learning readiness, behaviour, executive functioning and overall child development are often interconnected.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured developmental understanding helps families move from confusion and frustration toward greater clarity and meaningful action.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of ADHD</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              The signs and symptoms of ADHD can vary depending on the child's developmental profile, age and individual needs.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              While every child occasionally becomes distracted or energetic, ADHD-related concerns are often more persistent and may significantly affect daily functioning.
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Inattention Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Children experiencing attention-related challenges may:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Have difficulty concentrating on tasks", "Become distracted easily", "Frequently forget instructions", "Lose personal belongings", "Make careless mistakes in schoolwork", "Struggle to complete tasks independently", "Have difficulty organizing activities", "Appear not to listen when spoken to directly", "Avoid tasks requiring sustained attention", "Frequently shift focus from one activity to another"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Parents often describe these children as intelligent but unable to consistently maintain attention.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Hyperactivity Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Some children with ADHD may display higher levels of physical activity than expected for their age. Common signs may include:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Constant movement or restlessness", "Difficulty sitting for extended periods", "Excessive talking", "Fidgeting frequently", "Running or climbing in inappropriate situations", "Difficulty remaining calm during structured activities", "Frequent need for movement", "Difficulty waiting patiently"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Hyperactivity can sometimes become more noticeable in classroom settings where children are expected to sit, focus and follow routines.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Impulsivity Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Impulsivity refers to acting quickly without fully considering consequences. Some common examples include:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Interrupting conversations", "Answering questions before they are completed", "Difficulty waiting for turns", "Acting without thinking", "Emotional outbursts", "Difficulty controlling immediate reactions", "Risk-taking behaviour", "Challenges following structured rules"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Impulsivity may affect learning, peer relationships, family interactions and emotional regulation.</p>
              </div>
            </div>
          </section>

          <section id="beyond-behaviour" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <div className="flex items-start gap-3">
                  {/* <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-[#7835A4] text-[13px] font-black leading-none text-white shadow-[0_7px_16px_rgba(120,53,164,0.22)]">
                    3
                  </span> */}
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    Understanding ADHD Beyond Behaviour
                  </h2>
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  ADHD is not just about behaviour. It is connected to brain development, emotional regulation,
                  learning readiness, executive functioning and overall well-being.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:mt-0 lg:flex-1">
                {beyondBehaviourHighlights.map(({ label, Icon }) => (
                  <div key={label} className="flex min-h-[86px] flex-col items-center justify-start text-center">
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="max-w-[116px] text-[11px] font-black leading-4 text-[#3b2e45]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Parents are often told:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Your child is lazy.", "Your child needs more discipline.", "Your child is simply naughty.", "Your child will outgrow it."].map(item => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a] italic">
                    "{item}"
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              While behaviour may be one visible aspect of ADHD, the condition often involves much more than what appears on the surface.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention, emotional regulation, executive functioning, learning readiness, behaviour, motivation and organization are interconnected aspects of development.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-3">For example:</p>
              <ul className="space-y-2.5">
                {[
                  "Difficulty maintaining attention may affect learning.",
                  "Emotional regulation challenges may influence behaviour.",
                  "Executive functioning difficulties may affect planning and organization.",
                  "Impulsivity may impact social relationships.",
                  "Attention difficulties may influence academic performance.",
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              This broader developmental understanding forms an important part of the Neuro-Ayurveda Development System followed at Manovaidya.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on visible behaviours, the goal is to understand the factors that may influence attention, learning, behaviour and overall development so that families can receive clearer guidance and a more structured roadmap for long-term support.
            </p>
          </section>

          <section id="adhd-assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div className="flex items-start gap-3">
                {/* <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-[#7835A4] text-[13px] font-black leading-none text-white shadow-[0_7px_16px_rgba(120,53,164,0.22)]">
                  4
                </span> */}
                <div>
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    ADHD Assessment at Manovaidya
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    A comprehensive assessment helps understand your child's unique strengths, challenges and needs.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-center lg:justify-between">
                {adhdAssessmentSteps.map(({ step, label, Icon }, index) => (
                  <React.Fragment key={label}>
                    <div className="flex min-h-[92px] flex-col items-center justify-start text-center">
                      <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-black leading-4 text-[#2f2636]">{step}</span>
                      <span className="mt-1 max-w-[118px] text-[11px] font-black leading-4 text-[#3b2e45]">
                        {label}
                      </span>
                    </div>
                    {index < adhdAssessmentSteps.length - 1 && (
                      <ArrowRight className="mx-1 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mx-auto mt-3 max-w-[560px] rounded-md bg-[#f1f5ef] px-4 py-2 text-center text-[12px] font-black leading-5 text-[#5b5360]">
                Our goal is clarity, not just diagnosis. We help you understand your child deeply.
              </div>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, and every developmental journey is different.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents spend months or even years trying to understand why their child struggles with attention, focus, learning, behaviour or emotional regulation. Some children may be labelled as lazy, careless, stubborn or disobedient when the underlying concern may actually be related to attention and developmental functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, ADHD Assessment focuses on understanding the complete developmental picture rather than evaluating a single symptom in isolation.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">The assessment process is designed to help families gain clarity about:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {assessmentClarityItems.map(({ label, Icon }) => (
                  <li key={label} className="flex min-h-[76px] items-center gap-3 rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-3 text-[13px] font-bold leading-5 text-[#51465a]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-[0_6px_14px_rgba(58,31,90,0.07)]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is not simply to identify challenges but to help families better understand their child's unique developmental profile and create a structured roadmap for future growth and support.
            </p>

            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">What Does the Assessment Process Include?</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Detailed Parent Discussion", desc: "Understanding developmental history, school-related concerns, attention challenges, behavioural observations, learning patterns, emotional responses, daily routines, sleep habits, food preferences, and family observations." },
                { title: "Understanding Attention & Learning Patterns", desc: "Identifying attention strengths and challenges, learning readiness, behaviour patterns, emotional regulation abilities, organizational skills, social functioning, and academic difficulties." },
                { title: "Individualized Guidance", desc: "Providing parent guidance, behaviour support strategies, learning support recommendations, routine development strategies, emotional regulation support, and progress monitoring approaches." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[14px] font-black leading-5 text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[12.5px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="looking-beyond-symptoms" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">ADHD Treatment in India: Looking Beyond Symptoms</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many families searching for ADHD Treatment in India are often looking for ways to improve attention, reduce hyperactivity and help their child perform better at school.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              While these goals are important, focusing only on visible symptoms may not always provide a complete understanding of the child's developmental needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Attention difficulties, impulsive behaviour, emotional regulation challenges, learning concerns and executive functioning skills are often interconnected.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-3">For example:</p>
              <ul className="space-y-2.5">
                {[
                  "Difficulty focusing may affect learning.",
                  "Emotional regulation challenges may influence behaviour.",
                  "Executive functioning difficulties may impact planning and organization.",
                  "Impulsivity may affect peer relationships.",
                  "Academic struggles may affect confidence and self-esteem."
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, ADHD is understood through a broader developmental perspective. Rather than focusing only on individual symptoms, the goal is to understand the factors that may influence attention, behaviour, learning and overall development. This understanding forms the foundation of the Neuro-Ayurveda Development System.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
              </div>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, developmental, behavioural and attention-related concerns are understood through the Neuro-Ayurveda Development System, a structured framework developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The system was created to help families better understand the interconnected factors that may influence learning, attention, behaviour, emotional regulation and overall child development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on symptoms, the Neuro-Ayurveda Development System focuses on understanding the child's broader developmental needs through five interconnected pillars.
            </p>
            <img
              src={neuroDiagramImage}
              alt="The Neuro-Ayurveda Development System"
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

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div className="flex items-start gap-3">
                {/* <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-[#7835A4] text-[13px] font-black leading-none text-white shadow-[0_7px_16px_rgba(120,53,164,0.22)]">
                  6
                </span> */}
                <div>
                  <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                    How We Work at Manovaidya
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                    A structured, step-by-step process designed for long-term growth and real change.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-center lg:justify-between">
                {howWeWorkSteps.map(({ title, desc, Icon }, index) => (
                  <React.Fragment key={title}>
                    <div className="flex min-h-[94px] flex-col items-center justify-start text-center">
                      <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7d8] bg-[#f7fbf5] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-black leading-4 text-[#2f2636]">{title}</span>
                      <span className="mt-1 max-w-[128px] text-[11px] font-black leading-4 text-[#3b2e45]">
                        {desc}
                      </span>
                    </div>
                    {index < howWeWorkSteps.length - 1 && (
                      <ArrowRight className="mx-1 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, which is why support at Manovaidya begins with understanding the child as a whole rather than focusing on a diagnosis alone.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our process starts with a detailed assessment to understand developmental history, communication abilities, behaviour patterns, learning needs, attention profile, sensory responses and family concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child’s individual needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence communication, attention, behaviour, learning, emotional wellbeing and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support focuses on assessment, parent guidance, developmental planning, progress tracking and long-term family support so that parents can move forward with greater clarity, confidence and direction.
            </p>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[14px] font-bold text-[#3b2e45]">
                Every child is unique. This is why support at Manovaidya begins with a detailed assessment, developmental understanding and personalized guidance rather than a one-size-fits-all approach.
              </p>
            </div>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with ADHD</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support is personalized because no two children are exactly alike. Every child has unique strengths, interests, challenges and developmental needs.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Our approach focuses on:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Understanding the child as an individual",
                  "Identifying developmental strengths",
                  "Recognizing areas requiring support",
                  "Providing structured parent guidance",
                  "Supporting learning and attention development",
                  "Monitoring progress over time",
                  "Encouraging long-term growth and wellbeing"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on short-term behavioural outcomes, the emphasis is placed on supporting meaningful developmental progress through a structured and family-centred approach.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families connect with Manovaidya while searching for ADHD Treatment in India because they are looking for personalized guidance regarding attention, behaviour, learning and child development.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                ADHD affects not only the child but also the entire family system.
              </p>
              <div className="mt-3 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Many parents experience:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {["Frustration", "Confusion", "School-related stress", "Behavioural challenges at home", "Concerns about the future", "Emotional exhaustion"].map(item => (
                    <li key={item} className="flex gap-2 text-[12.5px] font-semibold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, parent guidance is considered an important part of the developmental journey. Families receive support in understanding attention challenges, learning patterns, behavioural concerns, emotional regulation needs, daily support strategies and long-term developmental planning.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                When parents gain greater understanding and confidence, they are often better equipped to support their child's learning, behaviour and overall wellbeing. Our goal is to help families move from uncertainty and frustration toward clarity, confidence and meaningful action.
              </p>
            </div>
            <img
              src={supportFamilyImage}
              alt="Parent helping child learn at home"
              className="w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for a child with ADHD can feel overwhelming. Many parents receive different opinions regarding attention difficulties, hyperactivity, learning challenges and behaviour concerns. Some are advised to focus only on academics, while others are told to concentrate solely on behaviour management. Over time, many families find themselves searching for a more structured and comprehensive understanding of their child's developmental needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our goal is to help families understand the bigger picture. Rather than focusing only on individual symptoms, we focus on understanding attention, learning, behaviour, emotional regulation and overall development together through a structured Neuro-Ayurveda Development System.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon and across India connect with Manovaidya for ADHD Assessment, Child Development Guidance and structured developmental support.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Personalized Developmental Understanding", desc: "Every child is unique. Assessment and guidance are tailored to the child's individual strengths, challenges and developmental needs." },
                { title: "Structured Neuro-Ayurveda Development System", desc: "The five-pillar framework helps families better understand the factors that may influence attention, learning, behaviour, emotional regulation and overall development." },
                { title: "Family-Centred Approach", desc: "Parents are not expected to navigate the journey alone. Guidance focuses on helping families gain clarity and confidence in supporting their child." },
                { title: "Long-Term Development Focus", desc: "The emphasis is not only on short-term behavioural outcomes but also on supporting meaningful developmental growth over time." },
                { title: "Personalized Guidance & Progress Tracking", desc: "Families receive structured recommendations and support that help them better understand developmental progress and future planning." },
                { title: "Support Across Different Developmental Needs", desc: "The approach may support children experiencing challenges related to attention, learning, behaviour, emotional regulation, social interaction and executive functioning." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[14px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[12.5px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] font-bold leading-7 text-[#51465a]">
              Families across India choose Manovaidya because they are looking for structured ADHD Treatment support, personalized guidance and a long-term developmental roadmap for their child.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">ADHD, Autism, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System, a structured framework developed to support developmental, behavioural and mental wellness concerns through a comprehensive and personalized approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on ADHD, Autism Spectrum Disorder (ASD), Child Development, Behavioural Challenges, Speech & Communication Concerns, Teen Mental Health, Adult Mental Health, Women's Emotional Wellbeing, Stress-Related Concerns and Senior Mental Health Support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through Manovaidya, Dr. Ankush Garg combines traditional Ayurvedic understanding with modern insights into brain development, behaviour, emotional wellbeing and cognitive health. His approach emphasizes root-cause understanding, personalized guidance, family-centred support and long-term wellness planning.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through detailed assessment, individualized recommendations and structured follow-up, he helps children, adults and families better understand their concerns and move forward with greater clarity, confidence and direction. Families from across India connect with Dr. Ankush Garg for ADHD, Autism, Child Development and Mental Health support through a compassionate, personalized and structured Neuro-Ayurveda Development System.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions About ADHD</h2>
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
              <h2 className="text-[24px] font-black">Book a Consultation</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If you are looking for ADHD Treatment in India, ADHD Assessment, Attention Support, Learning Support or Child Development Guidance, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Through a structured assessment and personalized guidance process, families can gain a clearer understanding of their child's developmental needs and explore appropriate next steps for long-term growth, learning and wellbeing.
              </p>

              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Take the First Step</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "ADHD Assessment",
                    "Personalized Development Guidance",
                    "Parent Support & Family Guidance",
                    "Neuro-Ayurveda Development System",
                    "Structured Progress Planning"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Book Your Consultation with Manovaidya Today</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Manovaidya Clinic</p>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>

                <a
                  href="tel:+917823894080"
                  className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </section>
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
              Get a personalized plan for your child from our experts.
            </p>
            <a
              href="tel:+917823894080"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </a>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, child development tips and Manovaidya updates.
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

export default ADHDChildArticlePage;

