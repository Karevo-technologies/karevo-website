import React, { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import WaitlistModal from "../components/WaitlistModal";

const Home = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "100+", label: "Pharmacies" },
    { number: "50+", label: "Providers" },
  ];

  return (
    <>
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Features />
      <StatsSection stats={stats} />
      <TestimonialsSection />
      <CTASection
        title="Ready to Revolutionize Your Healthcare?"
        subtitle="Join thousands of patients and providers already using Karevo"
        onCTAClick={() => setIsWaitlistOpen(true)}
      />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
};

export default Home;
