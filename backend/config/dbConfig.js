const mongoose = require("mongoose");

// Mongodb setup

function mongoConnection() {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Mongodb is connected");
  });
  mongoose.set("strictQuery", true);
}

module.exports = mongoConnection;
