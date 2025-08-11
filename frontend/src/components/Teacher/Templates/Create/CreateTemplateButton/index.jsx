import React from "react";
import CustomButton from "../../../../common/CustomButton";
import { Save } from "lucide-react";
import { useCreateTemplateMutation } from "../../../../../store/features/template/api";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../../store/features/template/selectors";
import { stateToTemplate } from "../../../../../store/features/template/utils";
import { useNavigate } from "react-router-dom";

function CreateTemplateButton() {
  const navigate = useNavigate();
  const [triggerCreate, { isLoading }] = useCreateTemplateMutation();
  const template = useSelector(templateSelector);

  const handleClick = async () => {
    if (isLoading) return;
    try {
      await triggerCreate(stateToTemplate(template)).unwrap();
      navigate("/teacher/templates");
    } catch (error) {
      console.log("There was an error creating the templates: ", error);
    }
  };

  return (
    <CustomButton disabled={isLoading} onClick={handleClick} className={"my-4"}>
      <Save size={15} /> Save Template
    </CustomButton>
  );
}

export default CreateTemplateButton;
