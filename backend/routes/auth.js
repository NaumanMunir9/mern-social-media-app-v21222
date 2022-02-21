// libraries
const router = require("express").Router();
// models
const User = require("../models/user");

// register user
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    console.log(`User ${JSON.stringify(user)} has been registered`);
    res.status(201).json(user);
  } catch (error) {
    console.log(`Error Occurred while registering user: ${error}`);
    res.status(500).send(error);
  }
});

module.exports = router;
