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
  Users,
  Utensils,
  Waves,
} from "lucide-react";
import childHeroImage from "../images/autism-treatment-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "What is Autism?", id: "what-is-autism" },
  { label: "Early Signs", id: "early-signs-of-autism" },
  { label: "Beyond Symptoms", id: "autism-treatment-in-india" },
  { label: "Autism Assessment", id: "autism-assessment" },
  { label: "Neuro-Ayurveda", id: "neuro-ayurveda-development-system" },
  { label: "How We Work", id: "how-we-work" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "Why Families Choose Us", id: "why-families-choose-us" },
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
  { label: "Sensory Integration", count: 7, Icon: Waves },
];

const earlySignGroups = [
  {
    title: "Communication & Speech Concerns",
    items: [
      "Delayed speech development",
      "Limited verbal communication",
      "Difficulty expressing needs and emotions",
      "Repeating words or phrases frequently",
      "Reduced use of gestures such as pointing or waving",
      "Limited response during conversations",
    ],
  },
  {
    title: "Social Interaction Challenges",
    items: [
      "Limited eye contact",
      "Reduced response when called by name",
      "Preference for playing alone",
      "Difficulty initiating social interactions",
      "Limited interest in sharing experiences with others",
      "Challenges understanding social cues",
    ],
  },
  {
    title: "Behavioural Differences",
    items: [
      "Repetitive movements or actions",
      "Strong preference for routines",
      "Difficulty adapting to changes",
      "Intense focus on specific interests",
      "Repetitive play patterns",
      "Emotional reactions when routines are interrupted",
    ],
  },
  {
    title: "Sensory Processing Differences",
    items: [
      "Sensitivity to sounds, lights or textures",
      "Strong reactions to certain foods",
      "Avoidance of specific sensory experiences",
      "Seeking sensory stimulation repeatedly",
      "Difficulty tolerating crowded environments",
      "Sensory-related emotional responses",
    ],
  },
  {
    title: "Learning & Development Concerns",
    items: [
      "Delays in developmental milestones",
      "Difficulty following instructions",
      "Challenges with attention and focus",
      "Differences in learning patterns",
      "Delays in play skills",
      "Difficulty with age-appropriate social development",
    ],
  },
];

const autismBeyondHighlights = [
  { label: "Communication Development", Icon: MessageCircle },
  { label: "Social Interaction", Icon: Users },
  { label: "Learning Readiness", Icon: BookOpen },
  { label: "Sensory Processing", Icon: Waves },
  { label: "Behaviour & Environment", Icon: Puzzle },
];

const autismAssessmentFlow = [
  { step: "Step 1", label: "Detailed Parent Discussion", Icon: Users },
  { step: "Step 2", label: "Developmental Assessment", Icon: BookOpen },
  { step: "Step 3", label: "Communication & Behaviour Evaluation", Icon: MessageCircle },
  { step: "Step 4", label: "Report & Insights", Icon: CalendarCheck },
  { step: "Step 5", label: "Personalised Guidance", Icon: ShieldCheck },
];

const autismAssessmentClarityItems = [
  { label: "Communication abilities", Icon: MessageCircle },
  { label: "Social interaction skills", Icon: Users },
  { label: "Attention and focus", Icon: Activity },
  { label: "Learning patterns", Icon: BookOpen },
  { label: "Behavioural concerns", Icon: Puzzle },
  { label: "Sensory processing", Icon: Waves },
  { label: "Emotional regulation", Icon: HeartHandshake },
  { label: "Daily functioning", Icon: CheckCircle2 },
  { label: "Developmental strengths", Icon: Brain },
  { label: "Areas requiring support", Icon: ShieldCheck },
];

const autismHowWeWorkSteps = [
  { title: "Assessment", desc: "Understand your child in-depth", Icon: Brain },
  { title: "Understanding", desc: "Identify strengths & challenges", Icon: Search },
  { title: "Personalised Plan", desc: "Create an individualized development plan", Icon: Activity },
  { title: "Parent Guidance", desc: "Train & empower parents", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor, support & make adjustments", Icon: CalendarCheck },
];

const autismSupportPointItems = [
  { label: "Understanding the child as an individual", Icon: Brain },
  { label: "Identifying developmental strengths", Icon: Sparkles },
  { label: "Recognizing areas requiring support", Icon: ShieldCheck },
  { label: "Providing structured parent guidance", Icon: Users },
  { label: "Creating individualized support plans", Icon: BookOpen },
  { label: "Monitoring developmental progress", Icon: CalendarCheck },
  { label: "Supporting long-term growth and wellbeing", Icon: HeartHandshake },
];

const familyConcerns = [
  "Confusion",
  "Anxiety",
  "Information overload",
  "Decision fatigue",
  "Fear about the future",
  "Emotional exhaustion",
];

const whyChoose = [
  {
    title: "Personalized Developmental Understanding",
    text:
      "Assessment and guidance are tailored to the child's individual strengths, challenges and developmental needs.",
  },
  {
    title: "Structured Neuro-Ayurveda Development System",
    text:
      "The five-pillar framework helps families understand factors that may influence communication, attention, learning and behaviour.",
  },
  {
    title: "Family-Centred Approach",
    text:
      "Parents are not expected to navigate the journey alone. Guidance helps families gain clarity and confidence.",
  },
  {
    title: "Long-Term Development Focus",
    text:
      "The emphasis is not only on short-term symptom management but also on meaningful developmental growth over time.",
  },
  {
    title: "Personalized Guidance & Progress Tracking",
    text:
      "Families receive structured recommendations and support to monitor developmental progress in an organized manner.",
  },
  {
    title: "Support Across Developmental Needs",
    text:
      "The approach may support communication, behaviour, learning, attention, sensory processing and social development.",
  },
];

const relatedArticles = [
  {
    title: "ADHD Treatment in India",
    href: "/child-health-care/adhd-child",
    image: childHeroImage,
  },
  {
    title: "Child Development Treatment",
    href: "/child-health-care",
    image: supportFamilyImage,
  },
  {
    title: "Know more about Dr. Ankush Garg",
    href: "/about/doctor",
    image: doctorImage,
  },
];

const faqs = [
  {
    question: "1. What is Autism Spectrum Disorder (ASD)?",
    answer: "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that may influence communication, social interaction, behaviour, learning and sensory processing. Every child with autism is unique, and developmental needs can vary significantly from one child to another. Some children may experience speech delays, while others may face challenges related to social interaction, attention or sensory sensitivities. At Manovaidya, autism is understood through a comprehensive developmental perspective that considers communication, behaviour, learning, emotional wellbeing and overall child development rather than focusing on a single symptom alone."
  },
  {
    question: "2. What are the early signs of autism?",
    answer: "Some early signs of autism may include reduced eye contact, limited response to name, delayed speech development, repetitive behaviours, sensory sensitivities and challenges in social interaction. Parents may also notice differences in play skills, communication patterns or emotional responses. Every child develops differently, so the presence of one or two signs does not necessarily indicate autism. A structured developmental assessment can help families better understand their child’s developmental strengths, challenges and support needs."
  },
  {
    question: "3. At what age can autism signs become noticeable?",
    answer: "Autism signs may become noticeable as early as infancy, while in some children they become more apparent during the toddler years or early childhood. Parents may observe differences in communication, eye contact, social interaction, play behaviour or response to their name. Developmental concerns often become more noticeable when a child begins interacting with peers or enters a structured learning environment. Early identification can help families better understand developmental needs and seek appropriate guidance and support at the right time."
  },
  {
    question: "4. What are the top 3 signs of autism?",
    answer: "Although every child with autism is different, three commonly observed signs include challenges in communication, differences in social interaction and repetitive behaviours or restricted interests. Parents may notice reduced eye contact, delayed speech development, limited social engagement or a strong preference for routines. Some children may also show sensory sensitivities to sounds, lights or textures. Understanding these signs early can help families gain greater clarity regarding their child’s developmental needs and future support planning."
  },
  {
    question: "5. What are the 7 signs of autism?",
    answer: "Common signs of autism may include reduced eye contact, delayed speech development, limited response to name, repetitive behaviours, difficulty with social interaction, sensory sensitivities and a strong preference for routines. Not every child will display all of these signs, and the severity can vary significantly from one child to another. Developmental concerns should always be understood within the context of the child’s overall growth, communication abilities and daily functioning. A structured assessment can help provide a more complete developmental understanding."
  },
  {
    question: "6. How to spot autism in babies?",
    answer: "Some early signs of autism in babies may include limited eye contact, reduced response to their name, fewer social smiles, limited interest in interactive games and differences in communication development. Parents may also notice reduced use of gestures such as pointing, waving or reaching to share interests. Every baby develops at their own pace, so occasional delays do not automatically indicate autism. However, if developmental concerns continue over time, a structured developmental assessment may help provide greater clarity regarding the child's communication, social interaction and developmental needs."
  },
  {
    question: "7. When should parents worry about autism?",
    answer: "Parents may consider seeking professional guidance if they notice persistent concerns related to communication, social interaction, behaviour, sensory responses or developmental milestones. Common examples include limited eye contact, delayed speech development, reduced response to name, repetitive behaviours or difficulty engaging with others. Early developmental differences do not always indicate autism, but ongoing concerns should not be ignored. A structured assessment can help families better understand whether observed behaviours are part of normal developmental variation or whether additional support and guidance may be beneficial."
  },
  {
    question: "8. Does every child with autism have speech delay?",
    answer: "No. Every child with autism is unique, and not all children experience speech delay. Some children may have delayed language development, while others may develop speech at an expected age but experience challenges related to conversation skills, social communication or understanding social cues. Autism affects individuals differently, which is why developmental needs can vary significantly from one child to another. Understanding a child's communication profile through a structured assessment can help families identify strengths, challenges and appropriate support strategies."
  },
  {
    question: "9. Will my autistic child ever talk?",
    answer: "Many parents worry about whether their child will develop speech and communication skills in the future. Every child with autism has a unique developmental journey, and communication progress can vary widely. Some children develop speech earlier, while others may require additional support and time. Communication is not limited to spoken language alone and may also include gestures, visual communication, social interaction and alternative communication methods. Early understanding, structured guidance and consistent developmental support can help families better support communication growth based on the child's individual needs."
  },
  {
    question: "10. Can an autistic child speak after 5 years?",
    answer: "Yes, some children with autism may continue developing communication and speech skills after the age of five. Development does not occur at the same pace for every child, and communication progress can continue throughout childhood. Factors such as communication abilities, learning readiness, social engagement and individualized support may influence developmental outcomes. Rather than focusing only on age, it is often more helpful to understand the child's overall developmental profile and communication needs. A structured developmental approach can help families identify practical ways to encourage communication growth and participation."
  },
  {
    question: "11. Can autism get better with age?",
    answer: "Every child with autism has a unique developmental journey. While autism itself is a lifelong neurodevelopmental condition, many children continue developing communication, learning, social interaction and daily living skills as they grow older. Developmental progress may be influenced by factors such as family support, learning opportunities, communication development and individualized guidance. Rather than focusing only on labels, it is often more helpful to focus on helping the child build strengths, independence and participation in everyday life. Early understanding and consistent developmental support can help families create a positive long-term roadmap for growth."
  },
  {
    question: "12. Can an autistic child go to a normal school in India?",
    answer: "Many children with autism attend mainstream schools in India, while others may benefit from inclusive classrooms, specialized educational support or individualized learning plans. The most appropriate educational environment depends on the child's communication abilities, learning needs, social development and level of support required. Every child is different, and school decisions should be based on individual strengths and developmental needs rather than a diagnosis alone. A structured developmental assessment can help parents better understand the type of educational environment that may best support their child's learning and overall development."
  },
  {
    question: "13. How can parents help a child with autism at home?",
    answer: "Parents play one of the most important roles in supporting a child's development. Simple strategies such as maintaining consistent routines, encouraging communication, providing structured learning opportunities, supporting social interaction and creating a calm environment may help children participate more effectively in daily activities. It is also important for parents to focus on their child's strengths rather than only on challenges. Small, consistent efforts over time often create meaningful progress. At Manovaidya, parent guidance is considered an important part of helping families better understand and support their child's developmental journey."
  },
  {
    question: "14. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is a structured framework developed by Dr. Ankush Garg to help families better understand developmental, behavioural and mental wellness concerns. The system focuses on five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System and Behaviour Guidance System. Rather than focusing only on isolated symptoms, the framework encourages a broader understanding of communication, learning, behaviour, attention, sensory processing and overall development. This structured approach helps families gain greater clarity regarding developmental needs and long-term support planning."
  },
  {
    question: "15. How does Manovaidya assess and support children with autism?",
    answer: "At Manovaidya, autism assessment focuses on understanding the child as a whole rather than evaluating a single symptom in isolation. The process may include developmental history, communication abilities, learning patterns, behavioural observations, sensory processing and parent concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap. Support focuses on helping families better understand communication, behaviour, learning, sensory integration and overall child development through the Neuro-Ayurveda Development System. The goal is to provide clarity, direction and long-term developmental support tailored to the child's individual needs."
  }
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AutismTreatmentIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showNeuroPillars, setShowNeuroPillars] = React.useState(false);

  React.useEffect(() => {
    const fontId = "autism-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    document.title = "Autism Treatment in India | Autism Assessment & Development Support | Manovaidya";

    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag(
      "description",
      "Looking for Autism Treatment in India? Learn about Autism Assessment, Child Development Support and the Neuro-Ayurveda Development System at Manovaidya with Dr. Ankush Garg."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/autism-treatment-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Autism Treatment in India",
          description:
            "Autism assessment, child development support and Neuro-Ayurveda Development System guidance at Manovaidya.",
          url: `${window.location.origin}/autism-treatment-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Health Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Autism Treatment in India", item: `${window.location.origin}/autism-treatment-india` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = "autism-treatment-schema";
    let schemaScript = document.getElementById(scriptId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
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
      <section className="hidden border-b border-[#eadff1] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-4 text-[11px] font-bold text-[#75677d] sm:px-6 lg:px-8">
          <a href="/" className="transition hover:text-[#7835A4]">Home</a>
          <span>/</span>
          <a href="/child-health-care" className="transition hover:text-[#7835A4]">Child Health Care</a>
          <span>/</span>
          <span className="text-[#21142d]">Autism Treatment in India</span>
        </div>
      </section>

      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <div className="hidden">
          <div className="sticky top-24 space-y-5">
            <SidebarCard>
              <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
              <nav className="mt-5 space-y-3.5">
                {pageLinks.map(({ label, id }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setActiveSection(id)}
                    className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                      activeSection === id
                        ? "bg-[#f0e7f6] text-[#7835A4]"
                        : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"
                      }`}
                    />
                    {label}
                  </a>
                ))}
              </nav>
            </SidebarCard>

            <SidebarCard className="bg-[#fcf9ff]">
              <Users className="h-8 w-8 text-[#7835A4]" />
              <h3 className="mt-4 text-[15px] font-black text-[#21142d]">Need Personalized Guidance?</h3>
              <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
                Our experts are here to understand your child and guide the right next step.
              </p>
              <a
                href="#book-consultation"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-4 text-[12px] font-black text-white transition hover:bg-[#632b86]"
              >
                Book a Consultation
              </a>
            </SidebarCard>
          </div>
        </div>

        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
          <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
            <a href="/" className="transition hover:text-[#7835A4]">Home</a>
            <span>/</span>
            <a href="/child-health-care" className="transition hover:text-[#7835A4]">Child Health Care</a>
            <span>/</span>
            <span className="text-[#4b345d]">Autism Treatment in India</span>
          </nav>
          <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Autism Treatment in India</p>
          <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
            Autism Treatment, ADHD, Child Development & Mental Health Clinic in India
          </h1>
          <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
            Autism assessment, child development support and structured Neuro-Ayurveda guidance for families seeking clarity, confidence and a long-term developmental roadmap.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#book-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
            >
              Book Autism Assessment
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
              <a href="/about/doctor">
                <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover transition hover:scale-105" />
              </a>
              <div>
                <a href="/about/doctor" className="text-[13px] font-black text-[#21142d] transition hover:text-[#7835A4]">By Dr. Ankush Garg</a>
                <p className="text-[12px] font-bold text-[#75677d]">May 20, 2025 · 15 min read</p>
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
                alt="Parent and child receiving autism development support"
                className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
              />
            </div>
          </figure>
          </div>

          <section id="what-is-autism" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Autism?</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that can influence the way a child communicates, learns, interacts with others, processes information and experiences the world around them.
              </p>
              <h3 className="font-black text-[16px] text-[#21142d]">Every child with autism is unique.</h3>
              <p>
                Some children may experience speech and communication challenges, while others may have difficulty with social interaction, attention, behaviour, sensory processing or adapting to changes in routine. The way autism presents itself can vary significantly from one child to another, which is why every child's developmental journey needs to be understood individually.
              </p>
              <p>
                Many parents first notice concerns when their child is not responding to their name, avoiding eye contact, showing delays in speech development or displaying repetitive behaviours. In some cases, developmental differences become more noticeable when children begin interacting with peers or starting school.
              </p>
              <p>
                At Manovaidya, we believe that understanding autism goes beyond identifying symptoms alone. Development, communication, learning, behaviour, emotional wellbeing, sensory processing and overall growth are interconnected aspects of a child's development.
              </p>
              <p>
                This is why our approach focuses on understanding the child as a whole rather than focusing only on isolated concerns.
              </p>
              <p>
                Through detailed assessment, developmental understanding and structured guidance, families can gain greater clarity regarding their child's strengths, challenges and developmental needs.
              </p>
              <div className="rounded-lg bg-[#f4ecf8] p-5 mt-4">
                <p className="font-bold text-[#3b2e45]">
                  Families from across India connect with Dr. Ankush Garg for Autism, ADHD, Child Development and Mental Health support through a compassionate, personalized and structured Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 font-bold text-[#3b2e45]">
                  Families from across India, Delhi, Noida, Greater Noida, Ghaziabad and NCR connect with Dr. Ankush Garg for ADHD, Autism, Child Development and Mental Health support through a structured Neuro-Ayurveda Development System.
                </p>
              </div>
            </div>
          </section>

          <section id="early-signs-of-autism" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Early Signs of Autism</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Autism can present differently in every child. Some signs may become noticeable during infancy, while others may appear more clearly during the toddler years or early childhood.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Early identification allows parents to better understand their child's developmental needs and seek appropriate guidance at the right time.
            </p>
            <p className="mt-3 font-bold text-[#21142d]">Some commonly observed signs may include:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {earlySignGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <h3 className="text-[15px] font-black text-[#21142d] mb-3">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] font-bold leading-5 text-[#5f5367]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <div className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#7835A4]" />
                <p className="text-[13px] font-bold leading-6 text-[#3b2e45]">
                  It is important to remember that the presence of one or two signs does not automatically indicate autism. Every child develops differently, and developmental concerns should always be understood within the broader context of the child's overall growth and developmental history.
                </p>
              </div>
              <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
                A comprehensive assessment helps provide a clearer understanding of developmental strengths, challenges and support needs.
              </p>
            </div>
          </section>

          <section id="autism-treatment-in-india" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                  Autism Treatment in India: Understanding Autism Beyond Symptoms
                </h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  Autism is not only about visible symptoms. It is connected to communication, social interaction,
                  learning readiness, sensory processing and overall development.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:mt-0 lg:flex-1">
                {autismBeyondHighlights.map(({ label, Icon }) => (
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
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                One of the most common concerns parents face is focusing only on visible symptoms.
              </p>
              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <p className="font-black text-[#21142d] mb-3">Parents often ask:</p>
                <ul className="space-y-2 italic">
                  <li className="flex gap-2">"How can my child speak better?"</li>
                  <li className="flex gap-2">"Why does my child avoid eye contact?"</li>
                  <li className="flex gap-2">"Why does my child become upset so easily?"</li>
                  <li className="flex gap-2">"Why is learning difficult?"</li>
                </ul>
              </div>
              <p>
                While these questions are important, focusing only on symptoms may not always provide a complete understanding of a child's developmental needs.
              </p>
              <p>
                At Manovaidya, we encourage families to look beyond isolated behaviours and understand the broader developmental picture.
              </p>
              <p>
                Communication, learning, behaviour, attention, sensory processing, emotional regulation and social interaction are often interconnected.
              </p>
              <p>
                For example, difficulties in communication may influence behaviour. Sensory sensitivities may affect social participation. Attention challenges may impact learning and skill development. Emotional regulation difficulties may affect daily functioning and family interactions.
              </p>
              <p>
                This interconnected understanding forms the foundation of the Neuro-Ayurveda Development System followed at Manovaidya.
              </p>
              <p>
                Rather than viewing developmental concerns as separate issues, the focus is placed on understanding the factors that may influence overall development and wellbeing.
              </p>
              <p>
                Every child possesses unique strengths, abilities and potential. With greater understanding, structured guidance and individualized support, families are often able to develop a clearer roadmap for helping their child progress in a meaningful and sustainable manner.
              </p>
              <p>
                The goal is not simply to focus on isolated symptoms but to support communication, learning, behaviour, confidence, participation, emotional wellbeing and overall development as part of a comprehensive developmental journey.
              </p>
            </div>
          </section>

          <section id="autism-assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div>
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                  Autism Assessment at Manovaidya
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  A comprehensive assessment helps understand your child's unique strengths, challenges and needs.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-center lg:justify-between">
                {autismAssessmentFlow.map(({ step, label, Icon }, index) => (
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
                    {index < autismAssessmentFlow.length - 1 && (
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
              One of the biggest mistakes families make is comparing their child with another child or relying only on online information to understand autism. While online resources can provide awareness, they cannot replace a structured developmental assessment that looks at the child as an individual.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, autism assessment focuses on understanding the complete developmental picture rather than evaluating a single symptom in isolation.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">The assessment process is designed to help families gain clarity about:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {autismAssessmentClarityItems.map(({ label, Icon }) => (
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
              Our goal is not simply to identify challenges but to understand the child's unique developmental profile and create a meaningful roadmap for future growth and support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A comprehensive Autism Assessment is often considered one of the most important first steps for families seeking Autism Treatment in India because it provides greater clarity regarding developmental needs and future support planning.
            </p>
            
            <h3 className="mt-8 text-[18px] font-black text-[#17111f]">What Does the Assessment Process Include?</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h4 className="text-[15px] font-black text-[#21142d] mb-2">Detailed Parent Discussion</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mb-3">Parents know their child better than anyone else. This is why the assessment begins with a detailed understanding of the child's developmental history, current concerns and day-to-day functioning. We discuss:</p>
                <ul className="space-y-1.5">
                  {["Pregnancy and birth history", "Early developmental milestones", "Speech and communication development", "Behavioural observations", "Social interaction patterns", "Learning abilities", "Sensory concerns", "Sleep and daily routines", "Food preferences and eating habits", "Family observations and challenges"].map(item => (
                    <li key={item} className="flex gap-2 text-[12px] font-bold text-[#51465a]"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7835A4]"/>{item}</li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mt-3">This information helps create a clearer picture of the child's developmental journey.</p>
              </div>
              
              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h4 className="text-[15px] font-black text-[#21142d] mb-2">Developmental Understanding</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mb-3">Every child develops at their own pace. The assessment process helps identify:</p>
                <ul className="space-y-1.5">
                  {["Existing strengths", "Current developmental challenges", "Areas requiring additional support", "Learning readiness", "Communication abilities", "Behavioural patterns", "Sensory processing differences"].map(item => (
                    <li key={item} className="flex gap-2 text-[12px] font-bold text-[#51465a]"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7835A4]"/>{item}</li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mt-3">This understanding helps families move from uncertainty toward clarity.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h4 className="text-[15px] font-black text-[#21142d] mb-2">Individualized Guidance</h4>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mb-3">After understanding the child's developmental profile, families receive structured guidance regarding possible next steps. This may include:</p>
                <ul className="space-y-1.5">
                  {["Parent guidance", "Developmental support planning", "Behaviour guidance strategies", "Communication support recommendations", "Sensory support suggestions", "Lifestyle and routine recommendations", "Progress monitoring approaches"].map(item => (
                    <li key={item} className="flex gap-2 text-[12px] font-bold text-[#51465a]"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7835A4]"/>{item}</li>
                  ))}
                </ul>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367] mt-3">The objective is to provide families with a clear and practical roadmap.</p>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-development-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f] mb-4">The Neuro-Ayurveda Development System</h2>
            <div className="space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                At Manovaidya, developmental and behavioural concerns are understood through the Neuro-Ayurveda Development System, a structured framework developed by Dr. Ankush Garg.
              </p>
              <p>
                The system was created to help families better understand the interconnected factors that may influence a child's communication, learning, behaviour, attention, sensory processing and overall development.
              </p>
              <p>
                Rather than focusing only on symptoms, the Neuro-Ayurveda Development System focuses on understanding the child's broader developmental needs through five interconnected pillars.
              </p>
            </div>
            
            <a href="/about/neuro-ayurveda">
              <img
                src={neuroDiagramImage}
                alt="Neuro-Ayurveda five pillar development system"
                className="mt-5 max-h-[350px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4 transition hover:shadow-md"
              />
            </a>

            <button
              type="button"
              onClick={() => setShowNeuroPillars((current) => !current)}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.18)] transition hover:bg-[#5f2785]"
              aria-expanded={showNeuroPillars}
            >
              {showNeuroPillars ? "Show Less" : "Read More"}
            </button>

            {showNeuroPillars && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <h3 className="text-[15px] font-black text-[#21142d] mb-2 flex items-center gap-2"><Brain className="h-5 w-5 text-[#7835A4]"/> Pillar 1: Brain Nourishment System</h3>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367]">Learning, attention, memory, communication and social interaction are all influenced by brain development. The Brain Nourishment System focuses on supporting the foundations of healthy cognitive and developmental functioning. This pillar aims to understand factors that may influence: Attention, Learning readiness, Communication development, Cognitive functioning, Memory, Emotional regulation. The goal is to help create a stronger foundation for growth and development.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <h3 className="text-[15px] font-black text-[#21142d] mb-2 flex items-center gap-2"><Utensils className="h-5 w-5 text-[#7835A4]"/> Pillar 2: Gut Response System</h3>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367]">The relationship between digestion and overall wellbeing has been recognized in both traditional and modern health approaches. Many children experiencing developmental concerns may also experience: Picky eating, Digestive discomfort, Food sensitivities, Irregular bowel habits, Appetite concerns. The Gut Response System focuses on understanding how digestive wellbeing may influence overall functioning and development.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <h3 className="text-[15px] font-black text-[#21142d] mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-[#7835A4]"/> Pillar 3: Neural Network System</h3>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367]">Development occurs through connections within the brain. The Neural Network System focuses on supporting developmental readiness by understanding how learning, attention, communication and behaviour may be influenced by underlying developmental pathways. Areas often explored include: Learning readiness, Response patterns, Communication development, Attention, Social engagement.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <h3 className="text-[15px] font-black text-[#21142d] mb-2 flex items-center gap-2"><Waves className="h-5 w-5 text-[#7835A4]"/> Pillar 4: Sensory Integration System</h3>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367]">Many children with autism experience sensory differences. Some children may become overwhelmed by sounds, lights, textures or crowded environments, while others may actively seek sensory experiences. The Sensory Integration System focuses on understanding: Sensory sensitivities, Sensory preferences, Sensory regulation, Daily functioning challenges, Environmental influences. Understanding sensory needs often helps families better support their child's comfort and participation.</p>
              </div>
              
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] sm:col-span-2">
                <h3 className="text-[15px] font-black text-[#21142d] mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[#7835A4]"/> Pillar 5: Behaviour Guidance System</h3>
                <p className="text-[13px] font-semibold leading-6 text-[#5f5367]">Behaviour is often a form of communication. Children may express their needs, frustrations, discomfort or emotions through behaviour. The Behaviour Guidance System focuses on helping families understand: Why behaviours occur, Possible developmental influences, Environmental triggers, Emotional regulation challenges, Supportive behaviour guidance approaches. The goal is to move beyond simply reacting to behaviours and instead understand the factors influencing them.</p>
              </div>
            </div>
            )}
          </section>

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <div>
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                  How We Work at Manovaidya
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  A structured, step-by-step process designed for long-term growth and real change.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-center lg:justify-between">
                {autismHowWeWorkSteps.map(({ title, desc, Icon }, index) => (
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
                    {index < autismHowWeWorkSteps.length - 1 && (
                      <ArrowRight className="mx-1 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Every child is unique, which is why support at Manovaidya begins with understanding the child as a whole rather than focusing on a diagnosis alone.
              </p>
              <p>
                Our process starts with a detailed assessment to understand developmental history, communication abilities, behaviour patterns, learning needs, attention profile, sensory responses and family concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child’s individual needs.
              </p>
              <p>
                Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence communication, attention, behaviour, learning, emotional wellbeing and overall development.
              </p>
              <p>
                Support focuses on assessment, parent guidance, developmental planning, progress tracking and long-term family support so that parents can move forward with greater clarity, confidence and direction.
              </p>
              <div className="rounded-lg bg-[#f4ecf8] p-5">
                <p className="text-[14px] font-bold text-[#3b2e45]">
                  Every child is unique. This is why support at Manovaidya begins with a detailed assessment, developmental understanding and personalized guidance rather than a one-size-fits-all approach.
                </p>
              </div>
            </div>
          </section>

          <section id="how-we-support" className="mt-9">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Autism</h2>
              <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                <p>
                  At Manovaidya, support is personalized because no two children are exactly alike. Every child has unique strengths, challenges, interests and developmental needs.
                </p>
                <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                  <h3 className="text-[15px] font-black text-[#21142d] mb-3">Our approach focuses on:</h3>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {autismSupportPointItems.map(({ label, Icon }) => (
                      <li key={label} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-4 text-center text-[13px] font-bold leading-5 text-[#51465a]">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-[0_6px_14px_rgba(58,31,90,0.07)]">
                          <Icon className="h-7 w-7" strokeWidth={1.8} />
                        </span>
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Rather than focusing only on short-term outcomes, the emphasis is placed on creating sustainable developmental progress through a structured and family-centred approach.
                </p>
                <p>
                  Many families connect with Manovaidya while searching for Autism Treatment in India because they are looking for a personalized approach that focuses on communication, behaviour, learning, sensory integration and overall child development.
                </p>
              </div>
            </div>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              <p>Autism does not affect only the child. It also affects parents, siblings and the entire family system.</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-bold">Many parents experience:</span>
                {familyConcerns.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                    {item}
                  </span>
                ))}
              </div>
              <p>
                At Manovaidya, parent guidance is considered an important part of the developmental journey. Families receive support in understanding: Their child's strengths, Developmental challenges, Communication needs, Behavioural patterns, Daily support strategies, Long-term developmental planning.
              </p>
              <p>
                When families gain greater understanding and confidence, they are often better equipped to support their child's growth and wellbeing. Our goal is to help families move from uncertainty and overwhelm toward clarity, confidence and meaningful action.
              </p>
            </div>
          </section>

          <section id="why-families-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Choosing the right support system for a child with autism can feel overwhelming. Parents often receive different advice from different professionals. Some are told to focus only on speech. Others are advised to focus on behaviour, sensory integration, special education or routines. Over time, many families find themselves trying multiple approaches while still searching for greater clarity regarding their child's developmental journey.
              </p>
              <p>
                At Manovaidya, our goal is to help families understand the bigger picture. Rather than focusing only on individual symptoms, we focus on understanding the child through a structured Neuro-Ayurveda Development System that considers communication, learning, behaviour, sensory processing, emotional wellbeing and overall development together.
              </p>
            </div>
            
            <h3 className="mt-6 text-[18px] font-black text-[#21142d] mb-4">Families choose Manovaidya because of:</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[14px] font-black text-[#21142d] mb-2">{item.title}</h4>
                  <p className="text-[12.5px] font-semibold leading-6 text-[#5f5367]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-[14px] font-bold leading-7 text-[#21142d]">
                Families across India choose Manovaidya because they are looking for structured ADHD Treatment support, personalized guidance and a long-term developmental roadmap for their child.
              </p>
              <p className="text-[14px] font-bold leading-7 text-[#21142d]">
                Families from India, Delhi, Noida, Greater Noida, Ghaziabad and across the NCR region choose Manovaidya because they are looking for structured ADHD Treatment support, personalized guidance and a long-term developmental roadmap for their child.
              </p>
            </div>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <a href="/about/doctor" className="shrink-0">
                <img src={doctorImage} alt="Dr. Ankush Garg" className="h-28 w-28 rounded-xl object-cover shadow-sm transition hover:scale-105" />
              </a>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <a href="/about/doctor" className="block mt-1 text-[18px] font-black text-[#17111f] transition hover:text-[#7835A4]">Dr. Ankush Garg</a>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <div className="mt-3 space-y-3 text-[13px] font-semibold leading-6 text-[#5a5063]">
                  <p>
                    Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System, a structured framework developed to support developmental, behavioural and mental wellness concerns through a comprehensive and personalized approach.
                  </p>
                  <p>
                    His work focuses on Autism Spectrum Disorder (ASD), ADHD, Child Development, Behavioural Challenges, Speech & Communication Concerns, Teen Mental Health, Adult Mental Health, Women's Emotional Wellbeing, Stress-Related Concerns and Senior Mental Health Support.
                  </p>
                  <p>
                    Through Manovaidya, Dr. Ankush Garg combines traditional Ayurvedic understanding with modern insights into brain development, behaviour, emotional wellbeing and cognitive health. His approach emphasizes root-cause understanding, personalized guidance, family-centred support and long-term wellness planning.
                  </p>
                  <p>
                    Through detailed assessment, individualized recommendations and structured follow-up, he helps children, adults and families better understand their concerns and move forward with greater clarity, confidence and direction. Families from across India connect with Dr. Ankush Garg for Autism, ADHD, Child Development and Mental Health support through a compassionate, personalized and structured Neuro-Ayurveda approach.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions About Autism</h2>
              <div className="hidden sm:block h-px flex-1 bg-[#eadff1]"></div>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#eadff1] bg-white">
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
                      className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
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

          <section id="book-consultation" className="mt-12 overflow-hidden rounded-xl border-none bg-gradient-to-br from-[#7835A4] to-[#4c1d6b] text-white shadow-xl relative">
            <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
              <div className="p-8 lg:p-10 z-10">
                <p className="text-[13px] font-black uppercase tracking-[0.1em] text-[#d8b4e2] mb-2">Book a Consultation</p>
                <h2 className="text-[26px] sm:text-[32px] font-black leading-tight mb-4">Take the First Step Today</h2>
                <div className="space-y-4 text-[14px] font-semibold leading-7 text-[#f0e7f6] mb-6">
                  <p>
                    If you are looking for Autism Treatment in India, Autism Assessment, Child Development Support or guidance regarding communication, behaviour, learning and developmental concerns, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                  </p>
                  <p>
                    Through a structured assessment and personalized guidance process, families can gain a clearer understanding of their child's developmental needs and explore appropriate next steps for long-term growth, learning and wellbeing.
                  </p>
                </div>
                
                <div className="mb-8">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Autism Assessment",
                      "Personalized Development Guidance",
                      "Parent Support & Family Guidance",
                      "Neuro-Ayurveda Development System",
                      "Structured Progress Planning"
                    ].map((step) => (
                      <li key={step} className="flex gap-2 text-[14px] font-bold text-white">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/20">
                  <a
                    href="tel:+917823894080"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-[15px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff] hover:shadow-lg"
                  >
                    Contact Us Now
                  </a>
                  <div>
                    <p className="text-[13px] font-bold">Manovaidya Clinic</p>
                    <p className="text-[12px] text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-full w-full">
                <img src={ctaImage} alt="Happy family after child support" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d6b] to-transparent lg:bg-gradient-to-l opacity-80 lg:opacity-90 mix-blend-multiply"></div>
              </div>
            </div>
          </section>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
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
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                    activeSection === id
                      ? "bg-[#f0e7f6] text-[#7835A4]"
                      : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"
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

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
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
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">Noida, Uttar Pradesh, India</p>
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
                Subscribe to expert articles, autism guidance and Manovaidya updates.
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

export default AutismTreatmentIndiaPage;

