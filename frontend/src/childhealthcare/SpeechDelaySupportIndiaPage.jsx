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
import childHeroImage from "../images/speech-delay-support-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Speech Delay?", id: "what-is-speech-delay" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Beyond Speech", id: "beyond-speech" },
  { label: "Assessment", id: "assessment" },
  { label: "Looking Beyond Words", id: "looking-beyond-words" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "How We Work", id: "how-we-work" },
  { label: "Parent Guidance", id: "parent-guidance" },
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
  { label: "Parenting", count: 9, Icon: Users },
  { label: "Mental Health", count: 13, Icon: HeartHandshake },
];

const introParagraphs = [
  "Many parents begin to worry when their child is not speaking as expected, uses very few words, struggles to express needs or finds it difficult to communicate effectively with others.",
  "Every child develops at a different pace. However, when communication milestones are significantly delayed or a child experiences persistent difficulties in understanding, expressing or using language, parents often start searching for answers, guidance and support.",
  "At Manovaidya, Speech Delay and Communication Challenges are understood through a broader developmental perspective. Communication development is closely connected with attention, learning, behaviour, social interaction, sensory processing and overall child development.",
  "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda Development System designed to help families better understand developmental needs and create a clear roadmap for communication growth and overall development.",
  "Whether parents are searching for Speech Delay Treatment in India, Communication Development Support, Child Development Guidance or developmental assessment, Our approach also focuses on supporting overall Child Development, communication growth, learning readiness and social interaction through a structured developmental framework.",
];

const speechDelayNotices = [
  "Limited vocabulary for age",
  "Delayed first words",
  "Difficulty combining words into sentences",
  "Reduced response during conversations",
  "Challenges expressing needs and emotions",
  "Difficulty following verbal instructions",
  "Limited social communication",
];

const signGroups = [
  {
    title: "Speech Development Concerns",
    items: ["Delayed first words", "Limited vocabulary", "Difficulty forming sentences", "Unclear speech", "Difficulty pronouncing words"],
  },
  {
    title: "Language Understanding Challenges",
    items: ["Difficulty understanding instructions", "Reduced response during conversations", "Challenges following verbal directions", "Difficulty understanding questions"],
  },
  {
    title: "Social Communication Challenges",
    items: ["Limited eye contact during communication", "Difficulty initiating conversations", "Reduced interaction with peers", "Difficulty expressing needs and emotions"],
  },
  {
    title: "Communication Confidence Concerns",
    items: ["Frustration while trying to communicate", "Avoiding conversations", "Difficulty participating in group interactions", "Reduced confidence during communication"],
  },
];

const beyondSpeechItems = [
  "Understanding language",
  "Expressing thoughts",
  "Sharing emotions",
  "Responding to others",
  "Participating in conversations",
  "Social interaction",
  "Non-verbal communication",
];

const assessmentGroups = [
  {
    title: "Developmental History",
    Icon: CalendarCheck,
    items: ["Early milestones", "Communication development", "Behaviour patterns", "Learning profile", "Parent observations"],
  },
  {
    title: "Communication Assessment",
    Icon: MessageCircle,
    items: ["Expressive communication", "Receptive communication", "Social communication", "Language understanding", "Communication confidence"],
  },
  {
    title: "Developmental Understanding",
    Icon: Brain,
    items: ["Attention profile", "Behaviour patterns", "Learning readiness", "Sensory responses", "Social interaction abilities"],
  },
];

const supportFactors = [
  "Developmental readiness",
  "Attention abilities",
  "Learning patterns",
  "Social interaction",
  "Sensory processing",
  "Emotional regulation",
  "Communication confidence",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of factors influencing communication, learning and cognitive development.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on overall wellbeing and developmental functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand communication, learning and developmental readiness.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences that may affect communication and participation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand communication-related behaviours and interaction patterns.",
  },
];

const supportPoints = [
  "Communication Development",
  "Language Understanding",
  "Social Communication Skills",
  "Parent Guidance",
  "Developmental Planning",
  "Behaviour Understanding",
  "Progress Monitoring",
  "Long-Term Family Support",
];

const howWeWorkSteps = [
  { title: "Assessment", desc: "Understand your child in-depth", Icon: Brain },
  { title: "Understanding", desc: "Identify communication needs", Icon: Search },
  { title: "Personalised Plan", desc: "Create an individualized roadmap", Icon: Activity },
  { title: "Parent Guidance", desc: "Support family confidence", Icon: Users },
  { title: "Progress Tracking", desc: "Monitor long-term growth", Icon: CalendarCheck },
];

const parentConcerns = [
  "Confusion",
  "Frustration",
  "Anxiety about the future",
  "Comparison with other children",
  "Difficulty understanding developmental milestones",
];

const parentGuidanceItems = [
  "Communication encouragement strategies",
  "Developmental understanding",
  "Daily communication opportunities",
  "Behaviour and interaction patterns",
  "Long-term developmental planning",
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Developmental Assessment",
  "Child-Centred & Family-Centred Approach",
  "Communication & Child Development Focus",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india" },
  { title: "ADHD Treatment in India", href: "/child-health-care/adhd-child" },
  { title: "Child Development Treatment", href: "/child-health-care" },
  { title: "Behavioural Concerns in Children", href: "/child-health-care/behavioural-concerns-children-india" },
  { title: "Learning & Attention Difficulties", href: "/child-health-care/learning-attention-difficulties-india" },
];

const internalLinks = [
  { title: "Learn more about Autism Treatment in India.", href: "/autism-treatment-india" },
  { title: "Explore ADHD Treatment in India.", href: "/child-health-care/adhd-child" },
  { title: "Explore our Child Development Support Programs.", href: "/child-health-care" },
  { title: "Know more about Dr. Ankush Garg.", href: "/about/doctor" },
  { title: "Understand the Neuro-Ayurveda Development System.", href: "/about/neuro-ayurveda" },
];

const faqs = [
  {
    question: "1. What is speech delay in children?",
    answer: "Speech delay in children refers to a situation where a child develops speech and language skills later than expected for their age. Some children may have difficulty speaking words, combining words into sentences or expressing their needs clearly. Every child develops at a different pace, but persistent delays in communication milestones may indicate the need for further developmental understanding. Speech development is not only about speaking words; it also involves understanding language, expressing thoughts and participating in social communication. At Manovaidya, speech delay is understood through a broader developmental perspective that considers communication, learning, behaviour, attention and overall child development.",
  },
  {
    question: "2. At what age should a child start talking?",
    answer: "Children typically begin using their first meaningful words around the end of the first year of life, although developmental timelines can vary. As children grow, vocabulary and communication skills generally continue expanding through toddlerhood and early childhood. Some children may develop language slightly earlier or later than others. Parents should focus on overall communication development rather than comparing milestones with other children. If there are concerns regarding speech, language understanding or communication skills, a structured developmental assessment can help families better understand their child's communication profile and support needs.",
  },
  {
    question: "3. What are the early signs of speech delay?",
    answer: "Early signs of speech delay may include limited babbling, delayed first words, difficulty combining words into simple phrases, reduced response during communication and challenges expressing needs verbally. Some children may also have difficulty following verbal instructions or participating in age-appropriate communication. Every child develops differently, so occasional delays do not automatically indicate a significant concern. However, when communication milestones remain consistently delayed over time, families may benefit from a developmental assessment to better understand communication strengths, challenges and future support needs.",
  },
  {
    question: "4. How can I tell if my child has a speech delay?",
    answer: "Parents may notice signs such as limited vocabulary, delayed speech milestones, difficulty expressing needs, reduced participation in conversations or challenges understanding and using language. Some children may understand language well but struggle to express themselves, while others may experience challenges with both understanding and communication. The best way to gain clarity is through a structured developmental assessment that looks at communication, language understanding, social interaction and overall development. Understanding the complete developmental picture often helps families make more informed decisions regarding support and guidance.",
  },
  {
    question: "5. What causes speech delay in children?",
    answer: "Speech delay can be influenced by a variety of developmental factors, and the reasons may differ from one child to another. Communication development is closely connected with learning, attention, hearing abilities, social interaction, developmental readiness and overall child development. In some cases, speech delay may occur as an isolated concern, while in others it may be associated with broader developmental challenges. Understanding the factors influencing communication development requires a comprehensive developmental perspective. A structured assessment can help families better understand their child's communication profile and identify appropriate support strategies.",
  },
  {
    question: "6. Is speech delay always a sign of autism?",
    answer: "No. Speech delay is not always a sign of autism. Many children may experience speech delay without having Autism Spectrum Disorder (ASD). Communication development can be influenced by a variety of factors, including developmental readiness, hearing abilities, language exposure and individual developmental differences. While some children with autism may experience speech and communication challenges, not every child with speech delay has autism. This is why it is important to understand the child's overall developmental profile rather than focusing on speech alone. A structured developmental assessment can help families gain greater clarity regarding communication needs and developmental patterns.",
  },
  {
    question: "7. Can a child have speech delay without autism?",
    answer: "Yes. A child can experience speech delay without having autism. Some children may simply develop speech and language skills later than their peers, while others may have communication challenges related to hearing, developmental readiness or language development. Every child's developmental journey is unique. Speech delay should be understood within the context of the child's overall communication abilities, social interaction, learning patterns and developmental progress. A comprehensive developmental assessment helps families understand whether speech delay is occurring independently or alongside other developmental concerns.",
  },
  {
    question: "8. What is the difference between speech delay and language delay?",
    answer: "Speech delay and language delay are related but different concerns. Speech delay generally refers to difficulty producing sounds, words or spoken communication, while language delay refers to challenges understanding language, expressing thoughts or using language meaningfully. A child with speech delay may understand language well but struggle to speak clearly. A child with language delay may experience difficulties both understanding and expressing communication. Understanding the difference is important because communication development involves much more than spoken words alone. A structured assessment can help identify the child's specific communication strengths and challenges.",
  },
  {
    question: "9. Can a child with speech delay catch up?",
    answer: "Many children with speech delay continue developing communication skills as they grow older. Progress varies from one child to another and depends on factors such as developmental readiness, communication abilities, family support and individualized guidance. Some children may catch up quickly, while others may require ongoing developmental support over time. Rather than focusing only on age-based expectations, it is often more helpful to understand the child's overall communication profile and developmental needs. Early understanding and structured support can help families create a clearer roadmap for communication growth and participation.",
  },
  {
    question: "10. Will my child ever speak normally?",
    answer: "This is one of the most common concerns parents have when their child experiences speech delay. Every child's communication journey is unique, and developmental progress can vary significantly from one child to another. Many children continue developing speech, language and communication skills throughout childhood. Communication growth is influenced by a variety of developmental factors, including language understanding, social interaction, learning readiness and communication opportunities. Instead of focusing only on future predictions, it is often more helpful to understand the child's current communication profile and identify practical steps that support ongoing development and communication growth.",
  },
  {
    question: "11. How can parents help a child with speech delay at home?",
    answer: "Parents play an important role in supporting communication development at home. Simple everyday interactions such as talking with the child, reading books together, describing daily activities and encouraging communication during play can create valuable learning opportunities. It is often helpful to give children time to respond rather than speaking for them immediately. Positive encouragement, patience and consistent communication opportunities can support confidence and participation. Every child develops differently, so families should focus on creating a supportive environment rather than comparing progress with other children. A structured developmental understanding can help parents identify strategies that match their child's communication needs.",
  },
  {
    question: "12. What activities help speech development?",
    answer: "Many everyday activities can support communication growth and language development. Reading storybooks, singing songs, engaging in pretend play, naming objects, describing actions and encouraging interactive conversations may help children build communication skills. Activities that promote eye contact, turn-taking and social interaction can also support communication development. The goal is not simply to increase vocabulary but to encourage meaningful communication and participation. Since every child has unique strengths and challenges, activities should be adapted according to the child's developmental profile, interests and communication abilities.",
  },
  {
    question: "13. Does screen time affect speech development?",
    answer: "Excessive screen exposure may influence communication opportunities, social interaction and language learning experiences. Young children often learn communication through real-world interactions, conversations and shared experiences with caregivers and family members. When screen time replaces these opportunities, communication development may be affected. However, screen time alone is not always the sole reason for speech delay. Communication development is influenced by multiple developmental factors. Maintaining a balanced routine that includes conversation, play, social interaction and age-appropriate learning experiences can support healthy communication growth and overall development.",
  },
  {
    question: "14. How does Manovaidya assess speech and communication development?",
    answer: "At Manovaidya, communication assessment focuses on understanding the child as a whole rather than evaluating speech alone. The assessment process may include developmental history, communication milestones, language understanding, expressive communication abilities, social interaction patterns, learning readiness and parent observations. Communication is closely connected with attention, behaviour, learning and overall development, which is why assessment looks beyond isolated symptoms. The goal is to provide families with greater clarity regarding their child's communication profile, developmental strengths and support needs while creating a structured roadmap for future guidance.",
  },
  {
    question: "15. How does Manovaidya support children with speech and communication challenges?",
    answer: "Manovaidya follows a structured Neuro-Ayurveda Development System that focuses on understanding communication development through a broader developmental perspective. Support may include developmental assessment, communication understanding, parent guidance, developmental planning, progress monitoring and long-term family support. Rather than focusing only on speech output, the approach considers communication, learning, social interaction, behaviour, emotional wellbeing and overall child development together. Every child receives individualized guidance based on their developmental profile and communication needs. The goal is to help families move forward with greater confidence, clarity and a structured developmental roadmap.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function SpeechDelaySupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "speech-delay-martel-font";
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
          name: "Speech Delay Treatment in India",
          description:
            "Speech development assessment, communication guidance and child development support through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/speech-delay-support-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "Person",
          name: "Dr. Ankush Garg",
          jobTitle: "Autism, ADHD, Child Development & Mental Health Specialist",
          worksFor: {
            "@type": "MedicalOrganization",
            name: "Manovaidya",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Health Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Speech Delay Treatment in India", item: `${window.location.origin}/speech-delay-support-india` },
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

    const scriptId = "speech-delay-support-schema";
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
        title="Speech Delay Treatment in India | Communication Development & Assessment | Manovaidya"
        description="Looking for Speech Delay Treatment in India? Learn about communication development, speech assessment and child development support through the Neuro-Ayurveda Development System at Manovaidya."
        keywords="Speech Delay Treatment in India, Communication Development Support, Child Speech Assessment, Language Delay in Children, Early Signs of Speech Delay, Speech Delay vs Language Delay, Social Communication Challenges, Non-verbal Communication in Children, Neuro-Ayurveda Development System, Speech Development Guidance India, Parent Guidance for Speech Delay, Autism and Speech Delay, Dr. Ankush Garg, Child Development Clinic Delhi NCR, Communication Confidence in Children"
        path="/speech-delay-support-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Speech Delay Treatment in India",
          "description": "Looking for Speech Delay Treatment in India? Learn about communication development, speech assessment and child development support through the Neuro-Ayurveda Development System at Manovaidya."
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
                <span className="text-[#4b345d]">Speech Delay</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Speech Delay & Communication treatment in India</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Speech Development Assessment, Communication Guidance & Child Development Support
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Speech Delay & Communication treatment in India
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#book-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]"
                >
                  Book Speech Assessment
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
                  alt="Parent talking with child"
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

          <section id="what-is-speech-delay" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Speech Delay?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Speech Delay refers to a situation where a child develops speech and language skills later than expected for their age.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may understand language well but struggle to express themselves verbally. Others may have difficulties with both understanding and communication.
            </p>
            <h3 className="mt-4 text-[16px] font-black text-[#21142d]">Speech delay can look different in every child.</h3>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Parents may notice:</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {speechDelayNotices.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Communication development is not only about speaking words. It also includes understanding language, expressing thoughts, interacting with others and participating in social communication.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, communication concerns are viewed as part of the child's overall developmental profile rather than as an isolated challenge.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Speech & Communication Challenges</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child develops differently, but some commonly observed signs may include:
            </p>
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
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[13px] font-bold leading-6 text-[#3b2e45]">
                When communication challenges persist over time, a structured developmental assessment may help families better understand the child's strengths, challenges and support needs.
              </p>
            </div>
          </section>

          <section id="beyond-speech" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                  Understanding Communication Beyond Speech
                </h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  One of the biggest misconceptions is that communication means speaking. In reality, communication is much broader.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-0 lg:flex-1">
                {beyondSpeechItems.map((item) => (
                  <div key={item} className="flex min-h-[86px] flex-col items-center justify-start text-center">
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                      <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="max-w-[116px] text-[11px] font-black leading-4 text-[#3b2e45]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may speak words but still struggle with meaningful communication.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Others may have strong understanding but difficulty expressing themselves.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This is why communication development should be understood through a broader developmental lens rather than focusing only on the number of words a child speaks.
            </p>
            <img
              src={signsImage}
              alt="Child communication illustration"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="assessment" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                Speech & Communication Assessment at Manovaidya
              </h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                Every child has a unique communication profile.
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                At Manovaidya, assessment focuses on understanding the child as a whole rather than evaluating speech in isolation.
              </p>
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
                The goal is to help families gain a clearer understanding of their child's communication needs and developmental strengths.
              </div>
            </div>
            <img
              src={supportFamilyImage}
              alt="Doctor and parent discussion"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="looking-beyond-words" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Speech Delay Treatment in India: Looking Beyond Words</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many parents searching for Speech Delay Treatment in India are often looking for ways to help their child speak more words.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              While speech development is important, communication growth often involves much more.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportFactors.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, support focuses on understanding these interconnected developmental factors rather than concentrating only on speech output.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              This broader developmental understanding helps families create a more meaningful roadmap for communication growth and participation.
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
              At Manovaidya, communication development is understood through the Neuro-Ayurveda Development System developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The framework focuses on five interconnected pillars:
            </p>
            <img
              src={neuroDiagramImage}
              alt="5 Pillar Diagram"
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
              Together, these pillars provide a structured developmental perspective for communication growth and child development.
            </p>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Speech & Communication Challenges</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support at Manovaidya begins with understanding the child rather than focusing only on a diagnosis or symptom.
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
              Every child receives individualized guidance based on developmental needs and communication profile.
            </p>
          </section>

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How We Work at Manovaidya</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                A structured, step-by-step process designed for long-term growth and real change.
              </p>
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
              Every child is unique, which is why support at Manovaidya begins with understanding the child as a whole rather than focusing on communication concerns alone.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our process starts with a detailed assessment to understand developmental history, communication abilities, behaviour patterns, learning needs, sensory responses and family concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child's individual needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence communication, behaviour, learning, attention and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support focuses on assessment, parent guidance, developmental planning, progress tracking and long-term family support.
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Communication development is not only the child's journey-it is also a family journey.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Many parents experience:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parent guidance is considered an important part of communication development support.
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
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India connect with Manovaidya for Speech Delay Treatment, Communication Development Guidance and Child Development Support.
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
                  His work focuses on Autism Spectrum Disorder (ASD), ADHD, Speech & Communication Challenges, Child Development, Behavioural Concerns, Teen Mental Health, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through detailed assessment, individualized guidance and family-centred support, he helps families better understand developmental concerns and move forward with greater clarity, confidence and direction.
                </p>
              </div>
            </div>
          </section>

          <section id="related-developmental-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Related Developmental Support Areas</h2>
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
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
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
            <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
              <div className="p-7 lg:p-10">
                <h2 className="text-[24px] font-black">Book a Consultation</h2>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  If you are looking for Speech Delay Treatment in India, Communication Development Guidance, Child Development Assessment or personalized developmental support, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  Through a structured assessment and personalized guidance process, families can gain a clearer understanding of their child's communication needs and explore appropriate next steps for long-term growth and development.
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
              Get a personalized communication development plan for your child.
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
                Subscribe to expert articles, speech development guidance and Manovaidya updates.
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

export default SpeechDelaySupportIndiaPage;

