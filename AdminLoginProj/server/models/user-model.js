const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  //object of an object
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// console.log("pre method is : ",userSchema.pre("save",async function(){}));

userSchema.pre("save", async function (next) {
  // console.log("pre method " , this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//? json web token : jwt sign and jwt verify
userSchema.methods.generateTokenfunc = async function () {//instance methods
  try {
    return jwt.sign(
      {//payload
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_KEY,//signature -- secret key
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("json web token err during generating token",error);
  }
};
//compare password for login successful
userSchema.methods.comparePassword = async function(password) {
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.log("compare passwrod error using bcrypt");
    }
};

//define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User; 
