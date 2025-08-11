import React from "react";
import { getChipStyling } from "./utils/index.js";
import { ChipTypes } from "./types";

function ChipComponent({ text = "", type = ChipTypes.PRIMARY }) {
  if (!text) return;

  return (
    <div
      className={` ${getChipStyling(type)} rounded-full px-2 border text-xs`}>
      {text}
    </div>
  );
}

export default ChipComponent;
