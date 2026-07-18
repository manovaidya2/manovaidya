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
  Users,
  Waves,
} from "lucide-react";
import childHeroImage from "../images/child-behavioral-concerns-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What Are Concerns?", id: "what-are-behavioural-concerns" },
  { label: "Common Concerns", id: "common-concerns" },
  { label: "Beyond Actions", id: "beyond-actions" },
  { label: "Assessment", id: "assessment" },
  { label: "Behaviour Support", id: "child-behaviour-support" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "How We Work", id: "how-we-work" },
  { label: "Why Families Choose", id: "why-families-choose" },
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
  { label: "Behaviour", count: 9, Icon: Users },
  { label: "Parenting", count: 9, Icon: HeartHandshake },
];

const introParagraphs = [
  "Every child experiences a range of emotions, frustrations as well as behavioural difficulties while growing and developing. However, when these behaviours become persistent, intense, or start interfering with daily life, parents start looking for answers, guidance, and support.",
  "Many families look for help when they notice frequent tantrums, anger, aggression, emotional outbursts, stubborn behaviour, difficulty following instructions, or challenges managing emotions.",
  "At Manovaidya, behavioural concerns are understood through a broader developmental assessment perspective rather than being viewed as isolated difficulties. Behaviour is often influenced by communication abilities, emotional regulation, developmental readiness, attention, learning patterns, sensory experiences, and overall wellbeing.",
  "Led by Dr. Ankush Garg, Autism, ADHD, Child Development support & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach to help families better understand behavioural challenges and create a clear plan for long-term growth and development.",
  "Families searching for Child Behaviour Support in India, Behavioural Assessment, Behavioural Concerns in Children or Child Development support often look for more than temporary solutions. They are looking for clarity, understanding and a structured approach that helps them support their child more effectively.",
];

const concernCards = [
  {
    title: "Frequent Tantrums",
    text: "More frequent or stronger emotional reactions than expected",
  },
  {
    title: "Anger & Irritability",
    text: "Difficulty in handling anger and emotions",
  },
  {
    title: "Aggressive Behaviour",
    text: "Hitting, pushing, or throwing objects when frustrated.",
  },
  {
    title: "Stubbornness & Defiance",
    text: "A person may find it hard to follow directions, stick to regular routines, or may often refuse, argue, or push back against rules or requests.",
  },
  {
    title: "Emotional Outbursts",
    text: "Quick emotional outbursts that are difficult for the child to manage.",
  },
  {
    title: "Social Behaviour Challenges",
    text: "Has trouble getting along or communicating well with peers, siblings, or family members.",
  },
  {
    title: "Behavioural Difficulties in School",
    text: "Has difficulty following classroom rules, joining activities, or managing emotions at school.",
  },
];

const behaviourInfluences = [
  "Communication challenges",
  "Emotional self regulation difficulties",
  "Focus challenges",
  "Sensory processing issues",
  "Learning challenges",
  "Developmental progress",
  "Environmental factors",
  "Social communication difficulties",
];

const assessmentGroups = [
  {
    title: "Growth and development history",
    Icon: CalendarCheck,
    items: ["Early growth Achievements", "Behavioral characteristics", "Parental observations", "Academic concerns"],
  },
  {
    title: "Behavioural awareness",
    Icon: Brain,
    items: ["Emotional management", "Social skills development", "Communication skills", "Focus and attention patterns", "Leaning behaviours"],
  },
  {
    title: "Family view point",
    Icon: Users,
    items: ["Parent observations", "Behaviour pattern difficulties", "Family priorities", "Long term goals"],
  },
];

const supportFocus = [
  "Behavioral cues",
  "Communication habits",
  "Emotional reactions and feelings",
  "Developmental factors",
  "Learning barriers",
  "Family support for child development",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Focuses on understanding developmental, emotional, and behavioural aspects.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Promotes overall wellbeing and developmental growth.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps identify learning, communication, and behavioural strengths and needs.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Helps identify sensory factors that may affect behaviour and daily activities.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families identify behavioural patterns and develop clear support strategies.",
  },
];

const supportPoints = [
  "Behaviour analysis",
  "Emotional management support",
  "Parental guidance",
  "Effective communication",
  "Growth planning",
  "Progress monitoring",
  "Family support for child development",
  "Long term developmental assessment growth plan",
];

const parentConcerns = [
  "Whole family impact",
  "Parent guidance",
  "Confidence building",
  "Child growth",
  "Future planning",
];

const parentGuidanceItems = [
  "Understanding behaviour",
  "Managing behaviour effectively",
  "Improving communication",
  "Supporting emotional control",
  "Taking part in their child's progress",
  "Planning for the future",
];

const howWeWorkSteps = [
  { title: "Assessment", desc: "Understanding your child's behaviour", Icon: Brain },
  { title: "Understanding", desc: "Identifying developmental needs", Icon: Search },
  { title: "Guidance Plan", desc: "Create a clear and appropriate action plan", Icon: Activity },
  { title: "Parent Guidance", desc: "Support and empower parents", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor growth over time", Icon: CalendarCheck },
];

const whyChoose = [
  "Behavioural Concerns Treatment",
  "Behavioural Assessment",
  "Family support for child development",
  "Structured Neuro-Ayurveda Development System",
  "Personalized guidance",
  "Continuous progress monitoring",
  "Ongoing family support for child development",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india/" },
  { title: "ADHD Treatment in India", href: "/adhd-treatment-india/" },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india/" },
  { title: "Child Development Treatment", href: "/child-development-support-india/" },
  { title: "Learning & Attention Difficulties", href: "/learning-attention-difficulties-india/" },
];

const internalLinks = [
  { title: "Learn more about Autism Treatment in India.", href: "/autism-treatment-india/" },
  { title: "Explore ADHD Treatment in India.", href: "/adhd-treatment-india/" },
  { title: "Explore Speech Delay & Communication Support in India.", href: "/speech-delay-support-india/" },
  { title: "Explore Child Development Treatment in India.", href: "/child-development-support-india/" },
  { title: "Learn about Learning & Attention Difficulties Support.", href: "/learning-attention-difficulties-india/" },
  { title: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
  { title: "Understand the Neuro-Ayurveda Development System.", href: "/neuro-ayurveda-development-system/" },
];

const faqs = [
  {
    question: "What are behavioural concerns in children?",
    answer: "Behavioural concerns in children are behaviours that affect a child's daily life, learning, relationships or emotional wellbeing. These may include frequent tantrums, anger, aggression, defiance, emotional outbursts, difficulty following instructions or trouble managing emotions. At Manovaidya, we look beyond the behaviour to understand the child's overall development and provide the right guidance for families.",
  },
  {
    question: "What are the common signs of behavioural problems in children?",
    answer: "Common signs of behavioural concerns include frequent anger, emotional outbursts, aggression, stubbornness, difficulty following instructions, impulsive behaviour, trouble managing emotions and frequent conflicts with others. Every child is different, and understanding the reasons behind these behaviours can help families provide the right support.",
  },
  {
    question: "Why does my child get angry so easily?",
    answer: "Children may become angry easily for many reasons, including difficulty expressing emotions, communication challenges, frustration, attention difficulties or developmental differences. Often, anger is a sign that a child is struggling to communicate their needs. Understanding the cause can help families provide the right support and encourage healthy emotional development.",
  },
  {
    question: "Why does my child throw tantrums frequently?",
    answer: "Tantrums are a child's way of expressing big emotions like frustration, sadness, or feeling overwhelmed. Young children are still learning how to communicate and manage their feelings. Hunger, tiredness, changes in routine, or sensory processing issues can also trigger tantrums. Understanding the cause and supporting the child calmly helps more than simply trying to stop the behavior.",
  },
  {
    question: "Is aggressive behaviour normal in children?",
    answer: "Some aggression is normal as children learn to manage emotions and interact with others. Frequent or severe aggression may be linked to communication, emotional regulation, frustration, or developmental challenges. A child development assessment can help identify the cause and guide the right support.",
  },
  {
    question: "What causes behavioural concerns in children?",
    answer: "Children's behaviour can be affected by emotions, communication, learning, sensory needs, routines, family stress, or developmental differences. Understanding the underlying cause helps provide the right support and promotes healthy development.",
  },
  {
    question: "Can behaviour problems be linked to communication difficulties?",
    answer: "Yes. Communication difficulties can sometimes lead to behavioural challenges. When children cannot express their needs or feelings, they may show frustration through tantrums, anger, or withdrawal. A child development assessment can help identify the underlying causes and guide appropriate support.",
  },
  {
    question: "Can ADHD cause behavioural challenges?",
    answer: "Yes. Some children with ADHD may show behaviours such as impulsivity, frustration, emotional outbursts, difficulty paying attention, following instructions or adapting to routines. However, every child is different. Understanding these behaviours helps families provide the right support for the child's needs.",
  },
  {
    question: "Can autism affect a child's behaviour?",
    answer: "Yes. Some children with Autism Spectrum Disorder (ASD) may show behaviours such as repetitive actions, emotional outbursts, frustration, or difficulty with changes. These behaviours are often linked to communication, sensory processing issues, or social differences. Understanding them helps families provide the right support for the child's development.",
  },
  {
    question: "How can parents manage behavioural concerns at home?",
    answer: "Parents can support behavioural development by creating consistent routines, encouraging communication, setting clear expectations and using positive reinforcement. Understanding triggers and responding with patience helps children learn positive behaviours and supports their overall development.",
  },
  {
    question: "What should parents avoid when handling tantrums and anger?",
    answer: "When children have tantrums or become angry, parents should try to stay calm and avoid shouting, harsh punishment or reacting with anger. Instead of labelling the child as \"bad,\" it is helpful to understand what triggered the behaviour, respond consistently and support the child in managing their emotions. Calm and patient responses can help children learn better behaviour over time.",
  },
  {
    question: "Can behavioural concerns improve with the right support?",
    answer: "Many children improve their behaviour with the right guidance, support and understanding. Every child develops at their own pace. By understanding the reasons behind a child's behaviour and using consistent, supportive strategies, families can help children build better emotional regulation and positive behaviours over time.",
  },
  {
    question: "When should parents seek help for behavioural concerns?",
    answer: "Parents may consider seeking professional guidance if a child's behavioural difficulties become frequent, severe or start affecting daily life, learning or relationships. Getting support does not mean something is wrong with the child. It can help families understand the child's needs and learn effective ways to support their development and wellbeing.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System, developed by Dr. Ankush Garg, is a structured approach that helps families understand developmental, behavioural and mental wellness concerns. It focuses on five key areas-brain health, gut health, neural development, sensory integration therapy and behaviour guidance-to support a child's overall growth, learning, communication and emotional wellbeing.",
  },
  {
    question: "How does Manovaidya assess and support children with behavioural concerns?",
    answer: "At Manovaidya, behavioural assessment looks at the child's overall development, not just their behaviour. It includes understanding developmental history, communication, learning, emotions, social skills development and parent concerns. Based on the child development assessment, families receive personalised guidance and a structured plan to support the child's long-term development and wellbeing.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function BehaviouralConcernsChildrenIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "behavioural-concerns-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Behavioural Concerns in Children Support in India",
          description:
            "Child behaviour assessment, parent guidance and developmental support through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/behavioural-concerns-children-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "Organization",
          name: "Manovaidya",
          url: window.location.origin,
        },
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
            { "@type": "ListItem", position: 3, name: "Behavioural Concerns in Children", item: `${window.location.origin}/behavioural-concerns-children-india` },
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

    const scriptId = "behavioural-concerns-schema";
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
        title="Behavioural Concerns in Children | Child Behaviour Support in India | Manovaidya"
        description="Looking for support for behavioural concerns in children? Learn about child behaviour assessment, emotional regulation and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
        keywords="Behavioural Concerns in Children, Child Behaviour Support in India, Behavioural Assessment, Frequent Tantrums in Children, Anger and Irritability in Children, Aggressive Behaviour in Children, Emotional Regulation Support, Behaviour Guidance System, Neuro-Ayurveda Development System, Child Behaviour Therapy India, Parent Guidance for Behavioural Concerns, ADHD and Behavioural Challenges, Autism and Behavioural Challenges, Dr. Ankush Garg, Child Development Delhi NCR"
        path="/behavioural-concerns-children-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Behavioural Concerns in Children",
          "description": "Looking for support for behavioural concerns in children? Learn about child behaviour assessment, emotional regulation and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
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
                <span className="text-[#4b345d]">Behavioural Concerns</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Behavioural Concerns in Children Support in India</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Child Behaviour Assessment, Parent Guidance & Developmental Support
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Behavioural Concerns in Children Support in India
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Behaviour Assessment
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
                  alt="Parent managing child behaviour with calm interaction"
                  className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]"
                />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            {/* <h2 className="text-[20px] font-black text-[#17111f]">Key Takeaways</h2> */}
            <h2 className="mt-5 text-[20px] font-black text-[#17111f]">Introduction</h2>
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                {paragraph}
              </p>
            ))}
          </section>

          <section id="what-are-behavioural-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What are Behavioural Concerns in Children?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Behavioural difficulties refer to patterns of behaviour that may create a challenge in a child's learning, relationships, emotional wellbeing, or daily life.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child may sometimes feel angry, frustrated, or upset. However, when these behaviour patterns become consistent, become harder to manage, or affect everyday life, parents may seek help from professionals.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Behaviour should not only be seen as a problem to fix. Sometimes, children use their behaviour to show their needs, feelings, frustrations, or challenges they are facing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding the reasons behind behaviour can help families respond more effectively and promote long-term development.
            </p>
          </section>

          <section id="common-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What are the Common Behavioural Concerns in Children?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents may seek help for various behaviour-related concerns, such as:
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {concernCards.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Users className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-black text-[#21142d]">{item.title}</h3>
                      <p className="mt-1 text-[13px] font-semibold leading-6 text-[#5f5367]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="beyond-actions" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">What does behaviour reveal beyond what people do?</h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  A common misconception is that we should judge behaviour only by what we can see.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-0 lg:flex-1">
                {behaviourInfluences.map((item) => (
                  <div key={item} className="flex min-h-[86px] flex-col items-center justify-start text-center">
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                      <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="max-w-[116px] text-[11px] font-black leading-4 text-[#3b2e45]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              In reality, a child's behaviour can be affected by many developmental factors.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, behaviour is seen as a part of the child's overall development, not as a separate problem.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This understanding helps families support better behaviour and emotional wellbeing.
            </p>
            <img
              src={signsImage}
              alt="Child expressing emotions illustration"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How is a Behavioural Assessment conducted at Manovaidya?</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">Every child is unique and has their own way of thinking, feeling, learning, and behaving.</p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                At Manovaidya, we focus on understanding the child as a whole instead of looking at a behaviour separately. We try to understand the child's strengths, challenges, and individual needs.
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">The child development assessment process may include:</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {assessmentGroups.map(({ title, items, Icon }) => (
                  <div key={title} className="rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-4">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-[0_6px_14px_rgba(58,31,90,0.07)]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-[14px] font-black text-[#21142d]">{title}</h3>
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2 text-[12.5px] font-bold leading-5 text-[#51465a]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-4 max-w-[620px] rounded-md bg-[#f1f5ef] px-4 py-2 text-center text-[12px] font-black leading-5 text-[#5b5360]">
                The goal is to help families understand behaviour, strengths, and needs.
              </div>
            </div>
            <img
              src={supportFamilyImage}
              alt="Doctor discussing behavioural concerns with parents"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="child-behaviour-support" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Child Behaviour Support in India</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many families looking for child behaviour support in India need practical guidance to better understand and handle behavioural challenges.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Behavioral concerns are usually not caused by just one reason. A child's behaviour is often shaped by a mix of developmental, emotional, social, and environmental factors.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Support focuses on recognising and understanding:</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportFocus.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              This understanding helps families create a more organized and supportive environment for better behaviour.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, behavioural support follows the Neuro-Ayurveda Development System developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">This system is based on five interconnected pillars:</p>
            <img
              src={neuroDiagramImage}
              alt="5 Pillar Neuro-Ayurveda Development System Diagram"
              className="mt-5 w-full h-auto object-contain max-h-[400px] mb-5 rounded-lg border border-[#eadff1] bg-white shadow-sm p-4"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {neuroPillars.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] last:sm:col-span-2">
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
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Together, these pillars create a complete approach to understanding behaviour and development.
            </p>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Help Children with Behavioral Challenges?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand the child first and then address their behaviour.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">We focus on:</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {supportPoints.map((point) => (
                  <li key={point} className="flex min-h-[112px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-4 text-center text-[13px] font-bold leading-5 text-[#51465a]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-[0_6px_14px_rgba(58,31,90,0.07)]">
                      <CheckCircle2 className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child gets personal guidance based on their behaviour, needs and development goals.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How do we provide Parent Guidance & Family Support?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Behavioral difficulties can impact the whole family.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Parent support includes:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parent guidance is an important part of behavioural support.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Families are guided on:</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {parentGuidanceItems.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              The goal is to help families feel more confident and support their child's growth and development.
            </p>
            <img
              src={supportFamilyImage}
              alt="Parent-child emotional support image"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How We Work at Manovaidya</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-start lg:flex lg:items-center lg:justify-between">
                {howWeWorkSteps.map(({ title, desc, Icon }, index) => (
                  <React.Fragment key={title}>
                    <div className="flex min-h-[94px] flex-col items-center justify-start text-center">
                      <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7d8] bg-[#f7fbf5] text-[#7835A4]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[11px] font-black leading-4 text-[#2f2636]">{title}</span>
                      <span className="mt-1 max-w-[128px] text-[11px] font-black leading-4 text-[#3b2e45]">{desc}</span>
                    </div>
                    {index < howWeWorkSteps.length - 1 && (
                      <ArrowRight className="mx-1 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, so support begins with gaining a clear understanding of their developmental history, behaviour patterns, communication skills, emotional wellbeing, and family concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Based on these insights, families receive personalized guidance and a structured plan to support their child's development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Instead of using a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families gain a deeper understanding of the factors influencing behaviour, communication, learning, and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The process emphasizes comprehensive Child development assessment, personalized guidance, continuous progress monitoring, and ongoing family support for child development.
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h3 className="flex gap-2 text-[14px] font-black text-[#21142d]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] font-bold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India come to Manovaidya for Behavioural Concerns Treatment, Behavioural Assessment and Family support for child development.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr. Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Autism, ADHD, Child Development Expert & Mental Health Specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the Founder of Manovaidya and the Creator of the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  He works with children, teenagers, adults and families facing Autism Spectrum Disorder (ASD), ADHD, child development concerns, speech and communication difficulties, behavioural challenges, learning difficulties, mental health concerns, women's emotional wellbeing and senior mental health.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through detailed child development assessments, personalized guidance and family-focused support, he helps families understand their child's or loved one's needs and take the right next steps with confidence.
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
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Internal Links</h3>
              <div className="mt-3 grid gap-2">
                {internalLinks.map((item) => (
                  <a key={item.title} href={item.href} className="text-[13px] font-bold leading-6 text-[#7835A4] transition hover:text-[#5f2785]">
                    {item.title}
                  </a>
                ))}
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
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
              <div className="p-7 lg:p-10">
                <h2 className="text-[24px] font-black">Book a Consultation</h2>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  If you are seeking support for your child's behavioural concerns, behavioural assessment or personalised developmental guidance, schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  A structured child development assessment and personalised guidance can help families better understand their child's developmental needs, behavioural patterns and the next steps for long-term growth and wellbeing.
                </p>
                <a
                  href="tel:+917823838638"
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Get in Touch Today
                </a>
              </div>
              <div className="relative h-64 w-full lg:h-full">
                <img src={ctaImage} alt="Happy family image" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d6b] to-transparent opacity-80 mix-blend-multiply lg:bg-gradient-to-l lg:opacity-90" />
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
              Get a personalized behaviour support plan for your child.
            </p>
            <a
              href="tel:+917823838638"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </a>
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
                Subscribe to expert articles, behaviour guidance and Manovaidya updates.
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

export default BehaviouralConcernsChildrenIndiaPage;
