import React from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Footer = ({ onCookiePolicyClick }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Why Karevo", path: "/why-karevo" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms and conditions", path: "#" },
    { name: "Privacy policy", path: "#" },
  ];

  const bottomLegalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "#", isCookie: true },
  ];

  const contactInfo = [
    {
      icon: Phone,
      value: "+234 807 604 1327",
      href: "tel:+2348076041327",
    },
    {
      icon: Phone,
      value: "+234 707 032 8209",
      href: "tel:+23470328209",
    },
    {
      icon: MapPin,
      value: "Ogbomoso, Oyo State",
      href: "#",
    },
  ];

  const groupLink =
    "https://chat.whatsapp.com/JXtPVDJgNI7EalIMnTmbX9?s=cl&p=i&ilr=0";

  return (
    <footer className="bg-midnight text-white">
      {/* Subtle top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Community band */}
      <div className="border-b border-white/10 px-6 sm:px-8 lg:px-12 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
          Stay in the loop
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Join the Karevo community
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-7 leading-relaxed">
          Get early updates, behind-the-scenes progress, and a direct line
          to the team on WhatsApp.
        </p>
        <a
          href={groupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-bright transition-colors duration-300 px-6 py-3.5 rounded-full text-sm font-semibold"
        >
          Join on WhatsApp
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Link columns */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <NavLink
              to="/"
              aria-label="Karevo Home"
              className="block h-8 overflow-hidden mb-5"
            >
              <img
                src={logo}
                alt="Karevo"
                className="h-20 w-auto -mt-6 brightness-0 invert"
              />
            </NavLink>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Secure, portable medical records that empower patients and
              streamline healthcare delivery across Nigeria.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5">
              Product
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + waitlist */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5">
              Contact us
            </p>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.value}>
                    <a
                      href={info.href}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Icon
                        size={14}
                        className="text-primary-bright flex-shrink-0"
                      />
                      {info.value}
                    </a>
                  </li>
                );
              })}
            </ul>

            <NavLink
              to="/waitlist"
              className="inline-flex items-center gap-2 bg-white text-midnight hover:bg-white/90 transition-colors duration-300 px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Join Waitlist
              <ArrowUpRight size={14} />
            </NavLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white">
            © {currentYear} Karevo. All rights reserved.
          </span>

          {/* Bottom legal links */}
          <div className="flex items-center gap-5">
            {bottomLegalLinks.map((link, i) => (
              <React.Fragment key={link.name}>
                {link.isCookie ? (
                  <button
                    onClick={onCookiePolicyClick}
                    className="text-xs text-white transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.path}
                    className="text-xs text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )}
                {i < bottomLegalLinks.length - 1 && (
                  <span className="text-white/15 text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* Decorative brand watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none h-24 sm:h-32 overflow-hidden flex justify-center"
      >
        <span className="text-[8rem] sm:text-[11rem] font-black text-white/5 leading-none tracking-tight">
          KAREVO
        </span>
      </div>
    </footer>
  );
};

export default Footer;
