const router = require("express").Router();

const User = require("../model/User");
const Post = require("../model/Post");

const { TwitterApi } = require("twitter-api-v2");
const makeThread = require("../utils/makeThread");

const upload = require("../utils/Upload");

// Get Tweets of the User by Sending Username
router.post("/", async (req, res) => {
  try {
    const { username } = req.body;

    if (req.user.username === username) {
      const allPosts = await Post.find({ username: username });

      res.status(200).json({
        status: "success",
        allPosts,
      });
    } else {
      res.status(404).json({
        data: {
          status: "failed",
          message: "Username not matched!",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Post a Tweet or Thread by posting a list of tweets
router.post("/thread", async (req, res) => {
  try {
    const { userId, username, title, threads, scheduled, date } = req.body;

    if (req.user.id === userId) {
      const user = await User.findOne({ username: req.user.username });

      const client = new TwitterApi(user.accessToken);

      const postfound = await Post.findOne({ title: title, scheduled: true });

      if (postfound) {
        /* Make a Thread */
        await makeThread(client, threads);
      } else {
        await new Post({
          username: username,
          title: title,
          threads: threads,
          scheduled: scheduled,
          date: date,
        }).save();

        /* Make a Thread */
        await makeThread(client, threads);
      }

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
    } else {
      res.status(404).json({
        data: {
          status: "failed",
          message: "Username not matched!",
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
  const thread = await Post.findByIdAndUpdate(threadId, {
    $set: { title, threads, scheduled, time },
  });

  await thread?.save();
  res.status(200).json("Updated");
});

// Schedule a Tweet or Thread
router.post("/schedule", async (req, res) => {
  try {
    const { userId, username, title, threads, scheduled, date } = req.body;

    if (req.user.id === userId) {
      const user = await User.findOne({ username: username });

      if (user) {
        await new Post({
          username: user.username,
          title: title,
          threads: threads,
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
    } else {
      res.status(404).json({
        data: {
          status: "failed",
          message: "Username not matched!",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Post with images
router.post("/thread/media", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    const user = await User.findOne({ username: req.user.username });

    const client = new TwitterApi(user.accessToken);

    const mediaId = await client.v1.uploadMedia(file.path);

    res.json("files");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  // const {userId, }
});

module.exports = router;
