import React from "react";
import CustomDropdown from "../../CustomDropdown";
import { ChevronDown } from "lucide-react";
import { CheckIcon } from "lucide-react";

function CustomDropdownInput({ value = "", options = [], onChange }) {
  const handleClick = (option) => {
    onChange(option.id);
  };

  return (
    <CustomDropdown
      trigger={
        <div className="flex items-center justify-between w-full border p-1 rounded-sm text-sm">
          {options.find((option) => option.id === value)?.label ?? value ?? ""}
          <ChevronDown className="text-gray-500" />
        </div>
      }>
      <div className="w-full">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleClick(option)}
            className="flex items-center gap-2 p-1 text-sm cursor-pointer hover:bg-gray-100 rounded-sm">
            {value === option.id && <CheckIcon size={16} />}
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </CustomDropdown>
  );
}

export default CustomDropdownInput;
