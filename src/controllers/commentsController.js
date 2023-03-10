import Comment from "../model/comment.js"



class commentsController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all comments
  static async getComments(req, res) {
        try {
          const comments= await Comment.find()
          console.log(comments);
          res.status(200).json({
            data:comments
            
          });
        } catch (error) {
    
            return res.status(500).json({
                message: "No Comments found"
              });
    
        }
      };


  // get one comment
  static async getComment(req, res) {
    try {
      const { id } = req.params; // using ES6
     

      const comment = await Comment.findById(req.params.id)
      if (!comment) {
        return res.status(404).json({
          message: `Comment with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: comment,
          ok:true
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  comment found"
          });
    }

  }
  // create comment
  static async createComment(req, res) {
    const {email,content } =req.body
    if (!content||!email) 
{return res.status(400).json({
  message:" email and comment are required"})}
else {


    try {
      const {email,content } = req.body;

      const newComment = await Comment.create({email,content}); 
    //   const user=req.headers  
          return res.status(201).json({
        message: "New Comment sent successfully",
        data: newComment
      })}
     catch (error) {
        return res.status(500).json({
            message: "no new comment created"
          });
    }
  
}
  }
  static async deleteComment(req, res) {
    try {
      const { id } = req.params;
      // find comment
      const _id =id
      const commentdeleted = await Comment.findByIdAndDelete(_id);
      // condition
      if (commentdeleted === -1) {
        return res.status(404).json({
          message: `comment with id: ${id} was not found`
        });
      } else {
        if (!commentdeleted){
          return res.status(404).json({
            message:"this comment is not found"
          })
        }
          return res.status(200).json({
          message: "Comment deleted successfully",
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  comment deleted"
          });
    }
  }
  
}  

export default commentsController;
