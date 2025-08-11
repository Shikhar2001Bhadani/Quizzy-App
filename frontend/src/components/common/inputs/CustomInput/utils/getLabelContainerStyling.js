import { InputTypes } from "../types";

export const getLabelContainerStyling = (inputType = InputTypes.TEXT) => {
  switch (inputType) {
    case InputTypes.CHECKBOX:
      return "w-fit";

    default:
      return "";
  }
};
