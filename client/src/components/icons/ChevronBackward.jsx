import React from "react";

export const ChevronBackward = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.707 4.293a1 1 0 0 0-1.414 0L8.586 10l5.707 5.707a1 1 0 1 0 1.414-1.414L11.414 10l4.293-4.293a1 1 0 0 0 0-1.414z"
    />
  </svg>
);
