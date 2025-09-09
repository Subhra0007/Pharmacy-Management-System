import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus } from "lucide-react";

export default function AddNewEmployee({ setEmployees }) {
  const { darkMode } = useOutletContext();

  // Form state
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    aadhaar: "",
    address: "",
    role: "",
  });

  // Error state for validation
  const [errors, setErrors] = useState({});

  // State for roles
  const [roles, setRoles] = useState(["Employee", "Technician", "Staff"]);
  const [newRole, setNewRole] = useState("");
  const [roleError, setRoleError] = useState("");

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Handle new role input change
  const handleNewRoleChange = (e) => {
    setNewRole(e.target.value);
    setRoleError("");
  };

  // Handle adding new role
  const handleAddRole = () => {
    if (!newRole.trim()) {
      setRoleError("Role name is required");
      return;
    }
    if (roles.includes(newRole.trim())) {
      setRoleError("Role already exists");
      return;
    }
    setRoles([...roles, newRole.trim()]);
    setNewRole("");
    setRoleError("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.id.match(/^#EMP\d{3}$/)) {
      newErrors.id = "Employee ID must be in format #EMPXXX (e.g., #EMP001)";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.mobile.match(/^\d{10}$/)) {
      newErrors.mobile = "Mobile must be a 10-digit number";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.aadhaar.match(/^\d{12}$/)) {
      newErrors.aadhaar = "Aadhaar must be a 12-digit number";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add new employee with default hoursWorked
    const newEmployee = {
      ...formData,
      hoursWorked: [
        { month: "Jan", hours: 0 },
        { month: "Feb", hours: 0 },
        { month: "Mar", hours: 0 },
        { month: "Apr", hours: 0 },
        { month: "May", hours: 0 },
        { month: "Jun", hours: 0 },
        { month: "Jul", hours: 0 },
        { month: "Aug", hours: 0 },
      ],
    };

    setEmployees((prev) => [...prev, newEmployee]);
    alert("Employee added successfully!");

    // Reset form
    setFormData({
      id: "",
      name: "",
      mobile: "",
      email: "",
      aadhaar: "",
      address: "",
      role: "",
    });
    setErrors({});
  };

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Add New Employee</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Enter details to add a new employee.
          </p>
        </div>
      </div>

      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="id">
                Employee ID
              </label>
              <input
                type="text"
                name="id"
                id="id"
                value={formData.id}
                onChange={handleChange}
              
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.id ? "border-red-500" : ""}`}
              />
              {errors.id && (
                <p className="text-red-500 text-xs mt-1">{errors.id}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="mobile">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile"
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.mobile ? "border-red-500" : ""}`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="aadhaar">
                Aadhaar
              </label>
              <input
                type="text"
                name="aadhaar"
                id="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="Enter 12-digit Aadhaar"
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.aadhaar ? "border-red-500" : ""}`}
              />
              {errors.aadhaar && (
                <p className="text-red-500 text-xs mt-1">{errors.aadhaar}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className={`w-full p-2 border rounded-md transition ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.address ? "border-red-500" : ""}`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="role">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md transition appearance-none ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900"
                } ${errors.role ? "border-red-500" : ""}`}
              >
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-1">{errors.role}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="newRole">
                Add New Role
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="newRole"
                  id="newRole"
                  value={newRole}
                  onChange={handleNewRoleChange}
                  placeholder="Enter new role"
                  className={`w-full p-2 border rounded-md transition ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } ${roleError ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  onClick={handleAddRole}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    darkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  <Plus size={18} />
                  Add Role
                </button>
              </div>
              {roleError && (
                <p className="text-red-500 text-xs mt-1">{roleError}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <Plus size={18} />
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}