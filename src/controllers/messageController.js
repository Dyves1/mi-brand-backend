import Message from "../model/message.js"



class messageController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all comments
  static async getMessages(req, res) {
        try {
          const messages= await Message.find()
          console.log(messages);
          res.status(200).json({
            data:messages
            
          });
        } catch (error) {
    
            return res.status(500).json({
                message: "No messages found"
              });
    
        }
      };


  // get one comment
  static async getMessage(req, res) {
    try {
      const { id } = req.params; // using ES6
     

      const message = await Message.findById(req.params.id)
      if (!message) {
        return res.status(404).json({
          message: `Message with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: message,
          ok:true
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  message found"
          });
    }

  }
  // create message
  static async createMessage(req, res) {
    const {name,email,content } =req.body
    if (!name||!content||!email) 
{return res.status(400).json({
  message:" name,email and content are required"})}
else {


    try {
      const {name,email,content } = req.body;

      const newMessage = await Message.create({name,email,content}); 
    //   const user=req.headers  
          return res.status(201).json({
        message: "New Message sent successfully",
        data: newMessage,
        ok:true
      })}
     catch (error) {
        return res.status(500).json({
            message: "no new message created"
          });
    }
  
}
  }
  static async deleteMessage(req, res) {
    try {
      const { id } = req.params;
      // find comment
      const _id =id
      const messagedeleted = await Message.findByIdAndDelete(_id);
      // condition
      if (messagedeleted === -1) {
        return res.status(404).json({
          message: `message with id: ${id} was not found`
        });
      } else {
        if (!messagedeleted){
          return res.status(404).json({
            message:"this message is not found"
          })
        }
          return res.status(200).json({
          message: "message deleted successfully",
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  message deleted"
          });
    }
  }
  
}  

export default messageController;
