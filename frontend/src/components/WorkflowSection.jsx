import React from "react";

const WorkflowSection = ({ title, subtitle, workflow }) => {
  return (
    <section className="py-24 px-4 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ink mb-4">{title}</h2>
          <p className="text-lg text-ink-soft">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-deep rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink text-center mb-2">
                {item.title}
              </h3>
              <p className="text-ink-soft text-center text-sm leading-relaxed">
                {item.description}
              </p>
              {index < workflow.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
