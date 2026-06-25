import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient"; // Double check this points to your client file!
// 1. Corrected the named import to a default import for asset reliability
import logo from "../../assets/logo.png"; 

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Log into Supabase
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (authError) throw authError;

      // 2. Set the cookie session token so Vercel edge can read it
      const session = data.session;
      if (session) {
        document.cookie = `sb-access-token=${session.access_token}; path=/; max-age=${session.expires_in}; SameSite=Lax; Secure`;
      }

      // 3. Jump straight into the dashboard view
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Invalid login credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-md border border-gray-100">
        <div className="text-center">
          {/* 2. Brand Logo Container replacing the plain background block */}
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="Karevo Brand Logo" 
              className="h-40" 
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Karevo Backoffice</h2>
          <p className="mt-2 text-sm text-gray-600">Authorized personnel only</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="p-3 rounded-xl text-sm bg-rose-50 border border-rose-100 text-rose-800 font-medium">
              {error}
            </div>
          )}

          <div className="rounded-md space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] outline-none transition-all"
                placeholder="admin@karevo.health"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B00C5] focus:border-[#3B00C5] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-[#3B00C5] hover:bg-opacity-90 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-md"
          >
            {loading ? "Authenticating..." : "Sign In to Console"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;