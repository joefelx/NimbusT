const router = require("express").Router();

const Admin = require("../model/Admin");
const isTokenExpired = require("../utils/isTokenExpired");
const generateToken = require("../utils/generateToken");

router.post("/check-token", (req, res) => {
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

router.get("/update-access-token/admin", async (req, res) => {
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

module.exports = router;
