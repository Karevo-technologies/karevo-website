import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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
    try {
      await new Promise((r) => setTimeout(r, 500));
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3B00C5] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-[#3B00C5] mb-4 flex items-center gap-3">
              <Mail className="w-8 h-8 text-[#3B00C5]" />
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Mail className="w-5 h-5 text-[#3B00C5]" />
                <div className="text-sm">
                  <div className="text-gray-500">Email</div>
                  <div className="font-medium text-gray-800">
                    contact@karevo.health
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Phone className="w-5 h-5 text-[#3B00C5]" />
                <div className="text-sm">
                  <div className="text-gray-500">Phone</div>
                  <div className="font-medium text-gray-800">
                    +234 805-235-0516
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-5 h-5 text-[#3B00C5]" />
                <div className="text-sm">
                  <div className="text-gray-500">Location</div>
                  <div className="font-medium text-gray-800">
                    Lagos, Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all ${errors.name ? "border-red-500" : "border-gray-200"}`}
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] transition-all resize-vertical ${errors.message ? "border-red-500" : "border-gray-200"}`}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#3B00C5] to-[#2f00a0] hover:bg-[#5245E3] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
