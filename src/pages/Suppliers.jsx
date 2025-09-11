import { useState } from "react";
import { Eye, Edit, Trash2, Search, Plus } from "lucide-react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function Suppliers() {
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();

  const [suppliers, setSuppliers] = useState([
    { 
      id: "#SUP001", 
      name: "Square Ltd.", 
      phone: "01893531209", 
      email: "square@example.com", 
      address: "Kolkata", 
      products: [
        { name: "Paracetamol" },
        { name: "Ibuprofen" },
        { name: "Aspirin"}
      ] 
    },
    { 
      id: "#SUP002", 
      name: "Beximco", 
      phone: "01893531210", 
      email: "beximco@example.com", 
      address: "Howrah", 
      products: [
        { name: "Amoxicillin"},
        { name: "Ciprofloxacin"}
      ] 
    },
    { 
      id: "#SUP003", 
      name: "Renata", 
      phone: "01893531211", 
      email: "renata@example.com", 
      address: "Hooghly", 
      products: [
        { name: "Metformin"},
        { name: "Amlodipine"},
        { name: "Losartan"}
      ] 
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleViewProducts = (supplier) => {
    setSelectedSupplier(supplier);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSupplier(null);
  };

  const handleAddNewSupplier = () => {
    navigate('/add-supplier');
  };

  return (
    <div
      className={`p-6 space-y-6 ml-64 mt-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Supplier List</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Manage suppliers and their contact details.
          </p>
        </div>
        <button
          onClick={handleAddNewSupplier}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add New Supplier
        </button>
      </div>

      {/* Table Card */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Search */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Search
              className={`absolute left-3 top-2.5 text-gray-400`}
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
        </div>

        {/* Table Wrapper */}
        <div className={`overflow-x-auto rounded-md ${darkMode ? "bg-gray-700" : "bg-white"}`}>
          <table
            className={`min-w-[1200px] border rounded-lg text-center ${
              darkMode ? "border-gray-600 bg-gray-700" : "border-gray-200 bg-white"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Supplier ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Product List</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 text-center text-sm ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600 text-gray-100"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{supplier.id}</td>
                  <td className="p-3">{supplier.name}</td>
                  <td className="p-3">{supplier.phone}</td>
                  <td className="p-3">{supplier.email}</td>
                  <td className="p-3">{supplier.address}</td>
                  <td className="p-3">
                    <button onClick={() => handleViewProducts(supplier)}>
                      <Eye size={16} />
                    </button>
                  </td>
                  <td className="p-3 flex gap-2 justify-center">
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

      {/* Modal */}
      {showModal && selectedSupplier && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm 
          ${darkMode ? "bg-black/60" : "bg-gray-900/40"}`}
        >
          <div
            className={`rounded-lg p-6 max-w-lg w-full ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Products Supplied by {selectedSupplier.name}</h3>
              <button
                onClick={handleCloseModal}
                className={`p-2 rounded ${
                  darkMode
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                Close
              </button>
            </div>
            <p className="mb-4">Total Product Types: {selectedSupplier.products.length}</p>
            <div>
              <table
                className={`text-sm w-full ${
                  darkMode ? "border border-gray-600 bg-gray-700" : "border border-gray-200 bg-white"
                }`}
              >
                <thead
                  className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
                >
                  <tr>
                    <th className="p-3 text-left">Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSupplier.products.map((product, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode
                          ? "border-gray-600 hover:bg-gray-600"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <td className="p-3">{product.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
