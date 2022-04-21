import React from "react";

function RightArrow({ props }) {
  return (
    <div>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.75 6.75L19.25 12L13.75 17.25"
          {...props}
        ></path>
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 12H4.75"
          {...props}
        ></path>
      </svg>
    </div>
  );
}

export default RightArrow;
