const express=require("express") ;
const router=express.Router(); 
const authControllers=require("../controllers/auth-contoller");

const {signupSchema}=require("../Validator/auth-validator").default;
const validate= require("../middlewares/validate-middleware"); 


router.route("/").get(authControllers.home);

                                                                                                                  
router.route('/register').post(validate(signupSchema),authControllers.register);      
router.route('/login').post(authControllers.login);


module.exports= router;