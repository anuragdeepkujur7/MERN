/* In an Express. js application, a "control Zer" refers to a part of your code
that is responsible for handling the application 's logic. Controllers are
typically used to process incoming requests, interact with models (data sources),
and send responses back to clients. They help organize your application by
separating concerns and following the MVC (Model-View-Control Zer) design pattern.*/
const { ContractEventDoesNotExistError } = require("web3");
const User= require("../models/user-model"); // for checking if user already exists
const bcrypt=require("bcryptjs");
//*------------
//HOME Logic
//*-----------
                                                 
const home = async(req, res)=>{ //when we write async we must search for errors so write try and catch 
try {   
        res.status(200).send("Welcome to world best mern series by thapa technical using router");
    } 
    catch (error) {
        console.log(error);
    }
};
/*----- Registration Logic------*/
// 1. Get Registration Data:Retrieve user data username, email,password)
//2. Check Email Existence:Check if the email is already registered
//3.Hash Password:Securely hash the password.
//4..Create User: create a new user with hashed password.
//5.Save to DB:Save user data to the database.
//6.Respond:Respond with "Registration Successful " or handle errors.










const register=async (req, res) => {
    try {
        //console.log(req.body); // jo data postman body me hoga wo show karega
        const {username,email,phone,passwowrd} = req.body;

        const userExist=await User.findOne({email:email});// for checking if user already exists await is mandatory   

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" } ) ;
        }
        // hash the password
        const saltRound=10; // no of time to mix the password
        const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({username,email,phone, passwowrd:hash_password}); // else create new user
        res.status(200).json({msg: "Registration sucess", 
            token:await userCreated.generateToken(),
            userID:userCreated._id.toString()});
    } catch (error) {
        res.status(500).json({msg:"page not found internal server error"} );
    }
} 

// In most cases, converting _ id to a string is a good practice because it ensures consistency
// and compatibility across different JWT libraries and systems. It also aligns with the
// expectation that claims in a JWT are represented as strings.


/*----- Login Logic------*/
const login=async (req, res)=>{
    
    try {
    const {email, password }=req.body ;
    const userExist=await User. findOne({email});
    console.log(userExist);
    
    
    if (!userExist) {
        return res.status(400).json({ message: "Invalid Credentials"})
    }
    //compare password
    const user=await bcrypt.compare(password,userExist.password);

    if(user){
        res.status(200).json({
            msg: "Login sucess", 
            token:await userExist.generateToken(),
            userID:userExist._id.toString(),
        });
    }else{
        res.status(401).json({message:"Invalid Username or password"});
    }

    }catch (error) {
    //res.status(500).json("internal server error");
    next(error);
    }
};  



module.exports={home,register,login};

