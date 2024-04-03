const jwt = require("jsonwebtoken");
const Admin = require("../model/Admin");

const isAdmin = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(204).json("Unauthorized");
    return;
  } else {
    const adminToken = req.headers.authorization.split(" ")[1];

    jwt.verify(
      adminToken,
      process.env.TOKEN_SECRET,
      async (err, decodedAdmin) => {
        if (err) {
          res.status(401).json("Invalid Token");
          return;
        } else {
          const admin = await Admin.findOne({
            username: decodedAdmin.username,
          });
          if (admin.accessToken === adminToken) {
            req.admin = admin;
            next();
          } else {
            res.status(401).json("Not Authorized Admin");
            return;
          }
        }
      }
    );
  }
};

module.exports = isAdmin;
