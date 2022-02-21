// libraries
const router = require("express").Router();
const bcrypt = require("bcrypt");
// models
const User = require("../models/user");

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.idAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).send(error);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(401).send("Unauthorized");
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.idAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Account has been deleted");
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(401).send("Unauthorized");
  }
});

// get a user

// follow a user

// unFollow a user

module.exports = router;
