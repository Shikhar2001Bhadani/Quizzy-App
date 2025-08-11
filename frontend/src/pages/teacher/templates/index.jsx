import React from "react";
import { useHeading } from "../../../hooks";
import CustomTable from "../../../components/common/CustomTable";
import { templateColumns } from "./utils";
import { useTemplatesData } from "./hooks";
import CustomButton from "../../../components/common/CustomButton";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";

function TeacherTemplatesPage() {
  const navigate = useNavigate();
  const { setHeading, setSubheading } = useHeading();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");

  const { rows = [], actions = [] } = useTemplatesData();

  const handleClick = () => {
    navigate("/teacher/templates/create");
  };

  return (
    <div>
      <div className="mb-2">
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20} /> Create Template
        </CustomButton>
      </div>
      <CustomTable columns={templateColumns} data={rows} actions={actions} />
    </div>
  );
}

export default TeacherTemplatesPage;
