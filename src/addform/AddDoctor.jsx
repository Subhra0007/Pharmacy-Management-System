import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function AddDoctor() {
  const { darkMode } = useOutletContext();

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialty: "",
    phone: "",
    fees: "",
    clinic: "",
    day: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the newDoctor data to a backend
    console.log("New Doctor:", newDoctor);
    // Reset form
    setNewDoctor({
      name: "",
      specialty: "",
      phone: "",
      fees: "",
      clinic: "",
      day: "",
      time: "",
    });
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div>
        <h2 className="text-2xl font-bold">Add New Doctor</h2>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Enter details to add a new doctor to the system.
        </p>
      </div>

      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={newDoctor.name}
            onChange={handleInputChange}
            placeholder="Doctor Name"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="text"
            name="specialty"
            value={newDoctor.specialty}
            onChange={handleInputChange}
            placeholder="Specialty"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="text"
            name="phone"
            value={newDoctor.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="number"
            name="fees"
            value={newDoctor.fees}
            onChange={handleInputChange}
            placeholder="Doctor's Fees"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="number"
            name="clinic"
            value={newDoctor.clinic}
            onChange={handleInputChange}
            placeholder="Clinic's Fees"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="text"
            name="day"
            value={newDoctor.day}
            onChange={handleInputChange}
            placeholder="Available Days "
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <input
            type="text"
            name="time"
            value={newDoctor.time}
            onChange={handleInputChange}
            placeholder="Available Time"
            className={`w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <button
            onClick={handleSubmit}
            className={`px-4 py-2 p-2 rounded-lg transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Add Doctor
          </button>
        </div>
      </div>
    </div>
  );
}