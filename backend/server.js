import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import doctorRoutes from "./routes/doctorRoutes.js";
import treatmentRoutes from "./routes/treatmentRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/appointments", appointmentRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("✅ Hospital Backend API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
