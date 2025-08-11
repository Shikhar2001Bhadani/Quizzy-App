import React from "react";
import { InputTypes } from "./types";
import CustomTextInput from "../CustomTextInput";
import CustomTextArea from "../CustomTextArea";
import CustomDropdownInput from "../CustomDropdownInput";
import CustomCheckbox from "../CustomCheckbox";

function HandleInputRender({ inputType, ...props }) {
  switch (inputType) {
    case InputTypes.TEXT:
      return <CustomTextInput {...props} />;
    case InputTypes.MULTILINE:
      return <CustomTextArea {...props} />;
    case InputTypes.DROPDOWN:
      return <CustomDropdownInput {...props} />;
    case InputTypes.CHECKBOX:
      return <CustomCheckbox {...props} />;
    default:
      return;
  }
}

export default HandleInputRender;
