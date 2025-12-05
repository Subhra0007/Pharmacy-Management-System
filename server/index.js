//index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { database } from "./config/database.js";
import customerRoutes from "./routes/customerRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import customerOrderRoutes from "./routes/customerOrderRoutes.js"
import supplierOrderRoutes from "./routes/supplierOrderRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"
import employeeRoutes from "./routes/employeeRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
database.connect();

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/doctors", doctorRoutes); 
app.use("/api/suppliers", supplierRoutes); 
app.use("/api/products", productRoutes);
app.use("/api/customerOrderRoutes", customerOrderRoutes)
app.use("/api/supplier-orders", supplierOrderRoutes)
app.use("/api/notes", noteRoutes)
app.use("/api/employeeRoutes", employeeRoutes)

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));