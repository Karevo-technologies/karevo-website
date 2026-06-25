import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-40 pb-20 text-center bg-white">
      <div className="inline-flex p-4 rounded-full bg-rose-50 text-rose-600 mb-6 animate-bounce">
        <AlertCircle className="w-12 h-12" />
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3B00C5] tracking-tight mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto mb-8">
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#3B00C5] hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md"
        >
          Go Back Home
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default NotFound;