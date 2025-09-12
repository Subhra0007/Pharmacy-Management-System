const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findOne({ employeeId: req.params.id });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { employeeId, name, mobile, email, aadhaar, address, role, salary, hoursWorked } = req.body;

    // Validate required fields
    if (!employeeId || !name || !mobile || !email || !aadhaar || !address || !role || !salary) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate hoursWorked array if provided
    if (hoursWorked && (!Array.isArray(hoursWorked) || hoursWorked.some(h => !h.month || h.hours === undefined))) {
      return res.status(400).json({ message: 'Invalid hoursWorked data' });
    }

    const employee = new Employee({
      employeeId,
      name,
      mobile,
      email,
      aadhaar,
      address,
      role,
      salary,
      hoursWorked: hoursWorked || []
    });

    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { name, mobile, email, aadhaar, address, role, salary, hoursWorked } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (mobile) updateData.mobile = mobile;
    if (email) updateData.email = email;
    if (aadhaar) updateData.aadhaar = aadhaar;
    if (address) updateData.address = address;
    if (role) updateData.role = role;
    if (salary) updateData.salary = salary;
    if (hoursWorked) {
      if (!Array.isArray(hoursWorked) || hoursWorked.some(h => !h.month || h.hours === undefined)) {
        return res.status(400).json({ message: 'Invalid hoursWorked data' });
      }
      updateData.hoursWorked = hoursWorked;
    }

    const employee = await Employee.findOneAndUpdate(
      { employeeId: req.params.id },
      { ...updateData, updatedAt: Date.now() },
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ employeeId: req.params.id });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
};