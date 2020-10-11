const { PORT, MONGODB_URI_CLOUD, MONGODB_URI_LOCAL } = require("./environment");
const dbMongo = require("./dbConfig");

module.exports = {
  dbMongo,
  PORT,
  MONGODB_URI_CLOUD,
  MONGODB_URI_LOCAL,
};
