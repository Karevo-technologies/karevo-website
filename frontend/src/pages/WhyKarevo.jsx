import React from "react";
import {
  Lock,
  Zap,
  Users,
  Shield,
  FileText,
  AlertTriangle,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import StatsSection from "../components/StatsSection";
import WorkflowSection from "../components/WorkflowSection";
import SecuritySection from "../components/SecuritySection";
import CTASection from "../components/CTASection";

const WhyKarevo = () => {
  const problems = [
    {
      title: "Fragmented Records",
      description:
        "Medical records scattered across multiple hospitals and clinics",
      icon: FileText,
    },
    {
      title: "Accessibility Issues",
      description: "Difficult to access your health data when you need it most",
      icon: Lock,
    },
    {
      title: "Data Loss",
      description: "Risk of losing important medical history during transfers",
      icon: AlertTriangle,
    },
    {
      title: "Communication Gaps",
      description: "Poor coordination between different healthcare providers",
      icon: Phone,
    },
  ];

  const solutions = [
    {
      title: "Centralized Records",
      description: "All your medical records in one secure, portable location",
      icon: Lock,
    },
    {
      title: "Instant Access",
      description: "Retrieve your health data anytime, anywhere with one click",
      icon: Zap,
    },
    {
      title: "Seamless Sharing",
      description: "Share your records securely with healthcare providers",
      icon: Users,
    },
    {
      title: "HIPAA Compliant",
      description:
        "Enterprise-grade security protecting your sensitive health data",
      icon: Shield,
    },
  ];

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
  ];

  const stats = [
    { number: "95%", label: "Faster medical information retrieval" },
    { number: "30%", label: "Reduction in duplicate tests" },
    { number: "98%", label: "Data security and uptime" },
    { number: "0", label: "Patients and providers trust Karevo" },
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
      <HeroSection
        title="Why Karevo?"
        subtitle="Transforming healthcare through secure, portable medical records that empower patients and streamline healthcare delivery across the continent."
      />

      <ProblemSection
        title="The Problem We Solve"
        subtitle="Healthcare in Africa faces critical challenges that impact patient care and provider efficiency"
        problems={problems}
      />

      <SolutionSection
        title="Our Solution"
        subtitle="Karevo reimagines healthcare data management with cutting-edge technology"
        solutions={solutions}
      />

      <BenefitsSection
        title="Real Benefits for Everyone"
        subtitle="Designed to benefit patients, providers, and entire healthcare systems"
        benefits={benefits}
      />

      <StatsSection stats={stats} />

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
