import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Search,
  ShieldCheck,
  Waves,
  Salad
} from "lucide-react";
import heroImage from "../images/stress-digestive-health.webp";
import refluxImage from "../images/ibs-symptoms-stress.png"; 
import gutBrainImage from "../images/gut-brain-digestive-health.webp";
import lifestyleImage from "../images/ibs-lifestyle-management.png"; 
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp"; 
import consultationImage from "../images/ibs-consultation.png"; 
import doctorImage from "../images/doctorimg-2.jpeg";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Stress & Digestion", id: "how-are-stress-and-digestion-connected" },
  { label: "Gut-Brain Connection", id: "the-gut-brain-connection" },
  { label: "Symptoms", id: "common-digestive-symptoms-that-may-be-associated-with-stress" },
  { label: "Assessment Process", id: "our-mind-body-and-digestive-health-assessment-process" },
  { label: "Neuro-Ayurveda System", id: "the-neuro-ayurveda-development-system" },
  { label: "Support Approach", id: "how-we-support-digestive-health" },
  { label: "Why Choose Us", id: "why-people-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-assessment" },
];

const rawSourceContent = "Key Takeaways\nUnderstanding Stress & Digestive Health\nStress and the Gut-Brain Connection\nHow Stress May Affect Digestion\nCommon Stress-Related Digestive Symptoms\nEmotional Wellbeing & Digestive Health\nSigns That Need Medical Evaluation\nLifestyle Support for Digestive Wellbeing\nUnderstanding the Neuro-Ayurveda Approach\nMind-Body & Digestive Health Assessment\nStress Management & Healthy Daily Habits\nManovaidya’s Digestive Wellbeing Approach\nFAQs About Stress & Digestive Health\n\n\nDigestive Wellbeing\n\nStress & Digestive Health Treatment in India\n\n\nUnderstanding the Connection Between Stress, Emotional Wellbeing and Digestive Health.\n\nUnderstanding Stress & Digestive Health\n\nThere's a network of communication that connects the digestive system and the brain, known as the gut-brain axis. This means that how you feel emotionally and your digestive health are always affecting each other. Many people remarked that when they are stressed, worried or when they are under pressure, they feel their appetite changes, their stomach feels uncomfortable, bloated or indigested. [1][2]\n\nWhen you are stressed you may feel some discomfort or discomfort may occur regularly, either of these is not something you should ignore. Medical conditions that require diagnosis and treatment correctly can be a cause for digestive problems. Emotional stress may influence the way you feel symptoms and is not the only trigger. [2][3]\n\n\nWe believe that it is essential to know the person, not just their digestive symptoms at Manovaidya. We consider wellbeing, lifestyle, sleep, nutrition and the gut/brain link to enable people to understand their overall health.\n\nDr. Ankush Garg, Mental Health Specialist and the Founder of Manovaidya, is the head of our team. The Neuro-Ayurveda Development System is a system that takes a holistic approach to the brain, gut and behavior/lifestyle to support the mind-body connection.\n\n\nHow Are Stress and Digestion Connected?\n\nNerves, hormones and immune pathways constantly communicate between the brain and the digestive system. [1]\n\nThe stress reaction of your body, when you are emotionally stressed, will impact your function. You might notice changes in your appetite, digestion or bowel habits when you are going through a time. [1][2]\n\nAs with any type of physical pain, an individual's digestive pain can be a source of emotional pain also, and thus can create a vicious circle between physical and emotional well-being. [1][2]\n\nUnderstanding this connection helps explain why taking care of both wellbeing and digestive health is important for overall wellness.\n\nStress activates the bodys natural stress response, which prepares the body to deal with situations. If you are stressed for a period of time you may notice that your digestion changes for a short time, which is your body's way of reacting to the stress. When stressed for a period of time, you may experience persistent digestive upset. The connection between emotional wellbeing and gut health is still being explored and is known as the gut-brain axis, where the brain and the gut continuously communicate. [1][2]\n\nAn understanding that stress is not a cause for all conditions is necessary. Persistent and severe digestive symptoms may have medical causes, and should always be properly evaluated. [2][4]\n\n\n\nThe Gut-Brain Connection\n\nThe digestive system is connected to the brain by a system of nerves that constantly communicate with each other. [1]\n\n\nThis link can impact:\n\nAppetite\nDigestion\nBowel movements\nA sensitivity in the tract\nEmotional wellbeing\nStress responses\n\nLikewise, digestive health can also influence emotional well-being, emphasizing the connection between physical and emotional health. [1][2]\n\n\nCommon Digestive Symptoms That May Be Associated With Stress\n\n\nEach person reacts to stress in a unique manner. Changes may be noticed such as:\n\nBloating\nIndigestion\nStomach discomfort\nChanges in appetite\nFeeling full quickly\nAltered bowel movements.\nNausea during situations\nIncreased abdominal discomfort\n\nThey're not only triggered by stress and may occur with numerous medical illnesses. When you have symptoms of digestion disorders, make sure to always consult a qualified health professional. [2][3][4]\n\n\n\nWho May Experience Stress-Related Symptoms?\n\nChronic stress at work: working professionals who are stressed out on a long-term basis.\n\n Students during exams\n People who are anxious\n Those who are taking care of someone term\n Individuals going through life changes\n People who are under emotional pressure\nThose with existing conditions who notice their symptoms getting worse when they are stressed\n\nEach person's experience is unique.\n\n\n\nWhy Emotional Wellbeing Matters for Digestive Health\n\n\nMany of our daily routines can impact our wellbeing and contribute to digestive issues. Ongoing stress can impact on:\n\n\nEating patterns\nSleep quality\nActivity\nHydration\nDaily routine\nRelaxation\nOverall quality of life [1][5][6]\n\n\n\nSigns You Should Not Ignore\n\nYou may have some stomach troubles from time to time, but if it occurs regularly, contact a doctor. Avoid ignoring symptoms such as:\n\nBloating that happens often\nIndigestion that does not go away\nStomach acidity\nDiscomfort in the stomach\nAbdominal cramps\nChanges in how you go to the bathroom\nFeeling full quickly\nNausea that happens often\n\nAdditionally, people with a long-term digestive condition may experience:\n\nFeeling stressed all the time\nWorrying about eating\nGetting irritated easily\nNot sleeping well\nFinding it hard to relax\nLife not being enjoyable\n\nPhysical and emotional symptoms should be visited by a doctor. [3][4]\n\n\nWhen Should You See a Doctor?\n\nDo not think digestive symptoms are because of stress. If you have: see a doctor away:\n\nSevere stomach pain\nBlood in your stool\nBlood in what you vomit\nInability to keep food and fluids down\nLosing weight\nTrouble swallowing\nFever with symptoms\nSymptoms that last for weeks\nSymptoms that get worse\n\nEarly visits to a doctor can help to detect conditions and ensure treatment is received. [3][4]\n\n\n\nOur Mind-Body & Digestive Health Assessment Process\n\nThere are numerous possible causes of digestive symptoms. Some are medical related, and emotional wellbeing, lifestyle habits, sleep and chronic stress can all impact how some people may feel when experiencing digestive discomfort. We believe at Manovaidya that the whole picture is important and not just digestive symptoms of disease. We are assessing your digestive health to better understand how digestive health, emotional wellbeing and lifestyle are interconnected, so that we can provide you with personalised guidance. [1][2]\n\nUnderstanding Your Health Concerns\n\nAll consultation sessions start with a careful listening to your experiences. We talk about: Your digestive issues, Emotional wellbeing, Stress level, Eating habits, Sleep quality, Daily routine, Lifestyle habits, Medical history and Previous investigations and treatments. By seeing the full health story, we can look for things that could be contributing to your health and wellbeing.\n\n\n\n\nComprehensive Mind-Body Assessment\n\nOur assessment is structured to investigate a number of factors that can impact digestive well-being. They are: Emotional stress, Lifestyle habits, Sleep quality, Digestive health, Energy levels, Work-life balance, Nutrition, Behavioural patterns and Overall quality of life. This comprehensive evaluation can uncover patterns that can support emotional and digestive health.\n\n\nUnderstanding Your Wellbeing Profile\n\nFollowing the assessment we provide a simple and practical explanation of what we observe. This includes: Emotional wellbeing profile, Lifestyle factors, Stress patterns, Digestive health observations, Areas requiring attention, Personalised recommendations, and Practical next steps. We aim to educate people on the link between their emotional and digestive well-being and promote informed healthcare choices.\n\n\nThe Neuro-Ayurveda Development System\n\nAt Manovaidya, digestive wellness is seen as a holistic, five-pillar Neuro-Ayurveda Development System that takes all aspects of brain health, gut health, behaviour, lifestyle and emotional wellbeing into account. This perspective rather than emphasizing digestion symptoms gives insight into how emotional health affects a person's wellbeing in a wider sense.\n\n\n\n1. Brain Nourishment System\n\nGood brain health is associated with: Emotional regulation, Stress resilience, Mental clarity, Sleep quality, Decision-making, Overall wellbeing. Maintaining emotional wellness can help people develop more successful coping mechanisms to stress in their daily lives.\n\n\n2. Gut Response System\n\nThe digestive system is crucial to an individual's wellbeing. This pillar aims to educate on: Digestion health, Nutrition, Healthy eating habits, Gut-brain communication and Lifestyle factors that affect gut wellness. [1][5]\n\n\n3. Neural Network System\n\nThe brain is constantly changing as a result of experiences, learning and lifestyle habits. In this pillar, healthy ways of thinking, emotional adaptability, stress resilience and behavioural awareness will be strengthened.\n\n\n4. Sensory Integration System\n\nEmotional and physical well-being can be affected by factors in the environment every day. This pillar takes into account experiences with the senses, stress in the environment, relaxation, recovery and lifestyle balance.\n\n5. Behaviour Guidance System\n\nGood habits help the emotional and digestive health. This pillar is based on: Stress Management, Healthy Routines, sustainable lifestyle habits, behaviour awareness, and long-term wellbeing. [5][6][7]\n\n\nHow We Support Digestive Health\n\nIndividuals have unique digestive health experiences. At Manovaidya, support is tailored to the person's emotional state, digestive issues, as well as lifestyle needs. We want to help people to better understand the link between emotional wellbeing and digestive health, and encourage healthier habits for the long term.\n\nMind-Body Health Assessment\nDigestive Wellbeing Assessment\nEmotional Wellbeing Guidance\nLifestyle & Nutrition Education\nStress Management Guidance\nHealthy Routine Planning\nMind-Body Balance Support\nProgress Monitoring and Follow-Up\n\n\nSupporting Digestive Health and Emotional Wellbeing\n\nTaking care of your health means caring for your body and emotional wellbeing. Some habits that can lead to good health are: [5][6][7]\n\n• Eating meals that're balanced and drinking water every day\n • Being physically active regularly and getting sleep\n • Managing stress every day, not smoking and limiting alcohol\n • Taking medications as told and following advice for diagnosed digestive conditions\n\nSmall, but lasting changes can make you healthier in the long-term. [5][6][7]\n\n\n\nLooking Beyond Symptoms\n\nIt is not about your stomach, that's OK, then.It's not about your stomach, then, is it not? Your mood, sleep and lifestyle habits and existing medical conditions can all have an impact on your symptoms. At Manovaidya we believe in understanding the person, not symptoms. Taking the time to think about health and wellbeing together can help you establish healthier habits in the long term which will benefit you in all aspects of your life. [1][4][5]\n\n\nWhy People Across India Choose Manovaidya\n\nOften, people from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and other parts of India come to Manovaidya to understand how stress affects their digestive health and the gut-brain connection through detailed assessment and customised advice.\n\n Comprehensive Mind-Body Health Assessments\nGut-Brain Axis Understanding\nNeuro-Ayurveda Development System\nLifestyle & Stress Management Guidance\nHolistic Emotional Wellbeing Support\nOnline & In-Clinic Consultations\n Personalised Long-Term Wellness Approach \n\nWe aim to educate people on the interplay between emotional wellbeing, digestive health and lifestyle and the positive impact this has on overall wellbeing.\n\n\n\n\nAbout Dr. Ankush Garg\n\n\nMental Health Specialist & Founder of Manovaidya\n\n\nDr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System. His work focuses on understanding the relationship between emotional wellbeing, gut health, brain health and lifestyle while helping individuals experiencing stress-related digestive concerns and other mind-body health challenges.\n\n\nThrough structured assessments, personalised guidance and continuous follow-up, Dr. Ankush Garg helps individuals better understand the gut-brain connection and develop healthier long-term lifestyle habits.\n\nBased in Delhi NCR, he provides Mind-Body and Digestive Health Assessments for individuals across India through both online and in-clinic appointments, helping individuals understand the relationship between emotional wellbeing, gut health and overall wellness through the Neuro-Ayurveda Development System.\n\n\n\n\nFrequently Asked Questions (FAQs) \n\n\n1. Can stress affect digestive health?\n\n\nYes. In some, emotional stress can affect digestion via the gut-brain connection. Some people experience symptoms during stress like bloating, indigestion, appetite loss or bowel movements change. But there are numerous potential medical conditions which may cause digestive symptoms and these should be carefully assessed if they continue. [1][2]\n\n\n2. What is the gut-brain connection?\n\n\nThe gut-brain axis or gut-brain connection is the bidirectional communication between the gut and the brain. This link is a useful understanding of how emotional wellbeing and digestive health can relate. [1][2]\n\n\n\n3. Can anxiety cause stomach problems?\n\n\nDuring a period of anxiety or emotional stress, some people experience stomach discomfort or nausea, bloating or changes in bowel habits. Persistent digestive symptoms, however, may also result from medical issues, so it is advisable to seek medical advice from a healthcare provider. [2][3]\n\n4. Why do I experience stomach discomfort during stressful situations?\n\nWhen stressed the body releases its natural stress response and in some people, this affects the digestion process for a short period. Medical evaluation is recommended if stomach pain occurs often or for a long time because it is important to determine what causes it. [1][2]\n\n\n5. Can emotional wellbeing influence appetite?\n\nYes. Emotional stress can have varying effects on appetite. Others may lose appetite during stressful times and others may eat more than normal. If appetite changes persist, consult a health care provider. [1]\n\n\n6. What digestive symptoms may become worse during stress?\n\n\nDuring an emotionally stressful time, a few people might experience bloating, indigestion, stomach discomfort, nausea, altered appetite or changes in bowel habits. These do not necessarily indicate stress: If symptoms persist, it is important that they be evaluated by a medical professional. [2][3]\n\n\n7. Can poor sleep affect digestive health?\n\nSleep is essential to health and wellbeing, physical and mental. Some people may feel problems with digestion, appetite, energy level and stress responses due to poor sleep. Better sleeping routines can help to promote overall wellness. [1][7]\n\n\n8. When should I seek medical attention for digestive symptoms?\n\nYou should seek medical evaluation if digestive symptoms are persistent, becoming worse or accompanied by severe abdominal pain, blood in stool, blood in vomit, unexplained weight loss, persistent vomiting, difficulty swallowing or high fever. These symptoms need to be evaluated by a doctor. [3][4]\n\n\n9. Can lifestyle habits affect digestive wellbeing?\n\nYes. A healthy approach to nutrition, exercise, drinking plenty of water, getting good sleep and managing stress can help maintain digestive health. Where needed, lifestyle measures should be used in addition to the proper medical care. [5][6][7]\n\n10. What is a Stress & Digestive Health assessment?\n\n\nThe Stress & Digestive Health assessment is a structured assessment that identifies digestive issues, emotional well-being, stress, sleep, lifestyle habits, nutrition and overall health. The assessment can be used to help identify factors that may affect wellbeing and may be used to provide personalised guidance.\n\n\n11. How does Manovaidya support stress-related digestive concerns?\n\nAt Manovaidya we think about the relationship between emotional functioning, lifestyle and digestive wellness instead of just the digestive symptoms. We work with structured assessments, personalised guidance and the Neuro-Ayurveda Development System so that people can have a better understanding of their overall mind-body wellbeing.\n\n\n12. What is the Neuro-Ayurveda Development System?\n\nThe Neuro-Ayurveda Development System is Manovaidya's systematic 5 pillar model that covers the intersection of Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance, understanding the relationship between emotional wellbeing and gut health and lifestyle. It offers a holistic view and in-depth evaluation and tailored advice.\n\n\n13. Can managing stress support digestive wellbeing?\n\nA healthy lifestyle, regular exercise, a good night's sleep, relaxation and emotional wellbeing techniques can help manage stress in some people and may also help improve digestive health in certain people. These methods may be used in conjunction with suitable medical care, but should not be used as a substitute for it. [1][6][7]\n\n\n\n14. Is every digestive problem caused by stress?\n\n\nNo. There are numerous medical conditions, diet, infections or other illnesses that can cause digestive symptoms. Some people may be sensitive to stress and this may contribute to their digestive wellbeing, but it is not always the only cause. Any symptom that lasts will always be evaluated medically. [2][3][4]\n\n15. Why should I choose Manovaidya for Stress & Digestive Health support?\n\nHere at Manovaidya we take a structured approach to understanding the interplay between emotional wellbeing, gut health and lifestyle through personalised guidance, and the Neuro-Ayurveda Development System. Taking a holistic perspective, we help people to understand the gut-brain connection, and to create long-term mind-body wellbeing.\n\nConcerned About Stress and Digestive Health?\nBook a structured Stress & Digestive Health Assessment with Manovaidya to understand the relationship between emotional wellbeing, gut health, digestion and lifestyle while receiving personalised guidance.\nBook Assessment\nTalk to Our Team\n\n\n\nReferences\nNational Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) – Gastrointestinal Neurobiology\nhttps://www.niddk.nih.gov/research-funding/research-programs/gastrointestinal-neurobiology\n\n\nNIDDK – Symptoms & Causes of Irritable Bowel Syndrome: Brain-Gut Interaction\n https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/symptoms-causes\n\n\nNIDDK – Indigestion (Dyspepsia): Symptoms, Causes & Disorders of Gut-Brain Interaction\n https://www.niddk.nih.gov/health-information/digestive-diseases/indigestion-dyspepsia/symptoms-causes\n\n\nNIDDK – Digestive Diseases & Digestive System Health\n https://www.niddk.nih.gov/health-information/digestive-diseases\n\n\nWorld Health Organization (WHO) – Healthy Diet\n https://www.who.int/news-room/fact-sheets/detail/healthy-diet\n\n\nWorld Health Organization (WHO) – Physical Activity and Overall Wellbeing\n https://www.who.int/news-room/fact-sheets/detail/physical-activity\n\n\nWorld Health Organization (WHO) – Self-Care for Health and Well-Being\n https://www.who.int/news-room/fact-sheets/detail/self-care-health-interventions\n\n\nNational Center for Complementary and Integrative Health (NCCIH) – Ayurvedic Medicine: In Depth\n https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth\n\n\nWorld Health Organization (WHO) & FAO – What Are Healthy Diets?\n https://www.who.int/publications/b/76012\n\n\n\n\n\n";

const keyTakeawayEnd = rawSourceContent.search(/\n\s*Digestive Wellbeing/);
const keyTakeawayLabels = rawSourceContent
  .slice(0, keyTakeawayEnd > 0 ? keyTakeawayEnd : 0)
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((line) => line !== "Key Takeaways");

const referencesStart = rawSourceContent.indexOf("\nReferences");
const referencesRaw = referencesStart >= 0 ? rawSourceContent.slice(referencesStart).trim() : "";
const referenceLines = referencesRaw
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((line) => line !== "References");
const references = [];
for (let index = 0; index < referenceLines.length; index += 1) {
  const line = referenceLines[index];
  if (/^https?:\/\//i.test(line)) continue;
  const nextUrl = referenceLines.slice(index + 1).find((item) => /^https?:\/\//i.test(item));
  const numberMatch = line.match(/^\[(\d+)\]\s*(.*)$/);
  references.push({ n: numberMatch?.[1] || String(references.length + 1), title: numberMatch?.[2] || line, url: nextUrl, note: "" });
}

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);

const sectionHeadingLabels = [
  "Understanding Stress & Digestive Health",
  "How Are Stress and Digestion Connected?",
  "The Gut-Brain Connection",
  "Common Digestive Symptoms That May Be Associated With Stress",
  "Who May Experience Stress-Related Symptoms?",
  "Why Emotional Wellbeing Matters for Digestive Health",
  "Signs You Should Not Ignore",
  "When Should You See a Doctor?",
  "Our Mind-Body & Digestive Health Assessment Process",
  "Understanding Your Health Concerns",
  "Comprehensive Mind-Body Assessment",
  "Understanding Your Wellbeing Profile",
  "The Neuro-Ayurveda Development System",
  "1. Brain Nourishment System",
  "2. Gut Response System",
  "3. Neural Network System",
  "4. Sensory Integration System",
  "5. Behaviour Guidance System",
  "How We Support Digestive Health",
  "Supporting Digestive Health and Emotional Wellbeing",
  "Looking Beyond Symptoms",
  "Why People Across India Choose Manovaidya",
  "About Dr. Ankush Garg",
  "About Dr Ankush Garg",
  "About ",
  "About",
  "Dr. Ankush Garg",
  "Mental Health Specialist & Founder of Manovaidya",
];
const sectionHeadings = new Set(sectionHeadingLabels);
const duplicateHeroLines = new Set([
  "Key Takeaways",
  "Digestive Wellbeing",
  "Stress & Digestive Health Treatment in India",
  "Understanding the Connection Between Stress, Emotional Wellbeing and Digestive Health.",
  "Frequently Asked Questions (FAQs)",
  ...keyTakeawayLabels,
]);

const faqStart = rawSourceContent.search(/\n\s*1\.\s*Can stress affect digestive health\?/i);
const faqEnd = rawSourceContent.indexOf("\nConcerned About Stress and Digestive Health?", faqStart);
const faqContent = faqStart >= 0 ? rawSourceContent.slice(faqStart, faqEnd > faqStart ? faqEnd : referencesStart > faqStart ? referencesStart : undefined).trim() : "";
const articleContent = (faqStart >= 0 ? rawSourceContent.slice(0, faqStart) : rawSourceContent)
  .split("\nReferences")[0]
  .trim();

const articleSections = articleContent.split("\n").reduce(
  (sections, line) => {
    const trimmed = line.trim();
    if (duplicateHeroLines.has(trimmed)) return sections;

    if (sectionHeadings.has(line) || sectionHeadings.has(trimmed)) {
      const heading = trimmed === "About" || trimmed === "Dr. Ankush Garg" ? "About Dr. Ankush Garg" : trimmed;
      const id = heading === "About Dr. Ankush Garg" ? "about-dr-ankush-garg" : slugify(heading);
      const existing = sections.find((section) => section.id === id);
      if (existing) {
        existing.lines.push(line);
        return sections;
      }
      sections.push({ title: heading, id, lines: [] });
      return sections;
    }

    sections[sections.length - 1].lines.push(line);
    return sections;
  },
  [{ title: "Introduction", id: "introduction", lines: [] }]
).filter((section) => section.lines.some((line) => line.trim()) || section.title !== "Introduction");

const faqs = faqContent
  .split(/\n(?=\s*\d+\.?\s*)/)
  .filter((item) => /^\s*\d+\.?\s*/.test(item.trim()))
  .map((item) => {
    const [question, ...answer] = item.trim().split("\n");
    return { question: question.replace(/^(\d+)\.(\S)/, "$1. $2").trim(), answer: answer.join(" ") };
  });

const articleLinkRules = [
  { pattern: /\bMind-Body Health\b/i, href: "/mind-body-health-care-india" },
  { pattern: /\bStress & Digestive Health\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bdigestive health\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bgut-brain axis\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bgut-brain connection\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bIBS\b/i, href: "/stress-ibs-support-india" },
  { pattern: /\bacidity\b/i, href: "/stress-and-acidity" },
  { pattern: /\banxiety\b/i, href: "/stress-anxiety-treatment-india" },
  { pattern: /\bsleep\b/i, href: "/sleep-disorders-treatment-india" },
  { pattern: /\bstress management\b/i, href: "/stress-management" },
  { pattern: /\bNeuro-Ayurveda Development System\b/i, href: "/about/approach" },
  { pattern: /\bDr\. Ankush Garg\b/i, href: "/about/doctor" },
];

const getArticleLinkRuleKey = (rule) => rule.href + "|" + rule.pattern.source;

function getArticleLinkRuleKeysForText(text, linkedRuleKeys) {
  const ruleKeys = new Set();
  articleLinkRules.forEach((rule) => {
    const ruleKey = getArticleLinkRuleKey(rule);
    if (linkedRuleKeys.has(ruleKey) || !rule.pattern.test(text)) return;
    linkedRuleKeys.add(ruleKey);
    ruleKeys.add(ruleKey);
  });
  return ruleKeys;
}

const paragraphLinkKeys = (() => {
  const linkedRuleKeys = new Set();
  const ruleKeysByText = new Map();

  articleSections.forEach((section, sectionIndex) => {
    section.lines.forEach((line, lineIndex) => {
      const trimmed = line.trim();
      if (!trimmed || sectionHeadings.has(trimmed) || trimmed.length < 82) return;
      const ruleKeys = getArticleLinkRuleKeysForText(trimmed, linkedRuleKeys);
      if (ruleKeys.size) ruleKeysByText.set(sectionIndex + "-" + lineIndex, ruleKeys);
    });
  });

  faqs.forEach((faq, faqIndex) => {
    const ruleKeys = getArticleLinkRuleKeysForText(faq.answer, linkedRuleKeys);
    if (ruleKeys.size) ruleKeysByText.set("faq-" + faqIndex, ruleKeys);
  });

  return ruleKeysByText;
})();

const categories = [
  { label: "Mind-Body Health", count: 15, Icon: Brain },
  { label: "Stress & Digestion", count: 14, Icon: Salad },
  { label: "Gut-Brain Axis", count: 9, Icon: HeartHandshake },
  { label: "Digestive Health", count: 11, Icon: Activity },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & IBS", href: "/stress-ibs-support-india/" },
  { label: "Stress & Acidity", href: "/stress-and-acidity/" },
  { label: "Stress & Migraine", href: "/stress-and-migraine/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & Headaches", href: "/stress-and-headaches/" },
];

function SidebarCard({ children, className = "", id }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_10px_28px_rgba(139,67,186,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function RelatedPagesCard() {
  return (
    <SidebarCard>
      <h2 className="text-[15px] font-black text-[#21142d]">Related Services</h2>
      <div className="mt-4 space-y-3">
        {relatedPages.map(({ label, href }) => (
          <a key={label} href={href} className="group flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#8b43ba]">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#faf0fc] text-[#8b43ba] transition group-hover:bg-[#8b43ba] group-hover:text-white">
                <ArrowRight className="h-3 w-3" />
              </span>
              {label}
            </span>
          </a>
        ))}
      </div>
    </SidebarCard>
  );
}

function ArticleLinkedText({ text, onCitationClick, allowedRuleKeys }) {
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

    if (citationMatch) candidates.push({ index: citationMatch.index, text: citationMatch[0], citationId: citationMatch[1], type: "citation" });

    articleLinkRules.forEach((rule) => {
      const ruleKey = getArticleLinkRuleKey(rule);
      if (!allowedRuleKeys?.has(ruleKey) || linkedRuleKeysInText.has(ruleKey)) return;
      const keywordMatch = remaining.match(rule.pattern);
      if (keywordMatch) candidates.push({ index: keywordMatch.index, text: keywordMatch[0], rule, ruleKey, type: "keyword" });
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
      parts.push(
        <button key={next.text + "-" + parts.length} type="button" onClick={() => onCitationClick?.(next.citationId)} className="mx-0.5 cursor-pointer rounded px-0.5 align-baseline text-[12px] font-black text-[#8b43ba] underline decoration-[#d9bfe5] underline-offset-2 transition hover:bg-[#faf0fc] hover:text-[#4c1d6b]" aria-label={"Open resource " + next.citationId}>
          {next.text}
        </button>
      );
    } else {
      linkedRuleKeysInText.add(next.ruleKey);
      parts.push(
        <a key={next.text + "-" + parts.length} href={next.rule.href} className="font-black text-[#8b43ba] underline decoration-[#8b43ba]/35 underline-offset-2 transition hover:bg-[#faf0fc] hover:text-[#4c1d6b]">
          {next.text}
        </a>
      );
    }

    cursor = absoluteIndex + next.text.length;
  }

  return parts.map((part, partIndex) => (
    typeof part === "string" ? <React.Fragment key={part + "-" + partIndex}>{part}</React.Fragment> : part
  ));
}

function ContentLine({ line, index, sectionIndex, onCitationClick, allowedRuleKeys }) {
  const trimmed = line.trim();

  if (!trimmed) return <div key={index} className="h-3" />;
  if (sectionHeadings.has(trimmed) || duplicateHeroLines.has(trimmed)) return null;

  if (/^\d+\.\s/.test(trimmed)) {
    return (
      <h3 key={index} id={slugify(trimmed)} className="mt-6 scroll-mt-28 text-[16px] font-black leading-7 text-[#21142d]">
        <ArticleLinkedText text={trimmed} onCitationClick={onCitationClick} />
      </h3>
    );
  }

  if (trimmed.length < 82 && !trimmed.endsWith(".") && !trimmed.endsWith(",") && !trimmed.includes("|")) {
    return (
      <li key={index} className="flex gap-2 text-[13px] font-bold leading-6 text-[#51465a]">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b43ba]" />
        <span><ArticleLinkedText text={trimmed.replace(/^([???])\s*/, "")} onCitationClick={onCitationClick} /></span>
      </li>
    );
  }

  return (
    <p key={index} className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
      <ArticleLinkedText text={trimmed} onCitationClick={onCitationClick} allowedRuleKeys={allowedRuleKeys || paragraphLinkKeys.get(sectionIndex + "-" + index)} />
    </p>
  );
}

function ContentSection({ section, sectionIndex, onCitationClick }) {
  const listLikeLines = section.lines.filter((line) => {
    const trimmed = line.trim();
    return trimmed && trimmed.length < 82;
  }).length;
  const visualImage = section.id === "the-gut-brain-connection" ? gutBrainImage : section.id === "common-digestive-symptoms-that-may-be-associated-with-stress" ? refluxImage : section.id === "the-neuro-ayurveda-development-system" ? neuroAyurvedaImage : section.id === "supporting-digestive-health-and-emotional-wellbeing" ? lifestyleImage : null;
  const isGutBrainSection = section.id === "the-gut-brain-connection";
  const isDigestiveSymptomsSection = section.id === "common-digestive-symptoms-that-may-be-associated-with-stress";
  const isNeuroAyurvedaSection = section.id === "the-neuro-ayurveda-development-system";
  const isDigestiveWellbeingSection = section.id === "supporting-digestive-health-and-emotional-wellbeing";
  const visualImageHeight = isGutBrainSection ? "h-[460px] sm:h-[560px]" : isDigestiveSymptomsSection || isDigestiveWellbeingSection ? "h-[320px] sm:h-[380px]" : isNeuroAyurvedaSection ? "h-[180px] sm:h-[230px]" : "h-[220px]";
  const visualImageFit = isNeuroAyurvedaSection ? "object-contain" : "object-cover";
  const visualImageContainerWidth = isNeuroAyurvedaSection ? "mx-auto max-w-[720px]" : "";

  return (
    <section id={section.id} className="mt-9 scroll-mt-28">
      {section.title !== "Introduction" && <h2 className="text-[20px] font-black text-[#17111f]">{section.title}</h2>}
      {visualImage && (
        <div className={`mt-5 overflow-hidden rounded-lg border border-[#f4e6fa] bg-[#faf0fc] shadow-[0_10px_28px_rgba(139,67,186,0.06)] ${visualImageContainerWidth}`}>
          <img src={visualImage} alt={section.title} className={`${visualImageHeight} w-full ${visualImageFit} object-center`} loading="lazy" decoding="async" />
        </div>
      )}
      <div className={listLikeLines >= 4 ? "mt-4 rounded-lg border border-[#f4e6fa] bg-white p-5 shadow-[0_8px_22px_rgba(139,67,186,0.04)]" : "mt-2"}>
        {listLikeLines >= 4 ? (
          <div className="space-y-2.5">
            {section.lines.map((line, index) => <ContentLine key={index} line={line} index={index} sectionIndex={sectionIndex} onCitationClick={onCitationClick} />)}
          </div>
        ) : (
          section.lines.map((line, index) => <ContentLine key={index} line={line} index={index} sectionIndex={sectionIndex} onCitationClick={onCitationClick} />)
        )}
      </div>
    </section>
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
          <h2 className="mt-2 text-[21px] font-black leading-tight text-[#111827]">Key Takeaways</h2>
          <ul className="mt-4 space-y-2.5">
            {keyTakeawayLabels.map((item) => (
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
            Join our mind-body health newsletter for stress, digestion and gut-brain wellbeing guidance.
          </p>
          <form className="mt-5 space-y-4">
            <input type="email" placeholder="Enter your email" className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]" />
            <button type="button" className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]">Join Now</button>
          </form>
          <p className="mt-4 text-[11px] font-semibold text-[#111827]">
            Your <a href="/privacy-policy" className="underline decoration-[#111827] underline-offset-2">privacy</a> is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}

function MedicalReferencesBlock() {
  return (
    <section id="medical-references" className="mt-5 scroll-mt-28 rounded-xl border border-[#f4e6fa] bg-white p-5 shadow-[0_12px_30px_rgba(58,31,90,0.06)]">
      <h2 className="text-[20px] font-black text-[#17111f]">References</h2>
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Medical, scientific and Ayurvedic resources used in the supplied content.</p>
      <div className="mt-5 space-y-4">
        {references.map((reference) => (
          <article key={reference.n} id={"reference-" + reference.n} className="scroll-mt-32 rounded-lg border border-[#f4e6fa] bg-[#fcf9ff] p-4">
            <p className="text-[13px] font-black leading-6 text-[#21142d]">[{reference.n}] {reference.title}</p>
            {reference.note && <p className="mt-2 text-[12px] font-semibold leading-5 text-[#5f5367]">{reference.note}</p>}
            {reference.url && <a href={reference.url} target="_blank" rel="noreferrer" className="mt-2 block break-words text-[12px] font-bold leading-5 text-[#8b43ba] underline underline-offset-2">{reference.url}</a>}
          </article>
        ))}
      </div>
    </section>
  );
}

function StressDigestiveHealthIndiaPage() {
  const [activeSection, setActiveSection] = useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const [showResources, setShowResources] = useState(false);

  const handleCitationClick = React.useCallback((referenceNumber) => {
    setShowResources(true);
    window.setTimeout(() => {
      const target = document.getElementById("reference-" + referenceNumber) || document.getElementById("medical-references");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  useEffect(() => {
    const fontId = "adhd-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
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
      <Seo
        title="Stress & Digestive Health in India | Gut-Brain Connection | Manovaidya"
        description="Looking for Stress & Digestive Health support in India? Learn how stress affects digestion, bloating, appetite and gut-brain wellbeing at Manovaidya."
        keywords="Stress & Digestive Health, Gut-Brain Connection, Gut-Brain Axis, Stress and Digestion, Digestive Wellbeing, Bloating and Stress, Indigestion, Emotional Wellbeing and Gut Health, Mind-Body Health, Digestive Health Assessment, Neuro-Ayurveda Development System, Stress-Related Digestive Symptoms"
        path="/stress-and-digestive-health"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Digestive Health in India",
          "description": "Looking for Stress & Digestive Health support in India? Learn how stress affects digestion, bloating, appetite and gut-brain wellbeing at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">

        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#8b43ba]">Home</a>
                <span>/</span>
                <a href="/mind-body-health-care-india" className="transition hover:text-[#8b43ba]">Mind-Body Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">Stress & Digestive Health</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Digestive Health Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Connection Between Stress, Emotional Wellbeing and Digestive Health.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(139,67,186,0.22)] transition hover:bg-[#6a338e]">
                  Book Assessment
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(106,51,142,0.22)] lg:flex">
                <Salad className="mb-1 h-5 w-5" />
                Gut-Brain Connection
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(139,67,186,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and digestive health support through the gut-brain connection" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />

          {articleSections.map((section, sectionIndex) => (
            <ContentSection key={section.id + section.title} section={section} sectionIndex={sectionIndex} onCitationClick={handleCitationClick} />
          ))}

          <section id="faqs" className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
            </div>
            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#f4e6fa] bg-white transition hover:border-[#8b43ba]">
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left sm:px-5">
                    <span className="pr-4 text-[14px] font-bold leading-snug text-[#21142d]">{faq.question}</span>
                    <span className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors " + (openFaq === index ? "bg-[#8b43ba] text-white" : "bg-[#faf0fc] text-[#8b43ba]")}>
                      <ChevronDown className={"h-4 w-4 transition-transform duration-300 " + (openFaq === index ? "rotate-180" : "")} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className={"grid transition-all duration-300 ease-in-out " + (openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <div className="border-t border-[#f4e6fa] px-4 pb-4 pt-3 text-[13px] font-medium leading-[1.6] text-[#51465a] sm:px-5">
                        <ArticleLinkedText text={faq.answer} onCitationClick={handleCitationClick} allowedRuleKeys={paragraphLinkKeys.get("faq-" + index)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <button type="button" onClick={() => setShowResources((current) => !current)} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#d8c6e5] bg-[#8b43ba] px-6 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-[#8b43ba]/20 transition hover:bg-[#64258e]" aria-expanded={showResources} aria-controls="medical-references">
              <BookOpen className="h-4 w-4" />
              Resources
              <ChevronDown className={"h-4 w-4 transition " + (showResources ? "rotate-180" : "")} />
            </button>
            {showResources && <MedicalReferencesBlock />}
          </div>

          <section id="book-assessment" className="mt-10 mb-8">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#6a338e] to-[#8b43ba] text-white shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Digestive Health?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Digestive Health Assessment with Manovaidya to understand the relationship between emotional wellbeing, gut health, digestion and lifestyle while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and digestive health assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img src={doctorImage} alt="Dr Ankush Garg Manovaidya mind-body digestive health clinician" className="h-12 w-12 shrink-0 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">Authorised & Clinically Reviewed by Dr Ankush Garg</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Clinical Focus: Mind-Body Health, Digestive Wellbeing, Stress and Mental Health</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Last Updated: [20-07-2026]</p>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#5d3b90] p-3 text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15"><Salad className="h-5 w-5" /></span>
              <p className="text-[12px] font-black leading-5">Neuro-Ayurveda Development System</p>
            </div>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#f4e6fa] bg-[#faf0fc] px-3">
              <input
                type="search"
                placeholder="Search topics..."
                className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]"
              />
              <Search className="h-4 w-4 text-[#8b43ba]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(id);
                  }}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                    activeSection === id
                      ? "bg-[#faf0fc] text-[#8b43ba]"
                      : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#8b43ba]"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      activeSection === id ? "bg-[#8b43ba]" : "bg-[#d4bce2]"
                    }`}
                  />
                  {label}
                </a>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map(({ label, count, Icon }) => (
                <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#8b43ba]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#8b43ba]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#faf0fc]" id="book-consultation">
            <CalendarCheck className="h-9 w-9 text-[#8b43ba]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Ready for Support?</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Schedule your consultation with Dr. Ankush Garg for a detailed Mind-Body Assessment.
            </p>
            <a
              href="tel:+917823838638"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white transition hover:bg-[#6a338e]"
            >
              Schedule Consultation
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressDigestiveHealthIndiaPage;
