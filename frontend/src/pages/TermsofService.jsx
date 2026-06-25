import React from "react";

const CONTACT_EMAIL = "contact@karevo.com";

const TermsofService = () => {
  return (
    <main className="min-h-screen bg-white pt-35 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm">
            K-ID by Karevo — Terms of Service
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A0118]">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Last updated: <span className="font-semibold">June 2026</span>
          </p>
        </header>

        <div className="prose max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">About K-ID</h2>
            <p>
              K-ID is a digital health identity platform being developed by the
              Karevo Team in Ogbomoso, Nigeria. By joining our waitlist, you
              agree to the terms below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              What joining the waitlist means
            </h2>
            <p>
              Joining the waitlist does not guarantee access to K-ID. It means
              you are expressing interest and will be notified when we launch.
              No payment is required to join the waitlist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              What we promise you
            </h2>
            <ul>
              <li>We will notify you when K-ID is ready for early access.</li>
              <li>We will not spam you.</li>
              <li>We will not sell your information.</li>
              <li>
                We will be honest with you about the product and its progress.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              What we ask of you
            </h2>
            <ul>
              <li>Provide accurate information when joining the waitlist.</li>
              <li>
                Do not attempt to misuse or manipulate our waitlist system.
              </li>
              <li>Do not impersonate another person when registering.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              No guarantees at this stage
            </h2>
            <p>
              K-ID is currently in beta development. We cannot guarantee
              specific launch dates, features, or pricing at this stage.
              Everything shared about the product is subject to change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              Intellectual property
            </h2>
            <p>
              Everything on the K-ID platform including the name, logo, product
              design, and content belongs to Karevo. You may not copy,
              reproduce, or use any of it without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              Limitation of liability
            </h2>
            <p>
              At the waitlist stage, K-ID is not responsible for any losses or
              damages arising from your use of our waitlist or website. We are a
              pre-launch product and this service is provided in good faith.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">Governing law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-bold text-[#0A0118]">Contact</h2>
            <p>
              For any questions about these terms, reach us at{" "}
              <a
                className="text-[#3B00C5] font-semibold hover:underline"
                href="/contact"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsofService;
