import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return {
    isVisible,
    toggle,
  };
};
