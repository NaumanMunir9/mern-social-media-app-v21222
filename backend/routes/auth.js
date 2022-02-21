const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey, This is the auth route");
});

module.exports = router;
