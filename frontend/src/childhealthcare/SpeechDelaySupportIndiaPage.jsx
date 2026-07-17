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
  "Parents often become concerned if their child is not speaking as expected, uses very few words, has difficulty expressing their needs, or struggles to communicate effectively with others.",
  "Every child grows and develops at their own pace. However, if communication milestones are delayed or a child continues to struggle with understanding, expressing, or using language, parents naturally seek answers, guidance, and support.",
  "At Manovaidya, Speech Delay and Communication disorder is viewed as part of a child's overall growth and development. Communication is closely connected to attention, learning, behaviour, social interaction, and sensory processing.",
  "Led by Dr. Ankush Garg, an expert in Autism, ADHD, child development, and mental health, Manovaidya uses a step-by-step Neuro-Ayurveda Development System to help families understand their child's needs and improve communication and overall development.",
  "Whether parents are searching for Speech Delay Treatment in India, Communication Support, Child Development Support, or a Developmental Assessment, our structured approach helps children develop communication skills, learning readiness, social skills, and overall development.",
];

const speechDelayNotices = [
  "Small vocabulary",
  "Late first words",
  "Trouble making sentences",
  "Fewer responses",
  "Trouble expressing feelings and needs",
  "Trouble understanding spoken directions",
  "Difficulty communicating with others",
];

const signGroups = [
  {
    title: "Speech development challenges",
    items: ["Delayed word acquisition", "Limited expressive vocabulary", "Challenges in sentence formation", "Difficulty in understanding speech", "Challenges with pronounciation"],
  },
  {
    title: "Major challenges involved in understanding spoken language",
    items: ["Difficulty following instructions", "Limited verbal responses", "Difficulty processing spoken instructions", "Trouble understanding questions"],
  },
  {
    title: "Social interaction difficulties",
    items: ["Less eye contact while talking", "Challenges in initiating conversations", "Difficulty interacting with others", "Trouble sharing feelings"],
  },
  {
    title: "Communication confidence issues",
    items: ["Communication struggles", "Avoiding discussions", "Difficulty engaging with others in a group", "Lack of confidence while communicating"],
  },
];

const beyondSpeechItems = [
  "Understanding communication",
  "Sharing ideas",
  "Expressing feelings",
  "Replying to others",
  "Engaging in discussions",
  "Human interaction",
  "Gestures & signals",
];

const assessmentGroups = [
  {
    title: "Growth History",
    Icon: CalendarCheck,
    items: ["Developmental milestones", "Communication skills", "Behavioural characteristics", "Learning", "Parents feedback"],
  },
  {
    title: "Communication Evaluation",
    Icon: MessageCircle,
    items: ["Speaking skills", "Understanding information", "Conversation skills", "Understanding words", "Comfortable in expressing yourself"],
  },
  {
    title: "Understanding growth",
    Icon: Brain,
    items: ["Focus patterns", "Behaviour traits", "Learning potential", "Social skills"],
  },
];

const supportFactors = [
  "Development progress",
  "Concentration skills",
  "Learning behaviours",
  "Social participation",
  "Sensory responses",
  "Managing emotions",
  "Expressing yourself comfortably",
];

const neuroPillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Strengthens understanding of the relationship between communication, learning, and cognitive development",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Addresses overall health, wellbeing, and development.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Enhances understanding of communication skills, learning processes, and developmental milestones.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Encourages understanding of sensory experiences that may affect involvement and communication",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Guides families in exploring communication behaviours and interaction patterns.",
  },
];

const supportPoints = [
  "Speech and language development",
  "Verbal understanding",
  "Conversational skills",
  "Parental guidance and consultation",
  "Development Roadmap",
  "Behaviour assessment",
  "Progress tracking",
  "Long term parental care and family support",
];

const howWeWorkSteps = [
  { title: "Comprehensive assessment", desc: "Gain a deeper understanding of your child’s unique strength and needs", Icon: Brain },
  { title: "Proper insights", desc: "Recognizing communication challenges", Icon: Search },
  { title: "Personalized plan", desc: "Design a tailored growth action oriented plan", Icon: Activity },
  { title: "Parent guidance & support", desc: "Empower and strengthen family support skills", Icon: Users },
  { title: "Progress tracking", desc: "Measure developmental milestones", Icon: CalendarCheck },
];

const parentConcerns = [
  "Proper communication support techniques",
  "Understanding the growth and progress",
  "Proper daily interaction opportunities",
  "Behaviour and interacting responses",
  "Future development planning",
];

const parentGuidanceItems = [
  "Proper communication support techniques",
  "Understanding the growth and progress",
  "Proper daily interaction opportunities",
  "Behaviour and interacting responses",
  "Future development planning",
];

const whyChoose = [
  "Holistic Neuro-Ayurveda Growth Development system",
  "Personalized Growth Assessment",
  "Child-Led and Family-Supported Approach",
  "Focus on Communication and Developmental Growth",
  "Long-Term Developmental progress",
  "Customized Development plan",
  "Understanding and coordinated help",
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
    answer: "Speech delay means a child is taking more time than expected to learn speaking and communication skills. Some children may struggle to say words, make sentences, or express their needs. Every child develops differently, but if delays continue, support may help improve communication and overall development.",
  },
  {
    question: "2. At what age should a child start talking?",
    answer: "Children usually say their first words around age one, but every child develops at a different pace. Their words and communication skills grow as they get older. Parents should focus on their child’s progress, and seek help if they have concerns about speech or language.",
  },
  {
    question: "3. What are the early signs of speech delay?",
    answer: "Early signs of speech delay may include less babbling, late first words, difficulty joining words together, and trouble expressing needs. Some children may also struggle to follow instructions or communicate with others. Every child develops at their own pace, but ongoing delays may benefit from a developmental assessment to understand their needs and provide support.",
  },
  {
    question: "4. How can I tell if my child has a speech delay?",
    answer: "Parents may notice signs like delayed speech, limited words, difficulty expressing needs, or trouble understanding and using language. A developmental assessment can help identify a child’s communication strengths and challenges, guiding families toward the right support.",
  },
  {
    question: "5. What causes speech delay in children?",
    answer: "Speech delay can happen for many reasons, including differences in development, hearing, learning, attention, and social interaction. Some children may have speech delay alone, while others may have broader developmental needs. A proper assessment helps understand the child’s communication skills and find the right support.",
  },
  {
    question: "6. Is speech delay always a sign of autism?",
    answer: "Speech delay does not always mean autism. Many children have speech delays due to different reasons, such as hearing issues, language exposure, or their own pace of development. Some children with autism may have speech difficulties, but not all children with speech delay have autism. Looking at the child’s overall development and getting a proper assessment can help understand their needs better.",
  },
  {
    question: "7. Can a child have speech delay without autism?",
    answer: "Yes. A child can have speech delay without autism. Some children develop speech later due to differences in language development, hearing, or overall development. Each child grows at their own pace. A developmental assessment can help understand whether the delay is only in speech or linked to other concerns.",
  },
  {
    question: "8. What is the difference between speech delay and language delay?",
    answer: "Speech delay and Language delay are correlated but have different concerns. Speech delay affects a child’s ability to say sounds and words clearly, while language delay affects understanding and using language. A child may have trouble speaking, understanding, or expressing thoughts. Early assessment helps identify the child’s communication needs.",
  },
  {
    question: "9. Can a child with speech delay catch up?",
    answer: "Many children with speech delay improve their communication skills as they grow. Progress is different for every child and depends on their abilities, support, and guidance. Some children catch up quickly, while others need continued help. Understanding the child’s needs and providing early support can help build better communication skills.",
  },
  {
    question: "10. Will my child ever speak normally?",
    answer: "Every child’s speech and communication journey is different. Many children continue to develop their language skills throughout childhood. Instead of predicting the future, it is more helpful to understand the child’s current communication abilities and support their growth with the right strategies and opportunities.",
  },
  {
    question: "11. How can parents help a child with speech delay at home?",
    answer: "Parents play an important role in helping children develop communication skills. Talking, reading, playing, and describing daily activities create learning opportunities. Give children time to respond, encourage their efforts, and be patient. Every child develops at their own pace, so focus on providing a supportive environment that meets their needs.",
  },
  {
    question: "12. What activities help speech development?",
    answer: "Everyday activities like reading, singing, pretend play, naming objects, and talking with children can support language and communication growth. Encouraging eye contact, turn-taking, and social interaction helps children communicate better. Activities should be adjusted to each child’s needs, interests, and abilities.",
  },
  {
    question: "13. Does screen time affect speech development?",
    answer: "Yes Too much screen time may reduce chances for children to talk, play, and interact with others, which can affect language development. Speech delay is caused by many factors, not only just screen use. A balanced routine with conversation, play, and social activities helps support healthy communication skills.",
  },
  {
    question: "14. How does Manovaidya assess speech and communication development?",
    answer: "At Manovaidya, communication assessment looks at the child as a whole, not just speech. It includes understanding language skills, communication abilities, social interaction, development, learning readiness and parent observations. The goal is to identify strengths, support needs and provide a clear roadmap for guidance.",
  },
  {
    question: "15. How does Manovaidya support children with speech and communication challenges?",
    answer: "At Manovaidya we follow a structured Neuro-Ayurveda Development System that looks at communication as part of overall child development. Support includes developmental assessment, parent guidance, planning, progress tracking, and family support. Each child receives personalized guidance based on their needs, helping families build confidence with a clear developmental roadmap.",
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
          name: "Speech Development Assessment & Communication Support in India",
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
            { "@type": "ListItem", position: 3, name: "Speech Development Assessment & Communication Support in India", item: `${window.location.origin}/speech-delay-support-india` },
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
        title="Speech Development Assessment & Communication Support in India | Manovaidya"
        description="Speech Development Assessment & Communication Support in India through Manovaidya's Neuro-Ayurveda Development System."
        keywords="Speech Delay Treatment in India, Communication Development Support, Child Speech Assessment, Language Delay in Children, Early Signs of Speech Delay, Speech Delay vs Language Delay, Social Communication Challenges, Non-verbal Communication in Children, Neuro-Ayurveda Development System, Speech Development Guidance India, Parent Guidance for Speech Delay, Autism and Speech Delay, Dr. Ankush Garg, Child Development Clinic Delhi NCR, Communication Confidence in Children"
        path="/speech-delay-support-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Speech Development Assessment & Communication Support in India",
          "description": "Speech Development Assessment & Communication Support in India through Manovaidya's Neuro-Ayurveda Development System."
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
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Speech Development Assessment</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Speech Development Assessment & Communication Support in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Child development, communication support, and structured developmental guidance at Manovaidya.
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
              Speech and language delay refers to a condition in which a child develops speech and language skills later than expected for their age.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              While some children can understand language well, they may find it hard to express themselves through speech. Others may have impairments in both understanding and communicating.
            </p>
            <h3 className="mt-4 text-[16px] font-black text-[#21142d]">Every child may experience speech delays in a different way.</h3>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Parents may notice few signs such as:</h3>
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
              Communication development goes beyond verbal speech. It includes language comprehension, expressing thoughts and feelings, building relationships, and participating in social communication.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, communication challenges are approached as one aspect of the child’s holistic developmental journey rather than as a separate difficulty.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What Are the Common Signs of Speech and Communication Problems?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child grows and learns at their own pace, but some commonly noticed indicators may include:
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
                If communication difficulties continue for a long time, a speech delay assessment can help families understand the child’s strengths, challenges, and support needs.
              </p>
            </div>
          </section>

          <section id="beyond-speech" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5 lg:flex lg:items-center lg:gap-7">
              <div className="lg:max-w-[43%] lg:shrink-0">
                <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">
                  Understanding Unspoken Communication
                </h2>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                  Many people believe that  communication means only speaking, but it is more than that.
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
              Some children may use words but still have difficulty communicating effectively.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Others may possess deep understanding of things but still find it challenging to express themselves clearly.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              This is why communication development should be understood as part of a child’s overall development, not just by counting how many words they can say.
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
                What happens in a Speech and Communication Assessment at Manovaidya?
              </h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                Every child has their own unique way of communicating.
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                At Manovaidya, we look at the child as a whole, going beyond speech alone to understand their individual needs and strengths.
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
                The goal is to support families in better understanding their child’s communication needs and areas of developmental growth.
              </div>
            </div>
            <img
              src={supportFamilyImage}
              alt="Doctor and parent discussion"
              className="mt-5 max-h-[320px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="looking-beyond-words" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">When should parents seek professional help for a child’s speech delay?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many parents searching for speech delay support in India focus on helping their child say more words.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              While developing speech is essential, communication progress typically involves many other skills as well.
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
              At Manovaidya, our support is centered on understanding the various developmental factors that shape communication, instead of looking only at speech skills.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              This wider understanding helps families develop a clearer and more meaningful plan for improving communication and engagement.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
            <h2 className="text-[20px] font-black text-[#17111f]">What is the Neuro-Ayurveda Development System, and how does it work?</h2>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, communication development is supported by the Neuro-Ayurveda Development System of Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The framework is structured around five interconnected pillars
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
              Collectively, these pillars provide a systematic perspective on the progression of communication skills and overall child development.
            </p>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Help Children with Speech and Communication Difficulties?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our main focus is on understanding the child, rather than defining them by a diagnosis or symptom.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Our support includes:</h3>
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
              Every child receives personalized support and dedicated guidance based on their developmental needs and communication profile.
            </p>
          </section>

          <section id="how-we-work" className="mt-9">
            <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
              <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">How We Work at Manovaidya</h2>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#3f3448] sm:text-[14px]">
                A guided process for sustainable growth and meaningful change.
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
              Every child learns and grows differently at their own pace. At Manovaidya, we focus on deeper understanding your child as a whole before addressing communication challenges.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              We begin with a thorough speech delay assessment to understand your child's development, communication, behaviour, learning needs, sensory experiences, and your family's concerns.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence communication, behaviour, learning, attention, and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The approach includes comprehensive assessment, parent guidance, personalised developmental planning, progress monitoring, and ongoing family support—helping families feel informed, supported, and confident at every step.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              
            </p>
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Communication development is not only a child’s journey—it is also a journey for the family.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#3b2e45]">Families receive proper support and guidance regarding:</span>
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-[12px] font-black text-[#7835A4] ring-1 ring-[#eadff1]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, parent guidance is one of the most essential parts of helping children develop communication skills.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Family support includes:</h3>
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
              Parents and families from Delhi, Noida, Greater Noida, Ghaziabad, NCR, and throughout India seek support from Manovaidya for Speech Delay Intervention, Communication Growth, and Holistic Child Development.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About Dr Ankush Garg</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">ADHD, Autism, Child development & Mental health specialist in India</h2>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr Ankush Garg is the founder of Manovaidya and has introduced the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His areas of focus include neurodevelopmental conditions such as ASD and ADHD, communication challenges, child and adolescent development, behavioural concerns, mental health across adulthood, women’s emotional wellbeing, and senior psychological support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through thorough evaluation, tailored guidance, and compassionate family support, he helps families better understand developmental challenges and move ahead with reassurance, confidence, and a clear path forward.
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
                <h2 className="text-[24px] font-black">Schedule a consultantion</h2>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  For speech delay therapy, communication improvement support, child development assessments, or customized developmental guidance in India, you can connect with Dr. Ankush Garg and the Manovaidya team for a consultation.
                </p>
                <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                  Through a thoughtful assessment and tailored guidance process, families can gain insight into their child’s communication strengths and challenges while exploring meaningful steps to encourage long-term development.
                </p>
                <a
                  href="tel:+917823894080"
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

