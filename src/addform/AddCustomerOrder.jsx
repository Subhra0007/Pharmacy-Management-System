import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus, X } from "lucide-react";

export default function AddNewCustomer() {
  const { darkMode } = useOutletContext();

  // Mock product data for selection
  const availableProducts = [
    { name: "Paracetamol" },
    { name: "Ibuprofen" },
    { name: "Aspirin" },
    { name: "Amoxicillin" },
    { name: "Ciprofloxacin" },
    { name: "Metformin" },
    { name: "Amlodipine" },
    { name: "Losartan" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    products: [{ name: "", quantity: 1 }],
    notes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setFormData({ ...formData, products: updatedProducts });
  };

  const addProductField = () => {
    setFormData({ ...formData, products: [...formData.products, { name: "", quantity: 1 }] });
  };

  const removeProductField = (index) => {
    const updatedProducts = formData.products.filter((_, i) => i !== index);
    setFormData({ ...formData, products: updatedProducts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call)
    console.log("Customer Data:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      address: "",
      products: [{ name: "", quantity: 1 }],
      notes: ""
    });
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Add New Customer</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Create a new customer profile.
          </p>
        </div>
      </div>

      <div
        className={`p-6 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Customer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter customer name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter address"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Preferred Products</label>
              <button
                type="button"
                onClick={addProductField}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg transition ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Plus size={16} />
                Add Product
              </button>
            </div>
            {formData.products.map((product, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <select
                  value={product.name}
                  onChange={(e) => handleProductChange(index, "name", e.target.value)}
                  className={`w-2/3 p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                >
                  <option value="">Select Product</option>
                  {availableProducts.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                  min="1"
                  className={`w-1/3 p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                />
                {formData.products.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProductField(index)}
                    className={`p-2 rounded transition ${
                      darkMode
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              rows="4"
              placeholder="Additional customer notes..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-gray-600 text-white hover:bg-gray-500"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}