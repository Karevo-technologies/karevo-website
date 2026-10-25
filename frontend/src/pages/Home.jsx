import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import KarevoID from "../components/KarevoID";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";
import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import ProblemSection from "../components/ProblemSection";

const roleOptions = [
  { key: "user", label: "I'm a patient or caregiver" },
  { key: "hospital", label: "I'm a provider" },
];

const Home = () => {
  const navigate = useNavigate();

  const openWaitlist = (role = "") => {
    navigate(role ? `/waitlist?role=${role}` : "/waitlist");
  };

  return (
    <>
      <Hero onOpenWaitlist={() => openWaitlist()} />
      <ProblemSection />
      <ChallengeSolutionSection />
      <KarevoID />
      <Features />
      <BenefitsCarousel />

      <CTASection
        title="Your health records deserve a safer home."
        subtitle="Be among the first to take full control of your medical history — free during early access."
        onCTAClick={() => openWaitlist()}
        roles={roleOptions}
        onRoleClick={(role) => openWaitlist(role)}
      />
      <SecuritySection />
    </>
  );
};

export default Home;
