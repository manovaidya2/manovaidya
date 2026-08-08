import React from "react";
import { Mail } from "lucide-react";
import { useLocation } from "react-router-dom";

const shareEnabledPaths = new Set([
  "/mind-body-health-care-india",
  "/stress-ibs-support-india",
  "/stress-and-acidity",
  "/stress-and-digestive-health",
  "/stress-and-migraine",
  "/stress-and-headaches",
  "/stress-and-fatigue",
  "/stress-and-thyroid",
  "/stress-and-high-blood-pressure",
  "/senior-mental-health-care-india",
  "/senior-mental-health-care",
  "/memory-loss-forgetfulness-support-seniors-india",
  "/confusion-disorientation-support-seniors-india",
  "/mild-cognitive-impairment-mci-support-seniors-india",
  "/dementia-alzheimers-care-support-seniors-india",
  "/senior-depression-support-india",
  "/sleep-disorders-seniors-support-india",
  "/women-stress-management-mind-body-balance-india",
  "/women-depression-low-mood-support-india",
  "/women-hormonal-pms-pmdd-support-india",
  "/women-self-esteem-body-image-support-india",
  "/women-relationship-emotional-wellbeing-support-india",
  "/women-pregnancy-postpartum-motherhood-mental-health-india",
  "/women-life-transitions-career-pressure-support-india",
  "/adult-mental-health-care-india",
  "/adult-emotional-wellbeing-support-india",
  "/adult-mental-health-care",
  "/anxiety-support-india",
  "/anxiety-treatment-india",
  "/adult-depression-support",
  "/depression-treatment-india",
  "/stress-burnout-support-india",
  "/sleep-disorders-insomnia-support-india",
  "/low-self-esteem-confidence-support-india",
  "/relationship-challenges-support-india",
  "/addiction-unhealthy-habits-support-india",
  "/teen-mental-health-care-india",
  "/teen-emotional-wellbeing-support-india",
  "/exam-performance-pressure",
  "/teen-confidence-emotional-wellbeing",
  "/teen-screen-addiction-support",
  "/parent-teen-relationship-support",
  "/child-development-care-india",
]);

function normalizePath(pathname) {
  if (pathname.length <= 1) return pathname;
  return pathname.replace(/\/+$/, "");
}

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M14 8.5V6.8c0-.8.2-1.3 1.3-1.3h1.5V2.7c-.7-.1-1.5-.2-2.3-.2-2.8 0-4.7 1.7-4.7 4.8v1.2H6.7v3.2h3.1V21h3.8v-9.3h3.1l.5-3.2H14z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M13.8 10.6 21.1 2h-1.7l-6.3 7.4L8 2H2.2l7.6 11.1L2.2 22h1.7l6.7-7.8 5.4 7.8h5.8l-8-11.4Zm-2.4 2.8-.8-1.1L4.5 3.3h2.7l5 7.4.8 1.1 6.5 9.4h-2.7l-5.4-7.8Z" />
  </svg>
);

const FlipboardIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M3 3h18v6h-6v6H9v6H3V3Zm6 6h6V3H9v6Zm0 0H3v6h6V9Zm6 0v6h6V9h-6Z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M12.2 2C6.7 2 3 5.6 3 10.3c0 3.1 1.7 5 3.4 5 .6 0 .9-1.6.9-2.1 0-.6-1.4-1.7-1.4-3.9 0-3.2 2.4-5.4 5.6-5.4 2.7 0 4.8 1.6 4.8 4.4 0 2.1-.9 6.1-3.6 6.1-1 0-1.8-.7-1.8-1.7 0-1.5 1-2.9 1-4.4 0-2.6-3.7-2.1-3.7 1 0 .7.1 1.4.4 2L7 18.1c-.5 2.1.1 4.6.1 4.8 0 .1.1.1.2.1.3-.4 3.2-3.8 3.8-5.8.2-.6.9-3.4.9-3.4.5.9 1.8 1.7 3.2 1.7 4.2 0 5.8-4.1 5.8-7.2C21 4.5 17.4 2 12.2 2Z" />
  </svg>
);

function FloatingShareBar() {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);

  if (!shareEnabledPaths.has(normalizedPath)) return null;

  const pageUrl = `https://www.manovaidya.com${normalizedPath}`;
  const pageTitle = typeof document === "undefined" ? "Manovaidya" : document.title || "Manovaidya";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);
  const links = [
    { title: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, className: "bg-[#3d5b9b] hover:bg-[#334e86]", Icon: FacebookIcon },
    { title: "Share on X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, className: "bg-[#050505] hover:bg-[#1d1d1d]", Icon: XIcon },
    { title: "Share on Flipboard", href: `https://share.flipboard.com/bookmarklet/popout?v=2&url=${encodedUrl}&title=${encodedTitle}`, className: "bg-[#f4212e] hover:bg-[#dc1c28]", Icon: FlipboardIcon },
    { title: "Share on Pinterest", href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`, className: "bg-[#d1052b] hover:bg-[#b90426]", Icon: PinterestIcon },
    { title: "Share by Email", href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, className: "bg-[#df178a] hover:bg-[#c9147c]", Icon: () => <Mail className="h-[12px] w-[12px]" strokeWidth={2.15} /> },
  ];

  return (
    <div className="fixed left-0 top-[140px] z-40 hidden w-8 flex-col shadow-[0_8px_16px_rgba(15,23,42,0.14)] sm:flex">
      {links.map(({ href, title, className, Icon }) => (
        <a
          key={title}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={title}
          className={`flex h-8 w-8 items-center justify-center border-b border-white/30 text-white transition duration-200 hover:brightness-110 ${className}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default FloatingShareBar;
