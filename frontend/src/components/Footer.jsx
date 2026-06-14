import React from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = ({ onWaitlistClick, onCookiePolicyClick }) => {
  void onWaitlistClick;
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
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Cookie Policy", path: "#", isCookie: true },
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: "contact@karevo.health",
      href: "mailto:contact@karevo.health",
    },
    {
      icon: Phone,
      value: "+234 807 604 1327",
      href: "tel:+2348076041327",
    },
    {
      icon: Phone,
      value: "+234 805 235 0516",
      href: "tel:+2348052350516",
    },
    {
      icon: MapPin,
      value: "Lagos, Nigeria",
      href: "#",
    },
  ];

  const socialLinks = [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ];

  const groupLink =
    "https://chat.whatsapp.com/JXtPVDJgNI7EalIMnTmbX9?s=cl&p=i&ilr=0";

  return (
    <footer className="bg-[#0A0118] text-white relative overflow-hidden">

      {/* Subtle top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3B00C5] to-transparent" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Upper section — brand + CTA strip */}
        <div className="pt-16 pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-sm">
            <NavLink to="/" aria-label="Karevo Home" className="inline-block mb-5">
              <img src={logo} alt="Karevo" className="h-50 w-auto brightness-0 invert" />
            </NavLink>
            <p className="text-sm text-white/50 leading-relaxed font-raleway">
              Secure, portable medical records that empower patients and streamline healthcare delivery across Nigeria.
            </p>
          </div>

          {/* Community CTA */}
          <a
            href={groupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#3B00C5]/60 bg-[#3B00C5]/10 hover:bg-[#3B00C5] transition-all duration-300 text-sm font-semibold font-raleway text-white self-start md:self-auto"
          >
            Join the Karevo community
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Link columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5 font-raleway">
              Navigation
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-raleway"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5 font-raleway">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-raleway"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[10px] tracking-widest uppercase text-white/35 font-semibold mb-5 font-raleway">
              Contact
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.value}>
                    <a
                      href={info.href}
                      className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 font-raleway"
                    >
                      <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#3B00C5]/50 group-hover:bg-[#3B00C5]/10 transition-all duration-200">
                        <Icon size={14} className="text-[#7B5FE8]" />
                      </span>
                      {info.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright + socials */}
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-xs text-white/30 font-raleway">
              © {currentYear} Karevo. All rights reserved.
            </span>
            <span className="hidden sm:block h-3 w-px bg-white/15" />
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/35 hover:text-white transition-colors duration-200 font-raleway"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom legal links */}
          <div className="flex items-center gap-5">
            {bottomLegalLinks.map((link, i) => (
              <React.Fragment key={link.name}>
                {link.isCookie ? (
                  <button
                    onClick={onCookiePolicyClick}
                    className="text-xs text-white/35 hover:text-white transition-colors duration-200 font-raleway bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.path}
                    className="text-xs text-white/35 hover:text-white transition-colors duration-200 font-raleway"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;