import { Schema } from "mongoose";

export const SubmissionAnswerSchema = new Schema(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    marksAwarded: {
      type: Number,
      required: true,
      default: 0,
    },
    feedback: {
      type: String,
    },
  },
  {
    _id: false,
  },
);
