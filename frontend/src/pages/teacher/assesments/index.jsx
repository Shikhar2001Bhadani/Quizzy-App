import React from "react";
import { useHeading } from "../../../hooks";
import { assesmentColumns } from "./utils";
import { useAssesmentsData } from "./hooks";
import CustomTable from "../../../components/common/CustomTable";
import CustomButton from "../../../components/common/CustomButton";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TeacherAssesmentsPage() {
  const { setHeading, setSubheading } = useHeading();
  const navigate = useNavigate();

  setHeading("Assesments");
  setSubheading("Create and manage your assesments here");

  const { rows = [], actions = [] } = useAssesmentsData();

  const handleClick = () => {
    navigate("/teacher/assesments/create");
  };

  return (
    <div>
      <div className="mb-2">
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20} /> Create Assesment
        </CustomButton>
      </div>
      <CustomTable columns={assesmentColumns} data={rows} actions={actions} />
    </div>
  );
}

export default TeacherAssesmentsPage;
