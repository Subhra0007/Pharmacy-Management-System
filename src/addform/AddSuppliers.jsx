//src/addform/AddSuppliers.jsx
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";

export default function AddSuppliers() {
  const { darkMode } = useOutletContext();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    products: [],
  });
  const [newProduct, setNewProduct] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductChange = (e) => {
    setNewProduct(e.target.value);
  };

  const addProduct = () => {
    if (newProduct.trim()) {
      setFormData({
        ...formData,
        products: [...formData.products, { name: newProduct.trim() }],
      });
      setNewProduct("");
    }
  };

  const removeProduct = (index) => {
    setFormData({
      ...formData,
      products: formData.products.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Supplier Added:", formData);
    // Add logic to save supplier data
    setFormData({
      id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      products: [],
    });
    setNewProduct("");
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Add New Supplier</h1>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Fill in the details to add a new supplier.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Supplier ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border rounded-lg ${
              darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border rounded-lg ${
              darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border rounded-lg ${
              darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border rounded-lg ${
              darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border rounded-lg ${
              darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Products</label>
          <div className="flex items-center gap-2 mt-1">
            <input
               type="text"
              value={newProduct}
              onChange={handleProductChange}
              placeholder="Add product name"
              className={`block w-full p-2 border rounded-lg ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <button
              type="button"
              onClick={addProduct}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <Plus size={18} />
              Add Product
            </button>
          </div>
          <div className="mt-2 space-y-2">
            {formData.products.map((product, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{product.name}</span>
                <button
                  type="button"
                  onClick={() => removeProduct(index)}
                  className={`p-1 rounded transition ${
                    darkMode
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <Plus size={18} />
          Add Supplier
        </button>
      </form>
    </div>
  );
}