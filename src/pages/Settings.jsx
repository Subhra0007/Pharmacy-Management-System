import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Settings() {
  const { darkMode } = useOutletContext();

  const [settings, setSettings] = useState({
    currency: "USD",
    shiftDuration: "8",
    doctorClinicAvailable: false,
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSelectChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogout = () => {
    alert("Logging out...");
    // Add actual logout logic here (e.g., clear auth token, redirect to login)
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
          Configure your pharmacy preferences.
        </p>
      </div>

      <div className="space-y-4">
        {/* Currency Selection */}
        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">💵 Currency</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Select the currency for transactions and display.
            </p>
          </div>
          <select
            value={settings.currency}
            onChange={(e) => handleSelectChange("currency", e.target.value)}
            className={`border rounded px-2 py-1 text-sm ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* Shift Duration */}
        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">⏰ Shift Duration</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Set the duration for employee shifts (login/logout).
            </p>
          </div>
          <select
            value={settings.shiftDuration}
            onChange={(e) => handleSelectChange("shiftDuration", e.target.value)}
            className={`border rounded px-2 py-1 text-sm ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <option value="8">8 Hours</option>
            <option value="10">10 Hours</option>
            <option value="12">12 Hours</option>
          </select>
        </div>

        {/* Doctor Clinic Availability */}
        <div
          className={`flex items-center justify-between p-4 border rounded transition-colors duration-300 ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <h3 className="font-medium text-lg">🏥 Doctor Clinic</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Enable or disable the pharmacy's doctor clinic.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.doctorClinicAvailable}
            onChange={() => handleToggle("doctorClinicAvailable")}
            className="w-5 h-5"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Save Settings
          </button>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 px-4 py-2 rounded transition ${
              darkMode
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}