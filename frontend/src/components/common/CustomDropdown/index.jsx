import Tippy from "@tippyjs/react";
import React from "react";
import "tippy.js/dist/tippy.css";

function CustomDropdown({ trigger, children }) {
  return (
    <div className="relative w-full">
      <Tippy
        interactive={true}
        placement="bottom-start"
        trigger="click"
        arrow={false}
        className="!bg-white !text-black border rounded-md shadow-md !w-full !max-w-full"
        content={children}>
        {trigger}
      </Tippy>
    </div>
  );
}

export default CustomDropdown;
