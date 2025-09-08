//pages/Product.jsx
import { useState } from "react";
import { Eye, Edit, Trash2, Search, Filter, Plus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Product() {
  const { darkMode } = useOutletContext();

  const [medicines, setMedicines] = useState([
    { id: "#MED001", name: "Paracetamol", type: "Tablet", stock: 150, single: 1500, mfg: "13:07:2025", exp: "27:10:2026" },
    { id: "#MED002", name: "Crosin", type: "Syrup", stock: 80,  single: 80, mfg: "25:07:2025", exp: "27:10:2026" },
    { id: "#MED003", name: "Benadryl", type: "Capsule", stock: 120,  single: 1200, mfg: "30:07:2025", exp: "27:10:2026" },
  ]);

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Product List</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Manage the inventory of medicines.
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
          Add New Medicine
        </button>
      </div>

      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
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
          {/* <button
            className={`flex items-center gap-2 border px-4 py-2 rounded-lg transition ${
              darkMode
                ? "border-gray-500 text-gray-100 hover:bg-gray-600"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <Filter size={18} />
            Filter
            <IoIosArrowDown className="ml-3" />
          </button> */}
        </div>

        <div className="overflow-x-auto">
          <table
            className={`w-full border rounded-lg overflow-hidden text-center ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                {/* <th className="p-3">
                  <input type="checkbox" />
                </th> */}
                <th className="p-3">Medicine ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Single Count</th>
                <th className="p-3">MFG Date</th>
                <th className="p-3">Exp. Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 text-center ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {/* <td className="p-3">
                    <input type="checkbox" />
                  </td> */}
                  <td className="p-3">{med.id}</td>
                  <td className="p-3">{med.name}</td>
                  <td className="p-3">{med.type}</td>
                  <td className="p-3">{med.stock}</td>
                   <td className="p-3">{med.single}</td>
                    <td className="p-3">{med.mfg}</td>
                     <td className="p-3">{med.exp}</td>
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
  );
}