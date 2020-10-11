const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
