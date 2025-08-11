import React from "react";
import QuestionDetails from "./QuestionDetails";
import QuestionTitle from "./QuestionTitle";
import { useToggle } from "../../../hooks";

function QuestionAccordion({ question, index, answers }) {
  const { isVisible, toggle } = useToggle();

  return (
    <div>
      <QuestionTitle
        question={question}
        index={index}
        answers={answers}
        key={question._id}
        isVisible={isVisible}
        toggle={toggle}
      />
      {isVisible && <QuestionDetails question={question} answers={answers} />}
    </div>
  );
}

export default QuestionAccordion;
