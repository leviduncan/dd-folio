import { useEffect, useState } from "react";

export default function ThemeToggle({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
      return globalThis.localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
      globalThis.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      {children}
      <button
        className={`absolute top-5 right-5 p-2 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
        } rounded-md transition-all`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}