const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// ademideomikunle
// SGtcOXgNHZFJcQxt
// mongodb+srv://ademideomikunle:SGtcOXgNHZFJcQxt@cluster0.yzclo.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
