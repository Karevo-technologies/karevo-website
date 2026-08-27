import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";

const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
  backgroundSize: "18px 18px",
  maskImage:
    "radial-gradient(130% 130% at 0% 100%, #000 0%, transparent 55%)",
  WebkitMaskImage:
    "radial-gradient(130% 130% at 0% 100%, #000 0%, transparent 55%)",
};

const arcStyle = {
  backgroundImage:
    "repeating-radial-gradient(circle at 100% 0%, transparent 0, transparent 16px, rgba(255,255,255,0.12) 16px, rgba(255,255,255,0.12) 18px)",
};

const checklist = [
  "One profile with your full history",
  "Share your records in one tap, not a stack of paperwork",
  "You decide who sees what, always",
];

const roleOptions = [
  {
    value: "user",
    icon: User,
    title: "Individual User",
    description: "I'm joining as a patient or caregiver.",
  },
  {
    value: "hospital",
    icon: Building2,
    title: "Hospital / Lab",
    description: "I'm joining on behalf of a healthcare provider.",
  },
];

const Waitlist = () => {
  const [searchParams] = useSearchParams();
  const presetRole = searchParams.get("role");

  const [step, setStep] = useState(1);
  const [role, setRole] = useState(
    presetRole === "user" || presetRole === "hospital" ? presetRole : "",
  );
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let dbPayload = {
      role: role,
      location: formData.location,
    };

    if (role === "user") {
      dbPayload = {
        ...dbPayload,
        name: formData.name,
        email: formData.email.trim().toLowerCase(),
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

    const { error } = await supabase.from("waitlist").insert([dbPayload]);

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        alert("This email is already registered on our waitlist!");
      } else {
        alert(`Something went wrong: ${error.message}`);
      }
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: static brand panel */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-primary to-primary-deep text-white p-8 sm:p-12 lg:p-14 flex-col min-h-64 lg:min-h-screen">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={dotGridStyle}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-72 h-72"
          style={arcStyle}
        />

        <Link to="/" className="relative inline-block w-fit">
          <img
            src={logo}
            alt="Karevo"
            className="h-20 w-auto -mt-6 brightness-0 invert"
          />
        </Link>

        <div className="relative mt-10 lg:mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 max-w-sm">
            Your health history, always with you.
          </h1>

          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/80 text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-auto pt-10 flex items-center gap-2 text-white/70 text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          Free during early access.
        </div>
      </div>

      {/* Right: stepped form panel */}
      <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-canvas">
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="text-center">
              <div className="inline-flex mb-6 p-4 bg-emerald-50 text-emerald-600 rounded-full">
                <CheckCircle className="h-12 w-12" strokeWidth={2} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 tracking-tight">
                You're on the list!
              </h2>
              <p className="text-ink-soft leading-relaxed mb-6">
                We've saved your spot. Keep an eye on your inbox for early
                beta access and Karevo launch details.
              </p>
              <div className="mb-8 inline-flex px-6 py-2.5 bg-paper border border-hairline rounded-full text-sm text-ink-soft font-medium">
                Joining as:{" "}
                <span className="text-primary font-semibold capitalize ml-1">
                  {role}
                </span>
              </div>
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </div>
            </div>
          ) : step === 1 ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Step 1 of 2
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-2">
                How will you use Karevo?
              </h2>
              <p className="text-ink-soft mb-8">
                Tell us who you are so we can get you the right start.
              </p>

              <div className="space-y-3 mb-8">
                {roleOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = role === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRole(option.value)}
                      className={`w-full text-left rounded-2xl border p-4 flex items-start gap-4 transition-colors duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-hairline hover:border-hairline-strong"
                      }`}
                    >
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-paper text-ink-soft"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <div className="font-semibold text-ink">
                          {option.title}
                        </div>
                        <div className="text-sm text-ink-soft">
                          {option.description}
                        </div>
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                          isSelected
                            ? "bg-primary text-white"
                            : "border border-hairline-strong"
                        }`}
                      >
                        {isSelected && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                disabled={!role}
                onClick={() => setStep(2)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-bright text-white text-sm font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-6"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>

              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Step 2 of 2
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-8">
                {role === "user"
                  ? "Tell us about you"
                  : "Tell us about your hospital"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {role === "user" ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                          className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                          className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                            className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
                          Phone Number
                        </label>
                        <div className="flex border border-hairline rounded-xl bg-paper overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-colors">
                          <input
                            type="tel"
                            inputMode="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="flex-1 px-3 py-3 bg-transparent text-sm focus:outline-none text-ink placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                          className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                          className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                            className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-ink-soft uppercase mb-1.5">
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
                            className="w-full pl-11 pr-4 py-3 border border-hairline rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors bg-paper hover:bg-canvas text-sm text-ink placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid() || loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-bright text-white text-sm font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed select-none transition-colors duration-200"
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

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  We respect your privacy. We'll only email you about
                  important Karevo updates and launch announcements.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
