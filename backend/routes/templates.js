import { Router } from "express";
import {
  createTemplate,
  deleteTemplateById,
  getAllTemplates,
  getTemplateById,
} from "../controllers/index.js";

export const templateRouter = Router();

templateRouter.get("/", getAllTemplates);
templateRouter.post("/", createTemplate);
templateRouter.get("/:id", getTemplateById);
templateRouter.delete("/:id", deleteTemplateById);
