// pages/Customer.jsx
import { useOutletContext } from "react-router-dom";
import { Search, Filter, Plus, Edit, Eye, Trash2, Users } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FiUserPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Customer() {
  const { darkMode } = useOutletContext();

    const customers = [
    {
      id: "#CUS001",
      name: "A Khan",
      phone: "01893531209",
      doctor: "Dr. A.K",
      balance: "$53,546.00",
      date: "Feb 24, 2025",
    },
    {
      id: "#CUS002",
      name: "A Ghogh",
      phone: "01893531209",
      doctor: "Dr. A.G",
      balance: "$23,732.00",
      date: "Feb 25, 2025",
    },
    {
      id: "#CUS003",
      name: "J Khan",
      phone: "01893531209",
      doctor: "DR. J.k",
      balance: "$15,324.00",
      date: "Feb 26, 2025",
    },
    {
      id: "#CUS004",
      name: "Hasan Khan",
      phone: "01893531209",
      doctor: "Dr. H.K",
      balance: "$18,435.00",
      date: "Feb 27, 2025",
    },
    {
      id: "#CUS005",
      name: "Ali Khan",
      phone: "01893531209",
      doctor: "Dr. W",
      balance: "$19,324.00",
      date: "Feb 28, 2025",
    },
    {
      id: "#CUS006",
      name: "A S",
      phone: "01893531209",
      doctor: "Dr. A.B.D",
      balance: "$34,768.00",
      date: "Mar 01, 2025",
    },
    {
      id: "#CUS007",
      name: "J Khan",
      phone: "01893531209",
      doctor: "Dr A.S",
      balance: "$52,324.00",
      date: "Mar 02, 2025",
    },
  ];


  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Customer</h1>
          <p
            className={darkMode ? "text-gray-400" : "text-gray-600"}
          >
            A pharmacy purchase refers to the act of buying medications, medical
            supplies.
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
          Add New Customer
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <div
          className={`p-4 shadow rounded-md flex justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <Users size={18} className="text-blue-600" />
              </div>
              <p className="text-sm font-medium">Total Customer</p>
            </div>
            <h2 className="text-2xl font-bold">1,253</h2>
            <p className="text-green-600 text-xs">↑ 12% Since last week</p>
          </div>
          <div className="w-28 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { value: 5 },
                  { value: 7 },
                  { value: 4 },
                  { value: 8 },
                  { value: 10 },
                  { value: 9 },
                  { value: 6 },
                  { value: 7 },
                ]}
              >
                <Bar
                  dataKey="value"
                  fill={darkMode ? "#60a5fa" : "#2563eb"}
                  radius={[4, 4, 0, 0]}
                  barSize={6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`p-4 shadow rounded-md flex justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <Users size={18} className="text-green-600" />
              </div>
              <p className="text-sm font-medium">New Customer</p>
            </div>
            <h2 className="text-2xl font-bold">675</h2>
            <p className="text-red-500 text-xs flex items-center gap-1">
              <span>↓ -05%</span>
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                Since last week
              </span>
            </p>
          </div>
          <div className="w-28 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { value: 3 },
                  { value: 6 },
                  { value: 4 },
                  { value: 7 },
                  { value: 5 },
                  { value: 8 },
                  { value: 6 },
                  { value: 7 },
                ]}
              >
                <Bar
                  dataKey="value"
                  fill={darkMode ? "#86efac" : "#22c55e"}
                  radius={[4, 4, 0, 0]}
                  barSize={6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`p-4 shadow rounded-md flex justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-orange-900" : "bg-orange-100"
                }`}
              >
                <FiUserPlus size={18} className="text-orange-500" />
              </div>
              <p className="text-sm font-medium">Returning</p>
            </div>
            <h2 className="text-2xl font-bold">76%</h2>
            <p className="text-green-600 text-xs flex items-center gap-1">
              ↑ 19%{" "}
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                Since last week
              </span>
            </p>
          </div>
          <div className="w-28 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { value: 4 },
                  { value: 7 },
                  { value: 6 },
                  { value: 9 },
                  { value: 5 },
                  { value: 8 },
                  { value: 7 },
                  { value: 6 },
                ]}
              >
                <Bar
                  dataKey="value"
                  fill={darkMode ? "#fb923c" : "#f97316"}
                  radius={[4, 4, 0, 0]}
                  barSize={6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Search + Filter */}
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

        {/* Table */}
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
                <th className="p-3">Customer ID</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Doctor Name</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Order Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr
                  key={i}
                  className={`border-t transition-colors duration-300 ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{c.id}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={""}
                      alt={c.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {c.name}
                  </td>
                  <td className="p-3">{c.phone}</td>
                  <td className="p-3">{c.doctor}</td>
                  <td className="p-3">{c.balance}</td>
                  <td className="p-3">{c.date}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      className={`p-2 rounded transition ${
                        darkMode
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      className={`p-2 rounded transition ${
                        darkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className={`p-2 rounded transition ${
                        darkMode
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-orange-500 text-white hover:bg-orange-600"
                      }`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className={`flex items-center justify-between mt-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>Showing 1 to 8 of 50 entries</span>
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
  );
}