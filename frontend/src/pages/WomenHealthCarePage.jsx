import React from "react";
import WomenHealthCareConcernsSection from "../womenhealthcare/WomenHealthCareConcernsSection";
import WomenHealthCareHeroSection from "../womenhealthcare/WomenHealthCareHeroSection";
import WomenHealthCareSignsSection from "../womenhealthcare/WomenHealthCareSignsSection";
import WomenHealthCareSupportSection from "../womenhealthcare/WomenHealthCareSupportSection";
import WomenHealthCareTrustSection from "../womenhealthcare/WomenHealthCareTrustSection";

function WomenHealthCarePage() {
  return (
    <main>
      <WomenHealthCareHeroSection />
      <WomenHealthCareConcernsSection />
      <WomenHealthCareSignsSection />
      <WomenHealthCareSupportSection />
      <WomenHealthCareTrustSection />
    </main>
  );
}

export default WomenHealthCarePage;
