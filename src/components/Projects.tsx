import React from "react";

function Projects() {
  return (
    <div className="w-full h-[600px] bg-white">
      <div className="container mx-auto py-12">
        <div className="text-center text-5xl font-bold">Selected Projects</div>
        <div className="flex flex-row justify-between mt-8">
          {[1, 2, 3].map((obj, index) => {
            return (
              <div className="w-1/3 p-4" key={index}>
                <div className="w-full h-[400px] bg-slate-200 cursor-pointer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
