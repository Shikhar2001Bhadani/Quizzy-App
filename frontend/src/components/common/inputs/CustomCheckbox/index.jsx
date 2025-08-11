import React from "react";

function CustomCheckbox({ id, value, onChange }) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={value}
      onChange={() => onChange(!value)}
    />
  );
}

export default CustomCheckbox;
