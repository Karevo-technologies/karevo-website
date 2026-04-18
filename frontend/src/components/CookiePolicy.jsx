import React, { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

const CookiePolicy = ({ isCookiePolicyOpen, onCookiePolicyClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner on every visit
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleViewPolicy = () => {
    if (onCookiePolicyClose) {
      onCookiePolicyClose(true);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner - Card Style Notification */}
      <div className="fixed bottom-6 left-6 right-6 bg-white border border-gray-200 rounded-xl shadow-lg z-40 animate-in slide-in-from-bottom-4 duration-500 max-w-md ml-auto mr-auto sm:max-w-lg lg:max-w-xl">
        <div className="px-6 py-5">
          <div className="flex flex-col gap-4">
            {/* Text Content */}
            <div>
              <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                Karevo uses cookies to support secure healthcare platform
                functionality, analyze how patients interact with our services,
                and continuously improve your healthcare experience. By
                continuing to use Karevo, you agree to our use of cookies in
                accordance with this policy.{" "}
                <button
                  onClick={handleViewPolicy}
                  className="font-semibold text-[#25789e] underline transition-colors"
                >
                  View Cookie Policy
                </button>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 text-sm font-semibold font-raleway"
              >
                Decline
              </button>
              <button
                onClick={handleDismiss}
                className="px-5 py-2 bg-[#25789e] hover:bg-[#1e5a7a] text-white rounded-lg transition-all duration-300 text-sm font-semibold font-raleway hover:shadow-md"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Cookie Policy Modal */}
      {isCookiePolicyOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[85vh] overflow-hidden flex flex-col animate-in zoom-in duration-300">
            {/* Header - Card Style */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-200 relative">
              <button
                onClick={() =>
                  onCookiePolicyClose && onCookiePolicyClose(false)
                }
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-raleway">
                Cookie Policy
              </h2>
              <p className="text-sm text-gray-500 font-raleway">
                Last updated: April 18, 2026
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {/* Introduction */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  1. Introduction
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Karevo uses cookies and similar technologies to support the
                  secure functionality of our healthcare platform and improve
                  your experience as a patient or healthcare provider.
                </p>
              </section>

              {/* Essential Cookies */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  2. Essential Cookies
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Essential cookies are required for Karevo to function
                  properly. They enable critical features such as user
                  authentication, session management, secure access to digital
                  health records, and retention of basic user preferences. These
                  cookies do not require user consent as they are necessary for
                  the operation of the platform.
                </p>
              </section>

              {/* Analytics Cookies */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  3. Analytics Cookies
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Karevo uses analytics tools to understand how users interact
                  with the platform, including page visits, feature usage, and
                  time spent on different sections. This helps us identify
                  technical issues, improve system performance, and enhance the
                  overall user experience without compromising sensitive health
                  data.
                </p>
              </section>

              {/* Limited Tracking */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  4. Limited Tracking
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Karevo does not use cookies for aggressive tracking across
                  third-party websites. Any tracking implemented is minimal and
                  strictly focused on improving platform functionality,
                  usability, and service delivery. We prioritize user privacy
                  and transparency in all tracking practices.
                </p>
              </section>

              {/* Third-Party Services */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  5. Third-Party Services
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Karevo may integrate trusted third-party services (such as
                  authentication providers, analytics tools, or communication
                  services) that may set their own cookies. These cookies are
                  governed by the respective third parties’ privacy policies,
                  and we encourage users to review them when interacting with
                  such services.
                </p>
              </section>

              {/* Managing Preferences */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  6. Managing Preferences
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Users can manage, restrict, or disable cookies at any time
                  through their browser settings. Please note that disabling
                  certain cookies may affect the functionality of key features,
                  including login sessions, appointment booking, and access to
                  digital health records.
                </p>
              </section>

              {/* Your Privacy */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  7. Your Privacy
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Karevo is committed to protecting user data in line with
                  applicable data protection regulations. We do not sell
                  personal or health-related data. Cookies are used strictly to
                  support secure access, improve services, and enhance user
                  experience within the platform.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-raleway">
                  Contact
                </h3>
                <p className="text-sm text-gray-700 font-raleway leading-relaxed">
                  Email:{" "}
                  <a
                    href="mailto:contact@karevo.health"
                    className="text-[#25789e] hover:underline font-semibold"
                  >
                    support@karevo.com
                  </a>
                  <br />
                  Website:{" "}
                  <a
                    href="karevo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25789e] hover:underline font-semibold"
                  >
                    karevo.com
                  </a>
                </p>
              </section>
            </div>

            {/* Action Buttons */}
            <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 flex gap-3">
              <button
                onClick={() =>
                  onCookiePolicyClose && onCookiePolicyClose(false)
                }
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 hover:border-[#25789e] hover:text-[#25789e] rounded-lg transition-all duration-300 text-sm font-semibold font-raleway"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onCookiePolicyClose && onCookiePolicyClose(false);
                  handleDismiss();
                }}
                className="flex-1 px-4 py-2.5 bg-[#25789e] hover:bg-[#1e5a7a] text-white rounded-lg transition-all duration-300 text-sm font-semibold font-raleway hover:shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePolicy;
