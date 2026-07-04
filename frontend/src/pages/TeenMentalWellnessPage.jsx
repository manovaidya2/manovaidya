import React from "react";
import TeenMentalWellnessHeroSection from "../teenmental/TeenMentalWellnessHeroSection";
import TeenMentalSupportAreasSection from "../teenmental/TeenMentalSupportAreasSection";
import TeenMentalCommonSignsSection from "../teenmental/TeenMentalCommonSignsSection";
import TeenMentalSupportProcessSection from "../teenmental/TeenMentalSupportProcessSection";
import TeenMentalTrustFaqSection from "../teenmental/TeenMentalTrustFaqSection";

function TeenMentalWellnessPage() {
  return (
    <main>
      <TeenMentalWellnessHeroSection />
      <TeenMentalSupportAreasSection />
      <TeenMentalCommonSignsSection />
      <TeenMentalSupportProcessSection />
      <TeenMentalTrustFaqSection />
    </main>
  );
}

export default TeenMentalWellnessPage;
