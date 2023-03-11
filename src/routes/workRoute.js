import express from "express";
import workController from "../controllers/workController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router = express.Router();

router.get("/", workController.getWorks);
router.get("/:id", workController.getWork)
// router.post("/", verifyIsAdmin, workController.createWork)
router.post("/", workController.createWork)
router.put("/:id", verifyIsAdmin, workController.updateWork)
// router.delete("/:id", verifyIsAdmin, workController.deleteWork)
router.delete("/:id", workController.deleteWork)
export default router