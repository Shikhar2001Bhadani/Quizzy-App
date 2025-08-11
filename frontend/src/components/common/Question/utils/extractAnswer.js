import { QuestionTypes } from "../../../../types";
import { getQuestionOptionPrefix } from "./getQuestionOptionPrefix";

export const extractAnswer = (question) => {
  switch (question.type) {
    case QuestionTypes.MULTIPLE_CHOICE: {
      const correctIndex = question.options.findIndex(
        (option) => option.isCorrect,
      );
      return correctIndex !== -1
        ? `${getQuestionOptionPrefix(correctIndex)} - ${
            question.options[correctIndex].label
          }`
        : "";
    }
    case QuestionTypes.SHORT_ANSWER:
    case QuestionTypes.LONG_ANSWER:
      return question.sampleAnswer;
    default:
      return "";
  }
};
