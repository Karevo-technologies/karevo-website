import React from "react";

import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import WorkflowSection from "../components/WorkflowSection";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";

const WhyKarevo = () => {
  const solutions = [];

  const benefits = [
    {
      title: "For Patients",
      points: [
        "Complete control over your health data",
        "Faster appointments and better care",
        "Emergency access to critical information",
        "Reduce duplicate tests and procedures",
      ],
    },
    {
      title: "For Healthcare Providers",
      points: [
        "Access complete patient history instantly",
        "Better clinical decision-making",
        "Reduced administrative burden",
        "Improved patient outcomes",
      ],
    },
    {
      title: "For Healthcare Systems",
      points: [
        "Streamlined operations",
        "Reduced costs through efficiency",
        "Better patient retention",
        "Competitive advantage",
      ],
    },
    {
      title: "For Organizations",
      points: [
        "Unified patient data platform",
        "Interoperability across systems",
        "Regulatory compliance automation",
        "Enhanced data governance",
      ],
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your secure Karevo account in minutes",
    },
    {
      step: "2",
      title: "Upload Records",
      description: "Add your existing medical records from any provider",
    },
    {
      step: "3",
      title: "Share Access",
      description: "Give doctors permission to view your records securely",
    },
    {
      step: "4",
      title: "Monitor Health",
      description: "Track your health journey all in one place",
    },
  ];

  const handleCTAClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-20 bg-white">
      <ChallengeSolutionSection
        title=""
        subtitle=""
        items={solutions}
        variant="solution"
      />

      {/* Desktop/tablet: keep existing grid */}
      <div className="hidden md:block">
        <BenefitsSection
          title="Real Benefits for Everyone"
          subtitle="Designed to benefit patients, providers, healthcare systems, and organizations"
          benefits={benefits}
        />
      </div>

      {/* Mobile: carousel (auto every 3s and loops back to start after first cycle) */}
      <div className="md:hidden">
        <BenefitsCarousel
          title="Real Benefits for Everyone"
          subtitle="Designed to benefit patients, providers, healthcare systems, and organizations"
          benefits={benefits}
        />
      </div>

      <WorkflowSection
        title="How Karevo Works"
        subtitle="Simple, intuitive process to get started in minutes"
        workflow={workflow}
      />

      <SecuritySection />

      <CTASection
        title="Ready to Take Control of Your Health Data?"
        subtitle="Join thousands of patients and healthcare providers who trust Karevo"
        onCTAClick={handleCTAClick}
      />
    </div>
  );
};

export default WhyKarevo;
