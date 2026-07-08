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
        title="Best Neuro-Ayurveda Mental Health Clinic in India | Manovaidya"
        description="Manovaidya offers Neuro-Ayurveda care for every life stage, blending Ayurveda with modern science to support child development, mental health and emotional wellbeing."
        keywords="Neuro-Ayurveda clinic, mental health clinic India, child development care, ADHD support, autism support, anxiety care, Ayurveda mental health, Dr. Ankush Garg, family wellness, online consultation India"
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Manovaidya",
          "url": "https://manovaidya.org",
          "description": "Manovaidya offers Neuro-Ayurveda care for every life stage, blending Ayurveda with modern science to support child development, mental health and emotional wellbeing."
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
