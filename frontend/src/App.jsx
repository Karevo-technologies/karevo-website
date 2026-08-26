import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import CookiePolicy from "./components/CookiePolicy";
import Home from "./pages/Home";
import WhyKarevo from "./pages/WhyKarevo";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Privacypolicy from "./pages/Privacypolicy";
import TermsofService from "./pages/TermsofService";
import Waitlist from "./pages/Waitlist";
import NotFound from "./pages/NotFound";

// Admin Section Imports
import AdminLogin from "./admin/login/login"; // 👈 Added your login page import
import WaitlistDashboard from "./admin/WaitlistDashboard";

// Standalone pages that shouldn't carry the site's Navbar/Footer chrome.
const NO_CHROME_ROUTES = ["/waitlist"];

const AppContent = () => {
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);
  const location = useLocation();
  const hideChrome = NO_CHROME_ROUTES.includes(location.pathname);

  return (
    <>
      {!hideChrome && <Navbar />}

      <Routes>
        {/* Public Marketing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/why-karevo" element={<WhyKarevo />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/waitlist" element={<Waitlist />} />
        {/* Secure Admin Control Gateways */}
        <Route path="/admin/login" element={<AdminLogin />} />{" "}
        {/* 👈 Added login route */}
        <Route path="/admin" element={<WaitlistDashboard />} />{" "}
        {/* 👈 Changed path to /admin to match middleware */}
        {/* 2. Wildcard Catch-All Route (MUST BE AT THE VERY BOTTOM) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideChrome && (
        <Footer onCookiePolicyClick={() => setIsCookiePolicyOpen(true)} />
      )}

      <CookiePolicy
        isOpen={isCookiePolicyOpen}
        onCookiePolicyClose={() => setIsCookiePolicyOpen(false)}
      />

      {!hideChrome && <ScrollTopButton />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
