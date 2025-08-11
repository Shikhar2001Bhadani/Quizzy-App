import React from "react";
import { useHeading } from "../../../../hooks";
import { useParams } from "react-router-dom";
import { useGetSubmissionQuery } from "../../../../store/features/submissions/api";
import Loading from "../../../../components/common/Loading";
import StudentMetrics from "../../../../components/common/StudentMetrics";
import QuestionBreakdown from "../../../../components/common/QuestionBreakdown";
import { SubmissionTypes } from "../../../../types";

function SubmissionPage() {
  const { setHeading, setSubheading } = useHeading();
  const { id } = useParams();
  const { data, isLoading } = useGetSubmissionQuery(id, {
    skip: !id,
  });

  setHeading("Submission");
  setSubheading("You can view your score and feedback here.");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data.status === SubmissionTypes.COMPLETED && (
        <StudentMetrics data={data} />
      )}
      <QuestionBreakdown data={data} />
    </div>
  );
}

export default SubmissionPage;
