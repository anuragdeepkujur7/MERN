require("dotenv").config();

const express = require("express"); // to use express in our application
const app = express(); // the power is express is stored in app

const router=require("./router/auth-router");
const connectDb= require("./utils/db");
//. Mount the Router: To use the router in your main Express app, you can "mount " it
//at a specific URL prefix
app.use(express.json());
app.use("/api/auth", router) //for using router

// app.get("/",(req,res)=>{                              
//     res.status(200).send("welcome anurag");  
//}) //1st arg is root, 2nd arg is response 
/*app.get: Sets up a route handler for HTTP GET requests.

'/' Defines the route path, responding to the root URL.
(req,res)=> {...}An arrow function handling the request(req) and constructing
the response (res).*/
// app.get("/register",(req, res)=>{
//     res.status(200).send( "welcome to registration  page");
// });

const PORT=5000;

connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log( `server is runnin ppppp at port:${PORT}`);
});
});







