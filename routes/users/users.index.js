var express = require("express");
const { loginUser } = require("../login/login.controller");
var router = express.Router();

const { getAllUser, getUserById, postUser } = require("./users.controller");
// const { auth } = require("../../helper/auth");

// router.get("/profile", auth, (req, res) => {
//   res.json({
//     message: "Hallo user",
//     user: req.body,
//   });
// });

/* GET users listing. */
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", postUser);

// router.post("/login", loginUser);

module.exports = router;
