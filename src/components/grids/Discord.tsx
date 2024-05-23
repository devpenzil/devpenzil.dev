/* eslint-disable @next/next/no-img-element */
import React from "react";

function Discord() {
  return (
    <div className="h-36 shadow-lg p-4 border rounded-2xl bg-[	#7289da10] flex flex-col justify-center ">
      <img src="/discord.svg" alt="" className="w-7 h-7 rounded-lg" />
      <div className="text-xs text-gray-400 mt-1">chat with me</div>
      <a href="https://discord.gg/Yb3zksMb">
        <div className="bg-[#7289da] w-24 h-8 rounded-md flex justify-center items-center text-xs text-white mt-2 cursor-pointer ">
          Message
          <span className="animate-ping inline-flex h-2 w-2 rounded-full ml-4 bg-white "></span>
        </div>
      </a>
    </div>
  );
}

export default Discord;
