import React from "react";
import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#3B00C5] font-raleway mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-gradient-to-br from-slate-50 to-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#3B00C5]" />
                <h3 className="text-xl font-semibold font-raleway">Step {n}</h3>
              </div>
              <p className="text-gray-600 font-raleway">
                {n === 1
                  ? "Create your secure Karevo account"
                  : n === 2
                    ? "Verify your information safely"
                    : "Get started with healthcare services in minutes"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
