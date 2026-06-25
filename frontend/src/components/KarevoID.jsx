import React, { useEffect, useMemo, useState } from "react";
import { DownloadCloud, Link, MapPin, ShieldCheck, User } from "lucide-react";

const KarevoID = () => {
  const steps = useMemo(
    () => [
      {
        number: "01",
        icon: User,
        title: "Create KID Profile",
        desc: "Sign up and get unique Health ID for lookups & updates.",
        subTitle: "Your digital health passport starts here",
      },
      {
        number: "02",
        icon: Link,
        title: "Link Health Records",
        desc: "Hospitals sync medical history to your KID profile.",
        subTitle: "Bring your history into one secure place",
      },
      {
        number: "03",
        icon: MapPin,
        title: "Access Anywhere",
        desc: "Use KID at any hospital - instant record access.",
        subTitle: "Care wherever you are, without the paperwork",
      },
      {
        number: "04",
        icon: DownloadCloud,
        title: "Hospital Pulls Data",
        desc: "Staff retrieve full file instantly, no paperwork.",
        subTitle: "Faster decisions for better outcomes",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const Active = steps[activeIndex];
  const ActiveIcon = Active?.icon || ShieldCheck;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const clamp = (n) => Math.max(0, Math.min(steps.length - 1, n));

  const goTo = (next) => {
    const target = clamp(next);
    if (target === activeIndex) return;

    if (!prefersReducedMotion) {
      setIsAnimating(true);
      window.setTimeout(() => {
        setActiveIndex(target);
        setIsAnimating(false);
      }, 380);
    } else {
      setActiveIndex(target);
    }
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const styles = `
    @keyframes kspin { 
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes kfadeUp {
      0% { opacity: 0; transform: translateY(10px); filter: blur(4px); }
      100% { opacity: 1; transform: translateY(0); filter: blur(0); }
    }

    @keyframes ksoftGlow {
      0%, 100% { opacity: .55; }
      50% { opacity: 1; }
    }

    .kid-reduce * { animation: none !important; transition: none !important; }

    /* Spinner overlay */
    .kid-spinner {
      animation: kspin 900ms linear infinite;
    }

    .kid-in {
      animation: kfadeUp 420ms cubic-bezier(.2,.8,.2,1) both;
    }

    .kid-cardShadow {
      box-shadow: 0 20px 80px rgba(0,0,0,0.10);
    }

    @media (prefers-reduced-motion: reduce) {
      .kid-spinner { animation: none !important; }
      .kid-in { animation: none !important; }
    }
  `;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <style>{styles}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm font-raleway">
            Karevo ID
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B00C5]" />
            Step by Step
          </p>
          <h3 className="mt-5 text-3xl sm:text-4xl md:text-[46px] font-bold font-raleway text-slate-900">
            A secure Health ID that unlocks care
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-raleway">
            Move through the steps with the selectors below. Each step reveals more detail instantly.
          </p>
        </div>

        <div
          className={
            "relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-sm"
          }
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B00C5]/10 via-transparent to-[#1e5a7a]/10" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#3B00C5]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-24 w-72 h-72 rounded-full bg-[#1e5a7a]/10 blur-3xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 p-5 sm:p-8 md:p-10">
            
            {/* Left: big step card ── Hidden on Mobile/Tablet, Displayed on Desktop (lg) */}
            <div className="relative hidden lg:block">
              {/* Spinner overlay for transition */}
              {!prefersReducedMotion && isAnimating && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/30 rounded-3xl">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full border-2 border-[#3B00C5]/30 border-t-[#3B00C5] kid-spinner" />
                    <div className="absolute inset-0 rounded-full animate-[ksoftGlow_900ms_ease-in-out_infinite]" />
                  </div>
                </div>
              )}

              <div className="rounded-3xl kid-cardShadow bg-white/60 border border-slate-200/60">
                <div className="p-6 sm:p-7 md:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-[#3B00C5] to-[#1e5a7a] flex items-center justify-center shadow-lg">
                        <ActiveIcon className="w-7 h-7 text-white" />
                        <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-white/90" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          Step {activeIndex + 1} / {steps.length}
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold font-raleway text-slate-900">
                          {Active.title}
                        </h4>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end">
                      <div className="text-xs font-semibold text-[#3B00C5] bg-[#3B00C5]/10 px-3 py-1 rounded-full">
                        KID-{Active.number}
                      </div>
                      <div className="mt-2 text-sm text-gray-500 font-raleway">Patient-first security</div>
                    </div>
                  </div>

                  <div
                    className={!prefersReducedMotion ? (isAnimating ? "opacity-0" : "kid-in") : undefined}
                  >
                    <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-base sm:text-lg">
                      {Active.desc}
                    </p>

                    <p className="mt-3 text-slate-900 font-semibold font-raleway">
                      {Active.subTitle}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                        <div className="text-sm font-semibold text-slate-900 font-raleway">What you get</div>
                        <div className="mt-1 text-sm text-gray-600 font-raleway">
                          {activeIndex === 0
                            ? "A verified KID profile you can use anywhere."
                            : activeIndex === 1
                            ? "A complete record history attached to your KID."
                            : activeIndex === 2
                            ? "Fast access to records when you need care."
                            : "Instant hospital pulls—fewer delays, better decisions."}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                        <div className="text-sm font-semibold text-slate-900 font-raleway">Why it matters</div>
                        <div className="mt-1 text-sm text-gray-600 font-raleway">
                          {activeIndex === 0
                            ? "Start secure: patient control from day one."
                            : activeIndex === 1
                            ? "No more missing files—your history stays current."
                            : activeIndex === 2
                            ? "Care teams get context instantly, even on the move."
                            : "Less paperwork. More time for clinical work."}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3B00C5] shadow-[0_0_18px_rgba(59,0,197,0.45)]" />
                        <span className="text-sm text-gray-600 font-raleway">Verified • Encrypted • Portable</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={goPrev}
                          disabled={activeIndex === 0}
                          className="px-4 py-2 rounded-xl text-sm font-semibold font-raleway transition-all"
                          style={{
                            background:
                              activeIndex === 0 ? "rgba(15,23,42,0.05)" : "rgba(59,0,197,0.08)",
                            color:
                              activeIndex === 0 ? "rgba(15,23,42,0.35)" : "#3B00C5",
                            cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                          }}
                        >
                          Previous
                        </button>

                        <button
                          type="button"
                          onClick={goNext}
                          disabled={activeIndex === steps.length - 1}
                          className="px-4 py-2 rounded-xl text-sm font-semibold font-raleway transition-all"
                          style={{
                            background:
                              activeIndex === steps.length - 1
                                ? "rgba(15,23,42,0.05)"
                                : "#3B00C5",
                            color:
                              activeIndex === steps.length - 1 ? "rgba(15,23,42,0.35)" : "#fff",
                            cursor:
                              activeIndex === steps.length - 1 ? "not-allowed" : "pointer",
                            boxShadow:
                              activeIndex === steps.length - 1 ? "none" : "0 12px 40px rgba(59,0,197,0.25)",
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: step selector */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200/60 bg-white/60 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                        Steps
                      </div>
                      <div className="text-xl font-bold font-raleway text-slate-900">
                        Choose your next action
                      </div>
                    </div>
                    <div className="hidden md:block w-11 h-11 rounded-2xl bg-gradient-to-r from-[#3B00C5]/10 to-[#1e5a7a]/10" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {steps.map((s, i) => {
                      const isActive = i === activeIndex;
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.number}
                          type="button"
                          onClick={() => goTo(i)}
                          className="w-full text-left rounded-2xl border transition-all"
                          style={{
                            background: isActive ? "rgba(59,0,197,0.10)" : "rgba(255,255,255,0.65)",
                            borderColor: isActive ? "rgba(59,0,197,0.35)" : "rgba(148,163,184,0.45)",
                          }}
                          aria-current={isActive}
                        >
                          <div className="p-4 flex items-start gap-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background: isActive
                                  ? "linear-gradient(90deg, rgba(59,0,197,0.95), rgba(30,90,122,0.95))"
                                  : "rgba(15,23,42,0.04)",
                              }}
                            >
                              <Icon className="w-5 h-5" style={{ color: isActive ? "#fff" : "#3B00C5" }} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <div className="text-sm font-semibold font-raleway text-slate-900">
                                  {s.title}
                                </div>
                                <div
                                  className="text-xs font-semibold"
                                  style={{ color: isActive ? "#3B00C5" : "rgba(51,65,85,0.7)" }}
                                >
                                  {s.number}
                                </div>
                              </div>
                              {/* Keep descriptions clear & accessible in expanded active rows for mobile */}
                              <div className="mt-1 text-xs text-gray-600 font-raleway leading-relaxed">
                                {s.desc}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 text-sm text-gray-600 font-raleway hidden lg:block">
                    Tip: Use keyboard arrows to navigate steps.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KarevoID;