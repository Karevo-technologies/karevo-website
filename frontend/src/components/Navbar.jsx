import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import WaitlistModal from "./WaitlistModal";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToTop = () => {
    // Use a direct sync scroll on mobile; smooth scrolling can be ignored if routing re-renders.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  // Close mobile drawer and scroll to top after navigation.
  const handleNavClick = () => {
    setIsOpen(false);
    setTimeout(() => scrollToTop(), 0);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full py-4 z-50 shadow-md z-99">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}

          <div className="flex items-center">
            <NavLink
              to="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              aria-label="Karevo Home"
            >
              <img
                src={logo}
                alt="Karevo"
                className="h-55 w-auto pt-5 md:h-50"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}

          <div
            className="hidden md:flex items-center space-x-8"
            onClick={scrollToTop}
          >
            <NavLink
              to="/"
              onClick={scrollToTop}
              className={({ isActive }) =>
                `px-3 py-2 text-[#3B00C5] transition-colors font-medium ${
                  isActive ? "text-[#3B00C5] border-b-2 border-[#3B00C5]" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/why-karevo"
              className={({ isActive }) =>
                `px-3 py-2 text-[#3B00C5] hover:text-[#3B00C5] transition-colors font-medium ${
                  isActive ? "text-[#3B00C5] border-b-2 border-[#3B00C5]" : ""
                }`
              }
            >
              Why Karevo
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                `px-3 py-2 text-[#3B00C5] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#3B00C5] border-b-2 border-[#3B00C5]" : ""
                }`
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-2 text-[#3B00C5] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#3B00C5] border-b-2 border-[#3B00C5]" : ""
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-[#3B00C5] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#3B00C5] border-b-2 border-[#3B00C5]" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Waitlist Button */}

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="group btn-sheen relative overflow-hidden h-12 px-8 py-3 text-sm font-semibold text-white bg-[#3B00C5] transform duration-300 hover:scale-105 hover:bg-[#5245E3] rounded-[100px] transition-all shadow-lg hover:shadow-xl"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[200%]"
              />
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3B00C5] transition-all"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-7 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-50 ${
                  isActive ? "text-[#3B00C5]" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/why-karevo"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-50 ${
                  isActive ? "text-[#3B00C5]" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Why Karevo
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-50 ${
                  isActive ? "text-[#3B00C5]" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Features
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-50 ${
                  isActive ? "text-[#3B00C5]" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#3B00C5] hover:text-[#3B00C5] hover:bg-gray-50 ${
                  isActive ? "text-[#3B00C5]" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Contact Us
            </NavLink>

            <div className="pt-4 pb-2 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsOpen(false);

                  setIsWaitlistOpen(true);
                }}
                className="w-full px-4 py-2 text-base font-semibold text-white bg-[#3B00C5] rounded-[100px] hover:bg-[#1e5a7a] transition-all shadow-md"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Waitlist Modal */}

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
