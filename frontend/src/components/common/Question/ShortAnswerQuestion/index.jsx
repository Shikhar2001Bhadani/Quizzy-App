import React from "react";
import CustomInput from "../../inputs/CustomInput";
import { InputTypes } from "../../inputs/CustomInput/types";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../store/features/assesments/assesmentSlice";

function ShortAnswerQuestion({ question, letUserAnswer = false }) {
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
      inputType={InputTypes.TEXT}
      value={currentAnswer}
      onChange={setAnswer}
      placeholder="Enter your answer..."
      disabled={!letUserAnswer}
    />
  );
}

export default ShortAnswerQuestion;
