import React from "react";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";
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

const cardClassName = "min-w-0 rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_18px_42px_rgba(45,27,95,0.08)] sm:p-7";
const headingClassName = "text-[24px] font-black leading-tight text-[#292064]";
const subheadingClassName = "text-lg font-black leading-snug text-[#292064]";
const linkClassName = "font-bold text-[#7835A4] underline underline-offset-2 hover:text-[#5f2785]";
const clinicMapUrl = "https://www.google.com/maps/search/?api=1&query=Manovaidya%20Ayurvedic%20Clinic%20VS%20Plaza%20Near%20Vinayak%20Hospital%20Atta%20Market%20Pocket%20E%20Sector%2027%20Noida%20Uttar%20Pradesh%20201301";

function ClinicalSupportGuidelines() {
  return (
    <section aria-labelledby="support-heading" className={cardClassName}>
      <h2 id="support-heading" className={headingClassName}>How Can Manovaidya Help You?</h2>
      <p className="mt-3">
        Manovaidya offers consultation and support for different health and developmental concerns. You can contact our team to discuss your requirements and learn more about the services that may be relevant to your situation.
      </p>

      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <h3 className={subheadingClassName}>Child Development and Behavioural Support</h3>
          <p>
            Children develop at different speeds, and parents may sometimes notice changes in their child's communication, behaviour, learning or social interaction. If you have concerns about your child's development, our team can help you understand the available support options.
          </p>
          <p>
            You can also explore our information on <Link to="/behavioural-concerns-children-india/" className={linkClassName}>behavioural concerns in children</Link> to learn more about common behavioural difficulties and the importance of appropriate guidance.
          </p>
          <p>
            Parents concerned about delayed speech or communication difficulties can learn more about <Link to="/speech-delay-support-india/" className={linkClassName}>speech delay support in India</Link>. If your child experiences difficulties with attention, impulsivity or hyperactivity, you can also read about <Link to="/child-health-care/adhd-child/" className={linkClassName}>ADHD in children</Link>.
          </p>
          <p>If you are unsure which consultation may be suitable, feel free to contact our team and explain your concerns.</p>
        </div>

        <div className="space-y-2">
          <h3 className={subheadingClassName}>Teen Mental Wellness</h3>
          <p>
            The teenage years bring changes in emotions, friendships, studies and family relationships. Some teenagers may find it difficult to manage academic pressure, low confidence, mood changes or anxiety.
          </p>
          <p>
            Parents and teenagers can contact Manovaidya to enquire about available mental wellness consultation options and understand where to seek appropriate support.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className={subheadingClassName}>Adult Mental Health Support</h3>
          <p>
            Work responsibilities, family matters and personal challenges can sometimes affect emotional well-being. Stress and anxiety may also interfere with sleep, concentration and everyday activities.
          </p>
          <p>
            If you are looking for guidance regarding anxiety or emotional difficulties, you can explore our <Link to="/anxiety-support-india/" className={linkClassName}>anxiety support in India</Link> page to learn more about the subject and available support.
          </p>
          <p>
            You can also contact our team to enquire about mental health consultations and the next steps for seeking professional guidance.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className={subheadingClassName}>Senior Mind and Memory Care</h3>
          <p>Changes in memory, confusion, mood or everyday behaviour can sometimes become a concern for older adults and their families.</p>
          <p>If you have noticed such changes in an elderly family member, you can contact Manovaidya to discuss your concerns and ask about suitable consultation options.</p>
        </div>

        <div className="space-y-2">
          <h3 className={subheadingClassName}>Women's Mental Health and Emotional Well-being</h3>
          <p>Physical and emotional changes at different stages of life can affect a woman's overall well-being. Stress, changes in mood and personal challenges may sometimes require additional attention.</p>
          <p>Women and their families can contact our team to enquire about relevant consultation services and available guidance.</p>
        </div>
      </div>
    </section>
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
        path="/contact-us/"
        keywords="contact Manovaidya, Manovaidya phone number, Manovaidya clinic Noida, book consultation Manovaidya"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          url: "https://manovaidya.org/contact-us/",
        }}
      />

      <div className="bg-gradient-to-br from-white via-[#fbf4ff] to-[#fff7ed]">
        <div className="mx-auto grid max-w-[1280px] items-start gap-6 px-4 py-14 text-[15px] leading-7 text-[#51465a] sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <header className="space-y-4 lg:col-span-2">
            <h1 className="text-[34px] font-black leading-tight text-[#292064] sm:text-[42px]">
              Manovaidya Clinical Support Guidelines
            </h1>
            <p>
              Finding the right support for your health or your child's development often starts with a conversation. Parents may have questions about their child's speech, behaviour, learning abilities or developmental progress. Adults may be looking for guidance on anxiety, stress, sleep problems or other emotional concerns.
            </p>
            <p>
              At <Link to="/" className={linkClassName}>Manovaidya</Link>, we understand that every person's situation is different. Some families want to learn more about their child's development, while others need information about mental health and well-being. Our team welcomes enquiries from individuals and families who want to understand the consultation options available to them.
            </p>
            <p>
              Whether you are contacting us for the first time or have questions about an existing treatment plan, we are here to guide you through the next steps.
            </p>
          </header>

          <ClinicalSupportGuidelines />

          <section aria-labelledby="appointment-heading" className={cardClassName}>
            <div className="mb-6 space-y-3">
              <h2 id="appointment-heading" className={headingClassName}>Book an Appointment with Manovaidya</h2>
              <p>
                If you would like to consult with our team, please fill out the enquiry form available on this page. Sharing a few details about your requirements will help us understand the reason for your visit and guide you accordingly.
              </p>
              <p>When submitting your enquiry, you can provide:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Your full name and contact number.</li>
                <li>The health or developmental concern you want to discuss.</li>
                <li>Your preferred consultation mode.</li>
                <li>Your preferred date and time.</li>
                <li>Any additional information relevant to your enquiry.</li>
              </ul>
              <p>Once we receive your request, our team will review the information and get in touch with you regarding consultation availability.</p>
              <p>Please remember that submitting an enquiry does not automatically confirm an appointment. Our team will communicate the available options separately.</p>
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
          </section>

          <section aria-labelledby="clinic-heading" className={cardClassName}>
            <h2 id="clinic-heading" className={headingClassName}>Visit Manovaidya Ayurvedic Clinic in Noida</h2>
            <p className="mt-3">If you prefer an in-person consultation, you are welcome to contact our team about visiting the Manovaidya clinic in Noida.</p>
            <address className="mt-4 space-y-2 not-italic">
              <p><a href={clinicMapUrl} target="_blank" rel="noreferrer" className={linkClassName}>Manovaidya Ayurvedic Clinic</a></p>
              <p>VS Plaza, Near Vinayak Hospital, Atta Market, Pocket E, Sector 27, Noida, Uttar Pradesh ? 201301, India.</p>
              <p><strong>Phone:</strong> <a href="tel:+917823838638" className={linkClassName}>+91 78238 38638</a></p>
              <p><strong>Email:</strong> <a href="mailto:manovaidya2@gmail.com" className={linkClassName}>manovaidya2@gmail.com</a></p>
            </address>
          </section>

          <section aria-labelledby="get-in-touch-heading" className={cardClassName}>
            <h2 id="get-in-touch-heading" className={headingClassName}>Get in Touch with Manovaidya</h2>
            <p className="mt-3">
              You can contact Manovaidya for guidance on child development, behavioural concerns, anxiety or emotional well-being. Call us, email us or submit the enquiry form to learn about consultation options and appointments.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ContactUsPage;
