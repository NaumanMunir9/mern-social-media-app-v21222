const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

PORT = 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
