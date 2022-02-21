const express = require("express");

const app = express();

PORT = 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
