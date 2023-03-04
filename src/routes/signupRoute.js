import Express from "express";
import signupController from "../controllers/signupController.js";

const router =Express.Router();


// router.post("/", signupController);
router.post("/", signupController.getUser);
router.get("/", signupController.allUsers)

export default router