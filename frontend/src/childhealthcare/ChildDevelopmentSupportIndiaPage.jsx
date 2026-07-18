import React from "react";
import {
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Heart,
  HeartHandshake,
  Mail,
  MessageCircle,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import childHeroImage from "../images/child-development-support-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Child Development?", id: "what-is-child-development" },
  { label: "Common Concerns", id: "common-concerns" },
  { label: "Beyond Milestones", id: "beyond-milestones" },
  { label: "Assessment", id: "assessment" },
  { label: "Development Treatment", id: "development-support" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "How We Work", id: "how-we-work" },
  { label: "Why Manovaidya", id: "why-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "Related Support", id: "related-developmental-support" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Autism", count: 12, Icon: Puzzle },
  { label: "ADHD", count: 10, Icon: Brain },
  { label: "Speech Delay", count: 8, Icon: MessageCircle },
  { label: "Child Development", count: 11, Icon: Baby },
  { label: "Learning", count: 9, Icon: BookOpen },
  { label: "Behaviour", count: 9, Icon: Users },
];

const developmentAreas = [
  "Communication Development",
  "Language Development",
  "Learning Skills",
  "Attention & Concentration",
  "Behavioural Development",
  "Emotional Regulation",
  "Social Interaction",
  "Cognitive Development",
  "Sensory Processing",
  "Daily Living Skills",
];

const commonConcerns = [
  {
    title: "Autism Spectrum Disorder (ASD)",
    text: "Challenges with communication, social interaction, behaviour, and overall development.",
    Icon: Puzzle,
  },
  {
    title: "ADHD",
    text: "Difficulty with attention, focus, impulse control, and managing emotions.",
    Icon: Brain,
  },
  {
    title: "Speech & Language Delays",
    text: "Delays in speaking, understanding language, or communicating effectively.",
    Icon: MessageCircle,
  },
  {
    title: "Behavioural Challenges",
    text: "Frequent tantrums, aggression, difficulty following instructions, or other behavioural concerns.",
    Icon: Users,
  },
  {
    title: "Learning & Attention Difficulties",
    text: "Problems with learning, concentration, memory, or school performance.",
    Icon: BookOpen,
  },
  {
    title: "Social Skills Challenges",
    text: "Difficulty making friends, interacting with others, or participating in social activities.",
    Icon: HeartHandshake,
  },
  {
    title: "Emotional Regulation Difficulties",
    text: "Trouble managing emotions, coping with frustration, or handling everyday situations.",
    Icon: Heart,
  },
];

const assessmentGroups = [
  {
    title: "Developmental History",
    items: [],
  },
  {
    title: "Developmental Understanding",
    items: [],
  },
  {
    title: "Family Perspective",
    items: [],
  },
];

const supportInfluences = [
  "Communication abilities",
  "Learning readiness",
  "Behaviour patterns",
  "Emotional wellbeing",
  "Attention skills",
  "Social interaction",
  "Sensory processing",
  "Family environment",
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Helps understand your child's development, learning and thinking skills.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Supports your child's overall well-being and development.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand communication, learning and developmental needs.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Helps understand how sensory needs affect behaviour, communication and participation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand their child's behaviour and development.",
  },
];

const supportPoints = [
  "Developmental Assessment",
  "Communication Development",
  "Learning Readiness",
  "Behaviour Support",
  "Parent Guidance",
  "Emotional Wellbeing",
  "Progress Monitoring",
  "Long-Term Development Planning",
];

const parentGuidanceItems = [
  "Understanding their child's development",
  "Managing everyday behaviours",
  "Supporting communication",
  "Encouraging learning and development",
  "Involving the whole family",
  "Planning for long-term growth and progress",
];

const whyChoose = [
  "Personalized Developmental Assessment",
  "Child & Family-Centred Care",
  "Support for Learning, Behaviour & Communication",
  "Individual Development Plan",
  "Regular Progress Tracking",
  "Compassionate Support",
  "Long-Term Guidance",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india" },
  { title: "ADHD Treatment in India", href: "/child-health-care/adhd-child" },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india" },
  { title: "Behavioural Concerns in Children", href: "/behavioural-concerns-children-india" },
  { title: "Learning & Attention Difficulties", href: "/learning-attention-difficulties-india" },
];

const faqs = [
  {
    question: "What is child development?",
    answer:
      "Child development is the process of how children grow, learn, communicate, behave, and interact with others. Every child develops at their own pace. Understanding your child's development helps identify their strengths and any areas where they may benefit from extra support.",
  },
  {
    question: "What are the 4 types of child development?",
    answer:
      "Child development has four main areas: physical, cognitive, social-emotional, and communication. These include movement, learning, thinking, emotions, relationships, and language. All these areas work together to support a child's overall growth and development.",
  },
  {
    question: "What are the common child development concerns?",
    answer:
      "Common child development concerns include speech delay, communication difficulties, behaviour challenges, learning problems, attention issues, emotional regulation difficulties, social interaction challenges, and delayed developmental milestones. A developmental assessment helps parents understand their child's strengths, needs, and the right support for healthy development.",
  },
  {
    question: "What is a red flag in child development?",
    answer:
      "A developmental red flag is a sign that a child may need extra support in their growth or development. It may include delays in speech, communication, social interaction, behaviour, or other developmental milestones. Identifying these signs early helps families better understand their child's needs and seek the right guidance.",
  },
  {
    question: "When should parents worry about developmental delays?",
    answer:
      "Parents should consider seeking guidance if their child has ongoing delays in speech, learning, behaviour, attention, social interaction, or other developmental milestones. Every child develops at their own pace, but if concerns continue, a developmental assessment can help understand your child's needs and the right support.",
  },
  {
    question: "What are developmental milestones?",
    answer:
      "Developmental milestones are skills that children usually learn as they grow, such as speaking, moving, learning, playing, and interacting with others. Every child develops at their own pace. Tracking these developmental milestones helps parents understand their child's progress and identify if extra support may be needed.",
  },
  {
    question: "Can a child with developmental delay catch up?",
    answer:
      "Many children with developmental delays make good progress with the right guidance and support. Every child develops differently. Early assessment and a personalized development plan can help children build skills, improve learning, and reach their full potential.",
  },
  {
    question: "How can parents support child development at home?",
    answer:
      "Parents play an important role in their child's development. Talking, reading, playing, following healthy routines, and giving love and encouragement help children learn and grow. Understanding your child's strengths and needs helps you provide the right support at home.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer:
      "The Neuro-Ayurveda Development System, developed by Dr. Ankush Garg, helps families understand child development, behaviour, and mental wellbeing. It focuses on five key areas to support communication, learning, behaviour, emotional wellbeing, and overall development through personalized guidance.",
  },
  {
    question: "How does Manovaidya assess and support child development?",
    answer:
      "At Manovaidya, we look at your child's overall development, including communication, learning, behaviour, emotions, and social skills. Based on the assessment, families receive personalized guidance, a development plan, and ongoing support to help their child grow with confidence.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ChildDevelopmentSupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "child-development-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Child Development Treatment in India",
          description:
            "Developmental assessment, communication, learning and behaviour treatment through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/child-development-support-india`,
          medicalAudience: "Parent",
        },
        { "@type": "Organization", name: "Manovaidya", url: window.location.origin },
        {
          "@type": "Person",
          name: "Dr. Ankush Garg",
          jobTitle: "Autism, ADHD, Child Development & Mental Health Specialist",
          worksFor: { "@type": "Organization", name: "Manovaidya" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Development Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Child Development Treatment in India", item: `${window.location.origin}/child-development-support-india` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    };

    const scriptId = "child-development-support-schema";
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
      <Seo
        title="Child Development Treatment in India | Developmental Assessment & Family Guidance | Manovaidya"
        description="Looking for Child Development Treatment in India? Learn about developmental assessment, communication, learning and behaviour treatment through the Neuro-Ayurveda Development System at Manovaidya."
        keywords="Child Development Treatment in India, Developmental Assessment, Child Development Specialist in India, Developmental Guidance, Autism Spectrum Disorder, ADHD Difficulties, Speech Delay and Communication Challenges, Behavioural Concerns in Children, Learning and Attention Difficulties, Social Development Challenges, Emotional Regulation Concerns, Neuro-Ayurveda Development System, Parent Guidance for Child Development, Dr. Ankush Garg, Child Development Clinic Delhi NCR"
        path="/child-development-support-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Child Development Treatment in India",
          "description": "Looking for Child Development Treatment in India? Learn about developmental assessment, communication, learning and behaviour treatment through the Neuro-Ayurveda Development System at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/child-health-care" className="transition hover:text-[#7835A4]">Child Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Child Development Treatment in India</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">
                Developmental Assessment, Guidance & Family Support
              </p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Child Development Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helps parents understand their child's development, communication, and future needs while providing guidance for long-term growth.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Development Assessment 
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
                    <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD, Child Development & Mental Health Specialist</p>
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
                  alt="Parent and child development journey"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            {/* <h2 className="text-[20px] font-black text-[#17111f]">Key takeaways</h2> */}
            <h2 className="mt-5 text-[20px] font-black text-[#17111f]">Introduction</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Helps parents understand their child's development, communication, and future needs while providing guidance for long-term growth.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child grows, learns and develops at their own pace. While many children reach developmental milestones as expected, some may face challenges with communication, behaviour, attention, learning, social interaction or overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              For many parents, concerns start with small changes they notice in their child. A child may not be speaking as expected, have difficulty paying attention, struggle to interact with others, show behavioural challenges or reach developmental milestones later than expected. As these concerns continue, families often look for answers, guidance and the right support to help their child grow and thrive.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, child development is viewed through a comprehensive approach that goes beyond individual symptoms. A child's development is shaped by many interconnected factors, including communication, learning, behaviour, emotional wellbeing, attention, sensory processing and social interaction.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, an Autism, ADHD, Child Development and Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help families understand developmental concerns and create a personalized roadmap for their child's growth, learning and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families looking for child development support, developmental assessment, a child development specialist in India or developmental guidance often want a better understanding of their child's strengths, challenges and future developmental needs. Our goal is to provide personalized guidance, structured assessment and long-term support to help every child reach their full potential.
            </p>
          </section>

          <section id="what-is-child-development" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Child Development?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Child Development refers to the physical, cognitive, emotional, behavioural, communication and social growth that occurs throughout childhood.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Development is not limited to a single milestone. It involves multiple developmental areas working together, including:
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {developmentAreas.map((item) => (
                <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child develops at a different pace. Some variations are part of normal development, while others may indicate the need for a deeper developmental understanding.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, development is viewed as a dynamic process influenced by multiple interconnected factors rather than a checklist of developmental milestones.
            </p>
          </section>

          <section id="common-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Child Development Concerns</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents may seek developmental support for a variety of concerns, including:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {commonConcerns.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-black text-[#21142d]">{title}</h3>
                      <p className="mt-1 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="beyond-milestones" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Child Development Beyond Milestones</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Many people think child development is only about reaching milestones. However, development is much more than that.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              A child may achieve expected milestones but still have difficulties with communication, learning, behaviour, emotional regulation, or social skills.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Some children may also develop more slowly in one area while doing very well in others. Every child has their own unique strengths and challenges.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              At Manovaidya, we take a whole-child approach to development. We look at all aspects of a child's growth to better understand their needs and support their overall learning and wellbeing.
            </p>
          </section>

          <section id="assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Child Development Assessment at Manovaidya</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
                  Every child develops in their own unique way.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                  At Manovaidya, our assessment looks at the whole child, not just one specific concern. This helps us understand their strengths, challenges, and overall developmental needs.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                  The assessment process may include:
                </p>
                <div className="mt-5 grid gap-3">
                  {assessmentGroups.map((group) => (
                    <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                      <h3 className="text-[14px] font-black text-[#21142d]">{group.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-[#f4ecf8] px-3 py-1.5 text-[11px] font-black text-[#7835A4]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                  The main intention is to help families better understand their child's strengths, areas of need, and the support that will help them learn, develop, and participate in everyday life.
                </p>
              </div>
              <img src={supportFamilyImage} alt="Doctor and parent discussion for developmental assessment" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            </div>
          </section>

          <section id="development-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Child Development Treatment in India</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families searching for Child Development Treatment in India are looking for more than temporary solutions. They are looking for clarity, direction and a structured developmental roadmap.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Child development may be influenced by:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supportInfluences.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <Heart className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support focuses on understanding these interconnected developmental influences and helping families create a meaningful plan for long-term growth and development.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, developmental support is guided by the Neuro-Ayurveda Development System developed by Dr. Ankush Garg. The framework is built around five interconnected pillars that work together to provide a comprehensive understanding of a child's development and support long-term growth.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The system focuses on five interconnected pillars:
            </p>
            <img src={neuroDiagramImage} alt="Neuro-Ayurveda five pillar development system" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pillars.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-black text-[#21142d]">{title}</h3>
                      <p className="mt-1 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Together, these five pillars provide a structured framework for understanding child development in a comprehensive way.
            </p>
          </section>

          <section id="how-we-support" className="mt-9 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children & Families</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, we focus on understanding your child first-not just the diagnosis.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                We provide support for:
              </p>
              <ul className="mt-4 space-y-2.5">
                {supportPoints.map((point) => (
                  <li key={point} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every child receives a personalized plan based on their unique needs and your family's goals.
              </p>
            </div>
            <img src={signsImage} alt="Child learning and growth illustration" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Developmental concerns can affect the whole family, not just the child.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Many parents feel worried, confused or unsure when trying to understand their child's developmental needs.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              At Manovaidya, parents are an important part of their child's developmental journey. We provide guidance and support to help families better understand their child's needs and feel more confident about the next steps.
            </p>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">Families receive guidance on:</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {parentGuidanceItems.map((item) => (
                <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Our goal is to help parents make informed decisions and support their child's development with greater confidence and clarity.
            </p>
          </section>

          <section id="how-we-work" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Work at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, so at Manovaidya we begin by understanding the child as a whole, not just their developmental concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our process starts with a detailed assessment to understand your child's developmental history, communication, learning, behaviour, emotional wellbeing and your family's concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Based on this assessment, we provide personalized guidance and create a structured development plan that is tailored to your child's individual needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Instead of using the same approach for every child, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence their child's development, communication, behaviour, learning and overall wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our support includes developmental assessment, parent guidance, personalized planning, progress monitoring and ongoing family support to help your child grow with confidence.
            </p>
          </section>

          <section id="why-manovaidya" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <div className="flex gap-2 text-[13px] font-black text-[#21142d]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents from Delhi, Noida, Greater Noida, Ghaziabad, NCR, and across India choose Manovaidya for child development support and guidance.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
                <h2 className="text-[16px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Dr. Ankush Garg is the Founder of Manovaidya and the creator of the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  He supports children, teenagers, adults, women, and senior citizens with Autism (ASD), ADHD, child development, speech and communication difficulties, behavioural concerns, learning difficulties, and mental health challenges.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Through detailed assessments, personalized guidance, and family-centred care, he helps families understand their concerns and take the right steps for healthy growth and development.
                </p>
              </div>
            </div>
          </section>

          <section id="related-developmental-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Related Developmental Support Areas</h2>
            <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
              Explore the developmental area that best matches your child's current needs and concerns.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedPages.map((item) => (
                <a key={item.title} href={item.href} className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                  {item.title}
                </a>
              ))}
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]" aria-expanded={openFaq === index}>
                    {faq.question}
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
            <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
              <div className="p-5">
                <h2 className="text-[20px] font-black text-[#17111f]">Book a Consultation</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  If you are looking for child development support, a developmental assessment, communication guidance, or personalized care for your child, you can book a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  Through a detailed assessment and personalized guidance, families can better understand their child's developmental needs and receive the right support for their child's growth, learning, and overall development.
                </p>
                <a href="tel:+917823838638" className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                  Book Now
                </a>
              </div>
              <img src={ctaImage} alt="Happy family image" className="h-full min-h-[240px] w-full object-cover" />
            </div>
          </section>
        </article>

        <div className="space-y-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" />
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
                    activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                  }`}
                >
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"}`} />
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
              Get a personalized developmental plan for your child.
            </p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Book Now
            </a>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-white">
        <div className="mx-auto grid gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
              <Mail className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, developmental guidance and Manovaidya updates.
              </p>
            </div>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ChildDevelopmentSupportIndiaPage;
