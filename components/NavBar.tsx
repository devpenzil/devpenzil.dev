/* eslint-disable @next/next/no-img-element */
import React from "react";

const NavBar = () => {
  return (
    <div className="py-14 border-b-[6px] border-black">
      <img
        src="/image/starOne.svg"
        alt=""
        className="absolute -right-[0px] -top-10"
      />
      <div className="container px-10 mx-auto bg-white border-[4px] border-black flex flex-row justify-between h-[70px] items-center">
        <div className="text-[36px] font-semibold ml-6">Ajo</div>
        <div className="flex">
          <a href="#services">
            <div className="px-4 cursor-pointer border-l-[4px] border-black text-[24px] h-[70px] flex justify-center items-center font-semibold">
              🤝 Service
            </div>
          </a>
          <a href="#projects">
            <div className="px-4 cursor-pointer border-l-[4px] border-black text-[24px] h-[70px] flex justify-center items-center font-semibold">
              🎯 Projects
            </div>
          </a>
          <a href="#blogs">
            <div className="px-4 cursor-pointer border-l-[4px] border-black text-[24px] h-[70px] flex justify-center items-center font-semibold">
              ✍️ Blogs
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
