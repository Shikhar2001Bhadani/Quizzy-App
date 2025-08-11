import React from "react";
import { getQuestionOptionPrefix } from "../utils/getQuestionOptionPrefix";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../store/features/assesments/assesmentSlice";

function MultipleChoiceQuestion({ question }) {
  const dispatch = useDispatch();
  const { answers } = useSelector(assesmentsSelector);
  const selectedOption = answers?.[question._id]?.response;

  const options = question.options ?? [];

  if (options.length === 0) return;

  const setSelectedOption = (option) => {
    dispatch(
      addAnswer({
        questionId: question._id,
        response: option?.label,
      }),
    );
  };

  const handleSelect = (option) => {
    if (selectedOption === option.label) setSelectedOption(null);
    else setSelectedOption(option);
  };

  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div
          onClick={() => handleSelect(option)}
          className={`${
            selectedOption === option.label
              ? "!border-blue-500 !text-blue-800 bg-blue-50"
              : ""
          } flex items-center gap-4 border p-4 rounded-lg text-sm hover:!border-gray-500 cursor-pointer transition-all`}
          key={option.label}>
          <span>{getQuestionOptionPrefix(index)}.</span> {option.label}
        </div>
      ))}
    </div>
  );
}

export default MultipleChoiceQuestion;
