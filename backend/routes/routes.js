import express from "express";
import projectRoutes from "./project.routes.js";
import adminRoutes from "./admin.routes.js";
import userRoutes from "./user.routes.js";
import formRoutes from "./form.route.js";
import subscribeRoutes from "./subscribe.route.js";

const router = express.Router();

router.get("/health", (req, res) => {
    res.status(200).json({ message: "ok" });
})

router.use('/projects', projectRoutes);
router.use('/admin', adminRoutes);
router.use('/users', userRoutes);
router.use('/forms', formRoutes);
router.use('/subscribers', subscribeRoutes);

export default router;

