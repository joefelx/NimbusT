const Post = require("../model/Post");
const Admin = require("../model/Admin");
const router = require("express").Router();
const generateToken = require("../utils/generateToken");

router.post("/", async (req, res) => {
  try {
    if (process.env.ADMIN) {
      let foundAdmin = await Admin.findOne({ username: process.env.ADMIN });

      if (foundAdmin) {
        res.status(201).json({ message: "Admin found", foundAdmin });
      } else {
        const { username, name } = req.body;
        const adminData = {
          username,
          name,
        };

        const accessToken = generateToken(adminData, "30d");

        const admin = await new Admin({
          username,
          accessToken,
        });

        const savedAdmin = await admin.save();

        res.status(201).json({ message: "Admin Saved", savedAdmin });
      }
    }
  } catch (error) {
    console.log("error");
  }
});

// Get the scheduled Post and Threads for the database
router.get("/schedule", async (req, res) => {
  try {
    const scheduledPost = await Post.find({ scheduled: true });

    res.status(200).json({
      status: "success",
      data: scheduledPost,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
