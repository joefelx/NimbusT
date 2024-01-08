require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { checkMimeType } = require("./utils");
const upload = require("./utils/Upload");

const {
  authRouter,
  userRouter,
  tweetRouter,
  templateRouter,
} = require("./router");
const User = require("./model/User");

// Express server Initialised
const app = express();

// Middlewares
app.use(
  "/public/images",
  express.static(path.join(__dirname, "public/images"))
);
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(morgan("tiny"));
app.use(cors());

// Mongodb setup
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongodb is connected");
  }
);

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    data: {
      status: "success",
    },
  });
});
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/tweet", tweetRouter);
app.use("/template", templateRouter);

app.post("/media", upload.single("image"), async (req, res) => {
  try {
    res.status(201).json("File Saved!");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("Server started at PORT:5000");
});
