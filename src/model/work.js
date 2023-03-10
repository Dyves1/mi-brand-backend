import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
   image:{
      type:String,
      // required:true,
  
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
const Work = mongoose.model("Work",workSchema)

export default Work