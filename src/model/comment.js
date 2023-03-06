import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
email:{
    type:String,
    required:true
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
const Comment = mongoose.model("Comment",commentSchema)

export default Comment