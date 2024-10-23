require("dotenv").config();
const express = require("express");
const app = express(); //fucntion call
//http method : get, post , patch , update  in which they consist two arguments i.e route and server response to show to user
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
app.use(express.json());
/* app.get("/", (req, res) => {
  res.status(200).send("Welcome to AdminLoginProj");
}); */

app.use("/api/auth", router);

const PortNum =process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`server is running at port : ${PORT}`);
// });
//? Now connect express with mongodb
connectDb().then(() => {
  app.listen(PortNum, () => {
    console.log(`server is running at PortNum : ${PortNum}`);
  });
});
