const jwt = require("jsonwebtoken");

const createToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, //xss
    secure: true,
    sameSite: "strict", //prevent from csrf attck
  });
};
module.exports = createToken;
