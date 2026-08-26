import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

const views = [
  {
    key: "patients",
    tab: "Patients",
    eyebrow: "For patients",
    title: "Complete control over your health data",
    description:
      "Every record, one place, always yours. Share it when you choose, and never repeat your history again.",
    points: [
      "Faster appointments and better care",
      "Emergency access to critical information",
      "Reduce duplicate tests and procedures",
    ],
  },
  {
    key: "providers",
    tab: "Providers",
    eyebrow: "For healthcare providers",
    title: "Access complete patient history instantly",
    description:
      "See a verified, structured record the moment a patient walks in no digging through paper files or waiting on another hospital.",
    points: [
      "Better clinical decision making",
      "Reduced administrative burden",
      "Improved patient outcomes",
    ],
  },
  {
    key: "systems",
    tab: "Systems",
    eyebrow: "For healthcare systems",
    title: "Streamlined operations, lower costs",
    description:
      "Karevo cuts the friction between departments and facilities, so your system runs on shared, reliable data instead of guesswork.",
    points: [
      "Reduced costs through efficiency",
      "Better patient retention",
      "Competitive advantage",
    ],
  },
  {
    key: "organizations",
    tab: "Organizations",
    eyebrow: "For organizations",
    title: "One platform, every patient record",
    description:
      "A single, interoperable data layer that keeps your organization compliant and your governance airtight without extra headcount.",
    points: [
      "Interoperability across systems",
      "Regulatory compliance automation",
      "Enhanced data governance",
    ],
  },
];

const MockPanel = () => (
  <div className="relative bg-canvas rounded-3xl p-6 sm:p-8">
    <div className="flex items-center gap-1.5 mb-6">
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="ml-3 h-2.5 rounded-full bg-paper w-32" />
    </div>

    <div className="space-y-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-4 rounded-2xl bg-paper p-4"
        >
          <span className="w-9 h-9 rounded-full bg-canvas shrink-0" />
          <div className="flex-1 space-y-2">
            <span className="block h-2.5 rounded-full bg-canvas w-2/3" />
            <span className="block h-2 rounded-full bg-canvas w-1/3" />
          </div>
          <span className="h-6 w-14 rounded-full bg-canvas shrink-0" />
        </div>
      ))}
    </div>
  </div>
);

const ViewContent = ({ view }) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-300 ease-out ${
        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          {view.eyebrow}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-4">
          {view.title}
        </h3>
        <p className="text-ink-soft leading-relaxed mb-6">
          {view.description}
        </p>
        <ul className="space-y-3">
          {view.points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-ink text-sm sm:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <MockPanel />
    </div>
  );
};

const BenefitsCarousel = () => {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-ink-soft font-semibold mb-4">
            A closer look
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 max-w-2xl mx-auto">
            <span className="text-ink">One Karevo, </span>
            <span className="text-ink-soft">four views.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Pick the view that matches you. Each one is built around what
            you actually need from your health record.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 bg-canvas border border-hairline rounded-full p-1">
            {views.map((v, i) => (
              <button
                key={v.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`text-sm font-semibold rounded-full px-4 sm:px-5 h-10 cursor-pointer transition-colors duration-300 ${
                  i === active
                    ? "bg-ink text-canvas"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {v.tab}
              </button>
            ))}
          </div>
        </div>

        <ViewContent key={view.key} view={view} />
      </div>
    </section>
  );
};

export default BenefitsCarousel;
