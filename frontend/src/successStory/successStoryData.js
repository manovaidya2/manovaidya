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
  "ADHD",
  "Speech Delay",
  "Child Development",
  "Anxiety",
  "Depression",
  "PCOD",
  "Stress Management",
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
    text: "Very supportive doctors and staff. My child has shown great improvement over the last few months.",
    source: "Parent from Noida",
  },
  {
    text: "Holistic approach and personalized care makes a huge difference. Highly recommended.",
    source: "Parent from Gurgaon",
  },
  {
    text: "We are grateful for the guidance and continuous support throughout our journey.",
    source: "Parent from Pune",
  },
  {
    text: "The therapy sessions were incredibly helpful. We saw positive changes within weeks.",
    source: "Parent from Mumbai",
  },
  {
    text: "Professional, caring, and truly dedicated team. Thank you for everything.",
    source: "Parent from Delhi",
  },
  {
    text: "A safe and welcoming environment. Our experience has been nothing short of wonderful.",
    source: "Parent from Bangalore",
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

