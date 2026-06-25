import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// 1. Import your central supabase client config
import { supabase } from "../supabaseClient"; // Adjust this path to match your file setup

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, text: "" }); // Form alert state
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";

    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, text: "" });

    try {
      // 2. Direct database entry into your contact_messages table
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          },
        ]);

      if (error) throw error;

      // Reset form on success
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitStatus({ type: "success", text: "Message sent successfully! Talk to you soon." });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        type: "error",
        text: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center pt-25 sm:pt-0 mb-16 sm:mb-20 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B00C5]/10 text-[#3B00C5] font-semibold text-sm sm:text-base mb-5">
            Contact Karevo
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3B00C5] mb-5 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 shadow-sm p-6 sm:p-8">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#3B00C5]/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2f00a0]/10 blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3B00C5] mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#3B00C5]/10">
                    <Mail className="w-7 h-7 text-[#3B00C5]" />
                  </span>
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#3B00C5]/10">
                      <Phone className="w-5 h-5 text-[#3B00C5]" />
                    </span>
                    <div className="text-sm">
                      <div className="text-gray-500">Phone 1</div>
                      <div className="font-semibold text-gray-900">
                        +2348076041327
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#3B00C5]/10">
                      <Phone className="w-5 h-5 text-[#3B00C5]" />
                    </span>
                    <div className="text-sm">
                      <div className="text-gray-500">Phone 2</div>
                      <div className="font-semibold text-gray-900">
                        +2347070328209
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#3B00C5]/10">
                      <MapPin className="w-5 h-5 text-[#3B00C5]" />
                    </span>
                    <div className="text-sm">
                      <div className="text-gray-500">Location</div>
                      <div className="font-semibold text-gray-900">
                        Oyo State, Ogbomoso
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#3B00C5]" />
                  Usually responds within 1–2 business days.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#3B00C5]/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#2f00a0]/10 blur-3xl" />

              <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Status Banner UI */}
                  {submitStatus.text && (
                    <div
                      className={`p-4 rounded-xl text-sm font-medium ${
                        submitStatus.type === "success"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                          : "bg-rose-50 text-rose-800 border border-rose-100"
                      }`}
                    >
                      {submitStatus.text}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all resize-vertical ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden w-full bg-gradient-to-r from-[#3B00C5] to-[#2f00a0] hover:bg-[#5245E3] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[200%]"
                      />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;