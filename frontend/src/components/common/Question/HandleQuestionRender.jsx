import React from "react";
import { QuestionTypes } from "../../../types/index.js";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion/index.jsx";
import ShortAnswerQuestion from "./ShortAnswerQuestion/index.jsx";
import LongAnswerQuestion from "./LongAnswerQuestion/index.jsx";

function HandleQuestionRender({ question, letUserAnswer = false }) {
  switch (question.type) {
    case QuestionTypes.MULTIPLE_CHOICE:
      return (
        <MultipleChoiceQuestion
          letUserAnswer={letUserAnswer}
          question={question}
        />
      );
    case QuestionTypes.SHORT_ANSWER:
      return (
        <ShortAnswerQuestion
          question={question}
          letUserAnswer={letUserAnswer}
        />
      );
    case QuestionTypes.LONG_ANSWER:
      return (
        <LongAnswerQuestion question={question} letUserAnswer={letUserAnswer} />
      );
    default:
      return null;
  }
}

export default HandleQuestionRender;
