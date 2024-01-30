const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
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

module.exports = new mongoose.model("Post", postSchema);
