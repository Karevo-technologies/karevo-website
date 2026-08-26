import React, { useEffect, useRef, useState } from "react";
import { DownloadCloud, Link, MapPin, User } from "lucide-react";

const TOP_BASE = 96; // px clearance below the fixed navbar
const TOP_STEP = 16; // px cascade per card, so the stack peeks at its edges

const steps = [
  {
    number: "01",
    icon: User,
    title: "Create your Karevo ID",
    body: "Sign up in minutes and get a unique health ID tied to you, not to any single hospital. It's the profile every future visit builds on.",
    bg: "bg-primary-bright",
  },
  {
    number: "02",
    icon: Link,
    title: "Link your records",
    body: "Hospitals and clinics sync your history to your Karevo ID as you visit them diagnoses, prescriptions, test results, all in one growing profile.",
    bg: "bg-primary",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Access it anywhere",
    body: "Show up at any partnered hospital and share your ID instead of your memory. Your history travels with you, not with the building you first got it in.",
    bg: "bg-primary-deep",
  },
  {
    number: "04",
    icon: DownloadCloud,
    title: "Providers pull it instantly",
    body: "Staff retrieve your relevant history in seconds, not the first ten minutes of your appointment faster decisions, fewer repeated questions.",
    bg: "bg-primary-darkest",
  },
];

const arcStyle = (corner) => ({
  backgroundImage: `repeating-radial-gradient(circle at ${corner}, transparent 0, transparent 16px, rgba(255,255,255,0.12) 16px, rgba(255,255,255,0.12) 18px)`,
});

const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
  backgroundSize: "18px 18px",
  maskImage:
    "radial-gradient(130% 130% at 100% 0%, #000 0%, transparent 55%)",
  WebkitMaskImage:
    "radial-gradient(130% 130% at 100% 0%, #000 0%, transparent 55%)",
};

const Panel = ({ step }) => {
  const Icon = step.icon;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-4xl overflow-hidden min-h-96 md:min-h-120 ${step.bg}`}
    >
      <div className="order-2 md:order-1 flex flex-col justify-center p-8 md:p-12 lg:p-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-11 h-11 rounded-2xl bg-white/15 text-white grid place-items-center shrink-0">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.14em]">
            Step {step.number} / 0{steps.length}
          </span>
        </div>

        <h3 className="text-white font-bold tracking-tight text-2xl md:text-[2.5rem] leading-[1.15] md:leading-[1.1] mb-4">
          {step.title}
        </h3>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
          {step.body}
        </p>
      </div>

      <div className="hidden md:grid order-1 md:order-2 relative bg-white/5 p-8 md:p-12 place-items-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={dotGridStyle}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 w-64 h-64"
          style={arcStyle("0% 100%")}
        />

        <div className="relative w-full max-w-76 rounded-3xl bg-white border border-white/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center">
              <Icon className="h-7 w-7" />
            </span>
            <span className="text-primary/20 font-bold text-4xl leading-none tracking-tight">
              {step.number}
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-paper w-3/4 mb-3" />
          <div className="h-2.5 rounded-full bg-paper w-1/2" />
        </div>
      </div>
    </div>
  );
};

const KarevoID = () => {
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const stickyTop = TOP_BASE + i * TOP_STEP;
        if (el.getBoundingClientRect().top <= stickyTop + 1) current = i;
      });
      setActiveIndex(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (index) => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    cardRefs.current[index]?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-canvas py-20 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
        <span className="inline-flex items-center bg-primary/10 text-primary text-[13px] font-semibold rounded-full px-3 py-1 mb-4">
          How it works
        </span>
        <h2 className="text-ink font-bold tracking-tight text-2xl md:text-4xl leading-tight">
          One simple flow, from profile to care visit.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {steps.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => (cardRefs.current[i] = el)}
            className="sticky mb-16 sm:mb-24 last:mb-0"
            style={{ top: `${TOP_BASE + i * TOP_STEP}px`, zIndex: i + 1 }}
          >
            <Panel step={step} />
          </div>
        ))}
      </div>

      <div className="relative z-20 mt-8 flex justify-center gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => jumpTo(i)}
            aria-label={`Go to step ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-hairline-strong"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default KarevoID;
