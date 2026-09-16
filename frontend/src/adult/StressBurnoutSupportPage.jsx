import React from "react";
import {
  Activity,
  ArrowRight,
  BatteryLow,
  BookOpen,
  Brain,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  HeartHandshake,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/stress-burnout-support-india.png";
import symptomsImage from "../images/burnout-symptoms-adults.png";
import supportImage from "../images/emotional-wellbeing-burnout-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import neuroDiagramImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import RelatedPagesCard from "./RelatedPagesCard";
import BookConsultationButton from "../components/BookConsultationButton";
import Seo from "../components/Seo";

const pageTitle = "Stress & Burnout Support in India";
const stressBurnoutSeoTitle = "Stress & Burnout Treatment in India | Manovaidya";
const stressBurnoutSeoDescription =
  "Stress and burnout support in India with chronic stress signs, workplace burnout, emotional exhaustion, structured assessment and Neuro-Ayurveda guidance.";
const stressBurnoutSeoPageUrl = "https://manovaidya.org/stress-burnout-support-india";
const stressBurnoutFaqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the first signs of burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early indicators of burnout may be you feel consistently tired, emotionally drained, lacking in enthusiasm, unable to focus, feeling irritated and overwhelmed by normal tasks. Some also experience a lower level of interest in work, diminished productivity or feeling fatigued even when they are sleeping. It is important to recognise these early signs as early interventions and lifestyle changes can help prevent the condition from getting worse and worsening stress levels from becoming overwhelming.",
      },
    },
    {
      "@type": "Question",
      name: "What are the physical symptoms of burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnout can manifest in emotional and/or physical ways. Physical symptoms can be persistent fatigue, headaches, muscle tension, poor sleep, gastrointestinal discomfort, low energy and body aches. Other people get sick a lot or can't seem to bounce back from a hectic day. These symptoms can have multiple causes, so a correct evaluation will allow the identification of the causes of a sustained stress and exhaustion.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 7 warning signs of stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Symptoms of stress include feeling overwhelmed, getting irritated, unable to calm down, unable to focus, difficulty sleeping, fatigue and loss of motivation. Some may also experience headaches, muscle tension or digestion issues. While stress is a normal part of life, ongoing symptoms that are impacting work, relationships or wellbeing should not be overlooked.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest cause of burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, burnout occurs as the result of chronic stress, not a single incident. These include overwork, prolonged working hours, poor work-life balance, continuous emotional stress, money problems, caring for others and not getting enough sleep. If stress is not alleviated with sufficient rest, it can gradually cause emotional, mental and physical fatigue.",
      },
    },
    {
      "@type": "Question",
      name: "How do you overcome stress and burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's important to make healthy lifestyle changes and seek professional guidance when recovering from stress and burnout. Getting more sleep, keeping up an active lifestyle, setting healthy limits at work, taking breaks and establishing positive work relationships can all factor into recovery. Since each person's situation varies, knowing the reasons behind their stress is an essential component in achieving emotional health and wellness in the long-term.",
      },
    },
    {
      "@type": "Question",
      name: "How can I recover from burnout without quitting my job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A significant number of people can actually start to heal from a burnout without quitting their job, by learning to strike a better balance between work and life, setting up boundaries, taking breaks, and caring for their sleep and seeking the proper support. Often, though, it's the small changes that add up and make a difference in your lifestyle. If these efforts don't help, and this is a continuing situation, a professional evaluation can be used to help determine what else is causing the emotional burnout.",
      },
    },
    {
      "@type": "Question",
      name: "How do doctors diagnose burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no one medical exam that can diagnose burnout. Typically, doctors and mental health workers assess symptoms, emotional state, work stress, lifestyle factors and how these factors impact on daily functioning. They may also check to see if other medical or mental health issues are causing similar symptoms. A structured evaluation provides a better understanding of the person's situation.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check if I have burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are feeling emotionally exhausted, mentally drained, extremely tired or lacking in motivation for several weeks, getting a professional diagnosis is advisable. Burnout is discussed with a healthcare professional using structured conversations and evidence-based evaluation instruments to determine the level of symptoms and factors that may be causing the burnout. The sooner a person is assessed, the more effective their recovery will be in the long term.",
      },
    },
    {
      "@type": "Question",
      name: "Can burnout be serious?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When burnout is left untreated, it can slowly manifest in emotional health, physical health, job performance, relationships and life overall. Burnout can cause poor concentration, loss of motivation, confidence and emotional abilities. Getting help early could help avoid these difficulties from worsening or help to ensure positive long-term outcomes for wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "Is burnout a medical problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnout is a well-known occupational stressor in the workplace that is not well managed. While NOT a disease itself, long-term burnout can have a considerable impact on emotional health, physical health and functioning. If symptoms continue, it should be assessed by a trained health care professional to identify the most suitable support.",
      },
    },
    {
      "@type": "Question",
      name: "Can burnout lead to anxiety or depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emotional vulnerability and/or anxiety or depression can be associated with long-term burnout, as can chronic stress. Constant fatigue, irregular sleeping patterns, loss of motivation and chronic stress can have a profound impact on mental health. A thorough evaluation helps to clarify the person's symptoms and determine the best kind of help.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if burnout is ignored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnout can be allowed to happen over time if it is ignored. Can impact work productivity, focus, relationships, sleep quality, motivation and wellbeing. There can also be a higher level of stress, emotional distress or decreased resilience for some people. Burnout can be identified early and proper advice may be offered to avert further problems.",
      },
    },
    {
      "@type": "Question",
      name: "Can people recover from burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With proper lifestyle modifications, healthy recovery techniques and professional help provided where necessary, many people are able to recover from burnout. Recovery typically includes the improvement of sleep, the reduction of chronic stressors, the re-establishment of healthy habits, the development of emotional strength and the efforts of addressing the root causes of burnout. Recovery takes time and can be individual.",
      },
    },
    {
      "@type": "Question",
      name: "How does Manovaidya support adults with stress and burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Support at Manovaidya starts with understanding the individual and not just on the stress symptoms. We facilitate the understanding of emotional wellbeing, lifestyle influences, work related stress and behavioral pattern through structured assessment, personalised guidance and Neuro-Ayurveda Development System. A comprehensive treatment approach is our aim to maintain long-term emotional stability, resilience and better functioning of daily life.",
      },
    },
    {
      "@type": "Question",
      name: "When should I seek professional guidance for stress and burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the stress, emotional exhaustion or burnout persists for weeks and starts to interfere with your work, relationships, sleep habits, or everyday life, you should think about asking yourself for professional advice. If there is a persistent lack of energy, loss of drive, poor focus and/or feeling overwhelmed in spite of getting enough rest, this should not be dismissed. Structured assessment at Manovaidya can help identify factors that contribute to poor emotional health and help guide individuals towards strategies to enhance their emotional health and long-term resilience.",
      },
    },
  ],
};
const stressBurnoutSeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      name: stressBurnoutSeoTitle,
      description: stressBurnoutSeoDescription,
      url: stressBurnoutSeoPageUrl,
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Stress & Burnout Treatment",
          item: stressBurnoutSeoPageUrl,
        },
      ],
    },
    stressBurnoutFaqSchema,
  ],
};
const articleRaw = "Key Takeaways\nUnderstanding Stress & Burnout\nTemporary Stress vs Chronic Stress\nCommon Signs & Symptoms of Burnout\nCauses and Contributing Factors\nImpact on Emotional & Physical Wellbeing\nSleep, Recovery & Work Performance\nEffects on Relationships and Confidence\nManaging Stress & Preventing Burnout\nNeuro-Ayurveda Approach to Stress\nPersonalized Burnout Support & Guidance\nManovaidya Assessment & Support Process\nFAQs About Stress & Burnout\n\nStress & Burnout Support in India\nHelping Adults Better Understand Chronic Stress, Workplace Burnout, Emotional Exhaustion & Mental Wellbeing\nIt's ok to experience stress at times. Temporary stresses are caused by deadlines, family duties, financial obligations, or unforeseen problems. In many cases, this stress is eased as soon as things change or the challenge is overcome.\nFor others, however, prolonged stress for weeks or months without sufficient recuperation can start to impact emotional wellbeing, physical health, relationships, work productivity and quality of life. [3][4] Though, for some, it may begin to affect emotional wellbeing, physical health, relationships, work productivity and overall quality of life even after resting. This extended condition can be called burnout[1].\nChronic stress or burnout don't stop many adults from doing what they need to do on a day-to-day basis. These shifts typically come in steps and are not noticed until they start to impact more than one aspect of people's lives.\nStress and burnout aren't just a matter of working too hard at Manovaidya. There are many interconnected factors that affect emotional wellbeing such as lifestyle, sleep, emotional health, daily routines, work demands and mind-body balance in general.\nAutism, ADHD, Mental Health, Child Development Specialist in India, Dr. Ankush Garg follows the Neuro-Ayurveda Development System where he helps people understand the factors that impact long-term mental health and chronic stress and emotional burn out.\n\n\nAt Manovaidya, Stress & Burnout Support Focuses On:\nChronic Stress\nWorkplace Burnout\nMental Exhaustion\nEmotional Fatigue\nWork-Life Balance\nEmotional Wellbeing & Mind-Body Balance\n\n\nUnderstanding Stress & Burnout\nStress and burnout are often used interchangeably, but they are not the same.[1][7]\nWhat is Stress?\nStress is your body's normal reaction to challenges or demands. Short-term stress has a positive effect on focus, motivation and performance in certain situations. After the circumstance is over, stress will generally decrease and the body will start to heal itself.[7]\nExamples include:\nPreparing for an important presentation\nMeeting work deadlines\nManaging family responsibilities\nFacing temporary financial pressure\n\nWhat is Chronic Stress?\nIf stress cannot be managed and occurs over long periods of time without recovery, stress can become chronic.[4]\nThe mind and body are continually challenged rather than restored to balance.\nRepeated exposure to stress can lead to emotional health, disruption of sleep, difficulty focusing, physical health problems and relationship issues.[4] \n\n\nWhat is Burnout?\nBurnout is a condition of physical, emotional and mental fatigue that can occur from the effects of chronic stress over extended periods of time[1].\nPeople experiencing burnout often describe feeling:\nEmotionally drained\nMentally exhausted\nUnmotivated\nDisconnected from work or responsibilities\nUnable to recover even after rest\nBurnout does not happen overnight. It usually develops gradually when stress continues without sufficient recovery, healthy routines or emotional support.[1][3]\nMany adults searching for Stress Support in India, Burnout Support, Workplace Burnout or Chronic Stress are looking for answers because they have noticed persistent exhaustion that is affecting their daily lives.\nUnderstanding the difference between temporary stress and long-term burnout is an important step towards choosing appropriate support.[1][7]\n\n\n\nCommon Signs & Symptoms of Stress & Burnout\nEmotions, thoughts, behaviour and physical wellbeing can be impacted by stress and burnout.[1][4]\nThe symptoms may vary from person to person depending on individual circumstances.\n\nEmotional Symptoms\nFeeling overwhelmed\nIrritability\nConstant worry\nEmotional exhaustion\nReduced enthusiasm\nFeeling emotionally disconnected\nLow patience\n\nPhysical Symptoms\nConstant fatigue\nLow energy\nFrequent headaches\nMuscle tension\nPoor sleep\nDigestive discomfort\nBody aches\n\n\nCognitive Symptoms\nDifficulty concentrating\nBrain fog\nForgetfulness\nPoor decision-making\nRacing thoughts\nReduced creativity \nBehavioural Symptoms\nReduced productivity\nProcrastination\nSocial withdrawal\nLoss of motivation\nDifficulty maintaining routines\nReduced engagement with work or family \nExperiencing occasional stress does not necessarily indicate burnout. If these symptoms continue for a few weeks or start to interfere with living normal lives, relationships or work, however, it is worth considering professional advice, though. [1][3]\n\n\nWhat Causes Stress & Burnout?\nBurnout and stress often occur due to a combination of factors, not just one single cause.\nKnowing about these influences enables people to have a wider understanding about their emotional wellbeing.\n\nWorkplace Pressure\nStress can be ongoing due to the heavy workload, unrealistic deadlines, long hours of work and lack of recovery time.\n\n\nBusiness Responsibilities\nFinancial planning, team management, decision making, and long term growth are all things that business owners must balance, and can be constantly stressful.\n\nFinancial Concerns\nOver time, emotional stress can grow due to debt, uncertainty of employment, rising costs, etc.\n\nParenting & Caregiving\nHaving to care for children, elderly parents or family members can be emotionally challenging when coupled with work obligations.\n\nRelationship Challenges\nCurrent family issues, communication problems or personal relationship issues could have an impact on emotional wellbeing.\n\n\nDigital Overload\nPersistent notifications, social media, emails and communication for work may limit opportunities for mental recovery.\n\n\nLifestyle Imbalance\t\nPoor sleep, irregular meals, lack of physical activity and limited relaxation time may diminish emotional resilience and intensify the stress.\n\n\nMajor Life Changes\nLong-lasting emotional stress can be caused by relocation, career changes, marriage, divorce, or serious life changes like illness.\nMany adults think that it's a normal part of life to feel tired all the time. But stress and burnout that continues need to be addressed, particularly if it is disrupting your physical health, emotional well-being or functioning in daily life.[3][4]\n\nWhy Early Understanding Matters\nStress can start as a short-term reaction, but can become chronic or burnout if the body continues to not recover. [1][7]\nIdentifying, early on, the emotional, physical and behavioural shifts enables people to make better choices and find help before the stress catches them out in several aspects of life.\n\nHow Chronic Stress & Burnout Can Affect Your Health\nStress is more than an emotional moment. If it persists over a long period of time without recovery, it can slowly affect emotional health, physical health, relationships, job function, and quality of life.\nEven though many grow weary, many adult workers make the assumption that constant stress is an inevitable part of our modern existence. But chronic stress and burnout can impact many facets of life and shouldn't be disregarded.[1][4]\n\nEmotional Wellbeing\nLong-term stress may gradually reduce emotional resilience and make everyday situations feel more overwhelming.[4]\nChronic stress can manifest in adults in many ways, and many say they experience:\nFeeling emotionally exhausted\nConstant irritability\nIncreased frustration\nFeeling overwhelmed\nDifficulty relaxing\nReduced enjoyment in everyday life\nIf you feel more and more drained, light tasks like going to work may also become challenging.\n\nPhysical Wellbeing\nLong-term stress can also have an impact on physical health.[4]\nMany individuals experience:\nFrequent headaches\nMuscle tension\nNeck or shoulder pain\nFatigue\nDigestive discomfort\nReduced energy\nIncreased body aches\nThese symptoms can happen for a number of reasons, but in some cases, a lack of stress can lead to the symptoms persisting.\n\nSleep & Recovery\nRecovery becomes difficult when healthy sleep is affected.\nAdults experiencing burnout often notice:\nDifficulty falling asleep\nWaking during the night\nFeeling tired after sleeping\nDifficulty switching off racing thoughts\nPoor recovery after busy days\nWithout proper recovery, stress may continue building over time.[3][4]\n\n\n\nWork Performance\nBurnout and stress can slowly impact the professional life by diminishing:\nConcentration\nProductivity\nMotivation\nDecision-making\nCreativity\nJob satisfaction\nEmotional burnout is often hard to identify until it manifests in diminished performance and is being used to power through work.\n\n\nRelationships\nStress can also affect your communication with family members, friends and colleagues.\nSome individuals become:\nEasily irritated\nEmotionally distant\nLess patient\nLess inclined to participate in discussions\nSocially withdrawn\nWellbeing in the emotional domain may contribute to better relationship and communication.\n\n\nConfidence & Decision Making\nLong term stress can make people more uncertain and less confident. [4]\nIndividuals may experience:\nDifficulty making decisions\nFear of making mistakes\nReduced confidence\nOverthinking\nProcrastination\nMental fatigue\nEarly detection of these signs and symptoms can help people obtain the necessary assistance before they become more serious.\n\n\nThe Neuro-Ayurveda Approach to Stress & Burnout Support\nChronic stress and burnout are perceived at Manovaidya from a broader perspective.\nWe are not only concerned with symptoms but also with the interrelated factors that impact emotional wellbeing, behaviour, lifestyle and health.\nThe Neuro-Ayurveda Development System enables people to gain a deeper insight of stress and burnout by leveraging the five interconnected pillars.\n\n\nBrain Nourishment System\nEmotional resilience is essential to health and requires healthy brain functioning.\nThe Brain Nourishment System teaches about the possible influences on the brain:\nMental clarity\nEmotional regulation\nConcentration\nDecision making\nStress response\nMotivation\nBy providing nourishment to the brain, people can better understand what emotional wellbeing and mental performance are.\n\nGut Response System\nThe relationship between gut health and emotional wellbeing is increasingly recognised.[6]\nMany adults who are stressed for long periods of time may also experience:\nDigestive discomfort\nAppetite changes\nLow energy\nLifestyle imbalance\nPoor recovery\nThe Gut Response System is about understanding the relationship between physical wellbeing and emotional resiliency and stress management.\n\nNeural Network System\nExperiences become repeated, and over time, their thought and behavior patterns take shape.\nThe Neural Network System is based on comprehension:\nStress responses\nHabit formation\nThought patterns\nEmotional reactions\nBehavioural responses\nPeople can learn to accept and gradually find healthier ways of coping with these patterns.\n\nSensory Integration System\nFor adults, there are continuous sources of stimulation such as:\nWork demands\nMobile phones\nSocial media\nEmails\nNotifications\nConstant multitasking\nToo much stimulation can decrease opportunities for mental recovery and can lead to emotional fatigue.\nA healthier balance in the environment promotes emotional health.\n\nBehaviour Guidance System\nEmotional experiences are manifest in behaviours.\nWhen adults are burned out they may see:\nReduced motivation\nProcrastination\nSocial withdrawal\nAvoiding responsibilities\nIrritability\nDifficulty maintaining routines\nThis pillar is not just about behavior, it is about understanding what factors contribute to these changes, and fostering better behavior patterns.\n\nHow Adults Can Better Manage Stress & Prevent Burnout\nSmall, regular changes to the way a person lives can be an initial step to healthy stress management. [2][3][7]\n\n\nPrioritise Quality Sleep\nWell-sleep helps emotions recover, focus and strength. [4]\n\n\nCreate Healthy Daily Routines\nPredictable schedules eliminate anxiety and stabilize emotions.Clear schedules help balance emotions and eliminate anxiety.\n\n\nMaintain Physical Activity\nFrequent exercise contributes to physical and emotional health and recovery from the stresses of the day.\n\nSet Healthy Work Boundaries\nRegular breaks, avoiding excessive working hours and maintaining a healthy work-life balance may help to lower the risk of burnout.\n\nStay Connected With Supportive People\nHealthy relationships may help increase emotional resilience and help provide support during stressful times. [7]\n\n\nPractice Regular Self-Care\nRelaxation, hobbies, mindfulness and enjoyable activities allow both the mind and body to recover from continuous pressure.[2][3][5]\n\n\nReduce Digital Overload\nCreating screen-free time during the day may reduce mental fatigue and improve overall wellbeing.\n\n\nHow Manovaidya Supports Adults\nThe approach to support starts with the person not merely on the symptoms of stress at Manovaidya.\nOur structured process includes: \nStep 1: Comprehensive Assessment\nAwareness of emotional wellbeing, work stress, lifestyle habits, sleeping habits, daily routine and personal worries.\nStep 2: Personalized Guidance\nOffering personalized suggestions to a person's emotional, behavioural and lifestyle requirements.\nStep 3: Emotional Wellbeing Support\nTo inform on chronic stress and its effects, burnout and coping mechanisms in a structured manner [2,3]\nStep 4: Neuro-Ayurveda Development System\nUsing the five pillar understanding of emotional wellbeing, behaviour, lifestyle and mind-body balance. [2][6]\nStep 5: Progress Tracking & Follow-Up\nEstablishing a clear action plan to keep people on track and developing a more healthy lifestyle for lasting emotional health.\n\nWhen Should You Consider an Assessment?\nYou may consider seeking guidance if you experience:\nPersistent stress lasting several weeks or months\nEmotional exhaustion\nConstant fatigue despite rest\nDifficulty concentrating\nReduced motivation\nSleep disturbances\nWork stress affecting personal life\nBurnout symptoms interfering with daily functioning\nA structured assessment can assist in identifying factors that may be contributing to stress, emotional wellbeing and lifestyle, and can create a personalised plan for health and wellbeing in recovery and over the longer term.[1][3][4]\nThe aim of our work is to guide people from emotional exhaustion and chronic stress to emotional balance, clarity of mind, resilience and wellbeing.\n\n\nAbout Dr. Ankush Garg\nMental Health & Wellness Specialist\nBased in Delhi NCR, Dr. Ankush Garg supports adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.\nHis work focuses on Adult Mental Health, Women's Emotional Wellbeing, Stress-Related Concerns and Mental Wellness Support. Through Manovaidya, Dr. Ankush Garg combines traditional Ayurvedic understanding with modern insights into emotional wellbeing and cognitive health.\nHis approach emphasizes root-cause understanding, personalized guidance, and long-term wellness planning to help adults better understand their concerns and move forward with greater clarity, confidence and direction.\nBook a Consultation\nBook Your Consultation with Manovaidya Today\nStructured Assessment\nPersonalized Guidance\nOnline & In-Clinic Support\nLong-Term Emotional Wellbeing\nFeeling Constantly Stressed or Emotionally Exhausted?\nBook a structured assessment and personalized guidance session with the Manovaidya team to better understand chronic stress, burnout and your emotional wellbeing.\nWhy Trust Manovaidya?\nStructured Neuro-Ayurveda Development System\nPersonalized Assessment Before Recommendations\nOnline & In-Clinic Consultations Across India\nHolistic Mind-Body Approach\nFocus on Long-Term Emotional Wellbeing\nBook Your Consultation with Manovaidya Today\nManovaidya Clinic\nNoida, Uttar Pradesh, India\n\nFAQs\n1. What are the first signs of burnout?\nEarly signs of burnout can involve constant tiredness, emotional exhaustion, loss of motivation, difficulty concentrating, irritability and feeling overwhelmed by everyday responsibilities. It is important to note that these symptoms might be the first sign of burnout, and that early intervention in a person's lifestyle and professional advice can help prevent the burn out from getting worse.\n\n2. What are the physical symptoms of burnout? \nBurnout may also occur at a physical level, with symptoms such as constant tiredness, headaches, muscle tension, trouble sleeping, digestive problems, body aches and low energy levels, as well as frequent colds or inability to recover after a long day. These symptoms can be caused by a variety of factors, so a proper assessment can help determine what is causing the stress and exhaustion that is continuing.\n\n3. What are the 7 warning signs of stress?\nWhile some stress is normal, a constant state of stress that impacts work, relationships or well-being should not be overlooked, as the symptoms may involve headaches, muscle tension, digestive discomfort, irritability, difficulty in relaxing, poor concentration, or disrupted sleep; and a sense of being overwhelmed by life.\n\n4. What is the biggest cause of burnout?\nWhen stress does not get adequate breaks, it can slowly cause emotional, mental and physical fatigue.[1][4] Burnout typically occurs over a period of time rather than from one specific incident. Common causes of burnout include having had too much to do, working too long, not having a healthy work-life balance, facing continuous emotional stress, financial concerns, caregiving responsibilities and insufficient rest.\n\n5. How do you overcome stress and burnout?\nRecovering from stress and burnout often requires a combination of healthy lifestyle changes and appropriate professional guidance.[2][3][7] Prioritising sleep, maintaining regular physical activity, creating healthy work boundaries, taking regular breaks and building supportive relationships may all contribute to recovery.[3][7] Because every individual's situation is different, understanding the underlying causes of stress is an important step towards long-term emotional wellbeing.\n\n6. How can I recover from burnout without quitting my job?\nSmall but regular lifestyle changes can make a big difference in many people's recovery from burnout without quitting their job-such as work/life balance; establishing healthy boundaries; taking regular breaks; prioritising sleep; and seeking appropriate support. If these attempts at combating burnout are unsuccessful, a professional evaluation may be useful in determining other factors that may be causing emotional exhaustion.\n\n\n7. How do doctors diagnose burnout?\nNo one test is used to diagnose burnout. Mental health professionals and doctors typically take a symptom-by-symptom look at emotional well-being, stressors at work, lifestyle factors, and how these factors may be affecting a person's functioning, and may also check for other medical or mental illnesses that could be causing the same symptoms. Structured Assessment can help to gain a better understanding of the individual's situation.\n\n8. How can I check if I have burnout?\nStructured discussions with healthcare professionals and validated assessment tools can help to better understand the severity of symptoms and the factors that are contributing to burnout, which can be helpful if you have been feeling emotionally exhausted, mentally drained, constantly tired or unmotivated for several weeks. Early evaluations can help with the long term recovery.\n\n9. Can burnout be serious?\nYes. Untreated burnout can slowly lead to feelings of emotional distress, physical illness, diminished productivity, poor performance and decreased emotional strength. Early interventions can help to avoid these issues becoming more complex and can contribute to better overall health and wellbeing.\n\n10. Is burnout a medical problem?\nWhile not a medical condition itself, extended burnout can have a profound impact on emotional health, physical health and functioning and therefore warrants a thorough assessment by a trained health care provider to identify the most suitable support.\n\n11. Can burnout lead to anxiety or depression?\nBurnout and chronic stress can lead to a greater emotional vulnerability and may be experienced concurrently with anxiety or depression in some people, all of which can have a major impact on mental health. A comprehensive assessment can help to understand the individual's symptoms and allow for the most appropriate support to be identified.\n\n 12. What happens if burnout is ignored?\nOthers may see a rise in stress, emotional distress or diminished resilience over time.Others may also experience decreased job performance, concentration, relationships, quality of sleep, motivation, or wellbeing. Early detection and appropriate guidance of burnout could help avoid additional issues.\n\n13. Can people recover from burnout?\nYes. The journey to recovery can be slow and the path to recovery can vary from person to person. Many people experience a full recovery with proper lifestyle modifications, healthy recovery measures and support when necessary. [3][7]\n\n14. How does Manovaidya support adults with stress and burnout?\nWith Manovaidya, the first step is to listen to the person, rather than just to the symptoms. We support individuals to gain a better understanding of emotional wellbeing, the influence of lifestyle, work stress and behaviour patterns through structured assessment, personalised guidance and the Neuro-Ayurveda Development System. We want to help to maintain a healthy level of emotional balance, resilience, and healthy functioning throughout the day, in a comprehensive manner.\n\n\n15. When should I seek professional guidance for stress and burnout?\nIf stress, emotional exhaustion or burnout persists over several weeks, and it is starting to impact your work, relationships, sleep or life, professional help should be sought. Structured evaluations conducted at Manovaidya can help uncover factors that may be affecting emotional wellbeing and long-term resilience, and offer guidance to improve emotional wellbeing.";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Stress", id: "understanding-stress" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Causes", id: "causes" },
  { label: "Why Early Understanding", id: "early-understanding" },
  { label: "Health Impact", id: "health-impact" },
  { label: "Neuro-Ayurveda", id: "neuro-ayurveda" },
  { label: "Manage Stress", id: "manage-stress" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Manovaidya", id: "why-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const keyTakeawayLabels = [
  "Understanding Stress & Burnout",
  "Temporary Stress vs Chronic Stress",
  "Common Signs & Symptoms of Burnout",
  "Causes and Contributing Factors",
  "Impact on Emotional & Physical Wellbeing",
  "Sleep, Recovery & Work Performance",
  "Effects on Relationships and Confidence",
  "Managing Stress & Preventing Burnout",
  "Neuro-Ayurveda Approach to Stress",
  "Personalized Burnout Support & Guidance",
  "Manovaidya Assessment & Support Process",
  "FAQs About Stress & Burnout"
];

const references = [
  { n: "1", title: "World Health Organization (WHO). Burn-out an occupational phenomenon: International Classification of Diseases.", url: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon", supports: "Burnout definition, occupational stress, workplace exhaustion." },
  { n: "2", title: "American Psychological Association. Stress effects on the body.", url: "https://www.apa.org/topics/stress/body", supports: "Stress symptoms, emotional wellbeing, physical impact." },
  { n: "3", title: "National Institute of Mental Health (NIMH). I am so stressed out! Fact Sheet.", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet", supports: "Stress response, coping, sleep, recovery and when to seek help." },
  { n: "4", title: "Mayo Clinic. Job burnout: How to spot it and take action.", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642", supports: "Burnout signs, causes, work impact and recovery guidance." },
  { n: "5", title: "CDC NIOSH. Stress at Work.", url: "https://www.cdc.gov/niosh/topics/stress/", supports: "Workplace stress, job demands, support and prevention." },
  { n: "6", title: "American Psychological Association. Social media and the internet.", url: "https://www.apa.org/topics/social-media-internet", supports: "Digital overload, continuous stimulation and emotional wellbeing." },
  { n: "7", title: "Sleep Foundation. Stress and Sleep.", url: "https://www.sleepfoundation.org/mental-health/stress-and-sleep", supports: "Sleep disturbance, stress recovery, fatigue and daily functioning." },
  { n: "8", title: "Sharma PV (Trans.). Charaka Samhita. Chaukhambha Orientalia, Varanasi.", url: "https://archive.org/details/CharakaSamhitaEnglish", supports: "Mental wellbeing (Manas), nourishment, digestion, lifestyle and holistic care." },
  { n: "9", title: "Sharma H (Ed.). Kashyapa Samhita (Vriddha Jivakiya Tantra). Chaukhambha Sanskrit Series Office, Varanasi.", url: "https://archive.org/details/KashyapaSamhita", supports: "Family care, wellbeing, routine and holistic support." },
  { n: "10", title: "Murthy KR Srikantha (Trans.). Ashtanga Hridaya. Chaukhambha Krishnadas Academy, Varanasi.", url: "https://archive.org/details/AshtangaHridayamEnglish", supports: "Lifestyle, routine, sleep, digestion, mental balance and holistic care." },
];

const categories = [
  { label: "Adult Mental Wellness", count: 15, Icon: HeartHandshake, href: "/adult-mental-wellness/" },
  { label: "Stress & Burnout", count: 12, Icon: BatteryLow, href: "/stress-burnout-support-india/" },
  { label: "Anxiety Support", count: 14, Icon: Brain, href: "/adult-anxiety-support-india/" },
  { label: "Depression Support", count: 13, Icon: Activity, href: "/adult-depression-support-india/" },
  { label: "Sleep Disorders", count: 8, Icon: Clock, href: "/sleep-disorders-support-india/" },
  { label: "Work-Life Balance", count: 9, Icon: Briefcase, href: "/stress-burnout-support-india/#manage-stress" },
];

const articleShareLinks = [
  { label: "f", title: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://www.manovaidya.com/stress-burnout-support-india" },
  { label: "x", title: "Share on X", href: "https://twitter.com/intent/tweet?url=https://www.manovaidya.com/stress-burnout-support-india&text=Stress%20and%20Burnout%20Support%20in%20India" },
  { label: "in", title: "Share on LinkedIn", href: "https://www.linkedin.com/shareArticle?mini=true&url=https://www.manovaidya.com/stress-burnout-support-india" },
  { label: "wa", title: "Share on WhatsApp", href: "https://api.whatsapp.com/send?text=Stress%20and%20Burnout%20Support%20in%20India%20https://www.manovaidya.com/stress-burnout-support-india" },
];

const articleLinkRules = [
  { href: "/stress-burnout-support-india/", pattern: /Stress (?:&|and) Burnout Treatment/i },
  { href: "/stress-burnout-support-india/", pattern: /Stress Treatment in India/i },
  { href: "/stress-burnout-support-india/", pattern: /Burnout Support/i },
  { href: "/stress-burnout-support-india/", pattern: /Workplace Burnout/i },
  { href: "/stress-burnout-support-india/", pattern: /Chronic Stress/i },
  { href: "/adult-mental-wellness/", pattern: /Adult Mental Health/i },
  { href: "/adult-mental-wellness/", pattern: /Mental Wellness Support/i },
  { href: "/adult-depression-support-india/", pattern: /depression/i },
  { href: "/adult-anxiety-support-india/", pattern: /anxiety/i },
  { href: "/sleep-disorders-support-india/", pattern: /sleep habits/i },
  { href: "#signs-and-symptoms", pattern: /Emotional exhaustion/i },
  { href: "#manage-stress", pattern: /Work-Life Balance/i },
  { href: "#manage-stress", pattern: /Healthy Work Boundaries/i },
  { href: "#causes", pattern: /Digital Overload/i },
  { href: "#neuro-ayurveda", pattern: /Brain Nourishment System/i },
  { href: "#neuro-ayurveda", pattern: /Gut Response System/i },
  { href: "#neuro-ayurveda", pattern: /Neural Network System/i },
  { href: "#neuro-ayurveda", pattern: /Sensory Integration System/i },
  { href: "#neuro-ayurveda", pattern: /Behaviour Guidance System/i },
  { href: "/about/approach", pattern: /Neuro[-\s]Ayurveda Development System/i },
  { href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { href: "/about/manovaidya", pattern: /Manovaidya/i },
  { href: "#book-consultation", pattern: /Book (?:a Structured Assessment|Consultation)/i },
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

const manovaidyaSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/manovaidya", Icon: () => <span className="text-[11px] font-black">f</span> },
  { label: "Instagram", href: "https://www.instagram.com/manovaidya/", Icon: () => <span className="text-[11px] font-black">ig</span> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/manovaidya/", Icon: () => <span className="text-[11px] font-black">in</span> },
];

const sectionIdByTitle = {
  "Stress & Burnout Support": "introduction",
  "Stress & Burnout Support in India": "introduction",
  "Understanding Stress & Burnout": "understanding-stress",
  "Common Signs & Symptoms of Stress & Burnout": "signs-and-symptoms",
  "What Causes Stress & Burnout?": "causes",
  "Why Early Understanding Matters": "early-understanding",
  "How Chronic Stress & Burnout Can Affect Your Health": "health-impact",
  "The Neuro-Ayurveda Approach to Stress & Burnout Support": "neuro-ayurveda",
  "How Adults Can Better Manage Stress & Prevent Burnout": "manage-stress",
  "How Manovaidya Supports Adults": "how-we-support",
  "Why Adults Across India Choose Manovaidya": "why-manovaidya",
  "About": "about-dr-ankush-garg",
  "About Dr. Ankush Garg": "about-dr-ankush-garg",
  "Frequently Asked Questions": "faqs",
  "Book a Consultation": "book-consultation",
};

const headings = new Set([...Object.keys(sectionIdByTitle), pageTitle]);
const hiddenIntroLines = new Set(["Key Takeaways", ...keyTakeawayLabels]);
const listLeadLines = new Set([
  "At Manovaidya, Stress & Burnout Support Focuses On:",
  "Examples include:",
  "People experiencing burnout often describe feeling:",
  "The assessment process helps individuals gain clarity about:",
  "If you notice any of the following, you may benefit from seeking guidance:",
  "Our support usually includes:",
  "Why Trust Manovaidya?",
]);

const shortTitleExclusions = new Set(["Modern Science", "Ayurvedic References"]);

const stressFocusItems = [
  { label: "Chronic Stress", Icon: Activity },
  { label: "Workplace Burnout", Icon: Briefcase },
  { label: "Mental Exhaustion", Icon: Brain },
  { label: "Emotional Fatigue", Icon: BatteryLow },
  { label: "Work-Life Balance", Icon: Clock },
  { label: "Mind-Body Balance", Icon: Sparkles },
];

const signItems = [
  { label: "Emotional Symptoms", Icon: HeartHandshake },
  { label: "Physical Symptoms", Icon: Activity },
  { label: "Cognitive Symptoms", Icon: Brain },
  { label: "Behavioural Symptoms", Icon: Users },
  { label: "Poor Sleep", Icon: Clock },
  { label: "Low Energy", Icon: BatteryLow },
];

const causeItems = [
  { label: "Workplace Pressure", Icon: Briefcase },
  { label: "Business Responsibilities", Icon: BookOpen },
  { label: "Financial Concerns", Icon: Activity },
  { label: "Parenting & Caregiving", Icon: Users },
  { label: "Relationship Challenges", Icon: HeartHandshake },
  { label: "Digital Overload", Icon: Brain },
  { label: "Lifestyle Imbalance", Icon: Clock },
  { label: "Major Life Changes", Icon: Waves },
];

const impactItems = [
  { label: "Emotional Wellbeing", Icon: HeartHandshake },
  { label: "Physical Wellbeing", Icon: Activity },
  { label: "Sleep & Recovery", Icon: Clock },
  { label: "Work Performance", Icon: Briefcase },
  { label: "Relationships", Icon: Users },
  { label: "Confidence & Decision Making", Icon: Sparkles },
];

const neuroPillarItems = [
  { label: "Brain Nourishment System", Icon: Brain },
  { label: "Gut Response System", Icon: Activity },
  { label: "Neural Network System", Icon: Waves },
  { label: "Sensory Integration System", Icon: ShieldCheck },
  { label: "Behaviour Guidance System", Icon: Users },
];

const managementItems = [
  "Prioritise Quality Sleep",
  "Create Healthy Daily Routines",
  "Maintain Physical Activity",
  "Set Healthy Work Boundaries",
  "Stay Connected With Supportive People",
  "Practice Regular Self-Care",
  "Reduce Digital Overload",
];

const supportSteps = [
  { step: "01", label: "Comprehensive Assessment", Icon: Search },
  { step: "02", label: "Personalized Guidance", Icon: Sparkles },
  { step: "03", label: "Emotional Support", Icon: HeartHandshake },
  { step: "04", label: "Progress Tracking", Icon: CheckCircle2 },
];

const whyChooseItems = [
  "Personalized Assessment",
  "Structured Neuro-Ayurveda System",
  "Online & In-Clinic Support",
  "Holistic Mind-Body Approach",
  "Expert Guidance",
  "Long-Term Emotional Wellbeing",
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Stress & Burnout Support</p>
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
            Join our adult mental wellness newsletter for stress, burnout and emotional wellbeing guidance.
          </p>
          <form className="mt-5 space-y-4">
            <input type="email" placeholder="Enter your email" className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]" />
            <button type="button" className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]">
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

function ArticleLinkedText({ text, onCitationClick, allowedRuleKeys }) {
  const source = String(text);
  const citationPattern = /\[(\d+(?:\s*,\s*\d+)*)\]/;
  const linkedRuleKeysInText = new Set();
  const parts = [];
  let cursor = 0;
  let safety = 0;

  while (cursor < source.length && safety < 100) {
    safety += 1;
    const remaining = source.slice(cursor);
    const candidates = [];
    const citationMatch = remaining.match(citationPattern);

    if (citationMatch) candidates.push({ index: citationMatch.index, text: citationMatch[0], citationIds: citationMatch[1].split(/\s*,\s*/), type: "citation" });

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
        <React.Fragment key={`${next.text}-${parts.length}`}>
          {next.citationIds.map((citationId) => (
            <button key={citationId} type="button" onClick={() => onCitationClick(citationId)} className="mx-0.5 cursor-pointer rounded px-0.5 align-baseline text-[12px] font-black text-[#7835A4] underline decoration-[#c9addb] underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]" aria-label={`Open resource ${citationId}`}>
              [{citationId}]
            </button>
          ))}
        </React.Fragment>
      );
    } else {
      linkedRuleKeysInText.add(next.ruleKey);
      parts.push(
        <a key={`${next.text}-${parts.length}`} href={next.rule.href} className="rounded bg-[#f4ecf8] px-1 font-black text-[#7835A4] underline decoration-[#7835A4] decoration-2 underline-offset-4 transition hover:bg-[#eadcf3] hover:text-[#4c1d6b]">
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

function IconGrid({ items, columns = "sm:grid-cols-2 lg:grid-cols-4" }) {
  return (
    <div className={`mt-4 grid gap-3 ${columns}`}>
      {items.map(({ label, Icon }) => (
        <div key={label} className="flex min-h-[92px] flex-col items-center justify-start rounded-lg border border-[#eadff1] bg-white p-4 text-center shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <span className="text-[12px] font-black leading-5 text-[#3b2e45]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function FlowSteps({ items }) {
  return (
    <div className="mt-4 rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
      <div className="grid gap-3 sm:grid-cols-4 sm:items-start lg:flex lg:items-center lg:justify-between">
        {items.map(({ step, label, Icon }, index) => (
          <React.Fragment key={label}>
            <div className="flex min-h-[94px] flex-col items-center justify-start text-center">
              <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc8eb] bg-[#fbf8fd] text-[#7835A4]">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span className="text-[11px] font-black leading-4 text-[#2f2636]">{step}</span>
              <span className="mt-1 max-w-[128px] text-[11px] font-black leading-4 text-[#3b2e45]">{label}</span>
            </div>
            {index < items.length - 1 && <ArrowRight className="mx-1 hidden h-6 w-6 shrink-0 text-[#9a6fbc] lg:block" strokeWidth={2.2} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function VisualBlock({ heading }) {
  if (heading === "Stress & Burnout Support" || heading === "Stress & Burnout Support in India") {
    return (
      <div className="mt-4 grid gap-5 rounded-xl border border-[#eadff1] bg-[#fbf8fd] p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] lg:grid-cols-[1fr_270px] lg:items-center">
        <IconGrid items={stressFocusItems.slice(0, 3)} columns="sm:grid-cols-3" />
        <img src={supportImage} alt="Emotional wellbeing and burnout support" className="h-[190px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" loading="lazy" decoding="async" />
      </div>
    );
  }

  if (heading === "Common Signs & Symptoms of Stress & Burnout") {
    return (
      <div className="mt-4 grid gap-5 rounded-xl border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] lg:grid-cols-[270px_1fr] lg:items-center">
        <img src={symptomsImage} alt="Burnout symptoms and adult stress warning signs" className="h-[220px] w-full rounded-lg object-cover" loading="lazy" decoding="async" />
        <IconGrid items={signItems} columns="sm:grid-cols-2 lg:grid-cols-3" />
      </div>
    );
  }

  if (heading === "What Causes Stress & Burnout?") return <IconGrid items={causeItems} />;
  if (heading === "How Chronic Stress & Burnout Can Affect Your Health") return <IconGrid items={impactItems} columns="sm:grid-cols-2 lg:grid-cols-3" />;

  if (heading === "The Neuro-Ayurveda Approach to Stress & Burnout Support") {
    return (
      <div className="mt-4 space-y-4">
        <a href="/about/approach">
          <img src={neuroDiagramImage} alt="Neuro-Ayurveda approach for stress and burnout support" className="max-h-[350px] w-full rounded-lg border border-[#eadff1] bg-white object-cover p-2 transition hover:shadow-md" loading="lazy" decoding="async" />
        </a>
        <IconGrid items={neuroPillarItems} columns="sm:grid-cols-2 lg:grid-cols-5" />
      </div>
    );
  }

  if (heading === "How Adults Can Better Manage Stress & Prevent Burnout") {
    return (
      <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
        <div className="grid gap-2 sm:grid-cols-2">
          {managementItems.map((item) => (
            <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (heading === "How Manovaidya Supports Adults") return <FlowSteps items={supportSteps} />;

  if (heading === "Why Adults Across India Choose Manovaidya") {
    return (
      <div className="mt-4 grid gap-5 rounded-xl border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] lg:grid-cols-[1fr_270px] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-2">
          {whyChooseItems.map((item) => (
            <div key={item} className="rounded-lg border border-[#eadff1] bg-[#fbf8fd] p-4">
              <div className="flex gap-2 text-[13px] font-black text-[#21142d]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                {item}
              </div>
            </div>
          ))}
        </div>
        <img src={supportImage} alt="Emotional wellbeing and burnout recovery support" className="h-[220px] w-full rounded-lg object-cover" loading="lazy" decoding="async" />
      </div>
    );
  }

  if (heading === "About" || heading === "About Dr. Ankush Garg") {
    return (
      <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
        <div className="flex flex-col gap-4 sm:flex-row">
          <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-lg object-cover" loading="lazy" decoding="async" />
          <div>
            <p className="text-[12px] font-bold text-[#75677d]">Mental Health & Wellness Specialist</p>
            <p className="mt-2 text-[14px] font-black text-[#21142d]">Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System</p>
            <a href="/about/doctor" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline">
              Know more about Dr. Ankush Garg <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (heading === "Book a Consultation") {
    return (
      <div className="mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-[#7835A4] to-[#4c1d6b] text-white shadow-xl">
        <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
          <div className="p-6 sm:p-8">
            <p className="text-[13px] font-black uppercase tracking-[0.1em] text-[#d8b4e2]">Book a Consultation</p>
            <h3 className="mt-2 text-[25px] font-black leading-tight">Book Your Consultation with Manovaidya Today</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Structured Assessment", "Personalized Guidance", "Online & In-Clinic Support", "Long-Term Emotional Wellbeing"].map((step) => (
                <div key={step} className="flex gap-2 text-[13px] font-bold text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+917823838638" className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-[13px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Contact Us Now</a>
              <BookConsultationButton className="inline-flex h-11 items-center justify-center rounded-lg border border-white px-6 text-[13px] font-black text-white transition hover:bg-[#8e45bb]">Book Consultation</BookConsultationButton>
            </div>
          </div>
          <div className="relative h-60 lg:h-full">
            <img src={supportImage} alt="Adult stress and burnout consultation support" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d6b] to-transparent opacity-80 mix-blend-multiply lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function buildFaqsFromLines(lines) {
  const faqStartIndex = lines.findIndex((line) => line === "Frequently Asked Questions" || line === "FAQs");
  const faqEndIndex = lines.findIndex((line, index) => index > faqStartIndex && line === "Book a Consultation");
  if (faqStartIndex < 0) return [];

  const faqLines = lines.slice(faqStartIndex + 1, faqEndIndex < 0 ? lines.length : faqEndIndex);
  const faqs = [];

  faqLines.forEach((line) => {
    if (line.endsWith("?")) {
      faqs.push({ question: line, answer: [] });
      return;
    }
    if (faqs.length) faqs[faqs.length - 1].answer.push(line);
  });

  return faqs;
}

function FaqAccordion({ faqs, openFaq, setOpenFaq, onCitationClick, ruleKeysByLine }) {
  return (
    <section id="faqs" className="scroll-mt-28 pt-4">
      <div className="mb-4 flex items-center gap-4">
        <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
        <div className="hidden h-px flex-1 bg-[#eadff1] sm:block" />
      </div>
      <div className="overflow-hidden rounded-lg border border-[#eadff1] bg-white">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
            <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d] transition hover:bg-[#fbf7ff]" aria-expanded={openFaq === index}>
              {faq.question}
              <ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
            </button>
            {openFaq === index && (
              <div className="space-y-3 px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">
                {faq.answer.map((answerLine, answerIndex) => (
                  <p key={`${faq.question}-${answerIndex}`}>
                    <ArticleLinkedText text={answerLine} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByLine.get(`faq-${index}-${answerIndex}`)} />
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function isShortTitleLine(line, next) {
  return (
    line.length < 76 &&
    !/[.]/.test(line) &&
    next &&
    !headings.has(line) &&
    !line.startsWith("[") &&
    !line.startsWith("http") &&
    !shortTitleExclusions.has(line) &&
    !listLeadLines.has(line)
  );
}

function RawArticleContent({ onCitationClick, openFaq, setOpenFaq }) {
  const allLines = articleRaw.split("\n").map((line) => line.trim()).filter(Boolean);
  const introIndex = Math.max(0, allLines.indexOf("Stress & Burnout Support in India"));
  const lines = allLines.slice(introIndex).filter((line) => !hiddenIntroLines.has(line));
  const faqStartIndex = lines.findIndex((line) => line === "Frequently Asked Questions" || line === "FAQs");
  const faqEndIndex = lines.findIndex((line, index) => index > faqStartIndex && line === "Book a Consultation");
  const parsedFaqs = buildFaqsFromLines(lines);
  const ruleKeysByLine = new Map();
  const linkedRuleKeys = new Set();

  const collectLineLinks = (line, index) => {
    const faqMode = faqStartIndex >= 0 && index > faqStartIndex && (faqEndIndex < 0 || index < faqEndIndex);
    if (faqMode || headings.has(line) || line === "Book Consultation") return;

    const next = lines[index + 1] || "";
    if (isShortTitleLine(line, next) || listLeadLines.has(line)) return;

    const ruleKeys = getArticleLinkRuleKeysForText(line, linkedRuleKeys);
    if (ruleKeys.size) ruleKeysByLine.set(`line-${index}`, ruleKeys);
  };

  lines.forEach((line, index) => collectLineLinks(line, index));
  parsedFaqs.forEach((faq, faqIndex) => {
    faq.answer.forEach((answerLine, answerIndex) => {
      const ruleKeys = getArticleLinkRuleKeysForText(answerLine, linkedRuleKeys);
      if (ruleKeys.size) ruleKeysByLine.set(`faq-${faqIndex}-${answerIndex}`, ruleKeys);
    });
  });

  return (
    <div className="mt-8 space-y-4">
      {lines.map((line, index) => {
        const id = sectionIdByTitle[line];
        const faqMode = faqStartIndex >= 0 && index > faqStartIndex && (faqEndIndex < 0 || index < faqEndIndex);

        if (line === "Frequently Asked Questions" || line === "FAQs") {
          return <FaqAccordion key={`faq-accordion-${index}`} faqs={parsedFaqs} openFaq={openFaq} setOpenFaq={setOpenFaq} onCitationClick={onCitationClick} ruleKeysByLine={ruleKeysByLine} />;
        }

        if (faqMode) return null;

        if (headings.has(line)) {
          return (
            <section key={`section-${index}`} id={id} className="scroll-mt-28 pt-4">
              <h2 className="text-[20px] font-black leading-tight text-[#17111f]">{line === "About" ? "About Dr. Ankush Garg" : line}</h2>
              <VisualBlock heading={line} />
            </section>
          );
        }

        const next = lines[index + 1] || "";

        if (listLeadLines.has(line)) {
          return (
            <p key={`lead-${index}`} className="pt-2 text-[13px] font-black leading-6 text-[#3b2e45]">
              <ArticleLinkedText text={line} onCitationClick={onCitationClick} />
            </p>
          );
        }

        if (isShortTitleLine(line, next)) {
          return <h3 key={`h3-${index}`} className="pt-3 text-[15px] font-black leading-6 text-[#21142d]">{line}</h3>;
        }

        return (
          <p key={`p-${index}`} className="text-[14px] font-semibold leading-7 text-[#51465a]">
            <ArticleLinkedText text={line} onCitationClick={onCitationClick} allowedRuleKeys={ruleKeysByLine.get(`line-${index}`)} />
          </p>
        );
      })}
    </div>
  );
}

function MedicalReferencesBlock() {
  return (
    <section id="medical-references" className="mt-5 scroll-mt-28 rounded-xl border border-[#eadff1] bg-white p-5 shadow-[0_12px_30px_rgba(58,31,90,0.06)]">
      <h2 className="text-[20px] font-black text-[#17111f]">Final Suggested References</h2>
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Modern Science and Ayurvedic References used for stress and burnout context.</p>
      <div className="mt-5 space-y-4">
        {references.map((reference) => (
          <article key={reference.n} id={`reference-${reference.n}`} className="scroll-mt-32 rounded-lg border border-[#eadff1] bg-[#fcf9ff] p-4">
            <p className="text-[13px] font-black leading-6 text-[#21142d]">[{reference.n}] {reference.title}</p>
            <a href={reference.url} target="_blank" rel="noreferrer" className="mt-2 block break-words text-[12px] font-bold leading-5 text-[#7835A4] underline underline-offset-2">{reference.url}</a>
            {reference.supports && <p className="mt-2 text-[12px] font-semibold leading-5 text-[#5f5367]">Supports: {reference.supports}</p>}
          </article>
        ))}
      </div>
      <details className="mt-5 rounded-lg border border-[#eadff1] bg-white p-4">
        <summary className="cursor-pointer text-[12px] font-black uppercase tracking-[0.05em] text-[#7835A4]">Original reference text</summary>
        <pre className="mt-4 whitespace-pre-wrap break-words text-[11px] font-semibold leading-5 text-[#51465a]">{refsRaw}</pre>
      </details>
    </section>
  );
}

function StressBurnoutSupportPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [showResources, setShowResources] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);

  const handleCitationClick = React.useCallback((referenceNumber) => {
    setShowResources(true);
    window.setTimeout(() => {
      const target = document.getElementById(`reference-${referenceNumber}`) || document.getElementById("medical-references");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  React.useEffect(() => {
    const fontId = "stress-burnout-martel-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Martel:wght@400&display=swap";
      document.head.appendChild(link);
    }
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
      <Seo
        title={stressBurnoutSeoTitle}
        description={stressBurnoutSeoDescription}
        keywords="Stress and Burnout Support, Stress and Burnout Support in India, Chronic Stress, Workplace Burnout, Emotional Exhaustion, Burnout Symptoms, Stress Management, Work-Life Balance, Burnout Recovery, Emotional Wellbeing, Mind-Body Balance"
        path="/stress-burnout-support-india"
        image={heroImage}
        schema={stressBurnoutSeoSchema}
      />

      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Health Care</a>
                <span>/</span>
                <span className="text-[#4b345d]">{pageTitle}</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Stress & Burnout Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">{pageTitle}</h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Helping Adults Better Understand Chronic Stress, Workplace Burnout, Emotional Exhaustion & Mental Wellbeing
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Assessment</a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Talk to Our Team</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <p className="text-[12px] font-bold text-[#75677d]">Last Updated: [20-07-2026]</p>
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
                <Brain className="mb-1 h-5 w-5" />
                Neuro-Ayurveda Development System
              </div>
              <div className="-translate-y-[50px] overflow-hidden rounded-[48%_52%_46%_54%/58%_42%_58%_42%] border-[6px] border-white bg-[#f3eaf9] shadow-[0_18px_35px_rgba(58,31,90,0.12)] lg:-translate-y-[58px]">
                <img src={heroImage} alt="Stress and burnout support in India at Manovaidya" loading="eager" fetchPriority="high" decoding="async" sizes="(min-width: 1024px) 42vw, 100vw" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          <KeyTakeawaysBlock />
          <RawArticleContent onCitationClick={handleCitationClick} openFaq={openFaq} setOpenFaq={setOpenFaq} />

          <div className="mt-8">
            <button type="button" onClick={() => setShowResources((current) => !current)} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#d8c6e5] bg-[#7835A4] px-6 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-[#7835A4]/20 transition hover:bg-[#64258e]" aria-expanded={showResources} aria-controls="medical-references">
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
              <img src={doctorImage} alt="Dr Ankush Garg Manovaidya adult stress burnout clinician" className="h-12 w-12 shrink-0 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">Authorised & Clinically Reviewed by Dr Ankush Garg</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Clinical Focus: Adult Mental Wellness, Stress-Related Concerns and Mental Health</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Last Updated: [20-07-2026]</p>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#5d3b90] p-3 text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15"><Brain className="h-5 w-5" /></span>
              <p className="text-[12px] font-black leading-5">Neuro-Ayurveda Development System</p>
            </div>
          </SidebarCard>

          <SidebarCard>
            <p className="text-[15px] font-black text-[#21142d]">Follow Manovaidya</p>
            <div className="mt-4 flex items-center gap-3">
              {manovaidyaSocialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7835A4] text-white shadow-[0_10px_22px_rgba(120,53,164,0.22)] transition hover:bg-[#632b86]" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </SidebarCard>

          <SidebarCard>
            <p className="text-[15px] font-black text-[#21142d]">Search</p>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" />
              <Search className="h-4 w-4 text-[#7835A4]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <p className="text-[15px] font-black text-[#21142d]">On this page</p>
            <nav className="mt-5 space-y-3.5">
              {pageLinks.map(({ label, id }) => (
                <a key={id} href={`#${id}`} onClick={() => setActiveSection(id)} className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"}`}>
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"}`} />
                  {label}
                </a>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard>
            <p className="text-[15px] font-black text-[#21142d]">Categories</p>
            <div className="mt-4 space-y-3">
              {categories.map(({ label, count, Icon, href }) => (
                <a key={label} href={href} className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <p className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</p>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get a personalized plan for your emotional wellbeing from our experts.</p>
            <BookConsultationButton className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</BookConsultationButton>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">Noida, Uttar Pradesh, India</p>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]"><Mail className="h-8 w-8" /></span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, wellbeing tips and Manovaidya updates.</p>
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

export default StressBurnoutSupportPage;
