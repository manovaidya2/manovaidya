import React from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Heart,
  HeartHandshake,
  Mail,
  MessageCircle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/teen-depression-support-india.png";
import parentGuidanceImage from "../images/parent-support-teen-depression.png";
import neuroAyurvedaImage from "../images/neuro-ayurveda-teen-depression.png";
import ctaImage from "../images/teen-emotional-wellbeing-india.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import RelatedTeenMentalWellnessPages from "./RelatedTeenMentalWellnessPages";
import Seo from "../components/Seo";

const pageTitle = "Teen Depression & Low Mood Support in India";
const teenDepressionSeoTitle = "Teen Depression & Low Mood Treatment in India | Manovaidya";
const teenDepressionSeoDescription =
  "Teen depression and low mood support in India with signs, causes, parent guidance, structured assessment and Neuro-Ayurveda teen wellness approach at Manovaidya.";
const teenDepressionSeoPageUrl = "https://manovaidya.org/teen-depression-support";
const teenDepressionFaqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my teen so depressed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adolescents may be feeling sad due to academic pressure, friendship problems, comparing themselves to others, poor self-esteem, family stress or emotional issues. Normal sadness should pass after a few hours or days, but sadness that lingers for weeks, and interferes with activities, relationships or motivation could be a sign of a deeper emotional issue. Proper guidance and support are offered to families when they know what might contribute to emotional wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "How can mentors help teenagers determine when they are suffering from depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Symptoms of depression in teenagers include sadness, being irritable, withdrawing from others, loss of interest, poor concentration, poor self-confidence, sleeping too much or too little, eating more or less and not being able to focus. Some teens will be withdrawn, others may be irritable or emotionally reactive. Being aware of these emotions early can help your family understand the emotions that your teenager might be feeling and take supportive action towards emotional wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "How can I tell if my teen is depressed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parents may see their child becoming sad for extended periods of time, show a decreased interest in hobbies, become socially withdrawn, less active, less motivated, and sleep and eating differently. Depression is not limited to just living sad, but can impact relationships, confidence and school performance. When these changes persist for longer and become detrimental to living in everyday life, it could be useful to have some organized advice and a more comprehensive understanding of the youth's emotional condition.",
      },
    },
    {
      "@type": "Question",
      name: "Why do teens get depressed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teens usually have more than one reason for depression. Factors that can affect emotional wellbeing include academic stress, social experiences, lack of confidence, family relationships, lifestyle habits, excessive screen usage and personal experiences. All teenagers react to stress and to life events in their own individual way. Familiarity with the wider context of emotional challenges can enable families to offer more effective support and foster a more nurturing atmosphere for children to develop and grow resilient.",
      },
    },
    {
      "@type": "Question",
      name: "Does depression in teens have any seriousness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parenting teens with depression is not a normal experience and needs to be treated with seriousness as it can impact emotional health, relationships, self-confidence, motivation and educational performance. Sorrow is a normal part of life, however, when sadness persists it can make life more difficult than normal and affect a person's daily life. Knowledge, emotional wellness and guidance at an early stage can help families to better manage concerns and promote long-term wellness.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average duration of teen depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depression can last a different amount of time for each teenager. Emotional challenges can get better with time, support and/or intervention, or may remain with a child if there is a lack of resolution to the underpinning issues. There are lots of factors that affect a teen's emotional well-being, such as relationships, lifestyle habits, confidence and stress. By identifying and providing support early on, families can better manage emotional issues and develop resiliency.",
      },
    },
    {
      "@type": "Question",
      name: "What are the therapies for teens with depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A variety of approaches to helping teenagers with depression may involve counselling, psychotherapy, guidance for family members, behavioral interventions, emotional wellbeing and lifestyle interventions. Which is the best way to address a teen's needs and situation will vary. Good support can also be given to address emotional symptoms, but may also involve consideration of the wider issues which may impact on confidence, behaviour, motivation and wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my teen not doing anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes this lack of interest is associated with emotional stress, low mood, confidence issues, burnout or a lack of motivation. Hobbies and social events, as well as daily activities, may be avoided by teenagers with emotional needs. It is often useful to know why these changes have occurred rather than just what the behaviour is. Being understood and cared for can make a difference.",
      },
    },
    {
      "@type": "Question",
      name: "Does depression impact school performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Emotional wellbeing and academic achievement are interrelated. Depression can make teenagers feel unmotivated, have difficulty paying attention, remembering things, and being involved in class or schoolwork. Even if a teenager is able to learn well, emotional problems can interfere with learning. Emotional wellbeing can be supported to strengthen the foundation for academic growth, confidence and long term success.",
      },
    },
    {
      "@type": "Question",
      name: "What do parents need to do to support a teen in depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parents can support by adopting an open communication style, listening non-judgementally to the teenager, providing emotional support and supporting a safe environment for the teenager to feel understood. Supporting healthy habits, balanced lifestyle choices, and healthy social relationships can also help contribute to emotional wellbeing. It is helpful, particularly with teenagers, to support them rather than criticize or push them. Make little by little steps and they can make a huge difference in emotional resilience or recovery.",
      },
    },
    {
      "@type": "Question",
      name: "What are the initial symptoms of depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial symptoms of depression can be experienced as sadness, irritability, emotional withdrawal, low confidence, decreased motivation, fatigue, and changes in sleep patterns and loss of interest in things. A few teens may be more sensitive or have trouble focusing or dealing with everyday tasks. Families may better understand the concerns with emotional wellbeing and seek support when necessary if they are able to identify these early signs.",
      },
    },
    {
      "@type": "Question",
      name: "How do teens cope with depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When teens receive understanding, support, guidance and healthy coping, they can make positive strides in their emotional health. Each teenager's life is unique and change may be based on personal factors and the causes of emotional challenges. Over time, a positive family system, healthy lifestyles and structure can help develop resilience and confidence in teens.",
      },
    },
    {
      "@type": "Question",
      name: "What is Manovaidya doing for teenagers, families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Manovaidya, the support starts with comprehending the teenager as a whole instead of concentrating on any symptom. The Neuro-Ayurveda Development System alongside structured assessment, customised guidance, family support increase the awareness of a family about emotional wellbeing, behaviour, confidence and lifestyle related influences. The aim is to assist young people and families to become clearer, more resilient and to improve their long-term wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any alternative to medication for depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way to do this will vary depending on the teen's specific situation and the level of concerns. Other families investigate non-medication approaches including counselling, emotional wellbeing support, healthy routines, physically active lifestyle and family guidance and lifestyle changes. Knowing the reasons for emotional challenges can be helpful in determining ways to support them and boost confidence, resilience and wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "When is it time for parents to consult with a professional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When emotional problems last for extended periods of time and start to interfere with everyday life, relationships, motivation, self-confidence, sleep and/or school performance, parents may want to seek advice. If you notice your child has been sad for more than two weeks, is becoming withdrawn, doesn't care about activities anymore, changes behavior or has a lower level of wellbeing, they may need more help. A comprehensive evaluation may assist families in understanding the issues that impact their teen's emotional wellness and development.",
      },
    },
  ],
};
const teenDepressionSeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      name: teenDepressionSeoTitle,
      description: teenDepressionSeoDescription,
      url: teenDepressionSeoPageUrl,
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Teen Depression & Low Mood Treatment",
          item: teenDepressionSeoPageUrl,
        },
      ],
    },
    teenDepressionFaqSchema,
  ],
};
const articleRaw = `Key Takeaways
Understanding Teen Depression & Low Mood
Sadness vs Persistent Depression
Common Emotional & Behavioural Signs
Causes of Low Mood in Teenagers
Effects on Confidence & Self-Esteem
Impact on Studies, Relationships & Daily Life
Supporting Healthy Lifestyle & Sleep Habits
Neuro-Ayurveda Approach to Emotional Wellbeing
Building Emotional Strength & Resilience
Parent-Teen Communication & Family Support
Manovaidya Assessment & Guidance Process
FAQs About Teen Depression & Low Mood

Teen Depression & Low Mood Support in India

Supporting Teens to Develop Emotional Resilience, Self-Confidence & Enhance Emotional Wellness

The teen years are a difficult time of life. It is important for parents to understand that the sadness, disappointment and mood changes that happen occasionally when growing up is normal, but for some teenagers low mood can be persistent. 
Poor mood, withdrawal, lack of motivation and inability to enjoy daily activities. [1][3]

Many parents observe that their teen is detached, grumpy or depressed, or is no longer enjoying activities they used to. Parents may not understand what these changes are, or whether they are a normal part of adolescence or an emotional problem. [3][9]

We recognise at Manovaidya that emotional wellbeing can be affected by a variety of factors such as confidence, relationships, lifestyle, school experiences, social pressures and mental health. [1][7]

Under the guidance of Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya adopts a structured Neuro-Ayurveda approach, assisting parents and families to grasp deep insights into emotional wellness and establish a long-term growth and resiliency plan.



 At Manovaidya, Teen Depression & Low Mood Support Focuses On:

Emotional Wellbeing & Resilience
Confidence & Self-Esteem Building
Understanding Low Mood & Emotional Withdrawal
Healthy Lifestyle & Daily Habits
Parent-Teen Communication & Support
Long-Term Mental Wellness


Understanding Teen Depression & Low Mood

It's only natural to feel sad occasionally. If teenagers get a bad grade on a test, they might be disappointed or upset when a friendship gets into a dispute or they have some setback. In most cases, these feelings will slowly get better over time and help.

Families do begin to seek answers when sadness persists, when it interferes with their daily lives and when it begins to impact their behaviour and motivation, confidence and relationships. [3][7]

Many parents who are seeking Teen Depression Support in India, Teen Mental Health Support in India or guidance for Teen Emotional Wellbeing are looking for some structure in order to understand what their teen might be going through.

Teen depression and low mood can affect teenagers differently.
Some teenagers become quiet and withdrawn.
Others may appear angry, frustrated or emotionally sensitive.
Some may lose interest in hobbies and activities they once enjoyed.
Others may struggle with confidence, motivation and relationships.

Teenagers' experiences are individual and so understanding emotional wellbeing is more than about observing a behaviour—it's about understanding the other things that might be affecting what they are doing every day.


Common Signs of Teen Depression & Low Mood

The symptoms of teen depression are not always what parents may think they are.
It's not necessary for a teenager to be a "crybaby" to be having emotional problems.
Many teens suppress their feelings, and then go on living, even though they are having a lot of emotional struggle inside.


Parents might observe mood changes, behavioral issues, changes in studies or daily routines. [3][5]



Emotional Signs


Persistent sadness
Irritability
Feelings of hopelessness
Emotional sensitivity
Low confidence
Negative self-talk
Increased emotional overwhelm


Behavioural Signs


Social withdrawal
Avoiding friends and family
Reduced interest in hobbies
Lack of motivation
Spending excessive time alone
Increased screen dependency

Academic Signs
Declining academic performance
Difficulty concentrating
Reduced participation
Lack of interest in studies
Fear of failure


Physical Signs
Fatigue
Changes in sleep patterns
Appetite changes
Reduced energy
Difficulty maintaining routines

Just having a few signs and symptoms doesn't necessarily indicate that a teenager is depressed. When emotional and behavioural changes persist over a longer period of time and start to interfere with functioning, however, it is important to understand and attend to those changes. [3][5][7]


Why Teenagers Experience Depression & Low Mood

Many parents think that there's always one specific reason for the emotional problems.
Emotional wellbeing is often a complex mix of factors. [1][7]

Academic Pressure

Closeness to school and exams and worries about future jobs can be a continuous emotional strain. If teens feel they can't keep up, it can cause a loss of confidence and motivation.

Social Comparison

Teenagers make comparisons with others, friends and social media content. The ongoing process of comparison can lead to feeling unworthy, uncertain, and/or emotionally distressed.

Relationship Challenges

Friendship issues, conflict with peers and social rejection can have a big impact on a teenager's emotional health.

Low Confidence & Self-Esteem

Self-confidence is a trait that can be lost by teenagers and lead to emotional struggles and negative thinking.

Screen & Social Media Influence

Overuse of social media can also lead to feelings of comparison, unrealistic expectations and emotional pressure.

Lifestyle & Sleep Habits

Inadequate sleep, irregular sleep patterns, low levels of physical activity and excessive screen time can affect emotional health and mental wellness.

Many parents are concerned that the situation of their teenager continuing to be sad, withdrawn, lack confidence or have a decreased interest or motivation can impact their future development, relationships and wellbeing. Familiarity with these issues from an early age can equip families with positive and empowered strategies to enhance emotional well-being and resilience.


How Depression & Low Mood Can Affect Teenagers

Low mood and depression can affect not just feelings, but many other aspects of life.

If emotional difficulties persist over a longer period of time they can impact on confidence, relationships, motivation, learning and wellbeing. [1][7]

Many teen victims of sexual assault suffer silently because they don't know how to tell someone what's happening or can be afraid of being misunderstood.

Knowing what role emotional wellbeing plays in various aspects of life can enable families to offer meaningful support.


Emotional Wellbeing

Low mood and depression can leave you feeling overwhelmed.

Teenagers may experience:
Persistent sadness
Emotional numbness
Hopelessness
Irritability
Frustration
Increased sensitivity
Feelings of loneliness

As these emotional factors progress, they can impact teenage self-perception, relationship and future expectations. [3][7]


Confidence & Self-Esteem

A lot of young people who are depressed start to question themselves.

Thoughts can be common such as:
I am not good enough.
Nobody understands me.
I always fail.
Things will never improve.
These ideas can slowly impact on confidence and self-confidence.

A child or teen who used to take part in activities might start to avoid them because they don't think they are capable of doing them.


Academic Performance

There is a strong relationship between emotional wellbeing and academic achievement.

Depression and low mood can cause teens to have problems with:

•	Concentration
•	Motivation
•	Memory
•	Participation in class
•	Completing assignments
•	Exam preparation

It's common for parents to begin by worrying about poor grades, rather than thinking about emotional wellbeing's impact on academic performance. [3][9]


Relationships & Social Life

Depression can impact relationships with friends and family too.

Some teenagers may:

Spend more time alone
Avoid social interaction
Withdraw from friends
Communicate less
Become more sensitive to criticism

These shifts can result in miscommunication between teens, peers and parents.


Daily Functioning

Low mood could affect regular activities.

Teenagers may experience:

Reduced energy
Sleep difficulties
Changes in appetite
Difficulty maintaining schedules
Loss of interest in hobbies
Reduced participation in family activities

Recognizing these shifts as indicators of emotional difficulties can lead families to be more empathetic and supportive. [3][7]


The Neuro-Ayurveda Approach to Teen Depression & Low Mood

Emotional wellbeing is seen in Manovaidya in a more global and encompassing way.

Manovaidya's emphasis is on the whole picture of what might be affecting emotional wellbeing, confidence, behaviour, motivation, attention and overall development rather than just on sadness and motivation/behaviour.

The Neuro-Ayurveda Development System enables the families to better understand their emotional wellbeing through five interconnected pillars.

Brain Nourishment System

Wellbeing, emotional health is closely linked with cognitive and emotional health.

The Brain Nourishment System emphasises the understanding of factors which may affect:

•	Emotional balance
•	Confidence
•	Attention
•	Learning readiness
•	Decision making
•	Cognitive wellbeing

One way to help build emotional resilience is to appreciate how teens respond to emotions, experiences, and challenges.


Gut Response System

The connection between digestive health and emotional health is still being investigated.

Elevated blood pressure, increased blood sugar, and weight gain are just a few of the many things that may happen during the teen years when emotional issues are present:


•	Digestive discomfort
•	Appetite changes
•	Irregular eating habits
•	Energy fluctuations
•	Lifestyle-related concerns


The Gut Response System is based on the awareness that general health and wellbeing could affect emotional stability and functioning.



Neural Network System

All experiences foster the formation of patterns of thinking, learning and responding in the brain.

The Neural Network System is about understanding:


•	Thought patterns
•	Emotional responses
•	Behavioural tendencies
•	Learning habits
•	Adaptability

Families can often find better clarity when they understand these patterns and know how to interpret the information.


Sensory Integration System


Emotional wellbeing can be affected by the environment of a teenager.

Factors such as:


•	Academic pressure
•	Social environments
•	Noise
•	Digital stimulation
•	Social expectations

May affect stress, feelings and everyday problems among teens.

Knowing about sensory influences can help to set up more supportive environments.

Behaviour Guidance System

Emotional experiences may be reflected in behaviour.

When teens are feeling down they may exhibit:

•	Withdrawal
•	Irritability
•	Lack of motivation
•	Reduced communication
•	Avoidance behaviours

This pillar is not just about behaviour, it's about understanding what is going on for the behaviour to help families to respond in an effective way.


How Parents Can Support Teenagers

During adolescence, parents can make a significant contribution to the care and support of emotional wellbeing. [1][9]

As long as it is something you can do, even minor adjustments or changes with communication, understanding and daily routines, can make a difference.

Stay Emotionally Available

It is important for many teens to understand they can find help when they are not ready to talk.

When teens feel emotionally present, it can be a huge comfort for them.

Listen Without Judgement

Talking to teens is easier when they feel you're listening to them instead of judging.

Stay calm and listen respectfully to build trust and communication.



Avoid Constant Criticism

Too much feedback can lower morale and lead to emotional stress.

Constant correction is not supported by guidance, which is likely to generate better results.


Encourage Healthy Routines


Emotional wellbeing can be encouraged by healthy sleep routines, balanced schedules, physical activity and regular daily routines. [1][8][10]

Support Social Connection

Teens may feel more connected and supported through positive friendships, family interaction and healthy social experiences.

Focus on Strengths

Many teens who are emotionally troubled tend to focus on their perceived weaknesses.

Parents can help by acknowledging strengths, effort and progress, not just problems.


Create a Supportive Home Environment

Teenagers tend to be better able to get through difficulties when they're in a calm, understanding and emotionally safe setting.


How Manovaidya Supports Teenagers & Families

Support starts at Manovaidya with a comprehensive approach to understanding the teenager as a whole, rather than just one symptom or concern.


We normally do the following:

Step 1: Detailed Assessment

Knowing about emotional wellbeing, motivation, confidence, lifestyle habits, sleep patterns, social experiences and family concerns.

Step 2: Personalized Guidance

Making individual recommendations according to the emotional, behavioral and developmental needs of the adolescent.

Step 3: Parent Guidance & Family Support

Supporting parents to learn about communication, emotional health and how they can help their teen at home.


Step 4: Neuro-Ayurveda Development System

Using the five pillars to gain a better insight into emotional wellbeing, behaviour, confidence and growth.

Step 5: Progress Tracking & Follow-Up

Establishing a plan that allows families to track progress and make decisions along the way.

We are here to assist teens and families to transition from confusion and emotional distress to clarity, confidence and wellbeing.

Why Families Choose Manovaidya

For many families, deciding on the right support system for a teen can be daunting. Parents often seek clarity, guidance and direction that creates a structure to help them understand more about their teen's emotional well-being.

At Manovaidya we do not only consider symptom management but we also aim to support families to understand other factors which may affect emotional wellbeing, confidence, behaviour, motivation and overall development.

Families Choose Manovaidya Because Of:

✔ Structured Teen Mental Wellness Assessment

All teens are different. Knowing the factors that impact emotional, behavioral and lifestyle factors helps to develop a more individualized plan of support and development.



✔ Neuro-Ayurveda Development System

Emotional wellbeing is addressed in our structured framework by focusing on five interconnected strands that help families to understand emotional wellbeing:


•	Brain Nourishment System
•	Gut Response System
•	Neural Network System
•	Sensory Integration System
•	Behaviour Guidance System


✔ Parent-Centred Guidance

Teen mental wellness is not all about the teen.


Parents are an important part of a supportive environment for emotional growth and resilience. [1][9]


✔ Personalized Support


Each teen has their own unique set of emotional issues.

Advice is always personalized based on needs and situation.


✔ Long-Term Growth Focus

We aim to support teens to develop and grow in confidence, emotional health, life habits and wellbeing, not just solutions.

✔ Family-Oriented Approach

Cooperation and understanding with parents and teens, with the right guidance, can make it easier to achieve meaningful progress.


Why Families Across India Connect With Manovaidya


Delhi, Noida, Gurgaon, Faridabad and other cities in India reach out to Manovaidya for Teen Depression, Teen Mental Health, Teen Emotional Wellbeing Support in both online and in-clinic settings.


About Dr. Ankush Garg


Autism, ADHD, Child Development & Mental Health Specialist in India


Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System.


His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.

Over the years, he has worked with children, teenagers, adults and families seeking support for developmental, behavioural, emotional and mental wellness concerns.


Many families searching for a Mental Health Specialist in India are looking for more than symptom-based guidance. They are looking for clarity, direction and a structured roadmap.


Dr. Ankush Garg's work focuses on helping families better understand emotional wellbeing, behavioural patterns, confidence challenges, lifestyle-related influences and long-term mental wellness planning.


Through structured assessment, personalized guidance, family support and regular follow-up, he helps individuals and families move from confusion toward greater clarity, confidence and wellbeing.


Today, families from different parts of India connect with Manovaidya because they are looking for a compassionate, structured and personalized approach that focuses on overall wellbeing and long-term growth.


Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.


Frequently Asked Questions (FAQs)

1. Why is my teenager always sad?


There are various reasons why teenagers might be feeling sad, such as being under lots of academic pressure, having problems with their friends, feeling they are not as good as others, lack in confidence, or emotional problems or stress in their family. Sadness is a normal occurrence in life, but when sadness lasts for several weeks and starts impacting the way you relate with others, sleep, activities, or your drive, then there is a deeper emotional concern. Having an awareness of the factors that affect emotional wellbeing can assist families in supporting and guiding them through this crucial period of development. [1][3][7]


2. What are the signs of depression in teenagers?


Symptoms of depression in teens might involve sadness or irritability, withdrawal from activities, diminished interest, lack of motivation, sleeping or eating changes, poor grades, and low self-confidence. Some teens might withdraw and isolate themselves, or get angry or sensitive. Early detection of these signs can allow families to better identify what their teen might be feeling and make supportive decisions when it comes to emotional wellbeing. [3][5]


3. How do I know if my teenager is depressed?


Parents might notice that their child is being sadder, less interested in hobbies, more withdrawn, not as energetic, less motivated, sleeping or eating more. Depression can go beyond just the mood; it can impact on relationships, confidence and school performance. If the changes persist for a longer time and start to impact on daily life, it might be useful to find some structured guidance and understanding of the teenager's emotional wellbeing. [3][7][9]

4. What causes depression in teenagers?


Teenagers have very few single causes for depression. Academic stress, social interaction, lack of confidence, family relationships, lifestyle choices, excessive screen time and personal experiences can impact emotional wellbeing. Stress and life events can have different effects on different teens. Familiarizing yourself with the underlying issues that can lead to emotional challenges can enable families to offer more effective support and foster a resilient and nurturing atmosphere for development. [1][7]


5. Is depression in teens serious?


Depression in teenagers should be taken seriously as it can have a negative impact on emotional health, relationships, confidence, motivation and school performance. Sadness is a normal part of life, but if it is a constant problem it can affect a person's ability to live their life normally. Adequate knowledge, emotional support and guidance at the beginning can facilitate families to respond to their concerns in effective ways and promote long-term wellbeing. [1][3][5]


6. How long does teen depression last?


Depression takes different lengths of time for different teens. Emotional issues may get better with time, with some that may last as long as the underlying issues are not addressed. There are a wide range of factors that impact on emotional wellbeing such as relationships, lifestyle habits, confidence and stress factors. Familiarity and planned aid can help families cope with emotional issues in the long run and sustain their resilience. [3][5]


7. What are the therapies for teens with depression?

Teen depression support can involve counselling and psychotherapy, family guidance, behavioural support, emotional wellbeing strategies and lifestyle based interventions. The best way to do this will depend on the needs and situation of the teen. Efforts to support can affect more than just emotional symptoms; they can include an understanding of the context in which confidence, behaviour, motivation and wellbeing may be affected. [5][7]


8. Why has my teenager lost interest in everything?


Loss of interest in activities that formed a part of the person's enjoyment could sometimes be associated with emotional stress, low mood, confidence issues, burnout or reduced motivation. A teenager may withdraw from hobbies, socializing, and/or daily activities if they are experiencing emotional problems. It is often more helpful to understand why the behaviour is changing, rather than just the behaviour itself. There's a difference in the world of supportive communication and emotional understanding. [3][7]


9. Can depression affect school performance?


Yes. There is a strong link between emotional wellbeing and academic achievement. Depression can make teenagers inattention, unmotivated, forgetful, not interested in activities, and not able to do school work. Teens with good abilities may still have emotional problems that can impact learning. Enhancing emotional wellbeing can often contribute to better learning foundations, confidence and future success. [1][3]


10. How can parents help a teenager with depression?

Parents can support by keeping communication open, listening not judging, providing emotional support and providing a safe environment for teens to feel understood. Healthy practices, healthy lifestyle habits and a harmonious social relationship can also foster emotional well-being. Teenagers respond more positively to onesupport than criticism or pressure. Caring for yourself emotionally can be a major contribution from small, consistent efforts. [1][9][10]


11. What are the first signs of depression?

Some early signs of depression can be generalized sadness, irritability, feeling detached from others, loss of self-confidence, loss of drive, feeling tired, and changes in sleeping patterns and interests. Some teens might be more sensitive or not be able to focus on and manage daily tasks. Being aware of these early indicators can help families to understand when they may be concerned about emotional wellbeing and to access support if they need it. [3][5][7]

12. Can teenagers recover from depression?

Adolescents benefit from feeling understood, supported, guided and empowered to find healthy coping strategies to improve their emotional wellbeing. Each teen's path is unique and development may be influenced by personal factors and emotional issues. It can be important in the long-term to help teenagers develop resilience and confidence through a supportive family environment, good health and structured guidance. [5][7]


13. How does Manovaidya support teenagers and families?

At Manovaidya, support starts with the understanding that the teen is a whole person and not just a symptom. Structured assessment provides families with a greater understanding of emotional wellbeing, behaviour, confidence and lifestyle-related influences through personalized guidance, family support and the Neuro-Ayurveda Development System. The aim is to support teens and families to achieve greater clarity, resilience and wellbeing.


14. Can depression be treated without medication?

The best course of action will vary based on the teen's needs and the extent of concern. A range of other support to help families to consider non-medication options include counselling, emotional wellbeing support, healthy routines, physical activity, family guidance and lifestyle changes. When identifying ways to support emotional wellbeing, it is important to understand the factors that can cause emotional problems, which can lead to greater confidence, resilience and wellbeing. [5][7][10]


15. When should parents seek professional guidance?

If emotional challenges become ongoing and start to interfere with functioning, relationships, motivation, confidence, sleep or school work, parents may want to seek advice. Symptoms of needing extra support can include lasting unhappiness or a lack of motivation, or a change in behaviour or wellbeing. A formal evaluation can assist families to understand the circumstances that impact on their teen's emotional well-being and development. [1][3][5]


Book a Consultation

Concerned About Your Teenager's Emotional Wellbeing?

If your teenager is experiencing persistent sadness, emotional withdrawal, low motivation, confidence challenges or behavioural changes, seeking clarity is often the first step.

At Manovaidya, our team helps families better understand emotional wellbeing through structured assessment, personalized guidance and family-centred support.


Book a Consultation

Take the First Step Towards Better Teen Emotional Wellbeing

📞 Book Assessment Session
 📞 Speak With Our Team
 📞 Get Personalized Guidance`;

const refsRaw = `Final Suggested References
Modern Science
[1] World Health Organization (WHO). Adolescent mental health.
https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health
Supports: Adolescent mental health, emotional wellbeing, family and social support.

[2] National Institute of Mental Health (NIMH). Teen Depression.
https://www.nimh.nih.gov/health/publications/teen-depression
Supports: Teen depression signs, symptoms, seriousness and when to seek help.

[3] UNICEF. Adolescent mental health.
https://www.unicef.org/health/adolescent-mental-health
Supports: Adolescent wellbeing, resilience, support systems and prevention.

[4] American Academy of Child and Adolescent Psychiatry. Depression in Children and Teens.
https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/The-Depressed-Child-004.aspx
Supports: Depression signs, school impact, family guidance and professional support.

[5] CDC. Mental health of children and parents.
https://www.cdc.gov/childrensmentalhealth/
Supports: Child and teen mental health, family environment and support planning.

[6] American Psychological Association. Social media and the internet.
https://www.apa.org/topics/social-media-internet
Supports: Social comparison, digital exposure and adolescent emotional wellbeing.

[7] Sleep Foundation. Teens and Sleep.
https://www.sleepfoundation.org/teens-and-sleep
Supports: Sleep habits, mood, energy and adolescent daily functioning.

Ayurvedic References
[8] Sharma PV (Trans.). Charaka Samhita. Chaukhambha Orientalia, Varanasi.
Digital Copy:
https://archive.org/details/CharakaSamhitaEnglish
Supports: Mental wellbeing (Manas), nourishment, holistic health and lifestyle.

[9] Sharma H (Ed.). Kashyapa Samhita (Vriddha Jivakiya Tantra). Chaukhambha Sanskrit Series Office, Varanasi.
Digital Copy:
https://archive.org/details/KashyapaSamhita
Supports: Child and adolescent care, family guidance, growth and wellbeing.

[10] Murthy KR Srikantha (Trans.). Ashtanga Hridaya. Chaukhambha Krishnadas Academy, Varanasi.
Digital Copy:
https://archive.org/details/AshtangaHridayamEnglish
Supports: Lifestyle, routine, digestion, mental balance and holistic care.`;

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "Understanding Teen Depression", id: "understanding-teen-depression" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teens Get Depressed", id: "why-teens-get-depressed" },
  { label: "How It Affects Teenagers", id: "how-teenagers-are-affected" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "Parent Support", id: "parent-support" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Why Manovaidya", id: "why-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const keyTakeawayLabels = [
  "Understanding Teen Depression & Low Mood",
  "Sadness vs Persistent Depression",
  "Common Emotional & Behavioural Signs",
  "Causes of Low Mood in Teenagers",
  "Effects on Confidence & Self-Esteem",
  "Impact on Studies, Relationships & Daily Life",
  "Supporting Healthy Lifestyle & Sleep Habits",
  "Neuro-Ayurveda Approach to Emotional Wellbeing",
  "Building Emotional Strength & Resilience",
  "Parent-Teen Communication & Family Support",
  "Manovaidya Assessment & Guidance Process",
  "FAQs About Teen Depression & Low Mood",
];

const references = [
  { n: "1", title: "World Health Organization (WHO). Adolescent mental health.", url: "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health", supports: "Adolescent mental health, emotional wellbeing, family and social support." },
  { n: "2", title: "National Institute of Mental Health (NIMH). Teen Depression.", url: "https://www.nimh.nih.gov/health/publications/teen-depression", supports: "Teen depression signs, symptoms, seriousness and when to seek help." },
  { n: "3", title: "UNICEF. Adolescent mental health.", url: "https://www.unicef.org/health/adolescent-mental-health", supports: "Adolescent wellbeing, resilience, support systems and prevention." },
  { n: "4", title: "American Academy of Child and Adolescent Psychiatry. Depression in Children and Teens.", url: "https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/The-Depressed-Child-004.aspx", supports: "Depression signs, school impact, family guidance and professional support." },
  { n: "5", title: "CDC. Mental health of children and parents.", url: "https://www.cdc.gov/childrensmentalhealth/", supports: "Child and teen mental health, family environment and support planning." },
  { n: "6", title: "American Psychological Association. Social media and the internet.", url: "https://www.apa.org/topics/social-media-internet", supports: "Social comparison, digital exposure and adolescent emotional wellbeing." },
  { n: "7", title: "Sleep Foundation. Teens and Sleep.", url: "https://www.sleepfoundation.org/teens-and-sleep", supports: "Sleep habits, mood, energy and adolescent daily functioning." },
  { n: "8", title: "Sharma PV (Trans.). Charaka Samhita. Chaukhambha Orientalia, Varanasi.", url: "https://archive.org/details/CharakaSamhitaEnglish", supports: "Mental wellbeing (Manas), nourishment, holistic health and lifestyle." },
  { n: "9", title: "Sharma H (Ed.). Kashyapa Samhita (Vriddha Jivakiya Tantra). Chaukhambha Sanskrit Series Office, Varanasi.", url: "https://archive.org/details/KashyapaSamhita", supports: "Child and adolescent care, family guidance, growth and wellbeing." },
  { n: "10", title: "Murthy KR Srikantha (Trans.). Ashtanga Hridaya. Chaukhambha Krishnadas Academy, Varanasi.", url: "https://archive.org/details/AshtangaHridayamEnglish", supports: "Lifestyle, routine, digestion, mental balance and holistic care." },
];

const categories = [
  { label: "Teen Depression", count: 12, Icon: Activity, href: "/teen-depression-support/" },
  { label: "Exam Pressure", count: 10, Icon: BookOpen, href: "/exam-performance-pressure/" },
  { label: "Screen Addiction", count: 8, Icon: Brain, href: "/teen-screen-addiction-support/" },
  { label: "Confidence & Self-Esteem", count: 11, Icon: Sparkles, href: "/teen-mental-wellness-india/" },
  { label: "Parent-Teen Relationship", count: 9, Icon: Users, href: "/parent-teen-relationship-support/" },
  { label: "Teen Stress & Anxiety", count: 13, Icon: HeartHandshake, href: "/teen-stress-anxiety-support/" },
];

const articleShareLinks = [
  { label: "f", title: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://www.manovaidya.com/teen-depression-support" },
  { label: "x", title: "Share on X", href: "https://twitter.com/intent/tweet?url=https://www.manovaidya.com/teen-depression-support&text=Teen%20Depression%20and%20Low%20Mood%20Treatment%20in%20India" },
  { label: "in", title: "Share on LinkedIn", href: "https://www.linkedin.com/shareArticle?mini=true&url=https://www.manovaidya.com/teen-depression-support" },
  { label: "wa", title: "Share on WhatsApp", href: "https://api.whatsapp.com/send?text=Teen%20Depression%20and%20Low%20Mood%20Treatment%20in%20India%20https://www.manovaidya.com/teen-depression-support" },
];

const floatingShareLinks = [
  { title: "Share on Facebook", href: articleShareLinks[0].href, className: "bg-[#3d5f9f] hover:bg-[#324f86]", Icon: () => <span className="text-[21px] font-black leading-none">f</span> },
  { title: "Share on X", href: articleShareLinks[1].href, className: "bg-black hover:bg-[#1c1c1c]", Icon: () => <span className="text-[20px] font-normal leading-none">X</span> },
  {
    title: "Share on Flipboard",
    href: "https://share.flipboard.com/bookmarklet/popout?v=2&url=https://www.manovaidya.com/teen-depression-support&title=Teen%20Depression%20and%20Low%20Mood%20Treatment%20in%20India",
    className: "bg-[#ef262b] hover:bg-[#d91d22]",
    Icon: () => (
      <span className="grid h-4 w-4 grid-cols-3 grid-rows-3 gap-[1.5px]" aria-hidden="true">
        <span className="bg-white" />
        <span className="bg-white" />
        <span />
        <span className="bg-white" />
        <span />
        <span />
        <span className="bg-white" />
        <span className="bg-white" />
        <span />
      </span>
    ),
  },
  {
    title: "Share on Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=https://www.manovaidya.com/teen-depression-support&description=Teen%20Depression%20and%20Low%20Mood%20Treatment%20in%20India",
    className: "bg-[#cf0026] hover:bg-[#b80022]",
    Icon: () => <span className="font-serif text-[21px] font-black leading-none">p</span>,
  },
  { title: "Share by Email", href: "mailto:?subject=Teen%20Depression%20and%20Low%20Mood%20Treatment%20in%20India&body=https://www.manovaidya.com/teen-depression-support", className: "bg-[#dd1590] hover:bg-[#c51280]", Icon: () => <Mail className="h-3.5 w-3.5" strokeWidth={2.2} /> },
];

const articleLinkRules = [
  { href: "/teen-depression-support/", pattern: /Teen Depression Treatment/i },
  { href: "/teen-depression-support/", pattern: /Teen Depression/i },
  { href: "/teen-mental-wellness-india/", pattern: /Teen Mental Health Treatment/i },
  { href: "/teen-mental-wellness-india/", pattern: /Teen Mental Health Support/i },
  { href: "/teen-mental-wellness-india/", pattern: /Teen Emotional Wellbeing/i },
  { href: "/teen-mental-wellness-india/", pattern: /Teen Mental Wellness/i },
  { href: "/parent-teen-relationship-support/", pattern: /Parent-Teen Communication/i },
  { href: "/parent-teen-relationship-support/", pattern: /Parent Guidance/i },
  { href: "/exam-performance-pressure/", pattern: /Academic Pressure/i },
  { href: "/exam-performance-pressure/", pattern: /Exam(?:s)?/i },
  { href: "/teen-screen-addiction-support/", pattern: /Screen (?:&|and) Social Media Influence/i },
  { href: "/teen-screen-addiction-support/", pattern: /screen dependency/i },
  { href: "/teen-stress-anxiety-support/", pattern: /Teen Stress/i },
  { href: "#common-signs", pattern: /Low Mood/i },
  { href: "#parent-support", pattern: /Emotional Support/i },
  { href: "#neuro-ayurveda-approach", pattern: /Brain Nourishment System/i },
  { href: "#neuro-ayurveda-approach", pattern: /Gut Response System/i },
  { href: "#neuro-ayurveda-approach", pattern: /Neural Network System/i },
  { href: "#neuro-ayurveda-approach", pattern: /Sensory Integration System/i },
  { href: "#neuro-ayurveda-approach", pattern: /Behaviour Guidance System/i },
  { href: "/about/approach", pattern: /Neuro[-\s]Ayurveda (?:Development )?(?:approach|System)/i },
  { href: "/about/doctor", pattern: /Dr\.?\s+Ankush\s+Garg/i },
  { href: "/about/manovaidya", pattern: /Manovaidya/i },
  { href: "#book-consultation", pattern: /Book Consultation/i },
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
  "Teen Depression & Low Mood Support in India": "introduction",
  "Understanding Teen Depression & Low Mood": "understanding-teen-depression",
  "Common Signs of Teen Depression & Low Mood": "common-signs",
  "Why Teenagers Experience Depression & Low Mood": "why-teens-get-depressed",
  "How Depression & Low Mood Can Affect Teenagers": "how-teenagers-are-affected",
  "The Neuro-Ayurveda Approach to Teen Depression & Low Mood": "neuro-ayurveda-approach",
  "How Parents Can Support Teenagers": "parent-support",
  "How Manovaidya Supports Teenagers & Families": "how-we-support",
  "Why Families Choose Manovaidya": "why-manovaidya",
  "Why Families Across India Connect With Manovaidya": "why-manovaidya-india",
  "About Dr. Ankush Garg": "about-dr-ankush-garg",
  "Frequently Asked Questions (FAQs)": "faqs",
  "Book a Consultation": "book-consultation",
};

const headings = new Set([...Object.keys(sectionIdByTitle), pageTitle]);
const hiddenIntroLines = new Set(["Key Takeaways", ...keyTakeawayLabels]);
const listLeadLines = new Set([
  "At Manovaidya, Teen Depression & Low Mood Support Focuses On:",
  "Depression and low mood can cause teens to have problems with:",
  "Some teenagers may:",
  "The Brain Nourishment System emphasises the understanding of factors which may affect:",
  "Factors such as:",
  "When teens are feeling down they may exhibit:",
  "We normally do the following:",
  "Families Choose Manovaidya Because Of:",
]);

const shortTitleExclusions = new Set(["Modern Science", "Ayurvedic References"]);

const commonSignItems = [
  { label: "Persistent sadness", Icon: Heart },
  { label: "Irritability", Icon: Activity },
  { label: "Social withdrawal", Icon: Users },
  { label: "Difficulty concentrating", Icon: BookOpen },
  { label: "Sleep changes", Icon: Waves },
  { label: "Low confidence", Icon: Sparkles },
  { label: "Loss of interest", Icon: MessageCircle },
  { label: "Reduced energy", Icon: Brain },
];

const causeItems = [
  { label: "Academic Pressure", Icon: BookOpen },
  { label: "Social Comparison", Icon: Users },
  { label: "Relationship Challenges", Icon: HeartHandshake },
  { label: "Low Confidence & Self-Esteem", Icon: Sparkles },
  { label: "Screen & Social Media Influence", Icon: Brain },
  { label: "Lifestyle & Sleep Habits", Icon: Waves },
];

const impactItems = [
  { label: "Emotional Wellbeing", Icon: Heart },
  { label: "Confidence & Self-Esteem", Icon: Sparkles },
  { label: "Academic Performance", Icon: BookOpen },
  { label: "Relationships & Social Life", Icon: Users },
  { label: "Daily Functioning", Icon: Activity },
];

const neuroPillarItems = [
  { label: "Brain Nourishment System", Icon: Brain },
  { label: "Gut Response System", Icon: Activity },
  { label: "Neural Network System", Icon: Waves },
  { label: "Sensory Integration System", Icon: ShieldCheck },
  { label: "Behaviour Guidance System", Icon: Users },
];

const parentSupportItems = [
  "Stay Emotionally Available",
  "Listen Without Judgement",
  "Avoid Constant Criticism",
  "Encourage Healthy Routines",
  "Support Social Connection",
  "Focus on Strengths",
  "Establish a supportive home environment",
];

const supportSteps = [
  { step: "01", label: "Detailed Assessment", Icon: Search },
  { step: "02", label: "Personalized Guidance", Icon: Sparkles },
  { step: "03", label: "Family Support", Icon: Users },
  { step: "04", label: "Progress Tracking", Icon: CheckCircle2 },
];

const whyChooseItems = [
  "Structured Teen Mental Wellness Assessment",
  "Neuro-Ayurveda Development System",
  "Parent-Centred Guidance",
  "Personalized Support",
  "Long-Term Growth Focus",
  "Family-Oriented Approach",
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function FloatingShareBar() {
  return (
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col shadow-[0_8px_24px_rgba(15,23,42,0.16)] sm:flex">
      {floatingShareLinks.map(({ href, title, className, Icon }) => (
        <a
          key={title}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={title}
          className={`flex h-[34px] w-[34px] items-center justify-center border-b border-white/35 text-white transition hover:w-10 ${className}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

function KeyTakeawaysBlock() {
  return (
    <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fbf5ef] shadow-[0_14px_30px_rgba(58,31,90,0.06)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
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
            Join our teen mental wellness newsletter for emotional wellbeing guidance from our experts.
          </p>
          <form className="mt-5 space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-full rounded-full border-none bg-white px-6 text-[13px] font-semibold text-[#21142d] outline-none placeholder:text-[#7d7085]"
            />
            <button
              type="button"
              className="h-[52px] w-full rounded-full bg-[#0b8f98] px-6 text-[13px] font-black uppercase text-white transition hover:bg-[#087982]"
            >
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
      candidates.push({ index: citationMatch.index, text: citationMatch[0], citationId: citationMatch[1], type: "citation" });
    }

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
        <button key={`${next.text}-${parts.length}`} type="button" onClick={() => onCitationClick(next.citationId)} className="mx-0.5 cursor-pointer rounded px-0.5 align-baseline text-[12px] font-black text-[#7835A4] underline decoration-[#c9addb] underline-offset-2 transition hover:bg-[#f4ecf8] hover:text-[#4c1d6b]" aria-label={`Open resource ${next.citationId}`}>
          {next.text}
        </button>
      );
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
  if (heading === "Teen Depression & Low Mood Support in India") {
    return (
      <div className="mt-4 grid gap-5 rounded-xl border border-[#eadff1] bg-[#fbf8fd] p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] lg:grid-cols-[1fr_270px] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Emotional Strength", Icon: Heart },
            { label: "Confidence", Icon: Sparkles },
            { label: "Family Support", Icon: Users },
          ].map(({ label, Icon }) => (
            <div key={label} className="rounded-lg bg-white p-4 text-center ring-1 ring-[#eadff1]">
              <Icon className="mx-auto h-7 w-7 text-[#7835A4]" />
              <p className="mt-2 text-[12px] font-black text-[#21142d]">{label}</p>
            </div>
          ))}
        </div>
        <img src={parentGuidanceImage} alt="Parent guidance for teen depression support" className="h-[190px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" loading="lazy" decoding="async" />
      </div>
    );
  }

  if (heading === "Common Signs of Teen Depression & Low Mood") return <IconGrid items={commonSignItems} />;
  if (heading === "Why Teenagers Experience Depression & Low Mood") return <IconGrid items={causeItems} columns="sm:grid-cols-2 lg:grid-cols-3" />;
  if (heading === "How Depression & Low Mood Can Affect Teenagers") return <IconGrid items={impactItems} columns="sm:grid-cols-2 lg:grid-cols-5" />;

  if (heading === "The Neuro-Ayurveda Approach to Teen Depression & Low Mood") {
    return (
      <div className="mt-4 space-y-4">
        <a href="/about/approach">
          <img src={neuroAyurvedaImage} alt="Neuro-Ayurveda teen depression and emotional wellbeing framework" className="max-h-[350px] w-full rounded-lg border border-[#eadff1] bg-white object-cover p-2 transition hover:shadow-md" loading="lazy" decoding="async" />
        </a>
        <IconGrid items={neuroPillarItems} columns="sm:grid-cols-2 lg:grid-cols-5" />
      </div>
    );
  }

  if (heading === "How Parents Can Support Teenagers") {
    return (
      <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
        <div className="grid gap-2 sm:grid-cols-2">
          {parentSupportItems.map((item) => (
            <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (heading === "How Manovaidya Supports Teenagers & Families") return <FlowSteps items={supportSteps} />;

  if (heading === "Why Families Choose Manovaidya") {
    return (
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {whyChooseItems.map((item) => (
          <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-sm">
            <div className="flex gap-2 text-[13px] font-black text-[#21142d]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
              {item}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (heading === "About Dr. Ankush Garg") {
    return (
      <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
        <div className="flex flex-col gap-4 sm:flex-row">
          <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-lg object-cover" loading="lazy" decoding="async" />
          <div>
            <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD, Child Development & Mental Health Specialist in India</p>
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
            <h3 className="mt-2 text-[25px] font-black leading-tight">Take the First Step Today</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Book Assessment Session", "Speak With Our Team", "Get Personalized Guidance", "Complete Teen Wellness Assessment"].map((step) => (
                <div key={step} className="flex gap-2 text-[13px] font-bold text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-60 lg:h-full">
            <img src={ctaImage} alt="Teen emotional wellbeing support in India" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d6b] to-transparent opacity-80 mix-blend-multiply lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function buildFaqsFromLines(lines) {
  const faqStartIndex = lines.indexOf("Frequently Asked Questions (FAQs)");
  const faqEndIndex = lines.indexOf("Book a Consultation");

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
        <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
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
    line.length < 72 &&
    !/[.]/.test(line) &&
    next &&
    !headings.has(line) &&
    !line.startsWith("[") &&
    !line.startsWith("http") &&
    !line.startsWith("•") &&
    !line.startsWith("✔") &&
    !line.startsWith("📞") &&
    !shortTitleExclusions.has(line) &&
    !listLeadLines.has(line)
  );
}

function RawArticleContent({ onCitationClick, openFaq, setOpenFaq }) {
  const allLines = articleRaw.split("\n").map((line) => line.trim()).filter(Boolean);
  const introStartIndex = allLines.findIndex((line) => line === "Teen Depression & Low Mood Support in India" || line === "Teen Mental Health Support");
  const introIndex = Math.max(0, introStartIndex);
  const lines = allLines.slice(introIndex).filter((line) => !hiddenIntroLines.has(line));
  const faqStartIndex = lines.indexOf("Frequently Asked Questions (FAQs)");
  const faqEndIndex = lines.indexOf("Book a Consultation");
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

        if (line === "Frequently Asked Questions (FAQs)") {
          return <FaqAccordion key={`faq-accordion-${index}`} faqs={parsedFaqs} openFaq={openFaq} setOpenFaq={setOpenFaq} onCitationClick={onCitationClick} ruleKeysByLine={ruleKeysByLine} />;
        }

        if (faqMode) return null;

        if (headings.has(line) && (line !== "Book a Consultation" || index === faqEndIndex)) {
          return (
            <section key={`section-${index}`} id={id} className="scroll-mt-28 pt-4">
              <h2 className="text-[20px] font-black leading-tight text-[#17111f]">{line}</h2>
              <VisualBlock heading={line} />
            </section>
          );
        }

        if (line === "Book Consultation") {
          return (
            <a key={`book-now-${index}`} href="tel:+917823838638" className="inline-flex h-11 items-center justify-center rounded-md bg-[#7835A4] px-6 text-[13px] font-black text-white transition hover:bg-[#632b86]">
              Book Consultation
            </a>
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
          return (
            <h3 key={`h3-${index}`} className="pt-3 text-[15px] font-black leading-6 text-[#21142d]">
              {line}
            </h3>
          );
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
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Modern Science and Ayurvedic References used for teen emotional wellbeing context.</p>
      <div className="mt-5 space-y-4">
        {references.map((reference) => (
          <article key={reference.n} id={`reference-${reference.n}`} className="scroll-mt-32 rounded-lg border border-[#eadff1] bg-[#fcf9ff] p-4">
            <p className="text-[13px] font-black leading-6 text-[#21142d]">[{reference.n}] {reference.title}</p>
            <a href={reference.url} target="_blank" rel="noreferrer" className="mt-2 block break-words text-[12px] font-bold leading-5 text-[#7835A4] underline underline-offset-2">{reference.url}</a>
            {reference.doi && <a href={reference.doi} target="_blank" rel="noreferrer" className="mt-1 block break-words text-[12px] font-bold leading-5 text-[#7835A4] underline underline-offset-2">DOI: {reference.doi}</a>}
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

function TeenDepressionLowMoodIndiaPage() {
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
    const fontId = "teen-depression-martel-font";
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
      <FloatingShareBar />
      <Seo
        title={teenDepressionSeoTitle}
        description={teenDepressionSeoDescription}
        keywords="Teen Depression Treatment India, Teen Low Mood, Adolescent Depression, Teenage Depression Support, Teen Mental Health, Parent Guidance for Teen Depression, Neuro-Ayurveda Teen Care, Emotional Wellbeing, Dr. Ankush Garg"
        path="/teen-depression-support"
        image={heroImage}
        schema={teenDepressionSeoSchema}
      />

      <section className="mx-auto grid gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <article className="min-w-0">
          <div className="relative overflow-hidden rounded-lg pb-6 pt-2 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-8 lg:pb-8 lg:pt-3">
            <div className="relative z-10">
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#7d7085]" aria-label="Article breadcrumb">
                <a href="/" className="transition hover:text-[#7835A4]">Home</a>
                <span>/</span>
                <a href="/teen-mental-wellness" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
                <span>/</span>
                <span className="text-[#4b345d]">{pageTitle}</span>
              </nav>
              <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
              <h1 className="mt-2 max-w-[650px] text-[27px] font-black leading-[1.12] text-[#292064] sm:text-[34px] lg:text-[34px]">
                {pageTitle}
              </h1>
              <p className="mt-4 max-w-[620px] text-[14px] font-bold leading-7 text-[#51465a] sm:text-[15px]">
                Supporting the emotional development of teenagers to emotional strength, confidence and improved emotional wellbeing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book-consultation" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white shadow-[0_10px_20px_rgba(120,53,164,0.22)] transition hover:bg-[#5f2785]">
                  Book Consultation
                </a>
                <a href="tel:+917823838638" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#f5ebfb]">
                  Talk to Our Team
                </a>
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
                <img src={heroImage} alt="Teen Depression Treatment in India at Manovaidya" loading="eager" fetchPriority="high" decoding="async" sizes="(min-width: 1024px) 42vw, 100vw" className="h-[248px] w-full object-cover object-center sm:h-[315px] lg:h-[355px]" />
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
              <img src={doctorImage} alt="Dr Ankush Garg Manovaidya teen mental wellness clinician" className="h-12 w-12 shrink-0 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <p className="text-[13px] font-black leading-5 text-[#21142d]">Authorised & Clinically Reviewed by Dr Ankush Garg</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Founder, Manovaidya | Ayurvedacharya | Creator of the Neuro-Ayurveda Development System</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#75677d]">Clinical Focus: Teen Mental Wellness, Child Development and Mental Health</p>
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

          <RelatedTeenMentalWellnessPages />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <p className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</p>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">Get personalized teen emotional wellbeing guidance from our experts.</p>
            <a href="tel:+917823838638" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">Book Now</a>
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
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">Subscribe to expert articles, teen wellness guidance and Manovaidya updates.</p>
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

export default TeenDepressionLowMoodIndiaPage;
