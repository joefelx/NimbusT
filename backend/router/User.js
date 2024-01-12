const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");
const User = require("../model/User");

// Get the user in the database
router.post("/", async (req, res) => {
  try {
    const userDB = await User.findOne({ username: req.body.username });
    res.status(200).json(userDB);
  } catch (error) {
    console.log(error);
  }
});

// Get the user = require( the database
router.get("/", async (req, res) => {
  const username = req.query.username;
  try {
    const user = await User.find({ username: username })
      .select("-accessToken")
      .select("-clientId")
      .select("-refreshToken")
      .select("-expiresIn")
      .select("-__v");
    // const { accessToken, refreshToken, expiresIn, __v, ...others } = user?._doc;
    res.status(200).json(user);
    if (!user) {
      res.status(404).json("user not found");
    }
  } catch (error) {
    console.log(error);
  }
});

// Get user profile image
router.post("/profileimg", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const client = new TwitterApi(user.accessToken);

    const currentUser = await client.currentUser();

    const allBannerSizes = await client.v1.userProfileBannerSizes({
      user_id: currentUser.id_str,
    });

    res.status(200).json(allBannerSizes);
  } catch (error) {
    res.status(200).json(error);
  }
});

module.exports = router;
