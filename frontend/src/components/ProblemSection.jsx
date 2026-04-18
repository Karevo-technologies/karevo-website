import React from "react";

const ProblemSection = ({ title, subtitle, problems }) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-raleway">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-raleway">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <Icon className="h-10 w-10 text-[#25789e] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway">
                  {problem.title}
                </h3>
                <p className="text-gray-600 font-raleway leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
