const adminMiddleware = (req,res,next)=>{
    try {
        console.log(req.userDetail);
        const adminRole = req.userDetail.isAdmin;
        if (!adminRole) {
            return res.status(403).json({Message:"Access denied. User is not an admin"})
        }
        // res.status(200).json({msg:req.userDetail.isAdmin});
        next();//call next route in router
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware;