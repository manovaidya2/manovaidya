import React, { useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import api from "../api/axiosInstance";

const greeting = {
  role: "assistant",
  text: "Namaste. Main Manovaidya ke services, symptoms, consultation, fees, online/clinic visit, results aur booking ke baare me help kar sakta hu. Aap apna question simple words me puch sakte hain.",
};

const quickQuestions = [
  "Book consultation",
  "Connect with agent",
  "Tell me about autism support",
  "How does Neuro-Ayurveda help?",
  "Can I book an online consultation?",
];

const consultationTimes = [
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
];

const reviewNote = "Consultation with Dr. Ankush Garg. Google rating 4.9/5 from positive patient reviews.";
const clinicPhone = "7823838638";
const consultationFee = "599";
const opdNote = "Consultation fee is Rs. 599. OPD is available in Noida only on Tuesday, Thursday and Saturday. Slots are limited, so please book your slot and complete payment to confirm it.";
const medicineNote = "Medicine cost fixed nahi hoti. Har child/person, disease/condition aur symptoms alag hote hain, isliye Manovaidya me customized medicine di jati hai. Medicine condition details aur har symptom profile ke according banti hai. Exact medicine cost assessment ke baad team confirm karti hai.";
const onlineConsultationNote = `Haan, online consultation available hai. Dr. Ankush Garg ke saath online consultation book ho sakti hai; consultation fee Rs. ${consultationFee} hai. Booking ke time name, phone, location, date aur preferred time share karna hota hai.`;

const serviceReferences = [
  ["Child Health Care", "/child-health-care"],
  ["Autism Spectrum Disorder", "/autism-treatment-india"],
  ["ADHD & Hyperactivity", "/child-health-care/adhd-child"],
  ["Speech Delay Treatment", "/speech-delay-support-india"],
  ["Learning Difficulties", "/learning-attention-difficulties-india"],
  ["Behavioural Challenges", "/behavioural-concerns-children-india"],
  ["Child Development Support", "/child-development-support-india"],
  ["Teen Mental Wellness", "/teen-mental-wellness"],
  ["Teen Stress & Anxiety", "/teen-stress-anxiety-support"],
  ["Teen Depression & Low Mood", "/teen-depression-support"],
  ["Exam & Academic Pressure", "/exam-performance-pressure"],
  ["Low Confidence & Self-Esteem", "/teen-confidence-emotional-wellbeing"],
  ["Screen Addiction & Digital Wellbeing", "/teen-screen-addiction-support"],
  ["Parent-Teen Relationship Support", "/parent-teen-relationship-support"],
  ["Adult Mental Health Care", "/adult-mental-wellness"],
  ["Stress & Anxiety", "/anxiety-support-india"],
  ["Depression", "/adult-depression-support"],
  ["Burnout & Exhaustion", "/stress-burnout-support-india"],
  ["Sleep Problems", "/sleep-disorders-insomnia-support-india"],
  ["Self-Esteem & Confidence", "/low-self-esteem-confidence-support-india"],
  ["Relationship Challenges", "/relationship-challenges-support-india"],
  ["Addiction & Habit Concerns", "/addiction-unhealthy-habits-support-india"],
  ["Senior Mind & Memory Care", "/senior-mind-memory-care"],
  ["Memory Loss & Forgetfulness", "/memory-loss-forgetfulness-support-seniors-india/"],
  ["Confusion & Disorientation", "/confusion-disorientation-support-seniors-india/"],
  ["Mild Cognitive Impairment (MCI)", "/mild-cognitive-impairment-mci-support-seniors-india/"],
  ["Dementia & Alzheimer", "/dementia-alzheimers-care-support-seniors-india/"],
  ["Senior Depression Treatment & Support", "/senior-depression-support-india/"],
  ["Senior Mood & Behaviour Changes", "/sleep-disorders-seniors-support-india/"],
  ["Women Mental Health Concerns", "/women-health-care"],
  ["Women Stress & Anxiety Support", "/women-stress-management-mind-body-balance-india/"],
  ["Women Depression & Low Mood Treatment", "/women-depression-low-mood-support-india/"],
  ["Hormonal Mood Changes, PMS & PMDD", "/women-hormonal-pms-pmdd-support-india/"],
  ["Self-Esteem & Body Image Support", "/women-self-esteem-body-image-support-india/"],
  ["Relationship & Emotional Challenges", "/women-relationship-emotional-wellbeing-support-india/"],
  ["Pregnancy, Postpartum & Motherhood", "/women-pregnancy-postpartum-motherhood-mental-health-india/"],
  ["Life Transitions & Career Pressure", "/women-life-transitions-career-pressure-support-india/"],
  ["Mind & Body Concerns", "/mind-body-wellbeing"],
  ["Stress & High Blood Pressure", "/stress-and-high-blood-pressure/"],
  ["Stress IBS Support", "/stress-ibs-support-india/"],
  ["Stress & Fatigue Treatment", "/stress-and-fatigue/"],
  ["Stress & Digestive Health", "/stress-and-digestive-health/"],
  ["Stress & Acidity Treatment", "/stress-and-acidity/"],
  ["Stress & Migraine Treatment", "/stress-and-migraine/"],
  ["Stress & Headaches Treatment", "/stress-and-headaches/"],
  ["Stress & Thyroid Treatment", "/stress-and-thyroid/"],
];

const serviceReferenceText = serviceReferences
  .map(([label, path]) => `${label}: ${path}`)
  .join("\n");

const websitePageKnowledge = [
  {
    "title": "AboutDoctorBioSection",
    "source": "about/AboutDoctorBioSection.jsx",
    "text": "Founder of Manovaidya & Creator of the Autism, ADHD, Child Development & Mental Health Specialist in India Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. He is an Ayurvedacharya and a Brain-Gut Axis Specialist, with ongoing PhD research focused on understanding how gut health influences brain development, behaviour, emotional wellbeing and neurodevelopmental conditions. Over the years, Dr. Ankush Garg has worked with children, adults and families seeking support for developmental, behavioural and mental wellness concerns through a structured Neuro-Ayurveda approach focused on long-term guidance and individualised care. Many parents come after a long and confusing journey, looking for clarity around their child's development, behaviour, learning or emotions. Our approach focuses on understanding the deeper factors and creating a structured roadmap for long-term growth and well-being. Today, families trust us for our holistic, family-centred and science-backed approach that goes beyond symptom management and focuses on overall wellness, long-term growth and better quality of life."
  },
  {
    "title": "AboutDoctorFocusSection",
    "source": "about/AboutDoctorFocusSection.jsx",
    "text": "If you are looking for support for Autism, ADHD, Child Development Concerns, Mental Health or Behavioural Challenges, we are here to help with a personalised roadmap and long-term care. Take the first step towards clarity and better outcomes. Book your consultation with Dr. Ankush Garg today. Anxiety & Stress - Emotional Wellbeing Structured & Root-Cause Based Approach Long-Term Results & Progress Tracking Support Across All Ages & Life Stages Focus on Overall Well-being, not just Mental Wellness"
  },
  {
    "title": "AboutDoctorSection",
    "source": "about/AboutDoctorSection.jsx",
    "text": "Neuro-Ayurveda & Mental Health Care Autism, ADHD, Child Development & Mental Health Specialist in India Dr. Ankush Garg is an Ayurvedacharya with 7+ years of experience in Autism, ADHD, Child Development and Mental Health care. Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His mission is simple - to understand the root causes, not just manage the symptoms, and to help individuals and families move from confusion to clarity, confidence and long-term wellness through personalised care and guidance. Families across India trust Manovaidya for thoughtful assessment, personalised roadmap and long-term support for better outcomes."
  },
  {
    "title": "NeuroAyurvedaSystemSection",
    "source": "about/NeuroAyurvedaSystemSection.jsx",
    "text": "The Neuro-Ayurveda Development System At Manovaidya, we use a 5-pillar integrated Neuro-Ayurveda Development System. It combines the wisdom of Ayurveda with modern science to understand the root causes behind developmental and mental health concerns. This system helps us look at brain health, digestion, behaviour, emotions, sensory processing and lifestyle together - so every individual receives care that is personalised, practical and focused on long-term improvement and real-life outcomes. The 5 pillars focus on the areas of : Together, these pillars help us create personalised care plans that support communication, behaviour, learning, emotions and overall well-being - so individuals and families can see meaningful progress with long-term support."
  },
  {
    "title": "AboutManovaidyaFounderSection",
    "source": "aboutmanovaidya/AboutManovaidyaFounderSection.jsx",
    "text": "Ayurvedacharya, Autism, ADHD, Child Development During years of working with children, families and individuals facing developmental and mental health challenges, Dr Ankush Garg observed that many people were receiving multiple opinions and therapies yet still lacked clarity about what was truly influencing progress. This observation led to the development of the Neuro-Ayurveda Development System and the foundation of Manovaidya. Every individual deserves a personalised roadmap, Autism, ADHD & Child Development Specialist Developer of the Neuro-Ayurveda Development System"
  },
  {
    "title": "AboutManovaidyaHeroSection",
    "source": "aboutmanovaidya/AboutManovaidyaHeroSection.jsx",
    "text": "Manovaidya is a specialized Neuro-Ayurveda and Mental Health Clinic in India dedicated to supporting children, teenagers, adults, women and families facing developmental, behavioural, emotional and cognitive health concerns. We believe every individual is more than a diagnosis, a symptom or a label. Our mission is to help individuals and families move from confusion to clarity, from uncertainty to understanding, and from symptoms to meaningful progress."
  },
  {
    "title": "AboutManovaidyaMissionVisionSection",
    "source": "aboutmanovaidya/AboutManovaidyaMissionVisionSection.jsx",
    "text": "To help individuals and families understand development, behaviour, emotional wellbeing and mental health more clearly and move towards meaningful and long-term progress. A future where people are not defined by diagnoses, families have clarity, and development is supported with compassion, knowledge and purpose."
  },
  {
    "title": "AboutManovaidyaSupportSection",
    "source": "aboutmanovaidya/AboutManovaidyaSupportSection.jsx",
    "text": "Support for developmental milestones, learning, behaviour, communication and more. Guidance for emotional wellbeing, confidence, focus, motivation and behavioural challenges. Support for stress, anxiety, overthinking, burnout and lifestyle-related mental health concerns. Support for emotional wellbeing, stress management, mood changes and life transitions. Guidance for emotional wellbeing, cognitive health, memory concerns and quality of life."
  },
  {
    "title": "AboutManovaidyaSystemWorkSection",
    "source": "aboutmanovaidya/AboutManovaidyaSystemWorkSection.jsx",
    "text": "A comprehensive framework that looks beyond symptoms and focuses on the root factors influencing development, behaviour and wellbeing. Understanding strengths, challenges and influencing factors. Identifying the areas that may be affecting development, behaviour, learning or wellbeing. Creating a structured plan based on individual needs and goals. Providing ongoing recommendations, education and direction. Monitoring progress and adjusting strategies when needed."
  },
  {
    "title": "AboutManovaidyaWhyChooseSection",
    "source": "aboutmanovaidya/AboutManovaidyaWhyChooseSection.jsx",
    "text": "Guidance for communication challenges, attention difficulties, behaviour concerns and developmental needs. Support for milestones, learning difficulties, speech concerns, sensory processing and overall development. Support for stress, anxiety, overthinking, emotional challenges, confidence and motivation. Understanding the deep connection between brain, gut, emotions, behaviour, sleep, lifestyle and wellbeing. Individualised approach with clear guidance and long-term support focused on meaningful and measurable progress."
  },
  {
    "title": "AdultAddictionUnhealthyHabitsSupportIndiaPage",
    "source": "adult/AdultAddictionUnhealthyHabitsSupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Addiction & Unhealthy Habits Treatment Addiction & Unhealthy Habits Treatment in India Helping Adults Understand Addiction, Break Unhealthy Habits & Improve Emotional Wellbeing Many people develop habits as part of their daily routine. Some habits, such as exercising regularly or maintaining a healthy sleep schedule, can improve overall wellbeing. Others, however, may gradually become unhealthy and begin affecting physical health, emotional wellbeing, relationships and daily life. An unhealthy habit may start as an occasional behaviour, but over time it can become increasingly difficult to control. Some individuals notice that they repeatedly engage in certain behaviours even when they know those behaviours are negatively affecting their health, work, finances or relationships. This pattern may indicate the development of dependence or addiction. Addiction is not always related to alcohol or tobacco. Many adults today struggle with behavioural addictions such as excessive mobile phone use, social media overuse, gaming, internet use, online gambling or compulsive pornography consumption. Others may experience dependence on smoking, alcohol or other substances. Many people silently struggle with addiction because they feel embarrassed, guilty or afraid of being judged. Some repeatedly try to stop on their own but find themselves returning to the same behaviour, leaving them frustrated and emotionally exhausted. At Manovaidya, we understand that addiction is often more complex than a lack of willpower. Emotional wellbeing, stress, lifestyle, behavioural patterns and environmental influences may all play an important role in the development and maintenance of unhealthy habits. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help adults better understand addiction, unhealthy habits and the multiple factors influencing long-term emotional wellbeing."
  },
  {
    "title": "AdultAnxietySupportIndiaPage",
    "source": "adult/AdultAnxietySupportIndiaPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer }, })), }; const breadcrumbSchema = { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"/\" }, { \"@type\": \"ListItem\", position: 2, name: \"Adult Mental Health Care\", item: \"/adult-mental-health-care/\" }, { \"@type\": \"ListItem\", position: 3, name: \"Adult Anxiety Support\", item: \"/anxiety-support-india/\" }, ], }; const medicalWebPageSchema = { \"@context\": \"https://schema.org\", \"@type\": \"MedicalWebPage\", name: \"Adult Anxiety Treatment in India\", description: \"Looking for Adult Anxiety Treatment in India? Learn about anxiety symptoms, excessive worry, overthinking, panic episodes and emotional wellbeing through the Neuro-Ayurveda approach at Manovaidya.\", url: \"/anxiety-support-india/\", about: [\"Adult Anxiety Support\", \"Anxiety Symptoms\", \"Overthinking\", \"Panic Episodes\", \"Emotional Wellbeing\"], }; const physicianSchema = { \"@context\": \"https://schema.org\", \"@type\": \"Physician\", name: \"Dr. Ankush Garg\", medicalSpecialty: [\"Mental Health\", \"Adult Mental Health\", \"Emotional Wellbeing\"], worksFor: { \"@type\": \"MedicalOrganization\", name: \"Manovaidya\" }, areaServed: [\"Delhi\", \"Noida\", \"Gurgaon\", \"Faridabad\", \"Ghaziabad\", \"India\"], }; const subheadingLines = new Set([ \"Emotional Symptoms\", \"Physical Symptoms\", \"Cognitive Symptoms\", \"Behavioural Symptoms\", \"Work Pressure\", \"Financial Concerns\", \"Relationship Challenges\", \"Health Concerns\", \"Lifestyle Habits\", \"Major Life Changes\", \"Biological & Individual Factors\", \"Emotional Wellbeing\", \"Work & Professional Life\", \"Relationships\", \"Physical Wellbeing\", \"Sleep & Daily Routine\", \"Confidence & Decision Making\", \"Brain Nourishment System\", \"Gut Response System\", \"Neural Network System\", \"Sensory Integration System\", \"Behaviour Guidance System\", \"Maintain Healthy Sleep Habits\", \"Stay Physically Active\", \"Build Healthy Daily Routines\", \"Manage Everyday Stress\", \"Stay Connected\", \"Practice Healthy Self-Care\", \"Step 1: Comprehensive Assessment\", \"Step 2: Personalized Guidance\", \"Step 3: Emotional Wellbeing Support\", \"Step 4: N"
  },
  {
    "title": "AdultCommonSignsSection",
    "source": "adult/AdultCommonSignsSection.jsx",
    "text": "Loss of interest in things you enjoyed Difficulty focusing & concentrating Withdrawal from people & activities Physical symptoms with no clear cause Relying on alcohol, smoking or escapism"
  },
  {
    "title": "AdultConditionsSection",
    "source": "adult/AdultConditionsSection.jsx",
    "text": "Comprehensive support for a wide range of mental health concerns in adults. Overthinking, worry, panic attacks, work stress and constant fatigue. Low mood, sadness, loss of interest, lack of motivation and emptiness. Emotional, physical and mental exhaustion due to work or life pressure. Insomnia, difficulty falling or staying asleep, restless sleep. Low self-worth, self-doubt, negative self-image and insecurity. Communication issues, conflicts, breakups and emotional disconnect. Struggling with substance use or repetitive unhealthy habits."
  },
  {
    "title": "AdultDepressionSupportIndiaPage",
    "source": "adult/AdultDepressionSupportIndiaPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer }, })), }; const breadcrumbSchema = { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"/\" }, { \"@type\": \"ListItem\", position: 2, name: \"Adult Mental Health Care\", item: \"/adult-mental-health-care/\" }, { \"@type\": \"ListItem\", position: 3, name: \"Adult Depression Treatment\", item: \"/adult-depression-support/\" }, ], }; const medicalWebPageSchema = { \"@context\": \"https://schema.org\", \"@type\": \"MedicalWebPage\", name: \"Adult Depression Treatment in India\", description: \"Looking for Adult Depression Treatment in India? Learn about depression symptoms, persistent low mood, emotional wellbeing and the Neuro-Ayurveda approach at Manovaidya.\", url: \"/adult-depression-support/\", about: [\"Adult Depression Treatment\", \"Depression Symptoms\", \"Persistent Low Mood\", \"Emotional Wellbeing\"], }; const physicianSchema = { \"@context\": \"https://schema.org\", \"@type\": \"Physician\", name: \"Dr. Ankush Garg\", medicalSpecialty: [\"Mental Health\", \"Adult Mental Health\", \"Emotional Wellbeing\"], worksFor: { \"@type\": \"MedicalOrganization\", name: \"Manovaidya\" }, areaServed: [\"Delhi\", \"Noida\", \"Gurgaon\", \"Faridabad\", \"Ghaziabad\", \"India\"], }; const subheadingLines = new Set([ \"Emotional Symptoms\", \"Physical Symptoms\", \"Cognitive Symptoms\", \"Behavioural Symptoms\", \"Chronic Stress\", \"Anxiety & Persistent Worry\", \"Relationship Challenges\", \"Financial & Career Pressure\", \"Lifestyle Habits\", \"Major Life Changes\", \"Biological & Individual Factors\", \"Emotional Wellbeing\", \"Work & Professional Life\", \"Relationships\", \"Physical Wellbeing\", \"Sleep & Daily Routine\", \"Confidence & Decision Making\", \"Brain Nourishment System\", \"Gut Response System\", \"Neural Network System\", \"Sensory Integration System\", \"Behaviour Guidance System\", \"Maintain Healthy Sleep Habits\", \"Stay Physically Active\", \"Build Structured Daily Routines\", \"Stay Connected\", \"Practice Self-Care\", \"Seek Support Early\", \"Step 1: Comprehensive Assessment\", \"Step 2: Personalized Guidance\", \"Step 3: Emotional Wellbeing Support\", \"Step 4: Neuro"
  },
  {
    "title": "AdultMentalHealthCareIndiaPage",
    "source": "adult/AdultMentalHealthCareIndiaPage.jsx",
    "text": "Adult Mental Health Care & Emotional Wellbeing Support in India Supporting Emotional Health, Mental Resilience and Overall Wellbeing Through Every Stage of Adult Life Adult life brings opportunities, responsibilities and challenges that shape emotional wellbeing over time. Managing careers, relationships, marriage, parenting, finances, health concerns and personal expectations can sometimes become emotionally overwhelming. While occasional stress and emotional ups and downs are a normal part of life, persistent mental health concerns deserve attention and appropriate support. Mental health is much more than the absence of mental illness. It influences how adults think, feel, make decisions, build relationships, cope with stress, perform at work and maintain overall quality of life. Healthy emotional wellbeing helps individuals adapt to life's challenges, recover from setbacks and continue growing personally and professionally. Many adults silently struggle with concerns such as chronic stress, anxiety, depression, burnout, sleep problems, overthinking, panic attacks, emotional exhaustion or relationship difficulties. Because these concerns often develop gradually, they may be ignored until they begin affecting work performance, family life, physical health or daily functioning. At Manovaidya, we believe that adult mental health is influenced by multiple interconnected factors including brain health, sleep, nutrition, lifestyle habits, emotional resilience, relationships and physical wellbeing. Rather than focusing only on symptoms, we aim to understand the complete emotional profile of every individual. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that combines comprehensive assessment, personalised guidance and holistic mental wellbeing support to help adults build healthier, more balanced lives. Adult Mental Health Areas We Support Every adult experiences life differently. Emotional concerns may arise because of work, family, health, relationships or personal circumstances. Our Adult Mental Health Care includes support for: 😟 Stress & Anxiety Und"
  },
  {
    "title": "AdultMentalWellnessHeroSection",
    "source": "adult/AdultMentalWellnessHeroSection.jsx",
    "text": "You Deserve to Feel Better, Think Clearer Expert care for stress, anxiety, depression, burnout and more. Compassionate. Confidential. Evidence-Informed."
  },
  {
    "title": "AdultRelationshipChallengesSupportIndiaPage",
    "source": "adult/AdultRelationshipChallengesSupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Relationship Challenges & Wellbeing Relationship Challenges & Emotional Wellbeing Support in India Helping Adults Build Healthier Relationships, Better Communication & Emotional Wellbeing Relationships are an important part of emotional wellbeing. Whether it is a relationship with a spouse, partner, family member or someone close to you, healthy relationships often provide emotional support, understanding and a sense of security. Every relationship experiences disagreements from time to time. Differences in opinions, misunderstandings and occasional conflicts are a natural part of human relationships. In most situations, these challenges can be resolved through healthy communication, mutual respect and understanding. However, when misunderstandings become frequent, communication breaks down or emotional distance continues to grow, relationship challenges may begin affecting both emotional wellbeing and daily life. Individuals may start feeling unheard, disconnected, anxious or emotionally exhausted, making it difficult to maintain healthy personal and professional relationships. Many adults silently struggle with relationship difficulties because they are unsure whether their experiences are \"normal\" or whether they should seek guidance. Some continue living with unresolved conflicts for years, while others find themselves repeatedly facing similar relationship patterns in different stages of life. At Manovaidya, we understand that relationship challenges are not simply about disagreements. They often involve emotional wellbeing, communication patterns, stress, self-esteem, trust and behavioural responses that influence how individuals connect with others. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help adults better understand relationship challenges, emotional wellbeing and the multiple factors that influence healthy relationships. At M"
  },
  {
    "title": "AdultSelfEsteemConfidenceSupportIndiaPage",
    "source": "adult/AdultSelfEsteemConfidenceSupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Low Self-Esteem & Confidence Support Low Self-Esteem & Confidence Support in India Helping Adults Build Healthy Self-Esteem, Confidence & Emotional Wellbeing Confidence influences the way we think, communicate, make decisions and respond to everyday challenges. Most people experience moments of self-doubt before an interview, presentation, examination or important life decision. These temporary feelings are a normal part of life and usually improve with experience. However, when self-doubt becomes constant and begins affecting work, relationships, communication or personal growth, it may be associated with low self-esteem or confidence difficulties. Individuals may begin questioning their abilities, avoiding new opportunities or believing they are \"not good enough\" despite having the skills to succeed. Many adults silently struggle with low self-esteem because the signs are often hidden behind perfectionism, overthinking, people-pleasing or fear of failure. Others compare themselves with friends, colleagues or social media, gradually losing confidence in their own abilities. At Manovaidya, we understand that confidence is not simply about positive thinking or speaking loudly. Healthy confidence develops through emotional wellbeing, self-awareness, balanced thinking and supportive daily habits. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand self-esteem, confidence and the factors influencing long-term emotional wellbeing. At Manovaidya, Self-Esteem & Confidence Support Focuses On: Understanding Low Self-Esteem & Confidence Self-esteem refers to the way we value and perceive ourselves. It influences how we think about our abilities, strengths and overall self-worth. Confidence, on the other hand, reflects how comfortable we feel performing specific tasks or facing new situations. A person may feel confident at"
  },
  {
    "title": "AdultSleepDisordersSupportIndiaPage",
    "source": "adult/AdultSleepDisordersSupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Sleep Disorders & Insomnia Treatment in India Helping Adults Better Understand Sleep Problems, Insomnia, Poor Sleep Quality & Healthy Sleep A good night's sleep is essential for both physical health and emotional wellbeing. Most adults occasionally experience difficulty sleeping because of stress, travel, illness or changes in routine. In many cases, these temporary sleep disturbances improve once the underlying situation changes. However, when difficulty sleeping continues for weeks or months, it may begin affecting energy levels, concentration, emotional wellbeing, work performance and overall quality of life. Some people struggle to fall asleep, while others wake up repeatedly during the night or wake much earlier than expected and cannot return to sleep. These ongoing sleep difficulties may be associated with insomnia or other sleep-related concerns. At Manovaidya, we understand that sleep problems are not simply about the number of hours you sleep. Healthy sleep is influenced by multiple interconnected factors, including lifestyle, emotional wellbeing, stress, daily routines and overall mind-body balance. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand sleep disorders, insomnia and the factors influencing long-term sleep health and emotional wellbeing. At Manovaidya, Sleep Treatment Focuses On: Understanding Sleep Disorders & Insomnia Sleep is one of the body's most important natural recovery processes. It allows the brain and body to rest, restore energy and prepare for the next day. Most people experience occasional sleepless nights from time to time. Temporary sleep problems caused by stress, travel or illness usually improve within a short period. However, when sleep difficulties become frequent or persistent, they may begin affecting emotional wellbeing, physical health and daily functioning. Many a"
  },
  {
    "title": "AdultSupportSection",
    "source": "adult/AdultSupportSection.jsx",
    "text": "A structured and personalized approach to help you heal, grow and thrive. Understanding your mental, emotional and lifestyle challenges in detail. A tailored treatment plan based on your unique needs and goals. Science-based therapies like CBT, ACT, mindfulness and more. Regular follow-ups to track improvement and adjust the plan. Focus on mind, body, emotions and lifestyle for lasting change."
  },
  {
    "title": "AdultTrustFaqSection",
    "source": "adult/AdultTrustFaqSection.jsx",
    "text": "{/* Why Adults Trust Manovaidya */} Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health Specialist in India and the Founder of Manovaidya. He is the creator of the Neuro-Ayurveda Development System, a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support emotional and mental wellness. Ready to Take the First Step Towards Book a confidential assessment and let our experts guide you towards a healthier, happier you. Trusted by 50,000+ Adults Across India Flexible Online or In-Person Options Flexible Online & In-Person Sessions Long-Term Wellness & Relapse Prevention What are the signs of stress or anxiety in adults? Common signs include constant worry, restlessness, irritability, sleep disruptions, muscle tension, fatigue, and difficulty concentrating or making daily decisions. How long does it take to see improvement? The duration depends on your personal goals and needs. Many adults begin to notice a positive change in their coping abilities and perspective within 4 to 6 sessions of regular support. Can medication be avoided with therapy? For many mild to moderate concerns, therapy and lifestyle changes are highly effective on their own. Our specialist will guide you if clinical conditions require medical consultation. When should I seek help for my mental health? Consider seeking support if your feelings interfere with daily life, work performance, or relationships for more than two weeks, or if you feel overwhelmed by stress, anxiety, or sadness. Is online counselling effective for adults? Yes, research shows online counselling is highly effective for anxiety, stress, and mood concerns. It offers the same clinical quality as in-person therapy with added convenience and privacy. Can work stress lead to depression? Yes, chronic and unmanaged workplace stress can lead to burnout, which significantly increases the risk of developing clinical depression or anxiety disorders. What is the difference between stress and anxiety? Stress is typically a reaction to a specific external trigger (like work pressure), whereas anxiety is a persistent feeling of apprehension or dread that persists ev"
  },
  {
    "title": "RelatedPagesCard",
    "source": "adult/RelatedPagesCard.jsx",
    "text": "normalizePath(href) !== currentPath); return ( Related Adult Mental Wellness Pages Constant worry, overthinking, panic and emotional wellbeing. Low mood, sadness, emotional exhaustion and motivation. Mental exhaustion, work pressure and emotional overload. Insomnia, restless sleep and difficulty sleeping well. Self-doubt, low self-worth and confidence building. Communication, conflicts, breakups and emotional disconnect. Addiction & Unhealthy Habits Treatment Substance use, repetitive habits and healthier routines."
  },
  {
    "title": "StressBurnoutSupportPage",
    "source": "adult/StressBurnoutSupportPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Burnout Treatment in India Helping Adults Better Understand Chronic Stress, Workplace Burnout, Emotional Exhaustion & Mental Wellbeing Feeling stressed from time to time is a normal part of life. Deadlines, family responsibilities, financial commitments and unexpected challenges can all create temporary stress. In many situations, this stress improves once the situation changes or the challenge is resolved. However, when stress continues for weeks or months without adequate recovery, it can gradually affect emotional wellbeing, physical health, relationships, work performance and overall quality of life. Some individuals begin feeling mentally exhausted, emotionally drained or constantly overwhelmed, even after taking rest. This prolonged state is often referred to as burnout. Many adults continue managing their daily responsibilities despite experiencing chronic stress or burnout. Because these changes usually develop gradually, they are often overlooked until they begin affecting multiple areas of life. At Manovaidya, we understand that stress and burnout are not simply about working too hard. Emotional wellbeing is influenced by multiple interconnected factors including lifestyle, sleep, emotional health, daily routines, work demands and overall mind-body balance. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help individuals better understand chronic stress, emotional burnout and the factors influencing long-term mental wellbeing. At Manovaidya, Stress & Burnout Treatment Focuses On: Take the first step toward understanding chronic stress, burnout and your emotional wellbeing through a structured assessment and personalized guidance process. Stress and burnout are often used interchangeably, but they are not the same. Stress is the body's natural response to challenges or demands. Short-term stress can sometimes improve focus, m"
  },
  {
    "title": "ApproachCareProcessSection",
    "source": "approach/ApproachCareProcessSection.jsx",
    "text": "We listen, observe and understand your concerns, history and goals. In-depth assessment to identify root causes and contributing factors. Create a personalised care plan with clear goals and recommended interventions. Begin the recommended interventions with family guidance and support. Regular monitoring and tracking to measure progress and changes. Plan evolves as the individual grows, ensuring long-term wellbeing and success."
  },
  {
    "title": "ApproachCtaSection",
    "source": "approach/ApproachCtaSection.jsx",
    "text": "Ready to Take the First Step Towards a Better Tomorrow? Book a consultation with our expert team and start your personalised journey today."
  },
  {
    "title": "ApproachExpectSection",
    "source": "approach/ApproachExpectSection.jsx",
    "text": "Clear insights into the real factors affecting development and wellbeing. Plans tailored to individual needs, strengths and goals. Trackable improvements in behaviour, learning, emotions and daily life. Sustainable outcomes that create a better quality of life for years to come."
  },
  {
    "title": "ApproachHeroSection",
    "source": "approach/ApproachHeroSection.jsx",
    "text": "A Holistic, Structured &amp; Personalised Path to Better Development &amp; Wellbeing At Manovaidya, we go beyond symptoms to understand the root causes. Our holistic and evidence-informed approach combines Ayurveda with modern science to support lasting change in development, behaviour, emotions and overall wellbeing. We help individuals and families move from confusion to clarity, and from challenges to confidence through personalised care and guidance. Families across India trust Manovaidya for thoughtful assessment, personalised roadmap and long-term support for better outcomes."
  },
  {
    "title": "ApproachPillarsSection",
    "source": "approach/ApproachPillarsSection.jsx",
    "text": "We look beyond symptoms to understand underlying factors. In-depth evaluation using Ayurveda insights and modern science. Individualised roadmap aligned with unique needs and goals. Integrated support for mind, body, behaviour and lifestyle for complete wellbeing. Ongoing tracking and guidance to ensure consistent progress and long-term results."
  },
  {
    "title": "BlogHeroSection",
    "source": "blog/BlogHeroSection.jsx",
    "text": "Evidence-informed articles on child development, mental health and Neuro-Ayurveda to help families make informed choices for better wellbeing."
  },
  {
    "title": "BlogListingSection",
    "source": "blog/BlogListingSection.jsx",
    "text": "{ try { const { data } = await api.get('/blogs'); if (data.success) { setBlogs(data.data); setPopularPosts(data.data.slice(0, 4)); } } catch (err) { setError(err.response?.data?.message || err.message); } finally { setLoading(false); } }; fetchBlogs(); }, []); return ( {post.shortDescription || post.excerpt} {new Date(post.createdAt || post.date).toLocaleDateString(\"en-US\", { month: 'short', day: 'numeric', year: 'numeric' })} {Math.ceil((post.content?.length || 1000) / 1000)} min read { const isActive = item === \"1\"; const isEllipsis = item === \"ellipsis\"; return ( ) : item === \"ellipsis\" ? ( \"...\" ) : ( item )} ))} {popularPosts.length === 0 && !loading && ( Our experts are here to help you understand your child's needs."
  },
  {
    "title": "NewsletterSection",
    "source": "blog/NewsletterSection.jsx",
    "text": "Subscribe to our newsletter and get expert articles, tips and updates delivered to your inbox. We respect your privacy. Unsubscribe anytime."
  },
  {
    "title": "ADHDChildArticlePage",
    "source": "childhealthcare/ADHDChildArticlePage.jsx",
    "text": "{ const text = line.trim(); if (!text) { return; } if (text.endsWith(\"?\")) { if (current) { items.push(current); } current = { question: text, answer: [] }; return; } if (current) { current.answer.push(line.trimEnd()); } }); if (current) { items.push(current); } return items; } const rawFaqs = buildRawFaqs(rawFaqLines); function VisualBlock({ heading }) { if (heading === \"About\") { const highlights = [ [\"ADHD & Autism\", Brain], [\"Child Development\", Baby], [\"Family Guidance\", Users], [\"Mental Wellness\", HeartHandshake], ]; return ( ADHD, Autism, Child Development & Mental Health Specialist in India Dr. Ankush Garg is the Founder of Manovaidya and the creator of the Neuro-Ayurveda Development System, a personalized framework that helps support developmental, behavioural, and mental wellness through a holistic ADHD treatment approach. His work supports children, teenagers, adults, and seniors with a wide range of emotional, developmental, and behavioural needs, including ADHD, Autism Spectrum Disorder (ASD), child development concerns, behaviour challenges, speech and communication difficulties, teen mental health concerns, adult emotional wellbeing, women’s mental health, stress management, and the emotional needs of older adults. Through Manovaidya, Dr. Ankush Garg brings together Ayurvedic traditions and modern approaches to understanding the brain, behaviour, emotions, and cognitive health. His approach focuses on understanding the root cause, giving personal guidance, supporting families, and planning for long-term overall health. Through comprehensive evaluation, individualized recommendations, and ongoing support, he helps children, adults, and families understand their challenges and take small meaningful steps forward with confidence and direction. Families across India connect with Dr. Ankush Garg for ADHD, Autism, Child Development, and Mental Health guidance through a compassionate, customized, and systematic Neuro-Ayurveda Development Program. ); } if (heading === \"What does ADHD treatment at Manovaidya focus on?\") { return ( ); } if (heading === \"How can we understand ADHD beyond observable behaviour?\") { return ( ); } if (heading === \"How is the ADH"
  },
  {
    "title": "AutismTreatmentIndiaPage",
    "source": "childhealthcare/AutismTreatmentIndiaPage.jsx",
    "text": "{ const text = line.trim(); if (!text) { return; } if (text.endsWith(\"?\")) { if (current) { items.push(current); } current = { question: text, answer: [] }; return; } if (current) { current.answer.push(line.trimEnd()); } }); if (current) { items.push(current); } return items; } const rawFaqs = buildRawFaqs(rawFaqLines); function VisualBlock({ heading }) { if (heading === \"What are the early signs of Autism Spectrum Disorder?\") { return ( ); } if (heading === \"How is autism understood, diagnosed, and supported in India?\") { return ( ); } if (heading === \"Autism Assessment for child developmental approach at Manovaidya\") { return ( ); } if (heading === \"How does the Integrative Cognitive Development system( Neuro Ayurvedic Development system) help in addressing child development needs?\") { return ( ); } if (heading === \"What developmental areas does Manovaidya focus on during autism intervention?\") { return ( ); } if (heading === \"How Do We Promote the Development of Children with Autism?\") { return ( ); } if (heading === \"What role does family support play in autism intervention and child development?\") { return ( ); } if (heading === \"Why Do Families Trust Manovaidya for Child Development Support?\") { return ( ); } return null; } function FaqAccordion({ openFaq, setOpenFaq }) { return ( Commonly Asked Questions Regarding Autism { const text = line.trimEnd(); const trimmedText = text.trim(); if (!trimmedText) { return ; } if (index === 0 && keyPrefix === \"line\") { return ( ); } if (trimmedText.endsWith(\"?\") || nonQuestionHeadings.has(trimmedText)) { const headingId = headingIds.get(trimmedText); const id = headingId && !usedHeadingIds.has(headingId) ? headingId : undefined; if (id) { usedHeadingIds.add(id); } return ( renderLine(line, index, \"consultation\"))} ); } function SidebarCard({ children, className = \"\" }) { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Our experts are here to understand your child and guide the right next step. Autism Treatment, ADHD, Child Development & Men"
  },
  {
    "title": "BehaviouralConcernsChildrenIndiaPage",
    "source": "childhealthcare/BehaviouralConcernsChildrenIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Behavioural Concerns in Children Support in India Child Behaviour Assessment, Parent Guidance & Developmental Support Autism, ADHD, Child Development & Mental Health Specialist What are Behavioural Concerns in Children? Behavioural difficulties refer to patterns of behaviour that may create a challenge in a child's learning, relationships, emotional wellbeing, or daily life. Every child may sometimes feel angry, frustrated, or upset. However, when these behaviour patterns become consistent, become harder to manage, or affect everyday life, parents may seek help from professionals. Behaviour should not only be seen as a problem to fix. Sometimes, children use their behaviour to show their needs, feelings, frustrations, or challenges they are facing. Understanding the reasons behind behaviour can help families respond more effectively and promote long-term development. What are the Common Behavioural Concerns in Children? Parents may seek help for various behaviour-related concerns, such as: What does behaviour reveal beyond what people do? A common misconception is that we should judge behaviour only by what we can see. In reality, a child's behaviour can be affected by many developmental factors. At Manovaidya, behaviour is seen as a part of the child's overall development, not as a separate problem. This understanding helps families support better behaviour and emotional wellbeing. How is a Behavioural Assessment conducted at Manovaidya? Every child is unique and has their own way of thinking, feeling, learning, and behaving. At Manovaidya, we focus on understanding the child as a whole instead of looking at a behaviour separately. We try to understand the child's strengths, challenges, and individual needs. The child development assessment process may include: The goal is to help families understand behaviour, strengths, and needs. Many families looking for child behaviour support in India need practical guidance to better understand and handle"
  },
  {
    "title": "ChildDevelopmentCareIndiaPage",
    "source": "childhealthcare/ChildDevelopmentCareIndiaPage.jsx",
    "text": "); } function BulletList({ items }) { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Supporting Healthy Brain Development, Learning, Behaviour & Growth Through Every Stage of Childhood Child Development Care & Developmental Treatment for Children in India Child Development Care & Neurodevelopment Treatment for Children in India Autism, ADHD & Child Development Specialist in India At Manovaidya, Child Development Care Focuses On Child development is a continuous process that begins before birth and continues throughout childhood and adolescence. During this journey, children gradually develop physical abilities, communication skills, emotional regulation, thinking abilities, social relationships and independence. Although developmental milestones provide general guidance about what many children achieve at different ages, every child follows a unique developmental path. Small differences are common. However, significant or persistent delays may indicate that a child would benefit from further assessment and support. Healthy child development involves several interconnected domains: Development in one area often influences progress in another. For example, communication challenges may affect social relationships, while sensory processing differences may influence behaviour, attention or participation in learning activities. Many parents searching for Child Development Care in India, Developmental Delay Support, Child Development Assessment, Autism Treatment, ADHD Treatment or Speech Delay Guidance are looking for answers to understand why their child is developing differently. Early understanding is an important first step toward providing appropriate guidance and support. Why Early Child Development Matters The early years of life are a period of rapid brain development. During this time, children learn through everyday experiences, relationships, play, communication and interaction with their environment. Supporting development during these early years may help children strengthen im"
  },
  {
    "title": "ChildDevelopmentSupportIndiaPage",
    "source": "childhealthcare/ChildDevelopmentSupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Child Development Treatment in India Developmental Assessment, Guidance & Family Support Helps parents understand their child's development, communication, and future needs while providing guidance for long-term growth. Autism, ADHD, Child Development & Mental Health Specialist Every child grows, learns and develops at their own pace. While many children reach developmental milestones as expected, some may face challenges with communication, behaviour, attention, learning, social interaction or overall development. For many parents, concerns start with small changes they notice in their child. A child may not be speaking as expected, have difficulty paying attention, struggle to interact with others, show behavioural challenges or reach developmental milestones later than expected. As these concerns continue, families often look for answers, guidance and the right support to help their child grow and thrive. At Manovaidya, child development is viewed through a comprehensive approach that goes beyond individual symptoms. A child's development is shaped by many interconnected factors, including communication, learning, behaviour, emotional wellbeing, attention, sensory processing and social interaction. Led by Dr. Ankush Garg, an Autism, ADHD, Child Development and Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help families understand developmental concerns and create a personalized roadmap for their child's growth, learning and overall development. Families looking for child development support, developmental assessment, a child development specialist in India or developmental guidance often want a better understanding of their child's strengths, challenges and future developmental needs. Our goal is to provide personalized guidance, structured assessment and long-term support to help every child reach their full potential. Child Development refers to the physical, cognitive, emotional, behavioural,"
  },
  {
    "title": "ChildHealthCareConcernsSection",
    "source": "childhealthcare/ChildHealthCareConcernsSection.jsx",
    "text": "Comprehensive support for a wide range of developmental and behavioural concerns. Support for social skills, communication, behaviour and overall development in children with autism. Helping children improve attention, focus, impulse control and daily functioning. Support for delayed speech, communication difficulties and language development challenges. Helping children with reading, writing, math, comprehension and academic related challenges. Support for behaviour issues, emotional regulation, tantrums, aggression and other concerns. Holistic support for overall growth, milestones, confidence and emotional wellbeing."
  },
  {
    "title": "ChildHealthCareHeroSection",
    "source": "childhealthcare/ChildHealthCareHeroSection.jsx",
    "text": "Compassionate. Evidence-Informed. Family-Centred Care. Supporting your child&apos;s growth, learning, communication, behaviour and emotional wellbeing through expert care and the Neuro-Ayurveda approach."
  },
  {
    "title": "ChildHealthCareSupportSection",
    "source": "childhealthcare/ChildHealthCareSupportSection.jsx",
    "text": "A structured process to understand your child&apos;s unique needs and create a personalized roadmap. Comprehensive evaluation of development, behaviour, learning, communication and emotional wellbeing. Individualized care plans based on the child's unique strengths and developmental needs. Guiding parents with strategies, training and home support for better development outcomes. Regular monitoring and progress tracking to ensure steady improvement. Clear roadmap with goals, timelines and practical strategies for long-term progress."
  },
  {
    "title": "ChildHealthCareTrustSection",
    "source": "childhealthcare/ChildHealthCareTrustSection.jsx",
    "text": "Dr. Ankush Garg is a leading Autism, ADHD, Child Development & Mental Health Specialist in India and the Founder of Manovaidya. He is the creator of the Neuro-Ayurveda Development System, a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support children&apos;s healthy development. Book a structured assessment and personalized guidance session with the Manovaidya team. Holistic & Long-Term Development Focus What are the signs of developmental delays in children? Signs include not responding to their name, poor eye contact, delayed speech, hyperactivity, attention difficulties, and learning challenges. Can developmental delays improve over time? Yes, with early intervention, structured therapies, and consistent support, many children show significant improvement in their development. What is the Neuro-Ayurveda Development System? It is a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support children's healthy development. When should parents worry about child development? If a child consistently misses developmental milestones or shows regression in previously acquired skills, professional guidance is recommended. How can parents support child development at home? Parents can support development through interactive play, reading together, establishing routines, and providing a nurturing environment. When should parents seek professional guidance? Professional guidance should be sought if there are persistent concerns regarding a child's speech, behaviour, social skills, or learning. What are the early signs of autism? Early signs often include reduced eye contact, lack of response to their name, repetitive movements, and delayed social or communication skills. What are learning difficulties in children? Learning difficulties encompass challenges with reading (dyslexia), writing (dysgraphia), math (dyscalculia), and general comprehension. Can children with developmental challenges attend regular school? Yes, many children with developmental challenges thrive in regular schools with appropriate accommodations, individualized support, and therapies. What are the signs o"
  },
  {
    "title": "LearningAttentionDifficultiesIndiaPage",
    "source": "childhealthcare/LearningAttentionDifficultiesIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Learning and Attention Support Services in India Learning Assessment, Attention Support & Child Development Guidance Autism, ADHD, Child Development & Mental Health Specialist What are Learning & Attention Difficulties? Learning and attention difficulties are challenges that can make it harder for a child to focus, understand information, remember things, follow instructions, or complete schoolwork. These challenges are different for every child. Some children may have trouble paying attention and staying focused, while others may find it difficult to learn, understand, remember, or complete tasks. To understand these challenges, it is important to look beyond school achievement and take into account the child's overall development. What is the difference between learning difficulties and attention difficulties? Some children may find it harder to understand and learn new things, while others may struggle with staying focused and paying attention. Sometimes these challenges can happen together, but they are not always the same. Knowing the difference can help families understand their child's needs and choose the right support to help them grow and succeed. What are the Common Signs of Learning & Attention Difficulties? Parents may observe some signs such as How do you understand learning beyond academic achievement? One of the most common myths is that learning difficulties are determined only by intelligence. Learning depends on more than intelligence alone. A child may be intelligent and capable but still face challenges with focus, memory, processing information, managing emotions, or communicating effectively. At Manovaidya, learning challenges are understood as part of overall development, rather than only academic performance. What is the Learning & Attention Assessment at Manovaidya? Every child has an Individual learning profile. Assessment emphasizes a holistic understanding of the child rather than solely measuring academic performance"
  },
  {
    "title": "SpeechDelaySupportIndiaPage",
    "source": "childhealthcare/SpeechDelaySupportIndiaPage.jsx",
    "text": "{ const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Speech Development Assessment & Communication Support in India Child development, communication support, and structured developmental guidance at Manovaidya. Autism, ADHD, Child Development & Mental Health Specialist Speech and language delay refers to a condition in which a child develops speech and language skills later than expected for their age. While some children can understand language well, they may find it hard to express themselves through speech. Others may have impairments in both understanding and communicating. Every child may experience speech delays in a different way. Parents may notice few signs such as: Communication development goes beyond verbal speech. It includes language comprehension, expressing thoughts and feelings, building relationships, and participating in social communication. At Manovaidya, communication challenges are approached as one aspect of the child’s holistic developmental journey rather than as a separate difficulty. What Are the Common Signs of Speech and Communication Problems? Every child grows and learns at their own pace, but some commonly noticed indicators may include: If communication difficulties continue for a long time, a speech delay assessment can help families understand the child’s strengths, challenges, and support needs. Understanding Unspoken Communication Many people believe that communication means only speaking, but it is more than that. Some children may use words but still have difficulty communicating effectively. Others may possess deep understanding of things but still find it challenging to express themselves clearly. This is why communication development should be understood as part of a child’s overall development, not just by counting how many words they can say. What happens in a Speech and Communication Assessment at Manovaidya? Every child has their own unique way of communicating. At Manovaidya, we look at the child as a whole, going beyond speech alone to understand the"
  },
  {
    "title": "BookConsultationButton",
    "source": "components/BookConsultationButton.jsx",
    "text": "{ onClick?.(event); if (event.defaultPrevented) return; window.dispatchEvent(new CustomEvent(\"manovaidya:open-consultation\")); }; return ("
  },
  {
    "title": "BookConsultationForm",
    "source": "components/BookConsultationForm.jsx",
    "text": "{ event.preventDefault(); setIsSubmitting(true); setStatus({ type: \"\", message: \"\" }); try { const { data } = await api.post(\"/consultations\", { ...form, message: [ form.message, \"Consultation fee: Rs. 599\", \"OPD days: Tuesday, Thursday and Saturday\", \"Slot confirmation requires payment.\", ].filter(Boolean).join(\" \"), }); if (!data.success) { throw new Error(data.message || \"Unable to submit consultation request\"); } setStatus({ type: \"success\", message: \"Request submitted successfully. Our team will contact you soon.\", }); setForm(initialForm); onSuccess?.(); } catch (error) { setStatus({ type: \"error\", message: error.response?.data?.message || error.message || \"Something went wrong. Please try again.\", }); } finally { setIsSubmitting(false); } }; return ( Rs. 599 consultation fee. OPD days: Tue, Thu, Sat. Limited slots. Payment confirms your slot. {isSubmitting ? \"Submitting...\" : \"Submit Request\"}"
  },
  {
    "title": "Footer",
    "source": "components/Footer.jsx",
    "text": "); const socialLinks = [ { label: \"Facebook\", Icon: FacebookIcon, href: \"https://www.facebook.com/ManovaidyaAutismADHD/\" }, { label: \"Instagram\", Icon: InstagramIcon, href: \"https://www.instagram.com/manovaidya/\" }, { label: \"YouTube\", Icon: YouTubeIcon, href: \"https://www.youtube.com/@manovaidyaclinic\" }, ]; const youtubeHref = \"https://www.youtube.com/@manovaidyaclinic\"; const mapHref = \"https://www.google.com/maps/search/?api=1&query=Manovaidya%20Clinic%20VS%20Plaza%20Near%20Vigyan%20Hospital%20Atta%20Market%20Sector%2022%20Noida\"; function Footer() { return ( Across India - Online Consultations Available"
  },
  {
    "title": "Header",
    "source": "components/Header.jsx",
    "text": "window.clearTimeout(conditionsCloseTimer.current), [] ); return ( { const label = typeof condition === 'string' ? condition : condition.label; const href = typeof condition === 'string' ? group.href : condition.href; return ( Neuro-Ayurveda care for every mind and every stage. {openConditionGroup === group.title ? ( Screen Addiction & Digital Wellbeing Relationship & Emotional Challenges"
  },
  {
    "title": "Seo",
    "source": "components/Seo.jsx",
    "text": "{ if (!pathname || pathname === \"/\") return \"/\"; return pathname.replace(/\\/+$/, \"\"); }; function Seo({ title, description, path, image, noindex = false, keywords, schema }) { const location = useLocation(); const resolvedTitle = title || DEFAULT_TITLE; const resolvedDescription = description || DEFAULT_DESCRIPTION; const canonicalUrl = ` `; const resolvedImage = image || DEFAULT_IMAGE; return ("
  },
  {
    "title": "CareStagesSection",
    "source": "homepage/CareStagesSection.jsx",
    "text": "Personalised Neuro-Ayurveda support for children, teens, adults, seniors, women, and mind-body concerns. { const palette = colorClasses[color]; return ( Supporting children's growth, development and emotional wellbeing Guiding teenagers towards emotional balance, confidence and a positive future Compassionate care for stress, anxiety, emotional challenges and life balance Supporting healthy ageing, memory, cognitive strength and emotional wellbeing Empowering women through every phase of life with care and understanding Holistic support for physical symptoms linked with stress and emotional health"
  },
  {
    "title": "ConditionsSupportSection",
    "source": "homepage/ConditionsSupportSection.jsx",
    "text": "Repetitive thoughts and behaviours. Attention, focus and behaviour support. Communication and developmental support. Mood swings and emotional instability. Insomnia, restless sleep and sleep issues. Emotional regulation and behaviour. Trauma related stress and recovery. Digestive issues affecting mind and mood."
  },
  {
    "title": "InsightsFaqSection",
    "source": "homepage/InsightsFaqSection.jsx",
    "text": "({ title: blog.title, image: getAssetUrl(blog.image) || fallbackImages[index % fallbackImages.length], alt: blog.imageAlt || blog.title, href: blog.slug ? `/blog/ ` : \"/blog\", })); }, [blogs]); return ( { const isOpen = openIndex === index; return ( Take the First Step Towards a Better You Personalised. Compassionate. Proven. Understanding Autism & How to Support How Gut Health Affects Your Mental Health Managing Stress Naturally with Ayurveda ADHD in Teens: Signs, Causes & Care Sleep Hygiene Tips for Better Mental Wellbeing Nutrition & Diet for Brain & Gut Health What is Neuro-Ayurveda & how does it help? Neuro-Ayurveda combines Ayurvedic principles with modern brain and nervous-system understanding to support mental health, behaviour, sleep, emotions, gut health and overall wellbeing. How does gut health affect mental health? The gut and brain communicate through hormones, nerves, immunity and inflammation. Better digestion, food habits and gut balance can support mood, focus, sleep and stress response. Yes. Long-term stress can affect sleep, digestion, headaches, fatigue, immunity, blood pressure and emotional regulation. A holistic plan helps calm the system at root level. Yes, many concerns can be assessed and followed up effectively online through structured history-taking, care plans, lifestyle guidance and regular progress reviews. It depends on the concern, duration, severity and consistency with the plan. Some people notice early improvements, while deeper concerns need regular follow-up and sustained care. Do you offer personalised care plans? Yes. Care plans are personalised based on age, symptoms, history, lifestyle, digestion, sleep, emotional patterns and family needs. Do you support patients outside Delhi NCR? Yes. Online consultations are available across India, with guidance, follow-ups and care planning provided remotely. Can digestive issues affect mood and behaviour? Yes. Digestive discomfort, poor gut balance and food sensitivities can influence mood, sleep, irritability, focus and behaviour in many people. Why is emotional wellbeing important? Emotional wellbeing supports confidence, relationships, learning, work performance, sleep and phy"
  },
  {
    "title": "ScienceStoriesSection",
    "source": "homepage/ScienceStoriesSection.jsx",
    "text": "We combine the timeless wisdom of Ayurveda with the latest neuroscience to understand how the brain, gut, emotions and lifestyle are deeply connected. Our holistic approach focuses on restoring balance at the root level, not just managing symptoms."
  },
  {
    "title": "WhyChooseSection",
    "source": "homepage/WhyChooseSection.jsx",
    "text": "In-depth evaluation to identify root causes. Tailored plans for each child, teen or adult. Ancient wisdom backed by modern neuroscience. Empowering families with tools and ongoing support. Regular follow-ups to track and support progress."
  },
  {
    "title": "MindBodyConcernsSection",
    "source": "mindbodyconcerns/MindBodyConcernsSection.jsx",
    "text": "Comprehensive support for common mind-body and lifestyle challenges. Chronic stress, burnout, mental fatigue and irritability. Insomnia, poor sleep quality, restless or non-restorative sleep. Constant tiredness, low stamina and lack of motivation. Tension headaches, migraine, neck pain, back pain and more. Acidity, bloating, IBS, constipation and other digestive concerns. Support for stress-related migraine, tension headaches, and head pain. Support for tension-type headaches, recurring head pain & stress-related tension. Support for thyroid health, hormonal balance & emotional wellbeing."
  },
  {
    "title": "MindBodyFaqSection",
    "source": "mindbodyconcerns/MindBodyFaqSection.jsx",
    "text": "Why Choose Manovaidya for Mind-Body Care Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health Specialist in India and the Founder of Manovaidya. He is the creator of the Neuro-Ayurveda Development System, a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support mental wellness for all age groups. Take the first step towards mind-body balance and a healthier, happier you. Mind-body medicine looks at how stress, emotions, sleep, digestion, pain and lifestyle influence physical wellbeing, then supports them through an integrated care plan. How does Ayurveda help in stress and fatigue? Ayurveda considers sleep, digestion, daily routine, nutrition and individual constitution to create supportive lifestyle strategies for stress and fatigue. Yes, care may include assessing sleep patterns, stress, digestion and routine, followed by personalised sleep, relaxation and lifestyle guidance. Do you treat chronic pain without medication? We can support chronic pain through relaxation, stress management, gentle movement and lifestyle care, while medication decisions remain with your treating clinician. What lifestyle changes do you recommend? Recommendations may include sleep routines, balanced meals, hydration, suitable movement, breathwork, stress regulation and healthier screen habits based on your needs. Can this help with acidity and gut issues? Yes, the plan can address the gut-brain connection through food habits, digestion support, stress care, sleep and personalised lifestyle guidance. Will I get a personalised care plan? Yes, your plan is created around your symptoms, history, lifestyle, digestion, sleep, emotional patterns and individual goals. How long does it take to see improvement? It depends on the concern, duration, severity and consistency with the plan; some people notice early changes while deeper concerns need sustained care. Yes, online consultations are available across India with structured history-taking, personalised planning, lifestyle guidance and regular progress reviews. Are your therapies safe and natural? Care combines evidence-informed and Ayurvedic approaches selected "
  },
  {
    "title": "MindBodyRestoreBalanceSection",
    "source": "mindbodyconcerns/MindBodyRestoreBalanceSection.jsx",
    "text": "A holistic, step-by-step approach to heal your mind, strengthen your body and improve your quality of life. Understanding your mental, physical, lifestyle and Ayurvedic constitution. Tailored mind-body care plan using Ayurveda, nutrition, lifestyle & therapies. Ayurveda, relaxation techniques, breathwork, yoga & evidence-based care. Regular follow-ups to track improvements and adjust the plan. Sustainable lifestyle changes for lasting wellbeing and vitality."
  },
  {
    "title": "MindBodyStressTensionSupportPage",
    "source": "mindbodyconcerns/MindBodyStressTensionSupportPage.jsx",
    "text": "Mind-Body Health Care & Stress-Related Health Support in India Understanding the Connection Between Emotional Wellbeing, Brain Health and Physical Health The mind and body constantly communicate with each other. Emotional stress does not only affect thoughts and feelings—it can also influence physical health. Likewise, ongoing physical health problems may affect emotional wellbeing, mood and overall quality of life. Many people notice that during periods of prolonged stress or anxiety they develop symptoms such as digestive discomfort, acidity, headaches, migraine, fatigue, disturbed sleep, muscle tension or changes in blood pressure. Others may experience worsening of existing medical conditions during emotionally challenging periods. This does not mean that every physical symptom is caused by stress. Physical health concerns should always be properly evaluated by a qualified healthcare professional. However, research has shown that emotional wellbeing and physical health are closely connected through complex interactions involving the brain, nervous system, hormones, immune system and the gut-brain axis. At Manovaidya, we believe that supporting emotional wellbeing is an important part of understanding overall health. Rather than viewing the mind and body separately, we aim to understand how emotional, lifestyle and biological factors work together to influence wellbeing. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together while supporting long-term mind-body wellness. Mind-Body Health Conditions We Support Stress and emotional wellbeing may influence different body systems in different individuals. Our Mind-Body Health Care focuses on understanding the relationship between emotional health and common stress-related physical concerns. 🌿 Stress & Digestive Health Understanding how stress may influence digestion, appetite, bloating and overall digestive wellbeing. Learn More → Stress & Digestive Health 🦠 Stress & IBS Helping individuals understand the relations"
  },
  {
    "title": "MindBodyWellbeingHeroSection",
    "source": "mindbodyconcerns/MindBodyWellbeingHeroSection.jsx",
    "text": "Heal Your Mind. Strengthen Your Body. Holistic care for stress, fatigue, poor sleep, lifestyle disorders, pain, digestive issues and more. Evidence-informed. Ayurveda-powered. Personalised for you."
  },
  {
    "title": "StressAcidityIndiaPage",
    "source": "mindbodyconcerns/StressAcidityIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Acidity Treatment in India Understanding the Relationship Between Stress, Acidity and Digestive Health through the Neuro-Ayurveda Development System. Acidity, heartburn and acid reflux are digestive concerns that many people experience. For some, these symptoms become more noticeable during emotionally stressful periods. For others, the discomfort may appear after eating certain foods, following an irregular meal routine or making changes to their lifestyle. It is important to understand that stress is not responsible for every case of acidity. Diet, everyday habits, existing medical conditions and digestive disorders can all play a role. At the same time, emotional stress may affect the way the digestive system functions and how strongly a person notices or experiences the symptoms. The brain and the digestive system are in constant communication through the gut-brain axis. This complex connection involves the nervous system, hormones and immune pathways. It is one of the reasons emotional wellbeing and digestive health can influence one another so closely. At Manovaidya, we look beyond the digestive symptom alone and try to understand the person as a whole. Our approach takes emotional wellbeing, lifestyle, sleep, nutrition and gut-brain communication into account while supporting long-term mind-body wellness. Under the guidance of Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This structured five-pillar framework brings brain health, gut health, behaviour and lifestyle together to support overall wellbeing. Acidity is a commonly used term for discomfort linked to stomach acid. It may refer to acid moving back into the food pipe, known as acid reflux, or to irritation in the upper digestive system. People experiencing acidity may notice: Depending on the underlying cause, these symptoms may occur only once in a while or m"
  },
  {
    "title": "StressDigestiveHealthIndiaPage",
    "source": "mindbodyconcerns/StressDigestiveHealthIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Digestive Health Treatment in India Understanding the Connection Between Stress, Emotional Wellbeing and Digestive Health. Understanding Stress & Digestive Health The digestive system and the brain are connected through a network called the gut-brain axis. This means that how you feel emotionally and your digestive health are always affecting each other. A lot of people notice that when they are stressed, worried or feeling pressure they experience changes in their appetite, stomach discomfort, bloating or other digestive symptoms. Sometimes you might feel discomfort when you are stressed but if it happens all the time you should not ignore it. Digestive problems can have causes, including medical conditions that need to be diagnosed and treated properly. Emotional stress can affect how you experience symptoms but it is not the only reason. At Manovaidya we think it is important to understand the person, not just their digestive symptoms. We look at wellbeing, lifestyle, sleep, nutrition and the connection between the gut and the brain to help people understand their overall health. Our team is led by Dr. Ankush Garg, a Mental Health Specialist and the Founder of Manovaidya. We use the Neuro-Ayurveda Development System, which's a framework that considers brain health, gut health, behavior and lifestyle together to support overall mind-body wellbeing. How Are Stress and Digestion Connected? The brain and digestive system are always talking to each other through nerves, hormones and immune pathways. When you are emotionally stressed your bodys stress response can affect your function. You might notice changes in your appetite, digestion or bowel habits when you are going through a time. Similarly living with digestive discomfort can be a source of emotional stress creating a cycle where your physical and emotional wellbeing affect each other. Understanding this connection helps explain why taking"
  },
  {
    "title": "StressFatigueIndiaPage",
    "source": "mindbodyconcerns/StressFatigueIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Fatigue Treatment in India Understanding the Relationship Between Stress, Fatigue and Emotional Wellbeing Feeling tired after a busy day is normal. But when tiredness stays for weeks, starts affecting your daily work, or does not improve even after proper rest, it should not be ignored. It may be your body's way of saying that something needs attention. Fatigue is not just sleepiness. It can feel like physical weakness, mental heaviness or emotional exhaustion. A person may feel drained all the time, lose interest in work, or find it hard to focus even after sleeping well. There can be many reasons behind fatigue. Poor sleep, nutritional deficiencies, thyroid problems, infections, long-term health conditions, medicines and emotional stress can all play a role. That is why finding the real reason is important before deciding what support is needed. At Manovaidya, we do not look at low energy as a small, isolated problem. We try to understand the complete person. Sleep, lifestyle, nutrition, emotional wellbeing and mind-body health are all considered together so that healthier long-term habits can be built. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This is a five-pillar framework that looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together. Fatigue means a long-lasting feeling of physical, mental or emotional tiredness. It does not always go away with rest. Normal tiredness after work or physical activity usually improves after sleep. Fatigue is different. It can disturb work, relationships, concentration and everyday life. Fatigue is not a disease by itself. It is a symptom that can happen because of many medical or psychological reasons. A proper medical evaluation helps find the real cause and decide the right treatment or support. How Are Stress and Fatigue Connected? When a per"
  },
  {
    "title": "StressHeadachesIndiaPage",
    "source": "mindbodyconcerns/StressHeadachesIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Headaches Treatment in India Understanding the Relationship Between Stress, Headaches and Emotional Wellbeing Headaches are so common that most people experience one at some point. They can arise for many reasons, but emotional stress is frequently linked with tension-type headaches and the kind of recurring head pain that appears during demanding periods of everyday life. A person may notice headaches returning during a busy work week, after several nights of poor sleep, or when emotional pressure has been building for some time. That does not mean stress explains every headache. Dehydration, eye strain, infection, sinus problems, high blood pressure, certain medicines and other medical conditions can also cause head pain. Looking at when a headache begins, what was happening beforehand and how the body was feeling at the time can reveal useful patterns. This understanding can guide healthier daily choices, while medical evaluation remains important whenever symptoms are frequent, severe or unusual. At Manovaidya, we do not look at the headache as an isolated complaint. Emotional health, sleep, food habits, work routine, lifestyle and overall mind-body wellbeing are considered together so that the wider picture is not missed. This approach is led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya. His Neuro-Ayurveda Development System uses five connected pillars to explore brain health, behaviour, gut health, lifestyle and emotional wellbeing. The term stress-related headache is generally used when head pain becomes more noticeable during emotionally or physically demanding periods. The most familiar example is a tension-type headache. People often describe it as steady pressure, a dull ache or the feeling of a band tightening around the head. These headaches are usually different from migraine. Severe nausea, a visual aura and marked sensitivity to light or sound are less "
  },
  {
    "title": "StressHighBloodPressureIndiaPage",
    "source": "mindbodyconcerns/StressHighBloodPressureIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & High Blood Pressure Treatment in India Understanding the Relationship Between Stress, High Blood Pressure and Emotional Wellbeing. Understanding the Relationship Between Stress, High Blood Pressure and Emotional Wellbeing High blood pressure, also called hypertension, is a very common long-term health concern. It often builds up slowly. Many people do not feel any clear symptoms in the beginning, so they may not even know that their blood pressure is high. That is why it is often called a \"silent condition.\" A common question people ask is: can stress increase blood pressure? During stress, the body naturally releases stress hormones. Because of this, heart rate and blood pressure can rise for a short time. In most people, these readings come down again once the stressful situation is over. Long-term high blood pressure is different. It usually happens due to a mix of reasons, such as age, family history, diet, activity level, body weight, medical conditions and daily lifestyle habits. Emotional stress may not be the only cause, but it can affect sleep, eating habits, physical activity and other routines that matter for heart health. At Manovaidya, we do not look only at blood pressure numbers. We try to understand the person as a whole. Our approach looks at emotional wellbeing, lifestyle, sleep and overall mind-body health so that healthier long-term habits can be built. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. It is a structured five-pillar framework that looks at brain health, gut health, behaviour, lifestyle and emotional wellbeing together. Blood pressure measures the force of blood pushing against the walls of your arteries. When this pressure stays higher than the recommended range again and again, it is called high blood pressure or hypertension. How Are Stress and Blood Pressure Connected? When a perso"
  },
  {
    "title": "StressIBSSupportPage",
    "source": "mindbodyconcerns/StressIBSSupportPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( The Connection Between Stress, Irritable Bowel Syndrome (IBS) and the Gut-Brain Connection. Irritable Bowel Syndrome (IBS) is a digestive condition that leads to dysfunction of one’s digestive system. IBS may cause bloating, changes in bowel movements and abdominal pain, that may all vary in frequency and duration. The gut and the brain are continuously communicating and this is referred to as the gut-brain axis. The close relationship between the gut and the brain leads to a situation where emotional stress may also influence IBS symptoms and the quality of life may worsen with ongoing digestive symptoms. Stress does not always lead to the development of IBS, and IBS does not mean that someone has a psychological problem. IBS is a complicated syndrome that may vary in presentation and severity, and is caused by alterations in gut function, stress and other health and lifestyle related issues. At Manovaidya, we believe in understanding the complete relationship between emotional wellbeing, gut health and lifestyle rather than focusing on digestive symptoms. Led by Dr. Ankush Garg, a Mental Health Specialist and the Founder of Manovaidya, we follow the Neuro-Ayurveda Development System. This is a structured five-pillar framework that considers health of the brain, gut, and health related behavior and lifestyle while supporting mind-body wellbeing. What is Irritable Bowel Syndrome (IBS)? IBS is a functional gastrointestinal disorder that affects the way the digestive system works. People with IBS may still show no evidence of damage in the digestive tract while experiencing frequent digestive symptoms. Stress and the digestive symptoms of some people with IBS are connected through the gut-brain axis, which illustrates the constant bidirectional communication that occurs between the brain and the digestive system. During stressful situations, individuals notice: Increased emotional stress some people with "
  },
  {
    "title": "StressMigraineIndiaPage",
    "source": "mindbodyconcerns/StressMigraineIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Migraine Treatment in India Understanding the Relationship Between Stress, Migraine and Emotional Wellbeing. A migraine is not simply a bad headache. It is a neurological condition, and an episode can bring severe head pain, nausea, sensitivity to light or sound, and enough discomfort to make ordinary daily tasks difficult. People who live with migraine often notice a link between stressful periods and their attacks. Stress can sometimes set off an episode or make the symptoms harder to handle. Even so, migraine is rarely explained by one factor alone, so stress should be seen as a possible trigger rather than the single cause. The connection between emotional health, the nervous system and migraine is still being studied. Learning how these areas affect one another can make it easier for a person to notice their own patterns, recognise possible triggers and make useful lifestyle changes while continuing with appropriate medical care. Our work at Manovaidya does not begin and end with the headache itself. We take time to look at the person's emotional state, sleep, food habits, routine and wider mind-body health so that the support offered reflects the full picture. This work is led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya. The clinic follows his Neuro-Ayurveda Development System, a five-pillar framework that brings together brain health, gut health, behaviour, lifestyle and emotional wellbeing. Migraine is a neurological condition in which headache attacks return from time to time. The pain, length of an attack and accompanying symptoms can vary widely from one person to another. For some people, an attack happens only occasionally. For others, migraines come often enough to disturb work, family responsibilities, travel and the basic rhythm of daily life. There is no single, fixed way in which migraine appears. Two people may describe very different experiences, a"
  },
  {
    "title": "StressThyroidIndiaPage",
    "source": "mindbodyconcerns/StressThyroidIndiaPage.jsx",
    "text": "); } function RelatedPagesCard() { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Stress & Thyroid Treatment in India Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing. Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing The thyroid is a small butterfly-shaped gland located in the front of the neck that produces hormones essential for regulating metabolism, energy production, body temperature, heart rate and many other body functions. When the thyroid does not produce hormones in the right amount, it may lead to conditions such as hypothyroidism (underactive thyroid) or hyperthyroidism (overactive thyroid). These conditions require appropriate medical diagnosis and treatment. Many people wonder whether emotional stress affects thyroid health. Research suggests that long-term stress may influence the body's hormonal balance and overall wellbeing. While stress is not generally considered the sole cause of thyroid disorders, it may influence how some individuals experience symptoms, cope with illness or maintain healthy lifestyle habits. At Manovaidya, we believe in understanding the whole person rather than focusing only on thyroid hormone levels. Our approach considers emotional wellbeing, lifestyle, sleep and overall mind-body health while supporting healthier long-term habits alongside appropriate medical care. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that considers brain health, gut health, behaviour, lifestyle and emotional wellbeing together. The thyroid gland is an important part of the endocrine (hormonal) system. It produces hormones that help regulate: When thyroid hormone levels become too low or too high, many body systems may be affected. A healthcare professional diagnoses thyroid disorders through clinical evaluation, blood tests and, when necessary, imaging studies. How Are Stress and"
  },
  {
    "title": "BlogDetails",
    "source": "pages/BlogDetails.jsx",
    "text": "{ if (!toc || toc.length === 0) return null; return ( document.getElementById(h.id)).filter(Boolean); // Add offset to trigger highlight when heading is near the top of the viewport const scrollPosition = window.scrollY + 200; let currentId = toc[0]?.id || ''; for (const el of headingElements) { if (el.offsetTop window.removeEventListener('scroll', handleScroll); }, [toc]); if (loading) { return ( ); } if (error || !blog) { return ( { navigator.clipboard.writeText(window.location.href); alert(\"Link copied to clipboard!\"); }; return ( {blog.authorName?.charAt(0) || 'D'} Autism, ADHD & Child Development Specialist {/* Hero Image */} {blog.image && ( )} {/* Tags */} {blog.metaKeywords && ( {/* RIGHT COLUMN: Sticky Sidebar */} {blog.authorName?.charAt(0) || 'M'} Expert in holistic wellness and evidence-based healing. Committed to providing long-term structural solutions for a healthier life. Book a 1:1 consultation with our experts and get a customized plan for your well-being."
  },
  {
    "title": "CaseStudiesPage",
    "source": "pages/CaseStudiesPage.jsx",
    "text": "item.text || item).filter(Boolean), })) : fallbackCaseStudies; return ( Explore how Manovaidya plans care for children, teens and families through assessment, Neuro-Ayurveda support, counselling, and guided follow-ups. ) : error && !caseStudies.length ? ( Live case studies could not load, so curated examples are shown. Speak with the Manovaidya team and understand the right care path for your family. Speech Delay and Child Development Progress"
  },
  {
    "title": "CaseStudyDetails",
    "source": "pages/CaseStudyDetails.jsx",
    "text": "{ window.dispatchEvent(new CustomEvent(\"manovaidya:open-consultation\")); }; if (loading) { return ; } if (error || !study) { return ( Speak with the Manovaidya team and understand the right care path for your family."
  },
  {
    "title": "MediaPRPage",
    "source": "pages/MediaPRPage.jsx",
    "text": "getHostname(item.url))).size, [] ); return ( A curated press room featuring Dr. Ankush Garg's coverage on autism care, Ayurveda, and the Manovaidya approach to mental wellbeing. Published across leading digital outlets Each card opens the original external article in a new tab, keeping the media page useful for visitors, press teams, and search users. A clean, quick-scan directory of all coverage links supplied for the Manovaidya media page. For interviews, article collaborations, or expert comments from Dr. Ankush Garg, connect with the clinic team directly."
  },
  {
    "title": "VideoLibraryPage",
    "source": "pages/VideoLibraryPage.jsx",
    "text": "{ document.removeEventListener(\"keydown\", handleKeyDown); document.body.style.overflow = previousOverflow; }; }, [onClose, video]); if (!video) return null; return ( ); } function VideoCard({ video, onPlay }) { return ( ); } function VideoCardSkeleton() { return ( ); } function FeaturedVideoPanel({ video, onPlay }) { if (!video) { return ( video.category === activeCategory); }, [videos, activeCategory]); const featuredVideo = videos[0] || null; return ( Real care journeys, told through clear video stories Watch families and patients share their Neuro-Ayurveda care journey with Manovaidya - honest conversations about progress, challenges and support. Showing {visibleVideos.length} video{visibleVideos.length === 1 ? \"\" : \"s\"} in{\" \"} We're preparing more real care journey videos. Please check back shortly. Real recovery stories and care journeys from Manovaidya, shown as video testimonials."
  },
  {
    "title": "ConfusionDisorientationSupportPage",
    "source": "seniormindcare/ConfusionDisorientationSupportPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer }, })), }, { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"https://www.manovaidya.com/\" }, { \"@type\": \"ListItem\", position: 2, name: \"Senior Mental Health Care\", item: \"https://www.manovaidya.com/senior-mental-health-care/\" }, { \"@type\": \"ListItem\", position: 3, name: \"Confusion & Disorientation Treatment\", item: \"https://www.manovaidya.com/confusion-disorientation-support-seniors-india/\" }, ], }, { \"@context\": \"https://schema.org\", \"@type\": \"Physician\", name: \"Dr. Ankush Garg\", medicalSpecialty: [\"Mental Health\", \"Child Development\", \"Senior Mental Health\"], address: { \"@type\": \"PostalAddress\", addressLocality: \"Noida\", addressRegion: \"Uttar Pradesh\", addressCountry: \"India\" }, }, ]; function SidebarCard({ children, className = \"\" }) { return ; } function BulletList({ items, columns = true }) { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Confusion & Disorientation Treatment Confusion & Disorientation Treatment for Seniors in India Helping Seniors Understand Confusion, Disorientation & Cognitive Wellbeing At Manovaidya, Confusion & Disorientation Treatment Focuses On Understanding Confusion & Disorientation Growing older naturally brings small changes in memory and processing speed, but these are different from significant confusion. Many healthy seniors may occasionally: These changes usually do not interfere with daily independence. Professional assessment is recommended if a senior: These symptoms may have many possible causes and should not be ignored. Not all confusion has the same cause. Temporary confusion may occur due to: Many temporary causes improve when the underlying problem is identified and treated. Confusion that gradually worsens or continues over time may require detailed medical assessment to identify possible neurological or other health conditions. D"
  },
  {
    "title": "DementiaAlzheimersCareSupportPage",
    "source": "seniormindcare/DementiaAlzheimersCareSupportPage.jsx",
    "text": "value .toLowerCase() .replace(/&/g, \"and\") .replace(/[^a-z0-9]+/g, \"-\") .replace(/^-|-$/g, \"\") .slice(0, 56); function SidebarCard({ children, className = \"\" }) { return ( ); } function ContentLine({ line, index }) { const trimmed = line.trim(); if (!trimmed) { return ; } if (sectionHeadings.has(trimmed) || duplicateHeroLines.has(trimmed)) { return null; } if (trimmed.startsWith(\"✔\") || trimmed.startsWith(\"✅\") || trimmed.startsWith(\"📞\")) { return ( ); } if (/^Step\\s\\d+:/i.test(trimmed) || /^STEP\\s\\d+:/i.test(trimmed) || /^\\d+\\.\\s/.test(trimmed)) { return ( ); } if (headingLines.has(trimmed)) { return ( { const trimmed = line.trim(); return trimmed && (trimmed.length {section.title !== \"Introduction\" && ( )} {section.id === \"understanding-the-stages\" && ( )} {section.id === \"neuro-ayurveda-system\" && ( )} {section.id === \"how-manovaidya-supports\" && ( ); } function DoctorProfileSection() { return ( Autism, ADHD, Child Development & Mental Health Specialist in India Dr. Ankush Garg is the Founder of Manovaidya and the Developer of the Neuro-Ayurveda Development System. His work extends across Child Development, Adult Mental Health and Senior Mental Health, with a focus on understanding the relationship between brain health, emotional wellbeing and overall quality of life. Many families seek guidance when an older loved one experiences progressive memory loss, dementia or Alzheimer's disease. Through structured assessment, personalised guidance, lifestyle recommendations and continuous follow-up, Dr. Ankush Garg helps seniors and families better understand cognitive changes while supporting healthy ageing through the Neuro-Ayurveda Development System. Based in Delhi NCR, Dr. Ankush Garg supports seniors and families across India through structured assessment, personalised guidance and holistic mental health care. { const section = document.getElementById(id); if (section && section.offsetTop ({ \"@type\": \"Question\", name: faq.question, acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer }, })), }, { \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"https://www.manovaidya.com/\" }, { \"@type\": \"ListItem\", position"
  },
  {
    "title": "MemoryLossForgetfulnessSupportPage",
    "source": "seniormindcare/MemoryLossForgetfulnessSupportPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer }, })), }, { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"https://www.manovaidya.com/\" }, { \"@type\": \"ListItem\", position: 2, name: \"Senior Mental Health Care\", item: \"https://www.manovaidya.com/senior-mental-health-care/\" }, { \"@type\": \"ListItem\", position: 3, name: \"Memory Loss & Forgetfulness Treatment\", item: \"https://www.manovaidya.com/memory-loss-forgetfulness-support-seniors-india/\" }, ], }, { \"@context\": \"https://schema.org\", \"@type\": \"Physician\", name: \"Dr. Ankush Garg\", medicalSpecialty: [\"Mental Health\", \"Child Development\", \"Senior Mental Health\"], address: { \"@type\": \"PostalAddress\", addressLocality: \"Noida\", addressRegion: \"Uttar Pradesh\", addressCountry: \"India\", }, }, ]; function SidebarCard({ children, className = \"\" }) { return ( ); } function BulletList({ items, columns = true }) { return ( { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Memory Loss & Forgetfulness Treatment Memory Loss & Forgetfulness Treatment for Seniors in India Helping Seniors Understand Memory Changes, Forgetfulness & Cognitive Wellbeing At Manovaidya, Memory Loss & Forgetfulness Treatment Focuses On Take the first step toward understanding memory changes, forgetfulness and cognitive wellbeing through a structured assessment and personalized guidance process. Understanding Memory Loss & Forgetfulness Many families first notice concerns when a senior: Understanding the difference between age-related forgetfulness and memory loss is important. Many healthy older adults may occasionally: These changes usually do not interfere significantly with independence or daily life. Memory changes should be evaluated if an individual begins to: These symptoms do not automatically mean dementia, but they deserve professional assessment. Some older adults experience memory changes that are greater than expe"
  },
  {
    "title": "MildCognitiveImpairmentSupportPage",
    "source": "seniormindcare/MildCognitiveImpairmentSupportPage.jsx",
    "text": "Mild Cognitive Impairment (MCI) Treatment for Seniors in India Helping Seniors Understand Mild Cognitive Impairment, Early Cognitive Changes & Brain Health Many older adults notice small changes in their memory or thinking as they age. They may occasionally forget appointments, take longer to remember names or find it more difficult to learn new information. While some of these changes are a normal part of ageing, others may be greater than expected and deserve closer attention. One condition that often raises questions among seniors and their families is Mild Cognitive Impairment (MCI). MCI refers to noticeable changes in memory or thinking that are greater than normal age-related changes but are not severe enough to significantly interfere with everyday independence. People with MCI are usually able to manage their daily activities, take care of themselves and continue living independently. However, they or their family members may notice that remembering information, concentrating or solving problems has become more difficult than before. It is important to understand that Mild Cognitive Impairment is not the same as dementia. Some individuals with MCI remain stable for many years, some improve when underlying reversible causes are identified and managed, while others may later develop dementia. Because outcomes vary, regular medical evaluation and follow-up are important. Many people become anxious after hearing the term MCI because they assume it always leads to Alzheimer's disease. In reality, not everyone with Mild Cognitive Impairment develops dementia, and early recognition allows families to better understand the situation and plan appropriate care. At Manovaidya, we understand that healthy brain ageing depends on many interconnected factors, including cognitive health, emotional wellbeing, sleep, nutrition, physical activity and lifestyle habits. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help seniors and families better understand Mild Cognitive Impairment, brain health and the factors that support healthy cognitive ageing. At Manovaidya, Mil"
  },
  {
    "title": "RelatedSeniorMindCarePages",
    "source": "seniormindcare/RelatedSeniorMindCarePages.jsx",
    "text": "normalizePath(href) !== currentPath); return ( Memory Loss & Forgetfulness Treatment Memory changes, forgetfulness and healthy brain ageing support. Confusion & Disorientation Treatment Support for confusion, orientation and cognitive wellbeing. Early cognitive changes, MCI awareness and family guidance. Dementia awareness, Alzheimer's care and caregiver support. Low mood, emotional wellbeing and healthy ageing support. Insomnia, poor sleep, daytime fatigue and brain health support."
  },
  {
    "title": "SeniorConditionsSection",
    "source": "seniormindcare/SeniorConditionsSection.jsx",
    "text": "Specialized support for a wide range of age-related cognitive and emotional challenges. Difficulty remembering recent events, names, or important information. Feeling confused about time, place or familiar surroundings. Early stage cognitive changes that may affect daily functioning. Comprehensive care for Alzheimer's and other types of dementia. Trouble focusing, completing tasks or following conversations. Anxiety, mood swings, agitation or withdrawal in seniors. Poor sleep quality, restless nights and daytime tiredness."
  },
  {
    "title": "SeniorDepressionSupportPage",
    "source": "seniormindcare/SeniorDepressionSupportPage.jsx",
    "text": "Depression Treatment for Seniors in India Supporting Emotional Wellbeing, Hope & Healthy Ageing for Older Adults Growing older often brings significant life changes. Retirement, the loss of loved ones, changing family roles, chronic health conditions and reduced independence can all affect emotional wellbeing. While it is natural to experience sadness during difficult times, persistent low mood, loss of interest or feelings of hopelessness should never be considered a normal part of ageing. Depression is a common mental health condition that can affect older adults, but it is often overlooked because its symptoms may be mistaken for ageing or physical illness. Many seniors do not openly talk about how they feel, while family members may assume that changes in mood or behaviour are simply a consequence of growing older. Depression can affect much more than emotions. It may influence sleep, appetite, memory, concentration, motivation and physical health. Some seniors gradually withdraw from social activities, lose interest in hobbies they once enjoyed or stop participating in family life. These changes can reduce quality of life and make everyday activities more difficult. The good news is that depression is a recognised medical condition, not a sign of personal weakness. With proper assessment, appropriate treatment and family support, many older adults can experience meaningful improvement in their emotional wellbeing and daily functioning. At Manovaidya, we understand that emotional health is closely connected with brain health, physical wellbeing, sleep, lifestyle and social relationships. Our approach focuses on understanding the whole person rather than only the symptoms of depression. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help seniors and families better understand depression, emotional wellbeing and healthy ageing through personalised guidance and holistic care. At Manovaidya, Depression Treatment Focuses On ✔ Depression in Seniors ✔ Persistent Sadness ✔ Loss of Interest in Daily Activities ✔ Low Motivation ✔ Loneliness & Social Isolation ✔ Em"
  },
  {
    "title": "SeniorFamilySupportSection",
    "source": "seniormindcare/SeniorFamilySupportSection.jsx",
    "text": "A structured and compassionate approach that focuses on brain health, emotional wellbeing and independent living. Detailed evaluation of memory, cognition, mood, lifestyle and medical history. Individualized plan with therapies, brain exercises, nutrition and lifestyle guidance. Non-invasive therapies, cognitive training, relaxation techniques and Ayurvedic support. Regular tracking of memory, cognition, mood and daily independence. Guiding and supporting families with education, counselling and care strategies."
  },
  {
    "title": "SeniorMentalHealthCareIndiaPage",
    "source": "seniormindcare/SeniorMentalHealthCareIndiaPage.jsx",
    "text": "Senior Mental Health Care & Healthy Ageing Treatment in India Supporting Emotional Wellbeing, Brain Health and Healthy Ageing for Older Adults Growing older brings valuable life experiences, wisdom and new perspectives, but it can also introduce physical, emotional and cognitive changes that influence overall wellbeing. Retirement, changes in health, loss of loved ones, reduced social interaction and increasing dependence on others may affect emotional health and quality of life during later years. Mental health is an important part of healthy ageing. It influences memory, emotional wellbeing, decision-making, relationships, independence and the ability to participate in everyday life. While some changes are a natural part of ageing, persistent emotional or cognitive concerns should never be considered a normal or unavoidable part of growing older. Many older adults experience concerns such as memory changes, confusion, depression, anxiety, loneliness, sleep problems or difficulty adapting to life transitions. Family members may also notice behavioural changes, forgetfulness or reduced confidence that gradually affect everyday activities. At Manovaidya, we believe that senior mental health is influenced by multiple interconnected factors including brain health, nutrition, sleep, physical wellbeing, emotional resilience, social engagement and lifestyle habits. Rather than focusing only on symptoms, we aim to understand the complete wellbeing of every older adult. Led by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that combines comprehensive assessment, personalised guidance and holistic support to help older adults maintain emotional wellbeing, cognitive health and independence. Senior Mental Health Areas We Support Growing older presents different emotional and cognitive challenges for every individual. Our Senior Mental Health Care includes support for: Memory Loss & Cognitive Changes Understanding age-related memory concerns and changes in thinking or attention. Learn More → Memory Loss Treatment Dementia Care Support for individuals and families living"
  },
  {
    "title": "SeniorMindCareHeroSection",
    "source": "seniormindcare/SeniorMindCareHeroSection.jsx",
    "text": "Supporting Better Memory, Mental Clarity &amp; Dignified Independent Living. Compassionate care for memory loss, forgetfulness, confusion and other age-related cognitive challenges. Evidence-informed. Holistic. Family-Centred."
  },
  {
    "title": "SeniorSleepDisordersSupportPage",
    "source": "seniormindcare/SeniorSleepDisordersSupportPage.jsx",
    "text": "Sleep Disorders in Seniors Treatment in India Helping Seniors Achieve Better Sleep, Better Brain Health & Healthier Ageing A good night's sleep plays an essential role in maintaining physical health, emotional wellbeing and healthy brain function throughout life. However, many older adults experience changes in their sleep patterns as they age. Some find it difficult to fall asleep, while others wake up repeatedly during the night or wake much earlier than intended without feeling rested. Although certain sleep changes may occur naturally with ageing, persistent sleep problems should not be considered a normal part of growing older. Poor sleep may affect memory, concentration, mood, energy levels, balance and overall quality of life. Long-term sleep difficulties may also influence emotional wellbeing and cognitive health, making everyday activities more challenging. Sleep disturbances in seniors can occur for many different reasons. Medical conditions, chronic pain, medications, anxiety, depression, lifestyle habits and neurological disorders such as dementia may all contribute to disrupted sleep. Because the causes vary from person to person, understanding the underlying reason is an important first step. Families often notice that an older loved one struggles to sleep at night, sleeps excessively during the day or experiences increasing confusion after poor sleep. These changes can affect both the senior and the caregiver, making proper assessment and guidance valuable. At Manovaidya, we believe that healthy sleep is an important part of healthy ageing. Supporting better sleep involves understanding the relationship between brain health, emotional wellbeing, physical health and daily routines rather than focusing only on the symptom of insomnia. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help seniors and families better understand sleep disorders, healthy sleep habits and the factors that influence healthy cognitive ageing. At Manovaidya, Sleep Disorder Treatment Focuses On ✔ Insomnia in Seniors ✔ Difficulty Falling Asleep ✔ Frequent Night-Time Awakeni"
  },
  {
    "title": "SeniorTrustFaqSection",
    "source": "seniormindcare/SeniorTrustFaqSection.jsx",
    "text": "Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health Specialist in India and the Founder of Manovaidya. He is the creator of the Neuro-Ayurveda Development System, a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support mental health across all age groups. Concerned About Your Loved One&apos;s Book a confidential memory assessment and let our experts guide you with the right care and support. Home-Based & Online Support Available What are early signs of memory loss in seniors? Early signs may include repeating questions, forgetting recent conversations, losing familiar items, confusion about time or place, and difficulty managing usual daily tasks. It depends on the cause; some memory problems linked with sleep, mood, nutrition, thyroid issues or medicines may improve when identified and treated, while progressive conditions need ongoing support. What is the difference between dementia and Alzheimer's? Dementia is a general term for symptoms affecting memory and thinking, while Alzheimer's disease is one of the most common conditions that can cause dementia. How can I help my loved one with memory problems? Offer calm communication, predictable routines, written reminders and practical safety support, and arrange a professional assessment if changes are persistent or worsening. Is forgetfulness a normal part of ageing? Occasional lapses can occur with ageing, but repeated or worsening memory problems that disrupt daily life, judgment or familiar activities should be professionally assessed. How can I improve my memory naturally? Regular sleep, suitable physical activity, social engagement, balanced nutrition, mental stimulation and good control of health conditions can support overall brain health. Are online therapy sessions effective for seniors? Online sessions can support follow-ups, emotional wellbeing, lifestyle planning and caregiver guidance, although some memory concerns may also require an in-person medical assessment. What therapies are used for dementia care? Care may include cognitive stimulation, structured routines, emotional support, lifestyle guidance, caregiver educat"
  },
  {
    "title": "SuccessStoryBottomBar",
    "source": "successStory/SuccessStoryBottomBar.jsx",
    "text": "Disclaimer: Individual experiences differ, and outcomes vary from person to person. Results shown are specific to the individuals and may not guarantee similar outcomes for everyone."
  },
  {
    "title": "successStoryData",
    "source": "successStory/successStoryData.js",
    "text": "Mere child ko hyperactivity ki problem thi aur wo ek jagah zyada der shant nahi baith pata tha. Is wajah se use kahin bhi le jana kaafi mushkil ho jata tha aur behaviour ko manage karna bhi challenging lagta tha. Phir hum Manovaidya mein consult karne gaye jahan hume proper guidance aur support mila. Dheere-dheere treatment ke baad behaviour mein positive changes dekhne ko mile aur ab mera child pehle se kaafi calm aur manageable hai. Hi my self shashank nd my daughter name is naysha.....my daughter doesn't respond her name ..cnt speek word...I don't know how can we do . After we join manovadya last 6 mnth before...nd now we are happy ..my daughter response ...but nt proper ..but yes it's do..my experience with manovadya. Is good..after phase 1 medicine..now we start phase 2. ...so thanx dr ankush garg sir.. My 17 year old daughter was suffering from anxiety, mood swings and overthinking. As parents, hum kafi worried the ki ye problem kya hai. We tried many things for it at home and hamne doctor ko bhi consult kiya, but kuch khas benefit nahi hua. After starting treatment from Manovaidya, hamne kaafi positive changes dekhe and ab vo kafi calm feel krti hai. So thanks to the Manovaidya team who helped us a lot. Mere bete Shahzain ko ADHD and autism diagnose hua tha. 2 months me hi bahut improvement hua hai... staff and doctor are very supportive. Doctor bhut ache h sab ache se smjhate h 2 mhine se ab mera bacha pehle se theek hone laga h hmari bat sun ne laga h ceeje smjhane laga h. Dr. Ankush Garg completely changed my perspective on mental health. My son struggled with ADHD for years. After 3 months at Manovaidya we saw remarkable improvement in his focus and behaviour. I had been suffering from severe anxiety and sleep disorders for years. At Manovaidya, Dr. Garg identified the root cause and within 2 months my sleep improved drastically. Best decision I made for my daughter who is autistic. The team crafted a customized plan combining diet changes, therapies and Ayurvedic medicines. We have seen visible improvement. I had severe OCD and depression and had almost given up hope. Dr. Garg listened patiently, explained everything clearly, and the treatment helped"
  },
  {
    "title": "SuccessStoryHero",
    "source": "successStory/SuccessStoryHero.jsx",
    "text": "Every individual and every family has a unique journey. Explore real experiences shared by children, teenagers, adults, women and seniors who found understanding, guidance and support at Manovaidya. We are grateful for the clarity, support and care we received. Child Development & Mental Wellness Centre"
  },
  {
    "title": "SuccessStoryReviewsTestimonials",
    "source": "successStory/SuccessStoryReviewsTestimonials.jsx",
    "text": "{ if (direction === \"next\") { return (currentPage + 1) % reviewPages; } return (currentPage - 1 + reviewPages) % reviewPages; }); }; return ("
  },
  {
    "title": "SuccessStoryVideos",
    "source": "successStory/SuccessStoryVideos.jsx",
    "text": "{ if (!carouselRef.current) return; const card = carouselRef.current.querySelector(\"article\"); const gap = 24; const scrollAmount = card ? card.offsetWidth + gap : carouselRef.current.clientWidth; carouselRef.current.scrollBy({ left: direction === \"next\" ? scrollAmount : -scrollAmount, behavior: \"smooth\", }); }; return ( Watch this {story.type.toLowerCase()} from {story.location}."
  },
  {
    "title": "ExamPerformancePressureIndiaPage",
    "source": "teenmental/ExamPerformancePressureIndiaPage.jsx",
    "text": "({ \"@type\": \"Question\", \"name\": faq.question.replace(/^\\d+\\.\\s*/, ''), \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": faq.answer } })) }; function SidebarCard({ children, className = \"\" }) { return ( ); } function RelatedPagesCard() { return ( Teen Depression & Low Mood Treatment Teen Confidence & Emotional Wellbeing { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Exam & Performance Pressure Support Exam & Performance Pressure Treatment in India Helping Teenagers Build Confidence, Emotional Resilience & Healthy Academic Wellbeing. Learn about exam anxiety, academic pressure, fear of failure, and family guidance at Manovaidya. Helping Teenagers Build Confidence, Emotional Resilience & Healthy Academic Wellbeing Academic expectations have become a significant part of modern teenage life. School examinations, competitive environments, future career planning and performance expectations can create considerable emotional pressure for many teenagers. While a certain level of pressure may motivate learning and growth, excessive academic stress can affect emotional wellbeing, confidence, sleep, concentration and overall mental wellness. Many parents notice that their teenager becomes anxious before exams, worries excessively about results, loses confidence or struggles to manage academic expectations. Understanding these challenges early often helps families provide more effective support. At Manovaidya, we understand that exam pressure is not simply about studies. Emotional wellbeing, confidence, lifestyle habits, sleep patterns, family expectations and stress management skills often work together to influence academic performance and overall wellbeing. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand exam-related stress while creating a roadmap for emotional resilience and long-term growth. At Manovaidya, Exam & Performance Pressure Treatment Focuses"
  },
  {
    "title": "ParentTeenRelationshipSupportPage",
    "source": "teenmental/ParentTeenRelationshipSupportPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer, }, })), }; const breadcrumbSchema = { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", itemListElement: [ { \"@type\": \"ListItem\", position: 1, name: \"Home\", item: \"/\" }, { \"@type\": \"ListItem\", position: 2, name: \"Teen Mental Wellness\", item: \"/teen-mental-wellness-india/\" }, { \"@type\": \"ListItem\", position: 3, name: \"Parent-Teen Relationship Treatment\", item: \"/parent-teen-relationship-support/\" }, ], }; const medicalWebPageSchema = { \"@context\": \"https://schema.org\", \"@type\": \"MedicalWebPage\", name: \"Parent-Teen Relationship Treatment in India\", description: \"Looking for Parent-Teen Relationship Treatment in India? Learn about teenage behaviour, communication challenges, trust building and family guidance through the Neuro-Ayurveda approach at Manovaidya.\", url: \"/parent-teen-relationship-support/\", about: [\"Parent Teen Relationship Support\", \"Teen Behaviour Support\", \"Family Relationship Support\"], }; const physicianSchema = { \"@context\": \"https://schema.org\", \"@type\": \"Physician\", name: \"Dr. Ankush Garg\", medicalSpecialty: [\"Mental Health\", \"Child Development\", \"Teen Mental Wellness\"], worksFor: { \"@type\": \"MedicalOrganization\", name: \"Manovaidya\" }, areaServed: [\"Delhi\", \"Noida\", \"Gurgaon\", \"Faridabad\", \"India\"], }; function SidebarCard({ children, className = \"\", id }) { return ( ); } function RelatedPagesCard() { return ( Teen Depression & Low Mood Treatment Exam & Performance Pressure Support Teen Confidence & Emotional Wellbeing ); } const subheadingLines = new Set([ \"Communication Challenges\", \"Behavioural Challenges\", \"Emotional Challenges\", \"Lifestyle Challenges\", \"Identity Development\", \"Emotional Changes\", \"Academic Pressure\", \"Peer Relationships\", \"Screen & Social Media Use\", \"Fear of Judgement\", \"Communication Patterns\", \"Emotional Wellbeing\", \"Confidence & Self-Esteem\", \"Behaviour\", \"Academic Performance\", \"Social Relationships\", \"Long-Term Development\", \"Brain Nourishment System\", \"Gut Response System\", \"Neural Network System\", \"Sensory Integration System\", \"Behaviour Guidance System\", \"Listen Before Giving Advic"
  },
  {
    "title": "RelatedTeenMentalWellnessPages",
    "source": "teenmental/RelatedTeenMentalWellnessPages.jsx",
    "text": "normalizePath(href) !== currentPath); return ( Stress, worry, overthinking and daily pressure support. Teen Depression & Low Mood Treatment Low mood, sadness, loneliness and emotional heaviness. Exam & Performance Pressure Support Exam stress, academic pressure and fear of failure. Teen Confidence & Emotional Wellbeing Self-belief, self-esteem and emotional resilience. Screen use, gaming habits and digital wellbeing. Communication, trust and emotional connection at home."
  },
  {
    "title": "TeenConfidenceEmotionalWellbeingPage",
    "source": "teenmental/TeenConfidenceEmotionalWellbeingPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer, }, })), }; function SidebarCard({ children, className = \"\" }) { return ( ); } function Paragraph({ children }) { return ; } function RelatedPagesCard() { return ( Teen Depression & Low Mood Treatment Exam & Performance Pressure Support { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Teen Confidence & Emotional Wellbeing Support Teen Confidence & Emotional Wellbeing Support in India Helping Teenagers Build Confidence, Emotional Resilience, Self-Belief & Healthy Emotional Wellbeing. Helping Teenagers Build Confidence, Emotional Resilience, Self-Belief & Healthy Emotional Wellbeing Confidence plays an important role in how teenagers think, learn, communicate and respond to challenges. During adolescence, teenagers are constantly developing their identity, exploring new experiences and learning how they fit into the world around them. Many teenagers experience self-doubt, fear of judgement, low confidence or uncertainty about their abilities. These challenges can influence emotional wellbeing, academic growth, relationships and overall development. Parents often notice that their teenager has become hesitant, withdrawn or overly critical of themselves. Some teenagers avoid opportunities because they fear making mistakes, while others struggle with confidence despite having strong abilities and potential. At Manovaidya, we understand that confidence is not simply about speaking loudly or appearing outgoing. True confidence is closely connected to emotional wellbeing, self-belief, resilience and the ability to handle life's challenges in a balanced way. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand emotional wellbeing while supporting confidence, resilience and long-term growth. At Manovaidya, Teen Confidence & Emotional Well"
  },
  {
    "title": "TeenDepressionLowMoodIndiaPage",
    "source": "teenmental/TeenDepressionLowMoodIndiaPage.jsx",
    "text": "({ \"@type\": \"Question\", \"name\": faq.question.replace(/^\\d+\\.\\s*/, ''), \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": faq.answer } })) }; function SidebarCard({ children, className = \"\" }) { return ( ); } function RelatedPagesCard() { return ( Teen Confidence & Emotional Wellbeing { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Teen Depression & Low Mood Treatment Teen Depression & Low Mood Treatment in India Helping Teenagers Build Emotional Strength, Confidence & Better Emotional Wellbeing. Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya. Helping Teenagers Build Emotional Strength, Confidence & Better Emotional Wellbeing Teenage years can be emotionally challenging. While occasional sadness, disappointment and mood changes are a normal part of growing up, some teenagers may experience persistent low mood, emotional withdrawal, loss of motivation and difficulties enjoying everyday activities. Many parents notice that their teenager seems distant, unhappy, irritable or no longer interested in things they once enjoyed. These changes can be confusing and concerning, especially when parents are unsure whether they are part of normal adolescence or signs of a deeper emotional challenge. At Manovaidya, we understand that emotional wellbeing is influenced by multiple factors including confidence, relationships, lifestyle habits, academic experiences, social pressures and overall mental wellness. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand emotional wellbeing while creating a roadmap for long-term growth and resilience. At Manovaidya, Teen Depression & Low Mood Treatment Focuses On: Understanding Teen Depression & Low Mood Feeling sad from time to time is a natural part of life. Teenagers may feel disappointed after a poor exam result, friendship conflict or personal setback. In most situations, the"
  },
  {
    "title": "TeenMentalHealthCareIndiaPage",
    "source": "teenmental/TeenMentalHealthCareIndiaPage.jsx",
    "text": "Teen Mental Health Care & Emotional Wellbeing Support in India Helping Teenagers Build Emotional Strength, Confidence and Healthy Mental Wellbeing Adolescence is one of the most important stages of human development. Between childhood and adulthood, teenagers experience rapid physical, emotional, social and psychological changes that shape their personality, confidence and future wellbeing. During these years, teenagers begin developing their own identity, becoming more independent, managing friendships, facing academic expectations and learning to cope with new responsibilities. While these changes are a natural part of growing up, they can also become emotionally overwhelming for some teenagers. Many parents notice changes such as mood swings, increased irritability, anxiety, withdrawal from family, reduced confidence, difficulty concentrating, excessive screen time, behavioural changes or declining academic performance. Sometimes these changes are temporary, while in other situations they may indicate that additional emotional support or a professional assessment would be beneficial. Mental health during adolescence is about much more than the absence of illness. It includes emotional wellbeing, resilience, healthy relationships, confidence, decision-making, emotional regulation and the ability to cope with everyday challenges. At Manovaidya, we believe that teenage mental health is influenced by multiple interconnected factors including brain development, hormones, sleep, nutrition, family relationships, social experiences, lifestyle habits and emotional resilience. Rather than focusing only on symptoms, we aim to understand the complete emotional profile of every teenager. Led by Dr. Ankush Garg, Mental Health & Child Development Specialist, Manovaidya follows the Neuro-Ayurveda Development System to provide structured assessments, personalised guidance and holistic support that helps teenagers and their families navigate this important stage of life with greater understanding and confidence. Teen Mental Health Areas We Support Teenagers may experience challenges in different areas of emotional and psychological wellbeing. Our Teen Mental Health Care includ"
  },
  {
    "title": "TeenMentalSupportAreasSection",
    "source": "teenmental/TeenMentalSupportAreasSection.jsx",
    "text": "Specialized support for common emotional and behavioural challenges in teenagers. Helping teens manage stress, worry, overthinking and daily pressure effectively. Support for low mood, sadness, loss of interest, loneliness and emotional heaviness. Guidance to handle exam stress, performance pressure and academic expectations. Building self-belief, self-worth and a positive body and self-image. Screen Addiction & Digital Wellbeing Support for excessive screen use, gaming addiction and digital distraction. Improving communication, understanding and emotional connection at home."
  },
  {
    "title": "TeenMentalSupportProcessSection",
    "source": "teenmental/TeenMentalSupportProcessSection.jsx",
    "text": "A structured process to understand, support and guide teenagers towards a healthier and balanced life. Understanding emotional, behavioural, academic and lifestyle factors. Customised plan based on your teen's unique needs and challenges. Evidence-informed strategies to build emotional balance and resilience. Regular tracking to measure improvement and adapt support. Guiding parents to build stronger understanding and lasting support."
  },
  {
    "title": "TeenMentalTrustFaqSection",
    "source": "teenmental/TeenMentalTrustFaqSection.jsx",
    "text": "Dr. Ankush Garg is a leading Autism, ADHD, Child Development &amp; Mental Health Specialist in India and the Founder of Manovaidya. He created the Neuro-Ayurveda Development System, integrating modern neuroscience with Ayurveda to support children&apos;s and teens&apos; mental wellness. Book a structured assessment and personalized guidance session with the Manovaidya team. Holistic & Long-Term Wellness Focus What are the signs of stress or anxiety in teenagers? Common signs include constant worry, overthinking, irritability, sleep changes, physical complaints, avoidance, difficulty concentrating and feeling overwhelmed by everyday situations. When should I worry about my teen's mental health? Seek professional guidance when changes in mood, sleep, behaviour, school performance, relationships or daily functioning continue, intensify or begin affecting your teen's wellbeing. What causes depression in teenagers? Teen depression can involve a combination of biological, emotional, family, social, academic and lifestyle factors. A structured assessment helps understand each teenager's individual situation. How does exam pressure affect teenagers? Exam pressure can contribute to anxiety, disturbed sleep, low confidence, irritability, avoidance, physical symptoms and difficulty concentrating or performing at a teen's usual level. How can I build my teen's confidence? Listen without judgment, recognise effort, set realistic expectations, encourage healthy routines and give your teen safe opportunities to make decisions, learn and express themselves. What is screen addiction in teenagers? Problematic screen use occurs when gaming, social media or device use becomes difficult to control and begins disrupting sleep, studies, relationships, mood or daily responsibilities. The impact matters as much as the number of hours. Screen use needs attention when it consistently displaces sleep, physical activity, schoolwork, family interaction or offline interests. How does Manovaidya assess teen mental wellness? The assessment explores emotional, behavioural, academic, family, sleep, lifestyle and screen-use patterns to understand concerns and create a personalised support plan. Ho"
  },
  {
    "title": "TeenMentalWellnessHeroSection",
    "source": "teenmental/TeenMentalWellnessHeroSection.jsx",
    "text": "Supporting Teen Stress, Anxiety, Depression, Exam Pressure, Screen Addiction and Emotional Wellbeing Across India. Compassionate care to help teenagers build emotional balance, confidence and resilience for a brighter future."
  },
  {
    "title": "TeenScreenAddictionSupportIndiaPage",
    "source": "teenmental/TeenScreenAddictionSupportIndiaPage.jsx",
    "text": "({ \"@type\": \"Question\", name: faq.question.replace(/^\\d+\\.\\s*/, \"\"), acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer, }, })), }; function SidebarCard({ children, className = \"\" }) { return ( ); } function Paragraph({ children }) { return ; } function RelatedPagesCard() { return ( Teen Depression & Low Mood Treatment Exam & Performance Pressure Support Teen Confidence & Emotional Wellbeing { const section = document.getElementById(id); if (section && section.offsetTop { window.removeEventListener(\"scroll\", updateActiveSection); window.removeEventListener(\"resize\", updateActiveSection); }; }, []); return ( Screen Addiction & Digital Wellbeing Teen Screen Addiction Treatment in India Helping Teenagers Develop Healthier Digital Habits, Better Focus & Emotional Wellbeing. Helping Teenagers Develop Healthier Digital Habits, Better Focus & Emotional Wellbeing Technology has become an important part of modern life. Smartphones, social media, online gaming, video content and digital learning platforms offer many benefits. However, excessive screen use may sometimes affect emotional wellbeing, concentration, sleep, behaviour and daily functioning. Many parents notice that their teenager spends long hours on mobile phones, social media, gaming platforms or digital entertainment. They may struggle to disconnect from screens, become irritable when devices are removed or lose interest in offline activities. At Manovaidya, we understand that screen dependency is not simply about technology use. Emotional wellbeing, lifestyle habits, social experiences, confidence and daily routines often influence how teenagers interact with digital devices. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps families better understand screen-related challenges while supporting healthier habits, emotional wellbeing and balanced development. At Manovaidya, Teen Screen Addiction Treatment Focuses On: Understanding Screen Addiction in Teenagers Technology is now deeply integrated into education, communication and entertainment. While screen use is not automatically harmful, difficulti"
  },
  {
    "title": "TeenStressAnxietyIndiaPage",
    "source": "teenmental/TeenStressAnxietyIndiaPage.jsx",
    "text": "Introduction Helping Teenagers Become Stronger and More Confident The teenage years bring many emotional, social, and academic challenges. Many teenagers experience stress, anxiety, low confidence, and emotional ups and downs while managing school, relationships, and future goals. At Manovaidya, Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist, follows a structured Neuro-Ayurveda approach to help teenagers and families better understand emotional wellbeing. The focus is on personalized guidance, emotional resilience, and long-term mental wellness. At Manovaidya, Teen Stress & Anxiety Treatment Focuses On: * Emotional Wellbeing & Resilience * Stress & Anxiety Support * Confidence & Self-Esteem * Academic Stress Management * Healthy Lifestyle Habits * Parent-Teen Guidance How Do Teens Experience Stress and Anxiety? Teenage years bring many changes, including physical growth, emotional development, social pressure, academic responsibilities, and future decisions. These changes can sometimes lead to stress, anxiety, low confidence, and emotional challenges. Many parents notice changes like withdrawal, mood swings, irritation, or increased stress in their teenagers. Understanding these changes and providing the right support can help improve a teenager’s mental health and emotional wellbeing. Stress and anxiety can affect teenagers in different ways. -Some may become quiet and avoid talking to others, while some may feel angry, emotional, or easily irritated. -Others may worry a lot about school, friendships, appearance, or their future. -Some may also struggle with confidence, motivation, or making decisions. Every teenager is different, so it is important to understand the reasons behind their feelings and behaviour, not just what we see on the outside. At Manovaidya, we help families understand emotional wellbeing, confidence, behaviour, and lifestyle factors that can affect a teenager’s mental wellness. What are the Common Signs of Teen Stress & Anxiety? Teen stress and anxiety can affect emotions, behaviour, studies, and physical health. Common signs include: * Excessive worry or overthinking * Mood swings and irritability * Low confid"
  },
  {
    "title": "RelatedWomenHealthCarePages",
    "source": "womenhealthcare/RelatedWomenHealthCarePages.jsx",
    "text": "normalizePath(href) !== currentPath); return ( Stress, overthinking, anxiety and mind-body balance support. Persistent sadness, low mood and emotional wellbeing support. Mood swings, irritability, PMS and PMDD emotional support. Self-worth, confidence and body image support for women. Relationship & Emotional Challenges Relationship stress, loneliness and emotional connection support. Pregnancy anxiety, postpartum emotions and motherhood support. Burnout, career stress, work-life balance and life changes."
  },
  {
    "title": "WomenDepressionLowMoodSupportPage",
    "source": "womenhealthcare/WomenDepressionLowMoodSupportPage.jsx",
    "text": "Depression & Low Mood Treatment for Women in India Supporting Women's Emotional Wellbeing, Hope & Mental Health Through Every Stage of Life Every woman experiences emotional ups and downs at different stages of life. Stressful events, relationship difficulties, work pressure, family responsibilities, hormonal changes or major life transitions may sometimes leave a woman feeling emotionally low. While temporary sadness is a normal part of life, persistent low mood, loss of interest or feelings of hopelessness should not be ignored. Depression is one of the most common mental health conditions affecting women. It is much more than simply feeling sad or having a difficult day. Depression can affect emotions, thoughts, physical health, relationships and the ability to enjoy everyday life. Many women continue managing work, family and responsibilities while silently struggling with emotional distress, making it difficult for others to recognise what they are going through. Some women describe feeling emotionally numb, constantly tired or disconnected from activities they once enjoyed. Others may notice changes in sleep, appetite, concentration or motivation. Over time, these symptoms can affect confidence, productivity, relationships and overall quality of life. Women may experience depression during different stages of life. Hormonal changes associated with menstruation, pregnancy, the postpartum period, perimenopause and menopause may influence emotional wellbeing in some individuals. Life experiences such as relationship challenges, infertility, caregiving responsibilities, financial stress or the loss of a loved one may also contribute to emotional difficulties. The encouraging news is that depression is a recognised medical condition, and many women improve with timely assessment, appropriate treatment and ongoing support. Seeking help is not a sign of weakness—it is an important step towards understanding your emotional health and moving towards recovery. At Manovaidya, we believe that emotional wellbeing is closely connected with brain health, sleep, physical wellbeing, lifestyle habits and healthy emotional balance. Rather than focusing only on symptoms, we a"
  },
  {
    "title": "WomenHealthCareConcernsSection",
    "source": "womenhealthcare/WomenHealthCareConcernsSection.jsx",
    "text": "Specialized support for a wide range of women&apos;s mental health concerns. Overthinking, worry, panic attacks and daily stress management. Persistent sadness, loss of interest, emptiness and hopelessness. Mood swings, irritability, fatigue and emotional changes. Low self-worth, self-doubt, negative self-image and confidence issues. Relationship & Emotional Challenges Relationship stress, loneliness, breakups and family dynamics. Perinatal anxiety, postnatal depression and motherhood adjustment. Burnout, career stress, work-life balance and major life changes."
  },
  {
    "title": "WomenHealthCareHeroSection",
    "source": "womenhealthcare/WomenHealthCareHeroSection.jsx",
    "text": "Because Every Woman Deserves to Feel Compassionate care for stress, anxiety, mood changes, hormonal challenges, relationships and more. Evidence-informed. Holistic. Confidential."
  },
  {
    "title": "WomenHealthCareSupportSection",
    "source": "womenhealthcare/WomenHealthCareSupportSection.jsx",
    "text": "A personalized, compassionate and holistic approach to your mental well-being. In-depth understanding of your emotional, hormonal & lifestyle factors. Tailored plan based on your unique needs and life challenges. Science-based therapies like CBT, ACT, Mindfulness and Ayurvedic support. Regular follow-ups to track improvement and adjust the plan. Building resilience, self-love and emotional balance for a fulfilling life."
  },
  {
    "title": "WomenHealthCareTrustSection",
    "source": "womenhealthcare/WomenHealthCareTrustSection.jsx",
    "text": "Dr. Ankush Garg is a leading Autism, ADHD, Child Development & Mental Health Specialist in India and the Founder of Manovaidya. He is the creator of the Neuro-Ayurveda Development System, a structured approach that integrates modern neuroscience with the timeless wisdom of Ayurveda to support mental wellness for all age groups. Take the first step towards emotional wellness and a happier, healthier you. What are the signs of stress or anxiety in women? Manovaidya highlights constant stress or overthinking, mood swings, sadness, low energy, sleep or appetite changes, difficulty concentrating, withdrawal and unexplained physical symptoms as common signs. When should I seek help for my mental health? If symptoms continue, feel overwhelming or interfere with relationships, work, sleep or daily life, a structured Manovaidya consultation can help identify concerns and guide an appropriate care plan. How do I know if I have PMS or PMDD? Manovaidya supports hormonal concerns including PMS and PMDD through an in-depth assessment of symptom timing, mood changes, fatigue, irritability, lifestyle and individual history. Is online counselling effective for women? Yes, many concerns can be assessed and followed up online through structured history-taking, personalized care plans, lifestyle guidance and regular progress reviews. How can I manage mood swings naturally? Manovaidya creates personalized plans using your symptoms, history, lifestyle, digestion, sleep and emotional patterns, with regular follow-ups to track progress and adjust strategies. Can therapy help with relationship issues? Yes, Manovaidya's supportive counselling and evidence-informed therapies can help with relationship stress, communication patterns, loneliness, breakups and family dynamics. How long does it take to see improvement? It depends on the concern, duration, severity and consistency with the plan; some people notice early improvements, while deeper concerns need regular follow-up and sustained care. What therapies do you offer for women? Depending on individual needs, care may include CBT, ACT, mindfulness, supportive counselling, Ayurvedic support, lifestyle guidance and Manovaidya's integrated"
  },
  {
    "title": "WomenHormonalPmsPmddSupportPage",
    "source": "womenhealthcare/WomenHormonalPmsPmddSupportPage.jsx",
    "text": "Hormonal Mood Changes, PMS & PMDD Treatment for Women in India Understanding Hormonal Changes, Emotional Wellbeing & Mental Health Throughout Every Stage of a Woman's Life Hormonal changes are a natural part of a woman's life. From puberty and menstrual cycles to pregnancy, the postpartum period, perimenopause and menopause, hormones influence many aspects of physical and emotional wellbeing. Many women notice temporary mood changes before their menstrual periods. Some may feel slightly more emotional, tired or irritable for a few days. However, for others, these emotional changes become much more intense and begin affecting relationships, work, daily activities and overall quality of life. Conditions such as Premenstrual Syndrome (PMS) and Premenstrual Dysphoric Disorder (PMDD) can cause significant emotional and physical symptoms before menstruation. Women may experience mood swings, irritability, anxiety, sadness, anger, crying spells, fatigue, poor concentration or changes in sleep and appetite. These symptoms usually improve after menstruation begins but can return with each menstrual cycle. Because many women are told that these experiences are \"just hormones,\" they may delay seeking professional guidance. While hormonal changes can influence emotional wellbeing, severe or persistent symptoms should not be ignored. Understanding what is happening is the first step towards finding appropriate support. At Manovaidya, we believe that women's emotional wellbeing is influenced by the interaction between brain health, hormonal changes, sleep, lifestyle, nutrition and overall physical health. Rather than focusing only on monthly symptoms, we aim to understand the complete picture behind each woman's experience. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help women better understand hormonal mood changes, PMS, PMDD and emotional wellbeing through structured assessment and personalised holistic care. At Manovaidya, Hormonal Mental Health Treatment Focuses On ✔ Hormonal Mood Changes ✔ Premenstrual Syndrome (PMS) ✔ Premenstrual Dysphoric Disorder (PMDD) ✔ Moo"
  },
  {
    "title": "WomenLifeTransitionsCareerPressureSupportPage",
    "source": "womenhealthcare/WomenLifeTransitionsCareerPressureSupportPage.jsx",
    "text": "Life Transitions & Career Pressure Support for Women in India Navigating Major Life Changes, Career Challenges & Emotional Wellbeing Life is constantly changing, and every new stage brings new opportunities as well as new emotional challenges. For many women, major life transitions such as starting a career, getting married, becoming a mother, returning to work after maternity leave, changing careers, caring for ageing parents or approaching menopause can feel emotionally overwhelming. Career responsibilities, family expectations, financial responsibilities and personal goals often exist together. Trying to balance all these roles may create emotional pressure that affects confidence, relationships, sleep and overall mental wellbeing. Feeling uncertain during periods of change is completely normal. However, when stress, anxiety, emotional exhaustion or self-doubt persist for weeks or begin affecting work, family life or daily functioning, they deserve attention and professional support. Many women feel pressure to \"manage everything perfectly.\" They may hesitate to ask for help because they fear appearing weak or incapable. Over time, this constant pressure may contribute to emotional burnout, reduced confidence, difficulty making decisions or feeling disconnected from personal goals. Life transitions occur throughout adulthood and affect every woman differently. What feels manageable for one person may feel overwhelming for another. Understanding these emotional responses without self-judgment is an important step towards maintaining mental wellbeing. At Manovaidya, we believe that emotional resilience during life transitions is influenced by brain health, lifestyle habits, sleep quality, emotional support, stress management and overall physical wellbeing. Rather than focusing only on external challenges, we aim to understand the complete emotional picture behind each woman's experience. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help women better understand life transitions, career pressure and emotional wellbeing through structured assessment and pers"
  },
  {
    "title": "WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage",
    "source": "womenhealthcare/WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage.jsx",
    "text": "Pregnancy, Postpartum & Motherhood Mental Health Support for Women in India Supporting Emotional Wellbeing Through Pregnancy, Childbirth & Motherhood Pregnancy and motherhood are often described as some of life's happiest experiences. While they can bring joy, hope and excitement, they also involve significant emotional, physical and hormonal changes that affect every woman differently. During pregnancy, many women experience changing emotions as they adjust to new responsibilities, body changes and concerns about their baby's health and future. After childbirth, caring for a newborn, recovering physically and adapting to a completely new routine may feel overwhelming for some mothers. Feeling emotional, tired or worried at times is common. However, when sadness, anxiety, excessive fear, emotional exhaustion or persistent low mood begin affecting daily life, relationships or bonding with the baby, these experiences deserve attention and professional support. Pregnancy-related emotional challenges can occur at any stage, including pregnancy, immediately after childbirth or during the first year of motherhood. Every woman's experience is unique, and there is no \"right\" way to feel during this journey. Many mothers hesitate to talk about emotional struggles because they believe they should always feel happy after becoming a parent. In reality, emotional wellbeing is an important part of both maternal and family health. At Manovaidya, we believe that maternal emotional wellbeing is influenced by brain health, hormonal changes, sleep quality, nutrition, physical recovery, lifestyle habits and emotional support. Rather than focusing only on symptoms, we aim to understand the complete emotional journey of every mother. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help women better understand pregnancy, postpartum and motherhood-related emotional wellbeing through structured assessment and personalised holistic care. At Manovaidya, Pregnancy & Motherhood Mental Health Treatment Focuses On ✔ Pregnancy Anxiety ✔ Pregnancy Emotional Changes ✔ Emotional Wellbeing Duri"
  },
  {
    "title": "WomenRelationshipEmotionalWellbeingSupportPage",
    "source": "womenhealthcare/WomenRelationshipEmotionalWellbeingSupportPage.jsx",
    "text": "Relationship Challenges & Emotional Wellbeing Support for Women in India Understanding Relationship Stress, Emotional Imbalance & Mental Wellbeing at Every Stage of Life Relationships are an important part of emotional wellbeing. Healthy relationships often provide love, trust, companionship and emotional support. However, relationship difficulties can also become one of the biggest sources of emotional stress in a woman's life. Every relationship experiences disagreements and challenges. Occasional conflict is a normal part of human relationships. However, when emotional distress, communication problems, repeated arguments, lack of trust or emotional disconnection become persistent, they may begin affecting mental health, self-esteem and overall quality of life. Many women silently carry emotional burdens while continuing to manage work, family responsibilities and caregiving roles. They may feel emotionally exhausted, misunderstood, lonely or constantly worried about their relationships without openly discussing these concerns. Relationship challenges may occur in different situations, including marriage, romantic relationships, family relationships, friendships or workplace interactions. Emotional stress may also develop during major life changes such as pregnancy, parenthood, relocation, financial difficulties or caring for family members. For some women, ongoing relationship stress may contribute to anxiety, low mood, sleep disturbances, emotional exhaustion or reduced confidence. Recognising these emotional patterns early can help women better understand their mental wellbeing and seek appropriate support. At Manovaidya, we believe that emotional wellbeing is closely connected with brain health, healthy relationships, lifestyle habits, sleep and overall emotional balance. Rather than focusing only on relationship problems, we aim to understand the complete emotional picture behind each woman's experience. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help women better understand relationship challenges, emotional imbalance and mental wellbeing through"
  },
  {
    "title": "WomenSelfEsteemBodyImageSupportPage",
    "source": "womenhealthcare/WomenSelfEsteemBodyImageSupportPage.jsx",
    "text": "Self-Esteem & Body Image Support for Women in India Building Self-Worth, Body Confidence & Emotional Wellbeing at Every Stage of Life Every woman deserves to feel comfortable in her own skin and confident in who she is. However, many women silently struggle with self-doubt, low self-esteem or dissatisfaction with their appearance. Constant comparisons, unrealistic beauty standards, social media, relationship experiences and personal life challenges can gradually affect how a woman thinks and feels about herself. Occasionally feeling self-conscious is common. However, when negative thoughts about appearance or self-worth become persistent and begin affecting confidence, relationships, work or daily life, they may have a significant impact on emotional wellbeing. Body image is not simply about physical appearance. It reflects how a woman perceives, thinks and feels about her body. Some women may feel dissatisfied with their weight, skin, hair or other physical features, while others struggle with feeling \"not good enough\" despite receiving reassurance from others. Low self-esteem often extends beyond appearance. It may affect confidence, decision-making, communication, career growth, relationships and the ability to enjoy everyday life. Women with low self-esteem may constantly seek validation, avoid new opportunities or feel overly critical of themselves. Women may experience changes in self-esteem during different stages of life, including adolescence, pregnancy, the postpartum period, career transitions, relationship changes, perimenopause and menopause. These experiences may influence how a woman views herself, but persistent emotional distress should never be ignored. The encouraging news is that self-esteem and body image can improve with greater self-awareness, healthy coping strategies and appropriate professional support when needed. At Manovaidya, we believe that confidence begins with emotional wellbeing. Rather than focusing only on appearance, we aim to understand the emotional, psychological and lifestyle factors that influence how women feel about themselves. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India"
  },
  {
    "title": "WomenStressManagementMindBodyBalancePage",
    "source": "womenhealthcare/WomenStressManagementMindBodyBalancePage.jsx",
    "text": "Stress Management & Mind-Body Balance for Women in India ⭐⭐⭐⭐⭐ (Recommended) Ye Google par zyada rank karega. Stress Management & Mind-Body Balance Treatment for Women in India Understanding Stress, Tension & the Mind-Body Connection for Better Emotional Wellbeing Stress is a natural part of life. Every woman experiences stress at different stages, whether because of work responsibilities, family commitments, financial concerns, relationships, health issues or major life changes. In small amounts, stress can help us respond to challenges. However, when stress becomes frequent or long-lasting, it may begin affecting both emotional and physical wellbeing. Many women carry multiple responsibilities at the same time—balancing career, family, parenting, caregiving and personal expectations. Over time, this constant pressure may create emotional tension that affects sleep, concentration, energy levels and overall quality of life. Stress does not only affect the mind. It can also influence the body. Some women notice headaches, muscle tension, digestive discomfort, fatigue or sleep disturbances during stressful periods. Others may experience anxiety, irritability, emotional exhaustion or difficulty relaxing. This close relationship between emotional wellbeing and physical health is often referred to as the mind-body connection. Emotional stress can influence physical health, and physical health problems may also affect emotional wellbeing. Feeling stressed occasionally is normal. However, if stress becomes persistent, overwhelming or begins interfering with work, relationships, sleep or daily functioning, it may be time to seek professional support. At Manovaidya, we believe that emotional wellbeing develops through the balance of brain health, physical health, healthy lifestyle habits, quality sleep and emotional resilience. Rather than focusing only on stress symptoms, we aim to understand the underlying factors contributing to emotional and physical imbalance. Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows the Neuro-Ayurveda Development System to help women better understand stress, tension and the min"
  }
];

const resultSummary = {
  rating: "4.9/5 average Google rating",
  families: "1000+ happy families",
  videos: "200+ video testimonials",
  autism: "Autism care stories mention noticeable progress in communication and daily activities.",
};

const bookingSteps = [
  {
    key: "name",
    prompt: "Please share your full name.",
  },
  {
    key: "phone",
    prompt: "Please share your mobile number.",
  },
  {
    key: "location",
    prompt: "Please share your city or location.",
  },
  {
    key: "consultationMode",
    prompt: "How would you like to consult?",
    inputType: "select",
    options: [
      { label: "Online", value: "online" },
      { label: "Clinic Visit", value: "clinic" },
    ],
  },
  {
    key: "preferredDate",
    prompt: "Please choose your preferred date.",
    inputType: "date",
  },
  {
    key: "preferredTime",
    prompt: "Please choose a preferred time.",
    inputType: "select",
    options: consultationTimes.map((time) => ({ label: time, value: time })),
  },
];

const isBookingIntent = (value) =>
  /book|appointment|schedule|call\s?back/i.test(value) ||
  /\b(consultation|consult|doctor)\b/i.test(value);

const isDirectBookingCommand = (value) => {
  const cleanValue = normalizeQuestion(value);
  const infoQuestionTerms = [
    "can",
    "kya",
    "kaise",
    "how",
    "fee",
    "fees",
    "cost",
    "price",
    "charge",
    "online",
    "clinic",
    "timing",
    "available",
    "possible",
    "ho sakta",
    "hota",
  ];

  if (cleanValue === "book consultation") return true;
  if (hasAnyTerm(cleanValue, infoQuestionTerms) || /[?ØŸ]/.test(value)) return false;

  return hasAnyTerm(cleanValue, [
    "book appointment",
    "appointment book",
    "book my appointment",
    "book slot",
    "slot book",
    "schedule appointment",
    "consultation book",
    "consult book",
    "mujhe appointment chahiye",
    "appointment chahiye",
    "consultation chahiye",
  ]);
};

const isAgentIntent = (value) => {
  const cleanValue = normalizeQuestion(value);

  const directTerms = [
    "agent",
    "human",
    "live chat",
    "livechat",
    "representative",
    "insaan",
    "customer support",
    "support team",
    "live support",
    "helpline",
    "real person",
  ];
  if (hasAnyTerm(cleanValue, directTerms)) return true;

  const connectVerbs = ["connect", "talk", "baat", "bat", "chat", "speak"];
  const targetWords = ["agent", "team", "support", "someone", "admin", "human", "person", "staff", "insaan"];
  return connectVerbs.some((verb) =>
    targetWords.some((target) => new RegExp(`\\b${verb}\\b[\\s\\S]{0,15}\\b${target}\\b`).test(cleanValue))
  );
};

const agentLeadSteps = [
  { key: "name", prompt: "Before connecting you to an agent, please share your full name." },
  { key: "phone", prompt: "Please share your mobile number." }
];

const normalizeQuestion = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097f]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasAnyTerm = (value, terms) => terms.some((term) => value.includes(term));

const isBookingCancelIntent = (value) => {
  const cleanValue = normalizeQuestion(value);
  const mentionsConsultation = hasAnyTerm(cleanValue, ["consultation", "consult", "appointment", "book", "booking"]);
  const negativeIntent = hasAnyTerm(cleanValue, [
    "nahi",
    "nhi",
    "nahin",
    "na chahiye",
    "nahi chahiye",
    "nhi chahiye",
    "nahin chahiye",
    "abhi nahi",
    "abhi nhi",
    "cancel",
    "stop",
    "mat karo",
    "no",
  ]);
  return negativeIntent && (mentionsConsultation || hasAnyTerm(cleanValue, ["nahi chahiye", "nhi chahiye", "nahin chahiye", "cancel", "stop"]));
};

const isFillerReply = (value) =>
  ["ok", "okay", "okk", "haan", "han", "yes", "hmm", "hm", "theek hai", "thik hai"].includes(normalizeQuestion(value));

const isLikelyVisitorQuestion = (value) => {
  const cleanValue = normalizeQuestion(value);
  return (
    /[?؟]/.test(value) ||
    hasAnyTerm(cleanValue, [
      "how",
      "why",
      "what",
      "when",
      "where",
      "kaise",
      "kese",
      "kyu",
      "kyo",
      "kya",
      "kab",
      "kaha",
      "kaun",
      "kon",
      "fee",
      "fees",
      "pay",
      "payment",
      "cash",
      "upi",
      "card",
      "slot",
      "confirm",
      "aake",
      "aaunga",
      "aaungi",
      "price",
      "cost",
      "charge",
      "doctor",
      "dr",
      "medicine",
      "dawa",
      "dawai",
      "result",
      "review",
      "rating",
      "online",
      "clinic",
      "query",
      "doubt",
      "problem",
      "कैसे",
      "क्यों",
      "क्या",
      "कब",
      "कहाँ",
      "कौन",
    ])
  );
};

const looksLikeBookingSideQuery = (value, stepKey) => {
  const cleanValue = normalizeQuestion(value);
  const wordCount = cleanValue.split(" ").filter(Boolean).length;
  if (isLikelyVisitorQuestion(value)) return true;

  const sideQueryTerms = [
    "main",
    "mujhe",
    "mera",
    "meri",
    "pay",
    "payment",
    "cash",
    "upi",
    "card",
    "clinic",
    "online",
    "aake",
    "aaunga",
    "aaungi",
    "slot",
    "confirm",
    "query",
    "doubt",
    "problem",
    "chahiye",
  ];

  if (hasAnyTerm(cleanValue, sideQueryTerms)) return true;
  return stepKey === "name" && wordCount > 4;
};

const getLocalBookingSideAnswer = (question, currentPrompt) => {
  const value = normalizeQuestion(question);

  if (hasAnyTerm(value, ["pay", "payment", "cash", "upi", "card"])) {
    return [
      "Haan, payment ke liye team aapko slot confirmation ke time guide kar degi. Slot payment ke baad confirm hota hai.",
      currentPrompt,
    ].join("\n\n");
  }

  if (hasAnyTerm(value, ["clinic", "aake", "aaunga", "aaungi", "visit"])) {
    return [
      "Haan, clinic visit bhi available hai. Noida OPD Tuesday, Thursday aur Saturday ko hoti hai.",
      currentPrompt,
    ].join("\n\n");
  }

  return "";
};

const isResultIntent = (value) =>
  hasAnyTerm(value, [
    "result",
    "review",
    "rating",
    "feedback",
    "success",
    "testimonial",
    "kaisa",
    "kaisi",
    "कैसा",
    "कैसी",
    "परिणाम",
    "रिजल्ट",
  ]);

const isMedicineIntent = (value) =>
  hasAnyTerm(value, [
    "medicine",
    "medicines",
    "medication",
    "dawa",
    "dawai",
    "दवा",
    "दवाई",
    "औषधि",
    "ayurvedic medicine",
    "cost of medicine",
    "medicine cost",
  ]);

const isOnlineConsultationQuestion = (value) => {
  const cleanValue = normalizeQuestion(value);
  return (
    hasAnyTerm(cleanValue, ["online", "video", "phone call", "call consultation", "remote"]) &&
    hasAnyTerm(cleanValue, ["consultation", "consult", "appointment", "book", "doctor"])
  );
};

const isFeeIntent = (value) =>
  hasAnyTerm(value, ["fee", "fees", "charge", "price", "cost", "kitna", "paisa", "payment", "pay"]);

const isDoctorIntent = (value) =>
  hasAnyTerm(value, ["doctor", "dr", "ankush", "naam", "name", "kaun", "kon"]);

const isContactIntent = (value) =>
  hasAnyTerm(value, ["phone", "number", "mobile", "call", "contact", "whatsapp", "helpline"]);

const isOpdIntent = (value) =>
  hasAnyTerm(value, ["opd", "clinic", "visit", "noida", "timing", "time", "day", "days", "aake", "aaunga", "aaungi"]);

const getBookingQuestionAnswer = (question, currentPrompt) => {
  const value = normalizeQuestion(question);
  const isQuestionLike =
    hasAnyTerm(value, ["how", "kaise", "kese", "kya", "kaun", "kon", "book", "booking", "appointment", "consultation", "consult", "name", "naam", "doctor", "dr", "fee", "fees", "pay", "payment", "cash", "upi", "card", "slot", "confirm", "charge", "price", "cost", "medicine", "medicines", "dawa", "dawai", "phone", "number", "call", "rating", "review", "result", "online", "clinic", "aake", "aaunga", "aaungi", "कैसे", "कौन", "क्या", "नाम", "डॉक्टर", "दवा", "दवाई"]) ||
    /[?؟]/.test(question);

  if (!isQuestionLike) return "";

  if (isBookingIntent(value) || hasAnyTerm(value, ["how", "kaise", "kese", "कैसे"])) {
    return [
      `Haan, yahin se book ho jayegi. Fee Rs. ${consultationFee} hai; main bas details step by step le lunga.`,
      currentPrompt,
    ].join("\n\n");
  }

  if (hasAnyTerm(value, ["doctor", "dr", "name", "naam", "kaun", "kon", "डॉक्टर", "नाम", "कौन"])) {
    return `Doctor name: Dr. Ankush Garg.\n\n${currentPrompt}`;
  }

  if (hasAnyTerm(value, ["rating", "review", "google", "result", "feedback"])) {
    return `${reviewNote}\n\nManovaidya confidence ke saath bolta hai ki consistent guidance aur follow-up ke baad progress/result dikhna start ho jata hai. Exact outcome person-to-person vary karta hai.\n\n${currentPrompt}`;
  }

  if (hasAnyTerm(value, ["phone", "number", "call", "mobile", "contact"])) {
    return `You can call Manovaidya at ${clinicPhone}.\n\n${currentPrompt}`;
  }

  const localSideAnswer = getLocalBookingSideAnswer(question, currentPrompt);
  if (localSideAnswer) return localSideAnswer;

  if (hasAnyTerm(value, ["online", "clinic", "mode", "visit"])) {
    return `Consultation online aur clinic visit, dono mode me available hai. Noida OPD Tuesday, Thursday and Saturday ko hoti hai, aur slots limited rehte hain.\n\n${currentPrompt}`;
  }

  if (isMedicineIntent(value)) {
    return `${medicineNote}\n\n${currentPrompt}`;
  }

  if (hasAnyTerm(value, ["fee", "fees", "charge", "price", "cost"])) {
    return `Consultation fee Rs. ${consultationFee} hai. Slot limited rehte hain, isliye payment karke apna slot confirm karein.\n\n${currentPrompt}`;
  }

  return "";
};

const getExactLocalAnswer = (question) => {
  const value = normalizeQuestion(question);
  const asksAutism = hasAnyTerm(value, ["autism", "asd", "spectrum", "ऑटिज्म"]);
  const asksGoogle = hasAnyTerm(value, ["google", "search", "rating", "review", "गूगल"]);
  const asksResult = isResultIntent(value);

  if (isMedicineIntent(value)) {
    return medicineNote;
  }

  if (asksAutism) {
    return [
      "Manovaidya me autism support ka focus sirf label par nahi hota, balki child ke speech, eye contact, behaviour, sensory issues, sleep, routine aur family concerns ko detail me samajhne par hota hai.",
      "Autism-related concerns me delayed speech, name response kam hona, eye contact kam hona, social interaction difficulty, repetitive behaviour, sensory sensitivity, hyperactivity ya learning/attention issues dikh sakte hain.",
      "Consultation me Dr. Ankush Garg child ki history aur current symptoms ko assess karke personalised guidance, parent support aur Neuro-Ayurveda Development System ke according next steps batate hain.",
      "Agar aapko child ke development, speech, behaviour ya social communication ko lekar doubt hai, to structured consultation best next step rahega.",
    ].join("\n\n");
  }

  if (hasAnyTerm(value, ["service", "services", "treatment", "support", "kis cheez", "kya kya", "help"])) {
    return [
      "Manovaidya child, teen, adult, women, senior aur mind-body wellbeing concerns me support provide karta hai.",
      "Main autism, ADHD, speech delay, anxiety, depression, stress, sleep, memory, women hormonal/mood concerns, PCOD-related stress, IBS/acidity/migraine/fatigue jaise topics par website ke according guide kar sakta hu.",
      "Aap apna symptom ya concern likh dijiye, main uske according simple answer aur relevant next step bata dunga.",
    ].join("\n\n");
  }

  if (isOnlineConsultationQuestion(value)) {
    return [
      onlineConsultationNote,
      "Online consultation me team pehle concern/history samajhti hai, phir personalised guidance aur next steps batati hai.",
    ].join("\n\n");
  }

  if (isFeeIntent(value) && !isMedicineIntent(value)) {
    return [
      `Consultation fee Rs. ${consultationFee} hai.`,
      "Slot limited rehte hain, aur payment ke baad slot confirm hota hai. Medicine cost fixed nahi hoti; wo assessment ke baad symptom profile ke according confirm hoti hai.",
    ].join("\n\n");
  }

  if (isDoctorIntent(value)) {
    return "Manovaidya me consultation Dr. Ankush Garg ke saath hoti hai. Aap online consultation ya Noida clinic visit ke liye slot book kar sakte hain.";
  }

  if (isContactIntent(value)) {
    return `Aap Manovaidya team ko ${clinicPhone} par call kar sakte hain. Chat me "Connect with agent" choose karke support team se bhi connect ho sakte hain.`;
  }

  if (isOpdIntent(value)) {
    return opdNote;
  }

  if (asksResult && asksAutism) {
    return [
      "Haan, Manovaidya confidence ke saath bolta hai ki consistent assessment, guidance, follow-up aur family involvement ke baad progress/result dikhna start ho jata hai. Autism Care Journey me communication aur daily activities me noticeable progress mention hai.",
      `Available trust signals: ${resultSummary.rating}, ${resultSummary.families}, aur ${resultSummary.videos}.`,
      "Exact result child ki age, symptoms, assessment findings, routine, family follow-up aur therapy consistency par depend karta hai. Fixed timeline ya same result sabke liye promise nahi hota; best next step structured consultation hai.",
    ].join("\n\n");
  }

  if (asksGoogle || asksResult) {
    return [
      `Manovaidya ke visible trust signals: ${resultSummary.rating}, ${resultSummary.families}, aur ${resultSummary.videos}.`,
      "Haan, Manovaidya confidence ke saath bolta hai ki consistent guidance aur follow-up ke baad positive progress/result dikhna start ho jata hai. Reviews/success stories positive experience dikhate hain, but exact medical or developmental outcomes person-to-person vary karte hain.",
    ].join("\n\n");
  }

  return "";
};

const knowledgeBase = [
  {
    title: "Manovaidya Website Overview",
    terms: ["manovaidya", "website", "services", "help", "support", "treatment", "care", "condition", "symptom"],
    text: "Manovaidya provides structured support for child development, autism, ADHD, speech delay, teen mental wellness, adult mental health, women's emotional wellbeing, senior mind and memory care, and mind-body stress-related concerns. The website focuses on assessment, personalised guidance, Neuro-Ayurveda Development System, family involvement, online consultation, clinic OPD and success stories. The assistant should behave like a helpful clinic guide: answer the exact question first, then suggest the next useful step."
  },
  {
    title: "Results, Reviews and Success Stories",
    terms: ["result", "review", "rating", "success", "testimonial", "google", "kaisa"],
    text: `Manovaidya highlights ${resultSummary.rating}, ${resultSummary.families}, and ${resultSummary.videos}. Autism care stories mention noticeable progress in communication and daily activities. Manovaidya confidently shares that with consistent assessment, guidance, follow-up and family involvement, progress or results often start becoming visible. Results can vary by child, condition, age, assessment findings, home routine, consistency and follow-up, so no fixed timeline or identical result is promised for everyone.`
  },
  {
    title: "Autism Treatment",
    terms: ["autism", "asd", "spectrum", "eye", "speech", "social", "repetitive"],
    text: "Manovaidya provides autism support for children and families through structured developmental understanding, assessment, personalised guidance, parent support and the Neuro-Ayurveda Development System. Autism-related concerns may include delayed speech, reduced eye contact, difficulty with social interaction, repetitive behaviours, sensory sensitivities, behaviour concerns, attention or learning differences. The focus is not on labels alone, but on understanding the child's communication, behaviour, sensory profile, development, sleep, lifestyle and family needs. Families can book a consultation when they notice developmental concerns, speech delay, social communication difficulty, behaviour changes or uncertainty about next steps."
  },
  {
    title: "ADHD and Child Development",
    terms: ["adhd", "attention", "hyperactive", "impulsive", "learning", "child", "development"],
    text: "Manovaidya supports ADHD, learning, attention and child development concerns through structured assessment and personalised guidance. Concerns may include poor focus, hyperactivity, impulsive behaviour, difficulty waiting, academic pressure, emotional outbursts, learning challenges, speech delay or behavioural concerns. Care focuses on understanding the child's development, behaviour, emotional wellbeing, routines, family environment and support needs."
  },
  {
    title: "Neuro-Ayurveda Development System",
    terms: ["neuro", "ayurveda", "system", "approach", "holistic", "brain", "gut"],
    text: "The Neuro-Ayurveda Development System at Manovaidya looks at wellbeing through connected pillars such as brain nourishment, gut response, neural networks, sensory integration and behaviour guidance. The approach considers emotional wellbeing, sleep, lifestyle, nutrition, digestion, sensory needs, behaviour and family support instead of focusing only on symptoms."
  },
  {
    title: "Consultation and Online Support",
    terms: ["consultation", "book", "online", "appointment", "clinic", "assessment", "fee", "slot", "opd"],
    text: `Manovaidya offers structured consultations and guidance for children, teenagers, adults, women and seniors. ${onlineConsultationNote} OPD is available in Noida only on Tuesday, Thursday and Saturday. Slots are limited, so visitors should book their slot and complete payment to confirm it. Online consultations include concern/history understanding, personalised guidance and follow-up planning. A consultation can help families understand the concern, decide the right support direction and create a practical care plan.`
  },
  {
    title: "How to Book or Connect with Team",
    terms: ["book consultation", "connect agent", "agent", "human", "team", "support team", "lead", "form", "online consultation"],
    text: "The chat has quick actions for Book consultation and Connect with agent. Book consultation collects name, phone, location, consultation mode, preferred date and preferred time. Connect with agent collects name and phone, then opens live support chat. The quick question 'Can I book an online consultation?' should stay available and should answer clearly that online consultation is available."
  },
  {
    title: "Customized Medicine Guidance",
    terms: ["medicine", "medicines", "medication", "dawa", "dawai", "cost", "price", "symptom", "disease"],
    text: "Medicine cost is not fixed. Every child/person, disease or condition, and symptom profile is different. Manovaidya provides customized medicine based on the child/person, disease or condition, and each symptom profile. Exact medicine cost is confirmed after assessment because it depends on the personalised medicine plan."
  },
  {
    title: "Manovaidya Service Pages and References",
    terms: [
      "child", "autism", "adhd", "speech", "learning", "behaviour", "development",
      "teen", "stress", "anxiety", "depression", "exam", "confidence", "screen", "parent",
      "adult", "burnout", "sleep", "self esteem", "relationship", "addiction",
      "senior", "memory", "confusion", "mci", "dementia", "alzheimer", "women",
      "pcos", "pms", "pmdd", "postpartum", "pregnancy", "migraine", "ibs",
      "fatigue", "digestive", "acidity", "headache", "thyroid", "blood pressure"
    ],
    text: `When a visitor asks about any Manovaidya service, condition, disease, symptoms, or related page, explain the concern briefly, mention Manovaidya support, and include the relevant page reference from this list when it matches:\n${serviceReferenceText}`
  },
  {
    title: "Teen, Adult, Women and Senior Mental Health",
    terms: ["teen", "adult", "women", "senior", "anxiety", "depression", "stress", "sleep", "memory"],
    text: "Manovaidya supports mental wellbeing across life stages. Teen support includes stress, anxiety, depression, screen addiction, confidence and parent-teen relationship concerns. Adult support includes anxiety, depression, stress, burnout, sleep issues, self-esteem, relationships and unhealthy habits. Women's care includes stress, hormonal concerns, pregnancy and postpartum wellbeing, body image and relationship support. Senior care includes memory concerns, confusion, dementia and Alzheimer's support, depression and sleep issues."
  },
  {
    title: "Mind Body Wellbeing",
    terms: ["mind", "body", "stress", "tension", "fatigue", "sleep", "digestion"],
    text: "Manovaidya explains mind-body wellbeing as the connection between emotional stress, physical symptoms, sleep, digestion, fatigue, tension and lifestyle patterns. Support focuses on understanding the whole person and improving emotional balance, routines, sleep quality, brain health and long-term wellbeing."
  },
  {
    title: "Safety and Emergency Guidance",
    terms: ["emergency", "suicide", "self harm", "chest pain", "seizure", "urgent", "danger", "severe", "help now"],
    text: "For emergencies, severe symptoms, self-harm thoughts, suicidal thoughts, sudden weakness, severe chest pain, breathing difficulty, seizures, loss of consciousness or other urgent warning signs, the visitor should seek immediate medical help or emergency services. The website assistant should not delay emergency care."
  }
];

const stripHtml = (value) =>
  String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

let blogKnowledgeCache = null;

const fetchBlogKnowledge = async () => {
  if (blogKnowledgeCache) return blogKnowledgeCache;

  try {
    const response = await api.get("/blogs");
    const blogs = Array.isArray(response.data?.data) ? response.data.data : [];

    blogKnowledgeCache = blogs
      .filter((blog) => !blog.status || blog.status === "published")
      .slice(0, 30)
      .map((blog) => ({
        title: blog.title || "Manovaidya Blog",
        slug: blog.slug,
        text: stripHtml(
          [
            blog.title,
            blog.category,
            blog.focusKeyword,
            blog.shortDescription,
            blog.metaDescription,
            blog.content,
            ...(Array.isArray(blog.faq)
              ? blog.faq.map((item) => `${item.question || ""} ${item.answer || ""}`)
              : []),
          ].filter(Boolean).join(" ")
        ).slice(0, 2200),
      }))
      .filter((blog) => blog.text.length > 80);
  } catch {
    blogKnowledgeCache = [];
  }

  return blogKnowledgeCache;
};

const getTokens = (question) =>
  String(question || "")
    .toLowerCase()
    .split(/[^a-z0-9\u0900-\u097f]+/i)
    .filter((token) => token.length > 2);

const scoreText = (text, tokens) => {
  const lowerText = text.toLowerCase();
  return tokens.reduce((score, token) => {
    const matches = lowerText.split(token).length - 1;
    return score + matches * (token.length > 5 ? 2 : 1);
  }, 0);
};

const getRelevantChunks = async (question) => {
  const tokens = getTokens(question);
  const rankedKnowledge = knowledgeBase
    .map((item) => ({
      ...item,
      score:
        scoreText(`${item.title} ${item.terms.join(" ")} ${item.text}`, tokens) +
        item.terms.filter((term) => tokens.includes(term)).length * 5,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const selectedKnowledge = rankedKnowledge.length
    ? rankedKnowledge
    : knowledgeBase.slice(0, 4);

  const blogs = await fetchBlogKnowledge();
  const rankedBlogs = blogs
    .map((blog) => ({
      ...blog,
      score: scoreText(`${blog.title} ${blog.text}`, tokens),
    }))
    .filter((blog) => blog.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const rankedWebsitePages = websitePageKnowledge
    .map((page) => ({
      ...page,
      score: scoreText(`${page.title} ${page.source} ${page.text}`, tokens),
    }))
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return [
    selectedKnowledge
      .map((item) => `${item.title}: ${item.text}`)
      .join("\n\n---\n\n"),
    rankedWebsitePages.length
      ? rankedWebsitePages
        .map((page) => `Website page: ${page.title}\nSource: ${page.source}\n${page.text}`)
        .join("\n\n---\n\n")
      : "",
    rankedBlogs.length
      ? rankedBlogs
        .map((blog) => `Related blog: ${blog.title}\n${blog.text}`)
        .join("\n\n---\n\n")
      : "",
  ].filter(Boolean).join("\n\n---\n\n")
    .slice(0, 6500);
};

async function askWebsiteAi(question) {
  const context = await getRelevantChunks(question);
  const response = await api.post("/ai-chat", {
    question,
    context: [
      "Website-first rule: analyse the supplied Manovaidya website context from all matching pages first, then use general AI reasoning only to explain it clearly. Do not invent services, fees, clinic days, guarantees, doctor names, or medical claims that are not supported by context or fixed rules.",
      "Tone rule: reply like a helpful human clinic assistant. Use simple Hinglish when the visitor writes Hinglish/Hindi, and simple English when the visitor writes English. Be warm, direct, and easy to understand.",
      "Answer quality rule: directly answer the visitor's exact question first, then add the most relevant website-backed details, practical next step, and relevant page reference if available. Keep replies concise but complete; avoid dumping unrelated services.",
      "Result rule: if the visitor asks about result, reviews, rating, Google result or success, do not explain the whole service first. Mention rating/success signals only if present in context. Say Manovaidya confidently shares that with consistent assessment, guidance, follow-up and family involvement, progress or results often start becoming visible, while exact outcomes vary person to person and no fixed timeline or identical result is promised for everyone.",
      `Booking rule: consultation fee is Rs. ${consultationFee}. Noida OPD is available only on Tuesday, Thursday and Saturday. Slots are limited, so visitors should book their slot and complete payment to confirm it.`,
      `Online consultation rule: ${onlineConsultationNote}`,
      `Medicine rule: ${medicineNote}`,
      "Flow rule: do not remove or rename the Book consultation, Connect with agent, or Can I book an online consultation quick actions. If the visitor wants booking or a human agent, guide them to those actions.",
      "Reference rule: if the visitor asks about a listed service, disease, condition, symptoms, or page, include the most relevant Manovaidya page reference from the supplied context.",
      context,
    ].join("\n\n"),
  }, { timeout: 5500 });
  const answer = response.data?.data?.answer?.trim();

  if (!answer) {
    throw new Error("AI did not return an answer.");
  }

  return answer;
}

const getFastFallbackAnswer = (question) => {
  const exactAnswer = getExactLocalAnswer(question);
  if (exactAnswer) return exactAnswer;

  if (/autism|asd|spectrum/i.test(question)) {
    return "Haan, Manovaidya autism-related concerns me structured assessment aur personalised guidance provide karta hai.\n\nCommon concerns: delayed speech, reduced eye contact, social communication difficulty, repetitive behaviour, sensory sensitivity, attention ya behaviour challenges.\n\nCare me child ke communication, behaviour, sensory needs, sleep, routine aur family concerns ko samjha jata hai.\n\nBest next step: consultation book karke child ka current concern detail me discuss karein.";
  }

  if (/online|consultation|appointment|book/i.test(question)) {
    return onlineConsultationNote;
  }

  return "Main help kar sakta hu, lekin is question ke liye mujhe exact concern thoda aur clear chahiye.\n\nAap condition/symptom ka naam likh sakte hain, ya Book consultation / Connect with agent choose kar sakte hain for personalised guidance.";
};

const formatAssistantText = (text) =>
  String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/â€¢/g, "•")
    .replace(/\s+\*\s+/g, "\n• ")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

function AssistantMessage({ text }) {
  const cleanText = formatAssistantText(text);
  const blocks = cleanText.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="grid gap-2">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter(Boolean);
        const bulletLines = lines.filter((line) => line.trim().startsWith("• "));

        if (bulletLines.length >= Math.max(2, lines.length - 1)) {
          return (
            <ul key={`${block}-${index}`} className="list-disc space-y-1 pl-4">
              {bulletLines.map((line) => (
                <li key={line}>{line.replace(/^•\s*/, "")}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block}-${index}`} className="leading-6">
            {block.replace(/^•\s*/, "")}
          </p>
        );
      })}
    </div>
  );
}

function ConsultationCta() {
  return (
    <div className="mt-3 rounded-xl border border-[#8B43BA]/14 bg-[#8B43BA]/5 p-3">
      <p className="text-[12px] font-black uppercase tracking-[0.06em] text-[#8B43BA]">
        Manovaidya
      </p>
      <p className="mt-1 text-[13px] font-bold leading-5 text-[#312448]">
        Need personalised guidance? Book a consultation or call our team.
      </p>
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f4d73]">
        Rs. {consultationFee} consultation fee. OPD days: Tue, Thu, Sat. Limited slots.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-lg bg-[#8B43BA] px-3 py-2 text-[12px] font-black text-white transition hover:bg-[#7434a0]"
          onClick={() => window.dispatchEvent(new CustomEvent("manovaidya:start-chat-booking"))}
        >
          Book Consultation
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#8B43BA]/25 bg-white px-3 py-2 text-center text-[12px] font-black text-[#8B43BA] transition hover:bg-[#f7effc]"
          onClick={() => window.dispatchEvent(new CustomEvent("manovaidya:start-agent-chat"))}
        >
          Connect with Agent
        </button>
        <a
          href={`tel:+91${clinicPhone}`}
          className="rounded-lg border border-[#8B43BA]/25 bg-white px-3 py-2 text-center text-[12px] font-black text-[#8B43BA] transition hover:bg-[#f7effc] sm:col-span-2"
        >
          Call {clinicPhone}
        </a>
      </div>
    </div>
  );
}

function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState(null);
  const [bookingData, setBookingData] = useState({});
  const [agentLeadStep, setAgentLeadStep] = useState(null);
  const [agentLeadData, setAgentLeadData] = useState({});
  const [agentSession, setAgentSession] = useState(null);
  const [agentMode, setAgentMode] = useState(false);
  const chatScrollRef = useRef(null);
  const chatEndRef = useRef(null);
  const seenLiveMessageIds = useRef(new Set());

  const canSend = useMemo(
    () => {
      if (isLoading) return false;
      const step = bookingStep !== null ? bookingSteps[bookingStep] : null;
      if (step?.inputType === "date") return Boolean(question);
      if (step?.inputType === "select") return Boolean(question);
      return question.trim().length > 1;
    },
    [bookingStep, isLoading, question]
  );

  const openChat = () => {
    setIsOpen((open) => {
      const nextOpen = !open;
      if (nextOpen) fetchBlogKnowledge();
      return nextOpen;
    });
  };

  const resetChat = () => {
    setMessages([greeting]);
    setQuestion("");
    setIsLoading(false);
    setBookingStep(null);
    setBookingData({});
    setAgentLeadStep(null);
    setAgentLeadData({});
    setAgentMode(false);
    setAgentSession(null);
    seenLiveMessageIds.current = new Set();
  };

  const scrollChatToBottom = () => {
    window.setTimeout(() => {
      const container = chatScrollRef.current;
      if (!container) return;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  const pushAssistantMessage = (text) => {
    setMessages((current) => [...current, { role: "assistant", text }]);
    scrollChatToBottom();
  };

  const appendLiveMessages = (session) => {
    const nextMessages = (session?.messages || []).filter((message) => {
      if (!message._id || seenLiveMessageIds.current.has(message._id)) return false;
      seenLiveMessageIds.current.add(message._id);
      return message.sender === "agent" || message.sender === "system";
    });

    if (!nextMessages.length) return;

    setMessages((current) => [
      ...current,
      ...nextMessages.map((message) => ({
        role: message.sender === "agent" ? "agent" : "assistant",
        text: message.text,
      })),
    ]);
    scrollChatToBottom();
  };

  const startAgentChat = async (initialText = "I want to connect with an agent.", visitorName, visitorPhone, appendUserMessage = true) => {
    setIsOpen(true);
    setQuestion("");
    setBookingStep(null);
    setBookingData({});
    setAgentLeadStep(null);
    setAgentLeadData({});
    setAgentMode(true);
    setIsLoading(true);
    if (appendUserMessage) {
      setMessages((current) => [...current, { role: "user", text: initialText }]);
    }

    try {
      const response = await api.post("/live-chat/sessions", { message: initialText, visitorName, visitorPhone });
      const session = response.data?.data;
      if (!session?.sessionKey) throw new Error("Unable to start live chat.");

      (session.messages || []).forEach((message) => {
        if (message._id) seenLiveMessageIds.current.add(message._id);
      });
      setAgentSession(session);
      pushAssistantMessage(
        "Aapki detail successfully submit ho gayi hai aur ab aap Manovaidya support team se directly connected hain. Kripya apna sawal yahan likhein, humari team jald hi aapko reply karegi."
      );
    } catch (error) {
      setAgentMode(false);
      pushAssistantMessage(
        error.response?.data?.message || "Sorry, agent se connect nahi ho pa raha. Please thodi der baad try karein."
      );
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!agentMode || !agentSession?.sessionKey) return undefined;

    const fetchAgentSession = async () => {
      try {
        const response = await api.get(`/live-chat/sessions/${agentSession.sessionKey}`);
        const session = response.data?.data;
        if (!session) return;
        setAgentSession(session);
        appendLiveMessages(session);
      } catch {
        // Keep the visitor in the chat; the next poll can recover.
      }
    };

    const intervalId = window.setInterval(fetchAgentSession, 4000);
    void fetchAgentSession();
    return () => window.clearInterval(intervalId);
  }, [agentMode, agentSession?.sessionKey]);

  const startBookingFlow = () => {
    setIsOpen(true);
    setBookingData({});
    setBookingStep(0);
    setAgentLeadStep(null);
    pushAssistantMessage(
      `Haan, bilkul. Dr. Ankush Garg ke saath online consultation book ho sakti hai; fee Rs. ${consultationFee} hai.`
    );
    window.setTimeout(() => {
      pushAssistantMessage(bookingSteps[0].prompt);
    }, 350);
  };

  const startAgentLeadFlow = () => {
    setIsOpen(true);
    setAgentLeadData({});
    setAgentLeadStep(0);
    setBookingStep(null);
    pushAssistantMessage(agentLeadSteps[0].prompt);
  };

  React.useEffect(() => {
    const handleStartBooking = () => {
      startBookingFlow();
    };
    const handleStartAgentChat = () => {
      startAgentLeadFlow();
    };

    window.addEventListener("manovaidya:start-chat-booking", handleStartBooking);
    window.addEventListener("manovaidya:start-agent-chat", handleStartAgentChat);
    return () => {
      window.removeEventListener("manovaidya:start-chat-booking", handleStartBooking);
      window.removeEventListener("manovaidya:start-agent-chat", handleStartAgentChat);
    };
  }, []);

  const submitConsultation = async (data) => {
    await api.post("/consultations", {
      name: data.name,
      phone: data.phone,
      consultationMode: data.consultationMode,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      message: [
        `Location: ${data.location}`,
        "Consultation with: Dr. Ankush Garg",
        `Consultation fee: Rs. ${consultationFee}`,
        "OPD note: Noida OPD is available only on Tuesday, Thursday and Saturday. Slot confirmation requires payment.",
        "Source: AI chat assistant",
      ].join("\n"),
    });
  };

  const handleBookingResponse = async (rawValue) => {
    const step = bookingSteps[bookingStep];
    const value = String(rawValue || "").trim();
    if (!step || !value) return;

    if (isBookingCancelIntent(value)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      setBookingStep(null);
      setBookingData({});
      pushAssistantMessage(
        "Koi baat nahi. Kya main jaan sakta hu abhi appointment kyu nahi lena chahte? Aap apni query bata dijiye, main help karta hu."
      );
      return;
    }

    const isExactOptionMatch = step.options?.some(
      (opt) =>
        opt.value.toLowerCase() === value.toLowerCase() ||
        opt.label.toLowerCase() === value.toLowerCase()
    );

    if (!isExactOptionMatch) {
      const bookingQuestionAnswer = getBookingQuestionAnswer(value, step.prompt);
      if (bookingQuestionAnswer) {
        setMessages((current) => [...current, { role: "user", text: value }]);
        setQuestion("");
        pushAssistantMessage(bookingQuestionAnswer);
        return;
      }

      if (looksLikeBookingSideQuery(value, step.key)) {
        setMessages((current) => [...current, { role: "user", text: value }]);
        setQuestion("");

        const localSideAnswer = getLocalBookingSideAnswer(value, step.prompt);
        if (localSideAnswer) {
          pushAssistantMessage(localSideAnswer);
          return;
        }

        setIsLoading(true);
        try {
          const answer = await askWebsiteAi(value);
          pushAssistantMessage(`${answer}\n\n${step.prompt}`);
        } catch {
          pushAssistantMessage(
            `Main samajh raha hu. Is query ke liye Manovaidya team aapko better guide kar sakti hai.\n\n${step.prompt}`
          );
        } finally {
          setIsLoading(false);
        }
        return;
      }
    }

    if (isFillerReply(value) && ["name", "phone", "location"].includes(step.key)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      pushAssistantMessage(`Thik hai. ${step.prompt}`);
      return;
    }

    if (step.key === "phone" && value.replace(/\D/g, "").length < 10) {
      pushAssistantMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (step.key === "preferredDate" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      pushAssistantMessage("Please choose a date from the date picker.");
      return;
    }

    const nextData = { ...bookingData, [step.key]: value };
    setBookingData(nextData);
    setMessages((current) => [...current, { role: "user", text: step.options?.find((option) => option.value === value)?.label || value }]);
    setQuestion("");

    const nextStep = bookingStep + 1;
    if (nextStep < bookingSteps.length) {
      setBookingStep(nextStep);
      pushAssistantMessage(bookingSteps[nextStep].prompt);
      return;
    }

    setIsLoading(true);
    try {
      await submitConsultation(nextData);
      setBookingStep(null);
      setBookingData({});
      pushAssistantMessage(
        `Your consultation request has been submitted successfully.\n\nDoctor: Dr. Ankush Garg\nConsultation fee: Rs. ${consultationFee}\nMode: ${nextData.consultationMode === "clinic" ? "Clinic Visit" : "Online Consultation"}\nDate: ${nextData.preferredDate}\nTime: ${nextData.preferredTime}\n\nNoida OPD Tuesday, Thursday and Saturday ko hoti hai. Slots limited rehte hain, so payment karke apna slot confirm karein.\n\nOur team will contact you shortly.`
      );
    } catch (error) {
      pushAssistantMessage(
        error.response?.data?.message ||
        "Sorry, the consultation request could not be submitted right now. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendAgentMessage = async (rawValue) => {
    const value = String(rawValue || "").trim();
    if (!value || isLoading) return;

    if (!agentSession?.sessionKey) {
      await startAgentChat(value);
      return;
    }

    setQuestion("");
    setMessages((current) => [...current, { role: "user", text: value }]);
    setIsLoading(true);

    try {
      const response = await api.post(`/live-chat/sessions/${agentSession.sessionKey}/messages`, {
        message: value,
      });
      const session = response.data?.data;
      if (session) {
        (session.messages || []).forEach((message) => {
          if (message._id && message.sender === "visitor") seenLiveMessageIds.current.add(message._id);
        });
        setAgentSession(session);
        appendLiveMessages(session);
      }
    } catch (error) {
      pushAssistantMessage(
        error.response?.data?.message || "Message send nahi ho paya. Please dobara try karein."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAgentLeadResponse = async (rawValue) => {
    const step = agentLeadSteps[agentLeadStep];
    const value = String(rawValue || "").trim();
    if (!step || !value) return;

    if (isBookingCancelIntent(value)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      setAgentLeadStep(null);
      setAgentLeadData({});
      pushAssistantMessage(
        "Koi baat nahi. Aap apni query yaha bta sakte hain."
      );
      return;
    }

    if (step.key === "phone" && value.replace(/\D/g, "").length < 10) {
      pushAssistantMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    const nextData = { ...agentLeadData, [step.key]: value };
    setAgentLeadData(nextData);
    setMessages((current) => [...current, { role: "user", text: value }]);
    setQuestion("");

    const nextStep = agentLeadStep + 1;
    if (nextStep < agentLeadSteps.length) {
      setAgentLeadStep(nextStep);
      pushAssistantMessage(agentLeadSteps[nextStep].prompt);
      return;
    }

    await startAgentChat("Visitor completed lead form and wants to connect.", nextData.name, nextData.phone, false);
  };

  const closeChatbot = () => {
    setIsOpen(false);
    if (agentMode && agentSession?.sessionKey) {
      api.patch(`/live-chat/admin/sessions/${agentSession.sessionKey}/status`, { status: "closed" }).catch(() => {});
      resetChat();
    }
  };

  const submitQuestion = async (value = question) => {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion || isLoading) return;

    if (agentMode) {
      const lower = trimmedQuestion.toLowerCase();
      if (lower === "exit" || lower === "close") {
        api.patch(`/live-chat/admin/sessions/${agentSession.sessionKey}/status`, { status: "closed" }).catch(() => {});
        pushAssistantMessage("Chat session closed.");
        window.setTimeout(() => {
          resetChat();
          setIsOpen(false);
        }, 1500);
        return;
      }
      await sendAgentMessage(trimmedQuestion);
      return;
    }

    if (bookingStep !== null) {
      await handleBookingResponse(trimmedQuestion);
      return;
    }

    if (agentLeadStep !== null) {
      await handleAgentLeadResponse(trimmedQuestion);
      return;
    }

    setQuestion("");
    setIsOpen(true);
    setMessages((current) => [...current, { role: "user", text: trimmedQuestion }]);

    if (isAgentIntent(trimmedQuestion)) {
      startAgentLeadFlow();
      return;
    }

    if (isDirectBookingCommand(trimmedQuestion)) {
      startBookingFlow();
      return;
    }

    const exactAnswer = getExactLocalAnswer(trimmedQuestion);
    if (exactAnswer) {
      setIsLoading(true);
      scrollChatToBottom();
      window.setTimeout(() => {
        setMessages((current) => [...current, { role: "assistant", text: exactAnswer, showCta: true }]);
        setIsLoading(false);
        scrollChatToBottom();
      }, 650);
      return;
    }

    setIsLoading(true);
    scrollChatToBottom();

    try {
      const answer = await askWebsiteAi(trimmedQuestion);
      setMessages((current) => [...current, { role: "assistant", text: answer, showCta: true }]);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        (error.code === "ECONNABORTED" || error.message === "Network Error"
          ? getFastFallbackAnswer(trimmedQuestion)
          : error.message) ||
        "Sorry, I could not answer right now. Please try again or contact the Manovaidya team.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: errorMessage,
          showCta: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      scrollChatToBottom();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="mb-3 flex h-[min(620px,calc(100vh-110px))] w-[calc(100vw-32px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-[#8B43BA]/20 bg-white shadow-[0_24px_60px_rgba(38,20,72,0.24)]">
          <header className="flex items-center justify-between gap-3 bg-[#8B43BA] px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-[15px] font-black">Manovaidya AI Assistant</h2>
                <p className="truncate text-[12px] font-semibold text-white/78">
                  {agentMode ? "Connected with support team" : "Guided by Manovaidya information"}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Reset AI chat"
                title="Reset chat"
                onClick={resetChat}
              >
                <RotateCcw className="h-4.5 w-4.5" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Close AI chat"
                onClick={closeChatbot}
              >
                <X className="h-5 w-5" strokeWidth={2.4} />
              </button>
            </div>
          </header>

          <div ref={chatScrollRef} className="flex-1 overflow-y-auto bg-[#fbfaff] px-4 py-4">
            <div className="grid gap-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] font-semibold leading-6 ${message.role === "user"
                      ? "ml-auto bg-[#8B43BA] text-white"
                      : "mr-auto border border-[#8B43BA]/12 bg-white text-[#312448]"
                    }`}
                >
                  {message.role === "assistant" || message.role === "agent" ? (
                    <>
                      {message.role === "agent" ? (
                        <p className="mb-1 text-[11px] font-black uppercase tracking-[0.08em] text-[#8B43BA]">
                          Agent
                        </p>
                      ) : null}
                      <AssistantMessage text={message.text} />
                      {message.showCta ? <ConsultationCta /> : null}
                    </>
                  ) : (
                    message.text
                  )}
                </div>
              ))}
              {isLoading ? (
                <div className="mr-auto inline-flex max-w-[88%] items-center gap-1.5 rounded-2xl border border-[#8B43BA]/12 bg-white px-4 py-3.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70" />
                </div>
              ) : null}
              <div ref={chatEndRef} />
            </div>
          </div>

          <div className="border-t border-[#8B43BA]/12 bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {(agentMode
                ? []
                : bookingStep !== null
                  ? bookingSteps[bookingStep]?.inputType === "select"
                    ? bookingSteps[bookingStep]?.options?.map((option) => option.label) || []
                    : []
                  : quickQuestions
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  className="shrink-0 rounded-full border border-[#8B43BA]/18 bg-[#8B43BA]/5 px-3 py-2 text-[12px] font-black text-[#6f34a0] transition hover:bg-[#8B43BA] hover:text-white"
                  onClick={() => {
                    const option = bookingStep !== null
                      ? bookingSteps[bookingStep]?.options?.find((entry) => entry.label === item)
                      : null;
                    submitQuestion(option?.value || item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <form
              className="flex items-end gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion();
              }}
            >
              {(bookingStep !== null && bookingSteps[bookingStep]?.inputType === "date") ? (
                <input
                  type="date"
                  value={question}
                  min={new Date().toISOString().split("T")[0]}
                  className="min-h-11 flex-1 rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition placeholder:text-slate-400 focus:border-[#8B43BA]"
                  onChange={(event) => setQuestion(event.target.value)}
                />
              ) : bookingStep !== null && bookingSteps[bookingStep]?.inputType === "select" ? (
                <select
                  value={question}
                  className="min-h-11 flex-1 rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition focus:border-[#8B43BA]"
                  onChange={(event) => setQuestion(event.target.value)}
                >
                  <option value="">{bookingSteps[bookingStep]?.prompt}</option>
                  {bookingSteps[bookingStep]?.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <textarea
                  value={question}
                  rows={1}
                  className="min-h-11 flex-1 resize-none rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition placeholder:text-slate-400 focus:border-[#8B43BA]"
                  placeholder={agentMode ? "Message agent..." : bookingStep !== null ? bookingSteps[bookingStep]?.prompt || "Type your answer..." : "Ask your question..."}
                  onChange={(event) => setQuestion(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      submitQuestion();
                    }
                  }}
                />
              )}
              <button
                type="submit"
                disabled={!canSend}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B43BA] text-white shadow-[0_10px_22px_rgba(139,67,186,0.24)] transition hover:bg-[#7434a0] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Send question"
              >
                <Send className="h-4.5 w-4.5" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="flex h-15 min-h-[60px] items-center gap-3 rounded-full bg-[#8B43BA] px-5 text-white shadow-[0_18px_38px_rgba(93,40,128,0.32)] transition hover:-translate-y-0.5 hover:bg-[#7434a0]"
        aria-label="Open Manovaidya AI Assistant"
        onClick={openChat}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
          {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-[14px] font-black leading-4">Ask AI</span>
          <span className="flex items-center gap-1 text-[11px] font-bold text-white/76">
            <Sparkles className="h-3 w-3" />
            Smart guidance
          </span>
        </span>
      </button>
    </div>
  );
}

export default AiChatBot;
