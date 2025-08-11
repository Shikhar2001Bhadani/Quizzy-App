import { QuestionTypes } from "../../../../types";

export const getCorrectAnswer = (question) => {
  switch (question.type) {
    case QuestionTypes.SHORT_ANSWER:
    case QuestionTypes.LONG_ANSWER:
      return question.sampleAnswer;
    case QuestionTypes.MULTIPLE_CHOICE:
      return question.options.find((option) => option.isCorrect).label;
    default:
      return "N/A";
  }
};
