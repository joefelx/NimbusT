require("dotenv").config();
import express, { Express, Request, Response } from "express";
import session from "express-session";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import upload from "./utils/Upload";

import authRouter from "./router/Auth";
import userRouter from "./router/User";
import tweetRouter from "./router/Tweet";
import templateRouter from "./router/Template";

// Express server Initialised
const app: Express = express();

const PORT = process.env.DEVELOPMENT ? 5000 : process.env.PORT;

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
mongoose.connect(process.env.MONGO_URL!, () => {
  console.log("Mongodb is connected");
});
mongoose.set("strictQuery", true);

declare module "express-session" {
  interface SessionData {
    codeVerifier: string;
    state: string;
  }
}

// Routes
app.get("/", (req: Request, res: Response) => {
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

app.listen(PORT, () => {
  console.log("Server started at PORT:5000");
});
