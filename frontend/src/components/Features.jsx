import React from "react";
import verify from "../assets/drugverify.png";
import schedule from "../assets/schedule.jpg";
import ehr from "../assets/ehr.jpg";

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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <p className="uppercase text-center text-[#25789e] font-semibold py-3 text-xl">
            Feature
          </p>
          <h3 className="text-4xl md:text-[38px] font-bold text-center mb-16 text-[#000] font-raleway">
            Everything You Need for Better Healthcare
            <br />
          </h3>

          {/* Three Feature Cards - Grid Layout */}
          <div className="grid md:grid-cols-3 gap-12 justify-items-center items-stretch max-w-8xl mx-auto">
            {/* Feature 1: Drug Verification */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#25789e]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={verify}
                  alt="Drug Verification"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#25789e] transition-colors">
                  Drug Verification
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  AI-powered verification against NAFDAC database. Scan or
                  search to confirm drug authenticity instantly.
                </p>
              </div>
            </div>

            {/* Feature 2: Smart Scheduling */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#25789e]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={schedule}
                  alt="Smart Scheduling"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#25789e] transition-colors">
                  Smart Scheduling
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  Book appointments with top providers. Reduce wait times and
                  get reminded before your visit.
                </p>
              </div>
            </div>

            {/* Feature 3: Health Records */}
            <div className="card-animate group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#25789e]/40 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-between overflow-hidden">
              <div className="mb-8">
                <img
                  src={ehr}
                  alt="Electronic Health Records"
                  className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-8 px-4">
                <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#25789e] transition-colors">
                  Electronic Health Records
                </h4>
                <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                  Your complete medical history, accessible anywhere. Portable
                  across all healthcare providers.
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
