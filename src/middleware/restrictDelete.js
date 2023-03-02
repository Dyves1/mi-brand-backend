import jwt from "jsonwebtoken"
const restrictDelete=(req, res, next)=>{
    // check if the request object has an authorisation header
    const authHeader=req.headers.authorisation;
    const token= authHeader.split(" ")[1]
    if (!authHeader){
        return res.status(401).json({
            message:"No token provided"
        })
    }else {
        const verifyToken =jwt.verify(token,process.env.SECRETE_KEY)
        if (!verifyToken){
            return res.status(401).json({
                message: "Invalid Token"
            })
        }
        else {
            const userId= verifyToken;
            const {userBodyId}=req.body;;
            if (userBodyId !==userId) {
               return res.status(403).json({
                message:"Access denied"
               })
            } 
                next();
            
        }
    }
    
}
export default restrictDelete