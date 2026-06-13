import React, { useMemo, useState } from "react";
import { CheckCircle } from "lucide-react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const BenefitsCarousel = ({ title, subtitle, benefits }) => {
  const safeBenefits = Array.isArray(benefits) ? benefits : [];

  const [containerWidth, setContainerWidth] = useState(0);

  const visibleCount = useMemo(() => {
    // Use CSS breakpoints indirectly via container width.
    if (!containerWidth) return 1;
    if (containerWidth < 640) return 1;
    if (containerWidth < 1024) return 2;
    return 4;
  }, [containerWidth]);

  const totalPages = Math.max(1, Math.ceil(safeBenefits.length / visibleCount));
  const [page, setPage] = useState(0);

  React.useEffect(() => {
    setPage((p) => clamp(p, 0, totalPages - 1));
  }, [totalPages]);

  // Auto-advance every 3 seconds
  React.useEffect(() => {
    if (safeBenefits.length <= visibleCount) return;

    const id = window.setInterval(() => {
      setPage((p) => {
        const next = p + 1;
        // Mobile-only behavior: loop back to the first card after completing the first cycle.
        if (visibleCount === 1 && next > totalPages - 1) return 0;
        return clamp(next, 0, totalPages - 1);
      });
    }, 3000);

    return () => window.clearInterval(id);
  }, [safeBenefits.length, visibleCount, totalPages]);

  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-geist">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-geist">
            {subtitle}
          </p>
        </div>

        <div className="relative" aria-roledescription="carousel">
          {/* Controls */}
          {safeBenefits.length > visibleCount && (
            <div className="hidden sm:flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={() => setPage((p) => clamp(p - 1, 0, totalPages - 1))}
                className="p-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition"
                aria-label="Previous benefits"
              >
                ←
              </button>
              <div className="text-sm text-gray-500 font-geist">
                {page + 1} / {totalPages}
              </div>
              <button
                type="button"
                onClick={() => setPage((p) => clamp(p + 1, 0, totalPages - 1))}
                className="p-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition"
                aria-label="Next benefits"
              >
                →
              </button>
            </div>
          )}

          {/* Mobile swipe-friendly strip */}
          <div
            className="overflow-hidden"
            ref={(el) => {
              if (!el) return;
              setContainerWidth(el.getBoundingClientRect().width);
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${page * (100 / visibleCount)}%)`,
                width: `${(safeBenefits.length / visibleCount) * 100}%`,
              }}
            >
              {safeBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/4 px-1"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <div className="h-full bg-white rounded-xl p-6 sm:p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h3 className="text-lg sm:text-xl font-bold text-[#3B00C5] mb-4 sm:mb-6 font-geist border-b-2 border-[#3B00C5] pb-3">
                      {benefit.title}
                    </h3>
                    <ul className="space-y-3">
                      {Array.isArray(benefit.points) &&
                        benefit.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#3B00C5] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-geist text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {safeBenefits.length > visibleCount && (
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === page
                      ? "bg-[#3B00C5]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === page}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCarousel;
