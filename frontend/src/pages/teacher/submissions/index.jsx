import React from "react";
import { useHeading } from "../../../hooks";
import { submissionsColumns } from "./utils";
import { useSubmissionsData } from "./hooks";
import CustomTable from "../../../components/common/CustomTable";

function StudentSubmissionsPage() {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Submissions");
  setSubheading("View all submissions here");

  const { rows = [], actions = [] } = useSubmissionsData();

  return (
    <div>
      <CustomTable columns={submissionsColumns} data={rows} actions={actions} />
    </div>
  );
}

export default StudentSubmissionsPage;
