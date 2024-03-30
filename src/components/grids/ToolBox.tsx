import Link from "next/link";
import React from "react";

function ToolBox() {
  return (
    <Link href={"/toolbox"}>
      <div className="h-36 shadow-lg p-4 border rounded-2xl flex justify-center items-center ">
        ToolBox
      </div>
    </Link>
  );
}

export default ToolBox;
