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
import heroImage from "../images/stress-and-acidity.png";
import refluxImage from "../images/acid-reflux-stress.png";
import gutBrainImage from "../images/gut-brain-acidity.png";
import lifestyleImage from "../images/healthy-digestive-lifestyle.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-acidity.png";
import consultationImage from "../images/acidity-consultation.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import Seo from "../components/Seo";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is Acidity?", id: "what-is-acidity" },
  { label: "Stress Connection", id: "how-are-stress-and-acidity-connected" },
  { label: "Gut-Brain Connection", id: "the-gut-brain-connection-and-acidity" },
  { label: "Symptoms", id: "common-symptoms-of-acidity" },
  { label: "Assessment Process", id: "our-stress-and-acidity-assessment-process" },
  { label: "Neuro-Ayurveda System", id: "the-neuro-ayurveda-development-system" },
  { label: "Support Approach", id: "how-we-support-individuals-with-stress-and-acidity" },
  { label: "Why Choose Us", id: "why-people-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-assessment" },
];

const rawSourceContent = "Key Takeaways\nUnderstanding Stress, Acidity & Digestive Health\nStress & Acidity Connection\nGut-Brain Connection & Digestive Wellbeing\nCommon Symptoms of Acidity\nFactors That May Influence Acid Reflux\nEmotional Wellbeing & Digestive Health\nWarning Signs That Need Medical Attention\nHealthy Lifestyle Habits for Digestive Support\nStress Management & Healthy Routine Guidance\nNeuro-Ayurveda Development System\nManovaidya Stress & Acidity Assessment Process\nFAQs About Stress, Acidity & Acid Reflux\n\n\nDigestive Wellbeing\n\n\nStress & Acidity Treatment in India\n\n\nUnderstanding the Relationship Between Stress, Acidity and Digestive Health through the Neuro-Ayurveda Development System.\n\n\nUnderstanding Stress & Acidity\n\n\nMany people have digestive problems of this kind: acidity, heartburn and acid reflux. These symptoms are more apparent in some during stressful emotional situations. For others, the pain may begin after eating some foods; after skipping or changing a meal schedule or diet. [1][3]\n\nRemember that not all situations of acidity are caused by stress. All of these can be factors: diet, everyday habits, medical and digestive conditions. Meanwhile, emotional stress can influence the functioning of the digestive system and the person's perception of and reaction to the symptoms. [1][3][5]\n\nThere is a constant communication between brain and digestive system via the gut-brain axis. The relationship is multi-faceted and is related to the nervous system, hormones and immune pathways. Why digestion and emotional well-being can go so hand in hand. [5]\n\nWe at Manovaidya do not focus on the digestive symptom only, and seek to know the person. We consider emotional wellbeing, lifestyle, sleep, nutrition and gut-brain communication throughout and work towards the long-term maintenance of mind-body wellness.\n\nWe use the Neuro-Ayurveda Development System with Dr. Ankush Garg the Mental Health Specialist and Founder of Manovaidya. This 5-pillar structured approach integrates brain health, gut health, behaviour and lifestyle for overall wellbeing.\n\n\nWhat is Acidity?\n\nWhen referring to pain associated with stomach acid, acidity is often used. It can mean reflux of acid into the food pipe (known as acid reflux) or to irritation of the upper digestive system. [3][7]\n\n\nIndividuals with acidity might feel:\n\nHeartburn\nBurning sensation in the chest\nSour taste in the mouth\nIndigestion\nUpper abdominal discomfort\nFeeling of food coming back into the throat [3][7]\n\nThese symptoms may happen from time to time, or continue to happen.\n\nIf symptoms are persisting or severe, always seek a qualified health care professional's advice. [1][3]\n\n\nHow Are Stress and Acidity Connected?\n\nEmotional stress may have a variety of effects on digestion, and it is not a similar experience for all. [5]\n\nIn times of stress, some people experience:\n\nIncreased stomach discomfort\nHeartburn\nChanges in appetite\nIndigestion\nGreater awareness of digestive symptoms\n\nThe gut-brain axis is still under investigation as to the various ways emotional wellbeing and digestive health are connected. While it may be, that the digestive function is affected by stress or the symptoms can be more noticeable in some people, it is not necessarily caused by stress, but by a variety of factors. [1][5]\n\n\n\nThe Gut-brain Connection and Acidity\n\nThere are links between the brain and digestive system via nerves, hormones and immune pathways. [5]\n\nThis constant interaction is used to help control: Digestive function, Appetite, Stress responses, Sensitivity in the digestive system, Overall digestive wellbeing. [5]\n\nFor some, it's as if digestive discomfort intensifies or occurs more frequently during periods of emotional stress. The role the gut-brain axis plays in digestive issues, such as reflux and indigestion, is still being explored. [5]\n\n\nCommon Symptoms of Acidity\n\nThe sensation of acidity varies from person to person. Symptoms include:\n\nChest pain or burning sensation in the chest\n\nHeartburn\n\nA bad taste in the mouth or a bitter taste in the mouth\n\nIndigestion\n\nUpper abdominal discomfort\n\n\nBurping\n\nSatisfied feeling after eating\n\n\n\nMild nausea [3][7]\n\nOther digestive diseases may also cause these symptoms. That is why it is crucial to see a doctor if a proper diagnosis is required. [1][3]\n\nWho May Notice Acidity During Stress?\n\nOther people experience digestive issues when they are more stressed at work, during exams and when they are anxious, emotional, sleep-disordered, too busy, eating at irregular hours, or having major changes in their lives. [5]\n\nThis response can vary from person to person; for some, this pattern will be evident and for others, it will not.\n\nWhy Emotional Wellbeing Matters\n\nRoutine acidity can impact much more than physical comfort. May start to affect daily decisions, sleep, and self-confidence.\n\n\nAnxiety about eating certain foods\nPoor sleep because of nighttime symptoms\nReduced confidence during travel\nDifficulty enjoying meals\nEmotional frustration due to recurring discomfort\n\nCan Stress Make Acidity Symptoms Worse?\n\nA lot of people believe that heartburn, indigestion or acid reflux is more noticeable during emotionally stressful times. This link is still being investigated in the study of the gut-brain axis, a constant connection between the brain and digestive system. [5]\n\nStress can impact on how a person eats, sleeps, carries out their normal daily activities and perceive symptoms of digestion. Despite this, acidity typically occurs as a result of multiple causes, and the stress alone does not have to be blamed for the acidity. [1][3][5]\n\n\nCommon Signs You Should Not Ignore\n\nThis can occasionally be acidic. But it is important to have medical assessment for:\n\nFrequent heartburn\nPersistent acid reflux\nBurning sensation in the chest\nDifficulty swallowing\nRecurrent indigestion\nPersistent upper abdominal discomfort\nFrequent vomiting\nSymptoms lasting despite lifestyle changes [1][3][7]\n\nGet immediate medical attention if you have: Trouble swallowing, Unexplained loss of weight, Blood in vomit, Black or bloody stools, Severe chest pain, Persistent vomiting, symptoms for several weeks that gradually get worse. [1][3][7]\n\n\nOur Stress & Acidity Assessment Process\n\nWe look at the whole picture of digestive health, emotional well-being and lifestyle at Manovaidya, rather than individual symptoms.\n\n1. Understanding Your Health Journey\n\nEach consultation starts with listening and understanding your full health journey and discussing symptoms, eating habits, sleep quality, stress, medical history and past treatments.\n\n\n2. Comprehensive Mind-Body Assessment\n\nThe structured assessment is based on a few factors that can impact digestive wellbeing: emotional wellbeing, lifestyle habits, stress patterns, nutrition, daily routine and work-life balance.\n\n3. Understanding Your Wellbeing Profile\n\nAfter the assessment, we give a straightforward, clear and applicable explanation of our observations. This encompasses individual guidance and action steps.\n\n\n\nThe Neuro-Ayurveda Development System\n\n\nNeuro-Ayurveda Development System is our understanding of acidity and digestive wellbeing. This is a 5-pillar structure approach that takes into account the brain health, gut health, behaviour, lifestyle and emotional wellbeing.\n\n1. Brain Nourishment System\n\nEmotional regulation, Stress resilience, Mental clarity, Healthy sleep, Cognitive wellbeing are supported by a healthy brain function. Supporting emotional wellbeing could help people to respond to the stresses in everyday life in a balanced way.\n\n2. Gut Response System\n\nThere are several factors that help with healthy digestion. This pillar is about understanding: Gut-brain communication, Digestive wellbeing, Nutrition, Healthy eating habits and Lifestyle influences. [5][6]\n\n3. Neural Network System\n\nThis strand of the pillar is about strengthening: Emotional resilience, Healthy thinking patterns, Behavioural awareness, Stress management, Cognitive flexibility.\n\n4. Sensory Integration System\n\nThe environmental demands and stresses can impact on emotional and digestive comfort. This takes in to account: Environmental stress, Recovery, Relaxation, Lifestyle balance.\n\n\n5. Behaviour Guidance System\n\nLong-term digestive and emotional health plays an important role in healthy daily routines. This emphasizes: Positive habits, Awareness of behaviour, Change in lifestyle, Long-term daily habits. [3][6]\n\n\nHow We Support Individuals with Stress & Acidity\n\nIndividuals are different and so are the various reactions to acidity. Symptom pattern and the impact on functioning can differ from person to person, as can triggers. At Manovaidya, the individual's digestive issues, emotional needs and lifestyle are catered to.\n\nStress & Acidity Assessment\nMind-Body Health Assessment\nEmotional Wellbeing Guidance\nLifestyle & Nutrition Education\nStress Management Guidance\nHealthy Routine Planning\nGut-Brain Wellness Education\nProgress Monitoring & Follow-Up\n\n\nSupporting Digestive Health and Emotional Wellbeing\n\nRegular, routine actions can help the gut and the mind. Helpful practices include: [1][3][5]\n\nEating a scheduled diet, and not eating a very late night meal\nAvoid dehydration by staying active and drinking plenty of water.\nTaking care of sleep patterns and coping with daily stress\n\nChanges in lifestyle should be in addition to, not instead of, appropriate medical care. [1][3]\n\n\nWhy People Across India Choose Manovaidya\n\nPeople and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India opt for Manovaidya as they believe in integrating emotional well being with digestive health.\n\nPeople from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and all over India come to Manovaidya to gain insights into the relationship between stress, acidity, acid reflux and digestive health by undergoing structured assessments and receiving individual guidance.\n\nComprehensive Mind-Body & Digestive Health Assessments\nUnderstanding of the Gut-Brain Axis\nNeuro-Ayurveda Development System\nLifestyle & Stress Management Guidance\nHolistic Emotional Wellbeing Support\nOnline & In-Clinic Consultations\nPersonalised Long-Term Wellness Approach\n\n\nAbout \n\nDr. Ankush Garg\n\nMental Health Specialist & Founder of Manovaidya\n\nDr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System. His work focuses on the relationship between emotional wellbeing, gut health, brain function and lifestyle, particularly for individuals dealing with stress-related digestive concerns.\nThrough structured assessments, personalised guidance and regular follow-up, Dr. Ankush Garg helps individuals understand the gut-brain connection more clearly and work towards healthier, sustainable lifestyle habits.\nBased in Delhi NCR, Dr. Ankush Garg provides Mind-Body and Digestive Health Assessments to help individuals understand the relationship between emotional wellbeing, the gut-brain axis and stress-related acidity through the Neuro-Ayurveda Development System. He provides consultations to individuals across India through both online and in-clinic appointments.\n\n\nFrequently Asked Questions (FAQs)\n\n1. Can stress cause acidity?\n\nStress can disrupt digestion, and make the sensation of acidity or heartburn more apparent for some. But as with everything else, acidity often comes wrapped in a number of other packages, including diet, lifestyle, medical issues and digestive ailments. An ongoing or persistent symptom should always be evaluated by a doctor. [1][3][5]\n\n2. Can stress make acid reflux worse?\n\nOthers find that when they are emotionally upset, the acid reflux symptoms are more intense. The gut-brain connection is still being investigated for its impact on gut health. Stress can influence the level of symptoms, but it is just one of a number of factors. [1][5]\n\n3. What is the difference between acidity and acid reflux?\n\nAcidity is a generic term that is applied to indigestion and heartburn. Acid reflux is where the stomach acid goes back up into the food pipe, it can lead to burning sensation in the chest or sour taste in the mouth. A health care provider may be able to determine the cause of these symptoms. [3][7]\n\n4. What are the common symptoms of acidity?\n\nSome children have heartburn, a burning sensation in the chest, a sour or bitter taste in the mouth, indigestion, upper abdominal discomfort, burping and feeling very full after a meal. These symptoms can also be seen in other digestive diseases, so a medical evaluation may be necessary. [3][7]\n\n5. Can anxiety affect acidity?\n\nFor some, the digestive discomfort or heartburn/indigestion occurs more often during times of worry or emotional stress. The symptoms are not unique to this disease and therefore a proper evaluation by a professional is necessary to make a diagnosis. [1][5]\n\n6. Can poor sleep make acidity worse?\n\nThere is a relationship between sleep and digestion. Bad sleep can make the person stressed and affect his/her wellbeing, and acidity during the night can keep him/her awake. Getting a good night's sleep can help to improve your digestion and emotional well-being. [1][3]\n\n7. Can lifestyle habits influence acidity?\n\nYes. What you eat, when you eat, your body weight, exercise, sleep, smoking and drinking alcohol all can affect your digestive health. Medically sound care needs to be used in conjunction with healthy lifestyle practices. [1][3][7]\n\n8. When should I seek medical attention for acidity?\n\nIf the heartburn persists, is difficult to swallow, you have lost weight without a reason, vomit with blood, stools are black or bloody, severe chest pain or you continue to vomit or have chest pain after making lifestyle changes, you should go to the doctor for an evaluation. [1][3][7]\n\n9. Is every episode of acidity caused by stress?\n\nNo. Food habits, acid refluxes, some medicines, digestive disorders and other medical conditions could be responsible for acidity. Stress can affect symptoms in some individuals, but can't always be blamed as the only cause. [1][3][5]\n\n\n10. What is a Stress & Acidity assessment?\n\nStress & Acidity assessment is a comprehensive evaluation of digestive symptoms, emotional wellbeing, stress levels, lifestyle habits, sleep, nutrition and overall health. It can support the identification of factors that might be affecting wellbeing, and can help provide a basis for personalised guidance.\n\n11. How does Manovaidya support individuals experiencing stress-related acidity?\n\nWe see the connection between emotional well-being, lifestyle and digestive health at Manovaidya, rather than just the digestive symptom. We assist people to gain clarity of their whole mind-body condition through structured assessments, personalised guidance and Neuro-Ayurveda Development System.\n\n12. What is the Neuro-Ayurveda Development System?\n\nThe Neuro-Ayurveda Development System is Manovaidya's 5 pillar structure. It looks at Brain Nourishment, Gut Response, Neural Network Development and Sensory Integration and Behaviour Guidance as a whole, and discusses emotional wellbeing, gut health and lifestyle. It provides a holistic view as well as a detailed assessment and tailored support.\n\n\n13. Can managing stress support digestive wellbeing?\n\nMaintaining good stress management, exercising regularly, eating a balanced diet, getting sufficient sleep and following a consistent schedule can help to maintain a healthy digestive system. The measures may be used in addition to proper diagnosis and treatment, but they are not a substitute for doctors' care. [1][3][5]\n\n14. How is stress-related acidity different from IBS?\n\nAcidity primarily causes problems in the upper digestive tract and is typically accompanied by heartburn, acid reflux and indigestion. IBS mainly impacts the gut and is more commonly associated with abdominal discomfort, bloating and bowel issues. The best way to diagnose both of these conditions is to see a health professional. [3][5]\n\n\n15. Why should I choose Manovaidya for Stress & Acidity support?\n\nManovaidya focuses on the relationship between emotional wellbeing, the gut-brain axis and lifestyle through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. This holistic approach helps individuals understand stress-related digestive concerns while supporting long-term mind-body wellbeing alongside appropriate medical care.\n\n\nConcerned About Stress, Acidity or Heartburn?\n\nBook a structured Stress & Acidity Assessment with Manovaidya to understand the relationship between emotional wellbeing, acid reflux, digestive health and lifestyle more clearly while receiving personalised guidance.\n\nBook Acidity Assessment\nTalk to Our Team\n\n\n\nReferences\n[1] American College of Gastroenterology Clinical Guideline: Diagnosis and Management of Gastroesophageal Reflux Disease (GERD)\n[https://pubmed.ncbi.nlm.nih.gov/34807007/](https://pubmed.ncbi.nlm.nih.gov/34807007/)\n[2] Ministry of AYUSH – Ayurveda\n[https://ayush.gov.in/](https://ayush.gov.in/)\n[3] National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) – Acid Reflux (GER & GERD) in Adults\n[https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults](https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults)\n[4] Central Council for Research in Ayurvedic Sciences (CCRAS) – Ayurveda Research\n[https://ccras.nic.in/](https://ccras.nic.in/)\n[5] Harvard Health – The Gut-Brain Connection\n[https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection](https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection)\n[6] AYUSH Research Portal – Evidence-Based Research in Ayurveda\n[https://ayushportal.nic.in/](https://ayushportal.nic.in/)\n[7] Mayo Clinic – Gastroesophageal Reflux Disease (GERD): Symptoms and Causes\n[https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940](https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940)\n[8] World Health Organization (WHO) – Traditional Medicine & Global Centre for Traditional Medicine\n[https://www.who.int/initiatives/global-centre-for-traditional-medicine](https://www.who.int/initiatives/global-centre-for-traditional-medicine)\n\n";

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
  "Understanding Stress & Acidity",
  "What is Acidity?",
  "How Are Stress and Acidity Connected?",
  "The Gut-brain Connection and Acidity",
  "The Gut-Brain Connection and Acidity",
  "Common Symptoms of Acidity",
  "Who May Notice Acidity During Stress?",
  "Why Emotional Wellbeing Matters",
  "Can Stress Make Acidity Symptoms Worse?",
  "Common Signs You Should Not Ignore",
  "Our Stress & Acidity Assessment Process",
  "1. Understanding Your Health Journey",
  "2. Comprehensive Mind-Body Assessment",
  "3. Understanding Your Wellbeing Profile",
  "The Neuro-Ayurveda Development System",
  "1. Brain Nourishment System",
  "2. Gut Response System",
  "3. Neural Network System",
  "4. Sensory Integration System",
  "5. Behaviour Guidance System",
  "How We Support Individuals with Stress & Acidity",
  "Supporting Digestive Health and Emotional Wellbeing",
  "Why People Across India Choose Manovaidya",
  "About ",
  "About",
  "Dr. Ankush Garg",
  "Mental Health Specialist & Founder of Manovaidya",
];
const sectionHeadings = new Set(sectionHeadingLabels);
const duplicateHeroLines = new Set([
  "Key Takeaways",
  "Digestive Wellbeing",
  "Stress & Acidity Treatment in India",
  "Understanding the Relationship Between Stress, Acidity and Digestive Health through the Neuro-Ayurveda Development System.",
  "Frequently Asked Questions (FAQs)",
  ...keyTakeawayLabels,
]);

const faqStart = rawSourceContent.search(/\n\s*1\.\s*Can stress cause acidity\?/i);
const faqEnd = rawSourceContent.indexOf("\nConcerned About Stress, Acidity or Heartburn?", faqStart);
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
  { pattern: /\bStress & Acidity\b/i, href: "/stress-and-acidity" },
  { pattern: /\bacidity\b/i, href: "/stress-and-acidity" },
  { pattern: /\bacid reflux\b/i, href: "/stress-and-acidity" },
  { pattern: /\bheartburn\b/i, href: "/stress-and-acidity" },
  { pattern: /\bgut-brain axis\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bgut-brain connection\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bdigestive health\b/i, href: "/stress-and-digestive-health" },
  { pattern: /\bIBS\b/i, href: "/stress-ibs-support-india" },
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
  { label: "Stress & Acidity", count: 12, Icon: Activity },
  { label: "Gut-Brain Axis", count: 9, Icon: HeartHandshake },
  { label: "Digestive Health", count: 11, Icon: Salad },
  { label: "Stress Support", count: 10, Icon: ShieldCheck },
  { label: "Assessment", count: 8, Icon: MessageCircle },
];

const relatedPages = [
  { label: "Mind-Body Health", href: "/mind-body-health-care-india/" },
  { label: "Stress & Digestive Health", href: "/stress-and-digestive-health" },
  { label: "Stress & IBS", href: "/stress-ibs-support-india" },
  { label: "Stress & Migraine", href: "/stress-and-migraine" },
  { label: "Stress & Fatigue", href: "/stress-and-fatigue" },
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
  const compactLines = section.lines.filter((line) => line.trim());
  const listLikeLines = section.lines.filter((line) => {
    const trimmed = line.trim();
    return trimmed && trimmed.length < 82;
  }).length;
  const visualImage = section.id === "the-gut-brain-connection-and-acidity" ? gutBrainImage : section.id === "common-symptoms-of-acidity" || section.id === "what-is-acidity" ? refluxImage : section.id === "the-neuro-ayurveda-development-system" ? neuroAyurvedaImage : section.id === "supporting-digestive-health-and-emotional-wellbeing" ? lifestyleImage : null;
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

function StressAcidityIndiaPage() {
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
        title="Stress & Acidity Treatment in India | Digestive Health | Manovaidya"
        description="Looking for Stress & Acidity treatment in India? Learn how stress affects acid reflux, indigestion, heartburn and digestive health at Manovaidya."
        keywords="Stress & Acidity, Acid Reflux and Stress, Acidity Treatment India, Stress and Indigestion, Gut-Brain Axis, Digestive Health, Heartburn and Stress, Stress-Related Acidity, Mind-Body Health, Acidity Assessment, Neuro-Ayurveda Development System, Emotional Wellbeing and Digestion, Chronic Acidity"
        path="/stress-and-acidity"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Stress & Acidity Treatment in India",
          "description": "Looking for Stress & Acidity treatment in India? Learn how stress affects acid reflux, indigestion, heartburn and digestive health at Manovaidya."
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
                <span className="text-[#4b345d]">Stress & Acidity</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#8b43ba]">Digestive Wellbeing</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                Stress & Acidity Treatment in India
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Understanding the Relationship Between Stress, Acidity and Digestive Health through the Neuro-Ayurveda Development System.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-assessment" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#8b43ba] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(225,79,121,0.22)] transition hover:bg-[#6a338e]">
                  Book Acidity Assessment
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#8b43ba] bg-white px-5 text-[12px] font-black text-[#8b43ba] transition hover:bg-[#f4e6fa]">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <figure className="relative z-10 mx-auto mt-8 w-full max-w-[520px] lg:mt-0 lg:max-w-none">
              <div className="absolute -left-8 top-2 z-20 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#6a338e] p-3 text-center text-[9px] font-black leading-tight text-white shadow-[0_12px_24px_rgba(194,62,98,0.22)] lg:flex">
                <Salad className="mb-1 h-5 w-5" />
                Gut-Brain Axis Support
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f4e6fa] shadow-[0_18px_35px_rgba(225,79,121,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and acidity support through the gut-brain connection" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
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
                  <h2 className="text-[22px] font-black leading-tight sm:text-[26px]">Concerned About Stress, Acidity or Heartburn?</h2>
                  <p className="mt-4 text-[14px] font-medium leading-relaxed opacity-90">
                    Book a structured Stress & Acidity Assessment with Manovaidya to understand the relationship between emotional wellbeing, acid reflux, digestive health and lifestyle more clearly while receiving personalised guidance.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="tel:+917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-black text-[#6a338e] shadow-sm transition hover:bg-[#faf0fc]">
                      Book Acidity Assessment
                    </a>
                    <a href="https://wa.me/917823838638" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-[13px] font-bold text-white transition hover:bg-white/20">
                      <MessageCircle className="h-4 w-4" />
                      Talk to Our Team
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <img src={consultationImage} alt="Consultation" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-5 pb-5">
          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <a href="/about/doctor" className="flex items-start gap-3">
              <img src={doctorImage} alt="Dr Ankush Garg Manovaidya stress acidity digestive health clinician" className="h-12 w-12 shrink-0 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">Authorised & Clinically Reviewed by Dr Ankush Garg</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Clinical Focus: Mind-Body Health, Acidity, Digestive Wellbeing and Mental Health</p>
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
              Book Appointment
            </a>
          </SidebarCard>
        </div>
      </section>
    </main>
  );
}

export default StressAcidityIndiaPage;

