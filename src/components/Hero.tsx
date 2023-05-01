import React from "react";

function Hero() {
  return (
    <div className="h-[600px] ">
      <div className="container mx-auto text-7xl font-bold h-full flex flex-col justify-center items-center">
        <div className="my-2">
          <span className="outlineText">Hi, I'm</span>{" "}
          <span className="text-white">Ajo</span>
          <span className="text-red-500">.</span>
        </div>
        <div className="my-2 outlineText">React Native Engineer</div>
        <div className="my-2">
          <span className="outlineText">@</span>{" "}
          <span className="text-white">
            <a href="https://www.neoito.com/">Neoito</a>
          </span>{" "}
          <span className="text-red-500">.</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
