import Link from "next/link";
import React from "react";

function ProjectCover() {
  return (
    <Link href={"/blogs"}>
      <div className="h-full shadow-lg border rounded-2xl flex justify-center items-center "></div>
    </Link>
  );
}

export default ProjectCover;
