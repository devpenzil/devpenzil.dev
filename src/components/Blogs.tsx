import React from "react";
import Medium from "./grids/Medium";
import Hashnode from "./grids/Hashnode";
import ReadMore from "./grids/ReadMore";
import BlogCover from "./grids/BlogCover";
import ProjectCover from "./grids/ProjectCover";

function Blogs() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-2 row-span-4">
        <BlogCover />
      </div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-2">
        <ProjectCover />
      </div>
      <div className="col-span-3 col-start-3 row-start-1">
        <Medium />
      </div>
      <div className="col-span-3 col-start-1 row-start-5">
        <Hashnode />
      </div>
      <div className="row-span-3 col-start-3 row-start-2">
        <div className="w-full h-full  bg-[url('/cover.jpg')] bg-cover shadow-lg p-4 border rounded-2xl" />
      </div>
    </div>
  );
}

export default Blogs;
