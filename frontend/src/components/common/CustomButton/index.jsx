import React from "react";

function CustomButton({ children, className, ...props }) {
  return (
    <button
      className={`${className} flex items-center gap-1 p-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}>
      {children}
    </button>
  );
}

export default CustomButton;
