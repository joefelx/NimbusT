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
const adminRouter = require("./router/Admin");
const userRouter = require("./router/User");
const postRouter = require("./router/Post");
const templateRouter = require("./router/Template");
const cronJob = require("./utils/cronJob");
const isAuthenticated = require("./middleware/isAuthenticated");
const isAdmin = require("./middleware/isAdmin");
const isTokenExpired = require("./utils/isTokenExpired");
const Admin = require("./model/Admin");
const generateToken = require("./utils/generateToken");

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
app.use("/post", isAuthenticated, postRouter);
app.use("/admin", isAdmin, adminRouter);
app.use("/template", templateRouter);

app.post("/check-token", (req, res) => {
  const { token } = req.body;

  if (!isTokenExpired(token)) {
    res.status(200).json({
      expired: false,
    });
  } else {
    res.status(200).json({
      expired: true,
    });
  }
});

app.get("/update-access-token/admin", async (req, res) => {
  try {
    const adminUsername = process.env.ADMIN;
    let adminFound = await Admin.findOne({ username: adminUsername });
    if (isTokenExpired(adminFound.accessToken)) {
      const userData = {
        username: adminFound.username,
        name: adminFound.name,
      };
      const token = generateToken(userData, "7d");

      // updating accesstoken and saving in the database
      adminFound.accessToken = token;
      adminFound = await adminFound.save();

      res.status(200).json({
        status: "success",
        message: "Updated admin.",
        adminAccessToken: adminFound.accessToken,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Admin is not expired",
        adminAccessToken: adminFound.accessToken,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

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
