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
const registers = async (req, res) => {//! req and res are part of frontend which handled by the postman / EchoApi
  try {
    console.log(req.body);
    
    const { username, email, phone, password } = req.body;

    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(400).json({ Message: "E-mail already exists " });
    }
    const userCreated = await User.create({ username, email, phone, password }); //to create data in database

    //to send data on postman / Echoapi
    res.status(200).json({
      // msg: userCreated,
      msg: "registration successful",
      token: await userCreated.generateTokenfunc(),
      userId: userCreated._id.toString(), //so that all data will add in string format in database
      //? In most cases , convertign _id to a string is a good practice beacause it ensures consistency and compatibility across different JWT libraries and systems . It also aligns with the expectations that claims in a JWT  are represented as strings.
    });
    /* console.log("token : ", userCreated.generateTokenfunc());
    console.log(userCreated._id.toString()); */
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Error Occured in controller of register Page" });
    // console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExit = await User.findOne({ email: email });
    console.log("Backend login data present or not : ",userExit);
    
    if (!userExit) {
      return res.status(422).json({ Message: "Invalid Credential" }); //don't go with specific like email doesn't exists
    }
    // const user = await bcrypt.compare(password, userExit.password);
    const user= await userExit.comparePassword(password);//instance mthod for compare password with exists user 
    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExit.generateTokenfunc(),
        userId: userExit._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Internal server error" }, err);
  }
};

//* send  user data - UserData after verify the user
const user=(req,res)=>{
  try {
    const userData = req.userDetail;//access req.userDetail from auth-middleware through frontend  so that we fill this data automatically in different pages 
    console.log("userData after verification in auth-controller is : ",userData);
    return res.status(200).json({userData});
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
}

module.exports = { home, registers, login, user };
