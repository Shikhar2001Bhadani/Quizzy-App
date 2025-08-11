import React from "react";
import { useHeading } from "../../../hooks";

function Header() {
  const { heading, subheading } = useHeading();

  return (
    <nav className="h-16 top-0 sticky border-b p-2 flex flex-col justify-center bg-white z-10">
      <h1 className="text-2xl font-bold">{heading}</h1>
      {subheading && <p className="text-sm text-gray-500">{subheading}</p>}
    </nav>
  );
}

export default Header;
