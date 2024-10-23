const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to Home page using auth-Controller inside router");
  } catch (err) {
    res.status(400).send({ msg: "Error Occured in controller Page" });
    // console.log(err);
  }
};
const registers = async (req, res) => {
  try {
    console.log(req.body.username);
    const { username, email, phone, password } = req.body;

    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(400).json({ msg: "email already exists " });
    }
    console.log(username, email, phone, password); //to console data
    const userCreated = await User.create({ username, email, phone, password }); //to create data in database
    res.status(200).json({ msg: userCreated }); //to send data on postman / Echoapi
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Error Occured in controller of register Page" });
    // console.log(err);
  }
};
const about = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to about page using auth-Controller inside router");
  } catch (err) {
    res.status(404).send({ msg: "Error Occured in controller Page" }, err);
    // console.log(err);
  }
};
module.exports = { home, registers, about };
