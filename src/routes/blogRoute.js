import express from "express";
import blogController from "../controllers/blogController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router = express.Router();

router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog)
// router.post("/", verifyIsAdmin, blogController.createBlog)
router.post("/",  blogController.createBlog)
router.put("/:id", blogController.updateBlog)
// router.put("/:id", verifyIsAdmin, blogController.updateBlog)
// router.delete("/:id", verifyIsAdmin, blogController.deleteBlog)
router.delete("/:id", blogController.deleteBlog)
export default router




