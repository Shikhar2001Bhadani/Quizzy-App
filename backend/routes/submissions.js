import { Router } from "express";
import {
  getAllSubmissions,
  getSubmissionById,
  startAssesment,
  submitAssesment,
} from "../controllers/index.js";

export const submissionsRouter = Router();

submissionsRouter.post("/", startAssesment);
submissionsRouter.get("/", getAllSubmissions);

submissionsRouter.post("/:id", submitAssesment);
submissionsRouter.get("/:id", getSubmissionById);
