import { useState } from "react";
import { Eye, Edit, Trash2, Printer } from "lucide-react";

export default function ClipboardList({ darkMode }) {
  const [orders, setOrders] = useState([
    {
      id: "P-00270",
      date: "Feb 19, 2025",
      customer: "Ab Kar",
      mobile: "1234567899",
      doctor: "Dr. ABC",
      products: [
        { name: "Product A", quantity: 2, price: 10 },
        { name: "Product B", quantity: 1, price: 15 },
      ],
    },
    {
      id: "P-00268",
      date: "Feb 20, 2025",
      customer: "Beximco",
      mobile: "12354334",
      doctor: "Dr. ABCD",
      products: [
        { name: "Product C", quantity: 3, price: 8 },
      ],
    },
    {
      id: "P-00267",
      date: "Feb 21, 2025",
      customer: "Renata",
      mobile: "1234567898",
      doctor: "Dr. FGH",
      products: [
        { name: "Product E", quantity: 1, price: 12 },
        { name: "Product F", quantity: 4, price: 5 },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleViewProducts = (products) => {
    setSelectedProducts(products);
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
            <th className="p-2">Customer Name</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Product List</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={`shadow transition-colors duration-300 ${
                darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"
              }`}
            >
              <td className="p-2">#{order.id}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">{order.customer}</td>
              <td className="p-2">{order.mobile}</td>
              <td className="p-2">{order.doctor}</td>
              <td className="p-2">
                <button
                  onClick={() => handleViewProducts(order.products)}
                  // className={`p-1 rounded transition cursor-pointer ${
                  //   darkMode
                  //     ? "text-blue-400 hover:text-blue-300"
                  //     : "text-blue-500 hover:text-blue-600"
                  // }`}
                >
                  <Eye size={16} />
                </button>
              </td>
              <td className="p-2 flex gap-2 justify-center">
                <button
                  className={`p-1 rounded transition ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  <Printer size={16} />
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
          ))}
        </tbody>
      </table>

      {/* Product List Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex items-center justify-center z-50">
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
                  {selectedProducts.map((product, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode
                          ? "border-gray-600 hover:bg-gray-600"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.quantity}</td>
                      <td className="p-3">${product.price}</td>
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