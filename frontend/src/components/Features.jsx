import React from "react";
import { IdCard, Share2, Pill, ShieldCheck, BellRing, Building2 } from "lucide-react";

const features = [
  {
    icon: IdCard,
    title: "One profile, everywhere",
    description: "Your full health history in one place, accessible from any device.",
  },
  {
    icon: Share2,
    title: "Share in one tap",
    description: "Send your records to a new provider instantly no forms, no faxes.",
  },
  {
    icon: Pill,
    title: "Prescriptions, tracked",
    description: "Every prescription and refill logged automatically, so nothing gets lost.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, protected",
    description: "Encrypted and access-controlled. Only you decide who sees what.",
  },
  {
    icon: BellRing,
    title: "Never miss a refill",
    description: "Reminders for follow ups and prescription renewals before they're due.",
  },
  {
    icon: Building2,
    title: "Works with any clinic",
    description: "Built to work across hospitals, pharmacies, and labs not locked to one provider.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-ink-soft font-semibold mb-4">
            What you get
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight mb-5 max-w-2xl mx-auto">
            Everything Karevo does, in plain words.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            No confusing dashboards, no medical jargon. Here's exactly what
            you get with Karevo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-canvas rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
