import React from "react";

const CookiePolicy = ({ isOpen, onCookiePolicyClose }) => {
  if (!isOpen) return null;

  const handleDismiss = () => {
    onCookiePolicyClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={handleDismiss} />

      <div className="relative bg-canvas rounded-2xl border border-hairline w-[92vw] max-w-2xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Cookie Policy
            </h2>
            <p className="text-sm md:text-base text-ink-soft mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <button
            onClick={handleDismiss}
            className="text-ink-soft hover:text-ink transition-colors"
            aria-label="Close cookie policy"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-5 text-ink-soft text-sm md:text-base">
          <p>
            Karevo uses cookies to support secure healthcare platform
            functionality, analyze how patients interact with our services, and
            continuously improve your healthcare experience. By continuing to
            use Karevo, you agree to our use of cookies in accordance with this
            policy.
          </p>

          <p>
            Karevo uses cookies and similar technologies to support the secure
            functionality of our healthcare platform and improve functionality.
          </p>

          <div>
            <h3 className="font-semibold text-primary underline transition-colors">
              Essential Cookies
            </h3>
            <p>
              Essential cookies are required for Karevo to function properly.
              They enable critical features such as user authentication and
              account access.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary underline transition-colors">
              Analytics Cookies
            </h3>
            <p>
              Karevo uses analytics tools to understand how users interact with
              the platform, including page visits, feature usage, and overall
              performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary underline transition-colors">
              Limited Tracking
            </h3>
            <p>
              Karevo does not use cookies for aggressive tracking across
              third-party websites. Any tracking implemented is minimal and
              intended to improve user experience.
            </p>
          </div>

          <p>
            Karevo may integrate trusted third-party services (such as
            authentication providers, analytics tools, or communication
            platforms) that may also use cookies.
          </p>

          <p>
            Karevo is committed to protecting user data in line with applicable
            data protection regulations. We do not sell personal information.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={handleDismiss}
            className="px-4 py-2.5 bg-primary hover:bg-primary-bright text-white rounded-lg transition-colors duration-300 text-sm font-semibold"
            type="button"
          >
            Got it
          </button>

          <a
            href="mailto:contact@karevo.health"
            className="flex-1 px-4 py-2.5 border-2 border-hairline-strong text-ink-soft hover:border-primary hover:text-primary rounded-lg transition-colors duration-300 text-sm font-semibold text-center"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
