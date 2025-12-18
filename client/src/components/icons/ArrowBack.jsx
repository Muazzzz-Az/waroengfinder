import React from "react";

export const ArrowBack = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.707 4.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 1 0 1.414-1.414L7.414 13H20a1 1 0 1 0 0-2H7.414l5.293-5.293a1 1 0 0 0 0-1.414z"
    />
  </svg>
);
