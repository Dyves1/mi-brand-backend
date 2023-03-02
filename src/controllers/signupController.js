import bcrypt from "bcrypt";
import User from '../model/user.js'

const signupController=async (req, res) =>{
    const {fullname, email ,password} =req.body;
try {
    // harsh password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create
    const newUser = await User.create({fullname,email,password: hashedPassword})
    res.status(201).json({
        message:"New User created successfully",
        data: newUser
    })

} catch (error) {
    const messageContent = error.message;
    const status = 500;
    errorFunc(res, messageContent, status);
}
};

export default signupController;