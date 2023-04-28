import React from "react";

function Footer() {
  return (
    <div className="h-[600px] w-full text-white py-16">
      <div className="marquee text-5xl">
        <div className="marquee__inner" aria-hidden="true">
          <span className="text-white"> Get in touch </span>
          <span className="text-red-500"> . </span>
          <span className="outlineText"> Get in touch </span>
          <span className="text-red-500"> . </span>
          <span className="text-white w-fit"> Get in touch </span>
          <span className="text-red-500">.</span>
          <span className="outlineText"> Get in touch </span>
          <span className="text-red-500"> . </span>
          <span className="text-white"> Get in touch </span>
          <span className="text-red-500">.</span>
          <span className="outlineText"> Get in touch </span>
          <span className="text-red-500">.</span>
          <span className="outlineText"> Get in touch </span>
          <span className="text-red-500">.</span>
          <span className="outlineText"> Get in touch </span>
        </div>
      </div>
      <div className="container mx-auto min-h-[400px] flex flex-col justify-center items-center">
        <div>Want to connect</div>
        <div className="text-9xl font-bold mt-2">twitter.com/devpenzil</div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
