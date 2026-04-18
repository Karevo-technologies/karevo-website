import React from "react";
import { CheckCircle } from "lucide-react";

const BenefitsSection = ({ title, subtitle, benefits }) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-raleway">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-raleway">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[#25789e] mb-6 font-raleway border-b-2 border-[#25789e] pb-3">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#25789e] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-raleway">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
