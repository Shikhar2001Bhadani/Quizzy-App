import { config } from "dotenv";
import { Template } from "../models/index.js";
import { GoogleGenAI } from "@google/genai";
import {
  getQuestionListGenerationPrompt,
  questionsListResponseSchema,
} from "../ai/index.js";

config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const createAssesmentQuestions = async (assessment) => {
  const { template: templateObjectId } = assessment;
  const templateId = templateObjectId.toString();
  if (!templateId) return;

  const template = await Template.findById(templateId);
  if (!template) return;

  const prompt = getQuestionListGenerationPrompt(assessment, template);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionsListResponseSchema,
      },
    });

    const questions = JSON.parse(response.text);

    return questions;
  } catch (error) {
    throw new Error("Failed to create questions from AI", {
      cause: error,
    });
  }
};
