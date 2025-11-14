import React, { FC } from "react";

interface Props {
  onSelect: (e: string) => void;
}

const WhichPart: FC<Props> = ({ onSelect }) => {
  return (
    <div className="w-full mt-8 bg-red-400 h-[500px] flex ">
      <div
        className="w-full h-full bg-green-700"
        onClick={() => {
          onSelect("code");
        }}
      ></div>
      <div
        className="w-full h-full bg-blue-700"
        onClick={() => {
          onSelect("ride");
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default WhichPart;
