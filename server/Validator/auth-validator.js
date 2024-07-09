const { z } =require("zod");



// Creating an object schema

const signupSchema =z.object({
            username: z.string({required_error: "Name is required"})
            .trim()
            .min(3, {message:"Name must be atlest of 3 char"})
            .max(255,{message:"Name must be not more than 255 characters"}),

email: z.
    string({required_error: "Email is required"})
    .trim()
    .min(3, {message:"Name must be atlest of 3 char"})
    .max(255,{message:"Name must be not more than 255 characters"}),
 
username: z.string({required_error: "Name is required"})
.trim()
.email({message:"Invalid email address"})
.min(3, {message:"Email must be atlest of 3 char"})
.max(255,{message:"Email must be not more than 255 characters"}),
 
phone: z.string({required_error: "Phone is required"})
.min(10, {message:"Phone must be atlest of 10 char"})
.max(20,{message:"Phone must be not more than 20 characters"}),
passwowrd: z.
    string({required_error: "Password is required"})
    .min(7, {message:"Password must be atlest of 6 char"})
    .max(1021,{message:"Password must be not more than 1021 characters"}),
});



module.exports=signupSchema;