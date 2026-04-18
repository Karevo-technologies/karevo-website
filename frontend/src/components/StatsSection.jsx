import React from "react";

const StatsSection = ({ stats }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#25789e] to-[#1e5a7a] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-raleway">
                {stat.number}
              </div>
              <p className="text-blue-100 font-raleway text-sm md:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
