import React from "react";
import Seo from "../components/Seo";
import ApproachCareProcessSection from "../approach/ApproachCareProcessSection";
import ApproachCtaSection from "../approach/ApproachCtaSection";
import ApproachExpectSection from "../approach/ApproachExpectSection";
import ApproachHeroSection from "../approach/ApproachHeroSection";
import ApproachIntegratedSection from "../approach/ApproachIntegratedSection";
import ApproachPillarsSection from "../approach/ApproachPillarsSection";

function ApproachPage() {
  return (
    <main>
      <Seo
        title="Our Approach | Personalised Neuro-Ayurveda Care"
        description="Manovaidya offers a personalised Neuro-Ayurveda approach combining Ayurveda and modern science for better development and wellbeing."
        keywords="Manovaidya Approach, Neuro-Ayurveda, Personalised Care, Holistic Mental Health, Root Cause Approach, Child Development, Autism Support India, ADHD Support India, Behavioural Health, Brain Gut Mind, Ayurveda and Modern Science"
        path="/about/approach"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Approach",
          "description": "Explore Manovaidya's holistic, evidence-informed approach that blends Ayurveda with modern science through personalised care plans and a structured care process."
        }}
      />
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
