/* eslint-disable @next/next/no-img-element */
import React from "react";

const NavBar = () => {
  return (
    <div className="py-14 border-b-[6px] border-black">
      <img
        src="/image/starOne.svg"
        alt=""
        className="fixed -right-[80px] -top-10"
      />
      <div className="container px-10 mx-auto bg-white border-[4px] border-black flex flex-row justify-between h-[70px] items-center">
        <div className="text-[36px] font-semibold ml-6">Ajo</div>
        <div className="flex">
          <div className="px-4 cursor-pointer border-l-[4px] border-black text-[24px] h-[70px] flex justify-center items-center font-semibold">
            🎯 Projects
          </div>
          <div className="px-4 cursor-pointer border-l-[4px] border-black text-[24px] h-[70px] flex justify-center items-center font-semibold">
            ✍️ Blogs
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
