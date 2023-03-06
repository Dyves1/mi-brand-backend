import express from "express";
import commentsController from "../controllers/commentsController.js";
import verifyUser from "../middleware/verifyUser.js"
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router = express.Router();

router.get("/", commentsController.getComments);
router.get("/:id", commentsController.getComment)
router.post("/", verifyUser, commentsController.createComment)
router.delete("/:id", verifyIsAdmin, commentsController.deleteComment)
export default router