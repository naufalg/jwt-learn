require("dotenv").config();
const { SECRET_KEY } = require("../../config/config.index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../../models/models.index");

module.exports = {
  loginUser: async (req, res) => {
    try {
      const userCheck = await User.findOne({ email: req.body.email });
      if (userCheck) {
        const passwordCheck = bcrypt.compareSync(
          req.body.password,
          userCheck.password
        );
        if (passwordCheck) {
          const token = jwt.sign(
            userCheck.toObject(),
            SECRET_KEY || process.env.SECRET_KEY
          );
          res.json({
            message: "login success",
            token,
          });
        } else {
          res.json("wrong password");
        }
      } else {
        res.json("user not found");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
