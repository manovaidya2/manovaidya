import React from "react";
import Seo from "../components/Seo";
import AboutDoctorSection from "../about/AboutDoctorSection";
import AboutDoctorBioSection from "../about/AboutDoctorBioSection";
import AboutDoctorFocusSection from "../about/AboutDoctorFocusSection";
import NeuroAyurvedaSystemSection from "../about/NeuroAyurvedaSystemSection";

function AboutDoctorPage() {
  return (
    <main>
      <Seo
        title="Dr. Ankush Garg | Autism, ADHD & Mental Health Specialist"
        description="Meet Dr. Ankush Garg, Founder of Manovaidya, Autism, ADHD & Child Development Specialist offering personalised Neuro-Ayurveda care."
        keywords="Dr. Ankush Garg, Ankush Garg, Autism Specialist India, ADHD Specialist India, Child Development Specialist, Mental Health Specialist India, Brain Gut Axis Specialist, Neuro Ayurveda, Neuro-Ayurveda Development System, Manovaidya, Autism Treatment India, ADHD Treatment India, Child Behaviour Specialist, Developmental Disorders, Holistic Mental Health, Ayurvedacharya"
        path="/about/doctor"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Dr. Ankush Garg",
            "jobTitle": "Ayurvedacharya, Founder of Manovaidya",
            "description": "Meet Dr. Ankush Garg, Ayurvedacharya and founder of Manovaidya, with 7+ years of experience in Autism, ADHD, child development and mental health care."
          }
        }}
      />
      <AboutDoctorSection />
      <NeuroAyurvedaSystemSection />
      <AboutDoctorBioSection />
      <AboutDoctorFocusSection />
    </main>
  );
}

export default AboutDoctorPage;
