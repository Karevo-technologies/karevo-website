import React from "react";
import border from "../assets/crossborder.png";
import insight from "../assets/health_insight.png";
import universal from "../assets/universal.png";

const Features = () => {
  const cardAnimationStyle = `
    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .card-animate {
      animation: slide-up 0.6s ease-out forwards;
    }
    .card-animate:nth-child(1) { animation-delay: 0.1s; }
    .card-animate:nth-child(2) { animation-delay: 0.2s; }
    .card-animate:nth-child(3) { animation-delay: 0.3s; }
  `;

  return (
    <>
      <style>{cardAnimationStyle}</style>
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto text-center relative">
          <div className="pt-25 sm:pt-0 relative z-50">
            <p className="inline-flex items-center gap-2 px-4 py-2 uppercase text-center rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold font-raleway text-sm sm:text-base">
              Feature
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-center mt-10 mb-8 sm:mb-16 text-[#000] font-raleway">
              Everything You Need for Better Healthcare
              <br />
            </h3>
          </div>

          {/* Three Feature Cards - Grid layout (mobile/tablet also improved) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center items-stretch max-w-8xl mx-auto">
            {/* Feature 1 */}
            <div className="card-animate group relative bg-white rounded-3xl border border-gray-100 overflow-hidden h-full">
              {/* Top glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#3B00C5]/15 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
              {/* Gradient edge */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#3B00C5]/0 via-[#3B00C5]/0 to-[#3B00C5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-5 sm:p-7">
                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src={border}
                    alt="Cross-Border Health Verification"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h4 className="mt-6 text-xl sm:text-2xl font-semibold font-raleway group-hover:text-[#3B00C5] transition-colors">
                  Cross-Border Health Verification
                </h4>
                <p className="mt-3 text-gray-600 leading-relaxed font-raleway text-sm sm:text-base">
                  Travelling outside Nigeria? K-ID lets international hospitals
                  and border health officials verify your records instantly—no
                  paperwork, no delays.
                </p>

                <div className="mt-7 flex items-center justify-start">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#3B00C5]" />
                    Verified, fast, frictionless
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card-animate group relative bg-white rounded-3xl border border-gray-100 overflow-hidden h-full">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#3B00C5]/15 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#3B00C5]/0 via-[#3B00C5]/0 to-[#3B00C5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-5 sm:p-7">
                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src={insight}
                    alt="AI-Powered Health Insight"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h4 className="mt-6 text-xl sm:text-2xl font-semibold font-raleway group-hover:text-[#3B00C5] transition-colors">
                  AI-Powered Health Insight
                </h4>
                <p className="mt-3 text-gray-600 leading-relaxed font-raleway text-sm sm:text-base">
                  Your records, working for you. K-ID analyses your health
                  history over time to surface patterns—flagging what matters
                  before it becomes a problem.
                </p>

                <div className="mt-7 flex items-center justify-start">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#3B00C5]" />
                    Patterns you can act on
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card-animate group relative bg-white rounded-3xl border border-gray-100 overflow-hidden h-full">
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#3B00C5]/15 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#3B00C5]/0 via-[#3B00C5]/0 to-[#3B00C5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-5 sm:p-7">
                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src={universal}
                    alt="Universal Health Identity"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h4 className="mt-6 text-xl sm:text-2xl font-semibold font-raleway group-hover:text-[#3B00C5] transition-colors">
                  Universal Health Identity
                </h4>
                <p className="mt-3 text-gray-600 leading-relaxed font-raleway text-sm sm:text-base">
                  One ID for insurance claims, school medicals, employment
                  checks, and travel vaccinations. K-ID becomes your single
                  verified identity across every health touchpoint.
                </p>

                <div className="mt-7 flex items-center justify-start">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#3B00C5]" />
                    Everywhere you need it
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
