import React from "react";
import Github from "../assets/svg/Github";
import Linkedin from "../assets/svg/Linkedin";
import Instagram from "../assets/svg/Instagram";
import Twitter from "../assets/svg/Twitter";
function Footer() {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-100">
      <div className="container md:w-2/3 mx-auto ">
        <hr />
      </div>
      <div className="container md:w-2/3 mx-auto py-12 px-4 flex flex-col md:flex-row justify-between ">
        <div className="mt-2">
          <div className="space-x-4 flex">
            <a href="https://github.com/devpenzil">
              <Github fill="#fff" />
            </a>
            <a href="https://www.linkedin.com/in/devpenzil/">
              <Linkedin fill="#fff" />
            </a>
            <a href="https://instagram.com/devpenzil">
              <Instagram fill="#fff" />
            </a>
            <a href="https://twitter.com/devpenzil">
              <Twitter fill="#fff" />
            </a>
          </div>
        </div>
        <div className="mt-2">@ 2022 Devpenzil</div>
      </div>
    </div>
  );
}

export default Footer;
