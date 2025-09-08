import { useState } from "react";
import { Plus, Save, Upload, X , } from "lucide-react";
import { useOutletContext } from "react-router-dom";

export default function Employee() {
  const { darkMode } = useOutletContext();

  // State for form data
  const [formData, setFormData] = useState({
    picture: null,
    name: "",
    mobile: "",
    email: "",
    aadhaar: "",
    address: "",
    role: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});
  // State for picture preview
  const [picturePreview, setPicturePreview] = useState(null);
  // State for employee list
  const [employees, setEmployees] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input for picture
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, picture: file });
      setPicturePreview(URL.createObjectURL(file));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.aadhaar.trim()) newErrors.aadhaar = "Aadhaar number is required";
    else if (!/^\d{12}$/.test(formData.aadhaar)) newErrors.aadhaar = "Aadhaar number must be 12 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.role) newErrors.role = "Role is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add employee to list (excluding picture file for simplicity)
      setEmployees([
        ...employees,
        {
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          aadhaar: formData.aadhaar,
          address: formData.address,
          role: formData.role,
        },
      ]);
      // Reset form
      resetForm();
      // Log data (replace with API call in production)
      console.log("Saved Employee:", formData);
    }
  };

  // Reset form for new employee
  const resetForm = () => {
    setFormData({
      picture: null,
      name: "",
      mobile: "",
      email: "",
      aadhaar: "",
      address: "",
      role: "",
    });
    setPicturePreview(null);
    setErrors({});
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
          <h2 className="text-2xl font-bold">Employee Management</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Add and manage employee details.
          </p>
        </div>
        <button
          onClick={resetForm}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <Plus size={18} />
          Add New Employee
        </button>
      </div>

      {/* Form */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Picture Upload */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Profile Picture
              </label>
              <div className="mt-1 flex items-center">
                <label
                  htmlFor="picture"
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition ${
                    darkMode
                      ? "border-gray-500 bg-gray-600 text-gray-100 hover:bg-gray-500"
                      : "border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Upload size={18} />
                  Upload Picture
                  <input
                    id="picture"
                    type="file"
                    accept="image/*"
                    name="picture"
                    onChange={handlePictureChange}
                    className="hidden"
                  />
                </label>
              </div>
              {picturePreview && (
                <div className="mt-2">
                  <img
                    src={picturePreview}
                    alt="Preview"
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter mobile number"
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Aadhaar Number */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Aadhaar Number
              </label>
              <input
                type="text"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter 12-digit Aadhaar number"
              />
              {errors.aadhaar && (
                <p className="mt-1 text-sm text-red-500">{errors.aadhaar}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Enter address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="Staff">Staff</option>
                <option value="Manager">Manager</option>
                <option value="Technician">Technician</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              <Save size={18} />
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Employee List */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Employee List</h3>
        <div className="overflow-x-auto">
          <table
            className={`w-full border rounded-lg text-center ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Email</th>
                <th className="p-3">Aadhaar</th>
                <th className="p-3">Address</th>
                <th className="p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-3 text-center">
                    No employees added yet.
                  </td>
                </tr>
              ) : (
                employees.map((emp, index) => (
                  <tr
                    key={index}
                    className={`border-t transition-colors duration-300 ${
                      darkMode
                        ? "border-gray-600 hover:bg-gray-600"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3">{emp.mobile}</td>
                    <td className="p-3">{emp.email}</td>
                    <td className="p-3">{emp.aadhaar}</td>
                    <td className="p-3">{emp.address}</td>
                    <td className="p-3">{emp.role}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}