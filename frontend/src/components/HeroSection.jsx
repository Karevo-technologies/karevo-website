import React from "react";

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-br from-[#25789e] to-[#1e5a7a] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-raleway">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-raleway mb-8 text-blue-100 leading-relaxed">
          {subtitle}
        </p>
        <div className="h-1 w-24 bg-white/30 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
