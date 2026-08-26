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
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center pt-25 sm:pt-0 mb-16 sm:mb-20 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm sm:text-base mb-5">
            Contact Karevo
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-5 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-xl text-ink-soft max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-paper p-6 sm:p-8">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                    <Mail className="w-7 h-7 text-primary" />
                  </span>
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-canvas rounded-2xl border border-hairline">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </span>
                    <div className="text-sm">
                      <div className="text-ink-soft">Phone 1</div>
                      <div className="font-semibold text-ink">
                        +2348076041327
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-canvas rounded-2xl border border-hairline">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </span>
                    <div className="text-sm">
                      <div className="text-ink-soft">Phone 2</div>
                      <div className="font-semibold text-ink">
                        +2347070328209
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-canvas rounded-2xl border border-hairline">
                    <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </span>
                    <div className="text-sm">
                      <div className="text-ink-soft">Location</div>
                      <div className="font-semibold text-ink">
                        Ogbomoso, Oyo State.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-ink-soft">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Usually responds within 1–2 business days.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
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
                    <label className="block text-sm font-bold text-ink mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                        errors.name ? "border-red-500" : "border-hairline"
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                        errors.email ? "border-red-500" : "border-hairline"
                      }`}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical ${
                        errors.message ? "border-red-500" : "border-hairline"
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
                      className="w-full bg-gradient-to-r from-primary to-primary-deep hover:from-primary-bright hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
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