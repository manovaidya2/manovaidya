import React from "react";
import {
  Activity,
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
  Waves,
} from "lucide-react";
import childHeroImage from "../images/child-health-care-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Focus Areas", id: "focus-areas" },
  { label: "Understanding Development", id: "understanding-child-development" },
  { label: "Why Early Development Matters", id: "why-early-child-development-matters" },
  { label: "Development Areas", id: "development-areas" },
  { label: "Common Concerns", id: "common-concerns" },
  { label: "Milestones", id: "developmental-milestones" },
  { label: "Warning Signs", id: "signs-parents-should-not-ignore" },
  { label: "Assessment Process", id: "assessment-process" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Manovaidya", id: "why-manovaidya" },
  { label: "About Doctor", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-assessment" },
];

const categories = [
  { label: "Autism", count: 12, Icon: Puzzle },
  { label: "ADHD", count: 10, Icon: Brain },
  { label: "Speech Delay", count: 8, Icon: MessageCircle },
  { label: "Child Development", count: 11, Icon: Baby },
  { label: "Learning", count: 9, Icon: BookOpen },
  { label: "Behaviour", count: 9, Icon: Users },
];

const introParagraphs = [
  "Every child grows and develops at their own pace. While some children achieve developmental milestones naturally, others may need additional time or support in areas such as communication, learning, behaviour, attention, movement or social interaction. Understanding these differences early can help parents make informed decisions and support their child's overall development.",
  "Child development is not limited to physical growth alone. It includes how a child thinks, learns, communicates, behaves, moves, builds relationships and responds to the world around them. These different areas of development work together to influence a child's confidence, independence and quality of life.",
  "Many parents begin to notice concerns such as delayed speech, difficulty maintaining attention, behavioural challenges, poor eye contact, learning difficulties, emotional outbursts or delayed developmental milestones. While some variations are part of normal childhood development, persistent developmental concerns should not be ignored.",
  "Early identification allows families to better understand their child's strengths and areas where additional support may be beneficial. Every child develops differently, and early guidance often provides greater opportunities to build communication, learning and everyday life skills.",
  "At Manovaidya, we believe that child development is influenced by multiple interconnected factors, including brain development, nutrition, gut health, sleep, sensory processing, behaviour, emotional wellbeing and the child's environment. Rather than focusing on a single symptom or diagnosis, we aim to understand the complete developmental profile of every child.",
  "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System, a structured five-pillar approach that helps parents better understand their child's developmental needs through comprehensive assessment, personalised guidance and holistic developmental support.",
];

const focusAreas = [
  "Child Development Assessment",
  "Developmental Delays",
  "Autism Spectrum Treatment",
  "ADHD Treatment",
  "Speech & Language Development",
  "Learning & Academic Challenges",
  "Behavioural Development",
  "Emotional Development",
  "Social Skills Development",
  "Sensory Processing Support",
  "Motor Development",
  "Parent Guidance & Family Support",
];

const developmentDomains = [
  "Brain and cognitive development",
  "Speech and language development",
  "Social communication",
  "Emotional regulation",
  "Behavioural development",
  "Fine and gross motor skills",
  "Sensory processing",
  "Learning and attention",
  "Daily living skills",
];

const earlySkills = [
  "Communication",
  "Learning",
  "Emotional regulation",
  "Social interaction",
  "Problem-solving",
  "Attention",
  "Independence",
  "Behavioural flexibility",
];

const developmentAreas = [
  {
    title: "Brain & Cognitive Development",
    text: "Supports thinking, memory, attention, problem-solving and learning.",
    Icon: Brain,
  },
  {
    title: "Speech & Language Development",
    text: "Supports understanding language, expressing thoughts and communicating effectively.",
    Icon: MessageCircle,
  },
  {
    title: "Emotional Development",
    text: "Helps children recognise, express and manage emotions appropriately.",
    Icon: HeartHandshake,
  },
  {
    title: "Social Development",
    text: "Supports friendships, cooperation, sharing, empathy and social communication.",
    Icon: Users,
  },
  {
    title: "Motor Development",
    text: "Includes both gross motor skills (running, jumping, balancing) and fine motor skills (writing, drawing, buttoning clothes).",
    Icon: Activity,
  },
  {
    title: "Sensory Processing",
    text: "Helps children respond appropriately to sounds, touch, movement, textures, light and other sensory experiences.",
    Icon: Waves,
  },
  {
    title: "Behavioural Development",
    text: "Supports emotional regulation, flexibility, following routines and adapting to different environments.",
    Icon: ShieldCheck,
  },
  {
    title: "Attention & Executive Function",
    text: "Supports planning, organisation, impulse control, focus, working memory and completing everyday tasks.",
    Icon: Sparkles,
  },
];

const concernSections = [
  {
    title: "Autism Spectrum Disorder (ASD)",
    intro:
      "Some children experience differences in social communication, behaviour, play patterns and sensory processing that may be consistent with Autism Spectrum Disorder (ASD).",
    lead: "Children with autism may experience challenges such as:",
    items: ["Limited eye contact", "Delayed communication", "Repetitive behaviours", "Difficulty with social interaction", "Sensory sensitivities", "Preference for routines"],
    closing: "Every child with autism is unique, and abilities vary considerably from one child to another.",
    link: "Learn More About Autism Treatment",
  },
  {
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    intro: "Children with ADHD may experience ongoing difficulties with attention, impulse control or hyperactivity that affect learning, behaviour and daily activities.",
    lead: "Some children may:",
    items: ["Find it difficult to stay focused", "Be easily distracted", "Act impulsively", "Have difficulty sitting still", "Forget instructions", "Struggle with organisation"],
    closing: "Professional assessment helps determine whether these behaviours are consistent with ADHD or other developmental factors.",
    link: "Learn More About ADHD Treatment",
  },
  {
    title: "Speech & Language Delay",
    intro: "Communication develops differently in every child.",
    lead: "Some children may:",
    items: ["Speak fewer words than expected", "Have difficulty understanding language", "Find it difficult to express needs", "Use unclear speech", "Have delayed language milestones"],
    closing: "Early evaluation helps identify communication strengths and areas where additional support may be beneficial.",
    link: "Learn More About Speech & Language Development",
  },
  {
    title: "Learning Difficulties",
    intro: "Some children experience challenges in reading, writing, mathematics or understanding classroom instructions despite receiving regular educational opportunities.",
    lead: "Learning difficulties may influence:",
    items: ["Academic performance", "Confidence", "Motivation", "Classroom participation", "Daily learning activities"],
    closing: "Understanding how a child learns allows parents and educators to provide appropriate educational support.",
    link: "Learn More About Learning Difficulties",
  },
  {
    title: "Developmental Delay",
    intro: "Some children achieve developmental milestones later than expected across one or more developmental areas.",
    lead: "Developmental delays may affect:",
    items: ["Communication", "Movement", "Learning", "Social interaction", "Self-care skills", "Cognitive development"],
    closing: "A developmental assessment helps understand the child's current abilities and identify areas requiring support.",
    link: "Learn More About Developmental Delay",
  },
  {
    title: "Behavioural Challenges",
    intro: "Behaviour is one way children communicate their needs.",
    lead: "Some children may experience:",
    items: ["Frequent tantrums", "Difficulty managing emotions", "Aggressive behaviour", "Difficulty following routines", "Impulsivity", "Emotional outbursts"],
    closing: "Understanding the reasons behind behaviour is an important part of supporting healthy development.",
    link: "Learn More About Behavioural Development",
  },
  {
    title: "Sensory Processing Differences",
    intro: "Some children respond differently to everyday sensory experiences such as sounds, touch, movement, textures or lights.",
    lead: "They may:",
    items: ["Avoid certain textures", "Become overwhelmed by loud noises", "Seek excessive movement", "Be unusually sensitive to clothing", "Have difficulty adapting to busy environments"],
    closing: "Sensory processing differences can influence behaviour, learning and participation in daily activities.",
    link: "Learn More About Sensory Processing Support",
  },
  {
    title: "Motor Development Delay",
    intro: "Motor development includes both large body movements and fine hand movements.",
    lead: "Some children may experience difficulties with:",
    items: ["Crawling", "Walking", "Running", "Balance", "Handwriting", "Holding objects", "Buttoning clothes"],
    closing: "Motor skills play an important role in independence and participation in everyday activities.",
    link: "Learn More About Motor Development Support",
  },
  {
    title: "Social Communication Difficulties",
    intro: "Some children find it difficult to understand or participate in everyday social interactions.",
    lead: "They may experience challenges with:",
    items: ["Making friends", "Sharing interests", "Understanding emotions", "Taking turns", "Starting conversations", "Understanding social situations"],
    closing: "Social communication skills develop gradually and may benefit from early support when difficulties are identified.",
    link: "Learn More About Social Skills Development",
  },
  {
    title: "Emotional Regulation",
    intro: "Learning to understand and manage emotions is an important developmental milestone.",
    lead: "Some children may:",
    items: ["Become frustrated easily", "Cry frequently", "Have intense emotional reactions", "Find it difficult to calm themselves", "Struggle with transitions"],
    closing: "Supporting emotional regulation helps children build confidence, resilience and healthy relationships.",
    link: "Learn More About Emotional Development",
  },
  {
    title: "Executive Function Challenges",
    intro: "Executive functions help children plan, organise, remember instructions and manage everyday tasks.",
    lead: "Some children may experience difficulties with:",
    items: ["Planning activities", "Completing tasks", "Following multi-step instructions", "Time management", "Organisation", "Self-control"],
    closing: "Executive function skills continue developing throughout childhood and adolescence.",
    link: "Learn More About Executive Function Support",
  },
];

const milestones = [
  { title: "Birth to 6 Months", lead: "Many babies begin to:", items: ["Make eye contact", "Smile responsively", "Turn towards familiar voices", "Lift their head during tummy time", "Reach for nearby objects", "Respond to sounds"] },
  { title: "6 to 12 Months", lead: "Many babies begin to:", items: ["Sit without support", "Crawl", "Babble using different sounds", "Respond to their name", "Show curiosity through play", "Use simple gestures like waving"] },
  { title: "1 to 2 Years", lead: "Many toddlers begin to:", items: ["Walk independently", "Use simple words and short phrases", "Follow simple instructions", "Point to familiar objects", "Enjoy pretend play", "Show interest in interacting with others"] },
  { title: "2 to 3 Years", lead: "Many children begin to:", items: ["Speak in short sentences", "Identify familiar people and objects", "Run, climb and jump", "Follow simple routines", "Engage in interactive play", "Express basic emotions"] },
  { title: "3 to 5 Years", lead: "Many children begin to:", items: ["Speak more clearly", "Ask questions", "Play cooperatively with other children", "Draw simple shapes", "Follow multi-step instructions", "Develop greater independence"] },
  { title: "5 to 8 Years", lead: "Children generally continue developing:", items: ["Reading and writing skills", "Attention", "Problem-solving", "Emotional regulation", "Friendships", "Self-care skills", "Academic learning"] },
];

const warningGroups = [
  { title: "Communication", items: ["Limited speech development", "Loss of previously acquired language", "Difficulty understanding simple instructions", "Limited eye contact"] },
  { title: "Learning", items: ["Difficulty remembering new information", "Trouble following classroom activities", "Significant academic struggles", "Poor attention during learning"] },
  { title: "Behaviour", items: ["Frequent emotional outbursts", "Extreme difficulty with routine changes", "Persistent impulsive behaviour", "Aggressive behaviour that interferes with daily life"] },
  { title: "Social Interaction", items: ["Limited interest in interacting with others", "Difficulty making friends", "Lack of shared play", "Limited response to social cues"] },
  { title: "Movement", items: ["Delayed walking or running", "Poor balance", "Difficulty using hands for everyday tasks", "Delayed motor milestones"] },
  { title: "Sensory Responses", items: ["Extreme sensitivity to sounds, touch or textures", "Unusual sensory-seeking behaviours", "Difficulty coping with busy environments"] },
  { title: "Daily Living Skills", items: ["Difficulty eating independently", "Challenges with dressing or toileting appropriate for developmental age", "Difficulty following everyday routines"] },
];

const assessmentSteps = [
  {
    title: "Step 1 - Parent Consultation",
    text: "Every assessment begins with listening to the parents.",
    lead: "We take time to understand:",
    items: ["Parent's observations and concerns", "Pregnancy and birth history", "Developmental milestones", "Medical history", "School performance", "Daily routines", "Behaviour at home and school", "Previous assessments or therapies, if any"],
    closing: "Understanding the child's history helps us build a complete developmental picture rather than relying on isolated observations.",
  },
  {
    title: "Step 2 - Comprehensive Child Development Assessment",
    text: "Our assessment considers multiple developmental domains that influence a child's everyday functioning.",
    lead: "These may include:",
    items: ["Communication skills", "Speech and language development", "Attention and concentration", "Learning abilities", "Behaviour", "Emotional development", "Social interaction", "Sensory processing", "Motor skills", "Daily living and adaptive skills"],
    closing: "This structured approach helps identify both strengths and areas where additional support may be beneficial.",
  },
  {
    title: "Step 3 - Understanding Your Child's Development Profile",
    text: "After the assessment, we discuss our observations with parents in a simple and understandable way.",
    lead: "This includes:",
    items: ["Areas where development is progressing well", "Areas that may need additional support", "Developmental priorities", "Practical guidance for home and school", "Recommendations for the next steps"],
    closing: "Our goal is to help parents clearly understand their child's developmental journey and make informed decisions with confidence.",
  },
];

const neuroPillars = [
  {
    title: "1. Brain Nourishment System",
    text: "Healthy brain development supports learning, memory, communication, attention and emotional regulation. This pillar focuses on understanding factors that may influence healthy brain function and age-appropriate development.",
    Icon: Brain,
  },
  {
    title: "2. Gut Response System",
    text: "Nutrition and digestion play an important role in a child's overall wellbeing. This pillar considers gut health, nutritional balance and healthy digestion as part of a child's overall developmental profile.",
    Icon: HeartHandshake,
  },
  {
    title: "3. Neural Network System",
    text: "Children develop new abilities through learning, repetition and meaningful experiences. This pillar focuses on strengthening communication, learning, attention and cognitive development through appropriate developmental guidance.",
    Icon: Sparkles,
  },
  {
    title: "4. Sensory Integration System",
    text: "Children experience the world through their senses. This pillar helps parents understand how sensory processing may influence learning, behaviour, emotional regulation and participation in everyday activities.",
    Icon: Waves,
  },
  {
    title: "5. Behaviour Guidance System",
    text: "Behaviour is often a child's way of expressing needs, emotions or developmental challenges. Rather than focusing only on correcting behaviour, this pillar helps parents understand behaviour patterns and encourages positive guidance strategies that support emotional growth, confidence and healthy development.",
    Icon: ShieldCheck,
  },
];

const supportItems = [
  "Child development assessment",
  "Parent education",
  "Behaviour guidance strategies",
  "Daily routine planning",
  "Lifestyle recommendations",
  "Nutrition and healthy habits",
  "Emotional development",
  "Communication support",
  "Learning support",
  "Progress monitoring and follow-up",
];

const whyChoose = [
  "Comprehensive Child Development Assessment",
  "Personalised Development Guidance",
  "Neuro-Ayurveda Development System",
  "Parent Education & Family Involvement",
  "Holistic Understanding of Brain, Behaviour & Development",
  "Online & In-Clinic Consultations",
  "Long-Term Development Monitoring",
];

const relatedPages = [
  { title: "Autism Treatment", href: "/autism-treatment-india/" },
  { title: "ADHD Treatment", href: "/adhd-treatment-india/" },
  { title: "Speech Delay", href: "/speech-delay-support-india/" },
  { title: "Learning Difficulties", href: "/learning-attention-difficulties-india/" },
  { title: "Behaviour Problems", href: "/behavioural-concerns-children-india/" },
  { title: "Sensory Processing", href: "/child-development-support-india/" },
  { title: "Developmental Delay", href: "/child-development-support-india/" },
  { title: "Motor Development", href: "/child-development-support-india/" },
  { title: "Parent Guidance", href: "/child-development-support-india/" },
  { title: "Teen Mental Health Care", href: "/teen-mental-wellness/" },
];

const faqs = [
  { question: "1. What is child development?", answer: "Child development is the process through which children grow physically, emotionally, socially, mentally and behaviourally from birth through adolescence. It includes communication, learning, movement, emotional regulation, social interaction and everyday life skills. Every child develops at their own pace, although developmental milestones provide general guidance about expected progress." },
  { question: "2. What are developmental milestones?", answer: "Developmental milestones are age-related skills that many children achieve as they grow. These milestones include speech, movement, learning, social interaction, emotional development and daily living skills. They help parents and healthcare professionals monitor a child's overall development, but small variations between children are common." },
  { question: "3. When should I be concerned about my child's development?", answer: "Parents should consider professional assessment if they notice persistent delays in speech, learning, movement, behaviour, attention, social interaction or emotional development, or if their child loses previously acquired skills. An assessment helps understand the child's strengths and developmental needs rather than confirming a diagnosis based on one symptom alone." },
  { question: "4. Is every child expected to develop at the same pace?", answer: "No. Every child develops differently. Some children achieve milestones earlier, while others need more time. Small differences are usually normal. However, persistent delays or concerns affecting everyday functioning should be evaluated by a qualified healthcare professional." },
  { question: "5. What are the most common child development concerns?", answer: "Common concerns include delayed speech and language development, Autism Spectrum Disorder (ASD), Attention-Deficit/Hyperactivity Disorder (ADHD), learning difficulties, behavioural challenges, sensory processing differences, motor delays, emotional regulation difficulties and social communication challenges." },
  { question: "6. What are the early signs of developmental delay?", answer: "Possible early signs may include delayed speech, reduced eye contact, difficulty responding to their name, limited social interaction, delayed walking, difficulty following instructions, persistent behavioural concerns or loss of previously learned skills. These signs do not confirm a diagnosis but should be discussed with a qualified healthcare professional." },
  { question: "7. What is a child development assessment?", answer: "A child development assessment is a structured evaluation of different developmental areas such as communication, learning, behaviour, attention, motor skills, emotional development, social interaction and daily living skills. The goal is to understand a child's developmental profile and identify areas where additional support may be helpful." },
  { question: "8. At what age should a child development assessment be done?", answer: "A developmental assessment can be considered whenever parents, teachers or healthcare professionals notice persistent developmental concerns. Early assessment often provides greater opportunities to understand a child's strengths and developmental needs." },
  { question: "9. What causes developmental delays in children?", answer: "Developmental differences may result from multiple factors, including genetic influences, neurological differences, premature birth, hearing or vision problems, certain medical conditions or environmental factors. In many children, there is no single identifiable cause, and a comprehensive assessment is needed to understand the child's individual developmental profile." },
  { question: "10. How important is early intervention for child development?", answer: "Early identification and appropriate support may help children strengthen communication, learning, social and adaptive skills during periods of rapid brain development. The type of support recommended depends on each child's individual needs and should be guided by qualified professionals." },
  { question: "11. How can parents support their child's development at home?", answer: "Parents can support development by encouraging communication, reading together, providing opportunities for play, maintaining healthy routines, ensuring adequate sleep and nutrition, limiting excessive screen time, offering positive encouragement and following professional guidance when developmental concerns are present." },
  { question: "12. How does Manovaidya support child development?", answer: "At Manovaidya, support begins with understanding the child's overall developmental profile rather than focusing on a single symptom. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help parents better understand communication, learning, behaviour, sensory processing, lifestyle factors and overall child development." },
  { question: "13. What is the Neuro-Ayurveda Development System?", answer: "The Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework that considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding a child's overall development. It is designed to provide a holistic perspective alongside comprehensive developmental assessment and personalised guidance." },
  { question: "14. Can children improve with the right support?", answer: "Many children make meaningful developmental progress when they receive timely, individualised and appropriate support. Progress varies from child to child depending on factors such as age, developmental profile, underlying conditions, family involvement and consistency of interventions. No specific outcome can be guaranteed." },
  { question: "15. When should I seek urgent medical attention for my child?", answer: "Seek immediate medical care if your child experiences seizures, sudden loss of consciousness, serious injury, severe breathing difficulties, acute weakness, sudden loss of previously acquired skills, or any other medical emergency. For developmental concerns without an emergency, schedule an assessment with a qualified healthcare professional." },
  { question: "16. Can developmental concerns affect school performance?", answer: "Yes. Challenges with communication, attention, learning, behaviour or emotional regulation may influence classroom participation, academic progress and relationships with teachers and classmates. Early assessment can help identify areas where educational or developmental support may be beneficial." },
  { question: "17. Can nutrition and sleep influence child development?", answer: "Adequate nutrition and healthy sleep support overall growth, brain development, learning, emotional regulation and physical wellbeing. If parents have concerns about their child's diet, sleep or growth, they should discuss these with a qualified healthcare professional." },
  { question: "18. Do all developmental delays mean Autism or ADHD?", answer: "No. Developmental delays can have many different causes, and not every delay is related to Autism Spectrum Disorder or ADHD. A comprehensive developmental assessment is important to understand the underlying reasons and determine the most appropriate guidance for the child." },
  { question: "19. How often should a child's development be monitored?", answer: "Child development should be monitored regularly through routine health check-ups, developmental screenings, school observations and parental feedback. If a child is receiving developmental support, periodic follow-up assessments help monitor progress and adjust recommendations when needed." },
  { question: "20. Why should parents choose Manovaidya for child development care?", answer: "At Manovaidya, we focus on understanding the complete developmental journey of every child. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help parents understand their child's strengths, developmental needs and practical next steps. Our approach combines holistic child development care, parent education and long-term developmental support tailored to each child's individual profile." },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#7835A4]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ChildDevelopmentCareIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "child-development-care-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    document.title = "Child Development Care in India | Child Development Assessment & Treatment | Manovaidya";

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
      "Looking for Child Development Care in India? Learn about child development, developmental milestones, assessments, autism, ADHD, speech delay, learning and behaviour support at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/child-development-care-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Child Development Care in India",
          description:
            "Child development care, developmental milestones, assessments, autism, ADHD, speech delay, learning and behaviour treatment at Manovaidya.",
          url: `${window.location.origin}/child-development-care-india`,
          medicalAudience: "Parent",
        },
        { "@type": "Organization", name: "Manovaidya", url: window.location.origin },
        { "@type": "LocalBusiness", name: "Manovaidya", url: window.location.origin, areaServed: "India" },
        {
          "@type": "Physician",
          name: "Dr. Ankush Garg",
          medicalSpecialty: "Child Development",
          worksFor: { "@type": "Organization", name: "Manovaidya" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Development Care", item: `${window.location.origin}/child-development-care-india` },
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

    const scriptId = "child-development-care-schema";
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
                <span className="text-[#4b345d]">Child Development Care</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">
                Supporting Healthy Brain Development, Learning, Behaviour & Growth Through Every Stage of Childhood
              </p>
              <h1 className="mt-2 max-w-[680px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Child Development Care & Developmental Treatment for Children in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Child Development Care & Neurodevelopment Treatment for Children in India
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">
                  Book Child Assessment
                </a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">
                  Talk to Our Team
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                    <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD & Child Development Specialist in India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]">
                  <span>Share:</span>
                  {["f", "x", "in", "wa"].map((label) => (
                    <a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">
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
                <img src={childHeroImage} alt="Child development care and developmental treatment for children in India" className="h-[248px] w-full object-cover object-right sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <section id="introduction" className="mt-8">
            {introParagraphs.map((text) => (
              <p key={text} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{text}</p>
            ))}
          </section>

          <section id="focus-areas" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">At Manovaidya, Child Development Care Focuses On</h2>
            <BulletList items={focusAreas} />
          </section>

          <section id="understanding-child-development" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Child Development</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Child development is a continuous process that begins before birth and continues throughout childhood and adolescence. During this journey, children gradually develop physical abilities, communication skills, emotional regulation, thinking abilities, social relationships and independence.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Although developmental milestones provide general guidance about what many children achieve at different ages, every child follows a unique developmental path. Small differences are common. However, significant or persistent delays may indicate that a child would benefit from further assessment and support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Healthy child development involves several interconnected domains:</p>
            <BulletList items={developmentDomains} />
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Development in one area often influences progress in another. For example, communication challenges may affect social relationships, while sensory processing differences may influence behaviour, attention or participation in learning activities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents searching for Child Development Care in India, Developmental Delay Support, Child Development Assessment, Autism Treatment, ADHD Treatment or Speech Delay Guidance are looking for answers to understand why their child is developing differently. Early understanding is an important first step toward providing appropriate guidance and support.
            </p>
          </section>

          <section id="why-early-child-development-matters" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Early Child Development Matters</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The early years of life are a period of rapid brain development. During this time, children learn through everyday experiences, relationships, play, communication and interaction with their environment.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Supporting development during these early years may help children strengthen important life skills such as:</p>
            <BulletList items={earlySkills} />
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Early identification does not mean labelling a child. Instead, it provides an opportunity to better understand how the child learns, communicates and experiences the world.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              When parents recognise developmental concerns early, they can seek appropriate guidance and create supportive environments that encourage growth and learning.
            </p>
          </section>

          <section id="development-areas" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Every Child Develops Across Multiple Areas</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Child development is much more than reaching physical milestones. Each area of development contributes to how children learn, communicate and interact with others.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {developmentAreas.map(({ title, text, Icon }) => (
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

          <section id="common-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Child Development Concerns</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child develops at their own pace. While temporary variations in development are common, some children may experience persistent challenges that affect communication, learning, behaviour, movement or social interaction.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Understanding these concerns early allows parents to seek appropriate guidance and provide timely support based on their child's individual needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we assess the child's overall developmental profile rather than focusing on a single symptom or diagnosis. Every child is unique, and support is personalised according to their strengths and developmental needs.
            </p>
            <div className="mt-5 grid gap-4">
              {concernSections.map((section) => (
                <div key={section.title} className="rounded-lg border border-[#eadff1] bg-white p-5">
                  <h3 className="text-[16px] font-black text-[#21142d]">{section.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">{section.intro}</p>
                  <p className="mt-2 text-[13px] font-bold leading-6 text-[#21142d]">{section.lead}</p>
                  <BulletList items={section.items} />
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">{section.closing}</p>
                  <p className="mt-3 text-[12px] font-black text-[#7835A4]">→ {section.link}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="developmental-milestones" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Developmental Milestones</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Developmental milestones provide general guidance about the skills many children achieve as they grow. Every child develops at their own pace, so small variations are common. However, persistent delays or loss of previously acquired skills should be discussed with a qualified healthcare professional.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {milestones.map((milestone) => (
                <div key={milestone.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{milestone.title}</h3>
                  <p className="mt-2 text-[12px] font-bold text-[#75677d]">{milestone.lead}</p>
                  <BulletList items={milestone.items} />
                </div>
              ))}
            </div>
          </section>

          <section id="signs-parents-should-not-ignore" className="mt-9 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Signs Parents Should Not Ignore</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every child develops differently, but parents should consider professional assessment if they notice persistent concerns such as:
              </p>
              <div className="mt-4 grid gap-3">
                {warningGroups.map((group) => (
                  <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                    <h3 className="text-[14px] font-black text-[#21142d]">{group.title}</h3>
                    <BulletList items={group.items} />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Recognising these signs early does not necessarily mean a child has a specific condition. They simply indicate that a comprehensive developmental assessment may help understand the child's strengths, needs and appropriate next steps.
              </p>
            </div>
            <img src={signsImage} alt="Different areas of child development including speech learning behaviour and motor skills" className="h-[260px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="assessment-process" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Our Child Development Assessment Process</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child has their own strengths, challenges and way of learning. At Manovaidya, we believe that understanding the whole child is more important than focusing on a single behaviour or diagnosis.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than making assumptions based on one symptom, our assessment process looks at multiple aspects of a child's development to build a clearer understanding of their individual developmental profile.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The purpose of assessment is to identify strengths, recognise developmental needs and help parents understand the most appropriate next steps for their child.
            </p>
            <div className="mt-5 grid gap-4">
              {assessmentSteps.map((step) => (
                <div key={step.title} className="rounded-lg border border-[#eadff1] bg-white p-5">
                  <h3 className="text-[15px] font-black text-[#21142d]">{step.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">{step.text}</p>
                  <p className="mt-2 text-[13px] font-bold leading-6 text-[#21142d]">{step.lead}</p>
                  <BulletList items={step.items} />
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#51465a]">{step.closing}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, child development is understood through the Neuro-Ayurveda Development System, a structured five-pillar framework developed to look beyond individual symptoms and understand the broader factors that influence a child's development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on a diagnosis, this approach considers how brain health, nutrition, sensory processing, behaviour, learning and everyday experiences work together to support healthy development.
            </p>
            <img src={neuroDiagramImage} alt="Neuro Ayurveda Development System for child development support" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {neuroPillars.map(({ title, text, Icon }) => (
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
          </section>

          <section id="how-we-support" className="mt-9 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every child is different, and there is no one-size-fits-all approach to child development.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, our support is personalised according to each child's developmental profile, strengths and individual needs.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Our approach may include guidance related to:</p>
              <BulletList items={supportItems} />
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                Our goal is to empower parents with practical understanding and long-term developmental guidance while working alongside them throughout their child's growth journey.
              </p>
            </div>
            <img src={supportFamilyImage} alt="Parent guidance for healthy child development" className="h-[250px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="why-manovaidya" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Parents Across India Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India trust Manovaidya because of our structured and child-centred approach to development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">Parents choose us because we focus on:</p>
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
              Parents from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya for Child Development Assessments, Developmental Guidance, Autism Treatment, ADHD Treatment and comprehensive child development care through both online and in-clinic consultations.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our aim is to help every child reach their potential while giving parents the clarity, confidence and support they need throughout the developmental journey.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD & Child Development Specialist in India</p>
                <h2 className="text-[16px] font-black text-[#21142d]">About Dr. Ankush Garg</h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Dr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  His work focuses on understanding child development through a holistic perspective that combines brain development, behaviour, communication, learning, nutrition, sensory processing and emotional wellbeing.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Through structured assessments, personalised guidance and continuous follow-up, Dr. Ankush Garg helps families better understand their child's developmental needs and create practical strategies that support healthy growth, learning and everyday functioning.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Based in Delhi NCR, he provides child development consultations for families across India through both online and in-clinic appointments.
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Based in Delhi NCR, Dr. Ankush Garg provides Child Development Assessments, Autism & ADHD guidance and holistic developmental support for children across India through the Neuro-Ayurveda Development System.
                </p>
              </div>
            </div>
          </section>

          <section id="related-pages" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Related Pages</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedPages.map((item) => (
                <a key={item.title} href={item.href} className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                  {item.title}
                </a>
              ))}
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
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

          <section id="book-assessment" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
            <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
              <div className="p-5">
                <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Book a Child Development Assessment</p>
                <h2 className="mt-2 text-[20px] font-black text-[#17111f]">Concerned About Your Child's Development?</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  If you have noticed differences in your child's communication, learning, behaviour, attention, social interaction or developmental milestones, understanding these concerns early is the first step towards providing the right support.
                </p>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  At Manovaidya, we help parents understand their child's unique developmental profile through structured assessment, personalised guidance and the Neuro-Ayurveda Development System.
                </p>
                <h3 className="mt-4 text-[15px] font-black text-[#21142d]">Let's Understand Your Child's Development Together</h3>
                <p className="mt-2 text-[13px] font-bold leading-6 text-[#51465a]">
                  Every child deserves the opportunity to grow, learn and thrive at their own pace.
                </p>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  Whether your concerns relate to speech, behaviour, learning, attention, autism, ADHD or general developmental milestones, our team is here to support you with compassionate, evidence-informed and personalised guidance.
                </p>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  Book a structured Child Development Assessment with Manovaidya to better understand your child's communication, learning, behaviour, attention and overall developmental needs.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+917823894080" className="inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Child Assessment</a>
                  <a href="tel:+917823894080" className="inline-flex h-10 items-center justify-center rounded-md border border-[#7835A4] px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
                  <a href="tel:+917823894080" className="inline-flex h-10 items-center justify-center rounded-md border border-[#eadff1] px-5 text-[12px] font-black text-[#51465a] transition hover:border-[#7835A4] hover:text-[#7835A4]">Schedule Consultation</a>
                </div>
              </div>
              <img src={ctaImage} alt="Book child development assessment with Manovaidya" className="h-full min-h-[240px] w-full object-cover" />
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
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book Assessment</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a structured child development assessment and personalised guidance.
            </p>
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
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

export default ChildDevelopmentCareIndiaPage;

