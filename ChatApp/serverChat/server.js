require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const userRoute = require("./router/user-route");
const messageRoute = require("./router/message-route");
const cookieParser = require("cookie-parser");
// const path = require("path");
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

// <------------------ code for deployment -------------> //
/* if (process.env.NODE_ENV === 'production') {
  const dirPath = path.resolve();//store current directory path
  app.use(express.static("./clientChat/dist"));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(dirPath, './clientChat/dist', 'index.html'))
  })
} */

// Connect to DB and start the server
connectDb().then(() => {
  server.listen(port, () => {
    console.log(`Server running using socket.io server at http://localhost:${port}`);
  });
});
