import {
  Award,
  Baby,
  BarChart3,
  Brain,
  ClipboardCheck,
  FileText,
  Flower2,
  Grid2X2,
  HeartHandshake,
  MapPinned,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  Video,
  Venus,
} from "lucide-react";
import childImage from "../images/child.png";
import boyImage from "../images/boy.png";
import familyImage from "../images/blog-insights-family.png";
import childSupportImage from "../images/child-support-family.png";
import doctorImage from "../images/doctorimg-2.jpeg";
import successStoryHeroImage from "../images/success-story-hero.png";
import teenImage from "../images/teen-family-support.png";
import womenImage from "../images/women-support-wellbeing.png";
import seniorImage from "../images/senior-family-support.png";

export const successStoryImages = {
  hero: successStoryHeroImage,
  family: familyImage,
  doctor: doctorImage,
};

export const stats = [
  { value: "1000+", label: "Happy Families", icon: Users, tone: "emerald" },
  { value: "200+", label: "Video Testimonials", icon: Video, tone: "amber" },
  { value: "Trusted", label: "Across India", icon: MapPinned, tone: "cyan" },
  { value: "4.9/5", label: "Average Rating", icon: Star, tone: "gold" },
];

export const storyFilters = [
  "All",
  "Autism",
  "Mental Health",
  "PCOD",
];

export const featuredStories = [
  {
    title: "Autism Care Journey",
    location: "Parent from Delhi NCR",
    quote: "Noticeable progress in communication and daily activities.",
    image: childImage,
  },
  {
    title: "ADHD Transformation",
    location: "Parent from Bangalore",
    quote: "Better focus, improved behavior, and increased confidence.",
    image: boyImage,
  },
  {
    title: "Speech Delay Progress",
    location: "Parent from Mumbai",
    quote: "Her speech and expressions have improved remarkably.",
    image: childSupportImage,
  },
];

export const videoStories = [
  { id: 1, title: "Autism Testimonial Video 1", type: "Parent Testimonial", location: "India", embedId: "P1EzrOrCBaQ", isIframe: true, category: "Autism" },
  { id: 2, title: "Autism Testimonial Video 2", type: "Parent Testimonial", location: "India", embedId: "T5COBNiZBPA", isIframe: true, category: "Autism" },
  { id: 3, title: "Autism Testimonial Video 3", type: "Parent Testimonial", location: "India", embedId: "CFmxG7ag8aw", isIframe: true, category: "Autism" },
  { id: 4, title: "Autism Testimonial Video 4", type: "Parent Testimonial", location: "India", embedId: "yE5B2b6Nz-I", isIframe: true, category: "Autism" },
  { id: 5, title: "Autism Testimonial Video 5", type: "Parent Testimonial", location: "India", embedId: "zWGZu4FyvZk", isIframe: true, category: "Autism" },
  { id: 6, title: "Autism Testimonial Video 6", type: "Parent Testimonial", location: "India", embedId: "kpLxO-rhE4Y", isIframe: true, category: "Autism" },
  { id: 7, title: "Autism Testimonial Video 7", type: "Parent Testimonial", location: "India", embedId: "DB_20OKcSPU", isIframe: true, category: "Autism" },
  { id: 8, title: "Autism Testimonial Video 8", type: "Parent Testimonial", location: "India", embedId: "txI3ibnhYsQ", isIframe: true, category: "Autism" },
  { id: 9, title: "Autism Testimonial Video 9", type: "Parent Testimonial", location: "India", embedId: "qrbAJOdX3u0", isIframe: true, category: "Autism" },
  { id: 10, title: "Autism Testimonial Video 10", type: "Parent Testimonial", location: "India", embedId: "-qY0JodSp20", isIframe: true, category: "Autism" },
  { id: 11, title: "Autism Testimonial Video 11", type: "Parent Testimonial", location: "India", embedId: "IcJ6fd0rbME", isIframe: true, category: "Autism" },
  { id: 12, title: "Mental Health Testimonial Video 1", type: "Patient Testimonial", location: "India", embedId: "L2awCtw7Z10", isIframe: true, category: "Mental Health" },
  { id: 13, title: "Mental Health Testimonial Video 2", type: "Patient Testimonial", location: "India", embedId: "H1X9SBY8lYc", isIframe: true, category: "Mental Health" },
  { id: 14, title: "Mental Health Testimonial Video 3", type: "Patient Testimonial", location: "India", embedId: "ethPzmvNBZI", isIframe: true, category: "Mental Health" },
  { id: 15, title: "Mental Health Testimonial Video 4", type: "Patient Testimonial", location: "India", embedId: "yHBcuzzd4Po", isIframe: true, category: "Mental Health" },
  { id: 16, title: "PCOD & Mental Stress Testimonial", type: "Patient Testimonial", location: "India", embedId: "pAx7KRw2pkA", isIframe: true, category: "PCOD" },
  { id: 17, title: "Mental Health Testimonial Video 5", type: "Patient Testimonial", location: "India", embedId: "GV24TNwFo_k", isIframe: true, category: "Mental Health" },
  { id: 18, title: "Mental Health Testimonial Video 6", type: "Patient Testimonial", location: "India", embedId: "8A-lM_CQ1XU", isIframe: true, category: "Mental Health" },
  { id: 19, title: "Mental Health Testimonial Video 7", type: "Patient Testimonial", location: "India", embedId: "fBpPDtd_Atw", isIframe: true, category: "Mental Health" },
  { id: 20, title: "Mental Health Testimonial Video 8", type: "Patient Testimonial", location: "India", embedId: "bjjLj90eZB8", isIframe: true, category: "Mental Health" },
];

export const categories = [
  { label: "All", icon: Grid2X2 },
  { label: "Autism", icon: Puzzle },
  { label: "ADHD", icon: Brain },
  { label: "Child Development", icon: Baby },
  { label: "Mental Health", icon: HeartHandshake },
  { label: "Women Health", icon: Venus },
  { label: "Adults", icon: Users },
  { label: "Senior Care", icon: Stethoscope },
];

export const beforeAfterSteps = [
  { title: "Week 1", text: "Assessment", icon: ClipboardCheck },
  { title: "Week 4", text: "Care Plan", icon: FileText },
  { title: "Month 3", text: "Family Guidance", icon: Users },
  { title: "Current", text: "Progress Review", icon: Award },
];

export const journeySteps = [
  { title: "Consultation", icon: Stethoscope },
  { title: "Detailed Assessment", icon: ClipboardCheck },
  { title: "Personalized Plan", icon: Flower2 },
  { title: "Regular Follow-up", icon: Users },
  { title: "Observed Improvements", icon: BarChart3 },
];

export const reviews = [
  {
    name: "Vipin kumar",
    initials: "VK",
    meta: "1 review | 2 weeks ago",
    text: "Mere child ko hyperactivity ki problem thi aur wo ek jagah zyada der shant nahi baith pata tha. Is wajah se use kahin bhi le jana kaafi mushkil ho jata tha aur behaviour ko manage karna bhi challenging lagta tha. Phir hum Manovaidya mein consult karne gaye jahan hume proper guidance aur support mila. Dheere-dheere treatment ke baad behaviour mein positive changes dekhne ko mile aur ab mera child pehle se kaafi calm aur manageable hai.",
  },
  {
    name: "shashank shrivastav",
    initials: "SS",
    meta: "2 reviews | 4 months ago",
    text: "Hi my self shashank nd my daughter name is naysha.....my daughter doesn't respond her name ..cnt speek word...I don't know how can we do . After we join manovadya last 6 mnth before...nd now we are happy ..my daughter response ...but nt proper ..but yes it's do..my experience with manovadya. Is good..after phase 1 medicine..now we start phase 2. ...so thanx dr ankush garg sir..",
  },
  {
    name: "Monu Singh",
    initials: "MS",
    meta: "3 reviews | 4 months ago",
    text: "My 17 year old daughter was suffering from anxiety, mood swings and overthinking. As parents, hum kafi worried the ki ye problem kya hai. We tried many things for it at home and hamne doctor ko bhi consult kiya, but kuch khas benefit nahi hua. After starting treatment from Manovaidya, hamne kaafi positive changes dekhe and ab vo kafi calm feel krti hai. So thanks to the Manovaidya team who helped us a lot.",
  },
  {
    name: "parvez alam",
    initials: "PA",
    meta: "1 review | 11 months ago",
    text: "Mere bete Shahzain ko ADHD and autism diagnose hua tha. 2 months me hi bahut improvement hua hai... staff and doctor are very supportive.",
  },
  {
    name: "Arun Kumar",
    initials: "AK",
    meta: "3 reviews | 10 months ago",
    text: "Doctor bhut ache h sab ache se smjhate h 2 mhine se ab mera bacha pehle se theek hone laga h hmari bat sun ne laga h ceeje smjhane laga h.",
  },
  {
    name: "Priya Kapoor",
    initials: "PK",
    meta: "1 review | 2 months ago",
    text: "Dr. Ankush Garg completely changed my perspective on mental health. My son struggled with ADHD for years. After 3 months at Manovaidya we saw remarkable improvement in his focus and behaviour.",
  },
  {
    name: "Rahul Sharma",
    initials: "RS",
    meta: "1 review | 3 months ago",
    text: "I had been suffering from severe anxiety and sleep disorders for years. At Manovaidya, Dr. Garg identified the root cause and within 2 months my sleep improved drastically.",
  },
  {
    name: "Sunita Mehta",
    initials: "SM",
    meta: "1 review | 1 month ago",
    text: "Best decision I made for my daughter who is autistic. The team crafted a customized plan combining diet changes, therapies and Ayurvedic medicines. We have seen visible improvement.",
  },
  {
    name: "Arun Verma",
    initials: "AV",
    meta: "1 review | 5 months ago",
    text: "I had severe OCD and depression and had almost given up hope. Dr. Garg listened patiently, explained everything clearly, and the treatment helped me feel stable again.",
  },
  {
    name: "Neha Gupta",
    initials: "NG",
    meta: "2 reviews | 2 months ago",
    text: "My teenage son was struggling with mood swings, aggression and poor academic performance. The team designed a holistic plan and guided us very well.",
  },
  {
    name: "Manish Joshi",
    initials: "MJ",
    meta: "1 review | 4 months ago",
    text: "I visited Manovaidya for chronic depression after years of medication. Dr. Garg's Neuro-Ayurveda approach treated my gut, sleep and stress together.",
  },
  {
    name: "Amit Malhotra",
    initials: "AM",
    meta: "1 review | 6 months ago",
    text: "I came for stress and burnout. The consultation was detailed and the team explained every step clearly. I felt heard and supported throughout the process.",
  },
  {
    name: "Ritu Verma",
    initials: "RV",
    meta: "1 review | 3 months ago",
    text: "I consulted for emotional stress and hormonal mood changes. The care felt very personal and the follow-up support helped me stay consistent.",
  },
  {
    name: "Sandeep Kumar",
    initials: "SK",
    meta: "1 review | 1 month ago",
    text: "The online consultation was smooth and detailed. The team understood my concerns properly and gave a clear plan for sleep, stress and lifestyle.",
  },
  {
    name: "Pooja Mehra",
    initials: "PM",
    meta: "1 review | 7 months ago",
    text: "My daughter had speech delay and low response. After regular treatment and proper guidance at Manovaidya, we are seeing encouraging improvements.",
  },
  {
    name: "Karan Malhotra",
    initials: "KM",
    meta: "2 reviews | 8 months ago",
    text: "I was dealing with anxiety, poor sleep and constant overthinking. The team's support, lifestyle guidance and Ayurvedic approach really helped me.",
  },
  {
    name: "Deepa Singh",
    initials: "DS",
    meta: "1 review | 2 months ago",
    text: "My son used to get irritated quickly and had trouble focusing. After treatment from Manovaidya, we noticed positive behaviour changes at home.",
  },
  {
    name: "Nitin Arora",
    initials: "NA",
    meta: "1 review | 9 months ago",
    text: "Very professional and supportive staff. Dr. Ankush explains everything properly and the treatment plan feels thoughtful and personalised.",
  },
  {
    name: "Meenakshi Rao",
    initials: "MR",
    meta: "1 review | 5 months ago",
    text: "I consulted for stress-related headaches and sleep issues. The overall approach helped me feel calmer and more stable in daily life.",
  },
  {
    name: "Harsh Vardhan",
    initials: "HV",
    meta: "1 review | 6 months ago",
    text: "The treatment approach is different and much more root-cause oriented. I appreciated the time taken to understand my history and symptoms.",
  },
  {
    name: "Komal Jain",
    initials: "KJ",
    meta: "1 review | 3 months ago",
    text: "I visited for mood-related concerns and stress. The experience was very comforting and the follow-up care made me feel supported throughout.",
  },
  {
    name: "Anjali Sinha",
    initials: "AS",
    meta: "1 review | 4 months ago",
    text: "My child had attention and hyperactivity issues. The advice, medicine support and parent guidance from Manovaidya have been very helpful.",
  },
];

export const testimonials = [
  {
    text: "Our child became more responsive and confident.",
    source: "Family from Delhi",
    image: familyImage,
  },
  {
    text: "The care and attention we received was exceptional.",
    source: "Family from Bangalore",
    image: teenImage,
  },
  {
    text: "Grateful for the natural and effective treatment approach.",
    source: "Family from Mumbai",
    image: womenImage,
  },
  {
    text: "It is not just treatment, it is a complete transformation.",
    source: "Family from Hyderabad",
    image: seniorImage,
  },
];

export const trustCards = [
  {
    title: "Personalized Care",
    text: "Tailored treatment plans for every individual.",
    icon: HeartHandshake,
  },
  {
    title: "Holistic Approach",
    text: "Combining Ayurveda with modern understanding.",
    icon: Sparkles,
  },
  {
    title: "Expert Guidance",
    text: "Experienced doctors and therapists you can trust.",
    icon: Stethoscope,
  },
  {
    title: "Family-Centered Support",
    text: "We support the entire family throughout.",
    icon: Users,
  },
  {
    title: "Regular Monitoring",
    text: "Continuous tracking and plan adjustments.",
    icon: ClipboardCheck,
  },
  {
    title: "Long-Term Follow-up",
    text: "Sustainable results and ongoing support.",
    icon: ShieldCheck,
  },
];

export const faqs = [
  "How are success stories collected?",
  "Are these genuine patient experiences?",
  "Can treatment outcomes vary?",
  "How long does progress usually take?",
  "Can I submit my own story?",
];

