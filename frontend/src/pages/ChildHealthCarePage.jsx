import React from "react";
import Seo from "../components/Seo";
import ChildHealthCareHeroSection from "../childhealthcare/ChildHealthCareHeroSection";
import ChildHealthCareConcernsSection from "../childhealthcare/ChildHealthCareConcernsSection";
import ChildHealthCareSignsSection from "../childhealthcare/ChildHealthCareSignsSection";
import ChildHealthCareSupportSection from "../childhealthcare/ChildHealthCareSupportSection";
import ChildHealthCareTrustSection from "../childhealthcare/ChildHealthCareTrustSection";

function ChildHealthCarePage() {
  return (
    <React.Fragment>
      <main>
        <Seo
          title="Child Health Care in India | Autism, ADHD, Speech & Development Support | Manovaidya"
          description="Looking for Child Health Care in India? Learn about Autism, ADHD, Speech Delay, Learning Difficulties and Behavioural Support at Manovaidya."
          keywords="Child Health Care India, Child Development Treatment India, Autism Spectrum Disorder Treatment, ADHD and Hyperactivity Treatment, Speech Delay Support, Learning Difficulties Support, Behavioural Challenges in Children, Child Development Assessment, Neuro-Ayurveda Development System, Family-Centred Child Care, Online Child Development Consultation, Child Mental Health Clinic India, Dr. Ankush Garg, Child Development Clinic Delhi NCR, Evidence-Informed Child Care"
          path="/child-health-care"
          schema={{
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Child Health Care in India",
            "description": "Looking for Child Health Care in India? Learn about Autism, ADHD, Speech Delay, Learning Difficulties and Behavioural Support at Manovaidya."
          }}
        />
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
