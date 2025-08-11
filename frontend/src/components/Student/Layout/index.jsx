import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../store/features/common/commonSlice";
import Header from "../Header";
import StudentSidebar from "../Sidebar";

function StudentLayout() {
  const { isSidebarOpen } = useSelector(commonSelector);

  return (
    <div className="h-screen w-screen flex">
      <aside
        className={`${
          isSidebarOpen ? "w-52" : "w-15"
        } h-full border-r transition-all`}>
        <StudentSidebar />
      </aside>

      <main className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="p-2 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default StudentLayout;
