const {
  PORT,
  MONGODB_URI_CLOUD,
  MONGODB_URI_LOCAL,
  SECRET_KEY,
} = require("./environment");
const dbMongo = require("./dbConfig");

module.exports = {
  dbMongo,
  PORT,
  MONGODB_URI_CLOUD,
  MONGODB_URI_LOCAL,
  SECRET_KEY,
};
