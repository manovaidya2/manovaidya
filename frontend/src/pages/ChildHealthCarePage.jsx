import React from "react";
import ChildHealthCareHeroSection from "../childhealthcare/ChildHealthCareHeroSection";
import ChildHealthCareConcernsSection from "../childhealthcare/ChildHealthCareConcernsSection";
import ChildHealthCareSignsSection from "../childhealthcare/ChildHealthCareSignsSection";
import ChildHealthCareSupportSection from "../childhealthcare/ChildHealthCareSupportSection";
import ChildHealthCareTrustSection from "../childhealthcare/ChildHealthCareTrustSection";

function ChildHealthCarePage() {
  return (
    <React.Fragment>
      <main>
        <ChildHealthCareHeroSection />
        <ChildHealthCareConcernsSection />
        <ChildHealthCareSignsSection />
        <ChildHealthCareSupportSection />
        <ChildHealthCareTrustSection />
      </main>
    </React.Fragment>
  );
}

export default ChildHealthCarePage;
