const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  title: {
    type: String,
  },
  threads: {
    type: [String],
    default: [],
  },
  scheduled: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
  },
});

module.exports = new mongoose.model("Tweet", tweetSchema);
