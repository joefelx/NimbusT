const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

module.exports = new mongoose.model("Admin", adminSchema);
