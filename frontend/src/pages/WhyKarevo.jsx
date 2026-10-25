import React from "react";

import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";

const WhyKarevo = () => {
  return (
    <div className="min-h-screen py-20 bg-canvas">
      <ChallengeSolutionSection />

      <BenefitsCarousel />

      <CTASection
        title="Ready to Take Control of Your Health Data?"
        subtitle="Join thousands of patients and healthcare providers who trust Karevo"
      />

      <SecuritySection />
    </div>
  );
};

export default WhyKarevo;
