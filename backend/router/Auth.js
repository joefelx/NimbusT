const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL;
const CLIENT_URL = process.env.BASE_URL;

const twitterClient = new TwitterApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

router.get("/twitter", (req, res) => {
  const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(
    CALLBACK_URL,
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

router.get("/twitter/callback", (req, res) => {
  const { state } = req.query;
  const code = req.query.code;

  const { codeVerifier, state: sessionState } = req.session;

  if (!codeVerifier || !state || !sessionState || !code) {
    return res.status(400).send("You denied the app or your session expired!");
  }

  if (state !== sessionState) {
    return res.status(400).send("Stored tokens didnt match!");
  }

  const client = new TwitterApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  client
    .loginWithOAuth2({ code, codeVerifier, redirectUri: CALLBACK_URL })
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

            const userData = {
              username: user.username,
              name: user.name,
            };

            const token = jwt.sign(userData, process.env.TOKEN_SECRET, {
              expiresIn: "1d",
            });

            res.cookie("nimbus_token", token);
            res.redirect(`${CLIENT_URL}`);
          } else {
            const user = new User({
              clientId: userObject.id,
              username: userObject.username,
              name: userObject.name,
              accessToken,
              refreshToken,
              expiresIn,
            });

            const savedUser = await user.save();

            const userData = {
              username: savedUser.username,
              name: savedUser.name,
            };

            const token = jwt.sign(userData, process.env.TOKEN_SECRET, {
              expiresIn: "1d",
            });

            res.cookie("nimbus_token", token);
            res.redirect(`${CLIENT_URL}`);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
    .catch(() => res.status(403).send("Invalid verifier or access tokens!"));
});

module.exports = router;
