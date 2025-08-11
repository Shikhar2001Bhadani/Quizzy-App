import React from "react";
import CustomButton from "../components/common/CustomButton";
import { useNavigate } from "react-router-dom";
import { useHeading } from "../hooks";

function NotFoundPage() {
  const navigate = useNavigate();
  const { setHeading, setSubheading } = useHeading();

  setHeading("404");
  setSubheading("Page not found");

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
      <div className="mt-4">
        <CustomButton onClick={handleClick}>Go to Home</CustomButton>
      </div>
    </div>
  );
}

export default NotFoundPage;
