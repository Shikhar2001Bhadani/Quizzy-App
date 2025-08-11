import React from "react";

function CustomTextArea({
  id = "custom-input",
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id={id}
      className={`${className} w-full border p-1 rounded-md resize-none`}
      rows={3}
      {...props}
    />
  );
}

export default CustomTextArea;
