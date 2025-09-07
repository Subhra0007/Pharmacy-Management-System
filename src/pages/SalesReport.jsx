//pages/SalesReport.jsx
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Search, Filter, Plus } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { useOutletContext } from "react-router-dom";

export default function SalesReport() {
  const { darkMode } = useOutletContext();

  const [reports, setReports] = useState([
    { id: "#S-001", date: "Feb 19, 2025", customer: "A Khan", total: 500 },
    { id: "#S-002", date: "Feb 20, 2025", customer: "B Smith", total: 1200 },
    { id: "#S-003", date: "Feb 21, 2025", customer: "C Johnson", total: 300 },
  ]);

  const [topMedicines, setTopMedicines] = useState([
    { name: "Dolo 650", sales: 54647 },
    { name: "Crosin", sales: 12345 },
    { name: "Gelusil", sales: 16567 },
    { name: "Benadryl", sales: 10412 },
    { name: "Panadol", sales: 9500 },
    { name: "Amoxicillin", sales: 8900 },
    { name: "Aspirin", sales: 8700 },
    { name: "Paracetamol", sales: 8500 },
    { name: "Ibuprofen", sales: 8300 },
    { name: "Cough Syrup", sales: 8100 },
  ]);

  const COLORS = [
    "#4f46e5",
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
    "#6366f1",
    "#3b82f6",
    "#14b8a6",
    "#f97316",
    "#84cc16",
    "#f43f5e",
  ];

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Sales Report</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            View sales data and top-selling medicines.
          </p>
        </div>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <Plus size={18} />
          Add New Report
        </button>
      </div>

      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="p-4 border rounded transition-colors duration-300">
          <h3 className="font-medium mb-4">Top 10 Selling Medicines</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={topMedicines}
                dataKey="sales"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#4f46e5"
                label={(entry) => entry.name}
              >
                {topMedicines.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  color: darkMode ? "#f3f4f6" : "#1f2937",
                  border: darkMode ? "1px solid #4b5563" : "1px solid #e5e7eb",
                }}
              />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <Search
                className={`absolute left-3 top-2.5 ${
                  darkMode ? "text-gray-400" : "text-gray-400"
                }`}
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className={`pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <button
              className={`flex items-center gap-2 border px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "border-gray-500 text-gray-100 hover:bg-gray-600"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Filter size={18} />
              Filter
              <IoIosArrowDown className="ml-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table
              className={`w-full border rounded-lg overflow-hidden ${
                darkMode ? "border-gray-600" : "border-gray-200"
              }`}
            >
              <thead
                className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
              >
                <tr>
                  <th className="p-3">
                    <input type="checkbox" />
                  </th>
                  <th className="p-3">Report ID</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Total Sale</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr
                    key={index}
                    className={`border-t transition-colors duration-300 ${
                      darkMode
                        ? "border-gray-600 hover:bg-gray-600"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <td className="p-3">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3">{report.id}</td>
                    <td className="p-3">{report.date}</td>
                    <td className="p-3">{report.customer}</td>
                    <td className="p-3">${report.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`flex items-center justify-between mt-4 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>Showing 1 to 3 of 50 entries</span>
            <div className="flex items-center gap-2">
              <button
                className={`px-2 py-1 border rounded ${
                  darkMode ? "border-gray-500 hover:bg-gray-600" : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                &lt;
              </button>
              <button
                className={`px-3 py-1 border rounded ${
                  darkMode
                    ? "bg-blue-600 text-white border-gray-500"
                    : "bg-blue-600 text-white border-gray-300"
                }`}
              >
                1
              </button>
              <button
                className={`px-3 py-1 border rounded ${
                  darkMode
                    ? "border-gray-500 text-gray-100 hover:bg-gray-600"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                2
              </button>
              <button
                className={`px-3 py-1 border rounded ${
                  darkMode
                    ? "border-gray-500 text-gray-100 hover:bg-gray-600"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                3
              </button>
              <span>...</span>
              <button
                className={`px-3 py-1 border rounded ${
                  darkMode
                    ? "border-gray-500 text-gray-100 hover:bg-gray-600"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                10
              </button>
              <button
                className={`px-2 py-1 border rounded ${
                  darkMode ? "border-gray-500 hover:bg-gray-600" : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                &gt;
              </button>
            </div>
            <div>
              <select
                className={`border rounded px-2 py-1 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option>Show 8</option>
                <option>Show 10</option>
                <option>Show 20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}