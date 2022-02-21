// libraries
const router = require("express").Router();
// models
const Post = require("../models/Post");

// create a new post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("You are not authorized to update this post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a post

// like a post

// get a post

// get timeline posts

module.exports = router;
