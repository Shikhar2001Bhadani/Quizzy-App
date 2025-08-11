import React from "react";
import { Save } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateAssesmentUsingAIMutation } from "../../../../store/features/assesments/api";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import CustomButton from "../../../common/CustomButton";

function CreateAssessmentButton() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [triggerCreate, { isLoading }] = useCreateAssesmentUsingAIMutation();
  const assesment = useSelector(assesmentsSelector);

  const handleClick = async () => {
    if (isLoading) return;
    try {
      await triggerCreate(assesment).unwrap();
      navigate("/teacher/assesments");
    } catch (error) {
      console.log("There was an error creating the assessments: ", error);
    }
  };

  if (id) return;

  return (
    <CustomButton
      disabled={isLoading}
      onClick={handleClick}
      className={"my-4 w-fit"}>
      <Save size={15} /> Save Assessment
    </CustomButton>
  );
}

export default CreateAssessmentButton;
