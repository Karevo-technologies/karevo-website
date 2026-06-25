import React from "react";

const CONTACT_EMAIL = "contact@karevo.com";

const Privacypolicy = () => {
  return (
    <main className="min-h-screen bg-white pt-35 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm">
            K-ID by Karevo — Privacy Policy
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A0118]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Last updated: <span className="font-semibold">June 2026</span>
          </p>
        </header>

        <div className="prose max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">Who we are</h2>
            <p>
              K-ID is a digital health identity platform developed by the Karevo
              Team, based in Ogbomoso, Nigeria. We are currently in beta
              development and operating as a pre-registration startup under the
              Karevo team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              What information we collect
            </h2>
            <p>
              When you join our waitlist, we collect your name, email address,
              phone number, and location. We do not collect any medical or
              health data at the waitlist stage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              Why we collect it
            </h2>
            <p>
              We collect this information solely to notify you when K-ID
              launches, send you updates about the product, and contact you for
              early access onboarding.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              What we do not do
            </h2>
            <ul>
              <li>We do not sell your information to anyone.</li>
              <li>
                We do not share your information with any third party without
                your consent.
              </li>
              <li>We do not use your information for advertising.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              How we store your data
            </h2>
            <p>
              Your information is stored securely on our platform. We take
              reasonable technical measures to protect it from unauthorised
              access. As a pre-registration startup, we are working toward full
              NDPR compliance before our official launch.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">Your rights</h2>
            <ul>
              <li>You have the right to ask us what data we hold about you.</li>
              <li>
                You have the right to ask us to delete your data at any time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise either right, contact us at{" "}
              <a
                className="text-[#3B00C5] font-semibold hover:underline"
                href="/contact"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0A0118]">
              Changes to this policy
            </h2>
            <p>
              We may update this policy as K-ID grows. Any changes will be
              communicated to waitlist members by email.
            </p>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-bold text-[#0A0118]">Contact</h2>
            <p>
              For any privacy related questions, reach us at{" "}
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

export default Privacypolicy;
