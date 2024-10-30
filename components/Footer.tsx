import React from "react";
import Spacer from "./Spacer";
import Link from "next/link";

function Footer() {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-5 gap-4">
        <div>
          <div className=" font-semibold uppercase">General</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Project </Link>
            <Link href={"/blogs"}>Blog</Link>
          </div>
        </div>
        <div>
          <div className=" font-semibold uppercase">Social</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <a href={"https://www.linkedin.com/in/devpenzil/"}>Linkedin</a>
            <Link href={"https://github.com/devpenzil/"}>Github</Link>
            <Link href={"https://peerlist.io/devpenzil"}>Peerlist</Link>
            <Link href={"https://x.com/devpenzil"}>Twitter</Link>
          </div>
        </div>
        <div>
          <div className=" font-semibold uppercase">Specifics</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/stats"}>Stats</Link>
            <Link href={"/"}>Toolbox </Link>
          </div>
        </div>
        <div>
          <div className=" font-semibold uppercase"> Extra</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/resume"}>Resume</Link>
            <Link href={"/sponsor"}>Sponsor</Link>
          </div>
        </div>
      </div>
      <Spacer gap="h-20" />
    </div>
  );
}

export default Footer;
