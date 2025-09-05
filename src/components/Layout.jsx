// components/Layout.jsx
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with dark mode toggle */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet context={{ darkMode }} />
        </main>
      </div>
    </div>
  );
}