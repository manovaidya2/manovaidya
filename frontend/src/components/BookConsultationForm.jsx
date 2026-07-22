import React from "react";
import api from "../api/axiosInstance";

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
  consultationMode: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function BookConsultationForm({ onSuccess }) {
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
        ...form,
        message: [
          form.message,
          "Consultation fee: Rs. 599",
          "OPD days: Tuesday, Thursday and Saturday",
          "Slot confirmation requires payment.",
        ].filter(Boolean).join("\n"),
      });

      if (!data.success) {
        throw new Error(data.message || "Unable to submit consultation request");
      }

      setStatus({
        type: "success",
        message: "Request submitted successfully. Our team will contact you soon.",
      });
      setForm(initialForm);
      onSuccess?.();
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
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="rounded-lg border border-violet-100 bg-violet-50/70 p-2.5 text-[11px] font-bold leading-4 text-[#4d3a61]">
        Rs. 599 consultation fee. OPD days: Tue, Thu, Sat. Limited slots. Payment confirms your slot.
      </div>

      <div>
        <label className="block text-[13px] font-bold text-[#272047]">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
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
          className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          required
        />
      </div>

      <div>
        <label className="block text-[13px] font-bold text-[#272047]">Consultation Mode</label>
        <select
          name="consultationMode"
          value={form.consultationMode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          required
        >
          <option value="" disabled>Select Mode</option>
          <option value="online">Online Consultation</option>
          <option value="clinic">Clinic Visit</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-bold text-[#272047]">Date</label>
          <input
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            required
          />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#272047]">Time</label>
          <select
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            required
          >
            <option value="" disabled>Select Time</option>
            {consultationTimes.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-bold text-[#272047]">Message</label>
        <textarea
          rows="1"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 block min-h-[44px] w-full rounded-lg border border-violet-200 px-3 py-1.5 text-[13px] text-[#272047] shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      {status.message ? (
        <p
          className={`rounded-lg px-3 py-2 text-sm font-bold ${
            status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 w-full rounded-lg bg-[#8b43ba] px-4 py-2 text-[14px] font-black text-white shadow-[0_10px_18px_rgba(139,67,186,0.24)] transition hover:bg-[#7835a4] focus:outline-none focus:ring-2 focus:ring-[#8b43ba] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-violet-300"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}

export default BookConsultationForm;
