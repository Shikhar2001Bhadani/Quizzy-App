import { Router } from "express";
import {
  createAssesmentFromUI,
  createAssessment,
  deleteAssessmentById,
  getAllAssessments,
  getAssessmentById,
} from "../controllers/index.js";

export const assessmentsRouter = Router();

assessmentsRouter.post("/", createAssessment);
assessmentsRouter.post("/ai", createAssesmentFromUI);
assessmentsRouter.get("/", getAllAssessments);
assessmentsRouter.get("/:id", getAssessmentById);
assessmentsRouter.delete("/:id", deleteAssessmentById);
