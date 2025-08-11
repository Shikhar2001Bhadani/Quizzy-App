import React from "react";
import CustomInput from "../../../common/inputs/CustomInput";
import { InputTypes } from "../../../common/inputs/CustomInput/types";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../store/features/template/selectors";
import { updateQuestionTypeOptions } from "../../../../store/features/template/templateSlice";
import { useDispatch } from "react-redux";
import { getQuestionTypeOptions } from "./utils";

function Options({ index }) {
  const dispatch = useDispatch();
  const { questionTypes } = useSelector(templateSelector);
  const questionType = questionTypes[index];
  const options = getQuestionTypeOptions(questionType.type);

  const handleChange = (key, value) => {
    dispatch(updateQuestionTypeOptions({ index, key, value }));
  };

  if (!questionType) return null;

  return (
    <div>
      <h2 className="text-md font-semibold">Options</h2>

      {options.map((option) => (
        <CustomInput
          key={option.id}
          inputType={InputTypes.CHECKBOX}
          value={questionType.data.options[option.id]}
          label={option.label}
          onChange={(value) => handleChange(option.id, value)}
        />
      ))}
    </div>
  );
}

export default Options;
