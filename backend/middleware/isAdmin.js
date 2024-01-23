const jwt = require("jsonwebtoken");
const Admin = require("../model/Admin");

const isAdmin = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(204).json("Unauthorized");
    return;
  } else {
    const token = req.headers.authorization.split(" ")[1];
    const decodedAdmin = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(token);

    if (decodedAdmin) {
      const admin = await Admin.findOne({ username: decodedAdmin.username });
      console.log(admin.token);
      if (admin.token === token) {
        next();
      } else {
        res.status(404).json("Not Authorized Admin");
        return;
      }
    }
  }
};

module.exports = isAdmin;
