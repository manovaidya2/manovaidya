import React from "react";
import Seo from "../components/Seo";
import AboutManovaidyaHeroSection from "../aboutmanovaidya/AboutManovaidyaHeroSection";
import AboutManovaidyaMissionVisionSection from "../aboutmanovaidya/AboutManovaidyaMissionVisionSection";
import AboutManovaidyaFounderSection from "../aboutmanovaidya/AboutManovaidyaFounderSection";
import AboutManovaidyaWhyChooseSection from "../aboutmanovaidya/AboutManovaidyaWhyChooseSection";
import AboutManovaidyaSupportSection from "../aboutmanovaidya/AboutManovaidyaSupportSection";
import AboutManovaidyaSystemWorkSection from "../aboutmanovaidya/AboutManovaidyaSystemWorkSection";

function AboutManovaidyaPage() {
  return (
    <main>
      <Seo
        title="About Manovaidya | Neuro-Ayurveda Mental Health Clinic"
        description="Discover Manovaidya, a Neuro-Ayurveda mental health clinic in India supporting Autism, ADHD, child development and emotional wellbeing."
        keywords="Manovaidya, About Manovaidya, Neuro-Ayurveda, Mental Health Clinic India, Autism Support India, ADHD Support India, Child Development, Emotional Wellbeing, Brain Gut Mind, Neuro-Ayurveda Development System, Dr. Ankush Garg"
        path="/about/manovaidya"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "MedicalOrganization",
            "name": "Manovaidya",
            "description": "Learn about Manovaidya's mission, founder Dr. Ankush Garg, and Neuro-Ayurveda approach to supporting children, teens, adults, women and families with developmental and mental wellbeing needs."
          }
        }}
      />
      <AboutManovaidyaHeroSection />
      <AboutManovaidyaFounderSection />
      <AboutManovaidyaWhyChooseSection />
      <AboutManovaidyaSupportSection />
      <AboutManovaidyaSystemWorkSection />
      <AboutManovaidyaMissionVisionSection />
    </main>
  );
}

export default AboutManovaidyaPage;
