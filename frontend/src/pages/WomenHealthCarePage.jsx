import React from "react";
import Seo from "../components/Seo";
import WomenHealthCareConcernsSection from "../womenhealthcare/WomenHealthCareConcernsSection";
import WomenHealthCareHeroSection from "../womenhealthcare/WomenHealthCareHeroSection";
import WomenHealthCareSignsSection from "../womenhealthcare/WomenHealthCareSignsSection";
import WomenHealthCareSupportSection from "../womenhealthcare/WomenHealthCareSupportSection";
import WomenHealthCareTrustSection from "../womenhealthcare/WomenHealthCareTrustSection";

function WomenHealthCarePage() {
  return (
    <main>
      <Seo
        title="Women's Mental Health Care | Stress, Hormonal & Emotional Wellness | Manovaidya"
        description="Comprehensive mental health care for women at Manovaidya. Specialized Neuro-Ayurveda support for stress, anxiety, PMDD, postpartum depression, and life transitions."
        keywords="women mental health India, postpartum depression support, PMDD treatment, stress management for women, hormonal mental health, pregnancy emotional wellbeing, Neuro-Ayurveda, Dr. Ankush Garg"
        path="/women-health-care"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Women's Mental Health Care",
          "description": "Comprehensive mental health care for women at Manovaidya. Specialized Neuro-Ayurveda support for stress, anxiety, PMDD, postpartum depression, and life transitions."
        }}
      />
      <WomenHealthCareHeroSection />
      <WomenHealthCareConcernsSection />
      <WomenHealthCareSignsSection />
      <WomenHealthCareSupportSection />
      <WomenHealthCareTrustSection />
    </main>
  );
}

export default WomenHealthCarePage;
