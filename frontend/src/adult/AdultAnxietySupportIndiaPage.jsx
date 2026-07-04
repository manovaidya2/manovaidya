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
import neuroAyurvedaImage from "../images/science-neuro-ayurveda.png";
import ctaImage from "../images/adult-sunset-cta.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedAdultPagesCard from "./RelatedPagesCard";

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

const sections = [
  {
    "title": "Introduction",
    "id": "introduction",
    "lines": [
      "Feeling worried before an important event or during a challenging situation is a natural part of life. However, when worry becomes persistent, overwhelming or begins affecting daily life, relationships, work or emotional wellbeing, it may deserve greater understanding and support.",
      "Many adults experience constant overthinking, excessive worrying, restlessness or difficulty relaxing without fully understanding why these feelings continue. Some notice physical symptoms such as a racing heartbeat, muscle tension, disturbed sleep or digestive discomfort, while others struggle with ongoing fear, nervousness or a sense that something bad might happen.",
      "At Manovaidya, we understand that anxiety is not simply about feeling stressed. Emotional wellbeing is influenced by multiple interconnected factors, including lifestyle, sleep, emotional health, daily routines and overall mind-body balance.",
      "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand anxiety, emotional wellbeing and the factors influencing long-term mental health.",
      "At Manovaidya, Adult Anxiety Support Focuses On:",
      "✔ Persistent Anxiety",
      "✔ Excessive Worry & Overthinking",
      "✔ Panic Episodes",
      "✔ Restlessness & Nervousness",
      "✔ Emotional Wellbeing",
      "✔ Healthy Mind-Body Balance"
    ]
  },
  {
    "title": "Understanding Anxiety in Adults",
    "id": "understanding-anxiety-in-adults",
    "lines": [
      "Anxiety is the body's natural response to uncertainty, change or perceived challenges. In many situations, anxiety can be helpful because it prepares us to respond to important events and responsibilities.",
      "However, when anxious thoughts become frequent, difficult to control or begin affecting everyday life, they may influence emotional wellbeing, relationships, work performance and physical health.",
      "Many people searching for Anxiety Support in India, Anxiety Treatment in India or Help for Constant Anxiety are looking for answers because they have been experiencing ongoing worry, nervousness or emotional distress that does not seem to improve.",
      "Adults experiencing anxiety may notice:",
      "Constant worrying",
      "Difficulty relaxing",
      "Feeling overwhelmed",
      "Fear without a clear reason",
      "Restlessness",
      "Difficulty concentrating",
      "Trouble sleeping",
      "Physical discomfort during stressful situations",
      "Every individual experiences anxiety differently. Some people notice mainly emotional symptoms, while others experience physical sensations or behavioural changes.",
      "Understanding anxiety from a broader perspective often helps individuals and families make informed decisions about emotional wellbeing and appropriate support."
    ]
  },
  {
    "title": "Common Signs & Symptoms of Anxiety",
    "id": "common-signs-symptoms-of-anxiety",
    "lines": [
      "Anxiety can affect thoughts, emotions, behaviour and physical wellbeing.",
      "The experience may vary from person to person.",
      "Emotional Symptoms",
      "Persistent worry",
      "Feeling nervous",
      "Fear of uncertainty",
      "Irritability",
      "Feeling overwhelmed",
      "Difficulty relaxing",
      "Physical Symptoms",
      "Rapid heartbeat",
      "Muscle tension",
      "Sweating",
      "Trembling",
      "Dry mouth",
      "Stomach discomfort",
      "Headaches",
      "Fatigue",
      "Cognitive Symptoms",
      "Overthinking",
      "Difficulty concentrating",
      "Racing thoughts",
      "Fear of making mistakes",
      "Constant \"what if\" thinking",
      "Difficulty making decisions",
      "Behavioural Symptoms",
      "Avoiding stressful situations",
      "Seeking frequent reassurance",
      "Restlessness",
      "Trouble sitting still",
      "Difficulty completing tasks",
      "Reduced confidence",
      "Experiencing one or more of these symptoms occasionally does not necessarily mean someone has an anxiety disorder. However, if these symptoms become persistent or begin affecting daily functioning, relationships, work or overall wellbeing, seeking professional guidance may be beneficial."
    ]
  },
  {
    "title": "Why Anxiety Develops",
    "id": "why-anxiety-develops",
    "lines": [
      "Anxiety rarely develops because of a single reason.",
      "In many situations, it results from a combination of emotional, lifestyle, environmental and biological factors.",
      "Understanding these influences helps create a more complete picture of emotional wellbeing.",
      "Work Pressure",
      "Deadlines, workplace responsibilities, career uncertainty and long working hours may contribute to ongoing stress and worry.",
      "Financial Concerns",
      "Financial responsibilities, debt, job security and future planning may increase emotional pressure for many adults.",
      "Relationship Challenges",
      "Family conflicts, relationship concerns or major life transitions may influence emotional wellbeing and increase anxiety.",
      "Health Concerns",
      "Personal health issues or worrying about the health of loved ones may contribute to persistent anxiety.",
      "Lifestyle Habits",
      "Poor sleep, irregular routines, excessive screen use, limited physical activity and unhealthy daily habits may affect emotional balance over time.",
      "Major Life Changes",
      "Marriage, parenthood, relocation, career changes or unexpected life events may create emotional uncertainty and increase stress.",
      "Biological & Individual Factors",
      "Every person responds differently to stress. Individual differences, emotional resilience and personal experiences may all influence how anxiety develops and is experienced.",
      "Many adults worry that anxiety means they are weak or incapable. In reality, anxiety is a common experience, and understanding its contributing factors is often the first step toward improving emotional wellbeing."
    ]
  },
  {
    "title": "How Anxiety Can Affect Daily Life",
    "id": "how-anxiety-can-affect-daily-life",
    "lines": [
      "Anxiety is not limited to thoughts or emotions. It can influence many areas of everyday life, including work, relationships, physical wellbeing and personal confidence.",
      "When anxiety becomes persistent, even routine activities may begin to feel more difficult or overwhelming. Understanding these effects often helps individuals recognize the importance of seeking appropriate support.",
      "Emotional Wellbeing",
      "Persistent anxiety may affect emotional balance and make it difficult to enjoy everyday life.",
      "Many adults may experience:",
      "Constant worrying",
      "Feeling overwhelmed",
      "Restlessness",
      "Irritability",
      "Difficulty relaxing",
      "Fear of uncertainty",
      "These emotional experiences can gradually affect confidence, resilience and overall quality of life.",
      "Work & Professional Life",
      "Anxiety may influence workplace performance by making it harder to:",
      "Concentrate on tasks",
      "Make decisions",
      "Meet deadlines",
      "Handle pressure",
      "Participate in meetings",
      "Maintain productivity",
      "Many adults continue working despite anxiety, but they may feel mentally exhausted or constantly under pressure.",
      "Relationships",
      "Anxiety can also affect relationships with family, friends and colleagues.",
      "Some people may:",
      "Avoid social situations",
      "Seek constant reassurance",
      "Become easily irritated",
      "Find it difficult to express emotions",
      "Worry excessively about relationships",
      "Healthy emotional wellbeing often supports healthier communication and stronger relationships.",
      "Physical Wellbeing",
      "Although anxiety is often thought of as an emotional experience, it may also be associated with physical symptoms such as:",
      "Muscle tension",
      "Headaches",
      "Fatigue",
      "Digestive discomfort",
      "Restlessness",
      "Disturbed sleep",
      "Understanding the connection between emotional and physical wellbeing helps individuals take a more holistic approach to their health.",
      "Sleep & Daily Routine",
      "Many adults experiencing anxiety also report:",
      "Difficulty falling asleep",
      "Frequent waking during the night",
      "Feeling tired despite sleeping",
      "Difficulty relaxing before bedtime",
      "Poor sleep may further affect concentration, mood and emotional resilience.",
      "Confidence & Decision Making",
      "Persistent anxiety may reduce confidence and make everyday decisions feel more difficult.",
      "Some adults may:",
      "Overthink simple decisions",
      "Fear making mistakes",
      "Avoid new opportunities",
      "Doubt their abilities",
      "Delay important decisions",
      "Supporting emotional wellbeing often helps individuals regain confidence and improve decision-making over time."
    ]
  },
  {
    "title": "The Neuro-Ayurveda Approach to Adult Anxiety Support",
    "id": "neuro-ayurveda-approach",
    "lines": [
      "At Manovaidya, anxiety is understood through a broader perspective.",
      "Rather than focusing only on symptoms, we aim to understand the interconnected factors that may influence emotional wellbeing, thought patterns, behaviour and overall health.",
      "The Neuro-Ayurveda Development System helps individuals better understand anxiety through five interconnected pillars.",
      "Brain Nourishment System",
      "Healthy emotional wellbeing begins with healthy brain function.",
      "The Brain Nourishment System focuses on understanding factors that may influence:",
      "Emotional regulation",
      "Concentration",
      "Mental clarity",
      "Decision making",
      "Stress response",
      "Confidence",
      "Supporting brain health may help individuals better understand emotional wellbeing and daily functioning.",
      "Gut Response System",
      "Growing research highlights the relationship between gut health and emotional wellbeing through the gut-brain connection.",
      "Many adults experiencing anxiety may also notice:",
      "Digestive discomfort",
      "Appetite changes",
      "Lifestyle imbalance",
      "Low energy",
      "Poor daily routines",
      "The Gut Response System focuses on understanding how physical wellbeing may influence emotional balance.",
      "Neural Network System",
      "Every experience contributes to patterns of thinking and responding.",
      "The Neural Network System focuses on understanding:",
      "Overthinking patterns",
      "Worry cycles",
      "Emotional responses",
      "Habit formation",
      "Behavioural patterns",
      "Recognizing these patterns often helps individuals develop healthier coping strategies.",
      "Sensory Integration System",
      "Modern life exposes adults to constant stimulation through:",
      "Work demands",
      "Digital devices",
      "Social media",
      "Noise",
      "Continuous information",
      "For some individuals, excessive stimulation may increase feelings of stress and overwhelm.",
      "Understanding environmental influences often helps create healthier routines and emotional balance.",
      "Behaviour Guidance System",
      "Behaviour often reflects underlying emotional experiences.",
      "Adults experiencing anxiety may notice:",
      "Avoiding situations",
      "Seeking reassurance",
      "Restlessness",
      "Procrastination",
      "Difficulty relaxing",
      "Rather than focusing only on behaviours, this pillar aims to understand the factors that may be influencing them and encourage healthier responses."
    ]
  },
  {
    "title": "How Adults Can Support Their Emotional Wellbeing",
    "id": "how-adults-can-support-their-emotional-wellbeing",
    "lines": [
      "Healthy emotional wellbeing often develops through consistent daily habits rather than a single solution.",
      "Small lifestyle changes can make a meaningful difference over time.",
      "Maintain Healthy Sleep Habits",
      "Consistent sleep routines support emotional balance, concentration and resilience.",
      "Stay Physically Active",
      "Regular physical activity supports both physical and emotional wellbeing.",
      "Build Healthy Daily Routines",
      "Balanced routines often reduce uncertainty and improve emotional stability.",
      "Manage Everyday Stress",
      "Taking breaks, practising relaxation techniques and maintaining work-life balance can help reduce daily stress.",
      "Stay Connected",
      "Supportive relationships with family and friends often strengthen emotional resilience.",
      "Practice Healthy Self-Care",
      "Making time for rest, hobbies and enjoyable activities helps support long-term emotional wellbeing."
    ]
  },
  {
    "title": "How Manovaidya Supports Adults",
    "id": "how-manovaidya-supports-adults",
    "lines": [
      "At Manovaidya, support begins with understanding the individual rather than focusing only on symptoms.",
      "Our process typically includes:",
      "Step 1: Comprehensive Assessment",
      "Understanding emotional wellbeing, lifestyle habits, sleep patterns, stress levels, daily routines and personal concerns.",
      "Step 2: Personalized Guidance",
      "Providing individualized recommendations based on each person's emotional and lifestyle needs.",
      "Step 3: Emotional Wellbeing Support",
      "Helping individuals better understand anxiety, stress and healthy coping strategies through a structured and personalized approach.",
      "Step 4: Neuro-Ayurveda Development System",
      "Applying the five-pillar framework to understand emotional wellbeing, behaviour, lifestyle and overall health from a holistic perspective.",
      "Step 5: Progress Tracking & Follow-Up",
      "Creating a structured roadmap that helps individuals monitor progress and make informed decisions about their emotional wellbeing.",
      "When Should You Consider an Assessment?",
      "You may consider seeking guidance if you experience:",
      "Persistent worry",
      "Excessive overthinking",
      "Frequent nervousness",
      "Difficulty relaxing",
      "Panic-like episodes",
      "Sleep disturbances",
      "Anxiety affecting work or relationships",
      "Ongoing emotional stress",
      "Anxiety interfering with daily life",
      "A structured assessment can help you better understand the factors influencing your emotional wellbeing and create a personalized roadmap for long-term support.",
      "Our goal is to help individuals move from constant worry and emotional overwhelm toward greater clarity, confidence, emotional balance and healthier daily functioning."
    ]
  },
  {
    "title": "Why Adults Across India Choose Manovaidya",
    "id": "why-adults-across-india-choose-manovaidya",
    "lines": [
      "Choosing the right support for anxiety and emotional wellbeing can feel overwhelming. Many individuals have already tried managing anxiety on their own but continue to experience constant worry, overthinking, panic-like episodes or emotional exhaustion.",
      "At Manovaidya, we believe that lasting improvement begins with understanding the individual rather than focusing only on symptoms. Our approach helps people better understand the emotional, behavioural and lifestyle factors that may be influencing their wellbeing.",
      "✔ Comprehensive Anxiety Assessment",
      "Every individual experiences anxiety differently.",
      "Some struggle with constant overthinking.",
      "Others experience panic-like episodes, physical symptoms or persistent worry.",
      "Our structured assessment helps us understand emotional wellbeing, lifestyle habits, stress patterns, sleep, daily routines and individual concerns before creating personalized guidance.",
      "✔ Neuro-Ayurveda Development System",
      "Manovaidya follows the Neuro-Ayurveda Development System, a structured framework that understands emotional wellbeing through five interconnected pillars:",
      "Brain Nourishment System",
      "Gut Response System",
      "Neural Network System",
      "Sensory Integration System",
      "Behaviour Guidance System",
      "This approach helps individuals understand the broader factors that may influence anxiety and emotional wellbeing.",
      "✔ Personalized Guidance",
      "No two individuals experience anxiety in exactly the same way.",
      "Recommendations are personalized according to emotional wellbeing, lifestyle, daily routines, work responsibilities and individual goals.",
      "✔ Holistic Mind-Body Perspective",
      "Our approach focuses on emotional wellbeing while also understanding the relationship between lifestyle, sleep, stress, physical wellbeing and everyday habits.",
      "✔ Long-Term Emotional Wellbeing",
      "Rather than focusing only on temporary relief, we help individuals build healthier routines, emotional resilience, confidence and long-term wellbeing.",
      "✔ Ongoing Support & Progress Tracking",
      "Emotional wellbeing is a journey.",
      "Regular follow-up and structured progress tracking help individuals better understand their growth and make informed decisions throughout the process."
    ]
  },
  {
    "title": "Why People Across India Connect With Manovaidya",
    "id": "why-people-across-india-connect-with-manovaidya",
    "lines": [
      "Individuals from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Adult Anxiety Support, Emotional Wellbeing Guidance and personalized consultations through both online and in-clinic appointments."
    ]
  },
  {
    "title": "About Dr. Ankush Garg",
    "id": "about-dr-ankush-garg",
    "lines": [
      "Autism, ADHD, Child Development & Mental Health Specialist in India",
      "Dr. Ankush Garg is the Founder of Manovaidya and Developer of the Neuro-Ayurveda Development System.",
      "His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and holistic approach.",
      "Many individuals experiencing anxiety, overthinking, panic-like symptoms, emotional stress or persistent worry seek guidance to better understand the factors influencing their wellbeing.",
      "Through structured assessments, personalized guidance, lifestyle recommendations and regular follow-up, Dr. Ankush Garg helps individuals better understand emotional wellbeing while supporting long-term mental wellness through the Neuro-Ayurveda Development System.",
      "Based in Delhi NCR, Dr. Ankush Garg supports individuals and families from across India through structured assessment, personalized guidance and holistic mental health care."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-consultation",
    "lines": [
      "Concerned About Persistent Anxiety, Overthinking or Emotional Stress?",
      "If constant worry, panic-like symptoms, excessive overthinking or anxiety are affecting your daily life, work, sleep or relationships, understanding the underlying factors is often the first step toward better emotional wellbeing.",
      "At Manovaidya, we help individuals better understand anxiety through structured assessment, personalized guidance and the Neuro-Ayurveda Development System."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-consultation",
    "lines": [
      "Take the First Step Towards Better Emotional Balance, Confidence & Mental Wellbeing",
      "📞 Book Assessment Session",
      "📞 Speak With Our Team",
      "📞 Get Personalized Guidance"
    ]
  }
];
const faqs = [
  {
    "question": "1. What are the first signs of anxiety?",
    "answer": "The first signs of anxiety may include excessive worrying, restlessness, difficulty relaxing, overthinking, irritability and trouble concentrating. Some people also notice physical symptoms such as a racing heartbeat, muscle tension, sweating or disturbed sleep. While occasional anxiety is a normal response to stressful situations, persistent symptoms that begin affecting daily life, work or relationships may deserve further understanding and professional guidance."
  },
  {
    "question": "2. What are the main causes of anxiety?",
    "answer": "Anxiety usually develops due to a combination of factors rather than a single cause. Work pressure, financial concerns, relationship challenges, major life changes, poor sleep, ongoing stress and individual biological factors may all contribute. Every person experiences anxiety differently, which is why understanding the underlying influences is important before deciding on the most appropriate support."
  },
  {
    "question": "3. How much anxiety is normal?",
    "answer": "Feeling anxious before an exam, interview, presentation or important life event is a normal part of life. Anxiety becomes a concern when it is persistent, difficult to control or begins affecting work, relationships, sleep or everyday functioning. Understanding the difference between normal stress and ongoing anxiety can help individuals decide when additional support may be beneficial."
  },
  {
    "question": "4. What are the physical symptoms of anxiety?",
    "answer": "Anxiety can affect both the mind and body. Common physical symptoms may include a rapid heartbeat, muscle tension, sweating, trembling, dizziness, stomach discomfort, headaches, fatigue and difficulty sleeping. These symptoms can vary from person to person and may become more noticeable during stressful situations or periods of ongoing worry."
  },
  {
    "question": "5. How do doctors diagnose anxiety?",
    "answer": "Doctors diagnose anxiety by understanding a person's symptoms, medical history, emotional wellbeing and how anxiety affects daily life. They may ask questions about thoughts, emotions, physical symptoms, sleep, work and relationships. In some situations, additional medical evaluation may be recommended to rule out other health conditions that can produce similar symptoms."
  },
  {
    "question": "6. How can I check my anxiety level?",
    "answer": "The first step is to observe how often anxiety occurs and whether it affects your work, relationships, sleep or daily activities. Mental health professionals may also use structured questionnaires and clinical assessments to better understand the severity of symptoms. A comprehensive evaluation helps identify the factors contributing to anxiety and guides appropriate support."
  },
  {
    "question": "7. What is the best treatment for anxiety?",
    "answer": "The most appropriate approach depends on the individual's symptoms, severity and personal circumstances. Many people benefit from psychological support, healthy lifestyle changes, stress management techniques or medical care when appropriate. At Manovaidya, support begins with understanding emotional wellbeing through a structured assessment and the Neuro-Ayurveda Development System before creating personalized guidance."
  },
  {
    "question": "8. Can anxiety be managed without medication?",
    "answer": "Many individuals with mild or moderate anxiety benefit from approaches such as healthy sleep, regular physical activity, relaxation techniques, counselling, stress management and structured lifestyle changes. The most appropriate approach depends on each person's needs and should be discussed with a qualified healthcare professional. Self-management should not replace professional care when symptoms are severe or persistent."
  },
  {
    "question": "9. What is the 3-3-3 rule for anxiety?",
    "answer": "The 3-3-3 rule is a simple grounding technique that may help some people during moments of anxiety. It involves noticing three things you can see, three sounds you can hear and moving three parts of your body. This technique helps shift attention toward the present moment and may reduce feelings of overwhelm. While it can be helpful, it is not a substitute for professional assessment or treatment when anxiety significantly affects daily life."
  },
  {
    "question": "10. Can I live a normal life with anxiety?",
    "answer": "Yes. Many people with anxiety continue to work, maintain relationships and lead fulfilling lives with appropriate understanding and support. Learning healthy coping strategies, improving lifestyle habits and seeking guidance when needed can help individuals manage anxiety more effectively and improve their overall emotional wellbeing."
  },
  {
    "question": "11. How long do anxiety attacks last?",
    "answer": "An anxiety or panic episode often reaches its peak within several minutes and usually settles gradually, although the duration can vary from person to person. Some individuals may continue feeling tired, emotionally sensitive or worried even after the episode has passed. If episodes become frequent or begin affecting everyday life, professional guidance may be beneficial."
  },
  {
    "question": "12. Can anxiety affect the body?",
    "answer": "Yes. Anxiety can influence both emotional and physical wellbeing. Some people experience muscle tension, headaches, stomach discomfort, fatigue, rapid heartbeat, sweating, dizziness or sleep difficulties. These physical symptoms are common and highlight the close relationship between the mind and body. Understanding this connection often helps individuals take a more comprehensive approach to emotional wellbeing."
  },
  {
    "question": "13. Can anxiety improve with lifestyle changes?",
    "answer": "Healthy lifestyle habits may support emotional wellbeing and help many people manage anxiety more effectively. Regular sleep, physical activity, balanced nutrition, stress management, relaxation practices and meaningful social connections all contribute to overall mental health. Lifestyle changes are often most effective when combined with personalized professional guidance based on an individual's specific needs."
  },
  {
    "question": "14. How does Manovaidya support adults with anxiety?",
    "answer": "At Manovaidya, support begins with understanding the individual rather than focusing only on symptoms. Through structured assessment, personalized guidance and the Neuro-Ayurveda Development System, we help individuals better understand emotional wellbeing, lifestyle influences and behavioural patterns. Our goal is to support long-term emotional balance, confidence and healthier daily functioning through a holistic and personalized approach."
  },
  {
    "question": "15. When should I seek professional guidance for anxiety?",
    "answer": "You should consider seeking professional guidance if anxiety becomes persistent, difficult to control or begins affecting your work, relationships, sleep or daily life. Frequent overthinking, ongoing worry, panic-like episodes or physical symptoms that interfere with normal functioning should not be ignored. A structured assessment can help identify contributing factors and create a personalized roadmap for improving emotional wellbeing."
  }
];
const seoNotes = "STEP 1: URL\nFinal URL\n/anxiety-support-india/\n\nOR PAHELE CHECK KARTA HAI \nAlternative:\n/anxiety-treatment-india/\n\n\nSTEP 2: SEO TITLE\nFinal\nAdult Anxiety Support in India | Anxiety Symptoms, Overthinking & Emotional Wellbeing | Manovaidya\n\n\nSTEP 3: META DESCRIPTION\nLooking for Adult Anxiety Support in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya.\n\n\nSTEP 4: H1\nAdult Anxiety Support in India\n\nOnly one H1.\n\nSTEP 5: H2 Structure\nUnderstanding Anxiety in Adults\n\nCommon Signs & Symptoms of Anxiety\n\nWhy Anxiety Develops\n\nHow Anxiety Can Affect Daily Life\n\nThe Neuro-Ayurveda Approach to Adult Anxiety Support\n\nHow Adults Can Support Their Emotional Wellbeing\n\nHow Manovaidya Supports Adults\n\nWhy Adults Across India Choose Manovaidya\n\nAbout Dr. Ankush Garg\n\nFrequently Asked Questions\n\nBook a Consultation\n\n\nSTEP 6: PRIMARY KEYWORDS\nNatural placement across the page.\nAdult Anxiety Support\n\nAdult Anxiety Support in India\n\nAnxiety Support India\n\nAnxiety Symptoms\n\nGeneralized Anxiety\n\nOverthinking\n\nPanic Episodes\n\nEmotional Wellbeing\n\nPersistent Anxiety\n\nConstant Worry\n\n\nSTEP 7: SECONDARY KEYWORDS\nPhysical Symptoms of Anxiety\n\nAnxiety Attack\n\nStress and Anxiety\n\nAnxiety Disorder\n\nExcessive Worry\n\nMental Wellbeing\n\nEmotional Stress\n\nRestlessness\n\nDifficulty Relaxing\n\nSleep Problems Due to Anxiety\n\n\nSTEP 8: LONG-TAIL KEYWORDS\nNaturally include these phrases throughout the content:\nHow to manage anxiety naturally\n\nHow to reduce overthinking\n\nWhy do I feel anxious all the time\n\nSigns of anxiety in adults\n\nHow anxiety affects daily life\n\nWhat causes anxiety\n\nCan anxiety affect the body\n\nAnxiety and sleep problems\n\nAnxiety and work stress\n\nProfessional support for anxiety\n\n\nSTEP 9: LOCAL SEO\nAdd after:\nWhy Adults Across India Connect With Manovaidya\nAdults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Adult Anxiety Support, Overthinking Support and Emotional Wellbeing guidance through online and in-clinic consultations.\n\n\nSTEP 10: ABOUT DR. ANKUSH GARG\nBased in Delhi NCR, Dr. Ankush Garg supports adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.\n\n\nSTEP 11: IMAGE SEO\nHero Image\nFilename\nadult-anxiety-support-india.webp\n\nALT\nAdult Anxiety Support in India at Manovaidya\n\n\nAnxiety Symptoms Image\nFilename\nanxiety-symptoms-adults.webp\n\nALT\nCommon anxiety symptoms in adults\n\n\nNeuro-Ayurveda Image\nFilename\nneuro-ayurveda-anxiety-support.webp\n\nALT\nNeuro Ayurveda approach for adult anxiety support\n\n\nConsultation CTA Image\nFilename\nadult-emotional-wellbeing-support.webp\n\nALT\nAdult emotional wellbeing and anxiety support\n\n\nSTEP 12: INTERNAL LINKS\nAdult Mental Health Hub\nAnchor\nExplore Adult Mental Health Care.\n\nURL\n/adult-mental-health-care/\n\n\nDepression\nAnchor\nLearn about Adult Depression Support.\n\nURL\n/adult-depression-support/\n\n\nStress & Burnout\nAnchor\nExplore Stress & Burnout Support.\n\nURL\n/stress-burnout-support/\n\n\nSleep Disorders\nAnchor\nUnderstand Sleep & Mood Disorder Support.\n\nURL\n/sleep-disorders-support/\n\n\nOCD\nAnchor\nLearn about OCD Support.\n\nURL\n/ocd-support/\n\n\nBipolar\nAnchor\nExplore Bipolar Disorder Support.\n\nURL\n/bipolar-support/\n\n\nDr Ankush Garg\nAnchor\nKnow more about Dr. Ankush Garg.\n\nURL\n/dr-ankush-garg/\n\n\nSTEP 13: FAQ Schema\nDeveloper:\nImplement all 15 FAQs using JSON-LD FAQ Schema.\n\n\nSTEP 14: Breadcrumb\nHome\n\n>\n\nAdult Mental Health Care\n\n>\n\nAdult Anxiety Support\n\n\nSTEP 15: RELATED PAGES\nAdult Depression Support\n\nStress & Burnout Support\n\nSleep Disorders & Insomnia Support\n\nOCD Support\n\nBipolar Disorder Support\n\n\nSTEP 16: CTA\nHeading\nConcerned About Persistent Anxiety or Overthinking?\n\nText\nBook a structured assessment and personalized guidance session with the Manovaidya team to better understand your emotional wellbeing.\n\nButtons\nBook Consultation\n\nTake Mental Health Assessment\n\n\nSTEP 17: SCHEMA\nDeveloper ko ye 4 schemas implement karne hain:\n✅ MedicalWebPage Schema\n✅ FAQ Schema\n✅ BreadcrumbList Schema\n✅ Physician Schema (Dr. Ankush Garg)\n\nSTEP 18: E-E-A-T (Very Important)\nIs page mein niche ek small trust section add karna:\nWhy Trust Manovaidya?\nStructured Neuro-Ayurveda Development System\nPersonalized Assessment Before Recommendations\nOnline & In-Clinic Consultations Across India\nHolistic Mind-Body Approach\nGuidance by Dr. Ankush Garg";

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
  name: "Adult Anxiety Support in India",
  description: "Looking for Adult Anxiety Support in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya.",
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
  { text: "Explore Adult Mental Health Care.", href: "/adult-mental-health-care/" },
  { text: "Learn about Adult Depression Support.", href: "/adult-depression-support/" },
  { text: "Explore Stress & Burnout Support.", href: "/stress-burnout-support/" },
  { text: "Understand Sleep & Mood Disorder Support.", href: "/sleep-disorders-support/" },
  { text: "Learn about OCD Support.", href: "/ocd-support/" },
  { text: "Explore Bipolar Disorder Support.", href: "/bipolar-support/" },
  { text: "Know more about Dr. Ankush Garg.", href: "/dr-ankush-garg/" },
];

const trustItems = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Assessment Before Recommendations",
  "Online & In-Clinic Consultations Across India",
  "Holistic Mind-Body Approach",
  "Guidance by Dr. Ankush Garg",
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
        <a href="/adult-depression-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><CloudRain className="h-4 w-4 text-[#7835A4]" /> Adult Depression Support</a>
        <a href="/stress-burnout-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Activity className="h-4 w-4 text-[#7835A4]" /> Stress & Burnout Support</a>
        <a href="/sleep-disorders-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><BedDouble className="h-4 w-4 text-[#7835A4]" /> Sleep Disorders & Insomnia Support</a>
        <a href="/ocd-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><ShieldCheck className="h-4 w-4 text-[#7835A4]" /> OCD Support</a>
        <a href="/bipolar-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Sparkles className="h-4 w-4 text-[#7835A4]" /> Bipolar Disorder Support</a>
      </div>
    </SidebarCard>
  );
}

function PlainLine({ line }) {
  if (line.startsWith("✔") || line.startsWith("?") || line.startsWith("??") || line.startsWith("📞")) {
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span>{line}</span>
      </p>
    );
  }
  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{line}</p>;
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
  return (
    <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
      <ul className={`space-y-2 ${columns ? "sm:columns-2" : ""}`}>
        {items.map((item) => (
          <li key={item} className="flex break-inside-avoid gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FocusGridCard({ title, items }) {
  const icons = [Brain, Sparkles, Activity, ShieldCheck, HeartHandshake, CalendarCheck];
  return (
    <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
      <h3 className="mb-3 text-[14px] font-bold text-[#3b2e45]">{title}</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const label = item.replace(/^[✔?📞]+\s*/, "");
          return (
            <li key={item} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <span>{label}</span>
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
            <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Consultation</a>
            <a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Take Mental Health Assessment</a>
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

  React.useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }

    document.title = "Adult Anxiety Support in India | Anxiety Symptoms, Overthinking & Emotional Wellbeing | Manovaidya";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Adult Anxiety Support in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya.";

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
    <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
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
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">Adult Anxiety Support in India</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">Helping Adults Better Understand Anxiety, Constant Worry, Panic & Emotional Wellbeing</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Consultation</a>
                <a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3"><img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" /><div><p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p><p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist</p></div></div>
                <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]"><span>Share:</span>{["f", "x", "in", "wa"].map((label) => (<a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">{label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}</a>))}</div>
              </div>
            </div>
            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex"><Brain className="mb-1 h-5 w-5" /> Neuro-Ayurveda Development System</div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]"><img src={heroImage} alt="Adult Anxiety Support in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" /></div>
            </figure>
          </div>

          {sections.map((section) => <ContentSection key={section.id} section={section} />)}

          <section id="trust" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Trust Manovaidya?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => <div key={item} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />{item}</div>)}
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
                  {openFaq === index && <div className="border-t border-[#eadff1] bg-[#fbf9fd] p-4"><p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </section>

          <div className="sr-only" aria-hidden="true">{seoNotes}</div>
        </article>

        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5">
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Search</h2><label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3"><input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" /><Search className="h-4 w-4 text-[#7835A4]" /></label></SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">On this page</h2><nav className="mt-5 space-y-3.5">{pageLinks.map(({ label, id }) => (<a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />{label}</a>))}</nav></SidebarCard>
          <SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Categories</h2><div className="mt-4 space-y-3">{categories.map(({ label, count, Icon }) => (<a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span><span>{count}</span></a>))}</div></SidebarCard>
          <RelatedAdultPagesCard />
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar"><CalendarCheck className="h-9 w-9 text-[#7835A4]" /><h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2><p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get personalized anxiety and emotional wellbeing guidance from our experts.</p><a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a><p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823894080</p></SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-[#fbf9fd]"><div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8"><div className="flex items-center gap-4"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm"><Mail className="h-8 w-8" /></span><div><h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2><p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, adult mental wellness tips and Manovaidya updates.</p></div></div><form className="flex gap-3"><input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" /><button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button></form></div></section>
    </main>
  );
}

export default AdultAnxietySupportIndiaPage;

