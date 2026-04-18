import React from "react";
import { Shield } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-12 shadow-lg border-l-4 border-[#25789e]">
          <div className="flex items-start gap-6">
            <Shield className="h-12 w-12 text-[#25789e] flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
                Your Data is Safe
              </h2>
              <p className="text-lg text-gray-700 font-raleway mb-4 leading-relaxed">
                Karevo employs enterprise-grade security standards to protect
                your sensitive health information. We comply with all
                international healthcare data protection regulations and conduct
                regular security audits.
              </p>
              <div className="flex gap-6 mt-6">
                <div>
                  <div className="text-sm font-semibold text-[#25789e] font-raleway mb-1">
                    256-bit Encryption
                  </div>
                  <p className="text-sm text-gray-600 font-raleway">
                    Military-grade protection
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#25789e] font-raleway mb-1">
                    HIPAA Compliant
                  </div>
                  <p className="text-sm text-gray-600 font-raleway">
                    Healthcare standard certified
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#25789e] font-raleway mb-1">
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
