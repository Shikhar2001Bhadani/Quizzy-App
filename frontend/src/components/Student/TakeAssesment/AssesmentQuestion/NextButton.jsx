import React from "react";
import CustomButton from "../../../common/CustomButton";
import { useDispatch } from "react-redux";
import {
  assesmentsSelector,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useSelector } from "react-redux";
import { Loader, Save } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSubmitAssesmentMutation } from "../../../../store/features/submissions/api/submitAssesmentApi";
import { useNavigate, useSearchParams } from "react-router-dom";

function NextButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, answers } =
    useSelector(assesmentsSelector);
  const [searchParams] = useSearchParams();
  const submissionId = searchParams.get("submissionId");
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const [triggerSubmitAssesment, { isLoading }] = useSubmitAssesmentMutation();

  const handleNext = async () => {
    if (isLoading) return;

    if (!submissionId) {
      console.error("Submission ID not found");
      return;
    }

    if (isLastQuestion) {
      try {
        await triggerSubmitAssesment({
          id: submissionId,
          body: {
            responses: Object.entries(answers).map(([key, value]) => ({
              questionId: key,
              response: value.response,
            })),
          },
        }).unwrap();
        navigate("/student/submissions");
      } catch (error) {
        console.error("Error submitting assesment", error);
      }
      return;
    }

    dispatch(
      setAssesmentKey({
        key: "currentQuestionIndex",
        value: currentQuestionIndex + 1,
      }),
    );
  };

  return (
    <CustomButton onClick={handleNext} disabled={isLoading}>
      {isLastQuestion ? "Submit" : "Next"}{" "}
      {isLoading ? (
        <Loader size={15} className="animate-spin" />
      ) : isLastQuestion ? (
        <Save size={15} />
      ) : (
        <ChevronRight size={15} />
      )}
    </CustomButton>
  );
}

export default NextButton;
