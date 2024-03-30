import ToolItem from "@/components/grids/TooItem";
import { techDoc } from "@/db/tools";
import { toolBoxItemType } from "@/types/db";
import React from "react";

function ToolBox() {
  return (
    <div className="w-2/3 mx-auto py-24">
      <div className="text-6xl font-semibold mb-10">Tech Dock</div>
      <div className="flex flex-wrap gap-4">
        {techDoc.map((obj: toolBoxItemType) => {
          return (
            <>
              <ToolItem name={obj.name} link={obj.link} />
            </>
          );
        })}
      </div>

      <div className="text-6xl font-semibold my-10">Table Tools</div>
      <div>k.hgj.hgk</div>
    </div>
  );
}

export default ToolBox;
