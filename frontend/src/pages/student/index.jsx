import React from "react";
import { Navigate } from "react-router-dom";

function StudentHome() {
  return <Navigate to={"/student/dashboard"} replace={true} />;
}

export default StudentHome;
