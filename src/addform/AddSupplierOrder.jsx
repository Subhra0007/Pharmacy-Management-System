import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus, X } from "lucide-react";

export default function AddNewSupplierOrder() {
  const { darkMode } = useOutletContext();

  // Mock supplier data (same as in Suppliers component)
  const suppliers = [
    { 
      id: "#SUP001", 
      name: "Square Ltd.", 
      products: [
        { name: "Paracetamol" },
        { name: "Ibuprofen" },
        { name: "Aspirin"}
      ] 
    },
    { 
      id: "#SUP002", 
      name: "Beximco", 
      products: [
        { name: "Amoxicillin"},
        { name: "Ciprofloxacin"}
      ] 
    },
    { 
      id: "#SUP003", 
      name: "Renata", 
      products: [
        { name: "Metformin"},
        { name: "Amlodipine"},
        { name: "Losartan"}
      ] 
    },
  ];

  const [formData, setFormData] = useState({
    supplierId: "",
    products: [{ name: "", quantity: 1 }],
    orderDate: "",
    expectedDelivery: "",
    notes: ""
  });

  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleSupplierChange = (e) => {
    const supplierId = e.target.value;
    const supplier = suppliers.find(s => s.id === supplierId);
    setSelectedSupplier(supplier);
    setFormData({ ...formData, supplierId, products: [{ name: "", quantity: 1 }] });
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
    console.log("Order Data:", formData);
    // Reset form after submission
    setFormData({
      supplierId: "",
      products: [{ name: "", quantity: 1 }],
      orderDate: "",
      expectedDelivery: "",
      notes: ""
    });
    setSelectedSupplier(null);
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Add New Supplier Order</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Create a new order for a supplier.
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
              <label className="block text-sm font-medium mb-1">Supplier</label>
              <select
                value={formData.supplierId}
                onChange={handleSupplierChange}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              >
                <option value="">Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id}>
                    {supplier.name} ({supplier.id})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Order Date</label>
              <input
                type="date"
                value={formData.orderDate}
                onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expected Delivery</label>
              <input
                type="date"
                value={formData.expectedDelivery}
                onChange={(e) => setFormData({ ...formData, expectedDelivery: e.target.value })}
                className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Products</label>
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
                  disabled={!selectedSupplier}
                  required
                >
                  <option value="">Select Product</option>
                  {selectedSupplier?.products.map((p) => (
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
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              rows="4"
              placeholder="Additional order notes..."
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
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}