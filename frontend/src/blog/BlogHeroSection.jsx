import  React from "react";
import blogFamilyImage from "../images/blog-insights-family.png";

function BlogHeroSection() {
  return (
    <section
      id="blog-articles"
      className="overflow-hidden bg-[#fbfaff]"
      aria-label="Blogs and Insights"
    >
      <div className="lg:hidden">
        <div className="px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12">
          <h1 className="text-[32px] font-extrabold leading-tight tracking-[-0.04em] text-black sm:text-[38px]">
            Blogs &amp; Insights
          </h1>
          <p className="mt-3 max-w-[430px] text-[13px] font-medium leading-[1.6] text-slate-700 sm:text-[15px]">
            Evidence-informed articles on child development, mental health and
            Neuro-Ayurveda to help families make informed choices for better
            wellbeing.
          </p>
          <a
            href="#articles"
            className="mt-5 inline-flex min-h-10 items-center justify-center rounded-[4px] border border-[#8b43ba] bg-white px-5 text-[12px] font-bold text-[#8b43ba] shadow-[0_1px_2px_rgba(139,67,186,0.06)] transition hover:bg-[#8b43ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b43ba]"
          >
            Explore Articles
          </a>
        </div>

        <div className="h-[260px] sm:h-[320px]">
          <img
            src={blogFamilyImage}
            alt="A family reading a book together"
            className="h-full w-full object-cover object-[72%_center]"
          />
        </div>
      </div>

      <div className="relative hidden h-[clamp(250px,26.2vw,390px)] lg:block">
        <img
          src={blogFamilyImage}
          alt="A family reading a book together"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,255,0.98)_0%,rgba(251,250,255,0.95)_35%,rgba(251,250,255,0.38)_53%,rgba(251,250,255,0)_66%)]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center px-[clamp(52px,7.1vw,106px)]">
          <div className="w-[43%] max-w-[560px]">
            <h1 className="text-[clamp(31px,3.2vw,48px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-black">
              Blogs &amp; Insights
            </h1>
            <p className="mt-[clamp(10px,1.25vw,18px)] max-w-[510px] text-[clamp(12px,1.08vw,16px)] font-medium leading-[1.55] text-slate-700">
              Evidence-informed articles on child development, mental health and
              Neuro-Ayurveda to help families make informed choices for better
              wellbeing.
            </p>
            <a
              href="#articles"
              className="mt-[clamp(12px,1.55vw,23px)] inline-flex h-[clamp(38px,3.15vw,47px)] items-center justify-center rounded-[4px] border border-[#8b43ba] bg-white/90 px-[clamp(18px,1.7vw,26px)] text-[clamp(11px,0.95vw,14px)] font-bold text-[#8b43ba] shadow-[0_1px_2px_rgba(139,67,186,0.06)] transition hover:bg-[#8b43ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b43ba]"
            >
              Explore Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHeroSection;
