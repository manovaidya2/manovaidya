import React from "react";
import { ArrowRight } from "lucide-react";
import { faqs, trustCards } from "./successStoryData";

function SuccessStoryTrustFaq({ openFaq, onFaqToggle }) {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-4 pb-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
      <div>
        <h2 className="text-center text-[clamp(24px,1.8vw,32px)] font-black text-[#071c2b]">
          Why Families Trust Us
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-[0_12px_24px_rgba(15,47,63,0.06)]">
              <Icon className="mx-auto h-9 w-9 text-[#8B43BA]" strokeWidth={2.1} />
              <h3 className="mt-4 text-[14px] font-black text-[#073c47]">{title}</h3>
              <p className="mt-2 text-[13px] font-semibold leading-5 text-[#233445]">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center text-[clamp(22px,1.6vw,28px)] font-black text-[#071c2b]">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-lg border border-slate-200 bg-white">
          {faqs.map((question, index) => (
            <div key={question} className="border-b border-slate-100 last:border-b-0">
              <button
                type="button"
                onClick={() => onFaqToggle(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-bold text-[#071c2b] transition hover:bg-slate-50"
              >
                <span>{question}</span>
                <ArrowRight className={`h-4 w-4 text-[#8B43BA] transition ${openFaq === index ? "rotate-90" : ""}`} />
              </button>
              {openFaq === index ? (
                <p className="px-5 pb-4 text-[14px] font-semibold leading-6 text-slate-600">
                  Every story is reviewed before publishing. Results may vary by condition,
                  history, consistency, and follow-up needs.
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStoryTrustFaq;
