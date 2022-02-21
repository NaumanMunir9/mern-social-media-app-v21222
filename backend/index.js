const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log(`Connected to MongoDB at: ${process.env.MONGO_URL}`);
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
