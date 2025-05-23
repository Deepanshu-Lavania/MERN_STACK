require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express(); //fucntion call
//http method : get, post , patch , update  in which they consist two arguments i.e route and server response to show to user
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

//!lets handle cors policy means frontend and backend are running on different ports 
const corsOptions = {
  origin : "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());//! middleware for adding data in database
/* app.get("/", (req, res) => {
  res.status(200).send("Welcome to AdminLoginProj");
}); */

app.use("/", authRoute);//! Router middleware
app.use("/",contactRoute);
app.use("/",serviceRouter);

//let's define admin route
app.use("/admin",adminRouter);

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
