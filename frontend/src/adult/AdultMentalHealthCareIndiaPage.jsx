import React from "react";
import {
  Activity,
  ArrowRight,
  BedDouble,
  Brain,
  BriefcaseBusiness,
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
import signsImage from "../images/adult-common-signs-man.png";
import wellbeingImage from "../images/adult-wellness-support.png";
import neuroAyurvedaImage from "../images/science-neuro-ayurveda.png";
import ctaImage from "../images/adult-sunset-cta.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedAdultPagesCard from "./RelatedPagesCard";
import Seo from "../components/Seo";

const rawSourceContent = "\r\nAdult Mental Health Care & Emotional Wellbeing Support in India\r\nSupporting Emotional Health, Mental Resilience and Overall Wellbeing Through Every Stage of Adult Life\r\nAdult life brings opportunities, responsibilities and challenges that shape emotional wellbeing over time. Managing careers, relationships, marriage, parenting, finances, health concerns and personal expectations can sometimes become emotionally overwhelming. While occasional stress and emotional ups and downs are a normal part of life, persistent mental health concerns deserve attention and appropriate support.\r\nMental health is much more than the absence of mental illness. It influences how adults think, feel, make decisions, build relationships, cope with stress, perform at work and maintain overall quality of life. Healthy emotional wellbeing helps individuals adapt to life's challenges, recover from setbacks and continue growing personally and professionally.\r\nMany adults silently struggle with concerns such as chronic stress, anxiety, depression, burnout, sleep problems, overthinking, panic attacks, emotional exhaustion or relationship difficulties. Because these concerns often develop gradually, they may be ignored until they begin affecting work performance, family life, physical health or daily functioning.\r\nAt Manovaidya, we believe that adult mental health is influenced by multiple interconnected factors including brain health, sleep, nutrition, lifestyle habits, emotional resilience, relationships and physical wellbeing. Rather than focusing only on symptoms, we aim to understand the complete emotional profile of every individual.\r\nLed by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that combines comprehensive assessment, personalised guidance and holistic mental wellbeing support to help adults build healthier, more balanced lives.\r\n\r\nAdult Mental Health Areas We Support\r\nEvery adult experiences life differently. Emotional concerns may arise because of work, family, health, relationships or personal circumstances.\r\nOur Adult Mental Health Care includes support for:\r\n😟 Stress & Anxiety\r\nUnderstanding persistent worry, excessive stress, overthinking and anxiety that interfere with everyday life.\r\nLearn More → Stress & Anxiety Support\r\n\r\n🌧 Depression & Low Mood\r\nSupport for persistent sadness, reduced motivation, emotional withdrawal and loss of interest in everyday activities.\r\nLearn More → Depression & Low Mood\r\n\r\n😴 Sleep Problems & Insomnia\r\nUnderstanding sleep difficulties that affect emotional wellbeing, energy and overall health.\r\nLearn More → Sleep Disorders & Insomnia\r\n\r\n⚡ Burnout & Emotional Exhaustion\r\nHelping adults understand work-related burnout, emotional fatigue and long-term stress.\r\nLearn More → Burnout Support\r\n\r\n🧠 OCD & Intrusive Thoughts\r\nSupport for obsessive thoughts, compulsive behaviours and intrusive thinking patterns.\r\nLearn More → OCD Support\r\n\r\n😨 Panic Attacks & Panic Disorder\r\nHelping individuals understand sudden episodes of intense fear, panic attacks and their impact on daily life.\r\nLearn More → Panic Disorder Support\r\n\r\n💔 Relationship & Emotional Wellbeing\r\nSupport for emotional difficulties related to marriage, family relationships, friendships and life transitions.\r\nLearn More → Relationship Support\r\n\r\n🌿 Stress Management & Mind-Body Balance\r\nHelping adults understand the connection between emotional wellbeing, physical health and healthy lifestyle habits.\r\nLearn More → Stress Management & Mind-Body Balance\r\n\r\n💼 Career Pressure & Work-Life Balance\r\nSupport for workplace stress, professional challenges, career uncertainty and maintaining healthy work-life balance.\r\nLearn More → Career Pressure Support\r\n\r\n🌱 Personal Growth & Emotional Resilience\r\nHelping adults strengthen confidence, coping skills, emotional regulation and long-term mental wellbeing.\r\nLearn More → Emotional Resilience Support\r\n\r\nWhy Adult Mental Health Matters\r\nMental wellbeing affects nearly every aspect of adult life. Emotional health influences decision-making, productivity, relationships, parenting, physical health, sleep quality and overall life satisfaction.\r\nHealthy mental wellbeing helps adults:\r\nManage stress effectively\r\nBuild healthier relationships\r\nImprove focus and productivity\r\nMake balanced decisions\r\nAdapt to life changes\r\nStrengthen emotional resilience\r\nMaintain physical and emotional health\r\nRecognising mental health concerns early allows individuals to seek appropriate support before emotional challenges begin affecting everyday functioning.\r\n\r\n\r\n\r\nUnderstanding Adult Mental Health\r\nMental health is an essential part of overall health. It influences how adults think, feel, behave, make decisions, manage emotions and respond to the challenges of everyday life.\r\nThroughout adulthood, people experience different stages of life, each bringing unique opportunities and responsibilities. Building a career, managing relationships, raising a family, caring for ageing parents, handling financial responsibilities and adapting to changing life circumstances can all influence emotional wellbeing.\r\nFeeling stressed, worried or emotionally low from time to time is a normal part of life. However, when these feelings become persistent, overwhelming or begin affecting work, relationships or daily functioning, they deserve attention and appropriate professional guidance.\r\nSupporting adult mental health is not simply about managing emotional difficulties—it is about building resilience, improving emotional balance and maintaining overall wellbeing throughout life.\r\n\r\nCommon Adult Mental Health Concerns\r\nEvery adult's experience is unique. Some individuals may experience only one emotional challenge, while others may face multiple concerns that affect different aspects of life.\r\n\r\nStress & Anxiety\r\nModern life often brings ongoing responsibilities related to work, finances, relationships and family.\r\nSome adults may experience:\r\nPersistent worrying\r\nDifficulty relaxing\r\nOverthinking\r\nRestlessness\r\nPhysical tension\r\nDifficulty concentrating\r\nLearning healthy stress management strategies can help improve emotional wellbeing.\r\n→ Learn More About Stress & Anxiety\r\n\r\nDepression & Low Mood\r\nPersistent sadness, reduced motivation or loss of interest in daily activities may affect emotional wellbeing and quality of life.\r\nSome adults may experience:\r\nLow mood\r\nEmotional withdrawal\r\nReduced motivation\r\nFatigue\r\nDifficulty enjoying activities\r\nPersistent symptoms should always be professionally assessed.\r\n→ Learn More About Depression & Low Mood\r\n\r\nBurnout & Emotional Exhaustion\r\nLong-term workplace pressure, caregiving responsibilities or ongoing stress may contribute to emotional exhaustion.\r\nCommon signs may include:\r\nConstant fatigue\r\nFeeling emotionally drained\r\nReduced motivation\r\nDifficulty concentrating\r\nFeeling overwhelmed\r\nRecognising burnout early may help prevent further emotional strain.\r\n→ Learn More About Burnout Support\r\n\r\nSleep Problems & Insomnia\r\nSleep plays an important role in emotional wellbeing, memory, concentration and physical health.\r\nAdults experiencing poor sleep may notice:\r\nDifficulty falling asleep\r\nFrequent waking during the night\r\nEarly morning awakening\r\nDaytime tiredness\r\nReduced concentration\r\nHealthy sleep habits and professional guidance may be beneficial when sleep problems persist.\r\n→ Learn More About Sleep Problems\r\n\r\nPanic Attacks\r\nSome adults experience sudden episodes of intense fear or discomfort that may include physical symptoms.\r\nThese episodes may involve:\r\nRapid heartbeat\r\nSweating\r\nShortness of breath\r\nDizziness\r\nFeeling out of control\r\nA professional assessment helps understand the underlying cause and appropriate support options.\r\n→ Learn More About Panic Disorder\r\n\r\nObsessive Thoughts & Compulsive Behaviours (OCD)\r\nSome individuals experience recurring unwanted thoughts or repetitive behaviours that become difficult to control and interfere with daily life.\r\nProfessional assessment can help understand these experiences and guide appropriate care.\r\n→ Learn More About OCD\r\n\r\nRelationship Challenges\r\nRelationships influence emotional wellbeing throughout adulthood.\r\nSome adults experience difficulties related to:\r\nMarriage\r\nParenting\r\nFamily relationships\r\nFriendships\r\nWorkplace relationships\r\nEmotional communication\r\nHealthy communication and emotional understanding play an important role in maintaining supportive relationships.\r\n→ Learn More About Relationship & Emotional Wellbeing\r\n\r\nCareer Pressure & Work-Life Balance\r\nProfessional responsibilities can sometimes create emotional strain.\r\nAdults may experience:\r\nHigh work pressure\r\nDifficulty balancing work and family\r\nCareer uncertainty\r\nWorkplace conflicts\r\nReduced job satisfaction\r\nDeveloping healthier coping strategies may improve both emotional wellbeing and professional performance.\r\n→ Learn More About Career Pressure Support\r\n\r\nMind-Body Balance\r\nEmotional wellbeing and physical health are closely connected.\r\nLong-term emotional stress may influence:\r\nSleep quality\r\nEnergy levels\r\nAppetite\r\nDigestion\r\nMuscle tension\r\nOverall wellbeing\r\nSupporting both emotional and physical health together encourages a more balanced lifestyle.\r\n→ Learn More About Mind-Body Balance\r\n\r\nSigns You Should Not Ignore\r\nOccasional emotional changes are part of life. However, persistent concerns that affect daily functioning should not be ignored.\r\nYou may benefit from a professional mental health assessment if you notice:\r\nEmotional Changes\r\nPersistent sadness\r\nConstant anxiety or worry\r\nIrritability\r\nFeeling emotionally overwhelmed\r\nLoss of motivation\r\n\r\nBehavioural Changes\r\nWithdrawal from family or friends\r\nAvoiding social situations\r\nDifficulty managing emotions\r\nReduced interest in daily activities\r\nIncreased reliance on unhealthy coping habits\r\n\r\nWork & Productivity\r\nDifficulty concentrating\r\nReduced productivity\r\nPoor decision-making\r\nFrequent absenteeism\r\nFeeling unable to manage everyday responsibilities\r\n\r\nPhysical Changes\r\nPoor sleep\r\nPersistent fatigue\r\nAppetite changes\r\nFrequent headaches\r\nMuscle tension\r\nDigestive discomfort\r\nPersistent physical symptoms should also be evaluated by a qualified healthcare professional.\r\n\r\nRelationship Difficulties\r\nFrequent conflicts\r\nDifficulty communicating\r\nEmotional distance\r\nFeeling isolated\r\nReduced interest in relationships\r\n\r\nHow Adult Mental Health Affects Everyday Life\r\nMental wellbeing influences nearly every area of adult life.\r\nHealthy emotional wellbeing supports:\r\nBetter decision-making\r\nStronger relationships\r\nImproved work performance\r\nGreater resilience\r\nHealthy parenting\r\nBetter sleep\r\nPhysical wellbeing\r\nOverall quality of life\r\nWhen emotional concerns remain unaddressed, they may gradually affect personal, professional and social wellbeing.\r\n\r\nTaking Care of Your Mental Wellbeing\r\nMental wellbeing is supported through consistent daily habits.\r\nMany adults benefit from:\r\nHealthy sleep routines\r\nBalanced nutrition\r\nRegular physical activity\r\nStress management practices\r\nHealthy relationships\r\nMeaningful hobbies\r\nMindfulness and relaxation techniques\r\nSeeking professional support when emotional concerns persist\r\nLooking after mental health is an important part of overall health and wellbeing, just like caring for physical health.\r\n\r\n\r\n\r\nOur Adult Mental Health Assessment Process\r\nEvery individual experiences life differently. Emotional wellbeing is influenced by personal experiences, relationships, physical health, work responsibilities, lifestyle habits and many other factors. Because of this, understanding the whole person is more important than focusing on a single symptom.\r\nAt Manovaidya, our assessment process is designed to understand your emotional wellbeing, lifestyle, behavioural patterns and overall mental health before recommending personalised guidance.\r\nOur goal is to help individuals gain greater clarity about their emotional health and identify practical steps that support long-term wellbeing.\r\n\r\nStep 1 – Understanding Your Concerns\r\nEvery consultation begins with listening.\r\nWe take time to understand:\r\nYour current concerns\r\nEmotional wellbeing\r\nLifestyle habits\r\nSleep patterns\r\nWork and career responsibilities\r\nFamily and relationship dynamics\r\nMedical history\r\nPrevious mental health support, if any\r\nUnderstanding your personal experiences helps us create a more complete picture of your mental wellbeing.\r\n\r\nStep 2 – Comprehensive Mental Health Assessment\r\nOur structured assessment explores multiple areas that may influence emotional wellbeing.\r\nThese include:\r\nStress and anxiety\r\nMood\r\nEmotional resilience\r\nBehaviour patterns\r\nSleep quality\r\nRelationships\r\nWork-life balance\r\nLifestyle habits\r\nCognitive functioning\r\nOverall mental wellbeing\r\nThis assessment helps identify both strengths and areas where additional support may be beneficial.\r\n\r\nStep 3 – Understanding Your Emotional Wellbeing Profile\r\nAfter the assessment, we explain our observations in a simple and practical manner.\r\nThis includes:\r\nEmotional strengths\r\nCurrent challenges\r\nLifestyle factors that may be contributing\r\nPersonalised recommendations\r\nHealthy coping strategies\r\nNext steps for ongoing support\r\nOur aim is to help individuals understand themselves better and make informed decisions about their emotional wellbeing.\r\n\r\nThe Neuro-Ayurveda Development System\r\nAt Manovaidya, adult mental health is understood through the Neuro-Ayurveda Development System, a structured five-pillar framework that considers emotional, biological and lifestyle factors together.\r\nRather than focusing only on emotional symptoms, this approach looks at the relationship between the brain, body, behaviour and everyday lifestyle while supporting overall mental wellbeing.\r\n\r\n1. Brain Nourishment System\r\nHealthy brain function supports:\r\nAttention\r\nMemory\r\nDecision-making\r\nEmotional regulation\r\nConcentration\r\nMental resilience\r\nThis pillar focuses on supporting healthy brain function as an important part of emotional wellbeing.\r\n\r\n2. Gut Response System\r\nThe gut and brain communicate continuously through the gut-brain axis.\r\nThis pillar considers healthy nutrition, digestion and gut health as part of a person's overall physical and emotional wellbeing.\r\n\r\n3. Neural Network System\r\nAdults continue developing healthier thinking patterns through learning and experience.\r\nThis pillar focuses on strengthening:\r\nCognitive flexibility\r\nHealthy thinking habits\r\nLearning\r\nEmotional adaptability\r\nProblem-solving\r\n\r\n4. Sensory Integration System\r\nOur environment constantly influences how we think, feel and respond.\r\nThis pillar considers sensory experiences and lifestyle factors that may influence stress, emotional regulation and overall wellbeing.\r\n\r\n5. Behaviour Guidance System\r\nBehaviour often reflects underlying emotional experiences rather than simply habits.\r\nThis pillar helps individuals understand behaviour patterns, build healthier coping strategies and develop positive lifestyle changes that support long-term mental wellbeing.\r\n\r\nHow We Support Adults\r\nEvery individual has different experiences, strengths and challenges.\r\nAt Manovaidya, our support is personalised according to each person's emotional wellbeing and overall mental health.\r\nOur approach may include:\r\nAdult Mental Health Assessment\r\nPersonalised Emotional Wellbeing Guidance\r\nLifestyle Recommendations\r\nStress Management Strategies\r\nBehaviour Guidance\r\nHealthy Routine Planning\r\nMind-Body Balance Support\r\nEmotional Resilience Building\r\nProgress Monitoring and Follow-Up\r\nOur goal is to help individuals build healthier emotional habits, improve resilience and maintain long-term mental wellbeing.\r\n\r\nWhy People Across India Choose Manovaidya\r\nIndividuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India choose Manovaidya because of our structured, holistic and personalised approach to mental health.\r\nPeople trust us for:\r\n✔ Comprehensive Adult Mental Health Assessments\r\n✔ Personalised Emotional Wellbeing Guidance\r\n✔ Neuro-Ayurveda Development System\r\n✔ Holistic Mind-Body Approach\r\n✔ Online & In-Clinic Consultations\r\n✔ Long-Term Mental Wellness Support\r\n✔ Guidance by Dr. Ankush Garg\r\nOur goal is to help every individual better understand their emotional wellbeing and develop healthier ways of managing life's challenges.\r\n\r\nAbout Dr. Ankush Garg\r\nMental Health Specialist & Founder of Manovaidya\r\nDr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System.\r\nHis work focuses on helping individuals understand the relationship between emotional wellbeing, brain health, lifestyle, behaviour and overall wellness.\r\nThrough structured assessments, personalised guidance and continuous follow-up, Dr. Ankush Garg supports adults experiencing stress, anxiety, emotional challenges and other mental health concerns while promoting healthy coping skills and long-term wellbeing.\r\nBased in Delhi NCR, he provides online and in-clinic consultations for individuals across India.\r\n\r\nBook an Adult Mental Health Assessment\r\nLooking for Professional Mental Health Support?\r\nIf stress, anxiety, low mood, burnout, sleep problems or emotional challenges are affecting your daily life, seeking support early can help you better understand your emotional wellbeing and explore appropriate next steps.\r\nAt Manovaidya, we provide structured Adult Mental Health Assessments, personalised guidance and holistic emotional wellbeing support through the Neuro-Ayurveda Development System.\r\n\r\nTake the First Step Towards Better Mental Wellbeing\r\nMental health is an important part of overall health. Understanding your emotional wellbeing today can help you build healthier habits, stronger resilience and a better quality of life for the future.\r\nBook Your Adult Mental Health Assessment Today\r\n📞 Book Consultation\r\n📞 Talk to Our Team\r\n📞 Schedule Mental Health Assessment\r\n\r\n\r\n\r\nFrequently Asked Questions (FAQs)\r\n1. What is adult mental health?\r\nAdult mental health refers to a person's emotional, psychological and social wellbeing throughout adulthood. It influences how people think, feel, behave, manage stress, build relationships, make decisions and cope with everyday challenges. Good mental health supports overall wellbeing and quality of life.\r\n\r\n2. Why is mental health important for adults?\r\nMental health affects nearly every aspect of adult life, including work performance, relationships, parenting, physical health, sleep, emotional resilience and decision-making. Maintaining good mental wellbeing helps individuals manage life's responsibilities more effectively.\r\n\r\n3. What are the most common mental health concerns in adults?\r\nCommon concerns include stress, anxiety, depression, burnout, sleep problems, panic attacks, obsessive-compulsive disorder (OCD), emotional exhaustion, relationship difficulties and work-related stress. Every person's experience is different, and persistent symptoms should be professionally assessed.\r\n\r\n4. How do I know if I should seek professional mental health support?\r\nYou should consider seeking professional guidance if emotional difficulties persist for several weeks, interfere with work, relationships or daily life, become difficult to manage on your own, or cause significant distress. Early assessment can help identify contributing factors and appropriate support.\r\n\r\n5. What is the difference between stress and anxiety?\r\nStress is generally a response to specific life challenges such as work, finances or family responsibilities and often improves when the situation changes. Anxiety may involve excessive worry or fear that continues even without an immediate stressor. Persistent anxiety should be evaluated by a qualified healthcare professional.\r\n\r\n6. Can chronic stress affect physical health?\r\nYes. Long-term stress may contribute to headaches, muscle tension, digestive discomfort, fatigue, sleep disturbances and reduced concentration. Persistent physical symptoms should always be evaluated by a qualified healthcare professional to rule out underlying medical conditions.\r\n\r\n7. What are the signs of depression in adults?\r\nPossible signs include persistent sadness, loss of interest in previously enjoyable activities, low energy, changes in sleep or appetite, difficulty concentrating, feelings of hopelessness or reduced motivation. These symptoms require professional assessment if they persist or interfere with daily life.\r\n\r\n8. What is burnout?\r\nBurnout is a state of emotional, physical and mental exhaustion often associated with prolonged workplace stress or ongoing caregiving responsibilities. Common signs include constant fatigue, reduced motivation, emotional detachment and difficulty performing everyday tasks.\r\n\r\n9. Can poor sleep affect mental health?\r\nYes. Sleep and mental health are closely connected. Poor sleep may influence mood, concentration, emotional regulation, stress levels and overall wellbeing. Persistent sleep difficulties should be discussed with a qualified healthcare professional.\r\n\r\n\r\n11. What is an adult mental health assessment?\r\nAn adult mental health assessment is a structured evaluation that explores emotional wellbeing, stress levels, mood, behaviour, sleep, lifestyle, relationships, work-related concerns and overall mental health. The assessment helps identify strengths, challenges and appropriate next steps for personalised support.\r\n\r\n12. How does Manovaidya support adult mental health?\r\nAt Manovaidya, support begins with understanding the individual rather than focusing only on symptoms. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help individuals better understand emotional wellbeing, lifestyle, behaviour, stress and overall mental health.\r\n\r\n13. What is the Neuro-Ayurveda Development System?\r\nThe Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework that considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding overall mental wellbeing. It provides a holistic perspective alongside comprehensive assessment and personalised guidance.\r\n\r\n\r\n15. When should I seek urgent mental health support?\r\nSeek immediate medical or emergency mental health care if you experience thoughts of self-harm or suicide, feel unable to keep yourself safe, have attempted self-harm, experience hallucinations, severe confusion or pose an immediate risk to yourself or others. Emergency care should never be delayed in these situations.\r\n\r\n16. Can work-related stress affect mental health?\r\nYes. Ongoing workplace stress may contribute to anxiety, burnout, reduced motivation, poor sleep, emotional exhaustion and difficulty maintaining work-life balance. Addressing these concerns early may help improve both emotional wellbeing and professional functioning.\r\n\r\n\r\n18. Why should I choose Manovaidya for adult mental health care?\r\nAt Manovaidya, we focus on understanding the complete emotional wellbeing of every individual through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our approach combines emotional health, lifestyle, behaviour and long-term wellbeing to help individuals build resilience, improve emotional balance and develop healthier coping strategies.\r\nPerfect Ram. ❤️\r\nYe Adult Mental Health Care page ka Complete SEO Setup (Production Ready) hai.\r\nIs page ka purpose hai ki ye poori Adult Mental Health category ka pillar page bane aur niche ke saare condition pages (Anxiety, Depression, OCD, Burnout, Panic Disorder, Sleep Disorders, Relationship Issues, Stress Management, Career Pressure, etc.) ko authority pass kare.\r\n\r\nSTEP 1: URL\r\n✅ Recommended URL\r\n/adult-mental-health-care-india/\r\n\r\nAlternative\r\n/adult-emotional-wellbeing-support-india/\r\n\r\n⭐ Final Recommendation\r\n/adult-mental-health-care-india/\r\n\r\n\r\nSTEP 2: SEO Title\r\nAdult Mental Health Care in India | Mental Health Assessment & Emotional Wellbeing | Manovaidya\r\n\r\n(69 Characters)\r\nAlternative\r\nAdult Mental Health Specialist & Emotional Wellbeing Support | Manovaidya\r\n\r\n\r\nSTEP 3: Meta Description\r\nLooking for Adult Mental Health Care in India? Learn about stress, anxiety, depression, burnout, sleep problems, emotional wellbeing and mental health assessments at Manovaidya.\r\n\r\n(158 Characters)\r\n\r\nSTEP 4: H1\r\nAdult Mental Health Care & Emotional Wellbeing Support in India\r\n\r\n\r\nSTEP 5: H2 Structure\r\nUnderstanding Adult Mental Health\r\n\r\nAdult Mental Health Areas We Support\r\n\r\nCommon Adult Mental Health Concerns\r\n\r\nSigns You Should Not Ignore\r\n\r\nHow Adult Mental Health Affects Everyday Life\r\n\r\nTaking Care of Your Mental Wellbeing\r\n\r\nOur Adult Mental Health Assessment Process\r\n\r\nThe Neuro-Ayurveda Development System\r\n\r\nHow We Support Adults\r\n\r\nWhy People Across India Choose Manovaidya\r\n\r\nAbout Dr. Ankush Garg\r\n\r\nFrequently Asked Questions\r\n\r\nBook an Adult Mental Health Assessment\r\n\r\n\r\nSTEP 6: Primary Keywords\r\nAdult Mental Health\r\n\r\nAdult Mental Health Care\r\n\r\nAdult Mental Health Specialist\r\n\r\nMental Health Assessment\r\n\r\nEmotional Wellbeing\r\n\r\nMental Wellness\r\n\r\nMental Health Support\r\n\r\nAdult Counselling\r\n\r\nMental Health Clinic India\r\n\r\nAdult Emotional Health\r\n\r\n\r\nSTEP 7: Secondary Keywords\r\nStress\r\n\r\nAnxiety\r\n\r\nDepression\r\n\r\nBurnout\r\n\r\nPanic Disorder\r\n\r\nOCD\r\n\r\nSleep Problems\r\n\r\nWork Stress\r\n\r\nRelationship Problems\r\n\r\nEmotional Resilience\r\n\r\n\r\nSTEP 8: Long-Tail Keywords\r\nAdult mental health specialist in India\r\n\r\nAdult mental health assessment\r\n\r\nMental health support for adults\r\n\r\nStress and anxiety treatment support\r\n\r\nDepression support for adults\r\n\r\nBurnout recovery support\r\n\r\nSleep problems and mental health\r\n\r\nMental wellness clinic in India\r\n\r\nWork stress management\r\n\r\nEmotional wellbeing support\r\n\r\n\r\nSTEP 9: Local SEO\r\nUnder\r\nWhy People Across India Choose Manovaidya\r\nAdd\r\nIndividuals and families from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya for Adult Mental Health Assessments, emotional wellbeing support and personalised mental health guidance through online and in-clinic consultations.\r\n\r\n\r\nSTEP 10: About Dr. Ankush Garg\r\nBased in Delhi NCR, Dr. Ankush Garg provides Adult Mental Health Assessments and holistic emotional wellbeing support for individuals across India through the Neuro-Ayurveda Development System.\r\n\r\n\r\nSTEP 11: IMAGE SEO\r\nHero Image\r\nFilename\r\nadult-mental-health-care-india.webp\r\n\r\nALT\r\nAdult mental health care and emotional wellbeing support in India\r\n\r\n\r\nStress & Emotional Health\r\nFilename\r\nadult-stress-emotional-health.webp\r\n\r\nALT\r\nAdult managing stress and emotional wellbeing\r\n\r\n\r\nMental Health Assessment\r\nFilename\r\nadult-mental-health-assessment.webp\r\n\r\nALT\r\nComprehensive adult mental health assessment at Manovaidya\r\n\r\n\r\nNeuro-Ayurveda\r\nFilename\r\nneuro-ayurveda-adult-mental-health.webp\r\n\r\nALT\r\nNeuro Ayurveda approach for adult mental health and emotional wellbeing\r\n\r\n\r\nLifestyle & Wellbeing\r\nFilename\r\nadult-lifestyle-wellbeing.webp\r\n\r\nALT\r\nHealthy lifestyle habits supporting adult mental wellbeing\r\n\r\n\r\nCTA Image\r\nFilename\r\nadult-mental-health-consultation.webp\r\n\r\nALT\r\nBook adult mental health assessment at Manovaidya\r\n\r\n\r\nSTEP 12: Internal Linking Strategy\r\nAdult Mental Health Pages\r\nLink naturally to:\r\nStress & Anxiety\r\nDepression & Low Mood\r\nBurnout\r\nOCD\r\nPanic Disorder\r\nSleep Disorders\r\nRelationship & Emotional Wellbeing\r\nCareer Pressure\r\nMind-Body Balance\r\nEmotional Resilience\r\n\r\nMain Hub Pages\r\nAlso link to:\r\nChild Development Care\r\nTeen Mental Health Care\r\nWomen's Mental Health Care\r\nSenior Mental Health Care\r\nGut & Body Concerns\r\n\r\nSTEP 13: Breadcrumb\r\nHome\r\n\r\n>\r\n\r\nAdult Mental Health Care\r\n\r\n\r\nSTEP 14: FAQ Schema\r\nDeveloper Note\r\nImplement all FAQs using FAQPage JSON-LD Schema.\r\n\r\n\r\nSTEP 15: Related Pages\r\nStress & Anxiety\r\n\r\nDepression & Low Mood\r\n\r\nBurnout\r\n\r\nOCD\r\n\r\nPanic Disorder\r\n\r\nSleep Disorders\r\n\r\nRelationship & Emotional Wellbeing\r\n\r\nCareer Pressure\r\n\r\nMind-Body Balance\r\n\r\nEmotional Resilience\r\n\r\n\r\nSTEP 16: CTA\r\nHeading\r\nLooking for Professional Mental Health Support?\r\n\r\nText\r\nBook a structured Adult Mental Health Assessment with Manovaidya to better understand stress, anxiety, emotional wellbeing, lifestyle factors and your overall mental health.\r\n\r\nButtons\r\nBook Mental Health Assessment\r\n\r\nTalk to Our Team\r\n\r\nSchedule Consultation\r\n\r\n\r\nSTEP 17: Schema Markup\r\nImplement:\r\n✅ MedicalWebPage Schema\r\n✅ FAQPage Schema\r\n✅ BreadcrumbList Schema\r\n✅ Physician Schema (Dr. Ankush Garg)\r\n✅ Organization Schema\r\n✅ LocalBusiness Schema\r\n\r\nSTEP 18: E-E-A-T Trust Signals\r\nWhy Trust Manovaidya?\r\nComprehensive Adult Mental Health Assessments\r\nNeuro-Ayurveda Development System\r\nPersonalised Emotional Wellbeing Guidance\r\nHolistic Mind-Body Approach\r\nOnline & In-Clinic Consultations Across India\r\nLong-Term Mental Wellness Support\r\nGuidance by Dr. Ankush Garg\r\n\r\nSTEP 19: Topical Authority Strategy\r\nThis page should become the parent page for all adult mental health topics.\r\nInternal Cluster\r\nAdult Mental Health Care\r\n│\r\n├── Stress & Anxiety\r\n├── Depression & Low Mood\r\n├── Burnout\r\n├── OCD\r\n├── Panic Disorder\r\n├── Sleep Disorders\r\n├── Relationship & Emotional Wellbeing\r\n├── Career Pressure\r\n├── Mind-Body Balance\r\n└── Emotional Resilience\r\n\r\n\r\n";

const articleSource = rawSourceContent.split("Perfect Ram.")[0].trim();
const articleLines = articleSource.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

const h2Titles = [
  "Adult Mental Health Areas We Support",
  "Why Adult Mental Health Matters",
  "Understanding Adult Mental Health",
  "Common Adult Mental Health Concerns",
  "Signs You Should Not Ignore",
  "How Adult Mental Health Affects Everyday Life",
  "Taking Care of Your Mental Wellbeing",
  "Our Adult Mental Health Assessment Process",
  "The Neuro-Ayurveda Development System",
  "How We Support Adults",
  "Why People Across India Choose Manovaidya",
  "About Dr. Ankush Garg",
  "Book an Adult Mental Health Assessment",
  "Frequently Asked Questions (FAQs)",
];

const sectionIds = {
  "Adult Mental Health Areas We Support": "programs",
  "Why Adult Mental Health Matters": "why-adult-mental-health-matters",
  "Understanding Adult Mental Health": "understanding-adult-mental-health",
  "Common Adult Mental Health Concerns": "common-adult-mental-health-concerns",
  "Signs You Should Not Ignore": "signs-you-should-not-ignore",
  "How Adult Mental Health Affects Everyday Life": "how-adult-mental-health-affects-everyday-life",
  "Taking Care of Your Mental Wellbeing": "taking-care-of-your-mental-wellbeing",
  "Our Adult Mental Health Assessment Process": "adult-mental-health-assessment-process",
  "The Neuro-Ayurveda Development System": "neuro-ayurveda-development-system",
  "How We Support Adults": "how-we-support-adults",
  "Why People Across India Choose Manovaidya": "why-people-across-india-choose-manovaidya",
  "About Dr. Ankush Garg": "about-dr-ankush-garg",
  "Book an Adult Mental Health Assessment": "book-consultation",
  "Frequently Asked Questions (FAQs)": "faqs",
};

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Programs", id: "programs" },
  { label: "Why It Matters", id: "why-adult-mental-health-matters" },
  { label: "Understanding Mental Health", id: "understanding-adult-mental-health" },
  { label: "Common Concerns", id: "common-adult-mental-health-concerns" },
  { label: "Signs", id: "signs-you-should-not-ignore" },
  { label: "Assessment Process", id: "adult-mental-health-assessment-process" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-development-system" },
  { label: "How We Support", id: "how-we-support-adults" },
  { label: "Why People Choose", id: "why-people-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-consultation" },
];

const categories = [
  { label: "Stress & Anxiety", count: 13, Icon: Brain },
  { label: "Depression", count: 12, Icon: CloudRain },
  { label: "Burnout", count: 11, Icon: Activity },
  { label: "Sleep Problems", count: 8, Icon: BedDouble },
  { label: "OCD", count: 7, Icon: ShieldCheck },
  { label: "Relationships", count: 10, Icon: HeartHandshake },
];

const subheadingLines = new Set([
  "😟 Stress & Anxiety",
  "🌧 Depression & Low Mood",
  "😴 Sleep Problems & Insomnia",
  "⚡ Burnout & Emotional Exhaustion",
  "🧠 OCD & Intrusive Thoughts",
  "😨 Panic Attacks & Panic Disorder",
  "💔 Relationship & Emotional Wellbeing",
  "🌿 Stress Management & Mind-Body Balance",
  "💼 Career Pressure & Work-Life Balance",
  "🌱 Personal Growth & Emotional Resilience",
  "Stress & Anxiety",
  "Depression & Low Mood",
  "Burnout & Emotional Exhaustion",
  "Sleep Problems & Insomnia",
  "Panic Attacks",
  "Obsessive Thoughts & Compulsive Behaviours (OCD)",
  "Relationship Challenges",
  "Career Pressure & Work-Life Balance",
  "Mind-Body Balance",
  "Emotional Changes",
  "Behavioural Changes",
  "Work & Productivity",
  "Physical Changes",
  "Relationship Difficulties",
  "Step 1 – Understanding Your Concerns",
  "Step 2 – Comprehensive Mental Health Assessment",
  "Step 3 – Understanding Your Emotional Wellbeing Profile",
  "1. Brain Nourishment System",
  "2. Gut Response System",
  "3. Neural Network System",
  "4. Sensory Integration System",
  "5. Behaviour Guidance System",
  "Mental Health Specialist & Founder of Manovaidya",
  "Looking for Professional Mental Health Support?",
  "Take the First Step Towards Better Mental Wellbeing",
  "Book Your Adult Mental Health Assessment Today",
]);

function slugify(title) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildSections() {
  const bodyLines = articleLines.slice(2);
  const sections = [];
  let current = { title: "Introduction", id: "introduction", lines: [] };

  bodyLines.forEach((line) => {
    if (h2Titles.includes(line)) {
      sections.push(current);
      current = { title: line, id: sectionIds[line] || slugify(line), lines: [] };
      return;
    }
    current.lines.push(line);
  });

  sections.push(current);
  return sections;
}

const allSections = buildSections();
const visibleSections = allSections.filter((section) => section.id !== "faqs");
const faqSection = allSections.find((section) => section.id === "faqs");

function parseFaqs(lines = []) {
  const faqs = [];
  let current = null;

  lines.forEach((line) => {
    if (/^\d+\.\s/.test(line)) {
      if (current) faqs.push(current);
      current = { question: line, answer: [] };
      return;
    }
    if (current) current.answer.push(line);
  });

  if (current) faqs.push(current);
  return faqs.map((faq) => ({ ...faq, answer: faq.answer.join(" ") }));
}

const faqs = parseFaqs(faqSection?.lines);

const internalLinks = [
  { text: "Stress & Anxiety", href: "/anxiety-support-india/" },
  { text: "Depression & Low Mood", href: "/adult-depression-support/" },
  { text: "Burnout", href: "/stress-burnout-support-india/" },
  { text: "Sleep Disorders", href: "/sleep-disorders-insomnia-support-india/" },
  { text: "Relationship & Emotional Wellbeing", href: "/relationship-challenges-support-india/" },
  { text: "Mind-Body Balance", href: "/mind-body-health-care-india/" },
  { text: "Child Development Care", href: "/child-development-care-india/" },
  { text: "Teen Mental Health Care", href: "/teen-mental-health-care-india/" },
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
    { "@type": "ListItem", position: 2, name: "Adult Mental Health Care", item: "/adult-mental-health-care-india/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Adult Mental Health Care & Emotional Wellbeing Support in India",
  description: "Looking for Adult Mental Health Care in India? Learn about stress, anxiety, depression, burnout, sleep problems, emotional wellbeing and mental health assessments at Manovaidya.",
  url: "/adult-mental-health-care-india/",
  about: ["Adult Mental Health", "Mental Health Assessment", "Emotional Wellbeing"],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ankush Garg",
  medicalSpecialty: ["Mental Health", "Adult Mental Wellness", "Emotional Wellbeing"],
  worksFor: { "@type": "Organization", name: "Manovaidya" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Manovaidya",
  areaServed: "India",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Manovaidya Clinic",
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  telephone: "+917823838638",
};

function SidebarCard({ children, className = "", id }) {
  return (
    <aside id={id} className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ContentLine({ line }) {
  if (subheadingLines.has(line)) {
    return <h3 className="mt-5 text-[16px] font-black text-[#21142d]">{line}</h3>;
  }

  if (line.startsWith("✔") || line.startsWith("📞") || line.startsWith("→") || line.startsWith("Learn More")) {
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span>{line}</span>
      </p>
    );
  }

  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{line}</p>;
}

function SectionImage({ id }) {
  if (id === "programs") {
    return <img src={wellbeingImage} alt="Adult managing stress and emotional wellbeing" className="mt-6 h-[270px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)] sm:h-[340px]" />;
  }
  if (id === "signs-you-should-not-ignore") {
    return <img src={signsImage} alt="Comprehensive adult mental health assessment at Manovaidya" className="mt-6 h-[270px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)] sm:h-[340px]" />;
  }
  if (id === "neuro-ayurveda-development-system") {
    return (
      <div className="mt-5 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] shadow-[0_12px_30px_rgba(58,31,90,0.08)]">
        <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for adult mental health and emotional wellbeing" className="max-h-[310px] w-full max-w-[720px] object-contain object-center" />
      </div>
    );
  }
  return null;
}

function ContentSection({ section }) {
  if (section.id === "book-consultation") {
    return (
      <section id={section.id} className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
        <div className="p-6 sm:p-8">
          <h2 className="text-[22px] font-black leading-tight">{section.title}</h2>
          <div className="mt-3 space-y-1">
            {section.lines.map((line, index) => (
              <p key={`${section.id}-${index}`} className="text-[14px] font-semibold leading-7 text-[#e5d5f2]">{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[#8e45bb] pt-6">
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Mental Health Assessment</a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Talk to Our Team</a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Schedule Consultation</a>
          </div>
        </div>
        <img src={ctaImage} alt="Book adult mental health assessment at Manovaidya" className="h-40 w-full object-cover object-center sm:h-52" />
      </section>
    );
  }

  return (
    <section id={section.id} className="mt-9 scroll-mt-24">
      {section.id !== "introduction" && <h2 className="text-[20px] font-black text-[#17111f]">{section.title}</h2>}
      {section.id === "introduction" && <h2 className="text-[20px] font-black text-[#17111f]">Supporting Emotional Health, Mental Resilience and Overall Wellbeing Through Every Stage of Adult Life</h2>}
      <div className="mt-3">
        {section.lines.map((line, index) => <ContentLine key={`${section.id}-${index}`} line={line} />)}
      </div>
      <SectionImage id={section.id} />
    </section>
  );
}

function AdultMentalHealthCareIndiaPage() {
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

    const schemas = [medicalWebPageSchema, faqSchema, breadcrumbSchema, physicianSchema, organizationSchema, localBusinessSchema];
    const scriptId = "adult-mental-health-care-schema";
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
      <Seo
        title="Adult Mental Health Care in India | Mental Health Assessment & Emotional Wellbeing | Manovaidya"
        description="Looking for Adult Mental Health Care in India? Learn about stress, anxiety, depression, burnout, sleep problems, emotional wellbeing and mental health assessments at Manovaidya."
        keywords="Adult Mental Health, Adult Mental Health Care, Adult Mental Health Specialist, Mental Health Assessment, Emotional Wellbeing, Mental Wellness, Mental Health Support, Adult Counselling, Mental Health Clinic India, Stress and Anxiety, Depression, Burnout, Panic Disorder, OCD, Sleep Problems, Emotional Resilience"
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/adult-mental-wellness" className="transition hover:text-[#7835A4]">Adult Mental Wellness</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Adult Mental Health Care</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Adult Mental Health</p>
              <h1 className="mt-2 max-w-[670px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">{articleLines[0]}</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">{articleLines[1]}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Assessment</a>
                <a href="#programs" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Explore Programs <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                    <p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist & Founder</p>
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
                <img src={heroImage} alt="Adult mental health care and emotional wellbeing support in India" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          {visibleSections.map((section) => <ContentSection key={section.id} section={section} />)}

          <section id="internal-links" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[18px] font-black text-[#17111f]">Helpful Adult Mental Health Links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((link) => (
                <a key={link.href} href={link.href} className="flex items-center gap-2 text-[13px] font-black text-[#7835A4] transition hover:text-[#5d268d] hover:underline">
                  <ArrowRight className="h-4 w-4" /> {link.text}
                </a>
              ))}
            </div>
          </section>

          <section id="faqs" className="mt-9 scroll-mt-24">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <p className="mt-2 text-[13px] font-black text-[#7835A4]">Adult Mental Health Care FAQ</p>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-sm transition-all hover:border-[#c5adcf]">
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-4 text-left" aria-expanded={openFaq === index}>
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
                <a key={label} href="#programs" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedAdultPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book Assessment</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get structured adult mental health assessment and personalised emotional wellbeing guidance.</p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823838638</p>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-[#fbf9fd]">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4] shadow-sm"><Mail className="h-8 w-8" /></span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, adult mental wellness tips and Manovaidya updates.</p>
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

export default AdultMentalHealthCareIndiaPage;

