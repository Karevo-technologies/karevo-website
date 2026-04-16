import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-3xl font-bold text-[#254c53]"
              onClick={() => setIsOpen(false)}
            >
              Karevo
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-[#254c53] transition-colors font-medium ${
                  isActive ? "text-[#254c53] border-b-2 border-[#254c53]" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/why-karevo"
              className={({ isActive }) =>
                `px-3 py-2 text-[#254c53] hover:text-[#254c53] transition-colors font-medium ${
                  isActive ? "text-[#254c53] border-b-2 border-[#254c53]" : ""
                }`
              }
            >
              Why Karevo
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `px-3 py-2 text-[#254c53] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#254c53] border-b-2 border-[#254c53]" : ""
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-2 text-[#254c53] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#254c53] border-b-2 border-[#254c53]" : ""
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-[#254c53] hover:text-[#1e3a40] transition-colors font-medium ${
                  isActive ? "text-[#254c53] border-b-2 border-[#254c53]" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="h-12 px-6 py-3 text-sm font-medium text-[#254c53] transform duration-300 hover:scale-90 bg-transparent border border-gray-300 rounded-[100px] hover:bg-gray-50 hover:border-gray-400 transition-all">
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="h-12 px-6 py-3 text-sm font-semibold text-white bg-[#254c53] transform duration-300 hover:scale-90 hover:bg-[#1e3a40] rounded-[100px] transition-all shadow-md"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#254c53] transition-all"
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
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-50 ${
                  isActive ? "text-[#254c53]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/why-karevo"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-50 ${
                  isActive ? "text-[#254c53]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Why Karevo
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-50 ${
                  isActive ? "text-[#254c53]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Features
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-50 ${
                  isActive ? "text-[#254c53]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-2xl font-medium rounded-md text-[#254c53] hover:text-[#254c53] hover:bg-gray-50 ${
                  isActive ? "text-[#254c53]" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
            <div className="pt-4 pb-2 border-t border-gray-200">
              <button className="w-full px-4 py-2 text-base font-medium text-[#254c53] bg-transparent border border-gray-300 rounded-[100px] hover:bg-gray-50 hover:border-gray-400 mb-2 transition-all">
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signup");
                }}
                className="w-full px-4 py-2 text-base font-semibold text-white bg-[#254c53] rounded-[100px] hover:bg-[#1e3a40] transition-all shadow-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
