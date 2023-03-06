import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import workRoute from "./workRoute.js"
import commentRoute from "./commentRoute.js"

const router = express.Router()

// all routes
router.use("/blogs", blogRoute)
router.use("/signup",signupRoute)
router.use("/login", loginRoute)
router.use("/works", workRoute)
router.use("/comments", commentRoute)

export default router