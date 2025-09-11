//index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { database } from "./config/database.js";
import customerRoutes from "./routes/customerRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import productRoutes from "./routes/productRoutes.js";

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

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));