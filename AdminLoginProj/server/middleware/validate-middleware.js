/* async (req, res, next): The function returns an async middleware that accepts three standard Express parameters:
req: Represents the incoming HTTP request (in this case, it contains the data sent from the frontend, like a registration form).
res: Represents the HTTP response object (used to send a response back to the frontend).
next: A callback function used to pass control to the next middleware if there are no validation errors. */
const validate = (schema) => async (req, res, next) => {//!res , req are the parts of frontend of register page 
  try {
    const paresBody = await schema.parseAsync(req.body);//await schema.parseAsync(req.body): This line is where the request body (req.body) is validated against the provided schema. 
    req.body = paresBody;//After validation, the req.body is replaced with the parsed and validated data, ensuring that only valid data is passed to the subsequent middleware or route handlers.
    next();
  } catch (err) {
    const status = 422;
    const message =  "Fill the input properly";
    const extraDetails = err.errors[0].message;
    const Error = {
      status : status,
      message:message,
      extraDetails: extraDetails
    }
    // res.status(400).json({ msg:err.errors[0].message });
    next(Error);
  }
};
module.exports = validate;
