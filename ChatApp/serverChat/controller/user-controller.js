const createToken = require("../jwt/generateToken");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (password != confirmpassword) {
      return res.status(400).json({ message: "Match the confirm Password" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "Email already Exists" });
    }
    //hashed the Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (newUser) {
        console.log("Response before creatingToken is : ",res);
        
      createToken(newUser._id, res);
      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch =await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid User or password" });
    }
    createToken(user._id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const Logout = async (req, res) => {
    try {
      // Clear the JWT cookie (ensure path matches cookie setup)
      res.clearCookie("jwt", {
        httpOnly: true, //xss
        secure: true,
        sameSite: "strict", //prevent from csrf attck
      });
  
      // Respond to the client
      return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      console.error("Error during logout:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  };
  
  module.exports = Logout;
  

module.exports = { Signup, Login,Logout };
