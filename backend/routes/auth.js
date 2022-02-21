// libraries
const router = require("express").Router();
const bcrypt = require("bcrypt");
// models
const User = require("../models/user");

// register user
router.post("/register", async (req, res) => {
  try {
    // generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // generate new User
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and return response
    const user = await newUser.save();
    console.log(`User ${JSON.stringify(user)} has been registered`);
    res.status(201).json(user);
  } catch (error) {
    console.log(`Error Occurred while registering user: ${error}`);
    res.status(500).send(error);
  }
});

module.exports = router;
