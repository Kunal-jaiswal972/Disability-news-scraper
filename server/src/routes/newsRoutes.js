import { Router } from "express";
import { getNews } from "../controllers/newsController.js";

const NewsRoutes = Router();

NewsRoutes.get("/getNews", getNews);

export default NewsRoutes;