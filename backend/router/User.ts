import express, { Request, Response } from "express";
import { TwitterApi } from "twitter-api-v2";
import User from "../model/User";

const router = express.Router();

// Save the user in the database
router.post("/", async (req: Request, res: Response) => {
  try {
    const userDB = await User.findOne({ username: req.body.username });
    res.status(200).json(userDB);
  } catch (error) {
    console.log(error);
  }
});

// Get the user from the database
router.get("/", async (req: Request, res: Response) => {
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
router.post("/profileimg", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const client = new TwitterApi(user?.accessToken as any);

    const currentUser = await client.currentUser();

    const allBannerSizes = await client.v1.userProfileBannerSizes({
      user_id: currentUser.id_str,
    });

    res.status(200).json(allBannerSizes);
  } catch (error) {
    res.status(200).json(error);
  }
});

export default router;
