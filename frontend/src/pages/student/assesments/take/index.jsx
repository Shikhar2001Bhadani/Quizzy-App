import React from "react";
import { useParams } from "react-router-dom";
import { useGetAssesmentQuery } from "../../../../store/features/assesments/api";
import Loading from "../../../../components/common/Loading";
import { useHeading } from "../../../../hooks";
import Progress from "../../../../components/Student/TakeAssesment/Progress";
import AssesmentQuestion from "../../../../components/Student/TakeAssesment/AssesmentQuestion";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";

function TakeAssesmentPage() {
  const { setHeading, setSubheading } = useHeading();
  const { title, description } = useSelector(assesmentsSelector);
  setHeading(title || "Take Assesment");
  setSubheading(description);

  const { id } = useParams();
  const { isLoading } = useGetAssesmentQuery(id, {
    skip: !id,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex h-full">
      <AssesmentQuestion />
      <Progress />
    </div>
  );
}

export default TakeAssesmentPage;
