import React from "react";

const ChallengeSolutionSection = ({
  title,
  subtitle,
  items,
  variant = "problem",
}) => {
  return (
    <section
      className={`py-20 px-4 ${variant === "solution" ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-geist">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-geist">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isSolution = variant === "solution";
            return (
              <div
                key={index}
                className={`
                  rounded-xl p-8 transition-all duration-300
                  ${
                    isSolution
                      ? "bg-gradient-to-br from-[#25789e]/5 to-[#1e5a7a]/5 border border-[#25789e]/20 hover:border-[#25789e]/50"
                      : "bg-white shadow-md border border-gray-100 hover:shadow-lg"
                  }
                `}
              >
                {isSolution ? (
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="h-8 w-8 text-[#25789e] flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900 font-geist">
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  <>
                    <Icon className="h-10 w-10 text-[#25789e] mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-geist">
                      {item.title}
                    </h3>
                  </>
                )}
                <p
                  className={`font-geist leading-relaxed ${isSolution ? "text-gray-700" : "text-gray-600"}`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionSection;
