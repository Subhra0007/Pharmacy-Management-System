import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus } from "lucide-react";

export default function AddReturnProduct() {
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    returnId: "",
    orderId: "",
    product: "",
    type: "Supplier",
    reason: "Damaged",
    returnDate: new Date().toISOString().split('T')[0],
    status: "Pending"
  });

  const [types, setTypes] = useState(["Supplier", "Customer"]);
  const [reasons, setReasons] = useState(["Damaged", "Expired", "Other"]);

  const [newReason, setNewReason] = useState("");
  const [showTypeInput, setShowTypeInput] = useState(false);
  const [showReasonInput, setShowReasonInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddType = (e) => {
    e.preventDefault();
    if (newType.trim() && !types.includes(newType.trim())) {
      setTypes([...types, newType.trim()]);
      setNewType("");
      setShowTypeInput(false);
    }
  };

  const handleAddReason = (e) => {
    e.preventDefault();
    if (newReason.trim() && !reasons.includes(newReason.trim())) {
      setReasons([...reasons, newReason.trim()]);
      setNewReason("");
      setShowReasonInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Return product saved successfully!");
    navigate("/returns");
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Add New Return Product</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Fill in the details to create a new product return.
          </p>
        </div>
        <button
          onClick={() => navigate("/return-product")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          <ArrowLeft size={18} />
          Back to Returns
        </button>
      </div>

      <div
        className={`p-6 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="returnId"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Return ID
              </label>
              <input
                type="text"
                id="returnId"
                name="returnId"
                value={formData.returnId}
                onChange={handleChange}
                placeholder="e.g. #RET006"
                className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="orderId"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                placeholder="e.g. #ORD006"
                className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="product"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Product
              </label>
              <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="e.g. Ibuprofen"
                className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Type
              </label>
              <div className="flex gap-2">
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {/* <button
                  type="button"
                  onClick={() => setShowTypeInput(!showTypeInput)}
                  className={`mt-1 p-2 rounded-lg transition ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <Plus size={18} />
                </button> */}
              </div>
              {showTypeInput && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    placeholder="Enter new type"
                    className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                  {/* <button
                    type="button"
                    onClick={handleAddType}
                    className={`mt-2 px-4 py-2 rounded-lg transition ${
                      darkMode
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    Add Type
                  </button> */}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="reason"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Reason
              </label>
              <div className="flex gap-2">
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowReasonInput(!showReasonInput)}
                  className={`mt-1 p-2 rounded-lg transition ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <Plus size={18} />
                </button>
              </div>
              {showReasonInput && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={newReason}
                    onChange={(e) => setNewReason(e.target.value)}
                    placeholder="Enter new reason"
                    className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={handleAddReason}
                    className={`mt-2 px-4 py-2 rounded-lg transition ${
                      darkMode
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    Add Reason
                  </button>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="returnDate"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/returns")}
              className={`px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-gray-600 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <Save size={18} />
              Save Return
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}