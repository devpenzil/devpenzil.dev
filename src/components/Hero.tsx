import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.to("#h1", {
  //     scrollTrigger: {
  //       trigger: "#hero",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //     yPercent: 20,
  //     scale: 1.2,
  //     opacity: 0,
  //   });
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <div className="lg:h-[600px] h-[400px]  " id="hero">
      <div
        className="container mx-auto lg:text-7xl text-3xl font-bold h-full flex flex-col justify-center items-center"
        id="h1"
      >
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
