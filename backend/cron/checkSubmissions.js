import { Submission } from "../models/index.js";
import { SubmissionStatusEnum } from "../types/index.js";
import { checkSubmissionQuestions } from "../utils/checkSubmissionQuestions.js";
import { awardMarks } from "./utils/awardMarks.js";

export const checkSubmissions = async () => {
  console.log("checkSubmissions:: CRON job started");

  try {
    const submissions = await Submission.find({
      status: SubmissionStatusEnum.SUBMITTED,
    }).populate("assesmentId");

    console.log("checkSubmissions:: Submissions to check", submissions.length);

    for (const submission of submissions) {
      console.log("checkSubmissions:: Checking submission", submission._id);
      const { questions } = submission.assesmentId;
      const { answers } = submission;

      const undeterminedQuestions = [];

      for (const answer of answers) {
        const { questionId, response } = answer;
        const question = questions.find(
          (q) => q._id.toString() === questionId.toString(),
        );

        if (!question) continue;

        const {
          marksAwarded,
          undeterminedQuestions: questionsToBeCheckedByAI,
        } = awardMarks(question, response);
        answer.marksAwarded = marksAwarded;
        undeterminedQuestions.push(...questionsToBeCheckedByAI);
      }

      if (undeterminedQuestions.length > 0) {
        const submissionFeedbacks = await checkSubmissionQuestions(
          undeterminedQuestions,
        );

        for (const feedback of submissionFeedbacks) {
          const {
            questionId,
            marksAwarded,
            feedback: submissionFeedback,
          } = feedback;

          const answer = answers.find(
            (a) => a.questionId.toString() === questionId.toString(),
          );

          if (!answer) continue;

          answer.marksAwarded = marksAwarded;
          answer.feedback = submissionFeedback;
        }
      }

      submission.status = SubmissionStatusEnum.COMPLETED;
      submission.totalMarks = answers.reduce(
        (total, answer) => total + answer.marksAwarded,
        0,
      );
      await submission.save();
      console.log("checkSubmissions:: submission completed: ", submission._id);
      console.log("checkSubmissions:: max marks: ", submission.maxMarks);
      console.log("checkSubmissions:: marks granted: ", submission.totalMarks);
    }
  } catch (error) {
    console.log("checkSubmissions:: CRON job failed", error);
  } finally {
    console.log("checkSubmissions:: CRON job completed");
  }
};
