const { model } = require("mongoose");
const Contact=require("../models/contact-models");

const contactForm=async (req,res)=>{
    try{
        const response=req.body;
        await Contact.create(response);
        return res.status(200).json({message:" messagge send suucesfully "});
    }catch(err){
        return res.status(200).json({message:" messagge send suucesfully "});

    }

};

module.exports=contactForm;