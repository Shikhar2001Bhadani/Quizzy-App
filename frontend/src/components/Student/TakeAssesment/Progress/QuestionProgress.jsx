import React from "react";
import { useDispatch } from "react-redux";
import {
  assesmentsSelector,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useSelector } from "react-redux";
import { CheckCircle } from "lucide-react";
import { Circle } from "lucide-react";

function QuestionProgress({ index, question }) {
  const { currentQuestionIndex, answers } = useSelector(assesmentsSelector);
  const dispatch = useDispatch();
  const isAttempted = answers?.[question._id]?.response;

  const handleClick = () => {
    dispatch(
      setAssesmentKey({
        key: "currentQuestionIndex",
        value: index,
      }),
    );
  };

  return (
    <div
      key={index}
      onClick={handleClick}
      className={`${
        index === currentQuestionIndex ? "bg-blue-50" : ""
      } flex items-center gap-2 p-2 hover:bg-blue-50 cursor-pointer transition-all rounded`}>
      {isAttempted ? (
        <CheckCircle size={20} className="text-green-500" />
      ) : (
        <Circle size={20} className="text-gray-300" />
      )}{" "}
      Question {index + 1}
    </div>
  );
}

export default QuestionProgress;
