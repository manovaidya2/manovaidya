export const SITE_URL = "https://manovaidya.org";

export const canonicalPaths = [
  "/",
  "/autism-treatment-india",
  "/child-health-care/adhd-child",
  "/speech-delay-support-india",
  "/learning-attention-difficulties-india",
  "/behavioural-concerns-children-india",
  "/child-development-support-india",
  "/teen-stress-anxiety-support",
  "/teen-depression-support",
  "/exam-performance-pressure",
  "/teen-confidence-emotional-wellbeing",
  "/teen-screen-addiction-support",
  "/parent-teen-relationship-support",
  "/anxiety-support-india",
  "/adult-depression-support",
  "/stress-burnout-support-india",
  "/sleep-disorders-insomnia-support-india",
  "/low-self-esteem-confidence-support-india",
  "/relationship-challenges-support-india",
  "/addiction-unhealthy-habits-support-india",
  "/memory-loss-forgetfulness-support-seniors-india/",
  "/confusion-disorientation-support-seniors-india/",
  "/mild-cognitive-impairment-mci-support-seniors-india/",
  "/dementia-alzheimers-care-support-seniors-india/",
  "/senior-depression-support-india/",
  "/sleep-disorders-seniors-support-india/",
  "/women-stress-management-mind-body-balance-india/",
  "/women-depression-low-mood-support-india/",
  "/women-hormonal-pms-pmdd-support-india/",
  "/women-self-esteem-body-image-support-india/",
  "/women-relationship-emotional-wellbeing-support-india/",
  "/women-pregnancy-postpartum-motherhood-mental-health-india/",
  "/women-life-transitions-career-pressure-support-india/",
  "/stress-and-high-blood-pressure/",
  "/stress-ibs-support-india/",
  "/stress-and-fatigue/",
  "/stress-and-digestive-health/",
  "/stress-and-acidity/",
  "/stress-and-migraine/",
  "/stress-and-headaches/",
  "/stress-and-thyroid/",
  "/child-health-care",
  "/teen-mental-wellness",
  "/adult-mental-wellness",
  "/senior-mind-memory-care",
  "/women-health-care",
  "/mind-body-wellbeing",
  "/child-development-care-india/",
  "/teen-mental-health-care-india",
  "/adult-mental-health-care-india",
  "/senior-mental-health-care-india",
  "/women-mental-health-care-india",
  "/mind-body-health-care-india",
  "/about/doctor",
  "/about/manovaidya",
  "/about/approach",
  "/success-stories",
  "/success-story-videos",
  "/blog",
  "/case-studies",
  "/media-coverage",
  "/video-library",
  "/privacy-policy",
  "/contact-us",
];

export const canonicalPathAliases = {
  "/about": "/about/doctor",
  "/adult-emotional-wellbeing-support-india": "/adult-mental-health-care-india",
  "/adult-mental-health-care": "/adult-mental-health-care-india",
  "/anxiety-treatment-india": "/anxiety-support-india",
  "/depression-treatment-india": "/adult-depression-support",
  "/senior-mental-health-care": "/senior-mental-health-care-india",
  "/senior-sleep-disorders-support-india": "/sleep-disorders-seniors-support-india/",
  "/teen-emotional-wellbeing-support-india": "/teen-mental-health-care-india",
  "/teen-mental-wellness-india": "/teen-mental-wellness",
};

export const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
};

const canonicalUrlsByPath = canonicalPaths.reduce((urls, canonicalPath) => {
  urls[normalizePath(canonicalPath)] = `${SITE_URL}${canonicalPath}`;
  return urls;
}, {});

Object.entries(canonicalPathAliases).forEach(([aliasPath, canonicalPath]) => {
  canonicalUrlsByPath[normalizePath(aliasPath)] =
    canonicalUrlsByPath[normalizePath(canonicalPath)] || `${SITE_URL}${canonicalPath}`;
});

export const getCanonicalUrl = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  return canonicalUrlsByPath[normalizedPath] || `${SITE_URL}${normalizedPath}`;
};
