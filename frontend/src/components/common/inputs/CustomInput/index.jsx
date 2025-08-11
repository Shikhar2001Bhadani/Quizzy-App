import React from "react";
import HandleInputRender from "./HandleInputRender";
import { LabelPositionTypes } from "./types";
import {
  getLabelContainerStyling,
  getLabelPositon,
  handleLabelPosition,
} from "./utils";

function CustomInput(props) {
  const {
    id,
    label,
    labelPosition = getLabelPositon(props.inputType),
    showLabel = true,
    labelContainerClassName = getLabelContainerStyling(props.inputType),
  } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`${labelContainerClassName} ${handleLabelPosition(
          labelPosition,
        )} flex gap-1`}>
        {showLabel && label && (
          <label className="text-sm text-gray-500 shrink-0" htmlFor={id}>
            {label}
          </label>
        )}
        <HandleInputRender {...props} />
      </div>
    </div>
  );
}

export default CustomInput;
