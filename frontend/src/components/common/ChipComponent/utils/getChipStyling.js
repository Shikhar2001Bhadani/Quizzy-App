import { ChipTypes } from "../types";

export const getChipStyling = (type) => {
  switch (type) {
    case ChipTypes.PRIMARY:
      return "";
    case ChipTypes.SECONDARY:
      return "bg-gray-100";
  }
};
