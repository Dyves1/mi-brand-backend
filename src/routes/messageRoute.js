import express from "express";
import messageController from "../controllers/messageController.js";
import verifyUser from "../middleware/verifyUser.js"
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router = express.Router();

router.get("/", messageController.getMessages);
router.get("/:id", messageController.getMessage)
router.post("/", messageController.createMessage)
router.delete("/:id", verifyIsAdmin, messageController.deleteMessage)
export default router