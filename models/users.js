const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  address: String,
  gender: String,
});

const User = mongoose.model("users", usersSchema);

module.exports = User;
