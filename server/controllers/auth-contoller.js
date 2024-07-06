/* In an Express. js application, a "control Zer" refers to a part of your code
that is responsible for handling the application 's logic. Controllers are
typically used to process incoming requests, interact with models (data sources),
and send responses back to clients. They help organize your application by
separating concerns and following the MVC (Model-View-Control Zer) design pattern.*/
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
const register=async (req, res) => {
    try {
        res.status(200).send("welcome to registration page usning controllers ");
    } catch (error) {
    res.status(400).send({msg:"page not found"} );
    }
} 


module.exports={home,register};