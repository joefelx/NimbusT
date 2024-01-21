require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/Upload");
const mongoConnection = require("./config/dbConfig");

const authRouter = require("./router/Auth");
const userRouter = require("./router/User");
const tweetRouter = require("./router/Tweet");
const templateRouter = require("./router/Template");
const cronJob = require("./utils/cronJob");

// Express server Initialised
const app = express();

const PORT = process.env.DEVELOPMENT ? 5000 : process.env.PORT;
const BASE_SERVER_URL = process.env.BASE_SERVER_URL;

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

// MongoDB connection
mongoConnection();

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

// cronJob();

app.listen(PORT, () => {
  console.log("Server started at PORT:5000");
});
