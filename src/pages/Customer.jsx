import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, Plus, Eye, Trash2, Users, Edit } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { FiUserPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Customer() {
  const { darkMode } = useOutletContext();

  const [customers, setCustomers] = useState([
    {
      id: "#CUS001",
      name: "A Khan",
      phone: "01893531209",
      balance: "$53,546.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Smith", inClinic: true },
        { name: "Dr. Lee", inClinic: false }
      ],
      orderFrequency: [
        { month: "Jan", orders: 5 },
        { month: "Feb", orders: 8 },
        { month: "Mar", orders: 3 },
        { month: "Apr", orders: 7 },
        { month: "May", orders: 6 },
        { month: "Jun", orders: 9 },
        { month: "Jul", orders: 4 },
        { month: "Aug", orders: 2 }
      ]
    },
    {
      id: "#CUS002",
      name: "A Ghogh",
      phone: "01893531209",
      balance: "$23,732.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Johnson", inClinic: false },
        { name: "Dr. Patel", inClinic: true }
      ],
      orderFrequency: [
        { month: "Jan", orders: 3 },
        { month: "Feb", orders: 6 },
        { month: "Mar", orders: 2 },
        { month: "Apr", orders: 4 },
        { month: "May", orders: 5 },
        { month: "Jun", orders: 1 },
        { month: "Jul", orders: 7 },
        { month: "Aug", orders: 3 }
      ]
    },
    {
      id: "#CUS003",
      name: "J Khan",
      phone: "01893531209",
      balance: "$15,324.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Brown", inClinic: true },
        { name: "Dr. Garcia", inClinic: false }
      ],
      orderFrequency: [
        { month: "Jan", orders: 7 },
        { month: "Feb", orders: 4 },
        { month: "Mar", orders: 9 },
        { month: "Apr", orders: 2 },
        { month: "May", orders: 8 },
        { month: "Jun", orders: 5 },
        { month: "Jul", orders: 6 },
        { month: "Aug", orders: 1 }
      ]
    },
    {
      id: "#CUS004",
      name: "Hasan Khan",
      phone: "01893531209",
      balance: "$18,435.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Wilson", inClinic: false },
        { name: "Dr. Clark", inClinic: true }
      ],
      orderFrequency: [
        { month: "Jan", orders: 2 },
        { month: "Feb", orders: 5 },
        { month: "Mar", orders: 8 },
        { month: "Apr", orders: 3 },
        { month: "May", orders: 6 },
        { month: "Jun", orders: 9 },
        { month: "Jul", orders: 4 },
        { month: "Aug", orders: 7 }
      ]
    },
    {
      id: "#CUS005",
      name: "Ali Khan",
      phone: "01893531209",
      balance: "$19,324.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Taylor", inClinic: true },
        { name: "Dr. Adams", inClinic: false }
      ],
      orderFrequency: [
        { month: "Jan", orders: 6 },
        { month: "Feb", orders: 9 },
        { month: "Mar", orders: 1 },
        { month: "Apr", orders: 5 },
        { month: "May", orders: 8 },
        { month: "Jun", orders: 3 },
        { month: "Jul", orders: 7 },
        { month: "Aug", orders: 4 }
      ]
    },
    {
      id: "#CUS006",
      name: "A S",
      phone: "01893531209",
      balance: "$34,768.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Anderson", inClinic: false },
        { name: "Dr. Walker", inClinic: true }
      ],
      orderFrequency: [
        { month: "Jan", orders: 4 },
        { month: "Feb", orders: 2 },
        { month: "Mar", orders: 6 },
        { month: "Apr", orders: 9 },
        { month: "May", orders: 3 },
        { month: "Jun", orders: 7 },
        { month: "Jul", orders: 5 },
        { month: "Aug", orders: 8 }
      ]
    },
    {
      id: "#CUS007",
      name: "J Khan",
      phone: "01893531209",
      balance: "$52,324.00",
      address: "Kolkata,710000",
      doctors: [
        { name: "Dr. Davis", inClinic: true },
        { name: "Dr. Harris", inClinic: false }
      ],
      orderFrequency: [
        { month: "Jan", orders: 8 },
        { month: "Feb", orders: 3 },
        { month: "Mar", orders: 7 },
        { month: "Apr", orders: 5 },
        { month: "May", orders: 2 },
        { month: "Jun", orders: 6 },
        { month: "Jul", orders: 9 },
        { month: "Aug", orders: 1 }
      ]
    },
  ]);

  // State for order frequency modal
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [orderFrequencyData, setOrderFrequencyData] = useState([]);

  // State for doctor popup
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [selectedDoctors, setSelectedDoctors] = useState([]);

  const handleOpenModal = (customer) => {
    setOrderFrequencyData(customer.orderFrequency);
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCustomer(null);
    setOrderFrequencyData([]);
  };

  const handleOpenDoctorModal = (doctors) => {
    setSelectedDoctors(doctors);
    setShowDoctorModal(true);
  };

  const handleCloseDoctorModal = () => {
    setShowDoctorModal(false);
    setSelectedDoctors([]);
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Customer</h1>
          <p
            className={darkMode ? "text-gray-400" : "text-gray-600"}
          >
            A pharmacy purchase refers to the act of buying medications, medical
            supplies.
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
          Add New Customer
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <div
          className={`p-4 shadow rounded-md flex flex-col justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2 w-full">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <Users size={18} className="text-blue-600" />
              </div>
              <p className="text-sm font-medium">Total Customer</p>
            </div>
            <h2 className="text-2xl font-bold">1,253</h2>
            <p className="text-green-600 text-xs">↑ 12% Since last week</p>
          </div>
          <div className="w-full">
            <div className="flex justify-end mb-2">
              <button className={`flex items-center gap-1 border text-xs px-2 py-1 rounded-md transition ${
                darkMode
                  ? "border-gray-500 bg-gray-600 text-gray-100 hover:bg-gray-500"
                  : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}>
                This Week <IoIosArrowDown size={14} />
              </button>
            </div>
            <div className="w-full h-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { value: 5 },
                    { value: 7 },
                    { value: 4 },
                    { value: 8 },
                    { value: 10 },
                    { value: 9 },
                    { value: 6 },
                    { value: 7 },
                  ]}
                >
                  <Bar
                    dataKey="value"
                    fill={darkMode ? "#60a5fa" : "#2563eb"}
                    radius={[4, 4, 0, 0]}
                    barSize={6}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`p-4 shadow rounded-md flex flex-col justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2 w-full">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <Users size={18} className="text-green-600" />
              </div>
              <p className="text-sm font-medium">New Customer</p>
            </div>
            <h2 className="text-2xl font-bold">675</h2>
            <p className="text-red-500 text-xs flex items-center gap-1">
              <span>↓ -05%</span>
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                Since last week
              </span>
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-end mb-2">
              <button className={`flex items-center gap-1 border text-xs px-2 py-1 rounded-md transition ${
                darkMode
                  ? "border-gray-500 bg-gray-600 text-gray-100 hover:bg-gray-500"
                  : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}>
                This Week <IoIosArrowDown size={14} />
              </button>
            </div>
            <div className="w-full h-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { value: 3 },
                    { value: 6 },
                    { value: 4 },
                    { value: 7 },
                    { value: 5 },
                    { value: 8 },
                    { value: 6 },
                    { value: 7 },
                  ]}
                >
                  <Bar
                    dataKey="value"
                    fill={darkMode ? "#86efac" : "#22c55e"}
                    radius={[4, 4, 0, 0]}
                    barSize={6}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`p-4 shadow rounded-md flex flex-col justify-between items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="space-y-2 w-full">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${
                  darkMode ? "bg-orange-900" : "bg-orange-100"
                }`}
              >
                <FiUserPlus size={18} className="text-orange-500" />
              </div>
              <p className="text-sm font-medium">Returning</p>
            </div>
            <h2 className="text-2xl font-bold">76%</h2>
            <p className="text-green-600 text-xs flex items-center gap-1">
              ↑ 19%{" "}
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                Since last week
              </span>
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-end mb-2">
              <button className={`flex items-center gap-1 border text-xs px-2 py-1 rounded-md transition ${
                darkMode
                  ? "border-gray-500 bg-gray-600 text-gray-100 hover:bg-gray-500"
                  : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}>
                This Week <IoIosArrowDown size={14} />
              </button>
            </div>
            <div className="w-full h-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { value: 4 },
                    { value: 7 },
                    { value: 6 },
                    { value: 9 },
                    { value: 5 },
                    { value: 8 },
                    { value: 7 },
                    { value: 6 },
                  ]}
                >
                  <Bar
                    dataKey="value"
                    fill={darkMode ? "#fb923c" : "#f97316"}
                    radius={[4, 4, 0, 0]}
                    barSize={6}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Search + Filter */}
        <div className="flex items-center gap-4 mb-4">
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
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table
            className={`w-full border rounded-lg overflow-hidden text-sm ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Customer ID</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Total Purchase</th>
                <th className="p-3">Doctors</th>
                <th className="p-3">Order Frequency</th>
                <th className="p-3">Address</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr
                  key={i}
                  className={`border-t transition-colors duration-300 ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{c.id}</td>
                  <td className="p-3 flex items-center gap-2">
                    {c.name}
                  </td>
                  <td className="p-3">{c.phone}</td>
                  <td className="p-3">{c.balance}</td>
                  <td className="p-3 text-center">
                    <Eye
                      size={16}
                      className="cursor-pointer mx-auto"
                      onClick={() => handleOpenDoctorModal(c.doctors)}
                    />
                  </td>
                  <td className="p-3 cursor-pointer" onClick={() => handleOpenModal(c)}>
                    <Eye size={16} className="mx-auto" />
                  </td>
                  <td className="p-3">{c.address}</td>
                  <td className="p-3 flex gap-2 justify-center">
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

        {/* Pagination */}
        <div
          className={`flex items-center justify-between mt-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>Showing 1 to 8 of 50 entries</span>
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

      {/* Order Frequency Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg w-11/12 max-w-xl p-6 relative transition-colors duration-300 ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={handleCloseModal}
              className={`absolute top-3 right-3 p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 z-10`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">
                {selectedCustomer?.name} - Order Frequency
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Customer ID: {selectedCustomer?.id}
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-end mb-2">
                <button className={`flex items-center gap-1 border text-xs px-2 py-1 rounded-md transition ${
                  darkMode
                    ? "border-gray-500 bg-gray-600 text-gray-100 hover:bg-gray-500"
                    : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}>
                  This Week <IoIosArrowDown size={14} />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={orderFrequencyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={darkMode ? "#374151" : "#e5e7eb"}
                  />
                  <XAxis
                    dataKey="month"
                    stroke={darkMode ? "#9ca3af" : "#6b7280"}
                    fontSize={12}
                  />
                  <YAxis
                    stroke={darkMode ? "#9ca3af" : "#6b7280"}
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#374151" : "#ffffff",
                      border: `1px solid ${darkMode ? "#4b5563" : "#e5e7eb"}`,
                      borderRadius: "8px",
                      color: darkMode ? "#f9fafb" : "#111827",
                    }}
                  />
                  <Bar
                    dataKey="orders"
                    fill={darkMode ? "#60a5fa" : "#2563eb"}
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Orders per month</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Recent order trends
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Doctor Management Modal */}
      {showDoctorModal && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg w-11/12 max-w-md p-6 relative transition-colors duration-300 ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={handleCloseDoctorModal}
              className={`absolute top-3 right-3 p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 z-10`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">Doctor List</h3>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                In-house doctors are shown in green
              </p> */}
            </div>

            <div className="space-y-2">
              {selectedDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className={`p-2  rounded ${
                    doctor.inClinic
                      ? "text-green-500 font-medium "
                      : darkMode
                      ? "text-gray-100 "
                      : "text-gray-900 "
                  } ${
                    darkMode ? "bg-gray-600" : "bg-white"
                  }`}
                >
                  {doctor.name}
                </div>
              ))}
              <div className="flex justify-center mt-4">
                {/* <button
                  onClick={handleCloseDoctorModal}
                  className={`px-4 py-2 rounded transition ${
                    darkMode
                      ? "bg-gray-600 text-white hover:bg-gray-500"
                      : "bg-gray-300 text-gray-900 hover:bg-gray-400"
                  }`}
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}