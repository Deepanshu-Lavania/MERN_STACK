const { z } = require("zod");

//creating object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters " })
    .max(255, { message: "Name can't be grater than 255" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(3, { message: "Email must be at least of 3 character" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters " })
    .max(15, { message: "Phone must be at most of 15 characters " }),
  password: z
    .string({ required_error: "Password is required " })
    .trim()
    .min(6, { message: "Password must be at least of 6 characters " })
    .max(100, { message: "Password must be at most of 100 characters" }),
});

module.exports = signupSchema;