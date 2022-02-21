const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey, This is the user route");
});

module.exports = router;
