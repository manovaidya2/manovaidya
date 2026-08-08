import React from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import heroImage from "../images/teen-family-support.png";
import communicationImage from "../images/parent-guidance-teen-anxiety.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/teen-emotional-wellbeing-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Parent-Teen Relationships", id: "understanding-parent-teen-relationships" },
  { label: "Common Challenges", id: "common-parent-teen-relationship-challenges" },
  { label: "Why Teenagers Become Distant", id: "why-teenagers-become-distant-from-parents" },
  { label: "How It Affects Teenagers", id: "how-parent-teen-relationship-challenges-affect-teenagers" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "How Parents Can Build", id: "how-parents-can-build-stronger-relationships-with-teenagers" },
  { label: "How We Support", id: "how-manovaidya-supports-families" },
  { label: "Why Families Choose", id: "why-families-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Parent-Teen Relationship", count: 9, Icon: Users },
  { label: "Teen Behaviour Support", count: 11, Icon: ShieldCheck },
  { label: "Teen Stress & Anxiety", count: 13, Icon: HeartHandshake },
  { label: "Teen Depression", count: 12, Icon: Activity },
  { label: "Exam Pressure", count: 10, Icon: BookOpen },
  { label: "Screen Addiction", count: 8, Icon: Brain },
];

const keyTakeaways = [
  "Understanding Parent-Teen Relationship Challenges",
  "Signs of Communication and Trust Problems",
  "Why Teenagers Become Distant From Parents",
  "Impact of Family Conflict on Teen Wellbeing",
  "How to Improve Parent-Teen Communication",
  "Building Trust and Emotional Safety at Home",
  "Healthy Boundaries and Growing Independence",
  "Managing Anger, Arguments and Teen Behaviour",
  "Neuro-Ayurveda Approach to Family Support",
  "Parent Guidance and Family-Centred Counselling",
  "Manovaidya's Assessment and Support Process",
  "When Parents Should Consider an Assessment",
  "Why Families Choose Manovaidya",
  "Online and In-Clinic Support Across India",
  "About Dr. Ankush Garg",
  "Related Teen Mental Wellness Resources",
  "FAQs on Parent-Teen Relationships",
];

const fullMedicalReferenceContent = `References
[1] World Health Organization - Mental Health of Adolescents
https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health
[2] World Health Organization - Positive Family Relationships in Adolescence
https://www.who.int/data/gho/indicator-metadata-registry/imr-details/proportion-of-adolescents-reporting-positive-family-relationships
[3] Zapf H, et al. - Parent-Child Communication and Adolescent Mental Health: A Systematic Review
https://pubmed.ncbi.nlm.nih.gov/38827979/
[4] Lin SC, et al. - Child Emotion Regulation, Family Factors and Internalizing Symptoms: A Meta-Analysis
https://pubmed.ncbi.nlm.nih.gov/37803878/
[5] Havighurst SS, et al. - Emotion-Focused Parenting Interventions for Child and Adolescent Mental Health Problems
https://pubmed.ncbi.nlm.nih.gov/32858599/
[6] Parenting and Family Interventions for Child and Adolescent Mental Health in Low- and Middle-Income Countries
https://pubmed.ncbi.nlm.nih.gov/38631272/
[7] Charaka Samhita - Sattvavajaya
https://www.carakasamhitaonline.com/index.php/Sattvavajaya
[8] Charaka Samhita - Manas: Mind and Mental Health
https://www.carakasamhitaonline.com/index.php?title=Manas
[9] Charaka Samhita, Sutra Sthana 8 - Indriyopakramaniya Adhyaya
https://www.carakasamhitaonline.com/index.php/Indriyopakramaniya_Adhyaya
[10] Charaka Samhita, Chikitsa Sthana 1 - Rasayana Adhyaya: Achara Rasayana
https://www.carakasamhitaonline.com/index.php/Rasayana_Adhyaya

Reference Note
This article uses recognised public health resources, peer-reviewed research and classical Ayurvedic texts for adolescent mental health, positive family relationships, parent-child communication, emotion regulation, family interventions and Ayurvedic concepts related to Manas, Sattvavajaya, Sadvritta and Achara Rasayana.

Classical Ayurvedic references are included for conceptual understanding of mind regulation, healthy conduct, respectful communication, sensory balance and whole-person wellbeing. They are not modern diagnostic criteria and should not be interpreted as a guaranteed cure for family conflict, teen behaviour concerns or teen mental health conditions.

Authorised & Clinically Reviewed by Dr Ankush Garg
Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
Clinical Focus: Autism, ADHD, Child Development, Teen Mental Wellness and Mental Health`;

const articleLinkRules = [
  { label: "Parent-Teen Relationship Treatment in India", href: "#introduction", pattern: /Parent-Teen Relationship Treatment in India/i },
  { label: "Parent-Teen Relationship Treatment", href: "#understanding-parent-teen-relationships", pattern: /Parent-Teen Relationship Treatment/i },
  { label: "Parent-Teen Relationship", href: "#understanding-parent-teen-relationships", pattern: /Parent-Teen Relationship/i },
  { label: "Parent-Teen Relationships", href: "#understanding-parent-teen-relationships", pattern: /Parent-Teen Relationships/i },
  { label: "Parent-Teen Communication", href: "#how-parents-can-build-stronger-relationships-with-teenagers", pattern: /Parent-Teen Communication/i },
  { label: "Parent Guidance", href: "#how-manovaidya-supports-families", pattern: /Parent Guidance/i },
  { label: "Parenting Teenagers", href: "#understanding-parent-teen-relationships", pattern: /Parenting Teenagers/i },
  { label: "Teen Behaviour Support", href: "#common-parent-teen-relationship-challenges", pattern: /Teen Behaviour Support/i },
  { label: "Teenage Behaviour", href: "#common-parent-teen-relationship-challenges", pattern: /Teenage Behaviour/i },
  { label: "Behavioural Challenges", href: "#common-parent-teen-relationship-challenges", pattern: /Behavioural Challenges/i },
  { label: "Family Conflict Resolution", href: "#how-parents-can-build-stronger-relationships-with-teenagers", pattern: /Family Conflict Resolution/i },
  { label: "Family Conflict", href: "#how-parent-teen-relationship-challenges-affect-teenagers", pattern: /Family Conflict/i },
  { label: "Family Support", href: "#how-manovaidya-supports-families", pattern: /Family Support/i },
  { label: "Family-Centred Counselling", href: "#how-manovaidya-supports-families", pattern: /Family-Centred Counselling/i },
  { label: "Healthy Boundaries", href: "#how-parents-can-build-stronger-relationships-with-teenagers", pattern: /Healthy Boundaries/i },
  { label: "Emotional Safety", href: "#how-parents-can-build-stronger-relationships-with-teenagers", pattern: /Emotional Safety/i },
  { label: "Emotional Wellbeing", href: "#how-parent-teen-relationship-challenges-affect-teenagers", pattern: /Emotional Wellbeing/i },
  { label: "Emotional Connection", href: "#introduction", pattern: /Emotional Connection/i },
  { label: "Trust Building", href: "#how-parents-can-build-stronger-relationships-with-teenagers", pattern: /Trust Building/i },
  { label: "Communication Challenges", href: "#common-parent-teen-relationship-challenges", pattern: /Communication Challenges/i },
  { label: "Academic Pressure", href: "/exam-performance-pressure", pattern: /Academic Pressure/i },
  { label: "Screen Addiction", href: "/teen-screen-addiction-support/", pattern: /Screen Addiction/i },
  { label: "Screen Use", href: "/teen-screen-addiction-support/", pattern: /Screen Use/i },
  { label: "Social Media", href: "/teen-screen-addiction-support/", pattern: /Social Media/i },
  { label: "Teen Stress & Anxiety", href: "/teen-stress-anxiety-support/", pattern: /Teen Stress (?:&|and) Anxiety/i },
  { label: "Teen Depression", href: "/teen-depression-support/", pattern: /Teen Depression/i },
  { label: "Teen Confidence", href: "/teen-confidence-emotional-wellbeing/", pattern: /Teen Confidence/i },
  { label: "Teen Mental Wellness", href: "/teen-mental-wellness-india/", pattern: /Teen Mental Wellness/i },
  { label: "Mental Health", href: "/teen-mental-wellness-india/", pattern: /Mental Health/i },
  { label: "Neuro-Ayurveda Development System", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda Development System/i },
  { label: "Neuro-Ayurveda", href: "/about/approach", pattern: /Neuro[-\s]Ayurveda/i },
  { label: "Dr. Ankush Garg", href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { label: "Manovaidya", href: "/about/manovaidya", pattern: /Manovaidya/i },
  { label: "Child Development", href: "/child-development-support-india", pattern: /Child Development/i },
  { label: "Autism", href: "/autism-treatment-india", pattern: /Autism/i },
  { label: "ADHD", href: "/child-health-care/adhd-child", pattern: /ADHD/i },
];

const getArticleLinkRuleKey = (rule) => `${rule.href}|${rule.pattern.source}`;

function getArticleLinkRuleKeysForText(text, linkedRuleKeys) {
  const source = String(text);
  const ruleKeys = new Set();
  let cursor = 0;
  let safety = 0;

  while (cursor < source.length && safety < 100) {
    safety += 1;
    const remaining = source.slice(cursor);
    const candidates = [];

    articleLinkRules.forEach((rule) => {
      const ruleKey = getArticleLinkRuleKey(rule);
      if (linkedRuleKeys.has(ruleKey)) return;

      const match = remaining.match(rule.pattern);
      if (match) {
        candidates.push({ index: match.index, length: match[0].length, ruleKey });
      }
    });

    candidates.sort((a, b) => a.index - b.index || b.length - a.length);
    if (!candidates.length) break;

    const next = candidates[0];
    linkedRuleKeys.add(next.ruleKey);
    ruleKeys.add(next.ruleKey);
    cursor += next.index + next.length;
  }

  return ruleKeys;
}

const sections = [
  {
    "title": "Introduction",
    "id": "introduction",
    "lines": [
      "The teenage years are a period of significant emotional, social and personal growth. During this stage, teenagers begin developing their own identity, becoming more independent and learning to make decisions about their future. While this growth is a natural part of adolescence, it can also create misunderstandings, communication gaps and conflicts within families. [1]",
      "Many parents notice that their teenager has become quieter, more argumentative, emotionally distant or less willing to share their thoughts. Some teenagers may spend more time alone, react strongly to simple conversations or become frustrated when parents try to offer advice. These situations often leave parents wondering whether such changes are a normal part of adolescence or a sign that their child needs additional support.",
      "At Manovaidya, we understand that a healthy parent-teen relationship is one of the strongest foundations for emotional wellbeing, confidence and long-term development. Good communication, trust and mutual understanding help teenagers navigate challenges more effectively while also helping parents provide guidance in a supportive way. [2] [3]",
      "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand teenage behaviour, emotional wellbeing and family dynamics while supporting stronger relationships and healthier communication.",
      "At Manovaidya, Parent-Teen Relationship Treatment Focuses On:",
      "✔ Parent-Teen Communication",
      "✔ Teenage Behaviour Challenges",
      "✔ Emotional Connection",
      "✔ Trust Building",
      "✔ Family Conflict Resolution",
      "✔ Healthy Boundaries & Positive Relationships"
    ]
  },
  {
    "title": "Understanding Parent-Teen Relationships",
    "id": "understanding-parent-teen-relationships",
    "lines": [
      "The relationship between parents and teenagers naturally changes during adolescence.",
      "Children who once openly shared every experience with their parents may gradually become more private as they begin exploring independence and personal identity.",
      "This change is often confusing for families.",
      "Parents may feel that their teenager no longer listens to them, while teenagers may feel that they are not being understood.",
      "In reality, both parents and teenagers are adjusting to a new stage of life.",
      "Many families searching for Parent-Teen Relationship Treatment in India, Parenting Teenagers or Teen Behaviour Support are looking for practical ways to improve communication and rebuild trust.",
      "Healthy relationships during adolescence are not built by controlling teenagers. They are built through understanding, respect, communication and consistent emotional support. [2] [3]",
      "Teenagers who experience healthy family relationships often feel more comfortable discussing their worries, asking for guidance and navigating life's challenges.",
      "Strong relationships also help teenagers develop confidence, emotional resilience and better decision-making skills."
    ]
  },
  {
    "title": "Common Parent-Teen Relationship Challenges",
    "id": "common-parent-teen-relationship-challenges",
    "lines": [
      "Every family experiences disagreements from time to time.",
      "However, when conflicts become frequent or communication begins breaking down, relationships may require additional attention.",
      "Parents may notice changes in behaviour, communication and emotional connection.",
      "Communication Challenges",
      "Limited conversations",
      "One-word answers",
      "Avoiding discussions",
      "Misunderstandings",
      "Difficulty expressing emotions",
      "Behavioural Challenges",
      "Frequent arguments",
      "Irritability",
      "Refusing guidance",
      "Emotional outbursts",
      "Breaking family routines",
      "Emotional Challenges",
      "Emotional distance",
      "Reduced trust",
      "Feeling misunderstood",
      "Increased sensitivity",
      "Avoiding family interaction",
      "Lifestyle Challenges",
      "Excessive screen use",
      "Spending more time alone",
      "Lack of family engagement",
      "Irregular routines",
      "Reduced participation in shared activities",
      "The presence of occasional disagreements is a normal part of adolescence. However, when relationship difficulties begin affecting communication, emotional wellbeing or family harmony, they deserve understanding and support."
    ]
  },
  {
    "title": "Why Teenagers Become Distant From Parents",
    "id": "why-teenagers-become-distant-from-parents",
    "lines": [
      "Many parents believe that teenagers intentionally avoid them or no longer value family relationships.",
      "In reality, emotional distance often develops because multiple factors influence a teenager's behaviour during adolescence.",
      "Identity Development",
      "Teenagers naturally begin developing their own opinions, values and interests.",
      "This growing independence may sometimes be misunderstood as rejection.",
      "Emotional Changes",
      "Adolescence involves significant emotional development.",
      "Teenagers may experience mood changes, uncertainty and increased emotional sensitivity while learning to manage new experiences. [1]",
      "Academic Pressure",
      "School expectations, examinations and future career concerns may leave teenagers feeling emotionally overwhelmed, making them less likely to communicate openly.",
      "Peer Relationships",
      "Friends become an increasingly important part of teenage life.",
      "Teenagers may seek advice and emotional support from peers while gradually becoming more independent from parents.",
      "Screen & Social Media Use",
      "Digital devices can reduce face-to-face family interaction when screen use becomes excessive.",
      "Online engagement may replace meaningful conversations if healthy boundaries are not maintained.",
      "Fear of Judgement",
      "Some teenagers avoid talking because they fear criticism, punishment or not being understood.",
      "Creating an emotionally safe environment often encourages more open communication. [3] [5]",
      "Communication Patterns",
      "When conversations become focused only on academics, rules or mistakes, teenagers may become reluctant to share their emotions or daily experiences.",
      "Many parents worry that emotional distance today may permanently damage their relationship with their teenager. In most situations, healthy communication, understanding and consistent emotional support can help rebuild trust and strengthen family relationships over time."
    ]
  },
  {
    "title": "How Parent-Teen Relationship Challenges Can Affect Teenagers",
    "id": "how-parent-teen-relationship-challenges-affect-teenagers",
    "lines": [
      "The relationship between parents and teenagers influences much more than daily communication.",
      "A healthy family relationship provides emotional security, trust and guidance during one of the most important stages of life. When communication becomes difficult or conflicts continue for a long time, teenagers may find it harder to manage emotions, make decisions and navigate everyday challenges. [2] [3]",
      "Understanding how relationship challenges influence overall wellbeing often helps families focus on building connection rather than simply correcting behaviour.",
      "Emotional Wellbeing",
      "Teenagers who feel misunderstood or emotionally disconnected may experience:",
      "Emotional withdrawal",
      "Increased frustration",
      "Irritability",
      "Low confidence",
      "Feelings of loneliness",
      "Difficulty expressing emotions",
      "Many teenagers want support from their parents but struggle to communicate what they are feeling.",
      "Creating an emotionally safe environment often encourages healthier conversations and stronger relationships. [3] [4] [5]",
      "Confidence & Self-Esteem",
      "The way teenagers experience communication at home often influences how they view themselves.",
      "Constant criticism, comparison or frequent conflict may gradually reduce confidence and self-belief.",
      "On the other hand, encouragement, trust and respectful communication help teenagers develop emotional resilience and healthier self-esteem. [2] [4] [5]",
      "Behaviour",
      "Behaviour is often a form of communication.",
      "When teenagers become angry, distant or argumentative, it does not always mean they are being intentionally difficult.",
      "Sometimes these behaviours reflect emotional stress, confusion, frustration or difficulty expressing feelings.",
      "Understanding the reasons behind behaviour often helps parents respond more effectively.",
      "Academic Performance",
      "Relationship challenges at home may influence concentration, motivation and learning.",
      "Teenagers experiencing ongoing emotional stress may find it difficult to:",
      "Focus on studies",
      "Complete assignments",
      "Stay motivated",
      "Manage examination pressure",
      "Supporting emotional wellbeing at home often creates a stronger foundation for academic growth.",
      "Social Relationships",
      "Teenagers learn communication, trust and emotional regulation within their family environment.",
      "Positive parent-teen relationships often help teenagers build healthier friendships and stronger interpersonal skills. [2] [3]",
      "When family communication improves, teenagers frequently become more comfortable expressing themselves in other areas of life as well.",
      "Long-Term Development",
      "The teenage years help shape future confidence, communication skills and emotional resilience.",
      "Strong family relationships can support:",
      "Better decision-making",
      "Greater independence",
      "Healthy emotional regulation",
      "Positive self-esteem",
      "Stronger coping skills",
      "Building trust during adolescence often benefits both parents and teenagers for many years."
    ]
  },
  {
    "title": "The Neuro-Ayurveda Approach to Parent-Teen Relationship Treatment",
    "id": "neuro-ayurveda-approach",
    "lines": [
      "At Manovaidya, we understand that relationship challenges are rarely caused by one person alone.",
      "Rather than focusing only on behaviour or communication problems, we look at the broader factors that may influence emotional wellbeing, confidence, behaviour, family interactions and overall development.",
      "The Neuro-Ayurveda Development System helps families better understand these challenges through five interconnected pillars. Ayurvedic concepts around Manas, Sattvavajaya, Sadvritta and Achara Rasayana provide conceptual support for mind regulation, healthy conduct, respectful communication and emotional balance. [7] [8] [9] [10]",
      "Brain Nourishment System",
      "Healthy communication begins with healthy emotional and cognitive functioning.",
      "The Brain Nourishment System focuses on understanding factors that may influence:",
      "Emotional regulation",
      "Attention",
      "Decision making",
      "Self-awareness",
      "Confidence",
      "Communication",
      "Supporting emotional growth often begins with understanding how teenagers process thoughts, emotions and daily experiences.",
      "Gut Response System",
      "Growing research continues to explore the relationship between physical wellbeing and emotional health.",
      "Many teenagers experiencing emotional stress may also experience:",
      "Irregular eating habits",
      "Digestive discomfort",
      "Reduced energy",
      "Lifestyle imbalance",
      "Sleep disturbances",
      "The Gut Response System focuses on understanding how overall wellbeing may influence emotional balance and daily functioning. Ayurvedic philosophy traditionally views diet, sleep, lifestyle and mental wellbeing as interconnected. [7] [8]",
      "Neural Network System",
      "Every experience contributes to patterns of thinking and responding.",
      "The Neural Network System focuses on understanding:",
      "Communication habits",
      "Emotional responses",
      "Behavioural patterns",
      "Relationship experiences",
      "Adaptability",
      "Understanding these patterns often helps families improve communication and strengthen relationships over time.",
      "Sensory Integration System",
      "The environment around teenagers influences emotional wellbeing.",
      "Factors such as:",
      "School environment",
      "Social situations",
      "Family atmosphere",
      "Digital stimulation",
      "Daily routines",
      "may influence behaviour, communication and emotional responses.",
      "Understanding these influences often helps families create healthier home environments. [9] [10]",
      "Behaviour Guidance System",
      "Behaviour is often a reflection of underlying emotional experiences.",
      "Teenagers experiencing relationship challenges may show:",
      "Anger",
      "Emotional withdrawal",
      "Reduced communication",
      "Irritability",
      "Defiance",
      "Avoidance",
      "Rather than reacting only to behaviour, this pillar focuses on understanding what may be influencing those behaviours and helping families respond with greater understanding and consistency."
    ]
  },
  {
    "title": "How Parents Can Build Stronger Relationships With Teenagers",
    "id": "how-parents-can-build-stronger-relationships-with-teenagers",
    "lines": [
      "Healthy relationships are built through trust, communication and mutual respect.",
      "Small and consistent changes often strengthen family relationships over time.",
      "Listen Before Giving Advice",
      "Teenagers often want to feel heard before they are corrected.",
      "Listening calmly without interrupting helps create emotional safety and encourages open communication. [3] [5]",
      "Avoid Judging Every Conversation",
      "If every discussion turns into criticism or advice, teenagers may stop sharing their thoughts.",
      "Showing curiosity and understanding often builds stronger trust.",
      "Respect Growing Independence",
      "Teenagers naturally seek more independence.",
      "Providing appropriate freedom while maintaining healthy boundaries often supports confidence and responsibility.",
      "Spend Quality Time Together",
      "Meaningful family time does not always require elaborate activities.",
      "Simple conversations, shared meals or spending uninterrupted time together can strengthen emotional connection.",
      "Appreciate Effort",
      "Recognizing effort, kindness and personal growth often builds confidence and encourages healthier communication.",
      "Stay Calm During Conflicts",
      "Disagreements are a normal part of adolescence.",
      "Responding calmly instead of reacting emotionally often helps resolve conflicts more effectively.",
      "Create Emotional Safety",
      "Teenagers are more likely to share their thoughts when they know they will be listened to with respect rather than fear criticism or punishment.",
      "Building emotional safety is one of the strongest foundations of a healthy parent-teen relationship."
    ]
  },
  {
    "title": "How Manovaidya Supports Families",
    "id": "how-manovaidya-supports-families",
    "lines": [
      "At Manovaidya, support begins with understanding the family as a whole rather than focusing only on the teenager's behaviour.",
      "Our process typically includes:",
      "Step 1: Comprehensive Assessment",
      "Understanding family communication, emotional wellbeing, behaviour patterns, daily routines, lifestyle habits and parent concerns.",
      "Step 2: Personalized Guidance",
      "Providing recommendations based on the teenager's emotional, behavioural and developmental needs while considering the family environment.",
      "Step 3: Parent Guidance & Family Support",
      "Helping parents improve communication, strengthen trust and create a more supportive home environment.",
      "Step 4: Neuro-Ayurveda Development System",
      "Applying the five-pillar framework to better understand emotional wellbeing, family dynamics, confidence and behaviour.",
      "Step 5: Progress Tracking & Follow-Up",
      "Creating a structured roadmap that helps families monitor improvements in communication, emotional wellbeing and overall development.",
      "When Should Parents Consider an Assessment?",
      "Parents may consider seeking guidance if they notice:",
      "Frequent arguments",
      "Emotional distance",
      "Reduced communication",
      "Ongoing trust issues",
      "Persistent anger or irritability",
      "Difficulty setting healthy boundaries",
      "Behavioural changes affecting family life",
      "Emotional wellbeing concerns",
      "Relationship challenges affecting daily functioning",
      "A structured assessment can help families better understand the factors influencing communication, behaviour and emotional wellbeing while creating a practical roadmap toward healthier relationships."
    ]
  },
  {
    "title": "Why Families Choose Manovaidya",
    "id": "why-families-choose-manovaidya",
    "lines": [
      "Choosing the right support for teenage behavioural, emotional and family relationship challenges can feel overwhelming. Many parents are not only looking for answers to difficult behaviours but also for a structured approach that helps rebuild trust, improve communication and strengthen family relationships.",
      "At Manovaidya, we believe that lasting change begins with understanding. Rather than focusing only on arguments, behaviour or discipline, we help families understand the emotional, behavioural and developmental factors that may be influencing the parent-teen relationship.",
      "✔ Comprehensive Parent-Teen Relationship Assessment",
      "Every family is different.",
      "Every teenager has a unique personality, communication style, emotional needs and developmental journey.",
      "Our structured assessment helps families understand communication patterns, behavioural concerns, emotional wellbeing and family dynamics before creating personalized guidance.",
      "✔ Neuro-Ayurveda Development System",
      "Manovaidya follows the Neuro-Ayurveda Development System, a structured framework that understands emotional wellbeing and family relationships through five interconnected pillars:",
      "Brain Nourishment System",
      "Gut Response System",
      "Neural Network System",
      "Sensory Integration System",
      "Behaviour Guidance System",
      "This approach helps families understand not only behaviours but also the factors that may be influencing them.",
      "✔ Parent-Focused Guidance",
      "Teenagers grow best when parents feel confident in supporting them.",
      "Our guidance helps parents improve communication, develop healthy boundaries and build stronger emotional connections with their teenagers.",
      "✔ Personalized Family Support",
      "Every family experiences different challenges.",
      "Some struggle with communication.",
      "Some experience emotional distance.",
      "Others face frequent arguments, trust issues or behavioural concerns.",
      "Guidance is personalized according to the family's unique needs.",
      "✔ Long-Term Relationship Building",
      "Our goal is not simply to reduce conflicts.",
      "We focus on helping families build healthier communication, stronger trust, emotional resilience and positive long-term relationships.",
      "✔ Family-Centred Approach",
      "Parents and teenagers grow together.",
      "When families understand each other better, communication often becomes healthier, relationships become stronger and emotional wellbeing improves naturally."
    ]
  },
  {
    "title": "Why Families Across India Connect With Manovaidya",
    "id": "why-families-across-india-connect-with-manovaidya",
    "lines": [
      "Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Parent-Teen Relationship Treatment, Teen Behaviour Guidance and Family Communication Support through both online and in-clinic consultations."
    ]
  },
  {
    "title": "About Dr. Ankush Garg",
    "id": "about-dr-ankush-garg",
    "lines": [
      "Autism, ADHD, Child Development & Mental Health Specialist in India",
      "Dr. Ankush Garg is the Founder of Manovaidya and Developer of the Neuro-Ayurveda Development System.",
      "His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and family-centred approach.",
      "Many families seek guidance not only because of behavioural concerns but because they want stronger communication, healthier relationships and a better understanding of their teenager's emotional needs.",
      "Through structured assessments, personalized recommendations, parent guidance and continuous follow-up, Dr. Ankush Garg helps families better understand emotional wellbeing, behaviour, communication and long-term development.",
      "Based in Delhi NCR, Dr. Ankush Garg supports children, teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-consultation",
    "lines": [
      "Concerned About Your Relationship With Your Teenager?",
      "If communication has become difficult, trust feels weaker, arguments have become more frequent or your teenager seems emotionally distant, understanding the underlying factors is often the first step toward rebuilding a healthier relationship.",
      "At Manovaidya, we help families better understand teenage behaviour, emotional wellbeing and communication through structured assessment, personalized guidance and family-centred support."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-consultation",
    "lines": [
      "Take the First Step Towards Better Communication, Stronger Trust & Healthier Family Relationships",
      "📞 Book Assessment Session",
      "📞 Speak With Our Team",
      "📞 Get Personalized Guidance",
      "complete karenge."
    ]
  }
];
const faqs = [
  {
    "question": "1. Why doesn't my teenager talk to me anymore?",
    "answer": "Many teenagers become more private as they grow and develop independence. Academic pressure, friendships, emotional changes and fear of judgement may reduce communication. This does not always mean they no longer trust their parents. Creating a calm and supportive environment often helps teenagers open up over time. [1] [3]"
  },
  {
    "question": "2. Why is my teenager always angry with me?",
    "answer": "Teenagers often experience emotional, social and academic pressures that may lead to frustration or irritability. Sometimes anger is actually a sign of stress, confusion or feeling misunderstood. Staying calm, listening carefully and avoiding constant criticism can help improve communication and reduce conflict. [4] [5]"
  },
  {
    "question": "3. How can I improve my relationship with my teenager?",
    "answer": "Building a stronger relationship starts with trust, communication and quality time. Listening without judgement, respecting growing independence and showing interest in your teenager's life can strengthen emotional connection. Small positive interactions often make a big difference over time. [2] [3] [5]"
  },
  {
    "question": "4. Why do teenagers become distant from parents?",
    "answer": "Teenagers naturally seek more independence as they develop their identity. Academic pressure, peer relationships, emotional changes and excessive screen use may also contribute to emotional distance. Maintaining open communication and emotional support can help preserve connection during adolescence. [1] [3]"
  },
  {
    "question": "5. How should parents communicate with teenagers?",
    "answer": "The most effective communication involves listening first, staying calm and avoiding immediate criticism. Teenagers are more likely to share their thoughts when they feel respected and understood. Open conversations often help build trust and strengthen family relationships. [3] [5]"
  },
  {
    "question": "6. What should I do if my teenager doesn't listen to me?",
    "answer": "Teenagers respond better when they feel involved rather than controlled. Clear expectations, consistent boundaries and respectful communication are often more effective than repeated instructions or arguments. Understanding the reason behind resistance can also improve cooperation."
  },
  {
    "question": "7. How do I handle frequent arguments with my teenager?",
    "answer": "Frequent arguments can often be reduced by staying calm, choosing the right time for discussions and focusing on solutions rather than blame. Listening carefully and avoiding emotional reactions may help create healthier communication and reduce conflict. [3] [5]"
  },
  {
    "question": "8. Is teenage rebellion normal?",
    "answer": "A certain level of independence-seeking behaviour is a normal part of adolescence. Teenagers often question rules and explore their own opinions. However, if behaviour begins affecting emotional wellbeing, relationships or daily functioning, additional support may be helpful. [1]"
  },
  {
    "question": "9. How can I build trust with my teenager?",
    "answer": "Trust develops through honesty, consistency and respectful communication. Keeping promises, listening without judgement and respecting appropriate privacy can help strengthen trust and improve parent-teen relationships over time. [2] [3]"
  },
  {
    "question": "10. How can I discipline my teenager without damaging our relationship?",
    "answer": "Healthy discipline focuses on guidance rather than punishment. Clear boundaries, consistent expectations and respectful communication often help teenagers learn responsibility while preserving trust and emotional connection."
  },
  {
    "question": "11. Can family relationships affect teen mental health?",
    "answer": "Yes. Supportive family relationships can strengthen confidence, emotional wellbeing and resilience. Ongoing conflict, communication problems or emotional distance may increase stress and affect a teenager's overall wellbeing. [2] [3] [4]"
  },
  {
    "question": "12. How can parents support teenagers emotionally?",
    "answer": "Parents can support teenagers by listening without judgement, validating emotions and providing consistent encouragement. Creating a safe space where teenagers feel comfortable sharing their thoughts often strengthens emotional wellbeing and trust. [4] [5]"
  },
  {
    "question": "13. How does Manovaidya support families?",
    "answer": "Manovaidya supports families through structured assessment, personalized guidance, parent support and the Neuro-Ayurveda Development System. The goal is to improve communication, strengthen relationships and support healthy emotional development."
  },
  {
    "question": "14. Can parent guidance improve teenage behaviour?",
    "answer": "In many situations, yes. Behaviour is often influenced by communication, family dynamics and emotional wellbeing. Small changes in parenting approaches can sometimes lead to meaningful improvements in behaviour and family relationships. [5] [6]"
  },
  {
    "question": "15. When should parents seek professional guidance?",
    "answer": "Parents may consider seeking guidance when communication becomes difficult, arguments become frequent, trust breaks down or emotional wellbeing is affected. A structured assessment can help families better understand challenges and identify practical solutions."
  }
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question.replace(/^\d+\.\s*/, ""),
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Teen Mental Wellness", item: "/teen-mental-wellness-india/" },
    { "@type": "ListItem", position: 3, name: "Parent-Teen Relationship Treatment", item: "/parent-teen-relationship-support/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Parent-Teen Relationship Treatment in India",
  description: "Looking for Parent-Teen Relationship Treatment in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya.",
  url: "/parent-teen-relationship-support/",
  about: ["Parent Teen Relationship Support", "Teen Behaviour Support", "Family Relationship Support"],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ankush Garg",
  medicalSpecialty: ["Mental Health", "Child Development", "Teen Mental Wellness"],
  worksFor: { "@type": "MedicalOrganization", name: "Manovaidya" },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "India"],
};

function SidebarCard({ children, className = "", id }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

const CitationClickContext = React.createContext({
  onCitationClick: null,
});

function Citation({ id, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="mx-0.5 inline cursor-pointer rounded px-0.5 font-black text-[#7835A4] underline decoration-[#7835A4]/40 underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]"
    >
      [{id}]
    </button>
  );
}

function CitationText({ text, onCitationClick, allowedRuleKeys }) {
  const linkContext = React.useContext(CitationClickContext);
  const citationHandler = onCitationClick || linkContext?.onCitationClick;
  const source = String(text);
  const citationPattern = /\[(\d+)\]/;
  const linkedRuleKeysInText = new Set();
  const parts = [];
  let cursor = 0;
  let safety = 0;

  while (cursor < source.length && safety < 100) {
    safety += 1;
    const remaining = source.slice(cursor);
    const candidates = [];
    const citationMatch = remaining.match(citationPattern);

    if (citationMatch) {
      candidates.push({
        index: citationMatch.index,
        text: citationMatch[0],
        citationId: citationMatch[1],
        type: "citation",
      });
    }

    articleLinkRules.forEach((rule) => {
      const ruleKey = getArticleLinkRuleKey(rule);
      if (!allowedRuleKeys?.has(ruleKey) || linkedRuleKeysInText.has(ruleKey)) return;

      const keywordMatch = remaining.match(rule.pattern);
      if (keywordMatch) {
        candidates.push({
          index: keywordMatch.index,
          text: keywordMatch[0],
          rule,
          ruleKey,
          type: "keyword",
        });
      }
    });

    candidates.sort((a, b) => a.index - b.index || b.text.length - a.text.length);
    if (!candidates.length) {
      parts.push(remaining);
      break;
    }

    const next = candidates[0];
    const absoluteIndex = cursor + next.index;

    if (absoluteIndex > cursor) {
      parts.push(source.slice(cursor, absoluteIndex));
    }

    if (next.type === "citation") {
      parts.push(<Citation key={`${next.text}-${parts.length}`} id={next.citationId} onClick={citationHandler} />);
    } else {
      linkedRuleKeysInText.add(next.ruleKey);
      parts.push(
        <a key={`${next.text}-${parts.length}`} href={next.rule.href} className="font-black text-[#7835A4] underline decoration-[#7835A4]/35 underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]">
          {next.text}
        </a>
      );
    }

    cursor = absoluteIndex + next.text.length;
  }

  return parts.map((part, index) =>
    typeof part === "string" ? <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment> : part
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#7835A4]">
            Parent-Teen Relationship Support
          </p>
          <h2 className="mt-2 text-[21px] font-black leading-tight text-[#111827]">Key Takeaways</h2>
          <ul className="mt-4 space-y-2.5">
            {keyTakeaways.map((item) => (
              <li key={item} className="flex gap-3 text-[13px] font-bold leading-6 text-[#21142d]">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec2b83]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f3eadb] p-6 sm:p-8">
          <h3 className="text-[16px] font-black leading-tight text-[#111827]">Want more content like this?</h3>
          <p className="mt-3 text-[13px] font-semibold leading-6 text-[#111827]">
            Join our teen mental wellness newsletter for family communication, trust and parent guidance insights from our experts.
          </p>
          <form className="mt-5 space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]"
            />
            <button
              type="button"
              className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]"
            >
              Join Now
            </button>
          </form>
          <p className="mt-4 text-[11px] font-semibold text-[#111827]">
            Your <a href="/privacy-policy" className="underline decoration-[#111827] underline-offset-2">privacy</a> is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}

function LinkifiedText({ text }) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (!part.startsWith("http://") && !part.startsWith("https://")) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    return (
      <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    );
  });
}

function ResourceReferenceText({ text }) {
  return text.split("\n").map((line, index) => {
    const referenceMatch = line.match(/^\[(\d+)\]/);

    return (
      <div
        key={`${line}-${index}`}
        id={referenceMatch ? `reference-${referenceMatch[1]}` : undefined}
        className={referenceMatch ? "scroll-mt-28" : undefined}
      >
        <LinkifiedText text={line} />
      </div>
    );
  });
}

function MedicalReferencesBlock() {
  const [heading, ...referenceLines] = fullMedicalReferenceContent.split("\n");
  const referenceBody = referenceLines.join("\n");

  return (
    <section className="mt-5 rounded-xl border border-[#eadff1] bg-[#fbf9fd] p-6 sm:p-8" id="medical-references">
      <h2 className="mb-4 text-[22px] font-black leading-tight text-[#2d1b45]">{heading}</h2>
      <div className="max-w-full whitespace-pre-wrap break-words text-[14px] font-semibold leading-7 text-[#51465a] [&_a]:break-all [&_a]:text-[#7835A4] [&_a]:underline">
        <ResourceReferenceText text={referenceBody} />
      </div>
    </section>
  );
}

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Teen Mental Wellness Pages</h2>
      <div className="mt-4 space-y-3">
        <a href="/teen-stress-anxiety-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Activity className="h-4 w-4 text-[#7835A4]" /> Teen Stress & Anxiety Treatment
        </a>
        <a href="/teen-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <HeartHandshake className="h-4 w-4 text-[#7835A4]" /> Teen Depression & Low Mood Treatment
        </a>
        <a href="/exam-performance-pressure/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <BookOpen className="h-4 w-4 text-[#7835A4]" /> Exam & Performance Pressure Support
        </a>
        <a href="/teen-confidence-emotional-wellbeing/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Sparkles className="h-4 w-4 text-[#7835A4]" /> Teen Confidence & Emotional Wellbeing
        </a>
        <a href="/teen-screen-addiction-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Brain className="h-4 w-4 text-[#7835A4]" /> Teen Screen Addiction Treatment
        </a>
      </div>
    </SidebarCard>
  );
}

const subheadingLines = new Set([
  "Communication Challenges",
  "Behavioural Challenges",
  "Emotional Challenges",
  "Lifestyle Challenges",
  "Identity Development",
  "Emotional Changes",
  "Academic Pressure",
  "Peer Relationships",
  "Screen & Social Media Use",
  "Fear of Judgement",
  "Communication Patterns",
  "Emotional Wellbeing",
  "Confidence & Self-Esteem",
  "Behaviour",
  "Academic Performance",
  "Social Relationships",
  "Long-Term Development",
  "Brain Nourishment System",
  "Gut Response System",
  "Neural Network System",
  "Sensory Integration System",
  "Behaviour Guidance System",
  "Listen Before Giving Advice",
  "Avoid Judging Every Conversation",
  "Respect Growing Independence",
  "Spend Quality Time Together",
  "Appreciate Effort",
  "Stay Calm During Conflicts",
  "Create Emotional Safety",
  "Step 1: Comprehensive Assessment",
  "Step 2: Personalized Guidance",
  "Step 3: Parent Guidance & Family Support",
  "Step 4: Neuro-Ayurveda Development System",
  "Step 5: Progress Tracking & Follow-Up",
  "When Should Parents Consider an Assessment?",
  "? Comprehensive Parent-Teen Relationship Assessment",
  "? Neuro-Ayurveda Development System",
  "? Parent-Focused Guidance",
  "? Personalized Family Support",
  "? Long-Term Relationship Building",
  "? Family-Centred Approach",
  "Autism, ADHD, Child Development & Mental Health Specialist in India",
  "Concerned About Your Relationship With Your Teenager?",
  "Take the First Step Towards Better Communication, Stronger Trust & Healthier Family Relationships",
]);

const internalLinks = [
  { text: "Learn more about Teen Mental Wellness Treatment.", href: "/teen-mental-wellness-india/" },
  { text: "Explore Teen Stress & Anxiety Treatment.", href: "/teen-stress-anxiety-support/" },
  { text: "Learn about Teen Depression & Low Mood Treatment.", href: "/teen-depression-support/" },
  { text: "Explore Teen Confidence & Emotional Wellbeing Support.", href: "/teen-confidence-emotional-wellbeing/" },
  { text: "Understand Teen Screen Addiction Treatment.", href: "/teen-screen-addiction-support/" },
  { text: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
];

function ContentLine({ line, onCitationClick, allowedRuleKeys }) {
  const cleanLine = line
    .replace(/^âœ”\s*/, "")
    .replace(/^ðŸ“ž\s*/, "")
    .replace(/^complete karenge\.$/, "");

  if (!cleanLine) {
    return null;
  }

  if (subheadingLines.has(line) || subheadingLines.has(cleanLine)) {
    return <h3 className="mt-5 text-[16px] font-black text-[#21142d]">{cleanLine}</h3>;
  }

  if (line.startsWith("?") || line.startsWith("??") || line.startsWith("âœ”") || line.startsWith("ðŸ“ž")) {
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span><CitationText text={cleanLine} onCitationClick={onCitationClick} allowedRuleKeys={allowedRuleKeys} /></span>
      </p>
    );
  }

  return (
    <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
      <CitationText text={cleanLine} onCitationClick={onCitationClick} allowedRuleKeys={allowedRuleKeys} />
    </p>
  );
}

function SectionImage({ title }) {
  if (title === "How Parents Can Build Stronger Relationships With Teenagers") {
    return (
      <img
        src={communicationImage}
        alt="Parent teen communication and trust building support"
        className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
      />
    );
  }

  if (title === "The Neuro-Ayurveda Approach to Parent-Teen Relationship Treatment") {
    return (
      <div className="mt-5 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] shadow-[0_12px_30px_rgba(58,31,90,0.08)]">
        <img
          src={neuroAyurvedaImage}
          alt="Neuro Ayurveda approach for parent teen relationship support"
          className="max-h-[300px] w-full max-w-[720px] object-contain object-center"
        />
      </div>
    );
  }

  return null;
}

function ContentSection({ section, onCitationClick, ruleKeysByLine }) {
  if (section.title === "Book a Consultation") {
    return (
      <section id={section.id} className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
        <div className="p-6 sm:p-8">
          <h2 className="text-[22px] font-black leading-tight">Book a Consultation</h2>
          <div className="mt-3 space-y-1">
            {section.lines.map((line, index) => (
              <p key={line} className="text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                <CitationText
                  text={line.replace(/^ðŸ“ž\s*/, "").replace(/^complete karenge\.$/, "")}
                  onCitationClick={onCitationClick}
                  allowedRuleKeys={ruleKeysByLine?.get(`${section.id}-${index}`)}
                />
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6">
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">
              Book Consultation
            </a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">
              Take Teen Wellness Assessment
            </a>
          </div>
        </div>
        <img src={ctaImage} alt="Family relationship and teen behaviour support in India" className="h-40 w-full object-cover object-center sm:h-52" />
      </section>
    );
  }

  return (
    <section id={section.id} className="mt-9">
      {section.title !== "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">{section.title}</h2>}
      {section.title === "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">Helping Parents & Teenagers Build Better Communication, Trust, Emotional Connection & Healthy Relationships</h2>}
      <div className="mt-3">
        {section.lines.map((line, index) => (
          <ContentLine
            key={`${section.id}-${index}`}
            line={line}
            onCitationClick={onCitationClick}
            allowedRuleKeys={ruleKeysByLine?.get(`${section.id}-${index}`)}
          />
        ))}
      </div>
      <SectionImage title={section.title} />
    </section>
  );
}

function ParentTeenRelationshipSupportPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showResources, setShowResources] = React.useState(false);
  const pageUrl = "https://manovaidya.org/parent-teen-relationship-support";
  const pageTitle = "Parent-Teen Relationship Treatment in India | Manovaidya";
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedPageTitle = encodeURIComponent(pageTitle);
  const articleShareLinks = [
    { label: "f", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`, title: "Share on Facebook" },
    { label: "x", href: `https://twitter.com/intent/tweet?url=${encodedPageUrl}&text=${encodedPageTitle}`, title: "Share on X" },
    { label: "in", href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}&title=${encodedPageTitle}`, title: "Share on LinkedIn" },
    { label: "wa", href: `https://api.whatsapp.com/send?text=${encodedPageTitle}%20${encodedPageUrl}`, title: "Share on WhatsApp" },
  ];

  const handleCitationClick = React.useCallback((referenceId) => {
    setShowResources(true);
    window.setTimeout(() => {
      document
        .getElementById(`reference-${referenceId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  const ruleKeysByLine = React.useMemo(() => {
    const ruleKeys = new Map();
    const linkedRuleKeys = new Set();

    sections.forEach((section) => {
      section.lines.forEach((line, index) => {
        const cleanLine = line
          .replace(/^âœ”\s*/, "")
          .replace(/^ðŸ“ž\s*/, "")
          .replace(/^complete karenge\.$/, "");

        if (!cleanLine || subheadingLines.has(line) || subheadingLines.has(cleanLine)) return;

        const lineRuleKeys = getArticleLinkRuleKeysForText(cleanLine, linkedRuleKeys);
        if (lineRuleKeys.size) {
          ruleKeys.set(`${section.id}-${index}`, lineRuleKeys);
        }
      });
    });

    faqs.forEach((faq, index) => {
      const lineRuleKeys = getArticleLinkRuleKeysForText(faq.answer, linkedRuleKeys);
      if (lineRuleKeys.size) {
        ruleKeys.set(`faq-${index}`, lineRuleKeys);
      }
    });

    return ruleKeys;
  }, []);

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    const schemas = [faqSchema, breadcrumbSchema, medicalWebPageSchema, physicianSchema];
    const scriptId = "parent-teen-relationship-schema";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schemas);
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

  const linkRenderContext = {
    onCitationClick: handleCitationClick,
  };

  return (
    <CitationClickContext.Provider value={linkRenderContext}>
      <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
      <Seo
        title="Parent-Teen Relationship Treatment in India | Teen Behaviour & Family Guidance | Manovaidya"
        description="Looking for Parent-Teen Relationship Treatment in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        keywords="Parent Teen Relationship Support, Parent Teen Relationship Treatment in India, Teen Behaviour Support, Teen Communication Problems, Teen Behaviour Problems, Teen Relationship With Parents, Teen Parenting Support, Family Relationship Support, Teenage Anger, Teenage Attitude Problems, Parent Child Communication, Parent Teen Trust Issues, Teen Emotional Support, Teen Behaviour Challenges, Parenting Teenagers, Teen Family Problems"
        path="/parent-teen-relationship-support"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Parent-Teen Relationship Treatment in India",
          "description": "Looking for Parent-Teen Relationship Treatment in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/teen-mental-wellness-india/" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Parent-Teen Relationship Treatment</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Behaviour & Family Guidance</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">Parent-Teen Relationship Treatment in India</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">Helping Parents & Teenagers Build Better Communication, Trust, Emotional Connection & Healthy Relationships</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Consultation</a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                    <p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]">
                  <span>Share:</span>
                  {articleShareLinks.map(({ label, href, title }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label={title}>
                      {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex">
                <Brain className="mb-1 h-5 w-5" /> Neuro-Ayurveda Development System
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Parent Teen Relationship Treatment in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          {sections
            .filter((section) => section.id !== "book-consultation")
            .map((section) => (
              <ContentSection
                key={section.id}
                section={section}
                onCitationClick={handleCitationClick}
                ruleKeysByLine={ruleKeysByLine}
              />
            ))}

          <section id="internal-links" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[18px] font-black text-[#17111f]">Helpful Teen Mental Wellness Links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((link) => (
                <a key={link.href} href={link.href} className="flex items-center gap-2 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline">
                  <ArrowRight className="h-4 w-4" /> {link.text}
                </a>
              ))}
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={openFaq === index}>
                    <span className="text-[14px] font-black text-[#21142d]">{faq.question}</span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbf9fd] transition-transform ${openFaq === index ? "rotate-180 bg-[#f0e7f6] text-[#7835A4]" : "text-[#9b8ea5]"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-[#eadff1] bg-[#fbf9fd] p-4">
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">
                        <CitationText
                          text={faq.answer}
                          onCitationClick={handleCitationClick}
                          allowedRuleKeys={ruleKeysByLine.get(`faq-${index}`)}
                        />
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => setShowResources((current) => !current)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#d8c6e5] bg-[#7835A4] px-6 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-[#7835A4]/20 transition hover:bg-[#64258e]"
              aria-expanded={showResources}
              aria-controls="medical-references"
            >
              <BookOpen className="h-4 w-4" />
              Resources
              <ChevronDown className={`h-4 w-4 transition ${showResources ? "rotate-180" : ""}`} />
            </button>
            {showResources && <MedicalReferencesBlock />}
          </div>

          <ContentSection
            section={sections.find((section) => section.id === "book-consultation")}
            onCitationClick={handleCitationClick}
            ruleKeysByLine={ruleKeysByLine}
          />

        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img
                src={doctorImage}
                alt="Dr Ankush Garg Manovaidya parent teen relationship family guidance clinician"
                className="h-12 w-12 shrink-0 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">
                  Authorised & Clinically Reviewed by Dr Ankush Garg
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Clinical Focus: Teen Mental Wellness, Autism, ADHD, Child Development and Mental Health
                </p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">
                  Last Updated: [20-07-2026]
                </p>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#5d3b90] p-3 text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Brain className="h-5 w-5" />
              </span>
              <p className="text-[12px] font-black leading-5">Neuro-Ayurveda Development System</p>
            </div>
          </SidebarCard>

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
                <a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}>
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />
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
                  <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedTeenMentalWellnessPages />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get a personalized relationship support plan for your family from our experts.</p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 78238 38638</p>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-[#fbf9fd]">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm"><Mail className="h-8 w-8" /></span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, teen development tips and Manovaidya updates.</p>
            </div>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button>
          </form>
        </div>
      </section>
      </main>
    </CitationClickContext.Provider>
  );
}

export default ParentTeenRelationshipSupportPage;
