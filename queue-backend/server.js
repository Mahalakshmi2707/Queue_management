const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const tokenRoutes = require("./routes/tokenRoutes");

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/tokens", tokenRoutes);

app.get("/", (req, res) => {
  res.send("Digital Queue Backend Running");
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

