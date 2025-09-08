//pages/Doctor.jsx
import { useState } from "react";
import { Eye, Edit, Trash2, Search, Filter, Plus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Doctor() {
  const { darkMode } = useOutletContext();

  const [doctors, setDoctors] = useState([
    { name: "Dr. A.K", specialty: "General Physician", phone: "01893531209", fees: 1200, clinic: 1000, day: "Mon, Tue, Sat", time: "10:00 am to 12:00pm" },
    { name: "Dr. A.G", specialty: "Cardiologist", phone: "01893531210", fees: 1500, clinic: 1000, day: "Mon, Tue, Sat", time: "10:00 am to 12:00pm" },
    { name: "Dr. J.K", specialty: "Pediatrician", phone: "01893531211", fees: 1000, clinic: 1000, day: "Mon, Tue, Sat", time: "10:00 am to 12:00pm" },
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Sample appointment data for the chart
  const sampleAppointmentsData = [
    { date: "2025-09-01", appointments: 5 },
    { date: "2025-09-02", appointments: 8 },
    { date: "2025-09-03", appointments: 6 },
    { date: "2025-09-04", appointments: 12 },
    { date: "2025-09-05", appointments: 9 },
  ];

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Doctor List</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Manage the list of doctors and their details.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Plus size={18} />
            Add New Doctor
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Plus size={18} />
            Add New Appt.
          </button>
        </div>
      </div>

      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
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
              placeholder="Search..."
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
            className={`w-full border rounded-lg text-center text-sm ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Specialty</th>
                <th className="p-3">Phone</th>
                <th className="p-3">No of Appt.</th>
                <th className="p-3">Doctor's Fees</th>
                <th className="p-3">Clinic's Fees</th>
                <th className="p-3">Day</th>
                <th className="p-3">Time</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 ${
                    darkMode
                      ? "border-gray-600 hover:bg-gray-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{doc.name}</td>
                  <td className="p-3">{doc.specialty}</td>
                  <td className="p-3">{doc.phone}</td>
                  <td className="p-3 cursor-pointer hover:text-blue-500" onClick={() => openModal(doc)}>
                    <Eye size={16} className="text-blue-500 mx-auto" />
                  </td>
                  <td className="p-3">{doc.fees}</td>
                  <td className="p-3">{doc.clinic}</td>
                  <td className="p-3">{doc.day}</td>
                  <td className="p-3">{doc.time}</td>
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

      {/* Graph Only Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`rounded-lg w-11/12 max-w-4xl relative transition-colors duration-300 ${
              darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={closeModal}
              className={`absolute top-3 right-3 p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 z-10`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Simple title with doctor's name */}
            <div className="p-6 pb-2">
              <h3 className="text-xl font-bold text-center">
                {selectedDoctor?.name} - Appointment Statistics
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
                {selectedDoctor?.specialty}
              </p>
            </div>

            {/* Chart Container */}
            <div className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sampleAppointmentsData}>
                  <defs>
                    <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={darkMode ? "#60a5fa" : "#8884d8"} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={darkMode ? "#60a5fa" : "#8884d8"} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={darkMode ? "#374151" : "#e5e7eb"}
                  />
                  <XAxis
                    dataKey="date"
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
                  <Line
                    type="monotone"
                    dataKey="appointments"
                    stroke={darkMode ? "#60a5fa" : "#8884d8"}
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    dot={{ fill: darkMode ? "#60a5fa" : "#8884d8", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Simple legend */}
            <div className="p-4 text-center border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Appointments per day</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Recent appointment trends
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}