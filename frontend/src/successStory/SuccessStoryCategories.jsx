import React from "react";
import { categories } from "./successStoryData";

function SuccessStoryCategories({ activeCategory, onCategoryChange }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => onCategoryChange(label)}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-[0_12px_24px_rgba(15,47,63,0.1)] transition ${activeCategory === label
                  ? "border-[#8B43BA] text-[#8B43BA]"
                  : "border-slate-100 text-[#8B43BA] group-hover:border-[#8B43BA]/40"
                }`}
            >
              <Icon className="h-8 w-8" strokeWidth={2.1} />
            </span>
            <span className="min-h-10 text-[13px] font-black leading-5 text-[#071c2b]">{label}</span>
            <span className={`h-0.5 w-14 rounded-full ${activeCategory === label ? "bg-[#8B43BA]" : "bg-transparent"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default SuccessStoryCategories;
