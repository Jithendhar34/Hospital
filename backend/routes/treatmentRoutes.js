import express from "express";
import { getTreatments, createTreatment } from "../controllers/treatmentController.js";

const router = express.Router();

router.get("/", getTreatments);
router.post("/", createTreatment);

export default router;
