export const getQuestionCheckingPrompt = (question, response) => {
  return `
    - Question ID: ${question._id}
    - Question: ${question.question}
    - Response: ${response}
    - Sample Correct Answer: ${question.sampleAnswer}
    - Type of the question: ${question.type}
    - Difficulty Level of the question: ${question.difficultyLevel}
    - Marks of the question: ${question.marks}
    - Negative Marks of the question: ${question.negativeMarks}
    ${
      question.hints &&
      `- Hints: ${question.hints.map((hint) => `- ${hint}`).join("\n")}`
    }
    ${
      question.explanations &&
      `- Explanations: ${question.explanations
        .map((explanation) => `- ${explanation}`)
        .join("\n")}`
    }
    `;
};
