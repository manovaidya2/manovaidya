import React from "react";
import ApproachCareProcessSection from "../approach/ApproachCareProcessSection";
import ApproachCtaSection from "../approach/ApproachCtaSection";
import ApproachExpectSection from "../approach/ApproachExpectSection";
import ApproachHeroSection from "../approach/ApproachHeroSection";
import ApproachIntegratedSection from "../approach/ApproachIntegratedSection";
import ApproachPillarsSection from "../approach/ApproachPillarsSection";

function ApproachPage() {
  return (
    <main>
      <ApproachHeroSection />
      <ApproachPillarsSection />
      <ApproachIntegratedSection />
      <ApproachCareProcessSection />
      <ApproachExpectSection />
      <ApproachCtaSection />
    </main>
  );
}

export default ApproachPage;
