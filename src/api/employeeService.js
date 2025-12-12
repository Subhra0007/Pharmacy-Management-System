const API_BASE = "http://localhost:5000";

const mapEmployeeFromApi = (emp) => ({
  id: emp.employeeId || emp.id,
  employeeId: emp.employeeId || emp.id,
  name: emp.name,
  mobile: emp.mobile,
  email: emp.email,
  aadhaar: emp.aadhaar,
  address: emp.address || "N/A",
  gender: emp.gender || "N/A",
  role: emp.role,
  branch: emp.branch || "",
  username: emp.username,
  password: emp.password,
  salary: Number(emp.salary || 0),
  hoursWorked:
    emp.hoursWorked && emp.hoursWorked.length
      ? emp.hoursWorked
      : [
        { month: "Jan", hours: 0 },
        { month: "Feb", hours: 0 },
        { month: "Mar", hours: 0 },
        { month: "Apr", hours: 0 },
        { month: "May", hours: 0 },
        { month: "Jun", hours: 0 },
        { month: "Jul", hours: 0 },
        { month: "Aug", hours: 0 },
      ],
});

export async function fetchEmployees() {
  const response = await fetch(`${API_BASE}/api/employees`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.map(mapEmployeeFromApi);
}

export async function createEmployee(employee) {
  const response = await fetch(`${API_BASE}/api/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to create employee");
  }

  const data = await response.json();
  return mapEmployeeFromApi(data);
}

export async function updateEmployee(id, updates) {
  const response = await fetch(`${API_BASE}/api/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to update employee");
  }

  const data = await response.json();
  return mapEmployeeFromApi(data);
}

export async function removeEmployee(id) {
  const response = await fetch(`${API_BASE}/api/employees/${id}`, { method: "DELETE" });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to delete employee");
  }
  return id;
}
