const mongoose = require("mongoose");

// Load environment variables from .env file if using dotenv package
require("dotenv").config();

// Assuming you have set the DB_URL environment variable properly
const dbUrl = process.env.DB_URL;

// Connect to MongoDB
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Optional: Handle Mongoose deprecation warnings
mongoose.set("useCreateIndex", true); // Example of setting a deprecated option to true
