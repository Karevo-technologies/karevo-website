import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import CookiePolicy from "./components/CookiePolicy";
import Home from "./pages/Home";
import WhyKarevo from "./pages/WhyKarevo";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Privacypolicy from "./pages/Privacypolicy";
import TermsofService from "./pages/TermsofService";

// Admin Section Imports
import AdminLogin from "./admin/login/login"; // 👈 Added your login page import
import WaitlistDashboard from "./admin/WaitlistDashboard";

const App = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

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

        {/* Secure Admin Control Gateways */}
        <Route path="/admin/login" element={<AdminLogin />} /> {/* 👈 Added login route */}
        <Route path="/admin" element={<WaitlistDashboard />} /> {/* 👈 Changed path to /admin to match middleware */}
      </Routes>

      <Footer
        onWaitlistClick={() => setIsWaitlistOpen(true)}
        onCookiePolicyClick={() => setIsCookiePolicyOpen(true)}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      <CookiePolicy
        isCookiePolicyOpen={isCookiePolicyOpen}
        onCookiePolicyClose={setIsCookiePolicyOpen}
      />
    </BrowserRouter>
  );
};

export default App;