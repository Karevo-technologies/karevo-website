import React, { useState } from "react";
import {
  X,
  CheckCircle,
  ArrowRight,
  User,
  Building2,
  MapPin,
  Mail,
  Phone,
  XCircle,
} from "lucide-react";
// 1. Import your supabase client instance
import { supabase } from "../supabaseClient";

export default function WaitlistModal({ isOpen, onClose }) {
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountryCode: "+234",
    phone: "",
    hospitalName: "",
    location: "",
    phoneNumber: "",
    organizationEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    if (role === "user") {
      return (
        formData.name && formData.email && formData.location && formData.phone
      );
    }
    if (role === "hospital") {
      return (
        formData.hospitalName &&
        formData.location &&
        formData.phoneNumber &&
        formData.organizationEmail
      );
    }
    return false;
  };

  // 2. Real database submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Format the payload based on the selected role to match your Supabase column names
    let dbPayload = {
      role: role,
      location: formData.location,
    };

    if (role === "user") {
      dbPayload = {
        ...dbPayload,
        name: formData.name,
        email: formData.email.trim().toLowerCase(),
        // Combine country code and phone number into a single text column
        phone: `${formData.phoneCountryCode}${formData.phone.trim()}`,
      };
    } else if (role === "hospital") {
      dbPayload = {
        ...dbPayload,
        hospital_name: formData.hospitalName,
        org_email: formData.organizationEmail.trim().toLowerCase(),
        phone_number: formData.phoneNumber.trim(),
      };
    }

    // Insert row into your Supabase table
    const { error } = await supabase.from("waitlist").insert([dbPayload]);

    setLoading(false);

    if (error) {
      // Catch duplicate submission errors (Postgres unique violation code)
      if (error.code === "23505") {
        alert("This email is already registered on our waitlist!");
      } else {
        alert(`Something went wrong: ${error.message}`);
      }
      return;
    }

    // Success flow
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setRole("");
      setFormData({
        name: "",
        email: "",
        phoneCountryCode: "+234",
        phone: "",
        hospitalName: "",
        location: "",
        phoneNumber: "",
        organizationEmail: "",
      });
      onClose();
    }, 20000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950/40 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto relative border border-gray-100 flex flex-col transform transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#3B00C5] backdrop-blur-md border border-white/20 rounded-full transition-all duration-200 z-50 group"
          title="Close"
        >
          <X className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center min-h-[480px] text-center bg-gradient-to-b from-emerald-50/30 to-white rounded-2xl">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-full border border-gray-200 bg-white/70 hover:bg-white shadow-sm transition-all duration-200"
              title="Close"
              aria-label="Close"
            >
              <XCircle className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            </button>
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-600 rounded-full scale-110 animate-bounce">
              <div className="sr-only">Success</div>
              <CheckCircle className="h-12 w-12" strokeWidth={2} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              You're on the list!
            </h2>
            <p className="text-gray-600 max-w-sm text-base leading-relaxed">
              We've saved your spot. Keep an eye on your inbox for early beta
              access choices and Karevo launch details.
            </p>

            <a
              href="https://chat.whatsapp.com/JXtPVDJgNI7EalIMnTmbX9?s=cl&p=i&ilr=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs sm:text-sm text-[#3B00C5] underline underline-offset-4"
            >
              join our community
            </a>

            <div className="mt-8 px-6 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-500 font-medium">
              Joining as:{" "}
              <span className="text-[#3B00C5] font-semibold capitalize">
                {role}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="relative bg-gradient-to-br from-[#3B00C5] via-[#2f00a0] to-[#1e0066] p-8 sm:p-10 text-white overflow-hidden rounded-2xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Karevo Ecosystem
                </span>
                <h1 className="text-3xl font-black mt-4 tracking-tight">
                  Join the Waitlist
                </h1>
                <p className="text-white/80 mt-2 text-sm sm:text-base leading-relaxed max-w-sm">
                  Be among the first to experience secure, lightning-fast
                  portable health metrics and records storage.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6 flex-1"
            >
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider">
                  Select your profile type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "user", label: "Individual User", icon: User },
                    {
                      value: "hospital",
                      label: "Hospital / Lab",
                      icon: Building2,
                    },
                  ].map((option) => {
                    const Icon = option.icon;
                    const isSelected = role === option.value;
                    return (
                      <label
                        key={option.value}
                        className="relative cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="role"
                          value={option.value}
                          checked={isSelected}
                          onChange={() => setRole(option.value)}
                          className="sr-only"
                          required
                        />
                        <div
                          className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center ${
                            isSelected
                              ? "border-[#3B00C5] bg-[#3B00C5]/5 text-[#3B00C5] font-bold shadow-sm ring-1 ring-[#3B00C5]"
                              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              isSelected
                                ? "text-[#3B00C5]"
                                : "text-gray-400 group-hover:text-gray-500"
                            }`}
                          />
                          <span className="text-sm tracking-wide">
                            {option.label}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {role && (
                <div className="space-y-4 transition-all duration-300 ease-out">
                  {role === "user" ? (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter full name"
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                            Location
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              placeholder="Enter location"
                              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                            Phone Number
                          </label>
                          <div className="flex border border-gray-200 rounded-xl bg-gray-50/50 overflow-hidden focus-within:ring-2 focus-within:ring-[#3B00C5]/20 focus-within:border-[#3B00C5] transition-all">
                            <input
                              type="tel"
                              inputMode="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder=""
                              className="flex-1 px-3 py-3 bg-transparent text-sm focus:outline-none text-gray-900 placeholder:text-gray-400"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Hospital / Lab Title
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="hospitalName"
                            value={formData.hospitalName}
                            onChange={handleInputChange}
                            placeholder="Enter hospital/lab name"
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                          Official Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            name="organizationEmail"
                            value={formData.organizationEmail}
                            onChange={handleInputChange}
                            placeholder="Enter organization mail"
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                            Facility Location
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              placeholder="Enter location"
                              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                            Contact
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              inputMode="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="Enter phone number"
                              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5]/20 focus:border-[#3B00C5] focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-sm text-gray-900 placeholder:text-gray-400"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isFormValid() || loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#3B00C5] hover:bg-[#2f00a0] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none select-none transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Join Waitlist</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-400 text-center leading-relaxed px-4">
                We respect your privacy. We'll only email you about important
                Karevo updates and launch announcements.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}