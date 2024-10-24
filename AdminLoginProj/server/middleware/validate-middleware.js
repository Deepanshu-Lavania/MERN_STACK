const validate = (schema) => async (req, res, next) => {//!res , req are the parts of frontend of register page 
  try {
    const paresBody = await schema.parseAsync(req.body);
    req.body = paresBody;
    next();
  } catch (error) {
    const err =error.errors[0].message;
    console.log(err);
    res.status(400).json({ msg:"validation failed" });
  }
};
module.exports = validate;
