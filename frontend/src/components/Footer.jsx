import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import BookConsultationButton from "./BookConsultationButton";
import logo from "../images/manovaidya-logo (2).png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blogs", path: "/blog" },
  { label: "Conditions", path: "/child-health-care" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Best Ayurvedic Doctor", path: "/about/doctor" },
];

const programs = [
  { label: "Child Health Care", path: "/child-health-care" },
  { label: "Teen Mental Wellness", path: "/teen-mental-wellness" },
  { label: "Adult Mental Health Care", path: "/adult-mental-wellness" },
  { label: "Senior Mind & Memory Care", path: "/senior-mind-memory-care" },
  { label: "Women Mental Health Concerns", path: "/women-health-care" },
  { label: "Mind & Body Concerns", path: "/mind-body-wellbeing" },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M14 8.5V6.8c0-.8.2-1.3 1.3-1.3h1.5V2.7c-.7-.1-1.5-.2-2.3-.2-2.8 0-4.7 1.7-4.7 4.8v1.2H6.7v3.2h3.1V21h3.8v-9.3h3.1l.5-3.2H14z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="16.8" cy="7.2" r="0.8" className="fill-current stroke-0" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.4V8.6l5.8 3.4L10 15.4z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M6.8 8.8H3.5V20h3.3V8.8zM5.1 3.4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.5 13.7c0-3.1-1.7-5.1-4.4-5.1a3.8 3.8 0 0 0-3.4 1.9V8.8H9.5V20h3.3v-5.8c0-1.6.8-2.7 2.2-2.7 1.3 0 2.1.9 2.1 2.7V20h3.4v-6.3z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", Icon: FacebookIcon, href: "https://www.facebook.com/search/top?q=manovaidya" },
  { label: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/explore/search/keyword/?q=manovaidya" },
  { label: "YouTube", Icon: YouTubeIcon, href: "https://www.youtube.com/results?search_query=manovaidya" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/search/results/all/?keywords=manovaidya" },
];

const mapHref = "https://www.google.com/maps/search/?api=1&query=Manovaidya%20Clinic%20VS%20Plaza%20Near%20Vigyan%20Hospital%20Atta%20Market%20Sector%2022%20Noida";

function Footer() {
  return (
    <React.Fragment>
    <footer className="relative overflow-hidden border-t border-[#8B43BA]/15 bg-[#fbf7ff] text-[#21133f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(139,67,186,0.12),transparent_23%),radial-gradient(circle_at_88%_70%,rgba(139,67,186,0.1),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.82fr_1.15fr_1.5fr_1.2fr] lg:items-start lg:gap-10 lg:py-12">
        <div>
          <img
            src={logo}
            alt="ManoVaidya"
            className="h-auto w-[190px] object-contain object-left"
          />
          <p className="mt-5 max-w-[270px] text-sm font-bold leading-6 text-[#4c3a6b]">
            Healing minds. Enriching lives.
            <span className="block">Guided by Ayurveda.</span>
            <span className="block">Powered by Science.</span>
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B43BA] text-white shadow-[0_10px_22px_rgba(139,67,186,0.22)] transition hover:bg-[#7835a4]"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-bold text-[#4c3a6b]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="transition hover:text-[#8B43BA]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Our Programs</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-bold leading-5 text-[#4c3a6b]">
            {programs.map((program) => (
              <li key={program.label}>
                <Link to={program.path} className="transition hover:text-[#8B43BA]">
                  {program.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Contact Us</h3>
          <div className="mt-4 space-y-4 text-sm font-bold leading-6 text-[#4c3a6b]">
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 transition hover:text-[#8B43BA]"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8B43BA]" />
              <span>
                Manovaidya Clinic
                <span className="block">VS Plaza, Near Vigyan Hospital,</span>
                <span className="block">Atta Market, Pocket L, Sector 22,</span>
                <span className="block">Noida, Uttar Pradesh 201301</span>
              </span>
            </a>

            <a href="tel:+917823894080" className="flex items-center gap-4 transition hover:text-[#8B43BA]">
              <Phone className="h-5 w-5 text-[#8B43BA]" />
              +91 7823894080
            </a>

            <a href="mailto:manovaidya@gmail.com" className="flex items-center gap-4 transition hover:text-[#8B43BA]">
              <Mail className="h-5 w-5 text-[#8B43BA]" />
              manovaidya@gmail.com
            </a>

            <span className="inline-flex rounded-md border border-[#8B43BA]/20 bg-white px-4 py-2 text-xs font-black text-[#8B43BA] shadow-sm">
              Across India - Online Consultations Available
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Clinic Timings</h3>
          <p className="mt-4 text-sm font-bold leading-6 text-[#4c3a6b]">
            Mon - Sat: 10:00 AM - 7:00 PM
            <span className="block">(Sunday Closed)</span>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <BookConsultationButton
              showIcon
              className="inline-flex h-12 items-center gap-3 rounded-md bg-[#8B43BA] px-6 text-sm font-black text-white shadow-[0_14px_28px_rgba(139,67,186,0.28)] transition hover:bg-[#7835a4]"
            >
              Book Consultation
            </BookConsultationButton>

            {/* <a
              href="https://wa.me/917823894080"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_14px_28px_rgba(34,197,94,0.34)] transition hover:bg-[#16a34a]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-8 w-8" />
            </a> */}
          </div>

          <div className="mt-5 flex items-center gap-3 text-xs font-bold text-[#6a5983]">
            <span className="flex h-5 w-7 items-center justify-center rounded bg-[#8B43BA] text-[10px] font-black text-white">
              yt
            </span>
            ManoVaidya wellness updates
          </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
  );
}

export default Footer;
