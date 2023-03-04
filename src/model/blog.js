import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
   image:{
      type:String,
      required:true,
  
   },
   title: {
    type:String,
    required: true,
    unique:true
 },

 content: {
    type:String,
    required: true
 },
 createdAt:  {
    type:String,
    default: Date.now
 }
})
const Blog = mongoose.model("Blog",blogSchema)

export default Blog