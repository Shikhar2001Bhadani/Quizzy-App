import React from "react";
import Question from "../../../common/Question";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import ChipsComponent from "../../../common/Question/components/ChipsComponent";

function AssesmentQuestion() {
  const { questions, currentQuestionIndex } = useSelector(assesmentsSelector);

  return (
    <main className="flex-1 h-full p-2 pl-0 overflow-auto">
      <ChipsComponent
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex}
      />
      <Question
        question={questions[currentQuestionIndex]}
        config={{
          showAnswer: false,
          showExplanation: false,
          letUserAnswer: true,
        }}
      />

      <div className="flex gap-2 mt-6 justify-end">
        <PreviousButton />
        <NextButton />
      </div>
    </main>
  );
}

export default AssesmentQuestion;
