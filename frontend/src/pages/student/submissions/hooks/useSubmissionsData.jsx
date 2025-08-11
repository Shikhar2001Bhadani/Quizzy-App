import { useNavigate } from "react-router-dom";
import { useGetAllSubmissionsQuery } from "../../../../store/features/submissions/api";
import {
  AssesmentStatusEnum,
  SubmissionStatusEnum,
} from "../../../../../../backend/types";
import { getRowIcon } from "../utils";

export const useSubmissionsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllSubmissionsQuery(undefined, {
    pollingInterval: 1000 * 60,
    refetchOnFocus: true,
  });

  const rows = data.map((submission) => ({
    ...submission,
    assessment: submission.assesmentId?.title,
    score:
      submission.status === AssesmentStatusEnum.COMPLETED ? (
        <p>
          {submission.totalMarks} / {submission.maxMarks}
        </p>
      ) : (
        "-"
      ),
  }));

  const actions = [
    {
      icon: (row) => getRowIcon(row.status),
      onClick: (row) => {
        if (row.status === SubmissionStatusEnum.IN_PROGRESS) {
          navigate(
            `/student/assesments/${row.assesmentId._id}?submissionId=${row._id}`,
          );
        } else {
          navigate(`/student/submissions/${row._id}`);
        }
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
