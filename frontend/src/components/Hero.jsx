import React from "react";
import { ArrowRight, Info } from "lucide-react";
import hero from "../assets/hero-image.png";

const Hero = ({ onOpenWaitlist }) => {
  const bounceStyle = `
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-12px);
      }
    }
    .bounce-slow {
      animation: bounce-slow 3s ease-in-out infinite;
    }
  `;
  return (
    <>
      <style>{bounceStyle}</style>
      <section className="bg-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-8xl mx-auto">
          {/* Content Container - Side by Side */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-raleway font-bold text-[#111">
                Healthcare that
                <span className="block text-[#25789e]">
                  protects you <br />
                  everywhere
                </span>
              </h2>
              <p className="text-lg md:text-lg text-gray-600 mb-10 leading-relaxed font-raleway max-w-xl">
                Karevo delivers secure, portable medical records that empower
                patients and streamline healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenWaitlist}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#25789e] text-white text-lg font-semibold rounded-[100px] hover:bg-[#1e3a40] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 transform font-raleway"
                >
                  Join Waitlist
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#25789e] text-[#25789e] text-lg font-semibold rounded-[100px] hover:bg-[#25789e]/5 hover:border-[#1e3a40] hover:text-[#1e3a40] transition-all duration-300 hover:shadow-lg font-raleway">
                  Learn More
                  <Info className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Hero Image - Right Side */}
            <div className="flex-1">
              <div className="relative">
                <img
                  src={hero}
                  alt="Karevo Features"
                  className="w-full h-auto object-cover animate-in fade-in zoom-in duration-700 bounce-slow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25789e]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25789e]/5 rounded-full blur-3xl -z-10"></div>
      </section>
    </>
  );
};

export default Hero;