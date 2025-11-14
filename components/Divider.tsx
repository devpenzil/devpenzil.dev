import React, { FC } from "react";

interface Props {
  title: string;
}

const Divider: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-row items-center py-8 gap-3">
      <div className="h-px bg-black w-full" />
      <div className="whitespace-nowrap">{title}</div>
      <div className="h-px bg-black w-[200px]" />
    </div>
  );
};

export default Divider;
