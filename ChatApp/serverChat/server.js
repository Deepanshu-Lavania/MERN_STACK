require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./utils/db");
const userRoute = require("./router/user-route");
const cookieParser = require("cookie-parser");

const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());
// Ensure the cookie-parser middleware is set up in your Express app if cookies are being handled. Without it, cookies may not work as expected.
app.use(cookieParser());


const port = 8000 || process.env.PORT;

app.use("/user",userRoute);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
});
