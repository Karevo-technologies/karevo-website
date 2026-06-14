import React from "react";
import { CheckCircle } from "lucide-react";

const BenefitsSection = ({ title, subtitle, benefits }) => {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#3B00C5]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="inline-flex items-center gap-2 px-4 mb-5 py-2 uppercase text-center rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm sm:text-base">
            Core Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Tactile Dimension Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200/60 rounded-2xl p-7 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(59,0,197,0.08)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient card lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3B00C5]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Floating Tactile Icon Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 shadow-inner flex items-center justify-center text-sm font-bold text-gray-400 group-hover:text-[#3B00C5] group-hover:from-[#3B00C5]/10 group-hover:to-[#3B00C5]/5 group-hover:border-[#3B00C5]/20 transition-all duration-300">
                    0{index + 1}
                  </div>
                </div>

                {/* Typography with True Depth */}
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-5 group-hover:text-[#3B00C5] transition-colors duration-200">
                  {benefit.title}
                </h3>

                {/* Soft Textured Lists */}
                <ul className="space-y-3.5">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-[#3B00C5]/10 text-[#3B00C5]">
                        <CheckCircle className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
