import React from "react";
import { InputTypes } from "../../../../common/inputs/CustomInput/types";
import { questionOptions } from "../../../../../utils/questionOptions";
import { addNewQuestionType } from "../../../../../store/features/template/templateSlice";
import { useDispatch } from "react-redux";
import CustomInput from "../../../../common/inputs/CustomInput";
import { PlusIcon } from "lucide-react";

function AddQuestionType() {
  const dispatch = useDispatch();

  const handleAddQuestionType = (value) => {
    dispatch(addNewQuestionType({ questionType: value }));
  };

  return (
    <CustomInput
      inputType={InputTypes.DROPDOWN}
      showLabel={false}
      onChange={handleAddQuestionType}
      options={questionOptions}
      value={
        <div className="flex items-center gap-2 text-sm">
          <PlusIcon size={16} /> Add Question Type
        </div>
      }
    />
  );
}

export default AddQuestionType;
