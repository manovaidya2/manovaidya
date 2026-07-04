import React from "react";
import SeniorConditionsSection from "../seniormindcare/SeniorConditionsSection";
import SeniorFamilySupportSection from "../seniormindcare/SeniorFamilySupportSection";
import SeniorMindCareHeroSection from "../seniormindcare/SeniorMindCareHeroSection";
import SeniorSignsSection from "../seniormindcare/SeniorSignsSection";
import SeniorTrustFaqSection from "../seniormindcare/SeniorTrustFaqSection";

function SeniorMindCarePage() {
  return (
    <main>
      <SeniorMindCareHeroSection />
      <SeniorConditionsSection />
      <SeniorSignsSection />
      <SeniorFamilySupportSection />
      <SeniorTrustFaqSection />
    </main>
  );
}

export default SeniorMindCarePage;
