import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = ({ title, subtitle, onCTAClick }) => {
  return (
    <section className="py-20 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-[#3B00C5] to-[#2f00a0] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 font-raleway leading-snug">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-raleway mb-6 sm:mb-8 md:mb-10 text-blue-100 leading-relaxed">
          {subtitle}
        </p>
        <button
          onClick={onCTAClick}
          className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3B00C5] rounded-lg font-bold font-raleway hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-[#3B00C5]/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[200%]"
          />
          <span className="relative inline-flex items-center gap-2">
            Join the Waitlist
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
