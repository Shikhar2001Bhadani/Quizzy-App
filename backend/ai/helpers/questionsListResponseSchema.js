import { Type } from "@google/genai";
import { QuestionDifficultyEnum, QuestionTypeEnum } from "../../types/index.js";

export const questionsListResponseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      type: {
        type: Type.STRING,
        enum: Object.values(QuestionTypeEnum),
      },
      question: {
        type: Type.STRING,
      },
      marks: {
        type: Type.INTEGER,
      },
      difficultyLevel: {
        type: Type.STRING,
        enum: Object.values(QuestionDifficultyEnum),
      },
      hints: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
      },
      explanations: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
      },
      negativeMarks: {
        type: Type.INTEGER,
      },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            label: {
              type: Type.STRING,
            },
            isCorrect: {
              type: Type.BOOLEAN,
            },
          },
        },
      },
      sampleAnswer: {
        type: Type.STRING,
      },
    },
    required: ["type", "question", "marks", "difficultyLevel"],
  },
};
