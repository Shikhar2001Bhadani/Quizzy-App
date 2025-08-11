import React from "react";
import { InputTypes } from "../../inputs/CustomInput/types";
import CustomInput from "../../inputs/CustomInput";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../store/features/assesments/assesmentSlice";

function LongAnswerQuestion({ question, letUserAnswer = false }) {
  const { answers } = useSelector(assesmentsSelector);
  const dispatch = useDispatch();
  const currentAnswer = answers?.[question._id]?.response;

  const setAnswer = (answer) => {
    dispatch(
      addAnswer({
        questionId: question._id,
        response: answer,
      }),
    );
  };

  return (
    <CustomInput
      inputType={InputTypes.MULTILINE}
      value={currentAnswer}
      onChange={setAnswer}
      placeholder="Enter your detailed answer..."
      className="h-[200px]"
      disabled={!letUserAnswer}
    />
  );
}

export default LongAnswerQuestion;
