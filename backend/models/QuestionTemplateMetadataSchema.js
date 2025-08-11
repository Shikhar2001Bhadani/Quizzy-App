import { Schema } from "mongoose";

export const QuestionTemplateMetadataSchema = new Schema(
  {
    includeHints: {
      type: Boolean,
      default: false,
    },
    includeExplanations: {
      type: Boolean,
      default: false,
    },
    enableNegativeMarking: {
      type: Boolean,
      default: false,
    },
    shuffleOptions: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
);
