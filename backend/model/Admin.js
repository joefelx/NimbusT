const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  token: {
    type: String,
  },
});

module.exports = new mongoose.model("Admin", adminSchema);
