const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clientId: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  expiresIn: {
    type: Number,
  },
});

module.exports = new mongoose.model("User", userSchema);
