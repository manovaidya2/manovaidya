import React from "react";
import Seo from "../components/Seo";
import AiChatBot from "../components/AiChatBot";
import CareStagesSection from "../homepage/CareStagesSection";
import ConditionsSupportSection from "../homepage/ConditionsSupportSection";
import HeroSection from "../homepage/HeroSection";
import InsightsFaqSection from "../homepage/InsightsFaqSection";
import ScienceStoriesSection from "../homepage/ScienceStoriesSection";
import WhyChooseSection from "../homepage/WhyChooseSection";

function Home() {
  return (
    <React.Fragment>
      <Seo
        title="Manovaidya | Child Development & Mental Health Clinic in Noida"
        description="Manovaidya is a child development and mental wellness clinic in Noida offering structured support for Autism, ADHD, speech delay, anxiety, depression, OCD and related concerns."
        keywords="Neuro-Ayurveda clinic, mental health clinic India, child development care, ADHD support, autism support, anxiety care, Ayurveda mental health, Dr. Ankush Garg, family wellness, online consultation India"
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Manovaidya",
          "url": "https://manovaidya.org",
          "description": "Manovaidya is a child development and mental wellness clinic in Noida offering structured support for Autism, ADHD, speech delay, anxiety, depression, OCD and related concerns."
        }}
      />
      <main>
        <HeroSection />
        <CareStagesSection />
        <WhyChooseSection />
        <ConditionsSupportSection />
        <ScienceStoriesSection />
        <InsightsFaqSection />
      </main>
      <AiChatBot />
    </React.Fragment>
  );
}

export default Home;
