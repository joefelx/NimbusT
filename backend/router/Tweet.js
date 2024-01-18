const router = require("express").Router();

const User = require("../model/User");
const Tweet = require("../model/Tweet");
const { TwitterApi } = require("twitter-api-v2");
const makeThread = require("../utils/makeThread");

// Get Tweets of the User by Sending Username
router.post("/", async (req, res) => {
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
router.post("/thread", async (req, res) => {
  try {
    const { username, threadsList } = req.body;
    const user = await User.findOne({ username: username });

    const client = new TwitterApi(user.accessToken);
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
router.post("/schedule", async (req, res) => {
  try {
    const { username, title, threadsList, scheduled, date } = req.body;
    const user = await User.findOne({ username: username });

    if (user) {
      await new Tweet({
        username: user.username,
        title: title,
        threads: threadsList,
        scheduled: scheduled,
        date: date,
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
router.post("/get/schedule", async (req, res) => {
  try {
    const { username } = req.body;
    const scheduledTweets = await Tweet.find({
      username: username,
    });

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

module.exports = router;
