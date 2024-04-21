const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB;

const initializeDatabase = async () => {
  try {
    const connection = mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("Connection Successful");
    }
  } catch (error) {
    console.log("connection failed", error);
  }
};

module.exports = { initializeDatabase };
