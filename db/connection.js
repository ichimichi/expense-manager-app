const mongoose = require("mongoose");
const { dbConfig } = require("../config");

// Create a mongo Connectionb

const createMongoConnection = () => {
  return mongoose.connect(dbConfig.mongoUrl, { useNewUrlParser: true });
};

// get mongo

const getMongoConnection = () => {
  return mongoose.connection;
};

module.exports = {
  createMongoConnection,
  getMongoConnection,
};
