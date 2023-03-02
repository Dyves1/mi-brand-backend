import express from "express";
import workController from "../controllers/workController.js";
import restrictDelete from "../middleware/restrictDelete.js"

const router = express.Router();

router.get("/", workController.getWorks);
router.get("/:id", workController.getWork)
router.post("/", workController.createWork)
router.put("/:id", workController.updateWork)
router.delete("/:id", restrictDelete,workController.deleteWork)

export default router