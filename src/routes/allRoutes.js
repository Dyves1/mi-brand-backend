import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import workRoute from "./workRoute.js"
import commentRoute from "./commentRoute.js"
import messageRoute from "./messageRoute.js"
import multer  from "multer";
import Blog from "../model/blog.js"
const app =express()

const router = express.Router()



// const upload = multer({
//     storage:multer.diskStorage({
//       destination:function(req,file,cb)
//       {
//         cb(null,"src/Images")
//       },
//       filename:function(req,file,cb)
//       {
//         cb(null,file.fieldname +"-" +Date.now()+".jpg")
//       }
//     })
//   }).single("images")
  
//   app.post("/upload",upload, (req,res)=>{
    // res.send("file upload")
    
//   })
// all routes
// router.post("/blogs", upload, async (req,res)=>{
//     res.send("file upload")
    
//         const {title, content } =req.body
//         const image=req.file.filename
//         if (!title || !content) 
//     {return res.status(400).json({
//       message:" Title and content of blog are all required"})}
//       const dublicate = await Blog.findOne({title:req.body.title});
//      if (dublicate) {
    
//         return res.status(400).json({
//           message:"the blog is already found"
//         })
//       }
    
//     else {
    
    
//         try {

//           const newBlog = await Blog.create({image,title, content});
    
    
             
//               return res.status(201).json({
//             message: "New blog created successfully",
//             data: newBlog,
//             ok:true
//           })}
//          catch (error) {
//             return res.status(500).json({
//                 message: "no new blog created"
//               });
//         }
      
//     }
      
// })
router.use("/blogs",blogRoute)
router.use("/signup",signupRoute)
router.use("/login", loginRoute)
router.use("/works", workRoute)
router.use("/comments", commentRoute)
router.use("/messages", messageRoute)

export default router