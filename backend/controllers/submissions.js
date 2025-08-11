import { Submission } from "../models/index.js";
import { SubmissionStatusEnum } from "../types/SubmissionStatusEnum.js";

export const submitAssesment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { responses } = req.body;

    if (!id) {
      const error = new Error("Submission ID is required", {
        cause: new Error("Submission ID is required"),
      });
      return next(error);
    }

    const submission = await Submission.findById(id);

    if (submission.status !== SubmissionStatusEnum.IN_PROGRESS) {
      const error = new Error("You have already submitted the assessment", {
        cause: new Error("You have already submitted the assessment"),
      });
      return next(error);
    }

    submission.answers = responses.map((response) => ({
      questionId: response.questionId,
      response: response.response,
    }));

    submission.submittedAt = new Date();
    submission.status = SubmissionStatusEnum.SUBMITTED;

    await submission.save();

    return res.status(201).json({
      success: true,
      submission,
    });
  } catch (e) {
    const error = new Error("Failed to submit assement", {
      cause: e,
    });
    return next(error);
  }
};

export const startAssesment = async (req, res, next) => {
  try {
    const { assesmentId } = req.body;

    const submission = new Submission({
      assesmentId: assesmentId,
    });

    await submission.save();

    return res.status(201).json({
      success: true,
      submission,
    });
  } catch (e) {
    const error = new Error("Failed to start assement", {
      cause: e,
    });
    return next(error);
  }
};

export const getAllSubmissions = async (req, res, next) => {
  try {
    const submissions = await Submission.find({}).populate("assesmentId");

    return res.status(200).json({
      success: true,
      data: submissions,
    });
  } catch (e) {
    const error = new Error("Failed to fetch submissions", {
      cause: e,
    });
    return next(error);
  }
};

export const getSubmissionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      const error = new Error("Submission ID is required", {
        cause: new Error("Submission ID is required"),
      });
      return next(error);
    }

    const submission = await Submission.findById(id).populate("assesmentId");

    return res.status(200).json({
      success: true,
      data: submission,
    });
  } catch (e) {
    const error = new Error("Failed to fetch submission by ID", {
      cause: e,
    });
    return next(error);
  }
};
