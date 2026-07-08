import React from "react";
import Seo from "../components/Seo";
import TeenMentalWellnessHeroSection from "../teenmental/TeenMentalWellnessHeroSection";
import TeenMentalSupportAreasSection from "../teenmental/TeenMentalSupportAreasSection";
import TeenMentalCommonSignsSection from "../teenmental/TeenMentalCommonSignsSection";
import TeenMentalSupportProcessSection from "../teenmental/TeenMentalSupportProcessSection";
import TeenMentalTrustFaqSection from "../teenmental/TeenMentalTrustFaqSection";

function TeenMentalWellnessPage() {
  return (
    <main>
      <Seo
        title="Teen Mental Wellness | Stress, Anxiety & Academic Pressure | Manovaidya"
        description="Support your teen's mental wellness with Manovaidya's Neuro-Ayurveda care for stress, anxiety, low mood, screen addiction, and academic pressure."
        keywords="teen mental wellness, teen anxiety support, exam pressure support, teen depression India, screen addiction in teens, child and adolescent mental health, Neuro-Ayurveda, Manovaidya, Dr. Ankush Garg"
        path="/teen-mental-wellness"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Teen Mental Wellness",
          "description": "Support your teen's mental wellness with Manovaidya's Neuro-Ayurveda care for stress, anxiety, low mood, screen addiction, and academic pressure."
        }}
      />
      <TeenMentalWellnessHeroSection />
      <TeenMentalSupportAreasSection />
      <TeenMentalCommonSignsSection />
      <TeenMentalSupportProcessSection />
      <TeenMentalTrustFaqSection />
    </main>
  );
}

export default TeenMentalWellnessPage;
