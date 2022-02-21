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

// Login User
router.post("/login", async (req, res) => {
  try {
    // find user by email
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found");

    // compare password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    !isMatch && res.status(401).send("Invalid password");

    // return user
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error Occurred while logging in user: ${error}`);
    res.status(500).send(error);
  }
});

module.exports = router;
