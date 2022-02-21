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
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).send(others);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).send("Now you are following this user");
      } else {
        res.status(403).send("You are already following this user");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    res.status(403).send("You cannot follow yourself");
  }
});

// unFollow a user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: { followers: req.body.userId },
        });
        await currentUser.updateOne({
          $pull: { followings: req.params.id },
        });
        res.status(200).send("You are no longer following this user");
      } else {
        res.status(403).send("You are not following this user");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    res.status(403).send("You cannot unfollow yourself");
  }
});

module.exports = router;
