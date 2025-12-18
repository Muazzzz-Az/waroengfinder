import React from "react";

export const Search = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 3a7 7 0 1 0 4.9 11.9l4.1 4.1a1 1 0 0 0 1.4-1.4l-4.1-4.1A7 7 0 0 0 10 3zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 10 5z"
    />
  </svg>
);
