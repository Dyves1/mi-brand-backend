import Work from "../model/work.js";



class workController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all works
  static async getWorks(req, res) {
    try {
      const works= await Work.find()
      console.log(works);
      res.status(200).json({
        data:works
        
      });
    } catch (error) {

        return res.status(500).json({
            message: "No work found"
          });

    }
  };


  // get one work
  static async getWork(req, res) {
    try {
      const { id } = req.params; // using ES6
      const work = await Work.findById(req.params.id)
      if (!work) {
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
    const {title, content ,image} =req.body
    if (!title || !content) 
{return res.status(400).json({
  message:" Title and content of work are all required"})}
  const dublicate = await Work.findOne({title:req.body.title});
 if (dublicate) {

    return res.status(400).json({
      message:"the work is already found"
    })
  }

else {
    
    
    try {
      const { image,title, content } = req.body;
      const newWork = await Work.create({image,title, content});
      res.status(201).json({
        message: "New work created successfully",
        data: newWork,
        ok:true
      });
    } catch (error) {
        return res.status(500).json({
            message: "no new work created"
          });
    }
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
          message: `work with id: ${id} was not found`
        });
      } else {
        if (!workdeleted){
          return res.status(404).json({
            message:"this work is not found"
          })
        }
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
