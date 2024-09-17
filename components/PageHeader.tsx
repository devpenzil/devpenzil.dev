import React from "react";

interface props {
  heading: string;
  label: string;
}

function PageHeader({ heading, label }: props) {
  return (
    <div>
      <div className="text-base font-bold text-teal-600 text-center">
        {label}
      </div>
      <div className="text-4xl font-bold text-center">{heading}</div>
    </div>
  );
}

export default PageHeader;
