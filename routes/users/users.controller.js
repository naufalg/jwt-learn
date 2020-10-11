require("dotenv").config();
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../../models/models.index");

module.exports = {
  getAllUser: (req, res) => {
    User.find()
      .then((result) => {
        res.status(200).json({
          message: "success get data user",
          result,
        });
      })
      .catch((err) => {
        res.status(404).json("404 error cannot get data user");
      });
  },

  getUserById: async (req, res) => {
    const usersById = await User.findById(req.params.id);
    try {
      res.json({
        message: "success get user with id",
        usersById,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  //   register user first using post
  postUser: async (req, res) => {
    // const userCheck = await User.findOne({ email: req.body.email });
    // if (userCheck) {
    //   res.json({
    //     message: "email used already created an account",
    //   });
    // } else {
      // console.log("User", User
      const salt = bcrypt.genSaltSync(7);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      let userInput = {
        ...req.body,
        password: hashedPassword,
      };
      console.log(userData);

      userCreated = await User.create(userInput);

      try {
        res.json({
          message: "success create data user with hashed password",
          userCreated,
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
    //   }
    }
  },
};
