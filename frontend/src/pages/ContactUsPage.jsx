import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import api from "../api/axiosInstance";
import Seo from "../components/Seo";

const consultationTimes = [
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  consultationMode: "",
  preferredDate: "",
  preferredTime: "",
  concern: "",
  message: "",
};

const contactCards = [
  {
    label: "Call",
    value: "+91 7823838638",
    href: "tel:+917823838638",
    Icon: Phone,
  },
  {
    label: "Email",
    value: "manovaidya@gmail.com",
    href: "mailto:manovaidya@gmail.com",
    Icon: Mail,
  },
  {
    label: "Clinic",
    value: "Manovaidya Clinic, VS Plaza, near vinayak hospital, Atta Market, Pocket E, Sector 27, Noida, Uttar Pradesh 201301",
    href: "https://www.google.com/maps/search/?api=1&query=Manovaidya%20Clinic%20VS%20Plaza%20Near%20Vigyan%20Hospital%20Atta%20Market%20Sector%2022%20Noida",
    Icon: MapPin,
  },
];

function ClinicalSupportGuidelines() {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_18px_42px_rgba(45,27,95,0.08)]">
      <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7835A4]">
        Manovaidya Clinical Support Guidelines
      </p>
      <h2 className="mt-3 text-[22px] font-black leading-tight text-[#292064]">
        Clinical Support Guidelines
      </h2>
      <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
        आपके treatment plan में personalised diet guidance, tracker system, exercises/therapy guidance, sensory एवं marma-point support, Omkar practices और आवश्यकता के अनुसार doctor follow-up शामिल हो सकते हैं।
      </p>
      <p className="mt-5 text-sm font-black text-[#302650]">कृपया ध्यान रखें:</p>
      <ul className="mt-3 space-y-3 text-[13px] font-semibold leading-6 text-[#51465a]">
        <li>• Clinic support timing सुबह 11:00 बजे से शाम 6:00 बजे तक, केवल working days में है।</li>
        <li>• Follow-up calls clinical requirement, scheduled date और doctor availability के अनुसार किए जाते हैं।</li>
        <li>• OPD, ongoing consultations, weekly off या छुट्टी के कारण call/message का reply तुरंत मिलना संभव नहीं हो सकता।</li>
        <li>• Call न उठने पर कृपया WhatsApp पर patient name, concern और medicine details लिखकर भेजें। Team working hours में क्रमवार उत्तर देगी।</li>
        <li>• Treatment support का अर्थ 24x7, instant call-back या emergency helpline service नहीं है।</li>
        <li>• किसी गंभीर या emergency स्थिति में कृपया तुरंत नजदीकी hospital/emergency service से संपर्क करें।</li>
      </ul>
      <p className="mt-5 text-[14px] font-semibold leading-7 text-[#51465a]">
        हमारा उद्देश्य हर patient को व्यवस्थित, सुरक्षित और clinically appropriate guidance देना है। आपके सहयोग के लिए धन्यवाद।
      </p>
      <p className="mt-3 text-sm font-black text-[#8B43BA]">Team Manovaidya</p>
    </div>
  );
}

function ContactUsPage() {
  const [form, setForm] = React.useState(initialForm);
  const [status, setStatus] = React.useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const { data } = await api.post("/consultations", {
        name: form.name,
        phone: form.phone,
        consultationMode: form.consultationMode,
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        message: [
          "Source: Contact Us page",
          form.email ? `Email: ${form.email}` : "",
          form.concern ? `Concern: ${form.concern}` : "",
          form.message ? `Message: ${form.message}` : "",
        ].filter(Boolean).join("\n"),
      });

      if (!data.success) {
        throw new Error(data.message || "Unable to submit contact request");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your details have been submitted successfully.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#fffaf6] text-[#21142d]">
      <Seo
        title="Contact Us | Manovaidya"
        description="Contact Manovaidya for online and clinic consultations in Noida, Delhi NCR and across India."
        path="/contact-us"
        keywords="contact Manovaidya, Manovaidya phone number, Manovaidya clinic Noida, book consultation Manovaidya"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          url: "https://manovaidya.org/contact-us",
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fbf4ff] to-[#fff7ed]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-start">
            <ClinicalSupportGuidelines />
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_18px_42px_rgba(45,27,95,0.12)] sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[24px] font-black text-[#272047]">Send Enquiry</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6a5d77]">
                  Your form details will be saved with consultation requests.
                </p>
              </div>
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#8B43BA] text-white sm:flex">
                <Send className="h-5 w-5" />
              </span>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Consultation Mode</label>
                  <select
                    name="consultationMode"
                    value={form.consultationMode}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    required
                  >
                    <option value="" disabled>Select Mode</option>
                    <option value="online">Online Consultation</option>
                    <option value="clinic">Clinic Visit</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#272047]">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    required
                  >
                    <option value="" disabled>Select Time</option>
                    {consultationTimes.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#272047]">Concern</label>
                <input
                  type="text"
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  placeholder="Child development, stress, anxiety, memory care..."
                  className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#272047]">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-2 text-[14px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>

              {status.message ? (
                <p
                  className={`rounded-lg px-3 py-2 text-sm font-bold ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#8b43ba] px-5 text-sm font-black text-white shadow-[0_12px_24px_rgba(139,67,186,0.24)] transition hover:bg-[#7835a4] focus:outline-none focus:ring-2 focus:ring-[#8b43ba] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-violet-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_18px_42px_rgba(45,27,95,0.08)] sm:p-7 lg:col-span-2">
            <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7835A4]">
              Contact Manovaidya
            </p>
            <h1 className="mt-4 max-w-4xl text-[34px] font-black leading-tight text-[#292064] sm:text-[42px]">
              Speak with our team for consultation support
            </h1>
            <p className="mt-5 max-w-5xl text-[16px] font-semibold leading-8 text-[#5d5268]">
              Share your details and preferred consultation slot. The Manovaidya team will review your request and contact you for the next steps.
            </p>

            <div className="mt-8 grid gap-3 lg:grid-cols-3">
              {contactCards.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex min-h-28 items-center gap-4 rounded-lg border border-violet-100 bg-white px-4 py-4 shadow-sm transition hover:border-violet-200 hover:text-[#8B43BA]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-[#8B43BA]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-black uppercase tracking-[0.08em] text-[#8B43BA]">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-black leading-5 text-[#302650]">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ContactUsPage;
