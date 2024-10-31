const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware=async(req, res ,next)=>{
    const token = req.header("Authorization")//req from the frontend to take token 
    if (!token) {
        return res.status(401).json({message:"Unauthorised HTTP, Token not provided"});    
    }
    // console.log("token from auth middleware :==> ", token);
    // next();
    
    //?Assuming token is in the format "Bearer <jwtTojen> , Remmind the "Bearer" prifix"

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware :==> ", jwtToken);

    //! verify webjsontoken
    try {
        const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
        console.log("token is verified : ",isVerified);//give data of jsonwebtoken payloads

        const userData = await User.findOne({email:isVerified.email}).select({password:0});
        console.log("userData of auth-middleware after verified is : ", userData);
        
        req.userDetail=userData;
        req.token=token;
        req.userID =userData._id;

        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized. Invalid token."})
    }
    
}
module.exports = authmiddleware;