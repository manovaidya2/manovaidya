import React from "react";
import Seo from "../components/Seo";
import SeniorConditionsSection from "../seniormindcare/SeniorConditionsSection";
import SeniorFamilySupportSection from "../seniormindcare/SeniorFamilySupportSection";
import SeniorMindCareHeroSection from "../seniormindcare/SeniorMindCareHeroSection";
import SeniorSignsSection from "../seniormindcare/SeniorSignsSection";
import SeniorTrustFaqSection from "../seniormindcare/SeniorTrustFaqSection";

function SeniorMindCarePage() {
  return (
    <main>
      <Seo
        title="Senior Mind Care | Dementia, Alzheimer's & Memory Loss Support | Manovaidya"
        description="Compassionate Neuro-Ayurveda mental health care for seniors at Manovaidya. Specialized support for memory loss, dementia, Alzheimer's, and elderly depression."
        keywords="senior mental health India, memory loss support, dementia care India, Alzheimer's care, elderly depression treatment, cognitive impairment support, Neuro-Ayurveda for seniors, Dr. Ankush Garg"
        path="/senior-mind-memory-care"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Senior Mind Care",
          "description": "Compassionate Neuro-Ayurveda mental health care for seniors at Manovaidya. Specialized support for memory loss, dementia, Alzheimer's, and elderly depression."
        }}
      />
      <SeniorMindCareHeroSection />
      <SeniorConditionsSection />
      <SeniorSignsSection />
      <SeniorFamilySupportSection />
      <SeniorTrustFaqSection />
    </main>
  );
}

export default SeniorMindCarePage;
