import React from "react";
import MindBodyConcernsSection from "../mindbodyconcerns/MindBodyConcernsSection";
import MindBodyFaqSection from "../mindbodyconcerns/MindBodyFaqSection";
import MindBodyRestoreBalanceSection from "../mindbodyconcerns/MindBodyRestoreBalanceSection";
import MindBodySignsSection from "../mindbodyconcerns/MindBodySignsSection";
import MindBodyWellbeingHeroSection from "../mindbodyconcerns/MindBodyWellbeingHeroSection";

function MindBodyWellbeingPage() {
  return (
    <main>
      <MindBodyWellbeingHeroSection />
      <MindBodyConcernsSection />
      <MindBodySignsSection />
      <MindBodyRestoreBalanceSection />
      <MindBodyFaqSection />
    </main>
  );
}

export default MindBodyWellbeingPage;
