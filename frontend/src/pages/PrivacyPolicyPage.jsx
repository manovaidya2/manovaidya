import React from "react";
import Seo from "../components/Seo";

function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-[#21142d]">
      <Seo
        title="Privacy Policy | Manovaidya"
        description="Read Manovaidya's privacy policy for information about how contact and consultation details are handled."
        path="/privacy-policy"
        keywords="Manovaidya privacy policy, patient privacy, consultation privacy, healthcare privacy India"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://manovaidya.org/privacy-policy",
        }}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7835A4]">Manovaidya</p>
        <h1 className="mt-3 text-[34px] font-black leading-tight text-[#292064]">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-[15px] font-semibold leading-8 text-[#51465a]">
          <p>
            Manovaidya respects the privacy of people who contact us for health, child development and wellbeing guidance.
            Information shared through forms, calls or consultations is used to respond to enquiries, schedule appointments
            and provide relevant care communication.
          </p>
          <p>
            Personal details are handled with care and are not sold to third parties. Health-related information should be
            shared only through official Manovaidya consultation channels.
          </p>
          <p>
            For privacy-related questions, please contact the Manovaidya team through the official contact details available
            on the website.
          </p>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicyPage;
