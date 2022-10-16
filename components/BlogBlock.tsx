import React from "react";
import { blogs } from "../data/blogs";
function BlogBlock() {
  return (
    <div className="flex w-full  h-[280px]  ">
      {blogs.map(() => {
        return (
          <div className="h-full min-w-[200px] bg-red-200 mr-4 rounded-[40px] p-6">
            hbj
          </div>
        );
      })}
    </div>
  );
}

export default BlogBlock;
