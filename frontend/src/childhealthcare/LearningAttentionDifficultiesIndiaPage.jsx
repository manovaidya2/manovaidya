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
import childHeroImage from "../images/learning-attention-difficulties-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What Are Difficulties?", id: "what-are-learning-difficulties" },
  { label: "Learning vs Attention", id: "learning-vs-attention" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Beyond Academics", id: "beyond-academics" },
  { label: "Assessment", id: "assessment" },
  { label: "Learning Support", id: "learning-support" },
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
  { label: "Learning", count: 9, Icon: BookOpen },
  { label: "Parenting", count: 9, Icon: Users },
];

const introParagraphs = [
  "Every child learns differently. Some children easily understand new concepts, follow instructions and adapt to academic demands, while others may experience challenges related to concentration, attention, memory, learning speed or academic performance.",
  "For many parents, concerns begin when a child struggles to focus, forgets information quickly, has difficulty completing tasks, falls behind academically or requires repeated instructions to understand concepts. These challenges can affect confidence, school performance and overall development.",
  "At Manovaidya, learning and attention difficulties are understood through a broader developmental perspective rather than being viewed as isolated academic concerns. Learning is closely connected with attention, communication, emotional wellbeing, behaviour, sensory processing and developmental readiness.",
  "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda Development System designed to help families better understand learning and attention challenges while creating a clear roadmap for developmental growth and academic readiness.",
  "Families searching for Learning Difficulties Treatment in India, Attention Problems in Children, Child Learning Assessment or Academic Development Guidance often seek practical understanding, structured support and long-term developmental direction.",
];

const signGroups = [
  {
    title: "Attention Challenges",
    items: ["Difficulty maintaining focus", "Easily distracted", "Difficulty completing tasks", "Frequently shifting attention"],
  },
  {
    title: "Learning Challenges",
    items: ["Difficulty understanding concepts", "Slow learning pace", "Requiring repeated instructions", "Academic struggles"],
  },
  {
    title: "Memory Difficulties",
    items: ["Forgetting recently learned information", "Difficulty recalling instructions", "Poor retention of concepts"],
  },
  {
    title: "School-Related Concerns",
    items: [
      "Homework challenges",
      "Difficulty staying organized",
      "Reduced classroom participation",
      "Academic underperformance",
      "Poor School Performance",
      "Academic Difficulties",
      "Child Not Focusing in Studies",
    ],
  },
  {
    title: "Behaviour During Learning",
    items: ["Frustration during study activities", "Avoiding academic tasks", "Low confidence in learning situations", "Academic Performance Concerns"],
  },
  {
    title: "Academic Performance Concerns",
    items: [
      "Falling behind in school",
      "Difficulty completing classwork",
      "Poor academic performance",
      "Difficulty keeping up with age-appropriate learning expectations",
    ],
  },
];

const learningInfluences = [
  "Attention skills",
  "Communication abilities",
  "Emotional wellbeing",
  "Behavioural patterns",
  "Sensory processing",
  "Developmental readiness",
  "Social interaction",
];

const assessmentGroups = [
  {
    title: "Developmental History",
    Icon: CalendarCheck,
    items: ["Early development", "Learning patterns", "Academic concerns", "Parent observations"],
  },
  {
    title: "Learning Understanding",
    Icon: BookOpen,
    items: ["Attention profile", "Memory skills", "Communication abilities", "Learning readiness", "Behaviour during learning"],
  },
  {
    title: "Family Perspective",
    Icon: Users,
    items: ["Parent concerns", "School challenges", "Developmental goals", "Long-term priorities"],
  },
];

const supportFactors = [
  "Attention difficulties",
  "Communication concerns",
  "Behavioural factors",
  "Emotional wellbeing",
  "Developmental readiness",
  "Environmental influences",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of cognitive development, learning and attention.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on overall wellbeing and developmental functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand learning readiness, memory and developmental growth.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences affecting attention and learning.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand behavioural influences that may affect academic participation and learning.",
  },
];

const supportPoints = [
  "Learning Assessment",
  "Attention Understanding",
  "Developmental Planning",
  "Parent Guidance",
  "Academic Readiness",
  "Communication Development",
  "Progress Monitoring",
  "Long-Term Family Support",
];

const parentConcerns = [
  "Worry about academic progress",
  "Frustration during homework",
  "Confusion about learning difficulties",
  "Concerns regarding future success",
];

const howWeWorkSteps = [
  { title: "Assessment", desc: "Understand your child's profile", Icon: Brain },
  { title: "Learning Patterns", desc: "Identify learning needs", Icon: BookOpen },
  { title: "Personalised Plan", desc: "Create a developmental roadmap", Icon: Activity },
  { title: "Parent Guidance", desc: "Support family confidence", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor long-term growth", Icon: CalendarCheck },
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Learning Assessment",
  "Child-Centred & Family-Centred Approach",
  "Focus on Learning, Attention & Development",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india/" },
  { title: "ADHD Treatment in India", href: "/adhd-treatment-india/" },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india/" },
  { title: "Behavioural Concerns in Children", href: "/behavioural-concerns-children-india/" },
  { title: "Child Development Treatment in India", href: "/child-development-support-india/" },
];

const internalLinks = [
  { title: "Explore Autism Treatment in India.", href: "/autism-treatment-india/" },
  { title: "Learn more about ADHD Treatment in India.", href: "/adhd-treatment-india/" },
  { title: "Explore Speech Delay & Communication Support in India.", href: "/speech-delay-support-india/" },
  { title: "Learn about Behavioural Concerns in Children.", href: "/behavioural-concerns-children-india/" },
  { title: "Explore Child Development Treatment in India.", href: "/child-development-support-india/" },
  { title: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
  { title: "Understand the Neuro-Ayurveda Development System.", href: "/neuro-ayurveda-development-system/" },
];

const faqs = [
  {
    question: "1. What are learning and attention difficulties?",
    answer: "Learning and attention difficulties refer to challenges that may affect a child's ability to focus, understand information, remember concepts, complete tasks or perform effectively in learning environments. Some children may struggle primarily with concentration and attention, while others may experience difficulties related to learning, memory, comprehension or academic performance. These challenges can affect school participation, confidence and daily functioning. Every child is unique, and learning difficulties can vary significantly in severity and presentation. Understanding a child's overall developmental profile is often the first step toward identifying appropriate support and guidance.",
  },
  {
    question: "2. What are the early signs of learning difficulties in children?",
    answer: "Early signs of learning difficulties may include difficulty understanding age-appropriate concepts, needing repeated instructions, trouble remembering information, slow academic progress, difficulty recognizing letters or numbers and challenges completing learning tasks. Some children may also become frustrated during learning activities or avoid tasks they find difficult. Early signs can vary depending on the child's age and developmental stage. Identifying concerns early can help families better understand the child's learning profile and provide appropriate developmental support when needed.",
  },
  {
    question: "3. What are the common signs of attention difficulties in children?",
    answer: "Children with attention difficulties may struggle to stay focused, become easily distracted, have difficulty completing tasks, forget instructions or frequently shift from one activity to another. Some children may appear restless, while others may simply have trouble maintaining concentration for extended periods. Attention difficulties can affect learning, classroom participation, organization and daily routines. Since attention is closely connected to learning and development, understanding these challenges can help families identify effective support strategies that promote long-term growth and participation.",
  },
  {
    question: "4. What is the difference between a learning disability and ADHD?",
    answer: "A learning disability primarily affects the way a child processes, understands or uses information during learning activities. ADHD mainly affects attention, focus, impulsivity and self-regulation. Although these conditions can sometimes occur together, they are not the same. A child with ADHD may understand concepts well but struggle to stay focused, while a child with a learning disability may have difficulty learning specific skills despite paying attention. A structured assessment can help identify the child's unique strengths, challenges and support needs.",
  },
  {
    question: "5. Do learning disabilities affect intelligence?",
    answer: "No. Learning disabilities do not automatically indicate lower intelligence. Many children with learning difficulties have average or above-average intelligence but may process information differently. Difficulties in reading, writing, memory, attention or academic performance should not be viewed as a measure of a child's overall potential. Every child has unique strengths and abilities. Understanding how a child learns can help families focus on supporting development, confidence and long-term success rather than making assumptions about intelligence.",
  },
  {
    question: "6. Why does my child struggle to focus on studies?",
    answer: "Difficulty focusing on studies can be influenced by many different factors, including attention challenges, learning difficulties, emotional stress, communication concerns, developmental readiness or environmental distractions. Some children may find it difficult to maintain concentration for long periods, while others may struggle because they do not fully understand the learning material. Poor focus should not always be viewed as laziness or lack of interest. Understanding the factors influencing attention and learning can help families identify practical ways to support academic participation and developmental growth.",
  },
  {
    question: "7. Why does my child forget things so quickly?",
    answer: "Children may forget information for a variety of reasons, including attention difficulties, learning challenges, memory processing differences, emotional stress or difficulty understanding concepts fully. In some cases, children may appear forgetful because they were not fully focused when information was presented. Memory is closely connected with attention, learning and developmental readiness. Understanding a child's learning profile can help families determine whether forgetfulness is part of normal development or whether additional developmental support may be beneficial.",
  },
  {
    question: "8. Can learning difficulties affect school performance?",
    answer: "Yes. Learning difficulties can influence a child's ability to understand lessons, complete assignments, retain information and participate effectively in classroom activities. Children may experience challenges in reading, writing, comprehension, memory, organization or task completion. These difficulties can sometimes affect confidence and motivation in school settings. However, school performance alone does not define a child's abilities or potential. Understanding learning strengths and challenges helps families create more effective strategies that support both academic development and overall wellbeing.",
  },
  {
    question: "9. Can communication difficulties affect learning?",
    answer: "Yes. Communication plays an important role in learning. Children often rely on communication skills to understand instructions, ask questions, express ideas and participate in educational activities. Difficulties with language understanding, expressive communication or social communication can sometimes influence learning experiences. Communication challenges may affect classroom participation, comprehension and confidence. Looking at communication and learning together often provides a clearer understanding of a child's developmental profile and support needs.",
  },
  {
    question: "10. Can learning disabilities be overcome?",
    answer: "Every child is unique, and developmental outcomes vary from one child to another. Many children with learning difficulties continue developing important skills and making meaningful progress over time when they receive appropriate guidance, support and opportunities for learning. Rather than focusing only on whether learning difficulties can be completely overcome, it is often more helpful to understand the child's strengths, challenges and individual learning style. A structured developmental approach can help children build confidence, develop skills and reach their potential while supporting long-term growth and participation.",
  },
  {
    question: "11. How can parents support learning and attention development at home?",
    answer: "Parents play an important role in supporting learning and attention development through everyday interactions and routines. Creating a structured environment, maintaining consistent schedules, encouraging reading, engaging in meaningful conversations and providing opportunities for learning through play can support developmental growth. Breaking tasks into smaller steps, reducing unnecessary distractions and offering positive encouragement may also help children remain engaged during learning activities. Every child learns differently, so understanding individual strengths and challenges helps parents provide support that matches the child's developmental needs and learning style.",
  },
  {
    question: "12. What activities can help improve attention and learning skills?",
    answer: "Many everyday activities can support attention and learning development. Reading together, storytelling, puzzles, memory games, creative activities, problem-solving tasks and interactive learning experiences can encourage concentration and cognitive engagement. Activities that involve listening, following instructions, turn-taking and communication may also support attention and learning skills. The goal is not simply to improve academic performance but to encourage curiosity, participation and developmental growth. Activities should be adapted according to the child's age, interests and developmental profile to create meaningful learning experiences.",
  },
  {
    question: "13. When should parents seek help for learning and attention difficulties?",
    answer: "Parents may consider seeking guidance when learning or attention challenges begin affecting school performance, daily functioning, confidence or participation in age-appropriate activities. Persistent difficulties with concentration, memory, academic progress, task completion or following instructions may indicate the need for a deeper developmental understanding. Seeking support does not mean something is necessarily wrong with the child. Instead, it provides families with greater clarity regarding developmental strengths, challenges and practical strategies that may support long-term learning and growth.",
  },
  {
    question: "14. What is the Neuro-Ayurveda Development System?",
    answer: "The Neuro-Ayurveda Development System is a structured framework developed by Dr. Ankush Garg to help families better understand developmental, behavioural and mental wellness concerns. The system focuses on five interconnected pillars: Brain Nourishment System, Gut Response System, Neural Network System, Sensory Integration System and Behaviour Guidance System. Together, these pillars provide a broader developmental perspective that helps families understand learning, attention, communication, behaviour, emotional wellbeing and overall development. The goal is to create a structured roadmap that supports long-term developmental understanding and family guidance.",
  },
  {
    question: "15. How does Manovaidya assess and support children with learning and attention difficulties?",
    answer: "At Manovaidya, learning and attention assessment focuses on understanding the child as a whole rather than evaluating academic performance alone. The assessment process may include developmental history, attention abilities, learning patterns, communication skills, behaviour observations, school-related concerns and parent feedback. Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child's individual needs. Support focuses on developmental understanding, parent guidance, progress monitoring and long-term family support through the Neuro-Ayurveda Development System. The goal is to help children build confidence, strengthen learning participation and support overall developmental growth.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function LearningAttentionDifficultiesIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "learning-attention-martel-font";
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
          name: "Learning & Attention Difficulties Support in India",
          description:
            "Learning assessment, attention support and child development guidance through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/learning-attention-difficulties-india`,
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
            { "@type": "ListItem", position: 3, name: "Learning & Attention Difficulties Support in India", item: `${window.location.origin}/learning-attention-difficulties-india` },
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

    const scriptId = "learning-attention-schema";
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
        title="Learning & Attention Difficulties Support in India | Child Learning Assessment | Manovaidya"
        description="Looking for support for learning and attention difficulties in children? Learn about child learning assessment, attention development and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
        keywords="Learning Difficulties Treatment in India, Attention Problems in Children, Child Learning Assessment, Academic Development Guidance, Learning Difficulties vs Attention Difficulties, Memory Difficulties in Children, Concentration Problems in Children, Poor School Performance, ADHD vs Learning Disability, Neuro-Ayurveda Development System, Learning Support in India, Parent Guidance for Learning Difficulties, Dr. Ankush Garg, Child Learning Specialist Delhi NCR, Academic Performance Concerns"
        path="/learning-attention-difficulties-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Learning & Attention Difficulties Support in India",
          "description": "Looking for support for learning and attention difficulties in children? Learn about child learning assessment, attention development and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
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
                <span className="text-[#4b345d]">Learning & Attention</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Learning & Attention Difficulties Support in India</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Learning Assessment, Attention Support & Child Development Guidance
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Learning & Attention Difficulties Support in India
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Learning Assessment
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
                  alt="Child studying with parent support and positive learning environment"
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

          <section id="what-are-learning-difficulties" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What are Learning & Attention Difficulties?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Learning and attention difficulties refer to challenges that may affect a child's ability to concentrate, process information, remember concepts, follow instructions or perform academic tasks effectively.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              These challenges can vary significantly from one child to another.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may struggle primarily with attention and focus, while others may experience difficulties with learning, comprehension, memory or task completion.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding these challenges requires looking beyond school performance and considering the child's overall developmental profile.
            </p>
          </section>

          <section id="learning-vs-attention" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Learning Difficulties vs Attention Difficulties</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Some children struggle primarily with learning new concepts, while others experience difficulties maintaining attention and focus. Although these concerns can occur together, they are not always the same. Understanding the difference helps families identify the most appropriate developmental support and guidance.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Learning & Attention Difficulties</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Parents may notice concerns such as:</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {signGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <h3 className="text-[15px] font-black text-[#21142d]">{group.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] font-bold leading-5 text-[#51465a]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="beyond-academics" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">Understanding Learning Beyond Academics</h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  One of the most common misconceptions is that learning difficulties are only related to intelligence.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-0 lg:flex-1">
                {learningInfluences.map((item) => (
                  <div key={item} className="flex min-h-[86px] flex-col items-center justify-start text-center">
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                      <BookOpen className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="max-w-[116px] text-[11px] font-black leading-4 text-[#3b2e45]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              In reality, learning is influenced by many developmental factors.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A child may be intelligent and capable while still struggling with attention, memory, processing speed, emotional regulation or communication.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, learning challenges are understood through a broader developmental framework rather than focusing only on academic performance.
            </p>
            <img
              src={signsImage}
              alt="Child engaged in learning and concentration activities"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">Learning & Attention Assessment at Manovaidya</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">Every child has a unique learning profile.</p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                Assessment focuses on understanding the child as a whole rather than evaluating academic performance alone.
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
                The goal is to provide families with greater clarity regarding learning strengths, challenges and support needs.
              </div>
            </div>
            <img
              src={supportFamilyImage}
              alt="Doctor discussing learning concerns with parents"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="learning-support" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Learning Difficulties Treatment in India</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many families searching for Learning Difficulties Treatment in India are looking for practical ways to help their child succeed academically and developmentally.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Learning challenges may be influenced by:</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportFactors.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <BookOpen className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Support focuses on understanding these interconnected factors and helping families create a structured developmental plan that supports learning and growth.
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
              At Manovaidya, learning and attention support is guided by the Neuro-Ayurveda Development System developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">The framework focuses on five interconnected pillars:</p>
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
              Together, these pillars provide a structured framework for understanding learning and developmental growth.
            </p>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Learning & Attention Difficulties</h2>
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
              Every child receives individualized guidance based on developmental needs and learning profile.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Learning challenges often affect the entire family.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Parents may experience:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parent guidance helps families better understand learning patterns and developmental influences while supporting long-term growth and confidence.
            </p>
            <img
              src={supportFamilyImage}
              alt="Parent helping child with learning activities"
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
              Support begins with understanding the child's developmental profile, learning patterns, communication abilities, behaviour and family concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Based on this understanding, families receive personalized guidance and a structured developmental roadmap.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors influencing learning, attention and overall development.
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
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India connect with Manovaidya for Learning Difficulties Treatment, Attention Assessment and Child Development Guidance.
            </p>
            <p className="mt-3 text-[14px] font-bold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon, Faridabad, NCR and across India connect with Manovaidya for Learning Difficulties Treatment, Attention Assessment and Child Development Guidance.
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
                  If you are looking for support for learning difficulties, attention challenges, academic concerns or developmental guidance, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  Through a structured assessment and personalized guidance process, families can gain a clearer understanding of learning patterns, developmental needs and appropriate next steps for long-term growth and development.
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
              Get a personalized learning and attention support plan for your child.
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
                Subscribe to expert articles, learning guidance and Manovaidya updates.
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

export default LearningAttentionDifficultiesIndiaPage;

