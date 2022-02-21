// libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// Routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// initial Express App
const app = express();

// dotenv
dotenv.config();

// database
mongoose.connect(process.env.MONGO_URL, () => {
  console.log(`Connected to MongoDB at: ${process.env.MONGO_URL}`);
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
