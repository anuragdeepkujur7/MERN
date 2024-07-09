
//  await schema. parseAsync(req.body) is the line where you use Zod to validate
//the request body data against the defined schema.

const validate=(schema)=>async (req, res, next)=>{    // validate is a middleware next is a property inside middleawree
 try {
    const parseBody = await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
    } catch (err) {
        //const status=422;
        //const message=err.error[0];
        /*const error={
                status,
                message,
        };*/
        
        console.log(err);
        //res.status(400).json({ msg: "valldi fail"});
        //next(error);
    }
};

module.exports=validate;
                                    