import mongoose from "mongoose";

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

export default mongoose.model("User", userSchema);
