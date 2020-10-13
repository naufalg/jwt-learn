var express = require("express");
const { loginUser } = require("../login/login.controller");
var router = express.Router();

const { getAllUser, getUserById, postUser } = require("./users.controller");
const { authJwt } = require("../../helper/authJwt");

router.get("/profile", authJwt, (req, res) => {
  res.json({
    message: `Hello ${req.body.name}`,
    user: req.body,
  });
});

// routes
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", postUser);

// router.post("/login", loginUser);

module.exports = router;
