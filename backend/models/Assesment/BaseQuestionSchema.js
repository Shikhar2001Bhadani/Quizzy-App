import { Schema } from "mongoose";
import { QuestionDifficultyEnum, QuestionTypeEnum } from "../../types/index.js";

export const BaseQuestionSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(QuestionTypeEnum),
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    difficultyLevel: {
      type: String,
      enum: Object.values(QuestionDifficultyEnum),
      required: true,
    },
    hints: {
      type: [String],
    },
    explanations: {
      type: [String],
    },
    negativeMarks: {
      type: Number,
      default: 0,
    },
  },
  {
    discriminatorKey: "type",
  },
);
