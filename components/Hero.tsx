/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div className="container px-10 mx-auto py-20 lg:flex flex-row items-center">
      <div className="lg:w-1/2">
        <img src="/image/starBox.svg" alt="" />
        <div className="lg:text-[80px] text-[42px] font-bold leading-[100px]">
          I Plan 📝, Build 🏗️, and Deploy 🚀 mobile Apps
        </div>
        <a href="https://cal.com/devpenzil/30min">
          <div className="py-4 mt-8 border-4 border-black w-[291px] bg-[#BAE6FF] text-[26px] font-semibold rounded-full text-center">
            Book a Call
          </div>
        </a>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center ">
        <div className="w-[512px] h-[512px] bg-red-300 flex justify-center items-center border-black border-4 relative shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
          <img
            src="/image/idea.svg"
            alt=""
            className="absolute -left-8 top-20"
          />
          <img
            src="/image/line.svg"
            alt=""
            className="absolute  right-3 -top-14"
          />
          <img
            src="/image/starRed.svg"
            alt=""
            className="absolute bottom-0 right-0 "
          />
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-[420px] h-[420px] object-cover border-black border-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
