import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";
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
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Waves,
  Salad
} from "lucide-react";
import heroImage from "../images/stress-thyroid-health.webp";
import refluxImage from "../images/thyroid-gland-health.webp";
import gutBrainImage from "../images/stress-hormonal-health.webp";
import lifestyleImage from "../images/healthy-thyroid-lifestyle.webp";
import neuroAyurvedaImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import consultationImage from "../images/thyroid-consultation.webp";
import doctorImage from "../images/doctorimg-2.jpeg";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Thyroid Gland", id: "what-is-the-thyroid-gland" },
  { label: "Stress Connection", id: "how-are-stress-and-thyroid-health-connected" },
  { label: "Hypothyroidism & Hyperthyroidism", id: "understanding-hypothyroidism-and-hyperthyroidism" },
  { label: "Symptoms", id: "common-symptoms-associated-with-thyroid-disorders" },
  { label: "Warning Signs", id: "common-signs-you-should-not-ignore" },
  { label: "Assessment Process", id: "our-stress-and-thyroid-assessment-process" },
  { label: "Neuro-Ayurveda System", id: "the-neuro-ayurveda-development-system" },
  { label: "Support Approach", id: "how-we-support-individuals-concerned-about-thyroid-health" },
  { label: "Why Choose Us", id: "why-people-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-assessment" },
];

const rawSourceContent = "Key Takeaways\nUnderstanding Stress, Thyroid Health & Emotional Wellbeing\nStress & Thyroid Health Connection\nHypothyroidism vs Hyperthyroidism\nCommon Symptoms of Thyroid Disorders\nStress, Hormonal Balance & Overall Wellbeing\nEmotional Wellbeing & Thyroid Health\nWarning Signs That Need Medical Attention\nHealthy Lifestyle Habits for Thyroid Support\nStress Management & Healthy Routine Guidance\nNeuro-Ayurveda Development System\nManovaidya Stress & Thyroid Assessment Process\nFAQs About Stress & Thyroid Health\n\n\nHormonal Wellbeing\n\nStress & Thyroid Treatment in India\n\nUnderstanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing.\n\nA small, butterfly-shaped gland in the front part of the neck that makes hormones that are important to the body's metabolism, energy production, temperature, heart rate and other functions. [1][3][7]\n\nThe thyroid may cause hypothyroidism (underactive thyroid) or hyperthyroidism (overactive thyroid) if it does not make enough thyroid hormone or too much thyroid hormone. These conditions should be diagnosed and treated medically. [1][3][5]\n\nA number of people ask, \"Do emotional stress affect thyroid health?A lot of people ask whether emotional stress affect thyroid health. A study pointed out that chronic stress can affect the body's hormonal level and general health and wellbeing. Stress does not usually trigger thyroid problems, but can affect some people's symptoms and their ability to cope with illness or healthy lifestyle.\n\nAt Manovaidya, we do not just measure thyroid hormones - we look at the whole person. We take into account emotional wellbeing, lifestyle, sleep and mind-body health, and encourage healthier habits and care procedures, as well as appropriate care.\n\nWe practice the Neuro-Ayurveda Development System with Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya which is a structured five pillar approach that integrates brain health, gut health, behaviour, lifestyle and emotional wellbeing.\n\n\nWhat is the Thyroid Gland?\n\nThe thyroid gland is an important component of the endocrine (hormonal) system. [1][7]\n\nIt secretes hormones which influence:\n\nMetabolism\nEnergy production\nBody temperature\nHeart rate\nDigestion\nGrowth and development\nThe subject's mood and general wellbeing [1][3][5]\n\nToo little or too much thyroid hormone can affect a variety of body systems. Thyroid disorders are diagnosed by a health care provider based on the physical examination and blood tests, and if needed, imaging tests. [1][3][5]\n\n\n\nHow Are Stress and Thyroid Health Connected?\n\nStress hormones are naturally released by the body when it is stressed. The interaction of chronic stress with the endocrine system such as the thyroid is still under investigation.\n\nStress does not cause most thyroid problems, but it can affect:\n\nSleep quality\nEnergy levels\nDaily routines\nEmotional wellbeing\nLifestyle habits\nOverall quality of life\n\nAdditionally, people with thyroid disorders might have emotional problems that require attention and treatment beyond their regular medical care.\n\n\n\nUnderstanding Hypothyroidism and Hyperthyroidism\n\nThyroid gland can be underactive or overactive. In both cases, it is important to diagnose and treat these conditions by a qualified health care professional. [1][3][5]\n\nHypothyroidism (Underactive Thyroid)\n\nThis is when the thyroid makes less hormone than the body needs. [3]\n\n\nFatigue\nWeight gain\nFeeling cold\nDry skin\nConstipation\nSlow thinking\nLow mood\nHair thinning [3]\n\n\nHyperthyroidism (Overactive Thyroid)\n\nWhen the thyroid makes more hormone than is necessary. [5]\n\nWeight loss\nRapid heartbeat\nFeeling hot\nTremors\nAnxiety\nSweating\nDifficulty sleeping\nIncreased nervousness [5]\n\nCommon Symptoms Associated With Thyroid Disorders\n\nThe symptoms of thyroid problems depend on what kind of thyroid problem it is. People may experience:\n\nFatigue\nChanges in body weight\nFeeling colder or hotter than usual\nHair thinning\nDry skin\nMood changes\nDifficulty concentrating\nChanges in heart rate\nSleep disturbances\nLow energy levels [1][3][5][7]\n\nMany medical conditions can have these symptoms. A medical evaluation is required in order to have an accurate diagnosis. [1][3][5]\n\n\n\nCan Stress Make Thyroid Symptoms Feel Worse?\n\nFor some people with thyroid problems, emotional stress can make symptoms seem worse or harder to control.\n\nFor instance, stress can impact on:\n\nSleep quality\nEnergy levels\nEmotional balance\nDaily routines\nSelf-care habits\n\nStress management is not a substitute for medical care, but it can help maintain emotional health and well-being, which can help to improve the quality of life.\n\n\n\nWhy Emotional Wellbeing Matters\n\nEmotional well-being can be impacted by living with a thyroid disorder. Some individuals experience:\nAnxiety about long-term health\nFatigue affecting daily activities\nDifficulty maintaining work-life balance\nFrustration due to ongoing symptoms\nSleep difficulties\nReduced confidence\nLower quality of life\n\n\n\n\nCan Stress Cause Thyroid Problems?\n\nIt is a common question that many ask, do emotional stresses lead to thyroid disorders? At present, there is no clear-cut medical proof that stress can cause most thyroid conditions. Over time, however, stress can impact the body's hormonal balance, emotional state and lifestyle choices, and this can impact the experience of some symptoms related to thyroid.\n\nIf you already have thyroid issues, you might find that when you're stressed, you're also feeling more exhausted, uninterested in sleep or more out-of-sorts than usual. Stress management should be considered a lifestyle, not a substitute for proper medical diagnosis or management.\n\n\nCommon Signs You Should Not Ignore\n\nSome thyroid-related symptoms should never be ignored. Seek medical evaluation if you notice:\n\nPersistent fatigue\nUnexplained weight changes\nA neck full of water.A swollen neck.\nDifficulty swallowing\nPersistent hoarseness\nRapid or irregular heart rate.\nSevere weakness\nSignificant mood changes\nOther thyroid symptoms with hair loss.\nIntolerance to heat or cold (also persisting) [1][3][5][7]\n\nEarly evaluations can determine the cause of the problem and lead to early treatment.\n\nIf symptoms persist for several weeks, if you observe changes to your neck swelling, if your energy level is still feeling unusually low, if some weight changes for no reason, if your heart rate is unusually fast or slow, if your thyroid medication appears ineffective, or if you experience new symptoms after diagnosis, you should consult your healthcare professional. Anyone who has been diagnosed with a thyroid disease should have regular follow-up. [1][3][5]\n\n\nOur Stress & Thyroid Assessment Process\n\n\nAdjusting to a thyroid disorder doesn't just involve controlling the levels of thyroid hormone. Many people also report alterations in energy, sleep, mood and focus and a shift in daily habits. Medical diagnosis and treatment are critical, but knowledge of lifestyle and emotional health can also be essential for promoting wellbeing. [3][5]\n\n1. Understanding Your Health Journey\n\nAll consultations start with a full health history. We talk about: your thyroid diagnosis (if you have one), symptoms you are experiencing, your history of medications, blood tests, emotional wellbeing, stress levels, sleep habits, your daily routine, nutrition habits, physical activity, and family history.\n\n2. Comprehensive Mind-Body Assessment\n\nThis assessment has been structured to examine various aspects that can affect your overall wellbeing such as emotional wellbeing, stress patterns, sleep quality, lifestyle habits, nutrition, physical activity, work-life balance, daily routines and overall quality of life.\n\n3. Understanding Your Wellbeing Profile\n\nWe describe what we see in a simple and practical manner after the assessment. This comprises customised lifestyle recommendations and actionable steps to empower people to make sense of the connection between emotional wellbeing, lifestyle and thyroid health.\n\n\nThe Neuro-Ayurveda Development System\n\nIn Manovaidya, thyroid wellbeing is seen through the Neuro-Ayurveda Development System which is a 5 pillar approach that takes the brain, gut, behaviour, lifestyle and emotional wellbeing together. This approach is not just about the amount of thyroid hormone, but it's an approach to mind-body wellness over time.\n\n1. Brain Nourishment System\n\n\nThe benefits of healthy brain function are: Emotional balance, Mental clarity, Stress resilience, Healthy sleep, Cognitive wellbeing, Overall quality of life. Taking action to support emotional wellbeing can assist an individual to better manage normal stress.\n\n2. Gut Response System\n\nNutrition and digestive health are vital to people's well-being. In this pillar, there is a focus on understanding: Healthy eating habits, Gut-brain communication, Digestive wellbeing, Nutrition patterns, Lifestyle influences. [2][4][6]\n\n\n\n3. Neural Network System\n\nThe brain is a learning organ that changes and adapts every day with experiences. This pillar aims to build up: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, Cognitive flexibility.\n\n\n\n4. Sensory Integration System\n\nWellbeing is affected by environment and lifestyle. This pillar takes into account: Recovery, Relaxation, Environmental stress, Healthy routines, Lifestyle balance.\n\n\n5. Behaviour Guidance System\n\nMaking healthy choices contributes to overall well-being. This pillar is about: Sustainable everyday habits, Behavioural awareness, Lifestyle improvement, Stress management, Healthy habit formation.\n\nHow We Support Individuals Concerned About Thyroid Health\n\nHealth is unique for each person. The care at Manovaidya is personalized based on the individual's emotional well-being, lifestyle and health issues.\n\nStress & Thyroid Assessment\nMind-Body Health Assessment\nEmotional Wellbeing Guidance\nLifestyle Education\nHealthy Habit Planning\nStress Management Guidance\nBrain Wellness Education\n Progress Monitoring & Follow-Up\n\nSupporting Healthy Thyroid Function\n\nHealthy lifestyle choices assist in promoting wellbeing, alongside medical interventions. These may include:\n\n• Taking thyroid medication exactly as prescribed\n • Attending regular medical follow-ups and blood tests\n • Eating a balanced diet and getting adequate sleep\n • Staying physically active and managing everyday stress [1][3][5]\n\nLifestyle changes should be used in addition to, rather than instead of, medical treatment. [1][3][5]\n\nWhy People Across India Choose Manovaidya\n\nDelhi, Noida, Gurgaon, Faridabad, Ghaziabad and all across India, people and families opt for Manovaidya due to our approach to the mind-body health.\n\nPeople from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and other parts of the country visit Manovaidya to understand how emotional wellness, stress and thyroid health are interconnected; which is achieved by comprehensive assessments and customized lifestyle advice and recommendations.\n\nComprehensive Mind-Body Health Assessments\nNeuro-Ayurveda Development System\nLifestyle & Stress Management Guidance\nHolistic Emotional Wellbeing Support\nPersonalised Long-Term Wellness Approach\nOnline & In-Clinic Consultations\nGuidance by Dr. Ankush Garg Dr. Ankush Garg\n\n\nAbout Dr. Ankush Garg\n\nMental Health Specialist & Founder of Manovaidya\n\nDr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System.\n\n\nHis work focuses on understanding the relationship between emotional wellbeing, lifestyle, brain health and mind-body wellness. Through structured assessments, personalised guidance and continuous follow-up, he helps individuals better understand how stress and daily habits may influence their overall wellbeing while living with chronic health conditions.\n\nBased in Delhi NCR, Dr. Ankush Garg provides Mind-Body Health Assessments, helping individuals understand the relationship between emotional wellbeing, lifestyle and thyroid health through the Neuro-Ayurveda Development System. He provides consultations across India through both online and in-clinic appointments.\n\n\n\nFrequently Asked Questions (FAQs)\n\n1. Can stress affect thyroid health?\n\nStress over extended periods can affect the body's balance of hormones, sleep, lifestyle habits and wellbeing. Stress itself is not really a direct cause of most thyroid problems, but can impact the way that some people feel symptoms of thyroid dysfunction or handle it.\n\n2. Can stress cause thyroid problems?\n\nAt this time, there is no medical evidence to indicate that most thyroid conditions are directly caused by stress. Multiple factors such as autoimmune disease, genetics, certain medications and other medical conditions typically lead to thyroid conditions. Stress can have indirect effects on overall health and symptom management. [1][3][5]\n\n3. What is the difference between hypothyroidism and hyperthyroidism?\n\nHypothyroidism is defined as an underactive thyroid and hyperthyroidism as an overactive thyroid. Both conditions have an impact on the body's metabolism and should be diagnosed and treated by a qualified health care professional. [1][3][5]\n\n4. What are the common symptoms of thyroid disorders?\n\nCommon symptoms may include fatigue, weight changes, feeling unusually cold or hot, hair thinning, dry skin, sleep disturbances, mood changes, changes in heart rate and difficulty concentrating. Many varieties of disease can have these symptoms, and professional assessment is required. [1][3][5][7]\n\n5. Can stress make thyroid symptoms feel worse?\n\n\n\nFatigue, sleep difficulties and overall well-being are more challenging for some people with thyroid disorders when they are under emotional stress. Stress management may be a complementary strategy for maintaining quality of life along with the medical care of the disease.\n\n6. Can poor sleep affect thyroid health?\n\nSleep has an important role in the overall hormonal health and wellbeing. Sleep issues can affect energy levels, mood and healing. Good sleep patterns are crucial to general health for those with thyroid issues.\n\n7. Can lifestyle habits support thyroid health?\n\nYes. Good health comes through a healthy diet, regular exercise, sleep, taking prescribed thyroid medication, follow-up appointments and stress-management. Lifestyle changes should be used in conjunction with—not in place of—medical treatment. [1][3][5]\n\n8. When should I see a healthcare professional for thyroid symptoms?\n\nIf you have any of the above symptoms that persist, or if you are experiencing other changes in your health or occurrence of heat or cold intolerance, medical evaluation should be considered. [1][3][5][7]\n\n9. Do thyroid disorders always cause noticeable symptoms?\n\nNo. This can be a mild thyroid condition that has virtually no symptoms, or it can be a condition that affects energy, metabolism and overall well-being. Often blood tests are required to confirm a diagnosis. [1][3][5]\n\n10. What is a Stress & Thyroid assessment?\n\nStress & Thyroid is a structured test that delves into the emotional health, stress, sleep hygiene, lifestyle, nutrition, daily routine, thyroid history, and overall health. It can be used to provide an overview of factors which may affect overall wellbeing and for personalised guidance.\n\n\n11. How does Manovaidya support individuals concerned about thyroid health?\n\nAt Manovaidya, we are more interested in the connection between emotional well being, lifestyle and general health than simply in thyroid hormone levels. We provide detailed information about the whole person mind-body wellbeing through structured evaluations, personalised guidance and Neuro-Ayurveda Development System.\n\n12. What is the Neuro-Ayurveda Development System?\n\nBrain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance are Manovaidya's structured five-pillar approach, which takes a whole-person perspective of emotional wellbeing, lifestyle and overall health. It offers a global view, in-depth evaluation and tailored advice.\n\n13. Can managing stress support people living with thyroid disorders?\n\nHealthy routines, regular exercise, healthy eating, good sleep and relaxation techniques can help manage stress and contribute to emotional wellbeing and a positive lifestyle. These practices are not a substitute for proper medical diagnosis and treatment. [1][3][5]\n\n14. How are thyroid disorders diagnosed?\n\nThyroid disorders are typically detected by a physical exam, blood tests (including those related to thyroid hormone levels) and imaging tests (if needed). Investigations are tailored to individual symptoms, based on advice from a trained health care professional. [1][3][5]\n\n15. Why should I choose Manovaidya for Stress & Thyroid support?\n\nHere at Manovaidya, we strive to create a sense of understanding the connection between emotional well being, lifestyle and long-term health with structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our integrated practice allows us to educate our clients on stress related wellbeing issues, while supporting them in managing their thyroid conditions with appropriate medical treatment.\n\n\nConcerned About Stress and Thyroid Health?\nBook a structured Stress & Thyroid Assessment with Manovaidya to better understand the relationship between emotional wellbeing, lifestyle, hormonal health and thyroid disorders while receiving personalised guidance.\nBook Thyroid Assessment\nTalk to Our Team\n\nReferences\n[1] American Thyroid Association – Thyroid Information and Thyroid Disorders\n https://www.thyroid.org/thyroid-information/\n[2] Ministry of AYUSH – Ayurveda\n https://ayush.gov.in/\n[3] National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) – Hypothyroidism (Underactive Thyroid)\n https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism\n[4] Central Council for Research in Ayurvedic Sciences (CCRAS) – Ayurveda Research\n https://ccras.nic.in/\n[5] National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) – Hyperthyroidism (Overactive Thyroid)\n https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism\n[6] AYUSH Research Portal – Evidence-Based Research in Ayurveda\n https://ayushportal.nic.in/\n[7] MedlinePlus – Thyroid Diseases\n https://medlineplus.gov/thyroiddiseases.html\n[8] World Health Organization (WHO) – Traditional Medicine & Global Centre for Traditional Medicine\nhttps://www.who.int/initiatives/global-centre-for-traditional-medicine";

const keyTakeawayEnd = rawSourceContent.search(/\n\s*Hormonal Wellbeing/);
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
  if (/^\[?https?:\/\//i.test(line)) continue;
  const nextUrlLine = referenceLines.slice(index + 1).find((item) => /^\[?https?:\/\//i.test(item));
  const nextUrl = nextUrlLine?.match(/https?:\/\/[^\]\s)]+/i)?.[0] || nextUrlLine;
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
  "What is the Thyroid Gland?",
  "How Are Stress and Thyroid Health Connected?",
  "Understanding Hypothyroidism and Hyperthyroidism",
  "Hypothyroidism (Underactive Thyroid)",
  "Hyperthyroidism (Overactive Thyroid)",
  "Common Symptoms Associated With Thyroid Disorders",
  "Can Stress Make Thyroid Symptoms Feel Worse?",
  "Why Emotional Wellbeing Matters",
  "Can Stress Cause Thyroid Problems?",
  "Common Signs You Should Not Ignore",
  "Our Stress & Thyroid Assessment Process",
  "1. Understanding Your Health Journey",
  "2. Comprehensive Mind-Body Assessment",
  "3. Understanding Your Wellbeing Profile",
  "The Neuro-Ayurveda Development System",
  "1. Brain Nourishment System",
  "2. Gut Response System",
  "3. Neural Network System",
  "4. Sensory Integration System",
  "5. Behaviour Guidance System",
  "How We Support Individuals Concerned About Thyroid Health",
  "Supporting Healthy Thyroid Function",
  "Why People Across India Choose Manovaidya",
  "About Dr. Ankush Garg",
  "Dr. Ankush Garg",
  "Mental Health Specialist & Founder of Manovaidya",
];
const sectionHeadings = new Set(sectionHeadingLabels);
const duplicateHeroLines = new Set([
  "Key Takeaways",
  "Hormonal Wellbeing",
  "Stress & Thyroid Treatment in India",
  "Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing.",
  "Frequently Asked Questions (FAQs)",
  ...keyTakeawayLabels,
]);

const faqStart = rawSourceContent.search(/\n\s*1\.\s*Can stress affect thyroid health\?/i);
const faqEnd = rawSourceContent.indexOf("\nConcerned About Stress and Thyroid Health?", faqStart);
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
  { key: "mind-body-health", pattern: /\bMind-Body Health\b/i, href: "/mind-body-health-care-india" },
  { key: "stress-thyroid", pattern: /\bStress & Thyroid\b/i, href: "/stress-and-thyroid" },
  { key: "thyroid", pattern: /\bthyroid\b/i, href: "/stress-and-thyroid" },
  { key: "hypothyroidism", pattern: /\bhypothyroidism\b/i, href: "/stress-and-thyroid" },
  { key: "hyperthyroidism", pattern: /\bhyperthyroidism\b/i, href: "/stress-and-thyroid" },
  { key: "stress-fatigue", pattern: /\bfatigue\b/i, href: "/stress-and-fatigue" },
  { key: "high-blood-pressure", pattern: /\bhigh blood pressure\b/i, href: "/stress-and-high-blood-pressure" },
  { key: "sleep", pattern: /\bsleep\b/i, href: "/sleep-disorders-treatment-india" },
  { key: "women-health", pattern: /\bWomen's Mental Health\b/i, href: "/womens-mental-health-care" },
  { key: "adult-health", pattern: /\bAdult Mental Health\b/i, href: "/adult-mental-health-care" },
  { key: "neuro-ayurveda", pattern: /\bNeuro-Ayurveda Development System\b/i, href: "/about/approach" },
  { key: "dr-ankush", pattern: /\bDr\. Ankush Garg\b/i, href: "/about/doctor" },
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
  { label: "Stress & Thyroid", count: 12, Icon: Activity },
  { label: "Hormonal Health", count: 9, Icon: HeartHandshake },
  { label: "Thyroid Support", count: 11, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health Care", href: "/mind-body-health-care-india/" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue/" },
  { label: "Stress & High Blood Pressure", href: "/stress-and-high-blood-pressure/" },
  { label: "Women's Mental Health Care", href: "/womens-mental-health-care/" },
  { label: "Adult Mental Health Care", href: "/adult-mental-health-care/" },
  { label: "Stress & Digestive Health", href: "/stress-and-digestive-health/" },
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
        {trimmed}
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
  const compactLines = section.lines.filter((line) => line.trim());
  const listLikeLines = section.lines.filter((line) => {
    const trimmed = line.trim();
    return trimmed && trimmed.length < 82;
  }).length;
  const visualImage = section.id === "what-is-the-thyroid-gland" || section.id === "understanding-hypothyroidism-and-hyperthyroidism" || section.id === "hypothyroidism-underactive-thyroid" || section.id === "hyperthyroidism-overactive-thyroid" || section.id === "common-symptoms-associated-with-thyroid-disorders" ? refluxImage :
    section.id === "how-are-stress-and-thyroid-health-connected" || section.id === "can-stress-make-thyroid-symptoms-feel-worse" || section.id === "can-stress-cause-thyroid-problems" ? gutBrainImage :
    section.id === "the-neuro-ayurveda-development-system" ? neuroAyurvedaImage :
    section.id === "supporting-healthy-thyroid-function" ? lifestyleImage : null;
  const isGutBrainSection = section.id === "how-are-stress-and-thyroid-health-connected" || section.id === "can-stress-make-thyroid-symptoms-feel-worse" || section.id === "can-stress-cause-thyroid-problems";
  const isDigestiveSymptomsSection = section.id === "what-is-the-thyroid-gland" || section.id === "understanding-hypothyroidism-and-hyperthyroidism" || section.id === "hypothyroidism-underactive-thyroid" || section.id === "hyperthyroidism-overactive-thyroid" || section.id === "common-symptoms-associated-with-thyroid-disorders";
  const isNeuroAyurvedaSection = section.id === "the-neuro-ayurveda-development-system";
  const isDigestiveWellbeingSection = section.id === "supporting-healthy-thyroid-function";
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
            {compactLines.map((line, index) => <ContentLine key={index} line={line} index={index} sectionIndex={sectionIndex} onCitationClick={onCitationClick} />)}
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
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Hormonal Wellbeing</p>
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
            Join our mind-body health newsletter for stress, thyroid and hormonal wellbeing guidance.
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

function StressThyroidIndiaPage() {
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
        title="Stress & Thyroid Treatment in India | Mind-Body Health | Manovaidya"
        description="Looking for Stress & Thyroid treatment in India? Learn how stress impacts thyroid function, metabolism, and hormonal balance at Manovaidya."
        keywords="Stress & Thyroid, Thyroid Health India, Stress and Hormones, Hypothyroidism and Stress, Hyperthyroidism, Thyroid Function, Emotional Wellbeing, Mind-Body Health, Thyroid Assessment, Neuro-Ayurveda Development System, Hormonal Wellbeing"
        path="/stress-and-thyroid"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Thyroid Treatment in India",
          "description": "Looking for Stress & Thyroid treatment in India? Learn how stress impacts thyroid function, metabolism, and hormonal balance at Manovaidya."
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
                <span className="text-[#4b345d]">Stress & Thyroid</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Hormonal Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Thyroid Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Thyroid Health and Emotional Wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(225,79,121,0.22)] transition hover:bg-[#6a338e]">
                  Book Thyroid Assessment
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(194,62,98,0.22)] lg:flex">
                <Activity className="mb-1 h-5 w-5" />
                Mind-Body Health
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(225,79,121,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and thyroid health support through a holistic mind-body approach" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress and Thyroid Health?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Thyroid Assessment with Manovaidya to better understand the relationship between emotional wellbeing, lifestyle, hormonal health and thyroid disorders while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Thyroid Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Book a stress and thyroid assessment at Manovaidya" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img src={doctorImage} alt="Dr Ankush Garg Manovaidya stress thyroid hormonal wellbeing clinician" className="h-12 w-12 shrink-0 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">Authorised & Clinically Reviewed by Dr Ankush Garg</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Clinical Focus: Mind-Body Health, Thyroid, Hormonal Wellbeing and Mental Health</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Last Updated: [20-07-2026]</p>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#5d3b90] p-3 text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15"><Activity className="h-5 w-5" /></span>
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
            <h2 className="mt-4 text-[16px] font-black leading-tight text-[#21142d]">
              Ready for an Assessment?
            </h2>
            <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#51465a]">
              Take the first step towards understanding your mind-body health. Our team is here to guide you.
            </p>
            <a
              href="tel:+917823838638"
              className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-[#8b43ba] text-[13px] font-black text-white shadow-sm transition hover:bg-[#6a338e]"
            >
              Book Now
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressThyroidIndiaPage;

