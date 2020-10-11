var express = require("express");
var router = express.Router();

const { loginUser } = require("./login.controller");
const { authJwt } = require("../../helper/authJwt");

router.get("/profile", authJwt, (req, res) => {
  res.json({
    message: "Hallo user",
    user: req.body,
  });
});

/* GET users listing. */

router.post("/login", loginUser);

module.exports = router;
