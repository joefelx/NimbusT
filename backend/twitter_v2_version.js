require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const morgan = require("morgan");
const makeThread = require("./utils/makeThread");

const User = require("./model/User");

const app = express();

// Middlewares
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(morgan("tiny"));

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

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const callbackURL = "http://localhost:3000/auth/twitter/callback";

const twitterClient = new TwitterApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

app.get("/", (req, res) => {
  const time = new Date(Date.UTC(2023, 1, 30, 13, 21));
  const t = new Date();
  let ms = new Date(t.valueOf());

  // const utcdate = Date.UTC(year, month, day, hours, minutes, seconds, millisec)

  // let timeInJson = time.toJSON();
  res.status(200).json({
    "target time": time,
    "current time": ms,
  });
});

app.get("/auth/twitter", (req, res) => {
  const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(
    callbackURL,
    { scope: ["tweet.read", "tweet.write", "users.read", "offline.access"] }
  );

  req.session.regenerate((err) => {
    if (err) {
      console.log(err);
    }

    req.session.codeVerifier = codeVerifier;
    req.session.state = state;

    req.session.save((err) => {
      if (err) console.log(err);
      res.redirect(url);
    });
  });
});

app.get("/auth/twitter/callback", (req, res) => {
  // Extract state and code from query string
  const { state, code } = req.query;
  // Get the saved codeVerifier from session
  const { codeVerifier, state: sessionState } = req.session;

  if (!codeVerifier || !state || !sessionState || !code) {
    return res.status(400).send("You denied the app or your session expired!");
  }
  if (state !== sessionState) {
    return res.status(400).send("Stored tokens didnt match!");
  }

  // Obtain access token
  const client = new TwitterApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  client
    .loginWithOAuth2({ code, codeVerifier, redirectUri: callbackURL })
    .then(
      async ({
        client: loggedClient,
        accessToken,
        refreshToken,
        expiresIn,
      }) => {
        try {
          const { data: userObject } = await loggedClient.v2.me();

          const foundUser = await User.findOne({
            username: userObject.username,
          });

          if (foundUser) {
            const user = await User.findByIdAndUpdate(foundUser.id, {
              $set: { accessToken, refreshToken, expiresIn },
            });

            console.log(user);
          } else {
            const user = await User({
              clientId: userObject.id,
              username: userObject.username,
              accessToken,
              refreshToken,
              expiresIn,
            });

            const savedUser = await user.save();

            console.log(savedUser);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
    .catch(() => res.status(403).send("Invalid verifier or access tokens!"));

  res.redirect("/");
});

app.post("/thread", async (req, res) => {
  try {
    const { username, threadsList, scheduled, date } = req.body;
    const userdb = await User.findOne({ username: username });
    const client = new TwitterApi(userdb.accessToken);

    if (scheduled) {
      const d = new Date();
      let ms = d.valueOf();

      if (ms == date) {
        const thread = await makeThread(client, threadsList);
        res.status(201).json(thread);
      }
    } else {
      /* Make a Thread */
      // const thread = await client.v2.tweetThread(threadsList);
      const thread = await makeThread(client, threadsList);
      res.status(201).json(thread);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started at PORT:5000");
});
