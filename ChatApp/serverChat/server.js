require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const userRoute = require("./router/user-route");
const messageRoute = require("./router/message-route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { app, server } = require("./SocketIO/socket"); // Import app and server

// Middleware setup
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

const port = process.env.PORT || 8000;

// Connect to DB and start the server
connectDb().then(() => {
  server.listen(port, () => {
    console.log(`Server running using socket.io server at http://localhost:${port}`);
  });
});
