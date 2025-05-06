// const express = require("express");
// const app = express();
// require("dotenv").config();
// const userRoute = require("./router/user-route.js");
// const connectDB = require("./utils/db.js");
// const errorHandler = require("./middleware/Errorhandler.js");

// app.use("/api/user", userRoute);






// const port = process.env.PORT || 4000;
// // 👇 Place after all routes
// app.use(errorHandler);

// connectDB()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`server is listenging at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to start server due to DB error:", err);
//   });




const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const User = require('./models/user-model');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGO_DB_URI)

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/Image'),
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  } 
});
const upload = multer({ storage });

// CRUD APIs

// CREATE
/* app.post('/api/users', upload.single('image'), async (req, res) => {
    if (!req.file) {
    return res.status(400).send({ success: 0, message: "No file uploaded" });
  }
  console.log("req.body is : ",req.body);
  console.log("req.file is : ",req.file);
  
  const { username, email, password, phone } = req.body;
  if (!username || !email || !password || !phone) {
    return res.status(400).send({ success: 0, message: "Missing required fields" });
  }
  // const image = req.file?.path;
  const image = `http://localhost:${process.env.PORT}/CrudImage/${req.file.filename}`
  const user = new User({ username, email, password, phone, image });
  await user.save();
  res.status(201).send({
    "msg":"user created successfully",
    "userData":user
  });
}); */


let tempUserData = {}; // You can use a session, database, or in-memory object for this

app.post('/api/users/register', async (req, res) => {
  const { username, email, password, phone } = req.body;

  if (!username || !email || !password || !phone) {
    return res.status(400).send({ success: 0, message: "Missing required fields" });
  }

  // Temporarily store the user data in a variable (or session/db)
  tempUserData = { username, email, password, phone };

  res.status(200).send({
    msg: "User data received. Please upload the image.",
  });
});

app.post('/api/users/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ success: 0, message: "No file uploaded" });
  }

  // Check if the user data is available (previously sent)
  if (!tempUserData.username || !tempUserData.email || !tempUserData.password || !tempUserData.phone) {
    return res.status(400).send({ success: 0, message: "User data is missing" });
  }

  console.log("Received user data: ", tempUserData);
  console.log("Received file data: ", req.file);

  const image = `http://localhost:${process.env.PORT}/CrudImage/${req.file.filename}`;

  // Create the user
  const user = new User({
    ...tempUserData, // Merge previously stored data
    image,
  });

  await user.save();

  // Clear tempUserData after user is created
  tempUserData = {};

  res.status(200).send({
    msg: "User created successfully",
    user,
  });
});

// READ
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE
app.put('/api/users/:id', upload.single('image'), async (req, res) => {
  const { username, email, password, phone } = req.body;
  const image = req.file?.path;
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    { username, email, password, phone, ...(image && { image }) },
    { new: true }
  );
  res.send(updated);
});

// DELETE
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listenging at http://localhost:${port}`))
