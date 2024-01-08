const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  title: {
    type: String,
  },
  threads: {
    type: [],
  },
  scheduled: {
    type: Boolean,
    default: false,
  },
  time: {
    type: String,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
