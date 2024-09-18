import React from "react";

interface Props {
  gap: string;
}
function Spacer({ gap }: Props) {
  return <div className={gap}></div>;
}

export default Spacer;
