/* In Express.js, express. Router() is a mini Express application without all the server
configurations but with the ability to define routes, middleware, and even have its own set of
route handlers. It allows you to modularize your routes and middleware to keep your code
organized and maintainable.*/


/*Use the express. Router class to create modular, mountable route handlers. A Router instance
is a complete middleware and routing system; for this reason, it is often referred to as a 'mini-app' .*/

const express=require("express") ;
const router=express.Router( ); 
const {home,register} =require("../controllers/auth-contoller")

/*router.get("/",(req,res) =>{
        res.status(200).send("Welcome to world best mern series by thapa technical using router");

});*/
router.route("/").get(home);

// router.route("/register").get((req, res)=>{
// -     res.status(200).send( "welcome to registration  page");
// });
router.route('/register').post(register);


module.exports= router;