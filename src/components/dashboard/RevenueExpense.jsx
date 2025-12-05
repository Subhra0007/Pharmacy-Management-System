import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { IoIosArrowDown } from "react-icons/io";

export default function RevenueExpense({ data, darkMode }) {
  const [view, setView] = useState("Monthly"); // "Monthly" or "Yearly"

  return (
    <div
      className={`p-4 shadow rounded-md transition-colors duration-300 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold mb-2">Budget vs Expense Graph</h2>
        <div className="flex bg-gray-200 rounded p-1 dark:bg-gray-600">
          <button
            onClick={() => setView("Monthly")}
            className={`px-3 py-1 text-xs rounded transition ${view === "Monthly" ? (darkMode ? "bg-gray-500 text-white shadow" : "bg-white text-gray-900 shadow") : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("Yearly")}
            className={`px-3 py-1 text-xs rounded transition ${view === "Yearly" ? (darkMode ? "bg-gray-500 text-white shadow" : "bg-white text-gray-900 shadow") : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"}`}
          >
            Yearly
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
          <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#374151" : "#fff",
              color: darkMode ? "#e5e7eb" : "#374151",
              border: darkMode ? "1px solid #4b5563" : "1px solid #e5e7eb",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={darkMode ? "#60a5fa" : "#2563eb"}
            name="Budget"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke={darkMode ? "#fb923c" : "#f97316"}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}