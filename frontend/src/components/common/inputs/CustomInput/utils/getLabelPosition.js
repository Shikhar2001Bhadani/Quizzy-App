import { InputTypes, LabelPositionTypes } from "../types";

export const getLabelPositon = (inputType = InputTypes.TEXT) => {
  switch (inputType) {
    case InputTypes.CHECKBOX:
      return LabelPositionTypes.RIGHT;

    default:
      return LabelPositionTypes.TOP;
  }
};
