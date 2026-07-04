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

const sections = [
  {
    "title": "Introduction",
    "id": "introduction",
    "lines": [
      "The teenage years are a period of significant emotional, social and personal growth. During this stage, teenagers begin developing their own identity, becoming more independent and learning to make decisions about their future. While this growth is a natural part of adolescence, it can also create misunderstandings, communication gaps and conflicts within families.",
      "Many parents notice that their teenager has become quieter, more argumentative, emotionally distant or less willing to share their thoughts. Some teenagers may spend more time alone, react strongly to simple conversations or become frustrated when parents try to offer advice. These situations often leave parents wondering whether such changes are a normal part of adolescence or a sign that their child needs additional support.",
      "At Manovaidya, we understand that a healthy parent-teen relationship is one of the strongest foundations for emotional wellbeing, confidence and long-term development. Good communication, trust and mutual understanding help teenagers navigate challenges more effectively while also helping parents provide guidance in a supportive way.",
      "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand teenage behaviour, emotional wellbeing and family dynamics while supporting stronger relationships and healthier communication.",
      "At Manovaidya, Parent-Teen Relationship Support Focuses On:",
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
      "Many families searching for Parent-Teen Relationship Support in India, Parenting Teenagers or Teen Behaviour Support are looking for practical ways to improve communication and rebuild trust.",
      "Healthy relationships during adolescence are not built by controlling teenagers. They are built through understanding, respect, communication and consistent emotional support.",
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
      "Teenagers may experience mood changes, uncertainty and increased emotional sensitivity while learning to manage new experiences.",
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
      "Creating an emotionally safe environment often encourages more open communication.",
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
      "A healthy family relationship provides emotional security, trust and guidance during one of the most important stages of life. When communication becomes difficult or conflicts continue for a long time, teenagers may find it harder to manage emotions, make decisions and navigate everyday challenges.",
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
      "Creating an emotionally safe environment often encourages healthier conversations and stronger relationships.",
      "Confidence & Self-Esteem",
      "The way teenagers experience communication at home often influences how they view themselves.",
      "Constant criticism, comparison or frequent conflict may gradually reduce confidence and self-belief.",
      "On the other hand, encouragement, trust and respectful communication help teenagers develop emotional resilience and healthier self-esteem.",
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
      "Positive parent-teen relationships often help teenagers build healthier friendships and stronger interpersonal skills.",
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
    "title": "The Neuro-Ayurveda Approach to Parent-Teen Relationship Support",
    "id": "neuro-ayurveda-approach",
    "lines": [
      "At Manovaidya, we understand that relationship challenges are rarely caused by one person alone.",
      "Rather than focusing only on behaviour or communication problems, we look at the broader factors that may influence emotional wellbeing, confidence, behaviour, family interactions and overall development.",
      "The Neuro-Ayurveda Development System helps families better understand these challenges through five interconnected pillars.",
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
      "The Gut Response System focuses on understanding how overall wellbeing may influence emotional balance and daily functioning.",
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
      "Understanding these influences often helps families create healthier home environments.",
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
      "Listening calmly without interrupting helps create emotional safety and encourages open communication.",
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
      "Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Parent-Teen Relationship Support, Teen Behaviour Guidance and Family Communication Support through both online and in-clinic consultations."
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
    "answer": "Many teenagers become more private as they grow and develop independence. Academic pressure, friendships, emotional changes and fear of judgement may reduce communication. This does not always mean they no longer trust their parents. Creating a calm and supportive environment often helps teenagers open up over time."
  },
  {
    "question": "2. Why is my teenager always angry with me?",
    "answer": "Teenagers often experience emotional, social and academic pressures that may lead to frustration or irritability. Sometimes anger is actually a sign of stress, confusion or feeling misunderstood. Staying calm, listening carefully and avoiding constant criticism can help improve communication and reduce conflict."
  },
  {
    "question": "3. How can I improve my relationship with my teenager?",
    "answer": "Building a stronger relationship starts with trust, communication and quality time. Listening without judgement, respecting growing independence and showing interest in your teenager's life can strengthen emotional connection. Small positive interactions often make a big difference over time."
  },
  {
    "question": "4. Why do teenagers become distant from parents?",
    "answer": "Teenagers naturally seek more independence as they develop their identity. Academic pressure, peer relationships, emotional changes and excessive screen use may also contribute to emotional distance. Maintaining open communication and emotional support can help preserve connection during adolescence."
  },
  {
    "question": "5. How should parents communicate with teenagers?",
    "answer": "The most effective communication involves listening first, staying calm and avoiding immediate criticism. Teenagers are more likely to share their thoughts when they feel respected and understood. Open conversations often help build trust and strengthen family relationships."
  },
  {
    "question": "6. What should I do if my teenager doesn't listen to me?",
    "answer": "Teenagers respond better when they feel involved rather than controlled. Clear expectations, consistent boundaries and respectful communication are often more effective than repeated instructions or arguments. Understanding the reason behind resistance can also improve cooperation."
  },
  {
    "question": "7. How do I handle frequent arguments with my teenager?",
    "answer": "Frequent arguments can often be reduced by staying calm, choosing the right time for discussions and focusing on solutions rather than blame. Listening carefully and avoiding emotional reactions may help create healthier communication and reduce conflict."
  },
  {
    "question": "8. Is teenage rebellion normal?",
    "answer": "A certain level of independence-seeking behaviour is a normal part of adolescence. Teenagers often question rules and explore their own opinions. However, if behaviour begins affecting emotional wellbeing, relationships or daily functioning, additional support may be helpful."
  },
  {
    "question": "9. How can I build trust with my teenager?",
    "answer": "Trust develops through honesty, consistency and respectful communication. Keeping promises, listening without judgement and respecting appropriate privacy can help strengthen trust and improve parent-teen relationships over time."
  },
  {
    "question": "10. How can I discipline my teenager without damaging our relationship?",
    "answer": "Healthy discipline focuses on guidance rather than punishment. Clear boundaries, consistent expectations and respectful communication often help teenagers learn responsibility while preserving trust and emotional connection."
  },
  {
    "question": "11. Can family relationships affect teen mental health?",
    "answer": "Yes. Supportive family relationships can strengthen confidence, emotional wellbeing and resilience. Ongoing conflict, communication problems or emotional distance may increase stress and affect a teenager's overall wellbeing."
  },
  {
    "question": "12. How can parents support teenagers emotionally?",
    "answer": "Parents can support teenagers by listening without judgement, validating emotions and providing consistent encouragement. Creating a safe space where teenagers feel comfortable sharing their thoughts often strengthens emotional wellbeing and trust."
  },
  {
    "question": "13. How does Manovaidya support families?",
    "answer": "Manovaidya supports families through structured assessment, personalized guidance, parent support and the Neuro-Ayurveda Development System. The goal is to improve communication, strengthen relationships and support healthy emotional development."
  },
  {
    "question": "14. Can parent guidance improve teenage behaviour?",
    "answer": "In many situations, yes. Behaviour is often influenced by communication, family dynamics and emotional wellbeing. Small changes in parenting approaches can sometimes lead to meaningful improvements in behaviour and family relationships."
  },
  {
    "question": "15. When should parents seek professional guidance?",
    "answer": "Parents may consider seeking guidance when communication becomes difficult, arguments become frequent, trust breaks down or emotional wellbeing is affected. A structured assessment can help families better understand challenges and identify practical solutions."
  }
];
const seoNotes = "STEP 1: URL\nFinal URL:\n/parent-teen-relationship-support/\n\n\nSTEP 2: SEO TITLE\nFinal:\nParent-Teen Relationship Support in India | Teen Behaviour & Family Guidance | Manovaidya\n\n\nSTEP 3: META DESCRIPTION\nLooking for Parent-Teen Relationship Support in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya.\n\n\nSTEP 4: H1\nParent-Teen Relationship Support in India\n\nOnly one H1.\n\nSTEP 5: H2 STRUCTURE\nUnderstanding Parent-Teen Relationships\n\nCommon Parent-Teen Relationship Challenges\n\nWhy Teenagers Become Distant From Parents\n\nHow Parent-Teen Relationship Challenges Affect Teenagers\n\nThe Neuro-Ayurveda Approach to Parent-Teen Relationship Support\n\nHow Parents Can Build Stronger Relationships With Teenagers\n\nHow Manovaidya Supports Families\n\nWhy Families Choose Manovaidya\n\nAbout Dr. Ankush Garg\n\nFrequently Asked Questions\n\nBook a Consultation\n\n\nSTEP 6: PRIMARY KEYWORDS\nNatural placement throughout page:\nParent Teen Relationship Support\n\nParent Teen Relationship Support in India\n\nTeen Behaviour Support\n\nTeen Communication Problems\n\nTeen Behaviour Problems\n\nTeen Relationship With Parents\n\nTeen Parenting Support\n\nFamily Relationship Support\n\n\nSTEP 7: SECONDARY KEYWORDS\nTeenage Anger\n\nTeenage Attitude Problems\n\nParent Child Communication\n\nParent Teen Trust Issues\n\nTeen Emotional Support\n\nTeen Behaviour Challenges\n\nParenting Teenagers\n\nTeen Family Problems\n\n\nSTEP 8: LOCAL SEO SIGNAL\nAdd after:\nWhy Families Across India Connect With Manovaidya\nFamilies from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Parent-Teen Relationship Support, Teen Behaviour Guidance and Family Communication Support through online and in-clinic consultations.\n\n\nSTEP 9: ABOUT DR. ANKUSH GARG\nAdd:\nBased in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.\n\n\nSTEP 10: IMAGE SEO\nHero Image\nFile Name\nparent-teen-relationship-support-india.webp\n\nALT\nParent Teen Relationship Support in India at Manovaidya\n\n\nCommunication Image\nFile Name\nparent-teen-communication-support.webp\n\nALT\nParent teen communication and trust building support\n\n\nNeuro-Ayurveda Image\nFile Name\nneuro-ayurveda-family-support.webp\n\nALT\nNeuro Ayurveda approach for parent teen relationship support\n\n\nCTA Image\nFile Name\nfamily-relationship-support-india.webp\n\nALT\nFamily relationship and teen behaviour support in India\n\n\nSTEP 11: INTERNAL LINKS\nTeen Mental Wellness Parent Page\nAnchor:\nLearn more about Teen Mental Wellness Support.\n\nLink:\n/teen-mental-wellness-india/\n\n\nTeen Stress & Anxiety Page\nAnchor:\nExplore Teen Stress & Anxiety Support.\n\nLink:\n/teen-stress-anxiety-support/\n\n\nTeen Depression Page\nAnchor:\nLearn about Teen Depression & Low Mood Support.\n\nLink:\n/teen-depression-support/\n\n\nTeen Confidence Page\nAnchor:\nExplore Teen Confidence & Emotional Wellbeing Support.\n\nLink:\n/teen-confidence-emotional-wellbeing/\n\n\nTeen Screen Addiction Page\nAnchor:\nUnderstand Teen Screen Addiction Support.\n\nLink:\n/teen-screen-addiction-support/\n\n\nDr. Ankush Garg Page\nAnchor:\nKnow more about Dr. Ankush Garg.\n\nLink:\n/dr-ankush-garg/\n\n\nSTEP 12: FAQ SCHEMA\nDeveloper ko bolo:\n15 FAQs ko FAQ Schema (JSON-LD) mein convert kare.\n\n\nSTEP 13: BREADCRUMB\nHome\n\n>\n\nTeen Mental Wellness\n\n>\n\nParent-Teen Relationship Support\n\n\nSTEP 14: RELATED PAGES SECTION\nRelated Teen Mental Wellness Pages\n\nTeen Stress & Anxiety Support\n\nTeen Depression & Low Mood Support\n\nExam & Performance Pressure Support\n\nTeen Confidence & Emotional Wellbeing\n\nTeen Screen Addiction Support\n\n\nSTEP 15: CTA SECTION\nHeading:\nConcerned About Your Relationship With Your Teenager?\n\nText:\nBook a structured assessment and personalized guidance session with the Manovaidya team.\n\nButtons:\nBook Consultation\n\nTake Teen Wellness Assessment\n\n\nSTEP 16: SCHEMA (IMPORTANT)\nDeveloper ko bolna:\nAdd:\nMedicalWebPage Schema\n\nAdd:\nFAQ Schema\n\nAdd:\nBreadcrumb Schema\n\nAdd:\nPhysician Schema (Dr Ankush Garg)\n\nYe 4 schemas Teen cluster ke har page mein hone chahiye.";

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
    { "@type": "ListItem", position: 3, name: "Parent-Teen Relationship Support", item: "/parent-teen-relationship-support/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Parent-Teen Relationship Support in India",
  description: "Looking for Parent-Teen Relationship Support in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya.",
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

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Teen Mental Wellness Pages</h2>
      <div className="mt-4 space-y-3">
        <a href="/teen-stress-anxiety-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Activity className="h-4 w-4 text-[#7835A4]" /> Teen Stress & Anxiety Support
        </a>
        <a href="/teen-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <HeartHandshake className="h-4 w-4 text-[#7835A4]" /> Teen Depression & Low Mood Support
        </a>
        <a href="/exam-performance-pressure/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <BookOpen className="h-4 w-4 text-[#7835A4]" /> Exam & Performance Pressure Support
        </a>
        <a href="/teen-confidence-emotional-wellbeing/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Sparkles className="h-4 w-4 text-[#7835A4]" /> Teen Confidence & Emotional Wellbeing
        </a>
        <a href="/teen-screen-addiction-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
          <Brain className="h-4 w-4 text-[#7835A4]" /> Teen Screen Addiction Support
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
  { text: "Learn more about Teen Mental Wellness Support.", href: "/teen-mental-wellness-india/" },
  { text: "Explore Teen Stress & Anxiety Support.", href: "/teen-stress-anxiety-support/" },
  { text: "Learn about Teen Depression & Low Mood Support.", href: "/teen-depression-support/" },
  { text: "Explore Teen Confidence & Emotional Wellbeing Support.", href: "/teen-confidence-emotional-wellbeing/" },
  { text: "Understand Teen Screen Addiction Support.", href: "/teen-screen-addiction-support/" },
  { text: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
];

function ContentLine({ line }) {
  if (subheadingLines.has(line)) {
    return <h3 className="mt-5 text-[16px] font-black text-[#21142d]">{line}</h3>;
  }

  if (line.startsWith("?") || line.startsWith("??")) {
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span>{line}</span>
      </p>
    );
  }

  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{line}</p>;
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

  if (title === "The Neuro-Ayurveda Approach to Parent-Teen Relationship Support") {
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

function ContentSection({ section }) {
  if (section.title === "Book a Consultation") {
    return (
      <section id={section.id} className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
        <div className="p-6 sm:p-8">
          <h2 className="text-[22px] font-black leading-tight">Book a Consultation</h2>
          <div className="mt-3 space-y-1">
            {section.lines.map((line) => (
              <p key={line} className="text-[14px] font-semibold leading-7 text-[#e5d5f2]">{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6">
            <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">
              Book Consultation
            </a>
            <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">
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
          <ContentLine key={`${section.id}-${index}`} line={line} />
        ))}
      </div>
      <SectionImage title={section.title} />
    </section>
  );
}

function ParentTeenRelationshipSupportPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    document.title = "Parent-Teen Relationship Support in India | Teen Behaviour & Family Guidance | Manovaidya";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Parent-Teen Relationship Support in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya.";

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

  return (
    <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/teen-mental-wellness-india/" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Parent-Teen Relationship Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Behaviour & Family Guidance</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">Parent-Teen Relationship Support in India</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">Helping Parents & Teenagers Build Better Communication, Trust, Emotional Connection & Healthy Relationships</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Consultation</a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
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
                <Brain className="mb-1 h-5 w-5" /> Neuro-Ayurveda Development System
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Parent Teen Relationship Support in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          {sections.map((section) => <ContentSection key={section.id} section={section} />)}

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
            <p className="mt-2 text-[13px] font-black text-[#7835A4]">Parent-Teen Relationship Support FAQ</p>
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
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="sr-only" aria-hidden="true">{seoNotes}</div>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
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
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823894080</p>
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
  );
}

export default ParentTeenRelationshipSupportPage;

