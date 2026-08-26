import React from "react";
import { useNavigate } from "react-router-dom";
import { HeartPulse, HeartHandshake, Stethoscope } from "lucide-react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import KarevoID from "../components/KarevoID";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";
import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import ProblemSection from "../components/ProblemSection";

const people = [
  {
    icon: HeartPulse,
    role: "Patient",
    name: "Chidinma, 27",
    subtitle: "Manages a chronic condition",
    bio: "Sees three different specialists and struggles to keep her records straight between them.",
    pronoun: "her",
    gift: "One profile with her full history in one place. Instant, secure sharing with any new provider. Reminders for refills and follow-ups.",
  },
  {
    icon: HeartHandshake,
    role: "Caregiver",
    name: "Uche, 34",
    subtitle: "Caring for an aging parent",
    bio: "Coordinates his father's appointments and medications remotely, often finding out about issues after the fact.",
    pronoun: "him",
    gift: "Authorized visibility into his parent's care record. Real-time updates after visits or prescription changes. One dashboard instead of five phone calls.",
  },
  {
    icon: Stethoscope,
    role: "Provider",
    name: "Dr. Okafor",
    subtitle: "Runs a small clinic",
    bio: "Spends the first ten minutes of every new-patient visit re-collecting history that likely exists somewhere else.",
    pronoun: "them",
    gift: "Instant access to a verified, portable patient history. Fewer repeat diagnostics from missing information. A clean digital record system without a full EMR overhaul.",
  },
];

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
      <BenefitsSection
        eyebrow="Who it's for"
        title="Built for three kinds of people."
        subtitle="Different needs, same simple idea: your history should follow you. Here's what Karevo looks like for each of them."
        people={people}
      />
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
