import { QuestionTypeEnum } from "../../types/index.js";
import { mcqAwardMarks } from "./questionTypes/index.js";

export const awardMarks = (question, response) => {
  let marksAwarded = 0;
  const undeterminedQuestions = []; // questions that need to be checked by AI

  switch (question.type) {
    case QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION:
      const { marksAwarded: marks } = mcqAwardMarks(question, response);
      marksAwarded = marks;
      break;
    case QuestionTypeEnum.LONG_ANSWER_QUESTION:
    case QuestionTypeEnum.SHORT_ANSWER_QUESTION:
      undeterminedQuestions.push({
        response,
        question,
      });
      break;
    default:
      break;
  }

  return { marksAwarded, undeterminedQuestions };
};
