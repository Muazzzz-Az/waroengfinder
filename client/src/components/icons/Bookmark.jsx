import React from "react";

export const Bookmark = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 3a2 2 0 0 0-2 2v16l8-4.5L20 21V5a2 2 0 0 0-2-2H6z"
    />
  </svg>
);
