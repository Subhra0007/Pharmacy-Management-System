//controllers/customerController.js
import Customer from "../models/Customer.js";

// Get all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// Get single customer
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: "Customer not found" });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customer" });
  }
};

// Add new customer
export const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: "Failed to add customer" });
  }
};

// Update customer
export const updateCustomer = async (req, res) => {
  try {
    const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Customer not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Failed to update customer" });
  }
};

// Delete customer
export const deleteCustomer = async (req, res) => {
  try {
    const deleted = await Customer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete customer" });
  }
};