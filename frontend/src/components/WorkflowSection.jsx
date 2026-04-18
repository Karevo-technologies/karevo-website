import React from "react";

const WorkflowSection = ({ title, subtitle, workflow }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-raleway">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-raleway">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-[#25789e] to-[#1e5a7a] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white font-raleway">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2 font-raleway">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center font-raleway text-sm leading-relaxed">
                {item.description}
              </p>
              {index < workflow.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-[#25789e]/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
