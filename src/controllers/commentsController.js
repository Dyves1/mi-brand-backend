import Comment from '../Models/comment';

// Create a new comment for a specific blog
export const createComment = async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
      blog: req.params.blogId,
      user: req.user._id // assuming you have a user authentication system in place
    });
    const newComment = await comment.save();
    return res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      data: newComment
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error creating comment',
      error: err.message
    });
  }
};

// Delete a comment for a specific blog
export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findOneAndDelete({
      _id: req.params.id,
      blog: req.params.blogId
    });
    if (!deletedComment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Comment deleted successfully',
      data: deletedComment
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error deleting comment',
      error: err.message
    });
  }
};
