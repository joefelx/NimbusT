const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json("Unauthorized");
    return;
  } else {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Invalid token" });
      } else {
        req.user = decoded;
        console.log(req.user);
        next();
      }
    });
  }
};

module.exports = isAuthenticated;
