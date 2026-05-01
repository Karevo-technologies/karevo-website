import React, { useState } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospitalName: "",
    location: "",
    organizationEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Store in localStorage for now (will migrate to Supabase)
    const waitlistData = {
      id: Date.now(),
      role,
      ...(role === "user"
        ? { name: formData.name, email: formData.email }
        : {
            hospitalName: formData.hospitalName,
            location: formData.location,
            organizationEmail: formData.organizationEmail,
          }),
      timestamp: new Date().toISOString(),
    };

    const existingData =
      JSON.parse(localStorage.getItem("karevowaitlist")) || [];
    existingData.push(waitlistData);
    localStorage.setItem("karevowaitlist", JSON.stringify(existingData));

    setLoading(false);
    setSubmitted(true);

    // Close modal after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        hospitalName: "",
        location: "",
        organizationEmail: "",
      });
      setRole("");
      onClose();
    }, 3000);
  };

  const isFormValid = () => {
    if (role === "user") {
      return formData.name && formData.email;
    } else if (role === "hospital") {
      return (
        formData.hospitalName && formData.location && formData.organizationEmail
      );
    }
    return false;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300">
        {/* Close Button - Positioned inside with better visibility */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 z-10 group"
          title="Close"
        >
          <X className="h-6 w-6 text-gray-400 group-hover:text-gray-700 transition-colors" />
        </button>

        {/* Success State */}
        {submitted ? (
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center min-h-[450px] text-center">
            <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-full animate-in zoom-in duration-500">
              <CheckCircle
                className="h-16 w-16 text-green-600"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-raleway">
              Welcome to the waitlist!
            </h2>
            <p className="text-gray-600 font-raleway text-lg leading-relaxed">
              We're excited to have you join us. Watch your inbox for updates on
              when Karevo launches.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-lg text-gray-500 font-raleway">
                Joining as:{" "}
                <span className="font-semibold text-gray-700 capitalize">
                  {role}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Header with Gradient Background */}
            <div className="relative bg-gradient-to-br from-[#25789e] to-[#1e5a7a] p-8 sm:p-10 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-0"></div>
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-4xl font-bold mb-3 font-raleway">
                  Join the Waitlist
                </h1>
                <p className="text-white/90 font-raleway text-lg leading-relaxed">
                  Be among the first to access secure, portable healthcare with
                  Karevo.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-7">
              {/* Role Selection */}
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-4 font-raleway">
                  How will you use Karevo?
                </label>
                <div className="flex gap-3">
                  {[
                    { value: "user", label: "User" },
                    { value: "hospital", label: "Hospital" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex-1 relative cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={option.value}
                        checked={role === option.value}
                        onChange={() => setRole(option.value)}
                        className="sr-only"
                        required
                      />
                      <div
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center font-semibold font-raleway ${
                          role === option.value
                            ? "border-[#25789e] bg-gradient-to-br from-[#25789e]/10 to-[#25789e]/5 ring-2 ring-[#25789e]/20"
                            : "border-gray-200 bg-white hover:border-[#25789e]/30 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

{/* User Form Fields */}
              {role === "user" && (
                <>
                  {/* Name Input */}
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 font-raleway">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Dev 404"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#25789e]/50 focus:border-[#25789e] focus:outline-none transition-all duration-300 shadow-sm font-raleway bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 font-raleway">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#25789e]/50 focus:border-[#25789e] focus:outline-none transition-all duration-300 shadow-sm font-raleway bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>
                </>
              )}

              {/* Hospital Form Fields */}
              {role === "hospital" && (
                <>
                  {/* Hospital Name Input */}
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 font-raleway">
                      Hospital Name
                    </label>
                    <input
                      type="text"
                      name="hospitalName"
                      value={formData.hospitalName}
                      onChange={handleInputChange}
                      placeholder="LAUTECH Teaching Hospital"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#25789e]/50 focus:border-[#25789e] focus:outline-none transition-all duration-300 shadow-sm font-raleway bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>

                  {/* Location Input */}
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 font-raleway">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ogbomoso, Oyo State"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#25789e]/50 focus:border-[#25789e] focus:outline-none transition-all duration-300 shadow-sm font-raleway bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>

                  {/* Organization Email Input */}
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 delay-200">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 font-raleway">
                      Organization Email
                    </label>
                    <input
                      type="email"
                      name="organizationEmail"
                      value={formData.organizationEmail}
                      onChange={handleInputChange}
                      placeholder="contact@hospital.com"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#25789e]/50 focus:border-[#25789e] focus:outline-none transition-all duration-300 shadow-sm font-raleway bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              {role && (
                <button
                  type="submit"
                  disabled={!isFormValid() || loading}
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#25789e] to-[#1e5a7a] text-white text-lg font-bold rounded-xl hover:from-[#1e5a7a] hover:to-[#15404d] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:translate-y-0 font-raleway disabled:from-[#25789e] disabled:to-[#1e5a7a] animate-in fade-in duration-300"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              )}

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center font-raleway leading-relaxed">
                We respect your privacy. We'll only email you about important
                Karevo updates and launch announcements.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
