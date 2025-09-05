import { Eye, Edit, Trash2 } from "lucide-react";

export default function ClipboardList({ darkMode }) {
  return (
    <div
      className={`p-4 shadow rounded-md transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Customer List</h2>
        <button
          className={`text-sm px-3 py-1 rounded transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          View All
        </button>
      </div>

      {/* Table */}
      <table
        className={`w-full text-sm shadow ${
          darkMode ? "border-gray-600" : "border-gray-200"
        }`}
      >
        <thead
          className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-600"}
        >
          <tr>
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">Invoice ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Product List</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr
            className={`shadow transition-colors duration-300 ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"
            }`}
          >
            <td className="p-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2">#P-00270</td>
            <td className="p-2">Feb 19, 2025</td>
            <td className="p-2">Ab Kar</td>
            <td className="p-2">1234567899</td>
            <td className="p-2">Dr. ABC</td>
            <td className="p-2">
              <Eye size={16} />
            </td>
            <td className="p-2 flex gap-2 justify-center">
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <Eye size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                <Edit size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
          {/* Repeat for other rows */}
          <tr
            className={`shadow transition-colors duration-300 ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"
            }`}
          >
            <td className="p-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2">#P-00268</td>
            <td className="p-2">Feb 20, 2025</td>
            <td className="p-2">Beximco</td>
            <td className="p-2">12354334</td>
            <td className="p-2">Dr. ABCD</td>
            <td className="p-2">
              <Eye size={16} />
            </td>
            <td className="p-2 flex gap-2 justify-center">
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <Eye size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                <Edit size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
          <tr
            className={`shadow transition-colors duration-300 ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"
            }`}
          >
            <td className="p-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2">#P-00267</td>
            <td className="p-2">Feb 21, 2025</td>
            <td className="p-2">Renata</td>
            <td className="p-2">1234567898</td>
            <td className="p-2">Dr. FGH</td>
            <td className="p-2">
              <Eye size={16} />
            </td>
            <td className="p-2 flex gap-2 justify-center">
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <Eye size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                <Edit size={16} />
              </button>
              <button
                className={`p-1 rounded transition ${
                  darkMode
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}