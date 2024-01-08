import mongoose from "mongoose";

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

export default mongoose.model("Template", templateSchema);
