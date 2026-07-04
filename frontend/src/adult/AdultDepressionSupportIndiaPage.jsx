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
  { label: "Understanding Depression", id: "understanding-depression-in-adults" },
  { label: "Signs & Symptoms", id: "common-signs-and-symptoms-of-depression" },
  { label: "Why Depression Develops", id: "why-depression-develops" },
  { label: "How It Affects Life", id: "how-depression-can-affect-daily-life" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "Emotional Wellbeing", id: "how-adults-can-support-their-emotional-wellbeing" },
  { label: "How We Support", id: "how-manovaidya-supports-adults" },
  { label: "Why Adults Choose", id: "why-adults-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-a-consultation" },
];

const categories = [
  { label: "Adult Depression", count: 12, Icon: CloudRain },
  { label: "Adult Anxiety", count: 13, Icon: Brain },
  { label: "Stress & Burnout", count: 11, Icon: Activity },
  { label: "Sleep Problems", count: 8, Icon: BedDouble },
  { label: "OCD", count: 7, Icon: ShieldCheck },
  { label: "Emotional Wellbeing", count: 10, Icon: HeartHandshake },
];

const sections = [
  {
    "title": "Introduction",
    "id": "introduction",
    "lines": [
      "Everyone experiences sadness, disappointment or emotional ups and downs at different stages of life. These feelings are a natural response to difficult situations and usually improve with time. However, when sadness, loss of interest or emotional exhaustion continues for weeks and begins affecting daily life, relationships, work or overall wellbeing, it may indicate something more than temporary low mood.",
      "Many adults experiencing depression describe feeling emotionally drained, disconnected or unable to enjoy activities they once found meaningful. Some struggle with low motivation, disturbed sleep, fatigue or difficulty concentrating, while others may appear physically healthy but silently carry emotional distress every day.",
      "At Manovaidya, we understand that depression is not simply about feeling sad. Emotional wellbeing is influenced by multiple interconnected factors, including lifestyle, sleep, emotional health, daily routines and overall mind-body balance.",
      "Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand depression, emotional wellbeing and the factors influencing long-term mental health.",
      "At Manovaidya, Adult Depression Support Focuses On:",
      "✔ Persistent Low Mood",
      "✔ Loss of Interest in Daily Activities",
      "✔ Emotional Exhaustion",
      "✔ Low Motivation",
      "✔ Feelings of Hopelessness",
      "✔ Emotional Wellbeing & Mind-Body Balance"
    ]
  },
  {
    "title": "Understanding Depression in Adults",
    "id": "understanding-depression-in-adults",
    "lines": [
      "Depression is more than simply feeling sad after a difficult day or stressful event.",
      "While sadness is a normal human emotion that usually improves with time, depression may involve persistent emotional, physical and behavioural changes that continue for weeks or longer and begin affecting everyday life.",
      "Many adults searching for Depression Support in India, Depression Symptoms, or Help for Persistent Low Mood are looking for answers because they have noticed ongoing emotional changes that are affecting their work, family life or relationships.",
      "Depression may influence the way a person:",
      "Thinks",
      "Feels",
      "Sleeps",
      "Works",
      "Communicates",
      "Makes decisions",
      "Enjoys everyday life",
      "Some individuals experience continuous sadness, while others mainly notice loss of motivation, emotional numbness, irritability or persistent fatigue.",
      "Because depression affects each person differently, understanding individual experiences is an important first step toward appropriate support."
    ]
  },
  {
    "title": "Common Signs & Symptoms of Depression",
    "id": "common-signs-and-symptoms-of-depression",
    "lines": [
      "Depression can affect emotions, thoughts, behaviour and physical wellbeing.",
      "The severity and combination of symptoms may vary from person to person.",
      "Emotional Symptoms",
      "Persistent sadness",
      "Feeling empty",
      "Hopelessness",
      "Irritability",
      "Loss of enjoyment",
      "Feeling emotionally disconnected",
      "Frequent crying",
      "Low self-worth",
      "Physical Symptoms",
      "Constant fatigue",
      "Low energy",
      "Sleep disturbances",
      "Changes in appetite",
      "Body aches without a clear cause",
      "Reduced physical activity",
      "Feeling physically exhausted",
      "Cognitive Symptoms",
      "Difficulty concentrating",
      "Negative thinking",
      "Poor memory",
      "Trouble making decisions",
      "Feeling mentally slow",
      "Constant self-criticism",
      "Behavioural Symptoms",
      "Social withdrawal",
      "Reduced motivation",
      "Avoiding responsibilities",
      "Loss of interest in hobbies",
      "Declining work performance",
      "Spending excessive time alone",
      "Experiencing some of these symptoms occasionally does not necessarily mean someone has depression. However, if these symptoms persist for several weeks and begin affecting daily life, relationships or work, seeking professional guidance may be beneficial."
    ]
  },
  {
    "title": "Why Depression Develops",
    "id": "why-depression-develops",
    "lines": [
      "Depression rarely develops because of one single reason.",
      "In many situations, it results from a combination of emotional, lifestyle, environmental and biological factors.",
      "Understanding these influences often helps individuals gain a broader perspective on their emotional wellbeing.",
      "Chronic Stress",
      "Long-term emotional pressure from work, family responsibilities or personal challenges may gradually affect emotional wellbeing.",
      "Anxiety & Persistent Worry",
      "Ongoing anxiety or excessive worrying may contribute to emotional exhaustion over time.",
      "Relationship Challenges",
      "Conflict within relationships, separation, loneliness or loss of emotional support may influence mood and emotional health.",
      "Financial & Career Pressure",
      "Job insecurity, financial difficulties or professional challenges may increase emotional stress and reduce overall wellbeing.",
      "Lifestyle Habits",
      "Irregular sleep, poor daily routines, limited physical activity and ongoing lifestyle imbalance may influence emotional wellbeing.",
      "Major Life Changes",
      "Events such as loss of a loved one, relocation, serious illness, divorce or significant personal changes may increase emotional vulnerability.",
      "Biological & Individual Factors",
      "Every individual responds differently to life's challenges.",
      "Personal experiences, emotional resilience and biological factors may all influence how depression develops and how it affects daily life.",
      "Many adults believe depression simply reflects weakness or a lack of willpower. In reality, depression is a complex condition influenced by multiple factors, and understanding these influences is often the first step toward meaningful support."
    ]
  },
  {
    "title": "Why Early Understanding Matters",
    "id": "why-early-understanding-matters",
    "lines": [
      "Depression often develops gradually rather than suddenly.",
      "Recognizing changes in mood, motivation, sleep, emotional wellbeing and daily functioning at an early stage may help individuals seek appropriate guidance before these challenges begin affecting multiple areas of life.",
      "Understanding depression is not about labeling yourself—it is about recognizing when emotional wellbeing deserves attention, care and a structured approach toward improvement."
    ]
  },
  {
    "title": "How Depression Can Affect Daily Life",
    "id": "how-depression-can-affect-daily-life",
    "lines": [
      "Depression can influence much more than mood. It may affect emotional wellbeing, relationships, work performance, physical health and overall quality of life.",
      "Many people continue managing their daily responsibilities while silently struggling with emotional exhaustion, low motivation or persistent sadness. Because these changes often develop gradually, they may go unnoticed until they begin affecting multiple areas of life.",
      "Understanding how depression influences daily functioning is an important step towards recognizing when additional support may be beneficial.",
      "Emotional Wellbeing",
      "Depression may affect the way a person experiences emotions.",
      "Many adults describe feeling:",
      "Persistently sad",
      "Emotionally numb",
      "Hopeless",
      "Irritable",
      "Empty",
      "Disconnected from others",
      "Some people no longer enjoy activities they once loved, while others find it difficult to experience positive emotions.",
      "Work & Professional Life",
      "Depression can influence workplace performance by reducing motivation, concentration and productivity.",
      "Some adults may experience:",
      "Difficulty focusing",
      "Reduced efficiency",
      "Poor decision-making",
      "Low motivation",
      "Increased absenteeism",
      "Difficulty handling responsibilities",
      "These challenges can gradually affect career growth, confidence and overall job satisfaction.",
      "Relationships",
      "Depression often affects communication and emotional connection with family members, friends and partners.",
      "Individuals may:",
      "Withdraw from conversations",
      "Avoid social gatherings",
      "Feel misunderstood",
      "Lose interest in maintaining relationships",
      "Find it difficult to express emotions",
      "Supportive relationships can play an important role in emotional wellbeing during difficult periods.",
      "Physical Wellbeing",
      "Depression is not only emotional—it may also affect the body.",
      "Some people experience:",
      "Constant tiredness",
      "Reduced energy",
      "Sleep disturbances",
      "Appetite changes",
      "Body aches",
      "Headaches",
      "Digestive discomfort",
      "These physical symptoms may continue even when no obvious medical cause is identified.",
      "Sleep & Daily Routine",
      "Sleep patterns are commonly affected.",
      "Some adults may experience:",
      "Difficulty falling asleep",
      "Waking up frequently",
      "Sleeping much longer than usual",
      "Feeling tired despite adequate sleep",
      "Poor sleep may further affect mood, concentration and energy levels.",
      "Confidence & Decision Making",
      "Depression may gradually reduce self-confidence.",
      "Individuals often report:",
      "Doubting themselves",
      "Feeling incapable",
      "Avoiding responsibilities",
      "Difficulty making decisions",
      "Feeling overwhelmed by simple tasks",
      "Recognizing these changes early often helps individuals seek appropriate support before they become more severe."
    ]
  },
  {
    "title": "The Neuro-Ayurveda Approach to Adult Depression Support",
    "id": "neuro-ayurveda-approach",
    "lines": [
      "At Manovaidya, depression is understood through a broader and more holistic perspective.",
      "Rather than focusing only on symptoms, we aim to understand the interconnected factors influencing emotional wellbeing, lifestyle, behaviour and overall health.",
      "The Neuro-Ayurveda Development System helps individuals better understand depression through five interconnected pillars.",
      "Brain Nourishment System",
      "Healthy emotional wellbeing depends on healthy brain function.",
      "The Brain Nourishment System focuses on understanding factors that may influence:",
      "Emotional regulation",
      "Motivation",
      "Mental clarity",
      "Memory",
      "Concentration",
      "Confidence",
      "Supporting brain nourishment may help individuals better understand emotional balance and daily functioning.",
      "Gut Response System",
      "The relationship between gut health and emotional wellbeing continues to receive increasing scientific attention.",
      "Many adults experiencing depression also report:",
      "Appetite changes",
      "Digestive discomfort",
      "Low energy",
      "Irregular eating habits",
      "Lifestyle imbalance",
      "The Gut Response System focuses on understanding how overall physical wellbeing may influence emotional health.",
      "Neural Network System",
      "Repeated thoughts and behaviours gradually create patterns.",
      "The Neural Network System focuses on understanding:",
      "Negative thinking patterns",
      "Emotional responses",
      "Behavioural habits",
      "Motivation cycles",
      "Coping strategies",
      "Understanding these patterns helps individuals recognise behaviours that may be contributing to ongoing emotional difficulties.",
      "Sensory Integration System",
      "Daily environments influence emotional wellbeing.",
      "Modern adults experience continuous stimulation from:",
      "Work pressure",
      "Social media",
      "Digital devices",
      "Noise",
      "Information overload",
      "For some individuals, this constant stimulation may contribute to emotional fatigue and overwhelm.",
      "Understanding environmental influences helps create healthier routines and improve emotional balance.",
      "Behaviour Guidance System",
      "Behaviour often reflects underlying emotional experiences.",
      "Adults experiencing depression may notice:",
      "Social withdrawal",
      "Reduced motivation",
      "Avoiding responsibilities",
      "Loss of interest",
      "Reduced activity",
      "Difficulty maintaining routines",
      "Rather than focusing only on behaviour, this pillar encourages understanding the emotional factors influencing these changes and supporting healthier behavioural patterns."
    ]
  },
  {
    "title": "How Adults Can Support Their Emotional Wellbeing",
    "id": "how-adults-can-support-their-emotional-wellbeing",
    "lines": [
      "Emotional wellbeing often improves through small, consistent lifestyle changes combined with appropriate professional guidance.",
      "Maintain Healthy Sleep Habits",
      "Consistent sleep supports emotional balance, concentration and overall wellbeing.",
      "Stay Physically Active",
      "Regular movement and physical activity support both physical and emotional health.",
      "Build Structured Daily Routines",
      "Simple daily routines provide stability and may help improve motivation and emotional balance.",
      "Stay Connected",
      "Meaningful conversations with supportive family members and friends can reduce feelings of isolation.",
      "Practice Self-Care",
      "Taking time for relaxation, hobbies and enjoyable activities supports emotional wellbeing and resilience.",
      "Seek Support Early",
      "Recognising emotional changes early and seeking appropriate guidance often leads to better long-term outcomes."
    ]
  },
  {
    "title": "How Manovaidya Supports Adults",
    "id": "how-manovaidya-supports-adults",
    "lines": [
      "At Manovaidya, support begins with understanding the individual rather than focusing only on symptoms.",
      "Our structured process includes:",
      "Step 1: Comprehensive Assessment",
      "Understanding emotional wellbeing, lifestyle habits, sleep patterns, stress levels, relationships and personal concerns.",
      "Step 2: Personalized Guidance",
      "Providing individualized recommendations based on emotional, behavioural and lifestyle needs.",
      "Step 3: Emotional Wellbeing Support",
      "Helping individuals better understand depression, emotional health and healthy coping strategies through a structured approach.",
      "Step 4: Neuro-Ayurveda Development System",
      "Applying the five-pillar framework to understand emotional wellbeing, behaviour, lifestyle and mind-body balance.",
      "Step 5: Progress Tracking & Follow-Up",
      "Creating a structured roadmap that helps individuals monitor progress and make informed decisions about their emotional wellbeing over time.",
      "When Should You Consider an Assessment?",
      "You may consider seeking professional guidance if you experience:",
      "Persistent sadness lasting several weeks",
      "Loss of interest in daily activities",
      "Ongoing emotional exhaustion",
      "Difficulty concentrating",
      "Sleep disturbances",
      "Significant changes in appetite",
      "Low motivation affecting work or relationships",
      "Feelings of hopelessness",
      "Emotional difficulties interfering with daily life",
      "A structured assessment can help you better understand the factors influencing your emotional wellbeing and provide a personalised roadmap towards long-term support and recovery.",
      "Our goal is to help individuals move from emotional exhaustion and persistent low mood towards greater emotional balance, confidence, resilience and overall wellbeing."
    ]
  },
  {
    "title": "Why Adults Across India Choose Manovaidya",
    "id": "why-adults-across-india-choose-manovaidya",
    "lines": [
      "Choosing the right support for depression and emotional wellbeing can feel overwhelming. Many individuals silently struggle with persistent low mood, emotional exhaustion or loss of motivation for months before seeking guidance.",
      "At Manovaidya, we believe that meaningful improvement begins with understanding the individual rather than focusing only on symptoms. Our approach helps people better understand the emotional, behavioural and lifestyle factors that may be influencing their wellbeing.",
      "✔ Comprehensive Depression Assessment",
      "Every individual experiences depression differently.",
      "Some people feel persistent sadness.",
      "Others experience emotional numbness, low motivation, sleep changes or physical exhaustion.",
      "Our structured assessment helps us understand emotional wellbeing, lifestyle habits, stress levels, sleep, relationships and daily routines before creating personalized guidance.",
      "✔ Neuro-Ayurveda Development System",
      "Manovaidya follows the Neuro-Ayurveda Development System, a structured framework that understands emotional wellbeing through five interconnected pillars.",
      "Brain Nourishment System",
      "Gut Response System",
      "Neural Network System",
      "Sensory Integration System",
      "Behaviour Guidance System",
      "This framework helps individuals better understand the multiple factors that may influence depression and long-term emotional wellbeing.",
      "✔ Personalized Guidance",
      "No two individuals experience depression in exactly the same way.",
      "Recommendations are personalized according to emotional wellbeing, lifestyle, daily routines, work responsibilities and individual concerns.",
      "✔ Holistic Mind-Body Perspective",
      "Our approach recognises the close relationship between emotional wellbeing, lifestyle, sleep, gut health, stress and overall physical health.",
      "Supporting both mind and body helps create a more comprehensive roadmap towards long-term wellbeing.",
      "✔ Long-Term Emotional Wellbeing",
      "Rather than focusing only on temporary symptom relief, our goal is to help individuals build healthier routines, emotional resilience, confidence and overall wellbeing.",
      "✔ Ongoing Support & Progress Tracking",
      "Recovery is a gradual journey.",
      "Regular follow-up and structured progress tracking help individuals understand improvements over time while making informed decisions throughout their emotional wellness journey."
    ]
  },
  {
    "title": "Why People Across India Connect With Manovaidya",
    "id": "why-people-across-india-connect-with-manovaidya",
    "lines": [
      "Individuals from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and different parts of India connect with Manovaidya for Adult Depression Support, Emotional Wellbeing Guidance and personalized consultations through both online and in-clinic appointments."
    ]
  },
  {
    "title": "About Dr. Ankush Garg",
    "id": "about-dr-ankush-garg",
    "lines": [
      "Autism, ADHD, Child Development & Mental Health Specialist in India",
      "Dr. Ankush Garg is the Founder of Manovaidya and the Developer of the Neuro-Ayurveda Development System.",
      "His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured, personalized and holistic approach.",
      "Many individuals experiencing persistent sadness, emotional exhaustion, low motivation or depression seek guidance to better understand the factors influencing their emotional wellbeing.",
      "Through structured assessment, personalized guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps individuals better understand emotional wellbeing while supporting long-term mental wellness through the Neuro-Ayurveda Development System.",
      "Based in Delhi NCR, Dr. Ankush Garg supports individuals and families from across India through structured assessment, personalized guidance and holistic mental health care."
    ]
  },
  {
    "title": "Book a Consultation",
    "id": "book-a-consultation",
    "lines": [
      "Concerned About Persistent Sadness, Low Mood or Emotional Exhaustion?",
      "If emotional wellbeing has been affecting your work, relationships, motivation or daily life, understanding the underlying factors is often the first step towards meaningful improvement.",
      "At Manovaidya, we help individuals better understand depression through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.",
      "Take the First Step Towards Better Emotional Wellbeing",
      "Whether you have been experiencing persistent sadness, emotional exhaustion, loss of motivation or difficulty enjoying everyday life, our team is here to help you understand your concerns and explore personalized support.",
      "Book Your Assessment Today",
      "📞 Book Consultation",
      "📞 Speak With Our Team",
      "📞 Get Personalized Guidance"
    ]
  }
];
const faqs = [
  {
    "question": "1. What are the first signs of depression?",
    "answer": "The first signs of depression may include persistent sadness, loss of interest in activities, low energy, changes in sleep or appetite, difficulty concentrating and feeling emotionally exhausted. Some people become more irritable or socially withdrawn instead of appearing sad. While everyone experiences occasional low mood, symptoms that continue for several weeks and begin affecting daily life may deserve professional evaluation and support."
  },
  {
    "question": "2. What causes depression?",
    "answer": "Depression usually develops because of multiple factors rather than one single cause. Ongoing stress, anxiety, difficult life experiences, relationship challenges, financial pressure, poor sleep, chronic health conditions and individual biological factors may all contribute. Since every person's situation is different, understanding the underlying influences is an important step towards choosing the most appropriate support."
  },
  {
    "question": "3. What are the symptoms of depression?",
    "answer": "Depression may affect emotions, thoughts, behaviour and physical wellbeing. Common symptoms include persistent sadness, loss of interest in enjoyable activities, low motivation, fatigue, sleep disturbances, appetite changes, poor concentration, feelings of hopelessness and social withdrawal. The symptoms and their severity vary from person to person, and not everyone experiences depression in the same way."
  },
  {
    "question": "4. Can depression affect physical health?",
    "answer": "Yes. Depression can affect both emotional and physical wellbeing. Some people experience constant fatigue, headaches, body aches, digestive discomfort, reduced energy, sleep disturbances or appetite changes. These physical symptoms can make daily activities more difficult and highlight the close connection between mental and physical health."
  },
  {
    "question": "5. How do doctors diagnose depression?",
    "answer": "Doctors diagnose depression by understanding a person's symptoms, medical history, emotional wellbeing and how these symptoms affect everyday life. They may ask about mood, sleep, energy levels, appetite, work, relationships and daily functioning. In some cases, additional medical evaluation may be recommended to rule out other health conditions that may cause similar symptoms."
  },
  {
    "question": "6. How can I check if I have depression?",
    "answer": "If you have been experiencing persistent sadness, loss of interest, low motivation or emotional exhaustion for several weeks, it may be helpful to seek a professional assessment. Mental health professionals often use structured questionnaires, detailed discussions and clinical evaluation to better understand your symptoms and determine the most appropriate guidance."
  },
  {
    "question": "7. What is the best treatment for depression?",
    "answer": "The most appropriate approach depends on the individual's symptoms, severity and personal circumstances. Many people benefit from psychological support, healthy lifestyle changes, counselling and medical care when appropriate. At Manovaidya, support begins with a structured assessment and the Neuro-Ayurveda Development System to better understand emotional wellbeing before providing personalized guidance."
  },
  {
    "question": "8. Can depression be managed without medication?",
    "answer": "Some individuals with mild or moderate depression may benefit from healthy lifestyle changes, counselling, regular physical activity, good sleep, stress management and emotional support. However, the most appropriate approach depends on the individual's condition. It is important to consult a qualified healthcare professional rather than deciding treatment independently."
  },
  {
    "question": "9. How long can depression last?",
    "answer": "The duration of depression varies from person to person. Some individuals experience symptoms for weeks, while others may struggle for months or longer without appropriate support. Early recognition and timely professional guidance often improve the chances of better long-term emotional wellbeing and recovery."
  },
  {
    "question": "10. Can depression affect sleep?",
    "answer": "Yes. Depression commonly affects sleep patterns. Some people find it difficult to fall asleep or stay asleep, while others may sleep much longer than usual but still feel tired. Poor sleep can further affect mood, concentration, energy levels and overall emotional wellbeing."
  },
  {
    "question": "11. Can depression affect relationships and work?",
    "answer": "Yes. Depression may influence communication, motivation, concentration and emotional connection with others. It can affect work performance, family relationships, friendships and daily responsibilities. Some individuals may withdraw socially or find it difficult to manage routine tasks. Recognising these changes early can help individuals seek appropriate support before they begin affecting multiple areas of life."
  },
  {
    "question": "12. Can lifestyle changes help depression?",
    "answer": "Healthy lifestyle habits may support emotional wellbeing and complement professional care. Regular sleep, balanced nutrition, physical activity, meaningful social connections, stress management and structured daily routines often contribute to better mental health. Lifestyle changes are usually most effective when combined with personalized professional guidance."
  },
  {
    "question": "13. Can people recover from depression?",
    "answer": "Many people recover from depression with appropriate support and ongoing care. Recovery looks different for everyone and may involve psychological support, lifestyle improvements, counselling, medical treatment when needed and healthy coping strategies. Seeking help early often leads to better outcomes and improved long-term emotional wellbeing."
  },
  {
    "question": "14. How does Manovaidya support adults with depression?",
    "answer": "At Manovaidya, support begins with understanding the individual rather than focusing only on symptoms. Through structured assessment, personalized guidance and the Neuro-Ayurveda Development System, we help individuals better understand emotional wellbeing, lifestyle influences and behavioural patterns. Our goal is to support long-term emotional balance, resilience and healthier daily functioning through a holistic and personalized approach."
  },
  {
    "question": "15. When should I seek professional guidance for depression?",
    "answer": "You should consider seeking professional guidance if sadness, loss of interest, emotional exhaustion or low motivation continues for several weeks or begins affecting your work, relationships, sleep or daily life. Early assessment helps identify contributing factors and allows timely support. At Manovaidya, we provide structured assessments and personalized guidance to help individuals better understand and improve their emotional wellbeing."
  }
];
const seoNotes = "STEP 1: URL\n\nAlternative\n/depression-treatment-india/\n\n\nSTEP 2: SEO TITLE\nFinal\nAdult Depression Support in India | Depression Symptoms, Low Mood & Emotional Wellbeing | Manovaidya\n\n\n\n\nSTEP 3: META DESCRIPTION\nLooking for Adult Depression Support in India? Learn about depression symptoms, persistent low mood, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.\n\nApprox. 155 characters.\n\nSTEP 4: H1\nAdult Depression Support in India\n\nOnly one H1.\n\nSTEP 5: H2 Structure\nUnderstanding Depression in Adults\n\nCommon Signs & Symptoms of Depression\n\nWhy Depression Develops\n\nHow Depression Can Affect Daily Life\n\nThe Neuro-Ayurveda Approach to Adult Depression Support\n\nHow Adults Can Support Their Emotional Wellbeing\n\nHow Manovaidya Supports Adults\n\nWhy Adults Across India Choose Manovaidya\n\nAbout Dr. Ankush Garg\n\nFrequently Asked Questions\n\nBook a Consultation\n\n\nSTEP 6: PRIMARY KEYWORDS\nNaturally use these throughout the page.\nAdult Depression Support\n\nAdult Depression Support in India\n\nDepression Support India\n\nDepression Symptoms\n\nPersistent Low Mood\n\nEmotional Wellbeing\n\nLoss of Interest\n\nLow Motivation\n\nEmotional Exhaustion\n\nDepression Help\n\n\nSTEP 7: SECONDARY KEYWORDS\nSigns of Depression\n\nPhysical Symptoms of Depression\n\nDepression and Sleep\n\nDepression and Relationships\n\nDepression and Work\n\nPersistent Sadness\n\nMental Wellbeing\n\nEmotional Health\n\nDepression Assessment\n\nAdult Mental Health\n\n\nSTEP 8: LONG-TAIL KEYWORDS\nNaturally place these phrases across headings and paragraphs.\nHow to deal with depression\n\nSigns of depression in adults\n\nWhy do I feel sad all the time\n\nPersistent low mood\n\nCan depression affect the body\n\nDepression and sleep problems\n\nHow depression affects work\n\nEmotional exhaustion symptoms\n\nProfessional support for depression\n\nHow to improve emotional wellbeing\n\n\nSTEP 9: LOCAL SEO\nUnder:\nWhy Adults Across India Connect With Manovaidya\nAdd:\nAdults from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India connect with Manovaidya for Adult Depression Support, Emotional Wellbeing Guidance and personalized consultations through online and in-clinic appointments.\n\n\nSTEP 10: ABOUT DR. ANKUSH GARG\nBased in Delhi NCR, Dr. Ankush Garg supports adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.\n\n\nSTEP 11: IMAGE SEO\nHero Image\nFilename\nadult-depression-support-india.webp\n\nALT\nAdult Depression Support in India at Manovaidya\n\n\nDepression Symptoms\nFilename\ndepression-symptoms-adults.webp\n\nALT\nCommon depression symptoms in adults\n\n\nNeuro-Ayurveda\nFilename\nneuro-ayurveda-depression-support.webp\n\nALT\nNeuro Ayurveda approach for adult depression support\n\n\nConsultation CTA\nFilename\nadult-depression-emotional-wellbeing.webp\n\nALT\nAdult depression and emotional wellbeing support\n\n\nSTEP 12: INTERNAL LINKS\nAdult Mental Health Hub\nAnchor\nExplore Adult Mental Health Care.\n\nURL\n/adult-mental-health-care/\n\n\nAnxiety\nAnchor\nLearn about Adult Anxiety Support.\n\nURL\n/anxiety-support-india/\n\n\nStress & Burnout\nAnchor\nExplore Stress & Burnout Support.\n\nURL\n/stress-burnout-support/\n\n\nSleep Disorders\nAnchor\nUnderstand Sleep & Mood Disorder Support.\n\nURL\n/sleep-disorders-support/\n\n\nOCD\nAnchor\nLearn about OCD Support.\n\nURL\n/ocd-support/\n\n\nBipolar Disorder\nAnchor\nExplore Bipolar Disorder Support.\n\nURL\n/bipolar-support/\n\n\nDr. Ankush Garg\nAnchor\nKnow more about Dr. Ankush Garg.\n\nURL\n/dr-ankush-garg/\n\n\nSTEP 13: FAQ SCHEMA\nDeveloper Instruction\nImplement all 15 FAQs using FAQPage JSON-LD Schema.\n\n\nSTEP 14: BREADCRUMB\nHome\n\n>\n\nAdult Mental Health Care\n\n>\n\nAdult Depression Support\n\n\nSTEP 15: RELATED PAGES\nAdult Anxiety Support\n\nStress & Burnout Support\n\nSleep Disorders & Insomnia Support\n\nOCD Support\n\nBipolar Disorder Support\n\n\nSTEP 16: CTA SECTION\nHeading\nConcerned About Persistent Sadness or Low Mood?\n\nText\nBook a structured assessment and personalized guidance session with the Manovaidya team to better understand your emotional wellbeing and receive a personalized roadmap.\n\nButtons\nBook Consultation\n\nTake Mental Health Assessment\n\n\nSTEP 17: SCHEMA (Developer)\nImplement these schemas:\n✅ MedicalWebPage Schema\n✅ FAQPage Schema\n✅ BreadcrumbList Schema\n✅ Physician Schema (Dr. Ankush Garg)\n\nSTEP 18:\nAdd a small section before the CTA.\nWhy Trust Manovaidya?\nStructured Neuro-Ayurveda Development System\nPersonalized Assessment Before Recommendations\nOnline & In-Clinic Consultations Across India\nHolistic Mind-Body Approach\nGuidance by Dr. Ankush Garg\nFocus on Long-Term Emotional Wellbeing";

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
    { "@type": "ListItem", position: 3, name: "Adult Depression Support", item: "/adult-depression-support/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Adult Depression Support in India",
  description: "Looking for Adult Depression Support in India? Learn about depression symptoms, persistent low mood, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.",
  url: "/adult-depression-support/",
  about: ["Adult Depression Support", "Depression Symptoms", "Persistent Low Mood", "Emotional Wellbeing"],
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
  "Chronic Stress",
  "Anxiety & Persistent Worry",
  "Relationship Challenges",
  "Financial & Career Pressure",
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
  "Build Structured Daily Routines",
  "Stay Connected",
  "Practice Self-Care",
  "Seek Support Early",
  "Step 1: Comprehensive Assessment",
  "Step 2: Personalized Guidance",
  "Step 3: Emotional Wellbeing Support",
  "Step 4: Neuro-Ayurveda Development System",
  "Step 5: Progress Tracking & Follow-Up",
  "When Should You Consider an Assessment?",
  "? Comprehensive Depression Assessment",
  "??? Comprehensive Depression Assessment",
  "? Neuro-Ayurveda Development System",
  "??? Neuro-Ayurveda Development System",
  "? Personalized Guidance",
  "??? Personalized Guidance",
  "? Holistic Mind-Body Perspective",
  "??? Holistic Mind-Body Perspective",
  "? Long-Term Emotional Wellbeing",
  "??? Long-Term Emotional Wellbeing",
  "? Ongoing Support & Progress Tracking",
  "??? Ongoing Support & Progress Tracking",
  "Autism, ADHD, Child Development & Mental Health Specialist in India",
  "Concerned About Persistent Sadness, Low Mood or Emotional Exhaustion?",
  "Take the First Step Towards Better Emotional Wellbeing",
  "Book Your Assessment Today",
]);

const iconByLine = {
  "Emotional Symptoms": HeartHandshake,
  "Physical Symptoms": Activity,
  "Cognitive Symptoms": Brain,
  "Behavioural Symptoms": ShieldCheck,
  "Chronic Stress": Activity,
  "Anxiety & Persistent Worry": Brain,
  "Relationship Challenges": Users,
  "Financial & Career Pressure": BookOpen,
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
  "Build Structured Daily Routines": CalendarCheck,
  "Stay Connected": Users,
  "Practice Self-Care": HeartHandshake,
  "Seek Support Early": CheckCircle2,
  "Step 1: Comprehensive Assessment": Search,
  "Step 2: Personalized Guidance": Sparkles,
  "Step 3: Emotional Wellbeing Support": HeartHandshake,
  "Step 4: Neuro-Ayurveda Development System": Brain,
  "Step 5: Progress Tracking & Follow-Up": CalendarCheck,
  "When Should You Consider an Assessment?": CheckCircle2,
};

const internalLinks = [
  { text: "Explore Adult Mental Health Care.", href: "/adult-mental-health-care/" },
  { text: "Learn about Adult Anxiety Support.", href: "/anxiety-support-india/" },
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
  "Focus on Long-Term Emotional Wellbeing",
];

function SidebarCard({ children, className = "", id }) {
  return <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>{children}</aside>;
}

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Adult Mental Wellness Pages</h2>
      <div className="mt-4 space-y-3">
        <a href="/anxiety-support-india/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Brain className="h-4 w-4 text-[#7835A4]" /> Adult Anxiety Support</a>
        <a href="/stress-burnout-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Activity className="h-4 w-4 text-[#7835A4]" /> Stress & Burnout Support</a>
        <a href="/sleep-disorders-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><BedDouble className="h-4 w-4 text-[#7835A4]" /> Sleep Disorders & Insomnia Support</a>
        <a href="/ocd-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><ShieldCheck className="h-4 w-4 text-[#7835A4]" /> OCD Support</a>
        <a href="/bipolar-support/" className="flex items-center gap-2 text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><Sparkles className="h-4 w-4 text-[#7835A4]" /> Bipolar Disorder Support</a>
      </div>
    </SidebarCard>
  );
}

function isCheckLine(line) {
  return line.startsWith("?") || line.startsWith("??") || line.startsWith("??") || line.startsWith("??");
}

function PlainLine({ line }) {
  if (isCheckLine(line)) {
    return <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" /><span>{line}</span></p>;
  }
  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{line}</p>;
}

function isShortListLine(line) {
  return line.length <= 72 && !subheadingLines.has(line) && !line.endsWith(".") && !line.endsWith("?") && !line.endsWith(":");
}

function BulletListCard({ items, columns = true }) {
  return (
    <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
      <ul className={`space-y-2 ${columns ? "sm:columns-2" : ""}`}>
        {items.map((item) => <li key={item} className="flex break-inside-avoid gap-2 text-[13px] font-bold leading-6 text-[#51465a]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7835A4]" />{item}</li>)}
      </ul>
    </div>
  );
}

function FocusGridCard({ title, items }) {
  const icons = [CloudRain, HeartHandshake, Activity, Sparkles, ShieldCheck, Brain];
  return (
    <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
      <h3 className="mb-3 text-[14px] font-bold text-[#3b2e45]">{title}</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const label = item.replace(/^[???????????]+s*/, "");
          return <li key={item} className="flex min-h-[122px] flex-col items-center justify-start gap-3 rounded-lg border border-[#eadff1] bg-white p-4 text-center text-[13px] font-bold leading-5 text-[#51465a] shadow-[0_8px_18px_rgba(58,31,90,0.04)]"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Icon className="h-7 w-7" strokeWidth={1.8} /></span><span>{label}</span></li>;
        })}
      </ul>
    </div>
  );
}

function SectionContent({ lines }) {
  const blocks = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.includes("Focuses On:")) {
      const items = [];
      let nextIndex = index + 1;
      while (nextIndex < lines.length && isCheckLine(lines[nextIndex])) {
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
        if (block.focusTitle) return <FocusGridCard key={`focus-${index}`} title={block.focusTitle} items={block.items} />;
        if (block.items) return <BulletListCard key={`items-${index}`} items={block.items} />;
        if (!block.title) return <PlainLine key={`line-${index}`} line={block.line} />;
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
          <div key={`block-${index}`} className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
            <div className="mb-3 flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Icon className="h-5 w-5" /></span><h3 className="text-[16px] font-black text-[#21142d]">{block.title}</h3></div>
            {childBlocks.map((childBlock, childIndex) => childBlock.items ? <BulletListCard key={`child-items-${childIndex}`} items={childBlock.items} /> : <PlainLine key={`child-line-${childIndex}`} line={childBlock.line} />)}
          </div>
        );
      })}
    </div>
  );
}

function SectionImage({ title }) {
  if (title === "Common Signs & Symptoms of Depression") return <img src={symptomsImage} alt="Common depression symptoms in adults" className="mt-6 max-h-[380px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />;
  if (title === "The Neuro-Ayurveda Approach to Adult Depression Support") return <div className="mt-5 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] shadow-[0_12px_30px_rgba(58,31,90,0.08)]"><img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for adult depression support" className="max-h-[300px] w-full max-w-[720px] object-contain object-center" /></div>;
  return null;
}

function ContentSection({ section }) {
  if (section.title === "Book a Consultation") {
    return <section id={section.id} className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white"><div className="p-6 sm:p-8"><h2 className="text-[22px] font-black leading-tight">Book a Consultation</h2><div className="mt-3 space-y-1">{section.lines.map((line) => <p key={line} className="text-[14px] font-semibold leading-7 text-[#e5d5f2]">{line}</p>)}</div><div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6"><a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Consultation</a><a href="tel:+917823894080" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Take Mental Health Assessment</a></div></div><img src={ctaImage} alt="Adult depression and emotional wellbeing support" className="h-40 w-full object-cover object-center sm:h-52" /></section>;
  }
  if (section.title === "About Dr. Ankush Garg") {
    const [specialty, ...doctorLines] = section.lines;
    return <section id={section.id} className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm"><div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start"><img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm" /><div><p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p><h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2><p className="mt-1 text-[13px] font-bold text-[#51465a]">{specialty}</p>{doctorLines.map((line) => <p key={line} className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">{line}</p>)}</div></div></section>;
  }
  return <section id={section.id} className="mt-9">{section.title !== "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">{section.title}</h2>}{section.title === "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">Helping Adults Better Understand Depression, Persistent Low Mood & Emotional Wellbeing</h2>}<SectionContent lines={section.lines} /><SectionImage title={section.title} /></section>;
}

function AdultDepressionSupportIndiaPage() {
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
    document.title = "Adult Depression Support in India | Depression Symptoms, Low Mood & Emotional Wellbeing | Manovaidya";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for Adult Depression Support in India? Learn about depression symptoms, persistent low mood, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.";
    const schemas = [faqSchema, breadcrumbSchema, medicalWebPageSchema, physicianSchema];
    const scriptId = "adult-depression-support-schema";
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
    return () => { window.removeEventListener("scroll", updateActiveSection); window.removeEventListener("resize", updateActiveSection); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#1f1726]" style={{ font: '400 1.125rem/1.5 "Martel", serif' }}>
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3"><div className="relative z-10"><nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb"><a href="/" className="transition hover:text-[#7835A4]">Home</a><span>&gt;</span><a href="/adult-mental-health-care/" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a><span>&gt;</span><span className="text-[#4b345d]">Adult Depression Support</span></nav><p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Adult Mental Health Support</p><h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">Adult Depression Support in India</h1><p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">Helping Adults Better Understand Depression, Persistent Low Mood & Emotional Wellbeing</p><div className="mt-6 flex flex-wrap items-center gap-3"><a href="#book-a-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Consultation</a><a href="tel:+917823894080" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a></div><div className="mt-6 flex flex-wrap items-center gap-5"><div className="flex items-center gap-3"><img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" /><div><p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p><p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist</p></div></div><div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]"><span>Share:</span>{["f", "x", "in", "wa"].map((label) => <a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">{label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}</a>)}</div></div></div><figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none"><div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#5d3b90] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(93,59,144,0.22)] lg:flex"><Brain className="mb-1 h-5 w-5" /> Neuro-Ayurveda Development System</div><div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]"><img src={heroImage} alt="Adult Depression Support in India at Manovaidya" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" /></div></figure></div>

          {sections.map((section) => <ContentSection key={section.id} section={section} />)}

          <section id="trust" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5"><h2 className="text-[20px] font-black text-[#17111f]">Why Trust Manovaidya?</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{trustItems.map((item) => <div key={item} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />{item}</div>)}</div></section>
          <section id="internal-links" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5"><h2 className="text-[18px] font-black text-[#17111f]">Helpful Adult Mental Health Links</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{internalLinks.map((link) => <a key={link.href} href={link.href} className="flex items-center gap-2 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline"><ArrowRight className="h-4 w-4" />{link.text}</a>)}</div></section>
          <section id="faqs" className="mt-9"><h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2><div className="mt-5 space-y-3">{faqs.map((faq, index) => <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={openFaq === index}><span className="text-[14px] font-black text-[#21142d]">{faq.question}</span><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbf9fd] transition-transform ${openFaq === index ? "rotate-180 bg-[#f0e7f6] text-[#7835A4]" : "text-[#9b8ea5]"}`}><ChevronDown className="h-4 w-4" /></span></button>{openFaq === index && <div className="border-t border-[#eadff1] bg-[#fbf9fd] p-4"><p className="text-[13.5px] font-semibold leading-6 text-[#51465a]">{faq.answer}</p></div>}</div>)}</div></section>
          <div className="sr-only" aria-hidden="true">{seoNotes}</div>
        </article>
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] space-y-5 overflow-y-auto pb-5"><SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Search</h2><label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3"><input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" /><Search className="h-4 w-4 text-[#7835A4]" /></label></SidebarCard><SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">On this page</h2><nav className="mt-5 space-y-3.5">{pageLinks.map(({ label, id }) => <a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"}`} />{label}</a>)}</nav></SidebarCard><SidebarCard><h2 className="text-[15px] font-black text-[#21142d]">Categories</h2><div className="mt-4 space-y-3">{categories.map(({ label, count, Icon }) => <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span><span>{count}</span></a>)}</div></SidebarCard><RelatedAdultPagesCard /><SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar"><CalendarCheck className="h-9 w-9 text-[#7835A4]" /><h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2><p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get personalized depression and emotional wellbeing guidance from our experts.</p><a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a><p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823894080</p></SidebarCard></div>
      </section>
      <section className="border-y border-[#eadff1] bg-[#fbf9fd]"><div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8"><div className="flex items-center gap-4"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm"><Mail className="h-8 w-8" /></span><div><h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2><p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, adult mental wellness tips and Manovaidya updates.</p></div></div><form className="flex gap-3"><input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" /><button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">Subscribe</button></form></div></section>
    </main>
  );
}

export default AdultDepressionSupportIndiaPage;

