import User from "../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const loginController = async (req,res) =>{
const {email, password} =req.body
try {
    // find user with the email
    const user = await User.findOne({email})
    if (!user){
        returnres.status(400).json(
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
        const token = jwt.sign({userId:user._id},process.env.SECRETE_KEY)
        console.log(token)
        return res.status(200).json({
            data:user,
            token:token
            
        })
       }
    }
} catch (error) {
    
}
}
export default loginController