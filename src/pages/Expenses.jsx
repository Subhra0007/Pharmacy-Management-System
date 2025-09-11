import { useState } from "react";
import { Eye, Edit, Trash2, Search, Filter, Plus } from "lucide-react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function Expenses() {
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([
    { category: "E-Bill", amount: 5000, paid: 3000, due: 2000, date: "24.08.2025" },
    { category: "Staff Salaries", amount: 2500, paid: 3000, due: 2000, date: "25.08.2025" },
    { category: "Maintenance", amount: 300, paid: 3000, due: 2000, date: "26.08.2025" },
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", phone: "145697890", address: "123 Main St, Kolkata", role: "Employee", salary: 5000 },
    { id: 2, name: "Jane Smith", phone: "2345678901", address: "456 Oak Ave, Mumbai", role: "Technician", salary: 4500 },
    { id: 3, name: "Bob Johnson", phone: "3456789012", address: "789 MG Rd, Kolkata", role: "Staff", salary: 4800 },
  ]);

  const [supplierOrders, setSupplierOrders] = useState([
    { 
      id: "#INV001", 
      supplier: "A Khan", 
      total: 1234, 
      paid: 123, 
      due: 125, 
      status: "Order Placed",
      products: [
        { name: "Paracetamol", quantity: 100, price: 5 },
        { name: "Ibuprofen", quantity: 50, price: 8 }
      ]
    },
    { 
      id: "#INV002", 
      supplier: "B Smith", 
      total: 5678, 
      paid: 163, 
      due: 155, 
      status: "Order Received",
      products: [
        { name: "Amoxicillin", quantity: 30, price: 15 },
        { name: "Ciprofloxacin", quantity: 20, price: 20 }
      ]
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Navigation handlers
  const handleAddExpense = () => {
    navigate("/add-expense");
  };

  const handleAddEmployee = () => {
    navigate("/add-new-employee");
  };

  const handleAddSupplierOrder = () => {
    navigate("/add-supplier-order");
  };

  const handleViewProducts = (products) => {
    setSelectedProducts(products);
    setShowModal(true);
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "Order Placed":
        return darkMode ? "bg-yellow-600" : "bg-yellow-200";
      case "Order Received":
        return darkMode ? "bg-green-600" : "bg-green-200";
      case "Order Cancelled":
        return darkMode ? "bg-red-600" : "bg-red-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 mt-16 ml-64 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Expenses & Salaries</h2>
          {/* <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Track and manage pharmacy expenses, employee salaries, and supplier orders.
          </p> */}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddExpense}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Plus size={18} />
            Add New Expense
          </button>
          <button
            onClick={handleAddEmployee}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Plus size={18} />
            Add New Employee
          </button>
          <button
            onClick={handleAddSupplierOrder}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Plus size={18} />
            Add New Supplier Order
          </button>
        </div>
      </div>

      {/* Expenses Table */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Expenses</h3>
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
              placeholder="Search expenses..."
              className={`pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`min-w-[1200px] border rounded-lg  text-center ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Paid Amount</th>
                <th className="p-3">Due</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 text-center ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{expense.category}</td>
                  <td className="p-3">${expense.amount.toLocaleString()}</td>
                  <td className="p-3">${expense.paid.toLocaleString()}</td>
                  <td className="p-3">${expense.due.toLocaleString()}</td>
                  <td className="p-3">{expense.date}</td>
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

        <div
          className={`flex items-center justify-between mt-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>Showing 1 to {expenses.length} of {expenses.length} entries</span>
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

      {/* Employee Salaries Table */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Employee Salaries</h3>
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
              placeholder="Search employees..."
              className={`pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`min-w-[1200px] border rounded-lg  text-center ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Address</th>
                <th className="p-3">Role</th>
                <th className="p-3">Salary</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className={`border-t transition-colors duration-300 ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{employee.name}</td>
                  <td className="p-3">{employee.phone}</td>
                  <td className="p-3">{employee.address}</td>
                  <td className="p-3">{employee.role}</td>
                  <td className="p-3">${employee.salary.toLocaleString()}</td>
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

        <div
          className={`flex items-center justify-between mt-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>Showing 1 to {employees.length} of {employees.length} entries</span>
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

      {/* Supplier Orders Table */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Supplier Orders</h3>
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
              placeholder="Search supplier orders..."
              className={`pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`min-w-[1200px] border rounded-lg  text-center ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Suppliers</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Paid Amount</th>
                <th className="p-3">Due</th>
                <th className="p-3">Products</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {supplierOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{order.supplier}</td>
                  <td className="p-3">${order.total.toLocaleString()}</td>
                  <td className="p-3">${order.paid.toLocaleString()}</td>
                  <td className="p-3">${order.due.toLocaleString()}</td>
                  <td className="p-2">
                    <button onClick={() => handleViewProducts(order.products)}>
                      <Eye size={16} />
                    </button>
                  </td>
                  <td className="p-3 flex gap-2 justify-center">
                    <button
                      className={`p-2 rounded transition ${
                        darkMode
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      <FaWhatsapp size={16} />
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
          <span>Showing 1 to {supplierOrders.length} of {supplierOrders.length} entries</span>
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

      {/* Products Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className={`rounded-lg p-6 max-w-lg w-full ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Products Ordered</h3>
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