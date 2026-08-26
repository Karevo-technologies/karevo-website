import React from "react";
import { ArrowRight } from "lucide-react";

const arcStyle = (corner) => ({
  backgroundImage: `repeating-radial-gradient(circle at ${corner}, transparent 0, transparent 16px, rgba(255,255,255,0.10) 16px, rgba(255,255,255,0.10) 18px)`,
});

const CTASection = ({ title, subtitle, onCTAClick, roles, onRoleClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="relative overflow-hidden max-w-6xl mx-auto rounded-4xl py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-br from-primary to-primary-deep text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-16 w-72 h-72"
          style={arcStyle("0% 0%")}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72"
          style={arcStyle("100% 100%")}
        />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Join the waitlist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-9 max-w-lg mx-auto">
            {subtitle}
          </p>

          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-midnight text-white rounded-full font-semibold hover:bg-midnight/90 transition-colors duration-300"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </button>

          {roles && roles.length > 0 && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {roles.map((role, i) => (
                <React.Fragment key={role.key}>
                  <button
                    type="button"
                    onClick={() => onRoleClick?.(role.key)}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {role.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  {i < roles.length - 1 && (
                    <span className="text-white/30 text-sm">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
