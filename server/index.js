// index.js
// Express entrypoint using CommonJS for consistency.
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { database } = require("./config/database");
const customerRoutes = require("./routes/customerRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");
const customerOrderRoutes = require("./routes/customerOrderRoutes");
const supplierOrderRoutes = require("./routes/supplierOrderRoutes");
const noteRoutes = require("./routes/noteRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const complianceRoutes = require("./routes/complianceRoutes");
const jobPostingRoutes = require("./routes/jobPostingRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// MongoDB Connection
database.connect();

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customer-orders", customerOrderRoutes);
app.use("/api/supplier-orders", supplierOrderRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/compliance", complianceRoutes);
app.use("/api/job-postings", jobPostingRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/interviews", require("./routes/interviewRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/negotiations", require("./routes/negotiationRoutes"));

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));