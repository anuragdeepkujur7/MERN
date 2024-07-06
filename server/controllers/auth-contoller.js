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
        console.log(req.body); // jo data postman body me hoga wo show karega
        res.status(200).send({message:req.body});
    } catch (error) {
    res.status(500).send({msg:"page not found"} );
    }
} 


module.exports={home,register};