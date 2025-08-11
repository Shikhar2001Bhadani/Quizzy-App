import React from "react";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../store/features/common/selectors";

function SidebarButton({ onClick, icon, label }) {
  const { isSidebarOpen } = useSelector(commonSelector);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md">
        <span>{icon}</span>
        {isSidebarOpen && label}
      </div>
    </div>
  );
}

export default SidebarButton;
