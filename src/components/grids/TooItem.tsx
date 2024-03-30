import { toolBoxItemType } from "@/types/db";
import Link from "next/link";
import React from "react";

function ToolItem({ name, link }: toolBoxItemType) {
  return (
    <a href="#">
      <div className="h-36 w-36 shadow-lg border rounded-2xl flex flex-col justify-center p-3 ">
        <div className="text-base font-semibold">{name}</div>
        <div className="text-xs text-gray-500 truncate">{link}</div>
      </div>
    </a>
  );
}

export default ToolItem;
