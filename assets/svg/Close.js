import React from "react";

function Close(props) {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          strokeWidth="2"
          d="M7,7 L17,17 M7,17 L17,7"
          {...props}
        />
      </svg>
    </>
  );
}

export default Close;
