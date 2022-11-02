import express from "express";
import { homeController, contactController, aboutController } from "../controllers/appController.js";

const router = express.Router();

router.get('/', homeController);

router.get('/contact', contactController);

router.get('/about', aboutController);

export default router;