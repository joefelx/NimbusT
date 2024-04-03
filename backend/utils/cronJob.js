const cron = require("node-cron");
const axios = require("axios");
const isTokenExpired = require("./isTokenExpired");
const User = require("../model/User");
const { TwitterApi } = require("twitter-api-v2");
const makeThread = require("./makeThread");
const Post = require("../model/Post");
const Admin = require("../model/Admin");

function cronJob() {
  const currentDate = new Date().toLocaleDateString();

  async function getScheduledThreads() {
    const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
    const ADMIN = process.env.ADMIN;

    // Checking for the admin
    const admin = await Admin.findOne({ username: ADMIN });

    if (admin.accessToken === ADMIN_TOKEN) {
      // Getting all the scheduled posts
      const posts = await Post.find({ scheduled: true });

      if (posts) {
        posts.forEach(async (p) => {
          const postDate = new Date(p.date).toLocaleDateString();

          // Checking for the current date
          if (currentDate === postDate) {
            // getting the post user
            const postUser = await User.findOne({ username: p.username });

            // Making the Twitter client
            const postClient = new TwitterApi(postUser.accessToken);
            if (postUser && postClient) {
              // Posting...
              await makeThread(postClient, p.threads);

              // Updating the post from scheduled from true to false
              p.scheduled = false;
              await p.save();
            }
          }
        });
      }
    }
  }

  // Cron Job
  cron.schedule("0 0 23 * *", () => {
    console.log("Cronjob Started");
    getScheduledThreads();
  });
}

module.exports = cronJob;
