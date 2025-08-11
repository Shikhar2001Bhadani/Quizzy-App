import React from "react";
import { useHeading } from "../../../hooks";
import { assesmentColumns } from "./utils";
import { useAssesmentsData } from "./hooks";
import CustomTable from "../../../components/common/CustomTable";

function StudentAssesmentsPage() {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Assesments");
  setSubheading("Take and manage your assesments here");

  const { rows = [], actions = [] } = useAssesmentsData();

  return (
    <div>
      <CustomTable columns={assesmentColumns} data={rows} actions={actions} />
    </div>
  );
}

export default StudentAssesmentsPage;
