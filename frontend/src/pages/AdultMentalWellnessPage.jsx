import React from "react";
import Seo from "../components/Seo";
import AdultCommonSignsSection from "../adult/AdultCommonSignsSection";
import AdultConditionsSection from "../adult/AdultConditionsSection";
import AdultMentalWellnessHeroSection from "../adult/AdultMentalWellnessHeroSection";
import AdultSupportSection from "../adult/AdultSupportSection";
import AdultTrustFaqSection from "../adult/AdultTrustFaqSection";

function AdultMentalWellnessPage() {
  return (
    <main>
      <Seo
        title="Adult Mental Wellness | Anxiety, Depression & Stress Support | Manovaidya"
        description="Holistic adult mental wellness care for anxiety, depression, stress, burnout and sleep disorders through Neuro-Ayurveda at Manovaidya."
        keywords="adult mental wellness, anxiety support India, depression treatment, stress management, burnout support, adult mental health care, Neuro-Ayurveda, Dr. Ankush Garg"
        path="/adult-mental-wellness"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Adult Mental Wellness",
          "description": "Holistic adult mental wellness care for anxiety, depression, stress, burnout and sleep disorders through Neuro-Ayurveda at Manovaidya."
        }}
      />
      <AdultMentalWellnessHeroSection />
      <AdultConditionsSection />
      <AdultCommonSignsSection />
      <AdultSupportSection />
      <AdultTrustFaqSection />
    </main>
  );
}

export default AdultMentalWellnessPage;
