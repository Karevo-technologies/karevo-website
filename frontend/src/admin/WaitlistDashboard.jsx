import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { LogOut } from "lucide-react"; // 👈 1. Imported the LogOut icon
import { supabase } from "../supabaseClient";

// Updated data fetching function directly querying Supabase
async function fetchWaitlistEntries() {
  const { data, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false }); // Newest signups first

  if (error) {
    throw new Error(error.message || "Failed to load waitlist entries");
  }

  return data || [];
}

const Badge = ({ children, tone = "indigo" }) => {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    rose: "bg-rose-50 text-rose-700 border-rose-200/60",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium border ${tones[tone] || tones.indigo}`}
    >
      {children}
    </span>
  );
};

const ITEMS_PER_PAGE = 5;

const WaitlistDashboard = () => {
  const navigate = useNavigate(); 
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true); 
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); 
  const [currentPage, setCurrentPage] = useState(1);

  // 🛡️ Security Check: Run authentication scan before loading anything else
  useEffect(() => {
    const verifyAdminSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // No session found? Evict browser back to gateway instantly
        navigate("/admin/login", { replace: true });
      } else {
        // Authorized. Dissolve screen guard and allow layout mounting
        setCheckingAuth(false);
      }
    };

    verifyAdminSession();
  }, [navigate]);

  // Main Data Pipeline Hook
  useEffect(() => {
    // Only fetch data if auth verification passes
    if (checkingAuth) return;

    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchWaitlistEntries();
        if (!mounted) return;
        setEntries(data);
      } catch (e) {
        if (!mounted) return;
        setEntries([]);
        setError(e?.message || "Failed to load waitlist entries");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [checkingAuth]);

  // 👈 2. Added the handleSignOut handler
  const handleSignOut = async () => {
    try {
      // Clear session inside Supabase server instance
      await supabase.auth.signOut();

      // Expire and completely wipe out the Vercel Edge token cookie
      document.cookie = "sb-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax; Secure";

      // Direct browser hard fallback back to login
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const filteredEntries = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((x) => x?.role === filter);
  }, [entries, filter]);

  const paginatedEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEntries.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEntries, currentPage]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEntries.length / ITEMS_PER_PAGE),
  );

  // 🔒 Render Blank Shield State while checking active session token tokens
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-400 font-semibold text-sm tracking-wide">
        <span className="h-2 w-2 rounded-full bg-[#3B00C5] animate-ping mr-2" />
        Verifying security credentials...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Waitlist Entries
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">
              Manage incoming pipeline data, individual sign-ups, and corporate
              clinical entities.
            </p>
          </div>
          
          {/* 👈 3. Grouped Status Badge and the Log Out Button Layout */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-2 rounded-lg">
              System Active • {loading ? "Loading..." : `${entries.length} total entries`}
            </div>
            
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 bg-rose-50 hover:bg-rose-100 border border-rose-200/60 text-rose-700 text-xs font-semibold rounded-xl transition-all shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Filters and Counters Segment */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="inline-flex rounded-xl bg-slate-200/70 p-1 backdrop-blur-sm self-start">
            {[
              { id: "all", label: "All Entries" },
              { id: "user", label: "Individuals" },
              { id: "hospital", label: "Hospitals & Labs" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-sm text-slate-500 flex items-center gap-2 px-1">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            Showing <strong className="text-slate-800">{filteredEntries.length}</strong> total results
          </div>
        </div>

        {/* Error Container */}
        {error && (
          <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800 text-sm font-medium shadow-sm">
            {error}
          </div>
        )}

        {/* Main Content Card / Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Status</th>
                  {filter !== "hospital" && <th className="px-6 py-4">Full Name</th>}
                  {filter !== "user" && <th className="px-6 py-4">Hospital / Entity Name</th>}
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Geographic Location</th>
                  <th className="px-6 py-4">Phone Contact</th>
                  <th className="px-6 py-4">Timestamp</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white text-sm">
                {loading ? (
                  Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
                    <tr key={idx} className="animate-pulse">
                      <td colSpan={7} className="px-6 py-4.5">
                        <div className="h-4 bg-slate-100 rounded-md w-full" />
                      </td>
                    </tr>
                  ))
                ) : paginatedEntries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center">
                      <div className="max-w-md mx-auto">
                        <Badge tone="indigo">No active items</Badge>
                        <p className="mt-3 text-slate-500 font-medium">
                          No waitlist entries found matching this scope.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedEntries.map((x, idx) => {
                    const isHospital = x?.role === "hospital";
                    const badgeTone = isHospital ? "emerald" : "indigo";
                    const createdAt = x?.created_at;

                    return (
                      <tr
                        key={x?.id || idx}
                        className={`hover:bg-slate-50/60 transition-colors ${
                          isHospital ? "bg-emerald-50/10" : "bg-transparent"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge tone={badgeTone}>
                            {isHospital ? "Hospital / Lab" : "Individual"}
                          </Badge>
                        </td>

                        {filter !== "hospital" && (
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">
                            {x?.name || <span className="text-slate-300">—</span>}
                          </td>
                        )}
                        {filter !== "user" && (
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-950">
                            {x?.hospital_name || <span className="text-slate-300">—</span>}
                          </td>
                        )}

                        <td className="px-6 py-4 whitespace-nowrap text-slate-600 font-mono text-xs">
                          {isHospital ? x?.org_email : x?.email || "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                          {x?.location || "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                          {isHospital ? x?.phone_number : x?.phone || "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400">
                          {createdAt
                            ? new Date(createdAt).toLocaleString(undefined, {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })
                            : "—"}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Layout Footer */}
          {!loading && filteredEntries.length > 0 && (
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Page <strong className="text-slate-800">{currentPage}</strong> of{" "}
                <strong className="text-slate-800">{totalPages}</strong>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }).map((_, pageIdx) => {
                  const pageNum = pageIdx + 1;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistDashboard;