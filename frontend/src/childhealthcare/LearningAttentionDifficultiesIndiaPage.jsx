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
  "Every child learns in their own unique way. Some children quickly grasp new concepts, follow directions, and adjust to educational expectations, while others may face difficulties with focus, attention, memory, learning pace, or overall academic success.",
  "Many parents are concerned when a child has trouble paying attention, forgets things easily, struggles to finish tasks, falls behind in school, or needs repeated instructions to understand ideas. These difficulties can affect the child's confidence, learning, emotional health and overall growth.",
  "At Manovaidya, we ensure that learning and attention challenges are understood through a comprehensive child developmental assessment approach rather than being considered as separate academic issues. Learning is closely linked with attention, communication, emotional health, behaviour, sensory integration, and overall developmental preparedness.",
  "Parents seeking help for children's learning challenges, attention difficulties, educational assessments, or academic progress often need clear understanding, organized support, and guidance for their child's long-term development.",
];

const signGroups = [
  {
    title: "What things are involved in Difficulty with focus?",
    items: ["Limited attention span", "Attention gets easily diverted", "Struggling to finish tasks", "Tends to jump between tasks"],
  },
  {
    title: "What components are present with learning difficulties?",
    items: ["Difficulty in processing new ideas", "Gradual leaning process", "Needs frequent repitition", "Academic challenges"],
  },
  {
    title: "What memorizing difficulties does a child face?",
    items: ["Short term memory challenges", "Trouble remembering directions", "Reduced ability to retain concepts"],
  },
  {
    title: "What academic concern does a child have regarding learning?",
    items: [
      "Struggles with assignments",
      "Lack of organizing skills",
      "Limited participation in class activities",
      "Decline in academic performance",
      "Academic struggles",
      "Learning challenges",
      "Difficulty concentrating in studies",
    ],
  },
  {
    title: "What are the Behaviour challenges a child gets During Learning?",
    items: ["Challenges with learning", "Procrastination and avoiding schoolwork", "Lack of confidence in learning academic abilities", "Concerns regarding academic performance"],
  },
];

const learningInfluences = [
  "Concentration problems in children",
  "Communication and expressive skills",
  "Emotional health",
  "Behavioural tendencies",
  "Sensory functioning",
  "Readiness for learning",
  "Social communication",
];

const assessmentGroups = [
  {
    title: "What does growth and development history contain?",
    Icon: CalendarCheck,
    items: ["Early childhood development", "Learning characteristics", "Educational concerns", "Parental insights"],
  },
  {
    title: "What challenges does the learner experience in understanding, processing, and applying new concepts?",
    Icon: BookOpen,
    items: ["Attention characteristics", "Memorizing capabilities", "Interaction skills", "Learning capacity", "Learning approach and habits"],
  },
];

const supportFactors = [
  "Concentration problem in children",
  "Interaction difficulties",
  "Behavioral patterns and responses",
  "Emotional health",
  "Developmental progress by age",
  "External factors",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports the assessment and understanding of cognitive development, learning processes, and attention patterns.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Addresses overall health, wellbeing, and developmental progress.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand learning ability, memory, growth and development.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Helps in identifying how sensory experiences affect focus and educational outcomes.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families in recognising how behavioural patterns may impeach their academic performances.",
  },
];

const supportPoints = [
  "Learning Assessment",
  "Understanding attention",
  "Developmental Planning",
  "Parental support",
  "School learning readiness",
  "Communication growth skills",
  "Tracking progress",
  "On going family support",
];

const parentConcerns = [
  "Learning patterns",
  "Developmental factors",
  "Confidence building",
  "Growth over time",
];

const howWeWorkSteps = [
  { title: "Learning Assessment", desc: "Deeper understanding of child's profile", Icon: Brain },
  { title: "Identifying learning difficulty patterns", desc: "Figuring out the areas where child feels difficulty in learning", Icon: BookOpen },
  { title: "Customized plan", desc: "A proper framework is created to ensure long term development", Icon: Activity },
  { title: "Proper support and guidance to parents", desc: "Helps in building family confidence", Icon: Users },
  { title: "Monitoring sustainable progress for long run", desc: "Tracking long term growth performance", Icon: CalendarCheck },
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System Approach",
  "Personal learning & growth analysis",
  "Child led and family supported model",
  "Supporting the learning skills, concentration and overall development",
  "Ongoing support and progress tracking",
  "Personalized Growth Planning",
  "Empathetic and systematic guidance",
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
    question: "What are the learning and attention difficulties?",
    answer: "Learning and attention difficulties are challenges that may affect a child's ability to focus, understand, remember, and complete tasks. They can influence academic performance, confidence, and daily activities. Each child's needs are different, and understanding their development helps identify suitable support.",
  },
  {
    question: "What are the early signs of learning difficulties in children?",
    answer: "Early signs of learning difficulties in children may include trouble understanding concepts, needing repeated instructions, poor memory, slow academic progress, difficulty recognizing letters or numbers, and avoiding challenging tasks. Early identification helps families understand a child's needs and provide suitable support.",
  },
  {
    question: "What are the common signs of attention difficulties in children?",
    answer: "Children with attention difficulties may have trouble focusing, get distracted easily, forget instructions, or find it hard to complete tasks. These challenges can affect learning, participation, organization, and daily activities. Understanding these difficulties helps families provide the right support for children's growth and development.",
  },
  {
    question: "What is the difference between a learning disability and ADHD?",
    answer: "A learning disability affects how a child understands and uses information, while ADHD mainly affects attention, focus, impulsivity, and self-control. Though they can occur together, they are different. A child with ADHD may understand concepts but struggle to focus, whereas a child with a learning disability may find specific skills difficult. Learning Assessment for children helps identify strengths, challenges, and support needs.",
  },
  {
    question: "Do learning disabilities affect intelligence?",
    answer: "No. Learning disabilities do not mean a child has low intelligence. Many children with learning difficulties have average or above-average intelligence but learn in different ways. Problems with reading, writing, memory, or attention do not define a child's abilities. Every child has unique strengths, and the right support can help them grow and succeed.",
  },
  {
    question: "Why does my child struggle to focus on studies?",
    answer: "Difficulty focusing on studies can happen due to many reasons, such as attention problems, learning difficulties, stress, communication issues, lack of readiness, or distractions. Some children may struggle to concentrate for a long time, while others may have trouble understanding the material. Poor focus is not always a sign of laziness or lack of interest. Identifying the causes of learning difficulties can help families provide better support for learning and development.",
  },
  {
    question: "Why does my child forget things so quickly?",
    answer: "Children may forget things for many reasons, such as trouble paying attention, learning difficulties, stress, or not fully understanding the information. Sometimes, children seem forgetful because they were not focused when learning. Memory depends on attention, learning, and development. Understanding a child's learning needs can help families know if forgetfulness is normal or if extra support is needed.",
  },
  {
    question: "Can learning difficulties affect school performances?",
    answer: "Yes. Learning difficulties can make it harder for children to understand lessons, complete work, remember information, and take part in class activities. They may struggle with reading, writing, memory, or organization, which can affect confidence. Understanding their strengths and challenges helps families provide the right support for learning and growth.",
  },
  {
    question: "Can communication difficulties affect learning?",
    answer: "Yes. Communication is important for learning. Children use it to understand instructions, ask questions, share ideas, and join activities. Communication difficulties may affect learning, participation, and confidence. Understanding these needs helps provide the right support.",
  },
  {
    question: "Can learning abilities be improved or developed over time?",
    answer: "Every child is unique and develops at their own pace. With proper support and guidance, children with learning difficulties can build skills, gain confidence, and make steady progress while reaching their potential.",
  },
  {
    question: "How can parents support learning and attention development at home?",
    answer: "Parents support children's learning and attention development through daily routines, guidance, and encouragement. Understanding a child's strengths and challenges helps parents provide the right support for their growth and learning style.",
  },
  {
    question: "What activities can help in improving attention and learning skills?",
    answer: "Everyday activities can help improve a child's attention and learning skills. Reading, storytelling, puzzles, memory games, creative play, problem-solving activities and interactive tasks can support focus, thinking and communication. These activities encourage curiosity, participation and growth. They should be planned according to the child's age, interests and developmental needs.",
  },
  {
    question: "When should parents seek help for learning and attention difficulties?",
    answer: "Parents may consider seeking support when learning or attention challenges begin to affect their child's schoolwork, daily activities, confidence, or enjoyment of age-appropriate tasks. Guidance can help families better understand their child's strengths, needs, and ways to support their growth and learning.",
  },
  {
    question: "What is the Neuro Ayurveda Development system?",
    answer: "The Neuro-Ayurveda Development System, developed by Dr. Ankush Garg, helps families better understand their child's development, behaviour, and emotional wellbeing. It focuses on five key areas: Brain Nourishment, Gut Response, Neural Network, Sensory Integration, and Behaviour Guidance. Together, these areas help parents understand their child's learning, attention, communication, emotions, and overall growth. The system provides a simple and structured approach to guide families in supporting their child's development.",
  },
  {
    question: "How does Manovaidya assess and support children with learning and attention difficulties?",
    answer: "At Manovaidya, learning and attention assessments focus on understanding the child's overall development, including learning patterns, attention, communication, behaviour, and parent concerns. Families receive personalized guidance and a structured plan to support confidence, learning, and long-term development through the Neuro-Ayurveda Development System.",
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
          name: "Learning and Attention Support Services in India",
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
            { "@type": "ListItem", position: 3, name: "Learning and Attention Support Services in India", item: `${window.location.origin}/learning-attention-difficulties-india` },
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
        title="Learning and Attention Support Services in India | Child Learning Assessment | Manovaidya"
        description="Looking for support for learning and attention difficulties in children? Learn about child learning assessment, attention development and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
        keywords="Learning Difficulties Treatment in India, Attention Problems in Children, Child Learning Assessment, Academic Development Guidance, Learning Difficulties vs Attention Difficulties, Memory Difficulties in Children, Concentration Problems in Children, Poor School Performance, ADHD vs Learning Disability, Neuro-Ayurveda Development System, Learning Support in India, Parent Guidance for Learning Difficulties, Dr. Ankush Garg, Child Learning Specialist Delhi NCR, Academic Performance Concerns"
        path="/learning-attention-difficulties-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Learning and Attention Support Services in India",
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
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Learning and Attention Support Services in India</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Learning Assessment, Attention Support & Child Development Guidance
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Learning and Attention Support Services in India
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Learning Assessment
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
              Learning and attention difficulties are challenges that can make it harder for a child to focus, understand information, remember things, follow instructions, or complete schoolwork.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              These challenges are different for every child.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may have trouble paying attention and staying focused, while others may find it difficult to learn, understand, remember, or complete tasks.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              To understand these challenges, it is important to look beyond school achievement and take into account the child's overall development.
            </p>
          </section>

          <section id="learning-vs-attention" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">What is the difference between learning difficulties and attention difficulties?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Some children may find it harder to understand and learn new things, while others may struggle with staying focused and paying attention. Sometimes these challenges can happen together, but they are not always the same. Knowing the difference can help families understand their child's needs and choose the right support to help them grow and succeed.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What are the Common Signs of Learning & Attention Difficulties?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Parents may observe some signs such as</p>
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
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How do you understand learning beyond academic achievement?</h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  One of the most common myths is that learning difficulties are determined only by intelligence.
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
              Learning depends on more than intelligence alone. A child may be intelligent and capable but still face challenges with focus, memory, processing information, managing emotions, or communicating effectively.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, learning challenges are understood as part of overall development, rather than only academic performance.
            </p>
            <img
              src={signsImage}
              alt="Child engaged in learning and concentration activities"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">What is the Learning & Attention Assessment at Manovaidya?</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">Every child has an Individual learning profile.</p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                Assessment emphasizes a holistic understanding of the child rather than solely measuring academic performance.
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">The assessment process may consist of:</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                The aim is to provide families with a clearer understanding of learning abilities, challenges, and needed support.
              </div>
            </div>
            <img
              src={supportFamilyImage}
              alt="Doctor discussing learning concerns with parents"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="learning-support" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">What are the treatment options for learning difficulties in India?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many families searching for learning support in India want practical solutions to help their child learn and grow.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">What are the Factors affecting learning challenges?</p>
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
              Support helps children and parents understand these areas and work together to create a simple plan that encourages learning, growth, and development.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <h2 className="text-[20px] font-black text-[#17111f]">How does the Neuro-Ayurveda Development System work?</h2>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, learning and attention support is based on the Neuro-Ayurveda Development System by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">The framework comprises five interconnected core pillars:</p>
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
              Collectively, these pillars provide a structured foundation for exploring learning and personal growth.
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
              Every child gets personalized support based on their learning needs and abilities.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How do we provide support to parents and families at Manovaidya?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">Learning difficulties often impact the whole family.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Parents receive guidance for:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parents receive guidance to better understand learning patterns and developmental factors while helping children build confidence and grow over time.
            </p>
            <img
              src={supportFamilyImage}
              alt="Parent helping child with learning activities"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How do we work at Manovaidya to help children with learning difficulties?</h2>
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
              Meaningful support begins with a deep understanding of the child's development, learning processes, communication abilities, behaviour, and family concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              By Using this approach, families receive customized guidance and a structured plan for development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Manovaidya uses the Neuro-Ayurveda Development System to help parents understand their child's unique needs and the factors that affect learning, attention, and overall growth.
            </p>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why do Families choose Manovaidya for improving the learning needs of their child?</h2>
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
              Parents from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon, Faridabad, NCR, and across India connect with Manovaidya for compassionate support with Learning Difficulties, Attention Assessment, and Child Development Guidance.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr. Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Autism, ADHD, Child Development & Mental Health Specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the founder of Manovaidya and introduced the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His main focus is on Autism Spectrum Disorder (ASD), ADHD, child development, speech and communication challenges, behavioural issues, learning difficulties, teen mental health, adult mental wellbeing, women's emotional health, and senior mental health support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  With the help of thoughtful learning assessment for children evaluation, tailored guidance, and compassionate family support, he helps families gain a clearer understanding of developmental concerns and move ahead with confidence and reassurance.
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
                <h2 className="text-[24px] font-black">Schedule a Consultation</h2>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  If you or your child need guidance with learning difficulties, attention concerns, academic struggles, or developmental support, you can book a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  Through a supportive learning assessment for children and personalized guidance journey, families can better recognize individual learning strengths, developmental needs, and meaningful next steps for growth in the long run.
                </p>
                <a
                  href="tel:+917823838638"
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Contact us now
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
