import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BarChart3,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PhoneCall,
  Puzzle,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import NewsletterSection from "../blog/NewsletterSection";
import api, { getAssetUrl } from "../api/axiosInstance";
import heroImage from "../images/blog-insights-family.png";
import childImage from "../images/child-support-family.png";
import autismImage from "../images/autism-treatment-hero.png";
import teenImage from "../images/teen-family-support.png";
import doctorImage from "../images/doctorimg-2.jpeg";

const iconMap = {
  Autism: Puzzle,
  ADHD: Brain,
  "Speech Delay": MessageCircle,
  "Teen Mental Wellness": Brain,
  "Child Development": Baby,
};

const fallbackCaseStudies = [
  {
    title: "Autism Support Care Journey",
    category: "Autism",
    location: "Family from Delhi NCR",
    duration: "12 weeks",
    image: autismImage,
    Icon: Puzzle,
    summary:
      "A structured Neuro-Ayurveda care plan helped the family work on communication, sensory regulation, routine building, and parent-led home support.",
    outcomes: [
      "Better response to instructions",
      "Improved eye contact and social engagement",
      "More settled daily routine",
    ],
  },
  {
    title: "Speech Delay and Child Development Progress",
    category: "Speech Delay",
    location: "Parent from Mumbai",
    duration: "10 weeks",
    image: childImage,
    Icon: MessageCircle,
    summary:
      "The care plan focused on developmental understanding, therapy guidance, diet and lifestyle support, and daily communication activities at home.",
    outcomes: [
      "More expressive attempts",
      "Improved imitation and attention",
      "Family gained clear home-practice steps",
    ],
  },
  {
    title: "Teen Stress and Emotional Balance",
    category: "Teen Mental Wellness",
    location: "Family from Bangalore",
    duration: "8 weeks",
    image: teenImage,
    Icon: Brain,
    summary:
      "A teen-focused plan combined emotional support, routine correction, stress management practices, and follow-up reviews with family involvement.",
    outcomes: [
      "Reduced overwhelm in daily tasks",
      "Better sleep and study routine",
      "More confident family communication",
    ],
  },
];

const focusAreas = [
  { label: "Autism", Icon: Puzzle },
  { label: "ADHD", Icon: Brain },
  { label: "Speech Delay", Icon: MessageCircle },
  { label: "Child Development", Icon: Baby },
  { label: "Family Guidance", Icon: UsersRound },
];

const processSteps = [
  "Initial consultation with detailed history",
  "Personalized Neuro-Ayurveda care planning",
  "Family guidance and home routine support",
  "Progress review with practical next steps",
];

function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchCaseStudies = async () => {
      try {
        const { data } = await api.get("/case-studies?status=published");
        if (!data.success) {
          throw new Error(data.message || "Unable to load case studies.");
        }
        if (isMounted) {
          setCaseStudies(data.data || []);
          setError("");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || err.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void fetchCaseStudies();

    return () => {
      isMounted = false;
    };
  }, []);

  const openConsultationForm = () => {
    window.dispatchEvent(new CustomEvent("manovaidya:open-consultation"));
  };

  const visibleCaseStudies = caseStudies.length
    ? caseStudies.map((study) => ({
        ...study,
        image: getAssetUrl(study.image),
        Icon: iconMap[study.category] || HeartHandshake,
        outcomes: (study.outcomes || []).map((item) => item.text || item).filter(Boolean),
      }))
    : fallbackCaseStudies;

  return (
    <main>
      <section className="overflow-hidden bg-[#fbfaff]" aria-label="Case Studies">
        <div className="lg:hidden">
          <div className="px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8b43ba]">
              Real care journeys
            </p>
            <h1 className="mt-3 text-[32px] font-extrabold leading-tight text-black sm:text-[38px]">
              Case Studies
            </h1>
            <p className="mt-3 max-w-[460px] text-[13px] font-medium leading-[1.65] text-slate-700 sm:text-[15px]">
              Explore how Manovaidya plans care for children, teens and
              families through assessment, Neuro-Ayurveda support, counselling,
              and guided follow-ups.
            </p>
            <a
              href="#case-study-list"
              className="mt-5 inline-flex min-h-10 items-center justify-center rounded-[4px] border border-[#8b43ba] bg-white px-5 text-[12px] font-bold text-[#8b43ba] shadow-[0_1px_2px_rgba(139,67,186,0.06)] transition hover:bg-[#8b43ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b43ba]"
            >
              View Case Studies
            </a>
          </div>

          <div className="h-[260px] sm:h-[320px]">
            <img
              src={heroImage}
              alt="Family discussing child wellbeing"
              className="h-full w-full object-cover object-[72%_center]"
            />
          </div>
        </div>

        <div className="relative hidden h-[clamp(270px,28vw,410px)] lg:block">
          <img
            src={heroImage}
            alt="Family discussing child wellbeing"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,255,0.98)_0%,rgba(251,250,255,0.94)_35%,rgba(251,250,255,0.42)_54%,rgba(251,250,255,0)_68%)]" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center px-[clamp(52px,7.1vw,106px)]">
            <div className="w-[44%] max-w-[590px]">
              <p className="text-[clamp(10px,0.85vw,13px)] font-extrabold uppercase tracking-[0.18em] text-[#8b43ba]">
                Real care journeys
              </p>
              <h1 className="mt-3 text-[clamp(34px,3.35vw,52px)] font-extrabold leading-[1.06] text-black">
                Case Studies
              </h1>
              <p className="mt-[clamp(10px,1.25vw,18px)] max-w-[530px] text-[clamp(12px,1.08vw,16px)] font-medium leading-[1.58] text-slate-700">
                Explore how Manovaidya plans care for children, teens and
                families through assessment, Neuro-Ayurveda support, counselling,
                and guided follow-ups.
              </p>
              <a
                href="#case-study-list"
                className="mt-[clamp(12px,1.55vw,23px)] inline-flex h-[clamp(38px,3.15vw,47px)] items-center justify-center rounded-[4px] border border-[#8b43ba] bg-white/90 px-[clamp(18px,1.7vw,26px)] text-[clamp(11px,0.95vw,14px)] font-bold text-[#8b43ba] shadow-[0_1px_2px_rgba(139,67,186,0.06)] transition hover:bg-[#8b43ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b43ba]"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-list" className="bg-[#fbfcfa] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 xl:grid-cols-[minmax(0,1fr)_310px]">
          <div className="min-w-0">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8b43ba]">
                  Outcomes with context
                </p>
                <h2 className="mt-2 text-[28px] font-extrabold text-[#111b17] sm:text-[32px]">
                  Featured Case Studies
                </h2>
              </div>
              <Link
                to="/success-stories"
                className="inline-flex h-10 items-center justify-center rounded-md border border-violet-200 bg-white px-4 text-[12px] font-extrabold text-[#8b43ba] transition hover:border-[#8b43ba] hover:bg-violet-50"
              >
                See Success Stories
              </Link>
            </div>

            {loading ? (
              <div className="grid gap-5 lg:grid-cols-3">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="h-[360px] animate-pulse rounded-lg border border-[#dce3dd] bg-white" />
                ))}
              </div>
            ) : error && !caseStudies.length ? (
              <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-[13px] font-semibold text-amber-800">
                Live case studies could not load, so curated examples are shown.
              </div>
            ) : null}

            {!loading ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {visibleCaseStudies.map(({ Icon, ...study }) => (
                <article
                  key={study._id || study.title}
                  className="group flex flex-col overflow-hidden rounded-lg border border-[#dce3dd] bg-white shadow-[0_2px_8px_rgba(26,56,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(26,56,42,0.12)]"
                >
                  <div className="relative h-[150px] overflow-hidden bg-[#eef2ee] sm:h-[160px]">
                    <img
                      src={study.image}
                      alt={study.imageAlt || study.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#8b43ba] shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                      {study.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold text-[#65706a]">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#f5f7f3] px-2.5 py-1">
                        <MapPin className="h-3 w-3 text-[#8b43ba]" />
                        {study.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#f5f7f3] px-2.5 py-1">
                        <Clock3 className="h-3 w-3 text-[#8b43ba]" />
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] text-[#17201c]">
                      {study.slug ? (
                        <Link to={`/case-studies/${study.slug}`} className="transition hover:text-[#8b43ba]">
                          {study.title}
                        </Link>
                      ) : study.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[12px] font-medium leading-[1.6] text-[#65706a]">
                      {study.summary}
                    </p>
                    {study.slug ? (
                      <Link to={`/case-studies/${study.slug}`} className="mt-4 inline-flex text-[12px] font-black text-[#8b43ba]">
                        Read Case Study
                      </Link>
                    ) : null}

                    {/* <ul className="mt-4 space-y-2.5">
                    {study.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2 text-[12px] font-semibold leading-[1.45] text-[#27332d]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b43ba]" />
                          {outcome}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </article>
              ))}
            </div>
            ) : null}
          </div>

          <aside className="space-y-5 xl:pt-[1px]">
            <div className="rounded-xl border border-[#e1e7e2] bg-[#f5f7f3] p-5">
              <h3 className="text-[17px] font-extrabold text-[#17201c]">Focus Areas</h3>
              <ul className="mt-4 space-y-3.5">
                {focusAreas.map(({ label, Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-[#272047]">
                    <Icon className="h-4 w-4 shrink-0 text-[#8b43ba]" strokeWidth={1.8} />
                    <span className="min-w-0 flex-1 text-[13px] font-semibold">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#e1e7e2] bg-white p-5">
              <div className="flex items-center gap-3">
                <img
                  src={doctorImage}
                  alt="Dr. Ankush Garg"
                  className="h-14 w-14 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-[15px] font-extrabold text-[#17201c]">Dr. Ankush Garg</h3>
                  <p className="text-[11px] font-semibold text-[#65706a]">Consultation guidance</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-violet-50 p-3">
                  <Star className="h-4 w-4 fill-[#f5b301] text-[#f5b301]" />
                  <p className="mt-2 text-[18px] font-extrabold text-[#17201c]">4.9/5</p>
                  <p className="text-[10px] font-bold text-[#65706a]">Google rating</p>
                </div>
                <div className="rounded-lg bg-[#f5f7f3] p-3">
                  <BarChart3 className="h-4 w-4 text-[#8b43ba]" />
                  <p className="mt-2 text-[18px] font-extrabold text-[#17201c]">1000+</p>
                  <p className="text-[10px] font-bold text-[#65706a]">Families guided</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#e1e7e2] bg-white p-5">
              <h3 className="text-[17px] font-extrabold text-[#17201c]">Care Process</h3>
              <ol className="mt-4 space-y-3">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-[12px] font-semibold leading-[1.45] text-[#27332d]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#8b43ba] text-[10px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-[#8b43ba]/20 bg-violet-50/50 p-5 shadow-[0_3px_10px_rgba(139,67,186,0.05)]">
              <HeartHandshake className="h-7 w-7 text-[#8b43ba]" strokeWidth={1.7} />
              <h3 className="mt-3 text-[14px] font-extrabold text-black">
                Need a Personalized Plan?
              </h3>
              <p className="mt-2 text-[11px] font-medium leading-[1.55] text-slate-700">
                Speak with the Manovaidya team and understand the right care
                path for your family.
              </p>
              <div className="mt-4 grid gap-2">
                <button
                  type="button"
                  onClick={openConsultationForm}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#8b43ba] px-5 text-[11px] font-extrabold text-white transition hover:bg-[#7835a4]"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Book Consultation
                </button>
                <a
                  href="tel:+917823838638"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-5 text-[11px] font-extrabold text-[#8b43ba] transition hover:border-[#8b43ba]"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Call 7823838638
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-3">
          {[
            ["Personalized", "Each case is reviewed with individual history, age, concerns, and family goals."],
            ["Guided", "Parents receive practical steps that can be followed consistently at home."],
            ["Reviewed", "Progress is observed through follow-ups so the plan can be adjusted with care."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-[#e1e7e2] bg-[#fbfcfa] p-6">
              <Sparkles className="h-6 w-6 text-[#8b43ba]" strokeWidth={1.7} />
              <h3 className="mt-4 text-[18px] font-extrabold text-[#17201c]">{title}</h3>
              <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[#65706a]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default CaseStudiesPage;
