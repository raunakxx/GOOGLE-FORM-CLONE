const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connect to MongoDB using Mongoose
const dbUrl = process.env.DB_URL;
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
    process.exit(1); // Exit process with error
  });

// Require routes
const userRoute = require("./routes/userRoute");
const formRoute = require("./routes/formRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoute);
app.use("/form", formRoute);

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
