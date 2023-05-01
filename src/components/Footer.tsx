import React from "react";

function Footer() {
  return (
    <div className=" w-full text-white py-16" id="footer">
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
        <div className="lg:text-9xl md:text-4xl font-bold mt-2">
          <a href="https://twitter.com/devpenzil">twitter.com/devpenzil</a>
        </div>
        <div className="flex flex-row gap-8 mt-8 font-extralight">
          <div>
            <a href="https://www.linkedin.com/in/devpenzil/">Linkedin</a>
          </div>
          <div>
            <a href="https://github.com/devpenzil">Github</a>
          </div>
          <div>
            <a href="https://www.instagram.com/devpenzil/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
