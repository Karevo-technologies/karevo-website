import React from "react";
import verify from "../assets/drugverify.png";
import schedule from "../assets/schedule.jpg";
import ehr from "../assets/ehr.jpg";

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#254c53] font-raleway">
          Everything You Need <br />
          <span className="text-3xl md:text-5xl font-normal text-gray-700">for Better Healthcare</span>
        </h3>

        {/* Three Feature Cards - Grid Layout */}
        <div className="grid md:grid-cols-3 gap-12 justify-items-center items-stretch max-w-7xl mx-auto">
          {/* Feature 1: Drug Verification */}
          <div className="from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#254c53]/20 text-center h-full flex flex-col justify-between">
            <div className="mb-8">
              <img 
                src={verify} 
                alt="Drug Verification" 
                className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg border-4 border-white/80"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center py-8">
              <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#1e3a40] transition-colors">
                Drug Verification
              </h4>
              <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                AI-powered verification against NAFDAC database. Scan or search to confirm drug authenticity instantly.
              </p>
            </div>
          </div>

          {/* Feature 2: Smart Scheduling */}
          <div className="from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#254c53]/20 text-center h-full flex flex-col justify-between">
            <div className="mb-8">
              <img 
                src={schedule} 
                alt="Smart Scheduling" 
                className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500 border-4 border-white/80"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center py-8 px-4">
              <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#1e3a40] transition-colors">
                Smart Scheduling
              </h4>
              <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                Book appointments with top providers. Reduce wait times and get reminded before your visit.
              </p>
            </div>
          </div>

          {/* Feature 3: Health Records */}
          <div className="from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#254c53]/20 text-center h-full flex flex-col justify-between">
            <div className="mb-8">
              <img 
                src={ehr} 
                alt="Electronic Health Records" 
                className="w-full h-64 mx-auto rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-all duration-500 border-4 border-white/80"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center py-8 px-4">
              <h4 className="text-2xl font-semibold mb-6 font-raleway group-hover:text-[#1e3a40] transition-colors">
                Electronic Health Records
              </h4>
              <p className="text-gray-600 leading-relaxed font-raleway text-lg">
                Your complete medical history, accessible anywhere. Portable across all healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
