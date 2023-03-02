import Blog from "../model/blog.js"
// import { blogs } from "../model/dummy.js";
// import errorFunc from "../utils/errorFunc.js";


class blogController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all blogs
  static async getBlogs(req, res) {
    try {
      const blogs= await Blog.find()
      res.status(200).json({
        data:blogs
        
      });
    } catch (error) {

        return res.status(500).json({
            message: "No blog found"
          });

    }
  };


  // get one blog
  static async getBlog(req, res) {
    try {
      const { id } = req.params; // using ES6
     

      const blog = await Blog.findone({_id:id});
      if (!blog) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: blog
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  blog found"
          });
    }

  }
  // create blog
  static async createBlog(req, res) {
    try {
      const { image,title, content } = req.body;
      const newBlog = await Blog.create({image,title, content});
      res.status(201).json({
        message: "New blog created successfully",
        data: newBlog
      });
    } catch (error) {
        return res.status(500).json({
            message: "no new blog created"
          });
    }
  }

  // update blog
  static async updateBlog(req, res) {
    try {
      // const id = req.params.id // use of ES5
      const { id } = req.params; // using ES6

      // body to be update
      const { title, content } = req.body;

      const _id= id
      const blogUpdated = await Blog.findByIdAndUpdate(_id, {title,content},{new:true});

      if (!blogUpdated) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
          
          return res.status(200).json({
          message: "Blog updated Successfully",
          data: blogUpdated
        });
      }

    } catch (error) {
        return res.status(500).json({
            message: "no blog updated"
          });
    }
  }

//   // delete blog
  static async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      // find blog
      const _id =id
      const blogdeleted = await Blog.findByIdAndDelete(_id);
      // condition
      if (blogdeleted === -1) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
          return res.status(200).json({
          message: "Blog deleted successfully",
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  blog deleted"
          });
    }
  }

}  

export default blogController;
