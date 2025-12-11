// config/database.js
// Simple Mongo connection helper using CommonJS to match the rest of the server.
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const database = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ DB Connected Successfully");
    } catch (error) {
      console.error("❌ DB Connection Failed:", error);
      process.exit(1);
    }
  },
};

module.exports = { database };