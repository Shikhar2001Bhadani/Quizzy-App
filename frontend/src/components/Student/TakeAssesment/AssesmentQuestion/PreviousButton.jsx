import React from "react";
import CustomButton from "../../../common/CustomButton";
import { useDispatch } from "react-redux";
import {
  assesmentsSelector,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";

function PreviousButton() {
  const { currentQuestionIndex } = useSelector(assesmentsSelector);
  const dispatch = useDispatch();
  const isFirstQuestion = currentQuestionIndex === 0;

  const handlePrevious = () => {
    dispatch(
      setAssesmentKey({
        key: "currentQuestionIndex",
        value: currentQuestionIndex - 1,
      }),
    );
  };

  return (
    <CustomButton disabled={isFirstQuestion} onClick={handlePrevious}>
      <ChevronLeft size={15} />
      Previous
    </CustomButton>
  );
}

export default PreviousButton;
