import React, { useState } from "react";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [passwordChecks, setPasswordChecks] = useState({
    minLength: false,
    uppercase: false,
    specialChar: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Password validation
    if (name === "password") {
      setPasswordChecks({
        minLength: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        specialChar: /[!@#$%^&*?]/.test(value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Form submitted:", formData, passwordChecks);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-[#254c53] to-gray-800 bg-clip-text text-transparent mb-4 font-raleway">
            Good to have you here!
          </h1>
          <p className="text-gray-600 font-raleway">
            Join Karevo today and take control of your health
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#254c53]/50 focus:border-[#254c53] transition-all duration-300 shadow-sm font-raleway"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#254c53]/50 focus:border-[#254c53] transition-all duration-300 shadow-sm font-raleway"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#254c53]/50 focus:border-[#254c53] transition-all duration-300 shadow-sm font-raleway"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#254c53]/50 focus:border-[#254c53] transition-all duration-300 shadow-sm font-raleway"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4 font-raleway">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#254c53]/50 focus:border-[#254c53] transition-all duration-300 shadow-sm font-raleway mb-4"
              required
            />

            {/* Password Requirements */}
            <div className="space-y-2 text-sm">
              <div
                className={`flex items-center gap-2 ${passwordChecks.minLength ? "text-green-600" : "text-gray-500"}`}
              >
                <CheckCircle
                  className={`h-4 w-4 ${passwordChecks.minLength ? "fill-green-600 stroke-green-600" : "fill-transparent stroke-current"}`}
                />
                Minimum 8 characters
              </div>
              <div
                className={`flex items-center gap-2 ${passwordChecks.uppercase ? "text-green-600" : "text-gray-500"}`}
              >
                <CheckCircle
                  className={`h-4 w-4 ${passwordChecks.uppercase ? "fill-green-600 stroke-green-600" : "fill-transparent stroke-current"}`}
                />
                One uppercase letter
              </div>
              <div
                className={`flex items-center gap-2 ${passwordChecks.specialChar ? "text-green-600" : "text-gray-500"}`}
              >
                <CheckCircle
                  className={`h-4 w-4 ${passwordChecks.specialChar ? "fill-green-600 stroke-green-600" : "fill-transparent stroke-current"}`}
                />
                One special character (!@#$%^&*?)
              </div>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={
              !Object.values(passwordChecks).every(Boolean) ||
              !formData.firstName ||
              !formData.lastName ||
              !formData.email ||
              !formData.phone
            }
            className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#254c53] to-[#1e3a40] text-white text-xl font-bold rounded-[100px] hover:from-[#1e3a40] hover:to-[#15202b] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-xl font-raleway"
          >
            Create Account
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 font-raleway">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-[#254c53] hover:text-[#1e3a40] transition-colors font-raleway"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
