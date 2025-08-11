import React from "react";
import { getMarksStyling } from "./utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useGetSubmissionQuery } from "../../../store/features/submissions/api";
import { SubmissionTypes } from "../../../types";

function QuestionTitle({ question, index, answers, toggle, isVisible }) {
  const { id } = useParams();
  const { data } = useGetSubmissionQuery(id, {
    skip: !id,
  });
  const answer = answers.find((answer) => answer.questionId === question._id);

  return (
    <div
      onClick={toggle}
      className="border p-4 rounded flex justify-between items-center gap-2 cursor-pointer hover:bg-gray-50 transition-all">
      <p className="flex-1 truncate">
        Q{index + 1}. {question.question}
      </p>

      {data.status === SubmissionTypes.COMPLETED && (
        <div
          className={`${getMarksStyling(
            answer.marksAwarded,
            question.marks,
          )} text-sm bg-gray-100 p-2 rounded-md w-fit shrink-0 font-semibold`}>
          {answer.marksAwarded} / {question.marks}
        </div>
      )}

      <div>
        {isVisible ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </div>
    </div>
  );
}

export default QuestionTitle;
