import Express from "express";
import signupController from "../controllers/signupController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router =Express.Router();


// router.post("/", signupController);
router.post("/", signupController.getUser);
router.get("/", verifyIsAdmin,signupController.allUsers)

export default router