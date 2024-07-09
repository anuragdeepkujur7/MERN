const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt =require("jsonwebtoken");
const e = require("express");

const userSchema=  new mongoose.Schema({
    username :{
        type: String,
        require: true,// so it is not left empty
    },
    email:{
        type: String,
        require:true,
    },
    phone:{
        type: String,
        required :true,
    },
    password :{
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});


//secure the password with bcript
userSchema.pre('save',function(){ // IMP: db me save krne se pehle ye run hoga 
    //console.log("pre method",this)
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound=  bcrypt.genSalt(10);
        const hash_password=  bcrypt.hash(user.password,saltRound);
        user.password=hash_password;

    }catch(error){
        next(error);
    }
});               




//JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way
//for securely transmitting information between parties as a JSON object.
//JWTs are often used for authentication and authorization in web applications.
//1. **Authentication:** Verifying the identity of a user or client.
//2. **Authorization:** Determining what actions a user or client is allowed to perform.

// **Components of a JWT: **
// - Header: Contains metadata about the token, such as the type of token and the signing algorithm
//being used.
//- Payload: Contains claims or statements about an entity (typically, the user) and additional data.
//Common claims include user ID, username, and expiration time.
// - Signature: To verify that the sender of the JWT is who it says it is and to ensure that the
//message wasn't changed along the way, a signature is included.


//json web token
userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            usrId:this._id.toString(),
            email: this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
};
// define the model or collection name
const User= new mongoose.model("User",userSchema);   // bs first letter capital
module.exports= User;