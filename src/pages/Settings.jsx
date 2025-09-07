//pages/Settings.jsx
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Settings() {
  const { darkMode } = useOutletContext();

  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    autoLogout: true,
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Configure your dashboard preferences.
        </p>
      </div>

      <div className="space-y-4">
        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">🌙 Dark Mode</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Toggle dark mode for the dashboard UI.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
            className="w-5 h-5"
          />
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">📧 Email Notifications</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Receive email notifications for important events.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
            className="w-5 h-5"
          />
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">⏱ Auto Logout</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Automatically log out after inactivity.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.autoLogout}
            onChange={() => handleToggle("autoLogout")}
            className="w-5 h-5"
          />
        </div>

        <button
          className={`mt-4 px-4 py-2 rounded transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}