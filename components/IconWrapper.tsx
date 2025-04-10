/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  iconName: string;
}

function IconWrapper({ iconName }: Props) {
  return (
    <div>
      <img src={iconName} alt="" />
    </div>
  );
}

export default IconWrapper;
