import React from "react";
import { getAnswerStyling, getCorrectAnswer } from "./utils";
import { useGetSubmissionQuery } from "../../../store/features/submissions/api";
import { useParams } from "react-router-dom";
import { SubmissionTypes } from "../../../types";

function QuestionDetails({ question, answers }) {
  const { id } = useParams();
  const { data } = useGetSubmissionQuery(id, {
    skip: !id,
  });
  const isCompleted = data?.status === SubmissionTypes.COMPLETED;

  const answer = answers.find((answer) => answer.questionId === question._id);

  return (
    <div className="bg-gray-50 p-2 rounded-md flex flex-col gap-2 border border-t-0">
      <div>
        <h3 className="font-semibold text-base">Question:</h3>
        {question.question}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-base">Your Answer:</h3>
          <p
            className={`${
              isCompleted
                ? getAnswerStyling(answer.marksAwarded, question.marks)
                : "bg-gray-200"
            } p-2 rounded-md`}>
            {answer.response}
          </p>
        </div>

        {isCompleted && (
          <div>
            <h3 className="font-semibold text-base">Correct Answer:</h3>
            <p className="bg-green-100 text-green-800 p-2 rounded-md">
              {getCorrectAnswer(question)}
            </p>
          </div>
        )}
      </div>

      {question.explanations?.length > 0 && isCompleted && (
        <div className="bg-green-50 text-green-800 p-2 rounded-md border !border-green-300">
          <h3 className="font-semibold text-base">Explanation:</h3>
          {question.explanations?.map((explanation) => (
            <p key={explanation}>{explanation}</p>
          ))}
        </div>
      )}

      {answer.feedback && isCompleted && (
        <div>
          <h3 className="font-semibold text-base">Feedback:</h3>
          <p>{answer.feedback}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionDetails;
