import bcrypt from "bcrypt";
import User from '../model/user.js'

class signupController{
    static async getUser(req, res) {
    const {fullname, email ,password} =req.body;
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
    

    const allUser= await User.find()
    if(allUser == ''){
       const newUser= await User.create({fullname,email,password:hashedPassword,isAdmin:true})
       console.log(newUser)
       return res.status(201).json({
        
            message:"Successfully created",
            data:newUser,
            ok:true
        })
    }
    else{
        const newUser= await User.create({fullname,email,password:hashedPassword,isAdmin:false})
      console.log(newUser)
        return res.status(201).json({
            message:"Successfully created",
            data:newUser,
            ok:true
        })
    }
    // create

//     const newUser = await User.create({fullname,email,isAdmin:true,password: hashedPassword})
  
//     console.log(newUser)
//   res.status(201).json({
//     message:"New User created successfully",
//     data: newUser
// })



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