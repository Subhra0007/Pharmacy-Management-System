import { useState } from "react";
import { Eye, Edit, Trash2, Printer } from "lucide-react";

export default function PurchaseTable({ darkMode }) {
  const [purchases, setPurchases] = useState([
    { 
      id: "#P-00270", 
      date: "Feb 19, 2025", 
      supplier: "Square", 
      amount: 2500, 
      paid: 2500.00, 
      due: 660.00, 
      medicines: [
        { name: "Paracetamol", quantity: 100, price: 15 },
        { name: "Ibuprofen", quantity: 50, price: 10 }
      ]
    },
    { 
      id: "#P-00268", 
      date: "Feb 20, 2025", 
      supplier: "Beximco", 
      amount: 660, 
      paid: 5000.00, 
      due: 3647.10, 
      medicines: [
        { name: "Amoxicillin", quantity: 30, price: 22 }
      ]
    },
    { 
      id: "#P-00267", 
      date: "Feb 21, 2025", 
      supplier: "Renata", 
      amount: 3763, 
      paid: 5000.00, 
      due: 5754.95, 
      medicines: [
        { name: "Metformin", quantity: 60, price: 30 },
        { name: "Amlodipine", quantity: 45, price: 25 }
      ]
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedMedicines, setSelectedMedicines] = useState([]);

  const handleViewMedicines = (medicines) => {
    setSelectedMedicines(medicines);
    setShowModal(true);
  };

  return (
    <div
      className={`p-4 shadow rounded-md transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Purchase List</h2>
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
        className={`w-full text-sm shadow text-center overflow-x-auto ${
          darkMode ? "border-gray-600" : "border-gray-200"
        }`}
      >
        <thead
          className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-600"}
        >
          <tr>
            <th className="p-2">Invoice ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Supplier</th>
            <th className="p-2">Total Amount</th>
            <th className="p-2">Paid Amount</th>
            <th className="p-2">Due</th>
            <th className="p-2">Product List</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, index) => (
            <tr
              key={index}
              className={`shadow transition-colors duration-300 ${
                darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"
              }`}
            >
              <td className="p-2">{purchase.id}</td>
              <td className="p-2">{purchase.date}</td>
              <td className="p-2">{purchase.supplier}</td>
              <td className="p-2">${purchase.amount.toLocaleString()}</td>
              <td className="p-2">${purchase.paid.toLocaleString()}</td>
              <td className="p-2">${purchase.due.toLocaleString()}</td>
              <td className="p-2">
                <button onClick={() => handleViewMedicines(purchase.medicines)}>
                  <Eye size={16} />
                </button>
              </td>
              <td className="p-2 flex gap-2 justify-center">
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
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-100 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className={`rounded-lg p-6 max-w-lg w-full ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Product List</h3>
              <button
                onClick={() => setShowModal(false)}
                className={`p-2 rounded ${
                  darkMode
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                Close
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead
                  className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
                >
                  <tr>
                    <th className="p-3 text-left">Product Name</th>
                    <th className="p-3 text-left">Quantity</th>
                    <th className="p-3 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedMedicines.map((medicine, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode
                          ? "border-gray-600 hover:bg-gray-600"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <td className="p-3">{medicine.name}</td>
                      <td className="p-3">{medicine.quantity}</td>
                      <td className="p-3">${medicine.price}</td>
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