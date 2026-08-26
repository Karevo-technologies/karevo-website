import React, { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = isHome && !scrolled && !isOpen;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const desktopLinkClass = ({ isActive }) =>
    `px-3 py-2 transition-colors font-medium ${
      overlay
        ? isActive
          ? "text-white border-b-2 border-white"
          : "text-white/90 hover:text-white"
        : isActive
          ? "text-primary border-b-2 border-primary"
          : "text-ink hover:text-primary"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-2xl font-medium rounded-md hover:bg-paper ${
      isActive ? "text-primary" : "text-ink"
    }`;

  return (
    <nav
      className={`fixed w-full py-4 z-99 transition-colors duration-300 ${
        overlay ? "bg-transparent border-b border-transparent" : "bg-canvas border-b border-hairline"
      }`}
    >
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
                className={`h-55 w-auto pt-5 md:h-50 transition-[filter] duration-300 ${
                  overlay ? "brightness-0 invert" : ""
                }`}
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}

          <div
            className="hidden md:flex items-center space-x-8"
            onClick={scrollToTop}
          >
            <NavLink to="/" onClick={scrollToTop} className={desktopLinkClass}>
              Home
            </NavLink>

            <NavLink to="/why-karevo" className={desktopLinkClass}>
              Why Karevo
            </NavLink>

            <NavLink to="/features" className={desktopLinkClass}>
              Features
            </NavLink>

            <NavLink to="/faq" className={desktopLinkClass}>
              FAQ
            </NavLink>

            <NavLink to="/contact" className={desktopLinkClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Waitlist Button */}

          <div className="hidden md:flex items-center">
            <NavLink
              to="/waitlist"
              className={`h-12 px-8 py-3 flex items-center text-sm font-semibold rounded-full transition-colors duration-300 ${
                overlay
                  ? "text-white bg-midnight hover:bg-midnight/90"
                  : "text-white bg-primary hover:bg-primary-bright"
              }`}
            >
              Join Waitlist
            </NavLink>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset ${
                overlay
                  ? "text-white hover:bg-white/10 focus:ring-white/60"
                  : "text-primary hover:bg-paper focus:ring-primary"
              }`}
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
        <div className="md:hidden bg-canvas border-t border-hairline">
          <div className="px-2 pt-7 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/why-karevo"
              className={mobileLinkClass}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Why Karevo
            </NavLink>

            <NavLink
              to="/features"
              className={mobileLinkClass}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Features
            </NavLink>

            <NavLink
              to="/faq"
              className={mobileLinkClass}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className={mobileLinkClass}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToTop(), 0);
              }}
            >
              Contact Us
            </NavLink>

            <div className="pt-4 pb-2 border-t border-hairline">
              <NavLink
                to="/waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-bright transition-colors"
              >
                Join Waitlist
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
