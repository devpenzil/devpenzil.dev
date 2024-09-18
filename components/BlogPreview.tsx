import Link from "next/link";
import React from "react";

function BlogPreview() {
  return (
    <div>
      <div className="text-3xl font-semibold">
        I love to share my knowledge through writing.
      </div>
      <div className="text-sm mt-4">
        Check out a few of my most recent publishing.
      </div>
      <div className="flex flex-row gap-3 mt-4">
        {[1, 2, 3].map((obj) => {
          return (
            <div key={obj} className="w-1/3">
              <div className=" h-80 bg-teal-500 rounded-md"></div>
              <div className="text-2xl  font-semibold">Lorem Ipsum</div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-4">
        <a href="#">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            Read my Blogs
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogPreview;
