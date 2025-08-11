import { getQuestionCheckingPrompt } from "./getQuestionCheckingPrompt.js";

export const getUndeterminedQuestionsCheckingPrompt = (
  undeterminedQuestions,
) => {
  return `
    You are a helpful assistant that checks the response of a question and returns the correct answer or the feedback if the response is incorrect.
    Here is the information you have:
    
    ${undeterminedQuestions.map((uq) =>
      getQuestionCheckingPrompt(uq.question, uq.response),
    )}

    Here is your task:
    - Give the feedback so it is helpful to the student and they can improve in the feedback field.
    - Give marks of the questions according to how correct the response is in the marksAwarded field.
    - If the question has negative marks, give the negative marks in the marksAwarded field if the response is incorrect.
  `;
};
