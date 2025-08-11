import React from "react";
import CustomInput from "../../../common/inputs/CustomInput";
import { InputTypes } from "../../../common/inputs/CustomInput/types";
import { questionOptions } from "../../../../utils/questionOptions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../store/features/template/selectors";
import { updateQuestionTypeData } from "../../../../store/features/template/templateSlice";
import { difficultyOptions } from "../../../../utils";
import Options from "./Options";

function QuestionType({ index }) {
  const dispatch = useDispatch();
  const { questionTypes } = useSelector(templateSelector);
  const questionType = questionTypes[index];

  const handleChange = (key, value) => {
    dispatch(updateQuestionTypeData({ index, key, value }));
  };

  if (!questionType) return null;

  const questionTitle =
    questionOptions.find((q) => q.id === questionType.type)?.label ?? "";

  return (
    <div className="border p-2 rounded-md">
      <h2 className="text-lg font-bold border-b pb-2">
        {questionTitle} Settings
      </h2>
      <form className="mt-4 space-y-2">
        <div className="flex gap-2">
          <CustomInput
            inputType={InputTypes.TEXT}
            label="Question Count"
            placeholder="e.g, 10"
            value={questionType.data.questionCount}
            onChange={(value) => handleChange("questionCount", value)}
            type="number"
          />
          <CustomInput
            inputType={InputTypes.TEXT}
            label="Marks Per Question"
            value={questionType.data.marksPerQuestion}
            onChange={(value) => handleChange("marksPerQuestion", value)}
            placeholder="e.g, 2"
            type="number"
          />
        </div>
        <CustomInput
          inputType={InputTypes.DROPDOWN}
          options={difficultyOptions}
          value={questionType.data.difficultyLevel}
          onChange={(value) => handleChange("difficultyLevel", value)}
          label="Difficulty Level"
          placeholder="e.g, Easy"
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          value={questionType.data.customPrompt}
          onChange={(value) => handleChange("customPrompt", value)}
          label="Custom AI prompt"
          placeholder="e.g, Make sure each question is unique and not similar to the previous one"
        />

        <Options index={index} />
      </form>
    </div>
  );
}

export default QuestionType;
