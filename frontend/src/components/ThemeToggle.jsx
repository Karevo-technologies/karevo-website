import React, { useEffect, useState } from "react";
import { Sun, Monitor, Moon } from "lucide-react";

const STORAGE_KEY = "karevo-theme";

const options = [
  { key: "light", icon: Sun, label: "Light theme" },
  { key: "system", icon: Monitor, label: "System theme" },
  { key: "dark", icon: Moon, label: "Dark theme" },
];

const applyTheme = (theme) => {
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "system",
  );

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  return (
    <div className="inline-flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-1">
      {options.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => setTheme(key)}
          aria-label={label}
          aria-pressed={theme === key}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
            theme === key
              ? "bg-white/15 text-white"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
