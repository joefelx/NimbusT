require("dotenv").config();
const express = require("express");
const passport = require("passport");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");
const { SuperfaceClient } = require("@superfaceai/one-sdk");
const session = require("express-session");
const morgan = require("morgan");

// Environment Variables
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL;

// Setup Passport
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      clientType: "confidential",
      callbackURL: `${BASE_URL}/auth/twitter/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Success!", { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);

const app = express();

// Middlewares
app.use(passport.initialize());
app.use(
  session({ secret: "hello world", resave: false, saveUninitialized: true })
);

app.get(
  "/auth/twitter",
  passport.authenticate("twitter", {
    scope: ["tweet.read", "tweet.write", "users.read", "offline.access"],
  })
);

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter"),
  (req, res) => {
    const userData = JSON.stringify(req.user, undefined, 2);
    res.end(
      `<h1>Authentication succeeded</h1> User data: <pre>${userData}</pre>`
    );
  }
);

app.post("/tweet", async (req, res) => {
  // const sdk = new SuperfaceClient();
  // try{
  //   const provider = await sdk.getProvider("twitter")
  //   const profile = await sdk.getProfile("social-media/publish-post")
  //   const result = await with
  // }
});

app.listen("3000", () => {
  console.log("Server started at port 3000");
});
