import React, { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

import logo from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Why Karevo", to: "/why-karevo" },
  { label: "Features", to: "/features" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

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

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlay = isHome && !scrolled && !isOpen;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => scrollToTop(), 0);
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
    `text-3xl font-semibold py-3 transition-colors ${
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
                className={`h-55 w-auto pt-5 md:h-50 transition-[filter] duration-300 dark:brightness-0 dark:invert ${
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
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={scrollToTop}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
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
              aria-label="Toggle menu"
              className={`relative z-50 w-11 h-11 grid place-items-center rounded-full transition-colors duration-300 ${
                overlay
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-paper text-ink dark:text-white hover:bg-hairline"
              }`}
            >
              <HugeiconsIcon icon={isOpen ? Cancel01Icon : Menu01Icon} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-canvas flex flex-col transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="px-8 pb-12">
          <NavLink
            to="/waitlist"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white text-base font-semibold rounded-full px-6 h-[52px] hover:bg-primary-bright transition-colors duration-300"
          >
            Join Waitlist
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
