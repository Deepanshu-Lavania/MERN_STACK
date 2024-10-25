const errorMiddleware = (err, req, res, next)=>{
    const Status = err.status || 500;
    const Message  = err.message || "BACKEND ERROR";
    const ExtraDetails = err.extraDetails || "Error from Backend";

    return res.status(Status).json({Message, ExtraDetails});
}
module.exports  =errorMiddleware;