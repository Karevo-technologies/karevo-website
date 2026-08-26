import React from "react";
import { useNavigate } from "react-router-dom";
import { HeartPulse, HeartHandshake, Stethoscope } from "lucide-react";

import ChallengeSolutionSection from "../components/ChallengeSolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import BenefitsCarousel from "../components/BenefitsCarousel";
import WorkflowSection from "../components/WorkflowSection";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";

const WhyKarevo = () => {
  const navigate = useNavigate();

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
    navigate("/waitlist");
  };

  return (
    <div className="min-h-screen py-20 bg-canvas">
      <ChallengeSolutionSection />

      <BenefitsSection
        eyebrow="Who it's for"
        title="Built for three kinds of people."
        subtitle="Different needs, same simple idea: your history should follow you. Here's what Karevo looks like for each of them."
        people={people}
      />

      <BenefitsCarousel />

      <WorkflowSection
        title="How Karevo Works"
        subtitle="Simple, intuitive process to get started in minutes"
        workflow={workflow}
      />

      <CTASection
        title="Ready to Take Control of Your Health Data?"
        subtitle="Join thousands of patients and healthcare providers who trust Karevo"
        onCTAClick={handleCTAClick}
      />

      <SecuritySection />      
    </div>
  );
};

export default WhyKarevo;
