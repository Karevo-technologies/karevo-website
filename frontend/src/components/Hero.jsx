import React from "react";
import { ArrowRight, Info } from "lucide-react";
import hero from "../assets/hero_side_image.png";

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

    /* Button sheen (lighter shade moving on hover) */
    .btn-sheen {
      position: relative;
      overflow: hidden;
    }
    .btn-sheen::before {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-120%) skewX(-20deg);
      opacity: 0;
      background: linear-gradient(
        110deg,
        transparent 0%,
        rgba(255, 255, 255, 0.65) 45%,
        rgba(255, 255, 255, 0.15) 55%,
        transparent 75%
      );
      pointer-events: none;
    }
    .btn-sheen:hover::before,
    .btn-sheen:focus-visible::before {
      opacity: 1;
      animation: sheen 700ms ease forwards;
    }

    /* When hover stops, glide the sheen back */
    .btn-sheen:not(:hover)::before,
    .btn-sheen:not(:focus-visible)::before {
      opacity: 0;
      transform: translateX(140%) skewX(-20deg);
      transition: opacity 180ms ease, transform 520ms ease;
    }

    @keyframes sheen {
      0% {
        transform: translateX(-120%) skewX(-20deg);
      }
      100% {
        transform: translateX(140%) skewX(-20deg);
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .bounce-slow {
        animation: none !important;
      }
      .btn-sheen:hover::before,
      .btn-sheen:focus-visible::before {
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{bounceStyle}</style>
      <section className="hero-section bg-white pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-[#3B00C5]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-28 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-[#3B00C5]/10 rounded-full blur-3xl" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] bg-gradient-to-tr from-[#3B00C5]/10 via-transparent to-transparent rounded-full blur-2xl" />
        </div>

        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-16">
            {/* Text */}
            <div className="flex-1 w-full">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3B00C5]/20 bg-white/70 px-4 py-2 shadow-sm">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#3B00C5] shadow-[0_0_18px_rgba(59,0,197,0.55)]" />
                <span className="text-sm font-semibold text-gray-700 font-raleway">
                  Secure • Portable • Patient-first
                </span>
              </div>

              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-[#111]">
                Healthcare that
                <span className="block text-[#3B00C5]">
                  protects you <span className="text-[#111]">everywhere</span>
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-raleway max-w-xl">
                Karevo delivers secure, portable medical records that empower
                patients and streamline healthcare delivery.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenWaitlist}
                  className="group btn-sheen relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 px-7 sm:px-8 py-4 bg-[#3B00C5] text-white text-base sm:text-lg font-semibold rounded-[100px] hover:bg-[#5245E3] transition-all duration-300 shadow-[0_18px_60px_rgba(59,0,197,0.25)] hover:shadow-[0_24px_80px_rgba(59,0,197,0.35)] hover:-translate-y-0.5 transform font-raleway ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[200%]"
                  />
                  <span className="inline-flex items-center">
                    Join Waitlist
                  </span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="btn-sheen group w-full sm:w-auto relative overflow-hidden flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-[100px] text-base sm:text-lg font-semibold border border-[#3B00C5]/30 text-[#3B00C5] bg-white/70 backdrop-blur hover:bg-white transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transform font-raleway focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B00C5]/30"
                  onClick={() => {
                    const goToAbout = () => {
                      const el = document.getElementById("about-karevo");
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    };

                    if (window.location.pathname !== "/") {
                      // Ensure smoother transition to anchor after navigation.
                      window.location.href = "/";
                      setTimeout(goToAbout, 250);
                      return;
                    }
                    goToAbout();
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[200%]"
                  />
                  <span className="inline-flex items-center">Learn More</span>
                  <Info className="h-5 w-5 transition-transform group-hover:rotate-[-6deg]" />
                </button>
              </div>

              {/* Micro trust row */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-4">
                  <div className="text-sm font-bold text-gray-900 font-raleway">
                    Encrypted
                  </div>
                  <div className="text-sm text-gray-600 font-raleway">
                    Privacy by design
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-4">
                  <div className="text-sm font-bold text-gray-900 font-raleway">
                    Portable
                  </div>
                  <div className="text-sm text-gray-600 font-raleway">
                    Follow you anywhere
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-4">
                  <div className="text-sm font-bold text-gray-900 font-raleway">
                    Fast
                  </div>
                  <div className="text-sm text-gray-600 font-raleway">
                    Share in seconds
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#3B00C5]/25 via-transparent to-transparent rounded-[32px] blur-xl -z-10" />

                <div className="rounded-[32px] border border-gray-200 bg-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-[26px]">
                    <img
                      src={hero}
                      alt="Karevo Features"
                      className="w-full h-auto object-cover bounce-slow"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute top-5 right-5 sm:top-7 sm:right-7">
                    <div className="backdrop-blur rounded-full bg-white/80 border border-gray-200 px-4 py-2 shadow-sm">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 font-raleway">
                        Built for care teams
                      </div>
                      <div className="text-xs text-gray-600 font-raleway">
                        Clear, consistent records
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
