import React, { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const rows = [
  {
    old: "Paper folders or scattered clinic records",
    fixed: "One profile, always up to date",
  },
  {
    old: "Repeating your medical history at every new visit",
    fixed: "Your history travels with you",
  },
  {
    old: "Lost prescriptions, no refill history",
    fixed: "Full prescription trail, always accessible",
  },
  {
    old: "No way to share records with a new provider quickly",
    fixed: "One link, shared instantly and securely",
  },
  {
    old: "Family members in the dark during emergencies",
    fixed: "Authorized caregivers see what they need, when they need it",
  },
];

const views = {
  old: { label: "The old way", caption: "Before Karevo" },
  fixed: { label: "The Karevo way", caption: "With Karevo" },
};

const Row = ({ index, isOld, row }) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-350 ease-out hover:bg-paper ${
        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <span
        className={`w-8 h-8 shrink-0 rounded-full grid place-items-center transition-colors duration-300 ${
          isOld ? "bg-paper text-ink-soft" : "bg-primary text-white"
        }`}
      >
        {isOld ? <X size={14} /> : <Check size={16} />}
      </span>
      <p
        className={`text-base leading-snug transition-colors duration-300 ${
          isOld ? "text-ink-soft" : "text-ink font-medium"
        }`}
      >
        {isOld ? row.old : row.fixed}
      </p>
    </div>
  );
};

const ChallengeSolutionSection = () => {
  const [view, setView] = useState("old");
  const [locked, setLocked] = useState(false);
  const sectionRef = useRef(null);
  const isOld = view === "old";

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || locked) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setView("fixed"), 1400);
        } else {
          clearTimeout(timer);
          if (entry.boundingClientRect.top > 0) {
            setView("old");
          }
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [locked]);

  const handleSelect = (key) => {
    setLocked(true);
    setView(key);
  };

  return (
    <section ref={sectionRef} className="bg-canvas px-6 md:px-12 py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-flex items-center bg-primary/10 text-primary text-[13px] font-medium rounded-full px-3 py-1 mb-6">
          Why Karevo
        </span>
        <h2 className="text-ink font-bold tracking-tight text-3xl md:text-4xl leading-tight mb-5">
          Every visit starts from zero.
        </h2>
        <p className="text-ink-soft text-base md:text-lg leading-relaxed">
          A patient switches clinics, or sees a new doctor, and their history
          is gone. Karevo fixes the record see the difference for
          yourself.
        </p>
      </div>

      {/* Segmented toggle */}
      <div className="max-w-3xl mx-auto flex justify-center mb-8">
        <div className="inline-flex items-center gap-1 bg-paper rounded-full p-1">
          {Object.keys(views).map((key) => {
            const active = view === key;
            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                aria-pressed={active}
                className={`text-sm font-semibold rounded-full px-5 h-10 transition-colors duration-300 ${
                  active
                    ? key === "old"
                      ? "bg-canvas text-ink"
                      : "bg-primary text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {views[key].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-canvas rounded-[32px] border border-hairline overflow-hidden">
          <div
            className={`flex items-center justify-between px-6 md:px-8 py-5 border-b border-hairline transition-colors duration-500 ${
              isOld ? "bg-paper" : "bg-primary/10"
            }`}
          >
            <span className="text-ink font-semibold text-lg">
              {views[view].label}
            </span>
            <span
              className={`text-[13px] font-medium rounded-full px-3 py-1 transition-colors duration-500 ${
                isOld ? "bg-canvas text-ink-soft" : "bg-primary text-white"
              }`}
            >
              {views[view].caption}
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <div key={view} className="flex flex-col gap-2">
              {rows.map((row, i) => (
                <Row key={i} index={i} isOld={isOld} row={row} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionSection;
