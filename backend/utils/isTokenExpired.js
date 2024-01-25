const { decode } = require("jsonwebtoken");

function isTokenExpired(token) {
  if (token) {
    const { exp } = decode(token);

    if (Date.now() >= exp * 1000) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isTokenExpired;
