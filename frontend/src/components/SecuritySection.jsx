import React from "react";
import { Shield, EyeOff, Lock, FileCheck } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg border-l-4 border-[#3B00C5]">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-[#3B00C5] flex-shrink-0" />
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-raleway">
                Your Data is Safe & Private
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-raleway mb-6 sm:mb-8 leading-relaxed">
                At Karevo, we protect your health history like top-tier banks guard their financial records[cite: 63]. We use advanced healthcare encryption technologies to ensure your medical information stays completely private, accurate, and viewable only by you and your authorized care teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6">
                {/* Pillar 1 */}
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#3B00C5] font-raleway mb-2">
                    <Lock className="h-4 w-4" />
                    Unreadable to Outsiders
                  </div>
                  <p className="text-sm text-gray-600 font-raleway leading-relaxed">
                    <strong>256-bit Encryption:</strong> Your records are instantly converted into unbreakable code. Even if a data interception occurs, your information looks like absolute gibberish to unauthorized eyes.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#3B00C5] font-raleway mb-2">
                    <EyeOff className="h-4 w-4" />
                    Strict Doctor-Patient Privacy
                  </div>
                  <p className="text-sm text-gray-600 font-raleway leading-relaxed">
                    <strong>HIPAA Compliant:</strong> We follow global patient privacy laws. No hospital, staff member, or third party can ever access or pull your medical logs without your explicit consent.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#3B00C5] font-raleway mb-2">
                    <FileCheck className="h-4 w-4" />
                    Independently Verified
                  </div>
                  <p className="text-sm text-gray-600 font-raleway leading-relaxed">
                    <strong>ISO 27001 Standard:</strong> External security watchdogs regularly audit our network systems to verify that our protective walls match leading worldwide cyberdefense standards.
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