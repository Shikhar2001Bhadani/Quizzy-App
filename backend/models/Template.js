import { model, Schema } from "mongoose";
import { QuestionTemplateSchema } from "./index.js";

const TemplateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    gradeLevel: {
      type: String,
    },
    questionsTemplates: {
      type: [QuestionTemplateSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Template = model("Template", TemplateSchema);
