import React from "react";
import { InputTypes } from "../../../../common/inputs/CustomInput/types";
import CustomInput from "../../../../common/inputs/CustomInput";
import { useSelector } from "react-redux";
import {
  setTemplateKey,
  templateSelector,
} from "../../../../../store/features/template/templateSlice";
import { useDispatch } from "react-redux";

function TemplatesBasicDetailsForm() {
  const dispatch = useDispatch();
  const { title, description, subject, gradeLevel } =
    useSelector(templateSelector);

  const handleChange = (key, value) => {
    dispatch(setTemplateKey({ key, value }));
  };

  return (
    <div className="flex flex-col border rounded-md p-2 gap-2">
      <h1 className="text-lg font-bold border-b pb-2">Basic Details</h1>
      <form className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.TEXT}
          value={title}
          onChange={(value) => handleChange("title", value)}
          label="Title"
          placeholder="Example template title"
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          value={description}
          onChange={(value) => handleChange("description", value)}
          label="Description"
          placeholder="This template is used to..."
        />

        <div className="flex gap-4">
          <CustomInput
            inputType={InputTypes.TEXT}
            value={subject}
            onChange={(value) => handleChange("subject", value)}
            label="Subject"
            placeholder="e.g, Math, Science, Psycology..."
          />
          <CustomInput
            inputType={InputTypes.TEXT}
            value={gradeLevel}
            onChange={(value) => handleChange("gradeLevel", value)}
            label="Grade Level"
            placeholder="e.g, 9, 12, College 1st Year..."
          />
        </div>
      </form>
    </div>
  );
}

export default TemplatesBasicDetailsForm;
