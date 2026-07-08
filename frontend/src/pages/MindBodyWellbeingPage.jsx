import React from "react";
import Seo from "../components/Seo";
import MindBodyConcernsSection from "../mindbodyconcerns/MindBodyConcernsSection";
import MindBodyFaqSection from "../mindbodyconcerns/MindBodyFaqSection";
import MindBodyRestoreBalanceSection from "../mindbodyconcerns/MindBodyRestoreBalanceSection";
import MindBodySignsSection from "../mindbodyconcerns/MindBodySignsSection";
import MindBodyWellbeingHeroSection from "../mindbodyconcerns/MindBodyWellbeingHeroSection";

function MindBodyWellbeingPage() {
  return (
    <main>
      <Seo
        title="Mind-Body Wellbeing | IBS, Migraine & Chronic Stress | Manovaidya"
        description="Discover Neuro-Ayurveda mind-body health care at Manovaidya for IBS, migraines, tension headaches, and stress-related fatigue."
        keywords="mind body wellbeing, stress induced IBS India, migraine natural treatment, tension headaches relief, chronic fatigue Ayurveda, high blood pressure stress, Neuro-Ayurveda clinic, Dr. Ankush Garg"
        path="/mind-body-wellbeing"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Mind-Body Wellbeing",
          "description": "Discover Neuro-Ayurveda mind-body health care at Manovaidya for IBS, migraines, tension headaches, and stress-related fatigue."
        }}
      />
      <MindBodyWellbeingHeroSection />
      <MindBodyConcernsSection />
      <MindBodySignsSection />
      <MindBodyRestoreBalanceSection />
      <MindBodyFaqSection />
    </main>
  );
}

export default MindBodyWellbeingPage;
