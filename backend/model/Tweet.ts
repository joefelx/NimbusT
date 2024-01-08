import mongoose from "mongoose";

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

export default mongoose.model("Tweet", tweetSchema);
