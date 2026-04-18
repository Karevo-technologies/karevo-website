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
import SignUp from "./pages/SignUp";

const App = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-karevo" element={<WhyKarevo />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
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
