import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="container lg:w-2/3 mx-auto py-20 text-lg font-semibold font-SourGummy">
      <div>
        <Link href={"/"}>
          <div className="text-3xl font-semibold mb-8 flex items-center">
            <img src="/icons/back.svg" alt="" className="w-8 h-8" /> Projects
          </div>
        </Link>
        Update soon
      </div>
    </div>
  );
}

export default Projects;
