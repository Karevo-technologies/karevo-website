import React from "react";
import { ArrowRight, Info } from "lucide-react";

const arcStyle = (corner) => ({
  backgroundImage: `repeating-radial-gradient(circle at ${corner}, transparent 0, transparent 18px, rgba(255,255,255,0.08) 18px, rgba(255,255,255,0.08) 20px)`,
});

const Hero = ({ onOpenWaitlist }) => {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-primary to-primary-deep pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative arcs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 sm:w-96 sm:h-96"
        style={arcStyle("0% 100%")}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 sm:w-96 sm:h-96"
        style={arcStyle("100% 100%")}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          <span className="text-sm font-semibold text-white">
            Secure • Portable • Patient-first
          </span>
        </div>

        <h2 className="mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Healthcare that
          <span className="block">protects you everywhere</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
          Karevo delivers secure, portable medical records that empower
          patients and streamline healthcare delivery.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenWaitlist}
            className="group flex items-center justify-center gap-2 px-7 sm:px-8 py-4 bg-midnight text-white text-base sm:text-lg font-semibold rounded-full hover:bg-midnight/90 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span className="inline-flex items-center">Join Waitlist</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold bg-white text-midnight hover:bg-white/90 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => {
              const goToAbout = () => {
                const el = document.getElementById("learn-more");
                el?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              };

              if (window.location.pathname !== "/") {
                // Ensure smoother transition to anchor after navigation.
                window.location.href = "/";
                setTimeout(goToAbout, 250);
                return;
              }
              goToAbout();
            }}
          >
            <span className="inline-flex items-center">Learn More</span>
            <Info className="h-5 w-5 transition-transform group-hover:rotate-[-6deg]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
