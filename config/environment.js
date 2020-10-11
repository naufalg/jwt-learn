require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI_CLOUD: process.env.MONGODB_URI_CLOUD,
  MONGODB_URI_LOCAL: process.env.MONGODB_URI_LOCAL,
};
