import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-40 pb-20 text-center bg-canvas">
      <div className="inline-flex p-4 rounded-full bg-rose-50 text-rose-600 mb-6 animate-bounce">
        <AlertCircle className="w-12 h-12" />
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-bold text-primary tracking-tight mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
        Page Not Found
      </h2>
      <p className="text-base sm:text-lg text-ink-soft max-w-md mx-auto mb-8">
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-primary hover:bg-primary-bright text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Go Back Home
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="w-full bg-paper hover:bg-hairline text-ink-soft font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default NotFound;