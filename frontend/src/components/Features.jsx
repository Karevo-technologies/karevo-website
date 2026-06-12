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
        <div className="max-w-8xl mx-auto">
          <p className="uppercase text-center text-[#3B00C5] font-semibold py-3 text-xl">
            Feature
          </p>
          <h3 className="text-4xl md:text-[38px] font-bold text-center mb-16 text-[#000] font-raleway">
            Everything You Need for Better Healthcare
            <br />
          </h3>

          {/* Three Feature Cards - Grid Layout */}
          <div className="grid md:grid-cols-3 gap-12 justify-items-center items-stretch max-w-8xl mx-auto">
            {/* Feature 1: Drug Verification */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#3B00C5]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={border}
                  alt="Cross-Border Health Verification"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#3B00C5] transition-colors">
                  Cross-Border Health Verification
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  Travelling outside Nigeria? K-ID will let international
                  hospitals and border health officials verify your records
                  instantly no paperwork, no delays.
                </p>
              </div>
            </div>

            {/* Feature 2: Smart Scheduling */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#3B00C5]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={insight}
                  alt="AI-Powered Health Insight"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#3B00C5] transition-colors">
                  AI-Powered Health Insight
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  Your records, working for you. K-ID will analyse your health
                  history over time and surface patterns — flagging things worth
                  discussing with your doctor before they become problems.
                </p>
              </div>
            </div>

            {/* Feature 3: Health Records */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#3B00C5]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={universal}
                  alt="Universal Health Identit"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#3B00C5] transition-colors">
                  Universal Health Identity
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  One ID for everything health-related insurance claims,
                  school medicals, employment checks, travel vaccinations. K-ID
                  becomes the single verified identity layer across every health
                  touchpoint in your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
