const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const axios = require("axios");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const User = require("./models/User");
const appointmentRoutes = require("./routes/appointment");
const doctorRoutes = require("./routes/doctor");
const patientRoutes = require("./routes/patient");
const notificationRoutes = require("./routes/notification");
const emailRoutes = require("./routes/email");
const billingRoutes = require("./routes/billing");
const educationalContentRoutes = require("./routes/educationalContent");
const healthTipsRoutes = require("./routes/healthTips");
const medicalGuidelineRoutes = require("./routes/medicalGuidelines");
const feedbackRoutes = require("./routes/feedback");
const emergencyAlertRoutes = require("./routes/emergencyAlerts");
const healthRecordsRoutes = require("./routes/healthRecords");
const videoConsultationRoutes = require("./routes/videoConsultation");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const chatRoutes = require("./routes/chat");
const userRoutes = require('./routes/users');
const reportsRoute = require('./routes/reports'); // Adjust the path as needed

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Environment Variables
const API_KEY = process.env.API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText";

// Chatbot API Endpoint
app.post("/api/query", async (req, res, next) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const response = await axios.post(
      API_URL,
      {
        prompt: query,
        maxTokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ response: response.data });
  } catch (error) {
    console.error("Error fetching chatbot response:", error.message);
    next(error);
  }
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const adminEmail = "admin@gmail.com";
    const adminPassword = "123";
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const admin = new User({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log("Admin account created:", adminEmail);
    } else {
      console.log("Admin account already exists.");
    }
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/educational-content", educationalContentRoutes);
app.use("/api/health-tips", healthTipsRoutes);
app.use("/api/medical-guidelines", medicalGuidelineRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/emergency-alerts", emergencyAlertRoutes);
app.use("/api/health-records", healthRecordsRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/video-consultation", videoConsultationRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api", feedbackRoutes);
app.use('/api', reportsRoute); // Prefix routes with '/api'
app.use("/api", healthRecordsRoutes);





app.use(userRoutes);
// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
