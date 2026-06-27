require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Gym Backend is running 🚀");
});

app.use("/api/messages", require("./routes/messageRoutes"));

// Server
const PORT = process.env.PORT || 1717;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});