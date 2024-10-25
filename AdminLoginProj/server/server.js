require("dotenv").config();
const express = require("express");
const app = express(); //fucntion call
//http method : get, post , patch , update  in which they consist two arguments i.e route and server response to show to user
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json());//! middleware for adding data in database
/* app.get("/", (req, res) => {
  res.status(200).send("Welcome to AdminLoginProj");
}); */

app.use("/", authRoute);//! Router middleware
app.use("/",contactRoute);

const PortNum =process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`server is running at port : ${PORT}`);
// });
app.use(errorMiddleware);//! Error middleware
//? Now connect express with mongodb
connectDb().then(() => {
  app.listen(PortNum, () => {
    console.log(`server is running at PortNum : ${PortNum}`);
  });
});
