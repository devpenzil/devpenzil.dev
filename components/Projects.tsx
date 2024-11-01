/* eslint-disable @next/next/no-img-element */
import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-10">
      <div className="flex flex-row justify-center items-center">
        <div className="text-[80px] font-semibold">My Projects ️</div>
        <img src="/image/StarBoxBlue.svg" alt="" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-20 mt-20">
        <div className="bg-white border-4 border-black p-16 aspect-square">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-2/3 w-full object-cover border-4 border-black"
          />
          <div className="h-1/3 flex flex-col justify-center">
            <div className="text-[36px] font-semibold">Portfolio design</div>
            <div className="text-[24px]">
              UI design - User research - webflow develop
            </div>
          </div>
        </div>
        <div className="bg-white border-4 border-black p-16 aspect-square">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-2/3 w-full object-cover border-4 border-black"
          />
          <div className="h-1/3 flex flex-col justify-center">
            <div className="text-[36px] font-semibold">Portfolio design</div>
            <div className="text-[24px]">
              UI design - User research - webflow develop
            </div>
          </div>
        </div>
        <div className="bg-white border-4 border-black p-16 aspect-square">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-2/3 w-full object-cover border-4 border-black"
          />
          <div className="h-1/3 flex flex-col justify-center">
            <div className="text-[36px] font-semibold">Portfolio design</div>
            <div className="text-[24px]">
              UI design - User research - webflow develop
            </div>
          </div>
        </div>
        <div className="bg-white border-4 border-black p-16 aspect-square">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-2/3 w-full object-cover border-4 border-black"
          />
          <div className="h-1/3 flex flex-col justify-center">
            <div className="text-[36px] font-semibold">Portfolio design</div>
            <div className="text-[24px]">
              UI design - User research - webflow develop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
