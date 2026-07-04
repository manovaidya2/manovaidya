import React from "react";
import { Link } from "react-router-dom";

function SuccessStoryBreadcrumb() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-[12px] font-bold text-slate-500 sm:px-6 lg:px-10">
        <Link to="/" className="transition hover:text-[#8B43BA]">
          Home
        </Link>
        <span>&gt;</span>
        <span className="text-[#071c2b]">Success Stories</span>
      </div>
    </section>
  );
}

export default SuccessStoryBreadcrumb;
