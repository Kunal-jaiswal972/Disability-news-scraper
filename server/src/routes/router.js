import { Router } from "express";
import NewsRoutes from "./newsRoutes.js";
import TestRoutes from "./testRoutes.js";

const router = Router();

router.use("/news", NewsRoutes);
router.use("/test", TestRoutes);

export default router;
