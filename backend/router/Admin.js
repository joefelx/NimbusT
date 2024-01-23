const Tweet = require("../model/Tweet");
const Admin = require("../model/Admin");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, name } = req.body;

  const userData = {
    username,
    name,
  };

  const token = jwt.sign(userData, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  const admin = await new Admin({
    username,
    token,
  });

  const savedAdmin = await admin.save();

  res.status(201).json({ message: "Admin Saved", savedAdmin });
});

router.get("/get-scheduled-post", async (req, res) => {
  try {
    const post = await Tweet.find({ scheduled: true });
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
