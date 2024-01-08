const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");
const User = require("../model/User");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL;
const CLIENT_URL = process.env.BASE_URL;

// Twitter Client Initialised
const twitterClient = new TwitterApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

// Twitter Authenication route which redirects to TwitterAPI Authenication Page
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

// Redirects to the callback when authentication successfully
router.get("/twitter/callback", (req, res) => {
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

            res.redirect(`${CLIENT_URL}/${user.username}`);
          } else {
            const user = await User({
              clientId: userObject.id,
              username: userObject.username,
              name: userObject.name,
              accessToken,
              refreshToken,
              expiresIn,
            });

            const savedUser = await user.save();

            res.redirect(`${CLIENT_URL}/${savedUser.username}`);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
    .catch(() => res.status(403).send("Invalid verifier or access tokens!"));
});

module.exports = router;
