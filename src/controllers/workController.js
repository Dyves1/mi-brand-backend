import Work from "../model/work.js";
// import { blogs } from "../model/dummy.js";
// import errorFunc from "../utils/errorFunc.js";


class workController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all works
  static async getWorks(req, res) {
    try {
      const works= await Work.find()
      res.status(200).json({
        data:works
        
      });
    } catch (error) {

        return res.status(500).json({
            message: "No work found"
          });

    }
  };


  // get one blog
  static async getWork(req, res) {
    try {
      const { id } = req.params; // using ES6
     

      const work = await Work.findone({_id:id});
      if (!blog) {
        return res.status(404).json({
          message: `Work with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: work
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  work found"
          });
    }

  }
  // create Work
  static async createWork(req, res) {
    try {
      const { image,title, content } = req.body;
      const newWork = await Work.create({image,title, content});
      res.status(201).json({
        message: "New work created successfully",
        data: newWork
      });
    } catch (error) {
        return res.status(500).json({
            message: "no new work created"
          });
    }
  }

  // update work
  static async updateWork(req, res) {
    try {
      // const id = req.params.id // use of ES5
      const { id } = req.params; // using ES6

      // body to be update
      const { title, content } = req.body;

      const _id= id
      const workUpdated = await Blog.findByIdAndUpdate(_id, {title,content},{new:true});

      if (!workUpdated) {
        return res.status(404).json({
          message: `Work with id: ${id} was not found`
        });
      } else {
          
          return res.status(200).json({
          message: "Work updated Successfully",
          data: workUpdated
        });
      }

    } catch (error) {
        return res.status(500).json({
            message: "no work updated"
          });
    }
  }

//   // delete work
  static async deleteWork(req, res) {
    try {
      const { id } = req.params;
      // find work
      const _id =id
      const workdeleted = await Work.findByIdAndDelete(_id);
      // condition
      if (workdeleted === -1) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
          return res.status(200).json({
          message: "Work deleted successfully",
        });
      }
    } catch (error) {
        return res.status(500).json({
            message: "no  work deleted"
          });
    }
  }

}  

export default workController;
