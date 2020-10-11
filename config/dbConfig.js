const mongoose = require("mongoose");
const { MONGODB_URI_CLOUD } = require("./environment");

mongoose.connect(MONGODB_URI_CLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbMongo = mongoose.connection;

module.exports = dbMongo;
