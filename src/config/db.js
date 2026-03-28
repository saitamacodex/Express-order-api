const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongo connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
    process.exit(1);
  }
}

module.exports = connectMongoDB;
