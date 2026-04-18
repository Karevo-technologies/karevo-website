import React from "react";

const SolutionSection = ({ title, subtitle, solutions }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-raleway">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-raleway">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#25789e]/5 to-[#1e5a7a]/5 rounded-xl p-8 border border-[#25789e]/20 hover:border-[#25789e]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="h-8 w-8 text-[#25789e] flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-gray-900 font-raleway">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-raleway leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
