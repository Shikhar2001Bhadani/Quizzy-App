import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";
import {
  getUndeterminedQuestionsCheckingPrompt,
  questionCheckResponseSchema,
} from "../ai/index.js";

config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const checkSubmissionQuestions = async (questions) => {
  const prompt = getUndeterminedQuestionsCheckingPrompt(questions);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionCheckResponseSchema,
      },
    });

    const answers = JSON.parse(response.text);

    return answers;
  } catch (error) {
    throw new Error("Failed to check questions with AI", {
      cause: error,
    });
  }
};
