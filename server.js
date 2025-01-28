const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolioRoutes = require("./routes/portfolioRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON data
app.use(cors()); // To handle CORS issues

// MongoDB connection



mongoose.connect(process.env.MONGO_URl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.use("/api", portfolioRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
