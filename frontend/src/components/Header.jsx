import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  HeartPulse,
  Menu,
  PhoneCall,
  Sparkles,
  X,
} from "lucide-react";
import BookConsultationButton from "./BookConsultationButton";
import BookConsultationForm from "./BookConsultationForm";
import logo from "../images/manovaidya-logo (2).png";

const conditionGroups = [
  {
    title: "Child Health Care",
    href: "/child-health-care",
    featuredTitle: "Child Development Care",
    items: [
      { label: "Autism Spectrum Disorder", href: "/autism-treatment-india" },
      { label: "ADHD & Hyperactivity", href: "/child-health-care/adhd-child" },
      { label: "Speech Delay Treatment", href: "/speech-delay-support-india" },
      { label: "Learning Difficulties", href: "/learning-attention-difficulties-india" },
      { label: "Behavioural Challenges", href: "/behavioural-concerns-children-india" },
      { label: "Child Development Support", href: "/child-development-support-india" },
    ],
  },
  {
    title: "Teen Mental Wellness",
    href: "/teen-mental-wellness",
    featuredTitle: "Teen Mental Wellness",
    items: [
      { label: "Teen Stress & Anxiety", href: "/teen-stress-anxiety-support" },
      { label: "Depression & Low Mood", href: "/teen-depression-support" },
      { label: "Exam & Academic Pressure", href: "/exam-performance-pressure" },
      { label: "Low Confidence & Self-Esteem", href: "/teen-confidence-emotional-wellbeing" },
      { label: "Screen Addiction & Digital Wellbeing", href: "/teen-screen-addiction-support" },
      { label: "Parent-Teen Relationship Support", href: "/parent-teen-relationship-support" },
    ],
  },
  {
    title: "Adult Mental Health Care",
    href: "/adult-mental-wellness",
    featuredTitle: "Adult Mental Health Care",
    items: [
      { label: "Stress & Anxiety", href: "/anxiety-support-india" },
      { label: "Depression", href: "/adult-depression-support" },
      { label: "Burnout & Exhaustion", href: "/stress-burnout-support-india" },
      { label: "Sleep Problems", href: "/sleep-disorders-insomnia-support-india" },
      { label: "Self-Esteem & Confidence", href: "/low-self-esteem-confidence-support-india" },
      { label: "Relationship Challenges", href: "/relationship-challenges-support-india" },
      { label: "Addiction & Habit Concerns", href: "/addiction-unhealthy-habits-support-india" },
    ],
  },
  {
    title: "Senior Mind & Memory Care",
    href: "/senior-mind-memory-care",
    featuredTitle: "Senior Mind & Memory Care",
    items: [
      { label: "Memory Loss & Forgetfulness", href: "/memory-loss-forgetfulness-support-seniors-india/" },
      { label: "Confusion & Disorientation", href: "/confusion-disorientation-support-seniors-india/" },
      { label: "Mild Cognitive Impairment (MCI)", href: "/mild-cognitive-impairment-mci-support-seniors-india/" },
      { label: "Dementia & Alzheimer", href: "/dementia-alzheimers-care-support-seniors-india/" },
      { label: "Depression Treatment & Support", href: "/senior-depression-support-india/" },
      { label: "Mood & Behaviour Changes", href: "/sleep-disorders-seniors-support-india/" },
    ],
  },
  {
    title: "Women Mental Health Concerns",
    href: "/women-health-care",
    featuredTitle: "Women Mental Health",
    items: [
      { label: "Stress & Anxiety Support", href: "/women-stress-management-mind-body-balance-india/" },
      { label: "Depression & Low Mood Support", href: "/women-depression-low-mood-support-india/" },
      { label: "Hormonal Mood Changes, PMS & PMDD", href: "/women-hormonal-pms-pmdd-support-india/" },
      { label: "Self-Esteem & Body Image Support", href: "/women-self-esteem-body-image-support-india/" },
      { label: "Relationship & Emotional Challenges", href: "/women-relationship-emotional-wellbeing-support-india/" },
      { label: "Pregnancy, Postpartum & Motherhood", href: "/women-pregnancy-postpartum-motherhood-mental-health-india/" },
      { label: "Life Transitions & Career Pressure", href: "/women-life-transitions-career-pressure-support-india/" },
    ],
  },
  {
    title: "Mind & Body Concerns",
    href: "/mind-body-wellbeing",
    featuredTitle: "Mind & Body Wellbeing",
    items: [
      { label: "Stress & High Blood Pressure", href: "/stress-and-high-blood-pressure/" },
      { label: "Stress IBS Support", href: "/stress-ibs-support-india/" },
      { label: "Stress & Fatigue Treatment", href: "/stress-and-fatigue/" },
      { label: "Stress & Digestive Health", href: "/stress-and-digestive-health/" },
      { label: "Stress & Acidity Treatment", href: "/stress-and-acidity/" },
      { label: "Stress & Migraine Treatment", href: "/stress-and-migraine/" },
      { label: "Stress & Headaches Treatment", href: "/stress-and-headaches/" },
      { label: "Stress & Thyroid Treatment", href: "/stress-and-thyroid/" },
    ],
  },
];

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    hasMenu: true,
    submenu: [
      { label: "About Doctor", href: "/about/doctor" },
      { label: "About Manovaidya", href: "/about/manovaidya" },
      { label: "Our Approach", href: "/about/approach" },
    ],
  },
  { label: "Conditions", href: "#conditions", hasMenu: true, megaMenu: conditionGroups },
  // { label: "Programs", href: "#programs", hasMenu: true },
  { label: "Success Stories", href: "/success-stories" },
  {
    label: "Resources",
    href: "#resources",
    hasMenu: true,
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Media & PR", href: "/media-coverage" },
      { label: "Video Library", href: "/video-library" },
    ],
  },
  // { label: "Our Approach", href: "/about/approach" },
];

const topLevelNavHrefs = navItems
  .filter((item) => !item.submenu && !item.megaMenu && !item.href.startsWith("#"))
  .map((item) => item.href);

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isConditionsOpen, setIsConditionsOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  const [openConditionGroup, setOpenConditionGroup] = React.useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = React.useState(false);
  const conditionsCloseTimer = React.useRef(null);

  const conditionRoutes = conditionGroups.map((group) => group.href);
  const isNavItemActive = (item) => {
    if (item.label === "Home") {
      return location.pathname === "/" && !location.hash;
    }

    if (item.label === "About Us") {
      return (
        location.pathname.startsWith("/about") &&
        location.pathname !== "/about/approach"
      );
    }

    if (item.label === "Conditions") {
      return (
        location.hash === "#conditions" ||
        conditionRoutes.includes(location.pathname)
      );
    }


    
    if (item.label === "Resources") {
      return item.submenu.some((subItem) => {
        const [pathname, hash = ""] = subItem.href.split("#");

        if (topLevelNavHrefs.includes(pathname) && !hash) {
          return false;
        }

        return (
          pathname === location.pathname &&
          (!hash || `#${hash}` === location.hash)
        );
      });
    }

    if (item.href.startsWith("#")) {
      return location.pathname === "/" && location.hash === item.href;
    }

    return location.pathname === item.href;
  };

  const desktopNavClass = (active) =>
    `relative inline-flex items-center py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#7130a3] after:to-[#a34fd2] after:transition-transform after:duration-300 after:ease-out ${active
      ? "text-[#7b2cbf] after:scale-x-100"
      : "text-[#211d2d] hover:text-[#7b2cbf] after:scale-x-0"
    }`;

  const closeMenu = () => {
    window.clearTimeout(conditionsCloseTimer.current);
    setIsMenuOpen(false);
    setIsConditionsOpen(false);
    setIsAboutOpen(false);
    setIsResourcesOpen(false);
    setOpenConditionGroup(null);
  };

  const openConditionsMenu = () => {
    window.clearTimeout(conditionsCloseTimer.current);
    setIsConditionsOpen(true);
  };

  const scheduleConditionsClose = () => {
    window.clearTimeout(conditionsCloseTimer.current);
    conditionsCloseTimer.current = window.setTimeout(() => {
      setIsConditionsOpen(false);
    }, 220);
  };

  React.useEffect(() => {
    const openConsultationModal = () => {
      closeMenu();
      setIsConsultationModalOpen(true);
    };

    window.addEventListener("manovaidya:open-consultation", openConsultationModal);
    return () => {
      window.removeEventListener("manovaidya:open-consultation", openConsultationModal);
    };
  }, []);

  React.useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  React.useEffect(
    () => () => window.clearTimeout(conditionsCloseTimer.current),
    []
  );

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 shadow-[0_8px_20px_rgba(91,55,183,0.07)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-5 lg:px-7">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="ManoVaidya home"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="ManoVaidya"
              className="h-auto w-[clamp(155px,28vw,200px)] object-contain object-left"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center font-bold gap-[clamp(16px,1.55vw,28px)] whitespace-nowrap text-[clamp(15px,1.08vw,18px)] font-black text-[#272047] xl:flex">
            {navItems.map((item) =>
              item.megaMenu ? (
                <div
                  key={item.label}
                  className="static"
                  onMouseEnter={openConditionsMenu}
                  onMouseLeave={scheduleConditionsClose}
                >
                  <button
                    type="button"
                    className={desktopNavClass(isNavItemActive(item))}
                    aria-expanded={isConditionsOpen}
                    aria-controls="desktop-conditions-menu"
                    onClick={() => setIsConditionsOpen((open) => !open)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`ml-0.5 h-4 w-4 transition-transform ${isConditionsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    id="desktop-conditions-menu"
                    onMouseEnter={openConditionsMenu}
                    onMouseLeave={scheduleConditionsClose}
                    className={`fixed left-0 right-0 top-[70px] z-[80] border-t border-violet-100 bg-white shadow-[0_18px_42px_rgba(45,27,95,0.14)] transition duration-200 ${isConditionsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                      }`}
                  >
                    <div className="mx-auto grid max-w-[1500px] grid-cols-[repeat(6,minmax(0,1fr))] gap-x-6 px-7 pb-9 pt-7 2xl:gap-x-8 2xl:px-9">
                      {item.megaMenu.map((group) => (
                        <div key={group.title} className="min-w-0">
                          <Link
                            to={group.href}
                            className="flex whitespace-normal break-words text-[12px] font-black uppercase leading-[1.35] tracking-[0.01em] text-[#6f3dc2] transition hover:text-[#8B43BA] 2xl:text-[13px]"
                            onClick={closeMenu}
                          >
                            <span className="min-w-0">{group.title}</span>
                            <ChevronDown className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          </Link>
                          <div className="mt-4 space-y-3">
                            {group.items.map((condition) => {
                              const label = typeof condition === 'string' ? condition : condition.label;
                              const href = typeof condition === 'string' ? group.href : condition.href;
                              return (
                                <Link
                                  key={label}
                                  to={href}
                                  className="block whitespace-normal text-[14px] font-semibold leading-[1.35] text-[#2f293f] transition hover:text-[#7b3db3]"
                                  onClick={closeMenu}
                                >
                                  {label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.submenu ? (
                <div key={item.label} className="group relative">
                  <Link
                    to={item.href}
                    className={desktopNavClass(isNavItemActive(item))}
                  >
                    {item.label}
                    <ChevronDown className="ml-0.5 h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-56 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border border-violet-100 bg-white p-2 shadow-[0_18px_42px_rgba(45,27,95,0.16)]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block rounded-lg px-4 py-3 text-[14px] font-black text-[#272047] transition hover:bg-violet-50 hover:text-[#8B43BA]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={desktopNavClass(isNavItemActive(item))}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={desktopNavClass(isNavItemActive(item))}
                >
                  {item.label}
                  {item.hasMenu ? <ChevronDown className="ml-0.5 inline h-4 w-4" /> : null}
                </a>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <BookConsultationButton
              showIcon
              className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-md bg-[#8b43ba] px-5 text-[14px] font-black text-white shadow-[0_10px_18px_rgba(139,67,186,0.24)] transition hover:bg-[#7835a4] xl:inline-flex"
            >
              Book Consultation
            </BookConsultationButton>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-violet-200 bg-violet-50 text-violet-800 shadow-sm transition hover:border-violet-300 hover:bg-violet-100 xl:hidden"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-[60] bg-[#120b2a]/45 backdrop-blur-[2px] xl:hidden"
          onClick={closeMenu}
        />
      ) : null}

      <aside
        className={`fixed right-0 top-0 z-[70] h-dvh w-[min(92vw,400px)] transform overflow-hidden rounded-l-2xl bg-white shadow-[-24px_0_60px_rgba(45,27,95,0.25)] transition-transform duration-300 xl:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-full flex-col">
          <div className="shrink-0 border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-4 pb-4 pt-5 sm:px-5">
            <div className="flex items-center justify-between gap-4">
              <img
                src={logo}
                alt="ManoVaidya"
                className="h-auto w-[min(56vw,210px)] object-contain object-left"
              />
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-violet-800 shadow-sm ring-1 ring-violet-100"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 rounded-xl border border-violet-100 bg-white/75 p-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold leading-5 text-[#302650]">
                  Neuro-Ayurveda care for every mind and every stage.
                </p>
              </div>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-3 py-4 sm:px-5">
            <Link
              to="/"
              className="flex min-h-14 shrink-0 items-center justify-between rounded-lg px-4 py-3 text-base font-black text-violet-700 transition hover:bg-violet-50"
              onClick={closeMenu}
            >
              Home
              <Sparkles className="h-4 w-4" />
            </Link>

            <section className="shrink-0 overflow-hidden rounded-xl border border-violet-100 bg-violet-50/70 shadow-sm">
              <button
                type="button"
                className="flex min-h-14 w-full shrink-0 items-center justify-between overflow-visible px-4 py-3 text-left text-base font-black leading-5 text-violet-700"
                aria-expanded={isAboutOpen}
                aria-controls="mobile-about-menu"
                onClick={() => {
                  setIsAboutOpen((open) => !open);
                  setIsConditionsOpen(false);
                  setIsResourcesOpen(false);
                  setOpenConditionGroup(null);
                }}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="mobile-about-menu"
                className={`gap-1 border-t border-violet-100 px-3 py-2 ${isAboutOpen ? "grid" : "hidden"
                  }`}
              >
                {navItems[1].submenu.map((subItem) => (
                  <Link
                    key={subItem.label}
                    to={subItem.href}
                    className="rounded-lg px-4 py-2.5 text-sm font-black text-[#272047] transition hover:bg-white hover:text-[#8B43BA]"
                    onClick={closeMenu}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="shrink-0 overflow-hidden rounded-xl border border-violet-100 bg-violet-50/70 shadow-sm">
              <button
                type="button"
                className="flex min-h-14 w-full shrink-0 items-center justify-between overflow-visible px-4 py-3 text-left text-base font-black leading-5 text-violet-700"
                aria-expanded={isConditionsOpen}
                aria-controls="mobile-conditions-menu"
                onClick={() => {
                  if (isConditionsOpen) setOpenConditionGroup(null);
                  setIsConditionsOpen(!isConditionsOpen);
                  setIsAboutOpen(false);
                  setIsResourcesOpen(false);
                }}
              >
                Conditions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isConditionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="mobile-conditions-menu"
                className={`divide-y divide-violet-100 border-t border-violet-100 bg-white ${isConditionsOpen ? "block" : "hidden"
                  }`}
              >
                {conditionGroups.map((group) => (
                  <div key={group.title} className="bg-white">
                    <button
                      type="button"
                      className="group flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-[15px] font-black leading-5 text-[#302650] transition hover:bg-violet-50 hover:text-[#8B43BA]"
                      aria-expanded={openConditionGroup === group.title}
                      onClick={() =>
                        setOpenConditionGroup((current) =>
                          current === group.title ? null : group.title
                        )
                      }
                    >
                      <span>{group.title}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition group-hover:bg-white">
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${openConditionGroup === group.title ? "rotate-180" : ""
                            }`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    {openConditionGroup === group.title ? (
                      <div className="grid gap-0.5 border-t border-violet-100 bg-violet-50/60 px-3 py-2">
                        <Link
                          to={group.href}
                          className="mb-1 rounded-lg border border-violet-100 bg-white px-3 py-2.5 text-[13px] font-black leading-5 text-[#6f3dc2] shadow-sm transition hover:text-[#8B43BA]"
                          onClick={closeMenu}
                        >
                          {group.featuredTitle}
                        </Link>
                        {group.items.map((condition) => {
                          const label = typeof condition === 'string' ? condition : condition.label;
                          const href = typeof condition === 'string' ? group.href : condition.href;
                          return (
                            <Link
                              key={label}
                              to={href}
                              className="rounded-lg px-3 py-2.5 text-[13px] font-bold leading-5 text-[#302650] transition hover:bg-white hover:text-[#8B43BA]"
                              onClick={closeMenu}
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {navItems.slice(3).map((item) =>
              item.submenu ? (
                <section
                  key={item.label}
                  className="shrink-0 overflow-hidden rounded-xl border border-violet-100 bg-violet-50/70 shadow-sm"
                >
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between px-4 py-3 text-left text-base font-black leading-5 text-violet-700"
                    aria-expanded={isResourcesOpen}
                    aria-controls="mobile-resources-menu"
                    onClick={() => {
                      setIsResourcesOpen((open) => !open);
                      setIsAboutOpen(false);
                      setIsConditionsOpen(false);
                      setOpenConditionGroup(null);
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id="mobile-resources-menu"
                    className={`gap-1 border-t border-violet-100 px-3 py-2 ${isResourcesOpen ? "grid" : "hidden"}`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="rounded-lg px-4 py-2.5 text-sm font-black text-[#272047] transition hover:bg-white hover:text-[#8B43BA]"
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex min-h-14 shrink-0 items-center justify-between rounded-lg px-4 py-3 text-base font-black text-violet-700 transition hover:bg-violet-50"
                  onClick={closeMenu}
                >
                  {item.label}
                  <Sparkles className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-h-14 shrink-0 items-center justify-between rounded-lg px-4 py-3 text-base font-black text-[#272047] transition hover:bg-violet-50 hover:text-violet-700"
                  onClick={closeMenu}
                >
                  {item.label}
                  {item.hasMenu ? <ChevronDown className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-violet-200" />}
                </a>
              )
            )}
          </nav>

          <div className="shrink-0 border-t border-violet-100 bg-white p-4 shadow-[0_-10px_24px_rgba(45,27,95,0.06)] sm:p-5">
            <BookConsultationButton
              showIcon
              className="flex w-full h-12 items-center justify-center gap-2 rounded-md bg-violet-700 px-5 text-sm font-black text-white shadow-[0_12px_22px_rgba(93,46,202,0.25)] transition hover:bg-violet-800"
              onClick={() => {
                closeMenu();
              }}
            >
              Book Consultation
            </BookConsultationButton>
            <a
              href="tel:+917823838638"
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-5 text-sm font-black text-violet-800 transition hover:bg-violet-50"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </aside>

      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120b2a]/45 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_18px_42px_rgba(45,27,95,0.16)]">
            <button
              type="button"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-800 hover:bg-violet-100"
              onClick={() => setIsConsultationModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <h2 className="mb-4 text-2xl font-black text-[#272047]">Book Consultation</h2>
            <BookConsultationForm />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
