const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  template: {
    type: String,
  },
  tags: {
    type: Array,
    default: [],
  },
});

module.exports = new mongoose.model("Template", templateSchema);
