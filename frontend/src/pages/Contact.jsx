import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, Mail as MailIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form submitted:", formData);

    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-40 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#25789e] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#25789e] mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8 text-[#25789e]" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <MailIcon className="w-5 h-5 text-[#25789e]" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@karevo.health</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5 text-[#25789e]" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+234 805-235-0516</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5 text-[#25789e]" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                  Thank you! Your message has been sent. We'll get back to you
                  soon.
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#25789e] focus:border-[#25789e] transition-all ${errors.name ? "border-red-500" : "border-gray-200"}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#25789e] focus:border-[#25789e] transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#25789e] focus:border-[#25789e] transition-all resize-vertical ${errors.message ? "border-red-500" : "border-gray-200"}`}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#25789e] to-[#1e5f73] hover:from-[#1e5f73] hover:to-[#144954] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
