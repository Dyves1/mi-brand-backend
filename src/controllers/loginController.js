import User from "../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const loginController = async (req,res) =>{
const {email, password} =req.body
try {
    // find user with the email
    const user = await User.findOne({email})
    if (!user){
        return res.status(400).json(
            {message :"invalid Credentials"}
        )
    }
    else {
        const checkPassword =await bcrypt.compare(password, user.password);
       if (!checkPassword) {
        return res.status(401).json({
            message:"invalid Credentials"
        })
       }

       else {
        // const token = jwt.sign({userId:user.email},process.env.SECRETE_KEY,{expiresIn:"2h"})
           const token =jwt.sign({userId:user.email,isAdmin:user.isAdmin},process.env.SECRETE_KEY,{expiresIn:"2d"})
        return res.status(200).json({
            data:{
                
                email:user.email,
                isAdmin:user.isAdmin
            },
            token:token,
            
        })

       }
    }
} 
catch (error) {
res.status(500).json({
    message:error.message
})    
}
}
export default loginController