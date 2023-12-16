import { Router } from "express";
import NewsRoutes from "./newsRoutes.js";

const router = Router();

router.use("/news", NewsRoutes);

export default router;
