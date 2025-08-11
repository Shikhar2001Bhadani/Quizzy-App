import React from "react";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useSelector } from "react-redux";
import QuestionProgress from "./QuestionProgress";

function Progress() {
  const { questions } = useSelector(assesmentsSelector);

  return (
    <aside className="lg:w-1/4 w-1/3 border-l h-full p-2 overflow-auto">
      <h1 className="text-xl font-bold">Progress</h1>

      <div className="flex flex-col gap-2 mt-4">
        {questions.map((question, index) => (
          <QuestionProgress
            key={question._id}
            index={index}
            question={question}
          />
        ))}
      </div>
    </aside>
  );
}

export default Progress;
