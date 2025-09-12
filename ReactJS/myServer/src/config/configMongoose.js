const mongoose = require("mongoose");

module.exports = (app) => {
  async function main() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ Database connected!");
    } catch (err) {
      console.error("❌ Database connection error:", err.message);
    }
  }

  main();
};