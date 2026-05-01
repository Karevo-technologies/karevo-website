import React from "react";
import { User, Link, MapPin, DownloadCloud } from "lucide-react";

const KarevoID = () => {
  const steps = [
    {
      number: "01",
      icon: User,
      title: "Create KID Profile",
      desc: "Sign up and get unique Health ID for lookups & updates."
    },
    {
      number: "02",
      icon: Link,
      title: "Link Health Records",
      desc: "Hospitals sync medical history to your KID profile."
    },
    {
      number: "03",
      icon: MapPin,
      title: "Access Anywhere",
      desc: "Use KID at any hospital - instant record access."
    },
    {
      number: "04",
      icon: DownloadCloud,
      title: "Hospital Pulls Data",
      desc: "Staff retrieve full file instantly, no paperwork."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/70 via-white to-slate-50 rounded-2xl mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#25789e]/3 to-[#1e5a7a]/3" />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in duration-1000">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-raleway">
            Karevo ID - Step by Step
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Simple process to get your digital health passport
          </p>
        </div>

        {/* Compact Vertical Steps */}
        <div className="relative space-y-8">
          {/* Line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#25789e]/30 to-[#1e5a7a]/30 -translate-x-1/2 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.number} className="flex items-start group relative z-10 animate-in fade-in slide-in-from-bottom duration-800 delay-100">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#25789e] to-[#1e5a7a] flex items-center justify-center text-white font-bold text-lg font-raleway shadow-lg border-4 border-white/50 mr-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-md hover:shadow-xl hover:border-[#25789e]/30 transition-all duration-400 group-hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#25789e]/90 to-[#1e5a7a]/90 rounded-xl flex items-center justify-center shadow-md mr-3 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1 font-raleway group-hover:text-[#25789e] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed font-raleway">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting line */}
                {!isLast && (
                  <div className="flex-shrink-0 w-px h-16 bg-gradient-to-b from-[#25789e]/40 to-[#1e5a7a]/40 mx-6 self-center" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KarevoID;
