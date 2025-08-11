import React from "react";
import Question from "./index.jsx";
import ChipsComponent from "./components/ChipsComponent.jsx";

function FullQuestionComponent({ question, index }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <ChipsComponent question={question} index={index} />
      <Question question={question} />
    </div>
  );
}

export default FullQuestionComponent;
