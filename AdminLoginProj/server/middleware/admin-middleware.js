const adminMiddleware = (req,res,next)=>{
    try {
        console.log(req.userDetail);
        const adminRole = req.userDetail.isAdmin;
        if (!adminRole) {
            return res.status(403).json({Message:"Access denied. User is not an admin"})
        }

        // res.status(200).json({ isAdmin: true, Message: 'User is an admin' });


        next();// Proceed to the next middleware if the user is an admin
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware;