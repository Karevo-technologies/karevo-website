import React from "react";

const AboutKarevoSection = () => {
  return (
    <section className="px-4 py-14 sm:py-18 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-2 uppercase text-center rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold font-raleway text-sm sm:text-base">
            About Karevo
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-[#111]">
            Your healthcare, secured built for every journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 font-raleway leading-relaxed">
            Karevo is a patient-first platform for portable medical records. We
            help patients and providers access essential health information
            securely so care decisions are faster, safer, and more consistent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#3B00C5]/10 flex items-center justify-center text-[#3B00C5] font-bold">
              01
            </div>
            <h3 className="mt-4 text-lg font-bold font-raleway text-[#111]">
              Portable records
            </h3>
            <p className="mt-2 text-gray-600 font-raleway leading-relaxed">
              Keep your medical history with you—so you’re never starting from
              scratch.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#3B00C5]/10 flex items-center justify-center text-[#3B00C5] font-bold">
              02
            </div>
            <h3 className="mt-4 text-lg font-bold font-raleway text-[#111]">
              Secure by design
            </h3>
            <p className="mt-2 text-gray-600 font-raleway leading-relaxed">
              Built to protect sensitive information with modern security
              practices.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#3B00C5]/10 flex items-center justify-center text-[#3B00C5] font-bold">
              03
            </div>
            <h3 className="mt-4 text-lg font-bold font-raleway text-[#111]">
              Provider-ready
            </h3>
            <p className="mt-2 text-gray-600 font-raleway leading-relaxed">
              Enable clinicians to access what matters—when it matters.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#3B00C5]/10 flex items-center justify-center text-[#3B00C5] font-bold">
              04
            </div>
            <h3 className="mt-4 text-lg font-bold font-raleway text-[#111]">
              Faster decisions
            </h3>
            <p className="mt-2 text-gray-600 font-raleway leading-relaxed">
              Reduce delays by streamlining how health information flows.
            </p>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-10 sm:mt-12 rounded-3xl bg-gradient-to-br from-[#3B00C5] to-[#2f00a0] text-white overflow-hidden">
          <div className="p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-raleway">
                Ready to experience healthcare that follows you?
              </h3>
              <p className="mt-2 text-white/90 font-raleway leading-relaxed">
                Join the waitlist and be part of Karevo’s next chapter.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-[#3B00C5] font-bold font-raleway hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              Contact Karevo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKarevoSection;
