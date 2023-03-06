import bcrypt from "bcrypt";
import User from '../model/user.js'

class signupController{
    static async getUser(req, res) {
    const {fullname, email ,password,isAdmin} =req.body;
if (!fullname || !email|| !password) 
{return res.status(400).json({
  message:"names, email and password are all required"})}
  const dublicate = await User.findOne({email:req.body.email});
 if (dublicate) {

    return res.status(400).json({
      message:"the email is already found"
    })
  }
else{
    try {
    // harsh password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create

    const newUser = await User.create({fullname,email,isAdmin,password: hashedPassword})
  
    console.log(newUser)
  res.status(201).json({
    message:"New User created successfully",
    data: newUser
})



} catch (error) {
    return res.status(500).json({
        message: "No User  is created"
      });
}

};
    }
// all users
static async allUsers(req, res) {
    try {
      const users= await User.find()
      console.log(users);
      res.status(200).json({
        data:users
        
      });
    } catch (error) {

        return res.status(500).json({
            message: "the user not created"
          });

    }
  };

}

export default signupController;