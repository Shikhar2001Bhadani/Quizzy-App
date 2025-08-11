import React from "react";
import { Navigate } from "react-router-dom";

function TeacherHome() {
  return <Navigate to={"/teacher/dashboard"} replace={true} />;
}

export default TeacherHome;
