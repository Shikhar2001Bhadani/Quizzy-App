import { model, Schema } from "mongoose";
import { AssesmentStatusEnum, QuestionTypeEnum } from "../../types/index.js";
import { BaseQuestionSchema } from "./BaseQuestionSchema.js";
import { OptionSchema } from "./OptionSchema.js";

const AssesmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    template: {
      type: Schema.Types.ObjectId,
      ref: "Template",
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(AssesmentStatusEnum),
      default: AssesmentStatusEnum.PENDING,
      required: true,
    },
    publishedAt: {
      type: Date,
    },
    totalMarks: {
      type: Number,
    },
    questions: {
      type: [BaseQuestionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Discriminators - the key using which we can divide the schema
AssesmentSchema.path("questions").discriminator(
  QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION,
  new Schema({
    options: {
      type: [OptionSchema],
      validate: (e) => e.length === 4,
    },
  }),
);

AssesmentSchema.path("questions").discriminator(
  QuestionTypeEnum.SHORT_ANSWER_QUESTION,
  new Schema({
    sampleAnswer: {
      type: String,
    },
  }),
);

AssesmentSchema.path("questions").discriminator(
  QuestionTypeEnum.LONG_ANSWER_QUESTION,
  new Schema({
    sampleAnswer: {
      type: String,
    },
  }),
);

export const Assesment = model("Assesment", AssesmentSchema);
