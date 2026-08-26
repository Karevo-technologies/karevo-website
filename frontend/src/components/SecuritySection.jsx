import React from "react";
import { Shield, Lock, EyeOff, FileCheck } from "lucide-react";

const arcStyle = (corner) => ({
  backgroundImage: `repeating-radial-gradient(circle at ${corner}, transparent 0, transparent 16px, rgba(255,255,255,0.10) 16px, rgba(255,255,255,0.10) 18px)`,
});

const pillars = [
  {
    icon: Lock,
    title: "You control every share",
    description:
      "No record leaves your profile without your approval. Every action on your account is logged, so you always know who accessed what and when.",
  },
  {
    icon: EyeOff,
    title: "Strict doctor-patient privacy",
    description:
      "No hospital, staff member, or third party can ever access or pull your medical logs without your explicit consent.",
  },
  {
    icon: FileCheck,
    title: "Independently verified",
    description:
      "External security watchdogs regularly audit our network systems against leading worldwide cyberdefense standards.",
  },
];

const SecuritySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <p className="inline-flex items-center bg-primary/10 text-primary text-[13px] font-semibold rounded-full px-3 py-1 mb-6">
          Security
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4 max-w-xl">
          Locked down. Nothing exposed.
        </h2>
        <p className="text-base sm:text-lg text-ink-soft max-w-lg leading-relaxed mb-10 sm:mb-12">
          Karevo protects your health history the way top-tier banks guard
          financial records encrypted the moment it's created, and
          viewable only by you and whoever you choose to share it with.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Focal card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-deep text-white p-8 sm:p-10 min-h-80 flex flex-col">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64"
              style={arcStyle("100% 100%")}
            />
            <span className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center mb-8">
              <Shield className="h-5 w-5" />
            </span>

            <div className="relative mt-auto">
              <div className="flex items-end gap-1 mb-2">
                <span className="text-6xl font-bold leading-none tracking-tight">
                  256
                </span>
                <span className="text-2xl font-bold mb-1">-bit</span>
              </div>
              <p className="text-white/70 font-semibold mb-6">
                encryption on every record
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Your records are converted into unbreakable code the moment
                they're created collecting, storing, and sharing all
                happen behind the same wall.
              </p>
            </div>
          </div>

          {/* Supporting cards */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex-1 rounded-3xl border border-hairline bg-canvas p-6 flex gap-4"
                >
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Worked example */}
        <div className="mt-5 rounded-3xl bg-primary/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="shrink-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-1">
              For example
            </p>
            <p className="text-lg font-bold text-ink">A new clinic asks</p>
          </div>
          <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
            A new clinic requests your file. You get a prompt on your
            phone. Approve it, and they see exactly what you allow
            nothing more, until you decide otherwise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
