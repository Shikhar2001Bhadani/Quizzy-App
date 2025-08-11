import { Type } from "@google/genai";

export const questionCheckResponseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      questionId: {
        type: Type.STRING,
      },
      marksAwarded: {
        type: Type.INTEGER,
      },
      feedback: {
        type: Type.STRING,
      },
    },
    required: ["questionId", "marksAwarded", "feedback"],
  },
};
