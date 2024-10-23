const express = require("express");
const getContollers = require("../controllers/auth-controller");
const router = express.Router();

//!Aproch1 :Router

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to world best mern series using router");
// })

//!Approch2: 
/* router.route("/").get((req, res) => {
  res.status(200).send("Welcome to world best mern series using router");
});
router.route("/register").get((req, res) => {
  res.status(200).send("Welcome to AdminLoginProj for register page");
});
router.route("/about").get((req, res) => {
  res.status(200).send("Welcome to AdminLoginProj for about page");
}); */
//! Approch3: 
router.route("/").get(getContollers.home);
router.route("/register").post(getContollers.registers);
router.route("/about").get(getContollers.about);
module.exports = router;
