const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI; 
// const URI = "mongodb+srv://deepanshulavania69:4emRjUvAlAZWJZ49@cluster0.i7e9n.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = async () => {
  try {
    if (!URI) {
      console.error("MongoDB URI is missing! Make sure it's set in your .env file.");
      process.exit(1);  // Exit if no URI is provided
    }

    // Connect without deprecated options
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (err) {
    console.error("Database connection failed:", err);  // Log the actual error
    process.exit(1);  // Exit with non-zero status to indicate failure
  }
};

module.exports = connectDb;
