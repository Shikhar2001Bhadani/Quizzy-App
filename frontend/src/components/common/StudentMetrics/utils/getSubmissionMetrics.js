import { calculatePercentage, getTimeTaken } from "../../../../utils";

export const getSubmissionMetrics = (submission) => {
  const percentage = calculatePercentage(
    submission?.totalMarks,
    submission?.maxMarks,
  );

  const metrics = [
    {
      label: "Overall Percentage",
      value: `${percentage}%`,
      valueClassName:
        percentage >= 75
          ? "text-green-600"
          : percentage >= 30
          ? "text-yellow-600"
          : "text-red-600",
    },
    {
      label: "Overall Score",
      value: `${submission?.totalMarks}/${submission?.maxMarks}`,
    },
    {
      label: "Time Taken",
      value: getTimeTaken(
        new Date(submission?.submittedAt) - new Date(submission?.startedAt),
      ),
    },
    {
      label: "Date Attempted",
      value: submission?.submittedAt
        ? new Date(submission?.submittedAt).toDateString()
        : "N/A",
      valueClassName: "text-base",
    },
  ];

  return metrics;
};
