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
  "Every child experiences emotions, frustrations and behavioural challenges while growing and learning. However, when behaviours become frequent, intense or begin affecting daily life, parents often start searching for answers, guidance and support.",
  "Many families seek help when they notice frequent tantrums, anger, aggression, emotional outbursts, stubborn behaviour, difficulty following instructions or challenges managing emotions. These behaviours can create stress for both children and parents and may affect learning, social interaction and family relationships.",
  "At Manovaidya, behavioural concerns are understood through a broader developmental perspective rather than being viewed as isolated behaviours. Behaviour is often influenced by communication abilities, emotional regulation, developmental readiness, attention, learning patterns, sensory experiences and overall wellbeing.",
  "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda Development System designed to help families better understand behavioural challenges and create a clear roadmap for long-term growth and development.",
  "Families searching for Child Behaviour Support in India, Behavioural Assessment, Behavioural Concerns in Children or Child Development Guidance often seek more than temporary solutions. They are looking for clarity, understanding and a structured approach that helps them support their child more effectively.",
];

const concernCards = [
  {
    title: "Frequent Tantrums",
    text: "Repeated emotional outbursts that occur more often or with greater intensity than expected.",
  },
  {
    title: "Anger & Irritability",
    text: "Difficulty managing frustration, frequent anger or strong emotional reactions.",
  },
  {
    title: "Aggressive Behaviour",
    text: "Hitting, pushing, throwing objects or aggressive responses during challenging situations.",
  },
  {
    title: "Stubbornness & Defiance",
    text: "Difficulty following instructions, resistance to routines or oppositional behaviour.",
  },
  {
    title: "Emotional Outbursts",
    text: "Sudden emotional reactions that appear difficult for the child to regulate.",
  },
  {
    title: "Social Behaviour Challenges",
    text: "Difficulty interacting appropriately with peers, siblings or family members.",
  },
  {
    title: "Behavioural Difficulties in School",
    text: "Challenges following classroom expectations, participating in activities or managing emotions in educational settings.",
  },
];

const behaviourInfluences = [
  "Communication difficulties",
  "Emotional regulation challenges",
  "Attention and concentration concerns",
  "Sensory processing differences",
  "Learning difficulties",
  "Developmental readiness",
  "Environmental influences",
  "Social interaction challenges",
];

const assessmentGroups = [
  {
    title: "Developmental History",
    Icon: CalendarCheck,
    items: ["Early developmental milestones", "Behaviour patterns", "Family observations", "School-related concerns"],
  },
  {
    title: "Behavioural Understanding",
    Icon: Brain,
    items: ["Emotional regulation", "Social interaction", "Communication abilities", "Attention profile", "Learning patterns"],
  },
  {
    title: "Family Perspective",
    Icon: Users,
    items: ["Parent concerns", "Daily behavioural challenges", "Family goals", "Long-term developmental priorities"],
  },
];

const supportFocus = [
  "Behaviour triggers",
  "Communication patterns",
  "Emotional responses",
  "Developmental influences",
  "Learning challenges",
  "Family interactions",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of developmental, emotional and behavioural influences.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on overall wellbeing and developmental functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand learning, communication and behavioural readiness.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences that may affect behaviour and participation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand behavioural patterns and create structured support strategies.",
  },
];

const supportPoints = [
  "Behavioural Assessment",
  "Emotional Regulation Support",
  "Parent Guidance",
  "Communication Understanding",
  "Developmental Planning",
  "Progress Monitoring",
  "Family Support",
  "Long-Term Development Guidance",
];

const parentConcerns = [
  "Frustration",
  "Stress",
  "Confusion",
  "Self-doubt",
  "Difficulty managing challenging situations",
];

const parentGuidanceItems = [
  "Understanding behaviour",
  "Behaviour support strategies",
  "Communication approaches",
  "Emotional regulation support",
  "Family participation",
  "Long-term planning",
];

const howWeWorkSteps = [
  { title: "Assessment", desc: "Understand behaviour patterns", Icon: Brain },
  { title: "Understanding", desc: "Identify developmental influences", Icon: Search },
  { title: "Guidance Plan", desc: "Create a structured roadmap", Icon: Activity },
  { title: "Parent Guidance", desc: "Support family confidence", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor long-term growth", Icon: CalendarCheck },
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Behavioural Assessment",
  "Child-Centred & Family-Centred Approach",
  "Focus on Behaviour, Communication & Development",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india/" },
  { title: "ADHD Treatment in India", href: "/adhd-treatment-india/" },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india/" },
  { title: "Child Development Support", href: "/child-development-support-india/" },
  { title: "Learning & Attention Difficulties", href: "/learning-attention-difficulties-india/" },
];

const internalLinks = [
  { title: "Learn more about Autism Treatment in India.", href: "/autism-treatment-india/" },
  { title: "Explore ADHD Treatment in India.", href: "/adhd-treatment-india/" },
  { title: "Explore Speech Delay & Communication Support in India.", href: "/speech-delay-support-india/" },
  { title: "Explore Child Development Support in India.", href: "/child-development-support-india/" },
  { title: "Learn about Learning & Attention Difficulties Support.", href: "/learning-attention-difficulties-india/" },
  { title: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
  { title: "Understand the Neuro-Ayurveda Development System.", href: "/neuro-ayurveda-development-system/" },
];

const faqs = [
  {
    question: "1. What are behavioural concerns in children?",
    answer: "Behavioural concerns in children refer to patterns of behaviour that may interfere with daily life, learning, social interaction or family relationships. These concerns may include frequent tantrums, anger, aggression, defiance, emotional outbursts, difficulty following instructions or challenges managing emotions. Every child may occasionally display difficult behaviours, but persistent or intense behaviours may indicate the need for a deeper developmental understanding. At Manovaidya, behavioural concerns are viewed through a broader developmental perspective that considers communication, emotional regulation, attention, learning and overall child development.",
  },
  {
    question: "2. What are the common signs of behavioural problems in children?",
    answer: "Common signs of behavioural concerns may include frequent anger, emotional outbursts, aggression, stubbornness, difficulty following instructions, impulsive behaviour, frequent conflicts with others or challenges managing frustration. Some children may also struggle with emotional regulation, social interaction or adapting to routines. Behavioural patterns can vary significantly from one child to another. Understanding the context and possible developmental influences behind these behaviours often helps families respond more effectively and support long-term growth.",
  },
  {
    question: "3. Why does my child get angry so easily?",
    answer: "Children may become angry easily for many different reasons. Difficulty expressing emotions, communication challenges, frustration, attention difficulties, sensory sensitivities, developmental differences or emotional regulation challenges can all contribute to frequent anger. In many cases, anger is not simply a behaviour problem but a signal that a child may be struggling with something they cannot easily communicate. Understanding the factors contributing to emotional reactions can help families support children more effectively while promoting emotional growth and self-regulation.",
  },
  {
    question: "4. Why does my child throw tantrums frequently?",
    answer: "Tantrums are often a child's way of expressing frustration, disappointment, overwhelm or unmet needs. Young children may not yet have the communication or emotional regulation skills needed to manage strong emotions effectively. Frequent tantrums may also be influenced by developmental readiness, communication challenges, sensory sensitivities, fatigue, routine changes or difficulty coping with frustration. Rather than focusing only on stopping tantrums, it is often more helpful to understand the factors contributing to them and support the child's overall emotional development.",
  },
  {
    question: "5. Is aggressive behaviour normal in children?",
    answer: "Occasional aggressive behaviour may occur during childhood, particularly when children are learning how to manage emotions and interact with others. However, frequent aggression, intense reactions or behaviour that significantly affects daily functioning may require further understanding. Aggressive behaviour can sometimes be influenced by communication difficulties, emotional regulation challenges, developmental concerns, frustration or environmental factors. A structured developmental assessment can help families better understand behavioural patterns and identify appropriate support strategies.",
  },
  {
    question: "6. What causes behavioural concerns in children?",
    answer: "Behavioural concerns in children can be influenced by multiple developmental, emotional and environmental factors. Communication difficulties, emotional regulation challenges, attention concerns, learning difficulties, sensory sensitivities, family stress, routine changes and developmental differences may all affect behaviour. In many cases, behaviour is not caused by a single factor. Instead, it often reflects how a child is responding to challenges in their environment or developmental journey. Understanding the underlying influences behind behaviour helps families move beyond symptom management and focus on long-term developmental support.",
  },
  {
    question: "7. Can behaviour problems be linked to communication difficulties?",
    answer: "Yes. Communication difficulties can sometimes contribute to behavioural challenges. When children struggle to express their needs, thoughts or emotions effectively, they may become frustrated and display behaviours such as anger, tantrums, withdrawal or aggression. Behaviour can sometimes serve as a form of communication when children are unable to express themselves verbally. This is why behavioural concerns should be understood alongside communication development, social interaction and overall developmental functioning. A comprehensive developmental assessment can help identify these connections more clearly.",
  },
  {
    question: "8. Can ADHD cause behavioural challenges?",
    answer: "Yes. Some children with ADHD may experience behavioural challenges related to impulsivity, emotional regulation and difficulty maintaining attention. These behaviours may include frustration, impatience, emotional outbursts, difficulty following instructions or challenges adapting to routines. However, every child is different, and behavioural patterns can vary significantly. Understanding the relationship between attention, emotional regulation and behaviour helps families create more effective support strategies that address the child's developmental needs rather than focusing only on visible behaviours.",
  },
  {
    question: "9. Can autism affect a child's behaviour?",
    answer: "Yes. Some children with Autism Spectrum Disorder (ASD) may display behavioural patterns that are influenced by communication differences, sensory sensitivities, social interaction challenges or difficulty adapting to changes. Behaviours such as repetitive actions, emotional outbursts, frustration or withdrawal may sometimes be connected to underlying developmental factors. Understanding behaviour within the broader context of autism helps families better interpret behavioural responses and identify supportive strategies that promote communication, participation and overall development.",
  },
  {
    question: "10. How can parents manage behavioural concerns at home?",
    answer: "Parents can support behavioural development by creating predictable routines, encouraging communication, providing clear expectations and responding consistently to challenging situations. Positive reinforcement, emotional support and patience often play an important role in helping children learn appropriate behaviours. It can also be helpful to understand possible triggers, observe behavioural patterns and create opportunities for emotional expression. Rather than focusing only on correcting behaviour, families can benefit from understanding the developmental, emotional and communication-related factors that may be influencing the child's responses.",
  },
  {
    question: "11. What should parents avoid when handling tantrums and anger?",
    answer: "When children experience tantrums or anger, it is generally helpful for parents to avoid reacting with excessive anger, shouting, harsh punishment or emotional escalation. These responses may sometimes increase frustration and make it more difficult for children to regulate their emotions. It is also important to avoid labelling children as bad or problematic based solely on their behaviour. Instead, parents can focus on understanding possible triggers, maintaining consistency and supporting emotional regulation. A calm and structured response often creates a more supportive environment for behavioural growth and learning.",
  },
  {
    question: "12. Can behavioural concerns improve with the right support?",
    answer: "Many children show positive behavioural growth when they receive appropriate guidance, support and developmental understanding. Progress may vary depending on the child's individual strengths, challenges and developmental profile. Behaviour is often influenced by communication abilities, emotional regulation, attention, learning and environmental factors. When these influences are better understood, families can implement more effective strategies that support long-term development. Rather than focusing only on controlling behaviour, a structured developmental approach helps children build skills that contribute to healthier emotional and behavioural responses over time.",
  },
  {
    question: "13. When should parents seek help for behavioural concerns?",
    answer: "Parents may consider seeking guidance when behavioural concerns become frequent, intense or begin affecting daily life, learning, social relationships or family wellbeing. Persistent aggression, severe emotional outbursts, difficulty managing emotions, challenges at school or behaviour that does not improve over time may indicate the need for a deeper developmental understanding. Seeking guidance does not mean something is necessarily wrong with the child. Instead, it can help families better understand behavioural patterns, developmental influences and practical ways to support their child's growth and wellbeing.",
  },
  {
    question: "14. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is a structured framework developed by Dr. Ankush Garg to help families better understand developmental, behavioural and mental wellness concerns. The system focuses on five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System and Behaviour Guidance System. Together, these pillars provide a broader developmental perspective that helps families understand communication, behaviour, learning, emotional wellbeing and overall development. The goal is to create a structured roadmap that supports long-term developmental understanding and family guidance.",
  },
  {
    question: "15. How does Manovaidya assess and support children with behavioural concerns?",
    answer: "At Manovaidya, behavioural assessment focuses on understanding the child as a whole rather than evaluating behaviour in isolation. The assessment process may include developmental history, communication abilities, emotional regulation, learning patterns, behaviour observations, social interaction and parent concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child's individual needs. Support focuses on developmental understanding, parent guidance, progress monitoring and long-term family support through the Neuro-Ayurveda Development System. The goal is to help families gain greater clarity regarding behavioural patterns and move forward with confidence and direction.",
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

    document.title = "Behavioural Concerns in Children | Child Behaviour Support in India | Manovaidya";

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
      "Looking for support for behavioural concerns in children? Learn about child behaviour assessment, emotional regulation and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/behavioural-concerns-children-india`;

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
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                {paragraph}
              </p>
            ))}
          </section>

          <section id="what-are-behavioural-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What are Behavioural Concerns in Children?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Behavioural concerns refer to patterns of behaviour that may interfere with a child's learning, relationships, emotional wellbeing or daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child may occasionally become angry, frustrated or emotional. However, when behaviours become persistent, difficult to manage or significantly impact daily life, parents may begin seeking professional guidance.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Behaviour should not be viewed only as a problem to be corrected. In many cases, behaviour can be a way for children to communicate needs, frustrations, emotions or developmental challenges.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding the reasons behind behaviour often helps families respond more effectively and support long-term development.
            </p>
          </section>

          <section id="common-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Behavioural Concerns in Children</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents may seek support for a variety of behavioural concerns, including:
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
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">Understanding Behaviour Beyond Actions</h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  One of the most common misconceptions is that behaviour should be judged only by what is visible.
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
              In reality, behaviour is often influenced by multiple developmental factors.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, behaviour is understood as part of the child's overall developmental profile rather than as an isolated issue.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This broader understanding helps families identify meaningful ways to support behavioural growth and emotional wellbeing.
            </p>
            <img
              src={signsImage}
              alt="Child expressing emotions illustration"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">Behavioural Assessment at Manovaidya</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">Every child has a unique behavioural profile.</p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                Assessment at Manovaidya focuses on understanding the child as a whole rather than evaluating behaviour in isolation.
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">The assessment process may include:</p>
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
                The goal is to help families gain a clearer understanding of behavioural patterns, strengths and support needs.
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
              Many families searching for Child Behaviour Support in India are looking for practical guidance that helps them better understand and manage behavioural challenges.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Behavioural concerns are rarely influenced by a single factor. Instead, behaviour often reflects a combination of developmental, emotional, social and environmental influences.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Support focuses on understanding:</p>
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
              This understanding helps families create a more structured and supportive environment for behavioural growth.
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
              At Manovaidya, behavioural support is guided by the Neuro-Ayurveda Development System developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">The system focuses on five interconnected pillars:</p>
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
              Together, these pillars provide a comprehensive framework for understanding behaviour and development.
            </p>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Behavioural Concerns</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support at Manovaidya begins with understanding the child rather than focusing only on behaviour.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Our approach focuses on:</h3>
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
              Every child receives individualized guidance based on behavioural needs and developmental goals.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Behavioural challenges can affect the entire family.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Parents often experience:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parent guidance is considered an essential part of behavioural support.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Families receive guidance regarding:</h3>
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
              The goal is to help families feel more confident while supporting their child's growth and development.
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
              Every child is unique, which is why support begins with a detailed understanding of developmental history, behaviour patterns, communication abilities, emotional wellbeing and family concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Based on this understanding, families receive personalized guidance and a structured developmental roadmap.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence behaviour, communication, learning and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support focuses on assessment, guidance, progress tracking and long-term family support.
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
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
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India connect with Manovaidya for Behavioural Concerns Support, Behavioural Assessment and Family Guidance.
            </p>
            <p className="mt-3 text-[14px] font-bold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon, Faridabad, NCR and across India connect with Manovaidya for Behavioural Concerns Support, Behavioural Assessment and Family Guidance.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr. Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Autism, ADHD, Child Development & Mental Health Specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on Autism Spectrum Disorder (ASD), ADHD, Child Development, Speech & Communication Challenges, Behavioural Concerns, Learning Difficulties, Teen Mental Health, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through detailed assessment, individualized guidance and family-centred support, he helps families better understand developmental concerns and move forward with greater clarity, confidence and direction.
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
                  If you are looking for support for behavioural concerns in children, behavioural assessment or personalized developmental guidance, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  Through a structured assessment and personalized guidance process, families can gain a clearer understanding of behavioural patterns, developmental needs and appropriate next steps for long-term growth and wellbeing.
                </p>
                <a
                  href="tel:+917823894080"
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Contact Us Now
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

