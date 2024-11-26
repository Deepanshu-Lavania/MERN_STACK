require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./utils/db");
const userRoute = require("./router/user-route");
var cookieParser = require('cookie-parser');
const cors= require("cors");
const app = express();
const messageRoute = require("./router/message-route");

// Ensure the cookie-parser middleware is set up in your Express app if cookies are being handled. Without it, cookies may not work as expected.
app.use(cookieParser())
//cors policy
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());


const port = 8000 || process.env.PORT;

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
});
