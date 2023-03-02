import Express from "express";
import signupController from "../controllers/signupController.js";

const router =Express.Router();

router.post("/", signupController);

export default router