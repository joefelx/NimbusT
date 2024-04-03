require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoConnection = require("./config/dbConfig");

const authRouter = require("./router/Auth");
const adminRouter = require("./router/Admin");
const userRouter = require("./router/User");
const postRouter = require("./router/Post");
const templateRouter = require("./router/Template");
const tokenRouter = require("./router/Token");

const cronJob = require("./utils/cronJob");
const isAuthenticated = require("./middleware/isAuthenticated");
const isAdmin = require("./middleware/isAdmin");

// Express server Initialised
const app = express();

const PORT = process.env.DEVELOPMENT ? 5000 : process.env.PORT;
const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const CLIENT_LOCAL_URL = process.env.CLIENT_LOCAL_URL;
const DEVELOPMENT = process.env.DEVELOPMENT;

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
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
  })
);

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
app.use("/post", isAuthenticated, postRouter);
app.use("/admin", isAdmin, adminRouter);
app.use("/template", templateRouter);
app.use("/token", tokenRouter);

cronJob();

app.listen(PORT, () => {
  console.log("Server started at PORT:5000");
});
