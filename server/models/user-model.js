const mongoose=require("mongoose");

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

// define the model or collection name
const User= new mongoose.model("User",userSchema);   // bs first letter capital

module.exports= User;