import jwt from "jsonwebtoken"
const verifyUser=(req, res, next)=>{
    // check if the request object has an authorisation header
    const authHeader=req.headers.authorization;
    
    
    if (!authHeader){
        return res.status(401).json({
            message:"No token provided"
        })
    }
    else {
        const token= authHeader.split(" ")[1]
        

        try {
      const verifyToken =jwt.verify(token,process.env.SECRETE_KEY, {expiresIn:"2d"})
     

        if (!verifyToken){
            return res.status(401).json({
                message: "User not authorized"
            })
        }
        else {
                next();
            
        }
        } catch (error) {
           res.status(500).json({
            message:error.message
           }) 
        }

        

    
    }

}
export default verifyUser