import React, { useMemo, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const BenefitsCarousel = ({ title, subtitle, benefits }) => {
  const safeBenefits = Array.isArray(benefits) ? benefits : [];
  const [containerWidth, setContainerWidth] = useState(0);

  const visibleCount = useMemo(() => {
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

  // Auto-advance logic
  React.useEffect(() => {
    if (safeBenefits.length <= visibleCount) return;
    const id = window.setInterval(() => {
      setPage((p) => {
        const next = p + 1;
        if (visibleCount === 1 && next > totalPages - 1) return 0;
        return clamp(next, 0, totalPages - 1);
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, [safeBenefits.length, visibleCount, totalPages]);

  return (
    <section className="py-28 px-4 bg-gray-50/50 relative overflow-hidden">
      {/* Background Atmospheric Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B00C5]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B00C5] mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
            {title}
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative" aria-roledescription="carousel">
          {/* Main Viewport Container */}
          <div
            className="overflow-hidden"
            ref={(el) => {
              if (!el) return;
              setContainerWidth(el.getBoundingClientRect().width);
            }}
          >
            <div
              className="flex transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${page * (100 / visibleCount)}%)`,
                width: `${(safeBenefits.length / visibleCount) * 100}%`,
              }}
            >
              {safeBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  {/* Sculpted Glass Card */}
                  <div className="h-full bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(59,0,197,0.08)] transition-all duration-300 group">
                    <div className="mb-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B00C5]/10 to-[#3B00C5]/5 flex items-center justify-center font-black text-[#3B00C5] text-sm shadow-inner border border-[#3B00C5]/10">
                      0{index + 1}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight group-hover:text-[#3B00C5] transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <ul className="space-y-4">
                      {Array.isArray(benefit.points) &&
                        benefit.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-[#3B00C5] flex-shrink-0 mt-1" strokeWidth={2.5} />
                            <span className="text-gray-600 text-sm font-medium leading-relaxed">
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

          {/* Nav Controls - Positioned elegantly */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              type="button"
              onClick={() => setPage((p) => clamp(p - 1, 0, totalPages - 1))}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-105 hover:border-[#3B00C5] hover:text-[#3B00C5] transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-8 bg-[#3B00C5]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPage((p) => clamp(p + 1, 0, totalPages - 1))}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-105 hover:border-[#3B00C5] hover:text-[#3B00C5] transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCarousel;