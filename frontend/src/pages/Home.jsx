import React, { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import KarevoID from "../components/KarevoID";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";
import WaitlistModal from "../components/WaitlistModal";

const Home = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <KarevoID />
      {/* <Features /> */}
      
      <CTASection
        title="Ready to Revolutionize Your Healthcare?"
        subtitle="Join thousands of patients and providers already using Karevo"
        onCTAClick={() => setIsWaitlistOpen(true)}
      />
      <SecuritySection />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
};

export default Home;
