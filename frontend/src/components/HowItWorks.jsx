import React from "react";

const HowItWorks = ({ title, subtitle }) => {
  const animationStyle = `
    @keyframes slide-down {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .slide-down {
      animation: slide-down 0.8s ease-out forwards;
    }
    .fade-in-delayed {
      animation: fade-in 0.8s ease-out forwards;
    }
    .fade-in-delayed-1 { animation-delay: 0.2s; opacity: 0; }
    .fade-in-delayed-2 { animation-delay: 0.4s; opacity: 0; }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <section className="bg-gradient-to-br from-[#25789e] via-[#1e5a7a] to-[#1a4a6a] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h4 className="slide-down inline-block text-sm md:text-base font-semibold uppercase tracking-widest mb-6 bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              ✨ How It Works
            </h4>

            <h2 className="fade-in-delayed fade-in-delayed-1 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-raleway leading-tight">
              {title}
            </h2>

            <p className="fade-in-delayed fade-in-delayed-2 text-lg md:text-xl font-raleway mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-white/60 rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating accent element */}
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-white/3 rounded-full blur-2xl -z-10 animate-pulse"></div>
      </section>
    </>
  );
};

export default HowItWorks;
