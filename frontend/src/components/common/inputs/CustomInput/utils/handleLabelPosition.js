import { LabelPositionTypes } from "../types";

export const handleLabelPosition = (labelPosition = LabelPositionTypes.TOP) => {
  switch (labelPosition) {
    case LabelPositionTypes.LEFT:
      return "flex-row gap-1 items-center";

    case LabelPositionTypes.RIGHT:
      return "flex-row-reverse justify-start gap-2 items-center";

    case LabelPositionTypes.TOP:
    default:
      return "flex-col";
  }
};
