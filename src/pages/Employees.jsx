import { useState, useEffect, useRef } from "react";
import { Plus, Edit, Eye, Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Chart from "chart.js/auto";

export default function Employee() {
  const { darkMode } = useOutletContext();

  // Dummy employee data
  const initialEmployees = [
    {
      id: "#EMP001",
      name: "Ravi Sharma",
      mobile: "9876543210",
      email: "ravi.sharma@example.com",
      aadhaar: "123456789012",
      address: "Mumbai, 400001",
      role: "Employee",
      hoursWorked: [
        { month: "Jan", hours: 160 },
        { month: "Feb", hours: 150 },
        { month: "Mar", hours: 170 },
        { month: "Apr", hours: 165 },
        { month: "May", hours: 155 },
        { month: "Jun", hours: 180 },
        { month: "Jul", hours: 175 },
        { month: "Aug", hours: 160 },
      ],
    },
    {
      id: "#EMP002",
      name: "Priya Patel",
      mobile: "8765432109",
      email: "priya.patel@example.com",
      aadhaar: "234567890123",
      address: "Delhi, 110001",
      role: "Employee",
      hoursWorked: [
        { month: "Jan", hours: 140 },
        { month: "Feb", hours: 145 },
        { month: "Mar", hours: 150 },
        { month: "Apr", hours: 135 },
        { month: "May", hours: 160 },
        { month: "Jun", hours: 155 },
        { month: "Jul", hours: 165 },
        { month: "Aug", hours: 150 },
      ],
    },
    {
      id: "#EMP003",
      name: "Amit Kumar",
      mobile: "7654321098",
      email: "amit.kumar@example.com",
      aadhaar: "345678901234",
      address: "Bangalore, 560001",
      role: "Technician",
      hoursWorked: [
        { month: "Jan", hours: 170 },
        { month: "Feb", hours: 160 },
        { month: "Mar", hours: 175 },
        { month: "Apr", hours: 165 },
        { month: "May", hours: 180 },
        { month: "Jun", hours: 170 },
        { month: "Jul", hours: 160 },
        { month: "Aug", hours: 155 },
      ],
    },
    {
      id: "#EMP004",
      name: "Sneha Gupta",
      mobile: "6543210987",
      email: "sneha.gupta@example.com",
      aadhaar: "456789012345",
      address: "Chennai, 600001",
      role: "Staff",
      hoursWorked: [
        { month: "Jan", hours: 150 },
        { month: "Feb", hours: 155 },
        { month: "Mar", hours: 160 },
        { month: "Apr", hours: 170 },
        { month: "May", hours: 165 },
        { month: "Jun", hours: 175 },
        { month: "Jul", hours: 160 },
        { month: "Aug", hours: 180 },
      ],
    },
  ];

  // State for employee list
  const [employees, setEmployees] = useState(initialEmployees);

  // Handle Add New Employee
  const handleAddEmployee = () => {
    console.log("Add New Employee clicked");
    // Implement form logic or redirect to a form page
    alert("Add New Employee functionality to be implemented");
  };

  // Handle View action
  const handleView = (employee) => {
    console.log("View Employee:", employee);
    // Implement view logic
    alert(`Viewing ${employee.name}'s details:\n` +
          `ID: ${employee.id}\n` +
          `Mobile: ${employee.mobile}\n` +
          `Email: ${employee.email}\n` +
          `Aadhaar: ${employee.aadhaar}\n` +
          `Address: ${employee.address}\n` +
          `Role: ${employee.role}`);
  };

  // Handle Edit action
  const handleEdit = (employee) => {
    console.log("Edit Employee:", employee);
    // Implement edit logic
    alert(`Editing ${employee.name}'s details`);
  };

  // Handle Delete action
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((_, i) => i !== index));
      console.log("Deleted employee at index:", index);
    }
  };

  // Chart setup
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = employees.map((emp) => emp.name);
    const data = employees.map((emp) => emp.hoursWorked[emp.hoursWorked.length - 1].hours);

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Hours Worked (August 2025)",
          data: data,
          backgroundColor: [
            "rgba(0, 128, 128, 0.8)", // Teal for Dipankar
            "rgba(0, 191, 255, 0.8)", // Light blue for Priya
            "rgba(0, 0, 255, 0.8)",   // Medium blue for Amit
            "rgba(128, 0, 128, 0.8)", // Purple for Sneha
          ],
          borderColor: [
            "rgba(0, 128, 128, 1)",
            "rgba(0, 191, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(128, 0, 128, 1)",
          ],
          borderWidth: 1,
        }],
      },
      options: {
        indexAxis: "y", // Horizontal bars
        scales: {
          x: {
            beginAtZero: true,
            max: 200,
            title: {
              display: true,
              text: "Hours",
            },
          },
          y: {
            title: {
              display: true,
              text: "Employees",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [employees, darkMode]);

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
            Manage employee details.
          </p>
        </div>
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
            className={`w-full border rounded-lg text-center text-sm ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <thead
              className={darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-100 text-gray-900"}
            >
              <tr>
                <th className="p-3">Employee ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Email</th>
                <th className="p-3">Aadhaar</th>
                <th className="p-3">Address</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-3 text-center">
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
                    <td className="p-3">{emp.id}</td>
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3">{emp.mobile}</td>
                    <td className="p-3">{emp.email}</td>
                    <td className="p-3">{emp.aadhaar}</td>
                    <td className="p-3">{emp.address}</td>
                    <td className="p-3">{emp.role}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <button
                        onClick={() => handleView(emp)}
                        className={`p-2 rounded transition ${
                          darkMode
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(emp)}
                        className={`p-2 rounded transition ${
                          darkMode
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className={`p-2 rounded transition ${
                          darkMode
                            ? "bg-orange-600 text-white hover:bg-orange-700"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Graph Section */}
      <div
        className={`p-4 shadow rounded-md transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Employee Hours Worked (August 2025)</h3>
        <div className="h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}