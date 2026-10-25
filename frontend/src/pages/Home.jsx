import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import KarevoID from "../components/KarevoID";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";
import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import ProblemSection from "../components/ProblemSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ChallengeSolutionSection />
      <KarevoID />
      <Features />
      <BenefitsCarousel />

      <CTASection
        title="Your health records deserve a safer home."
        subtitle="Create your account and take full control of your medical history in minutes."
      />
      <SecuritySection />
    </>
  );
};

export default Home;
