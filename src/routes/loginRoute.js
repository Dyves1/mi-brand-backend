import express from "express";
import loginController from "../controllers/loginController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js"

const router =express.Router();

router.post("/", loginController,verifyIsAdmin);

export default router