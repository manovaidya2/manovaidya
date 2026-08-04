import React from "react";
import {
  Activity,
  ArrowRight,
  BedDouble,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CloudRain,
  HeartHandshake,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/adult-mental-wellness-hero.png";
import symptomsImage from "../images/adult-common-signs-man.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/adult-sunset-cta.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedAdultPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Anxiety", id: "understanding-anxiety-in-adults" },
  { label: "Signs & Symptoms", id: "common-signs-symptoms-of-anxiety" },
  { label: "Why Anxiety Develops", id: "why-anxiety-develops" },
  { label: "How It Affects Life", id: "how-anxiety-can-affect-daily-life" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "Emotional Wellbeing", id: "how-adults-can-support-their-emotional-wellbeing" },
  { label: "How We Support", id: "how-manovaidya-supports-adults" },
  { label: "Why Adults Choose", id: "why-adults-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Adult Anxiety", count: 13, Icon: Brain },
  { label: "Stress & Burnout", count: 11, Icon: Activity },
  { label: "Depression", count: 12, Icon: CloudRain },
  { label: "Sleep Problems", count: 8, Icon: BedDouble },
  { label: "OCD", count: 7, Icon: ShieldCheck },
  { label: "Emotional Wellbeing", count: 10, Icon: HeartHandshake },
];

const referenceResources = [
  {
    n: 1,
    title: "World Health Organization - Anxiety Disorders",
    url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    supports: "Adult anxiety symptoms, distress, daily functioning and common treatment context.",
  },
  {
    n: 2,
    title: "National Institute of Mental Health - Anxiety Disorders",
    url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    supports: "Signs, symptoms, diagnosis and treatment options for anxiety disorders.",
  },
  {
    n: 3,
    title: "National Institute of Mental Health - Generalized Anxiety Disorder",
    url: "https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad",
    supports: "Excessive worry, restlessness, sleep disturbance and physical symptoms.",
  },
  {
    n: 4,
    title: "NICE Guideline CG113 - Generalised Anxiety Disorder and Panic Disorder in Adults",
    url: "https://www.nice.org.uk/guidance/cg113",
    supports: "Adult GAD and panic disorder assessment, stepped care and psychological support.",
  },
  {
    n: 5,
    title: "Sleep Foundation - Anxiety and Sleep",
    url: "https://www.sleepfoundation.org/mental-health/anxiety-and-sleep",
    supports: "Relationship between anxiety, sleep quality and daily routines.",
  },
  {
    n: 6,
    title: "AAFP - Generalized Anxiety Disorder and Panic Disorder in Adults",
    url: "https://www.aafp.org/afp/2022/0800/generalized-anxiety-disorder-panic-disorder",
    supports: "Adult anxiety assessment and evidence on physical activity support.",
  },
  {
    n: 7,
    title: "Review - Gut Microbiota, Anxiety and Depression",
    url: "https://pubmed.ncbi.nlm.nih.gov/30060277/",
    supports: "Research context for gut-brain axis and anxiety associations.",
  },
  {
    n: 8,
    title: "Charaka Samhita - Manas",
    url: "https://www.carakasamhitaonline.com/index.php?title=Manas",
    supports: "Ayurvedic conceptual understanding of mind and mental wellbeing.",
  },
  {
    n: 9,
    title: "Charaka Samhita - Sattvavajaya",
    url: "https://www.carakasamhitaonline.com/index.php/Sattvavajaya",
    supports: "Ayurvedic conceptual support for mind regulation and emotional balance.",
  },
  {
    n: 10,
    title: "Charaka Samhita - Indriyopakramaniya Adhyaya",
    url: "https://www.carakasamhitaonline.com/index.php/Indriyopakramaniya_Adhyaya",
    supports: "Ayurvedic conceptual support for regulated sensory engagement.",
  },
  {
    n: 11,
    title: "Charaka Samhita - Sadvritta",
    url: "https://www.carakasamhitaonline.com/index.php/Sadvritta",
    supports: "Ayurvedic conceptual support for healthy conduct, routines and lifestyle balance.",
  },
];

const articleLinkRules = [
  { label: "Adult Anxiety Treatment in India", href: "#introduction", pattern: /Adult Anxiety Treatment in India/i },
  { label: "Adult Anxiety Support", href: "#understanding-anxiety-in-adults", pattern: /Adult Anxiety Support/i },
  { label: "Anxiety Treatment in India", href: "#understanding-anxiety-in-adults", pattern: /Anxiety Treatment in India/i },
  { label: "Anxiety Symptoms in Adults", href: "#common-signs-symptoms-of-anxiety", pattern: /Anxiety Symptoms in Adults/i },
  { label: "Anxiety Disorder Treatment", href: "#understanding-anxiety-in-adults", pattern: /Anxiety Disorder Treatment/i },
  { label: "Generalized Anxiety Disorder", href: "#why-anxiety-develops", pattern: /Generalized Anxiety Disorder/i },
  { label: "Panic Attack Treatment", href: "#common-signs-symptoms-of-anxiety", pattern: /Panic Attack Treatment/i },
  { label: "Panic Disorder Treatment", href: "#common-signs-symptoms-of-anxiety", pattern: /Panic Disorder Treatment/i },
  { label: "Overthinking Treatment", href: "#common-signs-symptoms-of-anxiety", pattern: /Overthinking Treatment/i },
  { label: "Chronic Worry Treatment", href: "#common-signs-symptoms-of-anxiety", pattern: /Chronic Worry Treatment/i },
  { label: "Excessive Worry Treatment", href: "#why-anxiety-develops", pattern: /Excessive Worry Treatment/i },
  { label: "Stress and Anxiety Treatment", href: "/stress-burnout-support/", pattern: /Stress and Anxiety Treatment/i },
  { label: "Social Anxiety Treatment", href: "#how-anxiety-can-affect-daily-life", pattern: /Social Anxiety Treatment/i },
  { label: "Anxiety Counselling for Adults", href: "#how-manovaidya-supports-adults", pattern: /Anxiety Counselling for Adults/i },
  { label: "Anxiety Counselling in India", href: "#how-manovaidya-supports-adults", pattern: /Anxiety Counselling in India/i },
  { label: "Online Anxiety Counselling", href: "#how-manovaidya-supports-adults", pattern: /Online Anxiety Counselling/i },
  { label: "Online Anxiety Treatment in India", href: "#how-manovaidya-supports-adults", pattern: /Online Anxiety Treatment in India/i },
  { label: "Online Mental Health Consultation", href: "#how-manovaidya-supports-adults", pattern: /Online Mental Health Consultation/i },
  { label: "Emotional Wellbeing Support", href: "#how-adults-can-support-their-emotional-wellbeing", pattern: /Emotional Wellbeing Support/i },
  { label: "Anxiety Recovery Support", href: "#how-adults-can-support-their-emotional-wellbeing", pattern: /Anxiety Recovery Support/i },
  { label: "Neuro-Ayurveda Development System", href: "#neuro-ayurveda-approach", pattern: /Neuro[-\s]Ayurveda Development System/i },
  { label: "Adult Mental Health Support", href: "/adult-mental-health-care/", pattern: /Adult Mental Health Support/i },
  { label: "Adult Depression Treatment", href: "/adult-depression-support/", pattern: /Adult Depression Treatment/i },
  { label: "Stress & Burnout Treatment", href: "/stress-burnout-support/", pattern: /Stress (?:&|and) Burnout Treatment/i },
  { label: "Sleep & Mood Disorder Support", href: "/sleep-disorders-support/", pattern: /Sleep (?:&|and) Mood Disorder Support/i },
  { label: "OCD Support", href: "/ocd-support/", pattern: /OCD Support/i },
  { label: "Bipolar Disorder Support", href: "/bipolar-support/", pattern: /Bipolar Disorder Support/i },
  { label: "Dr. Ankush Garg", href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { label: "Manovaidya", href: "/about/manovaidya", pattern: /Manovaidya/i },
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
      if (match) candidates.push({ index: match.index, length: match[0].length, ruleKey });
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

const keyTakeaways = [
  "Understanding Adult Anxiety and Emotional Wellbeing",
  "Common Emotional, Physical and Cognitive Signs",
  "Main Causes of Anxiety in Adults",
  "Impact on Work, Sleep and Relationships",
  "Constant Worry, Panic and Overthinking Patterns",
  "Difference Between Stress and Anxiety Disorders",
  "Neuro-Ayurveda Approach to Anxiety Support",
  "Brain, Gut, Sensory and Behavioural Factors",
  "Healthy Sleep, Exercise and Daily Routines",
  "How to Reduce Anxiety and Overthinking",
  "Manovaidya’s Assessment and Support Process",
  "When to Consider a Professional Assessment",
  "Online and In-Clinic Anxiety Support",
  "Why Adults Across India Choose Manovaidya",
  "About Dr. Ankush Garg",
  "Helpful Adult Mental Health Resources",
  "FAQs About Adult Anxiety Treatment"
];

const sections = [
  {
    "title": "Introduction",
    "id": "introduction",
    "lines": [
      "Supporting Adults to better understand anxiety, constant worry, panic & emotional wellbeing.",
      "People looking for Adult Anxiety Treatment in India often require structured support for ongoing worry, overthinking, panic-like symptoms, nervousness and emotional distress that impact the daily functioning.",
      "The objective is not just to alleviate visible signs. They should help them to identify emotional triggers, thought patterns, sleeping habits, lifestyle and behaviour and other factors that affect long term mental health.",
      "Worrying prior to or during a stressful time is a normal aspect of life. If worry becomes a pattern, overwhelming, and/or interferes with functioning, relationships, work or emotional health, however, then it may require more attention and assistance. [1] [3]",
      "Numerous adults suffer from a persistent overthinking, over worrying, restlessness or lack of ability to relax without knowing exactly what is going on. Others experience physical symptoms like a fast heart rate, muscle tension, sleep or digestion problems. Others are unable to stop worrying, nervousness or feeling someone may be harmed.",
      "These experiences can manifest as Constant Worry and Anxiety, recurring “what if” questions and concerns, fear of making mistakes and/or trouble relaxing when there is no actual threat.",
      "At Manovaidya, we know that anxiety is more than just stress. Lifestyle, sleep, emotional wellbeing, daily routines, physical wellbeing and mind-body balance may all be factors that impact emotional wellbeing.",
      "Emotional symptoms, physical experiences, stress and sleep patterns and personal circumstances are therefore taken into consideration together in Structured Adult Anxiety Support.",
      "Under the guidance of Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya implements the Neuro-Ayurveda Development System and helps people understand the factors that can affect emotional wellbeing in the long-term and develop an awareness of anxiety.",
      "Individuals seeking an Anxiety Specialist in India, Anxiety Doctor in India, or Online Mental Health Consultation could reach out to Manovaidya for a systematic evaluation and tailored recommendations.",
      "At Manovaidya, Adult Anxiety Treatment focuses on:",
      "Persistent Anxiety",
      "Excessive Worry & Overthinking",
      "Panic Episodes",
      "Restlessness & Nervousness",
      "Emotional Wellbeing",
      "Healthy Mind-Body Balance",
      "These areas include those who are looking for Anxiety Counselling for Adults, Stress and Anxiety Treatment, Overthinking Treatment or Excessive Worry Treatment.",
      "Adult Anxiety Treatment in India is more than just about controlling symptoms. It also emphasizes insight into thought patterns, emotional reactions, lifestyle and everyday habits that can impact anxiety."
    ]
  },
  {
    "title": "Understanding Anxiety in Adults",
    "id": "understanding-anxiety-in-adults",
    "lines": [
      "Anxiety is our body's response to uncertainty, change or perceived challenges. In many cases, anxiety serves us well since it equips us to deal with significant events and responsibilities. [1] [3]",
      "If worrying thoughts occur regularly, are hard to control and start to interfere with daily life, then they can impact emotional health, relationships, work, and physical health.",
      "For some people, anxiety develops into an anxiety disorder and can become persistent, distressing and difficult to manage on their own, which may prompt them to seek Anxiety Disorder Treatment.",
      "A lot of people looking for Anxiety Treatment in India or Help for Constant Anxiety are seeking answers to their persistent worry, nervousness or emotional distress which does not show signs of improvement.",
      "In adults, signs of anxiety can include:",
      "Constant worrying",
      "Difficulty relaxing",
      "Feeling overwhelmed",
      "Fear without a clear reason",
      "Restlessness",
      "Difficulty concentrating",
      "Trouble sleeping",
      "Physical discomfort during stress",
      "While they are some of the common Anxiety Symptoms in Adults, symptoms must be seen in light of a professional examination, and not just a self-diagnosis. [1] [2] [3]",
      "Anxiety is unique to each person. Emotional symptoms are the type of symptoms some people primarily notice, others experience physical symptoms, behavioural changes or repeated avoidance.",
      "When looking for the Best Anxiety Treatment in India, it is crucial for someone to be aware of the fact that not all treatments are the same and that they need to be assessed individually and guided by professionals who can provide them with the information they seek."
    ]
  },
  {
    "title": "Common Signs & Symptoms of Anxiety",
    "id": "common-signs-symptoms-of-anxiety",
    "lines": [
      "Anxiety can impact the mind, feelings, behavior and physical health. This experience is subject to change from individual to individual.",
      "In Adult Anxiety Treatment in India, the structured assessment includes the frequency, severity and impact of the symptoms on work, relationships, sleep and daily functioning.",
      "Emotional Symptoms",
      "Persistent worry",
      "Feeling nervous",
      "Fear of uncertainty",
      "Irritability",
      "Feeling overwhelmed",
      "Difficulty relaxing",
      "Emotional symptoms can lead to a need for Emotional Wellbeing Support when fear, nervousness and emotional overwhelm see a negative impact on quality of life.",
      "Physical Symptoms",
      "Rapid heartbeat",
      "Muscle tension",
      "Sweating",
      "Trembling",
      "Dry mouth",
      "Stomach discomfort",
      "Headaches",
      "Fatigue",
      "During anxiety and panic-like times, physical symptoms may be experienced, but they can also be caused by other medical issues. If new, severe or persistent physical symptoms, a medical assessment should be conducted. [1] [2]",
      "After proper evaluation, a person who is going through a sudden surge of extreme fear that includes severe physical feelings might need Panic Attack Treatment or Panic Disorder Treatment.",
      "Cognitive Symptoms",
      "Overthinking",
      "Difficulty concentrating",
      "Racing thoughts",
      "Fear of making mistakes",
      "Constant “what if” thinking",
      "Difficulty making decisions",
      "People might start looking for How to Stop Overthinking, Chronic Worry Treatment or Overthinking Treatment because they have suffered from the worry cycle and want to find a solution.",
      "Psychological methods can be helpful to understanding of repeated thoughts, worry cycles and avoidance behaviours. [4]",
      "Behavioural Symptoms",
      "Avoiding stressful situations",
      "Seeking frequent reassurance",
      "Restlessness",
      "Trouble sitting still",
      "Difficulty completing tasks",
      "Reduced confidence",
      "Repeated reassurance seeking and avoidance can help to ameliorate distress to some degree in the short term, but can perpetuate anxiety over time. [4]",
      "Anxiety Management Therapy can target these patterns and provide new and better responses based on what is needed.",
      "The presence of one or more of the symptoms doesn't necessarily mean a person has an anxiety disorder. If symptoms continue to cause problems at work, in relationships or daily functioning, however, then this will need professional guidance.",
      "People can think about seeking Anxiety Counselling in India, Online Anxiety Counselling or Anxiety Therapy in India if symptoms persist and start to interfere with crucial areas of life."
    ]
  },
  {
    "title": "Why Anxiety Develops",
    "id": "why-anxiety-develops",
    "lines": [
      "Many factors contribute to anxiety, and this is not to be developed for one reason. It is frequently caused by a mix of emotional, environmental, lifestyle and biological causes. [1] [3]",
      "It is crucial to be aware of these influences when it comes to treating and supporting people with Generalized Anxiety Disorder.",
      "Work Pressure",
      "Limited time dates, work pressures, job insecurity and extended working hours can be factors to continued stress and anxiety.",
      "Adults who want Stress and Anxiety Treatment often struggle to turn off their work, have to deal with constant stress or fear about how they perform at work, or experience stress or anxiety related to deadlines.",
      "Financial Concerns",
      "Emotional pressure might increase due to financial responsibilities, debt, job security and future planning.",
      "Financial worries can be a factor in deciding whether to begin with Excessive Worry Treatment if worries start to impact sleep, concentration or relationships.",
      "Relationship Challenges",
      "Emotional wellbeing can be affected by the experience of family conflict, relationship issues or significant transitions, which can lead to heightened anxiety.",
      "Anxiety Counselling for Adults can assist individuals learn the effect that stress and anxiety, insecurity and recurring conflict in relationships can have on their emotional equilibrium.",
      "Health Concerns",
      "Persistent anxiety could be due to personal health-related concerns or concerns for others.",
      "Ongoing anxiety about illness can necessitate a more comprehensive evaluation of anxiety, associated physical symptoms and potential medical issues before determining appropriate resources and services.",
      "Lifestyle Habits",
      "Over time, poor sleep, irregular schedules, too much screen time, not enough physical activity or unhealthy habits can have an impact on emotional balance.",
      "Supportive habits like regular sleep, exercise and stress management can help reduce anxiety for those who are wondering What to do to help with anxiety. These lifestyle treatments are not a substitute for professional treatment for severe or persistent anxiety, however. [5] [6]",
      "Major Life Changes",
      "Emotional uncertainty can be caused by marriage, parenthood, move, career change, etc.",
      "If life changes make it difficult to go to a clinic regularly, then Online Anxiety Treatment in India or Online Anxiety Counselling may be considered.",
      "Biological & Individual Factors",
      "Each person reacts to stress in a unique way. Emotional resilience and personal experiences and individual biological differences can affect the development of anxiety.",
      "As anxiety can differ from person to person, the Best Doctor for Anxiety in India should be one that is qualified to perform adequate evaluation and advice for the individual's particular symptoms.",
      "Many adults feel anxious and think that this is a sign of weakness or inability. But in fact, anxiety is a universal experience and by knowing what causes it, the first step towards emotional health may be taken. [1] [3]",
      "Professional Anxiety Recovery Support can help people shift away from self-blame and adopt more effective coping strategies."
    ]
  },
  {
    "title": "How Anxiety Can Affect Daily Life",
    "id": "how-anxiety-can-affect-daily-life",
    "lines": [
      "Anxiety can manifest itself in other ways, besides thoughts or feelings. Can impact on work, relationships, physical health, sleep and confidence.",
      "As anxiety starts to become chronic, everyday tasks can begin to seem more challenging and/or more overwhelming. Adult Anxiety Treatment in India can require some support when anxiety begins to impact productivity, relationships or daily activities.",
      "Emotional Wellbeing",
      "Long-term anxiety can cause:",
      "Constant worrying",
      "Feeling overwhelmed",
      "Restlessness",
      "Irritability",
      "Difficulty relaxing",
      "Fear of uncertainty",
      "Constant Worry and Anxiety can feel like having something to do when they don't.",
      "Emotional Wellbeing Support can be used to assist people identify triggers and learn to adopt more conducive emotional reactions.",
      "Work & Professional Life",
      "Anxiety can be more difficult to:",
      "Concentrate on tasks",
      "Make decisions",
      "Meet deadlines",
      "Handle pressure",
      "Participate in meetings",
      "Maintain productivity",
      "There are many adults that have work anxiety yet feel \"burned out\" or on their toes at work all the time.",
      "For adults, Anxiety Counselling services can be considered when workplace stress, worrying/fear are having an impact on confidence and work functioning.",
      "Relationships",
      "Anxiety can have an impact on relationships with family, friends and co-workers.",
      "Some people may:",
      "Avoid social situations",
      "Seek constant reassurance",
      "Become easily irritated",
      "Find it difficult to express emotions",
      "Worry excessively about relationships",
      "Sometimes, excessive worry about the opinions of others or repeated feelings of rejection are linked to social anxiety.",
      "Social Anxiety Treatment may be sought after a structured assessment by those who have a high level of fear in social situations.",
      "Physical Wellbeing",
      "Some symptoms of anxiety include:",
      "•\tMuscle tension",
      "•\tHeadaches",
      "•\tFatigue",
      "•\tDigestive discomfort",
      "•\tRestlessness",
      "•\tDisturbed sleep",
      "Symptoms of physical anxiety in adults may be frightening, especially if they include a fast heart rate, dizziness or trembling.",
      "However, the conditions may also mimic the symptoms seen in some medical conditions and should be professionally assessed for any unexplained symptoms. [1] [2]",
      "Sleep & Daily Routine",
      "Adults feeling anxious may say:",
      "Difficulty falling asleep",
      "Frequent waking",
      "Feeling tired despite sleeping",
      "Difficulty relaxing before bedtime",
      "Anxiety can affect sleep patterns and vice versa. Anxiety can disrupt sleep, which can make it harder to regulate anxiety.Sleep disturbances can exacerbate anxiety; anxiety can make it hard to sleep. [5]",
      "Anxiety Management Therapy can involve ideas on sleep schedules, relaxation and structure during the day.",
      "Confidence & Decision Making",
      "If you are feeling anxious and worried for a long time, you might:",
      "Overthink simple decisions",
      "Fear making mistakes",
      "Avoid new opportunities",
      "Doubt their abilities",
      "Delay important decisions",
      "How to Stop Overthinking is not about forcing unwanted thoughts away. It means knowing how to acknowledge and react to anxiety patterns and to deal with uncertainty more effectively. [4]"
    ]
  },
  {
    "title": "The Neuro-Ayurveda Approach to Adult Anxiety Support",
    "id": "neuro-ayurveda-approach",
    "lines": [
      "Anxiety is perceived at Manovaidya from a larger perspective.",
      "The Neuro-Ayurveda Development System takes a holistic approach to emotional wellbeing, thought patterns, behaviour, lifestyle, and overall health by focusing on the five interconnected pillars instead of just on the symptoms.",
      "Emotional balance and healthy routines are supported with the traditional Ayurvedic concepts of Manas, Sattvavajaya and regulated sensory/lifestyle practices. [8] [9] [10] [11]",
      "Brain Nourishment System",
      "This pillar considers:",
      "•\tEmotional regulation",
      "•\tConcentration",
      "•\tMental clarity",
      "•\tDecision-making",
      "•\tStress response",
      "•\tConfidence",
      "Persistent thoughts of anxiety might cause mental fatigue or lower your self-confidence in adults looking for Anxiety Therapy in India or Generalized Anxiety Disorder Treatment.",
      "This pillar focuses on the possibility that your mental clarity and functioning could be affected by poor sleep, prolonged stress, and/or irregular routines.",
      "Gut Response System",
      "Adults who are anxious may also see:",
      "•\tDigestive discomfort",
      "•\tAppetite changes",
      "•\tLifestyle imbalance",
      "•\tLow energy",
      "•\tPoor daily routines",
      "Research continues to explore associations between gut microbiota, anxiety and depression. But this is not confirmation that any one gut-focused treatment can help with anxiety alone. [7]",
      "The Gut Response System explores the relationship between digestion, feeding habits, sleep and overall physical health and how these factors could affect emotional health.",
      "Neural Network System",
      "This pillar deals with:",
      "•\tOverthinking patterns",
      "•\tWorry cycles",
      "•\tEmotional responses",
      "•\tHabit formation",
      "•\tBehavioural patterns",
      "What if thinking, checking, seeking reassurance and avoidance, when repeated, can gradually reinforce unhealthy anxiety patterns.",
      "This pillar is particularly important for Overthinking Treatment, Excessive Worry Treatment and Chronic Worry Treatment.",
      "Sensory Integration System",
      "Adults are surrounded by a constant stimulation in modern life, such as:",
      "•\tWork demands",
      "•\tDigital devices",
      "•\tSocial media",
      "•\tNoise",
      "•\tContinuous information",
      "Some people may feel overstimulated or over stimulated and find it more stressful.",
      "Classical ayurvedic ideas about regulated sensory engagement provide conceptual support for healthier environments each day. [10] [11]",
      "Behaviour Guidance System",
      "Anxiety in adults can manifest as:",
      "•\tAvoiding situations",
      "•\tSeeking reassurance",
      "•\tRestlessness",
      "•\tProcrastination",
      "•\tDifficulty relaxing",
      "Sometimes avoidance might temporarily help but can contribute to the strengthening of fear over time. [4]",
      "Anxiety Counselling in India or Online Anxiety Counselling can assist people to recognize these patterns and develop healthier reactions."
    ]
  },
  {
    "title": "How Adults Can Support Their Emotional Wellbeing",
    "id": "how-adults-can-support-their-emotional-wellbeing",
    "lines": [
      "Good emotional health is likely to be built over time with regular daily routines more than any one thing.",
      "These strategies can be used in conjunction with Adult Mental Health Support and Anxiety Recovery Support; however, they are not a substitute for professional support for anxiety when it is interfering with daily living.",
      "Maintain Healthy Sleep Habits",
      "Regular sleep patterns help to balance emotions, focus and resilience.",
      "Limited stimulation at night and consistent sleep schedule can aid sleep. [5]",
      "Stay Physically Active",
      "Frequent physical activity can help with managing stress, sleep and mood and can help decrease anxiety symptoms for some people. [6]",
      "Build Healthy Daily Routines",
      "Having designated periods to work, eat, rest, move and sleep can minimize uncertainty and contribute to a sense of organization.",
      "Manage Everyday Stress",
      "Regular rest, relaxation and maintaining a healthy work-life balance can help to minimize stress during the day.",
      "Along with Anxiety Therapy in India, breathing or grounding techniques can be used to complement it, but these shouldn't be used if symptoms persist.",
      "Stay Connected",
      "Emotional resilience and minimising feelings of isolation may be enhanced through supportive relationships with family and friends.",
      "Practice Healthy Self-Care",
      "Children's emotional wellbeing may be supported by rest, hobbies, meaningful activities and healthy boundaries in the long term."
    ]
  },
  {
    "title": "How Manovaidya Supports Adults",
    "id": "how-manovaidya-supports-adults",
    "lines": [
      "At Manovaidya, support starts with getting to know the person, not just their symptoms.",
      "One can start the search for Adult Anxiety Treatment in India, Anxiety Counselling in India or Online Anxiety Treatment in India with a structured assessment.",
      "Step 1: Comprehensive Assessment",
      "The assessment can consider:",
      "Anxiety Symptoms in Adults",
      "Constant worry",
      "Overthinking patterns",
      "Panic-like episodes",
      "Avoidance",
      "Working and relating effect.",
      "Sleep and lifestyle issues",
      "A thorough evaluation can also suggest that additional medical or mental health evaluations are necessary. [1] [2] [3]",
      "Step 2: Personalized Guidance",
      "Recommendations are made based on emotional well-being, lifestyle, daily routines and concerns.",
      "Some may need an Overthinking Treatment and others may need assistance with their panic episodes, chronic worry, social anxiety or workplace stress.",
      "Step 3: Emotional Wellbeing Support",
      "Anxiety Counselling for Adults can include the emotions, thoughts, avoidance, reassurance seeking and coping responses.",
      "If you can't make it to the clinic, you might want to try an Online Mental Health Consultation.",
      "Step 4: Neuro-Ayurveda Development System",
      "The five pillars are:",
      "Brain Nourishment System",
      "Gut Response System",
      "Neural Network System",
      "Sensory Integration System",
      "Behaviour Guidance System",
      "The ayurvedic notions are given as a traditional conceptual support and not as a proof of a stand alone remedy for anxiety. [8] [9] [10] [11]",
      "Step 5: Progress Tracking & Follow-Up",
      "Progress can be tracked on the basis of changes in:",
      "•\tAnxious thoughts",
      "•\tWorry cycles",
      "•\tPanic-like episodes",
      "•\tSleep quality",
      "•\tConcentration",
      "•\tAvoidance",
      "•\tWork performance",
      "•\tRelationships",
      "•\tConfidence",
      "•\tDaily functioning",
      "When Should You Consider an Anxiety Assessment?",
      "If you have a problem, think about asking for some advice if you have one of the following:",
      "Persistent worry",
      "Excessive overthinking",
      "Frequent nervousness",
      "Difficulty relaxing",
      "Panic-like episodes",
      "Sleep disturbances",
      "Anxiety affecting work or relationships",
      "Ongoing emotional stress",
      "Anxiety interfering with daily life",
      "A professional consultation with an Anxiety Doctor in India, Anxiety Specialist in India or another qualified specialist might be necessary in severe instances, ones that are hard to control or when anxiety is accompanied by substantial physical issues."
    ]
  },
  {
    "title": "Why Adults Across India Choose Manovaidya",
    "id": "why-adults-across-india-choose-manovaidya",
    "lines": [
      "Adult Anxiety Treatment in India may require a treatment that takes into account emotional symptoms, physical wellbeing and sleep and lifestyle into account.",
      "This is support in Manovaidya, it starts with knowing the individual and not with a one-size-fits-all solution.",
      "Comprehensive Anxiety Assessment",
      "Assessment will take into account worry, overthinking, episodes of worry, physical symptoms, avoidance and sleep and functioning.",
      "It can help clarify if the person requires Adult Anxiety Support, treatment for Generalized Anxiety Disorder, and/or Panic Disorder.",
      "Treatment, Social Anxiety Treatment or further medical evaluation.",
      "Neuro-Ayurveda Development System",
      "The five-pillar system can facilitate people's understanding of wider issues around anxiety and emotional wellbeing.",
      "Emotional regulation, healthier routines and mind-body wellbeing are conceptualized through traditional Ayurvedic concepts. [8] [9] [10] [11]",
      "Personalized Guidance",
      "Advices are tailored to the symptoms, lifestyle, work requirements and individual objectives.",
      "Individuals who cannot attend in person can try Online Anxiety Treatment in India or Online anxiety counselling.",
      "Holistic Mind-Body Perspective",
      "This approach takes into account the connection between stress, sleep, physical wellbeing, lifestyle and emotional wellbeing.",
      "Long-Term Emotional Wellbeing",
      "Long-term Anxiety Recovery Support may focus on:",
      "•\tUnderstanding triggers",
      "•\tReducing avoidance",
      "•\tManaging overthinking",
      "•\tImproving sleep",
      "•\tBuilding healthy routines",
      "•\tSupporting confidence",
      "•\tImproving daily functioning",
      "Ongoing Support & Progress Tracking",
      "Ongoing follow-up supports people in understanding how they are doing and can guide their choices along the way to their emotional wellbeing."
    ]
  },
  {
    "title": "Why People Across India Connect With Manovaidya",
    "id": "why-people-across-india-connect-with-manovaidya",
    "lines": [
      "People from Delhi, Noida, Gurgaon, Faridabad and other across the country contact Manovaidya via online and in-clinic consultation.",
      "Individuals can connect for the following reasons:",
      "Anxiety Disorder Treatment",
      "GAD Treatment",
      "Panic Attack Treatment",
      "Panic Disorder Treatment",
      "Overthinking Treatment",
      "Chronic Worry Treatment",
      "Social Anxiety Treatment",
      "Stress and anxiety treatment.",
      "Excessive Worry Treatment"
    ]
  },
  {
    "title": "About Dr. Ankush Garg",
    "id": "about-dr-ankush-garg",
    "lines": [
      "Autism, ADHD, Child Development & Mental Health Specialist in India",
      "Dr. Ankush Garg is the Founder of Manovaidya and the creator of the Neuro-Ayurveda Development System. His work focuses on child development, teen mental wellness, adult mental health, women’s emotional wellbeing, and senior mental health support.",
      "He helps children, teenagers, adults, and families dealing with developmental, behavioural, emotional, and mental wellness challenges. Many families seek his guidance because they want more than quick solutions—they want understanding, direction, and a clear path toward improvement.",
      "Through personalized assessments, structured guidance, family support, and regular follow-ups, Dr. Ankush Garg helps people understand emotional patterns, behaviour, confidence challenges, lifestyle factors, and long-term mental wellness needs.",
      "Based in Delhi NCR, he helps in providing support to individuals and families across India through the Neuro-Ayurveda Development System, helping them build greater clarity, confidence, and overall wellbeing."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-consultation",
    "lines": [
      "If you are constantly concerned, experiencing panic-like feelings or overthinking a lot and it is impacting your life, work, sleep or relationships, knowing what is causing this may be the first step in improving your emotional wellbeing.",
      "People undergo a structured assessment at Manovaidya and are guided and supported individually by the Neuro-Ayurveda Development System.",
      "Take the First Step Towards Better Emotional Balance, Confidence & Mental Wellbeing",
      "Book Assessment Session",
      "Speak With Our Team",
      "Get Personalized Guidance"
    ]
  }
];
const faqs = [
  {
    "question": "1. What are the first signs of anxiety?",
    "answer": "First symptoms of anxiety can be worrying too much, restlessness, having trouble relaxing, overthinking, irritability, and not being able to pay attention. Many people also experience physical reactions like those of a racing heart, muscle tension, sweating or an inability to sleep. It is natural to experience anxiety on an occasional basis when facing stressful events, but if you are experiencing anxiety on a consistent basis that is having a negative impact on your life, work or relationships, it may warrant further understanding and professional guidance. [1] [3]"
  },
  {
    "question": "2. What are the main causes of anxiety?",
    "answer": "Anxiety typically occurs because of multiple factors and not just one. This can be due to work stress, money, relationships, big life changes, sleep, constant stress and personal health issues. Anxiety is unique for each individual, and it is important to be aware of what is influencing the anxiety before choosing the best support. [1] [3]"
  },
  {
    "question": "3. How much anxiety is normal?",
    "answer": "Anxiety that accompanies an exam, interview, presentation or significant life event is a normal experience. When the anxiety becomes persistent, hard to control and interferes with work, relationships, sleep or daily functioning it is a concern. It is important to differentiate between a natural stress and a chronic anxiety so that people know when they may need extra support. [1] [3]"
  },
  {
    "question": "4. What are the physical symptoms of anxiety?",
    "answer": "Anxiety can impact both the mind and body. Typical physical symptoms are rapid heart rate, muscle tension, sweating, trembling, dizziness, stomach pain, headache, tiredness and poor sleep. Symptoms may be different for different people and may be more noticeable when they are stressed. [1] [3]"
  },
  {
    "question": "5. How do doctors diagnose anxiety?",
    "answer": "Anxiety is diagnosed by knowing a person's symptoms and medical history, emotional health and how anxiety impacts on daily living. May ask about thinking, feelings, physical symptoms, sleep, work and relationships. Further evaluation may be warranted to rule out medical conditions that can cause similar symptoms. [1] [2] [3]"
  },
  {
    "question": "6. How can I check my anxiety level?",
    "answer": "The first one is to see how frequently the anxiety is present and if it's interfering with work, relationships, sleep, or daily functioning. Structured questionnaires and clinical assessments can be used by mental health professionals to gain insight into symptom severity. The use of online screening tools is not a substitute for clinical diagnosis. [1] [2]"
  },
  {
    "question": "7. What is the best treatment for anxiety?",
    "answer": "Treatment will vary based on the person's symptoms, severity and life circumstances. Numerous people find psychological help, healthy way of living changes, stress management or medical treatment (should it be needed) helpful. [2] [4] Best Anxiety Treatment in India must be based on expertise and not on one promise."
  },
  {
    "question": "8. Can anxiety be managed without medication?",
    "answer": "A healthy sleep pattern, physical exercise, relaxation techniques, counselling and organised lifestyle changes are helpful for many people with mild or moderate anxiety. [4] [5] [6] It is best to consult with a competent health care provider. Self-management should not be used as a substitute for professional care in cases of severe or persistent symptoms."
  },
  {
    "question": "9. What is the 3-3-3 rule for anxiety?",
    "answer": "The 3-3-3 rule is a method of grounding with three things you see, three sounds you hear and three parts of your body you move. It can be useful to redirect focus to the here and now, but shouldn't be used to replace any professional evaluation if anxiety levels are high and impacting on life."
  },
  {
    "question": "10. Can I live a normal life with anxiety?",
    "answer": "Yes. People with anxiety can remain in the workforce, with relationships and have a meaningful life if they receive the support that they require. Persons may be able to cope better with anxiety through healthy coping mechanisms and through lifestyle changes and professional advices."
  },
  {
    "question": "11. How long do anxiety attacks last?",
    "answer": "Panic events usually peak in a few minutes and decline after. While the exact length is variable among different people, the aftermath can include fatigue and worry lingering for a while. [2] [3] Panic Attack Treatment and Panic Disorder Treatment might be warranted after proper assessment for those with recurring events."
  },
  {
    "question": "12. Can anxiety affect the body?",
    "answer": "The answer is yes. Anxiety can present with tension in the muscles, headaches, stomach discomfort, fatigue, rapid heart and breathing rates, perspiration, dizziness and sleep problems. [1] [3] The presence of these symptoms in a patient should not be considered evidence of the diagnosis of anxiety."
  },
  {
    "question": "13. Can anxiety improve with lifestyle changes?",
    "answer": "Rest, exercise, a healthy diet, stress and time management techniques, relaxation and social activities have positive effects on emotional wellness. [5] [6] Rest and a healthy diet with exercise provide the foundation for effective lifestyle changes."
  },
  {
    "question": "14. How does Manovaidya support adults with anxiety?",
    "answer": "Manovaidya begins support with the individual and not with the symptoms. Through structured assessment, personalized guidance and the Neuro-Ayurveda Development System, support is available through the modeling of emotional wellness, lifestyle and behavioral patterns."
  },
  {
    "question": "15. When should I seek professional guidance for anxiety?",
    "answer": "Professional help should be considered when the control of anxiety is lost and it begins to impact negatively on work, relationships, sleep and other daily activities. The persistent physical symptoms that interfere with normal functioning are a cause for seeking help. Severe chest pain with episodes of fainting and major problems with the ease of breathing are examples of medical emergencies that require immediate care. [1] [2] [3]"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question.replace(/^\d+\.\s*/, ""),
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Adult Mental Health Care", item: "/adult-mental-health-care/" },
    { "@type": "ListItem", position: 3, name: "Adult Anxiety Support", item: "/anxiety-support-india/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Adult Anxiety Treatment in India",
  description: "Looking for Adult Anxiety Treatment in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya.",
  url: "/anxiety-support-india/",
  about: ["Adult Anxiety Support", "Anxiety Symptoms", "Overthinking", "Panic Episodes", "Emotional Wellbeing"],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ankush Garg",
  medicalSpecialty: ["Mental Health", "Adult Mental Health", "Emotional Wellbeing"],
  worksFor: { "@type": "MedicalOrganization", name: "Manovaidya" },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad", "India"],
};

const CitationClickContext = React.createContext({
  onCitationClick: null,
  ruleKeysByText: new Map(),
});

function Citation({ id, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(id)}
      className="mx-0.5 inline cursor-pointer rounded px-0.5 font-black text-[#7835A4] underline decoration-[#7835A4]/40 underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]"
    >
      [{id}]
    </button>
  );
}

function CitationText({ text, allowedRuleKeys, onCitationClick }) {
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
    if (absoluteIndex > cursor) parts.push(source.slice(cursor, absoluteIndex));

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

const subheadingLines = new Set([
  "Emotional Symptoms",
  "Physical Symptoms",
  "Cognitive Symptoms",
  "Behavioural Symptoms",
  "Work Pressure",
  "Financial Concerns",
  "Relationship Challenges",
  "Health Concerns",
  "Lifestyle Habits",
  "Major Life Changes",
  "Biological & Individual Factors",
  "Emotional Wellbeing",
  "Work & Professional Life",
  "Relationships",
  "Physical Wellbeing",
  "Sleep & Daily Routine",
  "Confidence & Decision Making",
  "Brain Nourishment System",
  "Gut Response System",
  "Neural Network System",
  "Sensory Integration System",
  "Behaviour Guidance System",
  "Maintain Healthy Sleep Habits",
  "Stay Physically Active",
  "Build Healthy Daily Routines",
  "Manage Everyday Stress",
  "Stay Connected",
  "Practice Healthy Self-Care",
  "Step 1: Comprehensive Assessment",
  "Step 2: Personalized Guidance",
  "Step 3: Emotional Wellbeing Support",
  "Step 4: Neuro-Ayurveda Development System",
  "Step 5: Progress Tracking & Follow-Up",
  "When Should You Consider an Assessment?",
  "? Comprehensive Anxiety Assessment",
  "? Neuro-Ayurveda Development System",
  "? Personalized Guidance",
  "? Holistic Mind-Body Perspective",
  "? Long-Term Emotional Wellbeing",
  "? Ongoing Support & Progress Tracking",
  "Autism, ADHD, Child Development & Mental Health Specialist in India",
  "Concerned About Persistent Anxiety, Overthinking or Emotional Stress?",
  "Take the First Step Towards Better Emotional Balance, Confidence & Mental Wellbeing",
]);

const internalLinks = [
  {
    "text": "Explore Adult Mental Health Care.",
    "href": "/adult-mental-health-care/"
  },
  {
    "text": "Learn about Adult Depression Treatment.",
    "href": "/adult-depression-support/"
  },
  {
    "text": "Explore Stress & Burnout Treatment.",
    "href": "/stress-burnout-support/"
  },
  {
    "text": "Understand Sleep & Mood Disorder Support.",
    "href": "/sleep-disorders-support/"
  },
  {
    "text": "Learn about OCD Support.",
    "href": "/ocd-support/"
  },
  {
    "text": "Explore Bipolar Disorder Support.",
    "href": "/bipolar-support/"
  },
  {
    "text": "Know more about Dr. Ankush Garg.",
    "href": "/about/doctor"
  }
];

const trustItems = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Assessment Before Recommendations",
  "Online & In-Clinic Consultations Across India",
  "Holistic Mind-Body Approach",
  "Guidance by Dr. Ankush Garg"
];

const iconByLine = {
  "Emotional Symptoms": HeartHandshake,
  "Physical Symptoms": Activity,
  "Cognitive Symptoms": Brain,
  "Behavioural Symptoms": ShieldCheck,
  "Work Pressure": BookOpen,
  "Financial Concerns": Sparkles,
  "Relationship Challenges": Users,
  "Health Concerns": Activity,
  "Lifestyle Habits": CalendarCheck,
  "Major Life Changes": Waves,
  "Biological & Individual Factors": Brain,
  "Emotional Wellbeing": HeartHandshake,
  "Work & Professional Life": BookOpen,
  "Relationships": Users,
  "Physical Wellbeing": Activity,
  "Sleep & Daily Routine": BedDouble,
  "Confidence & Decision Making": Sparkles,
  "Brain Nourishment System": Brain,
  "Gut Response System": Activity,
  "Neural Network System": Sparkles,
  "Sensory Integration System": Waves,
  "Behaviour Guidance System": ShieldCheck,
  "Maintain Healthy Sleep Habits": BedDouble,
  "Stay Physically Active": Activity,
  "Build Healthy Daily Routines": CalendarCheck,
  "Manage Everyday Stress": ShieldCheck,
  "Stay Connected": Users,
  "Practice Healthy Self-Care": HeartHandshake,
  "Step 1: Comprehensive Assessment": Search,
  "Step 2: Personalized Guidance": Sparkles,
  "Step 3: Emotional Wellbeing Support": HeartHandshake,
  "Step 4: Neuro-Ayurveda Development System": Brain,
  "Step 5: Progress Tracking & Follow-Up": CalendarCheck,
  "When Should You Consider an Assessment?": CheckCircle2,
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
      <h2 className="text-[15px] font-black text-[#21142d]">Related Adult Mental Wellness Pages</h2>
      <div className="mt-4 space-y-3">
        <a href="/adult-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><CloudRain className="h-4 w-4 text-[#7835A4]" /> Adult Depression Treatment</a>
        <a href="/stress-burnout-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Activity className="h-4 w-4 text-[#7835A4]" /> Stress & Burnout Treatment</a>
        <a href="/sleep-disorders-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><BedDouble className="h-4 w-4 text-[#7835A4]" /> Sleep Disorders & Insomnia Support</a>
        <a href="/ocd-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><ShieldCheck className="h-4 w-4 text-[#7835A4]" /> OCD Support</a>
        <a href="/bipolar-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Sparkles className="h-4 w-4 text-[#7835A4]" /> Bipolar Disorder Support</a>
      </div>
    </SidebarCard>
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Adult Anxiety Treatment in India</p>
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
          <p className="mt-3 text-[13px] font-semibold leading-6 text-[#111827]">Join our adult mental wellness newsletter for anxiety, stress, sleep and emotional wellbeing insights.</p>
          <form className="mt-5 space-y-4">
            <input type="email" placeholder="Enter your email" className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]" />
            <button type="button" className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]">Join Now</button>
          </form>
          <p className="mt-4 text-[11px] font-semibold text-[#111827]">Your <a href="/privacy-policy" className="underline decoration-[#111827] underline-offset-2">privacy</a> is important to us.</p>
        </div>
      </div>
    </section>
  );
}

function MedicalReferencesBlock() {
  return (
    <section id="medical-references" className="mt-5 scroll-mt-28 rounded-xl border border-[#eadff1] bg-white p-5 shadow-[0_12px_30px_rgba(58,31,90,0.06)]">
      <h2 className="text-[20px] font-black text-[#17111f]">Resources</h2>
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Modern science and Ayurvedic reference resources used for this page.</p>
      <div className="mt-5 space-y-4">
        {referenceResources.map((reference) => (
          <article key={reference.n} id={`reference-${reference.n}`} className="scroll-mt-32 rounded-lg border border-[#eadff1] bg-[#fcf9ff] p-4">
            <p className="text-[13px] font-black leading-6 text-[#21142d]">[{reference.n}] {reference.title}</p>
            <a href={reference.url} target="_blank" rel="noreferrer" className="mt-2 block break-words text-[12px] font-bold leading-5 text-[#7835A4] underline underline-offset-2">{reference.url}</a>
            <p className="mt-2 text-[12px] font-semibold leading-5 text-[#5f5367]">Supports: {reference.supports}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlainLine({ line }) {
  const { ruleKeysByText, onCitationClick } = React.useContext(CitationClickContext);
  const isMarkedLine = /^[^\w\d[]+/.test(line);
  const cleanLine = isMarkedLine ? line.replace(/^[^\w\d[]+\s*/, "") : line;

  if (isMarkedLine) {
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span><CitationText text={cleanLine} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByText.get(line)} /></span>
      </p>
    );
  }
  return (
    <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
      <CitationText text={cleanLine} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByText.get(line)} />
    </p>
  );
}

function isShortListLine(line) {
  return (
    line.length <= 72 &&
    !subheadingLines.has(line) &&
    !line.endsWith(".") &&
    !line.endsWith("?") &&
    !line.endsWith(":")
  );
}

function BulletListCard({ items, columns = true }) {
  const { ruleKeysByText, onCitationClick } = React.useContext(CitationClickContext);

  return (
    <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
      <ul className={`space-y-2 ${columns ? "sm:columns-2" : ""}`}>
        {items.map((item) => (
          <li key={item} className="flex break-inside-avoid gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />
            <CitationText text={item.replace(/^[^\w\d[]+\s*/, "")} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByText.get(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FocusGridCard({ title, items }) {
  const { ruleKeysByText, onCitationClick } = React.useContext(CitationClickContext);
  const icons = [Brain, Sparkles, Activity, ShieldCheck, HeartHandshake, CalendarCheck];
  return (
    <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
      <h3 className="mb-3 text-[14px] font-bold text-[#3b2e45]">{title}</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const label = item.replace(/^[^\w\d[]+\s*/, "");
          return (
            <li key={item} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <span><CitationText text={label} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByText.get(item)} /></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ContentLine({ line }) {
  if (subheadingLines.has(line)) {
    const Icon = iconByLine[line] || CheckCircle2;
    return (
      <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-[16px] font-black text-[#21142d]">{line}</h3>
        </div>
      </div>
    );
  }
  return <PlainLine line={line} />;
}

function SectionContent({ lines }) {
  const blocks = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (line.includes("Focuses On:")) {
      const items = [];
      let nextIndex = index + 1;
      while (nextIndex < lines.length && (lines[nextIndex].startsWith("✔") || lines[nextIndex].startsWith("?"))) {
        items.push(lines[nextIndex]);
        nextIndex += 1;
      }
      blocks.push({ focusTitle: line, items });
      index = nextIndex - 1;
      continue;
    }

    if (subheadingLines.has(line)) {
      blocks.push({ title: line, lines: [] });
      continue;
    }

    const lastBlock = blocks[blocks.length - 1];
    if (lastBlock?.title) {
      lastBlock.lines.push(line);
    } else {
      const items = [];
      let nextIndex = index;
      while (nextIndex < lines.length && isShortListLine(lines[nextIndex])) {
        items.push(lines[nextIndex]);
        nextIndex += 1;
      }

      if (items.length >= 3) {
        blocks.push({ items });
        index = nextIndex - 1;
      } else {
        blocks.push({ line });
      }
    }
  }

  return (
    <div className="mt-3">
      {blocks.map((block, index) => {
        if (block.focusTitle) {
          return <FocusGridCard key={`${block.focusTitle}-${index}`} title={block.focusTitle} items={block.items} />;
        }

        if (block.items) {
          return <BulletListCard key={`items-${index}`} items={block.items} />;
        }

        if (!block.title) {
          return <PlainLine key={`${block.line}-${index}`} line={block.line} />;
        }

        const Icon = iconByLine[block.title] || CheckCircle2;
        const childBlocks = [];
        for (let childIndex = 0; childIndex < block.lines.length; childIndex += 1) {
          const line = block.lines[childIndex];
          const items = [];
          let nextIndex = childIndex;
          while (nextIndex < block.lines.length && isShortListLine(block.lines[nextIndex])) {
            items.push(block.lines[nextIndex]);
            nextIndex += 1;
          }

          if (items.length >= 2) {
            childBlocks.push({ items });
            childIndex = nextIndex - 1;
          } else {
            childBlocks.push({ line });
          }
        }

        return (
          <div key={`${block.title}-${index}`} className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-[16px] font-black text-[#21142d]">{block.title}</h3>
            </div>
            {childBlocks.map((childBlock, childIndex) => (
              childBlock.items
                ? <BulletListCard key={`${block.title}-items-${childIndex}`} items={childBlock.items} />
                : <PlainLine key={`${block.title}-${childIndex}`} line={childBlock.line} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function SectionImage({ title }) {
  if (title === "Common Signs & Symptoms of Anxiety") {
    return <img src={symptomsImage} alt="Common anxiety symptoms in adults" className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />;
  }
  if (title === "The Neuro-Ayurveda Approach to Adult Anxiety Support") {
    return (
      <div className="mt-5 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] shadow-[0_12px_30px_rgba(58,31,90,0.08)]">
        <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for adult anxiety support" className="max-h-[300px] w-full max-w-[720px] object-contain object-center" />
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
            {section.lines.map((line) => <p key={line} className="text-[14px] font-semibold leading-7 text-[#e5d5f2]">{line}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6">
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Consultation</a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Take Mental Health Assessment</a>
          </div>
        </div>
        <img src={ctaImage} alt="Adult emotional wellbeing and anxiety support" className="h-40 w-full object-cover object-center sm:h-52" />
      </section>
    );
  }

  if (section.title === "About Dr. Ankush Garg") {
    const [specialty, ...doctorLines] = section.lines;
    return (
      <section id={section.id} className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <img
            src={doctorImage}
            alt="Dr. Ankush Garg"
            className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
            <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
            <p className="mt-1 text-[13px] font-bold text-[#51465a]">{specialty}</p>
            {doctorLines.map((line) => (
              <p key={line} className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className="mt-9">
      {section.title !== "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">{section.title}</h2>}
      {section.title === "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">Helping Adults Better Understand Anxiety, Constant Worry, Panic & Emotional Wellbeing</h2>}
      <SectionContent lines={section.lines} />
      <SectionImage title={section.title} />
    </section>
  );
}

function AdultAnxietySupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [showResources, setShowResources] = React.useState(false);
  const pageUrl = "https://manovaidya.org/anxiety-support-india/";
  const pageTitle = "Adult Anxiety Treatment in India | Manovaidya";
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

  const ruleKeysByText = React.useMemo(() => {
    const ruleKeys = new Map();
    const linkedRuleKeys = new Set();
    const collect = (line) => {
      if (!line || subheadingLines.has(line)) return;
      const cleanLine = line.replace(/^[^\w\d[]+\s*/, "");
      const lineRuleKeys = getArticleLinkRuleKeysForText(cleanLine, linkedRuleKeys);
      if (lineRuleKeys.size) ruleKeys.set(line, lineRuleKeys);
    };

    sections.forEach((section) => section.lines.forEach(collect));
    faqs.forEach((faq) => collect(faq.answer));
    trustItems.forEach(collect);
    internalLinks.forEach((link) => collect(link.text));

    return ruleKeys;
  }, []);

  const linkRenderContext = React.useMemo(() => ({
    onCitationClick: handleCitationClick,
    ruleKeysByText,
  }), [handleCitationClick, ruleKeysByText]);

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
    const scriptId = "adult-anxiety-support-schema";
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
        if (section && section.offsetTop <= scrollMarker) currentSection = id;
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
    <CitationClickContext.Provider value={linkRenderContext}>
      <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
      <Seo
        title="Adult Anxiety Treatment in India | Anxiety Symptoms, Overthinking & Emotional Wellbeing | Manovaidya"
        description="Looking for Adult Anxiety Treatment in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya."
        keywords="Adult Anxiety Support, Adult Anxiety Treatment in India, Anxiety Support India, Anxiety Symptoms, Generalized Anxiety, Overthinking, Panic Episodes, Emotional Wellbeing, Persistent Anxiety, Constant Worry, Physical Symptoms of Anxiety, Anxiety Attack, Anxiety Disorder, Excessive Worry, Restlessness, Sleep Problems Due to Anxiety"
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a><span>&gt;</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a><span>&gt;</span>
                <span className="text-[#4b345d]">Adult Anxiety Support</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Adult Mental Health Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">Adult Anxiety Treatment in India</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">Helping Adults Better Understand Anxiety, Constant Worry, Panic & Emotional Wellbeing</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Consultation</a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3"><img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" /><div><p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p><p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist</p></div></div>
                <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]"><span>Share:</span>{articleShareLinks.map(({ label, href, title }) => (<a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label={title}>{label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}</a>))}</div>
              </div>
            </div>
            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex"><Brain className="mb-1 h-5 w-5" /> Neuro-Ayurveda Development System</div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]"><img src={heroImage} alt="Adult Anxiety Treatment in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" /></div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          {sections.map((section) => <ContentSection key={section.id} section={section} />)}

          <section id="trust" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Trust Manovaidya?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                  <CitationText text={item} allowedRuleKeys={ruleKeysByText.get(item)} />
                </div>
              ))}
            </div>
          </section>

          <section id="internal-links" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[18px] font-black text-[#17111f]">Helpful Adult Mental Health Links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((link) => <a key={link.href} href={link.href} className="flex items-center gap-2 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline"><ArrowRight className="h-4 w-4" />{link.text}</a>)}
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={openFaq === index}>
                    <span className="text-[14px] font-black text-[#21142d]">{faq.question}</span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbf9fd] transition-transform ${openFaq === index ? "rotate-180 bg-[#f0e7f6] text-[#7835A4]" : "text-[#9b8ea5]"}`}><ChevronDown className="h-4 w-4" /></span>
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-[#eadff1] bg-[#fbf9fd] p-4">
                      <p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">
                        <CitationText text={faq.answer} allowedRuleKeys={ruleKeysByText.get(faq.answer)} />
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

        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img
                src={doctorImage}
                alt="Dr Ankush Garg Manovaidya adult anxiety and mental health clinician"
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
                  Clinical Focus: Adult Mental Health, Anxiety, Stress, Teen Wellness, Autism, ADHD and Child Development
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

          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Search</h2><label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3"><input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" /><Search className="h-4 w-4 text-[#7835A4]" /></label></SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">On this page</h2><nav className="mt-5 space-y-3.5">{pageLinks.map(({ label, id }) => (<a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />{label}</a>))}</nav></SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Categories</h2><div className="mt-4 space-y-3">{categories.map(({ label, count, Icon }) => (<a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span><span>{count}</span></a>))}</div></SidebarCard>
          <RelatedAdultPagesCard />
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar"><CalendarCheck className="h-9 w-9 text-[#7835A4]" /><h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2><p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get personalized anxiety and emotional wellbeing guidance from our experts.</p><a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a><p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p></SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-[#fbf9fd]"><div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8"><div className="flex items-center gap-4"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm"><Mail className="h-8 w-8" /></span><div><h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2><p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, adult mental wellness tips and Manovaidya updates.</p></div></div><form className="flex gap-3"><input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" /><button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button></form></div></section>
      </main>
    </CitationClickContext.Provider>
  );
}

export default AdultAnxietySupportIndiaPage;
