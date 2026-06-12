import React, { useState } from "react";
import Features from "../components/Features";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!form.password.trim()) nextErrors.password = "Password is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setForm({ fullName: "", email: "", password: "" });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-[#3B00C5] to-[#2f00a0] bg-clip-text text-transparent mb-4 font-raleway">
          Good to have you here!
        </h1>

        <p className="text-lg text-gray-600 mb-10 font-raleway">
          Create your account to get started with Karevo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2 font-raleway">
              Full Name
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#3B00C5]/50 focus:border-[#3B00C5] transition-all duration-300 shadow-sm font-raleway ${errors.fullName ? "border-red-500" : ""}`}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2 font-raleway">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#3B00C5]/50 focus:border-[#3B00C5] transition-all duration-300 shadow-sm font-raleway ${errors.email ? "border-red-500" : ""}`}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2 font-raleway">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#3B00C5]/50 focus:border-[#3B00C5] transition-all duration-300 shadow-sm font-raleway ${errors.password ? "border-red-500" : ""}`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B00C5] to-[#2f00a0] text-white text-xl font-bold rounded-[100px] hover:from-[#1e3a40] hover:to-[#15202b] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-xl font-raleway"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
