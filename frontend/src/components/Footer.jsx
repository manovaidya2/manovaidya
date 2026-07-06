import React from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import BookConsultationButton from "./BookConsultationButton";
import logo from "../images/manovaidya-logo (2).png";

const quickLinks = [
  "Home",
  "About Us",
  "Blogs",
  "Conditions",
  "Case Studies",
  "Best Ayurvedic Doctor",
];

const programs = [
  "Child Health Care",
  "Teen Mental Wellness",
  "Adult Mental Health Care",
  "Senior Mind & Memory Care",
  "Women Mental Health Concerns",
  "Mind & Body Concerns",
];

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
            {["f", "ig", "yt"].map((item) => (
              <a
                key={item}
                href="#social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B43BA] text-xs font-black text-white shadow-[0_10px_22px_rgba(139,67,186,0.22)] transition hover:bg-[#7835a4]"
                aria-label={item}
              >
                {item}
              </a>
            ))}
            <a
              href="#linkedin"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B43BA] text-white shadow-[0_10px_22px_rgba(139,67,186,0.22)] transition hover:bg-[#7835a4]"
              aria-label="LinkedIn"
            >
              <span className="text-xs font-black">in</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-bold text-[#4c3a6b]">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[#8B43BA]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Our Programs</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-bold leading-5 text-[#4c3a6b]">
            {programs.map((program) => (
              <li key={program}>
                <a href="#programs" className="transition hover:text-[#8B43BA]">
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-black text-[#251553]">Contact Us</h3>
          <div className="mt-4 space-y-4 text-sm font-bold leading-6 text-[#4c3a6b]">
            <p className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8B43BA]" />
              <span>
                Manovaidya Clinic
                <span className="block">VS Plaza, Near Vigyan Hospital,</span>
                <span className="block">Atta Market, Pocket L, Sector 22,</span>
                <span className="block">Noida, Uttar Pradesh 201301</span>
              </span>
            </p>

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
