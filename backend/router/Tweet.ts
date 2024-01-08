import express, { Request, Response } from "express";

import User from "../model/User";
import Tweet from "../model/Tweet";
import { TwitterApi } from "twitter-api-v2";
import makeThread from "../utils/makeThread";

const router = express.Router();

// Get Tweets of the User by Sending Username
router.post("/", async (req: Request, res: Response) => {
  const username = req.body.username;
  try {
    const threads = await Tweet.find({ username: username });
    if (threads) {
      res.status(200).json(threads);
    }
    res.status(404).json("Not found");
  } catch (error) {
    console.log(error);
  }
});

// Post a Tweet or Thread by posting a list of tweets
router.post("/thread", async (req: Request, res: Response) => {
  try {
    const { username, threadsList } = req.body;
    const user = await User.findOne({ username: username });

    const client = new TwitterApi(user?.accessToken as any);
    /* Make a Thread */
    await makeThread(client, threadsList);

    await new Tweet({
      username: user?.username,
      data: threadsList,
    }).save();

    res.status(201).json({
      data: {
        status: "success",
        saved: {
          status: true,
        },
        tweeted: {
          status: true,
        },
      },
    });
    if (!user) {
      res.status(404).json({
        data: {
          status: "failed",
          message: "User not found",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Edit the existing tweet or thread which are saved in the Nimbus Database
router.put("/edit", async (req, res) => {
  const { threadId, title, threads, scheduled, time } = req.body;
  const thread = await Tweet.findByIdAndUpdate(threadId, {
    $set: { title, threads, scheduled, time },
  });

  await thread?.save();
  res.status(200).json("Updated");
});

// Schedule a Tweet or Thread
router.post("/schedule", async (req: Request, res: Response) => {
  try {
    const { username, title, threadsList, scheduled, time } = req.body;
    const user = await User.findOne({ username: username });

    if (user) {
      await new Tweet({
        username: user.username,
        title: title,
        threads: threadsList,
        scheduled: scheduled,
        time: time,
      }).save();

      res.status(201).json({
        data: {
          status: "success",
          saved: {
            status: true,
          },
          scheduled: {
            status: true,
          },
        },
      });
    }

    res.status(404).json({
      data: {
        status: "Failed",
        response: "User not Found",
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Get the scheduled Tweets and Threads for the database
router.get("/schedule", async (req: Request, res: Response) => {
  try {
    const scheduledTweets = await Tweet.find({ scheduled: true });

    res.status(200).json({
      data: {
        status: "success",
        scheduled: scheduledTweets,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
