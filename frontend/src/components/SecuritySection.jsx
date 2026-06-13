import React from "react";
import { Shield } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg border-l-4 border-[#3B00C5]">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-[#3B00C5] flex-shrink-0" />
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-raleway">
                Your Data is Safe
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-raleway mb-3 sm:mb-4 leading-relaxed">
                Karevo employs enterprise-grade security standards to protect
                your sensitive health information. We comply with all
                international healthcare data protection regulations and conduct
                regular security audits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
                <div>
                  <div className="text-sm font-semibold text-[#3B00C5] font-raleway mb-1">
                    256-bit Encryption
                  </div>
                  <p className="text-sm text-gray-600 font-raleway">
                    Military-grade protection
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#3B00C5] font-raleway mb-1">
                    HIPAA Compliant
                  </div>
                  <p className="text-sm text-gray-600 font-raleway">
                    Healthcare standard certified
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#3B00C5] font-raleway mb-1">
                    ISO 27001
                  </div>
                  <p className="text-sm text-gray-600 font-raleway">
                    Information security certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
