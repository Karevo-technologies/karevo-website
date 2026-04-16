import React from "react";
import { ArrowRight, Info } from "lucide-react";
import feature from "../assets/featuresimg.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-45 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="md:text-center mb-16">
          <h2 className="text-2xl md:text-7xl mb-6 leading-tight font-raleway font-semibold">
            Healthcare That Protects.
            <span className="block">Records That Follow You.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-raleway">
            Karevo delivers secure, portable medical records that empower
            patients and streamline healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-center md:items-center max-w-2xl mx-auto">
            <button className="group flex items-center gap-2 px-8 py-4 bg-[#254c53] text-white text-lg font-semibold rounded-[100px] hover:bg-[#1e3a40] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform font-raleway">
              Get Started Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-2 px-8 py-4 border-2 border-[#254c53] text-[#254c53] text-lg font-semibold rounded-[100px] hover:bg-[#254c53]/5 hover:border-[#1e3a40] hover:text-[#1e3a40] transition-all duration-300 hover:shadow-lg font-raleway">
              Learn More
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Centered Hero Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={feature}
              alt="Karevo Features"
              className="mx-auto max-w-4xl w-full h-[700px] object-cover rounded-3xl shadow-2xl border-4 border-white/80 hover:shadow-3xl transition-all duration-500 ring-1 ring-[#254c53]/20 hover:ring-[#254c53]/40"
            />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#254c53]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
