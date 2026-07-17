import React from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BedDouble,
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
} from "lucide-react";

import heroImage from "../images/senior-mind-memory-hero.png";
import signsImage from "../images/senior-common-signs.png";
import familyImage from "../images/senior-family-support.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-system-diagram.png";
import ctaImage from "../images/senior-couple-sunset-cta.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedSeniorMindCarePages from "./RelatedSeniorMindCarePages";
import Seo from "../components/Seo";

const rawSourceContent = "\r\nSenior Mental Health Care & Healthy Ageing Treatment in India\r\nSupporting Emotional Wellbeing, Brain Health and Healthy Ageing for Older Adults\r\nGrowing older brings valuable life experiences, wisdom and new perspectives, but it can also introduce physical, emotional and cognitive changes that influence overall wellbeing. Retirement, changes in health, loss of loved ones, reduced social interaction and increasing dependence on others may affect emotional health and quality of life during later years.\r\nMental health is an important part of healthy ageing. It influences memory, emotional wellbeing, decision-making, relationships, independence and the ability to participate in everyday life. While some changes are a natural part of ageing, persistent emotional or cognitive concerns should never be considered a normal or unavoidable part of growing older.\r\nMany older adults experience concerns such as memory changes, confusion, depression, anxiety, loneliness, sleep problems or difficulty adapting to life transitions. Family members may also notice behavioural changes, forgetfulness or reduced confidence that gradually affect everyday activities.\r\nAt Manovaidya, we believe that senior mental health is influenced by multiple interconnected factors including brain health, nutrition, sleep, physical wellbeing, emotional resilience, social engagement and lifestyle habits. Rather than focusing only on symptoms, we aim to understand the complete wellbeing of every older adult.\r\nLed by Dr. Ankush Garg, Mental Health Specialist and Founder of Manovaidya, we follow the Neuro-Ayurveda Development System, a structured five-pillar framework that combines comprehensive assessment, personalised guidance and holistic support to help older adults maintain emotional wellbeing, cognitive health and independence.\r\n\r\nSenior Mental Health Areas We Support\r\nGrowing older presents different emotional and cognitive challenges for every individual. Our Senior Mental Health Care includes support for:\r\nMemory Loss & Cognitive Changes\r\nUnderstanding age-related memory concerns and changes in thinking or attention.\r\nLearn More → Memory Loss Treatment\r\n\r\nDementia Care\r\nSupport for individuals and families living with dementia through structured assessment, guidance and caregiver education.\r\nLearn More → Dementia Care\r\n\r\nAlzheimer's Care\r\nHelping families understand Alzheimer's disease, cognitive changes and long-term care planning.\r\nLearn More → Alzheimer's Care\r\n\r\nDepression & Low Mood\r\nSupport for persistent sadness, emotional withdrawal, reduced motivation and changes in emotional wellbeing.\r\nLearn More → Depression & Low Mood\r\n\r\nAnxiety & Emotional Stress\r\nHelping older adults understand excessive worry, health-related anxiety and emotional distress.\r\nLearn More → Anxiety Treatment\r\n\r\nSleep Problems\r\nUnderstanding sleep difficulties that affect memory, emotional wellbeing, physical health and daily functioning.\r\nLearn More → Sleep Problems\r\n\r\nLoneliness & Social Isolation\r\nSupport for emotional wellbeing when social connections become limited because of retirement, bereavement or lifestyle changes.\r\nLearn More → Loneliness & Emotional Wellbeing\r\n\r\nHealthy Ageing & Brain Wellness\r\nPromoting healthy lifestyle habits that support cognitive function, emotional wellbeing and quality of life.\r\nLearn More → Healthy Ageing Support\r\n\r\nCaregiver Guidance\r\nHelping family members better understand and support ageing parents or loved ones with emotional or cognitive concerns.\r\nLearn More → Caregiver Support\r\n\r\nEmotional Resilience During Ageing\r\nSupporting emotional adaptation during retirement, changing family roles and later-life transitions.\r\nLearn More → Emotional Wellbeing Support\r\n\r\nWhy Senior Mental Health Matters\r\nHealthy ageing is not only about physical health—it also includes emotional wellbeing, memory, cognitive function and meaningful social relationships.\r\nGood mental health helps older adults:\r\nMaintain independence\r\nStay socially connected\r\nManage emotional changes\r\nAdapt to retirement and lifestyle transitions\r\nSupport memory and cognitive wellbeing\r\nImprove quality of life\r\nBuild resilience during ageing\r\nRecognising emotional or cognitive concerns early allows individuals and families to seek appropriate guidance before challenges begin affecting everyday functioning.\r\n\r\n\r\n\r\n\r\nUnderstanding Senior Mental Health\r\nMental health remains important at every stage of life, including older adulthood. As people age, they may experience changes in physical health, memory, daily routines, social relationships and independence. These life changes can influence emotional wellbeing, confidence and overall quality of life.\r\nGrowing older does not automatically mean developing mental health problems or memory disorders. Many older adults continue to live active, independent and emotionally fulfilling lives. However, persistent emotional or cognitive changes should not be dismissed as a normal part of ageing.\r\nSupporting senior mental health means helping older adults maintain emotional wellbeing, cognitive function, meaningful relationships and independence while adapting to the natural changes that occur with age.\r\n\r\nCommon Senior Mental Health Concerns\r\nEvery older adult experiences ageing differently. Some may notice only mild changes, while others may develop emotional or cognitive challenges that require additional support.\r\n\r\nMemory Changes\r\nMany older adults occasionally forget names, appointments or where they placed everyday items. Mild forgetfulness can occur with ageing, but persistent or progressive memory problems that interfere with daily life should be professionally evaluated.\r\n→ Learn More About Memory Loss\r\n\r\nDementia\r\nDementia is a group of conditions that can affect memory, thinking, reasoning and everyday functioning. Symptoms often develop gradually and may require ongoing medical evaluation and support.\r\nEarly recognition helps families better understand the condition and plan appropriate care.\r\n→ Learn More About Dementia Care\r\n\r\nAlzheimer's Disease\r\nAlzheimer's disease is one of the most common causes of dementia. It may gradually affect memory, communication, orientation and daily activities over time.\r\nUnderstanding the condition early can help families plan care and provide meaningful support.\r\n→ Learn More About Alzheimer's Care\r\n\r\nDepression & Low Mood\r\nDepression is not a normal part of ageing.\r\nSome older adults may experience:\r\nPersistent sadness\r\nReduced motivation\r\nLoss of interest in activities\r\nSocial withdrawal\r\nChanges in appetite\r\nSleep disturbances\r\nProfessional assessment can help identify contributing factors and appropriate support.\r\n→ Learn More About Depression & Low Mood\r\n\r\nAnxiety & Health-Related Worry\r\nHealth concerns, financial changes, loss of independence or family responsibilities may contribute to anxiety in later life.\r\nSome older adults may experience:\r\nConstant worrying\r\nRestlessness\r\nFear about health\r\nDifficulty relaxing\r\nIncreased nervousness\r\n→ Learn More About Anxiety Treatment\r\n\r\nLoneliness & Social Isolation\r\nRetirement, bereavement, limited mobility or living alone may reduce social interaction for some older adults.\r\nLong-term loneliness may affect emotional wellbeing, motivation and overall quality of life.\r\nMaintaining meaningful social connections is an important part of healthy ageing.\r\n→ Learn More About Loneliness & Emotional Wellbeing\r\n\r\nSleep Problems\r\nHealthy sleep supports memory, emotional wellbeing and physical health.\r\nSome older adults may experience:\r\nDifficulty falling asleep\r\nFrequent waking during the night\r\nEarly morning awakening\r\nDaytime fatigue\r\nPersistent sleep problems should be discussed with a qualified healthcare professional.\r\n→ Learn More About Sleep Problems\r\n\r\nHealthy Ageing & Brain Wellness\r\nBrain health continues to be important throughout life.\r\nHealthy ageing includes supporting:\r\nMemory\r\nLearning\r\nEmotional wellbeing\r\nPhysical activity\r\nNutrition\r\nSocial engagement\r\nDaily independence\r\nHealthy lifestyle habits may contribute to better quality of life during older adulthood.\r\n→ Learn More About Healthy Ageing\r\n\r\nSigns Families Should Notice\r\nFamily members are often the first to observe meaningful changes in an older adult's behaviour, memory or emotional wellbeing.\r\nProfessional assessment may be helpful if families notice persistent changes such as:\r\nMemory & Thinking\r\nFrequently forgetting important information\r\nRepeating the same questions\r\nDifficulty recognising familiar places\r\nConfusion about time or daily routines\r\nDifficulty managing everyday tasks\r\n\r\nEmotional Changes\r\nPersistent sadness\r\nAnxiety\r\nIncreased irritability\r\nEmotional withdrawal\r\nLoss of interest in favourite activities\r\n\r\nBehavioural Changes\r\nPersonality changes\r\nIncreased confusion\r\nSuspicion or mistrust\r\nReduced social interaction\r\nDifficulty making everyday decisions\r\n\r\nPhysical & Lifestyle Changes\r\nPoor sleep\r\nReduced appetite\r\nFrequent fatigue\r\nNeglecting personal hygiene\r\nReduced physical activity\r\nPersistent physical symptoms should also be evaluated by a qualified healthcare professional.\r\n\r\nDaily Living Skills\r\nDifficulty managing medications\r\nDifficulty handling finances\r\nGetting lost in familiar places\r\nIncreased dependence on others\r\nDifficulty performing routine household activities\r\n\r\nHow Senior Mental Health Affects Everyday Life\r\nMental wellbeing influences much more than emotions during older adulthood.\r\nHealthy emotional and cognitive wellbeing supports:\r\nIndependence\r\nMemory\r\nDecision-making\r\nCommunication\r\nFamily relationships\r\nPhysical wellbeing\r\nConfidence\r\nParticipation in everyday activities\r\nWhen emotional or cognitive concerns remain unrecognised, they may gradually affect safety, independence, quality of life and caregiver wellbeing.\r\n\r\nThe Role of Families & Caregivers\r\nFamily members play an important role in supporting healthy ageing.\r\nCaregivers can help by:\r\nEncouraging regular conversations.\r\nSupporting healthy daily routines.\r\nPromoting balanced nutrition and physical activity.\r\nHelping maintain social connections.\r\nMonitoring changes in memory or behaviour.\r\nEncouraging regular medical check-ups.\r\nSeeking professional guidance when concerns persist.\r\nCaregiving can also be emotionally demanding. Families should remember that supporting their own wellbeing is equally important while caring for an ageing loved one.\r\n\r\nOur Senior Mental Health Assessment Process\r\nEvery older adult has a unique life journey, health history and personal experiences. Emotional wellbeing and cognitive health are influenced by many factors, including physical health, lifestyle, social connections and age-related changes.\r\nAt Manovaidya, we believe that understanding the individual is more important than focusing only on memory problems or emotional symptoms.\r\nOur assessment process is designed to understand the complete wellbeing of every older adult before recommending personalised guidance.\r\n\r\nStep 1 – Understanding the Individual & Family Concerns\r\nEvery assessment begins with listening carefully to both the senior individual and their family members.\r\nWe discuss:\r\nCurrent concerns\r\nMemory changes\r\nEmotional wellbeing\r\nDaily routine\r\nSleep patterns\r\nPhysical health\r\nLifestyle habits\r\nMedical history\r\nFamily observations\r\nUnderstanding both perspectives helps us develop a clearer picture of the individual's overall wellbeing.\r\n\r\nStep 2 – Comprehensive Senior Mental Health Assessment\r\nOur structured assessment considers multiple areas that influence emotional and cognitive wellbeing.\r\nThese may include:\r\nMemory and cognition\r\nEmotional health\r\nBehavioural changes\r\nSleep quality\r\nDaily functioning\r\nLifestyle habits\r\nSocial interaction\r\nPhysical wellbeing\r\nIndependence in daily activities\r\nThis comprehensive approach helps identify strengths, current challenges and areas where additional support may be beneficial.\r\n\r\nStep 3 – Understanding the Individual's Wellbeing Profile\r\nFollowing the assessment, we explain our observations in a clear and family-friendly manner.\r\nThis includes:\r\nEmotional wellbeing\r\nCognitive strengths\r\nAreas requiring attention\r\nLifestyle considerations\r\nPractical caregiver guidance\r\nPersonalised recommendations\r\nNext steps for ongoing support\r\nOur goal is to help families better understand their loved one's needs while supporting dignity, independence and quality of life.\r\n\r\nThe Neuro-Ayurveda Development System\r\nAt Manovaidya, senior mental health is understood through the Neuro-Ayurveda Development System, a structured five-pillar framework that considers emotional wellbeing, brain health, lifestyle and physical wellness together.\r\nRather than focusing only on age-related symptoms, this approach helps us understand the broader factors that may influence healthy ageing.\r\n\r\n1. Brain Nourishment System\r\nHealthy brain function supports:\r\nMemory\r\nAttention\r\nLearning\r\nDecision-making\r\nEmotional regulation\r\nCognitive wellbeing\r\nThis pillar focuses on supporting healthy brain function throughout the ageing process.\r\n\r\n2. Gut Response System\r\nHealthy nutrition and digestion continue to play an important role in later life.\r\nThis pillar considers nutritional wellbeing, healthy digestion and gut health as part of overall physical and emotional wellness.\r\n\r\n3. Neural Network System\r\nThe brain continues adapting throughout life.\r\nThis pillar focuses on supporting cognitive engagement, learning, memory and healthy mental stimulation as part of overall brain wellness.\r\n\r\n4. Sensory Integration System\r\nAge-related sensory changes can influence communication, confidence and participation in everyday activities.\r\nThis pillar considers hearing, vision, sensory experiences and environmental factors that may affect emotional wellbeing and quality of life.\r\n\r\n5. Behaviour Guidance System\r\nBehavioural changes in older adults may reflect emotional, cognitive or environmental influences.\r\nThis pillar focuses on helping families better understand behaviour, improve communication and create supportive daily routines that encourage comfort, dignity and emotional wellbeing.\r\n\r\nHow We Support Older Adults\r\nEvery older adult has unique strengths, life experiences and healthcare needs.\r\nAt Manovaidya, our support is personalised according to the individual's emotional wellbeing, cognitive profile and overall health.\r\nOur approach may include:\r\nSenior Mental Health Assessment\r\nCognitive Wellbeing Guidance\r\nLifestyle Recommendations\r\nBrain Wellness Education\r\nFamily & Caregiver Guidance\r\nHealthy Routine Planning\r\nEmotional Wellbeing Support\r\nMind-Body Balance Guidance\r\nProgress Monitoring and Follow-Up\r\nOur goal is to help older adults maintain independence, emotional wellbeing and quality of life while supporting families throughout the journey.\r\n\r\nWhy Families Across India Choose Manovaidya\r\nFamilies from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India choose Manovaidya because of our compassionate, structured and holistic approach to senior mental health.\r\nFamilies trust us for:\r\n✔ Comprehensive Senior Mental Health Assessments\r\n✔ Neuro-Ayurveda Development System\r\n✔ Personalised Emotional & Cognitive Wellbeing Guidance\r\n✔ Family & Caregiver Education\r\n✔ Holistic Brain Health Approach\r\n✔ Online & In-Clinic Consultations\r\n✔ Long-Term Healthy Ageing Support\r\nOur goal is to help older adults age with dignity, confidence and better emotional wellbeing while supporting families with practical guidance and long-term care planning.\r\n\r\nAbout Dr. Ankush Garg\r\nMental Health Specialist & Healthy Ageing Guide\r\nDr. Ankush Garg is the Founder of Manovaidya and the developer of the Neuro-Ayurveda Development System.\r\nHis work focuses on helping older adults and families better understand emotional wellbeing, cognitive health, memory concerns and healthy ageing through structured assessments and personalised guidance.\r\nThrough a holistic approach that considers brain health, lifestyle, nutrition, behaviour and family support, Dr. Ankush Garg works with individuals and caregivers to encourage better quality of life and emotional wellbeing during later years.\r\nBased in Delhi NCR, he provides Senior Mental Health consultations for families across India through online and in-clinic appointments.\r\n\r\nBook a Senior Mental Health Assessment\r\nConcerned About Memory, Emotional Wellbeing or Healthy Ageing?\r\nIf you or a loved one is experiencing memory changes, emotional difficulties, confusion, sleep problems or concerns related to healthy ageing, understanding these changes early can help families make informed decisions and plan appropriate support.\r\nAt Manovaidya, we provide structured Senior Mental Health Assessments, personalised guidance and holistic support through the Neuro-Ayurveda Development System.\r\n\r\nSupporting Healthy Ageing Together\r\nGrowing older is a natural part of life, and every individual deserves compassionate care, dignity and emotional wellbeing.\r\nWhether your concerns relate to memory, emotional health, cognitive wellbeing or healthy ageing, our team is here to help you better understand the journey and provide personalised guidance for both older adults and their families.\r\nBook Your Senior Mental Health Assessment Today\r\nBook Consultation\r\nTalk to Our Team\r\nSchedule Assessment\r\n\r\n\r\n\r\nFrequently Asked Questions (FAQs)\r\n1. What is senior mental health?\r\nSenior mental health refers to the emotional, psychological and cognitive wellbeing of older adults. It includes memory, emotional resilience, decision-making, relationships, independence and overall quality of life. Good mental health supports healthy ageing and helps older adults remain active and engaged in daily life.\r\n\r\n2. Why is mental health important for older adults?\r\nMental health plays an important role in maintaining emotional wellbeing, memory, independence and social relationships. Good mental health helps older adults adapt to life changes, manage stress and continue participating in meaningful daily activities.\r\n\r\n3. Is memory loss a normal part of ageing?\r\nMild forgetfulness, such as occasionally misplacing items or forgetting names, can occur with ageing. However, memory problems that become frequent, progressively worsen or interfere with everyday activities should be evaluated by a qualified healthcare professional.\r\n\r\n4. What are the common mental health concerns in older adults?\r\nOlder adults may experience concerns such as depression, anxiety, loneliness, sleep problems, memory changes, dementia, Alzheimer's disease, emotional stress and adjustment difficulties related to ageing or retirement.\r\n\r\n5. What is the difference between normal ageing and dementia?\r\nNormal ageing may involve occasional forgetfulness that does not interfere with everyday life. Dementia is a medical condition that gradually affects memory, thinking, communication and the ability to perform daily activities. A professional assessment is important to understand the cause of cognitive changes.\r\n\r\n6. What are the early signs that families should not ignore?\r\nFamilies should seek professional guidance if they notice persistent memory loss, increasing confusion, personality changes, repeated questions, getting lost in familiar places, difficulty managing daily activities, emotional withdrawal or significant behavioural changes.\r\n\r\n7. Can depression occur in older adults?\r\nYes. Depression can affect older adults and should never be considered a normal part of ageing. Persistent sadness, loss of interest in activities, changes in sleep or appetite and social withdrawal should be professionally assessed.\r\n\r\n8. Can loneliness affect mental health in older adults?\r\nYes. Long-term loneliness and social isolation may contribute to emotional distress, anxiety, depression and reduced quality of life. Maintaining meaningful social connections and regular engagement in daily activities supports emotional wellbeing.\r\n\r\n9. How can families support the mental wellbeing of ageing parents?\r\nFamilies can help by maintaining regular communication, encouraging healthy routines, promoting physical activity, supporting social interaction, monitoring changes in memory or behaviour, attending medical appointments when needed and seeking professional guidance if concerns persist.\r\n\r\n10. What is a senior mental health assessment?\r\nA senior mental health assessment is a structured evaluation that helps understand memory, emotional wellbeing, behaviour, daily functioning, lifestyle, sleep and overall cognitive health. The assessment helps identify strengths, challenges and appropriate next steps for personalised support.\r\n\r\n11. How does Manovaidya support senior mental health?\r\nAt Manovaidya, support begins with understanding the individual's overall emotional and cognitive wellbeing rather than focusing only on symptoms. Through structured assessments, personalised guidance and the Neuro-Ayurveda Development System, we help older adults and their families better understand healthy ageing, emotional wellbeing and cognitive health.\r\n\r\n12. What is the Neuro-Ayurveda Development System?\r\nThe Neuro-Ayurveda Development System is Manovaidya's structured five-pillar framework that considers Brain Nourishment, Gut Response, Neural Network Development, Sensory Integration and Behaviour Guidance together while understanding emotional wellbeing, cognitive health and healthy ageing. It supports a holistic understanding alongside structured assessment and personalised guidance.\r\n\r\n13. Can healthy lifestyle habits support brain health as we age?\r\nHealthy sleep, balanced nutrition, regular physical activity, mental stimulation, social engagement and management of medical conditions may support overall brain health and emotional wellbeing. Lifestyle measures are supportive and should complement professional medical care when required.\r\n\r\n14. When should families seek urgent medical attention?\r\nImmediate medical attention should be sought if an older adult experiences sudden confusion, stroke-like symptoms, loss of consciousness, seizures, sudden inability to speak or move, severe behavioural changes, or any other medical emergency. Emergency medical care should never be delayed.\r\n\r\n15. Why should families choose Manovaidya for senior mental health care?\r\nAt Manovaidya, we focus on understanding the complete emotional and cognitive wellbeing of every older adult through structured assessments, personalised guidance and the Neuro-Ayurveda Development System. Our approach combines healthy ageing, brain wellness, family education and long-term support to help older adults maintain dignity, independence and a better quality of life.\r\n\r\n\r\n\r\nSTEP 1: URL\r\nRecommended URL\r\n/senior-mental-health-care-india/\r\n\r\n\r\nSTEP 2: SEO Title\r\nSenior Mental Health Care in India | Healthy Ageing, Memory & Emotional Wellbeing | Manovaidya\r\n\r\n(69 Characters)\r\nAlternative\r\nSenior Mental Health Specialist | Healthy Ageing & Brain Health | Manovaidya\r\n\r\n\r\nSTEP 3: Meta Description\r\nLooking for Senior Mental Health Care in India? Learn about healthy ageing, memory loss, dementia, Alzheimer's, emotional wellbeing, brain health and senior mental health assessments at Manovaidya.\r\n\r\n(159 Characters)\r\n\r\nSTEP 4: H1\r\nSenior Mental Health Care & Healthy Ageing Treatment in India\r\n\r\n\r\nSTEP 5: H2 Structure\r\nUnderstanding Senior Mental Health\r\n\r\nSenior Mental Health Areas We Support\r\n\r\nCommon Senior Mental Health Concerns\r\n\r\nSigns Families Should Notice\r\n\r\nHow Senior Mental Health Affects Everyday Life\r\n\r\nThe Role of Families & Caregivers\r\n\r\nOur Senior Mental Health Assessment Process\r\n\r\nThe Neuro-Ayurveda Development System\r\n\r\nHow We Support Older Adults\r\n\r\nWhy Families Across India Choose Manovaidya\r\n\r\nAbout Dr. Ankush Garg\r\n\r\nFrequently Asked Questions\r\n\r\nBook a Senior Mental Health Assessment\r\n\r\n\r\nSTEP 6: Primary Keywords\r\nSenior Mental Health\r\n\r\nSenior Mental Health Care\r\n\r\nHealthy Ageing\r\n\r\nBrain Health\r\n\r\nMemory Care\r\n\r\nSenior Mental Health Specialist\r\n\r\nCognitive Health\r\n\r\nEmotional Wellbeing\r\n\r\nMental Health for Elderly\r\n\r\nSenior Mental Health Assessment\r\n\r\n\r\nSTEP 7: Secondary Keywords\r\nMemory Loss\r\n\r\nDementia\r\n\r\nAlzheimer's Disease\r\n\r\nDepression in Older Adults\r\n\r\nAnxiety in Seniors\r\n\r\nLoneliness\r\n\r\nSleep Problems\r\n\r\nHealthy Brain Ageing\r\n\r\nCaregiver Support\r\n\r\nEmotional Wellbeing for Seniors\r\n\r\n\r\nSTEP 8: Long-Tail Keywords\r\nSenior mental health specialist in India\r\n\r\nHealthy ageing support\r\n\r\nMemory loss assessment\r\n\r\nDementia care in India\r\n\r\nAlzheimer's care support\r\n\r\nMental health for elderly parents\r\n\r\nBrain health for seniors\r\n\r\nSenior mental health assessment\r\n\r\nCaregiver guidance for dementia\r\n\r\nEmotional wellbeing for older adults\r\n\r\n\r\nSTEP 9: Local SEO\r\nUnder\r\nWhy Families Across India Choose Manovaidya\r\nAdd\r\nFamilies from Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and across India consult Manovaidya for Senior Mental Health Assessments, memory care, healthy ageing guidance and emotional wellbeing support through online and in-clinic consultations.\r\n\r\n\r\nSTEP 10: About Dr. Ankush Garg\r\nBased in Delhi NCR, Dr. Ankush Garg provides Senior Mental Health Assessments, memory care guidance and healthy ageing support for older adults across India through the Neuro-Ayurveda Development System.\r\n\r\n\r\nSTEP 11: IMAGE SEO\r\nHero Image\r\nFilename\r\nsenior-mental-health-care-india.webp\r\n\r\nALT\r\nSenior mental health care and healthy ageing support in India\r\n\r\n\r\nMemory Care\r\nFilename\r\nmemory-care-seniors.webp\r\n\r\nALT\r\nMemory care and cognitive health support for older adults\r\n\r\n\r\nHealthy Ageing\r\nFilename\r\nhealthy-ageing-brain-health.webp\r\n\r\nALT\r\nHealthy ageing and brain wellness for senior citizens\r\n\r\n\r\nCaregiver Guidance\r\nFilename\r\ncaregiver-support-elderly.webp\r\n\r\nALT\r\nFamily caregiver supporting an elderly loved one\r\n\r\n\r\nNeuro-Ayurveda\r\nFilename\r\nneuro-ayurveda-senior-mental-health.webp\r\n\r\nALT\r\nNeuro Ayurveda approach for senior mental health and brain wellness\r\n\r\n\r\nCTA Image\r\nFilename\r\nsenior-mental-health-consultation.webp\r\n\r\nALT\r\nBook senior mental health assessment at Manovaidya\r\n\r\n\r\nSTEP 12: Internal Linking Strategy\r\nSenior Mental Health Pages\r\nLink naturally to:\r\nMemory Loss\r\nDementia Care\r\nAlzheimer's Care\r\nHealthy Ageing\r\nDepression in Older Adults\r\nAnxiety in Seniors\r\nSleep Problems\r\nLoneliness & Social Isolation\r\nBrain Health\r\nCaregiver Support\r\n\r\nMain Hub Pages\r\nAlso link to:\r\nChild Development Care\r\nTeen Mental Health Care\r\nAdult Mental Health Care\r\nWomen's Mental Health Care\r\nGut & Body Concerns\r\n\r\nSTEP 13: Breadcrumb\r\nHome\r\n\r\n>\r\n\r\nSenior Mental Health Care\r\n\r\n\r\nSTEP 14: FAQ Schema\r\nDeveloper Note\r\nImplement all 15 FAQs using FAQPage JSON-LD Schema.\r\n\r\n\r\nSTEP 15: Related Pages\r\nMemory Loss\r\n\r\nDementia Care\r\n\r\nAlzheimer's Care\r\n\r\nHealthy Ageing\r\n\r\nDepression in Older Adults\r\n\r\nAnxiety in Seniors\r\n\r\nSleep Problems\r\n\r\nLoneliness & Social Isolation\r\n\r\nBrain Health\r\n\r\nCaregiver Support\r\n\r\n\r\nSTEP 16: CTA\r\nHeading\r\nConcerned About Memory, Brain Health or Healthy Ageing?\r\n\r\nText\r\nBook a structured Senior Mental Health Assessment with Manovaidya to better understand memory changes, emotional wellbeing, cognitive health and healthy ageing for yourself or your loved one.\r\n\r\nButtons\r\nBook Senior Assessment\r\n\r\nTalk to Our Team\r\n\r\nSchedule Consultation\r\n\r\n\r\nSTEP 17: Schema Markup\r\nDeveloper should implement:\r\nMedicalWebPage Schema\r\nFAQPage Schema\r\nBreadcrumbList Schema\r\nPhysician Schema (Dr. Ankush Garg)\r\nOrganization Schema\r\nLocalBusiness Schema\r\n\r\nSTEP 18: E-E-A-T Trust Signals\r\nWhy Trust Manovaidya?\r\nComprehensive Senior Mental Health Assessments\r\nNeuro-Ayurveda Development System\r\nPersonalized Healthy Ageing Guidance\r\nFamily & Caregiver Education\r\nHolistic Brain Health Approach\r\nOnline & In-Clinic Consultations Across India\r\nGuidance by Dr. Ankush Garg\r\n\r\nSTEP 19: Topical Authority Strategy\r\nThis page should become the parent page for all senior mental health topics.\r\nInternal Cluster\r\nSenior Mental Health Care\r\n│\r\n├── Memory Loss\r\n├── Dementia Care\r\n├── Alzheimer's Care\r\n├── Healthy Ageing\r\n├── Depression in Older Adults\r\n├── Anxiety in Seniors\r\n├── Sleep Problems\r\n├── Loneliness & Social Isolation\r\n├── Brain Health\r\n└── Caregiver Support\r\n\r\n\r\n";

const articleSource = rawSourceContent.split("STEP 1: URL")[0].trim();
const seoNotes = rawSourceContent.slice(articleSource.length).trim();
const articleLines = articleSource.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

const h2Titles = [
  "Senior Mental Health Areas We Support",
  "Why Senior Mental Health Matters",
  "Understanding Senior Mental Health",
  "Common Senior Mental Health Concerns",
  "Signs Families Should Notice",
  "How Senior Mental Health Affects Everyday Life",
  "The Role of Families & Caregivers",
  "Our Senior Mental Health Assessment Process",
  "The Neuro-Ayurveda Development System",
  "How We Support Older Adults",
  "Why Families Across India Choose Manovaidya",
  "About Dr. Ankush Garg",
  "Book a Senior Mental Health Assessment",
  "Frequently Asked Questions (FAQs)",
];

const sectionIds = {
  "Senior Mental Health Areas We Support": "programs",
  "Why Senior Mental Health Matters": "why-senior-mental-health-matters",
  "Understanding Senior Mental Health": "understanding-senior-mental-health",
  "Common Senior Mental Health Concerns": "common-senior-mental-health-concerns",
  "Signs Families Should Notice": "signs-families-should-notice",
  "How Senior Mental Health Affects Everyday Life": "how-senior-mental-health-affects-everyday-life",
  "The Role of Families & Caregivers": "role-of-families-and-caregivers",
  "Our Senior Mental Health Assessment Process": "senior-mental-health-assessment-process",
  "The Neuro-Ayurveda Development System": "neuro-ayurveda-development-system",
  "How We Support Older Adults": "how-we-support-older-adults",
  "Why Families Across India Choose Manovaidya": "why-families-across-india-choose-manovaidya",
  "About Dr. Ankush Garg": "about-dr-ankush-garg",
  "Book a Senior Mental Health Assessment": "book-consultation",
  "Frequently Asked Questions (FAQs)": "faqs",
};

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Programs", id: "programs" },
  { label: "Why It Matters", id: "why-senior-mental-health-matters" },
  { label: "Understanding Senior Mental Health", id: "understanding-senior-mental-health" },
  { label: "Common Concerns", id: "common-senior-mental-health-concerns" },
  { label: "Signs Families Notice", id: "signs-families-should-notice" },
  { label: "Families & Caregivers", id: "role-of-families-and-caregivers" },
  { label: "Assessment Process", id: "senior-mental-health-assessment-process" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-development-system" },
  { label: "How We Support", id: "how-we-support-older-adults" },
  { label: "Why Families Choose", id: "why-families-across-india-choose-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Assessment", id: "book-consultation" },
];

const categories = [
  { label: "Memory Care", count: 12, Icon: Brain },
  { label: "Dementia Care", count: 10, Icon: ShieldCheck },
  { label: "Depression", count: 8, Icon: CloudRain },
  { label: "Anxiety", count: 7, Icon: Activity },
  { label: "Sleep Problems", count: 9, Icon: BedDouble },
  { label: "Caregiver Support", count: 11, Icon: HeartHandshake },
];

const subheadingLines = new Set([
  "Memory Loss & Cognitive Changes",
  "Dementia Care",
  "Alzheimer's Care",
  "Depression & Low Mood",
  "Anxiety & Emotional Stress",
  "Sleep Problems",
  "Loneliness & Social Isolation",
  "Healthy Ageing & Brain Wellness",
  "Caregiver Guidance",
  "Emotional Resilience During Ageing",
  "Memory Changes",
  "Dementia",
  "Alzheimer's Disease",
  "Depression & Low Mood",
  "Anxiety & Health-Related Worry",
  "Loneliness & Social Isolation",
  "Sleep Problems",
  "Healthy Ageing & Brain Wellness",
  "Memory & Thinking",
  "Emotional Changes",
  "Behavioural Changes",
  "Physical & Lifestyle Changes",
  "Daily Living Skills",
  "Step 1 – Understanding the Individual & Family Concerns",
  "Step 2 – Comprehensive Senior Mental Health Assessment",
  "Step 3 – Understanding the Individual's Wellbeing Profile",
  "1. Brain Nourishment System",
  "2. Gut Response System",
  "3. Neural Network System",
  "4. Sensory Integration System",
  "5. Behaviour Guidance System",
  "Mental Health Specialist & Healthy Ageing Guide",
  "Concerned About Memory, Emotional Wellbeing or Healthy Ageing?",
  "Supporting Healthy Ageing Together",
  "Book Your Senior Mental Health Assessment Today",
]);

const programHeadingIcons = {
  "Memory Loss & Cognitive Changes": Brain,
  "Dementia Care": ShieldCheck,
  "Alzheimer's Care": HeartHandshake,
  "Depression & Low Mood": CloudRain,
  "Anxiety & Emotional Stress": Sparkles,
  "Sleep Problems": BedDouble,
  "Loneliness & Social Isolation": Users,
  "Healthy Ageing & Brain Wellness": Activity,
  "Caregiver Guidance": CheckCircle2,
  "Emotional Resilience During Ageing": HeartHandshake,
};

const sectionHeadingIcons = {
  introduction: Brain,
  programs: Sparkles,
  "why-senior-mental-health-matters": Activity,
  "understanding-senior-mental-health": Brain,
  "common-senior-mental-health-concerns": HeartHandshake,
  "signs-families-should-notice": ShieldCheck,
  "how-senior-mental-health-affects-everyday-life": Activity,
  "the-role-of-families-and-caregivers": Users,
  "our-senior-mental-health-assessment-process": CalendarCheck,
  "neuro-ayurveda-development-system": Brain,
  "how-we-support-older-adults": CheckCircle2,
  "why-families-across-india-choose-manovaidya": Award,
  "about-dr-ankush-garg": HeartHandshake,
};

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
  { text: "Memory Loss", href: "/memory-loss-forgetfulness-support-seniors-india/" },
  { text: "Dementia Care", href: "/dementia-alzheimers-care-support-seniors-india/" },
  { text: "Depression in Older Adults", href: "/senior-depression-support-india/" },
  { text: "Sleep Problems", href: "/sleep-disorders-seniors-support-india/" },
  { text: "Brain Health", href: "/mild-cognitive-impairment-mci-support-seniors-india/" },
  { text: "Child Development Care", href: "/child-development-care-india/" },
  { text: "Teen Mental Health Care", href: "/teen-mental-health-care-india/" },
  { text: "Adult Mental Health Care", href: "/adult-mental-health-care-india/" },
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
    { "@type": "ListItem", position: 2, name: "Senior Mental Health Care", item: "/senior-mental-health-care-india/" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Senior Mental Health Care & Healthy Ageing Treatment in India",
  description: "Looking for Senior Mental Health Care in India? Learn about healthy ageing, memory loss, dementia, Alzheimer's, emotional wellbeing, brain health and senior mental health assessments at Manovaidya.",
  url: "/senior-mental-health-care-india/",
  about: ["Senior Mental Health", "Healthy Ageing", "Brain Health", "Memory Care"],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ankush Garg",
  medicalSpecialty: ["Mental Health", "Senior Mental Health", "Healthy Ageing"],
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
    const Icon = programHeadingIcons[line];
    if (Icon) {
      return (
        <div className="mt-5 flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <h3 className="text-[16px] font-black text-[#21142d]">{line}</h3>
        </div>
      );
    }
    return <h3 className="mt-5 text-[16px] font-black text-[#21142d]">{line}</h3>;
  }
  const leadingIconPattern = /^[\u2714\u2705\u{1F4DE}]\s*/u;
  if (leadingIconPattern.test(line) || line.startsWith("→") || line.startsWith("Learn More")) {
    const displayLine = line.replace(leadingIconPattern, "");
    return (
      <p className="mt-2 flex gap-2 text-[13.5px] font-bold leading-6 text-[#51465a]">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
        <span>{displayLine}</span>
      </p>
    );
  }
  return <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">{line}</p>;
}

function SectionImage({ id }) {
  if (id === "programs") {
    return <img src={familyImage} alt="Family caregiver supporting an elderly loved one" className="mt-6 h-[270px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)] sm:h-[340px]" />;
  }
  if (id === "signs-families-should-notice") {
    return <img src={signsImage} alt="Memory care and cognitive health support for older adults" className="mt-6 h-[270px] w-full rounded-lg object-cover object-center shadow-[0_12px_30px_rgba(58,31,90,0.08)] sm:h-[340px]" />;
  }
  if (id === "neuro-ayurveda-development-system") {
    return (
      <div className="mt-5 flex h-[380px] w-full items-center justify-center rounded-lg bg-[#fbf9fd] shadow-[0_12px_30px_rgba(58,31,90,0.08)]">
        <img src={neuroAyurvedaImage} alt="Neuro Ayurveda approach for senior mental health and brain wellness" className="max-h-[310px] w-full max-w-[720px] object-contain object-center" />
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
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">Book Senior Assessment</a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Talk to Our Team</a>
            <a href="tel:+917823838638" className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-[14px] font-black text-white transition hover:bg-[#632b86]">Schedule Consultation</a>
          </div>
        </div>
        <img src={ctaImage} alt="Book senior mental health assessment at Manovaidya" className="h-40 w-full object-cover object-center sm:h-52" />
      </section>
    );
  }

  const SectionIcon = sectionHeadingIcons[section.id] || Sparkles;
  const sectionTitle = section.id === "introduction" ? "Supporting Emotional Wellbeing, Brain Health and Healthy Ageing for Older Adults" : section.title;

  return (
    <section id={section.id} className="mt-9 scroll-mt-24">
      <div className="rounded-lg border border-[#eadff1] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(58,31,90,0.06)] sm:px-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
            <SectionIcon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-[17px] font-black leading-snug text-[#5d268d] sm:text-[18px]">{sectionTitle}</h2>
            <div className="mt-3">
              {section.lines.map((line, index) => <ContentLine key={`${section.id}-${index}`} line={line} />)}
            </div>
          </div>
        </div>
        <SectionImage id={section.id} />
      </div>
    </section>
  );
}

function SeniorMentalHealthCareIndiaPage() {
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
    const scriptId = "senior-mental-health-care-schema";
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
        title="Senior Mental Health Care in India | Healthy Ageing, Memory & Emotional Wellbeing | Manovaidya"
        description="Looking for Senior Mental Health Care in India? Learn about healthy ageing, memory loss, dementia, Alzheimer's, emotional wellbeing, brain health and senior mental health assessments at Manovaidya."
        keywords="Senior Mental Health Care India, Healthy Ageing, Memory Loss Support, Dementia Care India, Alzheimer's Support, Emotional Wellbeing for Seniors, Brain Health Assessment, Neuro-Ayurveda for Seniors, Geriatric Mental Health, Dr. Ankush Garg"
        path="/senior-mental-health-care-india"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Senior Mental Health Care in India",
          "description": "Looking for Senior Mental Health Care in India? Learn about healthy ageing, memory loss, dementia, Alzheimer's, emotional wellbeing, brain health and senior mental health assessments at Manovaidya."
        }}
      />
      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>&gt;</span>
                <a href="/senior-mind-memory-care" className="transition hover:text-[#7835A4]">Senior Mind & Memory Care</a>
                <span>&gt;</span>
                <span className="text-[#4b345d]">Senior Mental Health Care</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Senior Mental Health</p>
              <h1 className="mt-2 max-w-[670px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">{articleLines[0]}</h1>
              <p className="mt-4 max-w-[660px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">{articleLines[1]}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">Book Senior Assessment</a>
                <a href="#programs" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">Explore Programs <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                    <p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist & Healthy Ageing Guide</p>
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
                <img src={heroImage} alt="Senior mental health care and healthy ageing support in India" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
              </div>
            </figure>
          </div>

          {visibleSections.map((section) => <ContentSection key={section.id} section={section} />)}

          <section id="internal-links" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
            <h2 className="text-[18px] font-black text-[#17111f]">Helpful Senior Mental Health Links</h2>
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
            <p className="mt-2 text-[13px] font-black text-[#7835A4]">Senior Mental Health Care FAQ</p>
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

          <pre className="sr-only" aria-hidden="true">{rawSourceContent}</pre>
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
                <a key={label} href="#programs" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-[#7835A4]" />{label}</span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedSeniorMindCarePages />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation-sidebar">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book Senior Assessment</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get structured senior mental health assessment and family guidance.</p>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, senior brain health tips and Manovaidya updates.</p>
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

export default SeniorMentalHealthCareIndiaPage;

