import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Plus, Sparkles } from "lucide-react";
import api, { getAssetUrl } from "../api/axiosInstance";
import childImage from "../images/child.png";
import boyImage from "../images/boy.png";
import scienceImage from "../images/science-neuro-ayurveda.png";
import adultImage from "../images/3.png";
import sleepImage from "../images/4.png";
import nutritionImage from "../images/5.png";

const fallbackImages = [
  childImage,
  scienceImage,
  adultImage,
  boyImage,
  sleepImage,
  nutritionImage,
];

const fallbackArticles = [
  {
    title: "Understanding Autism & How to Support",
    image: childImage,
    href: "/blog",
  },
  {
    title: "How Gut Health Affects Your Mental Health",
    image: scienceImage,
    href: "/blog",
  },
  {
    title: "Managing Stress Naturally with Ayurveda",
    image: adultImage,
    href: "/blog",
  },
  {
    title: "ADHD in Teens: Signs, Causes & Care",
    image: boyImage,
    href: "/blog",
  },
  {
    title: "Sleep Hygiene Tips for Better Mental Wellbeing",
    image: sleepImage,
    href: "/blog",
  },
  {
    title: "Nutrition & Diet for Brain & Gut Health",
    image: nutritionImage,
    href: "/blog",
  },
];

const faqs = [
  {
    question: "What is Neuro-Ayurveda & how does it help?",
    answer:
      "Neuro-Ayurveda combines Ayurvedic principles with modern brain and nervous-system understanding to support mental health, behaviour, sleep, emotions, gut health and overall wellbeing.",
  },
  {
    question: "How does gut health affect mental health?",
    answer:
      "The gut and brain communicate through hormones, nerves, immunity and inflammation. Better digestion, food habits and gut balance can support mood, focus, sleep and stress response.",
  },
  {
    question: "Can stress affect physical health?",
    answer:
      "Yes. Long-term stress can affect sleep, digestion, headaches, fatigue, immunity, blood pressure and emotional regulation. A holistic plan helps calm the system at root level.",
  },
  {
    question: "Is online consultation effective?",
    answer:
      "Yes, many concerns can be assessed and followed up effectively online through structured history-taking, care plans, lifestyle guidance and regular progress reviews.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "It depends on the concern, duration, severity and consistency with the plan. Some people notice early improvements, while deeper concerns need regular follow-up and sustained care.",
  },
  {
    question: "Do you offer personalised care plans?",
    answer:
      "Yes. Care plans are personalised based on age, symptoms, history, lifestyle, digestion, sleep, emotional patterns and family needs.",
  },
  {
    question: "Do you support patients outside Delhi NCR?",
    answer:
      "Yes. Online consultations are available across India, with guidance, follow-ups and care planning provided remotely.",
  },
  {
    question: "Can digestive issues affect mood and behaviour?",
    answer:
      "Yes. Digestive discomfort, poor gut balance and food sensitivities can influence mood, sleep, irritability, focus and behaviour in many people.",
  },
  {
    question: "Why is emotional wellbeing important?",
    answer:
      "Emotional wellbeing supports confidence, relationships, learning, work performance, sleep and physical health. It is a core part of long-term healing.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "A structured consultation helps identify your main concerns and guides you toward the right care plan for child, teen, adult, senior, women or mind-body support.",
  },
];

function InsightsFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        const blogList = Array.isArray(response.data?.data) ? response.data.data : [];
        const publishedBlogs = blogList
          .filter((blog) => !blog.status || blog.status === "published")
          .slice(0, 6);

        if (isMounted) {
          setBlogs(publishedBlogs);
        }
      } catch (error) {
        if (isMounted) {
          setBlogs([]);
        }
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  const articles = useMemo(() => {
    if (!blogs.length) {
      return fallbackArticles;
    }

    return blogs.slice(0, 6).map((blog, index) => ({
      title: blog.title,
      image: getAssetUrl(blog.image) || fallbackImages[index % fallbackImages.length],
      alt: blog.imageAlt || blog.title,
      href: blog.slug ? `/blog/${blog.slug}` : "/blog",
    }));
  }, [blogs]);

  return (
    <section className="bg-[#fbfaff] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto w-full">
        <div className="grid items-start gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-2xl border border-[#8B43BA]/15 bg-white p-4 shadow-[0_14px_34px_rgba(139,67,186,0.08)] sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[clamp(24px,2.1vw,34px)] font-bold leading-tight text-[#8B43BA]">
                Expert Insights & Resources.
              </h2>
              <Link
                to="/blog"
                className="hidden items-center gap-2 text-[13px] font-black text-[#8B43BA] sm:inline-flex"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {articles.slice(0, 6).map(({ title, image, alt, href }) => (
                <article key={title} className="group overflow-hidden rounded-xl border border-[#8B43BA]/12 bg-white shadow-[0_10px_22px_rgba(139,67,186,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(139,67,186,0.12)]">
                  <Link to={href} className="block aspect-[16/10] overflow-hidden bg-[#8B43BA]/8">
                    <img
                      src={image}
                      alt={alt || title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="px-4 pb-4 pt-3">
                    <h3 className="min-h-[48px] text-[15px] font-bold leading-[1.35] text-[#251553]">
                      {title}
                    </h3>
                    <Link
                      to={href}
                      className="mt-3 inline-flex items-center gap-2 text-[13px] font-black text-[#8B43BA]"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.3} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#8B43BA]/15 bg-white p-4 shadow-[0_14px_34px_rgba(139,67,186,0.08)] sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="whitespace-nowrap text-[clamp(22px,1.65vw,30px)] font-bold leading-tight text-[#8B43BA]">
                Frequently Asked Questions
              </h2>
              <a
                href="#faq"
                className="hidden shrink-0 items-center gap-2 text-[13px] font-black text-[#8B43BA] sm:inline-flex"
              >
                View All Questions
                <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
              </a>
            </div>

            <div className="mt-4 divide-y divide-[#8B43BA]/12 overflow-hidden rounded-xl border border-[#8B43BA]/12">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={question} className="bg-white">
                    <button
                      type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[16px] font-bold leading-5 text-[#251553] transition hover:bg-[#8B43BA]/5"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{question}</span>
                      <Plus
                        className={`h-4 w-4 shrink-0 text-[#8B43BA] transition duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                    {isOpen ? (
                      <p className="px-4 pb-4 text-[15px] font-semibold leading-6 text-slate-700">
                        {answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-[#8B43BA] text-white shadow-[0_16px_38px_rgba(139,67,186,0.22)]">
          <div className="grid items-center gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[1fr_0.5fr] lg:py-5">
            <div className="flex items-center gap-5">
              <Sparkles className="hidden h-20 w-20 shrink-0 text-white/55 sm:block" strokeWidth={1.3} />
              <div>
                <h2 className="text-[clamp(26px,2.4vw,30px)] font-bold leading-tight">
                  Take the First Step Towards a Better You
                </h2>
                <p className="mt-2 text-[16px] font-semibold text-white/88">
                  Personalised. Compassionate. Proven.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-[14px] font-black text-[#8B43BA] shadow-[0_10px_20px_rgba(43,16,87,0.16)] transition hover:bg-violet-50"
              >
                <CalendarDays className="h-4 w-4" strokeWidth={2.3} />
                Book Consultation
              </a>
              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-[14px] font-black text-[#8B43BA] shadow-[0_10px_20px_rgba(43,16,87,0.16)] transition hover:bg-violet-50"
              >
                <CalendarDays className="h-4 w-4" strokeWidth={2.3} />
                Take Free Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsFaqSection;
