const { sign } = require("jsonwebtoken");

function generateToken(data, expiresIn) {
  const token = sign(data, process.env.TOKEN_SECRET, { expiresIn: expiresIn });
  return token;
}

module.exports = generateToken;
