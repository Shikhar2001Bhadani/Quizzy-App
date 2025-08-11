import { model, Schema } from "mongoose";
import { SubmissionStatusEnum } from "../../types/index.js";
import { SubmissionAnswerSchema } from "./SubmissionAnswerSchema.js";
import { Assesment } from "../Assesment/AssesmentSchema.js";

const SubmissionSchema = new Schema(
  {
    assesmentId: {
      type: Schema.Types.ObjectId,
      ref: "Assesment",
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
    maxMarks: {
      type: Number,
    },
    status: {
      type: String,
      enum: Object.values(SubmissionStatusEnum),
      default: SubmissionStatusEnum.IN_PROGRESS,
      required: true,
    },
    answers: {
      type: [SubmissionAnswerSchema],
    },
  },
  {
    timestamps: true,
  },
);

SubmissionSchema.pre("save", async function (next) {
  const assesment = await Assesment.findById(this.assesmentId);
  const maxMarks = (assesment.questions ?? [])?.reduce(
    (totalMarks, question) => totalMarks + question.marks,
    0,
  );
  this.maxMarks = maxMarks;
  next();
});

export const Submission = model("Submission", SubmissionSchema);
