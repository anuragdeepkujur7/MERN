const errorMiddleware=(err,res,req, next)=>{
    const  status=err.status||500
    const message=err.message||"BACKEND ERROR" ;
    const extraDetails=err.extraDetails||" Error from Backend" ;
    return res.status(status).json({ message, extraDetails } ) ;
}

module.exports=errorMiddleware;

