import { blogs } from "@/data/blogs";
import React from "react";

function Blog() {
  return (
    <div className="min-h-[600px] bg-white w-full md:px-8" id="blogs">
      <div className="container mx-auto py-16">
        <div className="text-center text-5xl font-bold">Latest Blogs</div>
        <div className="flex justify-between mt-8 w-full flex-row overflow-scroll">
          {blogs.map((obj, index) => {
            return (
              <div key={index} className=" lg:w-[31%] h-[400px]">
                <a href={obj.link}>
                  <div
                    className="w-full h-full bg-gray-50 rounded bg-cover bg-center bg-no-repeat flex flex-col justify-end"
                    style={{
                      backgroundImage: `url("${obj.image}")`,
                    }}
                  >
                    <div className="text-4xl text-black font-semibold w-full bg-slate-100 p-4">
                      {obj.name}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="border px-4 py-2 border-black cursor-pointer text-xl font-semibold hover:bg-black hover:text-white">
            <a href="https://devpenzil.medium.com/">Read Blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
