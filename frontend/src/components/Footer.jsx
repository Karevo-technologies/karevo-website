import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = ({ onWaitlistClick, onCookiePolicyClick }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Why Karevo", path: "/why-karevo" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const companyLinks = [
    { name: "Terms and conditions", path: "#" },
    { name: "Privacy policy", path: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Cookie Policy", path: "#" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@karevo.health",
      href: "mailto:contact@karevo.health",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 805-235-0516",
      href: "tel:+2341234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ];

  const socialLinks = [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <NavLink
                to="/"
                aria-label="Karevo Home"
                className="inline-flex items-center"
              >
                <img src={logo} alt="Karevo" className="h-14 md:h-16 w-auto" />
              </NavLink>
              <p className="text-gray-600 text-sm leading-relaxed font-raleway mb-6">
                Secure, portable medical records that empower patients and
                streamline healthcare delivery.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-[#3B00C5] transition-colors duration-300 font-raleway"
                  title={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg uppercase font-bold text-gray-900 mb-6 font-raleway">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-600 hover:text-[#3B00C5] transition-colors duration-300 font-raleway text-sm font-medium"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-lg uppercase font-bold text-gray-900 mb-6 font-raleway">
              Legal
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-[#3B00C5] transition-colors duration-300 font-raleway text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg uppercase font-bold text-gray-900 mb-6 font-raleway">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3 group"
                    >
                      <Icon className="h-5 w-5 text-[#3B00C5] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-raleway">
                          {info.label}
                        </span>
                        <span className="text-sm text-gray-700 font-raleway font-medium group-hover:text-[#3B00C5] transition-colors">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          {/* <div className="md:col-span-1 bg-gradient-to-br from-[#3B00C5]/5 to-[#3B00C5]/10 rounded-2xl p-6 border border-[#3B00C5]/20">
            <h4 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 mb-4 font-raleway leading-relaxed">
              Be the first to know about Karevo launches and healthcare
              innovations.
            </p>
            <button
              onClick={onWaitlistClick}
              className="px-4 py-2.5 bg-[#3B00C5] hover:bg-[#5245E3] text-white rounded-lg transition-all duration-300 text-sm font-semibold font-geist"
              type="button"
            >
              Join Waitlist
            </button>
          </div> */}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm text-gray-600 font-raleway flex items-center gap-1">
            <span>© {currentYear} Karevo. All rights reserved.</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                {link.name === "Cookie Policy" ? (
                  <button
                    onClick={onCookiePolicyClick}
                    className="text-sm text-gray-600 hover:text-[#3B00C5] transition-colors duration-300 font-raleway font-medium bg-none border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.path}
                    className="text-sm text-gray-600 hover:text-[#3B00C5] transition-colors duration-300 font-raleway font-medium"
                  >
                    {link.name}
                  </a>
                )}
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-300">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradient Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B00C5]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-32 left-0 w-72 h-72 bg-[#3B00C5]/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
