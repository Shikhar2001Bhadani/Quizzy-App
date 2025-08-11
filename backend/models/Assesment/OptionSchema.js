import { Schema } from "mongoose";

export const OptionSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
);
